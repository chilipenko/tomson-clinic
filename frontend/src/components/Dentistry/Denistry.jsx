import React from 'react';
// import { useHistory } from 'react-router';
import DenistryCard from '../DenistryCard/DenistryCard';
import { v4 as uuidv4 } from 'uuid';
import styles from './Denistry.module.css';

function Denistry() {

  const denistryData = [
    {
      title: 'Лечение',
      subtitle: 'Сохранение и эстетичное восстановление родных зубов. Все лечение производится с использованием стоматологического микроскопа Leica.',
      path: '/denistry/treatment',
      prices: [
        {name: 'Лечение кариеса без машинной обработки зуба', price: '2500-2900'},
        {name: 'Лечение кариеса', price: '3000-5500'},
        {name: 'Эстетическая реставрация', price: '4500-6000'},
        {name: 'Лечение корневых каналов', price: '3000-10000'},
        {name: 'Безоперационное лечение кист', price: 'от 4500'}
      ]
    }, 
    {
      title: 'Гигиена',
      subtitle: 'Профессиональная гигиена, которая позволит иметь здоровые зубы и красивую улыбку.',
      path: '/denistry/hygiene',
      prices: [
        {name:'Комплексная профессиональная чистка зубов', price: '3400'},
        {name:'Комплексная чистка 1 зуба', price: '100'},
        {name:'Глубокое фторирование 1 зуба', price: '100'},
        {name:'Система профессиональной профилактики кариеса', price: '2000'}
        
      ]
    },
    {
      title: 'Имплантация',
      subtitle: 'Самое современное восстановление утраченного зуба.',
      path: '/denistry/implantation',
      prices: [
        {name: 'Установка зубного имплантата Alpha-Bio', price: '20000'},
        {name: 'Установка Зубного имплантата Dentium', price: '25000'},
        {name: 'Установка зубного имплантата Ankylos', price: '30000'},
        {name: 'Синус-лифтинг', price: '16000-25000'},
        {name: 'Установка формирователя десны', price: '3000'},
        {name: 'Установка миниимплантата', price: '8000'},

      ]
    },
    {
      title: 'ОРТОДОНТИЯ',
      subtitle: 'Использование эстетических и лингвальных брекет-систем, элайнеров.',
      path: '/denistry/orthodontics',
      prices: [
        {name: 'Металлические брекет-системы', price: '20000-25000'},
        {name: 'Комбинированные брекет-системы', price: '25000-30000'},
        {name: 'Эстетические брекет-системы', price: '30000-40000'},
        {name: 'Лингвальные брекет-системы', price: '35000-110000'},
        {name: 'Контрольные посещения', price: '1500-3000'},
        {name: 'Элайнеры (каппы для исправления прикуса)', price: '150000'},
        {name: 'Исправление прикуса на съемных пластинках', price: '12000-25000'},
      ]
    },
    {
      title: 'ХИРУРГИЯ',
      subtitle: 'Лечение всех заболеваний, в том числе посредством хирургии.',
      path: '/denistry/surgey',
      prices: [
        {name: 'Удаление зуба', price: '1800-3000'},
        {name: 'Удаление зуба мудрости', price: '3700-5000'},
        {name: 'Иссечение "капюшона" над зубом', price: '2000'},
        {name: 'Резекция верхушки корня', price: '5500-7500'},
        {name: 'Пластика уздечки губы, языка', price: '3000'},
      ]
    },
    {
      title: 'ПРОТЕЗИРОВАНИЕ',
      subtitle: 'Детальная диагностика и проектирование результата. Полное соответствие природным цвету и форме.',
      path: '/denistry/prosthetics',
      prices: [
        {name: 'Металлокерамическая коронка', price: '10000-15000'},
        {name: 'Коронка из диоксида циркония', price: '19000'},
        {name: 'Вкладка культевая', price: '3500-4500'},
        {name: 'Винир композитный', price: '6500-7500'},
        {name: 'Винир керамический', price: '20000-30000'},
        {name: 'Коронка на имплантате металлокерамическая', price: '15000-25000'},
        {name: 'Коронка на имплантате на основе диоксида циркония', price: '24000-35000'},
        {name: 'Бюгельный протез', price: '35000-45000'},
        {name: 'Съемный протез', price: '8000-25000'},
        {name: 'Гибкий протез', price: '16000-30000'},
        {name: 'Починка съемного протеза', price: '4000'},
      ]
    },
  ] 

  // let history = useHistory()

  // const bloclHandler = () => {
    
  // } 

  return (
    <div className={styles.content}>
      {
        denistryData.map(el => <DenistryCard  key={uuidv4()} el={el}/>)
      }
    </div>
  )
}

export default Denistry