let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let result = Math.floor(Math.random() * 2);

    if (result == 0) {
        return 'Rock';
    }
    else if (result == 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice () {
    let result = prompt('Enter rock, paper, or scissors');
    result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    return result;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie!`);
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore == computerScore) {
        console.log(`The game is a tie! Final Score:\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`);
    }
    else if (humanScore > computerScore) {
        console.log(`Human wins! Final Score:\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`);
    }
    else {
        console.log(`Computer wins! Final Score:\nHuman Score - ${humanScore}\nComputer Score - ${computerScore}`);
    }
}

playGame();