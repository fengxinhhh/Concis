'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [852, 7828],
  {
    40852: function (e, o, c) {
      c.r(o),
        c.d(o, {
          default: function () {
            return a;
          },
        });
      var u = c(22374),
        d = c(67828),
        l = c(52454);
      function a(s) {
        var r = s.title,
          i = s.theme,
          f = s.colorList;
        return (0, l.jsxs)('div', {
          className: 'color-container',
          children: [
            (0, l.jsx)('span', { className: 'color-title', children: r }),
            (0, l.jsx)('div', {
              className: 'color-list',
              children: f.map(function (n, t) {
                return (0,
                l.jsxs)('div', { className: 'color-container-row', style: { background: n }, children: [(0, l.jsx)('div', { className: 'color-name', style: { color: t < 5 ? '#000000' : '#ffffff' }, children: ''.concat(i, '-').concat(t + 1) }), (0, l.jsx)('div', { className: 'color-val', style: { color: t < 5 ? '#000000' : '#ffffff' }, children: n })] }, n);
              }),
            }),
          ],
        });
      }
    },
    67828: function (e, o, c) {
      c.r(o);
    },
  },
]);
