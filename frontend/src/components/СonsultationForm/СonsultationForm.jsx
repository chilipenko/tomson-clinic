import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './СonsultationForm.module.css'



function СonsultationForm() {

  let onlinetableHistory = useHistory()
  
  return (
    <>
    <div className={styles['banner-form']}>
      <h3>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h3>
      <h1>КОНСУЛЬТАЦИЯ</h1>
      <p>+ ФОТО ПРОТОКОЛ</p>
      <p>+ ФИНАНСОВЫЙ ПЛАН</p>
      <button onClick={() => onlinetableHistory.push('/onlinetable')}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
    </div>
     </>
  )
}

export default СonsultationForm;
