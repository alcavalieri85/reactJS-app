import React, { Component } from 'react';
import '../css/reset.css';
import '../css/index.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {        
        return (
            <footer>
                    <h3>copyright Alfonso Cavalieri</h3>
                    <h5>photo by <Link to="www.visualhunt.com">VisualHunt</Link></h5>
            </footer>        
        );        
    }
}



export default Footer;