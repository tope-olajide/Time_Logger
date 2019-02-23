import React, { Component } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { Container, Row, Col } from "react-bootstrap";
class TimersDashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <EditableTimerList />
            <ToggleableTimerForm isOpen={true} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TimersDashboard;
