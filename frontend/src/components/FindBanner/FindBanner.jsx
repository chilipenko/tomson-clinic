import React from 'react';
import email from './img/email.svg';
import location from './img/location.svg';
import styles from './FindBanner.module.css';

function FindBanner() {
  return (
    <div className={styles['find-banner']}>
      <div className={styles['info__text']}>Мы всегда на связи и встречаем вас с улыбкой не потому, что этого требует корпоративная культура, а потому, что по-настоящему рады вам.</div>
      <div className={styles['info__phone']}>707-87-05</div>
      <div className={styles['info__email']}>
        <img src={email} alt="email" />
        <div>info@tomson.ru</div>
      </div>
      <div className={styles['info__addres']}>
        <img src={location} alt="addres" />
        <div>СПБ, пр. Наставников 47/1</div>
      </div>
    </div>
  )
}

export default FindBanner
