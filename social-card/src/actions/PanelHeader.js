import React, { Component}  from 'react';
import { Panel, Row, Col, Image, Glyphicon  } from 'react-bootstrap';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Author from '../pages/author';

class PanelHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render(){
    const user = this.props.user;
    let showIcon = '';
    let classFade = '';
    let hide = '';
    let pullRight = '';

      if(this.state.isToggleOn){
        showIcon =  <Glyphicon className="pointer" onClick={this.handleClick} glyph="chevron-down"/>
        classFade = 'fade-on';
        hide = 'hide';
        pullRight = 'pull-right';
      }else{
        showIcon = <Glyphicon className="pointer" onClick={this.handleClick} glyph="chevron-up" />
        classFade = 'fade-off';
        hide = '';
        pullRight = '';
      }

    return(
        <Panel.Heading className={classFade}>
          <Panel.Title componentClass="h3">
          <Row>
            <Col xs={3} className={hide}><Image src={user.logo} alt="logo" circle/></Col>
            <Col xs={8} className={hide}>
              <p>{user.name} </p>
              <p>{user.title}</p>
              <Router>
                <div>
                  <Link to="/author">{user.author}</Link>
                  <Route exact path="/author" component={Author} />
                </div>
              </Router>
            </Col>
            <Col xs={1} className={pullRight}>
              {showIcon}
            </Col>
          </Row>
          </Panel.Title>
        </Panel.Heading>
    );
  }
}

export default PanelHeader;
