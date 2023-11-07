import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon" ;
import WeatherTemperature from "./WeatherTemperature" ;

import "./Weather.css"
export default function WeatherInfo(props){
    
    return(
        <div className="Weather">
           <div className="row">
           <div className="col-6">
        <h1 className="text-capitalize">{props.data.city}</h1>
        </div>
        <div className="col-6 mt-4">
                    <WeatherIcon code={props.data.icon} className="float-left" size={60}/>
                    <WeatherTemperature celsius={props.data.temp}/>
                    
                </div>
        </div>

        
      
        <div>
            <div className="row mt-4">
                <div className="col-6">
            <ul>
            <li><FormattedDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        </div>
                <div className="col-6">
                    <ul>
                        <li >Humidity : {props.data.humidity}%</li>
                        <li>Wind : {props.data.wind}Km/h</li>
                    </ul>
                </div>
            </div>
        </div> 
        </div>
    )
}