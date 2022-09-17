import React from 'react';
import '../../App.css';
import './Contactus.css';
import { Link } from 'react-router-dom';

export default function Contactus() {
  return <div className='contactus'>
   
  <h1 >Contact Us</h1>
  
  <div>
      <form>
      <div class="fillup">
       <h1>Contact Us</h1>
       <p>Please fill in this form to Contact us.</p>
       <hr />
       <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>
    <label for="psw-repeat"><b>Name</b></label>
    <input type="password" placeholder="Name" name="psw-repeat" required></input>
    <label for="psw-repeat"><b>Mobile Number</b></label>
    <input type="password" placeholder="Mobile number" name="psw-repeat" required></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Contact Us</button>
    </div>
    </div></form>
    </div>
    <div className='info'>
        <h1> FIND US</h1>
        <p>@ Santhosh Towers, EPIP,
             ITPL Main Road, White Field</p>
        <h1 id='2'>CONTACT US</h1>
        <p> +91  80499 12077 <br></br>+91  98422 62077 <br></br>+91  95131 62077</p>
        <h1 id='3'>SOCIAL ON</h1>
        <section class='social-media'>
        <div class='social-media-wrap'>

          
          <div class='social-icons'>
              
           
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>

    
              
    </div>
    
  </div>;
}
