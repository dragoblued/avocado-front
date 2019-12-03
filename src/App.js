import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import MenuComponent from './components/MenuComponent';
import LogoComponent from './components/LogoComponent';

class App extends React.Component {
  render() {
    return <div className={styles.wrap}>
            <MenuComponent/>
            <LogoComponent/>
          </div>;
  }
}

export default App;
