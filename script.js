'use strict';
//grabbing elements from the html
const panel = document.querySelector('.welcome');
const single = document.getElementById('single');
const double = document.getElementById('double');
const welcomeText = document.getElementById('first-welcome');
const firstButton = document.querySelector('.buttons');
const Tname = document.querySelector('.name-text');
const Dname = document.querySelector('.dname-text');
const SDname = document.querySelector('.sdname-text');
const submit = document.getElementById('Submit');
const field = document.querySelector('.field-container');
const instruction = document.querySelector('.instruction');
const greetings = document.querySelector('.greetings');
const cont = document.getElementById('continue');
const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');
let guessText = document.querySelector('.guess');
const check = document.querySelector('.check');
const numberDisplay = document.querySelector('.number');
const chanceText = document.querySelector('.chance');
const scored = document.querySelector('.score');
const greet = document.querySelector('.greet');
const Again = document.querySelector('.tryAgain');

//iniatia values
let number = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
let chance2 = 20;
let playing = true;
let activePlayer = 0;
const instruction2 =
  'This is the cruise game, at every round I will select a random number and have you guess it. You have the chance of guessing 20times. The earlier you get my number the higher your score at each round whoever score 100 first is the winner';

//Display Name form
single.addEventListener('click', function () {
  welcomeText.classList.add('hidden');
  firstButton.classList.add('hidden');
  field.classList.remove('hidden');
  submit.classList.remove('hidden');
});
//Submit player name
submit.addEventListener('click', function () {
  field.classList.add('hidden');
  submit.classList.add('hidden');
  panel.style.width = '60%';
  panel.style.height = '60%';
  instruction.classList.remove('hidden');
  greetings.classList.remove('hidden');
  greetings.innerHTML = 'Hi ' + Tname.value;
  cont.classList.remove('hidden');
});

cont.addEventListener('click', function () {
  panel.classList.add('hidden');
  rightPanel.classList.remove('hidden');
  leftPanel.classList.remove('hidden');
  greet.textContent = 'Hi ' + Tname.value;
});

check.addEventListener('click', function () {
  const guess = Number(guessText.value);
  if (guess === number) {
    document.querySelector('.start').textContent = '🎖️ Correct! You won!';
    numberDisplay.textContent = number;
    scored.textContent = `You scored: ${chances}`;
    leftPanel.style.backgroundColor = '#60b347';
  } else {
    if (guess > number) {
      document.querySelector('.start').textContent = '🎢 Too high';
      chances -= 1;
      chanceText.textContent = `📈 Chances: ${chances}`;
    } else if (guess < number) {
      document.querySelector('.start').textContent = '🤕 Too Low';
      chances -= 1;
      chanceText.textContent = `📈 Chances: ${chances}`;
    }
  }
});

Again.addEventListener('click', function () {
  document.querySelector('.start').textContent = '🏃Start guessing';
  numberDisplay.textContent = '?';
  scored.textContent = `You scored: 0`;
  leftPanel.style.backgroundColor = 'black';
  number = Math.trunc(Math.random() * 20) + 1;
  chances = 20;
  chanceText.textContent = `📈 Chances: ${chances}`;
  guessText.value = '';
});

//Double player starts here

double.addEventListener('click', function () {
  welcomeText.classList.add('hidden');
  firstButton.classList.add('hidden');
  document.querySelector('.doublePlayerField').classList.remove('hidden');
  document.querySelector('.doubleField1').classList.remove('hidden');
  document.querySelector('.doubleField2').classList.remove('hidden');
  document.querySelector('#Submit2').classList.remove('hidden');
});

document.querySelector('#Submit2').addEventListener('click', function () {
  document.querySelector('.doublePlayerField').classList.add('hidden');
  document.querySelector('.doubleField1').classList.add('hidden');
  document.querySelector('.doubleField2').classList.add('hidden');
  document.querySelector('#Submit2').classList.add('hidden');
  panel.style.width = '60%';
  panel.style.height = '60%';
  instruction.classList.remove('hidden');
  instruction.textContent = instruction2;
  greetings.classList.remove('hidden');
  greetings.innerHTML = `Hi  ${Dname.value} and ${SDname.value}`;
  document.querySelector('#continue2').classList.remove('hidden');
});

//Continue button
document.querySelector('#continue2').addEventListener('click', function () {
  document.querySelector('#double1').classList.remove('hidden');
  document.querySelector('#double2').classList.remove('hidden');
  document.querySelector('#double3').classList.remove('hidden');
  panel.classList.add('hidden');
  document.getElementById('greets').textContent = `Hi ${Dname.value}`;
  document.getElementById('greeted').textContent = `Hi ${SDname.value}`;
});

//first player
const check0 = document.querySelector('.check--0');
const guess0 = document.querySelector('.guess--0');
const numbered = document.querySelector('.numberd');
const score0 = document.querySelector('.score--0');
const chanced = document.querySelector('.chance--0');
const check1 = document.querySelector('.check--1');
const guess1 = document.querySelector('.guess--1');
const score1 = document.querySelector('.score--1');
const startd = document.querySelector('.startd');

let player1Score = 0;
let player2Score = 0;
// document.getElementById('double1').classList.toggle('activePlayer');
// Function to handle a player's guess

function resetListeners() {
  check0.removeEventListener('click', handleGuess0);
  check1.removeEventListener('click', handleGuess1);
}

// Function to handle player one's guesses
function handleGuess0() {
  const guess = Number(guess0.value);
  if (guess === number) {
    startd.textContent = '🎖️ Correct! You won!';
    numbered.textContent = number.toString();
    player1Score += Number(chances);
    if (player1Score >= 100) {
      document.querySelector(
        '.win'
      ).textContent = `Congratulations🎉 ${Dname.value} won the game 🥁🥁 `;
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
    }
    score0.textContent = `You scored: ${player1Score}`;
    // Switch turn
    activePlayer = 1;
    setupNewTurn();
  } else {
    if (guess > number) {
      startd.textContent = '🎢 Too high';
    } else {
      startd.textContent = '🤕 Too Low';
    }
    chances -= 1;
    if (chances <= 0) {
      activePlayer = 1;
      setupNewTurn();
    }
    chanced.textContent = `📈 Chances: ${chances}`;
  }
}

// Function to handle player two's guesses
function handleGuess1() {
  const guess = Number(guess1.value);
  if (guess === number) {
    startd.textContent = '🎖️ Correct! You won!';
    numbered.textContent = number.toString();
    player2Score += Number(chances);
    if (player2Score >= 100) {
      document.querySelector(
        '.win'
      ).textContent = `Congratulations🎉 ${SDname.value} won the game 🥁🥁 `;
      document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
    }
    score1.textContent = `You scored: ${player2Score}`;
    // Switch turn
    activePlayer = 0;
    setupNewTurn();
  } else {
    if (guess > number) {
      startd.textContent = '🎢 Too high';
    } else {
      startd.textContent = '🤕 Too Low';
    }
    chances -= 1;
    if (chances <= 0) {
      activePlayer = 0;
      setupNewTurn();
    }
    chanced.textContent = `📈 Chances: ${chances}`;
  }
}

// Function to set up a new turn
function setupNewTurn() {
  // Reset existing listeners to prevent duplicates
  resetListeners();
  guess0.value = '';
  guess1.value = '';

  chances = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  startd.textContent = '🏃Start guessing...';
  numbered.textContent = '?';
  chanced.textContent = `📈 Chances: ${chances}`;

  if (activePlayer === 0) {
    document.getElementById('double1').classList.add('activePlayer');
    document.getElementById('double3').classList.remove('activePlayer');
    check0.addEventListener('click', handleGuess0);
  } else {
    document.getElementById('double1').classList.remove('activePlayer');
    document.getElementById('double3').classList.add('activePlayer');
    check1.addEventListener('click', handleGuess1);
  }
}

// Initialize the game with the first turn
setupNewTurn();
function again() {
  setupNewTurn();
  score1.textContent = `You scored: 0`;
  score0.textContent = `You scored: 0`;
  player1Score = 0;
  player2Score = 0;
  document.getElementById('double1').classList.add('activePlayer');
  document.getElementById('double3').classList.remove('activePlayer');
}
document.querySelector('.Again2').addEventListener('click', again);
document.querySelector('.Again3').addEventListener('click', function () {
  again();
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
