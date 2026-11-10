function getComputerChoice() {
    let choice = Math.random() * 3;
    if(choice < 1) return "ROCK";
    if(choice < 2) return "PAPER";
    return "SCISSORS";
}

function getHumanChoice() {
    let choice = prompt("Enter your choice for ROCK, PAPER and SCISSORS.");
    return choice.toUpperCase();
}

let humanScore = 0;
let computerScore  = 0;

function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) console.log("Draw you both choose " + humanChoice + ".");
    else if(computerChoice == "ROCK" && humanChoice == "SCISSORS" 
        || computerChoice == "PAPER" && humanChoice == "ROCK"
        || computerChoice == "SCISSORS" && humanChoice == "PAPER") {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice + ".");
    } else if(humanChoice == "ROCK" && computerChoice == "SCISSORS" 
        || humanChoice == "PAPER" && computerChoice == "ROCK"
        || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
            humanScore++;
            console.log("You won! " + humanChoice + " beats " + computerChoice + ".");
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame();
console.log("Your Score: " + humanScore);
console.log("Computers' Score: " + computerScore);