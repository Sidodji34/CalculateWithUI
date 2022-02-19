const BODY = {
  NUMBERS: document.querySelectorAll('.numbers, .number-zero'),
  RESET: document.querySelector('.button-c'),
  DELITE_SYMBOL: document.querySelector('.button-del'),
  OPERATIONS: document.querySelectorAll('.operators'),
  OUTPUT: document.querySelector('.output'),
  RESULT: document.querySelector('.equal'),
};

let numberOne = null;
let numberTwo = null;
let result = null;

BODY.RESET.addEventListener('click', isReset);
function isReset() {
  numberOne = null;
  numberTwo = null;
  result = null;
  BODY.OUTPUT.textContent = '';
  BODY.OUTPUT.style.fontSize = '96px';
};

for (let isNumber of BODY.NUMBERS) {
  isNumber.addEventListener('click', getNumbers);
  function getNumbers() {
    if (BODY.OUTPUT.textContent === 'Error') {
      BODY.OUTPUT.textContent = ''
    };
    if (BODY.OUTPUT.textContent.length < 6) {
      BODY.OUTPUT.textContent += isNumber.textContent;
    } else if (BODY.OUTPUT.textContent.length >= 10) {
      BODY.OUTPUT.textContent = BODY.OUTPUT.textContent;
    } else if (BODY.OUTPUT.textContent.length = 6) {
      BODY.OUTPUT.style.fontSize = '54px';
      BODY.OUTPUT.textContent += isNumber.textContent;
    }
  }
};

BODY.DELITE_SYMBOL.addEventListener('click', isDeliteSymbol);
function isDeliteSymbol() {
  if (BODY.OUTPUT.textContent === 'Error') BODY.OUTPUT.textContent = '';
  let newString = BODY.OUTPUT.textContent;
  BODY.OUTPUT.textContent = newString.slice(0, -1);
  if (BODY.OUTPUT.textContent.length < 6) BODY.OUTPUT.style.fontSize = '96px';
};

for (let isOperations of BODY.OPERATIONS) {
  isOperations.addEventListener('click', getOperations);
  function getOperations() {
    if (isOperations) {
      numberOne = BODY.OUTPUT.textContent;
      BODY.OUTPUT.textContent = '';
      BODY.OUTPUT.textContent = isOperations.textContent;
    }
  }
};

BODY.RESULT.addEventListener('click', getResult);
function getResult() {
  numberTwo = BODY.OUTPUT.textContent;
  if (numberTwo === '÷0' || numberTwo === '÷') return BODY.OUTPUT.textContent = 'Error';
  if (numberTwo[0] === '+') {
    result = +numberOne + +numberTwo.slice(1);
  } else if (numberTwo[0] === '-') {
    result = +numberOne - +numberTwo.slice(1);
  } else if (numberTwo[0] === '÷') {
    result = +numberOne / +numberTwo.slice(1);
  } else if (numberTwo[0] === '×') {
    result = +numberOne * +numberTwo.slice(1);
  }
  if (Number.isNaN(+result)) return BODY.OUTPUT.textContent = '';
  if (String(result).length >= 10) {
    BODY.OUTPUT.textContent = result.toFixed(5);
  } else {
    BODY.OUTPUT.textContent = result;
  }
};