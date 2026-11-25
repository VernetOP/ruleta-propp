const C='ruleta-propp-v1';
const FILES=["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./cartas/villana.webp", "./cartas/donante.webp", "./cartas/objeto_magico.webp", "./cartas/principe.webp", "./cartas/rey.webp", "./cartas/heroina.webp", "./cartas/falsa_heroina.webp", "./cartas/f1.webp", "./cartas/f2.webp", "./cartas/f3.webp", "./cartas/f4.webp", "./cartas/f5.webp", "./cartas/f6.webp", "./cartas/f7.webp", "./cartas/f8.webp", "./cartas/f9.webp", "./cartas/f10.webp", "./cartas/f11.webp", "./cartas/f12.webp", "./cartas/f13.webp", "./cartas/f14.webp", "./cartas/f15.webp", "./cartas/f16.webp", "./cartas/f17.webp", "./cartas/f18.webp", "./cartas/f19.webp", "./cartas/f20.webp", "./cartas/f21.webp", "./cartas/f22.webp", "./cartas/f23.webp", "./cartas/f24.webp", "./cartas/f25.webp", "./cartas/f26.webp", "./cartas/f27.webp", "./cartas/f28.webp", "./cartas/f29.webp", "./cartas/f30.webp", "./cartas/f31.webp"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(res=>{if(res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));}return res;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
});
