const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const startButton = document.querySelector("#start");

const score = document.querySelector("#score");
const timerDisplay = document.querySelector("#timer");
const gameMessage = document.querySelector("#gameMessage");

let time = 10;
let timer;
let lastHole = null;
let points = 0;
let difficulty = "hard";
let gameRunning = false;



function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function setDelay(difficulty) {

  if (difficulty === "easy") {
    return 1500;
  }

  if (difficulty === "normal") {
    return 1000;
  }

  return randomInteger(600, 1200);

}




function chooseHole(holes) {

  let index = randomInteger(0, holes.length - 1);

  let hole = holes[index];


  if (hole === lastHole) {
    return chooseHole(holes);
  }


  lastHole = hole;

  return hole;

}




function gameOver() {

  if (time > 0) {

    return showUp();

  } else {

    return stopGame();

  }

}





function showUp() {

  const delay = setDelay(difficulty);

  const hole = chooseHole(holes);


  return showAndHide(hole, delay);

}





function showAndHide(hole, delay) {

  toggleVisibility(hole);


  const timeoutID = setTimeout(() => {

    hole.classList.remove("show");

    gameOver();

  }, delay);


  return timeoutID;

}





function toggleVisibility(hole) {

  hole.classList.toggle("show");

  return hole;

}





function updateScore() {

  points++;

  score.textContent = points;

  return points;

}





function clearScore() {

  points = 0;

  score.textContent = points;

  return points;

}





function updateTimer() {

  if (time > 0) {

    time--;

    timerDisplay.textContent = time;

  }


  return time;

}





function startTimer() {

  timer = setInterval(updateTimer, 1000);

  return timer;

}





function whack(event) {

  // Support automated tests calling whack() without an event
  if (!event) {

    updateScore();

    return points;

  }


  const mole = event.target;


  if (mole.classList.contains("hit")) {

    return points;

  }


  updateScore();


  mole.classList.add("hit");


  if (mole.parentElement) {

    mole.parentElement.classList.remove("show");

  }


  setTimeout(() => {

    mole.classList.remove("hit");

  }, 300);


  return points;

}





function setEventListeners() {

  moles.forEach(mole => {

    mole.removeEventListener("click", whack);

    mole.addEventListener("click", whack);

  });


  return moles;

}





function setDuration(duration) {

  time = duration;

  timerDisplay.textContent = time;

  return time;

}





function stopGame(){

  clearInterval(timer);

  gameRunning = false;


  holes.forEach(hole => {
    hole.classList.remove("show");
  });


  if(time <= 0){

    gameMessage.textContent =
      `Game Over! Final Score: ${points}`;

    gameMessage.classList.add("game-over");

  }


  return "game stopped";

}




function startGame(){


  if(gameRunning){

    return "game already started";

  }


  gameRunning = true;


  clearScore();


  gameMessage.textContent = "";

  gameMessage.classList.remove("game-over");


  clearInterval(timer);


  setDuration(10);


  setEventListeners();


  startTimer();


  showUp();


  return "game started";

}




startButton.addEventListener("click", startGame);


startButton.addEventListener("dblclick", (event) => {

  event.preventDefault();

});





// Testing exports

window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;