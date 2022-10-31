let arr = [2, 4, 5, 10000, 48, 45, 83];
let a = 1;
let b = 100;

let filterRange = arr.filter((num) => {
	return num >= a && num <= b;
});

console.log(filterRange);
console.log(arr);
