import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Monday from './pages/Monday.js';
import Thuesday from './pages/Thuesday';
import Wednsday from './pages/Wednsday';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualDegree: ''
    };
  }

  handleClick = (actualWeather) => (e) => {
    this.setState({actualDegree: actualWeather}); 
    
    //console.log('Parameter', actualWeather); //paramenter get from function call
  }

  render() {
    const dataWeather = this.props.data;
    const days = [];
    dataWeather.forEach(dayElement => {
      days.push(
        <li key={dayElement.day} >
          <Link 
          to={"/"+dayElement.day+"/"+dayElement.now} 
          onClick={this.handleClick(dayElement.now)} 
          className="noDecoration">
            <span className="day">{dayElement.day}</span>
            <span className="weatherImg">
              <img alt={dayElement.day} src={"//ssl.gstatic.com/onebox/weather/64/"+dayElement.img+".png"}/>
            </span>
            <span className="degree">
              <span className="d_first">{dayElement.d_max}°</span>
              <span className="d_second">{dayElement.d_min}°</span>
            </span>
          </Link>  
          </li>
      );
    });
    return (
      <Router>
        <div>          
          <ul className="weatherBox">
            {days}
          </ul>
          <Switch>
            <Route path="/mon/:degree" component={Monday} />
            <Route path="/tue/:degree" component={Thuesday} />
            <Route path="/wed/:degree" component={Wednsday} />
          </Switch>          
        </div>        
      </Router>      
    );
  }
}

export default App;
