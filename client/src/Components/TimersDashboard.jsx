import React, { Component } from "react";
import Timer from './Timer';
import {
  Container,
  Row,
  Card,
  Button,
  Col,
  Modal,
  Form
} from "react-bootstrap";
class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      projectTitle: "",
      projectDescription: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
      projectList: []
    };
  }
  saveToState = (key, value) => {
    this.setState({ [key]: value });
    console.log(value);
  };
  saveProject = () => {
    const {
      projectTitle,
      projectDescription,
      hours,
      minutes,
      seconds
    } = this.state;
    const data = {
      id: Date.now(),
      projectTitle,
      projectDescription,
      hours,
      minutes,
      seconds
    };
    this.setState(prevState => ({
      projectList: [...prevState.projectList, data]
    }));
    console.log(this.state.projectList);
    this.setState({minutes:0,hours:0,seconds:0,projectTitle:'',projectDescription:''})
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const selectTime = time => {
      let timeArray = [];
      for (let timeCount = 0; timeCount < time; timeCount++) {
        timeArray.push(timeCount);
      }
      return timeArray.map(time => {
        return <option>{time}</option>;
      })
    };
    return (
      <Container>
        <Row>

              {this.state.projectList.map((project)=>{
               return <Timer 
                key={project.id}
                id={project.id}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                hours={project.hours}
                minutes={project.minutes}
                seconds={project.seconds}
                />
              })}
              
          
          <Col md={4}>
            <Card>
              <Button onClick={this.handleShow}>Add more timer</Button>
            </Card>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Card.Title className="text-left">
                  <Form.Label>Title </Form.Label>
                </Card.Title>
                <Form.Control
                  type="text"
                  onChange={event => {
                    this.saveToState("projectTitle", event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Card.Title className="text-left">Description</Card.Title>
                <Form.Control
                  type="text"
                  onChange={event => {
                    this.saveToState("projectDescription", event.target.value);
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
                      this.saveToState("hours", event.target.value);
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
                      this.saveToState("minutes", event.target.value);
                    }}
                  > <option>Choose...</option>
                  {selectTime(60)}
                </Form.Control>
                </Col>
                <Col>
                  <Card.Title className="text-left">
                    <Form.Label>Seconds </Form.Label>
                  </Card.Title>
                  <Form.Control
                    as ="select"
                    onChange={event => {
                      this.saveToState("seconds", event.target.value);
                    }}
                  >
                   <option>Choose...</option>
                    {selectTime(60)}
                  </Form.Control>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveProject}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default TimersDashboard;
