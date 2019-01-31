import React, { Component}  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
import Author from './author';

class HomePage extends Component {
  render() {
    /**/
    return(
      <div>
        <h1>Hello</h1>
        <Router>
          <div>
            <Link to="/author">Author</Link>
            <Route exact path="/author" component={Author} />
          </div>
        </Router>
      </div>
      /**/
    );
  }
}

export default HomePage;
