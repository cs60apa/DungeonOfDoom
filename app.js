document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
      getWeather(city);
    }
  });
  
  function getWeather(city) {
    const apiKey = ""; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    document.getElementById("weather-display").innerHTML = "<p>Loading...</p>"; // Loading indicator
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("weather-display").innerHTML =
          "<p>City not found!</p>"; // Error message
      });
  }
  
  function displayWeather(data) {
    document.getElementById("city-name").textContent = data.name;
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "description"
    ).textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById(
      "weather-icon"
    ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  
    // Clear loading text
    document.getElementById("weather-display").innerHTML = "";
  }
  
  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherByLocation(lat, lon);
      });
    }
  });
  
  function getWeatherByLocation(lat, lon) {
    const apiKey = ""; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      })
      .catch((error) => {
        console.error("Error fetching the weather data:", error);
        document.getElementById("weather-display").innerHTML =
          "<p>Location-based weather data not available.</p>";
      });
  }
  