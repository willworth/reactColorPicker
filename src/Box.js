import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";
export default class Box extends Component {
  static defaultProps = {
    allColors: [
      "darkslategrey",
      "darkslateblue",
      "goldenrod",
      "orange",
      "black",
      "teal",
      "magenta"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }

  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  handleClick() {
    this.setColor();
  }
  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        box
      </div>
    );
  }
}
