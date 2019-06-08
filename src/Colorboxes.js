import React, { Component } from "react";
import Box from "./Box";
import { getRandomColor, choice } from "./helpers";
import "./ColorBoxes.css";

export default class Colorboxes extends Component {
  static defaultProps = {
    numBoxes: 18,

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

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="Colorboxes">{boxes}</div>;
  }
}
