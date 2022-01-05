import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
  <header className={styles.component}>
    <h2 className={styles.image}>Things to do!</h2>
    <img className={styles.image} src="https://uploads.kodilla.com/bootcamp/fer/11.react/task-03-2.png"></img>
  </header>
);

export default Hero;