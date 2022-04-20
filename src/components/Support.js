import React from "react";
import Text from "./Text";
import style from './Modal.module.css';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { toggleSupportVisibility } from '../store/ExtrasSlice'

export default function Support() {
  const supportVisibility = useSelector((state) => state.extras.supportVisibility)
  const dispatch = useDispatch()

  return (
    <section className={supportVisibility ? style.modal + ' ' + style.modalVisible : style.modal}>
      <section className={style.modalContent}>
        <nav className={style.modalNav}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => dispatch(toggleSupportVisibility())}
          >
            Hide
          </Button>
        </nav>
        <br />
        <hr />
        <Text content="Support" textStyle="h1" />
        <Text content="If you get stuck, check out our knowledge base by clicking the link below." textStyle="paragraph" />
        <Text linkUrl="https://support.gomolearning.com/support/home" linkLabel="Support home" textStyle='link' />
      </section>
    </section>
  );
}