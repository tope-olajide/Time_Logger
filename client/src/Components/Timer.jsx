import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlText:'ggggg'
    };
  }
  handleStart = () => {
     return this.props.tick(this.props.id) 
  };

  handleStop = () => {
    return this.props.stop();
  };
  render() {
      return (
        <Col md={4}>
          <Card>
            <Card.Header />
            <Card.Body>
              <Card.Title className="text-left">
                <h3>{this.props.projectTitle}</h3>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-left">
                {this.props.projectDescription}
              </Card.Subtitle>
              <h1>
                {this.props.hours}:{this.props.minutes}:{this.props.seconds}
              </h1>
            </Card.Body>
            <Card.Footer>
              <Button variant="light" disabled={this.props.disableStartBtn} onClick={this.handleStart}>
                start
              </Button>
              <Button variant="light" disabled={this.props.disableStopBtn} onClick={this.handleStop}>
                Stop
              </Button>
              <Button variant="light">Edit</Button>
              <Button variant="light">Delete</Button>
            </Card.Footer>
          </Card>{" "}
        </Col>
      );
  }
}
export default Timer;
