function getComputerChoice(computerAnswer) {
    return computerAnswer[Math.floor(Math.random() * computerAnswer.length)];
}
           
const computerAnswer = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("play"); 
if (playerSelection) {
    let playerAnswer = playerSelection.trim().toLocaleLowerCase();
    if (playerAnswer === "rock"  || playerAnswer === "paper"  || playerAnswer === "scissors") {
     let computerSelection = getComputerChoice(computerAnswer);
        console.log(computerSelection);
    }
}
/*

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
       return "you lose";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "tie";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "you lose";
     } else if (playerSelection == "paper" && computerSelection == "scissors") {
         return "you win";
     } else if (playerSelection == "paper" && computerSelection == "paper") {
         return "tie";
    
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "you lose";
 } else if (playerSelection == "scissors" && computerSelection == "paper") {
     return "you win";
 } else if (playerSelection == "scissors" && computerSelection == "scissors") {
     return "tie"; 
    } }
    let computerSelection = getComputerChoice(computerAnswer); */
    