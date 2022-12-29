// 1st

// const greet = (text) => {
// 	const requiredtext = text;

// 	requiredtext.toUpperCase().includes('HELLO WORLD')
// 		? alert('Hello world')
// 		: alert('please enter the text');
// };

// const messageFromUser = prompt('Input your "Hello world"');

// greet(messageFromUser);

// 2nd

// function evenOrOdd(number) {
// 	if (number % 2 === 0) {
// 		return 'Even';
// 	} else {
// 		return 'Odd';
// 	}
// }

// evenOrOdd(-2);

// 3rd

// function stringToArray(string) {
// 	let stringToArray = string.split(' ');

// }

// stringToArray('test sing');

// 4th

// function invert(array) {
// 	let newArray = array.map((item) => {
// 		let itemToString = item.toString();

// 		if (itemToString.includes('-')) {
// 			let newPosNumber = itemToString.substring(1);

// 			return +newPosNumber;
// 		} else {
// 			let newNegNumber = '-' + itemToString;

// 			return +newNegNumber;
// 		}
// 	});

// 	console.log(newArray);

// 	return newArray;
// }

// const array = [1, 4, 3, -6, 3, -8];

// invert(array);

// or

// const invert = (array) => {
// 	let test = array.map((num) => -num);
// 	return test;
// };

// console.log(invert([-1, 5, 6, -2]));

// 5rd

// const arrayOfWords = ['hello', 'world', 'this', 'is', 'great'];

// function smash(words) {
// 	const smashedArray = words.join(' ');

// 	return smashedArray;
// }

// smash(arrayOfWords);

// 6th

// function booleanToString(b) {
// 	if (b === true) {
// 		return String(b);
// 	} else {
// 		return String(b);
// 	}
// }

// booleanToString('+');

// 7th

function positiveSum(arr) {
	let value = arr.reduce((accum, item) => {
		accum + item;
		// if (Math.sign(item) === -1) {
		// 	accum + item;
		// }
	}, 0);

	console.log(value);
}

console.log(positiveSum([1, -4, 7, 12]));
