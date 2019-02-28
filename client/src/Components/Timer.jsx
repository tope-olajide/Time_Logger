import React, { Component } from "react";
import { Card, Button,Col } from "react-bootstrap";
class Timer extends Component {
  handleStart= ()=>{
return this.props.tick(this.props.id)
   }
  render() {

    return (
      <Col md={4}>
      <Card>
      <Card.Header></Card.Header>
              <Card.Body>
                <Card.Title className="text-left">
                  <h3>{this.props.projectTitle}</h3>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-left">
                 { this.props.projectDescription}
                </Card.Subtitle>
                <h1>{ this.props.hours}:{ this.props.minutes}:{ this.props.seconds}</h1>
              </Card.Body>
              <Card.Footer>
                <Button variant="light" onClick ={this.handleStart}>Start</Button>
                <Button variant="light">Edit</Button>
                <Button variant="light">Delete</Button>
              </Card.Footer>
              </Card>{" "}
          </Col>
    );
  }
}
export default Timer;
