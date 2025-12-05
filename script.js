/* scripts.js — kecil, modular, bisa diganti tanpa sentuh CSS */
(function(){
  // year
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // toggle password
  var pwd = document.getElementById('password');
  var toggle = document.getElementById('toggle-pwd');
  if(toggle && pwd){
    toggle.addEventListener('click', function(){
      pwd.type = pwd.type === 'password' ? 'text' : 'password';
      // small tactile feedback
      toggle.style.transform = 'scale(0.96)';
      setTimeout(()=> toggle.style.transform = '', 120);
    });
  }

  // simple submit handler (demo)
  var form = document.getElementById('login-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var email = (document.getElementById('email') || {}).value || '(kosong)';
      var remember = !!document.getElementById('remember') && document.getElementById('remember').checked;
      // replace this with real call
      showToast('Mencoba masuk sebagai ' + email + (remember ? ' (Akan diingat)':''));
    });
  }

  // toast helper
  function showToast(msg){
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.bottom = '28px';
    t.style.transform = 'translateX(-50%)';
    t.style.padding = '10px 16px';
    t.style.borderRadius = '10px';
    t.style.background = 'linear-gradient(90deg, rgba(11,123,136,0.95), rgba(86,199,193,0.95))';
    t.style.color = '#fff';
    t.style.fontWeight = '700';
    t.style.zIndex = 9999;
    document.body.appendChild(t);
    setTimeout(()=> t.style.opacity = '0', 2000);
    setTimeout(()=> t.remove(), 2300);
  }
})();