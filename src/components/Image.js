import React from "react";

class Image extends React.Component {
  render() {
    return <img src={this.props.data.imageSource} alt={this.props.data.imageAlt}/>
  }
}

export default Image;