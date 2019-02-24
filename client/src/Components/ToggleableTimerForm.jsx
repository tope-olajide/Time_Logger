import React, { Component } from "react";
import TimerForm from "./TimerForm";
import { Button,Col } from "react-bootstrap";
class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <Col>
         <Button variant="light" className='text-left'>Add Timer</Button>
        </Col>
      );
    }
  }
}
export default ToggleableTimerForm;
