'use strict';
(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [782],
  {
    10782: function ($p, fr, fn) {
      fn.r(fr),
        fn.d(fr, {
          Affix: function () {
            return Xl;
          },
          Alert: function () {
            return eh;
          },
          Avatar: function () {
            return Jd;
          },
          AvatarGroup: function () {
            return Xd;
          },
          BackTop: function () {
            return P0;
          },
          Badge: function () {
            return qd;
          },
          Breadcrumb: function () {
            return Ph;
          },
          Button: function () {
            return Rn;
          },
          CheckBox: function () {
            return Un;
          },
          Collapse: function () {
            return _d;
          },
          CollapseItem: function () {
            return Bd;
          },
          Comment: function () {
            return Ef;
          },
          DatePicker: function () {
            return ws;
          },
          Divider: function () {
            return Nc;
          },
          Drawer: function () {
            return qf;
          },
          Dropdown: function () {
            return np;
          },
          Empty: function () {
            return uh;
          },
          Form: function () {
            return tl;
          },
          GlobalConfig: function () {
            return mc;
          },
          Highlight: function () {
            return yp;
          },
          Image: function () {
            return pa;
          },
          Input: function () {
            return Mn;
          },
          InputPro: function () {
            return Wf;
          },
          LazyLoad: function () {
            return Ps;
          },
          Link: function () {
            return $h;
          },
          List: function () {
            return Wt;
          },
          Loading: function () {
            return _i;
          },
          Menu: function () {
            return Wl;
          },
          Message: function () {
            return ju;
          },
          Modal: function () {
            return Gi;
          },
          MonthPicker: function () {
            return hs;
          },
          Nav: function () {
            return ip;
          },
          Notification: function () {
            return Au;
          },
          Pagination: function () {
            return Nr;
          },
          Popover: function () {
            return ce;
          },
          PreviewJump: function () {
            return pp;
          },
          Radio: function () {
            return _l;
          },
          RadioGroup: function () {
            return El;
          },
          RangeDatePicker: function () {
            return Cs;
          },
          Rate: function () {
            return Ys;
          },
          Select: function () {
            return Yr;
          },
          Skeleton: function () {
            return sf;
          },
          Space: function () {
            return qu;
          },
          Step: function () {
            return Bs;
          },
          Steps: function () {
            return Is;
          },
          Swiper: function () {
            return hd;
          },
          Switch: function () {
            return Ju;
          },
          Table: function () {
            return yd;
          },
          Tabs: function () {
            return m0;
          },
          Tag: function () {
            return yh;
          },
          TextArea: function () {
            return jl;
          },
          TimePicker: function () {
            return Ts;
          },
          Track: function () {
            return Yp;
          },
          Tree: function () {
            return Xs;
          },
          TreeView: function () {
            return qs;
          },
          Upload: function () {
            return f0;
          },
          YearPicker: function () {
            return ls;
          },
          Zoombox: function () {
            return jp;
          },
        });
      var r = fn(22374),
        Ja = fn(92935),
        an = fn.n(Ja),
        cn = fn(1627),
        S = {
          concisFontXs: '10px',
          concisFontSm: '12px',
          concisFontMd: '14px',
          concisFontLg: '16px',
          concisIconXs: '16px',
          concisIconSm: '18px',
          concisIconMd: '20px',
          concisIconLg: '22px',
          concisPrimaryColor: '#325dff',
          concisDangerColor: '#f53f3f',
          concisInfoColor: '#00b42a',
          concisWarningColor: '#ff7d00',
          concisDisabledColor: '#f2f3f5',
          concisTextColor: '#ffffff',
          concisDarkPrimaryColor: '#3C7EFF',
          concisDarkDangerColor: 'rgba(183, 63, 63, 0.6)',
          concisDarkInfoColor: 'rgba(39, 195, 70, 0.6)',
          concisDarkWarningColor: 'rgba(255, 150, 38, 0.6)',
          concisDarkDisabledColor: '#f2f3f5',
          concisDarkTextColor: '#ffffff',
          concisDarkFontColor: '#ffffffe6',
          concisRadiusXs: '5px',
          concisRadiusSm: '10px',
          concisRadiusMd: '20px',
          concisRadiusLg: '50%',
          concisTransformXs: '5px',
          concisTransformSm: '10px',
          concisTransformMd: '15px',
          concisTransformLg: '20px',
        },
        hr,
        pr,
        vr,
        Pe = '#ffffff',
        Ga = '#000000',
        pt = '#000000',
        vt = '#ffffff',
        Ua = '#cccccc',
        Ka = '#000000',
        Fe = S.concisPrimaryColor,
        Qa = S.concisDangerColor,
        qa = S.concisInfoColor,
        nc = S.concisWarningColor,
        ec = S.concisDisabledColor,
        tc = S.concisTextColor,
        gr = S.concisFontXs,
        rc = S.concisRadiusLg,
        oc = S.concisDarkPrimaryColor,
        ic = S.concisDarkDangerColor,
        ac = S.concisDarkDisabledColor,
        cc = S.concisDarkInfoColor,
        lc = S.concisDarkWarningColor,
        sc = S.concisRadiusSm,
        dc = S.concisTransformMd;
      function uc(t) {
        var n = 'transparent '.concat(pt, ' ').concat(pt),
          i = 'transparent '.concat(vt, ' ').concat(vt);
        return (0, cn.iv)(
          hr ||
            (hr = an()([
              `
    border-color: `,
              `;
  `,
            ])),
          t === 'text' ? n : i
        );
      }
      function fc(t) {
        var n = t.width,
          i = t.height,
          a = t.circle,
          d = t.dashed,
          h = t.type,
          f = t.disabled;
        return (0, cn.iv)(
          pr ||
            (pr = an()([
              `
    width: `,
              `;
    height: `,
              `;
    border-radius: `,
              `;
    border: `,
              `;
    color: `,
              `;
    cursor: `,
              `;
  `,
            ])),
          n ? ''.concat(n, 'px') : '100%',
          i ? ''.concat(i, 'px') : '40px',
          a ? '50%' : sc,
          d && h === 'text' ? '1px dashed '.concat(Ua) : 'none',
          f && h === 'text' ? Ka : '',
          f ? 'not-allowed' : 'pointer'
        );
      }
      var hc = `
.concis-dark-button {
  .concis-button-primary {
    background-color: `
          .concat(
            oc,
            `;
  }

  .concis-button-danger {
    background-color: `
          )
          .concat(
            ic,
            `;
  }

  .concis-button-info {
    background-color: `
          )
          .concat(
            cc,
            `;
  }

  .concis-button-warning {
    background-color: `
          )
          .concat(
            lc,
            `;
  }

  .concis-button-disabled {
    background-color: `
          )
          .concat(
            ac,
            `;
  }
}
`
          ),
        pc = cn.ZP.span(
          vr ||
            (vr = an()([
              `
  .concis-button,
  .concis-dark-button {
    display: inline-block;

    .loading {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &-primary,
    &-danger,
    &-info,
    &-warning,
    &-disabled,
    &-text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 `,
              `;
      opacity: `,
              `;
      transition: 0.2s linear;
      `,
              `
      background: `,
              `;
    }

    &-primary,
    &-danger,
    &-info,
    &-warning {
      &:hover:not(.disabled, .loading) {
        opacity: 0.7;
      }

      &:active:not(.disabled, .loading) {
        opacity: 1;
        transition: 0.1s;
      }
    }

    &-primary {
      color: `,
              `;
      background-color: `,
              `;
    }

    &-danger {
      color: `,
              `;
      background-color: `,
              `;
    }

    &-info {
      color: `,
              `;
      background-color: `,
              `;
    }

    &-warning {
      color: `,
              `;
      background-color: `,
              `;
    }

    &-disabled {
      color: `,
              `;
      background-color: `,
              `;
      opacity: 0.7;
    }

    &-text {
      color: `,
              `;
      background-color: `,
              `;
      border: 1px solid #ccc;

      &:hover:not(.disabled, .loading) {
        color: `,
              `;
        border-color: `,
              ` !important;

        .concis-button-loading {
          border-color: transparent `,
              ' ',
              `;
        }
      }

      &:active:not(.disabled, .loading) {
        background-color: rgb(223, 223, 223);
        transition: 0.1s;
      }
    }

    .button-icon {
      margin-right: `,
              `;
    }

    &-loading {
      width: `,
              `;
      height: `,
              `;
      margin-right: 10px;
      color: red;
      border: 2px solid
        `,
              `;
      `,
              `
      border-radius: `,
              `;
      cursor: alias;
      animation: 1s concis-button-loading infinite linear;
    }
    @keyframes concis-button-loading {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(100deg);
      }

      75% {
        transform: rotate(200deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  .concis-button-group,
  .concis-dark-button-group {
    display: flex;
    border-radius: 10px;

    .concis-button,
    .concis-dark-button {
      &:last-of-type {
        border-right: none;
      }

      border-right: 1px solid #a6a6a6;

      &-primary,
      &-danger,
      &-info,
      &-warning,
      &-disabled,
      &-text {
        border-radius: 0;
      }
    }
  }

  `,
              `
`,
            ])),
          dc,
          function (t) {
            var n = t.props;
            return n.disabled ? 0.5 : 1;
          },
          function (t) {
            var n = t.props;
            return fc(n);
          },
          function (t) {
            var n = t.globalColor;
            return n ? ''.concat(n, ' !important') : '';
          },
          Pe,
          Fe,
          Pe,
          Qa,
          Pe,
          qa,
          Pe,
          nc,
          Pe,
          ec,
          Ga,
          tc,
          Fe,
          Fe,
          Fe,
          Fe,
          function (t) {
            var n = t.props;
            return n.children ? '10px' : '0';
          },
          gr,
          gr,
          function (t) {
            var n = t.props;
            return n.type === 'text' ? pt : vt;
          },
          function (t) {
            var n = t.props;
            return uc(n.type);
          },
          rc,
          hc
        ),
        vc = fn(93525),
        kn = fn.n(vc);
      function hn() {
        for (var t = [], n = arguments.length, i = new Array(n), a = 0; a < n; a++)
          i[a] = arguments[a];
        return (
          i.forEach(function (d) {
            d !== void 0 && d !== '' && t.push(d);
          }),
          kn()(new Set(t)).join(' ')
        );
      }
      var e = fn(52454),
        xn = (0, r.createContext)({}),
        gc = function (n) {
          var i = n.children;
          return (0, e.jsx)(xn.Provider, { value: n, children: i });
        },
        mc = gc,
        Xp = {
          'concis-button': 'XDqRqilSXr0fMJS7BPWM',
          'concis-dark-button': 'dH2QabbVYu0MbsRpVlyE',
          loading: 'CwWvpMFTn4P6HyTEHzlr',
          'concis-button-primary': 'KEhaQr_H1ZoKP2IrT8I6',
          'concis-dark-button-primary': 'q0ollyqgtewPJ6lj0ciZ',
          'concis-button-danger': 'VRjydO_2LIsJOYcubpXU',
          'concis-dark-button-danger': 'xEn7jBoDRhcuth8_AuLt',
          'concis-button-info': 'Ggviy23WCQRJuZMPU03w',
          'concis-dark-button-info': 'n2xmtp4e1lEyFF6dVlqN',
          'concis-button-warning': 'AqqTnVu6gVU3WhnKYtt2',
          'concis-dark-button-warning': 'evBZz97exAlkTsYdZxrD',
          'concis-button-disabled': 'dgLJyeDll6kYkpgVcZ3I',
          'concis-dark-button-disabled': 'Z5apiUDmWxggTzHTdDHX',
          'concis-button-text': 'EWjtB0AhTJomYuHxxdRW',
          'concis-dark-button-text': 'bIj26ofNOc8FHyqdF412',
          disabled: '_ZF8d8mlG4sVmXHcK7FX',
          'concis-button-loading': 'EUJtB5UR00i0Eh8RVLJG',
          'button-icon': 'oMSO3hNMsA8qk5xAwUgO',
          'concis-dark-button-loading': 'rNQaaricC18fmQUDXcCa',
          'concis-button-group': 'yQyQy3Tn88MTvYBJ8XTA',
          'concis-dark-button-group': 'ruH2zkMscO0bYLHbjGqg',
        };
      function xc(t, n) {
        var i = t.children,
          a = t.style,
          d = t.className,
          h = (0, r.useContext)(xn),
          f = h.prefixCls,
          o = h.darkTheme,
          u = hn(f, d, o ? 'concis-dark-button-group' : 'concis-button-group');
        return (0, e.jsx)('div', { className: u, style: a, ref: n, children: i });
      }
      var mr = (0, r.forwardRef)(xc);
      mr.displayName = 'ButtonGroup';
      var bc = mr,
        yc = function (n, i) {
          var a = n.type,
            d = n.className,
            h = n.disabled,
            f = n.loading,
            o = n.icon,
            u = n.handleClick,
            c = n.children,
            j = n.style,
            v = j === void 0 ? {} : j,
            y = (0, r.useContext)(xn),
            _ = y.globalColor,
            x = y.prefixCls,
            l = y.darkTheme,
            p = hn(x, d, l ? 'concis-dark-button' : 'concis-button'),
            P = (0, r.useMemo)(
              function () {
                var F = !1;
                return (
                  !a &&
                    a !== 'danger' &&
                    a !== 'warning' &&
                    a !== 'info' &&
                    a !== 'text' &&
                    (F = !0),
                  hn(
                    ''.concat(F ? 'concis-button-primary' : 'concis-button-'.concat(a)),
                    h ? 'disabled' : '',
                    f ? 'loading' : ''
                  )
                );
              },
              [a, f, h]
            ),
            E = function (z) {
              u && u(z);
            };
          return (0, e.jsx)(pc, {
            props: n,
            globalColor: _,
            children: (0, e.jsx)('div', {
              className: p,
              ref: i,
              style: v,
              children: (0, e.jsxs)('button', {
                className: P,
                disabled: !!h,
                onClick: E,
                children: [
                  f && (0, e.jsx)('div', { className: 'concis-button-loading' }),
                  o &&
                    (0, e.jsx)('div', {
                      className: 'button-icon',
                      style: { '--right-transform': c ? '10px' : '0' },
                      children: o,
                    }),
                  c,
                ],
              }),
            }),
          });
        },
        kc = (0, r.forwardRef)(yc),
        gt = kc;
      (gt.Group = bc), (gt.displayName = 'Button');
      var Rn = gt,
        Cc = fn(57213),
        tn = fn.n(Cc),
        xr,
        br = S.concisRadiusSm,
        wc = S.concisDarkFontColor,
        Sc = cn.ZP.div(
          xr ||
            (xr = an()([
              `
  .concis-divider {
    &-line {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 `,
              `;
    }

    &-before-line-text,
    &-after-line-text {
      flex: 1;
      height: 1px;
      color: #dcdcdc;
      border-color: inherit;
      border-bottom: 1px solid;
    }

    &-line-text {
      padding: 0 20px;
      color: #000;
      font-size: 14px;
    }
  }

  .concis-dark-divider {
    &-line {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 `,
              `;
    }

    &-before-line-text,
    &-after-line-text {
      flex: 1;
      height: 1px;
      color: #484849;
      border-color: inherit;
      border-bottom: 1px solid;
    }

    &-line-text {
      padding: 0 20px;
      color: `,
              `;
      font-size: 14px;
    }
  }
`,
            ])),
          br,
          br,
          wc
        ),
        jc = function (n, i) {
          var a = n.children,
            d = n.style,
            h = n.className,
            f = n.fontSize,
            o = n.align,
            u = (0, r.useContext)(xn),
            c = u.prefixCls,
            j = u.darkTheme,
            v = j ? 'concis-dark-divider' : 'concis-divider',
            y = hn(c, h, v),
            _ = (0, r.useMemo)(
              function () {
                return o === 'left' || o === 'right' ? { justifyContent: o } : {};
              },
              [o]
            ),
            x = (0, r.useMemo)(
              function () {
                if (f) return { fontSize: ''.concat(f, 'px') };
              },
              [f]
            ),
            l = (0, r.useCallback)(
              function (P) {
                return (P === 'left' && o === 'left') || (P === 'right' && o === 'right')
                  ? { flexBasis: '24px', flexGrow: 0 }
                  : {};
              },
              [o]
            ),
            p = function (E) {
              return ''.concat(v, '-').concat(E);
            };
          return (0, e.jsx)(Sc, {
            children: (0, e.jsx)('div', {
              className: y,
              style: d,
              ref: i,
              children: (0, e.jsx)('div', {
                className: p('line'),
                style: tn()({}, _),
                children:
                  a &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)('span', { className: p('before-line-text'), style: l('left') }),
                      (0, e.jsx)('span', { className: p('line-text'), style: x, children: a }),
                      (0, e.jsx)('span', { className: p('after-line-text'), style: l('right') }),
                    ],
                  }),
              }),
            }),
          });
        },
        Nc = (0, r.forwardRef)(jc),
        _c = fn(54306),
        H = fn.n(_c),
        ze = fn(89996),
        yr = fn(3227),
        pe = fn(41896),
        kr,
        Tc = '30px',
        Dc = '30px',
        Cr = '80px',
        mt = S.concisTransformXs,
        wr = S.concisFontMd,
        Sr = S.concisRadiusXs,
        jr = S.concisTransformSm,
        Pc = S.concisDarkFontColor,
        Fc = `
  .concis-dark-pagination-numberBox,
  .concis-dark-pagination-next,
  .concis-dark-pagination-prev {
    background-color: transparent;
  }

  .concis-dark-pagination-jumpBox input {
    color: `.concat(
          Pc,
          `;
    background-color: #343436;
    outline: none;
  }
`
        ),
        zc = cn.ZP.div(
          kr ||
            (kr = an()([
              `
  .concis-pagination,
  .concis-dark-pagination {
    display: flex;

    &-prev,
    &-next,
    &-numberBox,
    &-pageSizeSelect {
      min-width: `,
              `;
      height: `,
              `;
      margin: 0 `,
              `;
      font-size: `,
              `;
      line-height: 30px;
      text-align: center;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: `,
              `;
      cursor: pointer;
      user-select: none;
    }

    &-numberBox:hover {
      color: `,
              `;
      border: 1px solid `,
              `;
      cursor: pointer;
    }

    &-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &-actived {
      color: `,
              `;
      border-color: `,
              `;
    }

    &-pageSizeSelect {
      min-width: `,
              `;
      margin-left: `,
              `;

      .size {
        margin-right: `,
              `;
      }

      .options {
        position: relative;
        top: `,
              `;
        display: flex;
        flex-direction: column;
        width: `,
              `;
        box-shadow: 0 0 20px rgb(218, 218, 218);
        transition: 0.2s linear;

        .option {
          font-size: `,
              `;
          line-height: 2em;
          text-align: center;

          &:hover {
            color: `,
              `;
          }
        }
      }

      &:hover {
        border: 1px solid `,
              `;
      }
    }

    &-jumpBox {
      margin-left: 10px;

      &-jump {
        width: 40px;
        height: 25px;
        margin: 0 `,
              `;
        border: 1px solid #ccc;
        border-radius: `,
              `;
        outline-color: `,
              `;
        transition: 0.2s linear;

        &:hover {
          border-color: `,
              `;
        }

        &:active {
          border-color: `,
              `;
        }
      }
    }
  }

  `,
              `
`,
            ])),
          Tc,
          Dc,
          mt,
          wr,
          Sr,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Cr,
          jr,
          mt,
          mt,
          Cr,
          wr,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          jr,
          Sr,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Fc
        ),
        zn = function () {
          var n = window.localStorage.getItem('dumi:prefers-color');
          return n;
        },
        Bn = function (n, i) {
          return i || (n ? '#3C7EFF' : '#325DFF');
        },
        Ec = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.changePageCallback,
            f = n.changePageSizeCallback,
            o = n.total,
            u = n.pageSizeOptions,
            c = n.showJumpInput,
            j = n.showSizeChanger,
            v = n.defaultIndex,
            y = v === void 0 ? 1 : v,
            _ = (0, r.useState)(y || 1),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)([]),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)(u ? u[0] : 10),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useContext)(xn),
            M = X.globalColor,
            Y = X.prefixCls,
            Q = X.darkTheme,
            Z = Q ? 'concis-dark-pagination' : 'concis-pagination',
            J = hn(Y, a, Z),
            R = (0, r.useMemo)(
              function () {
                var m = Math.ceil(o / A);
                if (m > 6) z([2, 3, 4, 5, 6]);
                else if (m > 2) {
                  var s = new Array(m - 2).fill(0);
                  s.forEach(function (N, C) {
                    s[C] = C + 2;
                  }),
                    z(s);
                } else z([]);
                return m;
              },
              [o, A]
            ),
            q = function (s) {
              return function () {
                if (R <= 6) return h && h(s), p(s);
                s > 4 && s <= R - 4 && z([s - 2, s - 1, s, s + 1, s + 2]),
                  s <= 4 && z([2, 3, 4, 5, 6]),
                  s > R - 4 && z([R - 5, R - 4, R - 3, R - 2, R - 1]),
                  p(s),
                  h && h(s);
              };
            },
            V = function () {
              if (l !== 1) {
                if ((p(l - 1), R > 6)) {
                  if (l > R - 3) return;
                  l > 4
                    ? z(
                        F.map(function (s) {
                          return s - 1;
                        })
                      )
                    : l - 5 <= 4 && z([2, 3, 4, 5, 6]);
                }
                h && h(l - 1);
              }
            },
            nn = function () {
              if (l !== R) {
                if ((p(l + 1), R > 6))
                  if (l + 5 > R) z([R - 5, R - 4, R - 3, R - 2, R - 1]);
                  else {
                    if (l < 4) return;
                    l + 5 < R &&
                      z(
                        F.map(function (s) {
                          return s + 1;
                        })
                      );
                  }
                h && h(l + 1);
              }
            },
            ln = function () {
              var s = 0;
              l - 5 <= 4
                ? (z([2, 3, 4, 5, 6]), (s = l - 5 <= 1 ? 1 : l - 5))
                : l + 5 > R
                ? (z([l - 7, l - 6, l - 5, l - 4, l - 3]), (s = l - 5))
                : l - 5 > 4 &&
                  (z(
                    F.map(function (N) {
                      return N - 5;
                    })
                  ),
                  (s = l - 5)),
                p(s),
                h && h(s);
            },
            G = function () {
              var s = 0;
              l + 7 >= R
                ? (z([R - 5, R - 4, R - 3, R - 2, R - 1]), (s = l + 5 > R ? R : l + 5))
                : l - 5 < 0
                ? (z([l + 3, l + 4, l + 5, l + 6, l + 7]), (s = l + 5))
                : l + 5 < R &&
                  (z(
                    F.map(function (N) {
                      return N + 5;
                    })
                  ),
                  (s = l + 5)),
                p(s),
                h && h(s);
            },
            B = function (s) {
              if (s.keyCode === 13) {
                var N = Number(s.target.value);
                if (N > R || N < 0 || isNaN(N)) return (s.target.value = '');
                N - 5 < 0
                  ? z([2, 3, 4, 5, 6])
                  : N + 5 > R
                  ? z([R - 5, R - 4, R - 3, R - 2, R - 1])
                  : z([N - 2, N - 1, N, N + 1, N + 2]),
                  p(N),
                  h && h(N),
                  (s.target.value = '');
              }
            },
            T = function (s) {
              I(s.value), f && f(s.value);
            };
          return (0, e.jsx)(zc, {
            globalColor: Bn(zn() === 'dark' || Q, M),
            children: (0, e.jsxs)('div', {
              className: J,
              style: d,
              ref: i,
              children: [
                (0, e.jsx)('div', {
                  className:
                    l === 1 ? ''.concat(Z, '-prev ').concat(Z, '-disabled') : ''.concat(Z, '-prev'),
                  onClick: V,
                  children: (0, e.jsx)(ze.Z, {}),
                }),
                (0, e.jsx)('div', {
                  className:
                    l === 1
                      ? ''.concat(Z, '-actived ').concat(Z, '-numberBox')
                      : ''.concat(Z, '-numberBox'),
                  onClick: q(1),
                  children: '1',
                }),
                l > 4 &&
                  R > 6 &&
                  (0, e.jsx)('div', {
                    className: ''.concat(Z, '-numberBox'),
                    onClick: ln,
                    children: (0, e.jsx)(yr.Z, {}),
                  }),
                R >= 1 &&
                  F.map(function (m, s) {
                    return (0,
                    e.jsx)('div', { className: l === m ? ''.concat(Z, '-actived  ').concat(Z, '-numberBox') : ''.concat(Z, '-numberBox'), onClick: q(m), children: m }, s);
                  }),
                R - l >= 4 &&
                  R > 6 &&
                  (0, e.jsx)('div', {
                    className: ''.concat(Z, '-numberBox'),
                    onClick: G,
                    children: (0, e.jsx)(yr.Z, {}),
                  }),
                R > 1 &&
                  (0, e.jsx)('div', {
                    className:
                      l === R
                        ? ''.concat(Z, '-actived ').concat(Z, '-numberBox')
                        : ''.concat(Z, '-numberBox'),
                    onClick: q(R),
                    children: R,
                  }),
                (0, e.jsx)('div', {
                  className:
                    l === R || R <= 1
                      ? ''.concat(Z, '-next ').concat(Z, '-disabled')
                      : ''.concat(Z, '-next'),
                  onClick: nn,
                  children: (0, e.jsx)(pe.Z, {}),
                }),
                Array.isArray(u) &&
                  j &&
                  (0, e.jsx)(Yr, {
                    option: u.map(function (m) {
                      return { label: ''.concat(m, ' \u6761/\u9875'), value: m };
                    }),
                    width: 100,
                    handleSelectCallback: T,
                  }),
                c &&
                  (0, e.jsxs)('div', {
                    className: ''.concat(Z, '-jumpBox'),
                    children: [
                      (0, e.jsx)('span', { children: '\u8DF3\u81F3' }),
                      (0, e.jsx)('input', {
                        type: 'text',
                        className: ''.concat(Z, '-jumpBox-jump'),
                        onKeyUp: B,
                      }),
                      (0, e.jsx)('span', { children: '\u9875' }),
                    ],
                  }),
              ],
            }),
          });
        },
        Nr = (0, r.forwardRef)(Ec),
        An = fn(5991),
        xt = fn(78878),
        Ue = fn(38166),
        Ke = fn(73703),
        Tn = fn(80398),
        _r,
        Tr,
        Dr,
        Pr,
        Fr = '80px',
        zr = '30px',
        Er = '#cccccc',
        Zn = '#ffffff',
        Or = '#c9cdd4',
        bt = S.concisTransformXs,
        Mr = S.concisFontMd,
        te = S.concisPrimaryColor,
        re = S.concisWarningColor,
        oe = S.concisDangerColor,
        ie = S.concisInfoColor,
        Ee = S.concisDarkPrimaryColor,
        Oe = S.concisDarkWarningColor,
        Me = S.concisDarkDangerColor,
        Re = S.concisDarkInfoColor,
        Oc = (0, cn.iv)(
          _r ||
            (_r = an()([
              `
  .concis-dark-select {
    .selected,
    .selectOptions,
    .option {
      color: #b0b0b0;
      background: #343436;
    }

    .selectOptions {
      .disabled-option {
        color: #606060;
      }
    }

    .disabled-selected {
      color: #606060;
    }

    .select-option {
      background-color: #474749 !important;
    }
  }

  .concis-dark-select.primary-selected {
    border: 1px solid `,
              `;

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: `,
              `;

        .placeholder,
        .size,
        span {
          color: `,
              `;
        }
      }
    }
  }

  .concis-dark-select.error-selected {
    border: 1px solid `,
              `;

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: `,
              `;

        .placeholder,
        .size,
        span {
          color: `,
              `;
        }
      }
    }
  }

  .concis-dark-select.warning-selected {
    border: 1px solid `,
              `;

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: `,
              `;

        .placeholder,
        .size,
        span {
          color: `,
              `;
        }
      }
    }
  }

  .concis-dark-select.success-selected {
    border: 1px solid `,
              `;

    .selected {
      background: transparent;

      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      .selected:not(.disabled-selected) {
        background: `,
              `;

        .placeholder,
        .size,
        span {
          color: `,
              `;
        }
      }
    }
  }

  .concis-dark-select.isChoose.primary-selected,
  .concis-dark-select.isChoose.error-selected,
  .concis-dark-select.isChoose.warning-selected,
  .concis-dark-select.isChoose.success-selected {
    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }
  }

  .concis-dark-select.isChoose.primary-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  .concis-dark-select.isChoose.error-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  .concis-dark-select.isChoose.warning-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  .concis-dark-select.isChoose.success-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }
`,
            ])),
          Ee,
          Ee,
          Ee,
          Zn,
          Me,
          Me,
          Me,
          Zn,
          Oe,
          Oe,
          Oe,
          Zn,
          Re,
          Re,
          Re,
          Zn,
          Zn,
          Ee,
          Ee,
          Me,
          Me,
          Oe,
          Oe,
          Re,
          Re
        ),
        Mc = (0, cn.iv)(
          Tr ||
            (Tr = an()([
              `
  .selectOption-enter,
  .selectOption-appear {
    height: 0;
    opacity: 0;
  }

  .selectOption-enter-active,
  .selectOption-appear-active {
    height: `,
              `;
    opacity: 1;
    transition: height 400ms, opacity 400ms;
  }

  .selectOption-exit {
    height: `,
              `;
    opacity: 1;
  }

  .selectOption-exit-active {
    height: 0;
    opacity: 0;
    transition: height 400ms, opacity 400ms;
  }
`,
            ])),
          function (t) {
            var n = t.optionSize;
            return n;
          },
          function (t) {
            var n = t.optionSize;
            return n;
          }
        );
      function Rr(t, n) {
        return (0, cn.iv)(
          Dr ||
            (Dr = an()([
              `
    cursor: `,
              `;
  `,
            ])),
          t || n ? 'not-allowed' : 'pointer'
        );
      }
      var Rc = cn.ZP.div(
          Pr ||
            (Pr = an()([
              `
  .concis-select,
  .concis-dark-select {
    position: relative;
    width: `,
              `;
    height: `,
              `;
    font-size: `,
              `;
    line-height: `,
              `;
    text-align: center;
    border: 1px solid `,
              `;
    transition: 0.1s linear;
    user-select: none;
    `,
              `

    .disabled-selected {
      color: `,
              `;
    }

    .selected {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 `,
              `;
      background: `,
              `;
      `,
              `

      .size {
        margin-right: `,
              `;
      }

      .placeholder {
        margin-right: `,
              `;
        color: `,
              `;
      }

      &:focus {
        border-color: `,
              `;
      }
    }

    &:hover {
      border-color: `,
              `;
    }

    input {
      border: none;
      outline: none;
      width: 100%;
    }

    .selectOptions {
      position: absolute;
      top: 35px;
      display: flex;
      flex-direction: column;
      width: `,
              `;
      overflow: hidden;
      background-color: `,
              `;
      box-shadow: 0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926;
      transition: 0.1s linear;
      z-index: 9999;
      border-radius: 5px;

      .option {
        padding: 5px 0 5px 15px;
        font-size: `,
              `;
        line-height: 2em;
        text-align: left;
        cursor: pointer;

        &:hover:not(.disabled-option) {
          font-weight: 600;
        }
      }

      .disabled-option {
        color: `,
              `;
      }

      .select-option {
        padding: 5px 0 5px 15px;
        color: `,
              `;
        text-align: left;
      }
    }
  }
  //button select
  .primary-selected,
  .error-selected,
  .warning-selected,
  .success-selected {
    border-radius: 5px;

    .selected {
      background: transparent;
      transition: 0.2s linear;

      .placeholder,
      .size,
      span {
        transition: 0.2s linear;
      }
    }

    .disabled-selected {
      opacity: 0.7;
    }

    &:hover {
      .selected:not(.disabled-selected) {
        .placeholder,
        .size,
        span {
          color: `,
              `;
        }
      }
    }
  }

  .primary-selected {
    border: 1px solid `,
              `;

    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      border: 1px solid `,
              `;

      .selected:not(.disabled-selected) {
        background: `,
              `;
      }
    }

    .selectOptions .select-option {
      color: `,
              `;
    }
  }

  .error-selected {
    border: 1px solid `,
              `;

    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      border: 1px solid `,
              `;

      .selected:not(.disabled-selected) {
        background: `,
              `;
      }
    }

    .selectOptions .select-option {
      color: `,
              `;
    }
  }

  .warning-selected {
    border: 1px solid `,
              `;

    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      border: 1px solid `,
              `;

      .selected:not(.disabled-selected) {
        background: `,
              `;
      }
    }

    .selectOptions .select-option {
      color: `,
              `;
    }
  }

  .success-selected {
    border: 1px solid `,
              `;

    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }

    &:hover {
      border: 1px solid `,
              `;

      .selected:not(.disabled-selected) {
        background: `,
              `;
      }
    }

    .selectOptions .select-option {
      color: `,
              `;
    }
  }
  //active
  .isChoose.primary-selected,
  .isChoose.error-selected,
  .isChoose.warning-selected,
  .isChoose.success-selected {
    .selected {
      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }
  }

  .isChoose.primary-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;

      .placeholder,
      .size,
      span {
        color: `,
              `;
      }
    }
  }

  .isChoose.error-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  .isChoose.warning-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  .isChoose.success-selected {
    border: 1px solid `,
              `;

    .selected {
      background-color: `,
              `;
    }
  }

  `,
              `

  `,
              `
`,
            ])),
          function (t) {
            var n = t.width;
            return n ? ''.concat(n, 'px') : Fr;
          },
          zr,
          Mr,
          zr,
          Er,
          function (t) {
            var n = t.disabled,
              i = t.loading;
            return Rr(n, i);
          },
          Or,
          bt,
          Zn,
          function (t) {
            var n = t.disabled,
              i = t.loading;
            return Rr(n, i);
          },
          bt,
          bt,
          Er,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.width;
            return n ? ''.concat(n, 'px') : Fr;
          },
          Zn,
          Mr,
          Or,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Zn,
          te,
          te,
          te,
          te,
          te,
          oe,
          oe,
          oe,
          oe,
          oe,
          re,
          re,
          re,
          re,
          re,
          ie,
          ie,
          ie,
          ie,
          ie,
          Zn,
          te,
          te,
          Zn,
          oe,
          oe,
          re,
          re,
          ie,
          ie,
          Oc,
          Mc
        ),
        Ic = fn(37635),
        ve = fn.n(Ic);
      function ae(t, n, i, a) {
        return function () {
          t && t.addEventListener(n, i, a || !1);
        };
      }
      function ge(t, n, i, a) {
        return function () {
          t && t.removeEventListener(n, i, a || !1);
        };
      }
      function Ie(t, n) {
        t instanceof HTMLElement || (t = t.current);
        var i = function (d) {
          t && !t.contains(d.target) && n.call(this, d);
        };
        return (
          ae(window, 'click', i)(),
          function () {
            ge(window, 'click', i)();
          }
        );
      }
      function Qe(t, n) {
        t && (typeof t == 'function' ? t(n) : ve()(t) === 'object' && (t.current = n));
      }
      var Lc = fn(25359),
        Pn = fn.n(Lc),
        Bc = fn(49811),
        Jn = fn.n(Bc),
        Ir,
        Ac = S.concisDarkFontColor,
        Zc = `
  .concis-dark-form .concis-form-item-label {
    color: `.concat(
          Ac,
          `;
  }

  .concis-dark-form .disabled,
  .concis-dark-form-item-disabled {
    background-color: transparent;
  }
`
        ),
        Hc = cn.ZP.div(
          Ir ||
            (Ir = an()([
              `
  .concis-form,
  .concis-dark-form {
    position: relative;

    .disabled {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      width: 100%;
      height: 100%;
      background: #fff;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  `,
              `
`,
            ])),
          Zc
        ),
        Lr,
        Br = '#f53f3f',
        Wc = '0.5',
        Ar = 0,
        Yc = 1,
        yt = S.concisTransformLg,
        $c = S.concisFontMd,
        Xc = S.concisTransformXs,
        Vc = S.concisFontSm,
        Jc = cn.ZP.div(
          Lr ||
            (Lr = an()([
              `
  .concis-form-item {
    position: relative;
    display: flex;
    margin-bottom: `,
              `;
    font-size: `,
              `;

    &-label {
      position: relative;
      top: `,
              `;
      min-width: 100px;
      margin-right: `,
              `;
      color: #4e5969;
      text-align: right;

      svg {
        position: relative;
        bottom: 2px;
        margin-right: 4px;
        color: `,
              `;
      }
    }

    &-disabled {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      cursor: not-allowed;
      opacity: `,
              `;
    }

    .hide-rule-label,
    .show-rule-label {
      position: absolute;
      bottom: calc(-1 * `,
              `);
      left: 0;
      color: `,
              `;
      font-size: `,
              `;
      opacity: `,
              `;
      transition: 0.2s linear;
    }

    .hide-rule-label {
      opacity: `,
              `;
    }

    .show-rule-label {
      opacity: `,
              `;
    }
  }
`,
            ])),
          yt,
          $c,
          Xc,
          yt,
          Br,
          Wc,
          yt,
          Br,
          Vc,
          Ar,
          Ar,
          Yc
        ),
        Gc = fn(21140),
        Zr = fn.n(Gc),
        Uc = fn(63466),
        Hr = fn.n(Uc),
        Kc = fn(52510),
        qe = fn.n(Kc),
        Qc = (function () {
          function t(n, i, a) {
            Zr()(this, t),
              qe()(this, 'wrapperCol', void 0),
              qe()(this, 'wrapperTol', void 0),
              qe()(this, 'layout', void 0),
              (this.wrapperCol = n),
              (this.wrapperTol = i),
              (this.layout = a);
          }
          return (
            Hr()(t, [
              {
                key: 'getStyle',
                value: function () {
                  return tn()(
                    {
                      marginBottom: ''.concat(20 + this.wrapperCol, 'px'),
                      marginTop: ''.concat(20 + this.wrapperTol, 'px'),
                    },
                    this.formatLayout()
                  );
                },
              },
              {
                key: 'formatLayout',
                value: function () {
                  var i = {};
                  switch (this.layout) {
                    case 'horizontal':
                      i = {};
                      break;
                    case 'vertical':
                      i = { flexDirection: 'column', alignItems: 'flex-start' };
                      break;
                    default:
                      break;
                  }
                  return i;
                },
              },
            ]),
            t
          );
        })(),
        qc = (function () {
          function t(n) {
            Zr()(this, t), qe()(this, 'layout', void 0), (this.layout = n);
          }
          return (
            Hr()(t, [
              {
                key: 'getStyle',
                value: function () {
                  return tn()({}, this.getAlign());
                },
              },
              {
                key: 'getAlign',
                value: function () {
                  var i = {};
                  switch (this.layout) {
                    case 'horizontal':
                      i = {};
                      break;
                    case 'vertical':
                      i = { textAlign: 'left', marginBottom: '15px' };
                      break;
                    default:
                      break;
                  }
                  return i;
                },
              },
            ]),
            t
          );
        })(),
        nl = function (n) {
          var i = n.children,
            a = n.className,
            d = n.style,
            h = d === void 0 ? {} : d,
            f = n.label,
            o = n.wrapperCol,
            u = o === void 0 ? 0 : o,
            c = n.wrapperTol,
            j = c === void 0 ? 0 : c,
            v = n.field,
            y = n.rules,
            _ = y === void 0 ? [] : y,
            x = n.disabled,
            l = x === void 0 ? !1 : x,
            p = (0, r.useState)({}),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useState)({}),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useContext)(xn),
            X = I.prefixCls,
            M = 'concis-form-item',
            Y = hn(X, a, M),
            Q = (function () {
              var R = (0, r.useContext)(On);
              return {
                get: function (V) {
                  return R[V] || null;
                },
              };
            })();
          (0, r.useEffect)(
            function () {
              F(tn()(tn()({}, Z()), h)), A(J());
            },
            [n]
          );
          var Z = (0, r.useCallback)(
              function () {
                var R = new Qc(u, j, Q.get('layout'));
                return R.getStyle();
              },
              [u, j, Q.get('layout')]
            ),
            J = (0, r.useCallback)(
              function () {
                var R = new qc(Q.get('layout'));
                return R.getStyle();
              },
              [Q.get('layout')]
            );
          return (0, e.jsx)(Jc, {
            children: (0, e.jsxs)('div', {
              className: Y,
              style: E,
              children: [
                (0, e.jsxs)('div', {
                  className: ''.concat(M, '-label'),
                  style: W,
                  children: [
                    _.length > 0 &&
                      (0, e.jsx)('svg', {
                        fill: 'currentColor',
                        viewBox: '0 0 1024 1024',
                        width: '0.5em',
                        height: '0.5em',
                        children: (0, e.jsx)('path', {
                          d: 'M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z',
                        }),
                      }),
                    f || '',
                  ],
                }),
                (0, e.jsxs)('div', {
                  className: v || ''.concat(M, '-content'),
                  style: Q.get('layout') === 'horizontal' ? { position: 'relative' } : {},
                  children: [
                    i,
                    l && (0, e.jsx)('div', { className: ''.concat(M, '-disabled') }),
                    v &&
                      _.length > 0 &&
                      (0, e.jsx)('div', { className: 'hide-rule-label', children: _[0].message }),
                  ],
                }),
              ],
            }),
          });
        },
        el = nl,
        On = (0, r.createContext)({}),
        me = {
          formRef: '',
          onSubmit: function () {},
          resetFields: function () {},
          validateFields: function () {},
          useFormContext: function () {},
        },
        kt = function (n) {
          var i = n.children,
            a = n.className,
            d = n.layout,
            h = d === void 0 ? 'horizontal' : d,
            f = n.style,
            o = n.formField,
            u = o === void 0 ? null : o,
            c = n.disabled,
            j = (0, r.useContext)(xn),
            v = j.prefixCls,
            y = j.darkTheme,
            _ = hn(v, a, 'concis-'.concat(y ? 'dark-' : '', 'form')),
            x = (0, r.useState)({}),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useState)(!1),
            F = H()(E, 2),
            z = F[0],
            O = F[1],
            W = (0, r.useState)(!1),
            A = H()(W, 2),
            I = A[0],
            X = A[1],
            M = (0, r.useRef)([]),
            Y = (0, r.useState)(u),
            Q = H()(Y, 2),
            Z = Q[0],
            J = Q[1],
            R = function (m) {
              M.current.push(m);
            },
            q = { formControlRef: Z, layout: h, reset: z, submitStatus: I, getChildVal: R },
            V = function () {
              var m = M.current,
                s = JSON.parse(JSON.stringify(p));
              for (var N in p) (s[N].val = m[0]), m.shift();
              return (M.current = []), s;
            },
            nn = function (m) {
              return new Promise(function (s) {
                X(!0),
                  setTimeout(
                    Jn()(
                      Pn()().mark(function N() {
                        var C, D;
                        return Pn()().wrap(function (k) {
                          for (;;)
                            switch ((k.prev = k.next)) {
                              case 0:
                                X(!1),
                                  (C = V()),
                                  (D = ln(C, m)),
                                  Object.keys(D).length > 0 &&
                                    s(tn()(tn()({}, { submitResult: !1 }), {}, { ruleResult: D })),
                                  s(tn()(tn()({}, { submitResult: !0 }), {}, { result: C }));
                              case 5:
                              case 'end':
                                return k.stop();
                            }
                        }, N);
                      })
                    )
                  );
              });
            },
            ln = function (m, s) {
              m === void 0 && (m = V());
              var N = {},
                C = function (L) {
                  var $ = p[L],
                    K = m[L].val;
                  if ($.rules) {
                    var on = !0,
                      gn = p[L].rules;
                    gn.forEach(function (dn) {
                      on = k(on, K, L, dn);
                      var vn = s.current.querySelector(w(''.concat(L, ' .show-rule-label')));
                      on && vn && (vn == null || vn.setAttribute('class', 'hide-rule-label'));
                    });
                  }
                };
              for (var D in m) C(D);
              function w(g) {
                return '.concis-form-item .'.concat(g);
              }
              function k(g, L, $, K) {
                return (
                  ((K.required && L === '' && g) ||
                    (K.maxLength && L.length > K.maxLength && g) ||
                    (K.minLength && L.length < K.minLength && g) ||
                    (K.fn && !K.fn(L))) &&
                    ((g = !1), b(w($), K.message, $, s)),
                  g
                );
              }
              function b(g, L, $, K) {
                N[$] = L;
                var on = K.current.querySelector(''.concat(g, ' .hide-rule-label')),
                  gn = K.current.querySelector(''.concat(g, ' .show-rule-label'));
                on && on !== null && on !== void 0 && on.innerText
                  ? (on.innerText = L)
                  : gn && gn !== null && gn !== void 0 && gn.innerText && (gn.innerText = L),
                  on == null || on.setAttribute('class', 'show-rule-label');
              }
              return N;
            },
            G = (0, r.useCallback)(
              function (T) {
                J(T),
                  O(!0),
                  setTimeout(function () {
                    O(!1);
                  });
              },
              [Z]
            ),
            B = function () {
              return new Promise(function (m) {
                X(!0),
                  setTimeout(
                    Jn()(
                      Pn()().mark(function s() {
                        var N;
                        return Pn()().wrap(function (D) {
                          for (;;)
                            switch ((D.prev = D.next)) {
                              case 0:
                                X(!1), (N = V()), m(N);
                              case 3:
                              case 'end':
                                return D.stop();
                            }
                        }, s);
                      })
                    )
                  );
              });
            };
          return (
            (0, r.useEffect)(function () {
              if (u) {
                var T = {};
                i.forEach(function (m) {
                  if (m.props.field) {
                    var s = m.props.field;
                    T[s] = { rules: m.props.rules || null, val: '' };
                  }
                }),
                  P(T);
              }
            }, []),
            (0, r.useEffect)(
              function () {
                u &&
                  ((me.onSubmit = nn),
                  (me.resetFields = G),
                  (me.validateFields = ln),
                  (me.useFormContext = B),
                  (me.formRef = u));
              },
              [p, u]
            ),
            (0, e.jsx)(Hc, {
              children: (0, e.jsx)(On.Provider, {
                value: q,
                children: (0, e.jsxs)('div', {
                  className: _,
                  style: f,
                  ref: u || null,
                  children: [c && (0, e.jsx)('div', { className: 'disabled' }), i],
                }),
              }),
            })
          );
        };
      (kt.Item = el),
        (kt.useForm = function () {
          return me;
        });
      var tl = kt,
        Wr = '#325dff',
        rl = function (n, i) {
          var a,
            d = n.option,
            h = n.className,
            f = n.style,
            o = n.width,
            u = n.placeholder,
            c = n.disabled,
            j = n.loading,
            v = n.showSearch,
            y = n.clearable,
            _ = n.type,
            x = n.handleSelectCallback,
            l = n.handleTextChange,
            p = (0, r.useState)(''),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useState)(''),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)(!1),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useRef)(null),
            Z = (0, r.useContext)(On),
            J = (0, r.useContext)(xn),
            R = J.globalColor,
            q = J.prefixCls,
            V = J.darkTheme,
            nn = (0, r.useMemo)(
              function () {
                return hn(
                  q,
                  h,
                  'concis-'.concat(V ? 'dark-' : '', 'select'),
                  _ ? ''.concat(_, '-selected') : null,
                  M ? 'isChoose' : null
                );
              },
              [M, V, _]
            ),
            ln = function (D) {
              var w, k;
              ((w = D.target) !== null &&
                w !== void 0 &&
                (k = w.getAttribute('class')) !== null &&
                k !== void 0 &&
                k.includes('selected')) ||
                Y(!1);
            };
          (0, r.useEffect)(function () {
            var C = Ie(Q, ln);
            return function () {
              C();
            };
          }, []),
            (0, r.useEffect)(
              function () {
                Z.reset && F('');
              },
              [Z.reset]
            ),
            (0, r.useEffect)(
              function () {
                Z.submitStatus && Z.getChildVal(E);
              },
              [Z.submitStatus]
            );
          var G = function (D) {
              c || j || Y(!M);
            },
            B = function (D, w) {
              D.disabled || (Y(!1), F(D.label), A(D.value), x && x(D));
            },
            T = (0, r.useMemo)(
              function () {
                return d == null
                  ? void 0
                  : d.filter(function (C) {
                      return C.label.includes(E);
                    });
              },
              [d, E]
            ),
            m = (0, r.useCallback)(
              function (C) {
                F(C.target.value), l && l(C.target.value);
              },
              [E]
            ),
            s = function (D) {
              A(''), F('');
            },
            N = (0, r.useMemo)(
              function () {
                return E ? 'size' : 'placeholder';
              },
              [E]
            );
          return (0, e.jsx)(Rc, {
            width: o,
            disabled: c,
            loading: j,
            globalColor: c || j ? '#ccc' : R || Wr,
            optionSize: ''.concat((v ? T.length : d == null ? void 0 : d.length) * 33 || 0, 'px'),
            children: (0, e.jsxs)('div', {
              className: nn,
              style: f,
              ref: function (D) {
                (Q.current = D), Qe(i, D);
              },
              children: [
                (0, e.jsx)('div', {
                  className: hn('selected', c || j ? 'disabled-selected' : null),
                  onClick: v ? null : G,
                  children: v
                    ? (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)('input', {
                            type: 'text',
                            className: 'selected',
                            value: E,
                            placeholder: u,
                            onClick: G,
                            onChange: function (D) {
                              return m(D);
                            },
                          }),
                          y
                            ? (0, e.jsx)(An.Z, { style: { fontSize: '12px' }, onClick: s })
                            : M
                            ? (0, e.jsx)(xt.Z, { style: { fontSize: '12px' }, onClick: G })
                            : (0, e.jsx)(Ue.Z, { style: { fontSize: '12px' }, onClick: G }),
                        ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)('div', { className: N, children: E || u }),
                          j
                            ? (0, e.jsx)(Ke.Z, { style: { fontSize: '12px' } })
                            : M
                            ? (0, e.jsx)(xt.Z, { style: { fontSize: '12px' }, onClick: G })
                            : (0, e.jsx)(Ue.Z, { style: { fontSize: '12px' }, onClick: G }),
                        ],
                      }),
                }),
                (0, e.jsx)(Tn.Z, {
                  in: M,
                  timeout: 100,
                  appear: !0,
                  mountOnEnter: !0,
                  classNames: 'selectOption',
                  unmountOnExit: !0,
                  onEnter: function (D) {
                    D.style.display = 'block';
                  },
                  onExited: function (D) {
                    D.style.display = 'none';
                  },
                  children: (0, e.jsx)('div', {
                    className: 'selectOptions',
                    children:
                      (a = v ? T : d) === null || a === void 0
                        ? void 0
                        : a.map(function (C) {
                            return (0, e.jsx)(
                              'div',
                              {
                                className:
                                  C.value === W
                                    ? 'select-option '.concat(C.disabled ? 'disabled-option' : '')
                                    : 'option '.concat(C.disabled ? 'disabled-option' : ''),
                                style: C.disabled
                                  ? { cursor: 'not-allowed', '--line-disabled': '#000000' }
                                  : { '--line-disabled': R || Wr },
                                onClick: function (w) {
                                  return B(C, w);
                                },
                                children: C.label,
                              },
                              C.label
                            );
                          }),
                  }),
                }),
              ],
            }),
          });
        },
        Yr = (0, r.forwardRef)(rl),
        nt = fn(74445),
        $r,
        Xr,
        ol = '#c5c5c5',
        il = '#bebdbd',
        al = '170px',
        cl = 'rgba(0,0,0,.25098039215686274)',
        ll = S.concisFontMd,
        sl = S.concisTransformXs,
        dl = S.concisDarkFontColor,
        ul = S.concisPrimaryColor,
        fl = S.concisDarkPrimaryColor,
        hl = `
  .concis-dark-input {
    .input {
      color: `
          .concat(
            dl,
            ` !important;
      background: #232323;

      &:hover {
        background: #282828;
      }

      &:focus {
        background: #232323;
        border-color: `
          )
          .concat(
            function (t) {
              var n = t.focusColor;
              return n || fl;
            },
            `;
      }
    }

    .input-clear {
      color: `
          )
          .concat(
            ol,
            `;
    }
  }
`
          );
      function pl(t) {
        var n = t ? ''.concat(t, 'px') : al;
        return (0, cn.iv)(
          $r ||
            ($r = an()([
              `
    width: `,
              `;
  `,
            ])),
          n
        );
      }
      var vl = cn.ZP.span(
          Xr ||
            (Xr = an()([
              `
  .concis-input,
  .concis-dark-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `,
              `

    .input {
      box-sizing: border-box;
      width: 100%;
      padding: 4px 18px 4px 11px;
      color: #000000d9;
      font-size: `,
              `;
      line-height: 1.5715;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      outline: none;
      transition: all 0.3s;
      border-radius: 10px;

      &:hover {
        background: #e4e4e4;
      }

      &:focus {
        background: #fff;
        border-color: `,
              `;
      }
    }

    .input-clear {
      top: 9px;
      right: 5px;
      position: absolute;
      color: `,
              `;
    }

    .numTags {
      position: absolute;
      right: `,
              `;
      display: flex;
      flex-direction: column;
      color: `,
              `;
    }
  }

  `,
              `
`,
            ])),
          function (t) {
            var n = t.width;
            return pl(n);
          },
          ll,
          function (t) {
            var n = t.focusColor;
            return n || ul;
          },
          cl,
          sl,
          il,
          hl
        ),
        gl = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.width,
            f = h === void 0 ? '170' : h,
            o = n.type,
            u = n.placeholder,
            c = n.showClear,
            j = n.showTogglePwd,
            v = n.min,
            y = n.max,
            _ = n.step,
            x = n.handleIptChange,
            l = n.handleKeyDown,
            p = n.handleIptFocus,
            P = n.handleClick,
            E = n.handleIptBlur,
            F = n.handleNumChange,
            z = n.clearCallback,
            O = n.defaultValue,
            W = n.isFather,
            A = W === void 0 ? !1 : W,
            I = (0, r.useState)(O || ''),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useState)(!0),
            Z = H()(Q, 2),
            J = Z[0],
            R = Z[1],
            q = (0, r.useContext)(xn),
            V = q.prefixCls,
            nn = q.darkTheme,
            ln = q.globalColor,
            G = hn(V, a, 'concis-'.concat(nn ? 'dark-' : '', 'input')),
            B = (0, r.useContext)(On);
          (0, r.useEffect)(
            function () {
              B.reset && Y('');
            },
            [B.reset]
          ),
            (0, r.useEffect)(
              function () {
                B.submitStatus && !A && B.getChildVal(M);
              },
              [B.submitStatus]
            );
          var T = function (g) {
              if (!(d && Object.keys(d).includes('caretColor'))) {
                var L = g.target.value;
                Y(L), x && x(L);
              }
            },
            m = function () {
              if (o === 'num') {
                var g = Number(M);
                if (isNaN(g)) Y(''), x && x('');
                else {
                  var L = w(g);
                  g !== L && (Y(L), x && x(L));
                }
              }
              E && E();
            },
            s = function () {
              p && p(M);
            },
            N = function () {
              P && P();
            },
            C = function () {
              if (o === 'num' && isNaN(Number(M))) return Y('');
              var g = _ || 1,
                L = w(Number(M) + g);
              F && F(L), Y(L);
            },
            D = function () {
              if (o === 'num' && isNaN(Number(M))) return Y('');
              var g = _ || 1,
                L = w(Number(M) - g);
              F && F(L), Y(L);
            },
            w = function (g) {
              return _ && typeof y == 'number' && g > y
                ? y
                : _ && typeof v == 'number' && g < v
                ? v
                : g;
            },
            k = (0, r.useMemo)(
              function () {
                return j && o === 'password' ? (J ? 'password' : 'text') : o || 'text';
              },
              [o, j, J]
            );
          return (0, e.jsx)(vl, {
            width: f,
            focusColor: ln,
            children: (0, e.jsxs)('div', {
              className: G,
              style: d,
              children: [
                (0, e.jsx)('input', {
                  className: 'input',
                  type: k,
                  placeholder: u,
                  value: O || M,
                  onChange: T,
                  onBlur: m,
                  onFocus: s,
                  onKeyUp: function (g) {
                    return l && l(g);
                  },
                  onClick: N,
                  ref: i,
                }),
                (c &&
                  (0, e.jsx)('span', {
                    className: 'clear-svg input-clear',
                    onClick: function (g) {
                      g.stopPropagation(), Y(''), z && z();
                    },
                    children: (0, e.jsx)('svg', {
                      viewBox: '64 64 896 896',
                      focusable: 'false',
                      'data-icon': 'close-circle',
                      width: '1em',
                      height: '1em',
                      fill: 'currentColor',
                      'aria-hidden': 'true',
                      children: (0, e.jsx)('path', {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
                      }),
                    }),
                  })) ||
                  (o === 'password' &&
                    j &&
                    (0, e.jsx)(nt.Z, {
                      style: {
                        position: 'absolute',
                        right: '5px',
                        fontSize: '12px',
                        cursor: 'pointer',
                      },
                      onClick: function () {
                        return R(!J);
                      },
                    })) ||
                  (o === 'num' &&
                    (0, e.jsxs)('div', {
                      className: 'numTags',
                      children: [
                        (0, e.jsx)(xt.Z, {
                          style: { cursor: 'pointer', fontSize: '10px' },
                          onClick: C,
                        }),
                        (0, e.jsx)(Ue.Z, {
                          style: { cursor: 'pointer', fontSize: '10px' },
                          onClick: D,
                        }),
                      ],
                    })),
              ],
            }),
          });
        },
        Mn = (0, r.forwardRef)(gl),
        Vr,
        ml = '#c5c5c5',
        xl = S.concisRadiusXs,
        bl = S.concisDarkFontColor,
        yl = S.concisPrimaryColor,
        kl = S.concisDarkPrimaryColor,
        Cl = `
  .concis-dark-textarea {
    .textarea {
      color: `
          .concat(
            bl,
            ` !important;
      background: #232323;

      &:hover {
        background: #282828;
      }

      &:focus {
        background: #232323;
        border-color: `
          )
          .concat(
            function (t) {
              var n = t.focusColor;
              return n || kl;
            },
            `;
      }
    }

    & > .clear-svg {
      color: #c5c5c5;
    }
  }
`
          ),
        wl = cn.ZP.span(
          Vr ||
            (Vr = an()([
              `
  .concis-textarea,
  .concis-dark-textarea {
    position: relative;

    .textarea {
      display: box;
      display: flexbox;
      display: flex;
      box-sizing: border-box;
      width: 100%;
      height: 56px;
      min-height: 56px;
      padding: 5px 8px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      line-height: 22px;
      border: 1px solid #d9d9d9;
      border-radius: `,
              `;
      outline: none;
      transition: all 0.3s cubic-bezier(0.38, 0, 0.24, 1), height 0s;
      resize: vertical;

      &:hover {
        background: #e4e4e4;
      }

      &:focus {
        background: #fff;
        border-color: `,
              `;
      }
    }

    .textarea-limit {
      position: absolute;
      right: 16px;
      bottom: 8px;
      color: `,
              `;
      font-size: 14px;
    }

    .clear-svg {
      position: absolute;
      top: 5px;
      right: 0;
      padding: 0 5px;
      color: #00000040;
      font-size: 12px;
      cursor: pointer;
    }
  }

  `,
              `
`,
            ])),
          xl,
          function (t) {
            var n = t.focusColor;
            return n || yl;
          },
          ml,
          Cl
        ),
        Sl = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.placeholder,
            f = n.showClear,
            o = n.showCount,
            u = n.maxLength,
            c = n.handleIptChange,
            j = n.handleKeyDown,
            v = n.handleIptFocus,
            y = n.handleClick,
            _ = n.handleIptBlur,
            x = n.clearCallback,
            l = n.defaultValue,
            p = (0, r.useContext)(xn),
            P = p.prefixCls,
            E = p.globalColor,
            F = p.darkTheme,
            z = hn(P, a, 'concis-'.concat(F ? 'dark-' : '', 'textarea')),
            O = (0, r.useState)(l || ''),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useState)(!1),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1];
          (0, r.useEffect)(
            function () {
              c && c(A);
            },
            [A]
          );
          var Z = function (G) {
              u && !Y && u < G.target.value.length
                ? I(G.target.value.slice(0, u))
                : I(G.target.value);
            },
            J = function (G) {
              Q(!0);
            },
            R = function (G) {
              Q(!1), u && I(A.slice(0, u));
            },
            q = function (G) {
              _ && _(G);
            },
            V = function (G) {
              v && v(G);
            },
            nn = function (G) {
              y && y(G);
            };
          return (0, e.jsx)(wl, {
            focusColor: E,
            children: (0, e.jsxs)('div', {
              className: z,
              children: [
                (0, e.jsx)('textarea', {
                  className: 'textarea',
                  style: d,
                  placeholder: h,
                  value: l || A,
                  onChange: Z,
                  onBlur: q,
                  onFocus: V,
                  onKeyUp: function (G) {
                    return j && j(G);
                  },
                  onClick: nn,
                  onCompositionStart: J,
                  onCompositionEnd: R,
                  ref: i,
                }),
                f &&
                  (0, e.jsx)('span', {
                    className: 'clear-svg',
                    onClick: function (G) {
                      G.stopPropagation(), I(''), x && x();
                    },
                    children: (0, e.jsx)('svg', {
                      viewBox: '64 64 896 896',
                      focusable: 'false',
                      'data-icon': 'close-circle',
                      width: '1em',
                      height: '1em',
                      fill: 'currentColor',
                      'aria-hidden': 'true',
                      children: (0, e.jsx)('path', {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
                      }),
                    }),
                  }),
                o
                  ? (0, e.jsxs)('span', {
                      className: 'textarea-limit',
                      children: [A ? A.length : 0, '/', u],
                    })
                  : '',
              ],
            }),
          });
        },
        jl = (0, r.forwardRef)(Sl),
        Nl = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style;
          return (0, e.jsx)('div', { className: d, style: h, ref: i, children: a });
        },
        _l = (0, r.forwardRef)(Nl),
        Jr,
        Gr = '15px',
        Ct = '32px',
        Ur = S.concisTransformXs,
        Tl = S.concisRadiusLg,
        wt = S.concisFontMd,
        Dl = S.concisTransformLg,
        St = S.concisDisabledColor,
        Pl = `
  .concis-dark-radio-group {
    .groupDisabledStyle,
    .disabledLabel {
      color: #bbb8b8 !important;
    }

    .groupActive {
      background: @concis-dark-primary-color;
    }

    .groupStyle:hover {
      color: @concis-dark-primary-color;
    }
  }
`,
        Fl = cn.ZP.div(
          Jr ||
            (Jr = an()([
              `
  .concis-radio-group,
  .concis-dark-radio-group {
    display: flex;
    align-items: center;
    height: `,
              `;

    .radioBox {
      display: flex;
      align-items: center;
      height: `,
              `;
      margin: 0 `,
              `;
      cursor: pointer;

      .radio-checked,
      .radio {
        box-sizing: border-box;
        width: `,
              `;
        height: `,
              `;
        margin-right: `,
              `;
        background: #fff;
        border-radius: `,
              `;
        cursor: pointer;
        transition: 0.1s linear;
      }

      .radio-checked {
        border: 5px solid `,
              `;
      }

      .radio {
        border: 2px solid rgb(226, 226, 226);
      }

      .disabledRadio {
        cursor: not-allowed;
      }

      .radioLabel {
        font-size: `,
              `;
      }

      .disabledLabel {
        color: #00000040;
        font-size: `,
              `;
      }
    }

    .addOption {
      display: flex;
      flex-direction: row;
    }

    .groupDisabledStyle,
    .groupStyle,
    .groupActive {
      display: inline-block;
      height: `,
              `;
      margin: 0;
      padding: 0 `,
              `;
      color: #000000d9;
      font-size: `,
              `;
      line-height: 30px;
    }

    .groupDisabledStyle {
      background: #00000040;
      border: 1px solid `,
              `;
      cursor: pointer;
      opacity: 0.7;
    }

    .groupStyle {
      background: #fff;
      border: 1px solid `,
              `;
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        color: `,
              `;
      }
    }

    .groupActive {
      color: #fff;
      background: `,
              `;
      border: 1px solid `,
              `;
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  `,
              `
`,
            ])),
          Ct,
          Ct,
          Ur,
          Gr,
          Gr,
          Ur,
          Tl,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          wt,
          wt,
          Ct,
          Dl,
          wt,
          St,
          St,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          St,
          Pl
        ),
        zl = function (n, i) {
          var a = n.children,
            d = n.style,
            h = n.className,
            f = n.value,
            o = n.canAddOption,
            u = n.addOptionText,
            c = u === void 0 ? 'More...' : u,
            j = n.boxStyle,
            v = n.onChange,
            y = (0, r.useState)(f || 0),
            _ = H()(y, 2),
            x = _[0],
            l = _[1],
            p = (0, r.useState)(a),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useState)(''),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)(o),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useContext)(xn),
            Z = Q.globalColor,
            J = Q.prefixCls,
            R = Q.darkTheme,
            q = zn(),
            V = hn(J, h, 'concis-'.concat(R ? 'dark-' : '', 'radio-group')),
            nn = function (s, N, C) {
              s.disabled || (C && C.stopPropagation(), l(N), v && v(s, N), o && Y(!1));
            },
            ln = function () {
              l(E.length), Y(!0);
            },
            G = function (s) {
              s.keyCode === 13 &&
                W &&
                (F(function (N) {
                  var C = { props: { children: W } };
                  return [].concat(kn()(N), [C]);
                }),
                Y(!1));
            },
            B = function (s) {
              A(s);
            },
            T = (0, r.useCallback)(
              function (m, s) {
                return m.disabled ? 'groupDisabledStyle' : s === x ? 'groupActive' : 'groupStyle';
              },
              [a, j, f, x]
            );
          return (0, e.jsx)(Fl, {
            globalColor: Bn(q === 'auto' || q === 'dark', Z),
            children: (0, e.jsxs)('div', {
              className: V,
              style: d,
              ref: i,
              children: [
                E.map(function (m, s) {
                  return j
                    ? (0, e.jsx)(
                        'div',
                        {
                          className: T(m.props, s),
                          style: m.props.disabled
                            ? { cursor: 'not-allowed' }
                            : { cursor: 'pointer' },
                          onClick: function (C) {
                            return nn(m.props, s, C);
                          },
                          children: m.props.children,
                        },
                        s
                      )
                    : (0, e.jsxs)(
                        'div',
                        {
                          className: 'radioBox',
                          style: m.props.disabled
                            ? { cursor: 'not-allowed' }
                            : { cursor: 'pointer' },
                          onClick: function (C) {
                            return nn(m.props, s, C);
                          },
                          children: [
                            (0, e.jsx)('div', {
                              className: x === s ? 'radio-checked' : 'radio',
                              style: m.props.disabled
                                ? { cursor: 'not-allowed' }
                                : { cursor: 'pointer' },
                            }),
                            (0, e.jsx)('span', {
                              className: m.props.disabled ? 'disabledLabel' : 'radioLabel',
                              children: m.props.children,
                            }),
                          ],
                        },
                        s
                      );
                }),
                o
                  ? j
                    ? (0, e.jsxs)('div', {
                        className: 'addOption',
                        children: [
                          (0, e.jsx)('div', {
                            className: x === E.length ? 'groupActive' : 'groupStyle',
                            onClick: ln,
                            children: c,
                          }),
                          M && (0, e.jsx)(Mn, { handleKeyDown: G, handleIptChange: B }),
                        ],
                      })
                    : (0, e.jsxs)('div', {
                        className: 'addOption',
                        children: [
                          (0, e.jsxs)('div', {
                            className: 'radioBox',
                            onClick: ln,
                            children: [
                              (0, e.jsx)('div', {
                                className: x === E.length ? 'radio-checked' : 'radio',
                              }),
                              (0, e.jsx)('span', { className: 'radioLabel', children: c }),
                            ],
                          }),
                          M && (0, e.jsx)(Mn, { handleKeyDown: G, handleIptChange: B }),
                        ],
                      })
                  : (0, e.jsx)(e.Fragment, {}),
              ],
            }),
          });
        },
        El = (0, r.forwardRef)(zl),
        Gn = fn(7918),
        et = fn(22110),
        Kr,
        Qr,
        qr,
        no,
        tt = '50px',
        Ol = '220px',
        eo = S.concisFontMd,
        to = S.concisTransformSm,
        Ml = S.concisTransformXs,
        Rl = S.concisDarkPrimaryColor;
      function Il(t) {
        if (t) {
          if (typeof t == 'string')
            return (0, cn.iv)(
              Kr ||
                (Kr = an()([
                  `
        width: `,
                  `;
      `,
                ])),
              t.includes('%') ? t : ''.concat(t, 'px')
            );
          if (typeof t == 'number')
            return (0, cn.iv)(
              Qr ||
                (Qr = an()([
                  `
        width: `,
                  `px;
      `,
                ])),
              t
            );
        }
        return (0, cn.iv)(
          qr ||
            (qr = an()([
              `
    width: `,
              `;
  `,
            ])),
          Ol
        );
      }
      var Ll = `
  .concis-dark-menu {
    &-fatherTitle {
      &:hover {
        color: `
          .concat(
            function (t) {
              var n = t.menuOptionBg;
              return n;
            },
            `;
      }
    }

    &-childMenuOptions {
      color: #fff;

      &:hover {
        color: `
          )
          .concat(
            function (t) {
              var n = t.menuOptionBg;
              return n;
            },
            `;
      }
    }

    .active {
      color: #fff !important;
      background: rgba(60, 126, 255, 50%);

      .concis-dark-menu-fatherTitle:hover {
        color: #fff !important;
      }
    }
  }
`
          ),
        Bl = cn.ZP.div(
          no ||
            (no = an()([
              `
  .concis-menu,
  .concis-dark-menu {
    padding: 2px 0;
    user-select: none;
    `,
              `

    &-menuOptions {
      padding: 0 `,
              `;
      overflow: hidden;
      font-size: `,
              `;
      line-height: `,
              `;
      cursor: pointer;
      transition: 0.2s linear;
    }

    &-fatherTitle,
    &-activeFatherTitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: `,
              `;

      .left {
        i {
          margin-right: `,
              `;
        }
      }
    }

    &-activeMenuOptions,
    &-childMenuOptions {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-left: `,
              `;
      overflow: hidden;
      font-size: `,
              `;
      line-height: `,
              `;
      cursor: pointer;
      transition: 0.2s linear;
    }

    .active {
      border-radius: 15px 0 0 15px;
    }
  }

  .concis-menu {
    color: black;
    background-color: #fff;

    &-fatherTitle,
    &-activeFatherTitle {
      &:hover {
        color: `,
              `;
      }
    }

    &-activeFatherTitle {
      color: `,
              `;
    }

    &-activeMenuOptions {
      color: `,
              `;
      background-color: `,
              `;

      ::after {
        width: 3px;
        height: `,
              `;
        background-color: `,
              `;
        content: '';
      }
    }
  }

  `,
              `
`,
            ])),
          function (t) {
            var n = t.width;
            return Il(n);
          },
          to,
          eo,
          tt,
          tt,
          to,
          Ml,
          eo,
          tt,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.menuOptionBg;
            return n;
          },
          tt,
          Rl,
          Ll
        ),
        jt = '#3C7EFF',
        Al = '#325DFF',
        Zl = '#e6f7ff',
        In = '50px',
        Hl = function (n, i) {
          var a = (0, r.useState)(''),
            d = H()(a, 2),
            h = d[0],
            f = d[1],
            o = (0, r.useState)(''),
            u = H()(o, 2),
            c = u[0],
            j = u[1],
            v = (0, r.useState)({}),
            y = H()(v, 2),
            _ = y[0],
            x = y[1],
            l = n.items,
            p = n.className,
            P = n.width,
            E = n.dark,
            F = n.ableToggle,
            z = n.defaultOpen,
            O = n.handleRouteChange,
            W = n.style,
            A = (0, r.useContext)(xn),
            I = A.globalColor,
            X = A.prefixCls,
            M = A.darkTheme,
            Y = M || E ? 'concis-dark-menu' : 'concis-menu',
            Q = hn(X, p, Y),
            Z = zn();
          (0, r.useEffect)(function () {
            var G = J(l, {}, '');
            if (z)
              for (var B in G)
                (G[B].height = G[B].childNum + 1),
                  G[B].children.length > 0 &&
                    (G[B].children.map(function (T) {
                      return (T.height = ''.concat((T.childNum + 1) * 50, 'px'));
                    }),
                    (G[B].height += G[B].children.reduce(function (T, m) {
                      return T.childNum + m.childNum;
                    }))),
                  (G[B].height = ''.concat(G[B].height * 50, 'px'));
            x(G);
          }, []),
            (0, r.useEffect)(
              function () {
                O && O(c);
              },
              [c]
            );
          var J = function G(B, T, m) {
              return (
                B == null ||
                  B.forEach(function (s) {
                    if (s.children) {
                      if (s.level === 1)
                        T[s.key] = {
                          key: s.key,
                          height: '50px',
                          childNum: s.children.length,
                          level: s.level,
                          children: [],
                        };
                      else {
                        var N;
                        (N = T[m]) === null ||
                          N === void 0 ||
                          N.children.push({
                            key: s.key,
                            height: '50px',
                            childNum: s.children.length,
                            level: s.level,
                          });
                      }
                      G(s.children, T, s.level && s.level === 1 ? s.key : '');
                    }
                  }),
                T
              );
            },
            R = function (B, T) {
              T.stopPropagation();
              var m = B.key,
                s = tn()({}, _);
              if (
                ((s[m].height =
                  s[m].height === In ? ''.concat((s[m].childNum + 1) * 50, 'px') : In),
                F)
              ) {
                if (s[m].height !== In)
                  for (var N in s)
                    N !== m &&
                      ((s[N].height = In),
                      s[N].children &&
                        s[N].children.map(function (C) {
                          return (C.height = In);
                        }));
              } else
                s[m].children.length !== 0 &&
                  s[m].children.forEach(function (C) {
                    C.height = In;
                  });
              x(s);
            },
            q = function (B, T) {
              function m() {
                f(T), j(B.key);
              }
              function s() {
                var C = tn()({}, _);
                for (var D in C)
                  if (
                    C[D].children &&
                    C[D].children.findIndex(function (b) {
                      return b.key === B.key;
                    }) !== -1
                  ) {
                    var w = C[D].children.findIndex(function (b) {
                      return b.key === B.key;
                    });
                    C[D].children[w].height =
                      C[D].children[w].height === In
                        ? ''.concat((C[D].children[w].childNum + 1) * 50, 'px')
                        : In;
                    var k = (C[D].childNum - C[D].children.length) * 50 + 50;
                    (k += C[D].children.reduce(function (b, g) {
                      return Number(b.height.split('px')[0]) + Number(g.height.split('px')[0]);
                    })),
                      (C[D].height = k);
                  }
                x(C);
              }
              function N() {
                for (var C in _)
                  _[C].children &&
                    _[C].children.findIndex(function (D) {
                      return D.key === T;
                    }) !== -1 &&
                    f(_[C].key);
              }
              ((B.level === 2 && !B.children) || B.level === 3) && m(),
                B.level === 2 && s(),
                B.level === 3 && N();
            },
            V = function (B) {
              if (_[B]) {
                var T;
                return { height: (T = _[B]) === null || T === void 0 ? void 0 : T.height };
              }
              return { height: In };
            },
            nn = (0, r.useCallback)(
              function (G) {
                for (var B in _) {
                  var T,
                    m =
                      (T = _[B].children) === null || T === void 0
                        ? void 0
                        : T.findIndex(function (s) {
                            return s.key === G;
                          });
                  if (m !== -1) return { height: _[B].children[m].height };
                }
                return { height: In };
              },
              [_]
            ),
            ln = function G(B) {
              if (B.children)
                return B.children.map(function (T) {
                  return (0, e.jsx)(
                    'div',
                    {
                      children: (0, e.jsxs)('div', {
                        className:
                          c === T.key
                            ? ''.concat(Y, '-activeMenuOptions active')
                            : ''.concat(Y, '-childMenuOptions'),
                        style: tn()({}, nn(T.key)),
                        children: [
                          (0, e.jsxs)('div', {
                            className:
                              T.children &&
                              T.children.findIndex(function (m) {
                                return m.key === c;
                              }) !== -1
                                ? ''.concat(Y, '-activeFatherTitle')
                                : ''.concat(Y, '-fatherTitle'),
                            onClick: function (s) {
                              return q(T, B.key);
                            },
                            children: [
                              (0, e.jsx)('span', { children: T.label }),
                              T.children &&
                                (nn(T.key).height === In
                                  ? (0, e.jsx)(Gn.Z, {})
                                  : (0, e.jsx)(et.Z, {})),
                            ],
                          }),
                          (0, e.jsx)(
                            'div',
                            {
                              className: ''.concat(Y, '-childMenuOptions'),
                              children: T.children && G(T),
                            },
                            T.key
                          ),
                        ],
                      }),
                    },
                    T.key
                  );
                });
            };
          return (0, e.jsx)(Bl, {
            width: P,
            globalColor: I || M ? jt : Al,
            menuOptionBg: M || Z === 'dark' ? jt : Zl,
            children: (0, e.jsx)('div', {
              className: Q,
              style: W,
              ref: i,
              children:
                l == null
                  ? void 0
                  : l.map(function (G) {
                      return (0, e.jsx)(
                        'div',
                        {
                          children: (0, e.jsxs)('div', {
                            className: ''.concat(Y, '-menuOptions'),
                            style: V(G.key),
                            children: [
                              (0, e.jsxs)('div', {
                                className:
                                  h === G.key
                                    ? ''.concat(Y, '-activeFatherTitle')
                                    : ''.concat(Y, '-fatherTitle'),
                                onClick: function (T) {
                                  return R(G, T);
                                },
                                children: [
                                  (0, e.jsxs)('div', {
                                    className: 'left',
                                    children: [
                                      (0, e.jsx)('i', { children: G.icon }),
                                      (0, e.jsx)('span', { children: G.label }),
                                    ],
                                  }),
                                  V(G.key).height === In
                                    ? (0, e.jsx)(Gn.Z, {})
                                    : (0, e.jsx)(et.Z, {}),
                                ],
                              }),
                              (0, e.jsx)(e.Fragment, { children: G.children && ln(G) }),
                            ],
                          }),
                        },
                        G.key
                      );
                    }),
            }),
          });
        },
        Wl = (0, r.forwardRef)(Hl),
        ro,
        Yl = cn.ZP.div(
          ro ||
            (ro = an()([
              `
  .concis-affix {
    position: relative;
    z-index: 99;
    display: inline-block;
    color: #fff;
  }

  .concis-dark-affix {
    position: relative;
    z-index: 99;
    display: inline-block;
    color: #fff;
  }
`,
            ]))
        ),
        $l = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.affixType,
            f = n.offsetTop,
            o = n.offsetLeft,
            u = n.offsetBottom,
            c = n.offsetRight,
            j = n.style,
            v = (0, r.useContext)(xn),
            y = v.prefixCls,
            _ = v.darkTheme,
            x = hn(y, d, 'concis-'.concat(_ ? 'dark-' : '', 'affix')),
            l = (0, r.useState)({}),
            p = H()(l, 2),
            P = p[0],
            E = p[1],
            F;
          function z(I) {
            return (
              h === 'scroll'
                ? (ae(window, 'scroll', W)(), (I.position = 'relative'))
                : (I.position = 'fixed'),
              f && !I.bottom && (I.top = h === 'scroll' ? 0 : f),
              u && !I.top && (I.bottom = h === 'scroll' ? 0 : u),
              o && !I.right && (I.left = h === 'scroll' ? 0 : o),
              c && !I.left && (I.right = h === 'scroll' ? 0 : c),
              I
            );
          }
          function O(I) {
            return (
              (I = {
                position: 'fixed',
                top: f ? ''.concat(f, 'px') : I.top,
                bottom: u ? ''.concat(u, 'px') : I.bottom,
                left: o ? ''.concat(o, 'px') : I.left,
                right: c ? ''.concat(c, 'px') : I.right,
              }),
              I
            );
          }
          (0, r.useEffect)(function () {
            var I = document.querySelector('.concis'.concat(_ ? '-dark' : '', '-affix'));
            return (
              (F = new IntersectionObserver(function (X) {
                return A(X);
              })),
              F.observe(I),
              E(function (X) {
                return JSON.parse(JSON.stringify(z(X)));
              }),
              function () {
                F.unobserve(I), ge(window, 'scroll', W)();
              }
            );
          }, []);
          var W = function () {
              window.scrollY < 200 &&
                E(function (X) {
                  for (var M in X)
                    M === 'position'
                      ? (X[M] = 'relative')
                      : (M === 'right' || M === 'left' || M === 'top' || M === 'bottom') &&
                        (X[M] = '0');
                  return JSON.parse(JSON.stringify(X));
                });
            },
            A = function (X) {
              X.forEach(function (M) {
                M.isIntersecting ||
                  (P.position === 'relative' &&
                    E(function (Y) {
                      return JSON.parse(JSON.stringify(O(Y)));
                    }));
              });
            };
          return (0, e.jsx)(Yl, {
            children: (0, e.jsx)('div', {
              className: x,
              ref: i,
              style: tn()(tn()({}, P), j),
              children: a,
            }),
          });
        },
        Xl = (0, r.forwardRef)($l),
        Le = fn(44063),
        Be = fn(29483),
        Vl = fn(41939),
        oo = fn.n(Vl),
        io,
        ao,
        Jl = S.concisDarkFontColor,
        Gl = `
  .concis-dark-date-picker {
    .input {
      color: `.concat(
          Jl,
          `;
      background-color: transparent;
    }

    .disable:not(.day-empty) {
      background: #5c5c5c !important;
    }

    .date-picker-select {
      .left-select,
      .right-select {
        span {
          &:hover {
            background-image: linear-gradient(#5c5c5c, #5c5c5c);
          }
        }
      }
    }
  }
`
        );
      function co(t) {
        return (0, cn.iv)(
          io ||
            (io = an()([
              `
    background-image: linear-gradient(`,
              ', ',
              `);
  `,
            ])),
          t,
          t
        );
      }
      var Ul = cn.ZP.div(
          ao ||
            (ao = an()([
              `
  .concis-date-picker,
  .concis-dark-date-picker {
    font-size: 15px;

    .date-picker-select {
      display: flex;
      justify-content: space-around;
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;

      .left-select,
      .right-select {
        span {
          width: 25px;
          height: 25px;
          font-size: 13px;

          svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          //dis
          &:hover {
            background-image: linear-gradient(#e0e0e0, #e0e0e0);
            background-position: center;
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .middle-select {
        display: flex;
        align-items: center;
      }
    }

    table {
      width: 100%;
      padding: 10px;
      tr {
        display: flex;

        td,
        th {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 32px;
          height: 32px;
          margin: 5px 0;
          border-radius: 50%;

          &:hover:not(th, .day-empty, .disable, .active) {
            color: #fff;
            background-position: center;
            cursor: pointer;
            `,
              `
          }
        }

        .disable:not(.day-empty) {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: 0;
          cursor: not-allowed;
          opacity: 1;
        }

        .active {
          color: #fff;
          `,
              `
        }
      }

      .empty-row {
        height: 42px;
      }
    }
  }

  .concis-date-picker .pop-dialog {
    padding: 0;
  }

  `,
              `
`,
            ])),
          function (t) {
            var n = t.activedOptionColor;
            return co(n);
          },
          function (t) {
            var n = t.activedOptionColor;
            return co(n);
          },
          Gl
        ),
        lo,
        so = '4px',
        Kl = S.concisDarkFontColor,
        Ql = `
  .concis-dark-popover-card .open-container .pop-dialog {
    position: absolute;
    z-index: 9999;
    overflow: hidden;
    background-color: #373739;
    border: 1px solid #484849 !important;
    border-radius: `
          .concat(
            so,
            `;
    transition: 0.1s linear;

    p,
    div {
      color: `
          )
          .concat(
            Kl,
            ` !important;
    }
  }
`
          ),
        ql = `
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.2s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }
`;
      function ns(t, n, i, a) {
        var d = { width: ''.concat(i, 'px') },
          h = n.width,
          f = n.height,
          o = 5;
        return (
          t === 'bottom'
            ? (d.top = ''.concat(f + o, 'px'))
            : t === 'top'
            ? (d.bottom = ''.concat(f + o, 'px'))
            : t === 'right'
            ? ((d.left = ''.concat(h + o, 'px')), (d.bottom = ''.concat(Number(f) / 2, 'px')))
            : t === 'left' &&
              ((d.right = ''.concat(h + o, 'px')), (d.bottom = ''.concat(Number(f) / 2, 'px'))),
          a || (d.border = '1px solid #ccc'),
          tn()({}, d)
        );
      }
      var es = cn.ZP.div(
          lo ||
            (lo = an()([
              `
  .concis-popover-card,
  .concis-dark-popover-card {
    display: inline-block;
    width: auto;

    .open-container {
      position: relative;
      width: auto;
      border: 5px solid transparent;

      .pop-dialog {
        position: absolute;
        z-index: 9999;
        overflow: hidden;
        background-color: #fff;
        border-radius: `,
              `;
        transition: 0.1s linear;
        `,
              `
      }
    }
  }

  `,
              `

  `,
              `
`,
            ])),
          so,
          function (t) {
            var n = t.align,
              i = t.showBtnSize,
              a = t.dialogWidth,
              d = t.noBorder;
            return ns(n, i, a, d);
          },
          Ql,
          ql
        ),
        ts = (0, r.forwardRef)(function (t, n) {
          var i = t.children,
            a = t.className,
            d = t.style,
            h = d === void 0 ? {} : d,
            f = t.type,
            o = f === void 0 ? 'hover' : f,
            u = t.align,
            c = u === void 0 ? 'bottom' : u,
            j = t.content,
            v = t.noBorder,
            y = t.dialogWidth,
            _ = y === void 0 ? 200 : y,
            x = t.defaultShow,
            l = x === void 0 ? !1 : x,
            p = t.closeDeps,
            P = t.onVisibleChange,
            E = (0, r.useRef)(),
            F = (0, r.useRef)(),
            z = (0, r.useState)(l || !1),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)({ width: '', height: '' }),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useState)(p),
            Z = H()(Q, 2),
            J = Z[0],
            R = Z[1],
            q = (0, r.useContext)(xn),
            V = q.prefixCls,
            nn = q.darkTheme,
            ln = hn(V, a, 'concis-'.concat(nn ? 'dark-' : '', 'popover-card'));
          (0, r.useImperativeHandle)(n, function () {
            return { setShowDialog: A };
          }),
            (0, r.useEffect)(function () {
              Y({ width: E.current.offsetWidth, height: E.current.offsetHeight });
              function m() {
                A(!1);
              }
              return (
                o === 'click' && ae(window, 'click', m)(),
                function () {
                  o === 'click' && ge(window, 'click', m)();
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                Array.isArray(J) &&
                  !(
                    (J == null ? void 0 : J.length) === (p == null ? void 0 : p.length) &&
                    J.every(function (m, s) {
                      return m === p[s];
                    })
                  ) &&
                  A(!1),
                  R(p);
              },
              [p]
            ),
            (0, r.useEffect)(
              function () {
                P && P(W);
              },
              [W]
            );
          var G = function (s) {
              s.stopPropagation(), o === 'click' && A(!W);
            },
            B = function () {
              o === 'hover' && W === !1 && A(!0);
            },
            T = function () {
              o === 'hover' && W === !0 && A(!1);
            };
          return (0, e.jsx)(es, {
            align: c,
            showBtnSize: M,
            dialogWidth: _,
            noBorder: v,
            children: (0, e.jsx)('div', {
              className: ln,
              onMouseEnter: function () {
                return B();
              },
              onMouseLeave: function () {
                return T();
              },
              children: (0, e.jsxs)('div', {
                className: 'open-container',
                children: [
                  (0, e.jsx)('div', {
                    className: 'show-btn',
                    onClick: function (s) {
                      return G(s);
                    },
                    ref: E,
                    children: i,
                  }),
                  (0, e.jsx)(Tn.Z, {
                    in: W,
                    timeout: 200,
                    appear: !0,
                    mountOnEnter: !0,
                    classNames: 'fadeIn',
                    onEnter: function (s) {
                      s.style.display = 'block';
                    },
                    onExited: function (s) {
                      s.style.display = 'none';
                    },
                    children: (0, e.jsx)(r.Fragment, {
                      children: (0, e.jsx)('div', {
                        className: 'pop-dialog',
                        style: h,
                        onClick: function (s) {
                          return s.stopPropagation();
                        },
                        ref: F,
                        children: j,
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        }),
        ce = ts,
        rt = fn(48333),
        rs = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.showClear,
            f = h === void 0 ? !1 : h,
            o = n.align,
            u = n.handleChange,
            c = n.disableCheck,
            j =
              c === void 0
                ? function () {
                    return !1;
                  }
                : c,
            v = n.format,
            y = v === void 0 ? 'YYYY-MM-DD' : v,
            _ = {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1,
              day: new Date().getDate(),
            },
            x = (0, r.useState)(_),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'],
            F = (0, r.useState)([]),
            z = H()(F, 2),
            O = z[0],
            W = z[1],
            A = (0, r.useState)(''),
            I = H()(A, 2),
            X = I[0],
            M = I[1],
            Y = (0, r.useState)(new Date()),
            Q = H()(Y, 2),
            Z = Q[0],
            J = Q[1],
            R = (0, r.useContext)(On),
            q = (0, r.useContext)(xn),
            V = q.globalColor,
            nn = q.prefixCls,
            ln = q.darkTheme,
            G = { boxShadow: '0 0 5px 2px #d0d0d0', bottom: '45px' },
            B = hn(nn, a, 'concis-'.concat(ln ? 'dark-' : '', 'date-picker')),
            T = zn();
          (0, r.useEffect)(
            function () {
              var w = p.year,
                k = p.month,
                b = new Date(w, k, 1).getDay(),
                g = new Date(w, k, 0).getDate(),
                L = new Array(Math.ceil((b + g) / 7) * 7).fill('');
              W(
                oo()(
                  L.map(function ($, K) {
                    var on = ''.concat(K - b <= -1 || K - b + 1 > g ? '' : K - b + 1),
                      gn = new Date(w, k - 1, Number(on));
                    return { date: gn, disable: j(gn), value: on };
                  }),
                  7
                )
              );
            },
            [p.year, p.month]
          ),
            (0, r.useEffect)(
              function () {
                R.reset && (P(_), M(''));
              },
              [R.reset]
            ),
            (0, r.useEffect)(
              function () {
                R.submitStatus && R.getChildVal(X);
              },
              [R.submitStatus]
            );
          var m = function () {
              M(''), u && u(null);
            },
            s = function (k) {
              k.disable ||
                (J(k.date),
                M(rt(k.date).format(y)),
                P({
                  year: rt(k.date).get('year'),
                  month: rt(k.date).get('month') + 1,
                  day: rt(k.date).get('date'),
                }),
                u && u(k.date));
            },
            N = function (k) {
              P(tn()(tn()({}, p), {}, { year: k }));
            },
            C = function (k, b) {
              var g = {};
              b === 'add'
                ? k > 12
                  ? (g = tn()(tn()({}, p), {}, { month: 1, year: p.year + 1 }))
                  : (g = tn()(tn()({}, p), {}, { month: k }))
                : k < 0
                ? (g = tn()(tn()({}, p), {}, { month: 12, year: p.year - 1 }))
                : (g = tn()(tn()({}, p), {}, { month: k })),
                P(g);
            },
            D = function (k) {
              return (
                k.getFullYear() === Z.getFullYear() &&
                k.getMonth() + 1 === Z.getMonth() + 1 &&
                k.getDate() === Z.getDate()
              );
            };
          return (0, e.jsx)(Ul, {
            activedOptionColor: Bn(T === 'dark' || T === 'auto' || ln, V),
            children: (0, e.jsx)(ce, {
              type: 'click',
              align: o,
              dialogWidth: 'auto',
              closeDeps: [X],
              style: G,
              content: (0, e.jsxs)('div', {
                className: B,
                style: d,
                ref: i,
                children: [
                  (0, e.jsxs)('div', {
                    className: 'date-picker-select',
                    children: [
                      (0, e.jsxs)('div', {
                        className: 'left-select',
                        children: [
                          (0, e.jsx)(Le.Z, {
                            onClick: function () {
                              return N(p.year - 1);
                            },
                          }),
                          (0, e.jsx)(ze.Z, {
                            onClick: function () {
                              return C(p.month - 1, 'del');
                            },
                          }),
                        ],
                      }),
                      (0, e.jsxs)('div', {
                        className: 'middle-select',
                        children: [
                          (0, e.jsx)('span', { children: p.year }),
                          '-',
                          (0, e.jsx)('span', { children: p.month }),
                        ],
                      }),
                      (0, e.jsxs)('div', {
                        className: 'right-select',
                        children: [
                          (0, e.jsx)(pe.Z, {
                            onClick: function () {
                              return C(p.month + 1, 'add');
                            },
                          }),
                          (0, e.jsx)(Be.Z, {
                            onClick: function () {
                              return N(p.year + 1);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)('table', {
                    children: [
                      (0, e.jsx)('thead', {
                        children: (0, e.jsx)('tr', {
                          children: E.map(function (w, k) {
                            return (0, e.jsx)('th', { children: w }, k);
                          }),
                        }),
                      }),
                      (0, e.jsxs)('tbody', {
                        children: [
                          O.map(function (w, k) {
                            return (0, e.jsx)(
                              'tr',
                              {
                                children: w.map(function (b, g) {
                                  return (0, e.jsx)(
                                    'td',
                                    {
                                      onClick: function () {
                                        return s(b);
                                      },
                                      className: ''
                                        .concat(b.value === '' ? 'day-empty' : '', ' ')
                                        .concat(b.disable ? 'disable' : '', ' ')
                                        .concat(D(b.date) ? 'active' : ''),
                                      children: b.value,
                                    },
                                    g
                                  );
                                }),
                              },
                              k
                            );
                          }),
                          O.length >= 6
                            ? (0, e.jsx)(e.Fragment, {})
                            : (0, e.jsx)('tr', { className: 'empty-row' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              children: (0, e.jsx)(Mn, {
                placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
                defaultValue: X,
                type: 'primary',
                showClear: f,
                clearCallback: m,
                isFather: !0,
              }),
            }),
          });
        },
        os = (0, r.forwardRef)(rs),
        uo,
        fo,
        Nt = S.concisRadiusXs,
        is = `
  .concis-dark-year-picker {
    table tr .disable:not(.day-empty) {
      background: #515357;
    }

    .year-picker-select {
      .left-select,
      .right-select {
        span {
          &:hover {
            background-image: linear-gradient(#5c5c5c, #5c5c5c);
          }
        }
      }
    }
  } 
`;
      function ho(t) {
        return (0, cn.iv)(
          uo ||
            (uo = an()([
              `
    background-image: linear-gradient(`,
              ', ',
              `);
  `,
            ])),
          t,
          t
        );
      }
      var as = cn.ZP.div(
          fo ||
            (fo = an()([
              `
  .concis-year-picker,
  .concis-dark-year-picker {
    font-size: 12px;

    .year-picker-select {
      display: flex;
      justify-content: space-around;
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;

      .left-select,
      .right-select {
        span {
          width: 25px;
          height: 25px;
          font-size: 13px;

          svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          //dis
          &:hover {
            background-image: linear-gradient(#e0e0e0, #e0e0e0);
            background-position: center;
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .middle-select {
        display: flex;
        align-items: center;
      }
    }

    table {
      width: 100%;
      padding: 10px;
      tr {
        display: flex;

        td,
        th {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 64px;
          height: 32px;
          border-radius: 16px;

          span {
            padding: 8px;
          }

          &:hover:not(th, .day-empty, .disable, .active) span {
            color: #fff0ec;
            background-position: center;
            border-radius: `,
              `;
            cursor: pointer;
            `,
              `
          }
        }

        .disable:not(.day-empty) {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: `,
              `;
          cursor: not-allowed;
          opacity: 1;
        }

        .active span {
          color: #fff0ec;
          background-size: 150%;
          border-radius: `,
              `;
          `,
              `
        }
      }
    }
  }

  .pop-dialog {
    padding: 0;
  }

  `,
              `
`,
            ])),
          Nt,
          function (t) {
            var n = t.activedOptionColor;
            return ho(n);
          },
          Nt,
          Nt,
          function (t) {
            var n = t.activedOptionColor;
            return ho(n);
          },
          is
        ),
        po = fn(48333),
        cs = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.showClear,
            f = h === void 0 ? !1 : h,
            o = n.align,
            u = n.handleChange,
            c = n.disableCheck,
            j =
              c === void 0
                ? function () {
                    return !1;
                  }
                : c,
            v = n.format,
            y = v === void 0 ? 'YYYY' : v,
            _ = (0, r.useState)(po().get('year')),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)([]),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)(''),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useState)(new Date()),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1],
            Z = (0, r.useContext)(On),
            J = (0, r.useContext)(xn),
            R = J.globalColor,
            q = J.prefixCls,
            V = J.darkTheme,
            nn = hn(q, a, 'concis-'.concat(V ? 'dark-' : '', 'year-picker')),
            ln = zn(),
            G = { boxShadow: '0 0 5px 2px #d0d0d0', bottom: '45px' };
          (0, r.useEffect)(
            function () {
              var s = new Array(12).fill('');
              z(
                oo()(
                  s.map(function (N, C) {
                    var D = new Date(l + C, 1, 1);
                    return { date: D, disable: j(D), value: l + C };
                  }),
                  3
                )
              );
            },
            [l]
          ),
            (0, r.useEffect)(
              function () {
                Z.reset && I('');
              },
              [Z.reset]
            ),
            (0, r.useEffect)(
              function () {
                Z.submitStatus && Z.getChildVal(A);
              },
              [Z.submitStatus]
            );
          var B = function () {
              I(''), u && u(null);
            },
            T = function (N) {
              N.disable || (Q(N.date), I(po(N.date).format(y)), u && u(N.date));
            },
            m = function (N) {
              return N.getFullYear() === Y.getFullYear();
            };
          return (0, e.jsx)(as, {
            activedOptionColor: Bn(ln === 'dark' || ln === 'auto' || V, R),
            children: (0, e.jsx)(ce, {
              type: 'click',
              align: o,
              dialogWidth: 'auto',
              closeDeps: [A],
              style: G,
              content: (0, e.jsxs)('div', {
                className: nn,
                ref: i,
                style: d,
                children: [
                  (0, e.jsxs)('div', {
                    className: 'year-picker-select',
                    children: [
                      (0, e.jsx)('div', {
                        className: 'left-select',
                        children: (0, e.jsx)(Le.Z, {
                          onClick: function () {
                            return p(l - 12);
                          },
                        }),
                      }),
                      (0, e.jsxs)('div', {
                        className: 'middle-select',
                        children: [
                          (0, e.jsx)('span', { children: l }),
                          '-',
                          (0, e.jsx)('span', { children: l + 11 }),
                        ],
                      }),
                      (0, e.jsx)('div', {
                        className: 'right-select',
                        children: (0, e.jsx)(Be.Z, {
                          onClick: function () {
                            return p(l + 12);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)('table', {
                    children: (0, e.jsx)('tbody', {
                      children: F.map(function (s, N) {
                        return (0, e.jsx)(
                          'tr',
                          {
                            children: s.map(function (C, D) {
                              return (0, e.jsx)(
                                'td',
                                {
                                  onClick: function () {
                                    return T(C);
                                  },
                                  className: ''
                                    .concat(C.disable ? 'disable' : '', '  ')
                                    .concat(m(C.date) ? 'active' : ''),
                                  children: (0, e.jsx)('span', { children: C.value }),
                                },
                                D
                              );
                            }),
                          },
                          N
                        );
                      }),
                    }),
                  }),
                ],
              }),
              children: (0, e.jsx)(Mn, {
                placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
                defaultValue: A,
                type: 'primary',
                showClear: f,
                clearCallback: B,
                isFather: !0,
              }),
            }),
          });
        },
        ls = (0, r.forwardRef)(cs),
        ss = fn(48333),
        vo = fn.n(ss),
        go,
        mo,
        _t = S.concisRadiusXs,
        ds = `
  .concis-dark-month-picker {
    table tr .disable:not(.day-empty) {
      background: #515357;
    }

    .month-picker-select {
      .left-select,
      .right-select {
        span {
          &:hover {
            background-image: linear-gradient(#5c5c5c, #5c5c5c);
          }
        }
      }
    }
  } 
`;
      function xo(t) {
        return (0, cn.iv)(
          go ||
            (go = an()([
              `
    background-image: linear-gradient(`,
              ', ',
              `);
  `,
            ])),
          t,
          t
        );
      }
      var us = cn.ZP.div(
          mo ||
            (mo = an()([
              `
  .concis-month-picker,
  .concis-dark-month-picker {
    font-size: 12px;

    .month-picker-select {
      display: flex;
      justify-content: space-around;
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;

      .left-select,
      .right-select {
        span {
          width: 25px;
          height: 25px;
          font-size: 13px;

          svg {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          //dis
          &:hover {
            background-image: linear-gradient(#e0e0e0, #e0e0e0);
            background-position: center;
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .middle-select {
        display: flex;
        align-items: center;
      }
    }

    table {
      width: 100%;
      padding: 10px;
      tr {
        display: flex;

        td,
        th {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 64px;
          height: 32px;
          text-align: center;
          border-radius: 16px;

          span {
            width: 64px;
            padding: 8px;
          }

          &:hover:not(th, .day-empty, .disable, .active) span {
            color: #fff0ec;
            background-position: center;
            border-radius: `,
              `;
            cursor: pointer;
            `,
              `
          }
        }

        .disable:not(.day-empty) {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: `,
              `;
          cursor: not-allowed;
          opacity: 1;
        }

        .active span {
          color: #fff0ec;
          border-radius: `,
              `;
          `,
              `
        }
      }
    }
  }

  .pop-dialog {
    padding: 0;
  }

  `,
              `
`,
            ])),
          _t,
          function (t) {
            var n = t.activedOptionColor;
            return xo(n);
          },
          _t,
          _t,
          function (t) {
            var n = t.activedOptionColor;
            return xo(n);
          },
          ds
        ),
        fs = function (n, i) {
          var a = n.className,
            d = n.showClear,
            h = d === void 0 ? !1 : d,
            f = n.align,
            o = n.handleChange,
            u = n.disableCheck,
            c =
              u === void 0
                ? function () {
                    return !1;
                  }
                : u,
            j = n.format,
            v = j === void 0 ? 'YYYY-MM' : j,
            y = n.style,
            _ = [
              ['\u4E00\u6708', '\u4E8C\u6708', '\u4E09\u6708'],
              ['\u56DB\u6708', '\u4E94\u6708', '\u516D\u6708'],
              ['\u4E03\u6708', '\u516B\u6708', '\u4E5D\u6708'],
              ['\u5341\u6708', '\u5341\u4E00\u6708', '\u5341\u4E8C\u6708'],
            ],
            x = (0, r.useState)(vo()().get('year')),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useState)(''),
            F = H()(E, 2),
            z = F[0],
            O = F[1],
            W = (0, r.useState)(new Date()),
            A = H()(W, 2),
            I = A[0],
            X = A[1],
            M = (0, r.useContext)(On),
            Y = (0, r.useContext)(xn),
            Q = Y.globalColor,
            Z = Y.prefixCls,
            J = Y.darkTheme,
            R = hn(Z, a, 'concis-'.concat(J ? 'dark-' : '', 'month-picker')),
            q = zn(),
            V = { boxShadow: '0 0 5px 2px #d0d0d0', bottom: '45px' };
          (0, r.useEffect)(
            function () {
              M.reset && (X(new Date()), O(''));
            },
            [M.reset]
          ),
            (0, r.useEffect)(
              function () {
                M.submitStatus && M.getChildVal(z);
              },
              [M.submitStatus]
            );
          var nn = function () {
              O(''), o && o(null);
            },
            ln = function (T) {
              c(T) || (X(T), O(vo()(T).format(v)), o && o(T));
            },
            G = function (T) {
              return T.getFullYear() === I.getFullYear() && T.getMonth() + 1 === I.getMonth() + 1;
            };
          return (0, e.jsx)(us, {
            activedOptionColor: Bn(q === 'dark' || q === 'auto' || J, Q),
            children: (0, e.jsx)(ce, {
              type: 'click',
              align: f,
              dialogWidth: 'auto',
              closeDeps: [z],
              style: V,
              content: (0, e.jsxs)('div', {
                className: R,
                style: y,
                ref: i,
                children: [
                  (0, e.jsxs)('div', {
                    className: 'month-picker-select',
                    children: [
                      (0, e.jsx)('div', {
                        className: 'left-select',
                        children: (0, e.jsx)(Le.Z, {
                          onClick: function () {
                            return P(p - 1);
                          },
                        }),
                      }),
                      (0, e.jsxs)('div', {
                        className: 'middle-select',
                        children: [
                          (0, e.jsx)('span', { children: p }),
                          '-',
                          (0, e.jsx)('span', { children: p + 12 }),
                        ],
                      }),
                      (0, e.jsx)('div', {
                        className: 'right-select',
                        children: (0, e.jsx)(Be.Z, {
                          onClick: function () {
                            return P(p + 1);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)('table', {
                    children: (0, e.jsx)('tbody', {
                      children: _.map(function (B, T) {
                        return (0, e.jsx)(
                          'tr',
                          {
                            children: B.map(function (m, s) {
                              return (0, e.jsx)(
                                'td',
                                {
                                  onClick: function () {
                                    return ln(new Date(p, T * 3 + s));
                                  },
                                  className: ''
                                    .concat(c(new Date(p, T * 3 + s)) ? 'disable' : '', '  ')
                                    .concat(G(new Date(p, T * 3 + s)) ? 'active' : ''),
                                  children: (0, e.jsx)('span', { children: m }),
                                },
                                s
                              );
                            }),
                          },
                          T
                        );
                      }),
                    }),
                  }),
                ],
              }),
              children: (0, e.jsx)(Mn, {
                placeholder: '\u8BF7\u9009\u62E9\u65E5\u671F',
                defaultValue: z,
                type: 'primary',
                showClear: h,
                clearCallback: nn,
                isFather: !0,
              }),
            }),
          });
        },
        hs = (0, r.forwardRef)(fs),
        ps = fn(7319),
        bo,
        yo,
        ko,
        Co,
        Tt = '#ffffff',
        wo = S.concisTransformXs,
        vs = S.concisFontMd,
        gs = S.concisRadiusXs,
        ms = S.concisTransformLg;
      function Ae(t) {
        return (0, cn.iv)(
          bo ||
            (bo = an()([
              `
    color: #fff;
    background: `,
              `;
    font-weight: bold;
    border-radius: 5px;
  `,
            ])),
          t
        );
      }
      function xs(t) {
        var n = {
          left: { right: '100%', bottom: '20px' },
          right: { left: '100%', bottom: '20px' },
          top: { bottom: '50px' },
          bottom: { top: '40px' },
        };
        return (0, cn.iv)(
          yo ||
            (yo = an()([
              `
    `,
              `
  `,
            ])),
          n[t]
        );
      }
      var bs = (0, cn.iv)(
          ko ||
            (ko = an()([
              `
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.3s linear;
  }
`,
            ]))
        ),
        ys = cn.ZP.span(
          Co ||
            (Co = an()([
              `
  .concis-range-picker,
  .concis-dark-range-picker {
    position: relative;
    user-select: none;
    display: inline-block;

    .rangePicker {
      position: relative;
      display: flex;
      align-items: center;

      .activeBorder {
        position: absolute;
        bottom: -2px;
        left: 0;
        z-index: 99;
        width: 100px;
        height: 3px;
        transition: 0.3s linear;
        `,
              `
      }
    }

    .date-box {
      position: absolute;
      z-index: 999;
      display: flex;
      width: 550px;
      padding: 20px 0;
      background-color: `,
              `;
      box-shadow: 0 0 5px 2px #d0d0d0;
      transition: 0.2s linear;
      border-radius: 10px;
      margin-top: 20px;
      `,
              `

      .left {
        width: 50%;
        padding: 0 `,
              `;
        font-size: `,
              `;

        .top-bar,
        .week {
          display: flex;
          justify-content: space-between;
        }

        .week {
          margin-top: 20px;
          padding: 0 25px 0 12px;
        }

        .day-list {
          display: flex;
          flex-wrap: wrap;

          .box-list {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            transition: 0.3s linear;

            &:hover {
              color: `,
              `;
              border-radius: 5px;
              `,
              `
            }
          }

          .actived {
            `,
              `
          }

          .white {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
        }
      }

      .right {
        width: 50%;
        padding: 0 `,
              `;
        font-size: 14px;

        .top-bar,
        .week {
          display: flex;
          justify-content: space-between;
        }

        .week {
          margin-top: `,
              `;
          padding: 0 25px 0 12px;
        }

        .day-list {
          display: flex;
          flex-wrap: wrap;

          .day-box {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;

            &:hover {
              color: `,
              `;
              border-radius: `,
              `;
              `,
              `
            }
          }

          .actived {
            `,
              `
          }

          .disabled-day {
            width: 35.7px;
            height: 40px;
            color: #ccc;
            line-height: 40px;
            text-align: center;
            cursor: not-allowed;
          }

          .white {
            width: 35.7px;
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
        }
      }
    }
  }

  .concis-dark-range-picker {
    .date-box {
      background-color: #373739;

      .day-list .disabled-day {
        opacity: 0.6;
      }

      .left,
      .right {
        .box-list,
        .day-box,
        .top-bar,
        .week {
          color: #fff;
        }
      }
    }
  }

  `,
              `
`,
            ])),
          function (t) {
            var n = t.activedColor;
            return Ae(n);
          },
          Tt,
          function (t) {
            var n = t.align;
            return xs(n);
          },
          wo,
          vs,
          Tt,
          function (t) {
            var n = t.activedColor;
            return Ae(n);
          },
          function (t) {
            var n = t.activedColor;
            return Ae(n);
          },
          wo,
          ms,
          Tt,
          gs,
          function (t) {
            var n = t.activedColor;
            return Ae(n);
          },
          function (t) {
            var n = t.activedColor;
            return Ae(n);
          },
          bs
        ),
        ot = /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/,
        ks = function (n, i) {
          var a = n.className,
            d = n.showClear,
            h = n.align,
            f = h === void 0 ? 'bottom' : h,
            o = n.handleChange,
            u = n.style,
            c = (0, r.useState)({
              startYear: new Date().getFullYear(),
              startMonth: new Date().getMonth() + 1,
              startDay: new Date().getDate(),
            }),
            j = H()(c, 2),
            v = j[0],
            y = j[1],
            _ = (0, r.useState)({
              endYear: new Date().getFullYear(),
              endMonth: new Date().getMonth() + 1,
              endDay: new Date().getDate(),
            }),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)(''),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)(''),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useState)(0),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1],
            Z = (0, r.useState)(0),
            J = H()(Z, 2),
            R = J[0],
            q = J[1],
            V = (0, r.useState)([]),
            nn = H()(V, 2),
            ln = nn[0],
            G = nn[1],
            B = (0, r.useState)([]),
            T = H()(B, 2),
            m = T[0],
            s = T[1],
            N = (0, r.useState)(!1),
            C = H()(N, 2),
            D = C[0],
            w = C[1],
            k = (0, r.useState)({ start: !1, end: !1 }),
            b = H()(k, 2),
            g = b[0],
            L = b[1],
            $ = (0, r.useContext)(On),
            K = (0, r.useContext)(xn),
            on = K.globalColor,
            gn = K.prefixCls,
            dn = K.darkTheme,
            vn = hn(gn, a, 'concis-'.concat(dn ? 'dark-' : '', 'range-picker')),
            Dn = (0, r.useRef)(null),
            Wn = (0, r.useRef)(null);
          (0, r.useEffect)(
            function () {
              for (
                var mn = v.startYear,
                  sn = v.startMonth,
                  en = l.endYear,
                  rn = l.endMonth,
                  U = new Date(''.concat(mn, '/').concat(sn, '/1')).getDay(),
                  pn = new Date(''.concat(en, '/').concat(rn, '/1')).getDay(),
                  yn = new Date(mn, sn, 0).getDate(),
                  Sn = new Date(en, rn, 0).getDate(),
                  _n = new Array(U).fill(''),
                  En = new Array(pn).fill(''),
                  Ge = 1;
                Ge < yn + 1;
                Ge++
              )
                _n.push(Ge);
              for (var ur = 1; ur < Sn + 1; ur++) En.push(ur);
              G(_n), Q(U), s(En), q(pn);
            },
            [v.startYear, v.startMonth, l.endYear, l.endMonth]
          );
          var Cn = zn();
          (0, r.useEffect)(function () {
            var mn = function () {
                w(!1);
              },
              sn = Ie(Wn, mn);
            return function () {
              sn();
            };
          }, []),
            (0, r.useEffect)(
              function () {
                g.start &&
                  g.end &&
                  (w(!1),
                  L(function (mn) {
                    return (mn.start = !1), (mn.end = !1), tn()({}, mn);
                  }),
                  o && o(F, A),
                  console.log(Y, R));
              },
              [g]
            ),
            (0, r.useEffect)(
              function () {
                $.reset &&
                  (y({
                    startYear: new Date().getFullYear(),
                    startMonth: new Date().getMonth() + 1,
                    startDay: new Date().getDate(),
                  }),
                  p({
                    endYear: new Date().getFullYear(),
                    endMonth: new Date().getMonth() + 2,
                    endDay: new Date().getDate(),
                  }),
                  z(''),
                  I(''));
              },
              [$.reset]
            ),
            (0, r.useEffect)(
              function () {
                if ($.submitStatus) {
                  var mn = v.startYear,
                    sn = v.startMonth,
                    en = v.startDay,
                    rn = l.endYear,
                    U = l.endMonth,
                    pn = l.endDay;
                  $.getChildVal(
                    ''
                      .concat(mn, '-')
                      .concat(sn, '-')
                      .concat(en, ' ')
                      .concat(rn, '-')
                      .concat(U, '-')
                      .concat(pn)
                  );
                }
              },
              [$.submitStatus]
            );
          var un = function (sn) {
              w(!0), (Dn.current.style.left = sn === 'left' ? '0' : '190px');
            },
            bn = function (sn, en) {
              if (en === 'next') {
                if (sn === 'start') {
                  if (v.startYear < l.endYear) {
                    var rn = tn()({}, v);
                    (rn.startYear += 1), y(rn);
                  }
                } else if (sn === 'end') {
                  var U = tn()({}, l);
                  (U.endYear += 1), p(U);
                }
              } else if (en === 'prev') {
                if (sn === 'start') {
                  var pn = tn()({}, v);
                  (pn.startYear -= 1), y(pn);
                } else if (sn === 'end' && l.endYear > v.startYear) {
                  var yn = tn()({}, l);
                  (yn.endYear -= 1), p(yn);
                }
              }
            },
            jn = function (sn) {
              bn(sn, 'prev');
            },
            wn = function (sn) {
              bn(sn, 'next');
            },
            Nn = function (sn, en) {
              if (en === 'next') {
                if (sn === 'start') {
                  if (!(l.endYear === v.startYear && l.endMonth === v.startMonth)) {
                    var rn = tn()({}, v);
                    rn.startMonth === 12
                      ? ((rn.startMonth = 1), (rn.startYear += 1))
                      : (rn.startMonth += 1),
                      y(rn);
                  }
                } else if (sn === 'end') {
                  var U = tn()({}, l);
                  U.endMonth === 12 ? ((U.endMonth = 1), (U.endYear += 1)) : (U.endMonth += 1),
                    p(U);
                }
              } else if (en === 'prev') {
                if (sn === 'start') {
                  var pn = tn()({}, v);
                  pn.startMonth === 1
                    ? ((pn.startMonth = 12), (pn.startYear -= 1))
                    : (pn.startMonth -= 1),
                    y(pn);
                } else if (
                  sn === 'end' &&
                  !(l.endYear === v.startYear && l.endMonth === v.startMonth)
                ) {
                  var yn = tn()({}, l);
                  yn.endMonth === 1 ? ((yn.endMonth = 12), (yn.endYear -= 1)) : (yn.endMonth -= 1),
                    yn.endDay < v.startDay && (yn.endDay = v.startDay),
                    p(yn);
                }
              }
            },
            Fn = function (sn) {
              Nn(sn, 'prev');
            },
            Vn = function (sn) {
              Nn(sn, 'next');
            },
            he = function (sn) {
              sn !== '' &&
                (y(function (en) {
                  return (en.startDay = sn), tn()({}, en);
                }),
                L(function (en) {
                  return (en.start = !0), tn()({}, en);
                }),
                z(''.concat(v.startYear, '-').concat(v.startMonth, '-').concat(sn)),
                v.startYear === l.endYear &&
                  v.startMonth === l.endMonth &&
                  sn > l.endDay &&
                  p(function (en) {
                    return (en.endDay = sn), tn()({}, en);
                  }));
            },
            De = function (sn) {
              (v.startYear === l.endYear && v.startMonth === l.endMonth && sn < v.startDay) ||
                (L(function (en) {
                  return (en.end = !0), tn()({}, en);
                }),
                p(function (en) {
                  return (en.endDay = sn), tn()({}, en);
                }),
                I(''.concat(l.endYear, '-').concat(l.endMonth, '-').concat(sn)));
            },
            or = function (sn) {
              if (sn.keyCode === 13)
                if (ot.test(F)) {
                  var en = F.split('-');
                  Number(en[0]) <= l.endYear &&
                  Number(en[1]) <= l.endMonth &&
                  Number(en[2]) <= l.endDay
                    ? (y(function (rn) {
                        return (
                          (rn.startYear = Number(en[0])),
                          (rn.startMonth = Number(en[1])),
                          (rn.startDay = Number(en[2])),
                          tn()({}, rn)
                        );
                      }),
                      L(function (rn) {
                        return (rn.start = !0), tn()({}, rn);
                      }))
                    : z('');
                } else z('');
            },
            ir = function () {
              ot.test(F) || z('');
            },
            ar = function (sn) {
              if (sn.keyCode === 13)
                if (ot.test(A)) {
                  var en = A.split('-');
                  Number(en[0]) >= v.startYear &&
                  Number(en[1]) >= v.startMonth &&
                  Number(en[2]) >= v.startDay
                    ? (p(function (rn) {
                        return (
                          (rn.endYear = Number(en[0])),
                          (rn.endMonth = Number(en[1])),
                          (rn.endDay = Number(en[2])),
                          tn()({}, rn)
                        );
                      }),
                      L(function (rn) {
                        return (rn.end = !0), tn()({}, rn);
                      }))
                    : I('');
                } else I('');
            },
            cr = function () {
              ot.test(A) || I('');
            },
            lr = function () {
              z(''),
                y(function (sn) {
                  var en = new Date();
                  return (
                    (sn.startDay = en.getDate()),
                    (sn.startMonth = en.getMonth() + 1),
                    (sn.startYear = en.getFullYear()),
                    tn()({}, sn)
                  );
                });
            },
            sr = function () {
              I(''),
                p(function (sn) {
                  var en = new Date();
                  return (
                    (sn.endDay = en.getDate()),
                    (sn.endMonth = en.getMonth() + 1),
                    (sn.endYear = en.getFullYear()),
                    tn()({}, sn)
                  );
                });
            },
            dr = (0, r.useCallback)(
              function (mn) {
                return mn === ''
                  ? 'white'
                  : v.startYear === l.endYear && v.startMonth === l.endMonth && mn < v.startDay
                  ? 'disabled-day'
                  : 'day-box';
              },
              [v, l]
            );
          return (0, e.jsx)(ys, {
            activedColor: Bn(Cn === 'dark' || Cn === 'auto' || dn, on),
            align: f,
            children: (0, e.jsxs)('div', {
              className: vn,
              onClick: function (sn) {
                return sn.stopPropagation();
              },
              style: u,
              ref: function (sn) {
                (Wn.current = sn), Qe(i, sn);
              },
              children: [
                (0, e.jsxs)('div', {
                  className: 'rangePicker',
                  onClick: function (sn) {
                    return sn.stopPropagation();
                  },
                  children: [
                    (0, e.jsx)(Mn, {
                      placeholder: '\u8BF7\u8F93\u5165\u5F00\u59CB\u65E5\u671F',
                      defaultValue:
                        F ||
                        ''.concat(v.startYear, '-').concat(v.startMonth, '-').concat(v.startDay),
                      handleIptChange: function (sn) {
                        return z(sn);
                      },
                      handleIptFocus: function () {
                        return un('left');
                      },
                      handleKeyDown: function (sn) {
                        return or(sn);
                      },
                      handleIptBlur: ir,
                      clearCallback: lr,
                      showClear: d,
                      isFather: !0,
                    }),
                    (0, e.jsx)(ps.Z, { style: { color: '#cccccc', fontSize: '20px' } }),
                    (0, e.jsx)(Mn, {
                      placeholder: '\u8BF7\u8F93\u5165\u7ED3\u675F\u65E5\u671F',
                      defaultValue:
                        A || ''.concat(l.endYear, '-').concat(l.endMonth, '-').concat(l.endDay),
                      handleIptChange: function (sn) {
                        return I(sn);
                      },
                      handleIptFocus: function () {
                        return un('right');
                      },
                      handleKeyDown: function (sn) {
                        return ar(sn);
                      },
                      handleIptBlur: cr,
                      clearCallback: sr,
                      showClear: d,
                      isFather: !0,
                    }),
                    (0, e.jsx)('div', { className: 'activeBorder', ref: Dn }),
                  ],
                }),
                (0, e.jsx)(Tn.Z, {
                  in: D,
                  timeout: 300,
                  appear: !0,
                  classNames: 'fadeIn',
                  mountOnEnter: !0,
                  onEnter: function (sn) {
                    sn.style.display = 'flex';
                  },
                  onExited: function (sn) {
                    sn.style.display = 'none';
                  },
                  children: (0, e.jsxs)('div', {
                    className: 'date-box',
                    onClick: function (sn) {
                      return sn.stopPropagation();
                    },
                    children: [
                      (0, e.jsxs)('div', {
                        className: 'left',
                        children: [
                          (0, e.jsxs)('div', {
                            className: 'top-bar',
                            children: [
                              (0, e.jsxs)('div', {
                                className: 'icon',
                                children: [
                                  (0, e.jsx)(Le.Z, {
                                    style: { cursor: 'pointer' },
                                    onClick: function () {
                                      return jn('start');
                                    },
                                  }),
                                  (0, e.jsx)(ze.Z, {
                                    style: { marginLeft: '10px', cursor: 'pointer' },
                                    onClick: function () {
                                      return Fn('start');
                                    },
                                  }),
                                ],
                              }),
                              (0, e.jsxs)('div', {
                                className: 'info',
                                children: [v.startYear, '\u5E74 ', v.startMonth, '\u6708'],
                              }),
                              (0, e.jsxs)('div', {
                                children: [
                                  (0, e.jsx)(pe.Z, {
                                    style: { cursor: 'pointer' },
                                    onClick: function () {
                                      return Vn('start');
                                    },
                                  }),
                                  (0, e.jsx)(Be.Z, {
                                    style: { marginLeft: '10px', cursor: 'pointer' },
                                    onClick: function () {
                                      return wn('start');
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)('div', {
                            className: 'week',
                            children: [
                              (0, e.jsx)('div', { children: '\u4E00' }),
                              (0, e.jsx)('div', { children: '\u4E8C' }),
                              (0, e.jsx)('div', { children: '\u4E09' }),
                              (0, e.jsx)('div', { children: '\u56DB' }),
                              (0, e.jsx)('div', { children: '\u4E94' }),
                              (0, e.jsx)('div', { children: '\u516D' }),
                              (0, e.jsx)('div', { children: '\u65E5' }),
                            ],
                          }),
                          (0, e.jsx)('div', {
                            className: 'day-list',
                            children: ln.map(function (mn, sn) {
                              return (0, e.jsx)(
                                'div',
                                {
                                  className: hn(
                                    mn === '' ? 'white' : 'box-list',
                                    mn === v.startDay ? 'actived' : ''
                                  ),
                                  onClick: function () {
                                    return he(Number(mn));
                                  },
                                  children: mn,
                                },
                                sn
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsxs)('div', {
                        className: 'right',
                        children: [
                          (0, e.jsxs)('div', {
                            className: 'top-bar',
                            children: [
                              (0, e.jsxs)('div', {
                                children: [
                                  (0, e.jsx)(Le.Z, {
                                    style: { cursor: 'pointer' },
                                    onClick: function () {
                                      return jn('end');
                                    },
                                  }),
                                  (0, e.jsx)(ze.Z, {
                                    style: { marginLeft: '10px', cursor: 'pointer' },
                                    onClick: function () {
                                      return Fn('end');
                                    },
                                  }),
                                ],
                              }),
                              (0, e.jsxs)('div', {
                                className: 'info',
                                children: [l.endYear, '\u5E74 ', l.endMonth, '\u6708'],
                              }),
                              (0, e.jsxs)('div', {
                                className: 'icon',
                                children: [
                                  (0, e.jsx)(pe.Z, {
                                    style: { cursor: 'pointer' },
                                    onClick: function () {
                                      return Vn('end');
                                    },
                                  }),
                                  (0, e.jsx)(Be.Z, {
                                    style: { marginLeft: '10px', cursor: 'pointer' },
                                    onClick: function () {
                                      return wn('end');
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsxs)('div', {
                            className: 'week',
                            children: [
                              (0, e.jsx)('div', { children: '\u4E00' }),
                              (0, e.jsx)('div', { children: '\u4E8C' }),
                              (0, e.jsx)('div', { children: '\u4E09' }),
                              (0, e.jsx)('div', { children: '\u56DB' }),
                              (0, e.jsx)('div', { children: '\u4E94' }),
                              (0, e.jsx)('div', { children: '\u516D' }),
                              (0, e.jsx)('div', { children: '\u65E5' }),
                            ],
                          }),
                          (0, e.jsx)('div', {
                            className: 'day-list',
                            children: m.map(function (mn, sn) {
                              return (0, e.jsx)(
                                'div',
                                {
                                  className: hn(dr(mn), mn === l.endDay ? 'actived' : ''),
                                  onClick: function () {
                                    return De(Number(mn));
                                  },
                                  children: mn,
                                },
                                sn
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Cs = (0, r.forwardRef)(ks),
        ws = os,
        So,
        jo,
        Dt = S.concisRadiusXs,
        Ss = S.concisDarkFontColor,
        js = (0, cn.iv)(
          So ||
            (So = an()([
              `
  .concis-dark-time-picker {
    .time-panel div span:hover:not(.disable) {
      color: `,
              `;
      background-image: red;
    }

    .disable {
      background-image: linear-gradient(var(--checked-color), var(--checked-color));
    }
  }
`,
            ])),
          Ss
        ),
        Ns = cn.ZP.div(
          jo ||
            (jo = an()([
              `
  .concis-time-picker,
  .concis-dark-time-picker {
    width: 150px;
    height: 220px;
    overflow: hidden;

    .time-panel {
      display: flex;
      height: 180px;

      div {
        display: flex;
        flex: 1;
        flex-direction: column;
        max-height: 200px;
        padding: 5px 0;
        overflow: auto;
        scrollbar-width: none;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;

          &:hover:not(.disable) {
            color: #fff;
            background-image: linear-gradient(var(--checked-color), var(--checked-color));
            background-position: center;
            border-radius: `,
              `;
            cursor: pointer;
          }
        }

        .active {
          color: #fff;
          background-image: linear-gradient(var(--checked-color), var(--checked-color));
          background-position: center;
          border-radius: `,
              `;
          cursor: pointer;
        }

        .disable {
          color: #a8abb2;
          background-color: #f5f7fa;
          border-radius: `,
              `;
          cursor: not-allowed;
          opacity: 1;
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    .time-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      padding: 0 5px;
      border-top: 1px solid #ccc;
    }
  }

  `,
              `
`,
            ])),
          Dt,
          Dt,
          Dt,
          js
        ),
        No = function (n) {
          var i = new Array(n).fill('');
          return i.map(function (a, d) {
            return d < 10 ? '0'.concat(d) : String(d);
          });
        },
        _s = function (n, i) {
          var a = n.align,
            d = n.className,
            h = n.style,
            f = n.placeholder,
            o = f === void 0 ? '\u8BF7\u9009\u62E9\u65F6\u95F4' : f,
            u = n.defaultTime,
            c = n.disableHour,
            j = n.disableMin,
            v = n.handleConfirm,
            y = n.disableSecond,
            _ = n.showClear,
            x = n.clearCallback,
            l = n.changeCallback,
            p = No(24),
            P = No(60),
            E = new Date(),
            F = (0, r.useState)(0),
            z = H()(F, 2),
            O = z[0],
            W = z[1],
            A = (0, r.useState)(0),
            I = H()(A, 2),
            X = I[0],
            M = I[1],
            Y = (0, r.useState)(0),
            Q = H()(Y, 2),
            Z = Q[0],
            J = Q[1],
            R = (0, r.useState)(u),
            q = H()(R, 2),
            V = q[0],
            nn = q[1],
            ln = (0, r.useContext)(On),
            G = (0, r.useRef)(null),
            B = (0, r.useRef)(null),
            T = (0, r.useContext)(xn),
            m = T.globalColor,
            s = T.prefixCls,
            N = T.darkTheme,
            C = hn(s, d, 'concis-'.concat(N ? 'dark-' : '', 'time-picker'));
          (0, r.useEffect)(function () {
            W(E.getHours()), M(E.getMinutes()), J(E.getSeconds());
          }, []),
            (0, r.useEffect)(
              function () {
                ln.reset && (W(0), M(0), J(0), nn(''));
              },
              [ln.reset]
            ),
            (0, r.useEffect)(
              function () {
                ln.submitStatus && ln.getChildVal(''.concat(O, ':').concat(X, ':').concat(Z));
              },
              [ln.submitStatus]
            ),
            (0, r.useEffect)(
              function () {
                k(0);
              },
              [O]
            ),
            (0, r.useEffect)(
              function () {
                k(1);
              },
              [X]
            ),
            (0, r.useEffect)(
              function () {
                k(2);
              },
              [Z]
            );
          var D = function () {
              var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O,
                L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : X,
                $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Z,
                K = ''
                  .concat(g < 10 ? '0'.concat(g) : String(g), ':')
                  .concat(L < 10 ? '0'.concat(L) : String(L), ':')
                  .concat($ < 10 ? '0'.concat($) : String($));
              l && l(K), v && v(K), nn(K), B.current.setShowDialog(!1);
            },
            w = function () {
              nn(''), x && x();
            },
            k = function (g) {
              var L,
                $ =
                  (L = G.current) === null || L === void 0
                    ? void 0
                    : L.querySelectorAll('.time-panel div')[g];
              return !$ || !$.scrollTo
                ? !1
                : ($.scrollTo(0, $.querySelector('.active').offsetTop - 7), !0);
            };
          return (0, e.jsx)(Ns, {
            children: (0, e.jsx)(ce, {
              type: 'click',
              align: a,
              dialogWidth: 'auto',
              closeDeps: [V],
              ref: B,
              content: (0, e.jsxs)('div', {
                className: C,
                style: h,
                ref: i,
                children: [
                  (0, e.jsxs)('div', {
                    ref: G,
                    className: 'time-panel',
                    style: { '--checked-color': Bn(zn() === 'dark' || N, m) },
                    children: [
                      (0, e.jsx)('div', {
                        children: p.map(function (b) {
                          return (0, e.jsx)(
                            'span',
                            {
                              className: ''
                                .concat(Number(b) === O ? 'active' : '', ' ')
                                .concat(c !== void 0 && c(b) ? 'disable' : ''),
                              onClick: function (L) {
                                (c === void 0 || !c(b)) && W(Number(b));
                              },
                              children: b,
                            },
                            b
                          );
                        }),
                      }),
                      (0, e.jsx)('div', {
                        children: P.map(function (b) {
                          return (0, e.jsx)(
                            'span',
                            {
                              className: ''
                                .concat(Number(b) === X ? 'active' : '', ' ')
                                .concat(j !== void 0 && j(b) ? 'disable' : ''),
                              onClick: function (L) {
                                (j === void 0 || !j(b)) && M(Number(b));
                              },
                              children: b,
                            },
                            b
                          );
                        }),
                      }),
                      (0, e.jsx)('div', {
                        children: P.map(function (b) {
                          return (0, e.jsx)(
                            'span',
                            {
                              className: ''
                                .concat(Number(b) === Z ? 'active' : '', ' ')
                                .concat(y !== void 0 && y(b) ? 'disable' : ''),
                              onClick: function (L) {
                                (y === void 0 || !y(b)) && J(Number(b));
                              },
                              children: b,
                            },
                            b
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)('div', {
                    className: 'time-footer',
                    children: [
                      (0, e.jsx)(Rn, {
                        type: 'text',
                        height: 25,
                        children: (0, e.jsx)('span', {
                          onClick: function () {
                            var g = new Date().getHours(),
                              L = new Date().getMinutes(),
                              $ = new Date().getSeconds();
                            W(g), M(L), J($), D(g, L, $);
                          },
                          children: '\u6B64\u523B',
                        }),
                      }),
                      (0, e.jsx)(Rn, {
                        type: 'primary',
                        height: 25,
                        children: (0, e.jsx)('span', {
                          onClick: function () {
                            return D();
                          },
                          children: '\u786E\u5B9A',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              children: (0, e.jsx)(Mn, {
                placeholder: o,
                defaultValue: V,
                type: 'primary',
                showClear: _,
                clearCallback: w,
              }),
            }),
          });
        },
        Ts = (0, r.forwardRef)(_s),
        Ds = function (n) {
          var i = n.children,
            a = n.style,
            d = n.className,
            h = n.delay,
            f = (0, r.useState)(!1),
            o = H()(f, 2),
            u = o[0],
            c = o[1],
            j = (0, r.useRef)(null),
            v = (0, r.useContext)(xn),
            y = v.prefixCls,
            _ = hn(y, d, 'concis-lazyLoad'),
            x;
          (0, r.useEffect)(function () {
            (x = new IntersectionObserver(function (p) {
              return l(p);
            })),
              x.observe(j.current);
          }, []);
          var l = function (P) {
            P.forEach(function (E) {
              E.isIntersecting &&
                (h
                  ? setTimeout(function () {
                      c(!0);
                    }, h)
                  : c(!0));
            });
          };
          return (0, e.jsx)('div', { className: _, style: a, ref: j, children: u && i });
        },
        Ps = (0, r.memo)(Ds),
        it = fn(23614),
        _o,
        Pt = '32px',
        Ft = '24px',
        zt = '#999999',
        To = S.concisTransformXs,
        Et = S.concisTransformSm,
        Fs = S.concisDarkFontColor,
        zs = S.concisRadiusLg,
        Es = S.concisFontSm,
        Do = S.concisFontMd,
        Os = S.concisFontLg,
        Po = S.concisTransformMd,
        Ms = cn.ZP.div(
          _o ||
            (_o = an()([
              `
  .concis-steps,
  .concis-dark-steps {
    .step-content {
      position: relative;

      .line {
        position: relative;
        top: 27px;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 2px;
        background: `,
              `;
      }

      .step-line {
        display: flex;

        .step-box {
          position: relative;
          z-index: 999;
          display: flex;
          align-items: center;
          height: 54px;
          padding: 0 `,
              `;
          background-color: #fff;
          cursor: pointer;

          &:last-of-type {
            margin-right: 0;

            &::after {
              width: 0;
              height: 0;
            }
          }
          @media screen and (min-width: 1068px) {
            &::after {
              width: 100px;
              height: 2px;
              background-color: `,
              `;
              content: '';
            }
          }

          .before-index,
          .after-index,
          .active-index {
            width: `,
              `;
            height: `,
              `;
            line-height: `,
              `;
            text-align: center;
            border-radius: `,
              `;
          }

          .before-index {
            color: `,
              `;
            border: 1px solid `,
              `;
          }

          .after-index {
            color: `,
              `;
            border: 1px solid `,
              `;
          }

          .active-index {
            color: #fff;
            background: `,
              `;
            border: 1px solid `,
              `;
          }

          .sub-content {
            position: relative;
            top: `,
              `;
            display: flex;
            flex-direction: column;
            margin-left: `,
              `;
            font-size: `,
              `;

            .top {
              .hover-title {
                cursor: pointer;
              }

              .hover-title:hover,
              .light-title:hover {
                color: `,
              `;
                transition: color 0.3s;
              }

              .grey-title {
                color: #999;
              }

              .light-title {
                color: #000;
              }

              .sub-title {
                margin-left: `,
              `;
                color: `,
              `;
                font-size: `,
              `;
              }
            }

            .bottom {
              margin-top: `,
              `;
              font-size: `,
              `;
            }
          }
        }
      }
    }
  }

  .concis-dark-steps .step-content .step-line .step-box {
    background-color: transparent;

    .sub-content .top .light-title {
      color: `,
              `;
    }
  }
  @media screen and (max-width: 1068px) {
    .concis-steps,
    .concis-dark-steps {
      .step-content {
        .step-line {
          .step-box {
            margin-right: 100px;
            font-size: `,
              `;

            &:last-of-type {
              margin-right: 0;
            }

            .before-index,
            .after-index,
            .active-index {
              width: `,
              `;
              height: `,
              `;
            }

            .after-index,
            .active-index {
              line-height: `,
              `;
            }

            .active-index {
              text-align: center;
            }

            .sub-content {
              top: `,
              `;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .concis-steps,
    .concis-dark-steps {
      .step-content {
        height: 100%;

        .line {
          height: 100%;
        }

        .step-line {
          flex-direction: column;

          .step-box {
            height: 94px;
            margin-right: 100px;

            .sub-content {
              top: `,
              `;
            }
          }
        }
      }
    }
  }
`,
            ])),
          function (t) {
            var n = t.globalColor;
            return n;
          },
          To,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Pt,
          Pt,
          Pt,
          zs,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          zt,
          zt,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          function (t) {
            var n = t.globalColor;
            return n;
          },
          To,
          Et,
          Os,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Et,
          zt,
          Do,
          Et,
          Do,
          Fs,
          Es,
          Ft,
          Ft,
          Ft,
          Po,
          Po
        ),
        Rs = function (n, i) {
          var a = n.current,
            d = n.className,
            h = n.style,
            f = n.onChange,
            o = n.children,
            u = (0, r.useContext)(xn),
            c = u.globalColor,
            j = u.prefixCls,
            v = u.darkTheme,
            y = hn(j, d, 'concis-'.concat(v ? 'dark-' : '', 'steps')),
            _ = (0, r.useCallback)(
              function (l) {
                return l === a ? 'active-index' : l > a ? 'after-index' : (l < a, 'before-index');
              },
              [a]
            ),
            x = (0, r.useCallback)(
              function (l) {
                return f ? 'hover-title '.concat(l) : l;
              },
              [a]
            );
          return (0, e.jsx)(Ms, {
            globalColor: Bn(zn() === 'dark' || v, c),
            children: (0, e.jsx)('div', {
              className: y,
              style: h,
              ref: i,
              children: (0, e.jsx)('div', {
                className: 'step-content',
                children: (0, e.jsx)('div', {
                  className: 'step-line',
                  children: o
                    ? o.map(function (l, p) {
                        return (0, e.jsxs)(
                          'div',
                          {
                            className: 'step-box',
                            onClick: function () {
                              f && f(p + 1);
                            },
                            children: [
                              p + 1 < a
                                ? (0, e.jsx)('div', {
                                    className: _(p + 1),
                                    children: (0, e.jsx)(it.Z, {}),
                                  })
                                : (0, e.jsx)('span', { className: _(p + 1), children: p + 1 }),
                              (0, e.jsxs)('div', {
                                className: 'sub-content',
                                children: [
                                  (0, e.jsxs)('div', {
                                    className: 'top',
                                    children: [
                                      (0, e.jsx)('span', {
                                        className: p + 1 > a ? x('grey-title') : x('light-title'),
                                        children: l.props.title,
                                      }),
                                      (0, e.jsx)('span', {
                                        className: 'sub-title',
                                        children: l.props.subTitle,
                                      }),
                                    ],
                                  }),
                                  (0, e.jsx)('div', {
                                    className:
                                      p + 1 !== a
                                        ? x('bottom grey-title')
                                        : x('bottom light-title'),
                                    children: l.props.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          p
                        );
                      })
                    : null,
                }),
              }),
            }),
          });
        },
        Is = (0, r.forwardRef)(Rs),
        Ls = function (n) {
          var i = n.title,
            a = n.className,
            d = (0, r.useContext)(xn),
            h = d.prefixCls,
            f = hn(h, a, 'concis-steps-content');
          return (0, e.jsx)('div', { className: f, children: i });
        },
        Bs = (0, r.memo)(Ls),
        Fo,
        zo = '30px',
        As = S.concisTransformSm,
        Zs = `
  .rate-option-enter {
    transform: scale(1);
  }

  .rate-option-enter-active {
    transform: scale(1.2);
    transition: transform 300ms;
  }

  .rate-option-exit {
    transform: scale(1.2);
  }

  .rate-option-exit-active {
    transform: scale(1.2);
    transition: transform 300ms;
  }
`,
        Hs = cn.ZP.div(
          Fo ||
            (Fo = an()([
              `
  .concis-rate {
    .rate-container {
      display: flex;
      width: 100%;

      .rate-box {
        position: relative;
        width: `,
              `;
        height: `,
              `;
        margin-right: 8px;

        .rate-row {
          color: #f6dd06;
          transition: 0.2s linear;

          &:hover:not(.readonly-rate-row) {
            transform: scale(1.2);
            cursor: pointer;
          }
        }

        &:last-of-type {
          position: relative;
          padding-right: `,
              `;
        }
      }
    }
  }

  `,
              `
`,
            ])),
          zo,
          zo,
          As,
          Zs
        ),
        Ws = function (n, i) {
          var a = n.num,
            d = a === void 0 ? 5 : a,
            h = n.className,
            f = n.style,
            o = n.starColor,
            u = n.defaultShow,
            c = u === void 0 ? d || 0 : u,
            j = n.avaClear,
            v = n.readonly,
            y = n.chooseCallback,
            _ = (0, r.useState)([]),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)([]),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)(!1),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useState)(!1),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1],
            Z = (0, r.useContext)(xn),
            J = Z.prefixCls,
            R = hn(J, h, 'concis-rate'),
            q = (0, r.useContext)(On);
          (0, r.useEffect)(function () {
            for (var T = [], m = 0; m < c; m++) T[m] = !0;
            d > c &&
              T.length < d &&
              T.splice.apply(T, [T.length, 0].concat(kn()(new Array(d - c).fill(!1)))),
              p(T),
              z(T);
          }, []),
            (0, r.useEffect)(
              function () {
                q.reset &&
                  (z([]),
                  p(function () {
                    for (var T = [], m = 0; m < c; m++) T[m] = !0;
                    return (
                      d > c &&
                        T.length < d &&
                        T.splice.apply(T, [T.length, 0].concat(kn()(new Array(d - c).fill(!1)))),
                      JSON.parse(JSON.stringify(T))
                    );
                  }));
              },
              [q.reset]
            ),
            (0, r.useEffect)(
              function () {
                q.submitStatus &&
                  q.getChildVal(
                    l.filter(function (T) {
                      return T;
                    }).length
                  );
              },
              [q.submitStatus]
            );
          var V = function (m, s) {
              if (!v) {
                var N = m,
                  C = N.offsetX;
                p(function (D) {
                  C >= 8 && (D[s] = !0);
                  for (var w = 0; w < s; w++) D[w] = !0;
                  for (var k = s + 1; k < D.length; k++) D[k] = !1;
                  return JSON.parse(JSON.stringify(D));
                });
              }
            },
            nn = function () {
              v ||
                (Q(!Y),
                j && A && l.toString() === F.toString()
                  ? (I(!1),
                    p(function (m) {
                      return (
                        (m = m.map(function (s) {
                          return (s = !1);
                        })),
                        y &&
                          y(
                            m.reduce(function (s, N) {
                              return (
                                s === !0 ? (s = 1) : s === !1 && (s = 0),
                                N === !0 ? (N = 1) : N === !1 && (N = 0),
                                s + N
                              );
                            })
                          ),
                        z(function (s) {
                          return (
                            (s = s.map(function (N) {
                              return (N = !1);
                            })),
                            JSON.parse(JSON.stringify(s))
                          );
                        }),
                        JSON.parse(JSON.stringify(m))
                      );
                    }))
                  : (z(function (m) {
                      return (m = l), JSON.parse(JSON.stringify(m));
                    }),
                    I(!0),
                    y &&
                      y(
                        l.reduce(function (m, s) {
                          return (
                            m === 'half' ? (m = 0.5) : m === !0 ? (m = 1) : m === !1 && (m = 0),
                            s === 'half' ? (s = 0.5) : s === !0 ? (s = 1) : s === !1 && (s = 0),
                            m + s
                          );
                        })
                      )));
            },
            ln = function () {
              v ||
                z(function (m) {
                  return (m = l), JSON.parse(JSON.stringify(m));
                });
            },
            G = function () {
              v ||
                (p(function (m) {
                  return (m = F), JSON.parse(JSON.stringify(m));
                }),
                I(!1));
            },
            B = (0, r.useCallback)(
              function (T) {
                return { color: l[T] ? o : '#ccc' };
              },
              [l]
            );
          return (0, e.jsx)(Hs, {
            children: (0, e.jsx)('div', {
              className: R,
              style: f,
              ref: i,
              children: (0, e.jsx)('div', {
                className: 'rate-container',
                onMouseLeave: G,
                onMouseEnter: ln,
                children: new Array(d).fill('').map(function (T, m) {
                  return (0, e.jsx)(
                    'div',
                    {
                      className: 'rate-box',
                      onMouseMove: function (N) {
                        return V(N.nativeEvent, m);
                      },
                      onClick: nn,
                      children: (0, e.jsx)(Tn.Z, {
                        in: Y,
                        timeout: 100 + m * 80,
                        classNames: ''.concat(l[m] ? 'rate-option' : ''),
                        appear: !0,
                        children: (0, e.jsx)('svg', {
                          style: B(m),
                          className: 'rate-row '.concat(v ? 'readonly-rate-row' : ''),
                          viewBox: '80 80 896 896',
                          focusable: 'false',
                          'data-icon': 'star',
                          width: '30px',
                          height: '30px',
                          fill: 'currentColor',
                          'aria-hidden': 'true',
                          children: (0, e.jsx)('path', {
                            d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
                          }),
                        }),
                      }),
                    },
                    m
                  );
                }),
              }),
            }),
          });
        },
        Ys = (0, r.forwardRef)(Ws),
        Ot = fn(60685),
        Vp = {
          'cocnis-tree-container': 'rDgIwbPrx9IargSOtZns',
          'cocnis-dark-tree-container': 'SPRYXw4h6U84ZeGxBB6O',
          'tree-select-dialog': 'LfhowCNv__oo3PlbDmOH',
          treeNode: 'ZDxR4__k9A7FZ0cvbKvD',
          text: 'TR4b3f_TKukcwe89Sv6i',
          'treeDialog-enter': 'QKJQDlCwQywh7CNh8e0t',
          'treeDialog-appear': 'kGaRZKIvGt4xbLC3ELBE',
          'treeDialog-enter-active': 'wsbrAwEkKG87d7kq9Q5Y',
          'treeDialog-appear-active': 'eJxflCrMQuQSEzEkEZ2U',
          'treeDialog-exit': 'WlfcObwSmKwEq_5Cydu2',
          'treeDialog-exit-active': 'c5lWbgouCkYgcJpOJOfy',
        },
        $s = function (n) {
          var i = n.width,
            a = i === void 0 ? '200' : i,
            d = n.className,
            h = n.treeData,
            f = n.avaSearch,
            o = n.avaChooseMore,
            u = n.defaultOpen,
            c = n.chooseCallback,
            j = (0, r.useState)(h),
            v = H()(j, 2),
            y = v[0],
            _ = v[1],
            x = (0, r.useState)(''),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useState)(!1),
            F = H()(E, 2),
            z = F[0],
            O = F[1],
            W = (0, r.useState)(!1),
            A = H()(W, 2),
            I = A[0],
            X = A[1],
            M = (0, r.useContext)(On),
            Y = zn(),
            Q = (0, r.useContext)(xn),
            Z = Q.globalColor,
            J = Q.prefixCls,
            R = Q.darkTheme,
            q = hn(J, d, 'cocnis-'.concat(R ? 'dark-' : '', 'tree-container'));
          (0, r.useEffect)(function () {
            V(h, 1),
              window.addEventListener('click', function () {
                return O(!1);
              });
          }, []),
            (0, r.useEffect)(
              function () {
                M.reset && (V(h, 1), P(''));
              },
              [M.reset]
            ),
            (0, r.useEffect)(
              function () {
                M.submitStatus && M.getChildVal(p);
              },
              [M.submitStatus]
            );
          var V = function C(D, w) {
              (D || []).forEach(function (k) {
                var b;
                (k.level = w),
                  u ? (k.height = '30px') : (k.height = k.level === 1 ? '30px' : '0'),
                  k != null && (b = k.children) !== null && b !== void 0 && b.length
                    ? C(k.children, w + 1)
                    : (w = k.level);
              }),
                _(D);
            },
            nn = function (D) {
              var w;
              if (D != null && (w = D.children) !== null && w !== void 0 && w.length) {
                var k = kn()(y),
                  b = function $(K) {
                    K.forEach(function (on) {
                      var gn;
                      on != null && (gn = on.children) !== null && gn !== void 0 && gn.length
                        ? ((on.height = '0'), $(on.children))
                        : (on.height = '0');
                    });
                  },
                  g = function $(K) {
                    K.forEach(function (on, gn) {
                      var dn;
                      if (on.title === D.title) {
                        var vn;
                        on != null &&
                          (vn = on.children) !== null &&
                          vn !== void 0 &&
                          vn.length &&
                          (on.children[0].height === '0'
                            ? (on.children = on.children.map(function (Dn) {
                                return tn()(
                                  tn()({}, Dn),
                                  {},
                                  { height: Dn.height === '0' ? '30px' : '0' }
                                );
                              }))
                            : b(on.children));
                      } else on != null && (dn = on.children) !== null && dn !== void 0 && dn.length && $(on.children);
                    });
                  };
                g(k), _(k);
              } else if (o)
                if (p.split(',').includes(D.title)) {
                  var L = p;
                  (L = L.split(',')),
                    L.splice(
                      p.split(',').findIndex(function ($) {
                        return $ === D.title;
                      }),
                      1
                    ),
                    (L = L.join(',')),
                    P(L),
                    c && c(L);
                } else
                  P(p === '' ? D.title : ''.concat(p, ',').concat(D.title)),
                    c && c(p === '' ? D.title : ''.concat(p, ',').concat(D.title));
              else P(D.title), O(!1), c && c(D.title);
            },
            ln = function (D) {
              P(f ? D : '');
            },
            G = function () {
              O(!z);
            },
            B = function () {
              setTimeout(function () {
                I || X(!0);
              }, 150);
            },
            T = function () {
              X(!1);
            },
            m = (0, r.useCallback)(
              function (C) {
                return o
                  ? p.split(',').includes(C.title)
                    ? Z || (R ? '#3C7EFF' : '#325DFF')
                    : Y === 'light'
                    ? '#000000'
                    : '#ffffffe6'
                  : C.title.includes(p) && p !== ''
                  ? Z || (R ? '#3C7EFF' : '#325DFF')
                  : Y === 'light'
                  ? '#000000'
                  : '#ffffffe6';
              },
              [p]
            ),
            s = function () {
              P('');
            },
            N = function C() {
              var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : y;
              return (D || []).map(function (w, k) {
                var b, g;
                return (0, e.jsxs)(
                  r.Fragment,
                  {
                    children: [
                      (0, e.jsxs)('div', {
                        className: 'treeNode',
                        style: {
                          marginLeft: ''.concat(w.level * 10, 'px'),
                          height: ''.concat(w.height),
                          '--tree-node-color': m(w),
                        },
                        onClick: function () {
                          return nn(w);
                        },
                        children: [
                          w != null && (b = w.children) !== null && b !== void 0 && b.length
                            ? w.children[0].height === '0'
                              ? (0, e.jsx)(Ot.Z, {})
                              : (0, e.jsx)(Gn.Z, {})
                            : (0, e.jsx)('div', { style: { width: '12px', height: '12px' } }),
                          (0, e.jsx)('span', { className: 'text', children: w.title }),
                        ],
                      }),
                      (w == null || (g = w.children) === null || g === void 0
                        ? void 0
                        : g.length) && C(w.children),
                    ],
                  },
                  k
                );
              });
            };
          return (0, e.jsx)(r.Fragment, {
            children: (0, e.jsxs)('div', {
              className: q,
              onClick: function (D) {
                return D.stopPropagation();
              },
              children: [
                (0, e.jsx)(Mn, {
                  style: f ? {} : { caretColor: 'transparent' },
                  placeholder: f ? '\u8BF7\u8F93\u5165' : '',
                  width: a,
                  defaultValue: p,
                  handleClick: G,
                  handleIptChange: ln,
                  handleIptFocus: B,
                  handleIptBlur: T,
                  clearCallback: s,
                  showClear: !0,
                  isFather: !0,
                }),
                (0, e.jsx)(Tn.Z, {
                  in: z,
                  timeout: 200,
                  appear: !0,
                  mountOnEnter: !0,
                  classNames: 'treeDialog',
                  unmountOnExit: !0,
                  onEnter: function (D) {
                    D.style.display = 'block';
                  },
                  onExited: function (D) {
                    D.style.display = 'none';
                  },
                  children: (0, e.jsx)('div', {
                    className: 'tree-select-dialog',
                    style: { width: ''.concat(a, 'px') },
                    children: N(),
                  }),
                }),
              ],
            }),
          });
        },
        Xs = (0, r.memo)($s),
        Eo,
        Oo,
        Mt = '#d9d9d9',
        Rt = S.concisTransformSm,
        Vs = S.concisFontMd,
        Js = S.concisTransformXs,
        Gs = S.concisDarkFontColor,
        It = S.concisPrimaryColor,
        Us = (0, cn.iv)(
          Eo ||
            (Eo = an()([
              `
  .concis-dark-tree-select .treeNode span {
    color: `,
              ` !important;
  }
`,
            ])),
          Gs
        ),
        Ks = cn.ZP.div(
          Oo ||
            (Oo = an()([
              `
  .concis-tree-select,
  .concis-dark-tree-select {
    display: inline-block;
    box-sizing: border-box;
    padding: 0 `,
              ' 0 ',
              `;
    overflow: hidden;
    border-radius: 0 2px 2px 0;
    transition: 0.2s linear;

    .treeNode {
      display: flex;
      align-items: center;
      overflow: hidden;
      font-size: `,
              `;
      cursor: pointer;
      transition: 0.2s linear;

      .disblaed-checkBox,
      .checkBox-actived,
      .checkBox-noActived,
      .checkBox-activedLess {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        margin-left: `,
              `;
        color: #fff;
      }

      .disblaed-checkBox {
        border: 1px solid `,
              `;
        cursor: not-allowed;
      }

      .checkBox-actived {
        background: `,
              `;
      }

      .checkBox-noActived {
        border: 1px solid `,
              `;
        transition: 0.3s linear;

        &:hover {
          border: 1px solid `,
              `;
        }
      }

      .checkBox-activedLess {
        border: 1px solid `,
              `;

        .less-box {
          width: 8px;
          height: 8px;
          background-color: `,
              `;
          position: relative;
          right: 0.5px;
          bottom: 0.5px;
        }
      }

      .text {
        margin-left: `,
              `;
        user-select: none;
      }
    }
  }

  `,
              `
`,
            ])),
          Rt,
          Rt,
          Vs,
          Js,
          Mt,
          function (t) {
            var n = t.globalColor;
            return n || It;
          },
          Mt,
          function (t) {
            var n = t.globalColor;
            return n || It;
          },
          Mt,
          function (t) {
            var n = t.globalColor;
            return n || It;
          },
          Rt,
          Us
        ),
        Qs = function (n, i) {
          var a = n.treeData,
            d = n.className,
            h = n.defaultOpen,
            f = n.avaDrop,
            o = n.checkCallback,
            u = n.dropCallback,
            c = n.style,
            j = n.lazyLoad,
            v = n.lazyLoadWaitSecond,
            y = v === void 0 ? 1e3 : v,
            _ = (0, r.useState)(a),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)(''),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)({ group: -1, value: '', title: '' }),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useContext)(xn),
            M = X.globalColor,
            Y = X.prefixCls,
            Q = X.darkTheme,
            Z = hn(Y, d, 'concis-'.concat(Q ? 'dark-' : '', 'tree-select'));
          (0, r.useEffect)(function () {
            J(l, 1, null);
          }, []);
          var J = function m(s, N, C) {
              var D = kn()(s);
              D.forEach(function (w, k) {
                var b;
                (w.level = N),
                  h ? (w.height = '30px') : (w.height = w.level === 1 ? '30px' : '0'),
                  (w.checked = !1),
                  (w.prev = C),
                  w != null && (b = w.children) !== null && b !== void 0 && b.length
                    ? m(w.children, N + 1, w)
                    : (N = w.level);
              }),
                p(D);
            },
            R = function (s) {
              var N;
              if (s != null && (N = s.children) !== null && N !== void 0 && N.length) {
                var C = function L($) {
                    $.forEach(function (K) {
                      var on;
                      K != null && (on = K.children) !== null && on !== void 0 && on.length
                        ? ((K.height = '0'), L(K.children))
                        : (K.height = '0');
                    });
                  },
                  D = function L($) {
                    $.forEach(function (K, on) {
                      var gn;
                      if (K.title === s.title && K.value === s.value) {
                        var dn;
                        K != null &&
                          (dn = K.children) !== null &&
                          dn !== void 0 &&
                          dn.length &&
                          (j && !K.hasOpen && (K.hasOpen = !0),
                          K.children[0].height === '0'
                            ? (K.children = K.children.map(function (vn) {
                                return tn()(
                                  tn()({}, vn),
                                  {},
                                  { height: vn.height === '0' ? '30px' : '0' }
                                );
                              }))
                            : C(K.children));
                      } else K != null && (gn = K.children) !== null && gn !== void 0 && gn.length && L(K.children);
                    });
                  },
                  w = kn()(l);
                if (j && !s.hasOpen) {
                  var k = s.group,
                    b = s.value,
                    g = s.title;
                  I({ group: k, value: b, title: g }),
                    setTimeout(function () {
                      D(w), p(w), I({ group: -1, value: '', title: '' });
                    }, y);
                } else D(w), p(w);
              }
            },
            q = function (s) {
              if (s.disabled) return;
              var N = kn()(l);
              D(N, null), p(N), o && o(N);
              function C(w, k) {
                w.forEach(function (b) {
                  var g;
                  b != null && (g = b.children) !== null && g !== void 0 && g.length
                    ? ((b.checked = k), C(b.children, k))
                    : (b.checked = k);
                });
              }
              function D(w, k) {
                w.forEach(function (b, g) {
                  var L;
                  if (b.title === s.title && b.value === s.value) {
                    var $;
                    if (((b.checked = !b.checked), k))
                      for (
                        var K = w;
                        k !== null &&
                        K.every(function (on) {
                          return on.checked;
                        });

                      )
                        (k.checked = !0),
                          K.map(function (on) {
                            return (on.prev = k);
                          }),
                          (K = k.children),
                          (k = k.prev);
                    b != null &&
                      ($ = b.children) !== null &&
                      $ !== void 0 &&
                      $.length &&
                      C(b.children, b.checked);
                  } else b != null && (L = b.children) !== null && L !== void 0 && L.length && D(b.children, b);
                });
              }
            },
            V = (0, r.useCallback)(
              function (m) {
                var s;
                if (m.disabled) return (0, e.jsx)('div', { className: 'disblaed-checkBox' });
                if (!(m != null && (s = m.children) !== null && s !== void 0 && s.length))
                  return m.checked
                    ? (0, e.jsx)('div', {
                        className: 'checkBox-actived',
                        onClick: function () {
                          return q(m);
                        },
                        children: (0, e.jsx)(it.Z, {}),
                      })
                    : (0, e.jsx)('div', {
                        className: 'checkBox-noActived',
                        onClick: function () {
                          return q(m);
                        },
                      });
                if (m.children && m.children.length) {
                  var N = [],
                    C = function D(w) {
                      for (var k = 0; k < w.children.length; k++) {
                        var b = w.children[k];
                        if (
                          (!b.disabled && N.push(b.checked ? 1 : 0),
                          b.children && b.children.length)
                        )
                          return D(b);
                        if (k === w.children.length - 1)
                          return N.every(function (g) {
                            return g === 0;
                          })
                            ? (0, e.jsx)('div', {
                                className: 'checkBox-noActived',
                                onClick: function () {
                                  return q(m);
                                },
                              })
                            : N.every(function (g) {
                                return g === 1;
                              })
                            ? (0, e.jsx)('div', {
                                className: 'checkBox-actived',
                                onClick: function () {
                                  return q(m);
                                },
                                children: (0, e.jsx)(it.Z, {}),
                              })
                            : (0, e.jsx)('div', {
                                className: 'checkBox-activedLess',
                                onClick: function () {
                                  return q(m);
                                },
                                children: (0, e.jsx)('div', { className: 'less-box' }),
                              });
                      }
                    };
                  return C(m);
                }
              },
              [l]
            ),
            nn = function (s, N) {
              if (f)
                if (l.length === 1 && N.level === 1) {
                  var C = kn()(l),
                    D = function w(k) {
                      var b;
                      k.level !== 1 && (k.height = '0'),
                        k != null &&
                          (b = k.children) !== null &&
                          b !== void 0 &&
                          b.length &&
                          k.children.forEach(function (g) {
                            var L;
                            (g.height = '0'),
                              g != null &&
                                (L = g.children) !== null &&
                                L !== void 0 &&
                                L.length &&
                                g.children.forEach(function ($) {
                                  w($);
                                });
                          });
                    };
                  D(C[0]), p(C);
                } else s.nativeEvent.dataTransfer.setData('dargTree', N.title);
            },
            ln = function (s, N) {
              if (f && (s.nativeEvent.preventDefault(), N.title && N.title !== F)) {
                z(N.title);
                var C = kn()(l),
                  D = function w(k) {
                    var b;
                    k == null ||
                      (b = k.children) === null ||
                      b === void 0 ||
                      b.forEach(function (g) {
                        var L;
                        if (g.title === N.title) {
                          var $;
                          (g.height = '30px'),
                            g == null ||
                              ($ = g.children) === null ||
                              $ === void 0 ||
                              $.forEach(function (K) {
                                K.height = '30px';
                              });
                        } else
                          g != null &&
                            (L = g.children) !== null &&
                            L !== void 0 &&
                            L.length &&
                            w(g);
                      });
                  };
                C.forEach(function (w) {
                  D(w);
                }),
                  p(C);
              }
            },
            G = function (s, N) {
              if (f) {
                s.nativeEvent.preventDefault();
                var C = s.nativeEvent.dataTransfer.getData('dargTree');
                if (C) {
                  var D = kn()(l),
                    w = function b(g) {
                      var L;
                      if (g.title === C && N !== g) {
                        var $;
                        if (((C = g), g.level === 1)) D.splice(g.group, 1);
                        else {
                          var K;
                          g == null || (K = g.children) === null || K === void 0 || K.splice(0, 1);
                        }
                        (g == null || ($ = g.children) === null || $ === void 0
                          ? void 0
                          : $.length) === 0 && delete g.children;
                        return;
                      }
                      g != null &&
                        (L = g.children) !== null &&
                        L !== void 0 &&
                        L.length &&
                        g.children.forEach(function (on, gn) {
                          if (on.title === C) {
                            var dn, vn;
                            (C = on),
                              g == null ||
                                (dn = g.children) === null ||
                                dn === void 0 ||
                                dn.splice(gn, 1),
                              (g == null || (vn = g.children) === null || vn === void 0
                                ? void 0
                                : vn.length) === 0 && delete g.children;
                          }
                          on.children && b(on);
                        });
                    };
                  D.forEach(function (b) {
                    w(b);
                  });
                  var k = function b(g) {
                    var L;
                    g.title === N.title
                      ? ((C.level = (g.level || 0) + 1),
                        (C.prev = g),
                        g.children ? g.children.splice(0, 0, C) : (g.children = [C]))
                      : g != null &&
                        (L = g.children) !== null &&
                        L !== void 0 &&
                        L.length &&
                        g.children.forEach(function ($, K) {
                          var on;
                          if ($.title === N.title)
                            if (((C.level = $.level), (C.prev = g), g.children)) {
                              if ((g.children.splice(K + 1, 0, C), g.children[K + 1].children)) {
                                var gn;
                                g.children[K + 1].children = (
                                  g == null || (gn = g.children[K + 1]) === null || gn === void 0
                                    ? void 0
                                    : gn.children
                                ).map(function (dn) {
                                  return tn()(
                                    tn()({}, dn),
                                    {},
                                    {
                                      level:
                                        ((g == null ? void 0 : g.children)[K + 1].level || 0) + 1,
                                    }
                                  );
                                });
                              }
                            } else g.children = [C];
                          else
                            $ != null &&
                              (on = $.children) !== null &&
                              on !== void 0 &&
                              on.length &&
                              b($);
                        });
                  };
                  ve()(C) === 'object' &&
                    D.forEach(function (b) {
                      k(b);
                    }),
                    !(C.group === N.group && C.level < (N.level || 0)) && (p(D), u && u(D));
                }
              }
            },
            B = function (s) {
              var N, C;
              if (
                (s != null &&
                  (N = s.children) !== null &&
                  N !== void 0 &&
                  N.length &&
                  j &&
                  s.hasOpen) ||
                (s != null && (C = s.children) !== null && C !== void 0 && C.length && !j)
              )
                return T(s.children);
            },
            T = (0, r.useCallback)(
              function () {
                var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l,
                  s = A.group,
                  N = A.value,
                  C = A.title;
                return m.map(function (D, w) {
                  var k;
                  return (0, e.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        (0, e.jsxs)('div', {
                          className: 'treeNode',
                          style: {
                            marginLeft: ''.concat((D.level || 0) * 10, 'px'),
                            height: ''.concat(D.height),
                          },
                          draggable: f,
                          onDragStart: function (g) {
                            return nn(g, D);
                          },
                          onDrop: function (g) {
                            return G(g, D);
                          },
                          onDragOver: function (g) {
                            return ln(g, D);
                          },
                          children: [
                            D.group === s && D.value === N && D.title === C
                              ? (0, e.jsx)(Ke.Z, {})
                              : D != null && (k = D.children) !== null && k !== void 0 && k.length
                              ? D.children[0].height === '0'
                                ? (0, e.jsx)(Ot.Z, {
                                    onClick: function () {
                                      return R(D);
                                    },
                                  })
                                : (0, e.jsx)(Gn.Z, {
                                    onClick: function () {
                                      return R(D);
                                    },
                                  })
                              : (0, e.jsx)('div', { style: { width: '14px', height: '14px' } }),
                            V(D),
                            (0, e.jsx)('span', {
                              className: 'text',
                              onClick: function () {
                                return R(D);
                              },
                              style: D.disabled ? { color: '#00000040' } : { color: '#000000' },
                              children: D.title,
                            }),
                          ],
                        }),
                        B(D),
                      ],
                    },
                    w
                  );
                });
              },
              [l, A]
            );
          return (0, e.jsx)(Ks, {
            globalColor: M,
            children: (0, e.jsx)('div', { className: Z, style: c, ref: i, children: T(l) }),
          });
        },
        qs = (0, r.forwardRef)(Qs),
        Mo,
        Lt = '#ffffff',
        nd = '#d9d9d9',
        Ro = S.concisFontSm,
        ed = S.concisFontMd,
        td = S.concisDarkFontColor,
        rd = S.concisPrimaryColor,
        od = S.concisDarkPrimaryColor;
      function Io(t, n) {
        return t || (n ? od : rd);
      }
      var id = `
.concis-checkGroup,
.concis-dark-checkGroup {
  .checkbox {
    display: flex;
    align-items: center;
  }

  .groupBox {
    margin-right: 10px;
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
}

.concis-dark-checkbox,
.concis-dark-checkGroup {
  .text {
    color: `.concat(
          td,
          `;
  }
}
`
        ),
        ad = cn.ZP.span(
          Mo ||
            (Mo = an()([
              `
  .concis-checkbox,
  .concis-checkGroup,
  .concis-dark-checkbox,
  .concis-dark-checkGroup {
    display: inline-block;
    cursor: pointer;

    .concis-checkbox-content {
      display: flex;
      align-items: center;
    }

    &-actived,
    &-noActived,
    &-disabled {
      display: flex;
      align-items: center;
      justify-content: center;
      width: `,
              `;
      height: `,
              `;
      margin-left: 5px;
      padding: 7px;
      box-sizing: border-box;
      transition: 0.2s linear;
      border-radius: 5px;
    }

    &-disabled {
      border: 1px solid #858585;
      cursor: not-allowed;
    }

    &-actived {
      color: `,
              `;
      background: `,
              `;
      border: 1px solid
        `,
              `;
    }

    &-noActived {
      color: `,
              `;
      background: `,
              `;
      border: 1px solid `,
              `;

      &:hover {
        border: 1px solid #afacac;
      }
    }

    .text {
      margin-left: 5px;
      font-size: `,
              `;
      user-select: none;
    }

    .disabled {
      cursor: not-allowed;
    }
  }

  .disabled-checkbox {
    cursor: not-allowed;
    opacity: 0.3;

    .concis-checkbox-disabled {
      border: 1px solid #858585;
    }
  }

  `,
              `
`,
            ])),
          Ro,
          Ro,
          Lt,
          function (t) {
            var n = t.activeColor,
              i = t.darkTheme;
            return Io(n, i);
          },
          function (t) {
            var n = t.activeColor,
              i = t.darkTheme;
            return Io(n, i);
          },
          Lt,
          Lt,
          nd,
          ed,
          id
        ),
        cd = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = n.checked,
            o = n.disabled,
            u = n.group,
            c = n.checkCallback,
            j = n.checkGroupCallback,
            v = (0, r.useState)(),
            y = H()(v, 2),
            _ = y[0],
            x = y[1],
            l = (0, r.useState)(u || []),
            p = H()(l, 2),
            P = p[0],
            E = p[1],
            F = (0, r.useContext)(On),
            z = zn(),
            O = (0, r.useContext)(xn),
            W = O.globalColor,
            A = O.prefixCls,
            I = O.darkTheme,
            X = hn(
              A,
              d,
              o ? 'disabled-checkbox' : '',
              u && u.length
                ? 'concis-'.concat(I ? 'dark-' : '', 'checkGroup')
                : 'concis-'.concat(I ? 'dark-' : '', 'checkbox')
            ),
            M = {
              disabled: (0, e.jsx)('div', { className: 'concis-checkbox-disabled' }),
              actived: (0, e.jsx)('div', {
                className: 'concis-checkbox-actived',
                children: (0, e.jsx)(it.Z, { style: { fontSize: '12px' } }),
              }),
              noActived: (0, e.jsx)('div', { className: 'concis-checkbox-noActived' }),
            };
          (0, r.useEffect)(
            function () {
              x(f !== void 0 ? f : !1);
            },
            [f]
          ),
            (0, r.useEffect)(
              function () {
                F.reset && x(f);
              },
              [F.reset]
            );
          var Y = function () {
              o || (x(!_), c && c(!_));
            },
            Q = function (q) {
              var V,
                nn = kn()(P);
              (nn[q].checked =
                (V = nn[q]) !== null && V !== void 0 && V.checked ? !nn[q].checked : !0),
                E(nn),
                j && j(nn);
            },
            Z = (0, r.useMemo)(
              function () {
                return o ? M.disabled : _ ? M.actived : M.noActived;
              },
              [_, f]
            ),
            J = (0, r.useCallback)(
              function (R) {
                var q = R.disabled,
                  V = R.checked;
                return q ? M.disabled : V ? M.actived : M.noActived;
              },
              [u]
            );
          return (0, e.jsx)(ad, {
            activeColor: W,
            darkTheme: I || z === 'auto' || z === 'dark',
            children:
              u && u.length
                ? (0, e.jsx)('div', {
                    className: X,
                    style: h,
                    ref: i,
                    children: (0, e.jsx)('div', {
                      className: 'concis-checkbox-content',
                      children: u.map(function (R, q) {
                        return (0, e.jsxs)(
                          'div',
                          {
                            className: 'checkbox groupBox '.concat(R.disabled ? 'disabled' : ''),
                            onClick: function () {
                              return Q(q);
                            },
                            children: [
                              J(R),
                              (0, e.jsx)('div', { className: 'text', children: R.label }),
                            ],
                          },
                          q
                        );
                      }),
                    }),
                  })
                : (0, e.jsx)('div', {
                    className: X,
                    onClick: Y,
                    style: h,
                    ref: i,
                    children: (0, e.jsxs)('div', {
                      className: 'concis-checkbox-content',
                      children: [
                        Z,
                        (0, e.jsx)('div', { className: o ? 'text disabled' : 'text', children: a }),
                      ],
                    }),
                  }),
          });
        },
        Un = (0, r.forwardRef)(cd),
        ld = fn(71574),
        sd = fn(54505),
        Lo,
        Bo = '30px',
        Bt = S.concisTransformLg,
        Ao = S.concisRadiusLg,
        dd = cn.ZP.div(
          Lo ||
            (Lo = an()([
              `
  .concis-swipers {
    position: relative;
    top: 0;
    right: 0;
    height: 240px;
    margin: 0 auto;
    overflow: hidden;
    transition: 0.2s linear;

    .swiperList {
      position: relative;
      display: flex;
      width: 3600px;
    }

    .swiper-img {
      height: 240px;
    }

    .prev-btn,
    .next-btn {
      position: absolute;
      top: 50%;
      color: #fff;
      font-size: 30px;
      transform: translate(0, -50%);
      cursor: pointer;

      img {
        width: `,
              `;
        height: `,
              `;
      }
    }

    .prev-btn {
      left: `,
              `;
    }

    .next-btn {
      right: `,
              `;
    }

    .menu-options {
      position: absolute;
      bottom: `,
              `;
      left: 50%;
      display: flex;
      transform: translate(-50%);

      .option,
      .option-active {
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: `,
              `;
        cursor: pointer;
      }

      .option {
        background-color: #ffffff4d;

        &:hover {
          background-color: #fff;
        }
      }

      .option-active {
        background-color: #fff;
      }
    }
  }

  .concis-card-swiper {
    position: relative;
    width: 100% !important;
    margin: 0 auto;
    text-align: center;

    .center-pic {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 240px;
      margin: 0 auto;
      transform: translate(-50%, -50%);
    }

    .center {
      position: absolute;
      z-index: 5;
      transition: 0.2s linear;
    }

    .left,
    .right {
      position: absolute;
      transition: 0.2s linear;
    }

    .menu-options {
      position: absolute;
      bottom: -20px;
      left: 50%;
      display: flex;
      transform: translate(-50%);

      .option,
      .option-active {
        width: 6px;
        height: 6px;
        margin-right: 6px;
        border-radius: `,
              `;
        cursor: pointer;
      }

      .option {
        background-color: #e5e5e5;

        &:hover {
          background-color: #c9cace;
        }
      }

      .option-active {
        background-color: #c9cace;
      }
    }
  }
`,
            ])),
          Bo,
          Bo,
          Bt,
          Bt,
          Bt,
          Ao,
          Ao
        ),
        ud = {
          3: [
            [0, 1, 2],
            [1, 2, 0],
            [2, 0, 1],
          ],
          4: [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 0],
            [3, 0, 1],
          ],
          5: [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 0],
            [4, 0, 1],
          ],
          6: [
            [0, 1, 2],
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
            [4, 5, 0],
            [5, 0, 1],
          ],
        },
        Zo = ud,
        fd = function (n, i) {
          var a = n.imgList,
            d = n.className,
            h = n.style,
            f = n.pictureSize,
            o = f === void 0 ? 400 : f,
            u = n.height,
            c = u === void 0 ? 240 : u,
            j = n.autoPlayer,
            v = n.deply,
            y = v === void 0 ? 3e3 : v,
            _ = n.showTrigger,
            x = n.card,
            l = (0, r.useState)(a),
            p = H()(l, 2),
            P = p[0],
            E = p[1],
            F = (0, r.useState)(a),
            z = H()(F, 2),
            O = z[0],
            W = z[1],
            A = (0, r.useState)(o),
            I = H()(A, 2),
            X = I[0],
            M = I[1],
            Y = (0, r.useState)('0.2s linear'),
            Q = H()(Y, 2),
            Z = Q[0],
            J = Q[1],
            R = (0, r.useState)(Zo[a.length]),
            q = H()(R, 2),
            V = q[0],
            nn = q[1],
            ln = (0, r.useState)({
              leftPic: {
                pos: { left: 0 },
                width: ''.concat(o / 2, 'px'),
                height: ''.concat(c - 60, 'px'),
                zIndex: 2,
                top: '20px',
                picIndex: 0,
                opacity: 0.4,
              },
              centerPic: {
                pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                width: ''.concat(o, 'px'),
                height: ''.concat(c, 'px'),
                zIndex: 5,
                top: '',
                picIndex: 1,
                opacity: 1,
              },
              rightPic: {
                pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                width: ''.concat(o / 2, 'px'),
                height: ''.concat(c - 60, 'px'),
                zIndex: 2,
                top: '20px',
                picIndex: 2,
                opacity: 0.4,
              },
            }),
            G = H()(ln, 2),
            B = G[0],
            T = G[1],
            m = (0, r.useState)(0),
            s = H()(m, 2),
            N = s[0],
            C = s[1],
            D = (0, r.useRef)(),
            w = (0, r.useRef)(),
            k = (0, r.useContext)(xn),
            b = k.prefixCls,
            g = hn(b, d, x ? 'concis-card-swiper' : 'concis-swipers');
          (0, r.useEffect)(function () {
            var Cn = JSON.parse(JSON.stringify(a));
            W(a), Cn.push(Cn[0]), Cn.unshift(Cn[Cn.length - 2]), E(Cn);
            var un = a.length;
            nn(Zo[un]);
          }, []),
            (0, r.useEffect)(function () {
              return (
                j && requestAnimationFrame(x ? $ : L),
                function () {
                  clearInterval(D.current), clearInterval(w.current);
                }
              );
            }, []);
          var L = function () {
              D.current = setInterval(function () {
                M(function (un) {
                  var bn = JSON.parse(JSON.stringify(un));
                  return (
                    bn >= P.length * o ? J('') : J('0.2s linear'), bn >= P.length * o ? 0 : bn + o
                  );
                });
              }, y);
            },
            $ = function () {
              w.current = setInterval(function () {
                T(function (un) {
                  return (
                    un.centerPic.pos.margin
                      ? (un.centerPic = {
                          pos: { left: 0 },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 0,
                          opacity: 0.4,
                        })
                      : !un.centerPic.pos.margin && un.centerPic.pos.left === 0
                      ? (un.centerPic = {
                          pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 2,
                          opacity: 0.4,
                        })
                      : (un.centerPic = {
                          pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                          width: ''.concat(o, 'px'),
                          height: ''.concat(c, 'px'),
                          zIndex: 5,
                          top: '',
                          picIndex: 1,
                          opacity: 1,
                        }),
                    un.leftPic.pos.margin
                      ? (un.leftPic = {
                          pos: { left: 0 },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 0,
                          opacity: 0.4,
                        })
                      : !un.leftPic.pos.margin && un.leftPic.pos.left === 0
                      ? (un.leftPic = {
                          pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 2,
                          opacity: 0.4,
                        })
                      : (un.leftPic = {
                          pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                          width: ''.concat(o, 'px'),
                          height: ''.concat(c, 'px'),
                          zIndex: 5,
                          top: '',
                          picIndex: 1,
                          opacity: 1,
                        }),
                    un.rightPic.pos.margin
                      ? (un.rightPic = {
                          pos: { left: 0 },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 0,
                          opacity: 0.4,
                        })
                      : !un.rightPic.pos.margin && un.rightPic.pos.left === 0
                      ? (un.rightPic = {
                          pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                          width: ''.concat(o / 2, 'px'),
                          height: ''.concat(c - 60, 'px'),
                          zIndex: 2,
                          top: '20px',
                          picIndex: 2,
                          opacity: 0.4,
                        })
                      : (un.rightPic = {
                          pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                          width: ''.concat(o, 'px'),
                          height: ''.concat(c, 'px'),
                          zIndex: 5,
                          top: '',
                          picIndex: 1,
                          opacity: 1,
                        }),
                    JSON.parse(JSON.stringify(un))
                  );
                }),
                  nn(function (un) {
                    return un.push(un[0]), un.shift(), JSON.parse(JSON.stringify(un));
                  }),
                  C(function (un) {
                    return un >= V.length - 1 ? 0 : un + 1;
                  });
              }, y);
            },
            K = function () {
              X >= (P.length - 2) * o
                ? (J(''),
                  M(0),
                  setTimeout(function () {
                    J('0.2s linear'), M(o);
                  }, 0))
                : M(X + o);
            },
            on = function () {
              X <= 0
                ? (J(''),
                  M((P.length - 2) * o),
                  setTimeout(function () {
                    J('0.2s linear'), M((P.length - 2) * o - o);
                  }, 0))
                : M(X - o);
            },
            gn = function (un) {
              M((un + 1) * o);
            },
            dn = (0, r.useCallback)(
              function (Cn) {
                return (X === o && Cn === 0) || (X === 0 && Cn === P.length - 3) || X / o - 1 === Cn
                  ? 'option-active'
                  : 'option';
              },
              [X]
            ),
            vn = (0, r.useCallback)(
              function (Cn) {
                if (Cn === 0)
                  return tn()(
                    tn()({ width: B.centerPic.width }, B.centerPic.pos),
                    {},
                    {
                      height: B.centerPic.height,
                      zIndex: B.centerPic.zIndex,
                      top: B.centerPic.top,
                      opacity: B.centerPic.opacity,
                    }
                  );
                if (Cn === 1)
                  return tn()(
                    tn()({ width: B.leftPic.width }, B.leftPic.pos),
                    {},
                    {
                      height: B.leftPic.height,
                      zIndex: B.leftPic.zIndex,
                      top: B.leftPic.top,
                      opacity: B.leftPic.opacity,
                    }
                  );
                if (Cn === 2)
                  return tn()(
                    tn()({ width: B.rightPic.width }, B.rightPic.pos),
                    {},
                    {
                      height: B.rightPic.height,
                      zIndex: B.rightPic.zIndex,
                      top: B.rightPic.top,
                      opacity: B.rightPic.opacity,
                    }
                  );
              },
              [B]
            ),
            Dn = function (un) {
              if (un.zIndex === 2 && un.left !== 0) {
                var bn = tn()({}, B);
                bn.centerPic.pos.margin
                  ? (bn.centerPic = {
                      pos: { left: 0 },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : !bn.centerPic.pos.margin && bn.centerPic.pos.left === 0
                  ? (bn.centerPic = {
                      pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : (bn.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: ''.concat(o, 'px'),
                      height: ''.concat(c, 'px'),
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    }),
                  bn.leftPic.pos.margin
                    ? (bn.leftPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      })
                    : !bn.leftPic.pos.margin && bn.leftPic.pos.left === 0
                    ? (bn.leftPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : (bn.leftPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      }),
                  bn.rightPic.pos.margin
                    ? (bn.rightPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      })
                    : !bn.rightPic.pos.margin && bn.rightPic.pos.left === 0
                    ? (bn.rightPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : (bn.rightPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      }),
                  T(bn);
                var jn = kn()(V);
                jn.push(jn.shift()),
                  nn(jn),
                  C(function (Fn) {
                    return Fn >= V.length - 1 ? 0 : Fn + 1;
                  });
              } else if (un.zIndex === 2 && un.left === 0) {
                var wn = tn()({}, B);
                wn.centerPic.pos.margin
                  ? (wn.centerPic = {
                      pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : !wn.centerPic.pos.margin && wn.centerPic.pos.left === 0
                  ? (wn.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: ''.concat(o, 'px'),
                      height: ''.concat(c, 'px'),
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (wn.centerPic = {
                      pos: { left: 0 },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    }),
                  wn.leftPic.pos.margin
                    ? (wn.leftPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : !wn.leftPic.pos.margin && wn.leftPic.pos.left === 0
                    ? (wn.leftPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      })
                    : (wn.leftPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      }),
                  wn.rightPic.pos.margin
                    ? (wn.rightPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : !wn.rightPic.pos.margin && wn.rightPic.pos.left === 0
                    ? (wn.rightPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      })
                    : (wn.rightPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      }),
                  T(wn);
                var Nn = kn()(V);
                Nn.unshift(Nn[Nn.length - 1]),
                  Nn.pop(),
                  nn(Nn),
                  C(function (Fn) {
                    return Fn - 1 < 0 ? V.length - 1 : Fn - 1;
                  });
              }
            },
            Wn = function (un) {
              if (N < un) {
                C(un);
                var bn = tn()({}, B);
                bn.centerPic.pos.margin
                  ? (bn.centerPic = {
                      pos: { left: 0 },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    })
                  : !bn.centerPic.pos.margin && bn.centerPic.pos.left === 0
                  ? (bn.centerPic = {
                      pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : (bn.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: ''.concat(o, 'px'),
                      height: ''.concat(c, 'px'),
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    }),
                  bn.leftPic.pos.margin
                    ? (bn.leftPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      })
                    : !bn.leftPic.pos.margin && bn.leftPic.pos.left === 0
                    ? (bn.leftPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : (bn.leftPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      }),
                  bn.rightPic.pos.margin
                    ? (bn.rightPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      })
                    : !bn.rightPic.pos.margin && bn.rightPic.pos.left === 0
                    ? (bn.rightPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : (bn.rightPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      }),
                  T(bn),
                  nn(function (wn) {
                    wn.sort(function (Fn, Vn) {
                      return Fn[0] - Vn[0];
                    });
                    for (var Nn = 0; Nn < un; Nn++) wn.push(wn.shift());
                    return JSON.parse(JSON.stringify(wn));
                  });
              } else if (N > un) {
                C(un);
                var jn = tn()({}, B);
                jn.centerPic.pos.margin
                  ? (jn.centerPic = {
                      pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 2,
                      opacity: 0.4,
                    })
                  : !jn.centerPic.pos.margin && jn.centerPic.pos.left === 0
                  ? (jn.centerPic = {
                      pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                      width: ''.concat(o, 'px'),
                      height: ''.concat(c, 'px'),
                      zIndex: 5,
                      top: '',
                      picIndex: 1,
                      opacity: 1,
                    })
                  : (jn.centerPic = {
                      pos: { left: 0 },
                      width: ''.concat(o / 2, 'px'),
                      height: ''.concat(c - 60, 'px'),
                      zIndex: 2,
                      top: '20px',
                      picIndex: 0,
                      opacity: 0.4,
                    }),
                  jn.leftPic.pos.margin
                    ? (jn.leftPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : !jn.leftPic.pos.margin && jn.leftPic.pos.left === 0
                    ? (jn.leftPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      })
                    : (jn.leftPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      }),
                  jn.rightPic.pos.margin
                    ? (jn.rightPic = {
                        pos: { left: ''.concat(o * 2 - 40 - o / 2, 'px') },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 2,
                        opacity: 0.4,
                      })
                    : !jn.rightPic.pos.margin && jn.rightPic.pos.left === 0
                    ? (jn.rightPic = {
                        pos: { left: 0, right: 0, top: 0, bottom: 0, margin: 'auto' },
                        width: ''.concat(o, 'px'),
                        height: ''.concat(c, 'px'),
                        zIndex: 5,
                        top: '',
                        picIndex: 1,
                        opacity: 1,
                      })
                    : (jn.rightPic = {
                        pos: { left: 0 },
                        width: ''.concat(o / 2, 'px'),
                        height: ''.concat(c - 60, 'px'),
                        zIndex: 2,
                        top: '20px',
                        picIndex: 0,
                        opacity: 0.4,
                      }),
                  T(jn),
                  nn(function (wn) {
                    wn.sort(function (Fn, Vn) {
                      return Fn[0] - Vn[0];
                    });
                    for (var Nn = 0; Nn < wn.length && wn[Nn] !== V[un]; Nn++) wn.push(wn.shift());
                    return JSON.parse(JSON.stringify(wn));
                  });
              }
            };
          return (0, e.jsx)(dd, {
            children: x
              ? (0, e.jsxs)('div', {
                  className: g,
                  style: tn()({ height: ''.concat(c, 'px'), width: ''.concat(o * 2, 'px') }, h),
                  ref: i,
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'center-pic',
                      style: { width: ''.concat(o * 2 - 40, 'px'), height: ''.concat(c, 'px') },
                      children: [
                        (0, e.jsx)('img', {
                          src: O[V[0][B.centerPic.picIndex]],
                          style: vn(0),
                          className: 'center',
                          onClick: function () {
                            return Dn(vn(0));
                          },
                        }),
                        (0, e.jsx)('img', {
                          src: O[V[0][B.leftPic.picIndex]],
                          style: vn(1),
                          className: 'left',
                          onClick: function () {
                            return Dn(vn(1));
                          },
                        }),
                        (0, e.jsx)('img', {
                          src: O[V[0][B.rightPic.picIndex]],
                          style: vn(2),
                          className: 'right',
                          onClick: function () {
                            return Dn(vn(2));
                          },
                        }),
                      ],
                    }),
                    _ &&
                      (0, e.jsx)('div', {
                        className: 'menu-options',
                        children: new Array(O.length).fill('').map(function (Cn, un) {
                          return (0, e.jsx)(
                            'div',
                            {
                              className: un === N ? 'option-active' : 'option',
                              onClick: function () {
                                return Wn(un);
                              },
                            },
                            un
                          );
                        }),
                      }),
                  ],
                })
              : (0, e.jsxs)('div', {
                  className: g,
                  style: tn()({ width: ''.concat(o, 'px'), height: ''.concat(c, 'px') }, h),
                  ref: i,
                  children: [
                    (0, e.jsx)('div', {
                      className: 'swiperList',
                      style: {
                        right: ''.concat(X, 'px'),
                        transition: Z,
                        width: ''.concat(o * P.length, 'px'),
                      },
                      children: P.map(function (Cn, un) {
                        return (0,
                        e.jsx)('img', { className: 'swiper-img', style: { width: ''.concat(o, 'px'), height: ''.concat(c, 'px') }, src: Cn }, un);
                      }),
                    }),
                    (0, e.jsx)('div', {
                      className: 'prev-btn',
                      onClick: on,
                      children: (0, e.jsx)(ld.Z, {}),
                    }),
                    (0, e.jsx)('div', {
                      className: 'next-btn',
                      onClick: K,
                      children: (0, e.jsx)(sd.Z, {}),
                    }),
                    _ &&
                      (0, e.jsx)('div', {
                        className: 'menu-options',
                        children: new Array(a.length).fill('').map(function (Cn, un) {
                          return (0, e.jsx)(
                            'div',
                            {
                              className: dn(un),
                              onClick: function () {
                                return gn(un);
                              },
                            },
                            un
                          );
                        }),
                      }),
                  ],
                }),
          });
        },
        hd = (0, r.forwardRef)(fd),
        Kn = fn(61325),
        at = fn(13421),
        Ho,
        Wo,
        Yo,
        $o = '32px',
        ct = '40px',
        pd = S.concisFontMd,
        At = S.concisTransformSm,
        vd = S.concisFontSm,
        gd = S.concisPrimaryColor;
      function md(t) {
        var n = { left: 'flex-start', center: 'center', right: 'flex-end' };
        return t
          ? (0, cn.iv)(
              Wo ||
                (Wo = an()([
                  `
    justify-content: `,
                  `;
  `,
                ])),
              n[t]
            )
          : (0, cn.iv)(
              Ho ||
                (Ho = an()([
                  `
      justify-content: flex-start;
    `,
                ]))
            );
      }
      var xd = cn.ZP.div(
          Yo ||
            (Yo = an()([
              `
  .concis-table-container,
  .concis-dark-table-container {
    position: relative;

    .table {
      display: flex;
      font-size: `,
              `;

      table {
        border: none;
        border-collapse: collapse;

        tr:first-of-type {
          border-top: 1px solid #e5e5e6;
        }

        tr {
          height: `,
              `;
          border: 1px solid #e5e5e6;

          .sort-icon {
            display: flex;
            flex-direction: column;
            float: left;
            margin-left: `,
              `;
            color: #a9adb2;
            font-size: `,
              `;
            cursor: pointer;
          }
        }

        td,
        th {
          padding: `,
              ` 30px;
          text-align: left;

          .radioBox {
            cursor: pointer;
          }
        }
      }

      .search-th-btn {
        width: 24px;
        height: `,
              `;
        margin-left: `,
              `;
        font-size: 17px;
        line-height: `,
              `;
        text-align: center;
        cursor: pointer;
        transition: 0.2s linear;

        &:hover,
        &:active {
          background-color: #c9cdd4;
        }
      }
    }
  }

  .pagination {
    display: flex;
    width: 100%;
    margin-top: 30px;
    `,
              `
  }

  .filter-dialog {
    display: flex;

    .search-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: `,
              `;
      height: `,
              `;
      margin-left: 24px;
      color: #fff;
      background: `,
              `;
      cursor: pointer;
    }
  }

  .concis-dark-table-container {
    table {
      tr:first-of-type {
        border-top: 1px solid #484849;
      }

      tr {
        height: `,
              `;
        border: 1px solid #484849;
      }
    }
  }
`,
            ])),
          pd,
          ct,
          At,
          vd,
          At,
          ct,
          At,
          ct,
          function (t) {
            var n = t.paginationAlign;
            return md(n);
          },
          $o,
          $o,
          gd,
          ct
        ),
        xe = 0,
        Xo = [10, 20, 30, 50],
        bd = function (n, i) {
          var a,
            d,
            h = n.className,
            f = n.style,
            o = n.titleParams,
            u = n.tableData,
            c = n.align,
            j = n.expandedRowRender,
            v = n.radio,
            y = n.checked,
            _ = n.radioSelectCallback,
            x = n.checkedSelectCallback,
            l = n.filter,
            p = n.avableSort,
            P = n.virtualized,
            E = n.largeDateShowNum,
            F = E === void 0 ? 10 : E,
            z = n.lazyLoad,
            O = n.pagination,
            W = n.paginationAlign,
            A = n.pageSizeOption,
            I = n.changePNumCallback,
            X = n.changePSizeCallback,
            M = n.dropabled,
            Y = n.dropCallback,
            Q = (0, r.useState)(o),
            Z = H()(Q, 2),
            J = Z[0],
            R = Z[1],
            q = (0, r.useState)(u),
            V = H()(q, 2),
            nn = V[0],
            ln = V[1],
            G = (0, r.useState)({}),
            B = H()(G, 2),
            T = B[0],
            m = B[1],
            s = (0, r.useState)([]),
            N = H()(s, 2),
            C = N[0],
            D = N[1],
            w = (0, r.useState)(0),
            k = H()(w, 2),
            b = k[0],
            g = k[1],
            L = (0, r.useState)(Xo[0]),
            $ = H()(L, 2),
            K = $[0],
            on = $[1],
            gn = (0, r.createRef)(),
            dn = (0, r.useContext)(xn),
            vn = dn.prefixCls,
            Dn = dn.darkTheme,
            Wn = hn(vn, h, 'concis-'.concat(Dn ? 'dark-' : '', 'table-container'));
          (0, r.useEffect)(function () {
            var en = kn()(nn);
            j &&
              en.forEach(function (rn) {
                rn.openLine = '';
              }),
              p &&
                R(function (rn) {
                  return (
                    rn.forEach(function (U) {
                      Array.isArray(U.sorter) &&
                        (U.sorter = U.sorter.map(function (pn) {
                          return { fn: pn, sorted: !1 };
                        }));
                    }),
                    kn()(rn)
                  );
                }),
              (P || z) && (en = en.slice(0, F || 10)),
              O && (en = en.slice(0, K)),
              ln(en);
          }, []);
          var Cn = (0, r.useCallback)(
              function (en) {
                var rn = { width: 'auto' };
                return en != null && en.width && (rn.width = ''.concat(en.width, 'px')), rn;
              },
              [o]
            ),
            un = function (rn, U) {
              if (j) {
                j(rn);
                var pn = kn()(nn);
                pn[U].openLine ? (pn[U].openLine = '') : (j(rn), (pn[U].openLine = j(rn))), ln(pn);
              }
            },
            bn = function (rn) {
              m(rn), _ && _(rn);
            },
            jn = function (rn, U) {
              D(function (pn) {
                if (rn) pn.push(U);
                else {
                  var yn = pn.findIndex(function (Sn) {
                    return Sn === U;
                  });
                  pn.splice(yn, 1);
                }
                return x && x(pn), kn()(pn);
              });
            },
            wn = function (rn) {
              D(function (U) {
                return rn ? (U = nn) : (U = []), x && x(U), kn()(U);
              });
            },
            Nn = function (rn, U, pn) {
              var yn = U.dataIndex,
                Sn = kn()(nn);
              Array.isArray(U.sorter) && ve()(U.sorter[0]) === 'object'
                ? (Sn.sort(U.sorter[pn - 2].fn),
                  ln(Sn),
                  R(function (_n) {
                    return (
                      pn === 2
                        ? ((_n[rn].sorter[0].sorted = !0), (_n[rn].sorter[1].sorted = !1))
                        : ((_n[rn].sorter[0].sorted = !1), (_n[rn].sorter[1].sorted = !0)),
                      kn()(_n)
                    );
                  }))
                : (Sn.sort(function (_n, En) {
                    return pn === 2 ? _n[yn] - En[yn] : En[yn] - _n[yn];
                  }),
                  ln(Sn),
                  R(function (_n) {
                    return (_n[rn].sorter = pn), kn()(_n);
                  }));
            },
            Fn = function (rn, U) {
              R(function (pn) {
                return (
                  pn.forEach(function (yn) {
                    yn === U && yn.filter !== void 0 && (yn.filter = rn);
                  }),
                  kn()(pn)
                );
              });
            },
            Vn = function (rn) {
              ln(function (U) {
                return (
                  rn.filter === !0
                    ? (U = u)
                    : (U = u.filter(function (pn) {
                        return String(pn[rn.dataIndex]).includes(rn.filter);
                      })),
                  kn()(U)
                );
              });
            },
            he = function (rn) {
              return Object.entries(rn).map(function (U, pn) {
                if (U[0] !== 'openLine')
                  return (0, e.jsx)(
                    'td',
                    { style: { textAlign: c || 'left' }, children: U[1] },
                    pn
                  );
              });
            },
            De = (0, r.useCallback)(
              function (en, rn) {
                return typeof en.sorter == 'number' || typeof en.sorter == 'boolean'
                  ? rn === 0
                    ? { color: en.sorter === 2 ? '#325DFF' : '#a9adb2' }
                    : { color: en.sorter === 3 ? '#325DFF' : '#a9adb2' }
                  : rn === 0
                  ? { color: en.sorter[0].sorted ? '#325DFF' : '#a9adb2' }
                  : { color: en.sorter[1].sorted ? '#325DFF' : '#a9adb2' };
              },
              [o, J]
            ),
            or = function (rn) {
              if (P) {
                var U,
                  pn,
                  yn,
                  Sn = gn.current.scrollTop;
                if (
                  (u.length + 2) *
                    ((U = document.querySelector('.victurl-scroll-tr')) === null || U === void 0
                      ? void 0
                      : U.offsetHeight) -
                    xe <
                    (F + 2) *
                      ((pn = document.querySelector('.victurl-scroll-tr')) === null || pn === void 0
                        ? void 0
                        : pn.offsetHeight) &&
                  Sn > xe
                )
                  return;
                var _n =
                  ((yn = document.querySelector('.victurl-scroll-tr')) === null || yn === void 0
                    ? void 0
                    : yn.offsetHeight) || 40;
                (xe = Sn),
                  g(Sn),
                  ln(function (En) {
                    var Ge = F || 10;
                    return (En = u.slice(Math.floor(Sn / _n), Math.floor(Sn / _n) + Ge)), kn()(En);
                  });
              } else
                z &&
                  rn.nativeEvent.target.scrollHeight -
                    rn.nativeEvent.target.clientHeight -
                    rn.nativeEvent.target.scrollTop <=
                    10 &&
                  setTimeout(function () {
                    ln(function (En) {
                      return (
                        (En = [].concat(kn()(En), kn()(u.slice(En.length + 1, En.length + 11)))),
                        kn()(En)
                      );
                    });
                  }, 300);
            },
            ir = function (rn) {
              ln(function (U) {
                return (U = u.slice((rn - 1) * K, (rn - 1) * K + K)), kn()(U);
              }),
                I && I(rn, u.slice((rn - 1) * K, (rn - 1) * K + K));
            },
            ar = function (rn) {
              on(rn),
                ln(function (U) {
                  return (U = u.slice(0, rn)), kn()(U);
                }),
                X && X(rn, u.slice(0, rn));
            },
            cr = function (rn, U) {
              rn.nativeEvent.dataTransfer.setData('dragKey', U);
            },
            lr = function (rn, U) {
              rn.nativeEvent.preventDefault();
              var pn = rn.nativeEvent.dataTransfer.getData('dragKey'),
                yn = U;
              ln(function (Sn) {
                var _n = [Sn[yn], Sn[pn]];
                return (Sn[pn] = _n[0]), (Sn[yn] = _n[1]), Y && Y(Sn), kn()(Sn);
              });
            },
            sr = function (rn) {
              rn.nativeEvent.preventDefault();
            },
            dr = (0, r.useCallback)(
              function () {
                return nn == null
                  ? void 0
                  : nn.map(function (en, rn) {
                      return (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsxs)(
                            'tr',
                            {
                              className: 'victurl-scroll-tr',
                              children: [
                                j &&
                                  (0, e.jsx)('td', {
                                    style: { textAlign: c || 'left', cursor: 'pointer' },
                                    onClick: function () {
                                      return un(en, rn);
                                    },
                                    children: (0, e.jsx)(Kn.Z, {}),
                                  }),
                                v &&
                                  (0, e.jsx)('td', {
                                    style: { textAlign: c || 'left', cursor: 'pointer' },
                                    children: (0, e.jsx)('input', {
                                      className: 'radioBox',
                                      type: 'radio',
                                      checked: T === en,
                                      onClick: function () {
                                        return bn(en);
                                      },
                                    }),
                                  }),
                                y &&
                                  (0, e.jsx)('td', {
                                    style: { textAlign: c || 'left', cursor: 'pointer' },
                                    children: (0, e.jsx)(Un, {
                                      checked: C.indexOf(en) !== -1,
                                      checkCallback: function (pn) {
                                        return jn(pn, en);
                                      },
                                      children: C.indexOf(en) === -1,
                                    }),
                                  }),
                                he(en),
                              ],
                            },
                            rn
                          ),
                          en.openLine &&
                            (0, e.jsx)('tr', {
                              children: (0, e.jsx)('td', {
                                style: { textAlign: c || 'left' },
                                colSpan: Object.keys(nn[0]).length + 1,
                                children: en.openLine,
                              }),
                            }),
                        ],
                      });
                    });
              },
              [nn, xe, b, C, T]
            ),
            mn = function () {
              if (P) {
                var rn;
                return (0, e.jsxs)('div', {
                  style: {
                    height: ''.concat(
                      (u.length + 2) *
                        ((rn = document.querySelector('.victurl-scroll-tr')) === null ||
                        rn === void 0
                          ? void 0
                          : rn.offsetHeight) -
                        xe,
                      'px'
                    ),
                    transform: 'translateY('.concat(xe, 'px)'),
                  },
                  children: [
                    (0, e.jsx)('thead', {
                      children: (0, e.jsxs)('tr', {
                        children: [
                          (j || v) && (0, e.jsx)('th', { style: { textAlign: c || 'left' } }),
                          y &&
                            (0, e.jsx)('th', {
                              style: { textAlign: c || 'left' },
                              children: (0, e.jsx)(Un, {
                                checked: C.length === nn.length,
                                checkCallback: function (pn) {
                                  return wn(pn);
                                },
                              }),
                            }),
                          J == null
                            ? void 0
                            : J.map(function (U, pn) {
                                return (0, e.jsx)(
                                  'th',
                                  {
                                    style: Cn(U),
                                    className: 'tableHead',
                                    children: (0, e.jsxs)('div', {
                                      style: {
                                        display: 'flex',
                                        justifyContent: c || 'flex-start',
                                        alignItems: 'center',
                                      },
                                      children: [
                                        (0, e.jsx)('span', { children: U.title }),
                                        (U == null ? void 0 : U.sorter) &&
                                          p &&
                                          (0, e.jsxs)('div', {
                                            className: 'sort-icon',
                                            children: [
                                              (0, e.jsx)(et.Z, {
                                                onClick: function () {
                                                  return Nn(pn, U, 2);
                                                },
                                                style: De(U, 0),
                                              }),
                                              (0, e.jsx)(Gn.Z, {
                                                onClick: function () {
                                                  return Nn(pn, U, 3);
                                                },
                                                style: De(U, 1),
                                              }),
                                            ],
                                          }),
                                        (U == null ? void 0 : U.filter) !== void 0 &&
                                          l &&
                                          (0, e.jsx)(ce, {
                                            type: 'click',
                                            align: 'bottom',
                                            dialogWidth: 130,
                                            noBorder: !0,
                                            content: (0, e.jsxs)('div', {
                                              className: 'filter-dialog',
                                              children: [
                                                (0, e.jsx)(Mn, {
                                                  placeholder: '\u8BF7\u8F93\u5165',
                                                  width: '70',
                                                  handleIptChange: function (Sn) {
                                                    return Fn(Sn, U);
                                                  },
                                                }),
                                                (0, e.jsx)('div', {
                                                  className: 'search-btn',
                                                  onClick: function () {
                                                    return Vn(U);
                                                  },
                                                  children: (0, e.jsx)(at.Z, {}),
                                                }),
                                              ],
                                            }),
                                            children: (0, e.jsx)('div', {
                                              className: 'search-th-btn',
                                              children: (0, e.jsx)(at.Z, {}),
                                            }),
                                          }),
                                      ],
                                    }),
                                  },
                                  pn
                                );
                              }),
                        ],
                      }),
                    }),
                    (0, e.jsx)('tbody', { children: dr() }),
                  ],
                });
              }
              return z
                ? (0, e.jsx)('tbody', {
                    children:
                      nn == null
                        ? void 0
                        : nn.map(function (U, pn) {
                            return (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsxs)(
                                  'tr',
                                  {
                                    children: [
                                      j &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          onClick: function () {
                                            return un(U, pn);
                                          },
                                          children: (0, e.jsx)(Kn.Z, {}),
                                        }),
                                      v &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)('input', {
                                            className: 'radioBox',
                                            type: 'radio',
                                            checked: T === U,
                                            onClick: function () {
                                              return bn(U);
                                            },
                                          }),
                                        }),
                                      y &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)(Un, {
                                            checked: C.indexOf(U) !== -1,
                                            checkCallback: function (Sn) {
                                              return jn(Sn, U);
                                            },
                                            children: C.indexOf(U) === -1,
                                          }),
                                        }),
                                      he(U),
                                    ],
                                  },
                                  pn
                                ),
                                U.openLine &&
                                  (0, e.jsx)('tr', {
                                    children: (0, e.jsx)('td', {
                                      style: { textAlign: c || 'left' },
                                      colSpan: Object.keys(nn[0]).length + 1,
                                      children: U.openLine,
                                    }),
                                  }),
                              ],
                            });
                          }),
                  })
                : O
                ? (0, e.jsx)('tbody', {
                    children:
                      nn == null
                        ? void 0
                        : nn.map(function (U, pn) {
                            return (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsxs)(
                                  'tr',
                                  {
                                    children: [
                                      j &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          onClick: function () {
                                            return un(U, pn);
                                          },
                                          children: (0, e.jsx)(Kn.Z, {}),
                                        }),
                                      v &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)('input', {
                                            className: 'radioBox',
                                            type: 'radio',
                                            checked: T === U,
                                            onClick: function () {
                                              return bn(U);
                                            },
                                          }),
                                        }),
                                      y &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)(Un, {
                                            checked: C.indexOf(U) !== -1,
                                            checkCallback: function (Sn) {
                                              return jn(Sn, U);
                                            },
                                            children: C.indexOf(U) === -1,
                                          }),
                                        }),
                                      he(U),
                                    ],
                                  },
                                  pn
                                ),
                                U.openLine &&
                                  (0, e.jsx)('tr', {
                                    children: (0, e.jsx)('td', {
                                      style: { textAlign: c || 'left' },
                                      colSpan: Object.keys(nn[0]).length + 1,
                                      children: U.openLine,
                                    }),
                                  }),
                              ],
                            });
                          }),
                  })
                : M
                ? (0, e.jsx)('tbody', {
                    children:
                      nn == null
                        ? void 0
                        : nn.map(function (U, pn) {
                            return (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsxs)(
                                  'tr',
                                  {
                                    style: { cursor: 'move' },
                                    draggable: !0,
                                    onDragStart: function (Sn) {
                                      return cr(Sn, pn);
                                    },
                                    onDrop: function (Sn) {
                                      return lr(Sn, pn);
                                    },
                                    onDragOver: function (Sn) {
                                      return sr(Sn);
                                    },
                                    children: [
                                      j &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          onClick: function () {
                                            return un(U, pn);
                                          },
                                          children: (0, e.jsx)(Kn.Z, {}),
                                        }),
                                      v &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)('input', {
                                            className: 'radioBox',
                                            type: 'radio',
                                            checked: T === U,
                                            onClick: function () {
                                              return bn(U);
                                            },
                                          }),
                                        }),
                                      y &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)(Un, {
                                            checked: C.indexOf(U) !== -1,
                                            checkCallback: function (Sn) {
                                              return jn(Sn, U);
                                            },
                                            children: C.indexOf(U) === -1,
                                          }),
                                        }),
                                      he(U),
                                    ],
                                  },
                                  pn
                                ),
                                U.openLine &&
                                  (0, e.jsx)('tr', {
                                    children: (0, e.jsx)('td', {
                                      style: { textAlign: c || 'left' },
                                      colSpan: Object.keys(nn[0]).length + 1,
                                      children: U.openLine,
                                    }),
                                  }),
                              ],
                            });
                          }),
                  })
                : (0, e.jsx)('tbody', {
                    children:
                      nn == null
                        ? void 0
                        : nn.map(function (U, pn) {
                            return (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsxs)(
                                  'tr',
                                  {
                                    children: [
                                      j &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          onClick: function () {
                                            return un(U, pn);
                                          },
                                          children: (0, e.jsx)(Kn.Z, {}),
                                        }),
                                      v &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)('input', {
                                            className: 'radioBox',
                                            type: 'radio',
                                            checked: T === U,
                                            onClick: function () {
                                              return bn(U);
                                            },
                                          }),
                                        }),
                                      y &&
                                        (0, e.jsx)('td', {
                                          style: { textAlign: c || 'left', cursor: 'pointer' },
                                          children: (0, e.jsx)(Un, {
                                            checked: C.indexOf(U) !== -1,
                                            checkCallback: function (Sn) {
                                              return jn(Sn, U);
                                            },
                                            children: C.indexOf(U) === -1,
                                          }),
                                        }),
                                      he(U),
                                    ],
                                  },
                                  pn
                                ),
                                U.openLine &&
                                  (0, e.jsx)('tr', {
                                    children: (0, e.jsx)('td', {
                                      style: { textAlign: c || 'left' },
                                      colSpan: Object.keys(nn[0]).length + 1,
                                      children: U.openLine,
                                    }),
                                  }),
                              ],
                            });
                          }),
                  });
            },
            sn = (0, r.useMemo)(
              function () {
                if (P) return F + 2;
                if (z) return F;
              },
              [P, z, F]
            );
          return (0, e.jsx)(xd, {
            paginationAlign: W,
            children: (0, e.jsxs)('div', {
              className: Wn,
              style:
                P || z
                  ? tn()(
                      {
                        height: ''.concat(
                          sn *
                            ((a = document.querySelector('.victurl-scroll-tr')) === null ||
                            a === void 0
                              ? void 0
                              : a.offsetHeight),
                          'px'
                        ),
                      },
                      f
                    )
                  : f,
              ref: i,
              children: [
                (0, e.jsx)('div', {
                  className: 'table',
                  style:
                    P || z
                      ? {
                          maxHeight: ''.concat(
                            sn *
                              ((d = document.querySelector('.victurl-scroll-tr')) === null ||
                              d === void 0
                                ? void 0
                                : d.offsetHeight),
                            'px'
                          ),
                          overflow: 'scroll',
                          position: 'absolute',
                          top: '40px',
                          left: '0',
                        }
                      : {},
                  onScroll: function (rn) {
                    return or(rn);
                  },
                  ref: gn,
                  children: (0, e.jsxs)('table', {
                    children: [
                      !P &&
                        (0, e.jsx)('thead', {
                          children: (0, e.jsxs)('tr', {
                            children: [
                              (j || v) && (0, e.jsx)('th', { style: { textAlign: c || 'left' } }),
                              y &&
                                (0, e.jsx)('th', {
                                  style: { textAlign: c || 'left' },
                                  children: (0, e.jsx)(Un, {
                                    checked: C.length === nn.length,
                                    checkCallback: function (rn) {
                                      return wn(rn);
                                    },
                                  }),
                                }),
                              J.map(function (en, rn) {
                                return (0, e.jsx)(
                                  'th',
                                  {
                                    style: Cn(en),
                                    className: 'tableHead',
                                    children: (0, e.jsxs)('div', {
                                      style: {
                                        display: 'flex',
                                        justifyContent: c || 'flex-start',
                                        alignItems: 'center',
                                      },
                                      children: [
                                        (0, e.jsx)('span', { children: en.title }),
                                        (en == null ? void 0 : en.sorter) &&
                                          p &&
                                          (0, e.jsxs)('div', {
                                            className: 'sort-icon',
                                            children: [
                                              (0, e.jsx)(et.Z, {
                                                onClick: function () {
                                                  return Nn(rn, en, 2);
                                                },
                                                style: De(en, 0),
                                              }),
                                              (0, e.jsx)(Gn.Z, {
                                                onClick: function () {
                                                  return Nn(rn, en, 3);
                                                },
                                                style: De(en, 1),
                                              }),
                                            ],
                                          }),
                                        (en == null ? void 0 : en.filter) !== void 0 &&
                                          l &&
                                          (0, e.jsx)(ce, {
                                            type: 'click',
                                            align: 'bottom',
                                            dialogWidth: 130,
                                            noBorder: !0,
                                            content: (0, e.jsxs)('div', {
                                              className: 'filter-dialog',
                                              children: [
                                                (0, e.jsx)(Mn, {
                                                  placeholder: '\u8BF7\u8F93\u5165',
                                                  width: '70',
                                                  handleIptChange: function (pn) {
                                                    return Fn(pn, en);
                                                  },
                                                }),
                                                (0, e.jsx)('div', {
                                                  className: 'search-btn',
                                                  onClick: function () {
                                                    return Vn(en);
                                                  },
                                                  children: (0, e.jsx)(at.Z, {}),
                                                }),
                                              ],
                                            }),
                                            children: (0, e.jsx)('div', {
                                              className: 'search-th-btn',
                                              children: (0, e.jsx)(at.Z, {}),
                                            }),
                                          }),
                                      ],
                                    }),
                                  },
                                  rn
                                );
                              }),
                            ],
                          }),
                        }),
                      mn(),
                    ],
                  }),
                }),
                O &&
                  (0, e.jsx)('div', {
                    className: 'pagination',
                    children: (0, e.jsx)(Nr, {
                      total: u.length,
                      showSizeChanger: !0,
                      pageSizeOptions: A || Xo,
                      showJumpInput: !0,
                      changePageSizeCallback: ar,
                      changePageCallback: ir,
                    }),
                  }),
              ],
            }),
          });
        },
        yd = (0, r.forwardRef)(bd),
        Vo,
        Jo,
        kd = '#484849',
        Cd = 'rgba(229, 230,235,1)',
        wd = S.concisRadiusXs;
      function Sd(t, n) {
        if (!n)
          return (
            console.log(t),
            (0, cn.iv)(
              Vo ||
                (Vo = an()([
                  `
      border: 1px solid `,
                  `;
    `,
                ])),
              t ? kd : Cd
            )
          );
      }
      var jd = cn.ZP.div(
          Jo ||
            (Jo = an()([
              `
  .concis-collapse-box,
  .concis-dark-collapse-box {
    width: 100%;
    padding: 0 15px;
    background: #fff;
    border-radius: `,
              `;
    `,
              `
  }

  .concis-dark-collapse-box {
    color: #d2d2d2;
    background-color: transparent;

    .concis-collapse-item-content {
      color: #8b8b8b;
    }

    .concis-collapse-item-header {
      border-bottom: 1px solid #484849;
    }
  }
`,
            ])),
          wd,
          function (t) {
            var n = t.isDark,
              i = t.noBorder;
            return Sd(n, i);
          }
        ),
        Go = (0, r.createContext)({}),
        Nd = function (n, i) {
          var a = n.children,
            d = n.style,
            h = n.className,
            f = n.defaultActive,
            o = n.accordion,
            u = n.noBorder,
            c = n.headerAlign,
            j = c === void 0 ? 'left' : c,
            v = n.lazyLoad,
            y = v === void 0 ? !1 : v,
            _ = n.toggleCallback,
            x = (0, r.useState)(f || []),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useContext)(xn),
            F = E.prefixCls,
            z = E.darkTheme,
            O = hn(F, h, 'concis-'.concat(z ? 'dark-' : '', 'collapse-box')),
            W = zn(),
            A = {
              activeKeyList: p,
              setActiveKeyList: P,
              accordion: o,
              headerAlign: j,
              lazyLoad: y,
              toggleCallback: _,
            };
          return (0, e.jsx)(jd, {
            isDark: W === 'dark' || W === 'auto' || z,
            noBorder: u,
            children: (0, e.jsx)(Go.Provider, {
              value: A,
              children: (0, e.jsx)('div', { className: O, style: d, ref: i, children: a }),
            }),
          });
        },
        Uo = (0, r.forwardRef)(Nd);
      Uo.displayName = 'Collapse';
      var _d = Uo,
        Ko,
        Qo,
        qo,
        ni,
        Td = '#c9cdd4',
        Dd = S.concisTransformMd,
        lt = S.concisTransformSm,
        Pd = S.concisFontMd,
        ei = S.concisFontSm;
      function Fd(t) {
        return t
          ? (0, cn.iv)(
              Ko ||
                (Ko = an()([
                  `
      color: `,
                  `;
      cursor: not-allowed;
    `,
                ])),
              Td
            )
          : (0, cn.iv)(
              Qo ||
                (Qo = an()([
                  `
    cursor: pointer;
  `,
                ]))
            );
      }
      function zd(t) {
        return (0, cn.iv)(
          qo ||
            (qo = an()([
              `
    max-height: `,
              `px;
  `,
            ])),
          t
        );
      }
      var Ed = cn.ZP.div(
          ni ||
            (ni = an()([
              `
  .concis-collapse-item {
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: `,
              `;
      padding: `,
              ` 0;
      font-size: `,
              `;
      border-bottom: 1px solid rgba(229, 230, 235, 100%);
      `,
              `

      .left {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-icon {
          font-size: `,
              `;
        }

        .header-text {
          margin-left: `,
              `;
        }
      }

      .right {
        display: flex;
        align-items: center;

        .header-icon {
          margin-left: `,
              `;
          font-size: `,
              `;
        }
      }
    }

    &-content {
      box-sizing: border-box;
      padding: 0 `,
              `;
      overflow: hidden;
      line-height: 30px;
      transition: max-height 0.2s;
      `,
              `
    }
  }
`,
            ])),
          Dd,
          lt,
          Pd,
          function (t) {
            var n = t.disabled;
            return Fd(n);
          },
          ei,
          lt,
          lt,
          ei,
          lt,
          function (t) {
            var n = t.itemHeight;
            return zd(n);
          }
        ),
        Od = fn(54014);
      function Md(t) {
        var n = t.headerAlign,
          i = t.header,
          a = t.extra,
          d = t.headerHeight,
          h = new Map([
            ['left', f],
            ['right', o],
            ['hide', u],
          ]);
        function f() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)('div', {
                className: 'left',
                children: [
                  (0, e.jsx)('div', {
                    className: 'header-icon',
                    children: d === 0 ? (0, e.jsx)(Ot.Z, {}) : (0, e.jsx)(Gn.Z, {}),
                  }),
                  (0, e.jsx)('div', { className: 'header-text', children: i }),
                ],
              }),
              a && (0, e.jsx)('div', { className: 'right', children: a }),
            ],
          });
        }
        function o() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)('div', {
                className: 'left',
                children: (0, e.jsx)('div', { className: 'header-text', children: i }),
              }),
              (0, e.jsxs)('div', {
                className: 'right',
                children: [
                  a,
                  (0, e.jsx)('div', {
                    className: 'header-icon',
                    children: d === 0 ? (0, e.jsx)(Od.Z, {}) : (0, e.jsx)(Gn.Z, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function u() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)('div', {
                className: 'left',
                children: (0, e.jsx)('div', { className: 'header-text', children: i }),
              }),
              (0, e.jsx)('div', { className: 'right', children: a }),
            ],
          });
        }
        var c = function () {
          return h.get(n)();
        };
        return (0, e.jsx)(r.Fragment, { children: c() });
      }
      var Rd = function (n) {
          var i = (0, r.useState)(n),
            a = H()(i, 2),
            d = a[0],
            h = a[1],
            f = (0, r.useRef)(),
            o = (0, r.useCallback)(function (u, c) {
              (f.current = c), h(u);
            }, []);
          return (
            (0, r.useEffect)(
              function () {
                f.current && f.current(d);
              },
              [d]
            ),
            [d, o]
          );
        },
        Id = Rd,
        Ld = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.header,
            f = n.disabled,
            o = f === void 0 ? !1 : f,
            u = n.listKey,
            c = n.extra,
            j = (0, r.useState)(0),
            v = H()(j, 2),
            y = v[0],
            _ = v[1],
            x = Id(!1),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useContext)(xn),
            F = E.prefixCls,
            z = hn(F, d, 'concis-collapse-item'),
            O = (0, r.useContext)(Go),
            W = O.activeKeyList,
            A = O.setActiveKeyList,
            I = O.accordion,
            X = O.headerAlign,
            M = O.lazyLoad,
            Y = O.toggleCallback;
          (0, r.useEffect)(
            function () {
              if (W.indexOf(Number(u)) === -1) _(0);
              else {
                var R, q;
                !(
                  (R = document.querySelector('.concis-collapse-item-content')) === null ||
                  R === void 0
                ) &&
                  R.scrollHeight &&
                  _(
                    ((q = document.querySelector('.concis-collapse-item-content')) === null ||
                    q === void 0
                      ? void 0
                      : q.scrollHeight) + 30
                  );
              }
            },
            [W]
          );
          var Q = function (q) {
              var V;
              (q =
                ((V = document.querySelector('.concis-collapse-item-content')) === null ||
                V === void 0
                  ? void 0
                  : V.scrollHeight) + 30),
                I
                  ? (A([Number(u)]), Y && Y([Number(u)]))
                  : A(function (nn) {
                      return (
                        Y && Y(kn()([].concat(kn()(nn), [Number(u)]).sort())),
                        kn()([].concat(kn()(nn), [Number(u)]).sort())
                      );
                    }),
                _(q);
            },
            Z = function () {
              if (!o) {
                var q = y;
                q === 0
                  ? (M && !p && P(!0), Q(q))
                  : ((q = 0),
                    A(function (V) {
                      return (
                        V.splice(
                          V.findIndex(function (nn) {
                            return String(nn) === String(u);
                          }),
                          1
                        ),
                        kn()(V.sort())
                      );
                    }),
                    _(q));
              }
            },
            J = (0, r.useMemo)(
              function () {
                return (0, e.jsx)('div', {
                  className: 'concis-collapse-item-header',
                  onClick: Z,
                  children: (0, e.jsx)(Md, {
                    headerAlign: X,
                    headerHeight: y,
                    header: h,
                    extra: c,
                  }),
                });
              },
              [X, y, h, c, o]
            );
          return (0, e.jsx)(Ed, {
            disabled: o,
            itemHeight: y,
            children: (0, e.jsxs)('div', {
              className: z,
              ref: i,
              children: [
                J,
                (0, e.jsx)('div', {
                  className: 'concis-collapse-item-content',
                  children: M ? p && a : a,
                }),
              ],
            }),
          });
        },
        Bd = (0, r.forwardRef)(Ld),
        ti,
        ri,
        oi,
        ii,
        ai,
        ci = '40px',
        li = '20px',
        Ad = S.concisFontSm,
        si = S.concisRadiusLg;
      function Zd(t, n) {
        return t != null && t.size
          ? (0, cn.iv)(
              ti ||
                (ti = an()([
                  `
      width: `,
                  `px;
      height: `,
                  `px;
      font-size: `,
                  `px;
    `,
                ])),
              t.size,
              t.size,
              t.size / 3
            )
          : n != null && n.size
          ? (0, cn.iv)(
              ri ||
                (ri = an()([
                  `
      width: `,
                  `px;
      height: `,
                  `px;
      font-size: `,
                  `px;
    `,
                ])),
              n.size,
              n.size,
              n.size / 3
            )
          : (0, cn.iv)(
              oi ||
                (oi = an()([
                  `
    width: `,
                  `;
    height: `,
                  `;
    font-size: `,
                  `;
  `,
                ])),
              ci,
              ci,
              Ad
            );
      }
      function Hd(t) {
        return (0, cn.iv)(
          ii ||
            (ii = an()([
              `
    border-radius: `,
              `;
  `,
            ])),
          t && t === 'square' ? '5px' : si
        );
      }
      var Wd = cn.ZP.span(
          ai ||
            (ai = an()([
              `
  .concis-avatar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    `,
              `
    `,
              `
    overflow: hidden;
    color: #fff;
    background-color: #c9cdd4;

    img {
      width: 100%;
      height: 100%;
    }

    .button-dialog {
      position: absolute;
      right: -2px;
      bottom: `,
              `;
      display: flex;
      align-items: center;
      justify-content: center;
      width: `,
              `;
      height: `,
              `;
      background-color: #fff;
      border-radius: `,
              `;
      cursor: pointer;
      transition: 0.2s linear;

      &:hover {
        background-color: #e4e6ed;
      }
    }

    .dialog {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: rgba(94, 91, 91, 0%);
      cursor: pointer;
      transition: 0.2s linear;

      .icon {
        opacity: 0;
        transition: 0.2s linear;
      }

      &:hover {
        background-color: rgba(94, 91, 91, 70%);

        .icon {
          opacity: 0.8;
        }
      }
    }
  }
`,
            ])),
          function (t) {
            var n = t.groupProps,
              i = t.props;
            return Zd(n, i);
          },
          function (t) {
            var n = t.props;
            return Hd(n.shape);
          },
          function (t) {
            return t.shape === 'square' ? '-2px' : '2px';
          },
          li,
          li,
          si
        ),
        di,
        Yd = cn.ZP.div(
          di ||
            (di = an()([
              `
  .concis-avatar-group {
    display: flex;
  }
`,
            ]))
        ),
        ui = (0, r.createContext)({}),
        $d = function (n, i) {
          var a = n.children,
            d = n.className,
            h = (0, r.useContext)(xn),
            f = h.prefixCls,
            o = hn(f, d, 'concis-avatar-group'),
            u = n;
          return (0, e.jsx)(Yd, {
            children: (0, e.jsx)(ui.Provider, {
              value: u,
              children: (0, e.jsx)('div', { className: o, ref: i, children: a }),
            }),
          });
        },
        Xd = (0, r.forwardRef)($d),
        Vd = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = h === void 0 ? {} : h,
            o = n.size,
            u = o === void 0 ? 40 : o,
            c = n.autoFixFontSize,
            j = c === void 0 ? !0 : c,
            v = n.triggerType,
            y = v === void 0 ? 'button' : v,
            _ = n.triggerIcon,
            x = n.triggerClick,
            l = (0, r.useContext)(ui),
            p = (0, r.useRef)(null),
            P = (0, r.useContext)(xn),
            E = P.prefixCls,
            F = hn(E, d, 'concis-avatar');
          (0, r.useEffect)(function () {
            z();
          }, []);
          var z = function () {
              if (j && p.current) {
                var A = p.current.clientWidth,
                  I = l.size || u || 40;
                A - I > 0 &&
                  (p.current.style.transform = 'scale('.concat(1 - (A - I + 5) / 100, ')'));
              }
            },
            O = function () {
              x && x();
            };
          return (0, e.jsx)(Wd, {
            props: n,
            groupProps: l,
            children: (0, e.jsxs)('div', {
              className: F,
              style: tn()(tn()({}, l.groupStyle), f),
              ref: i,
              children: [
                a && a.type === 'img'
                  ? a
                  : (0, e.jsx)('div', { ref: p, className: 'text-ref', children: a }),
                y === 'button' &&
                  _ &&
                  (0, e.jsx)('div', { className: 'button-dialog', onClick: O, children: _ }),
                y === 'mask' &&
                  _ &&
                  (0, e.jsx)('div', {
                    className: 'dialog',
                    children: (0, e.jsx)('div', { className: 'icon', onClick: O, children: _ }),
                  }),
              ],
            }),
          });
        },
        Jd = (0, r.forwardRef)(Vd),
        fi,
        hi = 'absolute',
        pi = 'relative',
        vi = 'translate(50%, -50%)',
        st = '#ffffff',
        Gd = '#f53f3f',
        Ud = S.concisFontSm,
        gi = S.concisRadiusLg,
        mi = S.concisRadiusMd;
      function Zt(t) {
        return (t == null ? void 0 : t.globalColor) || Gd;
      }
      var Kd = cn.ZP.span(
          fi ||
            (fi = an()([
              `
  .concis-badge {
    position: `,
              `;
    display: inline-block;

    &-count,
    &-text {
      position: `,
              `;
      top: 2px;
      right: 2px;
      z-index: 3;
      color: `,
              `;
      font-size: `,
              `;
      background-color: `,
              `;
      border: 2px solid `,
              `;
      transform: `,
              `;
    }

    &-count {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      padding: 0 6px;
      font-weight: 500;
      border-radius: `,
              `;
    }

    &-text {
      padding: 2px 6px;
      border-radius: `,
              `;
    }

    &-dot {
      position: `,
              `;
      z-index: 3;
      width: 6px;
      height: 6px;
      background-color: `,
              `;
      border: 2px solid `,
              `;
      border-radius: `,
              `;
      transform: `,
              `;
    }
  }

  .concis-no-child-badge {
    position: `,
              `;
    display: inline-block;
    min-width: 20px;
    height: 20px;
    color: `,
              `;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    background-color: `,
              `;
    border-radius: `,
              `;
  }
`,
            ])),
          pi,
          hi,
          st,
          Ud,
          function (t) {
            return Zt(t);
          },
          st,
          vi,
          gi,
          mi,
          hi,
          function (t) {
            return Zt(t);
          },
          st,
          gi,
          vi,
          pi,
          st,
          function (t) {
            return Zt(t);
          },
          mi
        ),
        Qd = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = h === void 0 ? {} : h,
            o = n.count,
            u = n.maxCount,
            c = u === void 0 ? 99 : u,
            j = n.dotStyle,
            v = j === void 0 ? {} : j,
            y = n.dot,
            _ = n.offset,
            x = _ === void 0 ? [2, 2] : _,
            l = n.text,
            p = (0, r.useContext)(xn),
            P = p.globalColor,
            E = p.prefixCls,
            F = hn(E, d, a ? 'concis-badge' : 'concis-no-child-badge'),
            z = (0, r.useMemo)(
              function () {
                if (o) return c && o > c ? ''.concat(c, '+') : o;
              },
              [o, c]
            ),
            O = (0, r.useMemo)(
              function () {
                return a
                  ? String(z).length > 1
                    ? { borderRadius: '20px' }
                    : { borderRadius: '50%' }
                  : String(z).length === 1
                  ? { padding: '' }
                  : { padding: '0 6px' };
              },
              [a, o, c]
            );
          return (0, e.jsx)(Kd, {
            globalColor: P,
            children: a
              ? (0, e.jsxs)('div', {
                  className: F,
                  ref: i,
                  style: f,
                  children: [
                    a,
                    y
                      ? (0, e.jsx)('span', {
                          className: 'concis-badge-dot',
                          style: tn()(
                            tn()({}, v),
                            {},
                            { right: ''.concat(x[0], 'px'), top: ''.concat(x[1], 'px') }
                          ),
                        })
                      : l
                      ? (0, e.jsx)('span', { className: 'concis-badge-text', children: l })
                      : (0, e.jsx)('span', {
                          className: 'concis-badge-count',
                          style: tn()(tn()({}, v), O),
                          children: z,
                        }),
                  ],
                })
              : (0, e.jsx)('div', {
                  className: F,
                  style: tn()(tn()(tn()({}, f), v), O),
                  ref: i,
                  children: z,
                }),
          });
        },
        qd = (0, r.forwardRef)(Qd),
        nu = fn(4552),
        xi,
        bi;
      function eu(t) {
        var n = { default: '12px 20px', small: '8px 20px', large: '16px 20px' };
        return (0, cn.iv)(
          xi ||
            (xi = an()([
              `
    padding: `,
              `;
  `,
            ])),
          n[t]
        );
      }
      var tu = cn.ZP.div(
          bi ||
            (bi = an()([
              `
  .concis-list,
  .concis-dark-list {
    border: 1px solid rgb(229, 230, 235);

    .list-header {
      `,
              `
    }

    .victurl-list-content {
      position: relative;
      overflow-y: auto;

      .victurl-relly-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }

  .concis-dark-list {
    color: #8e8e8e;
    border: 1px solid #484849;

    .list-header {
      color: #c6c6c6;
    }

    .concis-list-item {
      border-top: 1px solid #484849;
    }
  }
`,
            ])),
          function (t) {
            var n = t.size;
            return eu(n);
          }
        ),
        yi,
        ki;
      function ru(t) {
        var n = { default: '12px 20px', small: '8px 20px', large: '16px 20px' };
        return (0, cn.iv)(
          yi ||
            (yi = an()([
              `
    padding: `,
              `;
  `,
            ])),
          n[t]
        );
      }
      var ou = cn.ZP.div(
          ki ||
            (ki = an()([
              `
  .concis-list-item {
    border-top: 1px solid rgb(229, 230, 235);
    `,
              `
  }
`,
            ])),
          function (t) {
            var n = t.size;
            return ru(n);
          }
        ),
        iu = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = h === void 0 ? {} : h,
            o = (0, r.useContext)(xn),
            u = o.prefixCls,
            c = hn(u, d, 'concis-list-item'),
            j = (0, r.useContext)(Ci),
            v = j.size,
            y = (0, r.useMemo)(
              function () {
                var _ = f;
                switch (v) {
                  case 'default':
                    _.padding = '13px 20px';
                    break;
                  case 'small':
                    _.padding = '9px 20px';
                    break;
                  case 'large':
                    _.padding = '17px 20px';
                    break;
                  default:
                    _.padding = '13px 20px';
                }
                return _;
              },
              [v]
            );
          return (0, e.jsx)(ou, {
            size: v,
            children: (0, e.jsx)('div', { className: c, style: y, ref: i, children: a }),
          });
        },
        au = (0, r.forwardRef)(iu),
        Ci = (0, r.createContext)({}),
        cu = function (n, i) {
          var a = n.style,
            d = a === void 0 ? {} : a,
            h = n.className,
            f = n.dataSource,
            o = n.render,
            u = n.header,
            c = n.size,
            j = c === void 0 ? 'default' : c,
            v = n.lazyLoad,
            y = v === void 0 ? !1 : v,
            _ = n.defaultShowNum,
            x = _ === void 0 ? 5 : _,
            l = n.virtualListProps,
            p = n.virtualShowNum,
            P = p === void 0 ? 5 : p,
            E = n.lazyScrollToBottom,
            F = { size: j },
            z = (0, r.useState)(f ? kn()(f) : []),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)(0),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useRef)(0),
            Z = (0, r.useRef)(null),
            J = (0, r.useRef)(null),
            R = (0, r.useContext)(xn),
            q = R.prefixCls,
            V = R.darkTheme,
            nn = hn(q, h, 'concis-'.concat(V ? 'dark-' : '', 'list'));
          (0, r.useEffect)(
            function () {
              if (y && x)
                A(function (s) {
                  return (s = f.slice(0, x)), kn()(s);
                });
              else if (l) {
                var T,
                  m =
                    (T = document.querySelector('.concis-list-item')) === null || T === void 0
                      ? void 0
                      : T.clientHeight;
                switch (j) {
                  case 'default':
                    m += 26;
                    break;
                  case 'small':
                    m += 18;
                    break;
                  case 'large':
                    m += 34;
                    break;
                  default:
                    m += 26;
                }
                (Q.current = m),
                  A(function (s) {
                    return (s = f.slice(0, P + 2)), kn()(s);
                  });
              } else A(f);
            },
            [f]
          );
          var ln = (0, r.useMemo)(
              function () {
                var T = {};
                return y && x && ((T.height = '400px'), (T.overflow = 'scroll')), T;
              },
              [y, x]
            ),
            G = function () {
              var m = Z.current,
                s = m.scrollHeight,
                N = m.clientHeight,
                C = m.scrollTop,
                D = s - N - C;
              D <= 10
                ? (E && E(D, !0),
                  setTimeout(function () {
                    A(function (w) {
                      return (w = f.slice(0, w.length + x)), kn()(w);
                    });
                  }, 500))
                : E && E(D, !1);
            },
            B = function () {
              var m = Math.floor(J.current.scrollTop / Q.current);
              Y(J.current.scrollTop),
                A(function (s) {
                  return (s = f.slice(m, m + P + 2)), kn()(s);
                });
            };
          return (0, e.jsx)(tu, {
            size: j,
            children: (0, e.jsx)(Ci.Provider, {
              value: F,
              children: (0, e.jsxs)('div', {
                className: nn,
                style: d,
                ref: i,
                children: [
                  (0, e.jsx)('div', { className: 'list-header', children: u }),
                  l
                    ? (0, e.jsx)('div', {
                        className: 'victurl-list-content',
                        style: { height: ''.concat(P * Q.current, 'px') },
                        ref: J,
                        onScroll: B,
                        children: (0, e.jsx)('div', {
                          className: 'victurl-relly-content',
                          style: {
                            height: ''.concat(f.length * Q.current - M, 'px'),
                            transform: 'translate(0, '.concat(M, 'px)'),
                          },
                          children: Array.isArray(W) && W.length !== 0 && W.map(o),
                        }),
                      })
                    : (0, e.jsx)('div', {
                        className: 'list-content',
                        style: ln,
                        ref: Z,
                        onScroll: G,
                        children: y
                          ? Array.isArray(W) && W.length !== 0 && W.map(o)
                          : (0, e.jsx)(nu.Z, {
                              children: Array.isArray(W) && W.length !== 0 && W.map(o),
                            }),
                      }),
                ],
              }),
            }),
          });
        },
        Ht = r.forwardRef(cu);
      (Ht.Item = au), (Ht.displayName = 'List');
      var Wt = Ht,
        wi,
        Qn = '50%',
        qn = '-50%',
        lu = '0deg',
        su = '-360deg',
        Si = '20px',
        ji = '10px',
        du = S.concisFontMd,
        uu = S.concisTransformXs,
        Ni = S.concisRadiusLg,
        fu = cn.ZP.span(
          wi ||
            (wi = an()([
              `
  .concis-loading {
    position: absolute;
    top: `,
              `;
    left: `,
              `;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: `,
              `;
    transform: translate(`,
              ', ',
              `);

    .loading-container {
      position: absolute;
      top: `,
              `;
      left: `,
              `;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: `,
              `;
      transform: translate(
        `,
              `,
        `,
              `
      );

      svg {
        display: inline-block;
        color: inherit;
        font-style: normal;
        vertical-align: -2px;
        transform-origin: center center;
        animation: arco-loading-circle 1s linear infinite;
      }
      @keyframes arco-loading-circle {
        from {
          transform: rotate(`,
              `);
        }

        to {
          transform: rotate(`,
              `);
        }
      }
    }

    .text {
      display: inline-block;
      width: 200px;
      margin-top: 40px;
      font-size: `,
              `;
      text-align: center;
    }
  }

  .concis-loading-dialog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: `,
              `;
    opacity: 0.7;
  }

  .concis-dot-loading {
    position: absolute;
    top: `,
              `;
    left: `,
              `;
    z-index: 99999;
    display: flex;
    align-items: flex-end;
    height: 30px;
    color: `,
              `;
    transform: translate(`,
              ', ',
              `);

    .dot-active {
      width: `,
              `;
      height: `,
              `;
      margin: 0 7px;
      background-color: `,
              `;
      border-radius: `,
              `;
      transition: 0.4s linear;
    }

    .dot {
      width: `,
              `;
      height: `,
              `;
      margin: 0 7px;
      background-color: `,
              `;
      border-radius: `,
              `;
      opacity: 0.5;
      transition: 0.4s linear;
    }
  }

  .concis-strip-loading {
    position: absolute;
    top: `,
              `;
    left: `,
              `;
    z-index: 99999;
    display: flex;
    align-items: center;
    height: 60px;
    color: `,
              `;
    transform: translate(`,
              ', ',
              `);

    .strip-list {
      --map-time: calc(var(--lineIndex) * 100ms);

      width: 8px;
      height: 50px;
      margin: 0 `,
              `;
      background-color: `,
              `;
      border-radius: 10px;
      animation: concis-strip-loading 0.6s ease-in-out var(--map-time) infinite alternate;
    }
    @keyframes concis-strip-loading {
      0% {
        height: 15px;
      }

      100% {
        height: 50px;
      }
    }
  }
`,
            ])),
          Qn,
          Qn,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          qn,
          qn,
          Qn,
          Qn,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          qn,
          qn,
          lu,
          su,
          du,
          function (t) {
            var n = t.darkTheme;
            return n ? '#2b2b2b' : '#ffffff';
          },
          Qn,
          Qn,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          qn,
          qn,
          Si,
          Si,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Ni,
          ji,
          ji,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          Ni,
          Qn,
          Qn,
          function (t) {
            var n = t.globalColor;
            return n;
          },
          qn,
          qn,
          uu,
          function (t) {
            var n = t.globalColor;
            return n;
          }
        ),
        Jp = {
          'concis-loading': 'TYa7wvgOoLM0MfPsuqRl',
          'loading-container': 'ufDFxzP4Yce889dx8wCs',
          'arco-loading-circle': 'NKxhbAprko8OAEBjEztZ',
          text: 'Dn9wNAqcquQoD9YvQPBD',
          'concis-loading-dialog': 'SQTKVsIY9UmcBxepu0wO',
          'concis-dot-loading': 'PZPOqVO4DOIbUFthgYGb',
          'dot-active': 'PD1vMDrM4IXrFrHIpAU_',
          dot: 'fu7JsUsc1EqcCU9qa18t',
          'concis-strip-loading': 'Wo1trehZGY4r31X1n_zF',
          'strip-list': 'hrp0gFD3qQuWTkm_SJN4',
        },
        hu = function (n, i) {
          var a = n.type,
            d = a === void 0 ? 'default' : a,
            h = n.className,
            f = n.mask,
            o = f === void 0 ? !1 : f,
            u = n.loadingText,
            c = n.icon,
            j = n.width,
            v = j === void 0 ? '2em' : j,
            y = n.height,
            _ = y === void 0 ? '2em' : y,
            x = n.style,
            l = x === void 0 ? {} : x,
            p = (0, r.useState)(0),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useContext)(xn),
            O = z.globalColor,
            W = z.prefixCls,
            A = z.darkTheme;
          function I() {
            switch (d) {
              case 'default':
                return 'concis-loading';
              case 'dot':
                return 'concis-dot-loading';
              case 'strip':
                return 'concis-strip-loading';
              default:
                return 'concis-loading';
            }
          }
          var X = (0, r.useMemo)(
            function () {
              return hn(W, h, I());
            },
            [d]
          );
          (0, r.useEffect)(
            function () {
              d === 'dot' &&
                setTimeout(function () {
                  F(function (Q) {
                    return Q === 2 ? 0 : ++Q;
                  });
                }, 400);
            },
            [E]
          );
          var M = (0, r.useMemo)(
              function () {
                var Q = l;
                return (Q.width = v), (Q.height = _), Q;
              },
              [v, _, l]
            ),
            Y = (0, r.useMemo)(
              function () {
                if (d === 'default')
                  return (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)('div', {
                        className: 'loading-container',
                        style: M,
                        children:
                          c ||
                          (0, e.jsx)('svg', {
                            fill: 'none',
                            stroke: 'currentColor',
                            strokeWidth: '4',
                            width: v,
                            height: _,
                            viewBox: '0 0 48 48',
                            'aria-hidden': 'true',
                            focusable: 'false',
                            children: (0, e.jsx)('path', {
                              d: 'M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6',
                            }),
                          }),
                      }),
                      u && (0, e.jsx)('div', { className: 'text', children: u }),
                    ],
                  });
                if (d === 'dot')
                  return (0, e.jsx)(e.Fragment, {
                    children: new Array(3).fill('').map(function (Q, Z) {
                      return (0,
                      e.jsx)('div', { className: E === Z ? 'dot-active' : 'dot', children: Q }, Z);
                    }),
                  });
                if (d === 'strip')
                  return (0, e.jsx)(e.Fragment, {
                    children: new Array(6).fill('').map(function (Q, Z) {
                      return (0,
                      e.jsx)('div', { className: 'strip-list', style: { '--lineIndex': Z } }, Z);
                    }),
                  });
              },
              [d, E, O]
            );
          return (0, e.jsxs)(fu, {
            globalColor: Bn(zn() === 'dark' || A, O),
            darkTheme: A,
            children: [
              o && (0, e.jsx)('div', { className: 'concis-loading-dialog' }),
              (0, e.jsx)('div', {
                className: X,
                style: Object.assign(d === 'default' ? M : {}),
                ref: i,
                children: Y,
              }),
            ],
          });
        },
        _i = (0, r.forwardRef)(hu),
        Yt = fn(55653),
        be = fn(57604),
        Ze = fn(86613),
        He = fn(427),
        Ti,
        pu = S.concisTransformLg,
        vu = S.concisFontMd,
        gu = S.concisTransformSm,
        mu = S.concisRadiusSm,
        xu = S.concisDarkFontColor,
        bu = `
  .concis-dark-message-container {
    color: `.concat(
          xu,
          `;
    border: 1px solid transparent;
  }

  .concis-dark-message-container.concis-info-message,
  .concis-dark-message-container.concis-normal-message,
  .concis-dark-message-container.concis-loading-message {
    background-color: #253757;
  }

  .concis-dark-message-container.concis-success-message {
    background-color: #22482c;
  }

  .concis-dark-message-container.concis-warning-message {
    background-color: #573d25;
  }

  .concis-dark-message-container.concis-error-message {
    background-color: #553332;
  }
`
        ),
        yu = cn.ZP.div(
          Ti ||
            (Ti = an()([
              `
  .concis-message-container,
  .concis-dark-message-container {
    position: fixed;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 `,
              `;
    color: #000;
    font-size: `,
              `;
    background-color: #fff;
    border: 1px solid rgb(240, 240, 240);
    border-radius: `,
              `;
    transform: translate(-50%, 0);
    opacity: 1;
    animation: concis-show-message 0.3s;

    .toast-content {
      margin: 0 `,
              `;
    }
  }
  @keyframes concis-show-message {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  `,
              `
`,
            ])),
          pu,
          vu,
          mu,
          gu,
          bu
        ),
        Yn,
        We = 0,
        Ye = 0,
        Di = '#325dff',
        ku = '#f53f3f',
        Cu = '#00b42a',
        wu = '#ff7d00',
        $e = '16px';
      function ye(t, n) {
        var i = {},
          a = 3e3,
          d,
          h = 'top',
          f = !1,
          o = !1;
        ve()(n) === 'object'
          ? ((i = n.style || {}),
            (a = n.duration || 3e3),
            (d = n.content),
            (h = n.position ? n.position : 'top'),
            (f = n.clearable ? n.clearable : !1),
            (o = n.dark ? n.dark : !1))
          : typeof n == 'string' && (d = n);
        var u = document.createElement('div'),
          c = String(Math.floor(Math.random() * 1e3));
        u.setAttribute('class', ''.concat(h, '-').concat(c)),
          Yn ||
            ((Yn = document.createElement('div')),
            Yn.setAttribute('class', 'all-container'),
            document.body.appendChild(Yn)),
          Yn.appendChild(u),
          setTimeout(function () {
            var j;
            if (
              Array.prototype.slice
                .call((j = Yn) === null || j === void 0 ? void 0 : j.childNodes)
                .includes(u)
            ) {
              var v, y;
              Pi(
                Array.prototype.slice.call(
                  (v = Yn) === null || v === void 0 ? void 0 : v.childNodes
                ),
                h
              ),
                (y = Yn) === null || y === void 0 || y.removeChild(u),
                h === 'top' ? We-- : Ye--;
            }
          }, a + 200),
          Yt.render(
            (0, e.jsx)(ne, {
              style: i,
              content: d,
              type: t,
              duration: a,
              position: h,
              clearable: f,
              messageBoxId: c,
              dark: o,
            }),
            u
          );
      }
      function Su(t, n) {
        var i = document.querySelector('.all-container'),
          a = Array.prototype.slice.call(i == null ? void 0 : i.childNodes);
        for (var d in a)
          if (a[d].getAttribute('class') === ''.concat(n, '-').concat(t)) {
            var h = a[d];
            i == null || i.removeChild(h), n === 'top' ? We-- : Ye--, Pi(a.slice(Number(d)), n);
          }
      }
      function Pi(t, n) {
        for (var i in t) {
          var a,
            d = t[i].childNodes[0];
          (a = t[i].getAttribute('class')) !== null &&
            a !== void 0 &&
            a.startsWith(n) &&
            (d.style[n] = ''.concat(Number(d.style[n].split('p')[0]) - 70, 'px'));
        }
      }
      var ne = function (n) {
        var i = n.style,
          a = n.content,
          d = n.type,
          h = n.duration,
          f = n.position,
          o = n.clearable,
          u = n.messageBoxId,
          c = n.dark,
          j = n.className,
          v = (0, r.useState)(1),
          y = H()(v, 2),
          _ = y[0],
          x = y[1],
          l = (0, r.useRef)(null),
          p = (0, r.useContext)(xn),
          P = p.prefixCls,
          E = hn(
            P,
            j,
            c ? 'concis-dark-message-container' : 'concis-message-container',
            'concis-'.concat(d, '-message')
          );
        (0, r.useEffect)(function () {
          f === 'top' ? We++ : Ye++,
            setTimeout(function () {
              (l.current.style.transition = '0.2s linear'), (l.current.style.animation = 'none');
            }, 500),
            setTimeout(function () {
              x(0);
            }, h);
        }, []),
          (0, r.useEffect)(
            function () {
              var O = f || 'top';
              (l == null ? void 0 : l.current).style[O] = ''.concat(
                (O === 'top' ? We : Ye) * 70,
                'px'
              );
            },
            [We, Ye]
          );
        var F = (0, r.useMemo)(
            function () {
              if (d === 'info') return (0, e.jsx)(be.Z, { style: { color: Di, fontSize: $e } });
              if (d === 'error') return (0, e.jsx)(Ze.Z, { style: { color: ku, fontSize: $e } });
              if (d === 'normal') return (0, e.jsx)(e.Fragment, {});
              if (d === 'success') return (0, e.jsx)(He.Z, { style: { color: Cu, fontSize: $e } });
              if (d === 'warning') return (0, e.jsx)(be.Z, { style: { color: wu, fontSize: $e } });
              if (d === 'loading') return (0, e.jsx)(Ke.Z, { style: { color: Di, fontSize: $e } });
            },
            [d]
          ),
          z = function () {
            Su(u, f);
          };
        return (0, e.jsx)(yu, {
          children: (0, e.jsxs)('div', {
            className: E,
            style: tn()({ opacity: _ }, i),
            ref: l,
            children: [
              F,
              (0, e.jsx)('span', { className: 'toast-content', children: a }),
              o && (0, e.jsx)(An.Z, { onClick: z }),
            ],
          }),
        });
      };
      (ne.info = function (t) {
        return ye('info', t);
      }),
        (ne.success = function (t) {
          return ye('success', t);
        }),
        (ne.error = function (t) {
          return ye('error', t);
        }),
        (ne.normal = function (t) {
          return ye('normal', t);
        }),
        (ne.warning = function (t) {
          return ye('warning', t);
        }),
        (ne.loading = function (t) {
          return ye('loading', t);
        });
      var ju = ne,
        Fi,
        zi,
        Ei,
        Nu = '300px',
        _u = '220px',
        Tu = S.concisDarkFontColor,
        $t = S.concisTransformLg,
        Du = S.concisFontMd,
        Pu = S.concisRadiusSm,
        Fu = S.concisFontLg,
        zu = S.concisFontXs,
        Eu = S.concisTransformSm,
        Ou = `
  .concis-dark-notifica-container {
    color: `.concat(
          Tu,
          `;
    border: 1px solid transparent;
  }

  .concis-dark-notifica-container.concis-info-notifica,
  .concis-dark-notifica-container.concis-normal-notifica,
  .concis-dark-notifica-container.concis-loading-notifica {
    background-color: #253757;
  }

  .concis-dark-notifica-container.concis-success-notifica {
    background-color: #22482c;
  }

  .concis-dark-notifica-container.concis-warning-notifica {
    background-color: #573d25;
  }

  .concis-dark-notifica-container.concis-error-notifica {
    background-color: #553332;
  }
`
        );
      function Mu(t, n) {
        return n != null && n.includes('Left')
          ? (0, cn.iv)(
              Fi ||
                (Fi = an()([
                  `
      opacity: `,
                  `;
      left: 20px;
    `,
                ])),
              t
            )
          : (0, cn.iv)(
              zi ||
                (zi = an()([
                  `
    opacity: `,
                  `;
    right: 20px;
  `,
                ])),
              t
            );
      }
      var Ru = cn.ZP.div(
          Ei ||
            (Ei = an()([
              `
  .concis-notifica-container,
  .concis-dark-notifica-container {
    position: fixed;
    z-index: 99999;
    min-width: `,
              `;
    min-height: 60px;
    padding: `,
              `;
    color: #000;
    font-size: `,
              `;
    background-color: #fff;
    border: 1px solid rgb(221, 221, 221);
    border-radius: `,
              `;
    animation: concis-show-notifica 0.3s;
    `,
              `

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-left {
        display: flex;
        align-items: center;
      }

      .title-content {
        margin-left: `,
              `;
        font-weight: 500;
        font-size: `,
              `;
      }

      .close-icon {
        position: relative;
        bottom: 15px;
        font-size: `,
              `;
      }
    }

    .notification-content {
      margin: `,
              ` 0 0 44px;
    }

    .notification-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: `,
              `;
    }
  }

  @media screen and (max-width: 400px) {
    .concis-notifica-container,
    .concis-dark-notifica-container {
      min-width: `,
              `;
    }
  }
  @keyframes concis-show-notifica {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  `,
              `
`,
            ])),
          Nu,
          $t,
          Du,
          Pu,
          function (t) {
            var n = t.opacity,
              i = t.position;
            return Mu(n, i);
          },
          $t,
          Fu,
          zu,
          Eu,
          $t,
          _u,
          Ou
        ),
        $n,
        le = 0,
        se = 0,
        de = 0,
        ue = 0,
        Oi = '#325dff',
        Iu = '#f53f3f',
        Lu = '#00b42a',
        Bu = '#ff7d00',
        Xe = '24px';
      function ke(t, n) {
        var i = {},
          a = 3e3,
          d = '',
          h = '',
          f = 'topRight',
          o = !1,
          u = !1,
          c = !1,
          j = { enter: 'OK', exit: 'Cancel' },
          v;
        ve()(n) === 'object'
          ? ((d = n.title),
            (i = n.style || {}),
            (a = n.duration || 3e3),
            (h = n.content),
            (v = n.doneCallback),
            (c = n.dark ? n.dark : !1),
            n.position ? (f = n.position) : (f = 'topRight'),
            (o = n.clearable ? n.clearable : !1),
            (u = n.showFooter ? n.showFooter : !1),
            n.footerBtnVal && (j = n.footerBtnVal))
          : typeof n == 'string' && (h = n);
        var y = document.createElement('div'),
          _ = String(Math.floor(Math.random() * 1e3));
        y.setAttribute('class', ''.concat(f, '-').concat(_)),
          $n ||
            (($n = document.createElement('div')),
            $n.setAttribute('class', 'notification-container'),
            document.body.appendChild($n)),
          $n.appendChild(y),
          setTimeout(function () {
            var x;
            if (
              Array.prototype.slice
                .call((x = $n) === null || x === void 0 ? void 0 : x.childNodes)
                .includes(y)
            ) {
              var l, p;
              Mi(
                Array.prototype.slice.call(
                  (l = $n) === null || l === void 0 ? void 0 : l.childNodes
                ),
                f
              ),
                (p = $n) === null || p === void 0 || p.removeChild(y),
                f === 'topLeft'
                  ? le--
                  : f === 'topRight'
                  ? se--
                  : f === 'bottomLeft'
                  ? de--
                  : f === 'bottomRight' && ue--;
            }
          }, a + 200),
          Yt.render(
            (0, e.jsx)(ee, {
              title: d,
              style: i,
              content: h,
              type: t,
              duration: a,
              position: f,
              clearable: o,
              showFooter: u,
              footerBtnVal: j,
              doneCallback: v,
              messageBoxId: _,
              dark: c,
            }),
            y
          );
      }
      function Xt(t, n, i) {
        var a = document.querySelector('.notification-container'),
          d = Array.prototype.slice.call(a == null ? void 0 : a.childNodes),
          h = function () {
            if (d[f].getAttribute('class') === ''.concat(n, '-').concat(t)) {
              var u = d[f];
              (u.childNodes[0].style.opacity = 0),
                setTimeout(function () {
                  a == null || a.removeChild(u);
                }, 50),
                n === 'topLeft'
                  ? le--
                  : n === 'topRight'
                  ? se--
                  : n === 'bottomLeft'
                  ? de--
                  : n === 'bottomRight' && ue--,
                Mi(d.slice(Number(f)), n),
                i();
            }
          };
        for (var f in d) h();
      }
      function Mi(t, n) {
        var i = n.startsWith('top') ? 'top' : 'bottom';
        for (var a in t) {
          var d,
            h = t[a].childNodes[0];
          if ((d = t[a].getAttribute('class')) !== null && d !== void 0 && d.startsWith(i)) {
            var f,
              o =
                (f = document.querySelector('.concis-notifica-container')) === null || f === void 0
                  ? void 0
                  : f.clientHeight;
            h.style[i] = ''.concat(Number(h.style[i].split('p')[0]) - 30 - o, 'px');
          }
        }
      }
      var ee = function (n) {
        var i = n.style,
          a = n.className,
          d = n.title,
          h = n.content,
          f = n.type,
          o = n.duration,
          u = n.position,
          c = n.clearable,
          j = n.showFooter,
          v = n.footerBtnVal,
          y = n.doneCallback,
          _ = n.messageBoxId,
          x = n.dark,
          l = (0, r.useState)(1),
          p = H()(l, 2),
          P = p[0],
          E = p[1],
          F = (0, r.useRef)(null),
          z = (0, r.useContext)(xn),
          O = z.prefixCls,
          W = hn(
            O,
            a,
            x ? 'concis-dark-notifica-container' : 'concis-notifica-container',
            'concis-'.concat(f, '-notifica')
          );
        (0, r.useEffect)(function () {
          u === 'topLeft'
            ? le++
            : u === 'topRight'
            ? se++
            : u === 'bottomLeft'
            ? de++
            : u === 'bottomRight' && ue++,
            setTimeout(function () {
              (F.current.style.transition = '0.2s linear'), (F.current.style.animation = 'none');
            }, 500),
            setTimeout(function () {
              E(0);
            }, o);
        }, []),
          (0, r.useEffect)(
            function () {
              var Y;
              u != null && u.startsWith('top') ? (Y = 'top') : (Y = 'bottom');
              var Q = 0,
                Z;
              u === 'topLeft' && le >= 1
                ? ((Q = F.current.clientHeight * (le - 1)), (Z = le))
                : u === 'topRight' && se >= 1
                ? ((Q = F.current.clientHeight * (se - 1)), (Z = se))
                : u === 'bottomLeft' && de >= 1
                ? ((Q = F.current.clientHeight * (de - 1)), (Z = de))
                : u === 'bottomRight' &&
                  ue >= 1 &&
                  ((Q = F.current.clientHeight * (ue - 1)), (Z = ue)),
                ((F == null ? void 0 : F.current).style[Y] = ''.concat(Z * 30 + Q, 'px'));
            },
            [le, se, de, ue]
          );
        var A = (0, r.useMemo)(
            function () {
              if (f === 'info') return (0, e.jsx)(be.Z, { style: { color: Oi, fontSize: Xe } });
              if (f === 'error') return (0, e.jsx)(Ze.Z, { style: { color: Iu, fontSize: Xe } });
              if (f === 'normal') return (0, e.jsx)(e.Fragment, {});
              if (f === 'success') return (0, e.jsx)(He.Z, { style: { color: Lu, fontSize: Xe } });
              if (f === 'warning') return (0, e.jsx)(be.Z, { style: { color: Bu, fontSize: Xe } });
              if (f === 'loading') return (0, e.jsx)(Ke.Z, { style: { color: Oi, fontSize: Xe } });
            },
            [f]
          ),
          I = function () {
            Xt(_, u, function () {
              y && y(1);
            });
          },
          X = function () {
            Xt(_, u, function () {
              y && y(2);
            });
          },
          M = function () {
            Xt(_, u, function () {
              y && y(3);
            });
          };
        return (0, e.jsx)(Ru, {
          opacity: P,
          position: u,
          children: (0, e.jsxs)('div', {
            className: W,
            style: i,
            ref: F,
            children: [
              (0, e.jsxs)('div', {
                className: 'title',
                children: [
                  (0, e.jsxs)('div', {
                    className: 'title-left',
                    children: [
                      (0, e.jsx)('div', { className: 'notification-icon', children: A }),
                      (0, e.jsx)('span', { className: 'title-content', children: d }),
                    ],
                  }),
                  c && (0, e.jsx)(An.Z, { className: 'close-icon', onClick: I }),
                ],
              }),
              (0, e.jsx)('div', { className: 'notification-content', children: h }),
              j &&
                (0, e.jsxs)('div', {
                  className: 'notification-footer',
                  children: [
                    (0, e.jsx)('div', {}),
                    (0, e.jsxs)('div', {
                      children: [
                        (0, e.jsx)(Rn, {
                          type: 'text',
                          height: 30,
                          handleClick: X,
                          children: v.exit,
                        }),
                        (0, e.jsx)(Rn, {
                          type: 'primary',
                          height: 30,
                          style: { marginLeft: '15px' },
                          handleClick: M,
                          children: v.enter,
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      (ee.info = function (t) {
        return ke('info', t);
      }),
        (ee.success = function (t) {
          return ke('success', t);
        }),
        (ee.error = function (t) {
          return ke('error', t);
        }),
        (ee.normal = function (t) {
          return ke('normal', t);
        }),
        (ee.warning = function (t) {
          return ke('warning', t);
        }),
        (ee.loading = function (t) {
          return ke('loading', t);
        });
      var Au = ee,
        Ri,
        Ii,
        Li,
        Zu = S.concisRadiusLg,
        Hu = S.concisTransformLg,
        Wu = S.concisFontSm;
      function Yu(t, n, i, a, d) {
        return (0, cn.iv)(
          Ri ||
            (Ri = an()([
              `
    min-width: `,
              `px;
    height: calc(`,
              ` * 1px);
    background: `,
              `;
    cursor: `,
              `;
    opacity: `,
              `;
  `,
            ])),
          i,
          a ? 16 : 24,
          d,
          t || n ? 'not-allowed' : 'pointer',
          t || n ? 0.6 : 1
        );
      }
      function $u(t, n, i) {
        var a = n ? '12px' : '16px';
        return (0, cn.iv)(
          Ii ||
            (Ii = an()([
              `
    left: `,
              `;
    top: `,
              `;
    width: `,
              `;
    height: `,
              `;
  `,
            ])),
          t ? ''.concat(i - 16 - (n ? -2 : 4), 'px') : '4px',
          n ? '2.5px' : '4px',
          a,
          a
        );
      }
      var Xu = cn.ZP.span(
          Li ||
            (Li = an()([
              `
  .concis-switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    line-height: 24px;
    vertical-align: middle;
    border: none;
    border-radius: 12px;
    transition: 0.1s linear;
    `,
              `

    &-dot {
      position: absolute;
      background: #fff;
      border-radius: `,
              `;
      transition: 0.1s linear;
      `,
              `
    }

    &-child {
      position: absolute;
      top: 0;
      min-width: `,
              `;
      color: #fff;
      font-size: `,
              `;
      transition: 0.1s linear;
      left: `,
              `;
    }
  }
`,
            ])),
          function (t) {
            var n = t.disabled,
              i = t.loading,
              a = t.switchWidth,
              d = t.small,
              h = t.globalColor;
            return Yu(n, i, a, d, h);
          },
          Zu,
          function (t) {
            var n = t.switchStatus,
              i = t.small,
              a = t.switchWidth;
            return $u(n, i, a);
          },
          Hu,
          Wu,
          function (t) {
            var n = t.switchStatus,
              i = t.checkedChildren,
              a = t.switchWidth,
              d = t.switchChildWidth;
            return n
              ? typeof i == 'string'
                ? '4px'
                : '8px'
              : ''.concat(a - d - (typeof i == 'string' ? 6 : -2), 'px');
          }
        ),
        Vu = function (n, i) {
          var a,
            d = n.disabled,
            h = n.className,
            f = n.style,
            o = n.defaultChecked,
            u = o === void 0 ? !1 : o,
            c = n.small,
            j = n.checkedChildren,
            v = n.unCheckedChildren,
            y = n.loading,
            _ = n.handleChange,
            x = (0, r.useState)(0),
            l = H()(x, 2),
            p = l[0],
            P = l[1],
            E = (0, r.useState)(0),
            F = H()(E, 2),
            z = F[0],
            O = F[1],
            W = (0, r.useState)(u),
            A = H()(W, 2),
            I = A[0],
            X = A[1],
            M = zn(),
            Y = (0, r.useContext)(xn),
            Q = Y.globalColor,
            Z = Y.prefixCls,
            J = hn(Z, h, 'concis-switch');
          (0, r.useEffect)(
            function () {
              j && v && document.querySelector('.concis-switch-child')
                ? (O(document.querySelector('.concis-switch-child').clientWidth),
                  P(document.querySelector('.concis-switch-child').clientWidth + 30))
                : P(c ? 28 : 40);
            },
            [
              (a = document.querySelector('.concis-switch-child')) === null || a === void 0
                ? void 0
                : a.clientWidth,
              j,
              v,
            ]
          );
          var R = function () {
            d || y || (X(!I), _ && _(!I));
          };
          return (0, e.jsx)(Xu, {
            switchStatus: I,
            disabled: d,
            loading: y,
            switchWidth: p,
            small: c,
            globalColor: I ? Bn(M === 'auto', Q) : 'rgba(201,205,212,1)',
            checkedChildren: j,
            switchChildWidth: z,
            children: (0, e.jsxs)('div', {
              className: J,
              style: f,
              onClick: R,
              ref: i,
              children: [
                (0, e.jsx)('div', {
                  className: 'concis-switch-dot',
                  children: y && (0, e.jsx)(_i, { width: '1em', height: '1em' }),
                }),
                j &&
                  v &&
                  (0, e.jsx)('div', { className: 'concis-switch-child', children: I ? j : v }),
              ],
            }),
          });
        },
        Ju = (0, r.forwardRef)(Vu),
        Bi;
      function Gu(t) {
        switch (t) {
          case 'start':
            return { alignItems: 'flex-start' };
          case 'center':
            return { alignItems: 'center' };
          case 'end':
            return { alignItems: 'flex-end' };
          case 'baseline':
            return { alignItems: 'baseline' };
          default:
            return { alignItems: 'center' };
        }
      }
      function Uu(t, n) {
        var i = t === 'horizontal' ? Gu(n) : {};
        return (
          (i.display = 'flex'),
          t === 'vertical' ? (i.flexDirection = 'column') : (i.flexDirection = 'row'),
          i
        );
      }
      var Ku = cn.ZP.div(
          Bi ||
            (Bi = an()([
              `
  .concis-space {
    flex-wrap: wrap;
    `,
              `

    &-item {
      display: inline-block;
    }
  }
`,
            ])),
          function (t) {
            var n = t.direction,
              i = t.align;
            return Uu(n, i);
          }
        ),
        Qu = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = n.direction,
            o = f === void 0 ? 'horizontal' : f,
            u = n.size,
            c = u === void 0 ? 'small' : u,
            j = n.align,
            v = j === void 0 ? 'center' : j,
            y = n.wrap,
            _ = y === void 0 ? !1 : y,
            x = (0, r.useContext)(xn),
            l = x.prefixCls,
            p = hn(l, d, 'concis-space'),
            P = r.Children.toArray(a),
            E = function (O) {
              if (typeof O == 'number') return O;
              switch (O) {
                case 'mini':
                  return 4;
                case 'small':
                  return 8;
                case 'medium':
                  return 16;
                case 'large':
                  return 24;
                default:
                  return 8;
              }
            },
            F = function (O) {
              var W = P.length - 1 === O;
              if (!Array.isArray(c)) {
                var A = E(c);
                return W
                  ? {}
                  : o === 'horizontal'
                  ? { marginRight: ''.concat(A, 'px') }
                  : { marginBottom: ''.concat(A, 'px') };
              }
              var I = E(c[0]),
                X = E(c[1]);
              return _
                ? { marginRight: I, marginBottom: X }
                : W
                ? {}
                : o === 'horizontal'
                ? { marginRight: ''.concat(I, 'px') }
                : { marginBottom: ''.concat(X, 'px') };
            };
          return (0, e.jsx)(Ku, {
            direction: o,
            align: v,
            children: (0, e.jsx)('div', {
              className: p,
              style: h,
              ref: i,
              children: P.map(function (z, O) {
                return (0,
                e.jsx)(r.Fragment, { children: (0, e.jsx)('div', { className: 'concis-space-item', style: F(O), children: z }) }, O);
              }),
            }),
          });
        },
        qu = (0, r.forwardRef)(Qu),
        Ai,
        Zi,
        Hi = `linear-gradient(
  90deg,
  hsla(0, 0%, 100%, 0),
  hsla(0, 0%, 100%, 0.3),
  hsla(0, 0%, 100%, 0)
)`,
        Wi = 'rgba(224, 224, 224, 1)',
        nf = '50%',
        ef = '100%',
        tf = '14px',
        rf = '14px',
        of = '12px';
      function af(t) {
        return (0, cn.iv)(
          Ai ||
            (Ai = an()([
              `
    width: `,
              `px;
    height: `,
              `px;
  `,
            ])),
          t,
          t
        );
      }
      var cf = cn.ZP.div(
          Zi ||
            (Zi = an()([
              `
  .concis-skeleton,
  .concis-skeleton-dark {
    display: flex;
    width: 100%;
    padding: 15px;

    &-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: `,
              `;

      &-line,
      &-title {
        position: relative;
        z-index: 1;
        width: `,
              `;
        height: `,
              `;
        margin-bottom: `,
              `;
        overflow: hidden;
        background: `,
              `;
        border-radius: 10px;

        &::after {
          position: absolute;
          top: 0;
          left: -100%;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: `,
              `;
          animation: 1.2s concis-skeleton-transform linear infinite normal;
          content: '';
        }
      }

      &-title {
        width: `,
              `;
      }
    }

    &-avatar {
      position: relative;
      z-index: 1;
      overflow: hidden;
      background: `,
              `;
      border-radius: 50%;
      `,
              `

      &::after {
        position: absolute;
        top: 0;
        left: -100%;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: `,
              `;
        animation: 1.2s concis-skeleton-transform linear infinite normal;
        content: '';
      }
    }
  }

  .concis-skeleton-dark {
    &-avatar,
    &-container-title,
    &-container-line {
      background: #ffffff1f;

      &::after {
        background: linear-gradient(
          90deg,
          hsla(0deg, 0%, 100%, 0%),
          hsla(0deg, 0%, 100%, 30%),
          hsla(0deg, 0%, 100%, 0%)
        );
      }
    }
  }

  @keyframes concis-skeleton-transform {
    75% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }
`,
            ])),
          of,
          ef,
          tf,
          rf,
          Wi,
          Hi,
          nf,
          Wi,
          function (t) {
            var n = t.avatarSize;
            return af(n);
          },
          Hi
        ),
        lf = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.loading,
            f = h === void 0 ? !0 : h,
            o = n.title,
            u = n.avatar,
            c = n.row,
            j = c === void 0 ? 3 : c,
            v = n.width,
            y = v === void 0 ? [] : v,
            _ = n.size,
            x = _ === void 0 ? 40 : _,
            l = (0, r.useContext)(xn),
            p = l.prefixCls,
            P = l.darkTheme,
            E = P ? 'concis-skeleton-dark' : 'concis-skeleton',
            F = hn(p, a, E),
            z = (0, r.useCallback)(
              function (O) {
                if (y && y.length) {
                  if (typeof y[O] == 'string') return { width: y[O] };
                  if (typeof y[O] == 'number') return { width: ''.concat(y[O], 'px') };
                }
                return {};
              },
              [y]
            );
          return (0, e.jsx)(cf, {
            avatarSize: x,
            children: f
              ? (0, e.jsxs)('div', {
                  className: F,
                  style: d,
                  ref: i,
                  children: [
                    u && (0, e.jsx)('div', { className: ''.concat(E, '-avatar') }),
                    (0, e.jsxs)('div', {
                      className: ''.concat(E, '-container'),
                      children: [
                        o && (0, e.jsx)('div', { className: ''.concat(E, '-container-title') }),
                        new Array(j).fill('').map(function (O, W) {
                          return (0,
                          e.jsx)('div', { className: ''.concat(E, '-container-line'), style: z(W) }, W);
                        }),
                      ],
                    }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {}),
          });
        },
        sf = (0, r.forwardRef)(lf),
        df = fn(97207),
        Vt = fn.n(df),
        uf = fn(34382),
        Yi,
        $i = '#e5e6eb',
        Xi = '#484849',
        ff = '30%',
        hf = '50%',
        pf = S.concisRadiusXs,
        Jt = S.concisTransformLg,
        Vi = S.concisTransformSm,
        vf = S.concisFontLg,
        gf = S.concisFontSm,
        mf = S.concisFontMd,
        xf = `
  .concis-dark-modal {
    &-dialog {
      background: rgba(23, 23, 26, 60%);
    }

    &-content {
      color: #c4c4c5;
      background: #2a2a2b;

      &-header {
        .concis-title {
          border-bottom: 1px solid `
          .concat(
            Xi,
            `;
        }
      }

      &-view {
        border-bottom: 1px solid `
          )
          .concat(
            Xi,
            `;
      }
    }
  }
`
          ),
        bf = `
  .fadeModal-enter,
  .fadeModal-appear {
    opacity: 0;
  }

  .fadeModal-enter-active,
  .fadeModal-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeModal-exit {
    opacity: 1;
  }

  .fadeModal-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  .fadeContent-enter,
  .fadeContent-appear {
    opacity: 0;
  }

  .fadeContent-enter-active,
  .fadeContent-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeContent-exit {
    opacity: 1;
  }

  .fadeContent-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }

  @media screen and (max-width: 767px) {
    .concis-modal {
      &-content {
        width: 90vw;
      }
    }
  }
`,
        yf = cn.ZP.div(
          Yi ||
            (Yi = an()([
              `
  .concis-modal,
  .concis-dark-modal {
    &-dialog {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100vw;
      height: 100vh;
      background: rgba(29, 33, 41, 60%);
      transition: 0.1s linear;
    }

    &-content {
      position: absolute;
      top: `,
              `;
      left: `,
              `;
      z-index: 1002;
      width: `,
              `;
      overflow-x: auto;
      background: #fff;
      border-radius: `,
              `;
      transform: translate(-50%, -50%);

      &-header {
        .concis-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: `,
              `;
          font-weight: 500;
          border-bottom: 1px solid `,
              `;

          .title {
            span {
              margin-left: `,
              `;
              font-size: `,
              `;
            }
          }

          .close-icon {
            font-size: `,
              `;
            cursor: pointer;
          }
        }
      }

      &-view {
        padding: `,
              ` 24px;
        font-size: `,
              `;
        border-bottom: 1px solid `,
              `;
      }

      &-footer {
        padding: 16px `,
              `;
        text-align: right;

        .button {
          .concis-button-text,
          .concis-button-primary {
            height: 30px !important;
          }
        }

        .cancel-btn {
          margin-right: `,
              `;
        }
      }
    }
  }

  `,
              `

  `,
              `
`,
            ])),
          ff,
          hf,
          function (t) {
            var n = t.modalWidth;
            return typeof n == 'string' ? n : ''.concat(n, '%');
          },
          pf,
          Jt,
          $i,
          Vi,
          vf,
          gf,
          Jt,
          mf,
          $i,
          Jt,
          Vi,
          xf,
          bf
        ),
        kf = function (n, i) {
          var a = (0, r.useRef)(!1),
            d = function (u) {
              return u.tagName === 'BODY'
                ? window.innerWidth -
                    (document.body.clientWidth || document.documentElement.clientWidth)
                : u.offsetWidth - u.clientWidth;
            },
            h = function () {
              var u = document.querySelector(''.concat(n));
              u &&
                u.style.overflow !== 'hidden' &&
                ((u.style.width = 'calc(100% - '.concat(d(u), 'px)')),
                (u.style.overflow = 'hidden'),
                (a.current = !0));
            },
            f = function () {
              if (a.current && document.querySelector(''.concat(n))) {
                a.current = !1;
                var u = document.querySelector(''.concat(n));
                u.removeAttribute('style');
              }
            };
          (0, r.useEffect)(
            function () {
              return (
                i ? h() : f(),
                function () {
                  f();
                }
              );
            },
            [i, n]
          );
        },
        Gt = kf,
        Gp = {
          'concis-modal-dialog': 'IupSrMQrUVYmn4lBhu0J',
          'concis-dark-modal-dialog': 'PDrntveZHbc5LuSBGNwk',
          'concis-modal-content': 'OrLxhzWT7F49Ur3qIGuc',
          'concis-dark-modal-content': 'mzbZq6hZxO0mQl8ow4fm',
          'concis-modal-content-header': 'xpFG5cM4qbUV2rxP9uzB',
          'concis-title': 'gB6RcFxRAqQUMApQc98o',
          'concis-dark-modal-content-header': 'HE1YjrH3dt0XE7KLET9q',
          title: 'nUmdqldWDSgOlPiuD5f2',
          'close-icon': 'gmGFpdTT0kkEsQAprmCq',
          'concis-modal-content-view': 'KSQugks73todaypbUb4x',
          'concis-dark-modal-content-view': 'ipNG3reO7GMTmDvgRbz2',
          'concis-modal-content-footer': 'DDjODWfHbQMRwpsLhkE2',
          'concis-dark-modal-content-footer': 'gGTlqvxZpES6zCpAxYtm',
          button: 'hESJZO2Vof0H1xVU1IsW',
          'concis-button-text': 'JuRbVTiNJP8iNRl0xirW',
          'concis-button-primary': 'r7GxZ1INvsQt1GYbAk1r',
          'cancel-btn': 'dLHRToLUpIguZKb8XveE',
          'fadeModal-enter': 'X2DpEuOT5RojeiWySCEQ',
          'fadeModal-appear': 'FjlBn3UBBFQrZC7QROkO',
          'fadeModal-enter-active': 'uJV1OvBaJbYneJFjPUAb',
          'fadeModal-appear-active': 'HhVHTHErLtAE8EE0TC6q',
          'fadeModal-exit': 'Vm63vOueKgqsPTpBsXtv',
          'fadeModal-exit-active': 'MmgGmlMmZfYogDC7FKfM',
          'fadeContent-enter': 'hz9d0EGgO_YziFzhztJg',
          'fadeContent-appear': 'R_p17TMrc8TbsYbTqoQi',
          'fadeContent-enter-active': 'PGoA1QGQb4464ACpBfDl',
          'fadeContent-appear-active': 'jK9p9qmkz2opnjO_LnEj',
          'fadeContent-exit': 'ZlJ_7fLpe8ws0IDpassS',
          'fadeContent-exit-active': 'JCOQVIN9EU5XN1WnYwU8',
        };
      function Cf(t, n) {
        var i = document.createElement('div');
        i.setAttribute('class', 'concis-modal-confirm'), document.body.appendChild(i);
        var a = t.onOk && dt(t.onOk),
          d = t.onCancel && dt(t.onCancel);
        Yt.render(
          (0, e.jsx)(
            Gi,
            tn()(
              tn()({}, t),
              {},
              {
                visible: !0,
                type: n,
                isPromiseOk: a,
                isPromiseCancel: d,
                confirm: !0,
                children: t.content,
              }
            )
          ),
          i
        );
      }
      function dt(t) {
        return !!(t && t.toString().trim().includes('new Promise'));
      }
      var wf = Cf,
        Ji = '#325dff',
        Sf = '#f53f3f',
        jf = '#00b42a',
        Nf = '#ff7d00',
        Ve = function (n, i) {
          wf(n, i);
        },
        Ce = function (n) {
          var i = n.className,
            a = n.children,
            d = n.style,
            h = n.title,
            f = n.visible,
            o = n.okButtonProps,
            u = o === void 0 ? {} : o,
            c = n.cancelButtonProps,
            j = c === void 0 ? {} : c,
            v = n.footer,
            y = n.okText,
            _ = n.cancelText,
            x = n.cancelOnlyByButton,
            l = x === void 0 ? !1 : x,
            p = n.width,
            P = p === void 0 ? '520px' : p,
            E = n.onCancel,
            F = n.onOk,
            z = n.confirm,
            O = z === void 0 ? !1 : z,
            W = n.isPromiseOk,
            A = n.isPromiseCancel,
            I = n.type,
            X = (0, r.useState)(f),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1],
            Z = (0, r.useState)(!1),
            J = H()(Z, 2),
            R = J[0],
            q = J[1],
            V = (0, r.useState)(!1),
            nn = H()(V, 2),
            ln = nn[0],
            G = nn[1],
            B = (0, r.useRef)(!1),
            T = (0, r.useContext)(xn),
            m = T.prefixCls,
            s = T.darkTheme,
            N = s ? 'concis-dark-modal' : 'concis-modal',
            C = hn(m, i, N),
            D = Vt().throttle(function ($) {
              var K,
                on = $.target;
              $.stopPropagation(),
                (K = on.getAttribute('class')) !== null &&
                  K !== void 0 &&
                  K.includes('concis-modal-dialog') &&
                  g();
            }, 0);
          (0, r.useEffect)(
            function () {
              Q(f);
            },
            [f]
          ),
            (0, r.useEffect)(
              function () {
                return (
                  !l && Y && ae(window, 'click', D)(),
                  function () {
                    !l && ge(window, 'click', D)();
                  }
                );
              },
              [Y, l]
            ),
            Gt('body', Y);
          var w = function () {
              var K = document.querySelector('.concis-modal-confirm');
              K &&
                setTimeout(function () {
                  document.body.removeChild(document.querySelector('.concis-modal-confirm'));
                }, 400);
            },
            k = function () {
              Q(!1), O && w(), (B.current = !1), q(!1), G(!1), (B.current = !1);
            },
            b = function () {
              F || Q(!1),
                B.current ||
                  ((B.current = !0),
                  (O && W) || (typeof F == 'function' && dt(F))
                    ? (q(!0),
                      F &&
                        F()
                          .then(function () {
                            k();
                          })
                          .catch(function () {
                            k();
                          }))
                    : (F && F(), Q(!1), (B.current = !1), O && w()));
            },
            g = function () {
              E || Q(!1),
                B.current ||
                  ((B.current = !0),
                  (O && A) || (typeof E == 'function' && dt(E))
                    ? (G(!0),
                      E &&
                        E()
                          .then(function () {
                            k();
                          })
                          .catch(function () {
                            k();
                          }))
                    : (E && E(), Q(!1), (B.current = !1), O && w()));
            },
            L = (0, r.useMemo)(
              function () {
                switch (I) {
                  case 'info':
                    return (0, e.jsx)(be.Z, { style: { color: Ji } });
                  case 'success':
                    return (0, e.jsx)(He.Z, { style: { color: jf } });
                  case 'warning':
                    return (0, e.jsx)(uf.Z, { style: { color: Nf } });
                  case 'error':
                    return (0, e.jsx)(Ze.Z, { style: { color: Sf } });
                  default:
                    return (0, e.jsx)(be.Z, { style: { color: Ji } });
                }
              },
              [I]
            );
          return (0, e.jsx)(yf, {
            modalWidth: P,
            children: (0, e.jsx)('div', {
              className: C,
              style: d,
              children: (0, e.jsx)(Tn.Z, {
                in: Y,
                timeout: 200,
                appear: !0,
                mountOnEnter: !0,
                classNames: 'fadeModal',
                unmountOnExit: !0,
                onEnter: function (K) {
                  K.style.display = 'block';
                },
                onExited: function (K) {
                  K.style.display = 'none';
                },
                children: (0, e.jsx)('div', {
                  className: 'concis-modal-dialog',
                  children: (0, e.jsx)(Tn.Z, {
                    in: Y,
                    timeout: 200,
                    appear: !0,
                    mountOnEnter: !0,
                    classNames: 'fadeContent',
                    unmountOnExit: !0,
                    onEnter: function (K) {
                      K.style.display = 'block';
                    },
                    onExited: function (K) {
                      K.style.display = 'none';
                    },
                    children: (0, e.jsxs)('div', {
                      className: 'concis-modal-content',
                      onClick: function (K) {
                        return K.stopPropagation();
                      },
                      children: [
                        (0, e.jsx)('div', {
                          className: 'concis-modal-content-header',
                          children: (0, e.jsxs)('div', {
                            className: 'concis-title',
                            children: [
                              (0, e.jsx)('i', {}),
                              (0, e.jsxs)('div', {
                                className: 'title',
                                children: [I && L, (0, e.jsxs)('span', { children: [' ', h] })],
                              }),
                              (0, e.jsx)(An.Z, {
                                className: 'close-icon',
                                style: { fontSize: '12px' },
                                onClick: g,
                              }),
                            ],
                          }),
                        }),
                        (0, e.jsx)('div', { className: 'concis-modal-content-view', children: a }),
                        (0, e.jsx)('div', {
                          className: 'concis-modal-content-footer',
                          children:
                            v ||
                            (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)(
                                  Rn,
                                  tn()(
                                    tn()(
                                      {
                                        type: 'text',
                                        loading: ln,
                                        className: 'cancel-btn button',
                                        handleClick: g,
                                      },
                                      Object.keys(j).length && tn()({}, j)
                                    ),
                                    {},
                                    { children: _ || '\u53D6\u6D88' }
                                  )
                                ),
                                (0, e.jsx)(
                                  Rn,
                                  tn()(
                                    tn()(
                                      {
                                        type: 'primary',
                                        loading: R,
                                        className: 'enter-btn button',
                                        handleClick: b,
                                      },
                                      Object.keys(u).length && tn()({}, u)
                                    ),
                                    {},
                                    { children: y || '\u786E\u5B9A' }
                                  )
                                ),
                              ],
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        };
      (Ce.confirm = function (t) {
        return Ve(t, 'info');
      }),
        (Ce.info = function (t) {
          return Ve(t, 'info');
        }),
        (Ce.success = function (t) {
          return Ve(t, 'success');
        }),
        (Ce.warning = function (t) {
          return Ve(t, 'warning');
        }),
        (Ce.error = function (t) {
          return Ve(t, 'error');
        });
      var Gi = Ce,
        Ui,
        Ut = S.concisTransformMd,
        _f = S.concisRadiusLg,
        ut = S.concisTransformSm,
        Tf = S.concisTransformXs,
        Ki = S.concisFontMd,
        Df = S.concisFontXs,
        Pf = `
  .comment-content {
    border-top: 1px solid #484849;
  }
`,
        Ff = cn.ZP.div(
          Ui ||
            (Ui = an()([
              `
  .concis-comment,
  .concis-dark-comment {
    display: flex;
    justify-content: flex-start;
    margin: `,
              ` 0;

    .avatar {
      box-sizing: border-box;
      margin-top: `,
              `;
      border-radius: `,
              `;
    }

    .comment-content {
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      margin-left: `,
              `;
      padding-top: `,
              `;
      border-top: 1px solid #e5e9ef;

      &-header {
        display: flex;
        align-items: center;
        justify-content: `,
              `;

        .author {
          display: flex;
          color: #4e5969;
          font-size: `,
              `;

          .extra-header {
            margin-left: `,
              `;
          }
        }

        .date-time {
          margin-left: `,
              `;
          color: #80909c;
          font-size: `,
              `;
        }
      }

      .content {
        margin: `,
              ' 0 ',
              `;
        font-size: `,
              `;
      }

      &-actions {
        display: flex;
      }
    }
  }

  `,
              `
`,
            ])),
          Ut,
          Ut,
          _f,
          ut,
          Ut,
          function (t) {
            var n = t.commentAlign;
            return n === 'left' ? 'flex-start' : 'space-between';
          },
          Ki,
          ut,
          ut,
          Df,
          Tf,
          ut,
          Ki,
          Pf
        ),
        zf = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.author,
            f = n.afterAuthor,
            o = n.avatar,
            u = n.content,
            c = n.datetime,
            j = n.actions,
            v = n.align,
            y = v === void 0 ? 'left' : v,
            _ = n.children,
            x = (0, r.useContext)(xn),
            l = x.prefixCls,
            p = x.darkTheme,
            P = p ? 'concis-dark-comment' : 'concis-comment',
            E = hn(l, a, P);
          return (0, e.jsx)(Ff, {
            commentAlign: y,
            children: (0, e.jsxs)('div', {
              className: E,
              style: d,
              ref: i,
              children: [
                (0, e.jsx)('div', { className: 'avatar', children: o }),
                (0, e.jsxs)('div', {
                  className: 'comment-content',
                  children: [
                    (0, e.jsxs)('div', {
                      className: 'comment-content-header',
                      children: [
                        (0, e.jsxs)('div', {
                          className: 'author',
                          children: [
                            (0, e.jsx)('span', { children: h }),
                            (0, e.jsx)('div', { className: 'extra-header', children: f }),
                          ],
                        }),
                        (0, e.jsx)('span', { className: 'date-time', children: c }),
                      ],
                    }),
                    (0, e.jsx)('div', { className: 'content', children: u }),
                    (0, e.jsx)('div', { className: 'comment-content-actions', children: j }),
                    _,
                  ],
                }),
              ],
            }),
          });
        },
        Ef = (0, r.forwardRef)(zf),
        Qi,
        qi,
        Of = '0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926',
        Mf = S.concisTransformXs,
        Rf = S.concisRadiusXs,
        If = S.concisTransformMd,
        Lf = S.concisFontMd,
        na = S.concisDarkFontColor,
        ea = S.concisPrimaryColor,
        Bf = `
  .input-pro-tragger-enter,
  .input-pro-tragger-appear {
    opacity: 0;
  }

  .input-pro-tragger-enter-active,
  .input-pro-tragger-appear-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .input-pro-tragger-exit {
    opacity: 1;
  }

  .input-pro-tragger-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;
      function Af(t) {
        var n = {
          top: { left: '25%', bottom: 'calc(100% + 5px)' },
          bottom: { left: '25%', top: 'calc(100% + 5px)' },
          left: { left: '-50%', top: '-120%' },
          right: { right: '-50%', top: '-120%' },
        };
        return (0, cn.iv)(
          Qi ||
            (Qi = an()([
              `
    `,
              `
  `,
            ])),
          n[t]
        );
      }
      var Zf = cn.ZP.span(
          qi ||
            (qi = an()([
              `
  .concis-input-pro,
  .concis-dark-input-pro {
    position: relative;
    display: inline-block;

    &-tragger {
      position: absolute;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      padding: `,
              ` 0;
      background: #fff;
      border-radius: `,
              `;
      box-shadow: `,
              `;
      `,
              `

      .option,
      .selected-option,
      .disabled-option {
        padding: 7px `,
              `;
        color: #000;
        font-size: `,
              `;
        cursor: pointer;

        &:hover:not(.disabled-option) {
          color: `,
              `;
        }
      }

      .disabled-option {
        color: #c9cdd4;
        cursor: not-allowed;
      }

      .selected-option {
        color: `,
              `;
      }
    }
  }

  .concis-dark-input-pro {
    &-tragger {
      background: #333;

      .option,
      .selected-option,
      .disabled-option {
        color: #9b9b9b;

        &:hover:not(.disabled-option) {
          color: `,
              `;
          background: #292929;
        }
      }

      .disabled-option {
        color: #59595a;
      }

      .selected-option {
        color: `,
              `;
      }
    }
  }

  `,
              `
`,
            ])),
          Mf,
          Rf,
          Of,
          function (t) {
            var n = t.align;
            return Af(n);
          },
          If,
          Lf,
          function (t) {
            var n = t.selectColor;
            return n || ea;
          },
          function (t) {
            var n = t.selectColor;
            return n || ea;
          },
          na,
          na,
          Bf
        ),
        Hf = function (n, i) {
          var a = n.style,
            d = n.className,
            h = n.option,
            f = h === void 0 ? [] : h,
            o = n.align,
            u = o === void 0 ? 'top' : o,
            c = n.handleClick,
            j = n.handleChange,
            v = n.handleClear,
            y = (0, r.useState)(''),
            _ = H()(y, 2),
            x = _[0],
            l = _[1],
            p = (0, r.useState)(!1),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useRef)(null),
            O = (0, r.useContext)(xn),
            W = O.prefixCls,
            A = O.darkTheme,
            I = O.globalColor,
            X = hn(W, d, 'concis-'.concat(A ? 'dark-' : '', 'input-pro')),
            M = (0, r.useContext)(On);
          (0, r.useEffect)(
            function () {
              M.reset && l('');
            },
            [M.reset]
          ),
            (0, r.useEffect)(
              function () {
                M.submitStatus && M.getChildVal(x);
              },
              [M.submitStatus]
            ),
            (0, r.useEffect)(function () {
              var q = Ie(z, Y);
              return function () {
                q();
              };
            }, []);
          var Y = function () {
              F(!1);
            },
            Q = function (V) {
              l(V), j && j(V);
            },
            Z = function () {
              F(!0);
            },
            J = function (V, nn, ln) {
              ln.stopPropagation(), !nn && (l(V), c && c(V), F(!1));
            },
            R = function (V, nn) {
              return nn ? 'disabled-option' : V === x ? 'selected-option' : 'option';
            };
          return (0, e.jsx)(Zf, {
            selectColor: I,
            align: u,
            children: (0, e.jsxs)('div', {
              className: X,
              style: a,
              ref: function (V) {
                (z.current = V),
                  typeof i == 'function' ? i(V) : i && ve()(i) === 'object' && (i.current = V);
              },
              children: [
                (0, e.jsx)(Mn, {
                  placeholder: '\u8BF7\u8F93\u5165',
                  width: '200',
                  defaultValue: x,
                  showClear: !0,
                  handleIptFocus: Z,
                  handleIptChange: Q,
                  clearCallback: function () {
                    l(''), v && v('');
                  },
                  isFather: !0,
                }),
                (0, e.jsx)(Tn.Z, {
                  in: E,
                  classNames: 'input-pro-tragger',
                  timeout: 200,
                  appear: !0,
                  mountOnEnter: !0,
                  unmountOnExit: !0,
                  onEnter: function (V) {
                    V.style.display = 'flex';
                  },
                  onExited: function (V) {
                    V.style.display = 'none';
                  },
                  children: (0, e.jsx)('div', {
                    className: 'concis-input-pro-tragger',
                    children: f.map(function (q, V) {
                      var nn = q.label,
                        ln = q.disabled;
                      return (0, e.jsx)(
                        'span',
                        {
                          className: R(nn, ln),
                          onClick: function (B) {
                            return J(nn, ln, B);
                          },
                          children: nn,
                        },
                        V
                      );
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Wf = (0, r.forwardRef)(Hf),
        Yf = `
  .fadedrawer-enter,
  .fadedrawer-appear {
    opacity: 0;
  }

  .fadedrawer-enter-active,
  .fadedrawer-appear-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .fadedrawer-exit {
    opacity: 1;
  }

  .fadedrawer-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

  .fadedrawer-right-content-enter,
  .fadedrawer-right-content-appear {
    transform: translateX(100%);
  }

  .fadedrawer-right-content-enter-active,
  .fadedrawer-right-content-appear-active {
    transform: translateX(0);
    transition: transform 300ms;
  }

  .fadedrawer-right-content-exit {
    transform: translateX(0);
  }

  .fadedrawer-right-content-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }

  .fadedrawer-left-content-enter,
  .fadedrawer-left-content-appear {
    transform: translateX(-100%);
  }

  .fadedrawer-left-content-enter-active,
  .fadedrawer-left-content-appear-active {
    transform: translateX(0);
    transition: transform 300ms;
  }

  .fadedrawer-left-content-exit {
    transform: translateX(0);
  }

  .fadedrawer-left-content-exit-active {
    transform: translateX(-100%);
    transition: transform 300ms;
  }

  .fadedrawer-top-content-enter,
  .fadedrawer-top-content-appear {
    transform: translateY(-100%);
  }

  .fadedrawer-top-content-enter-active,
  .fadedrawer-top-content-appear-active {
    transform: translateY(0);
    transition: transform 300ms;
  }

  .fadedrawer-top-content-exit {
    transform: translateY(0);
  }

  .fadedrawer-top-content-exit-active {
    transform: translateY(-100%);
    transition: transform 300ms;
  }

  .fadedrawer-bottom-content-enter,
  .fadedrawer-bottom-content-appear {
    transform: translateY(100%);
  }

  .fadedrawer-bottom-content-enter-active,
  .fadedrawer-bottom-content-appear-active {
    transform: translateY(0);
    transition: transform 300ms;
  }

  .fadedrawer-bottom-content-exit {
    transform: translateY(0);
  }

  .fadedrawer-bottom-content-exit-active {
    transform: translateY(100%);
    transition: transform 300ms;
  }

  @media screen and (max-width: 767px) {
    .concis-drawer {
      &-content {
        width: 90vw;
      }
    }

    .fadeContent-enter,
    .fadeContent-appear {
      top: @concis-drawer-fadeExit-transform;
      left: @concis-drawer-fadeExit-transform;
      width: 80vw;
      opacity: 0;
    }

    .fadeContent-enter-active,
    .fadeContent-appear-active {
      top: @concis-drawer-transform;
      left: @concis-drawer-transform;
      width: 90vw;
      opacity: 1;
      transition: top 200ms, width 200ms, left 200ms, opacity 200ms;
    }

    .fadeContent-exit {
      top: @concis-drawer-transform;
      left: @concis-drawer-transform;
      width: 90vw;
      opacity: 1;
    }

    .fadeContent-exit-active {
      top: @concis-drawer-fadeExit-transform;
      left: @concis-drawer-fadeExit-transform;
      width: 80vw;
      opacity: 0;
      transition: top 200ms, width 200ms, left 200ms, opacity 100ms;
    }
  }
`,
        ta,
        ra,
        oa = '#e5e6eb',
        ia = '#484849',
        $f = S.concisRadiusXs,
        Kt = S.concisTransformLg,
        aa = S.concisTransformSm,
        Xf = S.concisFontLg,
        Vf = S.concisFontMd,
        Jf = S.concisFontSm,
        Gf = `
  .concis-dark-drawer {
    &-dialog {
      background: rgba(23, 23, 26, 60%);
    }

    &-content {
      color: #c4c4c5;
      background: #2a2a2b;

      &-header {
        .concis-title {
          border-bottom: 1px solid `
          .concat(
            ia,
            `;
        }
      }

      &-view {
        border-bottom: 1px solid `
          )
          .concat(
            ia,
            `;
      }
    }
  }
`
          );
      function Uf(t, n) {
        var i = typeof n == 'string' ? n : ''.concat(n, '%');
        function a(d) {
          var h = {
            left: { top: 0, left: 0, height: '100%', width: i },
            bottom: { bottom: 0, left: 0, width: '100%', height: i },
            right: { top: 0, right: 0, height: '100%', width: i },
            top: { top: 0, left: 0, width: '100%', height: i },
          };
          return (0, cn.iv)(
            ta ||
              (ta = an()([
                `
      `,
                `
    `,
              ])),
            h[d]
          );
        }
        return a(t);
      }
      var Kf = cn.ZP.div(
        ra ||
          (ra = an()([
            `
  .concis-drawer,
  .concis-dark-drawer {
    &-dialog {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1001;
      width: 100vw;
      height: 100vh;
      background: rgba(29, 33, 41, 60%);
      transition: 0.1s linear;
    }

    &-content {
      position: absolute;
      z-index: 1002;
      background: #fff;
      border-radius: `,
            `;
      display: flex;
      flex-direction: column;
      `,
            `

      &-header {
        .concis-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: `,
            `;
          font-weight: 500;
          border-bottom: 1px solid `,
            `;
          color: #1d2129;

          .title {
            span {
              margin-left: `,
            `;
              font-size: `,
            `;
            }
          }

          .close-icon {
            font-size: `,
            `;
            cursor: pointer;
          }
        }
      }

      &-view {
        padding: `,
            ` 24px;
        font-size: `,
            `;
        border-bottom: 1px solid `,
            `;
        color: #1d2129;
        flex: 1;
      }

      &-footer {
        padding: 16px `,
            `;
        text-align: right;

        .button {
          .concis-button-text,
          .concis-button-primary {
            height: 30px !important;
          }
        }

        .cancel-btn {
          margin-right: `,
            `;
        }
      }
    }
  }

  `,
            `

  `,
            `
`,
          ])),
        $f,
        function (t) {
          var n = t.align,
            i = t.width;
          return Uf(n, i);
        },
        Kt,
        oa,
        aa,
        Xf,
        Jf,
        Kt,
        Vf,
        oa,
        Kt,
        aa,
        Gf,
        Yf
      );
      function ca(t) {
        return !!(t && t.toString().trim().includes('new Promise'));
      }
      var Qf = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.children,
            f = n.title,
            o = n.visible,
            u = n.align,
            c = u === void 0 ? 'right' : u,
            j = n.okButtonProps,
            v = j === void 0 ? {} : j,
            y = n.cancelButtonProps,
            _ = y === void 0 ? {} : y,
            x = n.footer,
            l = n.okText,
            p = n.cancelText,
            P = n.width,
            E = P === void 0 ? '320px' : P,
            F = n.onOk,
            z = n.onCancel,
            O = (0, r.useState)(o),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.useState)(!1),
            M = H()(X, 2),
            Y = M[0],
            Q = M[1],
            Z = (0, r.useState)(!1),
            J = H()(Z, 2),
            R = J[0],
            q = J[1],
            V = (0, r.useRef)(!1),
            nn = (0, r.useContext)(xn),
            ln = nn.prefixCls,
            G = nn.darkTheme,
            B = G ? 'concis-dark-drawer' : 'concis-drawer',
            T = hn(ln, a, B),
            m = Vt().throttle(function (D) {
              var w,
                k = D.target;
              D.stopPropagation(),
                (w = k.getAttribute('class')) !== null &&
                  w !== void 0 &&
                  w.includes('concis-drawer-dialog') &&
                  C();
            }, 0);
          (0, r.useEffect)(
            function () {
              I(o);
            },
            [o]
          ),
            (0, r.useEffect)(
              function () {
                return (
                  A && ae(window, 'click', m)(),
                  function () {
                    A && ge(window, 'click', m)();
                  }
                );
              },
              [A]
            ),
            Gt('body', A);
          var s = function () {
              I(!1), (V.current = !1), Q(!1), q(!1);
            },
            N = function () {
              F || I(!1),
                V.current ||
                  ((V.current = !0),
                  typeof F == 'function' && ca(F)
                    ? (Q(!0),
                      F &&
                        F()
                          .then(function () {
                            s();
                          })
                          .catch(function () {
                            s();
                          }))
                    : (F && F(), I(!1), (V.current = !1)));
            },
            C = function () {
              z || I(!1),
                V.current ||
                  ((V.current = !0),
                  typeof z == 'function' && ca(z)
                    ? (q(!0),
                      z &&
                        z()
                          .then(function () {
                            s();
                          })
                          .catch(function () {
                            s();
                          }))
                    : (z && z(), I(!1), (V.current = !1)));
            };
          return (0, e.jsx)(Kf, {
            align: c,
            width: typeof E == 'string' ? E : ''.concat(E, '%'),
            children: (0, e.jsx)('div', {
              className: T,
              style: d,
              ref: i,
              children: (0, e.jsx)(Tn.Z, {
                in: A,
                timeout: 200,
                appear: !0,
                mountOnEnter: !0,
                classNames: 'fadedrawer',
                unmountOnExit: !0,
                onEnter: function (w) {
                  w.style.display = 'block';
                },
                onExited: function (w) {
                  w.style.display = 'none';
                },
                children: (0, e.jsx)('div', {
                  className: 'concis-drawer-dialog',
                  children: (0, e.jsx)(Tn.Z, {
                    in: A,
                    timeout: 300,
                    appear: !0,
                    mountOnEnter: !0,
                    classNames: 'fadedrawer-'.concat(c, '-content'),
                    unmountOnExit: !0,
                    onEnter: function (w) {
                      w.style.display = 'flex';
                    },
                    onExited: function (w) {
                      w.style.display = 'none';
                    },
                    children: (0, e.jsxs)('div', {
                      className: 'concis-drawer-content',
                      onClick: function (w) {
                        return w.stopPropagation();
                      },
                      children: [
                        (0, e.jsx)('div', {
                          className: 'concis-drawer-content-header',
                          children: (0, e.jsxs)('div', {
                            className: 'concis-title',
                            children: [
                              (0, e.jsx)('div', {
                                className: 'title',
                                children: (0, e.jsxs)('span', { children: [' ', f] }),
                              }),
                              (0, e.jsx)(An.Z, {
                                className: 'close-icon',
                                style: { fontSize: '12px' },
                                onClick: C,
                              }),
                            ],
                          }),
                        }),
                        (0, e.jsx)('div', { className: 'concis-drawer-content-view', children: h }),
                        (0, e.jsx)('div', {
                          className: 'concis-drawer-content-footer',
                          children:
                            x ||
                            (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)(
                                  Rn,
                                  tn()(
                                    tn()(
                                      {
                                        type: 'text',
                                        loading: R,
                                        className: 'cancel-btn button',
                                        handleClick: C,
                                      },
                                      Object.keys(_).length && tn()({}, _)
                                    ),
                                    {},
                                    { children: p || '\u53D6\u6D88' }
                                  )
                                ),
                                (0, e.jsx)(
                                  Rn,
                                  tn()(
                                    tn()(
                                      {
                                        type: 'primary',
                                        loading: Y,
                                        className: 'enter-btn button',
                                        handleClick: N,
                                      },
                                      Object.keys(v).length && tn()({}, v)
                                    ),
                                    {},
                                    { children: l || '\u786E\u5B9A' }
                                  )
                                ),
                              ],
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        qf = (0, r.forwardRef)(Qf),
        la = fn(1577),
        n0 = fn(42574),
        e0 = fn(8254),
        sa,
        da,
        t0 = (0, cn.iv)(
          sa ||
            (sa = an()([
              `
  .fadeIn-enter {
    opacity: 1;
  }

  .fadeIn-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`,
            ]))
        ),
        r0 = cn.ZP.div(
          da ||
            (da = an()([
              `
  .concis-upload-container {
    font-size: 14px;
    width: 100%;
    margin-top: 10px;

    .file-list {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-upload-button {
        font-size: 12px;
      }
    }
  }

  .concis-upload {
    .image-list {
      display: inline-flex;

      .concis-image {
        margin-right: 15px;
      }
    }
  }

  `,
              `
`,
            ])),
          t0
        ),
        o0 = fn(57092),
        i0 = fn(12961),
        a0 = fn(75293),
        c0 = fn(82651),
        ua,
        fa = '20px',
        ha = S.concisFontLg,
        l0 = `
  .fadeImage-enter,
  .fadeImage-appear {
    opacity: 0;
  }

  .fadeImage-enter-active,
  .fadeImage-appear-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .fadeImage-exit {
    opacity: 1;
  }

  .fadeImage-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`,
        s0 = cn.ZP.span(
          ua ||
            (ua = an()([
              `
  .concis-image,
  .concis-dark-image {
    position: relative;
    display: inline-block;
    vertical-align: top;

    img {
      vertical-align: middle;
    }

    // \u9002\u5E94\u5BB9\u5668\u65B9\u5F0F
    .concis-image-fill {
      object-fit: fill;
    }

    .concis-image-contain {
      object-fit: contain;
    }

    .concis-image-cover {
      object-fit: cover;
    }

    .concis-image-none {
      object-fit: none;
    }

    .concis-image-scale-down {
      object-fit: scale-down;
    }

    .concis-image-caption {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 30%);
      padding: 7px 16px;
      box-sizing: border-box;
      color: #fff;
      font-size: `,
              `;
      text-align: left;
      word-break: break-all;
    }
  }

  .concis-preview-image {
    cursor: pointer;

    .preview-image-mask {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: rgba(0, 0, 0, 50%);
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.3s;

      span {
        margin: 0 3px;
      }
    }

    &:hover .preview-image-mask {
      opacity: 1;
    }
  }

  .preview-image-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100vw;
    height: 100vh;
    background: rgba(29, 33, 41, 60%);
    transition: 0.1s linear;
    user-select: none;

    img {
      user-select: none;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
      transition: 0.2s;
    }

    .preview-image-progress {
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-size: `,
              `;
    }

    .preview-image-prev,
    .preview-image-next,
    .preview-image-close {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      font-size: `,
              `;
      color: rgba(255, 255, 255, 80%);
      background: rgba(0, 0, 0, 10%);
      border-radius: 50%;
      margin: auto;
      cursor: pointer;
    }

    .preview-btn-disabled {
      color: rgba(255, 255, 255, 10%);
      cursor: not-allowed !important;
    }

    .preview-image-prev {
      left: 30px;
      top: 0;
      bottom: 0;
    }

    .preview-image-next {
      right: 30px;
      top: 0;
      bottom: 0;
    }

    .preview-image-close {
      right: 30px;
      top: 30px;
    }

    .preview-image-operations {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 270px;
      height: 44px;
      color: #fff;
      font-size: `,
              `;
      background: rgba(0, 0, 0, 10%);
      border-radius: 30px;
      margin: auto;

      span {
        cursor: pointer;
      }
    }
  }

  `,
              `
`,
            ])),
          ha,
          ha,
          fa,
          fa,
          l0
        ),
        d0 = function (n, i) {
          var a = n.src,
            d = n.alt,
            h = n.fit,
            f = n.draggable,
            o = f === void 0 ? !0 : f,
            u = n.className,
            c = n.style,
            j = n.width,
            v = n.height,
            y = n.round,
            _ = n.preview,
            x = _ === void 0 ? !1 : _,
            l = n.showOperation,
            p = l === void 0 ? !0 : l,
            P = n.caption,
            E = n.captionStyle,
            F = n.previewRender,
            z = (0, r.useContext)(xn),
            O = z.prefixCls,
            W = z.darkTheme,
            A = hn(
              O,
              u,
              'concis-'.concat(W ? 'dark-' : '', 'image'),
              ''.concat(x ? 'concis-preview-image' : '')
            ),
            I = (0, r.useState)(!1),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useState)(1),
            Z = H()(Q, 2),
            J = Z[0],
            R = Z[1],
            q = (0, r.useState)(0),
            V = H()(q, 2),
            nn = V[0],
            ln = V[1],
            G = (0, r.useState)([]),
            B = H()(G, 2),
            T = B[0],
            m = B[1],
            s = (0, r.useState)(0),
            N = H()(s, 2),
            C = N[0],
            D = N[1],
            w = (0, r.useRef)(null);
          (0, r.useEffect)(
            function () {
              if (!x) return;
              dn();
              var gn = Ie(w, b);
              function dn() {
                Array.isArray(x) ? m(x) : x && a && m([a]);
              }
              return function () {
                x && gn();
              };
            },
            [x]
          );
          var k = function (dn) {
              dn == null || dn.stopPropagation(), T.length && Y(!0);
            },
            b = (function () {
              var gn = Jn()(
                Pn()().mark(function dn(vn) {
                  var Dn;
                  return Pn()().wrap(function (Cn) {
                    for (;;)
                      switch ((Cn.prev = Cn.next)) {
                        case 0:
                          return (
                            (Dn = function () {
                              return new Promise(function (bn) {
                                setTimeout(function () {
                                  bn(null);
                                }, 200);
                              });
                            }),
                            vn == null || vn.stopPropagation(),
                            Y(!1),
                            (Cn.next = 5),
                            Dn()
                          );
                        case 5:
                          ln(0), R(1);
                        case 7:
                        case 'end':
                          return Cn.stop();
                      }
                  }, dn);
                })
              );
              return function (vn) {
                return gn.apply(this, arguments);
              };
            })(),
            g = function (dn, vn) {
              vn == null || vn.stopPropagation(),
                !((dn === 'small' && J <= 0.2) || (dn === 'large' && J >= 10)) &&
                  R(dn === 'small' ? J - 0.1 : J + 0.1);
            },
            L = function (dn, vn) {
              dn.stopPropagation(), ln(nn + vn);
            },
            $ = function (dn) {
              if ((dn.stopPropagation(), dn.deltaY > 1)) {
                g('small', dn);
                return;
              }
              g('large', dn);
            },
            K = function (dn, vn) {
              vn.stopPropagation(),
                !((dn === 'next' && C + 1 > T.length - 1) || (dn === 'prev' && C - 1 < 0)) &&
                  (R(1), ln(0), D(dn === 'next' ? C + 1 : C - 1));
            };
          Gt('body', M);
          var on = (0, r.useMemo)(
            function () {
              function gn(dn) {
                return (dn === 'large' && J >= 10) ||
                  (dn === 'small' && J <= 0.2) ||
                  (dn === 'next' && C === T.length - 1) ||
                  (dn === 'prev' && C === 0)
                  ? 'preview-btn-disabled'
                  : '';
              }
              return (0, e.jsx)(e.Fragment, {
                children:
                  x &&
                  (0, e.jsx)(Tn.Z, {
                    in: M,
                    timeout: 200,
                    appear: !0,
                    mountOnEnter: !0,
                    classNames: 'fadeImage',
                    unmountOnExit: !0,
                    onEnter: function (vn) {
                      vn.style.display = 'block';
                    },
                    onExited: function (vn) {
                      vn.style.display = 'none';
                    },
                    children: (0, e.jsxs)('div', {
                      className: 'preview-image-wrap',
                      onWheel: $,
                      children: [
                        (0, e.jsx)('img', {
                          className: 'preview-show-image',
                          src: T[C],
                          style: { transform: 'scale('.concat(J, ') rotate(').concat(nn, 'deg)') },
                        }),
                        T.length > 1 &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)('div', {
                                className: 'preview-image-progress',
                                children: ''.concat(C + 1, ' / ').concat(T.length),
                              }),
                              (0, e.jsx)('div', {
                                className: hn('preview-image-prev', gn('prev')),
                                onClick: function (vn) {
                                  return K('prev', vn);
                                },
                                children: (0, e.jsx)(ze.Z, {}),
                              }),
                              (0, e.jsx)('div', {
                                className: hn('preview-image-next', gn('next')),
                                onClick: function (vn) {
                                  return K('next', vn);
                                },
                                children: (0, e.jsx)(pe.Z, {}),
                              }),
                            ],
                          }),
                        (0, e.jsx)('div', {
                          className: 'preview-image-close',
                          onClick: b,
                          children: (0, e.jsx)(An.Z, {}),
                        }),
                        p &&
                          (0, e.jsxs)('div', {
                            className: 'preview-image-operations',
                            children: [
                              (0, e.jsx)(o0.Z, {
                                onClick: function (vn) {
                                  return L(vn, -90);
                                },
                              }),
                              (0, e.jsx)(i0.Z, {
                                onClick: function (vn) {
                                  return L(vn, 90);
                                },
                              }),
                              (0, e.jsx)(a0.Z, {
                                className: gn('small'),
                                onClick: function (vn) {
                                  return g('small', vn);
                                },
                              }),
                              (0, e.jsx)(c0.Z, {
                                className: gn('large'),
                                onClick: function (vn) {
                                  return g('large', vn);
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
              });
            },
            [x, M, J, nn, T, C, p]
          );
          return (0, e.jsxs)(s0, {
            children: [
              (0, e.jsxs)('div', {
                className: A,
                style: c,
                ref: function (dn) {
                  (w.current = dn), Qe(i, dn);
                },
                children: [
                  (0, e.jsx)('img', {
                    src: a,
                    alt: d,
                    draggable: o,
                    className: ''.concat(h ? 'concis-image-'.concat(h) : ''),
                    style: { width: j, height: v, borderRadius: y },
                  }),
                  P &&
                    (0, e.jsx)('div', {
                      className: 'concis-image-caption',
                      style: tn()(
                        tn()({}, E),
                        {},
                        { borderBottomLeftRadius: y, borderBottomRightRadius: y }
                      ),
                      children: P,
                    }),
                  x &&
                    (0, e.jsx)('div', {
                      className: 'preview-image-mask',
                      children: F ? F(k) : (0, e.jsx)(nt.Z, { onClick: k }),
                    }),
                ],
              }),
              on,
            ],
          });
        },
        pa = (0, r.forwardRef)(d0),
        u0 = function (n, i) {
          var a = n.accept,
            d = n.multiple,
            h = d === void 0 ? !1 : d,
            f = n.disable,
            o = n.limit,
            u = n.action,
            c = n.name,
            j = c === void 0 ? 'file' : c,
            v = n.showType,
            y = v === void 0 ? 'file' : v,
            _ = n.headers,
            x = _ === void 0 ? {} : _,
            l = n.onExceedLimit,
            p = n.withCredentials,
            P = p === void 0 ? !1 : p,
            E = n.autoUpload,
            F = E === void 0 ? !0 : E,
            z = n.defaultFileList,
            O = n.beforeUpload,
            W = n.onSuccess,
            A = n.className,
            I = A === void 0 ? '' : A,
            X = n.style,
            M = n.onError,
            Y = n.onRemove,
            Q = n.onChange,
            Z = (0, r.useContext)(xn),
            J = Z.prefixCls,
            R = Z.darkTheme,
            q = hn(J, I, 'concis-'.concat(R ? 'dark-' : '', 'upload ')),
            V = (0, r.useRef)(null),
            nn = (0, r.useState)(z || []),
            ln = H()(nn, 2),
            G = ln[0],
            B = ln[1];
          (0, r.useEffect)(
            function () {
              Q && Q(G);
            },
            [G.length]
          );
          var T = function () {
              f || V.current.click();
            },
            m = (function () {
              var w = Jn()(
                Pn()().mark(function k(b) {
                  var g;
                  return Pn()().wrap(
                    function ($) {
                      for (;;)
                        switch (($.prev = $.next)) {
                          case 0:
                            if (!O) {
                              $.next = 13;
                              break;
                            }
                            return ($.prev = 1), ($.next = 4), O(b);
                          case 4:
                            return (g = $.sent), $.abrupt('return', !(typeof g == 'boolean' && !g));
                          case 8:
                            return ($.prev = 8), ($.t0 = $.catch(1)), $.abrupt('return', !1);
                          case 11:
                            $.next = 14;
                            break;
                          case 13:
                            return $.abrupt('return', !0);
                          case 14:
                          case 'end':
                            return $.stop();
                        }
                    },
                    k,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (b) {
                return w.apply(this, arguments);
              };
            })(),
            s = (function () {
              var w = Jn()(
                Pn()().mark(function k(b, g) {
                  var L;
                  return Pn()().wrap(function (K) {
                    for (;;)
                      switch ((K.prev = K.next)) {
                        case 0:
                          return (K.next = 2), m(b);
                        case 2:
                          if (K.sent) {
                            K.next = 4;
                            break;
                          }
                          return K.abrupt('return');
                        case 4:
                          (L = new FormData()),
                            L.append(j, b),
                            fetch(u, {
                              method: 'POST',
                              body: L,
                              credentials: P ? 'include' : 'omit',
                              headers: x,
                            })
                              .then(function (on) {
                                return on;
                              })
                              .then(function (on) {
                                B(function (gn) {
                                  return gn.map(function (dn) {
                                    return dn.uid === g.uid
                                      ? tn()(tn()({}, dn), {}, { status: 'success' })
                                      : dn;
                                  });
                                }),
                                  W && W(on, g, G);
                              })
                              .catch(function (on) {
                                B(function (gn) {
                                  return gn.map(function (dn) {
                                    return dn.uid === g.uid
                                      ? tn()(tn()({}, dn), {}, { status: 'error' })
                                      : dn;
                                  });
                                }),
                                  M && M(on, g, G);
                              });
                        case 7:
                        case 'end':
                          return K.stop();
                      }
                  }, k);
                })
              );
              return function (b, g) {
                return w.apply(this, arguments);
              };
            })(),
            N = (function () {
              var w = Jn()(
                Pn()().mark(function k(b) {
                  var g, L, $;
                  return Pn()().wrap(function (on) {
                    for (;;)
                      switch ((on.prev = on.next)) {
                        case 0:
                          (g = b.target.files || []), (L = []), ($ = 0);
                        case 3:
                          if (!($ < g.length)) {
                            on.next = 15;
                            break;
                          }
                          if (!((0, e0.isNumber)(o) && G.length + L.length >= o)) {
                            on.next = 7;
                            break;
                          }
                          return l && l(G, g), on.abrupt('break', 15);
                        case 7:
                          if (
                            (L.push({
                              uid: String(Math.random() * 1e3),
                              status: 'unUpload',
                              name: g[$].name,
                              file: g[$],
                            }),
                            (on.t0 = F),
                            !on.t0)
                          ) {
                            on.next = 12;
                            break;
                          }
                          return (on.next = 12), s(g[$], L[L.length - 1]);
                        case 12:
                          $++, (on.next = 3);
                          break;
                        case 15:
                          (V.current.value = ''), B([].concat(kn()(G), L));
                        case 17:
                        case 'end':
                          return on.stop();
                      }
                  }, k);
                })
              );
              return function (b) {
                return w.apply(this, arguments);
              };
            })(),
            C = function (k) {
              B(function (b) {
                return kn()(
                  b.filter(function (g) {
                    return g.uid !== k.uid;
                  })
                );
              }),
                Y && Y(k, G);
            },
            D = (0, r.useMemo)(
              function () {
                return y === 'file'
                  ? (0, e.jsx)(Wt, {
                      className: 'concis-upload-container',
                      header: '\u6587\u4EF6\u5217\u8868',
                      size: 'small',
                      dataSource: G,
                      render: function (k, b) {
                        return (0, e.jsx)(
                          Tn.Z,
                          {
                            appear: !0,
                            timeout: 300,
                            classNames: 'fadeIn',
                            children: (0, e.jsxs)(
                              Wt.Item,
                              {
                                className: 'file-list',
                                children: [
                                  (0, e.jsx)('span', {
                                    style: {
                                      color: k.status === 'success' ? '#00b42a' : '#d81f27',
                                    },
                                    children: k.name,
                                  }),
                                  (0, e.jsxs)('span', {
                                    children: [
                                      k.status === 'unUpload'
                                        ? (0, e.jsx)(Rn, {
                                            height: 30,
                                            handleClick: function () {
                                              return s(k.file, k);
                                            },
                                            className: 'file-list-upload-button',
                                            children: '\u4E0A\u4F20',
                                          })
                                        : (0, e.jsx)(He.Z, { style: { color: '#00b42a' } }),
                                      (0, e.jsx)(Ze.Z, {
                                        onClick: function (L) {
                                          L.stopPropagation(), C(k);
                                        },
                                        style: { color: '#d81f27', marginLeft: '5px' },
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              b
                            ),
                          },
                          k.uid
                        );
                      },
                    })
                  : (0, e.jsx)('div', {
                      className: 'image-list',
                      children: G.map(function (w, k) {
                        return (0, e.jsx)(
                          pa,
                          {
                            src: URL.createObjectURL(w.file),
                            width: '100px',
                            height: '100px',
                            fit: 'cover',
                            round: '5px',
                            preview: !0,
                            previewRender: function (g) {
                              return (0, e.jsxs)('div', {
                                children: [
                                  (0, e.jsx)(nt.Z, { onClick: g }),
                                  w.status === 'unUpload' &&
                                    (0, e.jsx)(la.Z, {
                                      onClick: function () {
                                        return s(w.file, w);
                                      },
                                    }),
                                  (0, e.jsx)(n0.Z, {
                                    onClick: function ($) {
                                      $.stopPropagation(), C(w);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                          w.uid
                        );
                      }),
                    });
              },
              [G]
            );
          return (0, e.jsx)(r0, {
            children: (0, e.jsxs)('div', {
              className: q,
              style: X,
              ref: i,
              children: [
                (0, e.jsx)('input', {
                  accept: a,
                  multiple: h,
                  onChange: N,
                  type: 'file',
                  ref: V,
                  style: { display: 'none' },
                }),
                y === 'file' &&
                  (0, e.jsx)(Rn, {
                    handleClick: T,
                    icon: (0, e.jsx)(la.Z, {}),
                    style: { margin: '8px' },
                    type: 'primary',
                    children: '\u4E0A\u4F20',
                  }),
                G.length !== 0 && D,
                y === 'image-list' &&
                  (0, e.jsx)(Rn, {
                    type: 'text',
                    handleClick: T,
                    style: {},
                    width: 100,
                    height: 100,
                    icon: (0, e.jsx)(Kn.Z, {}),
                  }),
              ],
            }),
          });
        },
        f0 = (0, r.forwardRef)(u0),
        va,
        ga,
        fe = S.concisPrimaryColor,
        ft = S.concisDarkPrimaryColor,
        h0 = (0, cn.iv)(
          va ||
            (va = an()([
              `
  .concis-dark-tabs {
    &-header {
      &-line {
        border-bottom: 1px solid #484849;

        .header-option-active {
          border-bottom: 1px solid `,
              `;
          color: `,
              `;
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            right: -16px;
            top: 50%;
            transform: translateY(-50%);
            height: 12px;
            width: 2px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }

    &-bottom-header {
      &-line {
        border-top: 1px solid #484849;

        .header-option-active {
          border-top: 1px solid `,
              `;
          color: `,
              `;
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            right: -16px;
            top: 50%;
            transform: translateY(-50%);
            height: 12px;
            width: 2px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }

    &-header-position-vertical {
      &-line {
        border-right: 1px solid #484849;

        .header-option {
          border-right: 2px solid transparent;
        }

        .header-option-active {
          border-right: 2px solid `,
              `;
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50% - 16px);
            height: 2px;
            width: 24px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-bottom: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }
  }
`,
            ])),
          ft,
          ft,
          ft,
          ft,
          fe
        ),
        p0 = cn.ZP.div(
          ga ||
            (ga = an()([
              `
  .concis-tabs {
    display: `,
              `;

    &-header {
      &-line,
      &-text,
      &-round,
      &-card {
        font-size: 14px;

        .header-option {
          white-space: nowrap;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: `,
              `;
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .header {
          display: flex;
          justify-content: space-between;

          &-list {
            overflow-x: auto;
            padding: 14px 0;

            &::-webkit-scrollbar {
              display: none;
            }
          }
        }

        .plus-icon {
          margin-left: 20px;
          cursor: pointer;
        }
      }

      &-line {
        border-bottom: 1px solid #e5e6eb;

        .header-option {
          border-bottom: 1px solid transparent;
        }

        .header-option-active {
          border-bottom: 1px solid `,
              `;
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px !important;
          margin: 0 !important;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px !important;
          margin: 0 !important;
          border: 1px solid #e5e6eb;

          &:not(:last-of-type) > .header-option {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }

          .close-icon {
            margin-left: 10px;
            cursor: pointer;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 16px;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 0;
          margin: 0 16px;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 16px;
        }
      }
    }

    &-bottom-header {
      &-line,
      &-text,
      &-round,
      &-card {
        font-size: 14px;

        .header-option {
          white-space: nowrap;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: `,
              `;
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .header {
          display: flex;
          justify-content: space-between;

          &-list {
            overflow-x: auto;
            padding: 14px 0;

            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }

      &-line {
        border-top: 1px solid #e5e6eb;

        .header-option {
          border-top: 1px solid transparent;
        }

        .header-option-active {
          border-top: 1px solid `,
              `;
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px !important;
          margin: 0 !important;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #e5e6eb;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 16px;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 0;
          margin: 0 16px;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 16px;
        }
      }
    }

    &-header-position-vertical {
      &-line {
        border-right: 1px solid #e5e6eb;

        .header-option {
          border-right: 2px solid transparent;
        }

        .header-option-active {
          border-right: 2px solid `,
              `;
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px;
          margin: 0;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #e5e6eb;
          display: flex;
          align-items: center;

          &:not(:last-of-type) {
            border-bottom: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }

          .close-icon {
            margin-left: 10px;
            cursor: pointer;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 0 0 16px !important;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 0 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 16px !important;
          margin: 0 !important;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 0 0 16px;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        padding: 8px 0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        min-width: 90px;
        height: 200px;
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        .header-option {
          // padding: 10px 16px;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: `,
              `;
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .plus-icon {
          margin-top: 20px;
          cursor: pointer;
        }
      }
    }

    &-content {
      width: 100%;
    }
  }

  `,
              `
`,
            ])),
          function (t) {
            var n = t.alignway;
            return n;
          },
          fe,
          fe,
          fe,
          fe,
          fe,
          fe,
          h0
        );
      function v0(t) {
        var n = t.children;
        return (0, e.jsx)(e.Fragment, { children: n });
      }
      function ma(t) {
        var n = (0, r.useContext)(ba),
          i = n.paneChildren,
          a = n.defaultActiveTab,
          d = n.tabPosition,
          h = n.type,
          f = n.extra,
          o = n.changeHeaderActiveCallback,
          u = n.editable,
          c = n.addHeaderCallback,
          j = n.delHeaderCallback,
          v = function (l, p) {
            p || (o && o(l));
          },
          y = function (l, p) {
            p.stopPropagation(), j && j(l);
          },
          _ = function (l, p) {
            return p
              ? 'header-option header-option-disabled'
              : l === a
              ? 'header-option header-option-active'
              : 'header-option';
          };
        return d === 'top' || d === 'bottom'
          ? (0, e.jsxs)('div', {
              className: 'header',
              children: [
                (0, e.jsxs)('div', {
                  className: 'header-list',
                  children: [
                    i == null
                      ? void 0
                      : i.map(function (x) {
                          return (0, e.jsxs)(
                            'span',
                            {
                              className: _(x.key, x.props.disabled),
                              onClick: function () {
                                return v(x.key, x.props.disabled);
                              },
                              children: [
                                x.props.title,
                                u &&
                                  h === 'card' &&
                                  (0, e.jsx)(An.Z, {
                                    className: 'close-icon',
                                    onClick: function (p) {
                                      return y(x.key, p);
                                    },
                                  }),
                              ],
                            },
                            x.key
                          );
                        }),
                    u &&
                      h === 'card' &&
                      (0, e.jsx)(Kn.Z, {
                        className: 'plus-icon',
                        onClick: function () {
                          return c && c();
                        },
                      }),
                  ],
                }),
                (0, e.jsx)('div', { className: 'header-extra', children: f }),
              ],
            })
          : (0, e.jsxs)(e.Fragment, {
              children: [
                i == null
                  ? void 0
                  : i.map(function (x) {
                      return (0, e.jsxs)(
                        'span',
                        {
                          className: _(x.key, x.props.disabled),
                          onClick: function () {
                            return v(x.key, x.props.disabled);
                          },
                          children: [
                            x.props.title,
                            u &&
                              h === 'card' &&
                              (0, e.jsx)(An.Z, {
                                className: 'close-icon',
                                onClick: function (p) {
                                  return y(x.key, p);
                                },
                              }),
                          ],
                        },
                        x.key
                      );
                    }),
                u &&
                  h === 'card' &&
                  (0, e.jsx)(Kn.Z, {
                    className: 'plus-icon',
                    onClick: function () {
                      return c && c();
                    },
                  }),
              ],
            });
      }
      function xa(t) {
        var n = t.paneChildren,
          i = t.defaultActiveTab;
        return (0, e.jsx)(e.Fragment, {
          children: n.filter(function (a) {
            return a.key === i;
          }),
        });
      }
      function g0(t) {
        var n = t.children,
          i = [];
        return (
          r.Children.forEach(n, function (a) {
            i.push(a);
          }),
          i
        );
      }
      var ba = (0, r.createContext)({ defaultActiveTab: '' });
      function ya(t) {
        var n = t.defaultActiveTab,
          i = t.className,
          a = t.style,
          d = t.tabPosition,
          h = d === void 0 ? 'top' : d,
          f = t.type,
          o = f === void 0 ? 'line' : f,
          u = t.size,
          c = u === void 0 ? 'default' : u,
          j = t.extra,
          v = t.editable,
          y = t.onAddTab,
          _ = t.onDeleteTab,
          x = t.onChange,
          l = g0(t),
          p = (0, r.useState)(n),
          P = H()(p, 2),
          E = P[0],
          F = P[1],
          z = (0, r.useContext)(xn),
          O = z.prefixCls,
          W = z.darkTheme,
          A = hn(O, i, W ? 'concis-dark-tabs' : 'concis-tabs'),
          I = function (J) {
            F(J), x && x(J);
          },
          X = function () {
            y && y();
          },
          M = function (J) {
            var R = l.length;
            J === E && R > 1 && F(l[R - 2].key), _ && _(J);
          },
          Y = {
            paneChildren: l,
            defaultActiveTab: E,
            type: o,
            extra: j,
            tabPosition: h,
            changeHeaderActiveCallback: I,
            editable: v,
            addHeaderCallback: X,
            delHeaderCallback: M,
          },
          Q = (0, r.useMemo)(
            function () {
              return h === 'bottom' || h === 'right'
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)('div', {
                        className: 'concis-tabs-content',
                        children: (0, e.jsx)(xa, { paneChildren: l, defaultActiveTab: E }),
                      }),
                      (0, e.jsx)('div', {
                        className: hn(
                          h === 'bottom'
                            ? 'concis-tabs-bottom-header-'.concat(o)
                            : 'concis-tabs-header-position-vertical-'.concat(o),
                          'concis-tabs-header-'.concat(c)
                        ),
                        children: (0, e.jsx)(ma, {}),
                      }),
                    ],
                  })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)('div', {
                        className: hn(
                          h === 'top'
                            ? 'concis-tabs-header-'.concat(o)
                            : 'concis-tabs-header-position-vertical-'.concat(o),
                          'concis-tabs-header-'.concat(c)
                        ),
                        children: (0, e.jsx)(ma, {}),
                      }),
                      (0, e.jsx)('div', {
                        className: 'concis-tabs-content',
                        children: (0, e.jsx)(xa, { paneChildren: l, defaultActiveTab: E }),
                      }),
                    ],
                  });
            },
            [h, E, o, c]
          );
        return (0, e.jsx)(p0, {
          alignway: h === 'top' || h === 'bottom' ? 'block' : 'flex',
          children: (0, e.jsx)(ba.Provider, {
            value: Y,
            children: (0, e.jsx)('div', { className: A, style: a, children: Q }),
          }),
        });
      }
      ya.TabPane = v0;
      var m0 = ya,
        ka,
        x0 = 10,
        b0 = S.concisRadiusLg,
        y0 = S.concisPrimaryColor,
        k0 = S.concisDarkDangerColor,
        C0 = `
.concis-back-top {
  position: fixed;
  right: 100px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  z-index: `
          .concat(
            x0,
            `;
  cursor: pointer;

  .default-child {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: `
          )
          .concat(
            b0,
            `;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;

    svg {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      svg {
        fill: `
          )
          .concat(
            y0,
            `;
      }
    }
  }
}

.concis-dark-back-top {
  .default-child:hover svg {
    fill: `
          )
          .concat(
            k0,
            `;
  }
}
`
          ),
        w0 = `
.back-top-trigger-enter,
.back-top-trigger-appear {
  opacity: 0;
}

.back-top-trigger-enter-active,
.back-top-trigger-appear-active {
  opacity: 1;
  transition: opacity 100ms;
}

.back-top-trigger-exit {
  opacity: 1;
}

.back-top-trigger-exit-active {
  opacity: 0;
  transition: opacity 100ms;
}
`,
        S0 = cn.ZP.div(
          ka ||
            (ka = an()([
              `
  `,
              `
  `,
              `
`,
            ])),
          C0,
          w0
        );
      function j0(t, n, i, a) {
        return (
          t == null || t.addEventListener(n, i, a),
          {
            remove: function () {
              t.removeEventListener(n, i, a);
            },
          }
        );
      }
      function Ca(t) {
        var n = 0;
        return (
          t === window
            ? (n = t.pageYOffset)
            : t instanceof Document
            ? (n = t.documentElement.scrollTop)
            : t && (n = t.scrollTop),
          n
        );
      }
      function N0(t, n, i, a) {
        var d = i - n;
        return (t /= a / 2), t < 1 ? (d / 2) * t * t * t + n : (d / 2) * ((t -= 2) * t * t + 2) + n;
      }
      function _0(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          i = n.getContainer,
          a =
            i === void 0
              ? function () {
                  return window;
                }
              : i,
          d = n.callback,
          h = n.duration,
          f = h === void 0 ? 450 : h,
          o = a(),
          u = Ca(o),
          c = Date.now(),
          j = function v() {
            var y = Date.now(),
              _ = y - c,
              x = N0(_ > f ? f : _, u, t, f);
            o === window
              ? o.scrollTo(window.pageXOffset, x)
              : o instanceof HTMLDocument || o.constructor.name === 'HTMLDocument'
              ? (o.documentElement.scrollTop = x)
              : (o.scrollTop = x),
              _ < f ? requestAnimationFrame(v) : typeof d == 'function' && d();
          };
        requestAnimationFrame(j);
      }
      var T0 = (0, e.jsx)('div', {
          className: 'default-child',
          children: (0, e.jsx)('svg', {
            viewBox: '0 0 1024 1024',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            width: '40',
            height: '40',
            children: (0, e.jsx)('path', {
              d: 'M640 608c-6.4 0-19.2 0-25.6-6.4L512 492.8 409.6 601.6c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8l128-128c12.8-12.8 32-12.8 44.8 0l128 128c12.8 12.8 12.8 32 0 44.8C659.2 608 646.4 608 640 608z',
            }),
          }),
        }),
        D0 = function (n) {
          var i = (0, r.useState)(!1),
            a = H()(i, 2),
            d = a[0],
            h = a[1],
            f = (0, r.createRef)(),
            o = (0, r.useRef)(),
            u = (0, r.useContext)(xn),
            c = u.prefixCls,
            j = u.darkTheme,
            v = hn(c, n.className, j ? 'concis-dark-back-top' : 'concis-back-top'),
            y = function () {
              return window;
            },
            _ = Vt().throttle(function (P) {
              var E = n.visibilityHeight,
                F = E === void 0 ? 400 : E,
                z = Ca(P.target);
              h(z > F);
            }, 100),
            x = function () {
              var E = n.target || y,
                F = E();
              (o.current = j0(F, 'scroll', function (z) {
                _(z);
              })),
                _({ target: F });
            },
            l = function () {
              var E = n.duration,
                F = E === void 0 ? 450 : E,
                z = n.target,
                O = n.onReachTop;
              _0(0, { duration: F, getContainer: z || y, callback: O });
            },
            p = function () {
              var E = n.children,
                F = E || T0;
              return (0, e.jsx)(Tn.Z, {
                in: d,
                timeout: 100,
                appear: !0,
                mountOnEnter: !0,
                classNames: 'back-top-trigger',
                unmountOnExit: !0,
                onEnter: function (O) {
                  O.style.display = 'block';
                },
                onExited: function (O) {
                  O.style.display = 'none';
                },
                children: F,
              });
            };
          return (
            (0, r.useEffect)(
              function () {
                return (
                  x(),
                  function () {
                    var P;
                    (P = o.current) === null || P === void 0 || P.remove();
                  }
                );
              },
              [n.target]
            ),
            (0, e.jsx)(S0, {
              children: (0, e.jsx)('div', {
                className: v,
                style: n.style,
                ref: f,
                onClick: l,
                children: p(),
              }),
            })
          );
        },
        P0 = (0, r.memo)(D0),
        Qt = fn(46677),
        wa,
        F0 = '#e8f3ff',
        z0 = '#e8ffea',
        E0 = '#fef7e8',
        O0 = '#feece8',
        M0 = '#253757',
        R0 = '#22482c',
        I0 = '#573d25',
        L0 = '#553332',
        B0 = '#4e5969',
        A0 = '#1d2129',
        Z0 = '#ffffffb3',
        H0 = '#ffffff',
        W0 = S.concisFontMd,
        Y0 = S.concisRadiusXs,
        $0 = S.concisPrimaryColor,
        X0 = S.concisInfoColor,
        V0 = S.concisWarningColor,
        J0 = S.concisDangerColor,
        G0 = S.concisFontLg,
        U0 = S.concisFontXs,
        Sa = S.concisTransformSm,
        K0 = `
.concis-alert,
.concis-dark-alert {
  width: 100%;
  padding: 12px 15px;
  font-size: `
          .concat(
            W0,
            `;
  text-align: left;
  display: flex;
  border-radius: `
          )
          .concat(
            Y0,
            `;
  justify-content: space-between;

  .alert-content {
    display: flex;
    color: `
          )
          .concat(
            B0,
            `;

    .alert-icon {
      margin-right: `
          )
          .concat(
            Sa,
            `;

      &-info {
        color: `
          )
          .concat(
            $0,
            `;
      }

      &-success {
        color: `
          )
          .concat(
            X0,
            `;
      }

      &-warning {
        color: `
          )
          .concat(
            V0,
            `;
      }

      &-error {
        color: `
          )
          .concat(
            J0,
            `;
      }
    }

    .alert-text {
      display: flex;
      flex-direction: column;

      .title {
        font-size: `
          )
          .concat(
            G0,
            `;
        margin-bottom: `
          )
          .concat(
            Sa,
            `;
        color: `
          )
          .concat(
            A0,
            `;
      }
    }
  }

  .close-icon {
    font-size: `
          )
          .concat(
            U0,
            `;
    cursor: pointer;
  }
}

.concis-dark-alert-info {
  background-color: `
          )
          .concat(
            M0,
            `;
}

.concis-dark-alert-success {
  background-color: `
          )
          .concat(
            R0,
            `;
}

.concis-dark-alert-warning {
  background-color: `
          )
          .concat(
            I0,
            `;
}

.concis-dark-alert-error {
  background-color: `
          )
          .concat(
            L0,
            `;
}

.concis-alert-info {
  background-color: `
          )
          .concat(
            F0,
            `;
}

.concis-alert-success {
  background-color: `
          )
          .concat(
            z0,
            `;
}

.concis-alert-warning {
  background-color: `
          )
          .concat(
            E0,
            `;
}

.concis-alert-error {
  background-color: `
          )
          .concat(
            O0,
            `;
}

.concis-dark-alert {
  .alert-content {
    color: `
          )
          .concat(
            Z0,
            `;

    .alert-text .title {
      color: `
          )
          .concat(
            H0,
            `;
    }
  }
}
`
          ),
        Q0 = `
.fadeContent-enter,
.fadeContent-appear {
  opacity: 0;
}

.fadeContent-enter-active,
.fadeContent-appear-active {
  opacity: 1;
  transition: opacity 200ms;
}

.fadeContent-exit {
  opacity: 1;
}

.fadeContent-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
`,
        q0 = cn.ZP.div(
          wa ||
            (wa = an()([
              `
  `,
              `
  `,
              `
`,
            ])),
          K0,
          Q0
        ),
        nh = function (n, i) {
          var a = n.style,
            d = n.className,
            h = n.type,
            f = h === void 0 ? 'info' : h,
            o = n.title,
            u = n.content,
            c = n.showClear,
            j = c === void 0 ? !1 : c,
            v = n.showIcon,
            y = v === void 0 ? !0 : v,
            _ = n.closeElement,
            x = n.onClose,
            l = (0, r.useState)(!0),
            p = H()(l, 2),
            P = p[0],
            E = p[1],
            F = (0, r.useContext)(xn),
            z = F.prefixCls,
            O = F.darkTheme,
            W = hn(
              z,
              d,
              'concis-'.concat(O ? 'dark-' : '', 'alert-').concat(f),
              O ? 'concis-dark-alert' : 'concis-alert'
            ),
            A = (0, r.useMemo)(
              function () {
                switch (f) {
                  case 'info':
                    return (0, e.jsx)(Qt.Z, { className: 'alert-icon-info' });
                  case 'success':
                    return (0, e.jsx)(He.Z, { className: 'alert-icon-success' });
                  case 'warning':
                    return (0, e.jsx)(Qt.Z, { className: 'alert-icon-warning' });
                  case 'error':
                    return (0, e.jsx)(Ze.Z, { className: 'alert-icon-error' });
                  default:
                    return (0, e.jsx)(Qt.Z, { className: 'alert-icon-info' });
                }
              },
              [f]
            ),
            I = function () {
              E(!1), x && x();
            };
          return (0, e.jsx)(q0, {
            children: (0, e.jsx)(Tn.Z, {
              in: P,
              timeout: 200,
              appear: !0,
              mountOnEnter: !0,
              classNames: 'fadeContent',
              unmountOnExit: !0,
              onEnter: function (M) {
                M.style.display = 'flex';
              },
              onExited: function (M) {
                M.style.display = 'none';
              },
              children: (0, e.jsxs)('div', {
                className: W,
                style: a,
                ref: i,
                children: [
                  (0, e.jsxs)('div', {
                    className: 'alert-content',
                    children: [
                      y && (0, e.jsx)('div', { className: 'alert-icon', children: A }),
                      (0, e.jsxs)('div', {
                        className: 'alert-text',
                        children: [o && (0, e.jsx)('div', { className: 'title', children: o }), u],
                      }),
                    ],
                  }),
                  j &&
                    (0, e.jsx)('div', {
                      className: 'close-icon',
                      onClick: I,
                      children: _ || (0, e.jsx)(An.Z, {}),
                    }),
                ],
              }),
            }),
          });
        },
        eh = (0, r.forwardRef)(nh),
        ja,
        th = '48px',
        rh = '#a9aeb8',
        oh = '#c4c7ce',
        ih = '#78787a',
        ah = '#656566',
        ch = S.concisTransformSm,
        lh = `
  .concis-dark-empty {
    .empty-icon {
      color: `
          .concat(
            ih,
            `;
    }

    .empty-text {
      color: `
          )
          .concat(
            ah,
            `;
    }
  }
  `
          ),
        sh = cn.ZP.div(
          ja ||
            (ja = an()([
              `
  .concis-empty,
  .concis-dark-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: `,
              ` 0;

    .empty-icon {
      width: 1em;
      height: 1em;
      font-size: `,
              `;
      color: `,
              `;
    }

    .empty-text {
      margin-top: 8px;
      color: `,
              `;
    }
  }

  `,
              `
`,
            ])),
          ch,
          th,
          rh,
          oh,
          lh
        ),
        dh = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.icon,
            f = n.description,
            o = f === void 0 ? '\u6682\u65E0\u6570\u636E' : f,
            u = (0, r.useContext)(xn),
            c = u.prefixCls,
            j = u.darkTheme,
            v = hn(c, a, j ? 'concis-dark-empty' : 'concis-empty');
          return (0, e.jsx)(sh, {
            children: (0, e.jsxs)('div', {
              className: v,
              style: d,
              ref: i,
              children: [
                h ||
                  (0, e.jsx)('svg', {
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '4',
                    viewBox: '0 0 48 48',
                    'aria-hidden': 'true',
                    focusable: 'false',
                    className: 'empty-icon',
                    children: (0, e.jsx)('path', {
                      d: 'M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z',
                    }),
                  }),
                (0, e.jsx)('span', { className: 'empty-text', children: o }),
              ],
            }),
          });
        },
        uh = (0, r.forwardRef)(dh),
        Na,
        _a,
        fh = '#e8ebf0',
        hh = '#333e59',
        ph = '#ffffff14',
        vh = '#ffffffe6';
      function gh(t, n) {
        return t ? 'transparent' : n;
      }
      var mh = (0, cn.iv)(
          Na ||
            (Na = an()([
              `
  .concis-dark-tag {
    background-color: `,
              `;
    color: `,
              `;
  }
`,
            ])),
          ph,
          vh
        ),
        xh = cn.ZP.span(
          _a ||
            (_a = an()([
              `
  .concis-tag,
  .concis-dark-tag {
    display: inline-block;
    padding: 0 8px;
    height: `,
              `;
    line-height: `,
              `;
    border-radius: 2px;
    background-color: `,
              `;
    color: `,
              `;
    font-size: 12px;
    cursor: pointer;
    transition: 0.2s linear;
    color: `,
              `;
    background: `,
              `;

    &:hover {
      opacity: 0.8;
    }

    .tag-content {
      display: flex;
      align-items: center;

      .close-icon {
        font-size: 10px;
        margin-left: 6px;
      }
    }
  }
  `,
              `
`,
            ])),
          function (t) {
            var n = t.size;
            return n;
          },
          function (t) {
            var n = t.size;
            return n;
          },
          fh,
          hh,
          function (t) {
            var n = t.color;
            return n;
          },
          function (t) {
            var n = t.isCheckable,
              i = t.tagBackground;
            return gh(n, i);
          },
          mh
        ),
        bh = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = h === void 0 ? {} : h,
            o = n.color,
            u = n.size,
            c = u === void 0 ? 'default' : u,
            j = n.tagBackground,
            v = n.checkable,
            y = v === void 0 ? !1 : v,
            _ = n.closeable,
            x = _ === void 0 ? !1 : _,
            l = n.defaultChecked,
            p = l === void 0 ? !0 : l,
            P = n.clickCallback,
            E = n.checkCallback,
            F = n.closeCallback,
            z = (0, r.useState)(p),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)(!0),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useContext)(xn),
            Z = Q.prefixCls,
            J = Q.darkTheme,
            R = hn(Z, d, J ? 'concis-dark-tag' : 'concis-tag'),
            q = function () {
              P && P(), y && y && (A(!W), E && E(!W));
            },
            V = function () {
              Y(!1), F && F();
            },
            nn = function () {
              var G = { large: '32px', medium: '28px', default: '24px', small: '20px' };
              return G[c] || G.default;
            };
          return M
            ? (0, e.jsx)(xh, {
                size: nn,
                color: o,
                tagBackground: j,
                isCheckable: y && !W,
                children: (0, e.jsx)('div', {
                  className: R,
                  style: f,
                  ref: i,
                  onClick: q,
                  children: (0, e.jsxs)('div', {
                    className: 'tag-content',
                    children: [
                      (0, e.jsx)('div', { className: 'tag-text', children: a }),
                      x && (0, e.jsx)(An.Z, { className: 'close-icon', onClick: V }),
                    ],
                  }),
                }),
              })
            : (0, e.jsx)(e.Fragment, {});
        },
        yh = (0, r.forwardRef)(bh),
        Ta,
        Da = '#4e5969',
        kh = '#cdd1d8',
        Ch = '#ffffffb3',
        wh = '#ffffff4d',
        Sh = S.concisFontMd,
        jh = cn.ZP.div(
          Ta ||
            (Ta = an()([
              `
  .concis-breadcrumb,
  .concis-dark-breadcrumb {
    display: flex;
    font-size: `,
              `;
    align-items: center;

    .concis-breadcrumb-item {
      color: `,
              `;
    }

    .concis-breadcrumb-item-ellipse {
      position: relative;
      bottom: 3px;
      color: `,
              `;
    }

    .concis-breadcrumb-item-separator {
      margin: 0 12px;
      color: `,
              `;
    }
  }

  .concis-dark-breadcrumb {
    .concis-breadcrumb-item,
    .concis-breadcrumb-item-ellipse {
      color: `,
              `;
    }

    .concis-breadcrumb-item-separator {
      color: `,
              `;
    }
  }
`,
            ])),
          Sh,
          Da,
          Da,
          kh,
          Ch,
          wh
        ),
        Nh = function (n, i) {
          var a = n.children;
          return (0, e.jsx)('div', { className: 'concis-breadcrumb-item', ref: i, children: a });
        },
        Pa = (0, r.forwardRef)(Nh);
      Pa.displayName = 'BreadcrumbItem';
      var _h = Pa,
        Th = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = n.separator,
            o = f === void 0 ? '/' : f,
            u = n.maxCount,
            c = r.Children.toArray(a),
            j = (0, r.useContext)(xn),
            v = j.prefixCls,
            y = j.darkTheme,
            _ = hn(v, d, y ? 'concis-dark-breadcrumb' : 'concis-breadcrumb'),
            x = (0, r.useMemo)(
              function () {
                var l = u && u < c.length ? c.slice(0, u) : c;
                return l.map(function (p, P) {
                  return (0,
                  e.jsxs)(r.Fragment, { children: [p, P !== c.length - 1 && (0, e.jsx)('span', { className: 'concis-breadcrumb-item-separator', children: o })] }, P);
                });
              },
              [c, a]
            );
          return (0, e.jsx)(jh, {
            children: (0, e.jsxs)('div', {
              className: _,
              style: h,
              ref: i,
              children: [
                x,
                u &&
                  u < c.length &&
                  (0, e.jsx)('span', {
                    className: 'concis-breadcrumb-item-ellipse',
                    children: '...',
                  }),
              ],
            }),
          });
        },
        Dh = (0, r.forwardRef)(Th),
        qt = Dh;
      (qt.displayName = 'Breadcrumb'), (qt.Item = _h);
      var Ph = qt,
        Fh = fn(95454),
        Fa,
        za = 0.6,
        zh = '#333232',
        nr = S.concisTransformXs,
        Eh = S.concisRadiusXs,
        Oh = S.concisPrimaryColor,
        Mh = S.concisDangerColor,
        Rh = S.concisInfoColor,
        Ih = S.concisWarningColor,
        Lh = S.concisDarkPrimaryColor,
        Bh = S.concisDarkDangerColor,
        Ah = S.concisDarkInfoColor,
        Zh = S.concisDarkWarningColor,
        Hh = `
  .concis-dark-link {
    &-primary {
      color: `
          .concat(
            Lh,
            `;
    }

    &-error {
      color: `
          )
          .concat(
            Bh,
            `;
    }

    &-success {
      color: `
          )
          .concat(
            Ah,
            `;
    }

    &-warning {
      color: `
          )
          .concat(
            Zh,
            `;
    }

    &-disabled {
      opacity: `
          )
          .concat(
            za,
            `;
      cursor: not-allowed;
    }

    .concis-link-icon {
      display: inline-block;
      margin-right: `
          )
          .concat(
            nr,
            `;
    }

    &:not(&-disabled):hover {
      background-color: `
          )
          .concat(
            zh,
            `;
    }
  }
  `
          ),
        Wh = cn.ZP.span(
          Fa ||
            (Fa = an()([
              `
  .concis-link,
  .concis-dark-link {
    display: inline-block;
    cursor: pointer;
    padding: `,
              ` 3px;
    transition: 0.2s linear;
    border-radius: `,
              `;
    text-decoration: none;
  }

  .concis-link {
    &-primary {
      color: `,
              `;
    }

    &-error {
      color: `,
              `;
    }

    &-success {
      color: `,
              `;
    }

    &-warning {
      color: `,
              `;
    }

    &-disabled {
      opacity: `,
              `;
      cursor: not-allowed;
    }

    &-icon {
      display: inline-block;
      margin-right: `,
              `;
    }
  }

  `,
              `
`,
            ])),
          nr,
          Eh,
          Oh,
          Mh,
          Rh,
          Ih,
          za,
          nr,
          Hh
        ),
        Yh = function (n, i) {
          var a = n.children,
            d = n.className,
            h = n.style,
            f = n.href,
            o = n.status,
            u = o === void 0 ? 'primary' : o,
            c = n.disabled,
            j = n.icon,
            v = j === void 0 ? !1 : j,
            y = (0, r.useContext)(xn),
            _ = y.prefixCls,
            x = y.darkTheme,
            l = hn(
              _,
              d,
              x ? 'concis-dark-link' : 'concis-link',
              'concis-link-'.concat(u),
              c ? 'concis-link-disabled' : null
            ),
            p = !c && f ? 'a' : 'span';
          return (0, e.jsx)(Wh, {
            children: (0, e.jsxs)(p, {
              className: l,
              style: h,
              href: f,
              ref: i,
              children: [
                v &&
                  (0, e.jsx)('div', {
                    className: 'concis-link-icon',
                    children: v === !0 ? (0, e.jsx)(Fh.Z, {}) : v,
                  }),
                a,
              ],
            }),
          });
        },
        Ea = (0, r.forwardRef)(Yh);
      Ea.displayName = 'Link';
      var $h = Ea,
        Xn = '#49494b',
        Oa = '#373739',
        Hn = S.concisDarkPrimaryColor,
        we = S.concisDarkDangerColor,
        Se = S.concisDarkInfoColor,
        je = S.concisDarkWarningColor,
        Xh = `
  .concis-dark-dropdown {
    .concis-dropdown-result-default {
      color: #ffffffe6;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: `
          .concat(
            Hn,
            `;
      }
    }

    .concis-dropdown-result-default-active {
      color: `
          )
          .concat(
            Hn,
            `;
    }

    .concis-dropdown-result-primary {
      border: 1px solid `
          )
          .concat(
            Hn,
            `;
      color: `
          )
          .concat(
            Hn,
            `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `
          )
          .concat(
            Hn,
            `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `
          )
          .concat(
            Xn,
            `;
            color: `
          )
          .concat(
            Hn,
            `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `
          )
          .concat(
            Xn,
            `;
              color: `
          )
          .concat(
            Hn,
            `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-primary-active {
      color: #fff;
      background-color: `
          )
          .concat(
            Hn,
            `;
    }

    .concis-dropdown-result-error {
      border: 1px solid `
          )
          .concat(
            we,
            `;
      color: `
          )
          .concat(
            we,
            `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `
          )
          .concat(
            we,
            `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `
          )
          .concat(
            Xn,
            `;
            color: `
          )
          .concat(
            we,
            `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `
          )
          .concat(
            Xn,
            `;
              color: `
          )
          .concat(
            we,
            `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-error-active {
      color: #fff;
      background-color: `
          )
          .concat(
            we,
            `;
    }

    .concis-dropdown-result-warning {
      border: 1px solid `
          )
          .concat(
            je,
            `;
      color: `
          )
          .concat(
            je,
            `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `
          )
          .concat(
            je,
            `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `
          )
          .concat(
            Xn,
            `;
            color: `
          )
          .concat(
            je,
            `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `
          )
          .concat(
            Xn,
            `;
              color: `
          )
          .concat(
            je,
            `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-warning-active {
      color: #fff;
      background-color: `
          )
          .concat(
            je,
            `;
    }

    .concis-dropdown-result-success {
      border: 1px solid `
          )
          .concat(
            Se,
            `;
      color: `
          )
          .concat(
            Se,
            `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `
          )
          .concat(
            Se,
            `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `
          )
          .concat(
            Xn,
            `;
            color: `
          )
          .concat(
            Se,
            `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `
          )
          .concat(
            Xn,
            `;
              color: `
          )
          .concat(
            Se,
            `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-success-active {
      color: #fff;
      background-color: `
          )
          .concat(
            Se,
            `;
    }

    .concis-dropdown-content {
      background: `
          )
          .concat(
            Oa,
            `;
      border: 1px solid #535355;

      .list {
        color: #ffffffe6;

        &:hover:not(.list-disabled) {
          background-color: `
          )
          .concat(
            Xn,
            `;
          color: `
          )
          .concat(
            Hn,
            `;
        }

        .sub-list {
          background: `
          )
          .concat(
            Oa,
            `;
          border: 1px solid #535355;

          &-item {
            color: #ffffffe6;

            &:hover:not(.sub-list-item-disabled) {
              background-color: #49494b;
              color: `
          )
          .concat(
            Hn,
            `;
            }
          }
        }
      }
    }
  }
`
          ),
        Vh = `
  .fadeContent-enter,
  .fadeContent-appear {
    opacity: 0;
  }

  .fadeContent-enter-active,
  .fadeContent-appear-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .fadeContent-exit {
    opacity: 1;
  }

  .fadeContent-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`,
        Ma,
        Je = '#e8eef4',
        Ra = '#fbe2e2',
        Ia = '#f8ebdc',
        La = '#e6fad5',
        Jh = S.concisFontMd,
        Ba = S.concisFontSm,
        Ln = S.concisPrimaryColor,
        Gh = S.concisTransformLg,
        Uh = S.concisTransformSm,
        Kh = S.concisRadiusXs,
        Ne = S.concisDangerColor,
        _e = S.concisWarningColor,
        Te = S.concisInfoColor,
        Qh = cn.ZP.span(
          Ma ||
            (Ma = an()([
              `
  .concis-dropdown,
  .concis-dark-dropdown {
    display: inline-block;
    position: relative;

    .concis-dropdown-result {
      font-size: `,
              `;
      transition: 0.2s linear;
      height: 30px;
      cursor: pointer;

      .drop-icon {
        margin-left: 8px;
        font-size: `,
              `;
      }
    }

    .concis-dropdown-content-colums {
      width: `,
              `;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .list {
        padding: 6px 12px;
        border-radius: 4px;
        min-width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    //\u9ED8\u8BA4\u6D45\u8272\u4E3B\u9898
    .concis-dropdown-result-default {
      color: #1d2129;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: `,
              `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `,
              `;
            color: `,
              `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `,
              `;
              color: `,
              `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-default-active {
      color: `,
              `;
    }

    .concis-dropdown-result-primary,
    .concis-dropdown-result-error,
    .concis-dropdown-result-success,
    .concis-dropdown-result-warning {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: `,
              ' ',
              `;
      border-radius: `,
              `;
    }
    //primary\u6309\u94AE\u5F0F\u6D45\u8272\u4E3B\u9898
    .concis-dropdown-result-primary {
      border: 1px solid `,
              `;
      color: `,
              `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `,
              `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `,
              `;
            color: `,
              `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `,
              `;
              color: `,
              `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-primary-active {
      color: #fff;
      background-color: `,
              `;
    }
    //error\u6309\u94AE\u5F0F\u6D45\u8272\u4E3B\u9898
    .concis-dropdown-result-error {
      border: 1px solid `,
              `;
      color: `,
              `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `,
              `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `,
              `;
            color: `,
              `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `,
              `;
              color: `,
              `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-error-active {
      color: #fff;
      background-color: `,
              `;
    }
    //warning\u6309\u94AE\u5F0F\u6D45\u8272\u4E3B\u9898
    .concis-dropdown-result-warning {
      border: 1px solid `,
              `;
      color: `,
              `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `,
              `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `,
              `;
            color: `,
              `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `,
              `;
              color: `,
              `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-warning-active {
      color: #fff;
      background-color: `,
              `;
    }
    //success\u6309\u94AE\u5F0F\u6D45\u8272\u4E3B\u9898
    .concis-dropdown-result-success {
      border: 1px solid `,
              `;
      color: `,
              `;

      &:hover:not(.concis-dropdown-result-disabled) {
        color: #fff;
        background-color: `,
              `;
      }

      ~ .concis-dropdown-content {
        .list {
          &:hover:not(.list-disabled) {
            background-color: `,
              `;
            color: `,
              `;
          }

          .sub-list-item {
            &:hover:not(.sub-list-item-disabled) {
              background-color: `,
              `;
              color: `,
              `;
            }
          }
        }
      }
    }

    .concis-dropdown-result-success-active {
      color: #fff;
      background-color: `,
              `;
    }

    .concis-dropdown-result-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    //\u5217\u8868
    .concis-dropdown-content {
      position: absolute;
      border-radius: 3px;
      border: 1px solid #e5e6eb;
      background: #fff;
      z-index: 9999;

      .list {
        height: 36px;
        line-height: 36px;
        color: #1d2129;
        padding: 4px 16px;
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;

        &:hover:not(.list-disabled) {
          background-color: `,
              `;
          color: `,
              `;
        }

        .list-option {
          margin-left: 5px;
        }

        .drop-down-icon {
          font-size: `,
              `;
          margin-left: 5px;
        }

        .sub-list {
          position: absolute;
          left: 100%;
          top: 0;
          border-radius: 3px;
          border: 1px solid #e5e6eb;
          background: #fff;
          z-index: 9999;

          &-item {
            height: 36px;
            line-height: 36px;
            color: #1d2129;
            padding: 4px 16px;
            cursor: pointer;

            .list-option {
              margin-left: 5px;
            }
          }

          &-item-disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }
      }

      .list-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    //position = bottom
    .concis-dropdown-content-bottom {
      top: 100%;
      left: 0;
    }
    //position = top
    .concis-dropdown-content-top {
      bottom: 100%;
      left: 0;
    }
    //position = right
    .concis-dropdown-content-right {
      bottom: 50%;
      left: 100%;
    }
    //position = left
    .concis-dropdown-content-left {
      bottom: 50%;
      right: 100%;
    }
  }

  `,
              `

  `,
              `
`,
            ])),
          Jh,
          Ba,
          function (t) {
            var n = t.columsWidth;
            return ''.concat(n, 'px');
          },
          Ln,
          Je,
          Ln,
          Je,
          Ln,
          Ln,
          Gh,
          Uh,
          Kh,
          Ln,
          Ln,
          Ln,
          Je,
          Ln,
          Je,
          Ln,
          Ln,
          Ne,
          Ne,
          Ne,
          Ra,
          Ne,
          Ra,
          Ne,
          Ne,
          _e,
          _e,
          _e,
          Ia,
          _e,
          Ia,
          _e,
          _e,
          Te,
          Te,
          Te,
          La,
          Te,
          La,
          Te,
          Te,
          Je,
          Ln,
          Ba,
          Xh,
          Vh
        ),
        qh = function (n, i) {
          var a = n.placeholder,
            d = a === void 0 ? 'Please select' : a,
            h = n.data,
            f = n.className,
            o = n.style,
            u = n.disabled,
            c = n.type,
            j = c === void 0 ? 'click' : c,
            v = n.status,
            y = v === void 0 ? 'default' : v,
            _ = n.colums,
            x = _ === void 0 ? !1 : _,
            l = n.columsWidth,
            p = l === void 0 ? 500 : l,
            P = n.position,
            E = P === void 0 ? 'bottom' : P,
            F = (0, r.useState)(!1),
            z = H()(F, 2),
            O = z[0],
            W = z[1],
            A = (0, r.useState)(d),
            I = H()(A, 2),
            X = I[0],
            M = I[1],
            Y = (0, r.useState)(h),
            Q = H()(Y, 2),
            Z = Q[0],
            J = Q[1],
            R = (0, r.useRef)(null),
            q = (0, r.useContext)(xn),
            V = q.prefixCls,
            nn = q.darkTheme,
            ln = nn ? 'concis-dark-dropdown' : 'concis-dropdown',
            G = hn(V, f, ln);
          (0, r.useEffect)(function () {
            J(function (k) {
              return k == null
                ? void 0
                : k.map(function (b) {
                    return typeof b != 'string' && b !== null && b !== void 0 && b.children
                      ? tn()(tn()({}, b), {}, { visible: !1 })
                      : b;
                  });
            });
            var w;
            return (
              j === 'click' && (w = Ie(R, B)),
              function () {
                j === 'click' && w();
              }
            );
          }, []);
          var B = function () {
              W(!1), T();
            },
            T = function () {
              J(function (k) {
                return k.map(function (b) {
                  return typeof b != 'string' && b !== null && b !== void 0 && b.children
                    ? tn()(tn()({}, b), {}, { visible: !1 })
                    : b;
                });
              });
            },
            m = function (k, b) {
              typeof k != 'string' &&
                k !== null &&
                k !== void 0 &&
                k.children &&
                j === 'hover' &&
                J(function (g) {
                  return g.map(function (L) {
                    return typeof L != 'string' && k === L
                      ? tn()(tn()({}, L), {}, { visible: b })
                      : L;
                  });
                });
            },
            s = function (k, b) {
              b.stopPropagation(),
                !(typeof k != 'string' && k.disabled) &&
                  (typeof k == 'string'
                    ? (M(k), W(!1), T())
                    : k != null && k.children && j === 'click'
                    ? J(function (g) {
                        return g.map(function (L) {
                          return typeof L != 'string' && k === L
                            ? tn()(tn()({}, L), {}, { visible: !0 })
                            : L;
                        });
                      })
                    : (k != null && k.children && j === 'hover') ||
                      (M(k.content), W(!1), T(), k.link && (window.location.href = k.link)));
            },
            N = function (k, b) {
              u || j !== 'hover' || (b.stopPropagation(), W(k === 'enter'));
            },
            C = function (k) {
              var b = k.item,
                g = k.index,
                L = k.children;
              return (0, e.jsxs)(
                'div',
                {
                  className: hn('list', typeof b != 'string' && b.disabled ? 'list-disabled' : ''),
                  onClick: function (K) {
                    return s(b, K);
                  },
                  onMouseEnter: function () {
                    return m(b, !0);
                  },
                  onMouseLeave: function () {
                    return m(b, !1);
                  },
                  children: [
                    typeof b != 'string' && b.icon && b.icon,
                    (0, e.jsx)('div', {
                      className: 'list-option',
                      children: typeof b == 'string' ? b : b == null ? void 0 : b.content,
                    }),
                    L,
                  ],
                },
                g
              );
            },
            D = (0, r.useMemo)(
              function () {
                return x
                  ? Z == null
                    ? void 0
                    : Z.map(function (w, k) {
                        return (0, e.jsx)(C, { item: w }, k);
                      })
                  : Z == null
                  ? void 0
                  : Z.map(function (w, k) {
                      return (0, e.jsxs)(
                        C,
                        {
                          item: w,
                          children: [
                            typeof w != 'string' &&
                              (w == null ? void 0 : w.children) &&
                              (0, e.jsx)(pe.Z, { className: 'drop-down-icon' }),
                            typeof w != 'string' &&
                            w !== null &&
                            w !== void 0 &&
                            w.children &&
                            w.visible
                              ? (0, e.jsx)(Tn.Z, {
                                  in: w.visible,
                                  timeout: 200,
                                  appear: !0,
                                  mountOnEnter: !0,
                                  classNames: 'fadeContent',
                                  unmountOnExit: !0,
                                  onEnter: function (g) {
                                    g.style.display = 'inline-block';
                                  },
                                  onExited: function (g) {
                                    g.style.display = 'none';
                                  },
                                  children: (0, e.jsx)('div', {
                                    className: 'sub-list',
                                    children:
                                      w == null
                                        ? void 0
                                        : w.children.map(function (b, g) {
                                            return (0, e.jsxs)(
                                              'div',
                                              {
                                                className: hn(
                                                  'sub-list-item',
                                                  typeof b != 'string' && b.disabled
                                                    ? 'sub-list-item-disabled'
                                                    : ''
                                                ),
                                                onClick: function ($) {
                                                  return s(b, $);
                                                },
                                                children: [
                                                  typeof b != 'string' && b.icon && b.icon,
                                                  (0, e.jsx)('div', {
                                                    className: 'list-option',
                                                    children:
                                                      typeof b == 'string'
                                                        ? b
                                                        : b == null
                                                        ? void 0
                                                        : b.content,
                                                  }),
                                                ],
                                              },
                                              g
                                            );
                                          }),
                                  }),
                                })
                              : (0, e.jsx)(e.Fragment, {}),
                          ],
                        },
                        k
                      );
                    });
              },
              [y, X, O, Z, E]
            );
          return (0, e.jsx)(Qh, {
            columsWidth: p,
            children: (0, e.jsxs)('div', {
              className: G,
              style: o,
              ref: function (k) {
                (R.current = k), Qe(i, k);
              },
              children: [
                (0, e.jsxs)('div', {
                  className: hn(
                    'concis-dropdown-result',
                    'concis-dropdown-result-'.concat(y),
                    u ? 'concis-dropdown-result-disabled' : '',
                    O ? 'concis-dropdown-result-'.concat(y, '-active') : ''
                  ),
                  onClick: function (k) {
                    u || j !== 'click' || (k.stopPropagation(), W(!O));
                  },
                  onMouseEnter: function (k) {
                    return N('enter', k);
                  },
                  onMouseLeave: function (k) {
                    return N('leave', k);
                  },
                  children: [X, (0, e.jsx)(Ue.Z, { className: 'drop-icon' })],
                }),
                (0, e.jsx)(Tn.Z, {
                  in: O,
                  timeout: 200,
                  appear: !0,
                  mountOnEnter: !0,
                  classNames: 'fadeContent',
                  unmountOnExit: !0,
                  onEnter: function (k) {
                    k.style.display = x ? 'flex' : 'inline-block';
                  },
                  onExited: function (k) {
                    k.style.display = 'none';
                  },
                  children: (0, e.jsx)('div', {
                    className: hn(
                      'concis-dropdown-content',
                      x ? 'concis-dropdown-content-colums' : '',
                      'concis-dropdown-content-'.concat(E)
                    ),
                    onMouseEnter: function (k) {
                      return N('enter', k);
                    },
                    onMouseLeave: function (k) {
                      return N('leave', k);
                    },
                    children: D,
                  }),
                }),
              ],
            }),
          });
        },
        Aa = (0, r.forwardRef)(qh);
      Aa.displayName = 'Dropdown';
      var np = Aa,
        Za,
        Ha = S.concisTransformSm,
        ht = S.concisTransformLg,
        Wa = S.concisRadiusXs,
        Ya = S.concisTransformMd,
        er = ''.concat(Ha, ' 14px 14px'),
        tr = '70px',
        ep = `
.concis-dark-nav {
    .concis-nav-bar {
      color: #fff;
    }
  }
`,
        tp = `
  .fadeIn-enter,
  .fadeIn-appear {
    opacity: 0;
  }

  .fadeIn-enter-active,
  .fadeIn-appear-active {
    opacity: 1;
    transition: opacity 0.2s linear;
  }

  .fadeIn-exit {
    opacity: 1;
  }

  .fadeIn-exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  .dialogFade-enter,
  .dialogFade-appear {
    opacity: 0;
  }

  .dialogFade-enter-active,
  .dialogFade-appear-active {
    opacity: 1;
    transition: opacity 0.1s linear;
  }

  .dialogFade-exit {
    opacity: 1;
  }

  .dialogFade-exit-active {
    opacity: 0;
    transition: opacity 0.1s linear;
  }
`,
        rp = cn.ZP.div(
          Za ||
            (Za = an()([
              `
  .concis-nav,
  .concis-dark-nav {
    display: inline-block;

    .concis-nav-left {
      display: inline-block;
      height: `,
              `;
      padding: `,
              `;
    }

    .concis-nav-right {
      display: inline-block;
      height: `,
              `;
      padding: `,
              `;
      margin-left: `,
              `;
    }

    .concis-nav-bar {
      color: #000;
      font-size: 18px;
      display: flex;
      height: `,
              `;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      transition: 0.2s linear;

      &-option {
        height: 100%;
        padding: `,
              `;
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }
      }

      .line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #1890ff;
        transition: 0.2s linear;
        z-index: 500;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 45%;
          width: `,
              `;
          height: `,
              `;
          background: url(https://thingsboard.io/images/head-arrow.svg) no-repeat;
        }
      }

      .line-dialog {
        position: absolute;
        top: 100%;
        transition: 0.2s linear;
        background-color: #fff;
        z-index: 499;
        border-radius: `,
              `;
        color: #000;
        padding: `,
              ' ',
              `;
        overflow: hidden;
        box-shadow: 0 0 20px 4px #9aa1b126, 0 4px 80px -8px #24282f40, 0 4px 4px -2px #5b5e6926;
      }

      .line-dialog2 {
        position: absolute;
        top: 100%;
        background-color: #fff;
        z-index: 1;
        border-radius: `,
              `;
        color: #000;
        padding: `,
              ' ',
              `;
        opacity: 0;
      }
    }
  }

  `,
              `

  `,
              `
`,
            ])),
          tr,
          er,
          tr,
          er,
          ht,
          tr,
          er,
          ht,
          Ha,
          Wa,
          Ya,
          ht,
          Wa,
          Ya,
          ht,
          ep,
          tp
        ),
        op = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.navData,
            f = n.navContent,
            o = n.leftSlot,
            u = n.rightSlot,
            c = (0, r.useState)(!1),
            j = H()(c, 2),
            v = j[0],
            y = j[1],
            _ = (0, r.useState)({ width: '0', left: '0' }),
            x = H()(_, 2),
            l = x[0],
            p = x[1],
            P = (0, r.useState)({ width: '0', height: '0', left: '0' }),
            E = H()(P, 2),
            F = E[0],
            z = E[1],
            O = (0, r.useState)(-1),
            W = H()(O, 2),
            A = W[0],
            I = W[1],
            X = (0, r.createRef)(),
            M = (0, r.useRef)(),
            Y = (0, r.createRef)(),
            Q = (0, r.createRef)(),
            Z = (0, r.createRef)(),
            J = (0, r.useContext)(xn),
            R = J.prefixCls,
            q = J.darkTheme,
            V = q ? 'concis-dark-nav' : 'concis-nav',
            nn = hn(R, a, V);
          (0, r.useEffect)(function () {
            G();
          }, []),
            (0, r.useEffect)(
              function () {
                z(function () {
                  var s, N, C;
                  return {
                    width: ''.concat(
                      (s = Y.current) === null || s === void 0 ? void 0 : s.offsetWidth,
                      'px'
                    ),
                    height: ''.concat(
                      (N = Y.current) === null || N === void 0 ? void 0 : N.offsetHeight,
                      'px'
                    ),
                    left: ''.concat(
                      M.current.slice(0, A).reduce(function (D, w) {
                        return D + w;
                      }, 0) +
                        (A === 0 ? 14 : 14 + A * 28) -
                        ((C = Y.current) === null || C === void 0 ? void 0 : C.offsetWidth) / 2 +
                        M.current[A] / 2,
                      'px'
                    ),
                  };
                });
              },
              [A]
            );
          var ln = function (N) {
              N.link && (window.location.href = N.link);
            },
            G = (0, r.useCallback)(
              function () {
                var s = [],
                  N = Array.from(X.current.children);
                o && N.shift(),
                  u && N.pop(),
                  N.forEach(function (C) {
                    s.push(C.clientWidth - 28);
                  }),
                  (M.current = s);
              },
              [h, X]
            ),
            B = function (N) {
              v ||
                z(function (C) {
                  return tn()(tn()({}, C), {}, { width: '0', height: '0' });
                }),
                y(!0),
                I(N),
                p(function (C) {
                  var D;
                  return tn()(
                    tn()({}, C),
                    {},
                    {
                      left: ''.concat(
                        M.current.slice(0, N).reduce(function (w, k) {
                          return w + k;
                        }, 0) +
                          (N === 0 ? 14 : 14 + N * 28) +
                          ((o !== void 0 &&
                            ((D = Z.current) === null || D === void 0 ? void 0 : D.offsetWidth)) ||
                            0),
                        'px'
                      ),
                      width: ''.concat(M.current[N], 'px'),
                    }
                  );
                });
            },
            T = function () {
              y(!1), I(-1);
            },
            m = function (N) {
              var C = N.nativeEvent.relatedTarget;
              C.getAttribute('class') !== 'line fadeIn-enter-done' && (y(!1), I(-1));
            };
          return (0, e.jsx)(rp, {
            children: (0, e.jsx)('div', {
              className: nn,
              style: d,
              ref: i,
              onMouseLeave: T,
              children: (0, e.jsxs)('div', {
                className: 'concis-nav-bar',
                ref: X,
                children: [
                  o && (0, e.jsx)('div', { className: 'concis-nav-left', ref: Z, children: o }),
                  h.map(function (s, N) {
                    return (0, e.jsx)(
                      'div',
                      {
                        className: 'concis-nav-bar-option',
                        onMouseEnter: function () {
                          return B(N);
                        },
                        onClick: function () {
                          return ln(s);
                        },
                        children: s.label,
                      },
                      N
                    );
                  }),
                  (0, e.jsx)(Tn.Z, {
                    in: v,
                    timeout: 200,
                    appear: !0,
                    classNames: 'fadeIn',
                    mountOnEnter: !0,
                    onEnter: function (N) {
                      N.style.display = 'inline-block';
                    },
                    onExited: function (N) {
                      N.style.display = 'none';
                    },
                    children: (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)('div', { className: 'line', style: l }),
                        f &&
                          f.length > 0 &&
                          (0, e.jsx)(Tn.Z, {
                            in: v && A !== -1,
                            timeout: 100,
                            appear: !0,
                            classNames: 'dialogFade',
                            mountOnEnter: !0,
                            onEnter: function (N) {
                              N.style.display = 'inline-block';
                            },
                            onExited: function (N) {
                              N.style.display = 'none';
                            },
                            children: (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)('div', {
                                  className: 'line-dialog',
                                  ref: Q,
                                  style: F,
                                  onMouseLeave: m,
                                  children: f[A],
                                }),
                                (0, e.jsx)('div', {
                                  className: 'line-dialog2',
                                  ref: Y,
                                  children: f[A],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                  u && (0, e.jsx)('div', { className: 'concis-nav-right', children: u }),
                ],
              }),
            }),
          });
        },
        ip = (0, r.forwardRef)(op),
        $a,
        ap = '20px',
        cp = 'rgba(36, 36, 36, 0.7)',
        lp = S.concisRadiusXs,
        sp = S.concisTransformMd,
        dp = `
    .fadeContent-enter,
    .fadeContent-appear {
      opacity: 0;
    }
    
    .fadeContent-enter-active,
    .fadeContent-appear-active {
      opacity: 1;
      transition: opacity 200ms;
    }
    
    .fadeContent-exit {
      opacity: 1;
    }
    
    .fadeContent-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }
  `;
      function up(t) {
        return { bottom: t ? '50px' : '-30px', opacity: t ? 1 : 0 };
      }
      var fp = cn.ZP.div(
          $a ||
            ($a = an()([
              `
  .concis-previewJump,
  .concis-dark-previewJump {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: `,
              `;
    cursor: `,
              `;

    .concis-preview-content {
      width: 100%;
      height: 100%;
    }

    .concis-preview-dialog {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: `,
              `;

      &-content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: `,
              `;
        transition: 0.2s linear;

        .text {
          margin-left: `,
              `;
        }
      }
    }

    .concis-preview-dialog-content {
      color: #ffffff;
      `,
              `
    }
  }

  `,
              `
`,
            ])),
          lp,
          function (t) {
            var n = t.disabled;
            return n ? 'not-allowed' : 'pointer';
          },
          cp,
          ap,
          sp,
          function (t) {
            var n = t.visible;
            return up(n);
          },
          dp
        ),
        hp = function (n, i) {
          var a = n.className,
            d = n.style,
            h = n.children,
            f = n.icon,
            o = n.jumpText,
            u = n.jumpContent,
            c = n.link,
            j = n.disabled,
            v = (0, r.useState)(!1),
            y = H()(v, 2),
            _ = y[0],
            x = y[1],
            l = (0, r.useContext)(xn),
            p = l.prefixCls,
            P = l.darkTheme,
            E = hn(p, a, 'concis-'.concat(P ? 'dark-' : '', 'previewJump')),
            F = function () {
              j || (c && (window.location.href = c));
            },
            z = function () {
              j || x(!0);
            },
            O = (0, r.useMemo)(
              function () {
                return (
                  u ||
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      f || (0, e.jsx)(nt.Z, {}),
                      o || (0, e.jsx)('span', { className: 'text', children: 'See more' }),
                    ],
                  })
                );
              },
              [f, o, u]
            );
          return (0, e.jsx)(fp, {
            visible: _,
            disabled: j,
            children: (0, e.jsxs)('div', {
              className: E,
              style: d,
              ref: i,
              onMouseEnter: z,
              onMouseLeave: function () {
                return x(!1);
              },
              children: [
                (0, e.jsx)('div', { className: 'concis-preview-content', children: h }),
                (0, e.jsx)(Tn.Z, {
                  in: _,
                  timeout: 200,
                  appear: !0,
                  mountOnEnter: !0,
                  classNames: 'fadeContent',
                  unmountOnExit: !0,
                  onEnter: function (A) {
                    A.style.display = 'flex';
                  },
                  onExited: function (A) {
                    A.style.display = 'none';
                  },
                  children: (0, e.jsx)('div', { className: 'concis-preview-dialog', onClick: F }),
                }),
                (0, e.jsx)('div', { className: 'concis-preview-dialog-content', children: O }),
              ],
            }),
          });
        },
        pp = (0, r.forwardRef)(hp),
        Xa,
        vp = cn.ZP.div(
          Xa ||
            (Xa = an()([
              `
  .concis-highlight,
  .concis-dark-highlight {
    font-size: 16px;
  }
`,
            ]))
        );
      function gp(t) {
        return t.length ? new RegExp('('.concat(t.join('|'), ')'), 'ig') : null;
      }
      function mp(t) {
        var n = t.text,
          i = t.query,
          a = gp(i);
        if (!a) return [{ text: n, match: !1 }];
        var d = n.split(a).filter(Boolean);
        return d.map(function (h) {
          return { text: h, match: a.test(h) };
        });
      }
      function xp(t) {
        var n = t.text,
          i = t.query;
        if (typeof n != 'string') throw new Error('You must set the children with string type.');
        return (0, r.useMemo)(
          function () {
            return mp({ text: n, query: i });
          },
          [n, i]
        );
      }
      var bp = function (n, i) {
          var a = n.children,
            d = n.query,
            h = n.className,
            f = n.style,
            o = n.styles,
            u = (0, r.useContext)(xn),
            c = u.prefixCls,
            j = u.darkTheme,
            v = hn(c, h, 'concis-'.concat(j ? 'dark-' : '', 'highlight')),
            y = xp({ query: d, text: a }),
            _ = (0, r.useMemo)(
              function () {
                var x = 0,
                  l = 0,
                  p = 0,
                  P = 0,
                  E = '5px',
                  F = '#b2f5ea';
                return {
                  padding: ''
                    .concat((o == null ? void 0 : o.py) || x, 'px ')
                    .concat((o == null ? void 0 : o.px) || l, 'px'),
                  margin: ''
                    .concat((o == null ? void 0 : o.my) || p, 'px ')
                    .concat((o == null ? void 0 : o.mx) || P, 'px'),
                  borderRadius: o != null && o.rounded ? '15px' : E,
                  backgroundColor: o != null && o.bg ? o.bg : F,
                };
              },
              [o]
            );
          return (0, e.jsx)(vp, {
            children: (0, e.jsx)('div', {
              className: v,
              style: f,
              ref: i,
              children:
                y == null
                  ? void 0
                  : y.map(function (x, l) {
                      var p = x.match,
                        P = x.text;
                      return p
                        ? (0, e.jsx)(
                            'span',
                            { className: 'hightlight-text', style: _, children: P },
                            l
                          )
                        : (0, e.jsx)(r.Fragment, { children: P }, l);
                    }),
            }),
          });
        },
        yp = (0, r.forwardRef)(bp),
        Va,
        kp = cn.ZP.div(
          Va ||
            (Va = an()([
              `
  .concis-zoombox,
  .concis-dark-zoombox {
    overflow-x: auto;
    overflow-y: auto;
  }
`,
            ]))
        ),
        Cp = '#484b49',
        wp = '#e5e6eb',
        Sp = function (n) {
          var i = n.children,
            a = n.className,
            d = n.style,
            h = n.notAllowed,
            f = n.noBorder,
            o = n.minWidth,
            u = o === void 0 ? 0 : o,
            c = n.minHeight,
            j = c === void 0 ? 0 : c,
            v = n.maxWidth,
            y = n.maxHeight,
            _ = n.onMoving,
            x = n.onMovingEnd,
            l = n.onMovingStart,
            p = (0, r.useRef)(null),
            P = (0, r.useContext)(xn),
            E = P.prefixCls,
            F = P.darkTheme,
            z = hn(E, a, 'concis-'.concat(F ? 'dark-' : '', 'zoombox ')),
            O = function (I) {
              I.stopPropagation();
              var X = I.currentTarget,
                M = X.getBoundingClientRect(),
                Y = { x: I.clientX, y: I.clientY },
                Q = { x: I.clientX - M.left, y: I.clientY - M.top },
                Z = p.current,
                J = { width: Z.offsetWidth, height: Z.offsetHeight };
              l && l(), ae(window, 'mousemove', R)(), ae(window, 'mouseup', q)();
              function R(V) {
                function nn() {
                  var s = T(J.width + (Y.x - V.clientX), 'width'),
                    N = T(J.height + (Y.y - V.clientY), 'height');
                  m(s, N);
                }
                function ln() {
                  var s = T(J.width - (Y.x - V.clientX), 'width'),
                    N = T(J.height + (Y.y - V.clientY), 'height');
                  m(s, N);
                }
                function G() {
                  var s = T(J.width + (Y.x - V.clientX), 'width'),
                    N = T(J.height - (Y.y - V.clientY), 'height');
                  m(s, N);
                }
                function B() {
                  var s = T(J.width - (Y.x - V.clientX), 'width'),
                    N = T(J.height - (Y.y - V.clientY), 'height');
                  m(s, N);
                }
                function T(s, N) {
                  if (N === 'width') return v && s > v ? v : s < u ? u : s;
                  if (N === 'height') return y && s > y ? y : s < j ? j : s;
                }
                function m(s, N) {
                  (Z.style.width = ''.concat(s, 'px')),
                    (Z.style.height = ''.concat(N, 'px')),
                    _ && _(V, { width: s, height: N });
                }
                Q.x < J.width / 2 && Q.y < J.height / 2
                  ? nn()
                  : Q.x > J.width / 2 && Q.y < J.height / 2
                  ? ln()
                  : Q.x < J.width / 2 && Q.y > J.height / 2
                  ? G()
                  : B();
              }
              function q() {
                ge(window, 'mousemove', R)(), x && x();
              }
            },
            W = (0, r.useMemo)(
              function () {
                return tn()(
                  tn()({}, d),
                  {},
                  {
                    userSelect: h ? 'none' : '',
                    border: f ? 'none' : '2px solid '.concat(F ? Cp : wp),
                  }
                );
              },
              [h, f]
            );
          return (0, e.jsx)(kp, {
            children: (0, e.jsx)('div', {
              className: z,
              style: W,
              ref: p,
              onMouseDown: O,
              children: i,
            }),
          });
        },
        jp = (0, r.memo)(Sp),
        Np = fn(54689),
        rr = fn.n(Np),
        _p = function () {
          return new Promise(function (n) {
            var i = function (h) {
                var f = rr()(h.getEntries()),
                  o;
                try {
                  for (f.s(); !(o = f.n()).done; ) {
                    var u = o.value;
                    u.name === 'first-paint' && (n(u), a.disconnect());
                  }
                } catch (c) {
                  f.e(c);
                } finally {
                  f.f();
                }
              },
              a = new PerformanceObserver(i);
            a.observe({ type: 'paint', buffered: !0 });
          });
        },
        Tp = function () {
          return new Promise(function (n) {
            var i = function (h) {
                var f = rr()(h.getEntries()),
                  o;
                try {
                  for (f.s(); !(o = f.n()).done; ) {
                    var u = o.value;
                    u.name === 'first-contentful-paint' && (n(u), a.disconnect());
                  }
                } catch (c) {
                  f.e(c);
                } finally {
                  f.f();
                }
              },
              a = new PerformanceObserver(i);
            a.observe({ type: 'paint', buffered: !0 });
          });
        },
        Dp = function () {
          return new Promise(function (n) {
            var i = function (h) {
                a && a.disconnect();
                var f = rr()(h.getEntries()),
                  o;
                try {
                  for (f.s(); !(o = f.n()).done; ) {
                    var u = o.value;
                    n(u);
                  }
                } catch (c) {
                  f.e(c);
                } finally {
                  f.f();
                }
              },
              a = new PerformanceObserver(i);
            a.observe({ type: 'largest-contentful-paint', buffered: !0 });
          });
        },
        Up = function () {
          return new Promise(function (n) {
            var i = function a() {
              window.removeEventListener('load', a, !0),
                n({ entryType: 'loadTime', startTime: performance.now() });
            };
            window.addEventListener('load', i, !0);
          });
        },
        Pp = function () {
          var n = window.performance.timing,
            i = n.domainLookupEnd,
            a = n.domainLookupStart;
          return i - a;
        },
        Fp = function () {
          var n = window.performance.timing,
            i = n.connectEnd,
            a = n.connectStart;
          return i - a;
        },
        zp = function () {
          var n = window.performance.timing,
            i = n.responseEnd,
            a = n.requestStart;
          return i - a;
        },
        Ep = function () {
          var n = window.performance.timing,
            i = n.domComplete,
            a = n.domInteractive;
          return i - a;
        },
        Op = function () {
          var n = window.performance.timing,
            i = n.domLoading,
            a = n.fetchStart;
          return i - a;
        },
        Mp = function (n) {
          var i = XMLHttpRequest.prototype.open,
            a = XMLHttpRequest.prototype.send;
          (XMLHttpRequest.prototype.open = function () {
            for (var h = arguments.length, f = new Array(h), o = 0; o < h; o++) f[o] = arguments[o];
            (this.url = f[1]), (this.method = f[0]), i.apply(this, f);
          }),
            (XMLHttpRequest.prototype.send = function () {
              var h = this;
              this.startTime = Date.now();
              var f = function j() {
                (h.endTime = Date.now()), (h.duration = h.endTime - h.startTime);
                var v = h.status,
                  y = h.duration,
                  _ = h.startTime,
                  x = h.endTime,
                  l = h.url,
                  p = h.method,
                  P = {
                    status: v,
                    duration: y,
                    startTime: _,
                    endTime: x,
                    url: l,
                    method: (p || 'GET').toUpperCase(),
                    success: v >= 200 && v < 300,
                    subType: 'xhr',
                    type: 'performance',
                  };
                n(P), h.removeEventListener('loadend', j, !0);
              };
              this.addEventListener('loadend', f, !0);
              for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
                u[c] = arguments[c];
              a.apply(this, u);
            });
        },
        Rp = function (n) {
          var i = window.fetch;
          function a() {
            window.fetch = function (h, f) {
              var o = Date.now(),
                u = {
                  startTime: o,
                  endTime: 0,
                  duration: 0,
                  success: !1,
                  status: 0,
                  url: h,
                  method: ((f == null ? void 0 : f.method) || 'GET').toUpperCase(),
                  subType: 'fetch',
                  type: 'performance',
                };
              return i(h, f)
                .then(function (c) {
                  (u.endTime = Date.now()), (u.duration = u.endTime - u.startTime);
                  var j = c.clone();
                  return (u.status = j.status), (u.success = j.ok), n(u), c;
                })
                .catch(function (c) {
                  throw (
                    ((u.endTime = Date.now()),
                    (u.duration = u.endTime - u.startTime),
                    (u.status = 0),
                    (u.success = !1),
                    n(u),
                    c)
                  );
                });
            };
          }
          a();
        },
        Ip = function () {
          if (!window.performance) return;
          var n = window.performance.getEntriesByType('resource'),
            i = {
              xmlhttprequest: [],
              css: [],
              other: [],
              script: [],
              img: [],
              link: [],
              fetch: [],
              time: new Date().getTime(),
            };
          n.forEach(function (d) {
            var h = i[d.initiatorType];
            h &&
              h.push({
                name: d.name,
                type: 'resource',
                sourceType: d.initiatorType,
                duration: +d.duration.toFixed(2),
                dns: d.domainLookupEnd - d.domainLookupStart,
                tcp: d.connectEnd - d.connectStart,
                redirect: d.redirectEnd - d.redirectStart,
                ttfb: +d.responseStart.toFixed(2),
                protocol: d.nextHopProtocol,
                responseBodySize: d.encodedBodySize,
                resourceSize: d.decodedBodySize,
                isCache: a(d),
                startTime: performance.now(),
              });
          });
          function a(d) {
            return d.transferSize === 0 || (d.transferSize !== 0 && d.encodedBodySize === 0);
          }
          return i;
        },
        Lp = function () {
          return new Promise(function (n, i) {
            var a = document.createElement('script');
            (a.src = 'https://pv.sohu.com/cityjson?ie=utf-8'),
              document.body.appendChild(a),
              (a.onload = function () {
                try {
                  document.body.removeChild(a), n(window.returnCitySN);
                } catch (d) {
                  i(d);
                }
              });
          });
        },
        Bp = function () {
          var n = {};
          return (
            document && ((n.domain = document.domain || ''), (n.title = document.title || '')),
            window &&
              window.screen &&
              ((n.screenHeight = window.screen.height || 0),
              (n.screenWidth = window.screen.width || 0),
              (n.color = window.screen.colorDepth || 0)),
            navigator &&
              ((n.lang = navigator.language || ''), (n.ua = navigator.userAgent.toLowerCase())),
            n
          );
        },
        Ap = function (n) {
          window.addEventListener('error', function (i) {
            var a = i.message,
              d = i.filename,
              h = i.type;
            n({ msg: a, url: d, type: h, time: new Date().getTime() });
          });
        },
        Zp = function (n) {
          window.addEventListener('unhandledrejection', function (i) {
            n({
              type: 'promise',
              msg: (i.reason && i.reason.msg) || i.reason || '',
              time: new Date().getTime(),
            });
          });
        },
        Hp = function (n) {
          ['mousedown', 'touchstart'].forEach(function (i) {
            var a;
            window.addEventListener(i, function (d) {
              clearTimeout(a),
                (a = setTimeout(function () {
                  var h,
                    f = d.target,
                    o = f.getBoundingClientRect(),
                    u = o.top,
                    c = o.left;
                  n({
                    top: u,
                    left: c,
                    eventType: i,
                    pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
                    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
                    type: 'behavior',
                    subType: 'click',
                    target: f.tagName,
                    paths:
                      (h = d.path) === null || h === void 0
                        ? void 0
                        : h
                            .map(function (j) {
                              return j.tagName;
                            })
                            .filter(Boolean),
                    startTime: d.timeStamp,
                    outerHTML: f.outerHTML,
                    innerHTML: f.innerHTML,
                    width: f.offsetWidth,
                    height: f.offsetHeight,
                    viewport: { width: window.innerWidth, height: window.innerHeight },
                  });
                }, 500));
            });
          });
        },
        Wp = function (n, i) {
          var a = n.children,
            d = (0, r.useState)(!1),
            h = H()(d, 2),
            f = h[0],
            o = h[1],
            u = (0, r.useState)({}),
            c = H()(u, 2),
            j = c[0],
            v = c[1],
            y = (0, r.useState)([]),
            _ = H()(y, 2),
            x = _[0],
            l = _[1],
            p = (0, r.useState)([]),
            P = H()(p, 2),
            E = P[0],
            F = P[1],
            z = (0, r.useState)({}),
            O = H()(z, 2),
            W = O[0],
            A = O[1],
            I = (0, r.useState)({}),
            X = H()(I, 2),
            M = X[0],
            Y = X[1],
            Q = (0, r.useState)([]),
            Z = H()(Q, 2),
            J = Z[0],
            R = Z[1],
            q = (0, r.useState)([]),
            V = H()(q, 2),
            nn = V[0],
            ln = V[1],
            G = (0, r.useRef)(null),
            B = function (L) {
              var $ = window.history[L];
              return function () {
                for (var K = arguments.length, on = new Array(K), gn = 0; gn < K; gn++)
                  on[gn] = arguments[gn];
                var dn = $.apply(this, on),
                  vn = new Event(L);
                return (vn.arguments = on), window.dispatchEvent(vn), dn;
              };
            };
          (window.history.pushState = B('pushState')),
            (window.history.replaceState = B('replaceState'));
          function T() {
            o(!f);
          }
          window.addEventListener('replaceState', T),
            window.addEventListener('pushState', T),
            window.addEventListener('hashchange', T),
            (0, r.useImperativeHandle)(i, function () {
              return { callbackTrackData: k };
            });
          var m = (function () {
              var g = Jn()(
                Pn()().mark(function L() {
                  var $, K, on, gn, dn, vn, Dn, Wn;
                  return Pn()().wrap(function (un) {
                    for (;;)
                      switch ((un.prev = un.next)) {
                        case 0:
                          return (un.next = 2), _p();
                        case 2:
                          return ($ = un.sent), (un.next = 5), Tp();
                        case 5:
                          return (K = un.sent), (un.next = 8), Dp();
                        case 8:
                          (on = un.sent),
                            (gn = Pp()),
                            (dn = Fp()),
                            (vn = zp()),
                            (Dn = Ep()),
                            (Wn = Op()),
                            v({
                              fp: $,
                              fcp: K,
                              lcp: on,
                              dnsQueryTime: gn,
                              tcpConnectTime: dn,
                              requestTime: vn,
                              parseDOMTreeTime: Dn,
                              whiteTime: Wn,
                            });
                        case 15:
                        case 'end':
                          return un.stop();
                      }
                  }, L);
                })
              );
              return function () {
                return g.apply(this, arguments);
              };
            })(),
            s = function () {
              Mp(function (L) {
                l(function ($) {
                  return [].concat(kn()($), [L]);
                });
              }),
                Rp(function (L) {
                  F(function ($) {
                    return [].concat(kn()($), [L]);
                  });
                });
            },
            N = function () {
              var L = Ip();
              A(L);
            },
            C = (function () {
              var g = Jn()(
                Pn()().mark(function L() {
                  var $;
                  return Pn()().wrap(function (on) {
                    for (;;)
                      switch ((on.prev = on.next)) {
                        case 0:
                          return (on.next = 2), Lp();
                        case 2:
                          ($ = on.sent),
                            Y(function (gn) {
                              return tn()(tn()({}, $), Bp());
                            });
                        case 4:
                        case 'end':
                          return on.stop();
                      }
                  }, L);
                })
              );
              return function () {
                return g.apply(this, arguments);
              };
            })(),
            D = function () {
              Ap(function (L) {
                R(function ($) {
                  return [].concat(kn()($), [L]);
                });
              }),
                Zp(function (L) {
                  R(function ($) {
                    return [].concat(kn()($), [L]);
                  });
                });
            },
            w = function () {
              Hp(function (L) {
                ln(function ($) {
                  return [].concat(kn()($), [L]);
                });
              });
            },
            k = function () {
              return {
                performanceData: j,
                xhrRequestResList: x,
                fetchRequestResList: E,
                resourceList: W,
                userInfo: M,
                errorList: J,
                clickEventList: nn,
                leaveTime: Math.round(Math.abs(G.current.getTime() - new Date().getTime()) / 1e3),
              };
            },
            b = function () {
              (G.current = new Date()), v({}), l([]), F([]), A({}), Y({}), R([]), ln([]);
            };
          return (
            (0, r.useEffect)(
              function () {
                b(), m(), s(), N(), C(), D(), w();
              },
              [f]
            ),
            (0, e.jsx)(r.Fragment, { children: a })
          );
        },
        Yp = (0, r.forwardRef)(Wp);
    },
  },
]);
