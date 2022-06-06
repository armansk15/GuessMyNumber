'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
  } else if (guess > randomNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < randomNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
