# 🌱 The Odin Project – Foundations

This directory contains my completed exercises and projects from **The Odin Project Foundations** curriculum. The work is organised by lesson topic, with individual exercise folders where applicable.

The purpose of this section was to develop a strong understanding of the fundamentals of web development through hands-on practice, covering HTML, CSS, Flexbox, JavaScript, DOM manipulation, and browser-based projects.

## 📚 Topics Covered

### 1. HTML Foundations

**Directory:** `HTMLFoundations/`

| Exercise | Main practice |
|---|---|
| `working-with-text/blog.html` | HTML document structure, headings, paragraphs, and text emphasis |
| `lists/list.html` | Ordered, unordered, and nested lists |
| `links-and-images/` | Links, local pages, images, alternative text, and relative paths |

### 2. CSS Foundations

**Directory:** `CSSFoundations/`

| Exercise | Main practice |
|---|---|
| `intro-to-css/01-css-methods/` | External, internal, and inline CSS |
| `intro-to-css/02-class-id-selectors/` | Class and ID selectors |
| `intro-to-css/03-grouping-selectors/` | Grouping selectors |
| `intro-to-css/04-chaining-selectors/` | Chaining selectors |
| `intro-to-css/05-descendant-combinator/` | Descendant combinators |
| `cascade/` | Cascade, specificity, and rule precedence |
| `block-and-inline/01-margin-and-padding-1/` | Block and inline behaviour, spacing, borders, and box model |
| `block-and-inline/02-margin-and-padding-2/` | Further margin and padding practice |

The exercises covered selectors and CSS declarations for color, backgrounds, typography, text alignment, image sizing, dimensions, margins, padding, and borders. External stylesheets were used for the styling exercises where applicable.

### 3. Flexbox

**Directory:** `Flexbox/`

The seven exercises build from individual alignment problems to complete page layouts:

1. `01-flex-center/` – centring an element on both axes.
2. `02-flex-header/` – arranging a logo and navigation links.
3. `03-flex-header-2/` – building a more detailed header with profile and action elements.
4. `04-flex-information/` – arranging image-and-text information items.
5. `05-flex-modal/` – composing a modal with content and actions.
6. `06-flex-layout/` – arranging a header, main content, and footer.
7. `07-flex-layout-2/` – building a page layout with a sidebar, content cards, and footer.

Practised alignment, justification, direction, wrapping, gaps, flexible sizing, and nested Flexbox layouts.

### 4. JavaScript Basics

**Directory:** `JavaScriptBasics/`

Completed exercises and practice include:

- `index.html` – introductory expressions, arithmetic, variables, reassignment, constants, and console output.
- `functionBasics.js` – functions for adding seven, multiplying values, capitalising a string, and returning its last character.
- `data_types_and_conditionals/` – exercises for Hello World, addition, number checking, arithmetic expressions, and joining strings. Each exercise includes a corresponding `.spec.js` test file.
- `DOM_manipulations_and_events/` – selecting DOM elements, creating elements, changing text and styles, and appending elements to the page.

#### Testing JavaScript Exercises

The JavaScript exercises include test scripts written using **Jest**. These tests verify the expected behaviour of individual functions and exercise solutions.

Run the commands from the `JavaScriptBasics/` directory.

**Run all exercise tests:**

```bash
npx --yes jest --runInBand
```

**Run an individual exercise test:**

```bash
npx --yes jest data_types_and_conditionals/01_helloWorld/helloWorld.spec.js --runInBand
```

**Useful Jest commands:**

```bash
# Run a particular test file
npx --yes jest path/to/exercise.spec.js --runInBand

# Run tests in watch mode (requires Jest to be available locally)
npx jest --watch

# Display individual test results
npx --yes jest --verbose --runInBand
```

The `.spec.js` files contain the test cases, while the corresponding JavaScript files contain the implementations being tested. Some exercises may also contain skipped test cases using `test.skip()`. These are not executed unless explicitly enabled.

DOM manipulation exercises should additionally be tested in a browser by opening their corresponding HTML files and checking the resulting page behaviour and interactions.

### Projects

**Directory:** `Projects/`

#### Recipes Website

**Directory:** `Projects/Recipes/`

A multi-page recipe website with a homepage and three recipe pages: Indian-style vegetable and paneer lasagna, creamy Makhani sauce pasta, and paneer butter masala pizza. It combines HTML structure, links, images, nested lists, and a shared external stylesheet.

See [`Projects/Recipes/README.md`](Projects/Recipes/README.md).

### Landing Page

**Directory:** `Projects/LandingPage/`

A single-page layout based on The Odin Project's landing page exercise. It includes a header, hero section, information cards, testimonial, call-to-action section, and footer. The layout is built with Flexbox and an external stylesheet.

See [`Projects/LandingPage/README.md`](Projects/LandingPage/README.md).

### Rock Paper Scissors

**Directory:** `Projects/RockPaperScissors/`

An interactive browser version of Rock Paper Scissors. The player chooses through on-page buttons, the computer generates a random choice, and the game tracks wins and draws. The first side to reach five points triggers a victory or defeat overlay, with an option to restart.

See [`Projects/RockPaperScissors/README.md`](Projects/RockPaperScissors/README.md).

#### Etch-a-Sketch

**Directory:** `Projects/Etch-a-Sketch/`

A browser-based drawing grid generated with JavaScript. The Reset button asks for a grid dimension and creates that many rows and columns of squares. Hovering over a square changes its background color.

#### Calculator

**Directory:** `Projects/Calculator/`

A browser-based calculator implementing arithmetic operations through an interactive interface. It brings together JavaScript functions, event handling, DOM manipulation, and basic application logic.

See [`Projects/Calculator/README.md`](Projects/Calculator/README.md).

## Directory overview

```text
Foundations/
├── HTMLFoundations/
│   ├── working-with-text/
│   ├── lists/
│   └── links-and-images/
├── CSSFoundations/
│   ├── intro-to-css/
│   │   ├── 01-css-methods/
│   │   ├── 02-class-id-selectors/
│   │   ├── 03-grouping-selectors/
│   │   ├── 04-chaining-selectors/
│   │   └── 05-descendant-combinator/
│   ├── cascade/
│   └── block-and-inline/
│       ├── 01-margin-and-padding-1/
│       └── 02-margin-and-padding-2/
├── Flexbox/
│   ├── 01-flex-center/
│   ├── 02-flex-header/
│   ├── 03-flex-header-2/
│   ├── 04-flex-information/
│   ├── 05-flex-modal/
│   ├── 06-flex-layout/
│   └── 07-flex-layout-2/
├── JavaScriptBasics/
│   ├── data_types_and_conditionals/
│   ├── DOM_manipulations_and_events/
│   ├── functionBasics.js
│   └── index.html
└── Projects/
    ├── Recipes/
    ├── LandingPage/
    ├── RockPaperScissors/
    ├── Etch-a-Sketch/
    └── Calculator/
```

## Learning Outcomes

- Structure HTML documents and organise content with headings, paragraphs, lists, links, and images.
- Use relative paths to connect pages and local assets.
- Attach external stylesheets and write CSS selectors.
- Understand the cascade, specificity, and the box model.
- Use Flexbox to align, distribute, and size elements in component-level and page-level layouts.
- Write JavaScript using variables, data types, operators, functions, conditionals, and loops.
- Understand basic JavaScript expressions and function behaviour.
- Select and manipulate DOM elements, create new elements, and respond to user events.
- Use Jest to write and execute tests for JavaScript exercises.
- Combine these fundamentals in browser-based projects.

## 📈 Progress

**The Odin Project Foundations curriculum is completed.**

HTML fundamentals, CSS, Flexbox, JavaScript basics, DOM manipulation, and the associated exercises and projects have been covered through practical implementation.

The completed Foundations work establishes the groundwork for moving into the next stage of web development: deeper JavaScript concepts, asynchronous programming, modern development tools, and eventually full-stack development.

---