const firstName = 'Yana';

function sayHello() {
	const lastName = 'Chernushevich';

	return function () {
		console.log(firstName);
		console.log(lastName);
	};
}

sayHello()();

// or
// const test = sayhello();
//
// те:
// const test = function () {
// 	console.log(firstName);
// 	console.log(lastName);
// };
//
// test()

let firstNameforTest = 'Yana';

function sayHello2() {
	console.log(firstNameforTest);
}

firstNameforTest = 'Andrii';

sayHello2();

let firstNameforTest2 = ['yana', 'kate', 'rome'];
console.log(firstNameforTest2);

let test = firstNameforTest2.pop();
console.log(test);
