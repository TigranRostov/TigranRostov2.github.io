alert ('Привет!');
var answerNew = confirm('Тут я кое что позаимствовал у тебя. Обещаешь не ругаться?) А то не загружусь)))');

const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('button');
const bars = Array.from(document.querySelectorAll('.bar')); 

window.onload = () => {
  bars.forEach((bar) => {
    bar.classList.add('flipInY');
  });
};

button.addEventListener('click', () => {
  bars.forEach((bar) => {
     bar.classList.remove('flipInY');
     bar.classList.remove('animated');
    setTimeout(() => {
      bar.classList.add('flipInY');
      bar.classList.add('animated');
    }, 300);    
  });
});