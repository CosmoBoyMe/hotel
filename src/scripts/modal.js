const phoneButtonElement = document.querySelector('.header__phone-button');
const bodyElement = document.querySelector('body');
const modalElement = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');

const handleModalButtonClick = () => {
  bodyElement.classList.toggle('body--scroll-disabled');
  modalElement.classList.toggle('modal--active');
};

phoneButtonElement.addEventListener('click', handleModalButtonClick);

modalCloseButton.addEventListener('click', handleModalButtonClick);
