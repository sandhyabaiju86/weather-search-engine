import React, { useState,useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"



export default function WeatherForecast(props){
    const[loaded,setLoaded] = useState(false)
    const[forecast,setForecast] =useState(null);
    useEffect(()=>{
        setLoaded(false)
    },[props.coordinates])

function load(){
    let latitude =props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiKey = "eb403o8ceb2bbe8t33f5c3ea3e6b5f46"
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    
}
function handleResponse(response){
    setForecast(response.data.daily)
        
  setLoaded(true)
    
}
console.log(forecast)
if(loaded){
    return(
        <div className="WeatherForecast"> 
        <div className="row">
            {forecast.map(function(dailyForecast,index){
                if(index<5){
                    return(
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                 </div>
                 );
                }else{
                    return null
                }
            })}
            
             
            </div>
        </div>
    )
    
}else{
    load();
    return(null)
}

    
}