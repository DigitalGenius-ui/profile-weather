import { changeDegree } from "..";
import { newDaily } from "../interface/interface";
const timelyWeather = document.querySelector('.timelyWeather');

export const dailyUI = (data: newDaily) => {
    let degree = "C"
    for (const hour of data.daily) {
        timelyWeather!.innerHTML +=  `
        <div class="single-time">
            <h1>${hour.title}</h1>
            <img src="http://openweathermap.org/img/wn/${hour.icon}@2x.png" alt="weatherIcon">
            <p>${(hour.weather).toFixed()}°${changeDegree(degree)}</p>
        </div>
        `
    }
}