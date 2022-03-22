import React from "react";

class Image extends React.Component {
  render() {
    return <img src={this.props.imageSource} alt={this.props.imageAlt}/>
  }
}

export default Image;