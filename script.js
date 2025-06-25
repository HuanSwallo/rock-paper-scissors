let humanScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector("#result");

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

function playRound (humanChoice, computerChoice) {
    let resultText = "";
    if (humanChoice == computerChoice) {
        resultText = `It's a tie! You both chose ${humanChoice}.`;
    }
    else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        humanScore++;
        resultText =`You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        resultText =`You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScore(resultText);
    checkWinner();
}

function updateScore (roundResult) {
    resultDiv.textContent = '';

    const roundText = document.createElement('p');
    roundText.textContent = roundResult;

    const scoreText = document.createElement('p');
    scoreText.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;

    resultDiv.appendChild(roundText);
    resultDiv.appendChild(scoreText);
}

function checkWinner () {
    let winner;
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            winner = "Human";
        }
        else {
            winner = "Computer"
        }
    }
    else {
        return;
    }

    const winnerText = document.createElement('p');
    winnerText.textContent = `Congrats! ${winner} wins the game!`
    resultDiv.appendChild(winnerText);
}

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })
})