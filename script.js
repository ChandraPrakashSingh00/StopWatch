// Select elements
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const millisecondsElement = document.getElementById("milliseconds");

// Stopwatch state variables
let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    timerInterval;

// Start the stopwatch
function startStopwatch() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            // Update the display
            updateDisplay();
        }, 10);
    }
}

// Stop the stopwatch
function stopStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

// Update the stopwatch display
function updateDisplay() {
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatMilliseconds(milliseconds);
}

// Format time as two digits
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

// Format milliseconds as two digits
function formatMilliseconds(value) {
    return String(value).padStart(3, '0').substring(0, 2);
}

// Add event listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
