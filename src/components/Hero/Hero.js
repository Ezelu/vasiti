import React from 'react';
import { Container } from '@mui/material';
import './Hero.css';
import testimonial_image from '../../images/images/testimonial_image.png';

export default function Hero () {
  return (
    <div className='hero'>
      <aside>
        <h2> Amazing <br /> Experiences from Our Wonderful Customers </h2>
        <p> Here is what customers and vendors are saying about
        us, you can share your stories with us too. </p>
      </aside>
      <aside>
        <img src={testimonial_image} alt='testimonial image of boy and girl smiling' />
      </aside>

    </div>
  )
}