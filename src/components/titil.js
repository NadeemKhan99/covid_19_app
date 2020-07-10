import React from 'react';
import Image from '../covid-19.png';
import '../index.css';
export const Title = () =>{
    return(
        <div className="title_div">
            <img src={Image} alt="COVID-19"/>           
        </div>
    )
}