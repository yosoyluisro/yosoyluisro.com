document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);
location.href='mailto:hola@yosoyluisro.com?subject='+encodeURIComponent('Contacto web de '+d.get('n')+' ('+d.get('m')+')')+'&body='+encodeURIComponent(d.get('t'))});

(function(){var el=document.getElementById('live');
var F=['// Entre café y código: construyo mientras aprendo...','// Full stack en formación, explorador por decisión...','// Mi stack: curiosidad, café y constancia...','// Lo que aprendo hoy, lo construyo mañana...','// El café se enfría, la curiosidad no...','// De Tampico para el mundo, línea por línea...'];
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var fi=0,ci=F[0].length,deleting=true;
(function tick(){
el.innerHTML=F[fi].slice(0,ci).replace(/&/g,'&amp;').replace(/</g,'&lt;')+'<span class="c">|</span>';
if(deleting){if(ci<=3){deleting=false;fi=(fi+1)%F.length;setTimeout(tick,700)}else{ci--;setTimeout(tick,20)}}
else{if(ci>=F[fi].length){deleting=true;setTimeout(tick,3600)}else{ci++;setTimeout(tick,42)}}
})();
})();
