import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BurgerButton  from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import logo from '../../../Navigation/img/logo.png';
import styles from '../../../Navigation/Navigation.module.css';
import './style.scss';

const TopSection = () => {
  const { setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className="LeftSideBar__TopSection">
   <Link to="/" className={styles.logo}><img src={logo} alt="logo" /></Link>
      <BurgerButton
        onClick={() => setIsShowSidebar(true)}
      />
     
    </div>
  );
};

export default TopSection;
