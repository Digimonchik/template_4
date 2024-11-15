import * as React from 'react';
import imgOne from './img_1.png';
import imgTwo from './img_2.png';
import ImgThree from './img_3.png'
import CircleLines from './CircleLines';
import CircleBlue from './CircleBlue';
import HalfCircleBlue from './HalfCircleBlue';
import Dots from './Dots';

export interface IAppProps {
}

export function Header (props?: IAppProps) {
  return (
    <div className='header__container'>
      <div className='header__circle-yellow'></div>
      <div className='header__square'></div>
      <HalfCircleBlue></HalfCircleBlue>
      <CircleLines></CircleLines>
      <CircleBlue></CircleBlue>
      <Dots></Dots>
      <div className='header__navigation'>
        <h3 className='header__navigation_logo'>qSpace</h3>
        <div className='header__navigation_bar'>
            <div className='header__navigation_item'>Home</div>           
            <div className='header__navigation_item'>Facilities</div>
            <div className='header__navigation_item'>Spaces</div>
            <div className='header__navigation_item'>Community</div>
            <div className='header__navigation_item'>Contact</div>

        </div>


      </div>
      <div className='header__content'>
        <p className='header__content_country'>Jakarta, Indonesia</p>
        <h3 className='header__content_header'>Revolutioning the way
        people and company works</h3>
        <p className='header__content_text'>Eu consectetur odio imperdiet ipsum dui. Magna sed sagittis lobortis vel auctor pharetra risus.</p>
        <div className='header__content_button'>Reservation →</div>
      </div>
      <div className='header__images'>
        <div className=' header__images_container'>
            <div className='header__image'>
                <img src = {imgOne} className ='header__image_content first'></img>
                <div className='header__image_description first'>Over 1000+ Happy Customers</div>
            </div>
            <div className='header__image'>
            <img src = {imgTwo} className ='header__image_content second'></img>
            <div className='header__image_description second'>Engaging Community</div>
            </div>
            <div className='header__image'>
            <img src = {ImgThree} className ='header__image_content third'></img>
            <div className='header__image_description third'>Premium Facilities</div>
            </div>
            </div>
      </div>
    
    <div className=''></div>
    </div>
  );
}

