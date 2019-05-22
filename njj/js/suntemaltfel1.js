var slideIndex11 = 0;
showSlides11();

function showSlides11() {
  var i;
  var slides = document.getElementsByClassName("mySlides11");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex11++;
  if (slideIndex11 > slides.length) {slideIndex11 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex11-1].style.display = "block";  
  dots[slideIndex11-1].className += " active";
  setTimeout(showSlides11, 2500); // Change image every 2 seconds
}