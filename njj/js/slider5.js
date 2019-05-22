var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides5");
  if (n > x1.length) {slideIndex5 = 1}    
  if (n < 1) {slideIndex5 = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex5-1].style.display = "block";  
}