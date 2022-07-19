import { changeDegree } from "..";
import { formatTime } from "../config/weather.api";
import { finalData } from "../interface/interface";

export const highlightUI = (data:finalData) => {
    let degree = "C"
    const minMax = `
        <h1>Max/Min Temp</h1>
        <div>
            <span class="icon"><i class="bi bi-thermometer-high"></i></span>
            <span>${(data.temp_max).toFixed()}°${changeDegree(degree)}</span>
        </div>
        <div>
            <span class="icon"><i class="bi bi-thermometer-low"></i></span>
            <span>${(data.temp_min).toFixed()}°${changeDegree(degree)}</span>
        </div>
    `
    document.querySelector(".minmax")!.innerHTML = minMax;

    const sunTime = `
        <h1>Sunrise/Sunset</h1>
        <div>
            <span class="icon"><i class="bi bi-sunrise-fill"></i></span>
            <span class="sunrise">${formatTime(data.sunrise, data.timezone, "hh:mm a")}</span>
        </div>
        <div>
            <span class="icon"><i class="bi bi-sunset-fill"></i></span>
            <span class="sunrset">${formatTime(data.sunset, data.timezone, "hh:mm a")}</span>
        </div>
    `
    document.querySelector(".sunTime")!.innerHTML = sunTime;

    const feelLike = `
        <span class="icon"><i class="bi bi-thermometer"></i></span>
        <span class="fleeDegree">${(data.feels_like).toFixed()}°</span>
    `
    document.querySelector(".feel-like")!.innerHTML = feelLike;

    const humidity = `
        <span class="icon"><i class="bi bi-droplet-fill"></i></span>
        <span class="fleeDegree">${(data.humidity).toFixed()}<span style="font-size: 1.1rem">%</span></span>
    `
    document.querySelector(".humidity")!.innerHTML = humidity;

    const wind = `
        <span class="icon"><i class="bi bi-wind"></i></span>
        <span class="fleeDegree">${(data.speed).toFixed(1)}<span style="font-size: 1.1rem">Km/h</span></span>
    `
    document.querySelector(".wind")!.innerHTML = wind;

    const pressure = `
        <span class="icon"><i class="bi bi-cloud-haze2-fill"></i></span>
        <span class="fleeDegree">${(data.pressure)}<span style="font-size: 1.1rem">Km</span></span>
    `
    document.querySelector(".pressure")!.innerHTML = pressure;
}