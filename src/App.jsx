import React, { Component } from "react";
import { getData } from "./data.js";
import { CardUserContainer } from "./views";

export default class App extends Component {
  render() {
    return (
        <div>
          <div className="wrapper">
            <CardUserContainer users={getData()} />
          </div>
        </div>
      )
  }
};

