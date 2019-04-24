import React, { Component } from 'react';
import '../custom.scss';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/random1.jpeg';
import img2 from '../images/random2.jpg';
import img3 from '../images/random3.jpg';

const CarouselPage = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block img-thumbnail fixSize rounded-6"
      src={img1}
      alt="First slide"/>
    <Carousel.Caption>
 </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-thumbnail fixSize rounded"
      src={img2}
      alt="Third slide" />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img-thumbnail fixSize"
      src={img3}
      alt="Third slide" />
    <Carousel.Caption>
  </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default CarouselPage;