'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [2519, 1248],
  {
    32600: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var e = t(54306),
        f = t.n(e),
        d = t(40882),
        u = t(22374),
        o = t(10782),
        s = t(52454),
        c = function (r) {
          var v = (0, d.tx)(),
            l = (0, d.WF)(),
            h = l.loading,
            D = (0, d.TH)(),
            m = D.pathname,
            j = (0, u.useState)(!1),
            x = f()(j, 2),
            C = x[0],
            E = x[1];
          return (
            (0, u.useEffect)(
              function () {
                E(!0), console.log(m);
              },
              [m]
            ),
            (0, u.useEffect)(
              function () {
                h || E(!1);
              },
              [h]
            ),
            (0, s.jsxs)('div', {
              className: 'dumi-default-content',
              'data-no-sidebar': !v || void 0,
              children: [
                m !== '/' &&
                  m !== '/zh-CN' &&
                  C &&
                  (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)('div', {
                      style: { width: '600px' },
                      children: [
                        (0, s.jsx)(o.Skeleton, { loading: !0, title: !0 }),
                        (0, s.jsx)('div', {
                          style: { width: '1000px' },
                          children: (0, s.jsx)(o.Skeleton, {
                            loading: !0,
                            title: !0,
                            avatar: !0,
                            row: 4,
                            width: ['50%', '60%', '70%', '80%'],
                          }),
                        }),
                        (0, s.jsx)('div', {
                          style: { width: '900px' },
                          children: (0, s.jsx)(o.Skeleton, { loading: !0, title: !0 }),
                        }),
                        (0, s.jsx)('div', {
                          style: { width: '1100px' },
                          children: (0, s.jsx)(o.Skeleton, {
                            loading: !0,
                            title: !0,
                            avatar: !0,
                            row: 4,
                            width: ['50%', '60%', '70%', '80%'],
                          }),
                        }),
                        (0, s.jsx)('div', {
                          style: { width: '1100px' },
                          children: (0, s.jsx)(o.Skeleton, {
                            loading: !0,
                            title: !0,
                            avatar: !0,
                            row: 4,
                            width: ['50%', '60%', '70%', '80%'],
                          }),
                        }),
                      ],
                    }),
                  }),
                r.children,
              ],
            })
          );
        },
        i = c;
    },
    87795: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var e = t(40882),
        f = t(22374),
        d = t(10782),
        u = t(52454),
        o = function () {
          var i = (0, e.WF)(),
            a = i.themeConfig;
          return a.footer
            ? (0, u.jsx)(d.LazyLoad, {
                children: (0, u.jsx)('div', {
                  className: 'dumi-default-footer',
                  children: a.footer,
                }),
              })
            : null;
        },
        s = o;
    },
    69861: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var e = t(40882),
        f = t(22374),
        d = t(52454),
        u = function () {
          var c = (0, e.TH)(),
            i = c.pathname,
            a = (0, e.tx)();
          return a
            ? (0, d.jsx)(d.Fragment, {
                children:
                  i !== '/' &&
                  i !== '/zh-CN' &&
                  (0, d.jsx)('div', {
                    className: 'dumi-default-sidebar',
                    children: a.map(function (r, v) {
                      return (0, d.jsxs)(
                        'dl',
                        {
                          className: 'dumi-default-sidebar-group',
                          children: [
                            r.title && (0, d.jsx)('dt', { children: r.title }),
                            r.children.map(function (l) {
                              return (0,
                              d.jsx)('dd', { children: (0, d.jsx)(e.OL, { to: l.link, title: l.title, end: !0, children: l.title }) }, l.link);
                            }),
                          ],
                        },
                        String(v)
                      );
                    }),
                  }),
              })
            : null;
        },
        o = u;
    },
    32030: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(41601);
    },
    92401: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(50428);
    },
    26624: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(56550);
    },
    97847: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(21430);
    },
    5460: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(7470);
    },
    29567: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(84255);
    },
    45416: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(74883);
    },
    98997: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(36763);
    },
    74647: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(47212);
    },
    6147: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(22178);
    },
    56064: function (_, n, t) {
      t.d(n, {
        ZP: function () {
          return e.ZP;
        },
      });
      var e = t(67089);
    },
    41067: function (_, n, t) {
      t.d(n, {
        Z: function () {
          return e.Z;
        },
      });
      var e = t(72444);
    },
  },
]);
