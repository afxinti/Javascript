'use strict';

let winningNumber = Math.trunc(Math.random() * 30 + 1);

document.querySelector('.number').textContent = winningNumber;

let message = document.querySelector('.distance').textContent;
const check = document.querySelector('.check');
let guess = Number(document.querySelector('.guess').value);
check.addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (guess === winningNumber) {
    message = 'Well played you found it!';
  } else if (guess > winningNumber) {
    message = 'Too high';
  } else {
    message = 'Too low';
  }
  document.querySelector('.distance').textContent = message;
});
