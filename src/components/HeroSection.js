import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Delicious & Tasty food</h1>
      <p >Buffet Breakfast | Lunch | Banquet Hall Available</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ORDER NOW
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
