import logo from "/assets/images/logo.svg";
import unitsIcon from "/assets/images/icon-units.svg";
import dropdownIcon from "/assets/images/icon-dropdown.svg";
import checkmarkIcon from "/assets/images/icon-checkmark.svg";
import { useState } from "react";




export default function Header() {

const [units, setShowUnits] = useState(false)

function displayUnits() {
  setShowUnits(!units)
  console.log('show units working')
}


  return (
    <header className="bg-neutral-900 flex items-center justify-between py-8">
        <div>
            <img src={logo} alt="App Logo" className="w-40"/>
        </div>
      <div className="font-sans relative">
        <button  className="bg-neutral-800 flex items-center gap-3 px-2 py-2 rounded hover:cursor-pointer" onClick={displayUnits}>
        <img src={unitsIcon} alt="Units Icon" />
        <span>Units</span>
        <img src={dropdownIcon} alt="Dropdown Icon" />
      </button>

      {units && (
        <div className="bg-neutral-800 flex flex-col  px-2 py-1 rounded w-60 absolute right-0 mt-2 z-20">
        <button className="bg-transparent hover:bg-neutral-700 rounded text-left p-1">Switch to imperial</button>
        <ul>
          <li className="flex flex-col gap-2 text-left">
            <span className="text-neutral-500 text-sm">Temperature</span>
            <div className="flex justify-between bg-neutral-700 rounded p-1 align-center text-left"><span>Celsius(℃)</span><img src={checkmarkIcon} alt="Checkmark Icon" /></div>
            <div className="flex justify-between  rounded p-1 align-center text-left"><span>Farenheit(℉)</span><img src={checkmarkIcon} alt="Checkmark Icon" className="hidden" /></div>
          </li>

          <hr className="border-neutral-500  my-4"/>

          <li className="flex flex-col gap-2 text-left">
            <span className="text-neutral-500 text-sm">Wind Speed</span>
            <div className="flex justify-between bg-neutral-700 rounded p-1 align-center text-left"><span>km/h</span><img src={checkmarkIcon} alt="Checkmark Icon" /></div>
            <div className="flex justify-between  rounded p-1 align-center text-left"><span>mph</span><img src={checkmarkIcon} alt="Checkmark Icon" className="hidden" /></div>
          </li>

          <hr className="border-neutral-500 my-4" />

          <li className="flex flex-col gap-2 text-left">
            <span className="text-neutral-500 text-sm">Precipitation</span>
            <div className="flex justify-between bg-neutral-700 rounded p-1 align-center text-left"><span>Millimetres(mm)</span><img src={checkmarkIcon} alt="Checkmark Icon" /></div>
            <div className="flex justify-between  rounded p-1 align-center text-left"><span>Inches(in)</span><img src={checkmarkIcon} alt="Checkmark Icon" className="hidden" /></div>
          </li>

        </ul>

        


      </div>
      )}
      
      </div>
    </header>
  );
}
