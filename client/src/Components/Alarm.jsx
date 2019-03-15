import React, { Component } from "react";
import soundFile from "../Assets/Chipmunks_Funky Town.mp3";
import imageFile from "../Assets/revslide.jpg";
import {
    Button,
  } from "react-bootstrap";
class Alarm extends Component {
  audio = new Audio(soundFile);
  componentDidMount() {
    this.audio.play();
  }
stopAudio = () => {
      this.audio.stop();
    };
  render() {
    return <>
    <img src = "../Assets/revslide.jpg" alt=""/>
    <Button onClick={this.stopAudio}>Stop Alarm</Button>
    </>;
  }
}

export default Alarm;
