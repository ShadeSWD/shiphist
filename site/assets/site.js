/* Данные каркаса страниц. Машинерия — assets/shell.js. */
'use strict';
(function () {
  const me = document.currentScript;
  const root = (me && me.dataset.root) || './';
  buildSiteShell({
    root,
    page: (me && me.dataset.page) || '',
    brand: 'Эволюция кораблестроения',
    logo: `
  <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
    <rect x="1" y="1" width="28" height="28" rx="6" fill="#8a5a2b"/>
    <text x="15" y="22" text-anchor="middle" font-size="16">⚓</text>
  </svg>`,
    nav: [
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
    ],
    footer: `<div>Учебный сайт по курсам «Основы кораблестроения» и «Эволюция развития
    кораблестроения» · как и почему менялись корабли</div>`,
    markers: `<marker id="arrE" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
      <path d="M0,0 L10,4 L0,8 z" fill="#16161a"/></marker>
    <marker id="arrS" markerWidth="10" markerHeight="8" refX="1" refY="4" orient="auto">
      <path d="M10,0 L0,4 L10,8 z" fill="#16161a"/></marker>`,
  });
})();
