const input = prompt('Please input the number');
const numberInput = +input;
console.log(typeof numberInput);

if (numberInput > 0) {
  alert('1');
} else if (numberInput === 0) {
  alert('0');
} else if (numberInput < 1) {
  alert('-1');
} else {
  alert('Not a number');
}
