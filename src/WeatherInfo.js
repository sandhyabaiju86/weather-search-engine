import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon" ;
import WeatherTemperature from "./WeatherTemperature" 
export default function WeatherInfo(props){
    
    return(
        <div>
           <div>
        <h1 className="text-capitalize">{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        </div>
        <div>
            <div className="row mt-4">
                <div className="col-6">
                    <WeatherIcon code={props.data.icon} className="float-left"/>
                    <WeatherTemperature celsius={props.data.temperature}/>
                    
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