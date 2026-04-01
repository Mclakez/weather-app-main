import dropdownIcon from "/assets/images/icon-dropdown.svg";
import {useState} from "react"
import "./index.css"

const weatherIcons = {
    0: "/assets/images/icon-sunny.webp",
    1: "/assets/images/icon-partly-cloudy.webp",
    2: "/assets/images/icon-cloudy.webp",
    3: "/assets/images/icon-overcast.webp",
    45: "/assets/images/icon-fog.webp",
    48: "/assets/images/icon-fog.webp",
    51: "/assets/images/icon-drizzle.webp",
    53: "/assets/images/icon-drizzle.webp",
    55: "/assets/images/icon-drizzle.webp",
    61: "/assets/images/icon-rain.webp",
    63: "/assets/images/icon-rain.webp",
    65: "/assets/images/icon-rain.webp",
    71: "/assets/images/icon-snow.webp",
    73: "/assets/images/icon-snow.webp",
    75: "/assets/images/icon-snow.webp",
};

// function getWeatherIcon(code) {
//     return weatherIcons[code] || "/assets/images/icon-sunny.webp";
// }

function getWeatherIcon(code) {
    if (code === 0) return "/assets/images/icon-sunny.webp";
    if (code === 1) return "/assets/images/icon-partly-cloudy.webp";
    if (code === 2 || code === 3) return "/assets/images/icon-overcast.webp";
    if (code === 45 || code === 48) return "/assets/images/icon-fog.webp";
    if (code === 51 || code === 53 || code === 55) return "/assets/images/icon-drizzle.webp";
    if (code === 61 || code === 63 || code === 65) return "/assets/images/icon-rain.webp";
    if (code === 71 || code === 73 || code === 75) return "/assets/images/icon-snow.webp";
    return "/assets/images/icon-sunny.webp"; // Default fallback
}

export default function HourlyForecast({weather,error, loading}) {
 if (loading) {
        const items =[]
        let i = 1

        while (i <= 24) {
            items.push(<li key={i} className="w-full min-h-[2rem] animate-pulse bg-neutral-700 rounded" />);
                        i++;
        }


        return(
        <div className="bg-neutral-800 rounded  p-4 ">
            <div className="flex justify-between items-center">
                <p >Hourly Forecast</p>
                 <div className="font-sans relative">
                    <div className="bg-neutral-700 flex items-center gap-3 px-2 py-1 rounded cursor-pointer">
                    <span >-</span>
                    <img src={dropdownIcon} alt="Dropdown Icon" />
                    </div>

                    
      
                </div>

               
            </div>
             <ul className="flex flex-col gap-2 mt-2 max-h-[60vh] overflow-y-auto">
                    {items.map(item => item)}     
                </ul>
       
        </div>
    )
    }


    const [showDays, setShowDays] = useState(false)
    
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" } )
    const [day, setDay] = useState(today)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const availableDays = [...new Set(
        weather.hourly.time.map(date => new Date(date).toLocaleDateString("en-US", { weekday: "long" }))
    )]

    function displayDays() {
        setShowDays(!showDays)
    }

    const convertedDays = weather.hourly.time.map((date,index) => ({
        date,
        temperature: weather.hourly.temperature_2m[index],
        rain: weather.hourly.rain[index],
        showers: weather.hourly.showers[index],
        snowfall: weather.hourly.snowfall[index],
        code: weather.hourly.weather_code[index]
    })).filter((convert) => {
        return new Date(convert.date).toLocaleDateString("en-US", { weekday: "long" }) === day
    })

    console.log(weather)

   
   

    return(
        <div className="bg-neutral-800 rounded w-full  p-4">
            <div className="flex justify-between items-center">
                <p >Hourly Forecast</p>
                 <div className="font-sans relative">
                    <button onClick={displayDays} className="bg-neutral-700 flex items-center gap-3 px-2 py-2 rounded- cursor-pointer">
                    <span >{day}</span>
                    <img src={dropdownIcon} alt="Dropdown Icon" />
                    </button>

                    {showDays && (
                        <div className="bg-neutral-800   px-2 py-1 w-60 absolute right-0 mt-2 rounded-lg border border-neutral-600">
                        <ul className="flex flex-col gap-2">
                            
                            {
                                availableDays.map((d) => 
                                    <li className="text-left z-100 cursor-pointer hover:bg-neutral-600 hover:rounded-lg py-2 pl-2">
                                    <p onClick={() => {setDay(d);
                                        setShowDays(false)
                                    }}>{d}</p> 
                                    </li>
                                )
                            }
                        

                        </ul>

                    </div>
                    )}
      
                </div>

               
            </div>
             <ul className="flex flex-col gap-2 mt-2 overflow-y-auto max-h-[450px]">
                    {convertedDays.map((convertedDay, index) => (
                        <li key={convertedDay.date} className="flex items-center justify-between gap-1 bg-neutral-700 p-1 border border-neutral-600 rounded-lg">
                            
                            <div className="flex items-center gap-1">
                            <img src={getWeatherIcon(convertedDay.code)} className="w-8"/>
                            <p><span>{new Date(convertedDay.date).toLocaleTimeString("en-US", { hour: "2-digit"})}</span></p>
                        </div>
                        <p className="mr-1">{convertedDay.temperature}&deg;</p>
                        </li>
                    ))}

                   
                    
                </ul>
       
        </div>
    )
}