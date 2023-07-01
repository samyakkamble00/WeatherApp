const api = {
    key: "199c829e78383992c970be11cbef4a25",
    base: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector("#searchCity");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const city = searchBox.value;
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png"
            }else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png"
            }else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png"
            }else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png"
            }else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png"
            }
        })
        .catch((e) => console.log("error"));
}

searchBtn.addEventListener("click", () => {
    // console.log("clicked search btn");
    checkWeather();
});