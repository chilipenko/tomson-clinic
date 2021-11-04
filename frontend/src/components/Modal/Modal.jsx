import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Modal.module.css';

function Modal({active, setActive, prices, title}) {
  // console.log(prices)
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div className={active ? `${styles['modal__content']} ${styles.active}` : `${styles['modal__content']}`} onClick={e => e.stopPropagation()}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
            {
              prices.map(el => (
               <div key={uuidv4()} className={styles.prices}>  
                  <p className={styles.name}>{el.name}</p> 
                  <p>{el.price} <span className={styles.rub}>₽</span></p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
}
export default Modal
