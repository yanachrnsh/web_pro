const numberForSum1 = prompt('Please input first number');
const numberForSum2 = prompt('Please input second number');

const num1 = parseInt(numberForSum1);
const num2 = parseInt(numberForSum2);

console.log(typeof num1);
console.log(typeof num2);

// второй вариант
// const sumResult = Number(numberForSum1) + Number(numberForSum2);

const sumResult = num1 + num2;
console.log(sumResult);
console.log(typeof sumResult);

alert(sumResult);

const isSumResultNumber = typeof sumResult === 'number';
console.log(`Is result is a number? ${isSumResultNumber}`);
