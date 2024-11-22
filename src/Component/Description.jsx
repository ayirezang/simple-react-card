import React, { Component } from "react";

class Description extends Component {
  render() {
    console.log(this.props.Description);
    return <div>{this.props.Description}</div>;
  }
}
export default Description;
