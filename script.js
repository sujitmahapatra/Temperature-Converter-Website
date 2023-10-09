document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");
    const body = document.body;

    // Function to fetch a random background image from Lorem Picsum
    function fetchRandomBackground() {
        const randomImageId = Math.floor(Math.random() * 1000); // You can change the maximum number as per your preference
        const imageUrl = `https://picsum.photos/id/${randomImageId}/1920/1080`;

        const tempImage = new Image();
        tempImage.src = imageUrl;

        tempImage.onload = function () {
            body.style.backgroundImage = `url(${imageUrl})`;
            body.style.transition = "background-image 1s ease-in-out";
        };
    }

    // Initial background fetch
    fetchRandomBackground();

    // Set interval to change background every 10 seconds (you can adjust this)
    setInterval(fetchRandomBackground, 2000);

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

        // Apply animation to the input, select, and result div
        const elementsToAnimate = [temperatureInput, unitSelect, convertButton, resultDiv];

        elementsToAnimate.forEach((element) => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }
});
