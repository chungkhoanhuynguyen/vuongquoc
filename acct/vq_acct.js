// Vương Quốc Huyền Thoại: tài khoản ID + mật khẩu (Firebase Auth của project game, KHÔNG phải web chứng khoán).
// Nhân vật lưu ở Firestore: vqht_players/{uid} = { name, save: <chuỗi JSON nhân vật>, updated }
(function () {
  var KEY = 'vqht_save_v1';
  var cfg = { apiKey: 'AIzaSyDuPm6aG0nltOIrTbtKMKMWgzGtQk5k7n8', authDomain: 'thuthanhlacduong.firebaseapp.com', projectId: 'thuthanhlacduong', storageBucket: 'thuthanhlacduong.firebasestorage.app', messagingSenderId: '827806903370', appId: '1:827806903370:web:b7d01cf63f504d000e8ab3' };
  var app, auth, db, user = null, ready = false, lastPush = 0, inGame = false;
  function mail(id) { return id.toLowerCase().replace(/[^a-z0-9_.]/g, '') + '@vqht.game'; }
  function viErr(e) { var c = (e && e.code) || ''; return { 'auth/email-already-in-use': 'ID này đã có người dùng', 'auth/weak-password': 'Mật khẩu cần ít nhất 6 ký tự', 'auth/invalid-credential': 'Sai ID hoặc mật khẩu', 'auth/invalid-login-credentials': 'Sai ID hoặc mật khẩu', 'auth/wrong-password': 'Sai mật khẩu', 'auth/user-not-found': 'Chưa có tài khoản này', 'auth/too-many-requests': 'Thử lại sau ít phút', 'auth/network-request-failed': 'Mất mạng', 'permission-denied': 'Máy chủ chưa mở quyền lưu dữ liệu' }[c] || ('Lỗi: ' + ((e && e.message) || c)); }
  function init() {
    if (app || typeof firebase === 'undefined') return;
    app = firebase.initializeApp(cfg, 'vqht'); auth = app.auth(); db = app.firestore();
    auth.onAuthStateChanged(function (u) {
      user = u; ready = true;
      if (!u) { paint(); return; }
      db.collection('vqht_players').doc(u.uid).get().then(function (s) {
        var d = s.exists ? s.data() : null;
        try { if (d && d.save) localStorage.setItem(KEY, d.save); else localStorage.removeItem(KEY); } catch (e) {}
        paint();
      }).catch(function (e) { msg(viErr(e)); paint(); });
    });
  }
  function idOf() { return user && user.email ? user.email.split('@')[0] : ''; }
  // gọi từ game mỗi lần tự lưu (chuỗi JSON nhân vật)
  window.__vqPush = function (json, force) {
    inGame = true; hide();
    if (!user || !db) return;
    var now = Date.now(); if (!force && now - lastPush < 30000) return; lastPush = now;
    db.collection('vqht_players').doc(user.uid).set({ name: idOf(), save: json, updated: now }).catch(function () {});
  };
  window.__vqAcctReady = function () { return !ready || !!user; };
  var box, m;
  function msg(t) { if (m) m.textContent = t || ''; }
  function hide() { if (box) box.style.display = 'none'; }
  function build() {
    if (box) return;
    var st = document.createElement('style');
    st.textContent = '#vq-acct{position:fixed;z-index:10000;left:50%;top:50%;transform:translate(-50%,-50%);width:min(92vw,360px);background:linear-gradient(#1c1a24,#100e14);border:1px solid #c9a14a;border-radius:14px;padding:18px 18px 14px;color:#f3e6c4;font:15px/1.4 system-ui,sans-serif;box-shadow:0 10px 40px #000c}#vq-acct h3{margin:0 0 4px;text-align:center;color:#f3cf6a;font-size:20px}#vq-acct p{margin:0 0 12px;text-align:center;font-size:13px;opacity:.8}#vq-acct input{width:100%;box-sizing:border-box;margin:5px 0;padding:11px 12px;border-radius:9px;border:1px solid #5a4a2a;background:#0b0a0f;color:#fff;font-size:16px}#vq-acct .r{display:flex;gap:8px;margin-top:8px}#vq-acct button{flex:1;padding:11px;border-radius:9px;border:0;font-weight:700;font-size:15px;cursor:pointer}#vq-acct .a{background:linear-gradient(#f6d77a,#c9902c);color:#2a1a05}#vq-acct .b{background:#2b2633;color:#f3e6c4;border:1px solid #5a4a2a}#vq-acct .m{min-height:18px;color:#ff9a8a;font-size:13px;text-align:center;margin-top:8px}#vq-acct .s{display:block;margin:10px auto 0;background:none;border:0;color:#c9b48a;text-decoration:underline;font-size:13px;flex:none}#vq-acct .u{text-align:center;margin:6px 0 10px}';
    document.head.appendChild(st);
    box = document.createElement('div'); box.id = 'vq-acct'; document.body.appendChild(box);
  }
  function paint() {
    build(); if (inGame) { hide(); return; }
    if (user) {
      var sv = null; try { sv = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
      box.innerHTML = '<h3>Vương Quốc Huyền Thoại</h3><div class="u">Đã đăng nhập: <b>' + idOf() + '</b><br><small>' + (sv ? 'Nhân vật: ' + sv.name + ' · cấp ' + sv.level : 'Chưa có nhân vật — hãy tạo mới') + '</small></div><div class="r"><button class="a" id="vqa-ok">Vào game</button><button class="b" id="vqa-out">Đăng xuất</button></div>';
      box.querySelector('#vqa-ok').onclick = function () { hide(); var p = document.getElementById('btn-play'); if (p && !document.getElementById('offline-select').offsetParent) p.click(); };
      box.querySelector('#vqa-out').onclick = function () { try { localStorage.removeItem(KEY); } catch (e) {} auth.signOut(); };
    } else {
      box.innerHTML = '<h3>Vương Quốc Huyền Thoại</h3><p>Đăng nhập để lưu nhân vật, chơi tiếp trên mọi máy</p><input id="vqa-id" placeholder="ID (3–16 ký tự không dấu)" autocomplete="username" maxlength="16"><input id="vqa-pw" type="password" placeholder="Mật khẩu (ít nhất 6 ký tự)" autocomplete="current-password"><div class="r"><button class="a" id="vqa-in">Đăng nhập</button><button class="b" id="vqa-reg">Tạo tài khoản</button></div><div class="m" id="vqa-m"></div><button class="s" id="vqa-skip">Chơi thử không lưu</button>';
      m = box.querySelector('#vqa-m');
      var go = function (reg) {
        var id = box.querySelector('#vqa-id').value.trim(), pw = box.querySelector('#vqa-pw').value;
        if (!/^[a-zA-Z0-9_.]{3,16}$/.test(id)) { msg('ID 3–16 ký tự, chỉ chữ không dấu, số, _ hoặc .'); return; }
        if (pw.length < 6) { msg('Mật khẩu cần ít nhất 6 ký tự'); return; }
        msg('Đang xử lý…');
        var p = reg ? auth.createUserWithEmailAndPassword(mail(id), pw).then(function (r) { try { localStorage.removeItem(KEY); } catch (e) {} return db.collection('vqht_players').doc(r.user.uid).set({ name: id, save: '', updated: Date.now() }); }) : auth.signInWithEmailAndPassword(mail(id), pw);
        p.catch(function (e) { msg(viErr(e)); });
      };
      box.querySelector('#vqa-in').onclick = function () { go(false); };
      box.querySelector('#vqa-reg').onclick = function () { go(true); };
      box.querySelector('#vqa-pw').onkeydown = function (e) { if (e.key === 'Enter') go(false); };
      box.querySelector('#vqa-skip').onclick = function () { try { localStorage.removeItem(KEY); } catch (e) {} hide(); };
    }
    box.style.display = 'block';
  }
  function start() { init(); if (!app) { setTimeout(start, 300); return; } }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
