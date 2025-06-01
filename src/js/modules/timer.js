/**
 * Workout Timer functionality for Aryan Gym
 */

export function initWorkoutTimer() {
  const timerDisplay = document.getElementById('timerDisplay');
  const startBtn = document.getElementById('startTimer');
  const pauseBtn = document.getElementById('pauseTimer');
  const resetBtn = document.getElementById('resetTimer');
  
  if (!timerDisplay || !startBtn || !pauseBtn || !resetBtn) {
    return;
  }
  
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let interval = null;
  let isRunning = false;
  
  // Start timer
  startBtn.addEventListener('click', () => {
    if (!isRunning) {
      isRunning = true;
      interval = setInterval(updateTimer, 1000);
      startBtn.textContent = 'Resume';
      startBtn.disabled = true;
      pauseBtn.disabled = false;
    }
  });
  
  // Pause timer
  pauseBtn.addEventListener('click', () => {
    if (isRunning) {
      clearInterval(interval);
      isRunning = false;
      startBtn.disabled = false;
      pauseBtn.disabled = true;
    }
  });
  
  // Reset timer
  resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startBtn.textContent = 'Start';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  });
  
  // Update timer display
  function updateTimer() {
    seconds++;
    
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    
    updateDisplay();
  }
  
  // Format and display the timer
  function updateDisplay() {
    const h = hours < 10 ? '0' + hours : hours;
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;
    
    timerDisplay.textContent = `${h}:${m}:${s}`;
  }
  
  // Initialize display
  updateDisplay();
  
  // Disable pause button initially
  pauseBtn.disabled = true;
}