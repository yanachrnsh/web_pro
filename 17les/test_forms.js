const form = document.getElementById('mars-once');

const handlerForSubmit = (e) => {
	// не дає відпрацювати кнопці сабміт
	e.preventDefault();
};

form.addEventListener('submit');

const serializeForm = (formElement) => {
	const elements = formElement.elements;
	// варіант 1 отрімуємо всі значення з форми

	Array.from(elements).forEach((element) => {
		const value = element.value;
		const name = element.name;
	});
	// варіант 2 перевірка чи є значення
	Array.from(elements)
		.filter((item) => !!item.name) // тобто якщо "" - > "asa" -> true false не являєтсья
		// "" - false
		// !false - true
		// !true - false

		//!!item = false -> true -> false or Boolean (item)
		.map((item) => {
			const value = itme.type === 'checked' ? item.checked : item.value;
			const name = item.name;

			return { name: name, value: value };
		});
};

// алетрнативне написання через formdata

const serializeForm2 = (formElement) => {
	return new FormData(formElement);
	// робить те ж саме що і функція виіще
};

serializeForm(form);
