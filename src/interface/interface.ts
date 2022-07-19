export interface units {
    units : string,
    q : string,
}

export interface dataType {
    coord : {
        lat : number,
        lon : number
    },
    main: {
        feels_like:  number,
        humidity:  number,
        temp:  number,
        temp_max: number,
        temp_min:  number
        pressure: number,
    },
    name: string,
    dt: number,
    sys: {
        country: string
        sunrise: number,
        sunset: number,
    },
    timezone: number,
    weather: [{
        description: "clear sky",
        icon: "01d",
    }]
    wind: {
        speed: number,
    },
    daily : {
        temp : {
            day : number,
        },
        weather: [{
            icon: "01d"
        }]
    },
    hourly : {
        dt: number,
        weather: [
            {
                icon:string,
            }
        ]
        wind_speed: number,
    }
    temp: number,
}

export interface finalData {
    country: string
    daily:[{
        icon: string
        title: string
        weather: number
    }]
    description: string
    dt: number
    feels_like: number
    hourly: [{
        icon: string
        title: string
        weather: number
    }]
    humidity: number
    icon: string
    lat: number
    lon: number
    name: string
    speed: number
    sunrise: number
    sunset: number
    temp: number
    temp_max: number
    temp_min: number
    timezone: number
    pressure: number
}

export interface daily{
    dt :number
    temp : {
        day : number
    }
    timezone : number
    weather : [
        {
            icon : string
        }
    ]
}
export interface hourly{
    dt :number
    temp : number
    timezone : number
    weather : [
        {
            icon : string
        }
    ]
}

export interface newHourly {
    hourly : [
        {
            title : string,
            icon : string,
            weather : number,
        }
    ]
}
export interface newDaily {
    daily : [
        {
            title : string,
            icon : string,
            weather : number,
        }
    ]
}