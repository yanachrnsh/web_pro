const data = [
	{
		id: 1,
		question: 'Which of these fish is actually a fish?',
		answers: [
			{ answer: 'swordfish', isCorrect: true },
			{ answer: 'jellyfish', isCorrect: false },
			{ answer: 'starfish', isCorrect: false },
			{ answer: 'crayfish', isCorrect: false },
		],
	},
	{
		id: 2,
		question: 'A flutter is a group of:',
		answers: [
			{ answer: 'bees', isCorrect: false },
			{ answer: 'penguins', isCorrect: false },
			{ answer: 'butterflies', isCorrect: true },
			{ answer: 'camels', isCorrect: false },
		],
	},
	{
		id: 3,
		question: 'A group of which animals is referred to as a wake?',
		answers: [
			{ answer: 'bats', isCorrect: false },
			{ answer: 'vultures', isCorrect: true },
			{ answer: 'ants', isCorrect: false },
		],
	},
];

// 1. Написати функцію, яка показуватиме відповіді та поточне питання.
//  В рамках цієї функції зробити перевірку на останнє питання і якщо перевірка проходить, то показувати результат.

//   Приклад розмітки однієї відповіді:
//   <div class="answer">
//     <input type="radio" id=${index} name="answer" value=${isCorrect} />
//     <label for=${index}>{answer}</label>
//   </div>

let eachQuestion = 0;
let selectedValue = null;
let correctAnswer = 0;
let wrongAnswer = 0;
let totalScore = 0;

const question = document.querySelector('.question');
const answer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const game = document.querySelector('.game');
const play = document.querySelector('.play');

const correct = document.querySelector('.correct ');
const wrong = document.querySelector('.wrong ');
const score = document.querySelector('.score ');

const selectedAnswer = () => {
	answer.querySelectorAll('.answer').forEach((elem) => {
		elem.addEventListener('click', (e) => {
			selectedValue = e.target.value;
		});
	});
};

const showQuestion = (arr, elemIndex) => {
	if (eachQuestion === data.length) {
		showResult();
	} else {
		question.textContent = arr[elemIndex].question;

		const answers = arr[elemIndex].answers
			.map(
				(item, index) =>
					`
        <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for=${index}>${item.answer}</label>
      </div>
      `
			)
			.join('');

		answer.innerHTML = answers;
		selectedAnswer();
	}
};

// 2. Написати функцію, яка вішатиме обробники подій click на всі відповіді. І записувати значення в змінну selectedAnswer

// 3. Написати функцію onSubmit, яка вішатиме обробник подій на кнопку Submit.
// Перевірити чи вибрана відповідь. Якщо вибрано, тоді зробити перевірку на правильну відповідь, інкрементувати correctCount або wrongCount.
// І також інкрементувати індекс наступного питання

const onSubmit = () => {
	submit.addEventListener('click', () => {
		if (selectedValue !== null) {
			selectedValue == 'true' ? correctAnswer++ : wrongAnswer++;
			eachQuestion++;

			showQuestion(data, eachQuestion);
			console.log(eachQuestion);
		} else {
			alert('Select the answer');
		}
	});
};

onSubmit();
showQuestion(data, eachQuestion);

// 4. Написати функцію showResult, яка показуватиме блок із результатом та записуватиме значення
// По прикладу
// `Correct Answers: ${correctCount}`;
// `Wrong Answers: ${wrongCount}`;
// `Score: ${(correctCount - wrongCount) * 10}`;

const showResult = () => {
	result.style.display = 'block';
	game.style.display = 'none';

	correct.textContent = `Correct Answers: ${correctAnswer}`;
	wrong.textContent = `Wrong Answers: ${wrongAnswer}`;
	score.textContent = `Score: ${(correctAnswer - wrongAnswer) * 10}`;
};

// showResult();

// 5. Написати функцію resetResult, яка скидатиме наступні значення
// questionIndex, correctCount, wrongCount

const resetResult = () => {
	eachQuestion = 0;
	selectedValue = null;
	correctAnswer = 0;
	wrongAnswer = 0;
	totalScore = 0;
};

// 6. Повісити обробник подій на кнопку Play again, яка має показувати блок із питаннями, приховати блок із результом, скинути всі значення в 0, а також показувати перше питання.

const playBtn = () => {
	play.addEventListener('click', () => {
		result.style.display = 'none';
		game.style.display = 'block';

		resetResult();
		showQuestion(data, eachQuestion);
	});
};

playBtn();
