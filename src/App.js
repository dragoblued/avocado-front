import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Calculator from './components/calculator/CalculatorComponent';
import MenuComponent from './components/MenuComponent';
import LogoComponent from './components/LogoComponent';
import ConfigComponent from './components/config/ConfigComponent';

class App extends React.Component {
  render() {
    return (
    	<div className={styles.wrap}>
       		<MenuComponent />
	    	<Switch>
	    		<Route exact path='/' component={LogoComponent} />
	    		<Route path='/calculator' component={Calculator} />
	    		<Route path='/config' component={ConfigComponent} />
	    	</Switch>
    	</div>
    )
  }
}

export default App;
