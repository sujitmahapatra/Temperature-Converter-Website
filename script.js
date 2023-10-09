document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        convertTemperature();
    });

    temperatureInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            convertTemperature();
        }
    });

    function convertTemperature() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        if (unit === "celsius") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultDiv.innerText = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature - 32) * 5/9;
            resultDiv.innerText = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
        } else {
            resultDiv.innerText = "Invalid unit";
        }
    }
});
