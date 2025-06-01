/**
 * BMI Calculator functionality for Aryan Gym
 */

export function initBmiCalculator() {
  const bmiForm = document.getElementById('bmiForm');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const calculateBtn = document.getElementById('calculateBmi');
  const resetBtn = document.getElementById('resetBmi');
  const resultElement = document.getElementById('bmiResult');
  const messageElement = document.getElementById('bmiMessage');
  const infoElement = document.getElementById('bmiInfo');
  
  if (!bmiForm || !heightInput || !weightInput || !calculateBtn || !resetBtn || !resultElement || !messageElement || !infoElement) {
    return;
  }
  
  // Calculate BMI when button is clicked
  calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultElement.textContent = 'Error';
      messageElement.textContent = 'Please enter valid height and weight values';
      messageElement.style.color = 'var(--error-color)';
      return;
    }
    
    // Calculate BMI (weight in kg / (height in m)²)
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBmi = Math.round(bmi * 10) / 10;
    
    // Display result
    resultElement.textContent = roundedBmi.toString();
    
    // Set message based on BMI value
    let message = '';
    let messageColor = '';
    
    if (bmi < 18.5) {
      message = 'Underweight';
      messageColor = 'var(--warning-color)';
    } else if (bmi >= 18.5 && bmi < 25) {
      message = 'Healthy weight';
      messageColor = 'var(--success-color)';
    } else if (bmi >= 25 && bmi < 30) {
      message = 'Overweight';
      messageColor = 'var(--warning-color)';
    } else {
      message = 'Obesity';
      messageColor = 'var(--error-color)';
    }
    
    messageElement.textContent = message;
    messageElement.style.color = messageColor;
    infoElement.style.display = 'block';
  });
  
  // Reset form
  resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bmiForm.reset();
    resultElement.textContent = '0.0';
    messageElement.textContent = 'Enter your details above';
    messageElement.style.color = '';
    infoElement.style.display = 'none';
  });
}