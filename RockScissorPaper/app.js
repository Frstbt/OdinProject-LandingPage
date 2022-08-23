
let playerSelection = prompt();
let computerSelection = getComputerChoice();

function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
};

function round(playerSelection, computerSelection) {
    if (playerSelection == 1 && computerSelection == 2) {
        console.log("You win, Rock beat Scissor")
    } else if (playerSelection == 1 && computerSelection == 3) {
        console.log("You Lose, Paper beat Rock")
    } else if (playerSelection == 2 && computerSelection == 1) {
        console.log("You Lose, Rock beat Scissor ")
    } else if (playerSelection == 2 && computerSelection == 3) {
        console.log("You Win, Scissor beat Paper")
    } else if (playerSelection == 3 && computerSelection == 1) {
        console.log("You Win, Paper beat Rock")
    } else if (playerSelection == 3 && computerSelection == 2) {
        console.log("You Lose, Scissor beat Paper")
    } else if (playerSelection == computerSelection) {
        console.log("anjing")
    };
}


round();
console.log("p1 : ", playerSelection);
console.log("com : ", computerSelection);
