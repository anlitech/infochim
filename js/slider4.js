var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides4");
  if (n > x1.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex4-1].style.display = "block";  
}