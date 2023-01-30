const options = ["ROCK", "PAPER", "SCISSORS"];
 
 function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
           (playerSelection == "rock" && computerSelection == "scissors") ||
           (playerSelection == "paper" && computerSelection == "rock") ||
           (playerSelection == "scissors" && computerSelection == "paper"))
 {
    return `Player wins, ${playerSelection} beats ${computerSelection}`;
} else {
    return `computer wins, ${computerSelection} beats ${playerSelection}`;
}
} 


/*
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "it was a tie";
  } else if(result == "Player wins") {
    return "Player wins";
  } else {
    return "computer wins";
  }
} */

const askPlayer = prompt("Rock, paper or scissors?");
const playerSelection = askPlayer.trim().toUpperCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));