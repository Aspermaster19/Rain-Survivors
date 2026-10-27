// Modal para reportar una inundación
const sheet=$('#sheet'), bg=$('#bg');
function openSheet(){ sheet.classList.add('open'); bg.classList.add('open'); }
function closeSheet(){ sheet.classList.remove('open'); bg.classList.remove('open'); }
$('#btnReport').onclick = openSheet; bg.onclick = ()=>{closeSheet();closeChat();};
function upd(){
  const l = LV[$('#level').value];
  $('#lvlName').textContent=l.n; $('#lvlDesc').textContent=l.d;
  $('#water').style.height=l.h+'%';
  $('#water').style.background = $('#level').value==3 ? 'linear-gradient(#d9605f,#a82a2c)' : 'linear-gradient(#4aa8d0,#1b6f98)';
}
$('#level').oninput = upd; upd();
$('#photoBtn').onclick = () => {
  const b=$('#photoBtn');
  b.classList.add('done'); b.innerHTML='<div class="thumb">🌧️</div><span>Foto adjunta · tocar para cambiar</span>';
};
$('#send').onclick = () => {
  const lv = +$('#level').value;
  const lat = me[0] + (Math.random()-.5)*0.006, lng = me[1] + (Math.random()-.5)*0.006;
  closeSheet();
  map.flyTo([lat,lng],15,{duration:1.1});
  setTimeout(()=>{
    const r = addReport({lat,lng,lv,name:'Tu reporte · Av. Francisco de Orellana',min:0,votes:1,by:'Tú'},true);
    r.marker.openPopup(); toast('🎉 Reporte enviado. ¡Gracias por ayudar!');
  },1150);
  // reset
  $('#level').value=1; upd();
  $('#photoBtn').classList.remove('done'); $('#photoBtn').innerHTML='<span>📷</span><span>Subir foto del sector</span>';
};
