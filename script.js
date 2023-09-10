// HTML buttons

const aboveScreen = document.getElementById("aboveScreen");
const belowScreen = document.getElementById("belowScreen");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divisionBtn = document.getElementById("divisionBtn");
const equalBtn = document.getElementById("equalBtn");
const decimalBtn = document.getElementById("decimalBtn");

// Event listeners

window.addEventListener("keydown", writeScreen());

// Functions

writeScreen;

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
