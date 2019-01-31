import React, { Component}  from 'react';
import { Panel, Grid, Row, Col, Image, Glyphicon } from 'react-bootstrap';
import './App.css';
import socialBack from './images/download.png';
import PanelHeader from './actions/PanelHeader.js'



class SocialCard extends Component {
  render() {
    const user = this.props.user;
    return (
    <Grid>
      <Row>
       <Col md={3}></Col>
        <Col xs={12} md={6}>
          <div>
            <Panel>
              <PanelHeader
              user = {user}/>
              <Panel.Body className= 'container-imgSocial'>
                <Image className="logoSocial" src={user.logo} responsive/>
                <Image className="imgSocial" src={socialBack} responsive/>
              </Panel.Body>
              <Panel.Footer>
                <Row>
                  <Col xs={2}> <Glyphicon glyph="comment"/> 1</Col>
                  <Col xs={2} style={{color: "#36c674"}}><Glyphicon glyph="share"/> 47</Col>
                  <Col xs={2} style={{color: "#e0275f"}}><Glyphicon glyph="heart"/> 190</Col>
                  <Col xs={2}><Glyphicon glyph="envelope"/></Col>
                </Row>
              </Panel.Footer>
            </Panel>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Grid>
  );
  }
}

export default SocialCard;
