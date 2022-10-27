const num1 = 5;
const num2 = 4;

const calcResult = (a, b) => {
	const result = Math.pow(a, b);
	return result;
};

console.log(calcResult(num1, num2));

const getMinNum = (a, b) => {
	return Math.min(a, b);
};

console.log(getMinNum(num1, num2));
