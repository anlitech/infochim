var stanga = "Principala1";
var dreapta = "Principala2";
r();

function r() {
  document.getElementById("Principala11").style.setProperty("fill", "rgba(255,255,255,0.2)", "important");
}


function st(id) {
  document.getElementById(stanga).style.display = "none";
  document.getElementById(id).style.display = "block";
  stanga = id;
}

function dr(id) {
  document.getElementById(dreapta).style.display = "none";
  document.getElementById(id).style.display = "block";
  dreapta = id;
}

function f()
{
  document.getElementById("OuterCircle").addEventListener('mouseleave', f3());
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

