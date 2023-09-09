// HTML buttons

const display = document.getElementById("display");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divisionBtn = document.getElementById("divisionBtn");
const equalBtn = document.getElementById("equalBtn");
const decimalBtn = document.getElementById("decimalBtn");

// Functions

display.innerText = "Pepe";

function calculate(string) {
  let arr = string.split(" ");

  if (arr[1] == "+") return +arr[0] + +arr[2];
  else if (arr[1] == "-") return +arr[0] + +arr[2];
  else if (arr[1] == "*") return +arr[0] + +arr[2];
  else if (arr[1] == "/") return +arr[0] + +arr[2];
}
