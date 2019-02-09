import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
/*import weatherData from './json/data.json';*/

const weekWeather = [
    {day: 'Mon', img: 'rain', d_max: 9, d_min: 5, now: 7},
    {day: 'Tue', img: 'cloudy', d_max: 11, d_min: 6, now: 8},
    {day: 'Wed', img: 'rain_light', d_max: 16, d_min: 8, now: 12},
    {day: 'Thu', img: 'partly_cloudy', d_max: 16, d_min: 12, now: 15},
    {day: 'Sat', img: 'rain_s_cloudy', d_max: 17, d_min: 11, now: 17}
]
/*const getData = weatherData.list[39];
const date = getData.dt_txt;
const d_max = getData.main.temp_max;
const d_min = getData.main.temp_min;
const desc = getData.weather.main;
const icon = getData.weather.icon;  // http://openweathermap.org/img/w/10d.png
console.log(getData);*/

//const urlString = "http://samples.openweathermap.org/data/2.5/forecast?id=3172051&appid=96bb5ffd95affbf458ff77f93eda27e1";


ReactDOM.render(<BrowserRouter><App data={weekWeather}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


