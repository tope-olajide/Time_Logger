import React, { Component } from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Col sm={3}>
        <Card>
          <Card.Header>Timer</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Card.Title className="text-left">
                  <Form.Label>Title </Form.Label>
                </Card.Title>
                <Form.Control type="text" defaultValue={this.props.title} />
              </Form.Group>
              <Form.Group>
                <Card.Title className="text-left">Project</Card.Title>
                <Form.Control type="text" defaultValue={this.props.project}/>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button variant="light">{submitText}</Button>
            <Button variant="light">Cancel</Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}
export default TimerForm;
