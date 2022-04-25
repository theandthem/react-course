import React from "react";
import style from './Text.module.css';
import { useSelector } from 'react-redux'

export default function Text(props) {
  const activeLanguage = useSelector((state) => state.language.activeLanguage);
  const textStyle = props.data.textStyle;
  let langKey = `content${activeLanguage}`;
  if (textStyle === 'h1') {
    return <h1>{props.data.content}</h1>;
  } else if (textStyle === 'h2') {
    return <h2>{props.data.content}</h2>;
  } else if (textStyle === 'h3') {
    return <h3>{props.data.content}</h3>;
  } else if (textStyle === 'h4') {
    return <h4>{props.data[`${langKey}`]}</h4>;
  } else if (textStyle === 'link') {
    return <a className={style.link} rel="noreferrer" target="_blank" href={props.data.linkUrl}>{props.data.linkLabel}</a>;
  } else if (textStyle === 'paragraph') {
    return <p>{props.data.content}</p>;
  } else {
    return <p><span>{props.data.content}</span></p>;
  }
}
