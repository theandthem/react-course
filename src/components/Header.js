import React from "react";
import style from './Header.module.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <section className={style.header}>
        <Link to="/topic1">
          <button className={style.headerButton}>Topic 1</button>
        </Link>
        <Link to="/topic2">
          <button className={style.headerButton}>Topic 2</button>
        </Link>
        <button onClick={() => {
          this.props.toggleSupportVisibility()
        }} className={style.headerButton}>Support</button>
      </section>
    );
  }
}

export default Header;