import React from "react";

class Text extends React.Component {
  render() {
    const textStyle = this.props.textStyle;
    if (textStyle === 'h1') {
      return <h1>{this.props.content}</h1>;
    } else if (textStyle === 'h2') {
      return <h2>{this.props.content}</h2>;
    } else if (textStyle === 'h3') {
      return <h3>{this.props.content}</h3>;
    } else {
      return <p><span>{this.props.content}</span></p>;
    }
  }
}

export default Text;