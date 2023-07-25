'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!'

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '50rem'
    document.querySelector('.number').textContent = secretNumber

    highscore = score + highscore
    document.querySelector('.highscore').textContent = highscore

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!'
      document.querySelector('.score').textContent = 0
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game!'
      document.querySelector('.score').textContent = 0
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('.score').textContent = 0
  document.querySelector('.highscore').textContent = 0
})
