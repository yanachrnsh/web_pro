const userName = prompt('Hello! What is your name?');
alert(`Hello ${userName}! How are you?`);

const greet = (text) => {
	const requiredtext = text;

	requiredtext.toUpperCase().includes('HELLO WORLD')
		? alert('Hello world')
		: alert('please enter the text');
};

const messageFromUser = prompt('Input your "Hello world"');

greet(messageFromUser);
