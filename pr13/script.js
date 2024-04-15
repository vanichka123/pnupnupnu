const squareElement = document.getElementById("square");
const colorElement = document.getElementById("color");
const difficultyElement = document.getElementById("difficulty");
const startButton = document.getElementById("start_btn");

const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("timer");
const scoreValueElement = document.getElementById("score_val");
const timeLeftElement = document.getElementById("time_left");

let score = 0;
let timeLeft;
let timerInterval;
let clickSquareOnceFlag = false;

startButton.addEventListener("click", startGame);

function startGame() {
  const { color, time } = getGameSettings();
  timeLeft = time;
  hideSettings();
  displayGameUI();
  displaySquare(color);
  startTimer();
}

function getGameSettings() {
  const color = colorElement.value;
  let time;
  switch (difficultyElement.value) {
    case "easy":
      time = 3;
      break;
    case "medium":
      time = 2;
      break;
    case "hard":
      time = 1;
      break;
  }
  return { color, time };
}

function hideSettings() {
  document.getElementById("settings").style.display = "none";
}

function displaySquare(color) {
  squareElement.style.backgroundColor = color;
  squareElement.style.display = "block";
  if (!clickSquareOnceFlag) {
    squareElement.addEventListener("click", handleSquareClick);
    clickSquareOnceFlag = true;
  }
}

function hideGameUI() {
  scoreElement.style.display = "none";
  timeElement.style.display = "none";
}

function displayGameUI() {
  scoreElement.style.display = "block";
  timeElement.style.display = "block";
}

function handleSquareClick() {
  score++;
  scoreValueElement.textContent = score;
  moveSquare();
  restartTimer();
}

function moveSquare() {
  const maxX = document.body.clientWidth - squareElement.offsetWidth;
  const maxY = document.body.clientHeight - squareElement.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  squareElement.style.left = `${newX}px`;
  squareElement.style.top = `${newY}px`;
}

function restartTimer() {
  clearInterval(timerInterval);
  const { time } = getGameSettings();
  timeLeftElement.textContent = time;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft -= 1;
  if (timeLeft <= 0) {
    endGame();
  } else {
    timeLeftElement.textContent = timeLeft;
  }
}

function endGame() {
  clearInterval(timerInterval);
  squareElement.style.display = "none";
  alert("GG! Score: " + score);
  hideGameUI();
  resetGame();
}

function resetGame() {
  document.getElementById("settings").style.display = "block";
  score = 0;
  scoreValueElement.textContent = score;
  timeLeft = "";
  timeLeftElement.textContent = timeLeft;
  clickSquareOnceFlag = false;
}
