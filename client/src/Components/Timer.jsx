import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
class Timer extends Component {
  render() {
    return (
      <Col sm={3}>
        <Card>
          <Card.Header>Timer</Card.Header>
          <Card.Body>
            <Card.Title className="text-left">
              Special title treatment
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-left">
              With supporting
            </Card.Subtitle>
            <h1>01:30:56</h1>
          </Card.Body>
          <Card.Footer>
            {" "}
            <Button variant="light">Start</Button>
            <Button variant="light">Edit</Button>
            <Button variant="light">Delete</Button>
          </Card.Footer>
        </Card>{" "}
      </Col>
    );
  }
}
export default Timer;
