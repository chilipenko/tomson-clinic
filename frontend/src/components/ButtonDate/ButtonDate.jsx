import React from 'react';
import { useDispatch } from 'react-redux';

function ButtonDate({id, date}) {

  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch({type: 'CLICK_BTN', payload: id})
  }

  return (
    <button onClick={btnHandler}>{date}</button>
  )
}

export default ButtonDate
