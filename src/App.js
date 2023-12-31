import React from 'react';
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity = "Paris"/>
      <footer>
        <p>This project is created by <a href='mailti:sandhyacc28@gmail.com'> Sandhya Baiju</a> and is
        <a href='https://github.com/sandhyabaiju86/weather-search-engine' target='_blank' rel='noreferrer'> Open Source on GitHub</a> and hosted on <a href='https://playful-cannoli-f8c0a0.netlify.app/'>Netlify</a>
        </p>
      </footer>
    </div>
  );
}


