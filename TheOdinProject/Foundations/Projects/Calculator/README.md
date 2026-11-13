# Calculator

A browser-based calculator built with **HTML, CSS, and JavaScript** as part of The Odin Project Foundations curriculum.

The project provides a compact calculator interface for performing basic arithmetic operations. JavaScript handles the calculation logic and updates the display, while the external stylesheet gives the interface a neon-inspired visual design.

## ✨ Features

- **Basic Arithmetic:** Addition, subtraction, multiplication, and division.
- **Interactive Display:** Shows the current number being entered and the result.
- **Decimal Input:** Supports decimal values and prevents entering more than one decimal point in the current number.
- **Clear:** Resets the display and the stored calculation state.
- **Delete:** Removes the last character entered.
- **Chained Operations:** Selecting another operator calculates the pending operation before starting the next one.
- **Responsive Layout:** Adjusts the calculator width and button sizing for smaller screens.
- **Visual Feedback:** Includes hover and active button states, glow effects, and entry animation.

## 🧮 How to Use

1. Open `index.html` in a modern web browser.
2. Enter the first number using the number buttons.
3. Select an arithmetic operator (`+`, `−`, `×`, or `÷`).
4. Enter the second number.
5. Press `=` to display the result.
6. Use `C` to clear the current calculation or `DEL` to remove the last entered character.

## 📁 Project Structure

```text
Calculator/
├── index.html   # Calculator markup and button layout
├── style.css    # Layout, visual styling, animations, and responsiveness
├── script.js    # Arithmetic operations and calculator behaviour
└── README.md
```

## ⚙️ Implementation Details

### Arithmetic functions

The arithmetic logic is separated into small functions:

- `add(a, b)` returns the sum.
- `subtract(a, b)` returns the difference.
- `multiply(a, b)` returns the product.
- `divide(a, b)` returns the quotient, with division by zero currently represented by `Infinity`.
- `operate(a, b, op)` selects the appropriate arithmetic function based on the operator.

### Calculator state

The calculator uses two variables to keep track of an in-progress operation:

- `firstOperand` stores the first number.
- `operator` stores the selected arithmetic operator.

The `display` variable references the input element used to show entered values and results.

### Interface functions

- `appendValue(text)` adds a digit or decimal point to the display. When an operator is selected, it stores the first operand and prepares the display for the next number.
- `calculate()` reads the second operand, calls `operate()`, displays the result rounded to three decimal places, and resets the stored operation.
- `clearDisplay()` clears the display and resets the calculator state.
- `deleteLast()` removes the final character from the display.

## 🛠️ Technologies Used

- **HTML5** for the calculator structure and controls.
- **CSS3** for the grid layout, gradients, shadows, transitions, animation, and responsive styling.
- **JavaScript** for arithmetic functions, state management, input handling, and DOM manipulation.
- **Google Fonts** for the Orbitron and Rajdhani typefaces.

## 🚀 Run Locally

No dependencies, package installation, build process, or development server are required.

1. Clone or download the repository.
2. Open the `Calculator` project folder.
3. Open `index.html` in your browser.

An internet connection is needed to load the Google Fonts imported by the stylesheet. The calculator itself runs locally in the browser.

## 🧠 Concepts Practised

- Writing and calling functions with parameters and return values.
- Using `switch` statements to select between operations.
- Working with numbers, strings, and type conversion.
- Managing application state with variables.
- Selecting and manipulating DOM elements.
- Handling user input through button click handlers.
- Using arrays and `includes()` to check supported operators.
- Preventing duplicate decimal points.
- Applying CSS Grid to create a calculator keypad.
- Styling interactive states with pseudo-classes and transitions.
- Using media queries to adapt the layout to smaller screens.

## ⚠️ Current Limitations

- Division by zero produces `Infinity` rather than a user-friendly error message.
- Results are rounded to three decimal places.
- The calculator does not currently support parentheses, operator precedence across a full expression, or a calculation history.
- Input is currently button-based; keyboard support has not been implemented.
- The display is disabled, so users cannot type directly into it.
- Invalid or incomplete expressions are not presented with dedicated error states.

---

*Built while practising JavaScript fundamentals through The Odin Project Foundations curriculum.*