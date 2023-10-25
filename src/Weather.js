import React from "react";
import "./Weather.css";

export default function Weather(){
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
        <h1>Dubai</h1>
        <ul>
            <li>Wednesday 11AM</li>
            <li>Mostly sunny</li>
        </ul>
        </div>
        <div>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly sunny"/>
                    34&deg;C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation : 1%</li>
                        <li>Humidity : 38%</li>
                        <li>Wind : 18Km/h</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}