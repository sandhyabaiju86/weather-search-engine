import React, { useState } from "react";
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import 'bootstrap/dist/css/bootstrap.css';

import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity)
    const [loaded, setLoaded] = useState(false)
    const [weatherData, setWeatherData] = useState({ loaded: false })
    function handleResponse(response) {
        console.log(response.data)
        setLoaded(true)
        setWeatherData({

            coordinates: response.data.coordinates,
            temp: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000),
            city: response.data.city,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            iconUrl: response.data.condition.icon_url,
        })


    }
    console.log(weatherData)
    function handleOnSubmit(event) {
        event.preventDefault();
        //Search for a city
        search();

    }
    function search() {
        const apiKey = "eb403o8ceb2bbe8t33f5c3ea3e6b5f46";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }
    function handleCity(event) {
        event.preventDefault();
        setCity(event.target.value)

    }

    if (loaded) {
        return (
            <div className="Weather container">
                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input type="search"
                                placeholder="Enter a city"
                                className="form-control" onChange={handleCity} />
                        </div>
                        <div className="col-4">
                            <button type="submit"
                                className="btn btn-primary w-100 search " >Search</button>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        )
    }
    else {
        search();
        return (<FallingLines
            color="#4fa94d"
            width="200"
            visible={true}
            ariaLabel='falling-lines-loading'
        />)

    }
}
