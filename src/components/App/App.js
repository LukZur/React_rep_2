import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;


{/* <h1 className={styles.title}>My first React app</h1>
  <h2 className={styles.subtitle}>Hello world!</h2>
  <List title={['Things to do ', <sup>soon!</sup>]} imgSrc="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png">
    <p>I'm planning on doing all these things sooner, rather than later!</p>
    <h1>dupa</h1>
    <h1>dupa</h1>
    <h1>dupa</h1>
    <h1>dupa</h1>
  </List> */}
