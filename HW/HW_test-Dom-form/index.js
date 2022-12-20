const input = document.querySelector('input');
const allLinks = document.querySelector('.link-div');
const section = document.querySelector('section');
const btn = document.querySelector('button');
const form = document.querySelector('form');

input.addEventListener('input', (e) => console.log(e.target.value));

input.addEventListener('blur', () => console.log('good'));

form.addEventListener('click', (event) => {
	event.target.localName == 'input'
		? console.log('yes', event)
		: console.log('no');
});

btn.addEventListener('click', (event) => {
	event.preventDefault();
});

section.addEventListener('click', () => {
	alert('wow');
});

const findEachLink = () => {
	allLinks.addEventListener('click', (e) => {
		e.stopPropagation();
		e.target.innerText == 'Click2'
			? alert('good')
			: console.log(e.target.innerText);
	});
};

findEachLink();
