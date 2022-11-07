let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

console.log(menu);

function multiplyNumeric(obj) {
	for (const key in obj) {
		let eachKey = obj[key];

		if (!isNaN(eachKey)) {
			let sumSum = (eachKey *= 2);
			obj[key] = sumSum;
		}
	}
}

multiplyNumeric(menu);

console.log(menu);
