import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualDegree: ''
    };
  }

  handleClick = (actualWeather) => (e) => {
    this.setState({actualDegree: actualWeather}); 
    //console.log('Event', e);
    //console.log('Parameter', actualWeather);
  }

  render() {
    let title = '';
    if(this.state.actualDegree !== ''){
      title = 
      <div className="actualWeather">
          <img alt="tempoAttuale" src="//ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
          <span className="actualDegree">{this.state.actualDegree}</span>
          <span className="logoDegree">°C</span>
      </div>
    }     
    const dataWeather = this.props.data;
    const days = [];
    dataWeather.forEach(dayElement => {
      days.push(
        <li key={dayElement.day} onClick={this.handleClick(dayElement.now)}>
            <span className="day">{dayElement.day}</span>
            <span className="weatherImg">
              <img alt={dayElement.day} src={"//ssl.gstatic.com/onebox/weather/64/"+dayElement.img+".png"}/>
            </span>
            <span className="degree">
              <span className="d_first">{dayElement.d_max}°</span>
              <span className="d_second">{dayElement.d_min}°</span>
            </span>
          </li>
      );
    });
    return (
      <div>
        {title}
        <ul className="weatherBox">
          {days}
        </ul>
      </div>
    );
  }
}

export default App;
