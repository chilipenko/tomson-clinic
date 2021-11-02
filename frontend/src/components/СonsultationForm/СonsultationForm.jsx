import React, {useState} from 'react'
import styles from './СonsultationForm.module.css'

function СonsultationForm() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles['banner-form']}>
      <h3>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ!</h3>
      <h1>КОНСУЛЬТАЦИЯ</h1>
      <p>+ ФОТО ПРОТОКОЛ</p>
      <p>+ ФИНАНСОВЫЙ ПЛАН</p>
      <button onClick={() => setModalActive(true)}>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
    </div>
  )
}

export default СonsultationForm;
