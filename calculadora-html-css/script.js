const calculator = document.querySelector(".calculator-grid");
const output = document.querySelector(".output");
const buttons = calculator.querySelectorAll("button");

let previousOperand = "";
let currentOperand = "";
let operation;

function updateDisplay() {
  output.querySelector("[data-previous-operand]").textContent = previousOperand;
  output.querySelector("[data-current-operand]").textContent = currentOperand;
}

function clear() {
  previousOperand = "";
  currentOperand = "";
  operation = undefined;
}

function deleteDigit() {
  currentOperand = currentOperand.slice(0, -1);
}

function performOperation(operation) {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return;
  }

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  currentOperand = result;
  operation = undefined;
  previousOperand = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const { target } = event;
    if (target.matches("[data-all-clear]")) {
      clear();
      updateDisplay();
      return;
    }

    if (target.matches("[data-delete]")) {
      deleteDigit();
      updateDisplay();
      return;
    }

    if (target.matches("[data-number], [data-decimal]")) {
      if (currentOperand.includes(".") && target.matches("[data-decimal]")) {
        return;
      }

      currentOperand += target.textContent;
      updateDisplay();
      return;
    }

    if (target.matches("[data-operation]")) {
      if (currentOperand === "") {
        return;
      }

      if (previousOperand !== "") {
        performOperation(operation);
      }

      operation = target.textContent;
      previousOperand = currentOperand;
      currentOperand = "";
      updateDisplay();
      return;
    }

    if (target.matches("[data-equals]")) {
      if (currentOperand === "" || previousOperand === "") {
        return;
      }

      performOperation(operation);
      updateDisplay();
    }
  });
});
