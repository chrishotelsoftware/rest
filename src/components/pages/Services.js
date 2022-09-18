import React from 'react';
import '../../App.css';
import './../Services.css';
import Cards from '../Cards';
import Footer from '../Footer';

export default function Services() {
  return <>
  <div className='aboutus'>
  <h1 >About Us</h1>
  <h2>WELCOME TO ANNACHI RESTAURANT</h2>
  <p>We are located in thudiyalur, coimbatore, 
              Our ethos has always been to provide
              consistently excellent food, The dining area 
              seats up to 100 guests for lunch or dinner.
               We can cater for private or corporate functions 
               of up to 100 guests in our partyhall.
                We also offer set menus for groups of more than
                 12 guests. we are prepares deliciois
              & Special food we want you to enjoy a memorable
               experience at our Restaurant.."</p>
  
             

  </div>
  <Cards />
  <Footer />
  </>
}
