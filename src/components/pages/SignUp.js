import React from 'react';
import '../../App.css';
import './Signup.css';

function Signup() 

{
  
  return (
    <div className='Signup'>
      <video src='/videos/video6.mp4' autoPlay loop muted />
      <div class="text-container">
  <span>5</span>
  <span>0</span>
  <span>%</span>
  <span>O</span>
  <span>F</span>
  <span>F</span>
  
</div>
      <div>
      <form>
      <div class="container">
       <h1>Sign Up</h1>
       <p>Please fill in this form to create an account.</p>
       <hr />
       <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
    

   

       </div>
          </form>
          
          </div>
          
    </div>
    
  );
}

export default Signup;
