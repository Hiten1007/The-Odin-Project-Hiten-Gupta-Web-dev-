let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const roundResult = document.querySelector("#roundResult");
const score = document.querySelector("#score");

updateScore();

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceindex = Math.floor(Math.random() * choices.length);
    return choices[choiceindex];
}

function playRound(playerChoice){
    let computerchoice = getComputerChoice();
    if((computerchoice === "Paper" && playerChoice === "Rock") || (computerchoice === "Scissors" && playerChoice === "Paper") || (computerchoice === "Rock" && playerChoice === "Scissors")){
        computerScore++;
        roundResult.textContent = `You lose! ${computerchoice}  beats  ${playerChoice}   `;  
    }
    else if((playerChoice === "Paper" && computerchoice === "Rock") || (playerChoice === "Scissors" && computerchoice === "Paper") || (playerChoice === "Rock" && computerchoice === "Scissors")){
        playerScore++;
        roundResult.textContent = `You win!  ${playerChoice} beats  ${computerchoice}   `;  
    }
    else{
        roundResult.textContent =  `Ohh u both drew ${playerChoice}!!!  `;
    }
    updateScore();
    checkForWinner();
}

function updateScore(){
    const scoreText = `Player Score : ${playerScore} | Computer Score : ${computerScore}  `;
    score.textContent = scoreText;
}

function checkForWinner(){
    if(playerScore == scoreToWin){
        result.textContent = 'Congratulations!! You beat the computer   ';
        resetGame();
    }
    else if(computerScore == scoreToWin){
        result.textContent = 'Sorry! You lost  ';
        resetGame();
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));
