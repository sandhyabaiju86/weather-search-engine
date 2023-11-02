import React, {useState} from "react";


export default function WeatherTemperature(props){
   const[unit,setUnit] =useState("celsius")
    function convertToCelcius(event){
        event.preventDefault();
        setUnit("celsius")
           
    }
    function convertToFahrenheit(event){
         event.preventDefault();
        setUnit("fahrenheit")
    }

    if(unit=== "celsius"){
           return(
            <div>
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">&deg;C|{""}<a href="/" onClick={convertToFahrenheit}>&deg;F</a></span>
        </div>
           )
       
        
    }else{
        let fahrenheit = (props.celsius*9/5)+32;
        return(
            <div>
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit"><a href="/" onClick={convertToCelcius}>&deg;C</a>| &deg;F</span>
            </div>
    )
        
    }
            
    
    
}