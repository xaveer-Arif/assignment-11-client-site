import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner/01.jpg'
import banner2 from '../../../../images/banner/02.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                     className="d-block w-100"
                     src={banner1}
                      alt="First slide"
                      />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={banner2}
                      alt="Second slide"
                    />
                </Carousel.Item>
 
            </Carousel>
        </div>
    );
};

export default Banner;