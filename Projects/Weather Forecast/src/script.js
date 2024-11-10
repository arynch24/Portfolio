//Added comments using ChatGPT

// Select the search button element by its ID
const searchButton = document.getElementById("search-btn");

// Base URL for the OpenWeatherMap API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// API key for authentication
const apiKey = "&appid=b13b9168acf4508c03798d8a61654ad2";

// Select elements for displaying weather data
const temperature = document.querySelector(".temp");
const cityDisplay = document.querySelector(".inputCity");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIconElement = document.querySelector(".weather-icon");

// Select the user input field for the city name
const userInput = document.getElementById("user-input");

// Validate the city input is not empty
function validateCity(city) {
    return city !== ''; 
}

// Function to call the weather API and display data
async function apiCall() {
    try {
        const city = userInput.value;  // Get city name from user input

        // Check if city is valid before making API call
        if (validateCity(city)) {
            // Fetch weather data from the API
            const response = await fetch(apiURL + city + apiKey);
            const data = await response.json();  // Parse response as JSON

            console.log(data);  // Log data for debugging

            // Display weather data on the webpage
            temperature.innerHTML = `${data.main.temp} °C`;      // Show temperature
            cityDisplay.innerHTML = data.name;                  // Show city name
            humidity.innerHTML = `${data.main.humidity} %`;      // Show humidity
            wind.innerHTML = `${data.wind.speed} km/h`;          // Show wind speed

            // Display appropriate weather icon based on weather condition
            weatherIconElement.setAttribute("src", `../public/${data.weather[0].main}.png`);
            console.log(weatherIconElement.getAttribute("src"));  // Log icon source for debugging

        } else {
            console.log("City is empty.");  // Log if city input is empty
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);  // Handle and log errors
    }
}

// Add event listener to the search button to trigger API call on click
searchButton.addEventListener('click', apiCall);

// Add event listener for Enter key on the input field to trigger search
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        apiCall();  // Trigger API call if Enter key is pressed
    }
});
