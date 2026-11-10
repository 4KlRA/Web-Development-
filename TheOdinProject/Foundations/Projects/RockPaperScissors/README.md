# Rock Paper Scissors

A small prompt-and-console Rock Paper Scissors game implemented in JavaScript as part of **The Odin Project Foundations** curriculum.

The current version runs in the browser using JavaScript prompts for player input and the developer console for round results and scores. It is intentionally focused on practising JavaScript fundamentals rather than building a graphical interface.

## How the game works

1. The player is prompted to enter `ROCK`, `PAPER`, or `SCISSORS`.
2. The computer randomly selects one of the three choices.
3. The two choices are compared to determine whether the round is a win, loss, or draw.
4. The relevant score is updated after a decisive round. Draws do not change either score.
5. The game repeats for five rounds.
6. The player's and computer's final scores are printed to the browser console.

## Rules

- Rock beats Scissors.
- Scissors beats Paper.
- Paper beats Rock.
- Matching choices result in a draw.

## Project structure

```text
RockPaperScissors/
├── index.html
├── script.js
└── README.md
```

- **`index.html`** – minimal HTML document that loads the JavaScript file.
- **`script.js`** – computer choice generation, player input, round resolution, score tracking, and the five-round game loop.

## Implementation details

### `getComputerChoice()`

Uses `Math.random()` to generate a value in the range from zero up to (but not including) three. The value is divided into three ranges to select Rock, Paper, or Scissors.

### `getHumanChoice()`

Uses `prompt()` to request the player's choice and converts the entered text to uppercase so lowercase input can be compared with the computer's uppercase choice.

### Score variables

`humanScore` and `computerScore` are initialised to zero and updated when a player or the computer wins a round.

### `playRound(computerChoice, humanChoice)`

Compares the two choices, identifies a draw or winner, updates the appropriate score, and logs the round result.

### `playGame()`

Runs five rounds by repeatedly generating a computer choice, requesting a human choice, and passing both values to `playRound()`.

## Run locally

1. Open `index.html` in a modern web browser.
2. The browser displays a prompt asking for your choice. Enter `ROCK`, `PAPER`, or `SCISSORS`.
3. Complete all five prompts.
4. Open the browser's developer tools and select **Console** to see each round's result and the final scores.

No package installation, build step, or development server is required.

## Concepts practised

- Declaring and updating variables with `let`.
- Writing and calling functions with parameters and return values.
- Generating random values with `Math.random()`.
- Reading input with `prompt()` and normalising strings with `toUpperCase()`.
- Using conditional logic to compare game states.
- Repeating actions with a `for` loop.
- Maintaining state with score variables.
- Logging program output with `console.log()`.

## Current limitations

- The game is controlled through browser prompts rather than on-page buttons.
- Round results and scores are displayed in the developer console.
- Input is converted to uppercase, but it is not currently validated. An empty or unexpected response does not produce a normal round result, and cancelling the prompt can cause an error because the returned value is not checked before calling `toUpperCase()`.
- The game always runs for five rounds; there is no replay or configurable round count yet.