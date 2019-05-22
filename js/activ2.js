var slideIndex32 = 0;
showSlides32();

function showSlides32() {
  var i;
  var slides = document.getElementsByClassName("mySlides32");
  var dots = document.getElementsByClassName("dot32");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex32++;
  if (slideIndex32 > slides.length) {slideIndex32 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex32-1].style.display = "block";  
  dots[slideIndex32-1].className += " active";
  setTimeout(showSlides32, 3000); // Change image every 2 seconds
}