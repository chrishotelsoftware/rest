import React from 'react';
import '../App.css';

import './Homemenu.css';

import CardItem from './CardItem';
import { useEffect, useState } from "react";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"


function Homemenu() {
    const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([img1, img2, img3, img4])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 2000)
  }, [])
  return (
    <div className='homemenu'>
      <h1>Menu</h1>
    <div className='slider'>
      <img width={810} height={400} src={allImages[selectedImage]} /> <br />
      </div>
     <div className='text'>
      <h1> I don't cook, so my favorite dish to prepare is something on the takeout menu.</h1>
      <button  id='btn'> VIEW MENU</button>

     </div>

   
    </div>
  );
}

export default Homemenu;
