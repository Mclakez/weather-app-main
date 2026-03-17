import CurrentWeather from './CurrentWeather.jsx'
import WeatherDetails from './WeatherDetails.jsx'
import DailyForecast from './DailyForecast.jsx'
import HourlyForecast from './HourlyForecast.jsx'
import {useState, useEffect} from "react"




export default function Forecast({url, weather, error, loading, setLoading, setWeather, setError, callWeather, values}) {

//    const latitude = 52.52; 
//    const longitude = 13.41; 
// //    const unit = "fahrenheit"; // or "celsius"
// const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code&hourly=temperature_2m,rain,showers,snowfall,weather_code&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,showers_sum,rain_sum,weather_code`;

// // &temperature_unit=${unit}
//    const [weather, setWeather] = useState(null)
//    const [error, setError] = useState(null)
//    const [loading, setLoading] = useState(true)
useEffect(() => {
            callWeather()
        }, [])
   
   
    return(
       <div className="grid grid-cols-3 gap-4 pb-6 mt-8 ">
         <div className="col-span-2">
            <CurrentWeather weather={weather} error={error} loading={loading} values={values}/>
            <WeatherDetails weather={weather} error={error} loading={loading}/>
            <DailyForecast weather={weather} error={error} loading={loading}/>
         </div>
        <HourlyForecast weather={weather} error={error} loading={loading}/>
       </div>
    )
}