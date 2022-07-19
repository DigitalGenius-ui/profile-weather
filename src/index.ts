import { dailyUI } from "./components/daily";
import { highlightUI } from "./components/highligthUI";
import { hourlyUI } from "./components/hourly";
import { mainTemp } from "./components/temp";
import { dataGenerator, formatTime } from "./config/weather.api";
import "./styles/main.scss";
// daily and hourly buttons 
const buttons = document.querySelector(".buttons");
const daily = document.querySelector(".daily");
const hourly = document.querySelector(".hourly");
// degree chang buttons 
const cDegree = document.querySelector(".cDegree");
const fDegree = document.querySelector(".fDegree");
const search = document.querySelector(".search") as HTMLInputElement;
const searchIcon = document.querySelector(".searchIcon");

let searchParam = {q : "melbourne"};
let units = "metric";

// degree toggle 
let degreeToggle = true;

let degreeSign = false;

async function fetchData(){
    await dataGenerator({...searchParam, units}).then((data) => {
        mainTemp(data);
        highlightUI(data);
        if(degreeToggle){
            dailyUI(data)
        }else{
            hourlyUI(data);
        }

    })
}
fetchData();

// daily and hourly weather toggles 
buttons?.addEventListener("click", (e) => {
    const event = e.target as HTMLInputElement;
    if(event.classList.contains("daily")){
        degreeToggle = true;
        fetchData();
        document.querySelector('.timelyWeather')!.innerHTML = "";
        event.classList.add("active");
        hourly?.classList.remove("active");
    }

    if(event.classList.contains("hourly")){
        degreeToggle = false;
        fetchData();
        document.querySelector('.timelyWeather')!.innerHTML = "";
        event.classList.add("active");
        daily?.classList.remove("active");
    }

});

// c and f degrees toggle 
cDegree?.addEventListener("click", (e) => {
    const event = e.target as HTMLInputElement;
        event.classList.add("active");
        fDegree?.classList.remove("active");
        changeDegree("C");
        units = "metric";
        fetchData();
        document.querySelector('.timelyWeather')!.innerHTML = "";
        degreeSign = false;
});

fDegree?.addEventListener("click", (e) => {
    const event = e.target as HTMLInputElement;
    event.classList.add("active");
    cDegree?.classList.remove("active");
    changeDegree("F");
    units = "imperial";
    fetchData();
    document.querySelector('.timelyWeather')!.innerHTML = ""
    degreeSign = true;
});

// search handler 
searchIcon?.addEventListener("click", () => {
    searchParam = {q : search.value}
    document.querySelector('.timelyWeather')!.innerHTML = ""
    fetchData();
})


export function changeDegree(degree :string){
    degree = degreeSign ? degree = "F" : "C"
    return degree
}