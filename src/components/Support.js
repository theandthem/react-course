import React from "react";
import Text from "./Text";
import style from './Modal.module.css';
import Button from '@mui/material/Button';

class Support extends React.Component {
  render() {
    return (
      <section className={this.props.visible ? style.modal + ' ' + style.modalVisible : style.modal}>
        <section className={style.modalContent}>
          <nav className={style.modalNav}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              this.props.toggleSupportVisibility()
            }}
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
}

export default Support;