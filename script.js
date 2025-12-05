/* scripts.js — small, dependency-free behaviors */
(function(){
  // year
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // toggle password visibility
  var pwd = document.getElementById('password');
  var toggle = document.getElementById('toggle-pwd');
  if(toggle && pwd){
    toggle.addEventListener('click', function(){
      pwd.type = pwd.type === 'password' ? 'text' : 'password';
      toggle.classList.add('pulse');
      setTimeout(()=> toggle.classList.remove('pulse'), 420);
    });
  }

  // demo submit — replace with real auth call
  var form = document.getElementById('login-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var email = document.getElementById('email').value || '(kosong)';
      // simple micro-feedback (replace alert with nicer UI if needed)
      flash('Mencoba masuk sebagai ' + email);
    });
  }

  // lightweight transient notification
  function flash(msg){
    var n = document.createElement('div');
    n.textContent = msg;
    n.style.position = 'fixed';
    n.style.right = '20px';
    n.style.bottom = '20px';
    n.style.padding = '10px 14px';
    n.style.borderRadius = '10px';
    n.style.background = 'linear-gradient(90deg, rgba(124,58,237,0.95), rgba(45,212,255,0.95))';
    n.style.color = '#021226';
    n.style.fontWeight = '700';
    n.style.boxShadow = '0 8px 30px rgba(2,6,23,0.6)';
    n.style.zIndex = 9999;
    document.body.appendChild(n);
    setTimeout(()=> n.style.opacity = '0', 2200);
    setTimeout(()=> n.remove(), 2600);
  }
})();