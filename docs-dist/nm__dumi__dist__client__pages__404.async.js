'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [3065],
  {
    42073: function (r, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return c;
          },
        });
      var t = e(40882),
        a = e(22374),
        s = function () {
          var u = (0, t.YB)(),
            l = (0, t.bU)();
          return a.createElement(
            'div',
            { className: 'dumi-default-not-found' },
            a.createElement('h1', null, u.formatMessage({ id: '404.title' })),
            a.createElement(
              t.rU,
              { to: 'base' in l ? l.base : '/', replace: !0 },
              u.formatMessage({ id: '404.back' }),
              ' \u2192'
            )
          );
        },
        c = s;
    },
  },
]);
