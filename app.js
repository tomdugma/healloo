/* Healloo — clickable prototype. All state lives in memory; nothing is sent anywhere. */
(function () {
  var D = window.HEALLOO;

  /* ---------- icons ---------- */
  var I = {
    menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    bell: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    dots: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><circle cx="12" cy="5" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="12" cy="19" r="1.7"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    person: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M4.8 20a7.2 7.2 0 0 1 14.4 0"/></svg>',
    trend: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l5-6 4 4 6-8"/><path d="M15 7h4v4"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 4.8l4 4L8.6 19.4 4 20.6l1.2-4.6z"/></svg>',
    smile: '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="8.4"/><path d="M8.6 14.2a4.4 4.4 0 0 0 6.8 0"/><circle cx="9.2" cy="9.8" r="1" fill="currentColor" stroke="none"/><circle cx="14.8" cy="9.8" r="1" fill="currentColor" stroke="none"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2.4"/><path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-8 5-13 16-14 0 9-5 14-13 14H4z"/></svg>',
    mic: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9.2" y="3" width="5.6" height="10" rx="2.8"/><path d="M5.6 11.4a6.4 6.4 0 0 0 12.8 0M12 17.8V21"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.4l-1.4-1.3C5.6 14.6 3 12.2 3 9.2A4.6 4.6 0 0 1 7.6 4.6c1.7 0 3.3.8 4.4 2.1a5.7 5.7 0 0 1 4.4-2.1A4.6 4.6 0 0 1 21 9.2c0 3-2.6 5.4-7.6 9.9z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.6l11 6.4-11 6.4z"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8.4" cy="9" r="2.8"/><circle cx="16.4" cy="10" r="2.2"/><path d="M2.6 18.6a5.8 5.8 0 0 1 11.6 0zM15 18.6a6.6 6.6 0 0 0-1.4-3.6 4.4 4.4 0 0 1 7.2 3.6z"/></svg>',
    session: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 18h3v-5H4zm5 0h3V9H9zm5 0h3v-8h-3z"/><circle cx="19.4" cy="6.4" r="2"/></svg>',
    type: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 6h14M12 6v12M9 18h6"/></svg>',
    draw: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 15L15 5M9 19L19 9M5 9l4-4M15 19l4-4"/></svg>',
    voice: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9.4" y="3.4" width="5.2" height="9.4" rx="2.6"/><path d="M6 11a6 6 0 0 0 12 0M12 17.4V20.6"/></svg>',
    caret: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9.5l6 5.5 6-5.5"/></svg>',
    image: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.4" y="5" width="17.2" height="14" rx="3"/><circle cx="8.6" cy="10" r="1.5"/><path d="M4.4 17l5-5 4.4 4.4 2.6-2.4 4 3.6"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2l1.7 5.6L19 9.5l-5.3 1.9L12 17l-1.7-5.6L5 9.5l5.3-1.9z"/><path d="M18.6 14.2l.8 2.3 2.2.8-2.2.8-.8 2.3-.8-2.3-2.2-.8 2.2-.8z"/></svg>',
    logo: '<svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5B7BF0"/><stop offset=".55" stop-color="#A98BE8"/><stop offset="1" stop-color="#E3A9CF"/></linearGradient></defs><circle cx="32" cy="32" r="23" fill="none" stroke="url(#lg)" stroke-width="9" stroke-linecap="round" stroke-dasharray="118 40" transform="rotate(-40 32 32)"/></svg>'
  };

  var GEM = {
    diamond: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M6 3h12l4 6-10 12L2 9z" fill="#63C7E8"/><path d="M6 3l6 6 6-6M2 9h20" stroke="#fff" stroke-width="1.1" fill="none"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#F2C94C"><path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"/></svg>',
    sapphire: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M6 3h12l4 6-10 12L2 9z" fill="#4C7BE8"/><path d="M6 3l6 6 6-6M2 9h20" stroke="#fff" stroke-width="1.1" fill="none"/></svg>'
  };

  /* soft bloom behind hero titles */
  function bloom(id, c1, c2) {
    return '<svg class="bloom" viewBox="0 0 200 200" aria-hidden="true">' +
      '<defs><radialGradient id="b' + id + '"><stop offset="0" stop-color="' + c1 + '" stop-opacity=".95"/>' +
      '<stop offset="1" stop-color="' + c2 + '" stop-opacity="0"/></radialGradient></defs>' +
      '<circle cx="100" cy="100" r="96" fill="url(#b' + id + ')"/>' +
      '<path d="M100 14c6 44 42 80 86 86-44 6-80 42-86 86-6-44-42-80-86-86 44-6 80-42 86-86z" fill="#fff" fill-opacity=".55"/>' +
      '<circle cx="100" cy="100" r="58" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/>' +
      '</svg>';
  }
  function star(size, op) {
    return '<svg class="star" width="' + size + '" height="' + size + '" viewBox="0 0 120 120" aria-hidden="true">' +
      '<path d="M60 2c4 30 28 54 58 58-30 4-54 28-58 58-4-30-28-54-58-58 30-4 54-28 58-58z" fill="#fff" fill-opacity="' + op + '"/></svg>';
  }
  function ringSvg(pct, size, stroke, track, color) {
    var r = (size - stroke) / 2, c = 2 * Math.PI * r;
    return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '">' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + track + '" stroke-width="' + stroke + '"/>' +
      '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="' + stroke +
      '" stroke-linecap="round" stroke-dasharray="' + (c * pct).toFixed(1) + ' ' + c.toFixed(1) + '"/></svg>';
  }

  /* ---------- state ---------- */
  var S = {
    screen: 'splash',
    stack: [],
    hero: 0,
    task: 4,           // opens on "Put music..." like the mockup
    tasks: D.tasks.map(function (t) { return { n: t.n, done: t.done, text: t.text, hint: t.hint }; }),
    mood: 'anxious',
    draft: { title: '', note: '' },
    diaryTab: 'notes',
    calDay: 1,
    sos: null,
    promptIdx: 0,
    bannerOpen: true
  };

  var app = document.getElementById('app');

  function doneCount() { return S.tasks.filter(function (t) { return t.done; }).length; }
  function moodOf(key) {
    for (var i = 0; i < D.moods.length; i++) if (D.moods[i].key === key) return D.moods[i];
    return null;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  /* ---------- shared chrome ---------- */
  function appbar(opts) {
    var left = opts.back
      ? '<button data-back aria-label="Back">' + I.back + '</button>'
      : (opts.menu ? '<button data-act="menu" aria-label="Menu">' + I.menu + '</button>' : '<span></span>');
    var right = opts.right || '<span></span>';
    return '<div class="appbar">' + left + '<h2>' + opts.title + '</h2>' + right + '</div>';
  }
  function tabbar() {
    var t = [
      { k: 'heart', l: 'Me heart', on: true, go: 'home' },
      { k: 'play', l: 'VOD', go: null },
      { k: 'people', l: 'Community', go: null },
      { k: 'session', l: 'Session', go: null }
    ];
    return '<nav class="tabbar">' + t.map(function (x) {
      return '<button class="tab' + (x.on ? ' is-on' : '') + '" ' +
        (x.go ? 'data-go="' + x.go + '"' : 'data-act="soon" data-label="' + x.l + '"') + '>' +
        I[x.k] + '<span>' + x.l + '</span></button>';
    }).join('') + '</nav>';
  }

  /* ---------- screens ---------- */
  var V = {};

  V.splash = function () {
    return '<section class="screen splash" data-act="go-home">' +
      '<div class="mark">' + I.logo + '<span>Healloo</span></div>' +
      '<p class="tap">tap to begin</p></section>';
  };

  V.home = function () {
    var done = doneCount(), total = S.tasks.length, left = total - done;
    var heroes = D.cards.map(function (c, i) {
      if (c.kind === 'progress') {
        return '<article class="hero t-tasks">' + bloom('h' + i, '#FFFFFF', '#E9DBFB') +
          '<p class="headline">Only <b>' + left + ' task' + (left === 1 ? '' : 's') + '</b> remaining.<br>You can do this!</p>' +
          '<div class="ring">' + ringSvg(done / total, 118, 11, '#E7DCFA', '#8B30E8') +
          '<div class="ring-mid"><span class="big">' + done + '<i>/ ' + total + '</i></span>' +
          '<small>Part one tasks completed</small></div></div>' +
          '<button class="hero-link" data-go="program">Go to The Details</button></article>';
      }
      return '<article class="hero t-' + c.theme + '">' + bloom('h' + i, '#FFFFFF', '#FFFFFF') +
        '<h3 style="margin-top:72px">' + c.title + '</h3><p>' + c.desc + '</p>' +
        '<button class="fab" data-go="' + c.go + '" aria-label="' + c.cta + '">' + I[c.icon] + '</button>' +
        '<button class="hero-link" data-go="' + c.go + '">' + c.link + '</button></article>';
    }).join('');

    var card = D.cards[S.hero];
    var ctaGo = card.kind === 'progress' ? 'tasks' : card.go;

    var vod = D.vod.slice(0, 2).map(function (v, i) {
      return '<button class="vod a-' + v.art + '" data-act="soon" data-label="' + v.title + '">' +
        '<span class="chip">' + I[v.icon] + v.tag + '</span>' +
        (v.locked ? '<span class="lock">' + I.lock + '</span>' : '<span></span>') +
        '<span class="len">' + v.len + '</span></button>';
    }).join('');

    return '<section class="screen">' +
      appbar({ menu: true, title: 'Healloo', right: '<button class="bell" data-act="notif" aria-label="Notifications">' + I.bell + '<i class="dot"></i></button>' }) +
      '<div class="scroll">' +
      '<div class="carousel" id="carousel">' + heroes + '</div>' +
      '<div class="dots">' + D.cards.map(function (_, i) { return '<i class="' + (i === S.hero ? 'on' : '') + '"></i>'; }).join('') + '</div>' +
      '<div class="pad"><button class="btn" data-go="' + ctaGo + '">' + card.cta + '</button>' +
      '<div class="sect"><h4>VOD</h4><a href="#" data-act="soon" data-label="VOD library">See All</a></div>' +
      '<div class="vod-row">' + vod + '</div><div style="height:18px"></div></div>' +
      '</div>' + tabbar() + '</section>';
  };

  V.tasks = function () {
    var t = S.tasks[S.task];
    var part = Math.floor(S.task / 10) + 1;
    return '<section class="screen deck">' +
      appbar({ back: true, title: 'Tasks', right: '<button data-act="soon" data-label="Task options">' + I.dots + '</button>' }) +
      '<div class="scroll"><article class="task-card">' +
      '<div class="row"><span class="pill">Part ' + part + '</span><span class="pill">#' + t.n + '</span></div>' +
      star(150, '.85') +
      '<h3>' + esc(t.text) + '</h3><p>' + esc(t.hint) + '</p></article>' +
      '<button class="check' + (t.done ? ' done' : '') + '" data-act="check" aria-label="' + (t.done ? 'Completed' : 'Mark complete') + '">' + I.check + '</button>' +
      '<p class="deck-note">' + doneCount() + ' of ' + S.tasks.length + ' done · tap the check for the next one</p>' +
      '</div></section>';
  };

  V.program = function () {
    var p = D.program, done = doneCount();
    var parts = p.parts.map(function (x, i) {
      var d = i === 0 ? done : x.done;
      var pct = d / x.total;
      var right = x.locked
        ? '<span class="locked">' + I.lock + '</span>'
        : '<span class="mini">' + ringSvg(pct, 38, 4, '#EEE7FA', '#8B30E8') + '<b>' + Math.round(pct * 100) + '%</b></span>';
      return '<button class="part" ' + (x.locked ? 'data-act="locked"' : 'data-go="parttasks"') + '>' +
        '<span class="meta"><b>' + x.name + '</b><span>' + d + '/' + x.total + ' Tasks</span></span>' + right + '</button>';
    }).join('');

    var goal = p.goalTasks, pct = done / goal;
    return '<section class="screen">' +
      appbar({ back: true, title: 'Program Details', right: '<button data-go="profile" aria-label="Profile">' + I.person + '</button>' }) +
      '<div class="scroll pad"><div class="prog-card">' +
      '<div class="gems"><span class="gem">' + GEM.diamond + D.user.gems.diamond + '</span>' +
      '<span class="gem">' + GEM.star + D.user.gems.star + '</span>' +
      '<span class="gem">' + GEM.sapphire + D.user.gems.sapphire + '</span></div>' +
      '<h3>' + p.title + '</h3><p class="sub">' + p.subtitle + '</p>' +
      '<div class="bar"><i style="width:' + Math.max(pct * 100, 6) + '%"></i>' +
      '<span class="knob" style="left:100%">' + GEM.diamond + '</span></div>' +
      '<div class="bar-legend"><span>' + done + ' Tasks done</span><span>Goal ' + goal + ' Tasks</span></div></div>' +
      '<div class="sect"><h4>Program parts</h4></div>' + parts + '<div style="height:20px"></div>' +
      '</div></section>';
  };

  V.parttasks = function () {
    var grid = S.tasks.map(function (t, i) {
      return '<button class="mini-task" data-act="open-task" data-i="' + i + '">' +
        '<span class="top"><span class="state' + (t.done ? ' done' : '') + '">' + (t.done ? 'Completed' : 'Incomplete') + '</span>' +
        '<span class="num">#' + t.n + '</span></span>' + star(88, '.9') +
        '<p>' + esc(t.text) + '</p></button>';
    }).join('');
    return '<section class="screen">' +
      appbar({ back: true, title: 'All tasks of Part one' }) +
      '<div class="scroll pad"><div class="tasks-grid">' + grid + '</div><div style="height:20px"></div></div></section>';
  };

  V.profile = function () {
    var max = 100;
    var bars = D.stats.bars.map(function (b) {
      return '<i style="height:' + (b.value / max * 100) + '%" title="' + b.label + ': ' + b.value + '%"></i>';
    }).join('');
    var xs = D.stats.bars.map(function (b) { return '<span>' + b.label + '</span>'; }).join('');
    var lines = [0, 25, 50, 75].map(function (v) { return '<span class="grid-l" style="top:' + v + '%"></span>'; }).join('');
    var levels = D.levels.map(function (l) {
      return '<div class="level"><span class="badge' + (l.got ? '' : ' off') + '">' + (l.got ? '🏅' : '🔒') + '</span>' +
        '<span><b>' + l.name + '</b><span>' + l.sub + '</span></span></div>';
    }).join('');

    return '<section class="screen">' +
      appbar({ back: true, title: 'Profile', right: '<button data-act="soon" data-label="Profile options">' + I.dots + '</button>' }) +
      '<div class="scroll pad"><div class="pro-card">' +
      '<div class="avatar"><svg viewBox="0 0 92 92" width="92" height="92" aria-hidden="true">' +
      '<circle cx="46" cy="38" r="17" fill="#F0C9AE"/><path d="M46 17c13 0 19 8 18 19-2-6-9-8-18-8s-16 2-18 8c-1-11 5-19 18-19z" fill="#3B2B3F"/>' +
      '<path d="M18 92c2-17 13-26 28-26s26 9 28 26z" fill="#B24B5E"/></svg></div>' +
      '<h3>' + D.user.name + '</h3>' +
      '<div class="gems"><span class="gem">' + GEM.diamond + D.user.gems.diamond + '</span>' +
      '<span class="gem">' + GEM.star + D.user.gems.star + '</span>' +
      '<span class="gem">' + GEM.sapphire + D.user.gems.sapphire + '</span></div></div>' +
      '<div class="sect"></div>' +
      '<div class="panel"><div class="panel-head"><h4>Statistic</h4>' +
      '<button class="select" data-act="soon" data-label="Range picker">' + D.stats.range + I.caret + '</button></div>' +
      '<div class="chart"><div class="y-axis"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>' +
      '<div class="plot">' + lines + '<div class="bars">' + bars + '</div></div>' +
      '<div class="x-axis">' + xs + '</div></div></div>' +
      '<div class="sect"><h4>Levels</h4><a href="#" data-act="soon" data-label="All levels">See All</a></div>' +
      '<div class="panel">' + levels + '</div><div style="height:20px"></div>' +
      '</div></section>';
  };

  V.moodsheet = function () {
    var grid = D.moods.map(function (m) {
      return '<button class="mood ' + m.tone + (S.mood === m.key ? ' on' : '') + '" data-act="mood" data-k="' + m.key + '">' +
        '<span>' + m.emoji + '</span><b>' + m.label + '</b></button>';
    }).join('');
    return '<section class="screen sheet-wrap"><div class="sheet">' +
      '<div class="appbar"><button data-back aria-label="Close">' + I.close + '</button>' +
      '<h2>Set Up Your Mood</h2><button data-act="soon" data-label="Mood options">' + I.dots + '</button></div>' +
      '<div class="scroll pad"><p class="date-line">Date: <b>Sun, 1 September 2024</b></p>' +
      '<div class="mood-grid">' + grid + '</div>' +
      '<button class="add-emotion" data-act="soon" data-label="Custom emotion">❓ Add Emotion</button>' +
      '<div style="height:16px"></div><button class="btn" data-go="note">Save</button><div style="height:20px"></div>' +
      '</div></div></section>';
  };

  V.note = function () {
    var m = moodOf(S.mood);
    var banner = S.bannerOpen
      ? '<div class="ai-banner"><button class="x" data-act="close-banner" aria-label="Dismiss">' + I.close + '</button>' +
        '<b>' + I.sparkle + 'Get an AI-powered prompt</b>' +
        '<p>' + esc(D.aiPrompts[S.promptIdx]) + '</p></div>'
      : '';
    return '<section class="screen">' +
      appbar({ back: true, title: 'My Note', right: '<button data-act="soon" data-label="Note options">' + I.dots + '</button>' }) +
      '<div class="scroll pad">' +
      '<button class="mood-tag" data-go="moodsheet" style="width:100%">' +
      '<span class="face">' + (m ? m.emoji : '❓') + '<small>Mood</small></span>' +
      '<span style="text-align:left"><b>' + (m ? m.label : 'Set a mood') + '</b><br>' +
      '<span style="font-size:.72rem;color:var(--muted)">Sun, 1 September 2024</span></span></button>' +
      '<p class="field-label">Title:</p>' +
      '<input class="note-input" id="note-title" placeholder="Write the Name of the Note" value="' + esc(S.draft.title) + '">' +
      '<p class="field-label" style="margin-top:14px">Note:</p>' +
      '<textarea class="note-area" id="note-body" placeholder="Write an answer on the question">' + esc(S.draft.note) + '</textarea>' +
      banner +
      '<div class="toolbar"><button class="tool on" data-act="soon" data-label="Text">' + I.type + '</button>' +
      '<button class="tool" data-act="soon" data-label="Drawing">' + I.draw + '</button>' +
      '<button class="tool" data-act="soon" data-label="Voice note">' + I.voice + '</button>' +
      '<button class="hint-btn" data-act="hint">Add a Hint</button></div>' +
      '<div style="height:10px"></div><button class="btn" data-act="save-note">Save</button><div style="height:20px"></div>' +
      '</div></section>';
  };

  V.diary = function () {
    var body = S.diaryTab === 'notes' ? calendarView() : ganttView();
    return '<section class="screen">' +
      appbar({ back: true, title: 'My Diary', right: '<button data-act="tab-gantt" aria-label="Mood Gantt">' + I.trend + '</button>' }) +
      '<div class="scroll pad">' +
      '<div class="seg"><button class="' + (S.diaryTab === 'notes' ? 'on' : '') + '" data-act="tab-notes">Mood &amp; Notes</button>' +
      '<button class="' + (S.diaryTab === 'gantt' ? 'on' : '') + '" data-act="tab-gantt">Mood Gantt</button></div>' +
      body + '<div style="height:20px"></div></div></section>';
  };

  function calendarView() {
    var dows = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var byDay = {};
    D.entries.forEach(function (e) { byDay[e.day] = e; });
    var cells = dows.map(function (d) { return '<span class="dow">' + d + '</span>'; }).join('');
    for (var d = 1; d <= 30; d++) {                      // Sept 2024 starts on a Sunday
      var e = byDay[d], m = e ? moodOf(e.mood) : null;
      cells += '<button class="cal-cell' + (e ? ' has' : '') + (S.calDay === d ? ' on' : '') + '" data-act="cal" data-d="' + d + '">' +
        (m ? m.emoji : d) + '</button>';
    }
    var week = D.entries.filter(function (e) { return e.day >= 1 && e.day <= 7; });
    var list = (week.length ? week : D.entries.slice(0, 1)).map(function (e) {
      var m = moodOf(e.mood);
      return '<div class="entry"><span class="em">' + m.emoji + '</span>' +
        '<span class="body"><b>' + m.label + '</b><time>' + e.time + '</time>' +
        '<p class="t"><i>Title:</i> ' + esc(e.title) + '</p></span>' +
        '<button class="edit" data-go="note">Edit</button></div>';
    }).join('');
    return '<div class="cal"><div class="cal-head"><b>September ' + I.caret + '</b>' +
      '<button data-act="soon" data-label="Photo memories">' + I.image + '</button></div>' +
      '<div class="cal-grid">' + cells + '</div></div>' +
      '<div class="sect"><h4 style="font-size:.88rem;font-weight:500;color:var(--ink-2)">Sun, 1-7 September</h4></div>' + list;
  }

  function ganttView() {
    var colors = { good: '#8FD3A8', low: '#8FA8D3', hot: '#D38FA8' };
    var rows = D.moods.map(function (m) {
      var hits = D.entries.filter(function (e) { return e.mood === m.key; });
      var bars = hits.map(function (e) {
        return '<i style="left:' + ((e.day - 1) / 30 * 100) + '%;width:' + (100 / 30) + '%;background:' + colors[m.tone] + '"></i>';
      }).join('');
      return '<div class="gantt-row"><span>' + m.emoji + ' ' + m.label + '</span><span class="track">' + bars + '</span></div>';
    }).join('');
    return '<div class="panel"><div class="panel-head"><h4>September</h4>' +
      '<button class="select" data-act="soon" data-label="Month picker">2024' + I.caret + '</button></div>' +
      '<div class="gantt">' + rows + '</div>' +
      '<p style="margin:14px 0 0;font-size:.72rem;color:var(--muted)">One mark per logged day across the month.</p></div>';
  }

  V.sos = function () {
    var tiles = D.sos.map(function (s, i) {
      return '<button class="sos-tile' + (S.sos === i ? ' on' : '') + '" data-act="sos" data-i="' + i + '">' +
        '<em>' + s.emoji + '</em><span>' + esc(s.text) + '</span></button>';
    }).join('');
    return '<section class="screen">' +
      appbar({ back: true, title: 'Sos Button', right: '<button data-act="soon" data-label="Support options">' + I.dots + '</button>' }) +
      '<div class="scroll pad"><h3 class="sos-title">What Happened?</h3>' +
      '<div class="sos-grid">' + tiles + '</div>' +
      '<div style="height:18px"></div><button class="btn" data-go="match">Get Help</button><div style="height:20px"></div>' +
      '</div></section>';
  };

  V.match = function () {
    var h = D.helper;
    return '<section class="screen match">' +
      appbar({ back: true, title: 'Sos button', right: '<button data-act="soon" data-label="Support options">' + I.dots + '</button>' }) +
      '<div class="scroll pad"><h3>' + h.headline + '</h3><p class="sub">' + h.sub + '</p>' +
      '<div class="photo"><span class="who"><b>' + h.name + '</b><span>' + h.role + '</span></span></div>' +
      '<div style="height:16px"></div><button class="linkish" data-act="another">Give m another advice</button>' +
      '<div style="height:20px"></div></div></section>';
  };

  /* ---------- router ---------- */
  function render() {
    app.innerHTML = V[S.screen]();
    var sc = app.querySelector('.scroll');
    if (sc) sc.scrollTop = 0;
    if (S.screen === 'home') wireCarousel();
    document.querySelector('.homebar').classList.toggle('on-dark', S.screen === 'splash');
  }
  function go(name) {
    if (name === S.screen) return;
    S.stack.push(S.screen);
    S.screen = name;
    render();
  }
  function back() {
    S.screen = S.stack.pop() || 'home';
    render();
  }

  function wireCarousel() {
    var c = document.getElementById('carousel');
    if (!c) return;
    var kids = c.children;
    if (kids[S.hero]) c.scrollLeft = kids[S.hero].offsetLeft - (c.clientWidth - kids[S.hero].clientWidth) / 2;
    var tick;
    c.addEventListener('scroll', function () {
      clearTimeout(tick);
      tick = setTimeout(function () {
        var mid = c.scrollLeft + c.clientWidth / 2, best = 0, bd = 1e9;
        for (var i = 0; i < kids.length; i++) {
          var k = kids[i], d = Math.abs(k.offsetLeft + k.clientWidth / 2 - mid);
          if (d < bd) { bd = d; best = i; }
        }
        if (best !== S.hero) {
          S.hero = best;
          var dots = document.querySelectorAll('.dots i');
          for (var j = 0; j < dots.length; j++) dots[j].className = j === best ? 'on' : '';
          var card = D.cards[best];
          var btn = document.querySelector('.pad .btn');
          if (btn) { btn.textContent = card.cta; btn.dataset.go = card.kind === 'progress' ? 'tasks' : card.go; }
        }
      }, 70);
    }, { passive: true });
  }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 1700);
  }

  /* ---------- actions ---------- */
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest('[data-go],[data-back],[data-act]');
    if (!el) return;
    if (el.hasAttribute('data-back')) { ev.preventDefault(); return back(); }
    if (el.dataset.go) { ev.preventDefault(); return go(el.dataset.go); }

    var a = el.dataset.act;
    ev.preventDefault();

    if (a === 'go-home') return go('home');
    if (a === 'menu') return toast('Menu — not in this prototype');
    if (a === 'notif') return toast('1 new: your Part One streak is alive');
    if (a === 'soon') return toast((el.dataset.label || 'This') + ' — not in this prototype');
    if (a === 'locked') return toast('Finish Part One to unlock this');

    if (a === 'check') {
      var t = S.tasks[S.task];
      t.done = !t.done;
      if (t.done) {
        toast('Nice. ' + doneCount() + '/' + S.tasks.length + ' done');
        var next = S.tasks.findIndex(function (x) { return !x.done; });
        if (next > -1) S.task = next;
      }
      return render();
    }
    if (a === 'open-task') { S.task = +el.dataset.i; return go('tasks'); }
    if (a === 'mood') { S.mood = el.dataset.k; return render(); }
    if (a === 'close-banner') { S.bannerOpen = false; return render(); }
    if (a === 'hint') {
      S.promptIdx = (S.promptIdx + 1) % D.aiPrompts.length;
      S.bannerOpen = true;
      return render();
    }
    if (a === 'save-note') {
      var ti = document.getElementById('note-title'), bo = document.getElementById('note-body');
      S.draft.title = ti ? ti.value : '';
      S.draft.note = bo ? bo.value : '';
      toast('Saved to your diary');
      return go('diary');
    }
    if (a === 'tab-notes') { S.diaryTab = 'notes'; return render(); }
    if (a === 'tab-gantt') { S.diaryTab = 'gantt'; return render(); }
    if (a === 'cal') {
      S.calDay = +el.dataset.d;
      var e = D.entries.filter(function (x) { return x.day === S.calDay; })[0];
      render();
      return toast(e ? moodOf(e.mood).label + ' — ' + e.title : 'No entry on ' + S.calDay + ' September');
    }
    if (a === 'sos') { S.sos = +el.dataset.i; return render(); }
    if (a === 'another') return toast('Looking for another community member...');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && S.screen !== 'home' && S.screen !== 'splash') back();
  });

  render();
  setTimeout(function () { if (S.screen === 'splash') go('home'); }, 2200);
})();
