import React, { Component } from "react";
import Timer from "./Timer";
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
      projectList: [],
      tickingSeconds: 9,
      tickingMinutes: 7,
      tickingHours: 909,
      projectKey:0
    };
  }
  increment = () => {
    return 1;
  };
  saveToState = (key, value) => {
    this.setState({ [key]: value });
    console.log(value);
  };
  tick = projectId => {
    this.state.projectList.map((project,key )=> {
      if (project.id === projectId) {
        this.ticker(key)
      }
      return project;
    })

} // minutesCounter
ticker = (key)=>{ setInterval(
  () => this.timmer(key),
  1000
);
}
timmer = (projectKey)=>{
  let projectList = {...this.state.projectList}
  let tickingSeconds = parseInt(projectList[projectKey].seconds,10)
  let tickingMinutes = parseInt(projectList[projectKey].minutes,10 )
  let tickingHours = parseInt(projectList[projectKey].hours,10)
 /* if (tickingSeconds < 1 && tickingMinutes>1) {
tickingSeconds = 60; tickingMinutes -= 1

  }
  if(tickingMinutes < 1 && tickingHours >1 )
  {
    tickingMinutes = 60; tickingHours -= 1
  }
   if(tickingSeconds < 1 && tickingMinutes < 1 && tickingHours <1){
this.stopTimer()
  } 
  if (tickingSeconds ===0 ) {
    tickingSeconds = 60; tickingMinutes =tickingMinutes - 1
      }
  */
if (tickingSeconds <= 1  && tickingMinutes >=1 && tickingHours >= 0) {
        tickingSeconds = 4; tickingMinutes -= 1
 }
 else if(tickingSeconds <= 0 && tickingMinutes <= 0 && tickingHours >=1){
  tickingSeconds = 4; tickingMinutes = 2; tickingHours-=1
 }
 else if(tickingSeconds <= 0&& tickingMinutes <=0 && tickingHours <=0) {
  this.stopTimer()
  projectList[projectKey].finished=true
  this.setState(projectList)
  this.loadNextTimer()
 }
else {
  tickingSeconds-=1
}
projectList[projectKey].seconds=tickingSeconds
projectList[projectKey].minutes=tickingMinutes
projectList[projectKey].hours=tickingHours 
this.setState(projectList)
console.log(this.state.projectList[projectKey])
}
stopTimer=()=>{clearInterval(this.ticker())};
loadNextTimer=()=>{
const nextTimer = this.state.projectList.map((timer)=>{
  return timer.finished === false
})
if (nextTimer.length>0){
  return this.tick(nextTimer[0].id)
}
else{
  return 
}
}
/*     this.setState(prevState =>({
      projectList:  [prevState.projectList[0],{seconds:444,minutes:555,hours:777}],
    })); 
   */

  //get the current time of active timer
/*   setActiveTimer = currentProject => {
    this.state.projectList.map(project => {
      if (project.id === currentProject) {
        this.setState({
          tickingSeconds: project.seconds,
          tickingMinutes: project.minutes,
          tickingHours: project.hours
        });
      }
      return project;
    });
  }; */
/*  tick = projectId => {
    this.setActiveTimer(projectId)
      console.log(this.state.tickingSeconds)
    
    
     if (this.state.tickingSeconds < 1) {
      this.setState({
        tickingSeconds: 60,
        tickingMinutes: this.state.tickingMinutes - 1
      });
    }
    if (this.state.tickingMinutes < 1 && this.state.tickingHours > 0) {
      this.setState({
        tickingMinutes: 60,
        tickingHours: this.state.tickingHours - 1
      });
    }
    if (
      this.state.tickingSeconds === 0 &&
      this.state.tickingMinutes === 0 &&
      this.state.tickingHours === 0
    ) {
      clearInterval(this.timerID);
    }
    this.setState({
      date: this.state.date - 1
    }); */
/*     this.setState({
      projectList: this.state.projectList.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            seconds: this.state.tickingSeconds,
            minutes: this.state.tickingMinutes,
            hours: this.state.tickingHours
          };
        }
        return project;
      })
    });
  }; */

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
      seconds,
      finished:false
    };
    this.setState(prevState => ({
      projectList: [...prevState.projectList, data]
    }));
    console.log(this.state.projectList);
    this.setState({
      minutes: 0,
      hours: 0,
      seconds: 0,
      projectTitle: "",
      projectDescription: ""
    });
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
      });
    };
    
    return (
      <Container>
        <Row>
          {this.state.projectList.map(project => {
            return (
              <Timer
                key={project.id}
                id={project.id}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                hours={project.hours}
                minutes={project.minutes}
                seconds={project.seconds}
                tick={this.tick}
              />
            );
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
