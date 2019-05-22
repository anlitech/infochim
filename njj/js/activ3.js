var slideIndex33 = 0;
showSlides33();

function showSlides33() {
  var i;
  var slides = document.getElementsByClassName("mySlides33");
  var dots = document.getElementsByClassName("dot33");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex33++;
  if (slideIndex33 > slides.length) {slideIndex33 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex33-1].style.display = "block";  
  dots[slideIndex33-1].className += " active";
  setTimeout(showSlides33, 3000); // Change image every 2 seconds
}