import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.HomeImage}>
      <h1 className={s.HomeGreeting}>Welcome to Your Phonebook!</h1>
    </div>
  );
};
export default HomePage;
