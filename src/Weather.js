import React, {useState} from "react";
import axios from 'axios';

import "./Weather.css";

export default function Weather(){
    const[loaded,setLoaded]=useState(false);
    const[weatherData, setWeatherData]=useState({})
function handleResponse(response){
    setLoaded(true);
   setWeatherData({
    temperature:Math.round(response.data.main.temp),
    humidity:response.data.main.humidity,
    wind:response.data.wind.speed,
    city:response.data.name,
    description:response.data.weather[0].escription,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png",

   })
}

if(loaded){

    
    return(
        <div className="Weather"> 
        <form>
            <div className="row">
                <div className="col-8">
                    <input type="search"
                  placeholder="Enter a city" 
                  className="form-control"/>
                </div>
                <div className="col-4">
                    <button type="submit" 
                   className="btn btn-primary w-100">Search</button>
                </div>
            </div>
        </form>
        <div>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Wednesday 11AM</li>
            <li>{weatherData.description}</li>
        </ul>
        </div>
        <div>
            <div className="row mt-4">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description}/>
                    <span className="temperature">{weatherData.temperature}</span>
                    <span className="unit">&deg;C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation :{weatherData.precipitation}</li>
                        <li>Humidity : {weatherData.humidity}%</li>
                        <li>Wind : {weatherData.wind}Km/h</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
else{
    const apiKey = "ce144f0cf51fa43f03431f0488a36728"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kerala&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)

}
}
