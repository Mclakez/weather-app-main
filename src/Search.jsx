import searchIcon from "/assets/images/icon-search.svg";


export default function Search({ city, setCity, onAction, callWeather }) {
    // const [city, setCity] = useState(null)

    // async function getCityDetails() {
    //     const cityRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)
    //     const cityData = await cityRes.json()
    //     console.log(cityData.results)

    // }


    return (
        <div className="flex items-center justify-center gap-2">
            <div className="relative w-[40%]">
                <img src={searchIcon} alt="Search Icon" className="absolute left-4 top-1/2 -translate-y-1/2"/>
                <input 
                placeholder="Search for a city"
                type="text"
                className="bg-neutral-800 px-12 py-2 rounded w-full"
                value={city} 
                onChange={e => setCity(e.target.value)}
                />

        <ul className="bg-neutral-800 flex flex-col gap-2 px-2 py-1 rounded w-full absolute right-0 mt-2 hidden">
          <li className="flex flex-col gap-2 text-left bg-neutral-700 rounded p-1">City name</li>
          <li className="flex flex-col gap-2 text-left rounded p-1">City name</li>
          <li className="flex flex-col gap-2 text-left rounded p-1">City name</li>
        </ul>
        </div>
            <button className="bg-blue-700 py-2 px-4 rounded" onClick={() => { onAction(); callWeather(); }}>Search</button>
        </div>
    )
}