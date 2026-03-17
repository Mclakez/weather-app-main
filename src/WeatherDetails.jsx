export default function WeatherDetails({weather, error, loading}) {
    if (loading) {
        return (
             <div className="flex gap-2 items-center mt-6 mb-8 justify-between">
            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Feels like</span>
                <p className="text-xl">---</p>
            </div>

            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Humidity</span>
                <p className="text-xl">---</p>
            </div>

            <div className="bg-neutral-800 rounded flex
            
            
             flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Wind</span>
                <p className="text-xl">---</p>
            </div>

            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Precipitation</span>
                <p className="text-xl">---</p>
            </div>

        </div>
        )
    }

    return(
        <div className="flex gap-2 items-center mt-6 mb-8 justify-between">
            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Feels like</span>
                <p className="text-xl">{weather.current.apparent_temperature}&deg;</p>
            </div>

            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Humidity</span>
                <p className="text-xl">{weather.current.relative_humidity_2m}%</p>
            </div>

            <div className="bg-neutral-800 rounded flex
            
            
             flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Wind</span>
                <p className="text-xl">{weather.current.wind_speed_10m
} <span>km/h</span></p>
            </div>

            <div className="bg-neutral-800 rounded flex flex-col gap-4 items-start py-4 flex-1 min-w-[150px] px-2">
                <span className="text-sm text-neutral-400">Precipitation</span>
                <p className="text-xl">{weather.current.precipitation}mm</p>
            </div>

        </div>
    )
}