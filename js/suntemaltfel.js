var slideIndex10 = 1;
showDivs10(slideIndex10);

function plusDivs10(n) {
  showDivs10(slideIndex10 += n);
}

function showDivs10(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides10");
  if (n > x1.length) {slideIndex10 = 1}    
  if (n < 1) {slideIndex10 = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex10-1].style.display = "block";  
}