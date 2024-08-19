let firstoperator = null;
let firstoperand = null;
let secondoperand = null;
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".num");
const decimalBtn = document.querySelector("#decimal");
const equalBtn = document.querySelector("#equals")
const operatorButtons = document.querySelectorAll(".operator");
const signBtn = document.querySelector("#sign");
const buttonbtn = document.querySelectorAll(".button");
let sflag = 0;
let dflag = 0;

const clearbtn = document.querySelector("#clear");

display.textContent = "0";

function operate(firstoperand, firstoperator, secondoperand){
    let value;
    switch (firstoperator) {
    case "+" :
        value = firstoperand + secondoperand;
        break;
    case "-" :
        value = firstoperand - secondoperand;
        break;
    case "*" :
        value = firstoperand * secondoperand;
        break;
    case "/" :
        value = secondoperand == "0" ? "Error" : firstoperand/secondoperand;
        break;
    case "^" :
        if (firstoperand < 0 && secondoperand % 1 !== 0) {
            value = "Error"; 
        } else {
            value = Math.pow(firstoperand, secondoperand);
        }
        break;
    case "%" :
        value = firstoperand*secondoperand/100;
        break;
    default :
        value = "Error";
        break;
    }
    value = typeof value === 'number' ? parseFloat(value.toFixed(4)) : value;
    updateDisplay(value);
    return typeof value === 'number' ? parseFloat(value.toFixed(4)) : value;
}

function clear(){
    display.textContent = '0';
    sflag = 0;
    dflag = 0;
    firstoperand = null;
    secondoperand = null;
    firstoperator = null;
}

function updateDisplay(value){
    display.textContent = value.toString();
}

function UPdisplay(number){
    let currentDisplay = display.textContent;
    if(currentDisplay === '0' || sflag === 1){
        updateDisplay(number);
        dflag = 0;
        sflag = 0;
    }
    else if(currentDisplay.length == 15){
        return;
    }
    else{
        updateDisplay(currentDisplay + number);
    }
}

numberButtons.forEach(button => {
    if(display.textContent === "Error") clear();
    button.addEventListener("click", () => {
        UPdisplay(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () =>{
        if(display.textContent === "Error") clear();
        if(firstoperand == null){
            firstoperand = parseFloat(display.textContent);
        }
        else if(firstoperand != null && sflag === 0){
            secondoperand = parseFloat(display.textContent);
            firstoperand = operate(firstoperand, firstoperator, secondoperand);
        }
        firstoperator = button.textContent;
        sflag = 1;
        dflag = 0;
    })
})

equalBtn.addEventListener("click", () =>{
    if(display.textContent === "Error") clear();
    if(firstoperand !== null && firstoperator !== null){
    secondoperand = parseFloat(display.textContent);
    firstoperand = operate(firstoperand, firstoperator, secondoperand);
    firstoperator = null;
    sflag = 1;
    }
})

decimalBtn.addEventListener("click", () =>{
    let currentDisplay = display.textContent;

    if (dflag === 0) {
        if (!currentDisplay.includes(".")) {
            updateDisplay(currentDisplay + ".");
        }
        else if (currentDisplay === '0') {
            updateDisplay("0.");
        }
        dflag = 1;
    }
})

signBtn.addEventListener("click", () => {
    let currentDisplay = parseFloat(display.textContent);
    currentDisplay *= -1;
    updateDisplay(currentDisplay);
    if(firstoperand == -1*currentDisplay){
        firstoperand = currentDisplay;
    }
})

buttonbtn.forEach(button => {
    button.addEventListener("click", function(e) {
        let originalColor = window.getComputedStyle(e.target).backgroundColor;
        let lightColor = lightenColor(originalColor, 0.2);
        e.target.style.backgroundColor = lightColor;

        setTimeout(() => {
            e.target.style.backgroundColor = originalColor;
        }, 200); 
    });
});

function lightenColor(color, amount) {
    let colorArray = color.match(/\d+/g).map(Number);
    let [r, g, b] = colorArray;
    r = Math.max(0, r + (r * amount));
    g = Math.max(0, g + (g * amount));
    b = Math.max(0, b + (b * amount));
    return `rgb(${r}, ${g}, ${b})`;
}

 
clearbtn.addEventListener("click", clear);

