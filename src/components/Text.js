import React from "react";
import style from './Text.module.css';

class Text extends React.Component {
  render() {
    const textStyle = this.props.data.textStyle;
    if (textStyle === 'h1') {
      return <h1>{this.props.data.content}</h1>;
    } else if (textStyle === 'h2') {
      return <h2>{this.props.data.content}</h2>;
    } else if (textStyle === 'h3') {
      return <h3>{this.props.data.content}</h3>;
    } else if (textStyle === 'h4') {
      return <h4>{this.props.data.content}</h4>;
    } else if (textStyle === 'link') {
      return <a className={style.link} rel="noreferrer" target="_blank" href={this.props.data.linkUrl}>{this.props.data.linkLabel}</a>;
    } else if (textStyle === 'paragraph') {
      return <p>{this.props.data.content}</p>;
    } else {
      return <p><span>{this.props.data.content}</span></p>;
    }
  }
}

export default Text;