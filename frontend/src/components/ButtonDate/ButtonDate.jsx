import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './ButtonDate.module.css';

function ButtonDate({id, date}) {

  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch({type: 'CLICK_BTN', payload: id})
  }

  return (
    <button className={styles.btn} onClick={btnHandler}>{date}</button>
  )
}

export default ButtonDate
