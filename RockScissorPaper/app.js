
let playerSelection = prompt().toLowerCase();

let com = Math.floor(Math.random() * 3 + 1);

if (com == 1) {
    computerSelection = "rock"
} else if (com == 2) {
    computerSelection = "scissor"
} else (computerSelection = "paper")

function round(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === 'paper') {
        console.log('You win! Rock beats paper!');
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Its a tie!');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!');
        // User Chooses Paper
    } else if (playerSelection === "paper" && computerSelection === 'rock') {
        console.log('You win! Rock beats paper!');
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Its a tie!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Scissors beats paper!');
        // User Chooses Scissors
    } else if (playerSelection === "scissors" && computerSelection === 'rock') {
        console.log('You lose! Rock beats scissors!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper!');
    } else {
        console.log('It is a tie!');
    }
}



// function round(playerSelection, computerSelection) {
//     if (playerSelection == 1 && computerSelection == 2) {
//         console.log("You win, Rock beat Scissor")
//     } else if (playerSelection == 1 && computerSelection == 3) {
//         console.log("You Lose, Paper beat Rock")
//     } else if (playerSelection == 2 && computerSelection == 1) {
//         console.log("You Lose, Rock beat Scissor ")
//     } else if (playerSelection == 2 && computerSelection == 3) {
//         console.log("You Win, Scissor beat Paper")
//     } else if (playerSelection == 3 && computerSelection == 1) {
//         console.log("You Win, Paper beat Rock")
//     } else if (playerSelection == 3 && computerSelection == 2) {
//         console.log("You Lose, Scissor beat Paper")
//     } else if (playerSelection == computerSelection) {
//         console.log("anjing")
//     };
// }


round();
console.log("p1 : ", playerSelection);
console.log("com : ", computerSelection);
