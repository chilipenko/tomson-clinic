import React from 'react';
import { Carousel } from 'react-bootstrap';
import ConsultationForm  from '../СonsultationForm/СonsultationForm';
import IMG_1716 from './img/IMG_1716.jpg';
import IMG_1732 from './img/IMG_1732.jpg';
import IMG_1745 from './img/IMG_1745.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Slider.module.css';


function Slider() {
  return (
    <div className={styles.divtest}>
      <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={IMG_1716}
            alt="IMG_1716"
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={IMG_1732}
            alt="IMG_1732"
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={IMG_1745}
            alt="IMG_1745"
          />
        </Carousel.Item>
      </Carousel>
      <ConsultationForm />
    </div>
  )
}

export default Slider
