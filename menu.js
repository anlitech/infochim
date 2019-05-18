function f()
{
	var b = document.getElementsByClassName("selector");

	for(var i = 0; i < b.length; i++) {
            var anchor = b[i];
            anchor.onclick = function() {
                alert('ho ho ho');
            }
        }	
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
