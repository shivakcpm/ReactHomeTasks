import React, { Component } from "react";
import "./InfoComponent.css";

export default class InfoComponent extends Component {
  render() {
    return (
      <ol>
        <li>Functional Component</li>
        <li>Class Component</li>
        <li>Using createElement Method</li>
        <li>React PureComponent</li>
      </ol>
    );
  }
}
