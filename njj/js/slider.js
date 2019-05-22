var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x1 = document.getElementsByClassName("mySlides1");
  if (n > x1.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x1.length}
  for (i = 0; i < x1.length; i++) {
    x1[i].style.display = "none";  
  }
  x1[slideIndex-1].style.display = "block";  
}