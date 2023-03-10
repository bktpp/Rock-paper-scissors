const options = ["ROCK", "PAPER", "SCISSORS"];
 
 function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 
/* This function chooses a random name from options array to use as
the computers choice in game */


function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
           (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
           (playerSelection == "PAPER" && computerSelection == "ROCK") ||
           (playerSelection == "SCISSORS" && computerSelection == "PAPER"))
   
     {
    return `Player wins, ${playerSelection} beats ${computerSelection}`;
} else {
    return `computer wins, ${computerSelection} beats ${playerSelection}`;
 }
} 
/* This function calls players and computers choice and evaluates who won that round */

function getPlayerChoice() {
  let goodAnswer = false;
  while(goodAnswer == false) {
      const playerAnswer = prompt("Rock, paper or scissors?");
    
     if(playerAnswer == null){
          continue;
  }
    const playerAnsCaps = playerAnswer.trim().toUpperCase();
    if(options.includes(playerAnsCaps)) {
      goodAnswer = true;
      return playerAnsCaps;
    }
} }

//function for getting players choice

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));

    if(playRound(playerSelection, computerSelection) == `Player wins, ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    }
      else if(playRound(playerSelection, computerSelection) == `computer wins, ${computerSelection} beats ${playerSelection}`) {
        computerScore++;
      }
    } 
      console.log("GAME OVER");
      if(playerScore > computerScore) {
        console.log("WINNER WINNER CHICKEN DINNER!");
      }
        else if(playerScore < computerScore) {
          console.log("Hold this L");
        } else {
          console.log("DRAW");
        }
      }
     /* function for a 5 round match and announces winner based on score at the end */
game();

