(function(){
  // ======= Config =======
  const DAY_WIDTH = 36; // px per day
  document.documentElement.style.setProperty('--dayWidth', DAY_WIDTH + 'px');

  // ======= Helpers =======
  const fmtDay  = new Intl.DateTimeFormat('mn-MN', { day:'2-digit' });
  const fmtWeek = new Intl.DateTimeFormat('mn-MN', { weekday:'short' });
  const fmtISO  = (d)=> d.toISOString().slice(0,10);

  function parseISO(s){ const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
  function startOfDay(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addDays(d,n){ const x = new Date(d); x.setDate(x.getDate()+n); return x; }
  function diffDays(a,b){ return Math.round((startOfDay(a)-startOfDay(b))/86400000); }
  function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }
  function isWeekend(d){ const wd = d.getDay(); return wd===0 || wd===6; }

  // ======= Data =======
  let tasks = [
    { id:1, name:'Шат 1 — Төлөвлөлт', start:'2025-11-03', end:'2025-11-07', progress:40 },
    { id:2, name:'Шат 2 — Шинжилгээ', start:'2025-11-08', end:'2025-11-13', progress:25 },
    { id:3, name:'Шат 3 — Хөгжил',   start:'2025-11-10', end:'2025-11-22', progress:10 },
    { id:4, name:'Шат 4 — Тест',     start:'2025-11-23', end:'2025-11-28', progress:0  },
  ];

  // ======= Elements =======
  const elDays  = document.getElementById('days');
  const elLabels= document.getElementById('labels');
  const elGrid  = document.getElementById('grid');
  const elBars  = document.getElementById('bars');
  const elToday = document.getElementById('todayLine');
  const scroller= document.getElementById('timelineScroller');
  const rows    = document.getElementById('rows');
  const tooltip = document.getElementById('tooltip');

  // ======= Timeline range =======
  function computeRange(){
    const minStart = tasks.reduce((min,t)=> Math.min(min, +parseISO(t.start)), +parseISO(tasks[0].start));
    const maxEnd   = tasks.reduce((max,t)=> Math.max(max, +parseISO(t.end)),   +parseISO(tasks[0].end));
    const pad = 2; // padding days each side
    const start = addDays(new Date(minStart), -pad);
    const end   = addDays(new Date(maxEnd), pad);
    return { start:startOfDay(start), end:startOfDay(end) };
  }

  function buildDays(start,end){
    elDays.innerHTML = '';
    elGrid.innerHTML = '';
    const total = diffDays(end, start) + 1;
    for(let i=0;i<total;i++){
      const d = addDays(start, i);
      const isW = isWeekend(d);

      const cell = document.createElement('div');
      cell.className = 'daycell' + (isW? ' weekend': '');
      cell.innerHTML = `<div class="d">${fmtDay.format(d)}</div><div class="w">${fmtWeek.format(d)}</div>`;
      elDays.appendChild(cell);

      const g = document.createElement('div');
      if(isW) g.className='weekend';
      elGrid.appendChild(g);
    }
  }

  function buildLabels(){
    elLabels.innerHTML = '';
    tasks.forEach(t=>{
      const row = document.createElement('div');
      row.className = 'label';
      row.textContent = t.name;
      elLabels.appendChild(row);
    });
  }

  function buildTodayLine(start, end){
    const today = startOfDay(new Date());
    if (today < start || today > end) { elToday.style.display='none'; return; }
    const x = diffDays(today, start) * DAY_WIDTH + DAY_WIDTH/2 - 1;
    elToday.style.left = x + 'px';
    elToday.style.display='block';
  }

  function daysSpan(t){ return diffDays(parseISO(t.end), parseISO(t.start)) + 1; }

  function renderBars(start){
    elBars.innerHTML = '';
    const rowH = 40, padY = 7; // aligns inside 40px rows
    tasks.forEach((t, i)=>{
      const left  = diffDays(parseISO(t.start), start) * DAY_WIDTH + 1;
      const width = daysSpan(t) * DAY_WIDTH - 2;

      const bar = document.createElement('div');
      bar.className='bar';
      bar.style.left = left + 'px';
      bar.style.top = (i*rowH + padY) + 'px';
      bar.style.width = width + 'px';
      bar.dataset.id = t.id;

      const progress = document.createElement('div');
      progress.className='progress';
      progress.style.width = clamp(t.progress,0,100) + '%';
      bar.appendChild(progress);

      const name = document.createElement('div');
      name.className='name'; name.textContent = t.name; bar.appendChild(name);

      const pct = document.createElement('div');
      pct.className='pct'; pct.textContent = (t.progress||0) + '%'; bar.appendChild(pct);

      const hL = document.createElement('div'); hL.className='handle left';  bar.appendChild(hL);
      const hR = document.createElement('div'); hR.className='handle right'; bar.appendChild(hR);

      // Tooltip
      bar.addEventListener('pointerenter', (e)=> showTip(e, t));
      bar.addEventListener('pointermove',  (e)=> moveTip(e));
      bar.addEventListener('pointerleave', hideTip);

      // Drag & Resize
      enableDrag(bar, t, start);

      elBars.appendChild(bar);
    });
    elBars.style.minHeight = (tasks.length*40) + 'px';
  }

  function showTip(e, t){
    tooltip.innerHTML = `<b>${t.name}</b><br>Эхлэх: ${t.start}<br>Дуусах: ${t.end}<br>Явц: ${t.progress||0}%`;
    tooltip.style.display='block';
    moveTip(e);
  }
  function moveTip(e){
    const pad = 12; tooltip.style.left = (e.clientX + pad) + 'px'; tooltip.style.top = (e.clientY + pad) + 'px';
  }
  function hideTip(){ tooltip.style.display='none'; }

  // ======= Drag & Resize logic =======
  function enableDrag(bar, task, start){
    let mode = null; // 'move' | 'left' | 'right'
    let originX = 0; let startSnapshot = null;

    const onDown = (e)=>{
      const target = e.target;
      if (target.classList.contains('handle')) {
        mode = target.classList.contains('left') ? 'left' : 'right';
      } else {
        mode = 'move';
      }
      originX = e.clientX;
      startSnapshot = { start: parseISO(task.start), end: parseISO(task.end) };
      bar.setPointerCapture(e.pointerId);
      e.preventDefault();
    };

    const onMove = (e)=>{
      if(!mode) return;
      const dx = e.clientX - originX; // pixels
      const dDays = Math.round(dx / DAY_WIDTH);
      if (dDays === 0) return;

      if (mode === 'move'){
        const newStart = addDays(startSnapshot.start, dDays);
        const newEnd = addDays(startSnapshot.end, dDays);
        task.start = fmtISO(newStart);
        task.end   = fmtISO(newEnd);
      } else if (mode === 'left'){
        const newStart = addDays(startSnapshot.start, dDays);
        if (newStart <= startSnapshot.end) task.start = fmtISO(newStart);
      } else if (mode === 'right'){
        const newEnd = addDays(startSnapshot.end, dDays);
        if (newEnd >= startSnapshot.start) task.end = fmtISO(newEnd);
      }
      refresh();
    };

    const onUp = (e)=>{ mode = null; bar.releasePointerCapture(e.pointerId); };

    bar.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }

  // ======= Build & Refresh =======
  function refresh(){
    const {start, end} = computeRange();
    buildDays(start, end);
    buildLabels();
    renderBars(start);
    buildTodayLine(start, end);
  }

  // ======= Form handling =======
  document.getElementById('taskForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const start = form.start.value;
    const end = form.end.value;
    const progress = Number(form.progress.value || 0);
    if(!name || !start || !end) return;
    const id = tasks.length ? Math.max(...tasks.map(t=>t.id))+1 : 1;
    tasks.push({ id, name, start, end, progress });
    refresh();
    form.reset();
  });

  // Sync vertical scroll between labels and rows
  const labels = document.getElementById('labels');
  const rowsDiv = document.getElementById('rows');
  labels.addEventListener('scroll', ()=>{ rowsDiv.scrollTop = labels.scrollTop; });
  rowsDiv.addEventListener('scroll', ()=>{ labels.scrollTop = rowsDiv.scrollTop; });

  // Initial render
  refresh();

  // Scroll to today if in range
  setTimeout(()=>{
    const { start } = computeRange();
    const todayX = diffDays(startOfDay(new Date()), start) * DAY_WIDTH - 120; // left padding
    document.getElementById('timelineScroller').scrollLeft = Math.max(0, todayX);
  }, 0);
})();
