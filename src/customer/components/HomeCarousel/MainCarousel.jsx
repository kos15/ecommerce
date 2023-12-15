import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';


const items = mainCarouselData.map((item) => <img className='cursor-pointer -z-10' src={item.image} role='presentation' alt=''/>)

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);

export default MainCarousel;