const rgbValue = document.getElementById("rgb-value");
const colourOptions = document.getElementById("colour-options");
const newGameButton = document.getElementById("new-game");
const gameOverContainer = document.getElementById("game-over-container");
const scoreElement = document.getElementById("score");
const newGameOverButton = document.getElementById("new-game-over");

let lives = 3;
let score = 0;
let currentRgb;

function generateRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}