import { changeDegree } from "..";
import { finalData } from "../interface/interface";

export const mainTemp = (data : finalData) => {
    let degree = "C";
    const temp = `
        <div class="degree">
        <img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" alt="weatherIcon">
        <h1>${(data.temp).toFixed()}<span>°${changeDegree(degree)}</span></h1>
        </div>
        `
    const location = `
        <span><i class="bi bi-geo"></i></span>
        <p>${data.name} / ${data.country}</p>
    `

    const weatherSituation = `
        <span><i class="bi bi-cloud"></i></span>
        <p>${data.description}</p>
    `
    document.querySelector(".weatherSituation")!.innerHTML = weatherSituation;
    document.querySelector(".location")!.innerHTML = location;
    document.querySelector(".weatherDegree")!.innerHTML = temp;
}