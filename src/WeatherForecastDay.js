import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css"

export default function WeatherForecastDay(props){
   
   function maxTemperture(){
            let temperature= Math.round(props.data.temperature.maximum);
            return(temperature)
      
    }
    function minTemperature(){
        let temperature= Math.round(props.data.temperature.minimum);
        return(temperature)
}
function day(){
    let date = new Date(props.data.time*1000)
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let day = days[date.getDay()]
    return(
        day
    )
    
}
    return(
        <div className="Weatherforecast-day">
           
            <div className="day">{day()}</div>
          
          <WeatherIcon code={props.data.condition.icon} size={36} />
          <div><span className="WeatherForecast-max">{maxTemperture()}&deg;</span><span className="WeatherForecast-min">{minTemperature()}&deg;</span></div>
         
        </div>
    )
   
}