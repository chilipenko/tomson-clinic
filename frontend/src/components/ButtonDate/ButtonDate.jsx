import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ButtonDate.module.css';

function ButtonDate({id, date}) {

  const tableId = useSelector(state => state.tableReducer.tableId)
  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch({type: 'CLICK_BTN', payload: id})
  }

  return (
    <button className={tableId === id ? styles.active : styles.btn} onClick={btnHandler}>{date}</button>
  )
}

export default ButtonDate
