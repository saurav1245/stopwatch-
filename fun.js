// Get elements from HTML
const display = document.querySelector('.display');
const hours = display.querySelector('.hours');
const minutes = display.querySelector('.minutes');
const seconds = display.querySelector('.seconds');
const milliseconds = display.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

// Define variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Define function to update display with elapsed time
function updateTime() {
  const elapsed = Date.now() - startTime + elapsedTime;

  const hoursText = Math.floor(elapsed / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutesText = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const secondsText = Math.floor((elapsed % (1000 * 60)) / 1000).toString().padStart(2, '0');
  const millisecondsText = Math.floor(elapsed % 1000).toString().padStart(3, '0');

  hours.textContent = hoursText;
  minutes.textContent = minutesText;
  seconds.textContent = secondsText;
  milliseconds.textContent = millisecondsText;
}

// Define function to start timer
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTime, 10);
  startButton.disabled = true;
}

// Define function to stop timer
function stopTimer() {
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
  startButton.disabled = false;
}

// Define function to reset timer
function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  updateTime();
}

// Add event listeners to buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
