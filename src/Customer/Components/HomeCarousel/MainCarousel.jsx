import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




const images = [
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/3/_/3_13.jpg',
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/_/1_8.jpg',
    'https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/4/_/4_12.jpg' 
];

const MainCarousel = () => (
    <AliceCarousel
        items={images.map((image, index) => (
        <img key={index} src={image} className="slider-img" alt={`Slide ${index + 1}`} />
        ))}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        // items={items}
        
    />
);
export default MainCarousel;