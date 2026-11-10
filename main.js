// Stamp the visitor's company into the serial plate, and carry it into the demo email.
(function () {
  var input = document.getElementById('stamp');
  var serial = document.querySelector('.js-serial');
  var live = document.getElementById('serial-live');
  var domains = document.querySelectorAll('.js-domain');
  var demoLinks = document.querySelectorAll('.js-demo');
  if (!input || !serial) return;

  var FALLBACK = 'yourcompany';
  var current = FALLBACK;

  function slugify(value) {
    return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '').slice(0, 24);
  }

  function render(next) {
    // Keep the shared prefix still; only newly struck letters get punched.
    var keep = 0;
    while (keep < next.length && keep < current.length && next[keep] === current[keep]) keep++;
    if (current === FALLBACK || next === FALLBACK) keep = 0;

    var frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode(next.slice(0, keep)));
    for (var i = keep; i < next.length; i++) {
      var span = document.createElement('span');
      span.className = 'punch';
      span.style.animationDelay = (i - keep) * 28 + 'ms';
      span.textContent = next[i];
      frag.appendChild(span);
    }
    serial.textContent = '';
    serial.appendChild(frag);
    current = next;
  }

  function update() {
    var slug = slugify(input.value) || FALLBACK;
    if (slug === current) return;
    render(slug);

    var domain = slug + '.routecool.com';
    domains.forEach(function (el) { el.textContent = domain; });
    if (live) live.textContent = 'Your address would be ' + domain;

    var named = slug !== FALLBACK;
    var subject = named ? 'RouteCool demo for ' + domain : 'RouteCool demo';
    var body = named ? 'Hi! We\'d like a demo of RouteCool for ' + input.value.trim() + '.\n\n' : '';
    var href = 'mailto:demo@routecool.com?subject=' + encodeURIComponent(subject) +
      (body ? '&body=' + encodeURIComponent(body) : '');
    demoLinks.forEach(function (a) { a.href = href; });
  }

  input.addEventListener('input', update);

  // Strike the placeholder serial once on load so the plate reads as stampable.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(function () {
      if (input.value) return;
      current = '';
      render(FALLBACK);
    }, 450);
  }
})();
