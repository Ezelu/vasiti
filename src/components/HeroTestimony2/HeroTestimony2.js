import React from 'react';
import './HeroTestimony2.css';
import woman_shopping from '../../images/images/woman_shopping.png';






export default function HeroTestimony () {
  return (
    <div className='heroTestimony2'>
      <aside className='write-up2'>
        <h2> Josiah's Experience </h2>
        <button> VENDOR </button>
        <p> I had the best experience shopping with vasiti.
            Usability of the website was great, very good
            customer service, an all round great
            experience. I would definately be coming back!
            I had the best experience shopping with vasiti.
            Usability of the website was great, very good
            customer service, an all round great
            experience. I would definately be coming back! </p>
          
        <h3> SHARE YOUR OWN STORY </h3> 
      </aside>
      <aside>
        <img src={woman_shopping} alt='two black girls smiling' />
      </aside>

    </div>
  )
}