let numbersArr = [1, 3, 4, 5, 6, 74, 455, 5452, 21, 3, 2, 5, 4, 7, 1];

function getNumber(numbersArr, number) {
	let updatedArr = numbersArr.includes(number);

	if (updatedArr) {
		let result = numbersArr.filter((item) => {
			return item === number;
		});
		return result.length;
	} else {
		console.log('Нема такого');
	}
}

let final = getNumber(numbersArr, 4);
console.log(final);

// or

function getNumber2(numbersArr, number) {
	let counter = 0;

	for (item of numbersArr) {
		if (item === number) {
			counter++;
		}
	}
	return counter > 0 ? counter : 'Нема такого';
}

console.log(getNumber2(numbersArr, 4));
