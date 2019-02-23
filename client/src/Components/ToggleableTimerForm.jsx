import React, { Component } from "react";
import TimerForm from "./TimerForm";
class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div className="">
          <button className=" ">Add</button>
        </div>
      );
    }
  }
}
export default ToggleableTimerForm;
