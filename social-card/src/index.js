import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialCard from './SocialCard';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

const d = new Date();
const day = d.getDate();
const mounth = d.getMonth();
const today = day + mounth;

const user = {
  name: "The Pratical Dev",
  logo: logo,
  date: today,
  title: "Learning React? Start Small.",
  author: "@dceddia"
};

ReactDOM.render(<BrowserRouter><SocialCard user={user}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
