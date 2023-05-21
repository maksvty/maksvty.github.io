import styles from './MainMenu.module.css';
import {Link} from "react-router-dom";

import React from 'react';

const MainMenu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} to="/">
        <img src="/home.svg" alt="Главная"/>
        Главная
      </Link>
      <Link className={styles.link} to="/menu">
        <img src="/food.svg" alt="Еда"/>
        Меню
      </Link>
      <Link className={styles.link} to="/">
        <img src="/cart.svg" alt="Корзина"/>
        Корзина
      </Link>
      <Link className={styles.link} to="/">
        <img src="/profile.svg" alt="Профиль"/>
        Профиль
      </Link>
    </div>
  )
};

export default MainMenu;
