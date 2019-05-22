var slideIndex12 = 0;
showSlides12();

function showSlides12() {
  var i;
  var slides = document.getElementsByClassName("mySlides12");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex12++;
  if (slideIndex12 > slides.length) {slideIndex12 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex12-1].style.display = "block";  
  dots[slideIndex12-1].className += " active";
  setTimeout(showSlides12, 2500); // Change image every 2 seconds
}