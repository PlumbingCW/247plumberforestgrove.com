(function(){
var sc=document.querySelector('.stickycall');
if(sc){var t=function(){sc.classList.toggle('show',window.scrollY>700)};t();window.addEventListener('scroll',t,{passive:true})}
var d=document,de=d.documentElement,dr=d.getElementById('drawer'),b=d.getElementById('burger');
if(!dr||!b)return;
function open(){dr.classList.add('open');de.style.overflow='hidden';b.setAttribute('aria-expanded','true')}
function close(){dr.classList.remove('open');de.style.overflow='';b.setAttribute('aria-expanded','false')}
b.addEventListener('click',open);
d.getElementById('drawer-close').addEventListener('click',close);
dr.addEventListener('click',function(e){if(e.target.tagName==='A')close()});
d.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
window.addEventListener('resize',function(){if(window.innerWidth>768)close()});
})();