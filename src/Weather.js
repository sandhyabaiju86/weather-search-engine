import React, {useState} from "react";
import axios from 'axios';
import { FallingLines } from  'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props){
    const[city,setCity]=useState(props.defaultCity)
    const[loaded,setLoaded]=useState(false)
    const[weatherData, setWeatherData]=useState({loaded:false})
function handleResponse(response){
    console.log(response.data)
    setLoaded(true)
    setWeatherData({
    coordinates: response.data.coord,
    temperature:Math.round(response.data.main.temp),
    humidity:response.data.main.humidity,
    wind:response.data.wind.speed,
    date:new Date(response.data.dt * 1000),
    city:response.data.name,
    description:response.data.weather[0].description,
    iconUrl:"http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png",

   })

}
function handleOnSubmit(event){
    event.preventDefault();  
    //Search for a city
    search();
   
}
function search(){
        const apiKey = "ce144f0cf51fa43f03431f0488a36728";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
 
}
function handleCity(event){
    event.preventDefault();
    setCity(event.target.value)
   
}

if(loaded){
    return(
        <div className="Weather"> 
        <form onSubmit={handleOnSubmit}> 
            <div className="row">
                <div className="col-8">
                    <input type="search"
                  placeholder="Enter a city" 
                  className="form-control" onChange={handleCity}/>
                </div>
                <div className="col-4">
                    <button type="submit" 
                   className="btn btn-primary w-100" >Search</button>
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
    </div>
    )
 }
 else{
    search();
    return(<FallingLines
        color="#4fa94d"
        width="400"
        visible={true}
        ariaLabel='falling-lines-loading'
      />)

}
}
