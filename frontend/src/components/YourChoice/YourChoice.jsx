import React from 'react';
import { Carousel } from 'react-bootstrap';
import smile from './img/smile.jpg';
import laboratory from './img/laboratory.jpg';
import IMG_9374 from './img/IMG_9374.jpg';

import styles from './YourChoice.module.css';
import Fade from 'react-reveal/Fade';

function YourChoiceBlock() {
  return (
      <div className={styles.container}>
      <Fade left>
        <div className={styles['text-content']}>
            <span>ПОЧЕМУ НАС ВЫБРАЛИ БОЛЕЕ 18 ТЫСЯЧ ПАЦИЕНТОВ?</span>
            <ul>
              <li>Командная работа</li>
              <li>Постоянно развиваемся</li>
              <li>Контроль лечения на всех этапах</li>
              <li>Подробные (бесплатные) консультации</li>
              <li>Четкие финансовые планы со сроками</li>
              <li>25 лет стабильной работы</li>
            </ul>
          </div>
      </Fade>
    <div className={styles['slider-container']}>
      <Carousel>
        <Carousel.Item>
          <img
            style={{'height': '550px', 'width': '890px'}}
            className="d-block" 
            src={smile}
            alt="test1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{'height': '550px', 'width': '890px'}}
            className="d-block" 
            src={laboratory}
            alt="test1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{'height': '550px', 'width': '890px'}}
            className="d-block" 
            src={IMG_9374}
            alt="test1"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    
  )
}

export default YourChoiceBlock
