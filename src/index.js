import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startEl = document.querySelector('[data-action="start"]');
const stopEl = document.querySelector('[data-action="stop"]');
const bodyEl = document.querySelector('body')
startEl.addEventListener('click', onStartColor);
stopEl.addEventListener('click', onStopColor)

let intervalId = null;
const PROMPT_DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColor() {
  const randomIndexColor = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.background = colors[randomIndexColor];
};

function onStartColor() {
    startEl.setAttribute('disabled', true);
    intervalId = setInterval(() => {
    randomColor();
  }, PROMPT_DELAY);
};

function onStopColor() {
  startEl.removeAttribute('disabled');
  clearInterval(intervalId);
};



