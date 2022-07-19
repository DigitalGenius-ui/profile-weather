import { changeDegree } from "..";
import { newHourly } from "../interface/interface";
const timelyWeather = document.querySelector('.timelyWeather');

export const hourlyUI = (data: newHourly) => {
    let degree = "C";
    for (const hour of data.hourly) {
        timelyWeather!.innerHTML +=  `
        <div class="single-time">
            <h1>${hour.title}</h1>
            <img src="http://openweathermap.org/img/wn/${hour.icon}@2x.png" alt="weatherIcon">
            <p>${(hour.weather).toFixed()}°${changeDegree(degree)}</p>
        </div>
        `
    }
}