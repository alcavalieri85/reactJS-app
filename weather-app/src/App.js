import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Monday from './pages/Monday';
import Thuesday from './pages/Thuesday';
import Wednsday from './pages/Wednsday';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

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
      <div>
        <Header />
          <div>          
            <ul className="weatherBox">
              {days}
            </ul>
              <Route path="/Mon/:degree" component={Monday} />
              <Route path="/Tue/:degree" component={Thuesday} />
              <Route path="/Wed/:degree" component={Wednsday} />                    
          </div>   
        <Footer />
      </div>
            
    );
  }
}

export default App;

library.add(faCloudSunRain);
