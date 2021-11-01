import React from 'react'
import { useHistory } from 'react-router';
import tooth from './img/tooth.svg';
import kid from './img/kid.svg';
import woman from './img/woman.svg';
import styles from './ServicesBlock.module.css';

function ServicesBlock() {

  let denistryHistory = useHistory()

  return (
    <div className={styles['services-block']}>
      <div className={styles.block} onClick={() => denistryHistory.push('/denistry')}>
        <img style={{'width': '70px', 'height': '70px'}} src={tooth} alt="tooth" />
        <span>СТОМАТОЛОГИЯ</span>
        <p>В нашей клинике самое современное обуродование и одни из лучших специалистов!</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
      <div className={styles.block}>
        <img style={{'width': '70px', 'height': '70px'}} src={woman} alt="woman" />
        <span>КОСМЕТОЛОГИЯ</span>
        <p>Клиника европейского уровня, по предварительной записи в удобное для вас время.</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
      <div className={styles.block}>
        <img style={{'width': '70px', 'height': '70px'}} src={kid} alt="kid" />
        <span>ДЕТСКАЯ СТОМАТОЛОГИЯ</span>
        <p>При появлении первых зубов очень важно начать правильно ухаживать за ними.</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
    </div>
  )
}

export default ServicesBlock
