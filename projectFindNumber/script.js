'use strict';

// calculates random number
function calcLuckyNumber() {
  let a = Math.trunc(Math.random() * 30 + 1);
  return a;
}

let winningNumber = calcLuckyNumber();
let message = document.querySelector('.distance').textContent;
let guess = Number(document.querySelector('.guess').value);
const check = document.querySelector('.check');
const replay = document.querySelector('.replay');
let score = 20;
let highscore = 0;
//check the lucky guess of player and give feedback
check.addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (guess === winningNumber) {
    document.querySelector('.number').textContent = winningNumber;
    message = 'Well played, you found it!';
    score = score;
  } else if (guess > winningNumber) {
    message = 'Too high';
    score = score - 1;
  } else {
    message = 'Too low';
    score = score - 1;
  }
  document.querySelector('.distance').textContent = message;
  document.querySelector('.score').textContent = +score;
});

replay.addEventListener('click', function () {
  //check if replay was clicked before guessing, avoid highscore = 20 at start
  if (winningNumber === guess) {
    if (highscore < score) {
      highscore = score;
    }
    score = 20;
    document.querySelector('.highscore').textContent = +highscore;
  }
  document.querySelector('.number').textContent = '?';
  winningNumber = calcLuckyNumber();
});
