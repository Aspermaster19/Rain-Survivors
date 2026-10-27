// Pines, popups y votos de la comunidad
const reports = []; let nextId = 1;
const icon = (lv,isNew) => L.divIcon({className:'', html:`<div class="pin l${lv} ${isNew?'new':''}"><b>${LV[lv].ic}</b></div>`, iconSize:[38,38], iconAnchor:[19,38], popupAnchor:[0,-34]});

function popupHTML(r){
  return `<div class="pop">
    <span class="tag" style="background:${LV[r.lv].bg};color:${LV[r.lv].c}">${LV[r.lv].t}</span>
    <h3>${r.name}</h3>
    <div class="meta">Reportado hace ${r.min} min · ${r.by}</div>
    <div class="votes" id="v${r.id}">👍 <b>${r.votes}</b> personas confirmaron</div>
    <div class="row">
      <button class="up" onclick="vote(${r.id},1)">Confirmo inundación</button>
      <button class="down" onclick="vote(${r.id},0)">El agua ya bajó</button>
    </div></div>`;
}
function addReport(d,isNew){
  const r = {id:nextId++, ...d};
  r.marker = L.marker([r.lat,r.lng],{icon:icon(r.lv,isNew)}).addTo(map).bindPopup(()=>popupHTML(r));
  reports.push(r); return r;
}
INITIAL_REPORTS.forEach(d => addReport(d, false));

function vote(id,up){
  const r = reports.find(x=>x.id===id);
  if(up){ r.votes++; $('#v'+id).innerHTML = `👍 <b>${r.votes}</b> personas confirmaron`; toast('✅ Gracias por confirmar'); }
  else {
    map.closePopup();
    r.marker.getElement().style.transition='opacity .6s, transform .6s';
    r.marker.getElement().style.opacity='.25';
    toast('💧 Marcado como "el agua ya bajó"');
    setTimeout(()=>{ map.removeLayer(r.marker); if(routeOn) drawRoute(); },900);
  }
}
