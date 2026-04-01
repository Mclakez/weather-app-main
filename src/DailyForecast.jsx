export default function DailyForecast({weather,error,loading}) {
    if (loading) {
        const items =[]
        let i = 1

        while (i <= 7) {
            items.push(<div key={i} className="bg-neutral-800 rounded flex flex-col gap-2 flex-1 min-w-[100px] py-2 h-30 animate-pulse">
                        
                        </div>);
                        i++;
        }

        return <div>
            <p className="text-left mb-2">Daily Forecast</p>
            <div className="flex gap-2">
                
                {items.map(item => item)}
           
           
        </div>
        </div>
    }
    

const weatherIcons = {
    0: "/assets/images/icon-sunny.webp",
    1: "/assets/images/icon-partly-cloudy.webp",
    2: "/assets/images/icon-overcast.webp",
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

function getWeatherIcon(code) {
    return weatherIcons[code] || "/assets/images/icon-sunny.webp";
}
    return(
        <div className="font-sans">
            <p className="text-left mb-2">Daily Forecast</p>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
                
                {weather.daily.time.map((day, index) => (
                    <div  key={day} className="bg-neutral-800 rounded flex flex-col gap-2 py-2 border border-neutral-600">
                        <p className="text-neutral-400">{new Date(day).toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <img src={getWeatherIcon(weather.daily.weather_code[index])} className="w-16 mx-auto"/>
                        <div className="flex justify-between items-center px-2">
                            <p>{weather.daily.temperature_2m_min[index]}&deg;</p>
                            <p>{weather.daily.temperature_2m_max[index]}&deg;</p>
                        </div>
                    </div>
                ))}
           
           
        </div>
        </div>
    )
}