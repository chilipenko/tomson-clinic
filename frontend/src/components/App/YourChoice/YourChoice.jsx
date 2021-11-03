import React from 'react';
import { Carousel } from 'react-bootstrap';
import dentist from './img/dentist.png';
import styles from './YourChoice.module.css';
import Fade from 'react-reveal/Fade';

function YourChoiceBlock() {
  return (
    // <div className={styles['yourchoice-block']}>
    //   {/* <img style={{'width':'600px', 'height':'550px'}} src={dentist} alt="dentist" /> */}
    //   <div className={styles.divtest}>
    //   <Carousel>
    //     <Carousel.Item style={{'height': '400px'}}>
    //       <img
    //         className="d-block w-100" 
    //         src={dentist}
    //         alt="test1"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item style={{'height': '400px'}}>
    //       <img
    //         className="d-block w-100" 
    //         src={dentist}
    //         alt="test2"
    //       />
    //     </Carousel.Item>
    //     <Carousel.Item style={{'height': '400px'}}>
    //       <img
    //         className="d-block w-100" 
    //         src={dentist}
    //         alt="test3"
    //       />
    //     </Carousel.Item>
    //   </Carousel>
    
    // </div>
    //  <Fade right>
    //   <div>
    //     <span>ПОЧЕМУ НАС ВЫБРАЛИ БОЛЕЕ 18 ТЫСЯЧ ПАЦИЕНТОВ?</span>
    //    <p>Командная работа</p>
    //    <p>Постоянно развиваемся</p>
    //    <p>Контроль лечения на всех этапах</p>
    //    <p>Подробные (бесплатные) консультации</p>
    //    <p>Четкие финансовые планы со сроками</p>
    //    <p>25 лет стабильной работы</p>

    //   </div>
    //   </Fade>
    // </div>

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
            className="d-block w-100" 
            src={dentist}
            alt="test1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={dentist}
            alt="test1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={dentist}
            alt="test1"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    
  )
}

export default YourChoiceBlock
