const apiKey ="082243ebc1e445c2eac7a3d532e32dba";

const weatherDataEl = document.getElementById("weather-data")

const cityInputEl = document.getElementById("input-text")

const formEl = document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    // console.log(cityValue);
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{

        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);

        if(!responce.ok){
            throw new Error("Network Responce was not ok");
        }    

        const data = await responce.json();
        
        const temprature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels like : ${Math.round(data.main.feels_like)}`,
            `Humidity : ${data.main.humidity}%`,
            `Wind Speed : ${data.wind.speed}m/s`
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
        weatherDataEl.querySelector(".temperature").textContent = `${temprature}°C`;
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map((ele)=>{
            return `<div>${ele}</div>`
        }).join("");

    }catch(error){
        weatherDataEl.querySelector(".icon").innerHTML = ``
        weatherDataEl.querySelector(".temperature").textContent = ``;
        weatherDataEl.querySelector(".description").textContent = "An error occured, pleaze try again later";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}
