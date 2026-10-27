// Ruta segura simulada
let routeOn=false, routeLine=null, routeGlow=null;
const route = [[-2.1720,-79.8960],[-2.1690,-79.9040],[-2.1640,-79.9110],[-2.1590,-79.9190],[-2.1700,-79.9290],[-2.1850,-79.9300],[-2.2000,-79.9230],[-2.2040,-79.9100],[-2.2060,-79.8990]];
function drawRoute(){
  clearRoute();
  routeGlow = L.polyline(route,{color:'#fff',weight:12,opacity:.9}).addTo(map);
  routeLine = L.polyline(route,{color:'#2a9d6f',weight:6,opacity:1,dashArray:'1 11',lineCap:'round'}).addTo(map);
  L.marker(route[route.length-1],{icon:L.divIcon({className:'',html:'<div style="font-size:30px;filter:drop-shadow(0 2px 3px rgba(0,0,0,.4))">🏁</div>',iconSize:[30,30],iconAnchor:[6,28]})}).addTo(map)._routeEnd=true;
}
function clearRoute(){
  if(routeLine) map.removeLayer(routeLine); if(routeGlow) map.removeLayer(routeGlow);
  map.eachLayer(l=>{ if(l._routeEnd) map.removeLayer(l); });
}
$('#btnRoute').onclick = () => {
  const b = $('#btnRoute');
  routeOn = !routeOn;
  if(routeOn){
    b.textContent='⏳ Calculando…';
    setTimeout(()=>{
      drawRoute(); map.fitBounds(L.polyline(route).getBounds(),{padding:[60,60]});
      b.classList.add('on'); b.textContent='✅ Ruta segura · 18 min';
      toast('Ruta evita 4 zonas inundadas');
    },900);
  } else { clearRoute(); b.classList.remove('on'); b.textContent='🧭 Sugerir ruta segura'; }
};
