var slideIndex10 = 0;
showSlides10();

function showSlides10() {
  var i;
  var slides = document.getElementsByClassName("mySlides10");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex10++;
  if (slideIndex10 > slides.length) {slideIndex10 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex10-1].style.display = "block";  
  dots[slideIndex10-1].className += " active";
  setTimeout(showSlides10, 2500); // Change image every 2 seconds
}