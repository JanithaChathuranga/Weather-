// Define the API endpoint and key
const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  // Replace with your OpenWeatherMap API key

// Function to fetch weather data
function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city === "") {
        document.getElementById('errorMessage').textContent = "Please enter a city name.";
        return;
    }
    
   // Clear previous error messages
    document.getElementById('errorMessage').textContent = '';

    // Fetch weather data from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=city   appid={apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('errorMessage').textContent = "City not found!";
                return;
            }

            // Get weather data from the API response
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display the weather info on the page
            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: temperature°C`;
            document.getElementById('description').textContent = `Weather:{description}`;
            document.getElementById('humidity').textContent = `Humidity: humidity
            document.getElementById('windSpeed').textContent = `Wind Speed:{windSpeed} m/s`;
        })
        
       .catch(error => {
            document.getElementById('errorMessage').textContent = "Error fetching data. Please try again.";
            console.error("Error fetching weather data:", error);
        });
}