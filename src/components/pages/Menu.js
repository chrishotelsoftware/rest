import React from 'react';
import '../../App.css';
import './Menu.css';
import Footer from '../Footer';
import { useEffect, useState } from "react";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"


export default function  Menu() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([img1, img2, img3, img4])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 2000)
  }, [])
  return <><div>
    <div className='slide'>
    <img width={1400} height={450} src={allImages[selectedImage]} /> <br />
    <h1 id='head'>Offered Menu</h1>
    </div>
    <br></br>
   
  <div class="sidenav">
  <a href="#1">BRIYANI,
  RICE,
  NOODLES,
  ETC..</a>
  <br></br>
  <a href="#2">STARTERS,
  GRAVY,
  SOUPS,ETC..</a>
  <br></br>
  <a href="#3">BBQ,
  ALFHAM,
  SHAWARMA,
  ETC..</a>

</div>
<div  className='mpage'>
  <img src='/images/menu2.jpg' id='1'></img>
  <br></br>
  <img src='/images/menu3.jpg'id='2'></img>
  <br></br>
  <img src='/images/menu4.jpeg'id='3'></img>
</div>

</div>
<Footer />
</>
}
