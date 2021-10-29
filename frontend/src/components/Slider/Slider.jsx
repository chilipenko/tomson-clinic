import React from 'react';
import { Carousel } from 'react-bootstrap';
import ConsultationForm  from '../СonsultationForm/СonsultationForm';
import test1 from './img/test1.jpg';
import test2 from './img/test2.jpg';
import test3 from './img/test3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={test1}
            alt="test1"
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={test2}
            alt="test2"
          />
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img
            className="d-block w-100" 
            src={test3}
            alt="test3"
          />
        </Carousel.Item>
      </Carousel>
      <ConsultationForm />
    </div>
  )
}

export default Slider
