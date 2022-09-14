import React from 'react';
import '../../App.css';
let slideIndex = 0;
SignUp();

 function SignUp() 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(SignUp, 2000); // Change image every 2 seconds
return (
    <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="/imgs/img1.jpg" style="width:100%"></img>
  <div class="text">Caption Text</div>
</div>
<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="/imgs/img2.jpg" style="width:100%"></img>
  <div class="text">Caption Two</div>
</div>
<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="/imgs/img3.jpg" style="width:100%"></img>
  <div class="text">Caption Three</div>
</div>


</div>


);
}
 export default SignUp;