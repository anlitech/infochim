var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides6");
  if (n > x1.length) {slideIndex6 = 1}    
  if (n < 1) {slideIndex6 = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex6-1].style.display = "block";  
}