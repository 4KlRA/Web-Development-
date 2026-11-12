# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with **HTML, CSS, and JavaScript** as part of The Odin Project Foundations curriculum.

The project started with the core game logic and console-based interaction. The current version uses on-page buttons, displays the score in the browser, and shows a result overlay when either side reaches five points

## ✨ Features

- **Player Controls:** Choose Rock, Paper, or Scissors using the on-page buttons.
- **Random Computer Choice:** The computer randomly selects one of the three options.
- **Live Scoreboard:** Tracks the player's score, computer's score, and number of draws.
- **Round Results:** Displays whether the round was a win, loss, or draw.
- **First to Five:** The game ends when either the player or computer reaches five points.
- **End-game Overlay:** Displays a victory or defeat message.
- **Restart:** Resets all scores and starts a new game.
- **Responsive Styling:** The layout and controls adapt for smaller screens..

## 🎮 How to Play

1. Open `index.html` in a modern web browser.
2. Select **ROCK**, **PAPER**, or **SCISSORS**.
3. The computer makes its choice automatically.
4. The round result and scoreboard update after each selection.
5. The game ends when the player or computer reaches five points.
6. Select **PLAY AGAIN** to reset the scoreboard and play another game.

No package installation or development server is required. Google Fonts are loaded externally for the typography.

## Rules

- Rock beats Scissors.
- Scissors beats Paper.
- Paper beats Rock.
- Matching choices result in a draw.

## 📁 Project Structure

```text
RockPaperScissors/
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ Implementation Details

### `getComputerChoice()`

Uses `Math.random()` to generate a random value and maps it to Rock, Paper, or Scissors.

### `playRound(humanChoice)`

Generates the computer's choice, compares it with the player's choice, updates the appropriate score, and displays the round result.

### `checkwinners()`

Checks whether either score has reached five. It updates the overlay message and activates the overlay when the game is over.

### Event Handling

A click listener on the `.buttons` container handles player selections through event delegation. A separate listener on the restart button resets the scores, clears the previous result, and hides the overlay.

## Run locally

1. Open `index.html` in a modern web browser.
2. The browser displays a prompt asking for your choice. Enter `ROCK`, `PAPER`, or `SCISSORS`.
3. Complete all five prompts.
4. Open the browser's developer tools and select **Console** to see each round's result and the final scores.

No package installation, build step, or development server is required.

## 🧠 Concepts Practised

- Generating random values with `Math.random()`.
- Writing functions and separating game logic into smaller units.
- Using conditional logic to compare game states.
- Tracking and updating state with variables.
- Selecting and updating DOM elements.
- Handling click events and using event delegation.
- Updating text content and CSS classes through JavaScript.
- Building a responsive interface with CSS and adding transitions and animations.

## ⚠️ Current Limitations

- The winning score is fixed at five.
- There is no separate round history showing both choices after each round.
- The game logic assumes the click comes from one of the three choice buttons inside the button container.
- Accessibility details such as keyboard-focused game states and announcing score changes to assistive technology can be improved.