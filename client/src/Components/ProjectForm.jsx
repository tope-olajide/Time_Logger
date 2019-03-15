import React, {Component} from 'react'
import {
    Container,
    Row,
    Card,
    Button,
    Col,
    Modal,
    Form
  } from "react-bootstrap";
class ProjectForm extends Component{
    render(){
        const selectTime = time => {
            let timeArray = [];
            for (let timeCount = 0; timeCount < time; timeCount++) {
              timeArray.push(timeCount);
            }
            return timeArray.map(time => {
              return <option>{time}</option>;
            });
          };
        return(
            <Form>
              <Form.Group>
                <Card.Title className="text-left">
                  <Form.Label>Title </Form.Label>
                </Card.Title>
                <Form.Control
                  type="text"
                  onChange={event => {
                    this.props.handleInputChange("projectTitle", event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Card.Title className="text-left">Description</Card.Title>
                <Form.Control
                  type="text"
                  onChange={event => {
                    this.props.handleInputChange("projectDescription", event.target.value);
                  }}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Card.Title className="text-left">
                    <Form.Label>Hour </Form.Label>
                  </Card.Title>
                  <Form.Control
                    as="select"
                    onChange={event => {
                      this.props.handleInputChange("hours", event.target.value);
                    }}
                  >
                    <option>Choose...</option>
                    {selectTime(12)}
                  </Form.Control>
                  {/*                   <Form.Control
                    placeholder="00"
                    onChange={event => {
                      this.saveToState("hours", event.target.value);
                    }}
                  /> */}
                </Col>
                <Col>
                  <Card.Title className="text-left">
                    <Form.Label>Minutes </Form.Label>
                  </Card.Title>
                  <Form.Control
                    as="select"
                    onChange={event => {
                      this.props.handleInputChange("minutes", event.target.value);
                    }}
                  >
                    {" "}
                    <option>Choose...</option>
                    {selectTime(60)}
                  </Form.Control>
                </Col>
                <Col>
                  <Card.Title className="text-left">
                    <Form.Label>Seconds </Form.Label>
                  </Card.Title>
                  <Form.Control
                    as="select"
                    onChange={event => {
                      this.props.handleInputChange("seconds", event.target.value);
                    }}
                  >
                    <option>Choose...</option>
                    {selectTime(60)}
                  </Form.Control>
                </Col>
              </Row>
            </Form>
        )
    }
}
export default ProjectForm;