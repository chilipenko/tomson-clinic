import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './AdminForm.module.css';
import { initAdmin } from '../../redux/actionCreators/adminAC';


function AdminForm() {

  let history = useHistory();
  const dispatch = useDispatch();

  const textRef = useRef(null);
  const passwordRef = useRef(null);

  const adminHandler = async (event) => {

    const login = textRef.current.value;
    const password = passwordRef.current.value;

    event.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body:   JSON.stringify({login, password})
    })
    const result = await response.json();

    if(result.auth) {
      dispatch(initAdmin())
      history.push('admin/table')
    } else {
      history.push('/')
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.adminForm}>
        <input ref={textRef} type="text" />
        <input ref={passwordRef} type="password" />
        <button type="submit" onClick={() => adminHandler}>Войти</button>
      </form>
    </div>
  )
}

export default AdminForm
