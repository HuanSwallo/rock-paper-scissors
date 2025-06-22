let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    let result = Math.floor(Math.random() * 2);

    if (result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice () {
    let result = prompt("Enter rock, paper, or scissors");
    return result;
}
