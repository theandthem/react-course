import React from "react";
import Text from "./Text";
import style from './Modal.module.css';

class Support extends React.Component {
  render() {
    return (
      <section className={this.props.visible ? style.modal + ' ' + style.modalVisible : style.modal}>
        <section className={style.modalContent}>
          <nav className={style.modalNav}>
          <button onClick={() => {
            this.props.toggleSupportVisibility()
          }} className={style.hideButton}>Hide</button>
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