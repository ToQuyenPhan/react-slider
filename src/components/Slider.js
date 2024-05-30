import React from 'react';
import { Data } from './Data';

const Slider = () => {
  return (
    <>
        {Data.map((data, index) => {
            return(
                <img src={data.url} alt='Vietnam image' />
            )
        })}
    </>
  )
}

export default Slider;