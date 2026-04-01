import CurrentWeather from './CurrentWeather.jsx'
import WeatherDetails from './WeatherDetails.jsx'
import DailyForecast from './DailyForecast.jsx'
import HourlyForecast from './HourlyForecast.jsx'
import {useState, useEffect} from "react"




export default function Forecast({url, weather, error, loading, setLoading, setWeather, setError, callWeather, values, tempUnit, precipUnit, windUnit}) {


   
   
    return(
       <div className="grid md:grid-cols-3 gap-4 pb-6 mt-8 ">
         <div className="md:col-span-2">
            <CurrentWeather weather={weather} error={error} loading={loading} values={values}/>
            <WeatherDetails weather={weather} error={error} loading={loading} tempUnit={tempUnit} precipUnit={precipUnit} windUnit={windUnit}/>
            <DailyForecast weather={weather} error={error} loading={loading}/>
         </div>
        <HourlyForecast weather={weather} error={error} loading={loading}/>
       </div>
    )
}