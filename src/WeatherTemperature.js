import React from "react";


export default function WeatherTemperature(props){

           return(
            <div>
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">&deg;C</span>
        </div>
           )
}