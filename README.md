# Whack-A-Mole!

## Author

**Yordan Acosta**

GitHub:
https://github.com/yordan95acosta

Live Game:
https://yordan95acosta.github.io/js-dev-final-capstone-starter-whack-a-mole/

---

# Project Description

Whack-A-Mole is a browser-based arcade game where players try to hit randomly appearing moles before the timer runs out.

This project was created as a JavaScript final capstone project to demonstrate skills in:

- JavaScript programming
- DOM manipulation
- Event handling
- Timers and intervals
- Random number generation
- HTML structure
- CSS styling
- Browser-based game development

The player starts the game and attempts to click as many moles as possible before the timer reaches zero. Each successful hit increases the score.

---

# How To Play

1. Click the **Start Game** button.
2. Wait for a mole to appear from one of the nine holes.
3. Click the mole before it disappears.
4. Each successful hit increases your score.
5. Continue playing until the timer reaches zero.
6. Try to achieve the highest score possible.

---

# Features

## Gameplay Features

- Start game button
- Nine mole holes
- Random mole appearance
- Random mole timing
- Score tracking
- Countdown timer
- Automatic game ending
- Mole click detection
- Score reset when restarting

---

# Original Improvements

The project was customized beyond the basic requirements to create a more unique game experience.


---

# Responsive Design

The game was improved to work better on different screen sizes.

Features include:

- Flexible game board sizing
- Responsive width adjustments
- Better support for smaller screens
- Prevents the game from overflowing the display

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Development Tools

- Node.js
- npm
- Parcel
- Jest
- Puppeteer
- Git
- GitHub Pages

---

# Project Structure

```
js-dev-final-capstone-starter-whack-a-mole
│
├── index.html
│
├── src
│   ├── index.js
│   └── styles.css
│
├── assets
│   ├── background.png
│   ├── hole.png
│   ├── mole.png
│   ├── mallet.png
│   ├── hit.mp3
│   └── molesong.mp3
│
├── test
│   └── solution.test.js
│
├── package.json
│
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/yordan95acosta/js-dev-final-capstone-starter-whack-a-mole.git
```

Navigate to the project folder:

```bash
cd js-dev-final-capstone-starter-whack-a-mole
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The game will run locally at:

```
http://localhost:3000
```

---

# Testing

The project uses Jest and Puppeteer for automated testing.

Run:

```bash
npm test
```

Current test result:

```
Test Suites: 1 passed
Tests: 32 passed
```

All required functionality has passed automated testing.

---

# Completed User Stories

## US-01 - Basic Game Structure

Completed:

- Added game title using:

```html
<h1 id="title">Whack-A-Mole!</h1>
```

- Added start button
- Added score display
- Added timer display
- Added nine holes and moles
- Added JavaScript selectors for game elements

---

## US-02 - Randomness

Completed:

- Random number generation
- Random mole locations
- Random appearance timing
- Prevents the same hole from repeating consecutively

---

## US-03 - Game Flow

Completed:

- Mole show and hide system
- Game loop
- Start button functionality
- Random mole movement
- Automatic game ending

---

## US-04 - Whack and Scoring

Completed:

- Mole click detection
- Score increase
- Score reset
- Click event listeners

---

## US-05 - Timer

Completed:

- Countdown timer
- Timer updates every second
- Game stops when timer reaches zero

---

## US-06 - Originality

Completed:

Added custom features:

- Responsive layout
- Improved visual design

---

## US-07 - Deployment

Completed:

The game is deployed using GitHub Pages.

Live URL:

https://yordan95acosta.github.io/js-dev-final-capstone-starter-whack-a-mole/

---

# Git Commit History

The project was developed using Git with commits showing progress throughout development.

Examples:

```
Initial project setup
Added game HTML structure
Implemented random mole movement
Added scoring functionality
Added timer system
Improved responsive design
Added sound effects
Completed final game version
```

---


# Credits

Game concept inspired by the classic arcade game **Whack-A-Mole**.

Starter project provided by Thinkful Education.

Developed and customized by:

**Yordan Acosta**