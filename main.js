const display = document.querySelector(".display");

let num1 = "",
  num2 = "";
let operator = null;

const formatNumber = (num) => {
  return num.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const addNumber = (num) => {
  if (!operator) {
    num1 += num;
    display.innerHTML = formatNumber(num1);
  } else {
    num2 += num;
    display.innerHTML = formatNumber(num2);
  }
};

const addDecimal = () => {
  if (!operator) {
    if (!num1.includes(".")) {
      num1 += num1 ? "." : "0.";
      display.innerHTML = formatNumber(num1);
    }
  } else {
    if (!num2.includes(".")) {
      num2 += num2 ? "." : "0.";
      display.innerHTML = formatNumber(num2);
    }
  }
};

const addOp = () => {
  operator = "add";
};
const subOp = () => {
  operator = "minus";
};
const divOp = () => {
  operator = "divide";
};
const mulOp = () => {
  operator = "multiply";
};
const calculate = () => {
  let result;
  if (!operator) {
    result = num1;
  }
  if (operator === "add") {
    result =
      parseFloat(num1.replace(/,/g, "")) + parseFloat(num2.replace(/,/g, ""));
  }
  if (operator === "minus") {
    result =
      parseFloat(num1.replace(/,/g, "")) - parseFloat(num2.replace(/,/g, ""));
  }
  if (operator === "divide") {
    result =
      parseFloat(num1.replace(/,/g, "")) / parseFloat(num2.replace(/,/g, ""));
  }
  if (operator === "multiply") {
    result =
      parseFloat(num1.replace(/,/g, "")) * parseFloat(num2.replace(/,/g, ""));
  }
  display.innerHTML = formatNumber(result.toString());
  num1 = result.toString();
  num2 = "";
};
const setOperator = (newOperator) => {
  if (operator) {
    calculate();
  } else {
    operator = newOperator;
  }
};
const Delete = () => {
  if (operator && result === undefined) {
    num2 = num2.slice(0, -1);
    display.innerHTML = formatNumber(num2);
  } else {
    num1 = num1.slice(0, -1);
    display.innerHTML = formatNumber(num1);
  }
};
const clearNum = () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = "";
};
