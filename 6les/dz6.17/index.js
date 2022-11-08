let arrofUsers = [
	{ name: 'User1', age: 25 },
	{ name: 'User2', age: 30 },
	{ name: 'User3', age: 28 },
];

function sortByAge(arr) {
	let sortedArr = arr.sort((a, b) => a.age - b.age);

	return sortedArr;
}

console.log(sortByAge(arrofUsers));
