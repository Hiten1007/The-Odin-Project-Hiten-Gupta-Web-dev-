const button = document.querySelector("#btn");
const container = document.querySelector(".container");
const input = document.querySelector("#num");
const clear = document.querySelector("#clear");
const random = document.querySelector("#colour");
const defaultColour = document.querySelector("#default");
const transparent = document.querySelector("#darker");

const head = document.querySelector("#head");
head.style.cssText = `text-align : center; color :#667292`;

let value = 16;
let enableRandomColour = false;
let enableDarker = false;


function createGrid(value) {
    if (value < 1) {
        value = 1;
    } else if (value > 100) {
        value = 100;
    } else if (!Number.isInteger(value)) {
        value = Math.floor(value);
    }

    container.style.width = "480px";
    container.style.margin = "auto";
    const boxSize = 480/value;
    
    for (let i = 0; i < value; i++) {
        const columns = document.createElement("div");
        for (let j = 0; j < value; j++) {
            const div = document.createElement("div");
            div.style.cssText = `border: 1px solid black; padding : ${boxSize}px; background-color:white`;
            div.dataset.interactions = "0";
            div.classList.add("box");
            columns.appendChild(div);
        }
        columns.style.display = "flex";
        columns.style.flexDirection = "column";
        container.appendChild(columns);
    }
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "center";

    updateHoverEffects();
}

function updateHoverEffects(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.removeEventListener("mouseover", mouseOverRandom);
        box.removeEventListener("mouseover", mouseOverDefault);
        box.removeEventListener("mouseover", mouseOverDarker);

        if(enableRandomColour){
            box.addEventListener("mouseover", mouseOverRandom);
        }
        else if(enableDarker){
            box.addEventListener("mouseover", mouseOverDarker);
        }
        else{
            box.addEventListener("mouseover", mouseOverDefault);
        }
    });
}

function mouseOverRandom(event){
    event.target.style.backgroundColor = getRandomColour();
}

function mouseOverDefault(event){
    event.target.style.backgroundColor = "#FF8C00";
}

function mouseOverDarker(event){
    let square = event.target;
    let interactions = parseInt(square.dataset.interactions, 10);
    interactions = Math.min(interactions + 1, 10);

    let currentbackground = window.getComputedStyle(square).backgroundColor;
    let rgb = currentbackground.match(/\d+/g);

    if(rgb){
        let [r, g, b] = rgb.map(Number);

    r = Math.max(r - (r/(10 - interactions + 1)), 0);
    g = Math.max(g - (g/(10 - interactions + 1)), 0);
    b = Math.max(b - (b/(10 - interactions + 1)), 0);

    square.style.backgroundColor = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
    }
    square.dataset.interactions = interactions;
}
function clearGrid() {
    container.textContent = '';
}

function getRandomColour() {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function RandomColour(){
    enableRandomColour = true;
    updateHoverEffects();
}

function Darker(){
    enableRandomColour = false;
    enableDarker = true;
    updateHoverEffects();
}

function Default(){
    enableRandomColour = false;
    enableDarker = false;
    updateHoverEffects();
}

clear.addEventListener("click", () => {
    clearGrid();
    createGrid(parseInt(input.value, 10));
});

button.addEventListener("click", () => {
    clearGrid();
    const newSize = parseInt(input.value, 10);
    createGrid(newSize);
});

random.addEventListener("click", RandomColour);

transparent.addEventListener("click", Darker);

defaultColour.addEventListener("click", Default);

createGrid(16);