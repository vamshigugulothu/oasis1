// Add event listener for the checkbox change
document.getElementById('kelvinCheckbox').addEventListener('change', function() {
  var kelvinOption = document.querySelector('option[value="kelvin"]');
  if (this.checked) {
      kelvinOption.style.display = 'block';
  } else {
      kelvinOption.style.display = 'none';
  }
});

document.getElementById('convertForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input temperature value
  var inputTemperature = parseFloat(document.getElementById('temperatureInput').value);

  // Get the selected unit from the dropdown
  var selectedUnit = document.getElementById('unitSelect').value;

  // Perform the conversion based on the selected unit
  var convertedTemperatureCelsius, convertedTemperatureFahrenheit, convertedTemperatureKelvin;

  if (selectedUnit === 'celsius') {
      convertedTemperatureCelsius = inputTemperature;
      convertedTemperatureFahrenheit = (inputTemperature * 9/5) + 32;
      convertedTemperatureKelvin = inputTemperature + 273.15;
  } else if (selectedUnit === 'fahrenheit') {
      convertedTemperatureCelsius = (inputTemperature - 32) * 5/9;
      convertedTemperatureFahrenheit = inputTemperature;
      convertedTemperatureKelvin = (inputTemperature - 32) * 5/9 + 273.15;
  } else if (selectedUnit === 'kelvin') {
      convertedTemperatureCelsius = inputTemperature - 273.15;
      convertedTemperatureFahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
      convertedTemperatureKelvin = inputTemperature;
  }

  // Check if Kelvin conversion is requested
  var showKelvinConversion = document.getElementById('kelvinCheckbox').checked;

  // Create the result string
  var resultString = "";

  // Add the remaining conversions to the result string
  if (selectedUnit !== 'celsius') {
      resultString += "Celsius: " + convertedTemperatureCelsius.toFixed(2) + " °C<br>";
  }
  if (selectedUnit !== 'fahrenheit') {
      resultString += "Fahrenheit: " + convertedTemperatureFahrenheit.toFixed(2) + " °F<br>";
  }
  if (showKelvinConversion && selectedUnit !== 'kelvin') {
      resultString += "Kelvin: " + convertedTemperatureKelvin.toFixed(2) + " K<br>";
  }

  // Display the converted temperatures
  document.getElementById('convertedTemperature').innerHTML = resultString;
});

// Get the reset button element
var resetButton = document.getElementById('resetButton');

// Add event listener for the reset button click
resetButton.addEventListener('click', function() {
  // Reset the form
  document.getElementById('convertForm').reset();

  // Clear the result
  document.getElementById('convertedTemperature').innerHTML = '';
});

var kelvinOption = document.querySelector('#unitSelect option[value="kelvin"]');
kelvinOption.style.display = 'none';