import React from 'react';
import './HeroTestimony.css';
import black_girls from '../../images/images/black_girls.png';
import Share from '../Modals/Share';





export default function HeroTestimony () {
  return (
    <div className='heroTestimony'>
      <aside className='write-up'>
        <h2> Tolu & Joy's Experience </h2>
        <button> CUSTOMER </button>
        <p> I had the best experience shopping with vasiti.
            Usability of the website was great, very good
            customer service, an all round great
            experience. I would definately be coming back!
            I had the best experience shopping with vasiti.
            Usability of the website was great, very good
            customer service, an all round great
            experience. I would definately be coming back! </p>
          
        {/* <h3> SHARE YOUR OWN STORY </h3>  */}
        <Share />
      </aside>
      <aside>
        <img src={black_girls} alt='two black girls smiling' />
      </aside>

    </div>
  )
}