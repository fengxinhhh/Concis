'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [1923],
  {
    28369: function (D, o, t) {
      t.r(o),
        t.d(o, {
          default: function () {
            return E;
          },
        });
      var c = t(54306),
        r = t.n(c),
        e = t(22374),
        n = t(40882),
        a = t(63654),
        _ = t(81443),
        m = t(46289),
        d = t(52454),
        h = {};
      function E() {
        var C = (0, n.pC)(),
          p = (0, e.useState)(!0),
          i = r()(p, 2),
          g = i[0],
          s = i[1],
          l = (0, e.useRef)(n.m8.location.pathname);
        return (
          (0, e.useEffect)(function () {
            return n.m8.listen(function (u) {
              u.location.pathname !== l.current &&
                ((l.current = u.location.pathname), s(!0), document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, d.jsx)(a.D.Provider, {
            value: {
              pkg: { name: 'concis-ui', license: 'MIT' },
              entryExports: h,
              demos: _.DE,
              components: _.wx,
              locales: m.k,
              loading: g,
              setLoading: s,
              themeConfig: {
                footer:
                  'Copyright \xA9 2022-2022 Concis. All Rights Reserved. Concis \u7248\u6743\u6240\u6709. \u82CFICP\u59072022018060\u53F7',
                prefersColor: { default: 'light', switch: !0 },
                name: 'Concis',
                carrier: 'dumi',
                hd: !0,
                rtl: !0,
                logo: 'https://concis.org.cn/images/concis-logo.png',
                nav: {
                  'zh-CN': [
                    { title: '\u6307\u5357', link: '/guide/introducezh-CN' },
                    { title: '\u7EC4\u4EF6', link: '/components/buttonzh-CN' },
                    { title: 'GitHub', link: 'https://github.com/fengxinhhh/Concis' },
                  ],
                  'en-US': [
                    { title: '\u6307\u5357', link: '/guide/introduce' },
                    { title: '\u7EC4\u4EF6', link: '/components/button' },
                    { title: 'GitHub', link: 'https://github.com/fengxinhhh/Concis' },
                  ],
                },
              },
            },
            children: C,
          })
        );
      }
    },
  },
]);
