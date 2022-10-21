// const subscribers = [
//   { name: 'Yana', isColseFriend: true },
//   { name: 'Den', isColseFriend: false },
//   { name: 'Pan', isColseFriend: true },
//   { name: 'Han', isColseFriend: false },
//   { name: 'Dan', isColseFriend: false },
// ];

// for (let i = 0; i < subscribers.length; i++) {
//   console.log(subscribers[i]);
// }

const numbersToUpdate = [1, 2, 3, 7, 8, 9, 100];

// вариант 1

function squareArr(arr) {
  for (const key in arr) {
    const newNumber = arr[key] * arr[key];
    console.log(newNumber);
  }
}

console.log(squareArr(numbersToUpdate));

// or вариант 2

function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log(squareArr(numbersToUpdate));
