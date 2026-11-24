// Vương Quốc Huyền Thoại: lưu sẵn tài nguyên game trong máy để lần sau vào gần như tức thì.
const C = 'vqht-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
const HASHED = /\/(assets|media)\/|\.[0-9a-f]{8,}\.|[?&]v=/;
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || r.headers.has('range')) return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;
  if (!/^\/vuongquoc(-models)?\//.test(u.pathname) || /\/(api|acct)\//.test(u.pathname)) return;
  if (r.mode === 'navigate' || u.pathname.endsWith('.html') || u.pathname.endsWith('/')) return; // trang luôn lấy bản mới
  e.respondWith(
    caches.open(C).then(async (c) => {
      const hit = await c.match(r);
      const net = fetch(r).then((res) => {
        if (res.ok && res.type === 'basic') c.put(r, res.clone()).catch(() => {});
        return res;
      });
      if (hit) {
        if (!HASHED.test(u.pathname + u.search)) e.waitUntil(net.catch(() => {}));
        return hit;
      }
      return net;
    }),
  );
});
// Tải trước thế giới (khi người chơi đang đăng nhập / tạo nhân vật)
let warming = null;
self.addEventListener('message', (e) => {
  if (!e.data || e.data.t !== 'warm' || warming) return;
  warming = (async () => {
    const c = await caches.open(C);
    let list = [];
    try { list = await (await fetch('/vuongquoc/preload.json', { cache: 'no-store' })).json(); } catch (_) { return; }
    let done = 0, i = 0;
    const tell = async () => { for (const cl of await self.clients.matchAll()) cl.postMessage({ t: 'warm', done, total: list.length }); };
    const one = async () => {
      while (i < list.length) {
        const url = list[i++];
        try { if (!(await c.match(url))) { const r = await fetch(url); if (r.ok) await c.put(url, r); } } catch (_) {}
        done++; if (done % 20 === 0 || done === list.length) tell();
      }
    };
    await Promise.all([one(), one(), one(), one(), one(), one()]);
  })();
  e.waitUntil(warming);
});
