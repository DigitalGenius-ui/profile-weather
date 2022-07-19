import { daily, dataType, hourly, units } from "../interface/interface";
const { DateTime } = require("luxon");

const API_CODE = "b52f4a2d50c9fe1cf9aa5e28cff5067d";
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

// making a url generator

function urlGenerator(weatherType: string, searchParam: object) {
    let url = new URL(BASE_URL + "/" + weatherType);
    url.search = new URLSearchParams({
        ...searchParam,
        appid: API_CODE,
    }).toString();
    return fetch(url).then((item) => item.json());
}

export const dataGenerator = async (searchParam: units) => {
    const response = await urlGenerator("weather", searchParam).then(
        formatAllData
    );
    // get the timely data
    const { lat, lon } = response;
    const timelyData = await urlGenerator("onecall", {
        lat, lon, exclude: "minutely, daily, alerts", units: searchParam.units
    }).then(formatDates);
    return { ...response,...timelyData }
};

const formatAllData = (data: dataType) => {
    const {
        coord: { lat, lon },
        main: { feels_like, humidity, temp, temp_max, temp_min, pressure },
        name,
        dt,
        sys: { country, sunrise, sunset },
        timezone,
        weather: [{ description, icon }],
        wind: { speed },
    } = data;

    return {
        lat,
        lon,
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min,
        name,
        dt,
        country,
        sunrise,
        sunset,
        timezone,
        description,
        icon,
        speed,
        pressure
    };
};

const formatDates = (data: any) => {
    let { hourly, daily, timezone } = data;
    hourly = hourly.slice(1, 7).map((item:hourly) => {
        return {
            title : formatTime(item.dt, timezone, "hh:mm a"),
            weather : item.temp,
            icon : item.weather[0].icon
        }
    });
    daily = daily.slice(1, 7).map((item:daily) => {
        return {
            title : formatTime(item.dt, timezone, "ccc"),
            weather : item.temp.day,
            icon : item.weather[0].icon
        }
    });
    return {hourly, daily}
};

export const formatTime = (sec:number, zone:number, format="c LLL yyyy | 'Local Time : 'hh : mm a") => (
    DateTime.fromSeconds(sec).setZone(zone).toFormat(format)
);
