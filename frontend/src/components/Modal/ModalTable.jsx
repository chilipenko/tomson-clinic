import React from 'react';
import styles from './Modal.module.css';

function ModalTable({active, setActive, title}) {

  return (
    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div className={active ? `${styles['modal__content']} ${styles.active}` : `${styles['modal__content']}`} onClick={e => e.stopPropagation()}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  );
}
export default ModalTable
