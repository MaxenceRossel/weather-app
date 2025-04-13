function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  function getFakeWeatherData(city) {
    const descriptions = ["ensoleillé", "nuageux", "pluvieux", "orageux", "neigeux", "brumeux"];
    const icons = {
      "ensoleillé": "01d",
      "nuageux": "03d",
      "pluvieux": "09d",
      "orageux": "11d",
      "neigeux": "13d",
      "brumeux": "50d"
    };
  
    const description = getRandomFromArray(descriptions);
    const temp = (Math.random() * 30 - 5).toFixed(1); // entre -5°C et 25°C
    const icon = icons[description];
  
    return {
      name: city,
      main: { temp: temp },
      weather: [{ description: description, icon: icon }]
    };
  }
  
  function displayWeather(data) {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡️ Température : ${data.main.temp}°C`;
    document.getElementById("description").textContent = `📋 Description : ${data.weather[0].description}`;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weatherResult").classList.remove("hidden");
  }
  
  function getFakeWeatherByCity() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return;
    const fakeData = getFakeWeatherData(city);
    displayWeather(fakeData);
  }
  
  // Simuler une géolocalisation (optionnel)
  window.onload = function () {
    const fakeCity = "Paris";
    const fakeData = getFakeWeatherData(fakeCity);
    displayWeather(fakeData);
  };
  