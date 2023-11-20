// HTML buttons

const aboveScreen = document.getElementById("aboveScreen");
const belowScreen = document.getElementById("belowScreen");
const buttons = document.querySelectorAll(".button");

// Arrays

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];

// Events functions

writeAboveScreen = (value) => (aboveScreen.innerText = value);
deleteLastDigit = () =>
  (belowScreen.innerText = belowScreen.innerText.slice(0, -1));
clearScreen = (screen) => (screen.innerText = "");

function writeBelowScreen(value) {
  if (["Backspace", "Delete"].includes(value) && belowScreen.innerText !== "") {
    deleteLastDigit();
  } else if (operators.includes(value)) {
    writeAboveScreen(belowScreen.innerText + " " + value);
    clearScreen(belowScreen);
  } else if (["Enter", "="].includes(value)) {
    let count = `${aboveScreen.innerText} ${belowScreen.innerText}`;
    clearScreen(aboveScreen);
    clearScreen(belowScreen);
    belowScreen.innerText = calculate(count);
  } else if (numbers.includes(value)) {
    belowScreen.innerText += value;
  } else if (value == "Clear") {
    clearScreen(aboveScreen);
    clearScreen(belowScreen);
  }
}

// Event listeners

window.onkeydown = (e) => writeBelowScreen(e.key);
buttons.forEach(
  (btn) => (btn.onclick = (e) => writeBelowScreen(e.target.innerText))
);

// Functions

function calculate(string) {
  let arr = string.split(" ");
  let a = +arr[0];
  let operator = arr[1];
  let b = +arr[2];

  if (operator == "+") return a + b;
  else if (operator == "-") return a - b;
  else if (operator == "*") return a * b;
  else if (operator == "/") return a / b;
}
