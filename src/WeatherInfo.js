import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon"  
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
                    {/* <img className="text-capitalize" src={props.data.iconUrl} alt={props.data.description}/> */}
                    <span className="temperature float-left">{props.data.temperature}</span>
                    <span className="unit">&deg;C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li className="text-capitalize">Precipitation :{props.data.precipitation}</li>
                        <li >Humidity : {props.data.humidity}%</li>
                        <li>Wind : {props.data.wind}Km/h</li>
                    </ul>
                </div>
            </div>
        </div> 
        </div>
    )
}