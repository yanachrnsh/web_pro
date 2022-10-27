
const btnHappy = document.getElementById('btn-hapiness');
const btnSad = document.getElementById('btn-sadness');
const imgStyle = document.querySelector('.img').style;

btn.addEventListener('click', function () {
  document.querySelector('.img').style.display = 'inline';
  document.getElementById('btn-hapiness').disabled = true;
  document.getElementById('btn-sadness').disabled = false;
});

document.getElementById('btn-sadness').addEventListener('click', function () {
  document.querySelector('.img').style.display = 'none';
  document.getElementById('btn-hapiness').disabled = false;
  document.getElementById('btn-sadness').disabled = true;
});

// or


// const btnHappy = document.getElementById('btn-hapiness');
// const btnSad = document.getElementById('btn-sadness');
// const imgStyle = document.querySelector('.img').style;

// btnHappy.addEventListener('click', function () {
// 	imgStyle.display = 'inline';
// 	btnHappy.disabled = true;
// 	btnSad.disabled = false;
// });

// btnSad.addEventListener('click', function () {
// 	imgStyle.display = 'none';
// 	btnHappy.disabled = false;
// 	btnSad.disabled = true;
// });

function createEventForBtn(selector) {
	selector.addEventListener('click', function () {
		if (selector === btnHappy) {
			imgStyle.display = 'inline';
			btnHappy.disabled = true;
			btnSad.disabled = false;
		} else {
			imgStyle.display = 'none';
			btnHappy.disabled = false;
			btnSad.disabled = true;
		}
	});
}

createEventForBtn(btnHappy);

// or

// function sayHello (){
//   alert('hello')
// }

// btn.addEventListener('click', sayHello)
