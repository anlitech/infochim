var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides3");
  if (n > x1.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex3-1].style.display = "block";  
}