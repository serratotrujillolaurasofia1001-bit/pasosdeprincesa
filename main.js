// Interactividad: menú, función especial (chat) y validación
const $=s=>document.querySelector(s), feat=document.body.dataset.feature;
$('#burger').onclick=()=>$('nav ul').classList.toggle('open');
const fx=$('#fx');
if(feat==='rain'){fx.textContent='✨ ¡Lluvia tierna!';fx.onclick=()=>{
  const em=document.body.dataset.emojis.split(',');
  for(let i=0;i<30;i++)setTimeout(()=>{const d=document.createElement('span');d.className='drop';
  d.textContent=em[i%em.length];d.style.left=Math.random()*95+'vw';document.body.appendChild(d);
  setTimeout(()=>d.remove(),3200)},i*90)}}
else if(feat==='dark'){fx.textContent='🌙 Modo oscuro';fx.onclick=()=>{
  document.body.classList.toggle('dark');fx.textContent=document.body.classList.contains('dark')?'🌸 Modo pastel':'🌙 Modo oscuro'}}
else{fx.textContent='💬 Asistente';const c=$('#chat');fx.onclick=()=>{c.style.display=c.style.display==='block'?'none':'block'};
  c.innerHTML='<b>¡Hola! 👋</b><p>Soy tu asistente. Mira nuestros productos o escríbenos desde Contacto 💖</p>'}
const f=$('#contacto');
if(f)f.onsubmit=e=>{e.preventDefault();let ok=true;
  const chk=(id,test,msg)=>{const el=$('#'+id);const bad=!test(el.value.trim());$('#e-'+id).textContent=bad?msg:'';if(bad)ok=false};
  chk('nombre',v=>v.length>=2,'Escribe tu nombre');
  chk('correo',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),'Correo no válido');
  chk('mensaje',v=>v.length>=10,'Mínimo 10 caracteres');
  if(ok){f.reset();$('#ok').textContent='¡Gracias! Te responderemos pronto 💖'}};