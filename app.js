const shareIcon = document.querySelector('.icon__container');
const footerDisplay = document.querySelector('.card__footer--display');
const footerNone = document.querySelector('.card__footer--none');
const footer = document.querySelector('.card__footer');

shareIcon.addEventListener('click', () => {
  console.log('clicked');
  footer.classList.toggle('bg--change');
  footerDisplay.classList.toggle('display--none');
  footerNone.classList.toggle('display--none');
});
