import React, { Component } from 'react';
import '../App.css';

class Wednsday extends Component {
    render() {
        const degree = this.props.match.params.degree;
        
        return(
        <div>
            <h1>Wednsday</h1>
            <div className="actualWeather">
                <img alt="tempoAttuale" src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
                <span className="actualDegree">{degree}</span>
                <span className="logoDegree">°C</span>
            </div>
        </div>        
        
        );
    }
}



export default Wednsday;