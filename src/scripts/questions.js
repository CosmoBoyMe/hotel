const createQuestElement = (text, isActive) => {
  const labelElement = document.createElement('label');
  labelElement.classList.add('quiz__questions-label');

  const inputRadioElement = document.createElement('input');
  inputRadioElement.type = 'radio';
  inputRadioElement.classList.add('quiz__questions-input');
  const radioBoxElement = document.createElement('span');
  radioBoxElement.classList.add('quiz__questions-radio-box');
  const radioTextElement = document.createElement('span');
  radioTextElement.classList.add('quiz__questions-radio-text');
  if (isActive) inputRadioElement.checked = true;
  radioTextElement.textContent = text;

  labelElement.append(inputRadioElement, radioBoxElement, radioTextElement);
  return labelElement;
};

const nextButton = document.querySelector('.quiz__questions-button');
let currentQuestLevel = 0;

const MOCK_DATA = [
  {
    title: 'Количество гостей',
    questions: ['5-30', '30-60', '60-80', '80-100', '100-100'],
  },
  {
    title: 'Количество гостей',
    questions: [1, 2, 3, 4, 5],
  },
  {
    title: 'Количество гостей',
    questions: [1, 2, 3, 4, 5],
  },
  {
    title: 'Количество гостей',
    questions: [1, 2, 3, 4, 5],
  },
  {
    title: 'Количество гостей',
    questions: [1, 2, 3, 4, 5],
  },
];

const MAX_QUESTION_COUNT = 5;

const currentQuestionCountElement = document.querySelector('.quiz__questions-min');
const maxQuestionCountElement = document.querySelector('.quiz__questions-max');

const questionsContainer = document.querySelector('.quiz__questions-labels');
const questionsTitle = document.querySelector('.quiz__questions-title');
const questionsProgressLineElement = document.querySelector('.quiz__questions-progress-line')

const showQuestions = () => {
  const { title, questions } = MOCK_DATA[currentQuestLevel];
  const questElements = questions.map((item, index) => createQuestElement(item, index === 0));
  questionsContainer.innerHTML = '';
  questionsTitle.textContent = title;
  questionsContainer.append(...questElements);
  currentQuestLevel += 1;
  questionsProgressLineElement.style.width = `${currentQuestLevel * 100 / MAX_QUESTION_COUNT}%`;
  currentQuestionCountElement.textContent = currentQuestLevel;
};

const handleNextButtonClick = () => {
  if (currentQuestLevel === MAX_QUESTION_COUNT) return;
  showQuestions();
};

const init = () => {
  showQuestions();
  maxQuestionCountElement.textContent = MAX_QUESTION_COUNT;
  nextButton.addEventListener('click', handleNextButtonClick);
  const startQuizButton = document.querySelector('.quiz__info-start-button');
  startQuizButton.addEventListener('click', () => {
    const questionsElement = document.querySelector('.quiz__questions');
    questionsElement.classList.add('quiz__questions--active');
    const quizInfoElement = document.querySelector('.quiz__info');
    quizInfoElement.classList.add('quiz__info--hidden');
  });
};

init();
