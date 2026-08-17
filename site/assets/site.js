/* Каркас страниц «Основы и эволюция кораблестроения»: шапка с группированной
   навигацией, подвал, общие SVG-маркеры стрелок. */
'use strict';
(function () {
  const me = document.currentScript;
  const root = (me && me.dataset.root) || './';
  const page = (me && me.dataset.page) || '';
  const logoSvg = `
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
    <rect x="1" y="1" width="28" height="28" rx="6" fill="#8a5a2b"/>
    <text x="15" y="22" text-anchor="middle" font-size="16">⚓</text>
  </svg>`;
  const nav = [
    { h: '', k: 'index', t: 'Обзор' },
    { t: 'Эпохи', h: 't-ancient', drop: [
      { h: 't-ancient', k: 't-ancient', t: '1. Древний мир' },
      { h: 't-middle', k: 't-middle', t: '2. Средневековье' },
      { h: 't-sail', k: 't-sail', t: '3. Эпоха паруса, XV–XIX вв.' },
      { h: 't-steam', k: 't-steam', t: '4. Пар, железо и сталь' },
      { h: 't-navy19', k: 't-navy19', t: '5. Броненосный флот XIX в.' },
      { h: 't-20century', k: 't-20century', t: '6. XX век: дредноуты и авианосцы' },
      { h: 't-sub', k: 't-sub', t: '7. Подводные лодки' },
      { h: 't-modern', k: 't-modern', t: '8. Современный флот' },
    ] },
    { t: 'Типы судов', h: 'types', drop: [
      { h: 'types', k: 'types', t: 'Классификация: общая картина' },
      { h: 'c-transport', k: 'c-transport', t: 'Транспортные суда' },
      { h: 'c-fishing', k: 'c-fishing', t: 'Промысловые суда' },
      { h: 'c-service', k: 'c-service', t: 'Служебно-вспомогательные' },
      { h: 'c-navy', k: 'c-navy', t: 'Боевые корабли' },
      { h: 'c-tech', k: 'c-tech', t: 'Технический флот' },
    ] },
    { h: 'sources', k: 'sources', t: 'Источники' },
  ];
  const navLink = (it) =>
    `<a href="${root}${it.h}" class="${page === it.k ? 'on' : ''}">${it.t}</a>`;
  const navHtml = nav.map((g) => {
    if (!g.drop) return navLink(g);
    const on = g.drop.some((it) => page === it.k) ? 'on' : '';
    return `<span class="nav-drop"><a href="${root}${g.h}" class="${on}">${g.t} ▾</a>`
      + `<span class="drop">${g.drop.map(navLink).join('')}</span></span>`;
  }).join('');
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="${root}">${logoSvg}<span>Эволюция кораблестроения</span></a>
    <nav class="top">${navHtml}</nav>
  </div>`;
  document.body.prepend(header);
  const onReady = (fn) => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn) : fn());
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `<div class="wrap">
    <div>Учебный сайт по курсам «Основы кораблестроения» и «Эволюция развития
    кораблестроения» · как и почему менялись корабли</div>
  </div>`;
  onReady(() => document.body.appendChild(footer));
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  defs.setAttribute('width', '0'); defs.setAttribute('height', '0');
  defs.style.position = 'absolute';
  defs.innerHTML = `<defs>
    <marker id="arrE" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
      <path d="M0,0 L10,4 L0,8 z" fill="#16161a"/></marker>
    <marker id="arrS" markerWidth="10" markerHeight="8" refX="1" refY="4" orient="auto">
      <path d="M10,0 L0,4 L10,8 z" fill="#16161a"/></marker>
  </defs>`;
  onReady(() => document.body.appendChild(defs));
})();
