import React, { Component } from "react";
import Timer from "./Timer";
import ProjectForm from "./ProjectForm"
import {
  Container,
  Row,
  Card,
  Button,
  Col,
  Modal,
  Form
} from "react-bootstrap";
import Alarm from './Alarm';
class TimersDashboard extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      displayAlarm:false,
      projectTitle: "",
      projectDescription: "",
      hours: 0,
      minutes: 0,
      seconds: 0,
      projectList: [],
      tickingSeconds: 0,
      tickingMinutes: 0,
      tickingHours: 0,
      projectKey: 0
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
    this.state.projectList.map((project, key) => {
      if (project.id === projectId) {
        this.setState(
          {
            projectKey: key
          },
          this.ticker()
        );
      }
      return project;
    });
  }; // minutesCounter
  ticker = () => {
    this.timerr = setInterval(() => this.timmer(), 1000);
  };
  timmer = () => {
    let projectList = { ...this.state.projectList };
    let tickingSeconds = parseInt(
      projectList[this.state.projectKey].seconds,
      10
    );
    let tickingMinutes = parseInt(
      projectList[this.state.projectKey].minutes,
      10
    );
    let tickingHours = parseInt(projectList[this.state.projectKey].hours, 10);
    let timerIsRunning= projectList[this.state.projectKey].timerIsRunning
    let disableStartBtn= projectList[this.state.projectKey].disableStartBtn
    let disableStopBtn= projectList[this.state.projectKey].disableStopBtn
    tickingSeconds -= 1;
    if (tickingSeconds < 0) {
      tickingSeconds = 4;
      tickingMinutes -= 1;
      timerIsRunning = true;
      disableStartBtn = true;
      disableStopBtn = false
    }
    if (tickingMinutes < 0) {
      tickingSeconds = 4;
      tickingMinutes = 4;
      tickingHours -= 1;
      timerIsRunning = true;
      disableStartBtn = true;
      disableStopBtn = false
    }
    if (tickingHours < 0) {
      this.stopTimer();
      tickingSeconds = 0;
      tickingMinutes = 0;
      tickingHours = 0;
      projectList[this.state.projectKey].finished = true;
      timerIsRunning = false;
      disableStartBtn = true;
      disableStopBtn = true
      this.setState(projectList);
       console.log(this.state.projectList[this.state.projectKey]);
/*       setTimeout(()=>{
        this.loadNextTimer()
      },400) */
      this.showAlarm()

    }

    projectList[this.state.projectKey].seconds = tickingSeconds;
    projectList[this.state.projectKey].minutes = tickingMinutes;
    projectList[this.state.projectKey].hours = tickingHours;
    projectList[this.state.projectKey].timerIsRunning=timerIsRunning
    projectList[this.state.projectKey].disableStartBtn= disableStartBtn
    projectList[this.state.projectKey].disableStopBtn=disableStopBtn
    this.setState(projectList);
   console.log(this.state.projectList[this.state.projectKey]);
  };
  stopTimer = () => {
    let projectList = { ...this.state.projectList };
    if(!projectList[this.state.projectKey].finished){
      projectList[this.state.projectKey].disableStartBtn=false
      projectList[this.state.projectKey].disableStopBtn=true
      this.setState(projectList);
       clearInterval(this.timerr);
    }
    else{
    projectList[this.state.projectKey].timerIsRunning = false;
    this.setState(projectList);
    clearInterval(this.timerr);
    }
 

    

  };
  loadNextTimer = () => {
    let unFinishedProject = [];
     this.state.projectList.map(timer => {
      if (timer.finished === false) {
        unFinishedProject.push(timer);
      }
      return timer;
    });
    if (unFinishedProject.length > 0) {
      console.log(unFinishedProject[0].id);
      this.tick(unFinishedProject[0].id);
    } else {
      return;
    }
  };
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
      finished: false,
      timerIsRunning:null,
      disableStartBtn:true,
      disableStopBtn:true
    };
    this.setState({
      projectList: [...this.state.projectList, data]
    },this.enableProject)
  };
  enableProject=()=>{
    let projectList = { ...this.state.projectList };
    if(projectList[0].finished){
    projectList[this.state.projectList.length-2].disableStartBtn = true;
    projectList[this.state.projectList.length-1].disableStartBtn = false;
    this.setState(projectList);
    }
    else{
    projectList[0].disableStartBtn = false;
    this.setState(projectList);
    }
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  showAlarm=()=>{
    this.setState({ displayAlarm: true });
  }
  stopAlarm=()=>{
    this.setState({ displayAlarm: false });
  }
  render() {
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
                timerIsRunning={project.timerIsRunning}
                finished={project.finished}
                tick={this.tick}
                stop={this.stopTimer}
                disableStartBtn={project.disableStartBtn}
                disableStopBtn={project.disableStopBtn}
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
            <ProjectForm 
            handleInputChange={this.saveToState}
            />

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

        <Modal show={this.state.displayAlarm} onHide={this.stopAlarm}>
      <Modal.Header closeButton>
        <Modal.Title>Project Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Alarm />

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
