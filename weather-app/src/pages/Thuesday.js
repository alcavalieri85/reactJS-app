import React, { Component } from 'react';
import '../App.css';

class Thuesday extends Component {
    render() {
        const degree = this.props.match.params.degree;

        return(
        <div className="actualBox">
            <h1>Thuesday</h1>
            <div className="actualWeather">
                <img alt="tempoAttuale" src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
                <span className="actualDegree">{degree}</span>
                <span className="logoDegree">°C</span>
            </div>
        </div>        
        
        );
    }
}



export default Thuesday;