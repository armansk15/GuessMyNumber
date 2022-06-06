'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷‍♂️ You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤷‍♂️ You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
