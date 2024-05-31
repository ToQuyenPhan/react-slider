import React, { useState } from 'react';
import { Data } from './Data';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Slider = ({ images }) => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevImage} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextImage} />
            {Data.map((data, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={data.url} alt='Vietnam image' className='image' />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider;