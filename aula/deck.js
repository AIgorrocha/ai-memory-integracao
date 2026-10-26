// Navegação do deck do curso. Avança: seta direita, PageDown, espaço, ]. Volta: seta esquerda, PageUp, [.
// Home/End: primeira e última. F: tela cheia. O número do slide fica no endereço (#5), então
// recarregar a página ou voltar de outra aba mantém o slide.
(function () {
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  var titulo = document.body.getAttribute('data-aula') || '';
  var bar = document.getElementById('progress');
  var i = 0;

  slides.forEach(function (s, n) {
    var st = s.querySelector('.stamp .num');
    if (st) st.textContent = (n + 1) + ' / ' + slides.length;
  });

  function show(n) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, k) {
      s.classList.toggle('active', k === n);
      s.classList.toggle('prev', k < n);
    });
    i = n;
    if (bar) bar.style.width = ((n + 1) / slides.length * 100) + '%';
    if (location.hash !== '#' + (n + 1)) history.replaceState(null, '', '#' + (n + 1));
    if (sel) sel.value = n;
  }

  // barra de navegação no rodapé, aparece com o mouse na borda de baixo
  var nav = document.createElement('div');
  nav.className = 'navbar';
  var sel = document.createElement('select');
  slides.forEach(function (s, n) {
    var o = document.createElement('option');
    var h = s.querySelector('h1,h2');
    o.value = n;
    o.textContent = (n + 1) + '. ' + (s.getAttribute('data-t') || (h ? h.textContent.trim() : ''));
    sel.appendChild(o);
  });
  sel.onchange = function () { show(+sel.value); sel.blur(); };
  function b(t, f) { var x = document.createElement('button'); x.textContent = t; x.onclick = function () { f(); x.blur(); }; return x; }
  nav.appendChild(b('Anterior', function () { show(i - 1); }));
  nav.appendChild(sel);
  nav.appendChild(b('Próximo', function () { show(i + 1); }));
  nav.appendChild(b('Tela cheia', full));
  // no link publicado (site do curso), volta para a lista de todas as aulas
  if (location.protocol !== 'file:') nav.appendChild(b('Kit da aula', function () { location.href = 'https://github.com/AIgorrocha/ai-memory-integracao'; }));
  document.body.appendChild(nav);
  document.addEventListener('mousemove', function (e) { nav.classList.toggle('on', e.clientY > innerHeight - 70); });

  function full() {
    var p = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    if (p && p.catch) p.catch(function () {});
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'SELECT' || e.target.isContentEditable || e.altKey || e.ctrlKey || e.metaKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === ']') { e.preventDefault(); show(i + 1); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === '[') { e.preventDefault(); show(i - 1); }
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'f' || k === 'F') full();
  });

  // link externo sempre em aba nova, sem perder o slide
  [].forEach.call(document.querySelectorAll('a[href^="http"], a.nova'), function (a) {
    a.target = '_blank'; a.rel = 'noopener';
  });

  // clicar dentro do fluxograma (iframe) puxa o teclado para ele; devolve ao deck para as setas seguirem funcionando
  var ancora = document.createElement('span');
  ancora.tabIndex = -1;
  document.body.appendChild(ancora);
  window.addEventListener('blur', function () {
    setTimeout(function () { if (document.activeElement && document.activeElement.tagName === 'IFRAME') ancora.focus(); }, 0);
  });

  if (titulo) document.title = titulo;
  show((parseInt(location.hash.slice(1), 10) || 1) - 1);
})();
