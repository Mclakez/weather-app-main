import './App.css'
import StyleGuide from './StyleGuide.jsx'
import Header from './Header.jsx'
import Search from './Search.jsx'
import Error from './Error.jsx'
import Forecast from './Forecast.jsx'
import { useState, useEffect } from "react";


function App() {

const [city, setCity] = useState("Berlin")
const [values, setValues] = useState("")
const [latitude, setLatitude ] = useState(52.52); 
const [ longitude, setLongitude] = useState(13.41);
const [ tempUnit, setTempUnit] = useState("celsius")
const [windUnit, setWindUnit] = useState("kmh")
const [precipUnit, setPrecipUnit] = useState("mm")
const [ units, setUnits] = useState('metric')
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code&hourly=temperature_2m,rain,showers,snowfall,weather_code&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,showers_sum,rain_sum,weather_code&temperature_unit=${tempUnit}&windspeed_unit=${windUnit}&precipitation_unit=${precipUnit}`;

// &temperature_unit=${unit}
   const [weather, setWeather] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)

    async function getCityDetails(selectedCity) {
       setError(null)
        try {
          const cityRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${selectedCity}&count=1&language=en&format=json`)
        const cityData = await cityRes.json()

        if (!cityData.results || cityData.results.length === 0) {
            setError("not_found")
            return
        }
        
        const cityValues = {
          cityName: cityData.results[0].name,
          country: cityData.results[0].country,
          latitude: cityData.results[0].latitude,
          longitude: cityData.results[0].longitude
        }
        console.log(cityValues)
        setValues(cityValues)
        setLatitude(cityValues.latitude)
        setLongitude(cityValues.longitude)
        } catch (err) {
          setError("api_error")
        }
    }

    function selectCity(selectedCity) {
    setValues({
        cityName: selectedCity.name,
        country: selectedCity.country,
        latitude: selectedCity.latitude,
        longitude: selectedCity.longitude
    })
    setLatitude(selectedCity.latitude)
    setLongitude(selectedCity.longitude)
}


     async function fetchCurrentWeather() {
            setError(null)
            setLoading(true)
    
            try {
                setLoading(true)
                const weatherRes = await fetch(url)
                const weatherData = await weatherRes.json()
                console.log(weatherData)
                setWeather(weatherData)
                
    
            } catch (error) {
                setError(`${error}, Something went wrong . Check your API`)
            } finally {
                setLoading(false)
            }
        }

        useEffect(() => {
  fetchCurrentWeather();
}, [latitude, longitude, tempUnit, windUnit, precipUnit]);
    
    

    if(error === "not_found") {
      return (
        <div className="bg-neutral-900 text-neutral-0 px-16 min-h-[100vh]">
            <Header setTempUnit={setTempUnit} setPrecipUnit={setPrecipUnit} setWindUnit={setWindUnit} tempUnit={tempUnit} precipUnit={precipUnit} windUnit={windUnit} />
            <h1 className="font-heading text-4xl mb-12">How's the sky looking today?</h1>
            <Search setCity={setCity} city={city} onAction={getCityDetails} callWeather={fetchCurrentWeather} onSelect={selectCity} />
            <Error callWeather={fetchCurrentWeather} error={error} /> {/* 👈 shows "No results found" */}
        </div>
    )
    } 
    if(error){
       return (
    <div className="bg-neutral-900 text-neutral-0 px-16 min-h-[100vh]">
      <Header />
      <Error callWeather={fetchCurrentWeather} error={error}/>
    </div>
  )
    }

  return (
    <div className="bg-neutral-900 text-neutral-0 px-4 md:px-16 min-h-[100vh] grid place-items-center w-full">
      <div className="max-w-[1500px]">
        <Header setTempUnit={setTempUnit} setPrecipUnit={setPrecipUnit} setWindUnit={setWindUnit} tempUnit={tempUnit} precipUnit={precipUnit} windUnit={windUnit} />
        <h1 className="font-heading text-4xl mb-12">How's the sky looking today?</h1>
        <Search setCity={setCity} city={city} onAction={getCityDetails} callWeather={fetchCurrentWeather} onSelect={selectCity} />
        <Forecast weather={weather} error={error} loading={loading} url={url} setWeather={setWeather} setError={setError} setLoading={setLoading} callWeather={fetchCurrentWeather} values={values} tempUnit={tempUnit} precipUnit={precipUnit} windUnit={windUnit} />
      </div>
    </div>
  )
}

export default App
