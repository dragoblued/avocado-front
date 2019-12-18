import React from "react";
import styles from "./LogoComponent.module.css";

class LogoComponent extends React.Component {
  render() {
    return (
      <>
        <div>
          <svg viewBox="-10 8 84 34">
            <ellipse rx="8" ry="9" cx="31" cy="29" fill="#4e6526" />
            <ellipse rx="6" ry="6" cx="31" cy="23" fill="#4e6526" />
            <ellipse rx="7" ry="8" cx="31" cy="29" fill="#96c93a" />
            <ellipse rx="5" ry="5" cx="31" cy="23" fill="#96c93a" />
            <ellipse rx="6" ry="7" cx="31" cy="28" fill="#afd64d" />
            <ellipse rx="4" ry="4" cx="31" cy="23" fill="#afd64d" />
            <circle cx="31" cy="29" r="5" fill="#936549" />
            <circle cx="31" cy="29" r="4" fill="#c9905f" />
            <circle cx="29" cy="27" r="1" fill="#edbd86" />
            <circle cx="29" cy="28" r="0.7" fill="#000000" />
            <circle cx="33" cy="28" r="0.7" fill="#000000" />
            <circle cx="29" cy="30" r="0.4" fill="#FFA07A" />
            <circle cx="33" cy="30" r="0.4" fill="#FFA07A" />
            <circle
              cx="31"
              cy="26"
              r="15"
              fill="transparent"
              stroke="#4e6526"
              stroke-width="1"
              stroke-dasharray="55 10 25"
              stroke-dashoffset="0"
            ></circle>
            <line
              x1="30"
              y1="31"
              x2="32"
              y2="31"
              stroke="black"
              stroke-width="0.2"
            />
          </svg>
        </div>
        <div className={styles.nameProduct}>
          <p>AVOCADO</p>
        </div>
      </>
    );
  }
}

export default LogoComponent;
