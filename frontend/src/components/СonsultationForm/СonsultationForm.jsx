import React from 'react'
import styles from './СonsultationForm.module.css'

function СonsultationForm() {
  return (
    <div className={styles['banner-form']}>
      <h3>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h3>
      <h1>КОНСУЛЬТАЦИЯ</h1>
      <p>+ ФОТО ПРОТОКОЛ</p>
      <p>+ ФИНАНСОВЫЙ ПЛАН</p>
      <button onClick={() => alert('hi')}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}

export default СonsultationForm;
