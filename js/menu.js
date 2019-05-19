document.write('\
\
<div onmouseover ="f2()" id="meniu">\
    <img src="imagini/icon.png">\
</div>\
\
<svg id="weaponmenu" onmouseleave="f3()" viewBox="0 0 1000 1000">\
\
  <linearGradient id="l1">\
   <stop style="stop-color:#fff" offset="0"/>\
   <stop style="stop-color:#fff; stop-opacity:0" offset="1"/>\
  </linearGradient>\
\
  <linearGradient id="lh" xlink:href="#l1" \
  gradientUnits="userSpaceOnUse"\
  x1="547.9" y1="470.11"\
  gradientTransform="translate(-.17245 .02719)"\
  x2="623.71" y2="309.62"/>\
  <linearGradient id="lp" x1="547.9" xlink:href="#l1" gradientUnits="userSpaceOnUse" y1="470.11" gradientTransform="matrix(.5 -.86603 .86603 .5 -228.26 709.43)" x2="649.72" y2="330.6"/>\
  <linearGradient id="ls" x1="547.9" xlink:href="#l1" gradientUnits="userSpaceOnUse" y1="470.11" gradientTransform="matrix(-.5 -.86603 .86603 -.5 271.92 1261.8)" x2="641.17" y2="305.84"/>\
  <linearGradient id="lr" x1="547.9" xlink:href="#l1" gradientUnits="userSpaceOnUse" y1="470.11" gradientTransform="matrix(.5 .86603 -.86603 .5 728.53 -156.94)" x2="641.17" y2="305.84"/>\
  <linearGradient id="le" x1="547.9" xlink:href="#l1" gradientUnits="userSpaceOnUse" y1="470.11" gradientTransform="matrix(-1 0 0 -1 1000.4 1104.9)" x2="626.54" y2="309.63"/>\
  <linearGradient id="lg" x1="547.9" xlink:href="#l1" gradientUnits="userSpaceOnUse" y1="470.11" gradientTransform="matrix(-.5 .86603 -.86603 -.5 1228.7 395.47)" x2="642.64" y2="318.35"/>\
 \
\
 <g onmouseleave="f3()" transform="translate(0 -52.362)">\
  <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">\
      <stop offset="0%" style="stop-color:#ffbe73;\
      stop-opacity:1" />\
      <stop offset="100%" style="stop-color:#ff5c33;stop-opacity:1" />\
    </radialGradient>\
  <circle id="OuterCircle" cx="500" cy="550" r="488" fill="url(#grad1)"/>\
  <circle id="InnerCircle" cx="500" cy="552" r="95"/>\
 \
\
  <path class="selector" id="pistol"\
  d="m500.06 453.48c-37.213 1.5613-67.087 18.219-85.64 49.646l-332.15-191.77c87.89-150.59 239.65-238.17 415.43-241.37z"/>\
\
  <path class="selector" id="heavy" \
  d="m585.74 502.79c-19.96-31.45-49.32-48.99-85.81-49.34v-383.53c174.36 0.81581 326.08 88.46 416.74 239.08z"/>\
\
  <path class="selector" id="smg" \
  d="m414.42 503.12c-17.254 33.008-17.766 67.208 0.17517 98.989l-332.15 191.77c-86.474-151.41-86.436-326.63-1.32-480.45z"/>\
\
  <path class="selector" id="rifles" \
  d="m586.03 601.77c17.26-33.008 17.77-67.208-0.17-98.989l332.14-191.76c86.47 151.41 86.44 326.63 1.32 480.45z"/>\
\
  <path class="selector" id="equipment" \
  d="m414.59 602.11c19.959 31.447 49.321 48.989 85.815 49.343v383.53c-174.35-0.8-326.08-88.48-416.74-239.1z"/>\
\
  <path class="selector" id="grenades"\
  d="m500.39 651.42c37.213-1.5613 67.087-18.219 85.64-49.646l332.14 191.76c-87.88 150.6-239.65 238.17-415.42 241.37z"/>\
\
  <text class="menu0" x="290" y="320"> \
      Definiție\
  </text>\
  <text class="menu0" x="560" y="320"> \
      Droguri\
  </text> \
  <text class="menu0" x="700" y="560"> \
      Traficanți\
  </text>\
  <text class="menu0" x="140" y="560"> \
      Știați că?\
  </text>\
  <text class="menu0" x="570" y="820"> \
      Despre noi\
  </text>\
   <text class="menu0" x="230" y="820"> \
      Istoric\
   </text>\
 </g>\
</svg>\
');
var stanga = "Principala1";
var dreapta = "Principala2";

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
	var b = document.getElementsByClassName("selector");

	for(var i = 0; i < b.length; i++) {
            var anchor = b[i];
            anchor.onclick = function(){
              st('Principala1');
            };
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


