let start_btn = document.getElementById("start_btn");
let board = document.getElementById("board");
let timer_display = document.getElementById("timer");
let target_display = document.getElementById("target");
let moves_display = document.getElementById("moves");

let timer_interval;
let board_size = 5;
let moves = 0;
let levels = [];
let current_lvl = 0;

fetch("levels.json")
  .then((response) => response.json())
  .then((data) => {
    levels = data.levels;
  });

start_btn.addEventListener("click", function () {
  if (start_btn.textContent === "Start Game") {
    start_game();
  } else {
    new_game();
  }
});

function start_game() {
  start_btn.textContent = "Change lvl";
  moves = 0;
  moves_display.textContent = moves;

  load_level(current_lvl);
  start_timer();
}

function new_game() {
  current_lvl = (current_lvl + 1) % levels.length;
  load_level(current_lvl);

  moves = 0;
  moves_display.textContent = moves;

  start_timer();
}

function load_level(level) {
  let matrix = levels[level].matrix;

  board.innerHTML = "";

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      let cellElem = document.createElement("div");
      cellElem.classList.add("cell", cell === 1 ? "on" : "off");
      cellElem.addEventListener("click", function () {
        toggle_cells(rowIndex, colIndex);
        moves++;
        moves_display.textContent = moves;

        if (check_win(matrix)) {
          clearInterval(timer_interval);
          alert(`You won in ${moves} moves!`);
          new_game();
        }
      });
      board.appendChild(cellElem);
    });
  });

  target_display.textContent = levels[level].min_steps;
}

function toggle_cells(row, col) {
  toggle_cell(row, col);
  toggle_cell(row - 1, col);
  toggle_cell(row + 1, col);
  toggle_cell(row, col - 1);
  toggle_cell(row, col + 1);
}

function toggle_cell(row, col) {
  if (row >= 0 && row < board_size && col >= 0 && col < board_size) {
    let cellElem = board.children[row * board_size + col];
    cellElem.classList.toggle("on");
    cellElem.classList.toggle("off");
  }
}

function check_win(matrix) {
  return matrix.every((row) => row.every((cell) => cell === 0));
}

function start_timer() {
  clearInterval(timer_interval);
  timer_display.textContent = 0;

  let seconds = 0;
  timer_interval = setInterval(() => {
    seconds++;
    timer_display.textContent = seconds;
  }, 1000);
}
