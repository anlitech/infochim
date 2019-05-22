var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  if (n > 3) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = 3}
  for (i = 0; i < 3; i++) {
    x2[i].style.display = "none";  
  }
  x2[slideIndex2-1].style.display = "block";  
}