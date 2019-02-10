import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import weatherData from './json/data.json';

//const urlString = "http://samples.openweathermap.org/data/2.5/forecast?id=3172051&appid=96bb5ffd95affbf458ff77f93eda27e1";


const datas = [];
const weekWeather = weatherData.list;
let day_text = '';

/*get last 5 days*/
weekWeather.forEach(function(i, index, element){
    if (index >= element.length - 5){
        const date = new Date(element[index].dt_txt);
        const day = date.getDay();
        switch(day){
            case 0:
                day_text = "Sun";
                break;
            case 1:
                day_text = "Tue";
                break;
            case 2:
                day_text = "Wed";
                break;
            case 3:
                day_text = "Thu";
                break;
            case 4:
                day_text = "Fri";
                break;
            case 5:
                day_text = "Sat";
                break;
            default:
                day_text = "Mon";
                break;
        }        
        datas.push(
            {
                day:day_text,
                img: element[index].weather[0].icon,
                d_max: element[index].main.temp_max,
                d_min: element[index].main.temp_min,
                now: element[index].main.temp_kf,
                id: index
            },
        );
    }
 });

console.log(datas);


ReactDOM.render(<BrowserRouter><App data={datas}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


