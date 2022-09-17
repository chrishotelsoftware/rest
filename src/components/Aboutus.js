import React from 'react';
import '../App.css';

import './Aboutus.css';
import CardItem from './CardItem';
import { useEffect, useState } from "react";
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"

function Aboutus() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([img5, img6, img7, img8])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 2000)
  }, [])
  return (
    <div className='cardss'>
       <h2>Aboutus</h2>
      <h1>WELCOME TO ANNACHI RESTAURANT</h1>
      <div className='cardss__container'>
        <div className='cardss__wrapper'>
        <div className='sliders'>
      <img width={480} height={500} src={allImages[selectedImage]} /> <br />
      </div>
          
          <ul className='cardss__items'>
            <CardItem 
              src='images/Buffet.jpg'
              text=" We are located in thudiyalur, coimbatore, 
              Our ethos has always been to provide
              consistently excellent food, The dining area 
              seats up to 100 guests for lunch or dinner.
               We can cater for private or corporate functions 
               of up to 100 guests in our partyhall.
                We also offer set menus for groups of more than
                 12 guests. we are prepares deliciois
              & Special food we want you to enjoy a memorable
               experience at our Restaurant.."
              path='/services'
            />
            
            </ul>
            </div>
            </div>
            </div>
  );
}

export default Aboutus;
