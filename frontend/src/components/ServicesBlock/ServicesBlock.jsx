import React, { useState } from 'react'
import { useHistory } from 'react-router';
import tooth from './img/tooth.svg';
import kid from './img/kid.svg';
import woman from './img/woman.svg';
import styles from './ServicesBlock.module.css';
import Modal from '../Modal/Modal';

function ServicesBlock() {

  let denistryHistory = useHistory();

  const [modalActive, setModalActive] = useState(false);
  const [kidModalActive, setModalKidActive] = useState(false);

  const cosmetologyData = [
    {name: 'Чистка лица ультразвуковая (с восстанавливающей уходовой процедурой)', price: '2000-2900'},
    {name: 'Пилинги', price: '2000-2500'},
    {name: 'Массаж лица', price: '1000'},
    {name: 'Коррекция морщин Botox', price: '350'},
    {name: 'Мезотерапия лица', price: '1800-3800'},
    {name: 'Мезолифтинг', price: '2300-3400'},
    {name: 'Контурная пластика Teosyal, Uviderm', price: '15500 -17000'},
    {name: 'Фотоомоложение', price: '4000-10000'},
    {name: 'Лифтинг лица LPG', price: '1700'},
    {name: 'Массаж спина+шея', price: '1000'},
    {name: 'Массаж антистрессовый с эфирными маслами', price: '1600'},
    {name: 'Обертывания', price: '2500-3500'}
  ]

  const kidData = [
    {name: 'Детская профессиональная чистка зубов', price: '2600'},
    {name: 'Удаление молочного зуба', price: '500-1300'},
    {name: 'Лечение кариеса молочного зуба', price: '2000-3500'},
    {name: 'Лечение пульпита молочного зуба', price: '1500-5000'},
    {name: 'Герметизация фиссур', price: '800-1300'},
    {name: 'Серебрение зубов', price: '400'},
    {name: 'Фторирование зубов', price: '100'},
    {name: 'Система профилактики кариеса', price: '2000'}
  ]
  

  return (
    <>
    <div className={styles['services-block']}>
      <div className={styles.block} onClick={() => denistryHistory.push('/denistry')}>
        <img style={{'width': '70px', 'height': '70px'}} src={tooth} alt="tooth" />
        <span>СТОМАТОЛОГИЯ</span>
        <p>В нашей клинике самое современное обуродование и одни из лучших специалистов!</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
      <div className={styles.block} onClick={() => setModalActive(true)}>
        <img style={{'width': '70px', 'height': '70px'}} src={woman} alt="woman" />
        <span>КОСМЕТОЛОГИЯ</span>
        <p>Клиника европейского уровня, по предварительной записи в удобное для вас время.</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
      <div className={styles.block} onClick={() => setModalKidActive(true)}>
        <img style={{'width': '70px', 'height': '70px'}} src={kid} alt="kid" />
        <span>ДЕТСКАЯ СТОМАТОЛОГИЯ</span>
        <p>При появлении первых зубов очень важно начать правильно ухаживать за ними.</p>
        {/* <button>ПОДРБНЕЕ</button> */}
      </div>
    </div>
    {
      modalActive && <Modal active={modalActive} setActive={setModalActive} prices={cosmetologyData} title={'КОСМЕТОЛОГИЯ'}/>
    }
    {
      kidModalActive && <Modal active={kidModalActive} setActive={setModalKidActive} prices={kidData} title={'ДЕТСКАЯ СТОМАТОЛОГИЯ'}/>
    }
    </>
  )
}

export default ServicesBlock
