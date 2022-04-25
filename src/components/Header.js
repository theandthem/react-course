import React from "react";
import style from './Header.module.css';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { toggleSupportVisibility } from '../store/ExtrasSlice'
import { changeLanguage } from "../store/LanguageSlice";

export default function Header() {
  const dispatch = useDispatch();
  const activeLanguage = useSelector((state) => state.language.activeLanguage);
  let langButton;

  if (activeLanguage === 'de') {
    langButton =
      <Button
        variant="contained"
        disableElevation
        onClick={() => dispatch(changeLanguage({langCode:'engb'}))}
      >
      English
    </Button>;
  } else {
    langButton =
      <Button
          variant="contained"
          disableElevation
          onClick={() => dispatch(changeLanguage({langCode:'de'}))}
        >
        German
      </Button>;
  }

  return (
    <section className={style.header}>
      <Link to="/topic1">
        <Button variant="contained" disableElevation>Topic 1</Button>
      </Link>
      <Link to="/topic2">
      <Button variant="contained" disableElevation>Topic 2</Button>
      </Link>
      <Button
        variant="contained"
        disableElevation
        onClick={() => dispatch(toggleSupportVisibility())}
      >
        Support
      </Button>
      {langButton}
    </section>
  );
}