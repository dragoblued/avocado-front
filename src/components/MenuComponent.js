import React from 'react';
import styles from './MenuComponent.module.css';

class MenuComponent extends React.Component {
	render() {
		return <div className={ styles.head }>
						<div className={ styles.head__top }>
						<div className={ styles.header__logo }>AVOCADO</div>
							<nav>
								<a className={ styles.nav__link } href="/"> About </a>
								<a className={ styles.nav__link } href="/calculator"> Add Product </a>
								<a className={ styles.nav__link } href="/statistic"> Statistic </a>
								<a className={ styles.nav__link } href="/config"> Config </a>
							</nav>	
						</div>
						<div className={ styles.line }></div>
				</div>;
	}
}

export default MenuComponent;