// Mapa Leaflet y ubicación del usuario
const map = L.map('map',{zoomControl:false}).setView([-2.1700,-79.9000],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap', maxZoom: 19
}).addTo(map);
L.control.zoom({position:'topright'}).addTo(map);
map.attributionControl.setPosition('bottomleft');

/* ---------- Mi ubicación ---------- */
const me = [-2.1720,-79.8960];
L.marker(me,{icon:L.divIcon({className:'',html:'<div class="me"></div>',iconSize:[16,16]})}).addTo(map);
