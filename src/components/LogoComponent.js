import React from 'react';
import styles from './LogoComponent.module.css';

class LogoComponent extends React.Component {
	render() {
		return <div className={styles.wrapper}>
						  <div className={styles.avocado}>
						    <div className={styles.avocado_scine}></div>
						    <div className={styles.avocado__inner_shadow}></div>
						    <div className={styles.avocado__inner}></div>
						    <div className={styles.avocado__seed}></div>
						    <div className={styles.avocado__seed_highlight}></div>
						    <div className={styles.avocado__eye, styles.avocado__eyeLeft}></div>
						    <div className={styles.avocado__eye, styles.avocado__eyeRight}></div>
						    <div className={styles.avocado__smile}></div>
						  </div>
							<svg viewBox="0 0 92 92" className={styles.donut}>
							  <circle className={styles.donut_segment} cx="46" cy="20" r="16" fill="transparent" stroke="#4e6526" strokeWidth="1" strokeDasharray="35 5" strokeDashoffset="0"></circle>
							</svg>
						  <p className={styles.nameProduct}>AVOCADO</p>
					</div>;
	}
}

export default LogoComponent;