// Variables globales
let redScore = 0;
let blueScore = 0;
let timer;
let time = 0; // Tiempo inicial en segundos
let isTimerRunning = false;

// Elementos del marcador
const redScoreElement = document.getElementById("redScore");
const blueScoreElement = document.getElementById("blueScore");
const timerElement = document.querySelector(".timer h2");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const addTimeButton = document.getElementById("addTimeButton");
const subtractTimeButton = document.getElementById("subtractTimeButton");
const btnreiniciarPuntos = document.getElementById("restart_score");

function reiniciarPuntos() {
    redScore = 0;
    blueScore = 0;
    redScoreElement.textContent = redScore;
    blueScoreElement.textContent = blueScore;
  }
// Funciones para actualizar los puntajes
function updateRedScore() {
  redScore++;
  redScoreElement.textContent = redScore;
}

function updateBlueScore() {
  blueScore++;
  blueScoreElement.textContent = blueScore;
}

// Funciones para el temporizador
pauseButton.style.display = "none";
  startButton.style.display = "inline-block";
function startTimer() {
  if (!isTimerRunning) {
    timer = setInterval(() => {
      time++;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerElement.textContent = minutes + ":" + seconds;
    }, 1000);

    isTimerRunning = true;
    startButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
  pauseButton.style.display = "none";
  startButton.style.display = "inline-block";
}



function resetTimer() {
  clearInterval(timer);
  time = 0;
  timerElement.textContent = "00:00";
  isTimerRunning = false;
  pauseButton.style.display = "none";
  startButton.style.display = "inline-block";
}

function addTime() {
  time += 10;
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerElement.textContent = minutes + ":" + seconds;
}

function subtractTime() {
  if (time > 10) {
    time -= 10;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerElement.textContent = minutes + ":" + seconds;
  }
}

// Event listeners
redScoreElement.addEventListener("click", updateRedScore);
blueScoreElement.addEventListener("click", updateBlueScore);
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
addTimeButton.addEventListener("click", addTime);
subtractTimeButton.addEventListener("click", subtractTime);
btnreiniciarPuntos.addEventListener("click", reiniciarPuntos);

// Funcionalidad para agregar y quitar puntos
const scoreButtons = document.querySelectorAll(".score-button");

scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = parseInt(button.dataset.value);

    if (button.parentElement.parentElement.classList.contains("red-score")) {
      redScore += value;
      redScoreElement.textContent = redScore;
    } else if (button.parentElement.parentElement.classList.contains("blue-score")) {
      blueScore += value;
      blueScoreElement.textContent
      blueScoreElement.textContent = blueScore;
    }
  });
});
