'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [2433, 1248],
  {
    56906: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(40882),
        n = a(52454),
        e = function () {
          var s = (0, o.bU)(),
            d = s.id,
            i = (0, t.useMemo)(
              function () {
                return d === 'zh-CN'
                  ? [
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                        title: '\u5F00\u7BB1\u5373\u7528',
                        txt: '\u7B80\u5355\u6613\u7528\uFF0C\u964D\u4F4E\u4F7F\u7528\u8005\u7684\u4EE3\u7801\u91CF',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
                        title: 'TypeScript',
                        txt: '\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6',
                      },
                      {
                        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
                        title: '\u9884\u8BBE\u884C\u4E3A',
                        txt: '\u66F4\u5C11\u7684\u4EE3\u7801\uFF0C\u66F4\u5C11\u7684 Bug',
                      },
                      {
                        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
                        title: '\u7B80\u5355\u6613\u7528',
                        txt: '\u5728 Ant Design \u4E0A\u8FDB\u884C\u4E86\u81EA\u5DF1\u7684\u5C01\u88C5\uFF0C\u66F4\u52A0\u6613\u7528',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
                        title: '\u81EA\u5B9A\u4E49\u4E3B\u9898',
                        txt: '\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u6EE1\u8DB3\u591A\u6837\u5316\u7684\u4EA7\u54C1\u9700\u6C42',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png',
                        title: '\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u652F\u6301',
                        txt: 'concis\u989D\u5916\u652F\u6301\u79FB\u52A8\u7AEF\u7EC4\u4EF6\uFF0C\u63D0\u4F9Bpc/mobile\u53CC\u7AEF\u652F\u6301',
                      },
                    ]
                  : [
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                        title: 'Out of the box',
                        txt: 'Easy to use and reduce the users code',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
                        title: 'TypeScript',
                        txt: 'Use TypeScript development to provide a complete type definition file',
                      },
                      {
                        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
                        title: 'Preset behavior',
                        txt: 'Less code, fewer bugs',
                      },
                      {
                        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
                        title: 'Easy to use',
                        txt: 'Encapsulated on Ant Design to make it easier to use',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
                        title: 'Custom theme',
                        txt: 'Support custom themes to meet diverse product needs',
                      },
                      {
                        img: 'https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png',
                        title: 'Mobile component support',
                        txt: 'concis additionally supports mobile components and provides pc/mobile dual-end support',
                      },
                    ];
              },
              [d]
            );
          return (0, n.jsx)('div', {
            className: 'homePage',
            children: (0, n.jsx)('div', {
              className: 'main',
              children: (0, n.jsx)('div', {
                className: 'group',
                children: (0, n.jsx)('ul', {
                  className: 'features',
                  children: i.map(function (r) {
                    return (0,
                    n.jsxs)('li', { children: [(0, n.jsx)('p', { children: (0, n.jsx)('img', { src: r.img, style: { width: 84, height: 84 } }) }), (0, n.jsx)('p', { children: r.title }), (0, n.jsx)('p', { children: r.txt })] }, r.title);
                  }),
                }),
              }),
            }),
          });
        };
    },
    60421: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(87953),
        n = a(5922),
        e = a(19266),
        s = a(52454);
      function d() {
        (0, n.Z)('Button');
        var i = { margin: '8px' },
          r = { display: 'flex', flexWrap: 'wrap' };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u57FA\u672C\u4F7F\u7528',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, {
                  type: 'primary',
                  ghost: !0,
                  children: '\u57FA\u7840\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, { type: 'danger', children: '\u5371\u9669\u6309\u94AE' }),
                (0, s.jsx)(o.z, { type: 'warning', children: '\u8B66\u544A\u6309\u94AE' }),
                (0, s.jsx)(o.z, { type: 'text', children: '\u6587\u672C\u6309\u94AE' }),
              ],
            }),
            (0, s.jsx)('p', { className: 'mobile-demo-title', children: '\u957F\u6309\u94AE' }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, { type: 'primary', size: 'small', children: 'small' }),
                (0, s.jsx)(o.z, { type: 'danger', size: 'middle', children: 'big' }),
                (0, s.jsx)(o.z, { type: 'warning', size: 'large', children: 'large' }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u5B57\u4F53\u6309\u94AE',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, { type: 'primary', children: 'PPPPPP' }),
                (0, s.jsx)(o.z, { type: 'danger', shape: 'round', children: 'DDDDDDDD' }),
                (0, s.jsx)(o.z, { type: 'warning', shape: 'circle', children: 'W' }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u7981\u7528\u6309\u94AE',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, {
                  type: 'primary',
                  disabled: !0,
                  children: '\u7981\u7528\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'danger',
                  disabled: !0,
                  children: '\u7981\u7528\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'warning',
                  disabled: !0,
                  children: '\u7981\u7528\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'text',
                  disabled: !0,
                  children: '\u7981\u7528\u6309\u94AE',
                }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, {
                  type: 'primary',
                  dashed: !0,
                  ghost: !0,
                  children: '\u865A\u7EBF\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'danger',
                  dashed: !0,
                  ghost: !0,
                  children: '\u865A\u7EBF\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'warning',
                  dashed: !0,
                  ghost: !0,
                  children: '\u865A\u7EBF\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'text',
                  dashed: !0,
                  ghost: !0,
                  children: '\u865A\u7EBF\u6309\u94AE',
                }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, {
                  type: 'primary',
                  loading: !0,
                  children: '\u52A0\u8F7D\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'danger',
                  loading: !0,
                  children: '\u52A0\u8F7D\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'warning',
                  loading: !0,
                  children: '\u52A0\u8F7D\u6309\u94AE',
                }),
                (0, s.jsx)(o.z, {
                  type: 'text',
                  loading: !0,
                  children: '\u52A0\u8F7D\u6309\u94AE',
                }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u5371\u9669\u6309\u94AE',
            }),
            (0, s.jsxs)('div', {
              style: r,
              children: [
                (0, s.jsx)(o.z, { type: 'primary', danger: !0, children: 'primary' }),
                (0, s.jsx)(o.z, { type: 'danger', danger: !0, ghost: !0, children: 'ghost' }),
                (0, s.jsx)(o.z, {
                  type: 'warning',
                  danger: !0,
                  ghost: !0,
                  dashed: !0,
                  children: 'dashed',
                }),
                (0, s.jsx)(o.z, { type: 'text', danger: !0, children: 'text' }),
              ],
            }),
          ],
        });
      }
    },
    52150: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(32968),
        n = a(39457),
        e = a(19266),
        s = a(52454);
      function d() {
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u57FA\u672C\u4F7F\u7528',
            }),
            (0, s.jsx)(n.X, { children: '\u7B2C\u4E00\u9879' }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u7981\u7528\u72B6\u6001',
            }),
            (0, s.jsx)(n.X, { disabled: !0, children: '\u7B2C\u4E00\u9879' }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u5355\u9009\u6846\u7EC4',
            }),
            (0, s.jsxs)(n.X.Group, {
              block: !0,
              defaultValue: [1],
              children: [
                (0, s.jsx)(n.X, { value: 1, block: !0, children: '\u7B2C\u4E00\u9879' }),
                (0, s.jsx)(n.X, { value: 2, children: '\u7B2C\u4E8C\u9879' }),
                (0, s.jsx)(n.X, { value: 3, disabled: !0, children: '\u7B2C\u4E8C\u9879' }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u914D\u7F6E\u5F0F\u5355\u9009\u6846\u7EC4',
            }),
            (0, s.jsx)(n.X.Group, {
              block: !0,
              options: [
                { value: 1, label: '\u7B2C\u4E00\u9879' },
                { value: 2, label: '\u7B2C\u4E8C\u9879' },
                { value: 3, label: '\u7B2C\u4E09\u9879', disabled: !0 },
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u5360\u6EE1\u6574\u884C\u5BBD\u5EA6',
            }),
            (0, s.jsx)(n.X, { block: !0, children: '\u7B2C\u4E00\u9879' }),
            (0, s.jsxs)(n.X.Group, {
              block: !0,
              children: [
                (0, s.jsx)(n.X, { value: 1, children: '\u7B2C\u4E00\u9879' }),
                (0, s.jsx)(n.X, { value: 2, children: '\u7B2C\u4E8C\u9879' }),
                (0, s.jsx)(n.X, { value: 3, children: '\u7B2C\u4E8C\u9879' }),
              ],
            }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u81EA\u5B9A\u4E49\u5927\u5C0F',
            }),
            (0, s.jsx)(n.X, { size: 'small', block: !0, children: '\u5C0F' }),
            (0, s.jsx)(n.X, { size: 'middle', block: !0, children: '\u4E2D' }),
            (0, s.jsx)(n.X, { size: 'large', block: !0, children: '\u5927' }),
            (0, s.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u81EA\u5B9A\u4E49\u56FE\u6807',
            }),
            (0, s.jsx)(n.X, {
              icon: (0, s.jsx)(o.Z, {}),
              block: !0,
              children: '\u7B2C\u4E00\u9879',
            }),
            (0, s.jsx)(n.X, {
              icon: function (r) {
                return r
                  ? (0, s.jsx)(o.Z, { style: { color: 'var(--ccsm-color-primary)' } })
                  : (0, s.jsx)(o.Z, {});
              },
              block: !0,
              children: '\u7B2C\u4E00\u9879',
            }),
          ],
        });
      }
    },
    72256: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(41310),
        s = a(19266),
        d = a(52454);
      function i() {
        var r = (0, n.useState)('light'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = (0, n.useState)('middle'),
          _ = o()(u, 2),
          P = _[0],
          L = _[1];
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u57FA\u672C\u4F7F\u7528',
            }),
            (0, d.jsxs)(e.iV, {
              theme: h,
              componentSize: P,
              children: [
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return x('light');
                  },
                  children: '\u6D45\u8272\u6A21\u5F0F',
                }),
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return x('dark');
                  },
                  children: '\u6DF1\u8272\u6A21\u5F0F',
                }),
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return x('auto');
                  },
                  children: '\u81EA\u52A8\u6A21\u5F0F',
                }),
                (0, d.jsx)('br', {}),
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return L('large');
                  },
                  children: '\u5927\u7EC4\u4EF6',
                }),
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return L('middle');
                  },
                  children: '\u4E2D\u7EC4\u4EF6',
                }),
                (0, d.jsx)(e.zx, {
                  type: 'primary',
                  onClick: function () {
                    return L('small');
                  },
                  children: '\u5C0F\u7EC4\u4EF6',
                }),
              ],
            }),
          ],
        });
      }
    },
    55405: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(32968),
        n = a(74129),
        e = a(5922),
        s = a(19266),
        d = a(52454);
      function i() {
        return (
          (0, e.Z)('Button'),
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u57FA\u672C\u4F7F\u7528',
              }),
              (0, d.jsx)(n.Y, { children: '\u7B2C\u4E00\u9879' }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u7981\u7528\u72B6\u6001',
              }),
              (0, d.jsx)(n.Y, { disabled: !0, children: '\u7B2C\u4E00\u9879' }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u5355\u9009\u6846\u7EC4',
              }),
              (0, d.jsxs)(n.Y.Group, {
                block: !0,
                defaultValue: 1,
                children: [
                  (0, d.jsx)(n.Y, { value: 1, block: !0, children: '\u7B2C\u4E00\u9879' }),
                  (0, d.jsx)(n.Y, { value: 2, children: '\u7B2C\u4E8C\u9879' }),
                  (0, d.jsx)(n.Y, { value: 3, disabled: !0, children: '\u7B2C\u4E8C\u9879' }),
                ],
              }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u914D\u7F6E\u5F0F\u5355\u9009\u6846\u7EC4',
              }),
              (0, d.jsx)(n.Y.Group, {
                block: !0,
                options: [
                  { value: 1, label: '\u7B2C\u4E00\u9879' },
                  { value: 2, label: '\u7B2C\u4E8C\u9879' },
                  { value: 3, label: '\u7B2C\u4E09\u9879', disabled: !0 },
                ],
              }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u5360\u6EE1\u6574\u884C\u5BBD\u5EA6',
              }),
              (0, d.jsx)(n.Y, { block: !0, children: '\u7B2C\u4E00\u9879' }),
              (0, d.jsxs)(n.Y.Group, {
                block: !0,
                children: [
                  (0, d.jsx)(n.Y, { value: 1, children: '\u7B2C\u4E00\u9879' }),
                  (0, d.jsx)(n.Y, { value: 2, children: '\u7B2C\u4E8C\u9879' }),
                  (0, d.jsx)(n.Y, { value: 3, children: '\u7B2C\u4E8C\u9879' }),
                ],
              }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u81EA\u5B9A\u4E49\u5927\u5C0F',
              }),
              (0, d.jsx)(n.Y, { size: 'small', block: !0, children: '\u5C0F' }),
              (0, d.jsx)(n.Y, { size: 'middle', block: !0, children: '\u4E2D' }),
              (0, d.jsx)(n.Y, { size: 'large', block: !0, children: '\u5927' }),
              (0, d.jsx)('p', {
                className: 'mobile-demo-title',
                children: '\u81EA\u5B9A\u4E49\u56FE\u6807',
              }),
              (0, d.jsx)(n.Y, {
                icon: (0, d.jsx)(o.Z, {}),
                block: !0,
                children: '\u7B2C\u4E00\u9879',
              }),
              (0, d.jsx)(n.Y, {
                icon: function (c) {
                  return c
                    ? (0, d.jsx)(o.Z, { style: { color: 'var(--ccsm-color-primary)' } })
                    : (0, d.jsx)(o.Z, {});
                },
                block: !0,
                children: '\u7B2C\u4E00\u9879',
              }),
            ],
          })
        );
      }
    },
    37853: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(41310),
        n = a(19266),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u6C34\u5E73\u65B9\u5411\u7684\u95F4\u8DDD',
            }),
            (0, e.jsxs)(o.T, {
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE1' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE2' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE3' }),
              ],
            }),
            (0, e.jsx)('p', { className: 'mobile-demo-title', children: '\u6362\u884C' }),
            (0, e.jsxs)(o.T, {
              wrap: !0,
              size: [20, 10],
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE1' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE2' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE3' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE4' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE5' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE6' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE7' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE8' }),
              ],
            }),
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u5782\u76F4\u65B9\u5411\u7684\u95F4\u8DDD',
            }),
            (0, e.jsxs)(o.T, {
              direction: 'vertical',
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE1' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE2' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE3' }),
              ],
            }),
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u81EA\u5B9A\u4E49\u95F4\u8DDD\u5927\u5C0F',
            }),
            (0, e.jsxs)(o.T, {
              size: 33,
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE1' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE2' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '\u6309\u94AE3' }),
              ],
            }),
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u6E32\u67D3\u4E3A\u5757\u7EA7\u5143\u7D20',
            }),
            (0, e.jsxs)(o.T, {
              block: !0,
              direction: 'vertical',
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', block: !0, children: '\u6309\u94AE1' }),
                (0, e.jsx)(o.zx, { type: 'primary', block: !0, children: '\u6309\u94AE2' }),
                (0, e.jsx)(o.zx, { type: 'primary', block: !0, children: '\u6309\u94AE3' }),
              ],
            }),
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F',
            }),
            (0, e.jsxs)(o.T, {
              block: !0,
              justify: 'center',
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', children: '1' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '22' }),
                (0, e.jsx)(o.zx, { type: 'primary', children: '333' }),
              ],
            }),
            (0, e.jsx)('p', {
              className: 'mobile-demo-title',
              children: '\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F',
            }),
            (0, e.jsxs)(o.T, {
              align: 'center',
              children: [
                (0, e.jsx)(o.zx, { type: 'primary', size: 'small', children: '1' }),
                (0, e.jsx)(o.zx, { type: 'primary', size: 'middle', children: '22' }),
                (0, e.jsx)(o.zx, { type: 'primary', size: 'large', children: '333' }),
              ],
            }),
          ],
        });
      }
    },
    66749: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(5922),
        d = a(52454);
      function i() {
        var r = (0, n.useState)('top'),
          c = o()(r, 2),
          h = c[0],
          x = c[1];
        return (
          (0, s.Z)('button'),
          (0, d.jsxs)('div', {
            children: [
              h === 'top' &&
                (0, d.jsx)(e.Affix, {
                  affixType: 'scroll',
                  offsetTop: 100,
                  offsetLeft: 600,
                  style: { padding: '10px 30px', background: '#325dff' },
                  children: (0, d.jsx)('div', { children: 'top Affix' }),
                }),
              h === 'bottom' &&
                (0, d.jsx)(e.Affix, {
                  affixType: 'scroll',
                  offsetBottom: 100,
                  offsetLeft: 600,
                  style: { padding: '10px 30px', background: '#325dff' },
                  children: (0, d.jsx)('div', { children: 'bottom Affix' }),
                }),
              (0, d.jsx)('div', { style: { marginTop: '30px' } }),
              (0, d.jsxs)(e.Button, {
                width: 200,
                handleClick: function () {
                  return x(h === 'bottom' ? 'top' : 'bottom');
                },
                children: ['toggle to ', h === 'bottom' ? 'top' : 'bottom'],
              }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
              (0, d.jsx)('p', { children: 'Affix' }),
            ],
          })
        );
      }
    },
    4643: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Alert'),
          (0, e.jsx)('div', {
            children: (0, e.jsx)(o.Alert, { content: 'Here is an example text' }),
          })
        );
      }
    },
    23434: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '15px 0' };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Alert, { type: 'info', content: 'Here is an info text', style: s }),
            (0, n.jsx)(o.Alert, { type: 'success', content: 'Here is an success text', style: s }),
            (0, n.jsx)(o.Alert, { type: 'warning', content: 'Here is an warning text', style: s }),
            (0, n.jsx)(o.Alert, { type: 'error', content: 'Here is an error text', style: s }),
          ],
        });
      }
    },
    53416: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '15px 0' };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Alert, {
              type: 'info',
              content: 'Here is an info text',
              style: s,
              showClear: !0,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'success',
              content: 'Here is an success text',
              style: s,
              showClear: !0,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'warning',
              content: 'Here is an warning text',
              style: s,
              showClear: !0,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'error',
              content: 'Here is an error text',
              style: s,
              showClear: !0,
            }),
          ],
        });
      }
    },
    57306: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '15px 0' };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Alert, {
              type: 'info',
              content: 'Here is an info text',
              style: s,
              showClear: !0,
              closeElement: 'Close',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'success',
              content: 'Here is an success text',
              style: s,
              showClear: !0,
              closeElement: '\u5173\u95ED',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'warning',
              content: 'Here is an warning text',
              style: s,
              showClear: !0,
              closeElement: '\u53D6\u6D88',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'error',
              content: 'Here is an error text',
              style: s,
              showClear: !0,
            }),
          ],
        });
      }
    },
    71276: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '15px 0' };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Alert, {
              type: 'info',
              content: 'Here is an info text',
              style: s,
              title: 'Info',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'success',
              content: 'Here is an success text',
              style: s,
              title: 'Success',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'warning',
              content: 'Here is an warning text',
              style: s,
              title: 'Warning',
            }),
            (0, n.jsx)(o.Alert, {
              type: 'error',
              content: 'Here is an error text',
              style: s,
              title: 'Error',
            }),
          ],
        });
      }
    },
    45677: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '15px 0' };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Alert, {
              type: 'info',
              content: 'Here is an info text',
              style: s,
              showIcon: !1,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'success',
              content: 'Here is an success text',
              style: s,
              showIcon: !1,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'warning',
              content: 'Here is an warning text',
              style: s,
              showIcon: !1,
            }),
            (0, n.jsx)(o.Alert, {
              type: 'error',
              content: 'Here is an error text',
              style: s,
              showIcon: !1,
            }),
          ],
        });
      }
    },
    241: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(43310),
        n = a(10782),
        e = a(5922),
        s = a(52454);
      function d() {
        return (
          (0, e.Z)('Avatar'),
          (0, s.jsxs)('div', {
            style: { display: 'flex' },
            children: [
              (0, s.jsx)(n.Avatar, { style: { marginRight: '20px' }, children: 'A' }),
              (0, s.jsx)(n.Avatar, {
                style: { marginRight: '20px', background: '#3370ff' },
                children: (0, s.jsx)(o.Z, { style: { fontSize: '20px' } }),
              }),
              (0, s.jsx)(n.Avatar, {
                style: { marginRight: '20px', background: '#14a9f8' },
                children: 'View',
              }),
              (0, s.jsx)(n.Avatar, {
                style: { marginRight: '20px', background: '#00d0b8' },
                children: 'React',
              }),
              (0, s.jsx)(n.Avatar, {
                children: (0, s.jsx)('img', {
                  src: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
                }),
              }),
            ],
          })
        );
      }
    },
    79998: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(43310),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, e.jsx)(n.Avatar, { style: { marginRight: '20px' }, size: 64, children: 'A' }),
            (0, e.jsx)(n.Avatar, {
              style: { marginRight: '20px', background: '#3370ff' },
              size: 64,
              children: (0, e.jsx)(o.Z, { style: { fontSize: '20px' } }),
            }),
            (0, e.jsx)(n.Avatar, {
              style: { marginRight: '20px', background: '#14a9f8' },
              shape: 'square',
              size: 64,
              children: 'View',
            }),
            (0, e.jsx)(n.Avatar, {
              style: { marginRight: '20px', background: '#00d0b8' },
              shape: 'square',
              children: 'React',
            }),
            (0, e.jsx)(n.Avatar, {
              children: (0, e.jsx)('img', {
                src: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
              }),
            }),
          ],
        });
      }
    },
    73568: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(43310),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(n.AvatarGroup, {
          size: 50,
          groupStyle: { margin: '0 10px' },
          children: [
            (0, e.jsx)(n.Avatar, { children: 'A' }),
            (0, e.jsx)(n.Avatar, {
              style: { background: '#3370ff' },
              children: (0, e.jsx)(o.Z, { style: { fontSize: '20px' } }),
            }),
            (0, e.jsx)(n.Avatar, {
              style: { background: '#14a9f8' },
              shape: 'square',
              children: 'View',
            }),
            (0, e.jsx)(n.Avatar, {
              style: { background: '#00d0b8' },
              shape: 'square',
              children: 'React',
            }),
            (0, e.jsx)(n.Avatar, {
              children: (0, e.jsx)('img', {
                src: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
              }),
            }),
          ],
        });
      }
    },
    69257: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(23848),
        n = a(33067),
        e = a(43310),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = function () {
          console.log('click!');
        };
        return (0, d.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, d.jsx)(s.Avatar, {
              size: 54,
              style: { marginRight: '20px' },
              triggerType: 'mask',
              triggerIcon: (0, d.jsx)(o.Z, { style: { fontSize: '20px' } }),
              triggerClick: r,
              children: 'A',
            }),
            (0, d.jsx)(s.Avatar, {
              size: 54,
              style: { marginRight: '20px', background: '#3370ff' },
              triggerIcon: (0, d.jsx)(n.Z, { style: { color: '#1370ff', fontSize: '12px' } }),
              triggerClick: r,
              children: (0, d.jsx)(e.Z, { style: { fontSize: '20px' } }),
            }),
            (0, d.jsx)(s.Avatar, {
              size: 54,
              style: { marginRight: '20px', background: '#14a9f8' },
              triggerIcon: (0, d.jsx)(o.Z, { style: { color: '#14a9f8', fontSize: '12px' } }),
              triggerClick: r,
              children: 'View',
            }),
            (0, d.jsx)(s.Avatar, {
              size: 54,
              shape: 'square',
              style: { marginRight: '20px', background: '#00d0b8' },
              triggerIcon: (0, d.jsx)(o.Z, { style: { color: '#00d0b8', fontSize: '12px' } }),
              triggerClick: r,
              children: 'React',
            }),
            (0, d.jsx)(s.Avatar, {
              size: 54,
              triggerType: 'mask',
              triggerIcon: (0, d.jsx)(o.Z, { style: { fontSize: '20px' } }),
              triggerClick: r,
              children: (0, d.jsx)('img', {
                src: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
              }),
            }),
          ],
        });
      }
    },
    84686: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.AvatarGroup, {
          size: 50,
          groupStyle: { margin: '0 10px' },
          children: [
            (0, n.jsx)(o.Avatar, { style: { background: '#3370ff' }, children: 'React' }),
            (0, n.jsx)(o.Avatar, { style: { background: '#14a9f8' }, children: 'ReactUI' }),
            (0, n.jsx)(o.Avatar, { style: { background: '#00d0b8' }, children: 'ReactViewUI' }),
          ],
        });
      }
    },
    85464: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('BackTop'),
          (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)('div', {
              style: { fontSize: 16, padding: 20 },
              children: [
                (0, e.jsx)('div', {
                  style: { height: 600 },
                  children: '\u8BA9\u6EDA\u52A8\u6761\u98DE\u4E00\u4F1A\u513F',
                }),
                (0, e.jsx)(o.BackTop, { visibilityHeight: 200 }),
              ],
            }),
          })
        );
      }
    },
    21451: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          style: { fontSize: 16, padding: 20 },
          children: [
            (0, n.jsxs)('div', {
              style: { height: 600 },
              children: [
                '\u8BA9\u6EDA\u52A8\u6761\u98DE\u4E00\u4F1A\u513F',
                (0, n.jsx)('span', {
                  role: 'img',
                  'aria-labelledby': 'earth',
                  children: '\u2B07\uFE0F',
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                '\u70B9\u51FB\u5C0F\u706B\u7BAD\uFF0C\u56DE\u5230',
                (0, n.jsx)('span', {
                  role: 'img',
                  'aria-labelledby': 'earth',
                  children: '\u5730\u7403\u{1F30D}',
                }),
              ],
            }),
            (0, n.jsx)(o.BackTop, {
              visibilityHeight: 200,
              children: (0, n.jsx)('svg', {
                className: 'icon',
                viewBox: '0 0 1024 1024',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
                width: '40',
                height: '40',
                children: (0, n.jsx)('path', {
                  d: 'M737.706043 569.769728c3.148713-19.85828 4.894474-39.334867 4.894474-58.271148 0-215.3333-203.478298-423.12381-212.144678-431.849542-5.757121-5.836939-13.599739-9.106402-21.763676-9.106402l-0.080841 0c-8.18338 0.020466-16.047488 3.349281-21.784142 9.227152-8.625448 8.765641-210.67828 217.358423-210.67828 431.728792 0 18.554588 1.664919 37.631062 4.713348 57.108672-44.591591 42.764989-70.025866 101.499695-70.025866 164.202783l0 63.507406c0 17.150612 13.780865 31.051203 30.79026 31.051203 16.989953 0 30.770817-13.900591 30.770817-31.051203l0-63.507406c0-32.496112 9.447163-63.48694 26.557866-89.925079 9.30697 28.264741 21.443381 57.229422 36.426631 86.834694 5.275143 10.390651 15.84692 16.930601 27.40107 16.930601l115.13832-0.020466 0 49.686632c0 17.150612 13.760398 31.051203 30.770817 31.051203 17.009396 0 30.769794-13.900591 30.769794-31.051203l0-49.686632 116.341728 0c11.533684 0 22.084994-6.519484 27.360138-16.868179 14.803147-29.086455 26.879184-57.611116 36.18513-85.47165 16.528442 26.15673 25.635867 56.686047 25.635867 88.520079l0 63.507406c0 17.150612 13.800307 31.051203 30.791284 31.051203 16.989953 0 30.79026-13.900591 30.79026-31.051203l0-63.507406C806.568411 670.807912 781.534248 612.4549 737.706043 569.769728zM636.709815 684.507936l-97.245811 0.020466 0-49.706075c0-17.150612-13.760398-31.051203-30.769794-31.051203-17.010419 0-30.770817 13.900591-30.770817 31.051203l0 49.706075-96.001471 0c-17.551748-37.290301-29.807886-73.054853-36.928051-107.055225-0.181125-2.366907-0.701988-4.712325-1.424442-7.001461-3.850701-20.338211-5.857405-40.036855-5.857405-58.973136 0-150.000316 120.67543-305.497832 171.123402-363.969549 50.789757 58.170864 172.20606 213.025745 172.20606 363.969549C681.039439 564.173267 666.155451 622.304222 636.709815 684.507936zM399.251611 424.543136c0 61.640895 49.706075 111.809505 110.805642 111.809505s110.805642-50.16861 110.805642-111.809505-49.706075-111.789039-110.805642-111.789039S399.251611 362.901217 399.251611 424.543136zM510.05623 374.876969c27.160593 0 49.245587 22.265096 49.245587 49.666166s-22.084994 49.686632-49.245587 49.686632c-27.15957 0-49.225121-22.285562-49.225121-49.686632S482.89666 374.876969 510.05623 374.876969zM338.734306 787.93247c-16.989953 0-30.79026 13.900591-30.79026 31.051203l0 103.423511c0 17.150612 13.800307 31.051203 30.79026 31.051203 16.989953 0 30.769794-13.900591 30.769794-31.051203L369.5041 818.98265C369.5041 801.833061 355.723236 787.93247 338.734306 787.93247zM678.652066 787.93247c-16.989953 0-30.769794 13.900591-30.769794 31.051203l0 103.423511c0 17.150612 13.780865 31.051203 30.769794 31.051203 17.010419 0 30.791284-13.900591 30.791284-31.051203L709.443349 818.98265C709.443349 801.833061 695.662485 787.93247 678.652066 787.93247z',
                  fill: '#325dff',
                }),
              }),
            }),
          ],
        });
      }
    },
    68577: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(11132),
        n = a(10782),
        e = a(5922),
        s = a(52454);
      function d() {
        return (
          (0, e.Z)('Badge'),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(n.Badge, {
                count: 9,
                style: { marginRight: '25px' },
                children: (0, s.jsx)(n.Avatar, { shape: 'square', children: 'Num' }),
              }),
              (0, s.jsx)(n.Badge, {
                style: { marginRight: '25px' },
                count: (0, s.jsx)(o.Z, { style: { color: '#7e7d7d' } }),
                dotStyle: { background: '#fff', width: '12px', height: '12px', padding: '0' },
                children: (0, s.jsx)(n.Avatar, { shape: 'square', children: 'Icon' }),
              }),
              (0, s.jsx)(n.Badge, {
                count: 9,
                dot: !0,
                dotStyle: { width: 10, height: 10 },
                children: (0, s.jsx)(n.Avatar, { shape: 'square', children: 'Dot' }),
              }),
            ],
          })
        );
      }
    },
    52733: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Badge, { count: 9, style: { marginRight: '25px' } }),
            (0, n.jsx)(o.Badge, {
              count: 2,
              style: { marginRight: '25px' },
              dotStyle: { background: '#E5E6EB', color: '#86909C' },
            }),
            (0, n.jsx)(o.Badge, { count: 16, style: { marginRight: '25px' } }),
            (0, n.jsx)(o.Badge, { maxCount: 99, count: 1e3, style: { marginRight: '25px' } }),
          ],
        });
      }
    },
    96145: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(11132),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)(n.Badge, {
              count: 9,
              dot: !0,
              offset: [-2, 0],
              style: { marginRight: '25px' },
              children: (0, e.jsx)('span', { style: { color: '#325DFF' }, children: 'Link' }),
            }),
            (0, e.jsx)(n.Badge, {
              count: 9,
              dot: !0,
              offset: [-2, -2],
              children: (0, e.jsx)(o.Z, {
                style: { color: '#888', fontSize: 18, verticalAlign: -3 },
              }),
            }),
          ],
        });
      }
    },
    4626: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(11132),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)(n.Badge, {
              text: 'HOT',
              style: { marginRight: '25px' },
              children: (0, e.jsx)(n.Avatar, {
                shape: 'square',
                children: (0, e.jsx)('span', { children: (0, e.jsx)(o.Z, {}) }),
              }),
            }),
            (0, e.jsx)(n.Badge, {
              text: 'NEW',
              children: (0, e.jsx)(n.Avatar, {
                shape: 'square',
                children: (0, e.jsx)('span', { children: (0, e.jsx)(o.Z, {}) }),
              }),
            }),
          ],
        });
      }
    },
    65116: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(11132),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)(n.Badge, {
              count: 100,
              maxCount: 10,
              style: { marginRight: '25px' },
              children: (0, e.jsx)(n.Avatar, {
                shape: 'square',
                children: (0, e.jsx)('span', { children: (0, e.jsx)(o.Z, {}) }),
              }),
            }),
            (0, e.jsx)(n.Badge, {
              count: 100,
              style: { marginRight: '25px' },
              children: (0, e.jsx)(n.Avatar, {
                shape: 'square',
                children: (0, e.jsx)('span', { children: (0, e.jsx)(o.Z, {}) }),
              }),
            }),
            (0, e.jsx)(n.Badge, {
              count: 1e3,
              maxCount: 999,
              children: (0, e.jsx)(n.Avatar, {
                shape: 'square',
                children: (0, e.jsx)('span', { children: (0, e.jsx)(o.Z, {}) }),
              }),
            }),
          ],
        });
      }
    },
    2364: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Breadcrumb'),
          (0, e.jsx)('div', {
            children: (0, e.jsxs)(o.Breadcrumb, {
              children: [
                (0, e.jsx)(o.Breadcrumb.Item, { children: 'Home' }),
                (0, e.jsx)(o.Breadcrumb.Item, { children: 'Menu' }),
                (0, e.jsx)(o.Breadcrumb.Item, { children: 'Introduce' }),
              ],
            }),
          })
        );
      }
    },
    13841: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(41896),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsx)('div', {
          children: (0, e.jsxs)(n.Breadcrumb, {
            separator: (0, e.jsx)(o.Z, {}),
            children: [
              (0, e.jsx)(n.Breadcrumb.Item, { children: 'Home' }),
              (0, e.jsx)(n.Breadcrumb.Item, { children: 'Menu' }),
              (0, e.jsx)(n.Breadcrumb.Item, { children: 'Introduce' }),
            ],
          }),
        });
      }
    },
    59886: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Breadcrumb, {
            style: { fontSize: 10 },
            children: [
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Home' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Menu' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Introduce' }),
            ],
          }),
        });
      }
    },
    49987: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Breadcrumb, {
            children: [
              (0, n.jsx)(o.Breadcrumb.Item, {
                children: (0, n.jsx)('a', {
                  href: '#',
                  style: { color: '#1890ff' },
                  children: 'Home',
                }),
              }),
              (0, n.jsx)(o.Breadcrumb.Item, {
                children: (0, n.jsx)(o.Button, { style: { height: 25 }, children: 'Menu' }),
              }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Introduce' }),
            ],
          }),
        });
      }
    },
    45685: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Breadcrumb, {
            maxCount: 3,
            children: [
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Home' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Menu' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Introduce' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'News' }),
              (0, n.jsx)(o.Breadcrumb.Item, { children: 'Channel' }),
            ],
          }),
        });
      }
    },
    31096: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Button');
        var d = { margin: '8px' };
        return (0, e.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, e.jsx)(o.Button, {
              type: 'primary',
              style: d,
              children: '\u57FA\u7840\u6309\u94AE',
            }),
            (0, e.jsx)(o.Button, {
              type: 'danger',
              style: d,
              children: '\u5371\u9669\u6309\u94AE',
            }),
            (0, e.jsx)(o.Button, {
              type: 'warning',
              style: d,
              children: '\u8B66\u544A\u6309\u94AE',
            }),
            (0, e.jsx)(o.Button, { type: 'info', style: d, children: '\u4FE1\u606F\u6309\u94AE' }),
            (0, e.jsx)(o.Button, { type: 'text', style: d, children: '\u6587\u672C\u6309\u94AE' }),
          ],
        });
      }
    },
    65534: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '8px' };
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexDirection: 'column' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: s,
              width: 400,
              height: 40,
              children: 'Primary',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: s,
              width: 400,
              height: 40,
              children: 'Danger',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: s,
              width: 400,
              height: 40,
              children: 'Warning',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: s,
              width: 400,
              height: 40,
              children: 'Info',
            }),
            (0, n.jsx)(o.Button, {
              type: 'text',
              style: s,
              width: 400,
              height: 40,
              children: 'Text',
            }),
          ],
        });
      }
    },
    42082: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '8px' };
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: s,
              width: 30,
              height: 30,
              circle: !0,
              children: 'P',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: s,
              width: 30,
              height: 30,
              circle: !0,
              children: 'D',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: s,
              width: 30,
              height: 30,
              circle: !0,
              children: 'W',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: s,
              width: 30,
              height: 30,
              circle: !0,
              children: 'H',
            }),
            (0, n.jsx)(o.Button, {
              type: 'text',
              style: s,
              width: 30,
              height: 30,
              circle: !0,
              children: 'T',
            }),
          ],
        });
      }
    },
    7695: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '8px' };
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: s,
              disabled: !0,
              children: '\u7981\u7528\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: s,
              disabled: !0,
              children: '\u7981\u7528\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: s,
              disabled: !0,
              children: '\u7981\u7528\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: s,
              disabled: !0,
              children: '\u7981\u7528\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'text',
              style: s,
              disabled: !0,
              children: '\u7981\u7528\u6309\u94AE',
            }),
          ],
        });
      }
    },
    66154: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '8px' };
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: s,
              dashed: !0,
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: s,
              dashed: !0,
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: s,
              dashed: !0,
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: s,
              dashed: !0,
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'text',
              style: s,
              dashed: !0,
              children: '\u865A\u7EBF\u6309\u94AE',
            }),
          ],
        });
      }
    },
    19597: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '8px' };
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: s,
              loading: !0,
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: s,
              loading: !0,
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: s,
              loading: !0,
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: s,
              loading: !0,
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
            (0, n.jsx)(o.Button, {
              type: 'text',
              style: s,
              loading: !0,
              children: '\u52A0\u8F7D\u6309\u94AE',
            }),
          ],
        });
      }
    },
    42470: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return h;
          },
        });
      var t = a(22374),
        o = a(89996),
        n = a(41896),
        e = a(50850),
        s = a(13139),
        d = a(29779),
        i = a(38166),
        r = a(10782),
        c = a(52454);
      function h() {
        var x = { margin: '0 20px' };
        return (0, c.jsxs)('div', {
          children: [
            (0, c.jsxs)('div', {
              style: { display: 'flex' },
              children: [
                (0, c.jsxs)(r.Button.Group, {
                  children: [
                    (0, c.jsx)(r.Button, {
                      type: 'primary',
                      icon: (0, c.jsx)(o.Z, {}),
                      children: 'Prev',
                    }),
                    (0, c.jsx)(r.Button, {
                      type: 'primary',
                      icon: (0, c.jsx)(n.Z, {}),
                      children: 'Next',
                    }),
                  ],
                }),
                (0, c.jsxs)(r.Button.Group, {
                  style: x,
                  children: [
                    (0, c.jsx)(r.Button, { type: 'primary', icon: (0, c.jsx)(e.Z, {}) }),
                    (0, c.jsx)(r.Button, { type: 'primary', icon: (0, c.jsx)(s.Z, {}) }),
                    (0, c.jsx)(r.Button, { type: 'primary', icon: (0, c.jsx)(d.Z, {}) }),
                  ],
                }),
                (0, c.jsxs)(r.Button.Group, {
                  children: [
                    (0, c.jsx)(r.Button, {
                      type: 'primary',
                      icon: (0, c.jsx)(e.Z, {}),
                      children: 'Star',
                    }),
                    (0, c.jsx)(r.Button, {
                      type: 'primary',
                      icon: (0, c.jsx)(s.Z, {}),
                      children: 'Setting',
                    }),
                  ],
                }),
              ],
            }),
            (0, c.jsxs)('div', {
              style: { display: 'flex', marginTop: '20px' },
              children: [
                (0, c.jsxs)(r.Button.Group, {
                  children: [
                    (0, c.jsx)(r.Button, { type: 'primary', children: 'Publish' }),
                    (0, c.jsx)(r.Button, { type: 'primary', icon: (0, c.jsx)(i.Z, {}) }),
                  ],
                }),
                (0, c.jsxs)(r.Button.Group, {
                  style: x,
                  children: [
                    (0, c.jsx)(r.Button, { type: 'danger', children: 'Delete' }),
                    (0, c.jsx)(r.Button, { type: 'danger', icon: (0, c.jsx)(d.Z, {}) }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    82633: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(50850),
        n = a(13139),
        e = a(29779),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = { margin: '8px' };
        return (0, d.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, d.jsx)(s.Button, {
              type: 'primary',
              style: r,
              icon: (0, d.jsx)(o.Z, {}),
              circle: !0,
            }),
            (0, d.jsx)(s.Button, { type: 'primary', style: r, icon: (0, d.jsx)(n.Z, {}) }),
            (0, d.jsx)(s.Button, { type: 'danger', style: r, icon: (0, d.jsx)(e.Z, {}) }),
          ],
        });
      }
    },
    20797: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('CheckBox');
        var d = function (r) {
          console.log(r);
        };
        return (0, e.jsx)(o.CheckBox, {
          checked: !0,
          checkCallback: d,
          style: { padding: '5px 0' },
          children: 'Apple',
        });
      }
    },
    82852: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.CheckBox, {
          checked: !0,
          disabled: !0,
          checkCallback: s,
          children: 'Apple',
        });
      }
    },
    64649: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Apple', value: 1 },
            { label: 'Peer', value: 2, checked: !0 },
            { label: 'Orange', value: 3, disabled: !0 },
          ],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.CheckBox, {
            group: s,
            checkGroupCallback: d,
            style: { padding: '5px 0' },
          }),
        });
      }
    },
    31869: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(93525),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454);
      function r() {
        var c = (0, s.useState)(!1),
          h = e()(c, 2),
          x = h[0],
          u = h[1],
          _ = (0, s.useState)([
            { label: 'Apple', value: 1 },
            { label: 'Peer', value: 2, checked: !0 },
            { label: 'Orange', value: 3 },
          ]),
          P = e()(_, 2),
          L = P[0],
          y = P[1],
          E = function (g) {
            u(g);
            var j = o()(L);
            j.forEach(function (D) {
              D.checked = g;
            }),
              y(j);
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(d.CheckBox, {
              checked: x,
              checkCallback: E,
              style: { padding: '5px 0' },
              children: '\u5168\u9009',
            }),
            (0, i.jsx)('p', {}),
            (0, i.jsx)(d.CheckBox, { group: L, style: { padding: '5px 0' } }),
          ],
        });
      }
    },
    5204: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Collapse'),
          (0, e.jsxs)(o.Collapse, {
            defaultActive: [1, 2],
            children: [
              (0, e.jsxs)(o.CollapseItem, {
                header: 'Beijing Toutiao Technology Co., Ltd.',
                listKey: '1',
                children: [
                  (0, e.jsx)('span', {
                    style: { fontSize: '14px' },
                    children: 'Beijing Toutiao Technology Co., Ltd.',
                  }),
                  (0, e.jsx)(o.Divider, {}),
                  (0, e.jsx)('span', {
                    style: { fontSize: '14px' },
                    children: 'Beijing Toutiao Technology Co., Ltd.',
                  }),
                  (0, e.jsx)(o.Divider, {}),
                  (0, e.jsx)('span', {
                    style: { fontSize: '14px' },
                    children: 'Beijing Toutiao Technology Co., Ltd.',
                  }),
                ],
              }),
              (0, e.jsx)(o.CollapseItem, {
                header: 'introduce',
                listKey: '2',
                disabled: !0,
                children: (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
                }),
              }),
              (0, e.jsx)(o.CollapseItem, {
                header: 'The Underlying AI Technology',
                listKey: '3',
                children: (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children:
                    "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
                }),
              }),
            ],
          })
        );
      }
    },
    31664: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Collapse, {
          accordion: !0,
          children: [
            (0, n.jsxs)(o.CollapseItem, {
              header: 'Beijing Toutiao Technology Co., Ltd.',
              listKey: '1',
              children: [
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
              ],
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'introduce',
              listKey: '2',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
              }),
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'The Underlying AI Technology',
              listKey: '3',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children:
                  "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
              }),
            }),
          ],
        });
      }
    },
    51686: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(75298),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(n.Collapse, {
          children: [
            (0, e.jsxs)(n.CollapseItem, {
              header: 'Beijing Toutiao Technology Co., Ltd.',
              listKey: '1',
              extra: (0, e.jsx)(o.Z, {}),
              children: [
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, e.jsx)(n.Divider, {}),
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, e.jsx)(n.Divider, {}),
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
              ],
            }),
            (0, e.jsx)(n.CollapseItem, {
              header: 'introduce',
              listKey: '2',
              extra: (0, e.jsx)(o.Z, {}),
              children: (0, e.jsx)('span', {
                style: { fontSize: '14px' },
                children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
              }),
            }),
            (0, e.jsx)(n.CollapseItem, {
              header: 'The Underlying AI Technology',
              listKey: '3',
              extra: (0, e.jsx)(o.Z, {}),
              children: (0, e.jsx)('span', {
                style: { fontSize: '14px' },
                children:
                  "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
              }),
            }),
          ],
        });
      }
    },
    84300: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(75298),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsxs)(n.Collapse, {
          headerAlign: 'right',
          children: [
            (0, e.jsxs)(n.CollapseItem, {
              header: 'Beijing Toutiao Technology Co., Ltd.',
              listKey: '1',
              extra: (0, e.jsx)(o.Z, {}),
              children: [
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, e.jsx)(n.Divider, {}),
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, e.jsx)(n.Divider, {}),
                (0, e.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
              ],
            }),
            (0, e.jsx)(n.CollapseItem, {
              header: 'introduce',
              listKey: '2',
              extra: (0, e.jsx)(o.Z, {}),
              children: (0, e.jsx)('span', {
                style: { fontSize: '14px' },
                children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
              }),
            }),
            (0, e.jsx)(n.CollapseItem, {
              header: 'The Underlying AI Technology',
              listKey: '3',
              extra: (0, e.jsx)(o.Z, {}),
              children: (0, e.jsx)('span', {
                style: { fontSize: '14px' },
                children:
                  "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
              }),
            }),
          ],
        });
      }
    },
    83525: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Collapse, {
          lazyLoad: !0,
          children: [
            (0, n.jsxs)(o.CollapseItem, {
              header: 'Beijing Toutiao Technology Co., Ltd.',
              listKey: '1',
              children: [
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
              ],
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'introduce',
              listKey: '2',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
              }),
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'The Underlying AI Technology',
              listKey: '3',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children:
                  "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
              }),
            }),
          ],
        });
      }
    },
    31605: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Collapse, {
          noBorder: !0,
          children: [
            (0, n.jsxs)(o.CollapseItem, {
              header: 'Beijing Toutiao Technology Co., Ltd.',
              listKey: '1',
              children: [
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('span', {
                  style: { fontSize: '14px' },
                  children: 'Beijing Toutiao Technology Co., Ltd.',
                }),
              ],
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'introduce',
              listKey: '2',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children: `ByteDance's core product, Toutiao ("Headlines"), is a content platform in China and around the world. Toutiao started out as a news recommendation engine and gradually evolved into a platform delivering content in various formats, such as texts, images, question-and-answer posts, microblogs, and videos.`,
              }),
            }),
            (0, n.jsx)(o.CollapseItem, {
              header: 'The Underlying AI Technology',
              listKey: '3',
              children: (0, n.jsx)('span', {
                style: { fontSize: '14px' },
                children:
                  "In 2016, ByteDance's AI Lab and Peking University co-developed Xiaomingbot (\u5F20\u5C0F\u660E), an artificial intelligence bot that writes news articles. The bot published 450 articles during the 15-day 2016 Summer Olympics in Rio de Janeiro. In general, Xiaomingbot published stories approximately two seconds after the event ended.",
              }),
            }),
          ],
        });
      }
    },
    46794: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return _;
          },
        });
      var t = a(57213),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(79441),
        i = a(65115),
        r = a(7454),
        c = a(50850),
        h = a(10782),
        x = a(95894),
        u = a(52454);
      function _() {
        var P = (0, s.useState)(!1),
          L = e()(P, 2),
          y = L[0],
          E = L[1],
          v = (0, s.useState)(!1),
          g = e()(v, 2),
          j = g[0],
          D = g[1],
          p = (0, u.jsxs)('div', {
            className: 'action',
            children: [
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return E(!y);
                },
                children: [
                  y ? (0, u.jsx)(d.Z, { style: { color: '#f53f3f' } }) : (0, u.jsx)(i.Z, {}),
                  (0, u.jsx)('span', { children: y ? 52 : 51 }),
                ],
              }),
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return D(!j);
                },
                children: [
                  j ? (0, u.jsx)(r.Z, { style: { color: '#fab401' } }) : (0, u.jsx)(c.Z, {}),
                  (0, u.jsx)('span', { children: j ? 13 : 12 }),
                ],
              }),
              (0, u.jsx)('div', {
                className: 'item',
                children: (0, u.jsx)('span', { children: 'Reply' }),
              }),
            ],
          }),
          f = {
            author: 'Concis',
            avatar: (0, u.jsx)(h.Avatar, {
              children: (0, u.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img1.webp' }),
            }),
            content: 'Hello Concis,coding is life,comment body content.',
            datetime: '2022-7-24',
            actions: p,
          };
        return (0, u.jsx)(h.Comment, o()({}, f));
      }
    },
    81962: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(95894),
        e = a(52454);
      function s() {
        var d = (0, e.jsx)('div', {
          className: 'action',
          children: (0, e.jsx)('div', {
            className: 'item',
            children: (0, e.jsx)('span', { children: 'Reply' }),
          }),
        });
        return (0, e.jsx)(o.Comment, {
          author: 'Concis',
          avatar: (0, e.jsx)(o.Avatar, {
            children: (0, e.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img1.webp' }),
          }),
          content: 'Hello Concis,coding is life,comment body content.',
          datetime: '2022-7-24',
          actions: d,
          children: (0, e.jsxs)(o.Comment, {
            author: 'Concis',
            avatar: (0, e.jsx)(o.Avatar, {
              children: (0, e.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img2.webp' }),
            }),
            content: 'Hello Concis,coding is life,comment body content.',
            datetime: '2022-7-24',
            actions: d,
            children: [
              (0, e.jsx)(o.Comment, {
                author: 'Concis',
                avatar: (0, e.jsx)(o.Avatar, {
                  children: (0, e.jsx)('img', {
                    src: 'https://concis.org.cn/images/swiper-img3.webp',
                  }),
                }),
                content: 'Hello Concis,coding is life,comment body content.',
                datetime: '2022-7-24',
                actions: d,
              }),
              (0, e.jsx)(o.Comment, {
                author: 'Concis',
                avatar: (0, e.jsx)(o.Avatar, {
                  children: (0, e.jsx)('img', {
                    src: 'https://concis.org.cn/images/swiper-img4.webp',
                  }),
                }),
                content: 'Hello Concis,coding is life,comment body content.',
                datetime: '2022-7-24',
                actions: d,
              }),
            ],
          }),
        });
      }
    },
    70237: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(93525),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(95894),
        r = a(52454);
      function c() {
        var h = (0, s.useState)(!0),
          x = e()(h, 2),
          u = x[0],
          _ = x[1],
          P = (0, s.useState)(''),
          L = e()(P, 2),
          y = L[0],
          E = L[1],
          v = (0, s.useState)([]),
          g = e()(v, 2),
          j = g[0],
          D = g[1],
          p = function () {
            y
              ? (d.Message.success('\u53D1\u5E03\u6210\u529F'),
                D(function (M) {
                  return M.push({ content: y }), o()(M);
                }),
                E(''),
                _(!1))
              : d.Message.error('\u8BF7\u8F93\u5165\u5185\u5BB9');
          },
          f = (0, r.jsx)('div', {
            className: 'action',
            children: (0, r.jsx)('div', {
              className: 'item',
              onClick: function () {
                return _(!0);
              },
              children: (0, r.jsx)('span', { children: 'Reply' }),
            }),
          }),
          R = (0, r.jsxs)('div', {
            className: 'replay-action',
            children: [
              (0, r.jsx)(d.Button, {
                type: 'text',
                height: 35,
                className: 'cancel-btn',
                handleClick: function () {
                  return _(!1);
                },
                children: 'Cancel',
              }),
              (0, r.jsx)(d.Button, {
                type: 'primary',
                height: 35,
                handleClick: p,
                children: 'Reply',
              }),
            ],
          });
        return (0, r.jsxs)(d.Comment, {
          author: 'Concis',
          avatar: (0, r.jsx)(d.Avatar, {
            children: (0, r.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img1.webp' }),
          }),
          content: 'Hello Concis,coding is life,comment body content.',
          datetime: '2022-7-24',
          actions: f,
          align: 'right',
          children: [
            j.length > 0 &&
              j.map(function (C) {
                return (0,
                r.jsx)(d.Comment, { author: 'Concis', avatar: (0, r.jsx)(d.Avatar, { children: (0, r.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img3.webp' }) }), content: C.content, datetime: '2022-7-24', align: 'right' });
              }),
            u &&
              (0, r.jsx)(d.Comment, {
                avatar: (0, r.jsx)(d.Avatar, {
                  children: (0, r.jsx)('img', {
                    src: 'https://concis.org.cn/images/swiper-img3.webp',
                  }),
                }),
                content: (0, r.jsx)(d.TextArea, {
                  defaultValue: y,
                  showCount: !0,
                  maxLength: 30,
                  showClear: !0,
                  handleIptChange: function (M) {
                    return E(M);
                  },
                }),
                actions: R,
              }),
          ],
        });
      }
    },
    88725: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return _;
          },
        });
      var t = a(57213),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(79441),
        i = a(65115),
        r = a(7454),
        c = a(50850),
        h = a(10782),
        x = a(95894),
        u = a(52454);
      function _() {
        var P = (0, s.useState)(!1),
          L = e()(P, 2),
          y = L[0],
          E = L[1],
          v = (0, s.useState)(!1),
          g = e()(v, 2),
          j = g[0],
          D = g[1],
          p = (0, u.jsxs)('div', {
            className: 'action',
            children: [
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return E(!y);
                },
                children: [
                  y ? (0, u.jsx)(d.Z, { style: { color: '#f53f3f' } }) : (0, u.jsx)(i.Z, {}),
                  (0, u.jsx)('span', { children: y ? 52 : 51 }),
                ],
              }),
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return D(!j);
                },
                children: [
                  j ? (0, u.jsx)(r.Z, { style: { color: '#fab401' } }) : (0, u.jsx)(c.Z, {}),
                  (0, u.jsx)('span', { children: j ? 13 : 12 }),
                ],
              }),
              (0, u.jsx)('div', {
                className: 'item',
                children: (0, u.jsx)('span', { children: 'Reply' }),
              }),
            ],
          }),
          f = {
            author: 'Concis',
            avatar: (0, u.jsx)(h.Avatar, {
              children: (0, u.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img1.webp' }),
            }),
            afterAuthor: (0, u.jsx)('span', { children: '\u94BB\u77F3\u7528\u6237' }),
            content: 'Hello Concis,coding is life,comment body content.',
            datetime: '2022-7-24',
            align: 'right',
            actions: p,
          };
        return (0, u.jsx)(h.Comment, o()({}, f));
      }
    },
    73190: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return _;
          },
        });
      var t = a(57213),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(79441),
        i = a(65115),
        r = a(7454),
        c = a(50850),
        h = a(10782),
        x = a(95894),
        u = a(52454);
      function _() {
        var P = (0, s.useState)(!1),
          L = e()(P, 2),
          y = L[0],
          E = L[1],
          v = (0, s.useState)(!1),
          g = e()(v, 2),
          j = g[0],
          D = g[1],
          p = (0, u.jsxs)('div', {
            className: 'action',
            children: [
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return E(!y);
                },
                children: [
                  y ? (0, u.jsx)(d.Z, { style: { color: '#f53f3f' } }) : (0, u.jsx)(i.Z, {}),
                  (0, u.jsx)('span', { children: y ? 52 : 51 }),
                ],
              }),
              (0, u.jsxs)('div', {
                className: 'item',
                onClick: function () {
                  return D(!j);
                },
                children: [
                  j ? (0, u.jsx)(r.Z, { style: { color: '#fab401' } }) : (0, u.jsx)(c.Z, {}),
                  (0, u.jsx)('span', { children: j ? 13 : 12 }),
                ],
              }),
              (0, u.jsx)('div', {
                className: 'item',
                children: (0, u.jsx)('span', { children: 'Reply' }),
              }),
            ],
          }),
          f = {
            author: 'Concis',
            avatar: (0, u.jsx)(h.Avatar, {
              children: (0, u.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img1.webp' }),
            }),
            align: 'right',
            content: 'Hello Concis,coding is life,comment body content.',
            datetime: '2022-7-24',
            actions: p,
          };
        return (0, u.jsx)(h.Comment, o()({}, f));
      }
    },
    91213: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('DatePicker');
        var d = function (r) {
          console.log(r);
        };
        return (0, e.jsx)(o.DatePicker, {
          disableCheck: function (r) {
            return r.getDate() > 13;
          },
          align: 'top',
          showClear: !0,
          handleChange: d,
        });
      }
    },
    89845: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.YearPicker, {
          disableCheck: function (i) {
            return i.getFullYear() > 2022;
          },
          align: 'top',
          showClear: !0,
          handleChange: s,
        });
      }
    },
    76479: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.MonthPicker, {
          disableCheck: function (i) {
            return i.getMonth() > 5;
          },
          align: 'top',
          showClear: !0,
          handleChange: s,
        });
      }
    },
    64165: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          console.log(i, r);
        };
        return (0, n.jsx)(o.RangeDatePicker, { handleChange: s });
      }
    },
    20858: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          console.log(i, r);
        };
        return (0, n.jsx)(o.RangeDatePicker, { showClear: !0, handleChange: s });
      }
    },
    7809: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)('left'),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function (P) {
            console.log(P);
          },
          u = function (P) {
            h(P.children);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: u,
              style: { marginBottom: 20 },
              children: [
                (0, s.jsx)(e.Radio, { children: 'left' }),
                (0, s.jsx)(e.Radio, { children: 'right' }),
                (0, s.jsx)(e.Radio, { children: 'top' }),
                (0, s.jsx)(e.Radio, { children: 'bottom' }),
              ],
            }),
            (0, s.jsx)(e.RangeDatePicker, { handleChange: x, align: c }),
          ],
        });
      }
    },
    14995: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Divider'),
          (0, e.jsx)('div', { children: (0, e.jsx)(o.Divider, { children: 'Concis' }) })
        );
      }
    },
    430: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 12, children: 'Concis' }),
            }),
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 16, children: 'Concis' }),
            }),
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 22, children: 'Concis' }),
            }),
          ],
        });
      }
    },
    5984: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 14, align: 'left', children: 'Concis' }),
            }),
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 14, children: 'Concis' }),
            }),
            (0, n.jsx)('div', {
              style: { marginBottom: '40px' },
              children: (0, n.jsx)(o.Divider, { fontSize: 14, align: 'right', children: 'Concis' }),
            }),
          ],
        });
      }
    },
    48519: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(5922),
        d = a(52454);
      function i() {
        (0, s.Z)('Drawer');
        var r = (0, n.useState)(!1),
          c = o()(r, 2),
          h = c[0],
          x = c[1];
        return (0, d.jsxs)('div', {
          children: [
            (0, d.jsx)(e.Button, {
              handleClick: function () {
                x(!0);
              },
              children: 'Open Drawer',
            }),
            (0, d.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: h,
              onOk: function () {
                return x(!1);
              },
              onCancel: function () {
                return x(!1);
              },
              children: [
                (0, d.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, d.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, d.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
          ],
        });
      }
    },
    48237: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)('right'),
          u = o()(x, 2),
          _ = u[0],
          P = u[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (y) {
                return P(y.children);
              },
              children: [
                (0, s.jsx)(e.Radio, { children: 'right' }),
                (0, s.jsx)(e.Radio, { children: 'left' }),
                (0, s.jsx)(e.Radio, { children: 'top' }),
                (0, s.jsx)(e.Radio, { children: 'bottom' }),
              ],
            }),
            (0, s.jsx)(e.Button, {
              style: { marginTop: '30px' },
              handleClick: function () {
                h(!0);
              },
              children: 'Open Drawer',
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: c,
              align: _,
              onOk: function () {
                return h(!1);
              },
              onCancel: function () {
                return h(!1);
              },
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
          ],
        });
      }
    },
    31666: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                h(!0);
              },
              children: 'Open Drawer',
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: c,
              onOk: function () {
                return new Promise(function (u) {
                  setTimeout(function () {
                    h(!1), u('');
                  }, 2e3);
                });
              },
              onCancel: function () {
                return h(!1);
              },
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
          ],
        });
      }
    },
    62042: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)(!1),
          u = o()(x, 2),
          _ = u[0],
          P = u[1],
          L = (0, n.useState)(!1),
          y = o()(L, 2),
          E = y[0],
          v = y[1],
          g = (0, n.useState)(!1),
          j = o()(g, 2),
          D = j[0],
          p = j[1],
          f = function () {
            p(!0),
              setTimeout(function () {
                P(!1), p(!1);
              }, 2e3);
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.Space, {
              children: [
                (0, s.jsx)(e.Button, {
                  handleClick: function () {
                    return h(!0);
                  },
                  children: '\u6253\u5F00\u7981\u7528\u6309\u94AEDrawer',
                }),
                (0, s.jsx)(e.Button, {
                  handleClick: function () {
                    return P(!0);
                  },
                  children: '\u6253\u5F00\u81EA\u5B9A\u4E49\u9875\u811ADrawer',
                }),
                (0, s.jsx)(e.Button, {
                  handleClick: function () {
                    return v(!0);
                  },
                  children: '\u6253\u5F00\u65E0\u9875\u811ADrawer',
                }),
              ],
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: c,
              width: '400px',
              onCancel: function () {
                return h(!1);
              },
              onOk: function () {
                return h(!1);
              },
              okButtonProps: { disabled: !0 },
              cancelButtonProps: { disabled: !0 },
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: _,
              width: '400px',
              onCancel: function () {
                return P(!1);
              },
              footer: (0, s.jsxs)(e.Space, {
                children: [
                  (0, s.jsx)(e.Button, {
                    type: 'text',
                    handleClick: function () {
                      return P(!1);
                    },
                    children: 'Return',
                  }),
                  (0, s.jsx)(e.Button, {
                    type: 'text',
                    handleClick: f,
                    loading: D,
                    children: 'Async Return',
                  }),
                  (0, s.jsx)(e.Button, {
                    type: 'primary',
                    handleClick: function () {
                      return P(!1);
                    },
                    children: 'Enter',
                  }),
                ],
              }),
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: E,
              onCancel: function () {
                return v(!1);
              },
              onOk: function () {
                return v(!1);
              },
              footer: (0, s.jsx)(s.Fragment, {}),
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
          ],
        });
      }
    },
    43009: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                h(!0);
              },
              children: 'Open Drawer',
            }),
            (0, s.jsxs)(e.Drawer, {
              title: 'Drawer Title',
              visible: c,
              width: '600px',
              onOk: function () {
                return h(!1);
              },
              onCancel: function () {
                return h(!1);
              },
              children: [
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
                (0, s.jsx)('p', { children: 'This is a Drawer view text.' }),
              ],
            }),
          ],
        });
      }
    },
    99377: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return h;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(54306),
        d = a.n(s),
        i = a(22374),
        r = a(10782),
        c = a(52454);
      function h() {
        var x = (0, i.useState)(!1),
          u = d()(x, 2),
          _ = u[0],
          P = u[1],
          L = r.Form.useForm(),
          y = (0, i.createRef)(),
          E = (function () {
            var v = e()(
              o()().mark(function g() {
                var j;
                return o()().wrap(function (p) {
                  for (;;)
                    switch ((p.prev = p.next)) {
                      case 0:
                        return (p.next = 2), L.onSubmit(y);
                      case 2:
                        (j = p.sent),
                          j.submitResult
                            ? (r.Message.success('\u6CE8\u518C\u6210\u529F'), P(!1))
                            : r.Message.error('\u6CE8\u518C\u5931\u8D25');
                      case 4:
                      case 'end':
                        return p.stop();
                    }
                }, g);
              })
            );
            return function () {
              return v.apply(this, arguments);
            };
          })();
        return (0, c.jsxs)('div', {
          children: [
            (0, c.jsx)(r.Button, {
              handleClick: function () {
                P(!0);
              },
              children: 'Open Drawer',
            }),
            (0, c.jsx)(r.Drawer, {
              title: 'Drawer Title',
              visible: _,
              width: '400px',
              onCancel: function () {
                return P(!1);
              },
              footer: (0, c.jsxs)(r.Space, {
                children: [
                  (0, c.jsx)(r.Button, {
                    type: 'text',
                    handleClick: function () {
                      return P(!1);
                    },
                    children: '\u53D6\u6D88',
                  }),
                  (0, c.jsx)(r.Button, {
                    type: 'text',
                    handleClick: e()(
                      o()().mark(function v() {
                        return o()().wrap(function (j) {
                          for (;;)
                            switch ((j.prev = j.next)) {
                              case 0:
                                return (j.next = 2), L.resetFields(y);
                              case 2:
                                return j.abrupt('return', j.sent);
                              case 3:
                              case 'end':
                                return j.stop();
                            }
                        }, v);
                      })
                    ),
                    children: '\u91CD\u7F6E',
                  }),
                  (0, c.jsx)(r.Button, {
                    type: 'primary',
                    handleClick: E,
                    children: '\u63D0\u4EA4',
                  }),
                ],
              }),
              children: (0, c.jsxs)(r.Form, {
                layout: 'horizontal',
                formField: y,
                style: { width: '600px' },
                children: [
                  (0, c.jsx)(r.Form.Item, {
                    label: 'Username',
                    field: 'username',
                    rules: [
                      { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                      { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                      { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                    ],
                    children: (0, c.jsx)(r.Input, {
                      placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
                      width: '200',
                    }),
                  }),
                  (0, c.jsx)(r.Form.Item, {
                    label: 'Password',
                    field: 'password',
                    rules: [
                      { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                      { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                      { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                      {
                        fn: function (g) {
                          return g.includes('concis');
                        },
                        message: '\u5FC5\u987B\u5305\u542Bconcis',
                      },
                    ],
                    children: (0, c.jsx)(r.Input, {
                      placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801',
                      width: '200',
                    }),
                  }),
                  (0, c.jsx)(r.Form.Item, { label: 'Star', children: (0, c.jsx)(r.Rate, {}) }),
                  (0, c.jsx)(r.Form.Item, {
                    wrapperTol: 10,
                    children: (0, c.jsx)(r.CheckBox, {
                      checked: !0,
                      children: 'I have read the manual',
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    65826: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Dropdown');
        var d = [
          { content: 'Beijing', link: '#' },
          {
            content: 'Guangzhou',
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', link: 'https://www.google.com.hk/' },
        ];
        return (0, e.jsx)('div', {
          children: (0, e.jsx)(o.Dropdown, { placeholder: 'Click me', data: d }),
        });
      }
    },
    85046: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { content: 'Beijing', link: '#' },
          {
            content: 'Guangzhou',
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', link: 'https://www.google.com.hk/' },
        ];
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Dropdown, { placeholder: 'Hover me', data: s, type: 'hover' }),
        });
      }
    },
    67667: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { content: 'Beijing', link: '#' },
          {
            content: 'Guangzhou',
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', link: 'https://www.google.com.hk/' },
        ];
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Click me',
              data: s,
              status: 'primary',
              style: { margin: '0 8px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Click me',
              data: s,
              status: 'error',
              style: { margin: '0 8px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Click me',
              data: s,
              status: 'warning',
              style: { margin: '0 8px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Click me',
              data: s,
              status: 'success',
              style: { margin: '0 8px' },
            }),
          ],
        });
      }
    },
    57664: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = new Array(50).fill('item').map(function (d, i) {
          return ''.concat(d).concat(i + 1);
        });
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Dropdown, { placeholder: 'Click me', data: s, colums: !0 }),
        });
      }
    },
    21174: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { content: 'Beijing', link: '#' },
          {
            content: 'Guangzhou',
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', link: 'https://www.google.com.hk/' },
        ];
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Top',
              data: s,
              position: 'top',
              style: { margin: '0 16px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Bottom',
              data: s,
              position: 'bottom',
              style: { margin: '0 16px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Left',
              data: s,
              position: 'left',
              style: { margin: '0 16px' },
            }),
            (0, n.jsx)(o.Dropdown, {
              placeholder: 'Right',
              data: s,
              position: 'right',
              style: { margin: '0 16px' },
            }),
          ],
        });
      }
    },
    25527: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(8611),
        e = a(52454);
      function s() {
        var d = [
          { content: 'Beijing', icon: (0, e.jsx)(n.Z, {}), link: '#' },
          {
            content: 'Guangzhou',
            icon: (0, e.jsx)(n.Z, {}),
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', icon: (0, e.jsx)(n.Z, {}), link: 'https://www.google.com.hk/' },
        ];
        return (0, e.jsx)('div', {
          children: (0, e.jsx)(o.Dropdown, { placeholder: 'Click me', data: d }),
        });
      }
    },
    97177: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { content: 'Beijing', link: '#' },
          {
            content: 'Guangzhou',
            children: [
              { content: 'Tianhe', link: '#' },
              { content: 'Haizhu', link: '#', disabled: !0 },
              { content: 'Yuexiu', link: '#' },
            ],
          },
          { content: 'Jump Google', link: 'https://www.google.com.hk/' },
        ];
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Dropdown, { disabled: !0, placeholder: 'Click me', data: s }),
        });
      }
    },
    74802: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (0, n.Z)('Empty'), (0, e.jsx)(o.Empty, {});
      }
    },
    27138: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(57604),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsx)(n.Empty, {
          icon: (0, e.jsx)(o.Z, { style: { fontSize: '48px', color: '#f2994b' } }),
        });
      }
    },
    94818: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.Empty, { description: 'No data, please reload!' });
      }
    },
    33993: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Form'),
          (0, e.jsx)('div', {
            children: (0, e.jsxs)(o.Form, {
              layout: 'vertical',
              style: { width: '600px' },
              children: [
                (0, e.jsx)(o.Form.Item, {
                  label: 'Username',
                  children: (0, e.jsx)(o.Input, {
                    placeholder: 'Please enter your usename',
                    width: '200',
                  }),
                }),
                (0, e.jsx)(o.Form.Item, {
                  label: 'Post',
                  children: (0, e.jsx)(o.Input, {
                    placeholder: 'Please enter your post',
                    width: '200',
                  }),
                }),
                (0, e.jsx)(o.Form.Item, {
                  wrapperTol: 20,
                  children: (0, e.jsx)(o.CheckBox, {
                    checked: !0,
                    children: 'I have read the manual',
                  }),
                }),
                (0, e.jsx)(o.Form.Item, {
                  wrapperTol: 5,
                  children: (0, e.jsx)(o.Button, { type: 'primary', children: 'Submit' }),
                }),
              ],
            }),
          })
        );
      }
    },
    19002: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454);
      function r() {
        var c = d.Form.useForm(),
          h = (0, s.createRef)(),
          x = (function () {
            var _ = e()(
              o()().mark(function P() {
                var L;
                return o()().wrap(function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        return (E.next = 2), c.onSubmit(h);
                      case 2:
                        (L = E.sent),
                          L.submitResult
                            ? d.Message.success('\u6CE8\u518C\u6210\u529F')
                            : d.Message.error('\u6CE8\u518C\u5931\u8D25');
                      case 4:
                      case 'end':
                        return E.stop();
                    }
                }, P);
              })
            );
            return function () {
              return _.apply(this, arguments);
            };
          })(),
          u = (function () {
            var _ = e()(
              o()().mark(function P() {
                var L;
                return o()().wrap(function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        return (E.next = 2), c.useFormContext(h);
                      case 2:
                        (L = E.sent), console.log(L);
                      case 4:
                      case 'end':
                        return E.stop();
                    }
                }, P);
              })
            );
            return function () {
              return _.apply(this, arguments);
            };
          })();
        return (0, i.jsxs)('div', {
          children: [
            (0, i.jsx)(d.Button, {
              handleClick: u,
              children: '\u83B7\u53D6\u8868\u5355\u5F53\u524D\u72B6\u6001',
            }),
            (0, i.jsxs)(d.Form, {
              layout: 'vertical',
              formField: h,
              style: { width: '600px' },
              children: [
                (0, i.jsx)(d.Form.Item, {
                  field: 'username',
                  rules: [
                    { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                    { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                    { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                    {
                      fn: function (P) {
                        return P.includes('a');
                      },
                      message: '\u5FC5\u987B\u5305\u542Ba',
                    },
                  ],
                  children: (0, i.jsx)(d.Input, {
                    placeholder: 'Please enter your usename',
                    width: '240',
                  }),
                }),
                (0, i.jsx)(d.Form.Item, {
                  field: 'phone',
                  rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }],
                  children: (0, i.jsx)(d.Input, {
                    placeholder: 'Please enter your phone number',
                    width: '240',
                  }),
                }),
                (0, i.jsx)(d.Form.Item, {
                  wrapperTol: 5,
                  children: (0, i.jsx)(d.Button, {
                    type: 'primary',
                    handleClick: x,
                    children: 'Register',
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    30741: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)('horizontal'),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function (_) {
            h(_.children);
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: x,
              children: [
                (0, s.jsx)(e.Radio, { children: 'horizontal' }),
                (0, s.jsx)(e.Radio, { children: 'vertical' }),
              ],
            }),
            (0, s.jsxs)(e.Form, {
              layout: c,
              style: { width: '600px' },
              children: [
                (0, s.jsx)(e.Form.Item, {
                  label: 'Username',
                  children: (0, s.jsx)(e.Input, {
                    placeholder: 'Please enter your usename',
                    width: '200',
                  }),
                }),
                (0, s.jsx)(e.Form.Item, {
                  label: 'Post',
                  children: (0, s.jsx)(e.Input, {
                    placeholder: 'Please enter your post',
                    width: '200',
                  }),
                }),
                (0, s.jsx)(e.Form.Item, {
                  wrapperTol: 20,
                  children: (0, s.jsx)(e.CheckBox, {
                    checked: !0,
                    children: 'I have read the manual',
                  }),
                }),
                (0, s.jsx)(e.Form.Item, {
                  wrapperTol: 5,
                  children: (0, s.jsx)(e.Button, { type: 'primary', children: 'Submit' }),
                }),
              ],
            }),
          ],
        });
      }
    },
    66536: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454),
        r = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike' },
          { label: 'aMck', value: 'amck' },
        ];
      function c() {
        var h = d.Form.useForm(),
          x = (0, s.createRef)(),
          u = (function () {
            var _ = e()(
              o()().mark(function P() {
                var L;
                return o()().wrap(function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        return (E.next = 2), h.onSubmit(x);
                      case 2:
                        (L = E.sent), console.log(L);
                      case 4:
                      case 'end':
                        return E.stop();
                    }
                }, P);
              })
            );
            return function () {
              return _.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'vertical',
            formField: x,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                label: 'Username',
                field: 'username',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Post',
                field: 'post',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your post',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Name',
                field: 'name',
                children: (0, i.jsx)(d.Select, {
                  option: r,
                  width: 200,
                  placeholder: '\u8BF7\u9009\u62E9',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 20,
                children: (0, i.jsx)(d.CheckBox, {
                  checked: !0,
                  children: 'I have read the manual',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 5,
                children: (0, i.jsx)(d.Button, {
                  type: 'primary',
                  handleClick: u,
                  children: 'Submit',
                }),
              }),
            ],
          }),
        });
      }
    },
    12578: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike' },
          { label: 'aMck', value: 'amck' },
        ];
      function s() {
        var d = o.Form.useForm(),
          i = (0, t.createRef)();
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Form, {
            layout: 'horizontal',
            formField: i,
            style: { width: '600px' },
            children: [
              (0, n.jsx)(o.Form.Item, {
                label: 'Username',
                field: 'username',
                children: (0, n.jsx)(o.Input, {
                  placeholder: 'Please enter your usename',
                  width: '200',
                }),
              }),
              (0, n.jsx)(o.Form.Item, {
                label: 'Post',
                field: 'post',
                children: (0, n.jsx)(o.Input, {
                  placeholder: 'Please enter your post',
                  width: '200',
                }),
              }),
              (0, n.jsx)(o.Form.Item, {
                label: 'Name',
                field: 'name',
                children: (0, n.jsx)(o.Select, {
                  option: e,
                  width: 200,
                  placeholder: '\u8BF7\u9009\u62E9',
                }),
              }),
              (0, n.jsx)(o.Form.Item, {
                wrapperTol: 20,
                children: (0, n.jsx)(o.CheckBox, {
                  checked: !0,
                  children: 'I have read the manual',
                }),
              }),
              (0, n.jsxs)(o.Form.Item, {
                wrapperTol: 5,
                children: [
                  (0, n.jsx)(o.Button, { type: 'primary', children: 'Submit' }),
                  (0, n.jsx)(o.Button, {
                    type: 'text',
                    handleClick: function () {
                      return d.resetFields(i);
                    },
                    style: { margin: '0 10px' },
                    children: 'Reset',
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    10374: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454),
        r = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike' },
          { label: 'aMck', value: 'amck' },
        ];
      function c() {
        var h = d.Form.useForm(),
          x = (0, s.createRef)(),
          u = (function () {
            var _ = e()(
              o()().mark(function P() {
                var L;
                return o()().wrap(function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        return (E.next = 2), h.onSubmit(x);
                      case 2:
                        (L = E.sent), console.log(L);
                      case 4:
                      case 'end':
                        return E.stop();
                    }
                }, P);
              })
            );
            return function () {
              return _.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'vertical',
            formField: x,
            disabled: !0,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                label: 'Username',
                field: 'username',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Post',
                field: 'post',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your post',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Name',
                field: 'name',
                children: (0, i.jsx)(d.Select, {
                  option: r,
                  width: 200,
                  placeholder: '\u8BF7\u9009\u62E9',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 20,
                children: (0, i.jsx)(d.CheckBox, {
                  checked: !0,
                  children: 'I have read the manual',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 5,
                children: (0, i.jsx)(d.Button, {
                  type: 'primary',
                  handleClick: u,
                  children: 'Submit',
                }),
              }),
            ],
          }),
        });
      }
    },
    21793: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return x;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454),
        r = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike' },
          { label: 'aMck', value: 'amck' },
        ],
        c = [
          {
            title: 'parent1',
            value: '0-0',
            children: [
              { title: 'parent 1-0', value: '0-0-1' },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                children: [{ title: 'leaf2', value: '0-0-0-1' }],
              },
            ],
          },
          { title: 'parent2', value: '0-1', children: [{ title: 'parent 2-0', value: '0-0-3' }] },
        ],
        h = [
          { label: 'JavaScript' },
          { label: 'TypeScript' },
          { label: 'VueJS' },
          { label: 'ReactJS' },
        ];
      function x() {
        var u = d.Form.useForm(),
          _ = (0, s.createRef)(),
          P = (function () {
            var L = e()(
              o()().mark(function y() {
                var E;
                return o()().wrap(function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (g.next = 2), u.onSubmit(_);
                      case 2:
                        (E = g.sent),
                          E.submitResult
                            ? d.Message.success('\u6CE8\u518C\u6210\u529F')
                            : d.Message.error('\u6CE8\u518C\u5931\u8D25');
                      case 4:
                      case 'end':
                        return g.stop();
                    }
                }, y);
              })
            );
            return function () {
              return L.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'horizontal',
            formField: _,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                label: 'Username',
                field: 'username',
                rules: [
                  { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                  { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                  { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                  {
                    fn: function (y) {
                      return y.includes('a');
                    },
                    message: '\u5FC5\u987B\u5305\u542Ba',
                  },
                ],
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Post',
                field: 'post',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your post',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Hobby',
                field: 'hobby',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u7231\u597D' }],
                children: (0, i.jsx)(d.InputPro, { option: h }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Name',
                field: 'name',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u540D\u5B57' }],
                children: (0, i.jsx)(d.Select, {
                  option: r,
                  width: 200,
                  placeholder: '\u8BF7\u9009\u62E9',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'CreateTime',
                field: 'createTime',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u65E5\u671F\u533A\u95F4' }],
                children: (0, i.jsx)(d.RangeDatePicker, {}),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Date',
                field: 'dateTime',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u65E5\u671F' }],
                children: (0, i.jsx)(d.DatePicker, {}),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Year',
                field: 'year',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u5E74' }],
                children: (0, i.jsx)(d.YearPicker, {}),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Month',
                field: 'month',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u6708' }],
                children: (0, i.jsx)(d.MonthPicker, {}),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Rate',
                field: 'Rate',
                rules: [{ required: !0, message: '\u8BF7\u9009\u62E9\u5206\u6570' }],
                children: (0, i.jsx)(d.Rate, { num: 4, defaultShow: 3 }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Group',
                field: 'Group',
                rules: [{ required: !0, message: '\u8BF7\u9009\u62E9\u7FA4\u7EC4' }],
                children: (0, i.jsx)(d.Tree, { treeData: c, avaChooseMore: !0 }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 20,
                children: (0, i.jsx)(d.CheckBox, {
                  checked: !0,
                  children: 'I have read the manual',
                }),
              }),
              (0, i.jsxs)(d.Form.Item, {
                wrapperTol: 5,
                children: [
                  (0, i.jsx)(d.Button, { type: 'primary', handleClick: P, children: 'Submit' }),
                  (0, i.jsx)(d.Button, {
                    type: 'text',
                    handleClick: e()(
                      o()().mark(function L() {
                        return o()().wrap(function (E) {
                          for (;;)
                            switch ((E.prev = E.next)) {
                              case 0:
                                return (E.next = 2), u.resetFields(_);
                              case 2:
                                return E.abrupt('return', E.sent);
                              case 3:
                              case 'end':
                                return E.stop();
                            }
                        }, L);
                      })
                    ),
                    style: { margin: '0 10px' },
                    children: 'Reset',
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    39896: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454),
        r = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike' },
          { label: 'aMck', value: 'amck' },
        ];
      function c() {
        var h = d.Form.useForm(),
          x = (0, s.createRef)(),
          u = (function () {
            var _ = e()(
              o()().mark(function P() {
                var L;
                return o()().wrap(function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        return (E.next = 2), h.onSubmit(x);
                      case 2:
                        (L = E.sent), console.log(L);
                      case 4:
                      case 'end':
                        return E.stop();
                    }
                }, P);
              })
            );
            return function () {
              return _.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'vertical',
            formField: x,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                label: 'Username',
                field: 'username',
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Post',
                field: 'post',
                disabled: !0,
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your post',
                  width: '200',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                label: 'Name',
                field: 'name',
                children: (0, i.jsx)(d.Select, {
                  option: r,
                  width: 200,
                  placeholder: '\u8BF7\u9009\u62E9',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 20,
                children: (0, i.jsx)(d.CheckBox, {
                  checked: !0,
                  children: 'I have read the manual',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 5,
                children: (0, i.jsx)(d.Button, {
                  type: 'primary',
                  handleClick: u,
                  children: 'Submit',
                }),
              }),
            ],
          }),
        });
      }
    },
    4107: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454);
      function r() {
        var c = d.Form.useForm(),
          h = (0, s.createRef)(),
          x = (function () {
            var u = e()(
              o()().mark(function _() {
                var P;
                return o()().wrap(function (y) {
                  for (;;)
                    switch ((y.prev = y.next)) {
                      case 0:
                        return (y.next = 2), c.onSubmit(h);
                      case 2:
                        (P = y.sent), console.log(P);
                      case 4:
                      case 'end':
                        return y.stop();
                    }
                }, _);
              })
            );
            return function () {
              return u.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'vertical',
            formField: h,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                field: 'username',
                rules: [
                  { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                  { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                  { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                  {
                    fn: function (_) {
                      return _.includes('a');
                    },
                    message: '\u5FC5\u987B\u5305\u542Ba',
                  },
                ],
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '240',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                field: 'phone',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }],
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your phone number',
                  width: '240',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 5,
                children: (0, i.jsx)(d.Button, {
                  type: 'primary',
                  handleClick: x,
                  children: 'Register',
                }),
              }),
            ],
          }),
        });
      }
    },
    57103: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(25359),
        o = a.n(t),
        n = a(49811),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454);
      function r() {
        var c = d.Form.useForm(),
          h = (0, s.createRef)(),
          x = (function () {
            var u = e()(
              o()().mark(function _() {
                var P;
                return o()().wrap(function (y) {
                  for (;;)
                    switch ((y.prev = y.next)) {
                      case 0:
                        return (y.next = 2), c.onSubmit(h);
                      case 2:
                        (P = y.sent),
                          P.submitResult
                            ? d.Message.success('\u6CE8\u518C\u6210\u529F')
                            : d.Message.error('\u6CE8\u518C\u5931\u8D25');
                      case 4:
                      case 'end':
                        return y.stop();
                    }
                }, _);
              })
            );
            return function () {
              return u.apply(this, arguments);
            };
          })();
        return (0, i.jsx)('div', {
          children: (0, i.jsxs)(d.Form, {
            layout: 'vertical',
            formField: h,
            style: { width: '600px' },
            children: [
              (0, i.jsx)(d.Form.Item, {
                field: 'username',
                rules: [
                  { required: !0, message: '\u8BF7\u8F93\u5165\u7528\u6237\u540D' },
                  { maxLength: 10, message: '\u6700\u5927\u957F\u5EA6\u4E3A10\u4F4D' },
                  { minLength: 3, message: '\u6700\u5C0F\u957F\u5EA6\u4E3A3\u4F4D' },
                  {
                    fn: function (_) {
                      return _.includes('a');
                    },
                    message: '\u5FC5\u987B\u5305\u542Ba',
                  },
                ],
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your usename',
                  width: '240',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                field: 'phone',
                rules: [{ required: !0, message: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }],
                children: (0, i.jsx)(d.Input, {
                  placeholder: 'Please enter your phone number',
                  width: '240',
                }),
              }),
              (0, i.jsx)(d.Form.Item, {
                wrapperTol: 5,
                children: (0, i.jsx)(d.Button, {
                  type: 'primary',
                  handleClick: x,
                  children: 'Register',
                }),
              }),
            ],
          }),
        });
      }
    },
    89986: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return u;
          },
        });
      var t = a(93525),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(5922),
        r = a(52454),
        c = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike', disabled: !0 },
          { label: 'aMck', value: 'amck' },
        ],
        h = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ],
        x = [
          { title: 'Waiting', subTitle: 'subTitle', description: 'this is description' },
          { title: 'In Process', subTitle: 'subTitle', description: 'this is description' },
          { title: 'Finished', subTitle: 'subTitle', description: 'this is description' },
        ];
      function u() {
        (0, i.Z)('GlobalConfig');
        var _ = (0, s.useState)(['#325DFF', 'orange', 'green']),
          P = e()(_, 2),
          L = P[0],
          y = P[1],
          E = function () {
            y(function (g) {
              return g.push(g.shift()), o()(g);
            });
          };
        return (0, r.jsx)(d.GlobalConfig, {
          globalColor: L[0],
          children: (0, r.jsxs)('div', {
            style: { position: 'relative' },
            children: [
              (0, r.jsx)(d.Button, {
                type: 'primary',
                handleClick: E,
                children: 'Toggle Config Color',
              }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Loading, { loadingText: '\u6B63\u5728\u52A0\u8F7D\u4E2D...' }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.CheckBox, { children: '5' }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Switch, {}),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.RangeDatePicker, {}),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Input, { placeholder: '\u8BF7\u8F93\u5165', width: '200' }),
              (0, r.jsx)('p', {}),
              (0, r.jsxs)(d.RadioGroup, {
                value: 1,
                canAddOption: !0,
                children: [
                  (0, r.jsx)(d.Radio, { disabled: !0, children: 'Apple' }),
                  (0, r.jsx)(d.Radio, { children: 'Orange' }),
                  (0, r.jsx)(d.Radio, { children: 'Watch' }),
                ],
              }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Select, { option: c, width: 200, placeholder: '\u8BF7\u9009\u62E9' }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Tree, { treeData: h }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Badge, {
                count: 9,
                style: { marginRight: '25px' },
                children: (0, r.jsx)(d.Avatar, { shape: 'square', children: 'Num' }),
              }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.TreeView, { treeData: h }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.InputPro, { align: 'top', option: c }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Pagination, {
                total: 200,
                showSizeChanger: !0,
                pageSizeOptions: [10, 20, 30, 50],
                showJumpInput: !0,
              }),
              (0, r.jsx)('p', {}),
              (0, r.jsx)(d.Steps, {
                current: 2,
                children: x.map(function (v) {
                  return (0,
                  r.jsx)(d.Step, { title: v.title, subTitle: v.subTitle, description: v.description }, v.title);
                }),
              }),
            ],
          }),
        });
      }
    },
    44459: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = [
          { label: 'Mucy', value: 'mucy' },
          { label: 'Mike', value: 'mike', disabled: !0 },
          { label: 'aMck', value: 'amck' },
        ],
        i = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ],
        r = [
          { title: 'Waiting', subTitle: 'subTitle', description: 'this is description' },
          { title: 'In Process', subTitle: 'subTitle', description: 'this is description' },
          { title: 'Finished', subTitle: 'subTitle', description: 'this is description' },
        ];
      function c() {
        var h = (0, n.useState)(document.documentElement.getAttribute('data-prefers-color')),
          x = o()(h, 2),
          u = x[0],
          _ = x[1],
          P = (0, n.useState)(''),
          L = o()(P, 2),
          y = L[0],
          E = L[1],
          v = function () {
            document.documentElement.setAttribute(
              'data-prefers-color',
              u === 'light' ? 'dark' : 'light'
            ),
              _(u === 'light' ? 'dark' : 'light');
          },
          g = function () {
            E(y ? '' : 'orange');
          };
        return (0, s.jsx)(e.GlobalConfig, {
          globalColor: y,
          darkTheme: u === 'dark',
          children: (0, s.jsxs)('div', {
            style: { position: 'relative' },
            children: [
              (0, s.jsx)(e.Button, {
                type: 'primary',
                handleClick: v,
                children: '\u5207\u6362\u4E3B\u9898',
              }),
              (0, s.jsx)(e.Button, {
                type: 'danger',
                style: { marginLeft: '20px' },
                handleClick: g,
                children: '\u5F00\u542F\u81EA\u5B9A\u4E49\u4E3B\u9898',
              }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Loading, { loadingText: '\u6B63\u5728\u52A0\u8F7D\u4E2D...' }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.CheckBox, { children: '5' }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Switch, {}),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.RangeDatePicker, {}),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Input, { placeholder: '\u8BF7\u8F93\u5165', width: '200' }),
              (0, s.jsx)('p', {}),
              (0, s.jsxs)(e.RadioGroup, {
                value: 1,
                canAddOption: !0,
                children: [
                  (0, s.jsx)(e.Radio, { disabled: !0, children: 'Apple' }),
                  (0, s.jsx)(e.Radio, { children: 'Orange' }),
                  (0, s.jsx)(e.Radio, { children: 'Watch' }),
                ],
              }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Select, { option: d, width: 200, placeholder: '\u8BF7\u9009\u62E9' }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Tree, { treeData: i }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Badge, {
                count: 9,
                style: { marginRight: '25px' },
                children: (0, s.jsx)(e.Avatar, { shape: 'square', children: 'Num' }),
              }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.TreeView, { treeData: i }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.InputPro, { align: 'top', option: d }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Pagination, {
                total: 200,
                showSizeChanger: !0,
                pageSizeOptions: [10, 20, 30, 50],
                showJumpInput: !0,
              }),
              (0, s.jsx)('p', {}),
              (0, s.jsx)(e.Steps, {
                current: 2,
                children: r.map(function (j) {
                  return (0,
                  s.jsx)(e.Step, { title: j.title, subTitle: j.subTitle, description: j.description }, j.title);
                }),
              }),
            ],
          }),
        });
      }
    },
    60833: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Highlight, {
            query: ['spotlight'],
            style: { fontSize: 20 },
            children: 'With the Highlight component, you can spotlight word.',
          }),
        });
      }
    },
    26783: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Highlight, {
            query: ['spotlight', 'emphasize', 'accentuate'],
            style: { fontSize: 20 },
            children:
              'With the Highlight component, you can spotlight, emphasize and accentuate words.',
          }),
        });
      }
    },
    94206: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Highlight, {
            query: ['spotlight'],
            style: { fontSize: 20 },
            styles: { px: '5', py: '10', mx: '5', rounded: !0, bg: '#fed7d7' },
            children: 'With the Highlight component, you can spotlight word.',
          }),
        });
      }
    },
    81388: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Image'),
          (0, e.jsx)(o.Image, {
            src: 'https://concis.org.cn/images/swiper-img5.webp',
            width: '200px',
          })
        );
      }
    },
    58017: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = ['fill', 'contain', 'cover', 'none', 'scale-down'];
        return (0, n.jsx)(n.Fragment, {
          children: s.map(function (d, i) {
            return (0,
            n.jsx)(o.Image, { src: 'https://concis.org.cn/images/swiper-img5.webp', width: '200px', height: '200px', style: { marginRight: '20px' }, fit: d }, i);
          }),
        });
      }
    },
    65282: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.Image, {
          src: 'https://concis.org.cn/images/swiper-img5.webp',
          width: '200px',
          round: '10px',
        });
      }
    },
    46326: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.Image, {
          src: 'https://concis.org.cn/images/swiper-img5.webp',
          width: '200px',
          height: '200px',
          fit: 'cover',
          preview: !0,
        });
      }
    },
    35872: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          'https://concis.org.cn/images/swiper-img1.webp',
          'https://concis.org.cn/images/swiper-img5.webp',
          'https://concis.org.cn/images/swiper-img4.webp',
        ];
        return (0, n.jsx)(o.Image, {
          src: 'https://concis.org.cn/images/swiper-img1.webp',
          width: '200px',
          height: '200px',
          fit: 'cover',
          preview: s,
        });
      }
    },
    60682: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Image, {
              src: 'https://concis.org.cn/images/swiper-img1.webp',
              width: '200px',
              height: '200px',
              style: { marginRight: '20px' },
              fit: 'cover',
              caption: '\u665A\u971E',
            }),
            (0, n.jsx)(o.Image, {
              src: 'https://concis.org.cn/images/swiper-img5.webp',
              width: '200px',
              height: '200px',
              style: { marginRight: '20px' },
              fit: 'cover',
              caption: '\u96EA\u5C71\u98CE\u666F',
              captionStyle: { color: 'skyblue' },
            }),
            (0, n.jsx)(o.Image, {
              src: 'https://concis.org.cn/images/swiper-img4.webp',
              width: '200px',
              height: '200px',
              fit: 'cover',
              round: '10px',
              caption: '\u6E56\u6CCA',
              captionStyle: { color: 'skyblue', textAlign: 'center' },
            }),
          ],
        });
      }
    },
    4126: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(74445),
        n = a(1577),
        e = a(42574),
        s = a(10782),
        d = a(52454);
      function i() {
        return (0, d.jsx)(d.Fragment, {
          children: (0, d.jsx)(s.Image, {
            src: 'https://concis.org.cn/images/swiper-img1.webp',
            width: '200px',
            height: '200px',
            fit: 'cover',
            round: '5px',
            preview: !0,
            previewRender: function (c) {
              return (0, d.jsxs)('div', {
                children: [
                  (0, d.jsx)(o.Z, { onClick: c }),
                  (0, d.jsx)(n.Z, {}),
                  (0, d.jsx)(e.Z, {}),
                ],
              });
            },
          }),
        });
      }
    },
    19448: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Input');
        var d = function (r) {
          console.log(r);
        };
        return (0, e.jsx)(o.Input, {
          placeholder: '\u8BF7\u8F93\u5165',
          width: '200',
          handleIptChange: d,
        });
      }
    },
    32890: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Mucy', value: 'mucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'aMck', value: 'amck' },
          ],
          d = function (c) {
            console.log(c);
          },
          i = function (c) {
            console.log(c);
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              style: { display: 'flex' },
              children: [
                (0, n.jsx)(o.Input, { placeholder: '\u8BF7\u8F93\u5165', handleIptChange: i }),
                (0, n.jsx)(o.Select, {
                  option: s,
                  width: 100,
                  handleSelectCallback: d,
                  placeholder: '\u8BF7\u9009\u62E9',
                  style: { marginLeft: '10px' },
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              style: { display: 'flex', marginTop: '10px' },
              children: [
                (0, n.jsx)(o.Input, { placeholder: '\u8BF7\u8F93\u5165', handleIptChange: i }),
                (0, n.jsx)(o.Button, {
                  type: 'primary',
                  style: { marginLeft: '10px' },
                  children: '\u641C\u7D22',
                }),
              ],
            }),
          ],
        });
      }
    },
    27742: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Input, {
          placeholder: '\u8BF7\u8F93\u5165',
          width: '200',
          showClear: !0,
          handleIptChange: s,
        });
      }
    },
    74560: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (r) {
            console.log(r);
          },
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Input, {
          type: 'num',
          placeholder: '\u8BF7\u8F93\u5165',
          min: 0,
          max: 10,
          step: 1.5,
          handleIptChange: s,
          handleNumChange: d,
        });
      }
    },
    48196: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.TextArea, { showCount: !0, maxLength: 10, showClear: !0 });
      }
    },
    16823: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.TextArea, { maxLength: 10, showCount: !0 });
      }
    },
    47863: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.TextArea, { maxLength: 10, showCount: !0, showClear: !0 });
      }
    },
    23063: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { label: 'JavaScript' },
          { label: 'TypeScript' },
          { label: 'VueJS' },
          { label: 'ReactJS' },
        ];
        return (0, n.jsx)(o.InputPro, { align: 'right', option: s });
      }
    },
    96181: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { label: 'JavaScript' },
          { label: 'TypeScript' },
          { label: 'VueJS' },
          { label: 'ReactJS' },
        ];
        return (0, n.jsxs)(o.Space, {
          direction: 'vertical',
          children: [
            (0, n.jsx)(o.InputPro, { align: 'left', option: s }),
            (0, n.jsx)(o.InputPro, { align: 'right', option: s }),
            (0, n.jsx)(o.InputPro, { align: 'top', option: s }),
            (0, n.jsx)(o.InputPro, { align: 'bottom', option: s }),
          ],
        });
      }
    },
    95552: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { label: 'JavaScript', disabled: !0 },
          { label: 'TypeScript', disabled: !0 },
          { label: 'VueJS' },
          { label: 'ReactJS' },
        ];
        return (0, n.jsx)(o.InputPro, { align: 'right', option: s });
      }
    },
    55185: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('LazyLoad'),
          (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)('p', { children: '\u7B2C\u4E00\u9875' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsxs)(o.LazyLoad, {
                delay: 1e3,
                children: [
                  (0, e.jsx)('div', { children: '\u7B2C\u4E8C\u9875' }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                ],
              }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsx)('p', { children: 'Hello Concis!' }),
              (0, e.jsxs)(o.LazyLoad, {
                delay: 1e3,
                children: [
                  (0, e.jsx)('div', { children: '\u7B2C\u4E09\u9875' }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                  (0, e.jsx)('img', {
                    src: 'https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg',
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    89767: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Link, { href: '#', children: 'Link' }),
            (0, n.jsx)(o.Link, {
              href: '#',
              disabled: !0,
              style: { marginLeft: 30 },
              children: 'Link',
            }),
          ],
        });
      }
    },
    64909: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Link, { href: '#', children: 'Primary Link' }),
                (0, n.jsx)(o.Link, {
                  disabled: !0,
                  style: { marginLeft: 30 },
                  children: 'Primary Link',
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Link, { status: 'error', href: '#', children: 'Error Link' }),
                (0, n.jsx)(o.Link, {
                  status: 'error',
                  disabled: !0,
                  style: { marginLeft: 50 },
                  children: 'Error Link',
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Link, { status: 'success', href: '#', children: 'Success Link' }),
                (0, n.jsx)(o.Link, {
                  status: 'success',
                  disabled: !0,
                  style: { marginLeft: 30 },
                  children: 'Success Link',
                }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)(o.Link, { status: 'warning', href: '#', children: 'Warning Link' }),
                (0, n.jsx)(o.Link, {
                  status: 'warning',
                  disabled: !0,
                  style: { marginLeft: 30 },
                  children: 'Warning Link',
                }),
              ],
            }),
          ],
        });
      }
    },
    48964: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(95197),
        e = a(52454);
      function s() {
        return (0, e.jsxs)('div', {
          children: [
            (0, e.jsx)(o.Link, { href: '#', icon: !0, children: 'Link' }),
            (0, e.jsx)(o.Link, {
              href: '#',
              icon: (0, e.jsx)(n.Z, {}),
              disabled: !0,
              style: { marginLeft: 30 },
              children: 'Link',
            }),
          ],
        });
      }
    },
    12685: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(15290),
        e = a(5922),
        s = a(52454);
      function d() {
        (0, e.Z)('List');
        var i = [
          'Beijing Bytedance Technology Co., Ltd.',
          'Bytedance Technology Co., Ltd.',
          'Beijing Toutiao Technology Co., Ltd.',
          'Beijing Volcengine Technology Co., Ltd.',
          'China Beijing Bytedance Technology Co., Ltd.',
        ];
        return (0, s.jsx)(n.b, {
          children: (0, s.jsx)(o.List, {
            style: { fontSize: '16px', width: '600px' },
            header: 'List title',
            size: 'default',
            dataSource: i,
            render: function (c) {
              return (0, s.jsx)(
                o.List.Item,
                {
                  style: { fontSize: '14px' },
                  children: (0, s.jsx)('div', { className: 'list', children: c }),
                },
                c
              );
            },
          }),
        });
      }
    },
    99892: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(15290),
        d = a(52454);
      function i() {
        var r = (0, n.useState)('default'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = [
            'Beijing Bytedance Technology Co., Ltd.',
            'Bytedance Technology Co., Ltd.',
            'Beijing Toutiao Technology Co., Ltd.',
            'Beijing Volcengine Technology Co., Ltd.',
            'China Beijing Bytedance Technology Co., Ltd.',
          ];
        return (0, d.jsxs)(s.b, {
          children: [
            (0, d.jsx)('span', {
              className: h === 'small' ? 'active-size-bar' : 'size-change-bar',
              onClick: function () {
                return x('small');
              },
              children: 'small',
            }),
            (0, d.jsx)('span', {
              className: h === 'default' ? 'active-size-bar' : 'size-change-bar',
              onClick: function () {
                return x('default');
              },
              children: 'default',
            }),
            (0, d.jsx)('span', {
              className: h === 'large' ? 'active-size-bar' : 'size-change-bar',
              onClick: function () {
                return x('large');
              },
              children: 'large',
            }),
            (0, d.jsx)(e.List, {
              style: { fontSize: '16px', width: '600px', marginTop: '30px' },
              header: 'List title',
              size: h,
              dataSource: u,
              render: function (P) {
                return (0, d.jsx)(e.List.Item, { style: { fontSize: '14px' }, children: P });
              },
            }),
          ],
        });
      }
    },
    42394: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(15290),
        e = a(52454);
      function s() {
        var d = [
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
        ];
        return (0, e.jsx)(n.b, {
          children: (0, e.jsx)(o.List, {
            style: { fontSize: '16px', width: '600px' },
            header: 'List title',
            size: 'default',
            dataSource: d,
            render: function (r) {
              return (0, e.jsx)(o.List.Item, {
                style: { fontSize: '14px' },
                children: (0, e.jsxs)('div', {
                  className: 'list',
                  children: [
                    (0, e.jsx)(o.Avatar, { shape: 'square', children: 'A' }),
                    (0, e.jsxs)('div', {
                      className: 'text',
                      children: [
                        (0, e.jsx)('span', { className: 'title', children: r.title }),
                        (0, e.jsx)('span', { className: 'content', children: r.content }),
                      ],
                    }),
                  ],
                }),
              });
            },
          }),
        });
      }
    },
    34855: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(15290),
        e = a(52454);
      function s() {
        var d = [
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
        ];
        return (0, e.jsx)(n.b, {
          children: (0, e.jsx)(o.List, {
            style: { fontSize: '16px', width: '600px' },
            header: 'List title',
            size: 'default',
            dataSource: d,
            render: function (r) {
              return (0, e.jsx)(o.List.Item, {
                style: { fontSize: '14px' },
                children: (0, e.jsxs)('div', {
                  className: 'list',
                  children: [
                    (0, e.jsx)(o.Avatar, { shape: 'square', children: 'A' }),
                    (0, e.jsxs)('div', {
                      className: 'text',
                      children: [
                        (0, e.jsx)('span', { className: 'title', children: r.title }),
                        (0, e.jsx)('span', { className: 'content', children: r.content }),
                      ],
                    }),
                  ],
                }),
              });
            },
            lazyLoad: !0,
            defaultShowNum: 10,
          }),
        });
      }
    },
    96158: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(15290),
        e = a(52454);
      function s() {
        var d = [
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
        ];
        return (0, e.jsx)(n.b, {
          children: (0, e.jsx)(o.List, {
            style: { fontSize: '16px', width: '600px' },
            header: 'List title',
            size: 'large',
            dataSource: d,
            render: function (r) {
              return (0, e.jsx)(o.List.Item, {
                style: { fontSize: '14px' },
                children: (0, e.jsxs)('div', {
                  className: 'list',
                  children: [
                    (0, e.jsx)(o.Avatar, { shape: 'square', children: 'A' }),
                    (0, e.jsxs)('div', {
                      className: 'text',
                      children: [
                        (0, e.jsx)('span', { className: 'title', children: r.title }),
                        (0, e.jsx)('span', { className: 'content', children: r.content }),
                      ],
                    }),
                  ],
                }),
              });
            },
            virtualListProps: !0,
            virtualShowNum: 10,
          }),
        });
      }
    },
    69366: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Loading'),
          (0, e.jsx)('div', {
            style: { position: 'relative', width: '200px', height: '50px' },
            children: (0, e.jsx)(o.Loading, {}),
          })
        );
      }
    },
    81104: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { position: 'relative', width: '200px', height: '40px' },
          children: (0, n.jsx)(o.Loading, { type: 'dot' }),
        });
      }
    },
    6766: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          style: { position: 'relative', display: 'inline-block' },
          children: [
            (0, n.jsx)('p', {
              children:
                '\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......',
            }),
            (0, n.jsx)('p', {
              children:
                '\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......',
            }),
            (0, n.jsx)('p', {
              children:
                '\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......',
            }),
            (0, n.jsx)('p', {
              children:
                '\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......',
            }),
            (0, n.jsx)('p', {
              children:
                '\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......\u8499\u5C42\u4E0B\u7684\u52A0\u8F7D\u5185\u5BB9.......',
            }),
            (0, n.jsx)(o.Loading, { mask: !0 }),
          ],
        });
      }
    },
    52812: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { position: 'relative', width: '200px', height: '40px' },
          children: (0, n.jsx)(o.Loading, { loadingText: '\u6B63\u5728\u52A0\u8F7D\u4E2D...' }),
        });
      }
    },
    91439: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          style: { position: 'relative', width: '100px', height: '40px' },
          children: [
            (0, n.jsx)(o.Loading, { width: '1em', height: '1em' }),
            (0, n.jsx)(o.Loading, { width: '2em', height: '2em', style: { marginLeft: '50px' } }),
            (0, n.jsx)(o.Loading, { width: '3em', height: '3em', style: { marginLeft: '100px' } }),
          ],
        });
      }
    },
    9764: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(1692),
        n = a(10782),
        e = a(52454);
      function s() {
        return (0, e.jsx)('div', {
          style: { position: 'relative', width: '200px', height: '40px' },
          children: (0, e.jsx)(n.Loading, {
            icon: (0, e.jsx)(o.Z, { style: { fontSize: '20px' } }),
          }),
        });
      }
    },
    17106: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { position: 'relative', width: '200px', height: '50px' },
          children: (0, n.jsx)(o.Loading, { type: 'strip' }),
        });
      }
    },
    3428: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(22374),
        o = a(40619),
        n = a(26606),
        e = a(13139),
        s = a(10782),
        d = a(5922),
        i = a(52454);
      function r() {
        (0, d.Z)('Menu');
        var c = function (_, P, L, y, E) {
            return { label: _, key: P, level: L, icon: y, children: E };
          },
          h = [
            c('Navigation One', 'sub1', 1, (0, i.jsx)(o.Z, {}), [
              c('Option 1', '1', 2),
              c('Option 2', '2', 2),
              c('Option 3', '3', 2),
              c('Option 4', '4', 2),
            ]),
            c('Navigation Two', 'sub2', 1, (0, i.jsx)(n.Z, {}), [
              c('Option 5', '5', 2),
              c('Option 6', '6', 2, null, [c('Option 13', '13', 3), c('Option 14', '14', 3)]),
              c('Submenu', 'sub3', 2, null, [c('Option 15', '15', 3), c('Option 16', '16', 3)]),
            ]),
            c('Navigation Three', 'sub4', 1, (0, i.jsx)(e.Z, {}), [
              c('Option 9', '9', 2),
              c('Option 10', '10', 2),
              c('Option 11', '11', 2),
              c('Option 12', '12', 2),
            ]),
          ],
          x = function (_) {
            console.log(_);
          };
        return (0, i.jsx)(s.Menu, { items: h, handleRouteChange: x });
      }
    },
    71577: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(40619),
        n = a(26606),
        e = a(13139),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = function (u, _, P, L, y) {
            return { label: u, key: _, level: P, icon: L, children: y };
          },
          c = [
            r('Navigation One', 'sub1', 1, (0, d.jsx)(o.Z, {}), [
              r('Option 1', '1', 2),
              r('Option 2', '2', 2),
              r('Option 3', '3', 2),
              r('Option 4', '4', 2),
            ]),
            r('Navigation Two', 'sub2', 1, (0, d.jsx)(n.Z, {}), [
              r('Option 5', '5', 2),
              r('Option 6', '6', 2, null, [r('Option 13', '13', 3), r('Option 14', '14', 3)]),
              r('Submenu', 'sub3', 2, null, [r('Option 15', '15', 3), r('Option 16', '16', 3)]),
            ]),
            r('Navigation Three', 'sub4', 1, (0, d.jsx)(e.Z, {}), [
              r('Option 9', '9', 2),
              r('Option 10', '10', 2),
              r('Option 11', '11', 2),
              r('Option 12', '12', 2),
            ]),
          ],
          h = function (u) {
            console.log(u);
          };
        return (0, d.jsx)(s.Menu, { items: c, width: 300, handleRouteChange: h });
      }
    },
    98411: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(40619),
        n = a(26606),
        e = a(13139),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = function (u, _, P, L, y) {
            return { label: u, key: _, level: P, icon: L, children: y };
          },
          c = [
            r('Navigation One', 'sub1', 1, (0, d.jsx)(o.Z, {}), [
              r('Option 1', '1', 2),
              r('Option 2', '2', 2),
              r('Option 3', '3', 2),
              r('Option 4', '4', 2),
            ]),
            r('Navigation Two', 'sub2', 1, (0, d.jsx)(n.Z, {}), [
              r('Option 5', '5', 2),
              r('Option 6', '6', 2, null, [r('Option 13', '13', 3), r('Option 14', '14', 3)]),
              r('Submenu', 'sub3', 2, null, [r('Option 15', '15', 3), r('Option 16', '16', 3)]),
            ]),
            r('Navigation Three', 'sub4', 1, (0, d.jsx)(e.Z, {}), [
              r('Option 9', '9', 2),
              r('Option 10', '10', 2),
              r('Option 11', '11', 2),
              r('Option 12', '12', 2),
            ]),
          ],
          h = function (u) {
            console.log(u);
          };
        return (0, d.jsx)(s.Menu, { items: c, dark: !0, handleRouteChange: h });
      }
    },
    29458: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(40619),
        n = a(26606),
        e = a(13139),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = function (u, _, P, L, y) {
            return { label: u, key: _, level: P, icon: L, children: y };
          },
          c = [
            r('Navigation One', 'sub1', 1, (0, d.jsx)(o.Z, {}), [
              r('Option 1', '1', 2),
              r('Option 2', '2', 2),
              r('Option 3', '3', 2),
              r('Option 4', '4', 2),
            ]),
            r('Navigation Two', 'sub2', 1, (0, d.jsx)(n.Z, {}), [
              r('Option 5', '5', 2),
              r('Option 6', '6', 2, null, [r('Option 13', '13', 3), r('Option 14', '14', 3)]),
              r('Submenu', 'sub3', 2, null, [r('Option 15', '15', 3), r('Option 16', '16', 3)]),
            ]),
            r('Navigation Three', 'sub4', 1, (0, d.jsx)(e.Z, {}), [
              r('Option 9', '9', 2),
              r('Option 10', '10', 2),
              r('Option 11', '11', 2),
              r('Option 12', '12', 2),
            ]),
          ],
          h = function (u) {
            console.log(u);
          };
        return (0, d.jsx)(s.Menu, { items: c, ableToggle: !0, handleRouteChange: h });
      }
    },
    3709: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(40619),
        n = a(26606),
        e = a(13139),
        s = a(10782),
        d = a(52454);
      function i() {
        var r = function (u, _, P, L, y) {
            return { label: u, key: _, level: P, icon: L, children: y };
          },
          c = [
            r('Navigation One', 'sub1', 1, (0, d.jsx)(o.Z, {}), [
              r('Option 1', '1', 2),
              r('Option 2', '2', 2),
              r('Option 3', '3', 2),
              r('Option 4', '4', 2),
            ]),
            r('Navigation Two', 'sub2', 1, (0, d.jsx)(n.Z, {}), [
              r('Option 5', '5', 2),
              r('Option 6', '6', 2, null, [r('Option 13', '13', 3), r('Option 14', '14', 3)]),
              r('Submenu', 'sub3', 2, null, [r('Option 15', '15', 3), r('Option 16', '16', 3)]),
            ]),
            r('Navigation Three', 'sub4', 1, (0, d.jsx)(e.Z, {}), [
              r('Option 9', '9', 2),
              r('Option 10', '10', 2),
              r('Option 11', '11', 2),
              r('Option 12', '12', 2),
            ]),
          ],
          h = function (u) {
            console.log(u);
          };
        return (0, d.jsx)(s.Menu, { items: c, defaultOpen: !0, handleRouteChange: h });
      }
    },
    39991: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Message'),
          (0, e.jsx)(o.Button, {
            type: 'primary',
            handleClick: function () {
              return o.Message.info('This is an info message!');
            },
            children: 'Open Message',
          })
        );
      }
    },
    95728: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Message.info('This is an info message!');
              },
              children: 'Info',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Message.error('This is an error message!');
              },
              children: 'Error',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Message.warning('This is an warning message!');
              },
              children: 'Warning',
            }),
            (0, n.jsx)(o.Button, {
              style: { background: '#19b42a', marginRight: '20px' },
              handleClick: function () {
                return o.Message.success('This is an success message!');
              },
              children: 'Success',
            }),
            (0, n.jsx)(o.Button, {
              style: { background: '#f2f3f5', color: '#000000', marginRight: '20px' },
              handleClick: function () {
                return o.Message.normal('This is an normal message!');
              },
              children: 'Normal',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              loading: !0,
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Message.loading('This is an loading message!');
              },
              children: 'Loading',
            }),
          ],
        });
      }
    },
    85902: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          o.Message.loading({ content: i, duration: 3e3 }),
            setTimeout(function () {
              o.Message.success('Update Success');
            }, 3201);
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return s('This is an info message!');
            },
            children: 'Update message',
          }),
        });
      }
    },
    80403: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          o.Message.info({ content: i, duration: 3e3, position: r });
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Button, {
              style: { marginRight: '20px' },
              type: 'primary',
              handleClick: function () {
                return s('This is a message in top!', 'top');
              },
              children: 'top',
            }),
            (0, n.jsx)(o.Button, {
              type: 'primary',
              handleClick: function () {
                return s('This is a message in top!', 'bottom');
              },
              children: 'bottom',
            }),
          ],
        });
      }
    },
    17145: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          o.Message.info({ content: i, duration: 5e3, clearable: !0 });
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return s('This is an info message!');
            },
            children: 'Update message',
          }),
        });
      }
    },
    44579: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(5922),
        d = a(52454);
      function i() {
        (0, s.Z)('Modal');
        var r = (0, n.useState)(!1),
          c = o()(r, 2),
          h = c[0],
          x = c[1];
        return (0, d.jsxs)('div', {
          children: [
            (0, d.jsx)(e.Button, {
              handleClick: function () {
                x(!0);
              },
              children: 'Open Modal',
            }),
            (0, d.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: h,
              onOk: function () {
                return x(!1);
              },
              onCancel: function () {
                return x(!1);
              },
              children: (0, d.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
          ],
        });
      }
    },
    20760: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function () {
            return new Promise(function (_, P) {
              setTimeout(function () {
                _(''), e.Message.success('success'), h(!1);
              }, 3e3);
            });
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                return h(!0);
              },
              children: 'Open Modal',
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              onOk: x,
              onCancel: x,
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
          ],
        });
      }
    },
    41942: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function () {
            o.Modal.info({
              title: 'Info Notification',
              content: (0, n.jsx)('p', {
                children:
                  'This is an info description which directly indicates a neutral informative change or action. (e.g., "We are providing new services for all developers.',
              }),
              onOk: function () {
                o.Message.info('Info Modal');
              },
            });
          },
          d = function () {
            o.Modal.success({
              title: 'Success Notification',
              content: (0, n.jsx)('p', {
                children:
                  'This is an success description which directly indicates a neutral informative change or action. (e.g., "We are providing new services for all developers.',
              }),
              onOk: function () {
                o.Message.success('Success Modal');
              },
            });
          },
          i = function () {
            o.Modal.error({
              title: 'Error Notification',
              content: (0, n.jsx)('p', {
                children:
                  'This is an error description which directly indicates a neutral informative change or action. (e.g., "We are providing new services for all developers.',
              }),
              onOk: function () {
                o.Message.error('Error Modal');
              },
            });
          },
          r = function () {
            o.Modal.warning({
              title: 'Warning Notification',
              content: (0, n.jsx)('p', {
                children:
                  'This is an warning description which directly indicates a neutral informative change or action. (e.g., "We are providing new services for all developers.',
              }),
              onOk: function () {
                o.Message.warning('Warning Modal');
              },
            });
          };
        return (0, n.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: { margin: '0 8px' },
              handleClick: s,
              children: 'Info',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: { margin: '0 8px' },
              handleClick: d,
              children: 'Success',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: { margin: '0 8px' },
              handleClick: r,
              children: 'Warning',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: { margin: '0 8px' },
              handleClick: i,
              children: 'Error',
            }),
          ],
        });
      }
    },
    37228: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function () {
          o.Modal.confirm({
            title: 'Modal Title',
            content: (0, n.jsx)('p', {
              children:
                'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
            }),
            onOk: function () {
              return o.Message.success('success');
            },
            onCancel: function () {
              return o.Message.error('cancel');
            },
          });
        };
        return (0, n.jsx)('div', {
          children: (0, n.jsx)(o.Button, { handleClick: s, children: 'Open Modal' }),
        });
      }
    },
    63129: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)(!1),
          u = o()(x, 2),
          _ = u[0],
          P = u[1],
          L = (0, n.useState)(!1),
          y = o()(L, 2),
          E = y[0],
          v = y[1],
          g = (0, n.useState)(!1),
          j = o()(g, 2),
          D = j[0],
          p = j[1],
          f = function () {
            p(!0),
              setTimeout(function () {
                P(!1), p(!1);
              }, 2e3);
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)('div', {
              style: { display: 'flex' },
              children: [
                (0, s.jsx)(e.Button, {
                  handleClick: function () {
                    return h(!0);
                  },
                  children: '\u6253\u5F00\u7981\u7528\u6309\u94AEModal',
                }),
                (0, s.jsx)(e.Button, {
                  style: { margin: '0 8px' },
                  handleClick: function () {
                    return P(!0);
                  },
                  children: '\u6253\u5F00\u81EA\u5B9A\u4E49\u9875\u811AModal',
                }),
                (0, s.jsx)(e.Button, {
                  handleClick: function () {
                    return v(!0);
                  },
                  children: '\u6253\u5F00\u65E0\u9875\u811AModal',
                }),
              ],
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              onCancel: function () {
                return h(!1);
              },
              onOk: function () {
                return h(!1);
              },
              okButtonProps: { disabled: !0 },
              cancelButtonProps: { disabled: !0 },
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: _,
              onCancel: function () {
                return P(!1);
              },
              footer: (0, s.jsxs)('div', {
                style: { display: 'flex' },
                children: [
                  (0, s.jsx)(e.Button, {
                    type: 'text',
                    handleClick: function () {
                      return P(!1);
                    },
                    children: 'Return',
                  }),
                  (0, s.jsx)(e.Button, {
                    style: { margin: '0 8px' },
                    type: 'text',
                    handleClick: f,
                    loading: D,
                    children: 'Async Return',
                  }),
                  (0, s.jsx)(e.Button, {
                    type: 'primary',
                    handleClick: function () {
                      return P(!1);
                    },
                    children: 'Enter',
                  }),
                ],
              }),
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: E,
              onCancel: function () {
                return v(!1);
              },
              onOk: function () {
                return v(!1);
              },
              footer: (0, s.jsx)(s.Fragment, {}),
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
          ],
        });
      }
    },
    45275: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)(!1),
          u = o()(x, 2),
          _ = u[0],
          P = u[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              style: { marginRight: '8px' },
              handleClick: function () {
                return h(!0);
              },
              children: 'Open Modal1',
            }),
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                return P(!0);
              },
              children: 'Open Modal2',
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              okText: 'Ok',
              cancelText: 'Cancel',
              onCancel: function () {
                return h(!1);
              },
              onOk: function () {
                return h(!1);
              },
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: _,
              okText: '\u597D\u7684',
              cancelText: '\u4E0B\u6B21\u518D\u8BF4',
              onCancel: function () {
                return P(!1);
              },
              onOk: function () {
                return P(!1);
              },
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
          ],
        });
      }
    },
    22006: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)(!0),
          u = o()(x, 2),
          _ = u[0],
          P = u[1],
          L = (0, n.useRef)(null),
          y = [
            { title: 'Name', dataIndex: 'name' },
            { title: 'Salary', dataIndex: 'salary' },
            { title: 'Address', dataIndex: 'address' },
          ],
          E = [
            { name: 'Jane Doe', salary: 23e3, address: '32 Park Road, London' },
            { name: 'Alisa Ross', salary: 25e3, address: '35 Park Road, London' },
            { name: 'Kevin Sandra', salary: 22e3, address: '31 Park Road, London' },
            { name: 'Ed Hellen', salary: 17e3, address: '42 Park Road, London' },
            { name: 'William Smith', salary: 27e3, address: '62 Park Road, London' },
          ],
          v = function () {
            P(!0),
              h(!0),
              (L.current = setTimeout(function () {
                P(!1);
              }, 2e3));
          },
          g = function () {
            h(!1),
              (L.current = null),
              setTimeout(function () {
                P(!0);
              }, 200);
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, { handleClick: v, children: 'Open Modal' }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              onOk: g,
              onCancel: g,
              width: '620px',
              children: (0, s.jsx)('div', {
                style: { height: _ ? '300px' : '100%', position: 'relative' },
                children: _
                  ? (0, s.jsx)(e.Loading, { loadingText: '\u6570\u636E\u8BF7\u6C42\u4E2D...' })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)('p', {
                          style: { lineHeight: '20px' },
                          children:
                            'You can select multiple plugins for the current project so that our app will verify that the plugins are installed and enabled.',
                        }),
                        (0, s.jsx)(e.Table, { titleParams: y, tableData: E, checked: !0 }),
                      ],
                    }),
              }),
            }),
          ],
        });
      }
    },
    32385: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = [
            { title: 'Name', dataIndex: 'name' },
            { title: 'Salary', dataIndex: 'salary' },
            { title: 'Address', dataIndex: 'address' },
          ],
          u = [
            { name: 'Jane Doe', salary: 23e3, address: '32 Park Road, London' },
            { name: 'Alisa Ross', salary: 25e3, address: '35 Park Road, London' },
            { name: 'Kevin Sandra', salary: 22e3, address: '31 Park Road, London' },
            { name: 'Ed Hellen', salary: 17e3, address: '42 Park Road, London' },
            { name: 'William Smith', salary: 27e3, address: '62 Park Road, London' },
          ];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                return h(!0);
              },
              children: 'Open Modal',
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              onOk: function () {
                return h(!1);
              },
              onCancel: function () {
                return h(!1);
              },
              width: '620px',
              children: (0, s.jsx)('div', {
                children: (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)(e.Steps, {
                      current: 2,
                      children: [
                        (0, s.jsx)(e.Step, { title: 'Waiting' }),
                        (0, s.jsx)(e.Step, { title: 'In Process' }),
                        (0, s.jsx)(e.Step, { title: 'Finished' }),
                      ],
                    }),
                    (0, s.jsx)('p', {
                      style: { lineHeight: '20px' },
                      children:
                        'You can select multiple plugins for the current project so that our app will verify that the plugins are installed and enabled.',
                    }),
                    (0, s.jsx)(e.Table, { titleParams: x, tableData: u, checked: !0 }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    65968: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                h(!0);
              },
              children: 'Open Modal',
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              width: 90,
              onOk: function () {
                return h(!1);
              },
              onCancel: function () {
                return h(!1);
              },
              children: (0, s.jsx)('p', {
                children:
                  'You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.',
              }),
            }),
          ],
        });
      }
    },
    54463: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(80915),
        e = a(5922),
        s = a(52454);
      function d() {
        (0, e.Z)('Nav');
        var i = [
          { label: 'Products', link: '#' },
          { label: 'Services', link: '#' },
          { label: 'Developers', link: '#' },
          { label: 'Use Cases', link: '#' },
          { label: 'Customers', link: '#' },
          { label: 'Company', link: '#' },
        ];
        return (0, s.jsx)(n.S, { children: (0, s.jsx)(o.Nav, { navData: i }) });
      }
    },
    32157: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(80915),
        e = a(52454);
      function s() {
        var d = [
            { label: 'Products', link: '#' },
            { label: 'Services', link: '#' },
            { label: 'Developers', link: '#' },
            { label: 'Use Cases', link: '#' },
            { label: 'Customers', link: '#' },
            { label: 'Company', link: '#' },
          ],
          i = [
            (0, e.jsxs)('div', {
              className: 'menu1',
              children: [
                (0, e.jsx)('p', { className: 'title', children: 'Product' }),
                (0, e.jsxs)('div', {
                  className: 'menu-list',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)('div', {
              className: 'menu2',
              children: [
                (0, e.jsx)('p', { className: 'title', children: 'Product' }),
                (0, e.jsxs)('div', {
                  className: 'menu-list',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)('div', {
              className: 'menu1',
              children: [
                (0, e.jsx)('p', { className: 'title', children: 'Product' }),
                (0, e.jsxs)('div', {
                  className: 'menu-list',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)('div', {
              className: 'menu2',
              children: [
                (0, e.jsx)('p', { className: 'title', children: 'Product' }),
                (0, e.jsxs)('div', {
                  className: 'menu-list',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu2-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 2' }),
                        (0, e.jsx)('p', { children: 'product2 introduce' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)('div', {
              className: 'menu1',
              children: [
                (0, e.jsx)('p', { className: 'title', children: 'Product' }),
                (0, e.jsxs)('div', {
                  className: 'menu-list',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                    (0, e.jsxs)('div', {
                      className: 'menu1-item',
                      children: [
                        (0, e.jsx)('span', { children: 'Product 1' }),
                        (0, e.jsx)('p', { children: 'product1 introduce' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsx)('div', { children: 'Hello! concis.' }),
          ];
        return (0, e.jsx)(n.S, { children: (0, e.jsx)(o.Nav, { navData: d, navContent: i }) });
      }
    },
    93722: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(80915),
        e = a(52454);
      function s() {
        var d = [
            { label: 'Products', link: '#' },
            { label: 'Services', link: '#' },
            { label: 'Developers', link: '#' },
            { label: 'Use Cases', link: '#' },
            { label: 'Customers', link: '#' },
            { label: 'Company', link: '#' },
          ],
          i = (0, e.jsxs)('div', {
            className: 'left-bar',
            children: [
              (0, e.jsx)('b', { children: 'Concis' }),
              (0, e.jsx)('p', { children: 'github star 10000+' }),
            ],
          }),
          r = (0, e.jsxs)('div', {
            className: 'right-bar',
            children: [
              (0, e.jsx)(o.Button, { height: 30, children: 'Login' }),
              (0, e.jsx)(o.Button, {
                type: 'danger',
                height: 30,
                style: { marginLeft: 20 },
                children: 'Try it now',
              }),
            ],
          });
        return (0, e.jsx)(n.S, {
          children: (0, e.jsx)(o.Nav, { navData: d, leftSlot: i, rightSlot: r }),
        });
      }
    },
    74083: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Notification');
        var d = function (r) {
          o.Notification.info({ title: 'Notification', content: r, duration: 3e3 });
        };
        return (0, e.jsx)(e.Fragment, {
          children: (0, e.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return d('This is a notification! ');
            },
            children: 'Open Notification',
          }),
        });
      }
    },
    21022: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Button, {
              type: 'primary',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Notification.info({
                  title: 'Notification',
                  content: 'This is an info Notification!',
                  duration: 3e3,
                });
              },
              children: 'Info',
            }),
            (0, n.jsx)(o.Button, {
              type: 'danger',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Notification.error({
                  title: 'Notification',
                  content: 'This is an error Notification!',
                  duration: 3e3,
                });
              },
              children: 'Error',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Notification.warning({
                  title: 'Notification',
                  content: 'This is an warning Notification!',
                  duration: 3e3,
                });
              },
              children: 'Warning',
            }),
            (0, n.jsx)(o.Button, {
              type: 'info',
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Notification.success({
                  title: 'Notification',
                  content: 'This is an success Notification!',
                  duration: 3e3,
                });
              },
              children: 'Success',
            }),
            (0, n.jsx)(o.Button, {
              style: { background: '#f2f3f5', color: '#000000', marginRight: '20px' },
              handleClick: function () {
                return o.Notification.normal({
                  title: 'Notification',
                  content: 'This is an normal Notification!',
                  duration: 3e3,
                });
              },
              children: 'Normal',
            }),
            (0, n.jsx)(o.Button, {
              type: 'warning',
              loading: !0,
              style: { marginRight: '20px' },
              handleClick: function () {
                return o.Notification.loading({
                  title: 'Notification',
                  content: 'This is an loading Notification!',
                  duration: 3e3,
                });
              },
              children: 'Loading',
            }),
          ],
        });
      }
    },
    22654: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          o.Notification.loading({ title: 'Notification', content: i, duration: 3e3 }),
            setTimeout(function () {
              o.Notification.success({ title: 'Success', content: 'update Success' });
            }, 3201);
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return s('This is an info Notification!');
            },
            children: 'Open Notification',
          }),
        });
      }
    },
    12942: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          o.Notification.info({ title: 'Notification', content: i, duration: 3e5, position: r });
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Button, {
              style: { marginRight: '20px' },
              type: 'primary',
              handleClick: function () {
                return s('This is a Notification in topLeft!', 'topLeft');
              },
              children: 'topLeft',
            }),
            (0, n.jsx)(o.Button, {
              style: { marginRight: '20px' },
              type: 'primary',
              handleClick: function () {
                return s('This is a Notification in topRight!', 'topRight');
              },
              children: 'topRight',
            }),
            (0, n.jsx)(o.Button, {
              style: { marginRight: '20px' },
              type: 'primary',
              handleClick: function () {
                return s('This is a Notification in bottomLeft!', 'bottomLeft');
              },
              children: 'bottomLeft',
            }),
            (0, n.jsx)(o.Button, {
              type: 'primary',
              handleClick: function () {
                return s('This is a Notification in bottomRight!', 'bottomRight');
              },
              children: 'bottomRight',
            }),
          ],
        });
      }
    },
    89213: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          o.Notification.info({
            title: 'Notification',
            content: i,
            duration: 3e3,
            clearable: !0,
            showFooter: !0,
            footerBtnVal: { enter: '\u786E\u8BA4', exit: '\u53D6\u6D88' },
            doneCallback: function (c) {
              console.log(c);
            },
          });
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return s('This is an info Notification!');
            },
            children: 'Open Notification',
          }),
        });
      }
    },
    57606: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          o.Notification.info({
            title: 'Notification',
            content: i,
            duration: 3e3,
            style: { width: '500px', fontSize: '15px' },
          });
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Button, {
            type: 'primary',
            style: { marginRight: '20px' },
            handleClick: function () {
              return s(
                'This is a notification! This is a notification! This is a notification! This is a notification!'
              );
            },
            children: 'Open Notification',
          }),
        });
      }
    },
    21442: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Pagination');
        var d = function (r) {
          console.log(r);
        };
        return (0, e.jsx)(o.Pagination, { total: 50, changePageCallback: d });
      }
    },
    90577: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Pagination, { defaultIndex: 3, total: 200, changePageCallback: s });
      }
    },
    54859: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [10, 20, 30, 50],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Pagination, {
          total: 200,
          showSizeChanger: !0,
          pageSizeOptions: s,
          changePageCallback: d,
        });
      }
    },
    44154: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [10, 20, 30, 50],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Pagination, {
          total: 200,
          showSizeChanger: !0,
          pageSizeOptions: s,
          showJumpInput: !0,
          changePageCallback: d,
        });
      }
    },
    9940: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Popover'),
          (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(o.Popover, {
              type: 'hover',
              style: { padding: '0 0 15px 15px' },
              content: (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, e.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, e.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                ],
              }),
              children: (0, e.jsx)(o.Button, { type: 'primary', children: 'Hover me' }),
            }),
          })
        );
      }
    },
    90621: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Popover, {
            type: 'click',
            style: { padding: '0 0 15px 15px' },
            align: 'right',
            dialogWidth: 200,
            content: (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)('p', {
                  style: { color: '#1d2129', fontSize: '16px' },
                  children: 'Title',
                }),
                (0, n.jsx)('div', {
                  style: { color: '#4e5969', fontSize: '14px' },
                  children: 'This is content',
                }),
                (0, n.jsx)('div', {
                  style: { color: '#4e5969', fontSize: '14px' },
                  children: 'This is content',
                }),
              ],
            }),
            children: (0, n.jsx)(o.Button, { type: 'primary', children: 'Click me' }),
          }),
        });
      }
    },
    96963: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Space, {
          children: [
            (0, n.jsx)(o.Popover, {
              type: 'click',
              style: { padding: '0 0 15px 15px' },
              align: 'bottom',
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 120,
                height: 30,
                children: 'Click to bottom',
              }),
            }),
            (0, n.jsx)(o.Popover, {
              type: 'click',
              style: { padding: '0 0 15px 15px' },
              align: 'top',
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 120,
                height: 30,
                children: 'Click to top',
              }),
            }),
            (0, n.jsx)(o.Popover, {
              type: 'click',
              style: { padding: '0 0 15px 15px' },
              align: 'left',
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 120,
                height: 30,
                children: 'Click to left',
              }),
            }),
            (0, n.jsx)(o.Popover, {
              type: 'click',
              style: { padding: '0 0 15px 15px' },
              align: 'right',
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 120,
                height: 30,
                children: 'Click to right',
              }),
            }),
          ],
        });
      }
    },
    16163: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = (0, t.createRef)(),
          d = (0, t.createRef)();
        return (0, n.jsxs)(o.Space, {
          children: [
            (0, n.jsx)(o.Popover, {
              type: 'hover',
              align: 'bottom',
              ref: s,
              style: { padding: '0 0 15px 15px' },
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('span', {
                    style: { color: '#325DFF', cursor: 'pointer' },
                    onClick: function () {
                      var r;
                      return (r = s.current) === null || r === void 0
                        ? void 0
                        : r.setShowDialog(!1);
                    },
                    children: 'close',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 80,
                height: 30,
                children: 'Hover',
              }),
            }),
            (0, n.jsx)(o.Popover, {
              type: 'click',
              align: 'bottom',
              ref: d,
              style: { padding: '0 0 15px 15px' },
              content: (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)('p', {
                    style: { color: '#1d2129', fontSize: '16px' },
                    children: 'Title',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('div', {
                    style: { color: '#4e5969', fontSize: '14px' },
                    children: 'This is content',
                  }),
                  (0, n.jsx)('span', {
                    style: { color: '#325DFF', cursor: 'pointer' },
                    onClick: function () {
                      return d.current.setShowDialog(!1);
                    },
                    children: 'close',
                  }),
                ],
              }),
              children: (0, n.jsx)(o.Button, {
                type: 'primary',
                width: 80,
                height: 30,
                children: 'Click',
              }),
            }),
          ],
        });
      }
    },
    76220: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(78193),
        e = a(52454);
      function s() {
        return (0, e.jsx)(n.I, {
          children: (0, e.jsx)(o.PreviewJump, {
            link: '#',
            children: (0, e.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img5.webp' }),
          }),
        });
      }
    },
    92557: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(78193),
        e = a(52454);
      function s() {
        return (0, e.jsx)(n.I, {
          children: (0, e.jsx)(o.PreviewJump, {
            link: '#',
            disabled: !0,
            children: (0, e.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img5.webp' }),
          }),
        });
      }
    },
    23550: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(93056),
        n = a(10782),
        e = a(78193),
        s = a(52454);
      function d() {
        var i = (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(o.Z, {}),
            (0, s.jsx)('span', { style: { marginLeft: 15 }, children: '\u9884\u89C8' }),
          ],
        });
        return (0, s.jsx)(e.I, {
          children: (0, s.jsx)(n.PreviewJump, {
            link: '#',
            jumpContent: i,
            children: (0, s.jsx)('img', { src: 'https://concis.org.cn/images/swiper-img5.webp' }),
          }),
        });
      }
    },
    52244: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(78193),
        e = a(52454);
      function s() {
        return (0, e.jsx)(n.I, {
          children: (0, e.jsxs)('div', {
            className: 'preview-demo',
            children: [
              (0, e.jsx)(o.PreviewJump, {
                link: '#',
                style: { width: 600, height: 240 },
                children: (0, e.jsx)('img', {
                  src: 'https://concis.org.cn/images/swiper-img5.webp',
                }),
              }),
              (0, e.jsxs)('div', {
                className: 'introduce',
                children: [
                  (0, e.jsx)('h1', { children: 'Beautiful scenery' }),
                  (0, e.jsx)('p', { children: "Let's see the beautiful scenery together" }),
                  (0, e.jsx)(o.Link, { href: '#', children: 'Read more' }),
                ],
              }),
            ],
          }),
        });
      }
    },
    96080: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Radio');
        var d = function (r, c) {
          console.log(r, c);
        };
        return (0, e.jsx)(e.Fragment, {
          children: (0, e.jsxs)(o.RadioGroup, {
            value: 0,
            onChange: d,
            children: [
              (0, e.jsx)(o.Radio, { children: 'Apple' }),
              (0, e.jsx)(o.Radio, { children: 'Orange' }),
              (0, e.jsx)(o.Radio, { children: 'Watch' }),
            ],
          }),
        });
      }
    },
    37763: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          console.log(i, r);
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.RadioGroup, {
            value: 1,
            onChange: s,
            children: [
              (0, n.jsx)(o.Radio, { disabled: !0, children: 'Apple' }),
              (0, n.jsx)(o.Radio, { children: 'Orange' }),
              (0, n.jsx)(o.Radio, { children: 'Watch' }),
            ],
          }),
        });
      }
    },
    86900: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          console.log(i, r);
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.RadioGroup, {
            value: 1,
            onChange: s,
            canAddOption: !0,
            children: [
              (0, n.jsx)(o.Radio, { disabled: !0, children: 'Apple' }),
              (0, n.jsx)(o.Radio, { children: 'Orange' }),
              (0, n.jsx)(o.Radio, { children: 'Watch' }),
            ],
          }),
        });
      }
    },
    4430: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i, r) {
          console.log(i, r);
        };
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.RadioGroup, {
            value: 1,
            onChange: s,
            addOptionText: 'addOption...',
            canAddOption: !0,
            boxStyle: !0,
            children: [
              (0, n.jsx)(o.Radio, { disabled: !0, children: 'Apple' }),
              (0, n.jsx)(o.Radio, { children: 'Orange' }),
              (0, n.jsx)(o.Radio, { children: 'Watch' }),
            ],
          }),
        });
      }
    },
    58981: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Rate');
        var d = function (r) {
          console.log(r);
        };
        return (0, e.jsx)(o.Rate, { chooseCallback: d });
      }
    },
    50532: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Rate, { starColor: 'red', chooseCallback: s });
      }
    },
    96966: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Rate, { num: 10, defaultShow: 6, chooseCallback: s });
      }
    },
    7953: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Rate, { readonly: !0, chooseCallback: s });
      }
    },
    46996: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (i) {
          console.log(i);
        };
        return (0, n.jsx)(o.Rate, { avaClear: !0, chooseCallback: s });
      }
    },
    33771: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(3),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function (_) {
            setTimeout(function () {
              h(_);
            }, 0);
          };
        return (0, s.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, s.jsx)(e.Rate, { num: 5, defaultShow: 3, avaClear: !0, chooseCallback: x }),
            (0, s.jsxs)('div', { className: 'result', children: [c, '\u5206'] }),
          ],
        });
      }
    },
    75506: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Select');
        var d = [
            { label: 'Mucy', value: 'mucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'aMck', value: 'amck' },
          ],
          i = function (c) {
            console.log(c);
          };
        return (0, e.jsx)(o.Select, {
          option: d,
          width: 100,
          handleSelectCallback: i,
          placeholder: '\u8BF7\u9009\u62E9',
        });
      }
    },
    31078: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Lucy', value: 'lucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'Jack', value: 'jack' },
          ],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Select, {
          option: s,
          width: 100,
          disabled: !0,
          handleSelectCallback: d,
          placeholder: '\u8BF7\u9009\u62E9',
        });
      }
    },
    70284: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Lucy', value: 'lucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'Jack', value: 'jack' },
          ],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Select, {
          option: s,
          width: 100,
          loading: !0,
          handleSelectCallback: d,
          placeholder: '\u8BF7\u9009\u62E9',
        });
      }
    },
    22753: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Lucy', value: 'lucy', disabled: !0 },
            { label: 'Mike', value: 'mike', disabled: !0 },
            { label: 'Jack', value: 'jack' },
          ],
          d = function (r) {
            console.log(r);
          };
        return (0, n.jsx)(o.Select, {
          option: s,
          width: 100,
          handleSelectCallback: d,
          placeholder: '\u8BF7\u9009\u62E9',
        });
      }
    },
    45290: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
            { label: 'Mucy', value: 'mucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'aMck', value: 'amck' },
          ],
          d = function (c) {
            console.log(c);
          },
          i = function (c) {
            console.log(c);
          };
        return (0, n.jsx)(o.Select, {
          option: s,
          width: 100,
          handleSelectCallback: d,
          handleTextChange: i,
          showSearch: !0,
          placeholder: '\u8BF7\u8F93\u5165',
          clearable: !0,
        });
      }
    },
    9655: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '0 8px' },
          d = [
            { label: 'Mucy', value: 'mucy' },
            { label: 'Mike', value: 'mike' },
            { label: 'aMck', value: 'amck' },
          ],
          i = function (c) {
            console.log(c);
          };
        return (0, n.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            (0, n.jsx)(o.Select, {
              type: 'primary',
              style: s,
              option: d,
              width: 100,
              handleSelectCallback: i,
              placeholder: '\u8BF7\u9009\u62E9',
            }),
            (0, n.jsx)(o.Select, {
              type: 'error',
              style: s,
              option: d,
              width: 100,
              handleSelectCallback: i,
              placeholder: '\u8BF7\u9009\u62E9',
            }),
            (0, n.jsx)(o.Select, {
              type: 'warning',
              style: s,
              option: d,
              width: 100,
              handleSelectCallback: i,
              placeholder: '\u8BF7\u9009\u62E9',
            }),
            (0, n.jsx)(o.Select, {
              type: 'success',
              style: s,
              option: d,
              width: 100,
              handleSelectCallback: i,
              placeholder: '\u8BF7\u9009\u62E9',
            }),
          ],
        });
      }
    },
    49100: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Skeleton'),
          (0, e.jsx)('div', {
            style: { width: '700px' },
            children: (0, e.jsx)(o.Skeleton, { loading: !0 }),
          })
        );
      }
    },
    89689: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { width: '700px' },
          children: (0, n.jsx)(o.Skeleton, { loading: !0, title: !0 }),
        });
      }
    },
    751: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { width: '700px' },
          children: (0, n.jsx)(o.Skeleton, { loading: !0, title: !0, avatar: !0, size: 64 }),
        });
      }
    },
    86033: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          style: { width: '700px' },
          children: (0, n.jsx)(o.Skeleton, {
            loading: !0,
            title: !0,
            avatar: !0,
            row: 4,
            width: ['50%', '60%', '70%', '80%'],
          }),
        });
      }
    },
    32322: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!0),
          r = o()(i, 2),
          c = r[0],
          h = r[1];
        (0, n.useEffect)(
          function () {
            console.log(c);
          },
          [c]
        );
        var x = [
          {
            title: 'Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Toutiao Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'Beijing Volcengine Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
          {
            title: 'China Beijing Bytedance Technology Co., Ltd.',
            content: 'Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.',
          },
        ];
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e.Switch, {
              handleChange: function () {
                return h(!c);
              },
            }),
            (0, s.jsx)('div', {
              style: { width: '800px' },
              children: (0, s.jsx)(e.List, {
                style: { fontSize: '16px', width: '600px' },
                size: 'default',
                dataSource: x,
                render: function (_) {
                  return c
                    ? (0, s.jsx)(e.Skeleton, {
                        loading: c,
                        title: !0,
                        avatar: !0,
                        row: 2,
                        width: ['60%', 400],
                      })
                    : (0, s.jsx)(e.List.Item, {
                        style: { fontSize: '14px' },
                        children: (0, s.jsxs)('div', {
                          className: 'list',
                          children: [
                            (0, s.jsx)(e.Avatar, {
                              shape: 'square',
                              style: { background: '#325DFF' },
                              children: 'A',
                            }),
                            (0, s.jsxs)('div', {
                              className: 'text',
                              children: [
                                (0, s.jsx)('span', { className: 'title', children: _.title }),
                                (0, s.jsx)('span', { className: 'content', children: _.content }),
                              ],
                            }),
                          ],
                        }),
                      });
                },
              }),
            }),
          ],
        });
      }
    },
    11623: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Space'),
          (0, e.jsxs)(o.Space, {
            children: [
              (0, e.jsx)(o.Button, { type: 'primary', children: 'Button1' }),
              (0, e.jsx)(o.Button, { type: 'primary', children: 'Button2' }),
              (0, e.jsx)(o.Button, { type: 'primary', children: 'Button3' }),
            ],
          })
        );
      }
    },
    56202: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Space, {
          direction: 'vertical',
          children: [
            (0, n.jsx)(o.Button, { type: 'primary', children: 'Button1' }),
            (0, n.jsx)(o.Button, { type: 'primary', children: 'Button2' }),
            (0, n.jsx)(o.Button, { type: 'primary', children: 'Button3' }),
          ],
        });
      }
    },
    63858: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)('small'),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function (_) {
            h(_.children), console.log(c);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 1,
              onChange: x,
              children: [
                (0, s.jsx)(e.Radio, { children: 'mini' }),
                (0, s.jsx)(e.Radio, { children: 'small' }),
                (0, s.jsx)(e.Radio, { children: 'medium' }),
                (0, s.jsx)(e.Radio, { children: 'large' }),
              ],
            }),
            (0, s.jsx)('br', {}),
            (0, s.jsxs)(e.Space, {
              size: c,
              children: [
                (0, s.jsx)(e.Button, { type: 'primary', children: 'Button1' }),
                (0, s.jsx)(e.Button, { type: 'primary', children: 'Button2' }),
                (0, s.jsx)(e.Button, { type: 'primary', children: 'Button3' }),
              ],
            }),
          ],
        });
      }
    },
    38508: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)('small'),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = function (_) {
            h(_.children), console.log(c);
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 1,
              onChange: x,
              children: [
                (0, s.jsx)(e.Radio, { children: 'start' }),
                (0, s.jsx)(e.Radio, { children: 'center' }),
                (0, s.jsx)(e.Radio, { children: 'end' }),
                (0, s.jsx)(e.Radio, { children: 'baseline' }),
              ],
            }),
            (0, s.jsx)('br', {}),
            (0, s.jsxs)(e.Space, {
              align: c,
              children: [
                (0, s.jsx)(e.Button, { type: 'primary', children: 'Button1' }),
                (0, s.jsx)(e.Button, { type: 'primary', children: 'Button2' }),
                (0, s.jsx)(e.Button, { type: 'primary', height: 90, children: 'Button3' }),
              ],
            }),
          ],
        });
      }
    },
    60687: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.Space, {
          size: [12, 18],
          wrap: !0,
          children: new Array(30).fill('').map(function (s, d) {
            return (0, n.jsxs)(o.Button, { type: 'primary', children: ['\u6309\u94AE', d + 1] });
          }),
        });
      }
    },
    76099: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Steps'),
          (0, e.jsxs)(o.Steps, {
            current: 2,
            children: [
              (0, e.jsx)(o.Step, { title: 'Waiting' }),
              (0, e.jsx)(o.Step, { title: 'In Process' }),
              (0, e.jsx)(o.Step, { title: 'Finished' }),
            ],
          })
        );
      }
    },
    59207: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)(o.Steps, {
          current: 2,
          children: [
            (0, n.jsx)(o.Step, {
              title: 'Waiting',
              subTitle: 'subtitle',
              description: 'this is description',
            }),
            (0, n.jsx)(o.Step, {
              title: 'In Process',
              subTitle: 'subtitle',
              description: 'this is description',
            }),
            (0, n.jsx)(o.Step, {
              title: 'Finished',
              subTitle: 'subtitle',
              description: 'this is description',
            }),
          ],
        });
      }
    },
    12889: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          { title: 'Waiting', subTitle: 'subTitle', description: 'this is description' },
          { title: 'In Process', subTitle: 'subTitle', description: 'this is description' },
          { title: 'Finished', subTitle: 'subTitle', description: 'this is description' },
        ];
        return (0, n.jsx)(o.Steps, {
          current: 2,
          children: s.map(function (d) {
            return (0,
            n.jsx)(o.Step, { title: d.title, subTitle: d.subTitle, description: d.description }, d.title);
          }),
        });
      }
    },
    53381: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = [
            { title: 'Waiting', subTitle: 'subTitle', description: 'this is description' },
            { title: 'In Process', subTitle: 'subTitle', description: 'this is description' },
            { title: 'Finished', subTitle: 'subTitle', description: 'this is description' },
          ],
          u = function (P) {
            console.log('onChange:', P), h(P);
          };
        return (0, s.jsx)(e.Steps, {
          current: c,
          onChange: u,
          children: x.map(function (_) {
            return (0,
            s.jsx)(e.Step, { title: _.title, subTitle: _.subTitle, description: _.description }, _.title);
          }),
        });
      }
    },
    48756: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Swiper');
        var d = [
          'https://concis.org.cn/images/swiper-img1.webp',
          'https://concis.org.cn/images/swiper-img2.webp',
          'https://concis.org.cn/images/swiper-img3.webp',
          'https://concis.org.cn/images/swiper-img4.webp',
          'https://concis.org.cn/images/swiper-img5.webp',
        ];
        return (0, e.jsx)(o.Swiper, { imgList: d, pictureSize: 600, height: 240 });
      }
    },
    93449: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          'https://concis.org.cn/images/swiper-img1.webp',
          'https://concis.org.cn/images/swiper-img2.webp',
          'https://concis.org.cn/images/swiper-img3.webp',
          'https://concis.org.cn/images/swiper-img4.webp',
          'https://concis.org.cn/images/swiper-img5.webp',
        ];
        return (0, n.jsx)(o.Swiper, {
          imgList: s,
          pictureSize: 600,
          height: 240,
          deply: 3e3,
          autoPlayer: !0,
        });
      }
    },
    1245: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          'https://concis.org.cn/images/swiper-img1.webp',
          'https://concis.org.cn/images/swiper-img2.webp',
          'https://concis.org.cn/images/swiper-img3.webp',
          'https://concis.org.cn/images/swiper-img4.webp',
          'https://concis.org.cn/images/swiper-img5.webp',
        ];
        return (0, n.jsx)(o.Swiper, {
          imgList: s,
          pictureSize: 600,
          height: 240,
          deply: 3e3,
          autoPlayer: !0,
          showTrigger: !0,
        });
      }
    },
    20193: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = [
          'https://concis.org.cn/images/swiper-img1.webp',
          'https://concis.org.cn/images/swiper-img2.webp',
          'https://concis.org.cn/images/swiper-img3.webp',
          'https://concis.org.cn/images/swiper-img4.webp',
          'https://concis.org.cn/images/swiper-img5.webp',
        ];
        return (0, n.jsx)(o.Swiper, {
          imgList: s,
          pictureSize: 500,
          height: 240,
          showTrigger: !0,
          deply: 3e3,
          card: !0,
          autoPlayer: !0,
        });
      }
    },
    52520: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (0, n.Z)('Switch'), (0, e.jsx)(o.Switch, {});
      }
    },
    49250: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Switch, { disabled: !0 }),
            (0, n.jsx)(o.Switch, {
              style: { marginLeft: '10px' },
              defaultChecked: !0,
              disabled: !0,
            }),
          ],
        });
      }
    },
    32868: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Switch, { style: { marginRight: '10px' }, defaultChecked: !0, small: !0 }),
            (0, n.jsx)(o.Switch, { defaultChecked: !0 }),
          ],
        });
      }
    },
    49623: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(23614),
        n = a(5991),
        e = a(10782),
        s = a(52454);
      function d() {
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Switch, {
              defaultChecked: !0,
              checkedChildren: '\u5F00\u542F',
              unCheckedChildren: '\u5173\u95ED',
            }),
            (0, s.jsx)(e.Switch, {
              style: { marginLeft: '10px' },
              defaultChecked: !0,
              checkedChildren: (0, s.jsx)(o.Z, {}),
              unCheckedChildren: (0, s.jsx)(n.Z, {}),
            }),
          ],
        });
      }
    },
    83187: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Switch, { style: { marginRight: '10px' }, loading: !0 }),
            (0, n.jsx)(o.Switch, { defaultChecked: !0, loading: !0 }),
          ],
        });
      }
    },
    65279: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454),
        s = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Email', dataIndex: 'email' },
        ],
        d = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function i() {
        return (0, n.Z)('Table'), (0, e.jsx)(o.Table, { titleParams: s, tableData: d });
      }
    },
    97293: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Email', dataIndex: 'email' },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        var i = function (c) {
          console.log(c);
        };
        return (0, n.jsx)(o.Table, {
          titleParams: e,
          tableData: s,
          dropCallback: i,
          dropabled: !0,
          checked: !0,
        });
      }
    },
    13955: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name', width: '200' },
          { title: 'Salary', dataIndex: 'salary', sorter: !0, filter: !0 },
          {
            title: 'Address',
            dataIndex: 'address',
            sorter: [
              function (i, r) {
                return i.address.length - r.address.length;
              },
              function (i, r) {
                return r.address.length - i.address.length;
              },
            ],
          },
          {
            title: 'Email',
            dataIndex: 'email',
            sorter: [
              function (i, r) {
                return i.email.split('@')[0].length - r.email.split('@')[0].length;
              },
              function (i, r) {
                return r.email.split('@')[0].length - i.email.split('@')[0].length;
              },
            ],
            filter: !0,
          },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London11111111',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London11',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London111111111111',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(o.Table, { titleParams: e, tableData: s, avableSort: !0, filter: !0 });
      }
    },
    74980: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name', width: '200' },
          { title: 'Salary', dataIndex: 'salary', width: '300' },
          { title: 'Address', dataIndex: 'address', width: '400' },
          { title: 'Email', dataIndex: 'email' },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Table, { align: 'center', titleParams: e, tableData: s }),
        });
      }
    },
    27370: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Email', dataIndex: 'email' },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Table, {
            titleParams: e,
            tableData: s,
            expandedRowRender: function (r) {
              return 'Th is No.'.concat(r.name, ' description.');
            },
          }),
        });
      }
    },
    26819: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Email', dataIndex: 'email' },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Table, {
            titleParams: e,
            tableData: s,
            radio: !0,
            radioSelectCallback: function (r) {
              return console.log(r);
            },
          }),
        });
      }
    },
    57769: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary' },
          { title: 'Address', dataIndex: 'address' },
          { title: 'Email', dataIndex: 'email' },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(o.Table, {
            titleParams: e,
            tableData: s,
            checked: !0,
            checkedSelectCallback: function (r) {
              return console.log(r);
            },
          }),
        });
      }
    },
    65631: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name', width: '200' },
          { title: 'Salary', dataIndex: 'salary', sorter: !0 },
          {
            title: 'Address',
            dataIndex: 'address',
            sorter: [
              function (i, r) {
                return i.address.length - r.address.length;
              },
              function (i, r) {
                return r.address.length - i.address.length;
              },
            ],
          },
          {
            title: 'Email',
            dataIndex: 'email',
            sorter: [
              function (i, r) {
                return i.email.split('@')[0].length - r.email.split('@')[0].length;
              },
              function (i, r) {
                return r.email.split('@')[0].length - i.email.split('@')[0].length;
              },
            ],
          },
        ],
        s = [
          {
            name: 'Jane Doe',
            salary: 23e3,
            address: '32 Park Road, London11111111',
            email: 'jane.doe@example.com',
          },
          {
            name: 'Alisa Ross',
            salary: 25e3,
            address: '35 Park Road, London11',
            email: 'alisa.ross@example.com',
          },
          {
            name: 'Kevin Sandra',
            salary: 22e3,
            address: '31 Park Road, London111111111111',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 'Ed Hellen',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 'William Smith',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(o.Table, {
          titleParams: e,
          tableData: s,
          expandedRowRender: function (r) {
            return 'Th is No.'.concat(r.name, ' description.');
          },
          avableSort: !0,
        });
      }
    },
    75677: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name' },
          { title: 'Salary', dataIndex: 'salary', sorter: !0 },
          { title: 'Address', dataIndex: 'address' },
          {
            title: 'Email',
            dataIndex: 'email',
            sorter: [
              function (i, r) {
                return i.email.split('@')[0].length - r.email.split('@')[0].length;
              },
              function (i, r) {
                return r.email.split('@')[0].length - i.email.split('@')[0].length;
              },
            ],
          },
        ],
        s = [
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 54,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(o.Table, {
          titleParams: e,
          tableData: s,
          largeDateShowNum: 15,
          avableSort: !0,
          virtualized: !0,
          checked: !0,
        });
      }
    },
    33666: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name', width: '300' },
          { title: 'Salary', dataIndex: 'salary', width: '300' },
          { title: 'Address', dataIndex: 'address', width: '300' },
          { title: 'Email', dataIndex: 'email', width: '300' },
        ],
        s = [
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ];
      function d() {
        return (0, n.jsx)(o.Table, {
          titleParams: e,
          tableData: s,
          largeDateShowNum: 15,
          lazyLoad: !0,
          checked: !0,
        });
      }
    },
    90677: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return r;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          { title: 'Name', dataIndex: 'name', width: '300' },
          { title: 'Salary', dataIndex: 'salary', width: '300' },
          { title: 'Address', dataIndex: 'address', width: '300' },
          { title: 'Email', dataIndex: 'email', width: '300' },
        ],
        s = [
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '1',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '2',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '3',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '4',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '5',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '6',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '7',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '8',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '9',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '10',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '11',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '12',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '13',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '14',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '15',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '16',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '17',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '18',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '19',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '20',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '21',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '22',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '23',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '24',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '25',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '26',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '27',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '28',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '29',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '30',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '31',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '32',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '33',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '34',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '35',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '36',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '37',
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 38,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 39,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 40,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 41,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 42,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 43,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 44,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 45,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '46',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 47,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 48,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 49,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 50,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 51,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 52,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 53,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 40,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 55,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 56,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 57,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: 58,
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: 59,
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: 60,
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: 61,
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: 62,
            salary: 22e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '63',
            salary: 17e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '64',
            salary: 27e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            name: '65',
            salary: 23e3,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            name: '66',
            salary: 25e3,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            name: '67',
            salary: 228e3,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            name: '68',
            salary: 178e3,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            name: '69',
            salary: 278e3,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ],
        d = function (h, x) {
          console.log(h, x);
        },
        i = function (h, x) {
          console.log(h, x);
        };
      function r() {
        return (0, n.jsx)(o.Table, {
          titleParams: e,
          tableData: s,
          pagination: !0,
          checked: !0,
          paginationAlign: 'center',
          changePNumCallback: d,
          changePSizeCallback: i,
        });
      }
    },
    17691: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454),
        s = o.Tabs.TabPane;
      function d() {
        (0, n.Z)('Tabs');
        var i = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '80px 0',
        };
        return (0, e.jsx)('div', {
          children: (0, e.jsxs)(o.Tabs, {
            defaultActiveTab: '1',
            children: [
              (0, e.jsx)(
                s,
                {
                  title: 'Tab 1',
                  children: (0, e.jsx)('div', {
                    style: i,
                    children: 'Hello Concis!This is thie content of Tab Panel 1',
                  }),
                },
                '1'
              ),
              (0, e.jsx)(
                s,
                {
                  title: 'Tab 2',
                  children: (0, e.jsx)('div', {
                    style: i,
                    children: 'Hello Concis!This is thie content of Tab Panel 2',
                  }),
                },
                '2'
              ),
              (0, e.jsx)(
                s,
                {
                  title: 'Tab 3',
                  children: (0, e.jsx)('div', {
                    style: i,
                    children: 'Hello Concis!This is thie content of Tab Panel 3',
                  }),
                },
                '3'
              ),
            ],
          }),
        });
      }
    },
    32212: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = e.Tabs.TabPane;
      function i() {
        var r = (0, n.useState)('top'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '100px 0',
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (P) {
                return x(P.children);
              },
              style: { marginBottom: '100px' },
              children: [
                (0, s.jsx)(e.Radio, { children: 'top' }),
                (0, s.jsx)(e.Radio, { children: 'bottom' }),
                (0, s.jsx)(e.Radio, { children: 'left' }),
                (0, s.jsx)(e.Radio, { children: 'right' }),
              ],
            }),
            (0, s.jsxs)(e.Tabs, {
              defaultActiveTab: '1',
              tabPosition: h,
              children: [
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 1',
                    children: (0, s.jsx)('div', {
                      style: u,
                      children: 'Hello Concis!This is thie content of Tab Panel 1',
                    }),
                  },
                  '1'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 2',
                    disabled: !0,
                    children: (0, s.jsx)('div', {
                      style: u,
                      children: 'Hello Concis!This is thie content of Tab Panel 2',
                    }),
                  },
                  '2'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 3',
                    children: (0, s.jsx)('div', {
                      style: u,
                      children: 'Hello Concis!This is thie content of Tab Panel 3',
                    }),
                  },
                  '3'
                ),
              ],
            }),
          ],
        });
      }
    },
    59304: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = e.Tabs.TabPane;
      function i() {
        var r = (0, n.useState)('line'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = (0, n.useState)('top'),
          _ = o()(u, 2),
          P = _[0],
          L = _[1],
          y = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '100px 0',
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (v) {
                return x(v.children);
              },
              children: [
                (0, s.jsx)(e.Radio, { children: 'line' }),
                (0, s.jsx)(e.Radio, { children: 'text' }),
                (0, s.jsx)(e.Radio, { children: 'round' }),
                (0, s.jsx)(e.Radio, { children: 'card' }),
              ],
            }),
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (v) {
                return L(v.children);
              },
              style: { marginBottom: '100px' },
              children: [
                (0, s.jsx)(e.Radio, { children: 'top' }),
                (0, s.jsx)(e.Radio, { children: 'bottom' }),
                (0, s.jsx)(e.Radio, { children: 'left' }),
                (0, s.jsx)(e.Radio, { children: 'right' }),
              ],
            }),
            (0, s.jsxs)(e.Tabs, {
              defaultActiveTab: '1',
              type: h,
              tabPosition: P,
              children: [
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 1',
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 1',
                    }),
                  },
                  '1'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 2',
                    disabled: !0,
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 2',
                    }),
                  },
                  '2'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 3',
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 3',
                    }),
                  },
                  '3'
                ),
              ],
            }),
          ],
        });
      }
    },
    91871: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = o.Tabs.TabPane;
      function s() {
        var d = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '80px 0',
        };
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Tabs, {
            defaultActiveTab: '1',
            extra: (0, n.jsx)(o.Button, { type: 'primary', height: 28, children: 'Action' }),
            children: [
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 1',
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 1',
                  }),
                },
                '1'
              ),
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 2',
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 2',
                  }),
                },
                '2'
              ),
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 3',
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 3',
                  }),
                },
                '3'
              ),
            ],
          }),
        });
      }
    },
    76577: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return c;
          },
        });
      var t = a(93525),
        o = a.n(t),
        n = a(54306),
        e = a.n(n),
        s = a(22374),
        d = a(10782),
        i = a(52454),
        r = d.Tabs.TabPane;
      function c() {
        var h = (0, s.useState)([
            {
              key: '1',
              title: 'Tab 1',
              content: 'Hello Concis!This is thie content of Tab Panel 1',
            },
            {
              key: '2',
              title: 'Tab 2',
              content: 'Hello Concis!This is thie content of Tab Panel 2',
            },
            {
              key: '3',
              title: 'Tab 3',
              content: 'Hello Concis!This is thie content of Tab Panel 3',
            },
          ]),
          x = e()(h, 2),
          u = x[0],
          _ = x[1],
          P = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '80px 0',
          },
          L = function () {
            _(function (v) {
              return [].concat(o()(v), [
                {
                  key: 'key-'.concat(v.length + 1),
                  title: 'New Tab '.concat(v.length + 1),
                  content: 'Hello Concis!This is thie content of Tab Panel '.concat(v.length + 1),
                },
              ]);
            });
          },
          y = function (v) {
            _(function (g) {
              return g.filter(function (j) {
                return j.key !== v;
              });
            });
          };
        return (0, i.jsx)('div', {
          children: (0, i.jsx)(d.Tabs, {
            defaultActiveTab: '1',
            type: 'card',
            tabPosition: 'top',
            editable: !0,
            onAddTab: L,
            onDeleteTab: y,
            children: u.map(function (E) {
              return (0,
              i.jsx)(r, { title: E.title, children: (0, i.jsx)('div', { style: P, children: E.content }) }, E.key);
            }),
          }),
        });
      }
    },
    44317: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = o.Tabs.TabPane;
      function s() {
        var d = {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '100px 0',
        };
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Tabs, {
            defaultActiveTab: '1',
            children: [
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 1',
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 1',
                  }),
                },
                '1'
              ),
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 2',
                  disabled: !0,
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 2',
                  }),
                },
                '2'
              ),
              (0, n.jsx)(
                e,
                {
                  title: 'Tab 3',
                  children: (0, n.jsx)('div', {
                    style: d,
                    children: 'Hello Concis!This is thie content of Tab Panel 3',
                  }),
                },
                '3'
              ),
            ],
          }),
        });
      }
    },
    53636: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(57213),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = e.Tabs.TabPane;
      function i() {
        var r = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' };
        return (0, s.jsx)('div', {
          children: (0, s.jsxs)(e.Tabs, {
            defaultActiveTab: 'tab1',
            tabPosition: 'left',
            children: [
              (0, s.jsx)(
                d,
                {
                  title: 'Tab 1',
                  children: (0, s.jsx)('div', {
                    children: (0, s.jsxs)(e.Tabs, {
                      defaultActiveTab: 'tab1',
                      children: [
                        (0, s.jsx)(
                          d,
                          {
                            title: 'Tab 1',
                            children: (0, s.jsx)('div', {
                              style: o()(o()({}, r), {}, { padding: '100px' }),
                              children: 'Hello Concis!This is thie content of Tab Panel 1',
                            }),
                          },
                          'tab1'
                        ),
                        (0, s.jsx)(
                          d,
                          {
                            title: 'Tab 2',
                            children: (0, s.jsx)('div', {
                              style: o()(o()({}, r), {}, { padding: '100px' }),
                              children: 'Hello Concis!This is thie content of Tab Panel 2',
                            }),
                          },
                          'tab2'
                        ),
                        (0, s.jsx)(
                          d,
                          {
                            title: 'Tab 3',
                            children: (0, s.jsx)('div', {
                              style: o()(o()({}, r), {}, { padding: '100px' }),
                              children: 'Hello Concis!This is thie content of Tab Panel 3',
                            }),
                          },
                          'tab3'
                        ),
                      ],
                    }),
                  }),
                },
                'tab1'
              ),
              (0, s.jsx)(
                d,
                {
                  title: 'Tab 2',
                  children: (0, s.jsx)('div', {
                    style: r,
                    children: 'Hello Concis!This is thie content of Tab Panel 2',
                  }),
                },
                'tab2'
              ),
              (0, s.jsx)(
                d,
                {
                  title: 'Tab 3',
                  children: (0, s.jsx)('div', {
                    style: r,
                    children: 'Hello Concis!This is thie content of Tab Panel 3',
                  }),
                },
                'tab3'
              ),
            ],
          }),
        });
      }
    },
    89230: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = e.Tabs.TabPane;
      function i() {
        var r = (0, n.useState)('line'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = (0, n.useState)('default'),
          _ = o()(u, 2),
          P = _[0],
          L = _[1],
          y = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '100px 0',
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (v) {
                return x(v.children);
              },
              children: [
                (0, s.jsx)(e.Radio, { children: 'line' }),
                (0, s.jsx)(e.Radio, { children: 'text' }),
                (0, s.jsx)(e.Radio, { children: 'round' }),
                (0, s.jsx)(e.Radio, { children: 'card' }),
              ],
            }),
            (0, s.jsxs)(e.RadioGroup, {
              value: 2,
              onChange: function (v) {
                return L(v.children);
              },
              style: { marginBottom: '100px' },
              children: [
                (0, s.jsx)(e.Radio, { children: 'mini' }),
                (0, s.jsx)(e.Radio, { children: 'small' }),
                (0, s.jsx)(e.Radio, { children: 'default' }),
                (0, s.jsx)(e.Radio, { children: 'large' }),
              ],
            }),
            (0, s.jsxs)(e.Tabs, {
              defaultActiveTab: '1',
              type: h,
              size: P,
              children: [
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 1',
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 1',
                    }),
                  },
                  '1'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 2',
                    disabled: !0,
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 2',
                    }),
                  },
                  '2'
                ),
                (0, s.jsx)(
                  d,
                  {
                    title: 'Tab 3',
                    children: (0, s.jsx)('div', {
                      style: y,
                      children: 'Hello Concis!This is thie content of Tab Panel 3',
                    }),
                  },
                  '3'
                ),
              ],
            }),
          ],
        });
      }
    },
    81554: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return i;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454),
        d = e.Tabs.TabPane;
      function i() {
        var r = (0, n.useState)('top'),
          c = o()(r, 2),
          h = c[0],
          x = c[1],
          u = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '100px 0',
          };
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsxs)(e.RadioGroup, {
              value: 0,
              onChange: function (P) {
                return x(P.children);
              },
              style: { marginBottom: '100px' },
              children: [
                (0, s.jsx)(e.Radio, { children: 'top' }),
                (0, s.jsx)(e.Radio, { children: 'bottom' }),
                (0, s.jsx)(e.Radio, { children: 'left' }),
                (0, s.jsx)(e.Radio, { children: 'right' }),
              ],
            }),
            (0, s.jsx)(e.Tabs, {
              defaultActiveTab: '0',
              tabPosition: h,
              children: new Array(25).fill('').map(function (_, P) {
                return (0,
                s.jsx)(d, { title: 'Tab '.concat(P + 1), children: (0, s.jsxs)('div', { style: u, children: ['Hello Concis!This is thie content of Tab Panel ', P + 1] }) }, String(P));
              }),
            }),
          ],
        });
      }
    },
    1416: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        (0, n.Z)('Tag');
        var d = { margin: '0 12px' };
        return (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)(o.Tag, { style: d, children: 'Tag 1' }),
            (0, e.jsx)(o.Tag, { style: d, children: 'Tag 2' }),
            (0, e.jsx)(o.Tag, { style: d, children: 'Tag 3' }),
          ],
        });
      }
    },
    61808: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '0 12px' };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Tag, { style: s, color: '#f53f3f', children: 'Tag 1' }),
            (0, n.jsx)(o.Tag, { style: s, color: '#00b42a', children: 'Tag 2' }),
            (0, n.jsx)(o.Tag, { style: s, color: '#ff7d00', children: 'Tag 3' }),
          ],
        });
      }
    },
    37470: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '0 12px' };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Tag, {
              style: s,
              tagBackground: '#f53f3f',
              color: '#ffffff',
              children: 'Tag 1',
            }),
            (0, n.jsx)(o.Tag, {
              style: s,
              tagBackground: '#00b42a',
              color: '#ffffff',
              children: 'Tag 2',
            }),
            (0, n.jsx)(o.Tag, {
              style: s,
              tagBackground: '#ff7d00',
              color: '#ffffff',
              children: 'Tag 3',
            }),
          ],
        });
      }
    },
    50353: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)('#ffffff'),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)('#ffffff'),
          u = o()(x, 2),
          _ = u[0],
          P = u[1],
          L = (0, n.useState)('#ffffff'),
          y = o()(L, 2),
          E = y[0],
          v = y[1],
          g = { margin: '0 12px' };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e.Tag, {
              style: g,
              tagBackground: '#f53f3f',
              color: c,
              checkable: !0,
              checkCallback: function (D) {
                return h(D ? '#ffffff' : '#000000');
              },
              children: 'Tag 1',
            }),
            (0, s.jsx)(e.Tag, {
              style: g,
              tagBackground: '#00b42a',
              color: _,
              checkable: !0,
              checkCallback: function (D) {
                return P(D ? '#ffffff' : '#000000');
              },
              children: 'Tag 2',
            }),
            (0, s.jsx)(e.Tag, {
              style: g,
              tagBackground: '#ff7d00',
              color: E,
              checkable: !0,
              checkCallback: function (D) {
                return v(D ? '#ffffff' : '#000000');
              },
              children: 'Tag 3',
            }),
          ],
        });
      }
    },
    29940: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '0 12px' };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Tag, { style: s, closeable: !0, children: 'Tag 1' }),
            (0, n.jsx)(o.Tag, { style: s, closeable: !0, children: 'Tag 2' }),
            (0, n.jsx)(o.Tag, { style: s, closeable: !0, children: 'Tag 3' }),
          ],
        });
      }
    },
    24760: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1],
          x = (0, n.useState)(['Tag 1', 'Tag 2', 'Tag 3']),
          u = o()(x, 2),
          _ = u[0],
          P = u[1],
          L = (0, n.useState)(''),
          y = o()(L, 2),
          E = y[0],
          v = y[1],
          g = { margin: '0 12px' };
        return (0, s.jsxs)('div', {
          style: { display: 'flex' },
          children: [
            _.map(function (j, D) {
              return (0, s.jsx)(e.Tag, { style: g, closeable: !0, children: j }, D);
            }),
            c
              ? (0, s.jsx)(e.Input, {
                  width: 100,
                  handleIptChange: function (D) {
                    return v(D);
                  },
                  handleKeyDown: function (D) {
                    D.nativeEvent.keyCode === 13 && (h(!1), _.push(E), P(_), v(''));
                  },
                })
              : (0, s.jsx)(e.Tag, {
                  style: g,
                  clickCallback: function () {
                    return h(!0);
                  },
                  children: 'Add New Tag',
                }),
          ],
        });
      }
    },
    3957: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = { margin: '0 12px' };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Tag, { style: s, size: 'large', closeable: !0, children: 'Large' }),
            (0, n.jsx)(o.Tag, { style: s, size: 'medium', closeable: !0, children: 'Medium' }),
            (0, n.jsx)(o.Tag, { style: s, size: 'default', closeable: !0, children: 'Default' }),
            (0, n.jsx)(o.Tag, { style: s, size: 'small', closeable: !0, children: 'Small' }),
          ],
        });
      }
    },
    94635: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (0, n.Z)('TimePicker'), (0, e.jsx)(o.TimePicker, {});
      }
    },
    28784: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.TimePicker, { showClear: !0 });
      }
    },
    79850: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.TimePicker, {
          showClear: !0,
          handleConfirm: function () {
            for (var d = arguments.length, i = new Array(d), r = 0; r < d; r++) i[r] = arguments[r];
            console.log(i);
          },
        });
      }
    },
    26262: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = function (c) {
            return Number(c) < 5;
          },
          d = function (c) {
            return Number(c) > 40;
          },
          i = function (c) {
            return !1;
          };
        return (0, n.jsx)(o.TimePicker, {
          showClear: !0,
          disableHour: s,
          disableMin: d,
          disableSecond: i,
        });
      }
    },
    19984: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        var s = t.useRef(null),
          d = function () {
            var r = s.current.callbackTrackData();
            console.log(r);
          };
        return (0, n.jsxs)('div', {
          children: [
            (0, n.jsx)(o.Track, { ref: s }),
            (0, n.jsx)(o.Button, { handleClick: d, children: 'collect page info' }),
          ],
        });
      }
    },
    68730: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454),
        s = [
          {
            title: 'parent1',
            value: '0-0',
            children: [
              { title: 'parent 1-0', value: '0-0-1' },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                children: [{ title: 'leaf2', value: '0-0-0-1' }],
              },
            ],
          },
          { title: 'parent2', value: '0-1', children: [{ title: 'parent 2-0', value: '0-0-3' }] },
        ];
      function d() {
        (0, n.Z)('Tree');
        var i = function (c) {
          console.log(c);
        };
        return (0, e.jsx)(o.Tree, { treeData: s, chooseCallback: i });
      }
    },
    66362: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            children: [
              { title: 'parent 1-0', value: '0-0-1' },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                children: [{ title: 'leaf2', value: '0-0-0-1' }],
              },
            ],
          },
          { title: 'parent2', value: '0-1', children: [{ title: 'parent 2-0', value: '0-0-3' }] },
        ];
      function s() {
        var d = function (r) {
          console.log(r);
        };
        return (0, n.jsx)(o.Tree, { treeData: e, avaSearch: !0, chooseCallback: d });
      }
    },
    83555: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            children: [
              { title: 'parent 1-0', value: '0-0-1' },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                children: [{ title: 'leaf2', value: '0-0-0-1' }],
              },
            ],
          },
          { title: 'parent2', value: '0-1', children: [{ title: 'parent 2-0', value: '0-0-3' }] },
        ];
      function s() {
        var d = function (r) {
          console.log(r);
        };
        return (0, n.jsx)(o.Tree, { treeData: e, defaultOpen: !0, chooseCallback: d });
      }
    },
    11398: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            children: [
              { title: 'parent 1-0', value: '0-0-1' },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                children: [{ title: 'leaf2', value: '0-0-0-1' }],
              },
            ],
          },
          { title: 'parent2', value: '0-1', children: [{ title: 'parent 2-0', value: '0-0-3' }] },
        ];
      function s() {
        var d = function (r) {
          console.log(r);
        };
        return (0, n.jsx)(o.Tree, { treeData: e, avaChooseMore: !0, chooseCallback: d });
      }
    },
    74483: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454),
        s = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ];
      function d() {
        (0, n.Z)('TreeView');
        var i = function (c) {
          console.log(c);
        };
        return (0, e.jsx)(o.TreeView, { treeData: s, checkCallback: i });
      }
    },
    2081: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ];
      function s() {
        var d = function (r) {
          console.log(r);
        };
        return (0, n.jsx)(o.TreeView, { treeData: e, defaultOpen: !0, checkCallback: d });
      }
    },
    62472: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0, disabled: !0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            disabled: !0,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1, disabled: !0 },
              { title: 'parent 2-1', value: '0-0-3', group: 1, disabled: !0 },
            ],
          },
        ];
      function s() {
        var d = function (r) {
          console.log(r);
        };
        return (0, n.jsx)(o.TreeView, { treeData: e, defaultOpen: !0, checkCallback: d });
      }
    },
    43347: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454),
        e = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0, disabled: !0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                disabled: !0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ];
      function s() {
        var d = function (c) {
            console.log(c);
          },
          i = function (c) {
            console.log(c);
          };
        return (0, n.jsx)(o.TreeView, {
          treeData: e,
          defaultOpen: !0,
          avaDrop: !0,
          checkCallback: d,
          dropCallback: i,
        });
      }
    },
    81754: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454),
        s = [
          {
            title: 'parent1',
            value: '0-0',
            group: 0,
            children: [
              { title: 'parent 1-0', value: '0-0-1', group: 0 },
              {
                title: 'parent 1-1',
                value: '0-0-2',
                group: 0,
                children: [
                  { title: 'leaf2', value: '0-0-0-1', group: 0 },
                  {
                    title: 'leaf3',
                    value: '0-0-0-1',
                    group: 0,
                    children: [
                      {
                        title: 'fengxin',
                        value: '0-0-0-1',
                        group: 0,
                        children: [{ title: 'dashuaige', value: '0-0-0-1', group: 0 }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: 'parent2',
            value: '0-1',
            group: 1,
            children: [
              { title: 'parent 2-0', value: '0-0-3', group: 1 },
              { title: 'parent 2-1', value: '0-0-3', group: 1 },
            ],
          },
        ];
      function d() {
        (0, n.Z)('TreeView');
        var i = function (c) {
          console.log(c);
        };
        return (0, e.jsx)(o.TreeView, {
          treeData: s,
          checkCallback: i,
          lazyLoad: !0,
          lazyLoadWaitSecord: 1500,
        });
      }
    },
    30795: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return s;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(5922),
        e = a(52454);
      function s() {
        return (
          (0, n.Z)('Upload'),
          (0, e.jsx)(o.Upload, {
            beforeUpload: function (i) {
              return new Promise(function (r, c) {
                r(!0);
              });
            },
            onError: function (i) {
              console.log('e', i);
            },
            onSuccess: function (i) {
              o.Message.success('\u4E0A\u4F20\u6210\u529F'), console.log('res', i);
            },
            onExceedLimit: function () {
              console.log('onExceedLimit');
            },
            onChange: function () {
              return console.log('change');
            },
            headers: { token: '1' },
            defaultFileList: [],
            action: 'test',
            limit: 3,
            multiple: !0,
            autoUpload: !0,
            accept: '*',
          })
        );
      }
    },
    63138: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)(o.Upload, {
          beforeUpload: function (d) {
            return new Promise(function (i, r) {
              i(!0);
            });
          },
          onError: function (d) {
            console.log('e', d);
          },
          onSuccess: function (d) {
            o.Message.success('\u4E0A\u4F20\u6210\u529F'), console.log('res', d);
          },
          onExceedLimit: function () {
            console.log('onExceedLimit');
          },
          onChange: function () {
            return console.log('change');
          },
          headers: { token: '1' },
          defaultFileList: [],
          action: 'test',
          showType: 'image-list',
          limit: 3,
          multiple: !0,
          autoUpload: !1,
          accept: '*',
        });
      }
    },
    34618: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Zoombox, {
            style: { textAlign: 'center', padding: 10 },
            notAllowed: !0,
            children: [
              (0, n.jsx)('p', {
                children: 'Concis is a component library for quickly building React applications',
              }),
              (0, n.jsx)(o.Divider, {}),
              (0, n.jsx)('p', {
                children:
                  'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
              }),
              (0, n.jsx)(o.Divider, { children: 'Concis' }),
              (0, n.jsx)('p', {
                children:
                  'If you are interested in Concis, please leave a message with us in Github.',
              }),
            ],
          }),
        });
      }
    },
    37921: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return d;
          },
        });
      var t = a(54306),
        o = a.n(t),
        n = a(22374),
        e = a(10782),
        s = a(52454);
      function d() {
        var i = (0, n.useState)(!1),
          r = o()(i, 2),
          c = r[0],
          h = r[1];
        return (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(e.Button, {
              handleClick: function () {
                h(!0);
              },
              children: 'Open Modal',
            }),
            (0, s.jsx)(e.Modal, {
              title: 'Modal Title',
              visible: c,
              cancelOnlyByButton: !0,
              onOk: function () {
                return h(!1);
              },
              onCancel: function () {
                return h(!1);
              },
              children: (0, s.jsxs)(e.Zoombox, {
                style: { textAlign: 'center', padding: 10 },
                notAllowed: !0,
                children: [
                  (0, s.jsx)('p', {
                    children:
                      'Concis is a component library for quickly building React applications',
                  }),
                  (0, s.jsx)(e.Divider, {}),
                  (0, s.jsx)('p', {
                    children:
                      'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
                  }),
                  (0, s.jsx)(e.Divider, { children: 'Concis' }),
                  (0, s.jsx)('p', {
                    children:
                      'If you are interested in Concis, please leave a message with us in Github.',
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    99158: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsxs)('div', {
          style: { display: 'flex', flexWrap: 'wrap' },
          children: [
            (0, n.jsxs)(o.Zoombox, {
              style: { textAlign: 'center', padding: 10 },
              notAllowed: !0,
              children: [
                (0, n.jsx)('p', {
                  children: 'Concis is a component library for quickly building React applications',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('p', {
                  children:
                    'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
                }),
                (0, n.jsx)(o.Divider, { children: 'Concis' }),
                (0, n.jsx)('p', {
                  children:
                    'If you are interested in Concis, please leave a message with us in Github.',
                }),
              ],
            }),
            (0, n.jsxs)(o.Zoombox, {
              style: { textAlign: 'center', padding: 10 },
              notAllowed: !0,
              children: [
                (0, n.jsx)('p', {
                  children: 'Concis is a component library for quickly building React applications',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('p', {
                  children:
                    'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
                }),
                (0, n.jsx)(o.Divider, { children: 'Concis' }),
                (0, n.jsx)('p', {
                  children:
                    'If you are interested in Concis, please leave a message with us in Github.',
                }),
              ],
            }),
            (0, n.jsxs)(o.Zoombox, {
              style: { textAlign: 'center', padding: 10 },
              notAllowed: !0,
              children: [
                (0, n.jsx)('p', {
                  children: 'Concis is a component library for quickly building React applications',
                }),
                (0, n.jsx)(o.Divider, {}),
                (0, n.jsx)('p', {
                  children:
                    'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
                }),
                (0, n.jsx)(o.Divider, { children: 'Concis' }),
                (0, n.jsx)('p', {
                  children:
                    'If you are interested in Concis, please leave a message with us in Github.',
                }),
              ],
            }),
          ],
        });
      }
    },
    84153: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Zoombox, {
            style: { textAlign: 'center', padding: 10 },
            notAllowed: !0,
            children: [
              (0, n.jsx)('p', {
                children: 'Concis is a component library for quickly building React applications',
              }),
              (0, n.jsx)(o.Divider, {}),
              (0, n.jsx)('p', {
                children:
                  'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
              }),
              (0, n.jsx)(o.Divider, { children: 'Concis' }),
              (0, n.jsx)('p', {
                children:
                  'If you are interested in Concis, please leave a message with us in Github.',
              }),
            ],
          }),
        });
      }
    },
    17433: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Zoombox, {
            style: { textAlign: 'center', padding: 10 },
            notAllowed: !0,
            minWidth: 200,
            minHeight: 100,
            children: [
              (0, n.jsx)('p', {
                children: 'Concis is a component library for quickly building React applications',
              }),
              (0, n.jsx)(o.Divider, {}),
              (0, n.jsx)('p', {
                children:
                  'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
              }),
              (0, n.jsx)(o.Divider, { children: 'Concis' }),
              (0, n.jsx)('p', {
                children:
                  'If you are interested in Concis, please leave a message with us in Github.',
              }),
            ],
          }),
        });
      }
    },
    7048: function (m, l, a) {
      a.r(l),
        a.d(l, {
          default: function () {
            return e;
          },
        });
      var t = a(22374),
        o = a(10782),
        n = a(52454);
      function e() {
        return (0, n.jsx)('div', {
          children: (0, n.jsxs)(o.Zoombox, {
            style: { textAlign: 'center', padding: 10 },
            notAllowed: !0,
            noBorder: !0,
            children: [
              (0, n.jsx)('p', {
                children: 'Concis is a component library for quickly building React applications',
              }),
              (0, n.jsx)(o.Divider, {}),
              (0, n.jsx)('p', {
                children:
                  'This component library was first developed by individuals, and was later joined by some interested friends in the community, and it will get better and better.',
              }),
              (0, n.jsx)(o.Divider, { children: 'Concis' }),
              (0, n.jsx)('p', {
                children:
                  'If you are interested in Concis, please leave a message with us in Github.',
              }),
            ],
          }),
        });
      }
    },
    87953: function (m, l, a) {
      a.d(l, {
        z: function () {
          return P;
        },
      });
      var t = a(57213),
        o = a.n(t),
        n = a(52510),
        e = a.n(n),
        s = a(12342),
        d = a.n(s),
        i = a(22374),
        r = {
          'ccsm-btn': 'pFGUA3WZy3YaKErgLl9J',
          'ccsm-btn-disabled': 'nQjNJKzvIMa6E2lHATHO',
          'ccsm-btn-loading': 'Qm_GDJEnunQqyRVnQN4c',
          'ccsm-btn-small': 'i12xwdDpJ7ssHwAesiUv',
          'ccsm-btn-middle': 'liD4zQWu5HcWLPqmtSb8',
          'ccsm-btn-large': 'jjVtARQtAC8DPCU4mwLn',
          'ccsm-btn-primary': 'fDiqMbbcskq00rDC79GM',
          'ccsm-btn-danger': 'p3eJ2Q15hgJw2yjWsSBI',
          'ccsm-btn-warning': 'ZH8JVEBVAwIrXCwC8M3C',
          'ccsm-btn-text': 'U7nvs0wAKnA_7FArlcWy',
          'ccsm-btn-block': 'KQGl6MdNo0DvYJo5kNLP',
          'ccsm-btn-dangerous': 'mRgfZwlVoDg7LS_RmoQo',
          'ccsm-btn-ghost': 'N2aw1vetgN0PCRDtSUqI',
          'ccsm-btn-dashed': 'J_Jmfcc60Mw713Jg7pbo',
          'ccsm-btn-loading-icon': 'thDf0MVjfagpVY5toUtn',
          'ccsm-btn-shape-round': 'FJXSIphRgUctQQf174a4',
          'ccsm-btn-shape-circle': 'wj3A_pdI8a0CZEPjF2ig',
          'ccsm-btn-smal': 'e0QmLV0FLeouUWlYvur5',
        },
        c = a(73703),
        h = a(96713),
        x = a(70735),
        u = a(52454),
        _ = [
          'size',
          'type',
          'shape',
          'block',
          'ghost',
          'dashed',
          'danger',
          'disabled',
          'loading',
          'icon',
          'className',
          'style',
          'onClick',
          'children',
        ],
        P = (0, i.forwardRef)(function (y, E) {
          var v,
            g = y.size,
            j = y.type,
            D = j === void 0 ? 'default' : j,
            p = y.shape,
            f = p === void 0 ? 'default' : p,
            R = y.block,
            C = R === void 0 ? !1 : R,
            M = y.ghost,
            O = M === void 0 ? !1 : M,
            B = y.dashed,
            H = B === void 0 ? !1 : B,
            k = y.danger,
            A = k === void 0 ? !1 : k,
            Z = y.disabled,
            F = y.loading,
            K = y.icon,
            I = y.className,
            T = I === void 0 ? '' : I,
            z = y.style,
            S = y.onClick,
            U = y.children,
            b = d()(y, _),
            V = (0, i.useRef)(null);
          (0, i.useImperativeHandle)(E, function () {
            return {
              get nativeElement() {
                return V.current;
              },
            };
          });
          var W = (0, h.Z)(),
            N = W.prefixCls,
            G = W.componentSize,
            X = ''.concat(N, '-btn'),
            J = (0, x.f)(
              ((v = {}),
              e()(v, X, !0),
              e()(v, ''.concat(X, '-').concat(g || G), !0),
              e()(v, ''.concat(X, '-').concat(D), !0),
              e()(v, ''.concat(X, '-block'), C),
              e()(v, ''.concat(X, '-ghost'), O),
              e()(v, ''.concat(X, '-dashed'), H),
              e()(v, ''.concat(X, '-dangerous'), A),
              e()(v, ''.concat(X, '-loading'), F),
              e()(v, ''.concat(X, '-disabled'), Z),
              e()(v, ''.concat(X, '-shape-').concat(f), !0),
              e()(v, T, !!T),
              v)
            );
          return (0,
          u.jsxs)('button', o()(o()({ ref: V, className: J, disabled: !!Z, style: z, onClick: S }, b), {}, { children: [F ? (0, u.jsx)(c.Z, { className: ''.concat(X, '-loading-icon') }) : K, U] }));
        }),
        L = null;
    },
    39457: function (m, l, a) {
      a.d(l, {
        X: function () {
          return p;
        },
      });
      var t = {
          'ccsm-checkbox': 'XJktdgDYEIF5mjlmt5DU',
          'ccsm-checkbox-small': 'iiYPHSdRW5Y4xFxulBfr',
          'ccsm-checkbox-middle': 'V633b094Kos8qfu0jonH',
          'ccsm-checkbox-large': 'aeq5TRKGS_4s6VEsZX5w',
          'ccsm-checkbox-block': 'SvGVVUVaq6MUqRkbJaHk',
          'ccsm-checkbox-icon': 'Js8usoFwdk4Hx5wSfqPu',
          anticon: 'V6TLpc7_qoAc6ws9djyX',
          'ccsm-checkbox-custom-icon': 'jiwA8xv8ZUc7Vg9lWh_U',
          'ccsm-checkbox-content': 'gcxTzcxTUmQzciSiUDWa',
          'ccsm-checkbox-checked': 'f92ruHVNJgyOxdIFXpUL',
          'ccsm-checkbox-disabled': 'iHhnidQ743ee4baBqK0g',
        },
        o = a(52510),
        n = a.n(o),
        e = a(54306),
        s = a.n(e),
        d = a(22374),
        i = a(97773),
        r = a(23614),
        c = a(96713),
        h = (0, d.createContext)(null),
        x = function () {
          var R = (0, d.useContext)(h);
          return R;
        },
        u = a(44220),
        _ = a(70735),
        P = a(52454),
        L = function (R) {
          var C,
            M = R.value,
            O = R.icon,
            B = R.className,
            H = B === void 0 ? '' : B,
            k = R.children,
            A = (0, d.useRef)(null),
            Z = (0, c.Z)(),
            F = Z.prefixCls,
            K = Z.componentSize,
            I = x(),
            T = (0, i.Z)(R, { defaultValue: !1, valuePropName: I ? 'value' : 'checked' }),
            z = s()(T, 2),
            S = z[0],
            U = z[1],
            b = ''.concat(F, '-checkbox'),
            V = R.size || K,
            W = R.block || !1,
            N = R.disabled || !1;
          I &&
            M !== void 0 &&
            ((N = N || I.disabled),
            (S = I.value.includes(M)),
            (W = I.block),
            (U = function (Q) {
              var Y;
              Q ? I.onSelect(M) : I.onUnSelect(M),
                (Y = R.onChange) === null || Y === void 0 || Y.call(R, Q);
            }));
          var G = function (Q) {
              Q.stopPropagation();
              var Y = Q.target.checked;
              Y !== S && U(Y);
            },
            X = (0, _.f)(
              ((C = {}),
              n()(C, b, !0),
              n()(C, ''.concat(b, '-').concat(V), !!V),
              n()(C, ''.concat(b, '-checked'), S),
              n()(C, ''.concat(b, '-disabled'), N),
              n()(C, ''.concat(b, '-block'), W),
              n()(C, H, !!H),
              C)
            );
          return (0, P.jsxs)('label', {
            className: X,
            children: [
              (0, P.jsx)('input', {
                ref: A,
                id: R.id,
                type: 'checkbox',
                hidden: !0,
                checked: S,
                disabled: N,
                onClick: G,
                onChange: function () {},
              }),
              O
                ? (0, P.jsx)(u.d, { classPrefix: b, icon: O, checked: S })
                : (0, P.jsx)('div', {
                    className: ''.concat(b, '-icon'),
                    children: S ? (0, P.jsx)(r.Z, {}) : null,
                  }),
              (0, P.jsx)('div', { className: ''.concat(b, '-content'), children: k }),
            ],
          });
        },
        y = null,
        E = a(93525),
        v = a.n(E),
        g = function (R) {
          var C = R.block,
            M = C === void 0 ? !1 : C,
            O = R.disabled,
            B = O === void 0 ? !1 : O,
            H = R.defaultValue,
            k = H === void 0 ? [] : H,
            A = R.options,
            Z = R.children,
            F = (0, i.Z)(R, { defaultValue: k }),
            K = s()(F, 2),
            I = K[0],
            T = K[1],
            z = function (b) {
              T(function (V) {
                return [].concat(v()(V), [b]);
              });
            },
            S = function (b) {
              T(function (V) {
                return V.filter(function (W) {
                  return b !== W;
                });
              });
            };
          return (0, P.jsx)(h.Provider, {
            value: { block: M, value: I, disabled: B, onSelect: z, onUnSelect: S },
            children: Array.isArray(A)
              ? A.map(function (U) {
                  return (0,
                  P.jsx)(L, { value: U.value, disabled: U.disabled, children: U.label }, U.value);
                })
              : Z,
          });
        },
        j = null,
        D = a(13369),
        p = (0, D.A)(L, { Group: g });
    },
    96713: function (m, l, a) {
      a.d(l, {
        i: function () {
          return E;
        },
        Z: function () {
          return y;
        },
      });
      var t = a(12342),
        o = a.n(t),
        n = a(22374),
        e = a(54306),
        s = a.n(e),
        d = function () {
          var g = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
          return g;
        },
        i = function (g) {
          var j = (0, n.useRef)(document.documentElement),
            D = (0, n.useRef)(d()),
            p = (0, n.useState)(''),
            f = s()(p, 2),
            R = f[0],
            C = f[1],
            M = (0, n.useCallback)(function (O) {
              O.matches ? C('dark') : C('light');
            }, []);
          (0, n.useEffect)(
            function () {
              !R || !j.current || j.current.setAttribute('data-ccsm-theme', R);
            },
            [R]
          ),
            (0, n.useEffect)(
              function () {
                if (g)
                  if (g === 'auto')
                    D.current.addEventListener('change', M),
                      C(D.current.matches ? 'dark' : 'light');
                  else {
                    var O;
                    (O = D.current) === null || O === void 0 || O.removeEventListener('change', M),
                      C(g);
                  }
              },
              [g]
            ),
            (0, n.useEffect)(function () {
              return function () {
                D.current && D.current.removeEventListener('change', M);
              };
            }, []);
        },
        r = a(57213),
        c = a.n(r),
        h = a(97207),
        x = function () {
          function g(O, B) {
            return B === void 0 ? O : B;
          }
          for (var j = arguments.length, D = new Array(j), p = 0; p < j; p++) D[p] = arguments[p];
          for (var f = c()({}, D[0]), R = 0, C = D; R < C.length; R++) {
            var M = C[R];
            f = (0, h.assignWith)(f, M, g);
          }
          return f;
        },
        u = a(52454),
        _ = ['children'],
        P = {
          theme: 'light',
          prefixCls: 'ccsm',
          componentSize: 'middle',
          getPopupContainer: function () {
            return document.body;
          },
        },
        L = (0, n.createContext)(null),
        y = function () {
          var g = (0, n.useContext)(L) || P;
          return g;
        },
        E = (0, n.memo)(function (v) {
          var g = v.children,
            j = o()(v, _),
            D = x(P, j);
          return i(D.theme), (0, u.jsx)(L.Provider, { value: D, children: g });
        });
    },
    41310: function (m, l, a) {
      a.d(l, {
        zx: function () {
          return n.z;
        },
        iV: function () {
          return o.i;
        },
        T: function () {
          return j;
        },
      });
      var t = a(19266),
        o = a(96713),
        n = a(87953),
        e = a(74129),
        s = a(39457),
        d = {
          'ccsm-space': 'YwYOCwdJ1Csqp773Y0Qn',
          'ccsm-space-small': 'SAjeKW12b0PfLpOhhUHs',
          'ccsm-space-middle': 'TwTWV2tJGNMtsON8UrMy',
          'ccsm-space-large': 'fzmbOk_q9jgiqe5I77_I',
          'ccsm-space-block': 'Y38dpxGu9jkk2kF51Z_J',
          'ccsm-space-wrap': 'igyPhJ4KN3ULJ5AK9JuG',
          'ccsm-space-vertical': 'ZcxFw_NjAY0kkFuTGSs_',
          'ccsm-space-align-start': 'ViBaMx0ZRIoA6I9BgnvN',
          'ccsm-space-align-end': 'yMh8hKryCcwFlyPvO4zE',
          'ccsm-space-align-center': 'DxOrXKPsLMUqRVhRwaj7',
          'ccsm-space-align-baseline': 'lMkXQ4Vvgr4KpO850sde',
          'ccsm-space-justify-start': 'PinmrA6NbYIRCFWTuPuE',
          'ccsm-space-justify-end': 'Q7QUZTqV6Qjh5PhZoBUV',
          'ccsm-space-justify-center': 'enWmFeiLbso07XSS4lju',
          'ccsm-space-justify-between': 'Lhog49xVyMvDpMSqroHD',
          'ccsm-space-justify-around': 'tazfkunUF1gzz8Y31o68',
          'ccsm-space-justify-evenly': 'ISx5Bh5wT1klKuJQ3y4O',
          'ccsm-space-justify-stretch': 'RQlncsO6sxMzZhHcAYTO',
        },
        i = a(57213),
        r = a.n(i),
        c = a(54306),
        h = a.n(c),
        x = a(52510),
        u = a.n(x),
        _ = a(12342),
        P = a.n(_),
        L = a(22374),
        y = a(97207),
        E = a(70735),
        v = a(52454),
        g = [
          'size',
          'block',
          'wrap',
          'direction',
          'align',
          'justify',
          'className',
          'children',
          'onClick',
        ],
        j = function (f) {
          var R,
            C = f.size,
            M = f.block,
            O = M === void 0 ? !1 : M,
            B = f.wrap,
            H = B === void 0 ? !1 : B,
            k = f.direction,
            A = k === void 0 ? 'horizontal' : k,
            Z = f.align,
            F = f.justify,
            K = f.className,
            I = K === void 0 ? '' : K,
            T = f.children,
            z = f.onClick,
            S = P()(f, g),
            U = (0, o.Z)(),
            b = U.prefixCls,
            V = U.componentSize,
            W = ''.concat(b, '-space'),
            N = (0, y.isString)(C) ? C : V,
            G = (0, E.f)(
              ((R = {}),
              u()(R, W, !0),
              u()(R, ''.concat(W, '-').concat(N), !!N),
              u()(R, ''.concat(W, '-block'), O),
              u()(R, ''.concat(W, '-wrap'), H),
              u()(R, ''.concat(W, '-').concat(A), !!A),
              u()(R, ''.concat(W, '-align-').concat(Z), !!Z),
              u()(R, ''.concat(W, '-justify-').concat(F), !!F),
              u()(R, I, !!I),
              R)
            ),
            X = function () {
              if ((0, y.isArray)(C)) {
                var Q = h()(C, 2),
                  Y = Q[0],
                  w = Y === void 0 ? 0 : Y,
                  $ = Q[1],
                  q = $ === void 0 ? 0 : $;
                return r()({ gap: ''.concat(q, 'px ').concat(w, 'px') }, S.style);
              }
              return (0, y.isNumber)(C) ? r()({ gap: C }, S.style) : S.style;
            };
          return (0, v.jsx)(
            'div',
            r()(
              r()({ className: G, onClick: z }, S),
              {},
              {
                style: X(),
                children: L.Children.map(T, function (J) {
                  return J == null
                    ? null
                    : (0, v.jsx)('div', { className: ''.concat(W, '-item'), children: J });
                }),
              }
            )
          );
        },
        D = null;
    },
    44220: function (m, l, a) {
      a.d(l, {
        d: function () {
          return n;
        },
      });
      var t = a(22374),
        o = a(52454),
        n = (0, t.memo)(function (e) {
          var s = e.classPrefix,
            d = e.icon,
            i = e.checked;
          return (0,
          o.jsx)('div', { className: ''.concat(s, '-custom-icon'), children: typeof d == 'function' ? d(i) : d });
        });
    },
    74129: function (m, l, a) {
      a.d(l, {
        Y: function () {
          return j;
        },
      });
      var t = {
          'ccsm-radio': 'NtjlemUsJ2g7UM4lwgCh',
          'ccsm-radio-small': 'NPORCMQcmgum2NWtySw2',
          'ccsm-radio-middle': 'KFJ6w6UlAsvAAKd7Dnj0',
          'ccsm-radio-large': 'HPyZLNgWafo7v_J3m3n1',
          'ccsm-radio-block': 'XN8QoXIt0f4xAfnGjMSe',
          'ccsm-radio-icon': 'zRfuze2KyL0DgAMiUCpi',
          anticon: 'me9jRBb3iZUsX_xgIO06',
          'ccsm-radio-custom-icon': 'hF9f01a80ugkAAfBnYJ8',
          'ccsm-radio-content': 'yc2qd_vp3oQjXQvHV3fI',
          'ccsm-radio-checked': 'uMXxwQrNin8zDF_2DYKh',
          'ccsm-radio-disabled': 'rHOtK4OZq4sggfEJniX7',
        },
        o = a(52510),
        n = a.n(o),
        e = a(54306),
        s = a.n(e),
        d = a(22374),
        i = a(97773),
        r = a(23614),
        c = a(96713),
        h = (0, d.createContext)(null),
        x = function () {
          var p = (0, d.useContext)(h);
          return p;
        },
        u = a(44220),
        _ = a(70735),
        P = a(52454),
        L = function (p) {
          var f,
            R = p.icon,
            C = p.className,
            M = C === void 0 ? '' : C,
            O = p.children,
            B = (0, c.Z)(),
            H = B.prefixCls,
            k = B.componentSize,
            A = x(),
            Z = (0, i.Z)(p, { defaultValue: !1, valuePropName: A ? 'value' : 'checked' }),
            F = s()(Z, 2),
            K = F[0],
            I = F[1],
            T = ''.concat(H, '-radio'),
            z = p.size || k,
            S = p.block || !1,
            U = p.disabled || !1;
          A &&
            p.value !== void 0 &&
            ((U = U || A.disabled),
            (K = A.value === p.value),
            (S = A.block),
            (I = function (N) {
              var G;
              N ? A.onSelect(p.value) : A.onUnSelect(p.value),
                (G = p.onChange) === null || G === void 0 || G.call(p, N);
            }));
          var b = function (N) {
              N.stopPropagation();
              var G = N.target.checked;
              G !== K && I(G);
            },
            V = (0, _.f)(
              ((f = {}),
              n()(f, T, !0),
              n()(f, ''.concat(T, '-').concat(z), !!z),
              n()(f, ''.concat(T, '-checked'), K),
              n()(f, ''.concat(T, '-disabled'), U),
              n()(f, ''.concat(T, '-block'), S),
              n()(f, M, !!M),
              f)
            );
          return (0, P.jsxs)('label', {
            className: V,
            children: [
              (0, P.jsx)('input', {
                id: p.id,
                type: 'radio',
                hidden: !0,
                checked: K,
                disabled: U,
                onClick: b,
                onChange: function () {},
              }),
              R
                ? (0, P.jsx)(u.d, { classPrefix: T, icon: R, checked: K })
                : (0, P.jsx)('div', {
                    className: ''.concat(T, '-icon'),
                    children: K ? (0, P.jsx)(r.Z, {}) : null,
                  }),
              (0, P.jsx)('div', { className: ''.concat(T, '-content'), children: O }),
            ],
          });
        },
        y = null,
        E = function (p) {
          var f = p.block,
            R = f === void 0 ? !1 : f,
            C = p.disabled,
            M = C === void 0 ? !1 : C,
            O = p.defaultValue,
            B = p.options,
            H = p.children,
            k = (0, i.Z)(p, { defaultValue: O }),
            A = s()(k, 2),
            Z = A[0],
            F = A[1],
            K = function (z) {
              F(z);
            },
            I = function (z) {
              F(z);
            };
          return (0, P.jsx)(h.Provider, {
            value: { block: R, value: Z, disabled: M, onSelect: K, onUnSelect: I },
            children: Array.isArray(B)
              ? B.map(function (T) {
                  return (0,
                  P.jsx)(L, { value: T.value, disabled: T.disabled, children: T.label }, T.value);
                })
              : H,
          });
        },
        v = null,
        g = a(13369),
        j = (0, g.A)(L, { Group: E });
    },
    13369: function (m, l, a) {
      a.d(l, {
        A: function () {
          return t;
        },
      });
      function t(o, n) {
        var e = o;
        for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s]);
        return e;
      }
    },
    70735: function (m, l, a) {
      a.d(l, {
        f: function () {
          return t;
        },
      });
      var t = function (n) {
        for (var e = [], s = 0, d = Object.keys(n); s < d.length; s++) {
          var i = d[s];
          n[i] && e.push(i);
        }
        return e.join(' ');
      };
    },
    15290: function (m, l, a) {
      a.d(l, {
        b: function () {
          return s;
        },
      });
      var t = a(92935),
        o = a.n(t),
        n = a(1627),
        e,
        s = n.ZP.div(
          e ||
            (e = o()([
              `
  .list {
    display: flex;
    align-items: center;

    .text {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      .content {
        margin-top: 7px;
        color: #4e5969;
      }
    }
  }

  .size-change-bar {
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .active-size-bar {
    padding: 0 12px;
    color: #325dff;
    font-size: 14px;
    cursor: pointer;
  }
`,
            ]))
        );
    },
    80915: function (m, l, a) {
      a.d(l, {
        S: function () {
          return s;
        },
      });
      var t = a(92935),
        o = a.n(t),
        n = a(1627),
        e,
        s = n.ZP.div(
          e ||
            (e = o()([
              `
  .menu1,
  .menu2 {
    .title {
      font-size: 20px;
      font-weight: 500;
    }

    .menu-list {
      display: flex;
      flex-wrap: wrap;
      width: 800px;

      .menu1-item {
        width: 200px;
        margin: 15px 30px;
      }
    }
  }

  .menu2 {
    .menu-list {
      width: 300px;

      .menu2-item {
        width: 250px;
        margin: 15px 30px;
      }
    }
  }

  .left-bar {
    b {
      margin-right: 20px;
      font-size: 30px;
    }
  }
`,
            ]))
        );
    },
    78193: function (m, l, a) {
      a.d(l, {
        I: function () {
          return s;
        },
      });
      var t = a(92935),
        o = a.n(t),
        n = a(1627),
        e,
        s = n.ZP.div(
          e ||
            (e = o()([
              `
  .preview-demo {
    display: flex;

    img {
      width: 100%;
      height: 100%;
    }

    .introduce {
      margin: 30px 0 0 30px;

      h1 {
        font-size: 38px;
      }
    }
  }
`,
            ]))
        );
    },
    5922: function (m, l, a) {
      a.d(l, {
        Z: function () {
          return g;
        },
      });
      var t = a(25359),
        o = a.n(t),
        n = a(57213),
        e = a.n(n),
        s = a(49811),
        d = a.n(s),
        i = a(22374),
        r = function () {
          return new Promise(function (D, p) {
            var f = document.createElement('script');
            (f.src = 'https://pv.sohu.com/cityjson?ie=utf-8'),
              document.body.appendChild(f),
              (f.onload = function () {
                try {
                  document.body.removeChild(f), D(window.returnCitySN);
                } catch (R) {
                  p(R);
                }
              });
          });
        },
        c = r,
        h = function () {
          var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
            p = new Date(),
            f = p.getFullYear(),
            R =
              D && String(p.getMonth() + 1).length < 2
                ? '0'.concat(p.getMonth() + 1)
                : p.getMonth() + 1,
            C = D && String(p.getDate()).length < 2 ? '0'.concat(p.getDate()) : p.getDate(),
            M = D && String(p.getHours()).length < 2 ? '0'.concat(p.getHours()) : p.getHours(),
            O =
              D && String(p.getMinutes()).length < 2 ? '0'.concat(p.getMinutes()) : p.getMinutes(),
            B =
              D && String(p.getSeconds()).length < 2 ? '0'.concat(p.getSeconds()) : p.getSeconds();
          return ''
            .concat(f, '-')
            .concat(R, '-')
            .concat(C, ' ')
            .concat(M, ':')
            .concat(O, ':')
            .concat(B);
        },
        x = function (D) {
          return ''.concat(Math.floor(D / 1024 / 1024), 'mb');
        },
        u = function (D) {
          return ''.concat(D / 1e3, 's');
        },
        _ = function () {
          return new Promise(function (D) {
            var p = {};
            document && ((p.domain = document.domain || ''), (p.title = document.title || '')),
              window &&
                window.screen &&
                ((p.screenHeight = window.screen.height || 0),
                (p.screenWidth = window.screen.width || 0),
                (p.color = window.screen.colorDepth || 0)),
              navigator &&
                ((p.lang = navigator.language || ''), (p.ua = navigator.userAgent.toLowerCase())),
              window &&
                window.performance &&
                ((p.memory = x(window.performance.memory.usedJSHeapSize)),
                (p.connectTime = u(
                  window.performance.timing.connectEnd - window.performance.timing.connectStart
                )),
                (p.responseTime = u(
                  window.performance.timing.responseEnd - window.performance.timing.responseStart
                )),
                (p.renderTime = u(
                  window.performance.timing.domComplete - window.performance.timing.domLoading
                ))),
              (p.watchTime = h()),
              D(p);
          });
        },
        P = _,
        L = function () {
          var D = {};
          window.onerror = function (p, f, R) {
            (D.errorMessage = p),
              (D.scriptURI = f),
              (D.happenURI = window.location.href.replace('#', '')),
              (D.errorObj = R),
              (D.happenTime = h());
            var C = document.createElement('script'),
              M = 'https://concis.org.cn:9999/saveErrorMessage?info='.concat(JSON.stringify(D));
            (C.src = M), document.body.appendChild(C);
          };
        },
        y = function (D) {
          var p = document.createElement('script');
          console.log(D);
          var f = 'https://concis.org.cn:9999/saveComponentLog?info='.concat(JSON.stringify(D));
          return (
            (p.src = f),
            (p.async = !0),
            document.body.appendChild(p),
            new Promise(function (R, C) {
              p.onload = function () {
                try {
                  document.body.removeChild(p), R('');
                } catch (M) {
                  C(M);
                }
              };
            })
          );
        },
        E = y,
        v = function (D) {
          var p = (0, i.useRef)(),
            f = (0, i.useRef)(0);
          L(),
            (0, i.useEffect)(
              function () {
                return (
                  (p.current = new Date()),
                  function () {
                    var R = new Date();
                    f.current = Math.round(Math.abs(p.current.getTime() - R.getTime()) / 1e3);
                  }
                );
              },
              [p]
            ),
            (0, i.useEffect)(function () {
              return d()(
                o()().mark(function R() {
                  var C, M, O, B;
                  return o()().wrap(function (k) {
                    for (;;)
                      switch ((k.prev = k.next)) {
                        case 0:
                          return (
                            console.log('\u9500\u6BC1', D, f.current),
                            (C = { componentName: D, leaveTime: f.current }),
                            (k.next = 4),
                            c()
                          );
                        case 4:
                          return (M = k.sent), (k.next = 7), P();
                        case 7:
                          return (
                            (O = k.sent),
                            (C = e()(e()(e()({}, C), M), O)),
                            console.log(C),
                            (k.next = 12),
                            E(C)
                          );
                        case 12:
                          return (B = k.sent), k.abrupt('return', B);
                        case 14:
                        case 'end':
                          return k.stop();
                      }
                  }, R);
                })
              );
            }, []);
        },
        g = v;
    },
    19266: function () {},
    95894: function () {},
  },
]);
