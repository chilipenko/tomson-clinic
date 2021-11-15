import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './DenistryCard.module.css';

function DenistryCard({el}) {

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className={styles.block}>
            <span>{el.title}</span>
            <p className={styles.subtitle}>{el.subtitle}</p>
            <p onClick={() => setModalActive(true)} className={styles.price}>Цены</p>
      </div>
          {
           modalActive && <Modal active={modalActive} setActive={setModalActive} prices={el.prices} title={el.title}/>
          }
    </>
  )
}

export default DenistryCard
