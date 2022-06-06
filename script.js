'use strict';

let randomNumber = Math.trunc(Math.random() * 21);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
  }
});
