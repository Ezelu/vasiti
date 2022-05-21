import React from 'react';
import './Footer.css';
import phone from '../../images/images/phone.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'





export default function Footer () {
  return (
    <section className='footer_container'>
      <section className='footer_semi_container'>
      <div className='first_section'>
        <aside>
          <img src={phone} alt='a mobile phone with vasiti site' />
        </aside>

        <aside>
          <h2> Be a Member of our community </h2>
          <p> We'd make sure you're always first to know what's happening in vasiti- Thus, the world</p>
          <span>
            <input type='email' placeholder='enter your email address' value='enter your email address'/>
            <button> Subscribe </button>
          </span>
        </aside>
      </div>

      <div className='second_section'>
        <aside>
          <ol>
            <li className="sub_header"> <b> Company </b> </li>
            <li> About Us </li>
            <li> Term of use </li> 
            <li> Privacy Policy </li>
            <li> Press and media </li> 
          </ol>
        </aside>

        <aside>
          <ol>
            <li className="sub_header"> <b> Products </b> </li>
            <li> Marketplace </li>
            <li> Magazine </li> 
            <li> Seller </li>
            <li> Wholesale </li>
            <li> Services </li>
          </ol>
        </aside>

        <aside>
          <ol>
            <li className="sub_header"> <b> Careers </b> </li>
            <li> Become a Campus Rep </li>
            <li> Become a vasiti influencer </li>
            <li> become a campus writer </li>
            <li> Become an affilite </li>
          </ol>
        </aside>

        <aside>
          <ol>
            <li className="sub_header"> <b> Get in touch </b> </li>
            <li> contact us </li>
            <li> partner with us </li>
            <li> advertise with us </li>
            <li> Help / FAQs </li>  
          </ol>
        </aside>

        <aside>
          <p className='sub_header'> Join our community </p>
          <section className='socials'>
            <FaFacebook className='fa'/>
            <FaInstagram className='fa'/>
            <FaTwitter className='fa'/>
            <FaLinkedin className='fa'/>
          </section>
        </aside>
      </div>
      </section>
    </section>
  )
}