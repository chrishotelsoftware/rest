import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
       <h2>Services</h2>
      <h1>We Serve the Best food!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/Buffet.jpg'
              text='Explore an ocean of options at our  buffet.'
              label='Buffet'
              path='/services'
            />
            <CardItem
              src='images/Lunch.jpg'
              text='Ask not what you can do for your EX . Ask what’s for lunch'
              label='Lunch'
              path='/Menu'
            />
            <CardItem
              src='images/Hall.jpg'
              text='A banquet hall is where memories shine'
              label='Banquet Hall'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
