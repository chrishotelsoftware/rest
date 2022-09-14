import React from 'react';
import '../App.css';

import './Modal.css';

function Modal() {
    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  return (
    <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">times;</span>
     <form class="modal-content" action="/action_page.php">
      <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr></hr>
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required></input>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> </input>Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="submit" class="signup">Sign Up</button>
      </div>
    </div>
    </form>
    </div>
  
    
  );
}

export default Modal;
