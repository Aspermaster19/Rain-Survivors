// Utilidades y configuración de niveles de agua
const $ = s => document.querySelector(s);
const LV = {
  1:{n:'Nivel del bordillo', d:'Se puede caminar con cuidado.', h:33, c:'#f5a524', bg:'#fff3d6', t:'Bordillo', ic:'💧'},
  2:{n:'Nivel de la rodilla', d:'Peligroso para peatones y motos.', h:62, c:'#f07c2a', bg:'#ffe6d2', t:'Rodilla', ic:'🌊'},
  3:{n:'Cubre las llantas', d:'Intransitable. Evita el paso.', h:92, c:'#e5383b', bg:'#ffe3e3', t:'Cubre llantas', ic:'🚫'}
};
