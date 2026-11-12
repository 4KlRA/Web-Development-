function getComputerChoice() {
    let choice = Math.random() * 3;

    if(choice < 1) return "ROCK";
    if(choice < 2) return "PAPER";
    return "SCISSORS";
}

// function getHumanChoice() {
//     let choice = prompt("Enter your choice for ROCK, PAPER and SCISSORS.");
//     return choice.toUpperCase();
// }

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

let result = document.querySelector(".resultText");
let humanResult = document.querySelector(".humanScore");
let computerResult = document.querySelector(".computerScore");
let drawResult = document.querySelector(".draw");

const buttons = document.querySelector(".buttons");

let gameOverlay = document.querySelector(".gameOverlay");
let winnerTitle = document.querySelector(".winnerTitle");
let winnerMessage = document.querySelector(".winnerMessage");
let restartBtn = document.querySelector(".restartBtn");

function checkwinners() {
    if(humanScore === 5) {
        winnerTitle.textContent = "VICTORY!";
        winnerMessage.textContent = "You conquered the arena!";
        gameOverlay.classList.add("active");
    }
    else if(computerScore === 5) {
        winnerTitle.textContent = "DEFEAT!";
        winnerMessage.textContent = "The computer conquered the arena!";
        gameOverlay.classList.add("active");
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if(computerChoice === humanChoice) {
        drawScore++;
        result.textContent = "It's a draw!";
    }
    else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"
        || computerChoice === "PAPER" && humanChoice === "ROCK"
        || computerChoice === "SCISSORS" && humanChoice === "PAPER") {

        computerScore++;
        result.textContent = "Computer Won!";
    }
    else {
        humanScore++;
        result.textContent = "Human Won!";
    }

    checkwinners();

    drawResult.textContent = drawScore;
    computerResult.textContent = computerScore;
    humanResult.textContent = humanScore;
}

restartBtn.addEventListener("click", () => {
    humanScore = computerScore = drawScore = 0;

    humanResult.textContent = 0;
    computerResult.textContent = 0;
    drawResult.textContent = 0;

    result.textContent = "";

    gameOverlay.classList.remove("active");
});

buttons.addEventListener("click", (event) => {
    if(gameOverlay.classList.contains("active")) return;

    if(event.target.tagName !== "BUTTON") return;

    let humanChoice = event.target.textContent.trim();

    playRound(humanChoice);
});

// function playRound(humanChoice, computerChoice = getComputerChoice()) {
//     if(computerChoice === humanChoice) console.log("Draw you both choose " + humanChoice + ".");
//     else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"
//         || computerChoice === "PAPER" && humanChoice === "ROCK"
//         || computerChoice === "SCISSORS" && humanChoice === "PAPER") {
//             computerScore++;
//             console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
//     } else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"
//         || humanChoice === "PAPER" && computerChoice === "ROCK"
//         || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
//             humanScore++;
//             console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
//     }
// }

// function playGame() {
//     for(let i = 0; i < 5; i++) {
//         playRound(getHumanChoice());
//     }
// }

// playGame();
// console.log("Your Score: " + humanScore);
// console.log("Computers' Score: " + computerScore);
