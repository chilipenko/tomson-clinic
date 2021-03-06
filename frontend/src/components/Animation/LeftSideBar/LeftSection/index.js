/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import styles from '../../../Navigation/Navigation.module.css';
import './style.scss';
import {GiShinyApple} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  // const [status, setStatus] = useState('close');
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <AiOutlineCloseCircle size='40px' color='red' onClick={() => {setIsShowSidebar((state) => !state)}}/>
      </div>
      <ul className={styles['menu-list']}>
        <Link to="/"><li>О клинике</li></Link>
        <Link to="/denistry"><li>Стоматология</li></Link>
        <Link to="/"><li>Косметология</li></Link>
        <Link to="/"><li>Детская стоматология</li></Link>
        <Link to="/"><li>Отзывы</li></Link>
        <Link to="/"><li>Контакты</li></Link>
        <Link to="/denistry"><li>Цены</li></Link>
      </ul>
    </div>
  );
};

export default LeftSection;
