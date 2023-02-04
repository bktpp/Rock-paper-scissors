const options = ["ROCK", "PAPER", "SCISSORS"];
 
 function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 

const gameResult = document.querySelector('.result');

let playerPick = '';
let computerPick = getComputerChoice();
document.querySelector('.rock').addEventListener('click', playerChoseRock);

function playerChoseRock() {
      playerPick = 'ROCK';
      computerPick = getComputerChoice();
  if (playerPick == computerPick) {
    rounds++;
    gameResult.textContent = "";
    gameResult.textContent = "Tie!";
  } else if (computerPick == 'PAPER') {
    rounds++;
    computerScore++;
    gameResult.textContent = "";
    gameResult.textContent = `Computer won! ${computerPick} beats ${playerPick}`;
  } else {
    rounds++;
    playerScore++;
    gameResult.textContent = "";
    gameResult.textContent = `player won, ${playerPick} beats ${computerPick}`;
  }
  scoreBoard();
}

document.querySelector('.paper').addEventListener('click', playerChosePaper);

function playerChosePaper() {
    playerPick = 'PAPER';
    computerPick = getComputerChoice();
    if (playerPick == computerPick) {
      rounds++;
      gameResult.textContent = "";
      gameResult.textContent = `Tie!`;
    } else if (computerPick == 'SCISSORS') {
      rounds++;
      computerScore++;
      gameResult.textContent = "";
      gameResult.textContent = `computer won, ${computerPick} beats ${playerPick}`;
    } else {
      rounds++;
      playerScore++;
      gameResult.textContent = "";
      gameResult.textContent = `player won, ${playerPick} beats ${computerPick}`;
    }
    scoreBoard();
}

document.querySelector('.scissors').addEventListener('click', playerChoseScissors);

function playerChoseScissors() {
    playerPick = 'SCISSORS';
    computerPick = getComputerChoice();
    if (playerPick == computerPick) {
      rounds++;
      gameResult.textContent = "";
      gameResult.textContent = `Tie!`;
    } else if (computerPick == 'ROCK') {
      rounds++;
      computerScore++;
      gameResult.textContent = "";
      gameResult.textContent = `computer won, ${computerPick} beats ${playerPick}`;
    } else {
      rounds++;
      playerScore++;
      gameResult.textContent = "";
      gameResult.textContent = `player won, ${playerPick} beats ${computerPick}`;
    } 
    scoreBoard();
}
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function scoreBoard() {
  if (rounds == 5) {
    if (playerScore > computerScore) {
      gameResult.textContent = "";
      gameResult.textContent = `Player won!, ${playerScore} to ${computerScore}`;
      gameResult.style.fontSize = '50px'
    } else {
      gameResult.textContent = "";
      gameResult.textContent = `computer won!, ${computerScore} to ${playerScore}`;
      gameResult.style.fontSize = '50px'
    }
  }
}

