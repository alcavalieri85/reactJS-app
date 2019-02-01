import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

const weekWeather = [
    {day: 'Mon', img: 'rain', d_max: 9, d_min: 5, now: 7},
    {day: 'Tue', img: 'cloudy', d_max: 11, d_min: 6, now: 8},
    {day: 'Wed', img: 'rain_light', d_max: 16, d_min: 8, now: 12},
    {day: 'Thu', img: 'partly_cloudy', d_max: 16, d_min: 12, now: 15},
    {day: 'Sat', img: 'rain_s_cloudy', d_max: 17, d_min: 11, now: 17}
]

ReactDOM.render(<BrowserRouter><App data={weekWeather}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
