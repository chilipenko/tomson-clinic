import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <Link to="/" className={styles.logo}><img src={logo} alt="logo" /></Link>
        <ul className={styles['menu-list']}>
          <Link to="/"><li>О клинике</li></Link>
          <Link to="/"><li>Стоматология</li></Link>
          <Link to="/"><li>Косметология</li></Link>
          <Link to="/"><li>Детская стоматология</li></Link>
          <Link to="/"><li>Отзывы</li></Link>
          <Link to="/"><li>Контакты</li></Link>
          <Link to="/"><li>Цены</li></Link>
        </ul>
        <ul className={styles['contact-list']}>
          <Link to="/"><li>Санкт-Петербург, пр. Наставников д.47к.1</li></Link>
          <Link to="/"><li>8 800 707-87-05</li></Link>
          <Link to="/"><li>Заказать звонок</li></Link>
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
