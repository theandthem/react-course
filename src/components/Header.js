import React from "react";
import style from './Header.module.css';
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { toggleSupportVisibility } from '../store/ExtrasSlice'

export default function Header() {
  const dispatch = useDispatch()

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
    </section>
  );
}