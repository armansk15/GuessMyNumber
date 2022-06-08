'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === randomNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct number!';
    displayMessage('🥳 Correct number!');

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#6ECB63';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > randomNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🤷‍♂️ You lost!';
      displayMessage('🤷‍♂️ You lost!');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
    // } else if (guess > randomNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🤷‍♂️ You lost!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // When guess is too low
    // } else if (guess < randomNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '🤷‍♂️ You lost!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
