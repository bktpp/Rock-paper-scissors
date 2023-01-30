const options = ["rock", "paper", "scissors"];
 
 function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
           (playerSelection == "rock" && computerSelection == "scissors") ||
           (playerSelection == "paper" && computerSelection == "rock") ||
           (playerSelection == "scissors" && computerSelection == "paper"))
 {
    return "Player wins";
} else {
    return "computer wins";
}
}
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "it was a tie";
  } else if(result == "Player wins") {
    return "Player wins";
  } else {
    return "computer wins";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(checkWinner(playerSelection, computerSelection));