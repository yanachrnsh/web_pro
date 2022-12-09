const data = [
	{
		id: 1,
		name: "Invicta Men's Pro Diver",
		img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
		price: 74,
		cat: 'Dress',
	},
	{
		id: 11,
		name: "Invicta Men's Pro Diver 2",
		img: 'https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg',
		price: 74,
		cat: 'Dress',
	},
	{
		id: 2,
		name: "Timex Men's Expedition Scout ",
		img: 'https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg',
		price: 40,
		cat: 'Sport',
	},
	{
		id: 3,
		name: 'Breitling Superocean Heritage',
		img: 'https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg',
		price: 200,
		cat: 'Luxury',
	},
	{
		id: 4,
		name: 'Casio Classic Resin Strap ',
		img: 'https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg',
		price: 16,
		cat: 'Sport',
	},
	{
		id: 5,
		name: 'Garmin Venu Smartwatch ',
		img: 'https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg',
		price: 74,
		cat: 'Casual',
	},
];

// 1. Створити функцію, яка виводитиме товари на сторінці.
// Функція повинна приймати один параметр – масив елементів та вставити підсумковий рядок у контентер для продуктів.
// Підказки: за допомогою функції map модифікувати кожний елемент у рядок.

const catAllProducts = document.querySelector('.products');
const inputSearch = document.querySelector('.search');
const category = document.querySelector('.category');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');

let updatedArrOfProducts;

const setUpAllProducts = (arrOfProducts) => {
	updatedArrOfProducts = arrOfProducts
		.map(
			(item) =>
				`<div class="product">
          <img src="${item.img}" alt="" />
          <span class="name">${item.name}</span>
          <span class="priceText">$ ${item.price}</span>
        </div>
    `
		)
		.join('');

	catAllProducts.innerHTML = updatedArrOfProducts;
};

setUpAllProducts(data);

// 2. Повісити оброблювач подій keyup на елемент input.
// При введенні значення фільтрувати масив даних, які відображаються на сторінці.
// Врахувати те, що користувач може вводити значення різним регістром
// Підказка: необхідно зробити фільтрацію за допомогою способу includes().

inputSearch.addEventListener('keyup', (event) => {
	const inputValue = event.target.value.toLowerCase();

	const inputValueWitoutSpace = inputValue.trim();

	if (inputValueWitoutSpace) {
		const filteredArr = data.filter((item) =>
			item.name.toLocaleLowerCase().includes(inputValueWitoutSpace)
		);

		setUpAllProducts(filteredArr);
	} else {
		setUpAllProducts(data);
	}
});

// 3. Зробити функцію, яка виводитиме всі категорії на сторінці.
// І так само повісити обробник подій, за допомогою делегування подій, на клік кожної категорії.
// При натисканні на певну категорію повинні показувати продукти, які належать до цієї категорії.

const displayCategories = (arrOfProducts) => {
	const getAllCategories = arrOfProducts.map((item) => item.cat);

	const removeDupOfCategories = Array.from(new Set(getAllCategories));
	// console.log(removeDupOfCategories);

	const displayUpdatedCategories = removeDupOfCategories
		.map((item) => `<span class="cat">${item}</span> `)
		.join('');

	category.innerHTML = displayUpdatedCategories;
};

displayCategories(data);

category.addEventListener('click', (e) => {
	const selectCategory = e.target.textContent;
	console.log(selectCategory);

	if (selectCategory) {
		const filteredByCategory = data.filter(
			(item) => item.cat === selectCategory
		);

		setUpAllProducts(filteredByCategory);
	} else {
		setUpAllProducts(data);
	}
});

// 4. Зробити функцію setPrices, яка буде:
//   4.1. Вичіслювати мінімальну та максимальну ціну
//   4.2. Проставити ці значення для <input type="range"/>
//   4.3. Повісити на <input type="range"/> обробник подій типу input. І на зміни значення range потрібно фільтрувати товари на сторінці

const setPrices = (array) => {
	const findPrices = array.map((item) => item.price);

	const minPrice = Math.min(...findPrices);
	const maxPrice = Math.max(...findPrices);

	priceRange.min = minPrice;
	priceRange.max = maxPrice;
	priceRange.value = maxPrice;

	priceValue.textContent = `$ ${maxPrice}`;

	priceRange.addEventListener('input', (event) => {
		const valueOfFilter = event.target.value;

		priceValue.textContent = `$ ${valueOfFilter}`;

		const filteredArr = array.filter((item) => item.price <= valueOfFilter);

		setUpAllProducts(filteredArr);
	});
};

setPrices(data);
