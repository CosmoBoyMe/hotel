const MOCK_DATA = [
  {
    img: './assets/hall-plan-1.jpg',
    title: 'Просторный зал с панорамным видом на город',
    info: [
      { name: 'площадь', value: '160 кв. метров' },
      { name: 'вместимость', value: 'до 100 человек' },
      { name: 'фуршет', value: 'до 200 человек' },
    ],
  },
  {
    img: './assets/hall-plan-1.jpg',
    title: 'Просторный зал с панорамным видом на город',
    info: [
      { name: 'площадь', value: '180 кв. метров' },
      { name: 'вместимость', value: 'до 200 человек' },
      { name: 'фуршет', value: 'до 300 человек' },
    ],
  },
];

const tabsElements = document.querySelectorAll('.hall__tabs-button');
const hallImage = document.querySelector('.hall__img');
const titleElement = document.querySelector('.hall__info-title');
const descriptionElement = document.querySelector('.hall__info-description');

const createDescriptionRowElement = (text, value) => {
  const descriptionRowElement = document.createElement('div');
  descriptionRowElement.classList.add('hall__info-description-row');

  const descriptionTextElement = document.createElement('div');
  descriptionTextElement.classList.add('hall__info-description-text');

  const descriptionValueElement = document.createElement('div');
  descriptionValueElement.classList.add('hall__info-description-value');

  descriptionTextElement.textContent = text;
  descriptionValueElement.textContent = value;

  descriptionRowElement.append(descriptionTextElement, descriptionValueElement);
  return descriptionRowElement;
};

const render = (tabIndex = 0) => {
  tabsElements.forEach((button) => button.classList.remove('hall__tabs-button--active'));
  tabsElements[tabIndex].classList.add('hall__tabs-button--active');

  hallImage.src = MOCK_DATA[tabIndex].img;

  titleElement.textContent = MOCK_DATA[tabIndex].title;

  const descriptionRows = MOCK_DATA[tabIndex].info.map(({ name, value }) => createDescriptionRowElement(name, value));
  descriptionElement.innerHTML = '';
  descriptionElement.append(...descriptionRows);
};

const init = () => {
  tabsElements.forEach((item, index) => item.addEventListener('click', () => render(index)));
  render();
};

init();
