import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./WeatherIcon.css"
  

export default function WeatherIcon(props){
  const codeMapping = {
    "clear-sky-day":"CLEAR_DAY",
    "clear-sky-night":"CLEAR_NIGHT",
    "few-clouds-day":"CLOUDY",
    "few-clouds-night":"CLOUDY",
    "scattered-clouds-day":"PARTLY_CLOUDY_DAY",
    "scattered-clouds-night":"PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day":"PARTLY_CLOUDY_DAY",
    "broken-clouds-night":"PARTLY_CLOUDY_NIGHT",
    "rain-day":"RAIN",
    "rain-night":"RAIN",
    "thunderstorm-day":"thunderstorm-day",
    "thunderstorm-night":"thunderstorm-night",
    "snow-day":"SNOW",
    "snow-night":"SNOW",
    "mist-day":"FOG",
    "mist-night":"FOG",
    
  };
    return(
    <div>
        <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color='#6690E8'
    size={props.size}
    animate={true}
  />
      </div>)
}