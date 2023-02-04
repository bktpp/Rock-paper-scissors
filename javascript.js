 
 const options = ["ROCK", "PAPER", "SCISSORS"];
 
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
} 
let playerPick = '';
function playersChoice(choice) {
playerPick = choice;
playRound();
}

document.querySelector('.rock').addEventListener('click', function() {
playersChoice('ROCK');
})
document.querySelector('.paper').addEventListener('click', function() {
  playersChoice('PAPER');
  })
  document.querySelector('.scissors').addEventListener('click', function() {
    playersChoice('SCISSORS');
    })
/* This function chooses a random name from options array to use as
the computers choice in game */


 function playRound() {
    const computerSelection = getComputerChoice();
    if(playerPick == computerSelection) {
      console.log('TIE');
        return 'TIE';
    }
    else if(
           (playerPick == "ROCK" && computerSelection == "SCISSORS") ||
           (playerPick == "PAPER" && computerSelection == "ROCK") ||
           (playerPick == "SCISSORS" && computerSelection == "PAPER"))
   
     {
      console.log(`Player wins, ${playerPick} beats ${computerSelection}`);
    return `Player wins, ${playerPick} beats ${computerSelection}`;
  } else {
    console.log(`computer wins, ${computerSelection} beats ${playerPick}`);
    return `computer wins, ${computerSelection} beats ${playerPick}`;
 }
} 


/* This function calls players and computers choice and evaluates who won that round */


 


//function for getting players choice

/*function game() {
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
// game(); 
