(function () {
  var navTree = document.getElementById('navTree');
  var navSearch = document.getElementById('navSearch');
  var mdBody = document.getElementById('mdBody');
  var mdTitle = document.getElementById('mdTitle');
  var crumbEl = document.getElementById('crumb');

  var COPY_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
  var CHECK_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  var toc = [];

  /* ---------- Display section: parsed out as playground starter code, ---------- */
  /* ---------- and stripped out of what actually gets rendered as lesson text ---------- */

  function extractFencedAfterHeading(text, heading) {
    var re = new RegExp('###\\s*' + heading + '\\s*\\r?\\n\\r?\\n```[a-zA-Z]*\\r?\\n([\\s\\S]*?)```', 'i');
    var m = text.match(re);
    return m ? m[1].replace(/\s+$/, '') : '';
  }

  function splitDisplaySection(md) {
    var m = md.match(/(^|\n)## Display\r?\n([\s\S]*?)(?=\r?\n## |\s*$)/);
    var display = { html: '', css: '', js: '' };
    var content = md;
    if (m) {
      var block = m[2];
      display.html = extractFencedAfterHeading(block, 'HTML');
      display.css = extractFencedAfterHeading(block, 'CSS');
      display.js = extractFencedAfterHeading(block, 'Javascript');
      content = md.slice(0, m.index) + md.slice(m.index + m[0].length);
    }
    return { display: display, content: content };
  }

  /* ---------- tree helpers ---------- */

  function collectLeaves(nodes, out) {
    nodes.forEach(function (node) {
      if (node.children) collectLeaves(node.children, out);
      else out.push(node);
    });
  }

  function findTrail(nodes, file, trail) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var nextTrail = trail.concat([node.name]);
      if (node.file === file) return nextTrail;
      if (node.children) {
        var found = findTrail(node.children, file, nextTrail);
        if (found) return found;
      }
    }
    return null;
  }

  /* ---------- render the nav tree from toc.json ---------- */

  function renderNode(node, depth) {
    if (node.children) {
      var details = document.createElement('details');
      details.className = depth === 0 ? 'l1' : 'l2';
      if (depth === 0) details.open = true;

      var summary = document.createElement('summary');
      var label = document.createElement('span');
      label.textContent = node.name;
      var chev = document.createElement('span');
      chev.className = 'chev';
      chev.innerHTML = '&#9656;';
      summary.appendChild(label);
      summary.appendChild(chev);
      details.appendChild(summary);

      var body = document.createElement('div');
      body.className = depth === 0 ? 'l1-body' : 'l2-body';
      node.children.forEach(function (child) {
        body.appendChild(renderNode(child, depth + 1));
      });
      details.appendChild(body);
      return details;
    }

    var a = document.createElement('a');
    a.href = '#';
    a.className = 'nav-leaf';
    a.textContent = node.name;
    a.dataset.file = node.file;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      loadLesson(node.file, true);
    });
    return a;
  }

  function renderTree() {
    navTree.innerHTML = '';
    toc.forEach(function (node) {
      navTree.appendChild(renderNode(node, 0));
    });
  }

  function expandTo(file) {
    var link = navTree.querySelector('a.nav-leaf[data-file="' + file + '"]');
    if (!link) return;
    var el = link.parentElement;
    while (el && el !== navTree) {
      if (el.tagName === 'DETAILS') el.open = true;
      el = el.parentElement;
    }
  }

  function markActive(file) {
    navTree.querySelectorAll('a.nav-leaf').forEach(function (a) {
      a.classList.toggle('active', a.dataset.file === file);
    });
  }

  /* ---------- load + render a lesson ---------- */

  function enhanceCodeBlocks(root) {
    root.querySelectorAll('pre').forEach(function (pre) {
      if (pre.parentElement.classList.contains('code-block')) return;
      var wrap = document.createElement('div');
      wrap.className = 'code-block';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = COPY_ICON;
      btn.addEventListener('click', function () {
        var code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
        navigator.clipboard.writeText(code).then(function () {
          btn.innerHTML = CHECK_ICON;
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerHTML = COPY_ICON;
            btn.classList.remove('copied');
          }, 1500);
        });
      });
      wrap.appendChild(btn);
    });
  }

  function loadLesson(file, pushUrl) {
    mdBody.innerHTML = '<p style="color:var(--ink-muted)">Loading&hellip;</p>';
    fetch('content/' + file)
      .then(function (res) {
        if (!res.ok) throw new Error('Could not load ' + file);
        return res.text();
      })
      .then(function (text) {
        var split = splitDisplaySection(text);
        mdBody.innerHTML = marked.parse(split.content);
        enhanceCodeBlocks(mdBody);
        markActive(file);
        expandTo(file);

        if (window.pgLoadStarter) window.pgLoadStarter(split.display.html, split.display.css, split.display.js);

        var trail = findTrail(toc, file, []);
        if (trail) {
          mdTitle.textContent = trail[trail.length - 1];
          crumbEl.innerHTML = trail.slice(0, -1).join(' / ') + (trail.length > 1 ? ' / ' : '') + '<b>' + trail[trail.length - 1] + '</b>';
        }

        if (pushUrl) {
          var url = new URL(window.location.href);
          url.searchParams.set('path', file);
          history.pushState({ file: file }, '', url);
        }
      })
      .catch(function (err) {
        mdBody.innerHTML = '<p style="color:var(--text-danger, #a32d2d)">' + err.message + '</p>';
      });
  }

  /* ---------- search ---------- */

  function applySearch(query) {
    var q = query.trim().toLowerCase();
    var allLeaves = navTree.querySelectorAll('a.nav-leaf');
    var allDetails = navTree.querySelectorAll('details');

    if (!q) {
      allLeaves.forEach(function (a) { a.classList.remove('no-match'); });
      allDetails.forEach(function (d) { d.classList.remove('no-match'); });
      return;
    }

    allLeaves.forEach(function (a) {
      var match = a.textContent.toLowerCase().indexOf(q) !== -1;
      a.classList.toggle('no-match', !match);
      if (match) {
        var el = a.parentElement;
        while (el && el !== navTree) {
          if (el.tagName === 'DETAILS') el.open = true;
          el = el.parentElement;
        }
      }
    });

    allDetails.forEach(function (d) {
      var hasVisibleLeaf = Array.prototype.some.call(d.querySelectorAll('a.nav-leaf'), function (a) {
        return !a.classList.contains('no-match');
      });
      d.classList.toggle('no-match', !hasVisibleLeaf);
    });
  }

  navSearch.addEventListener('input', function () {
    applySearch(navSearch.value);
  });

  /* ---------- brand / home ---------- */

  var brandHome = document.getElementById('brandHome');
  if (brandHome) {
    brandHome.addEventListener('click', function () {
      var leaves = [];
      collectLeaves(toc, leaves);
      if (!leaves.length) return;
      navSearch.value = '';
      applySearch('');
      loadLesson(leaves[0].file, true);
    });
  }

  /* ---------- deep linking ---------- */

  window.addEventListener('popstate', function () {
    var params = new URLSearchParams(window.location.search);
    var file = params.get('path');
    if (file) loadLesson(file, false);
  });

  /* ---------- boot ---------- */

  fetch('toc.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      toc = data;
      renderTree();

      var params = new URLSearchParams(window.location.search);
      var initial = params.get('path');
      if (!initial) {
        var leaves = [];
        collectLeaves(toc, leaves);
        initial = leaves.length ? leaves[0].file : null;
      }
      if (initial) loadLesson(initial, false);
    })
    .catch(function () {
      navTree.innerHTML = '<p style="color:var(--ink-muted);font-size:12px;padding:6px">Could not load toc.json. Serve this folder over http:// (not file://) for fetch to work.</p>';
    });
})();
