import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Carousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}

    const slides = [
        {url: './sliderone.webp'},
        {url: './slidertwo.webp'},
        {url: './sliderthree.webp'},
    ]
    return ( 
        <div className='w-full h-[120px]  relative group lg:h-[250px]'>
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500 ease-in-out'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
        </div>
     );
}
 
export default Carousel;