import React from "react";
import styles from "./MenuComponent.module.css";

class MenuComponent extends React.Component {
  render() {
    return (
      <div className={styles.head}>
        <div className={styles.head__top}>
          <div className={styles.header__logo}>AVOCADO</div>
          <nav>
            <a
              className={
                window.location.href === "http://localhost:3000/"
                  ? styles.nav_link_active
                  : styles.nav_link
              }
              href="/"
              onClick={this.onClick}
            >
              {" "}
              About{" "}
            </a>
            <a
              className={
                window.location.href === "http://localhost:3000/calculator"
                  ? styles.nav_link_active
                  : styles.nav_link
              }
              href="/calculator"
            >
              {" "}
              Add Product{" "}
            </a>
            <a
              className={
                window.location.href === "http://localhost:3000/statistic"
                  ? styles.nav_link_active
                  : styles.nav_link
              }
              href="/statistic"
            >
              {" "}
              Statistic{" "}
            </a>
            <a
              className={
                window.location.href === "http://localhost:3000/config"
                  ? styles.nav_link_active
                  : styles.nav_link
              }
              href="/config"
            >
              {" "}
              Config{" "}
            </a>
          </nav>
        </div>
        <div className={styles.line}></div>
      </div>
    );
  }
}

export default MenuComponent;
