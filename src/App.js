import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather defaultCity = "New York"/>
      <footer>
        <p>This project is created by <a href='mailti:sandhyacc28@gmail.com'> Sandhya Baiju</a> and is
        <a href='https://github.com/sandhyabaiju86/weather-search-engine' target='_blank' rel='noreferrer'> Open Source on GitHub</a>
        </p>
      </footer>
    </div>
  );
}


