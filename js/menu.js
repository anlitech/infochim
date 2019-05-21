var stanga = "Principala1";
var dreapta = "Principala2";

function r()
{

  x = document.getElementsByClassName("selector");
  for(var i = 0; i<x.length; i++)
    x[i].style.fill= "rgba(255,255,255,0)";
  if(stanga == "Principala1" || stanga =="stopdrog" || stanga == "stiatica")
    document.getElementById(stanga+"1").style.fill = "rgba(255,255,255,0.15)";
  if(dreapta == "Principala2" || dreapta =="traficanti" || dreapta == "suntemaltfel")
    document.getElementById(dreapta+"1").style.fill = "rgba(255,255,255,0.15)";
}

function st(id) {
  document.getElementById(stanga).style.display = "none";
  document.getElementById(id).style.display = "block";  
  stanga = id;
  r();
}

function dr(id) {
  document.getElementById(dreapta).style.display = "none";
  document.getElementById(id).style.display = "block";
  dreapta = id;
  r();
}

function f()
{
  document.getElementById("OuterCircle").addEventListener('mouseleave', f3());
  r();
}

function f2()
{
	 document.getElementById("meniu").style.visibility = "hidden";
   document.getElementById("weaponmenu").style.visibility = "visible" ;
}
function f3()
{
	 document.getElementById("meniu").style.visibility = "visible";
    document.getElementById("weaponmenu").style.visibility = "hidden" ;
}

