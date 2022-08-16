//import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News></News>
      </div>
    );
  }
}
