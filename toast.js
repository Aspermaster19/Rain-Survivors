// Notificaciones breves
let tt; function toast(t){ const el=$('#toast'); el.textContent=t; el.classList.add('show'); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove('show'),2600); }
