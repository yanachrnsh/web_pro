'use strict';

// dz 9.18 1st version

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((getData) => getData.json())
	.then((updatedData) => {
		const arrByUserId = updatedData.filter((item) => item.userId === 1);
		return arrByUserId;
	})
	.then((arrByUserId) => console.log(arrByUserId))
	.catch((error) => console.error(error));

// dz 9.18 2nd version

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((getData2) => getData2.json())
	.then((updatedData2) => updatedData2.filter((item) => item.id % 2 == 0))
	.then((arrByEvenId) => console.log(arrByEvenId))
	.catch((error2) => console.error(error2));

// dz 9.18 3rd version

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((getData3) => getData3.json())
	.then((updatedData3) =>
		updatedData3.sort((a, b) => {
			let nameFirst = a.title;
			let nameSec = b.title;
			if (nameFirst > nameSec) {
				return 1;
			}
			if (nameFirst < nameSec) {
				return -1;
			}
			return 0;
		})
	)
	.then((newArr) => console.log(newArr))
	.catch((error3) => console.error(error3));

// dz 9.19

const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return response.json();
};

console.log(getData().then((arr) => arr.filter((item) => item.userId === 1)));

// or

let arrWithFilter = getData().then((arr) => {
	const result = arr.filter((item) => item.userId === 1);
	console.log(result);
});
