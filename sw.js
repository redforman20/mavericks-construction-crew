// Maverick's Construction Crew v9: network-first HTML, offline fallback, no storage resets.
const CACHE='maverick-construction-v9';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json'];
self.addEventListener('install',event=>event.waitUntil(
 caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil(
 caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('maverick-construction-')&&name!==CACHE).map(name=>caches.delete(name)))).then(()=>self.clients.claim())
));
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 const url=new URL(request.url);
 // Never serve a cached update manifest while online.
 if(url.pathname.endsWith('/version.json')){
   event.respondWith(fetch(request,{cache:'no-store'}).catch(()=>caches.match('./version.json')));return;
 }
 if(request.mode==='navigate'){
   event.respondWith(fetch(request,{cache:'no-store'}).then(response=>{
     if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put('./index.html',copy)))}
     return response;
   }).catch(()=>caches.match('./index.html')));return;
 }
 event.respondWith(caches.match(request,{ignoreSearch:true}).then(cached=>cached||fetch(request)));
});
