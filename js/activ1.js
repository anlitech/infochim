var slideIndex31 = 0;
showSlides31();

function showSlides31() {
  var i;
  var slides = document.getElementsByClassName("mySlides31");
  var dots = document.getElementsByClassName("dot31");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex31++;
  if (slideIndex31 > slides.length) {slideIndex31 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex31-1].style.display = "block";  
  dots[slideIndex31-1].className += " active";
  setTimeout(showSlides31, 2500); // Change image every 2 seconds
}