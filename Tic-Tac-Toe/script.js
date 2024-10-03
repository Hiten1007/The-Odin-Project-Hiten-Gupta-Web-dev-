const player = (function (){
    const playerFactory = (name, sign, score) => {
        return {name, sign, score};
    };

    let player1;
    let player2;

    function setPlayer(player, i){
        i === 1 ? player1 = player : player2 = player;
    }

    function getPlayer(i){
        return i === 1 ? player1 : player2;
    }

    return {playerFactory, setPlayer, getPlayer}
})();

const Game = (function() {
    let gameOver = false;
    let activeplayer;
    let arr = ["", "", "", "", "", "", "", "", ""]; 
    function getBoard() {
        return arr;
    }

    function getActivePlayer() {
        return activeplayer;
    }

    function switchPlayer() {
        activeplayer = (activeplayer === player.getPlayer(1)) ? player.getPlayer(2) : player.getPlayer(1);
        updateTurnDisplay();
    }

    function isGameOver() {
        return gameOver;
    }


    function setGameOver() {
        gameOver = true;
    }

    function resetBoard() {
        arr = ["", "", "", "", "", "", "", "", ""];
        gameOver = false;
        activeplayer = player.getPlayer(1);
        updateTurnDisplay();
        document.querySelectorAll(".box").forEach(box => box.textContent = ""); 
    }

    function createDisplay() {
        const layout = document.querySelector(".layout"); 
        display.hideMenu();
        activeplayer = player.getPlayer(1);

        const scores = document.createElement("div");

        for(let i = 0; i < 3; i++){
            const score = document.createElement("div");
            score.classList.add("scores");
            score.textContent = "0";
            score.setAttribute("id", "score" + i);
            scores.appendChild(score);
        }
        layout.appendChild(scores);

        const turn = document.createElement("div");
        turn.classList.add("turn");
        turn.textContent = `${activeplayer.name}'s turn`; 
        turn.style = "margin : 2px; padding : 2px;"

        layout.appendChild(turn);

        const boxes = document.createElement("div");
        for (let i = 0; i < 9; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.setAttribute('id', i);
            box.addEventListener("click", (e) => {
                getIndex(e);
            });
            box.style = "display: flex; justify-content: center; align-items: center; border-style: solid; border-color: black; padding: 3rem; font-size: 2rem; box-sizing: border-box;";
            boxes.appendChild(box);
        }

        boxes.style = "display: grid; grid-template-columns: repeat(3, 1fr); margin:0 30rem; border-style : solid; border-color : black; ";
        layout.appendChild(boxes);


        const bar = document.createElement("div");


        const newGame = document.createElement("button");
        newGame.textContent = "New Game";
        newGame.addEventListener("click", () => {
            resetBoard();
        })
        newGame.classList.add("navbtn")
        bar.appendChild(newGame);

        const mainmenu = document.createElement("button");
        mainmenu.textContent = "Main Menu";
        mainmenu.addEventListener("click", () => {
            resetBoard();
            layout.textContent = "";
            display.showMenu();
        })

        mainmenu.classList.add("navbtn")
        bar.appendChild(mainmenu);
        
        const resetScore = document.createElement("button");
        resetScore.textContent = "Reset Score";
        resetScore.addEventListener("click", () =>{
            player.getPlayer(1).score = 0;
            player.getPlayer(2).score = 0;
            updateScore();
            const drawCount = document.querySelector("#score1");
            drawCount.textContent = "0";
        })
        resetScore.classList.add("navbtn");
        bar.appendChild(resetScore);
        bar.classList.add("navbar");

        layout.appendChild(bar);
    }

    function getIndex(e) {
        if (e.target.textContent === "" && !gameOver) {
            const activePlayer = getActivePlayer();
            e.target.textContent = activePlayer.sign;
            e.target.style.fontSize = "2rem";  
            e.target.style.padding = "1.8rem";  
            const index = e.target.id;
            arr[index] = activePlayer.sign;
            gameController.play(index); 
        }
    }

    function updateTurnDisplay() {
        const turn = document.querySelector(".turn");
        turn.textContent = `${activeplayer.name}'s turn`;  
    }

    function updateScore(){
        const score1 = document.querySelector("#score0");
        const score2 = document.querySelector("#score2");

        score1.textContent = player.getPlayer(1).score;
        score2.textContent = player.getPlayer(2).score;
    }

    return { getActivePlayer, switchPlayer, isGameOver, setGameOver, resetBoard, createDisplay, getIndex, updateTurnDisplay, getBoard, updateScore};
})();

const gameController = (function() {
    function play(index) {
        const arr = Game.getBoard();
        const gameOver = board.checkForWinner(arr);

        if (gameOver) {
            const turn = document.querySelector(".turn");
            turn.textContent = `${Game.getActivePlayer().name} wins`; 
            Game.getActivePlayer().score++;
            Game.updateScore();
            Game.setGameOver();

        } else if (board.checkDraw(arr)) {
            const turn = document.querySelector(".turn");
            turn.textContent = "Its a draw";

            const drawcount = document.querySelector("#score1");
            let x = parseInt(drawcount.textContent);
            drawcount.textContent = x + 1;

            Game.setGameOver();
        } else {
            Game.switchPlayer();  
        }
    }

    return { play };
})();

const board = (function() {
    function checkForWinner(arr) {
        const winCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winCombos) {
            const [a, b, c] = combo;
            if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
                return true; 
            }
        }
        return false;  
    }

    function checkDraw(arr) {
        return arr.every(cell => cell !== "");  
    }

    return { checkForWinner, checkDraw };
})();

const display = (function() {
    const startButton = document.querySelector(".start");
    const menu = document.querySelector(".menu");
    const layout = document.querySelector(".layout");

    function showMenu(){
        menu.style.display = "block";
        layout.style.display = "none";
    }

    function hideMenu(){
        menu.style.display = "none";
        layout.style.display = "block";
    }

    function start() {
        startButton.addEventListener("click", () => {
            const player1Name = document.querySelector("#player1").value || "Player 1";
            const player2Name = document.querySelector("#player2").value || "Player 2";

            player.setPlayer(player.playerFactory(player1Name, "X", 0), 1);
            player.setPlayer(player.playerFactory(player2Name, "O", 0), 2);

            Game.createDisplay();
        });
    }

    return { start, showMenu, hideMenu };
})();

display.start();