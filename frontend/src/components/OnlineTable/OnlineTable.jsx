import React, { useState } from 'react';
import ModalTable from '../Modal/ModalTable';
import styles from './OnlineTable.module.css';

function OnlineTable({el}) {

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className={styles.block}>
            <span>{el.title}</span>
            <p className={styles.subtitle}>{el.subtitle}</p>
            <p onClick={() => setModalActive(true)} className={styles.price}>Цены</p>
      </div>
          {
           modalActive && <ModalTable active={modalActive} setActive={setModalActive} title={el.title}/>
          }
    </>
  )
}

export default OnlineTable
