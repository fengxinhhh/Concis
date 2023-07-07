(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [403],
  {
    90889: function (d, S, s) {
      'use strict';
      s.r(S),
        s.d(S, {
          default: function () {
            return h;
          },
        });
      var e = s(22374),
        f = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        Q = (i, u, l) =>
          u in i
            ? f(i, u, { enumerable: !0, configurable: !0, writable: !0, value: l })
            : (i[u] = l),
        b = (i, u) => {
          for (var l in u || (u = {})) T.call(u, l) && Q(i, l, u[l]);
          if (j) for (var l of j(u)) I.call(u, l) && Q(i, l, u[l]);
          return i;
        };
      const Y = (i) =>
        e.createElement(
          'svg',
          b({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          })
        );
      var E =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        O = function (i, u, l, M) {
          function x(g) {
            return g instanceof l
              ? g
              : new l(function (U) {
                  U(g);
                });
          }
          return new (l || (l = Promise))(function (g, U) {
            function G(C) {
              try {
                oe(M.next(C));
              } catch ($) {
                U($);
              }
            }
            function ae(C) {
              try {
                oe(M.throw(C));
              } catch ($) {
                U($);
              }
            }
            function oe(C) {
              C.done ? g(C.value) : x(C.value).then(G, ae);
            }
            oe((M = M.apply(i, u || [])).next());
          });
        };
      function w(i) {
        let u = 0,
          l = 0,
          M = i;
        do (u += M.offsetTop || 0), (l += M.offsetLeft || 0), (M = M.offsetParent);
        while (M);
        return { top: u, left: l };
      }
      class X {
        constructor(u) {
          this.element = u;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(u, l) {
          return w(u).left - w(l).left;
        }
        getVerticalElementScrollOffset(u, l) {
          return w(u).top - w(l).top;
        }
        scrollTo(u, l) {
          (this.element.scrollLeft = u), (this.element.scrollTop = l);
        }
      }
      class q {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(u) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) + u.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(u) {
          return (
            (window.scrollY || document.documentElement.scrollTop) + u.getBoundingClientRect().top
          );
        }
        scrollTo(u, l) {
          window.scrollTo(u, l);
        }
      }
      const N = {
          elements: [],
          cancelMethods: [],
          add: (i, u) => {
            N.elements.push(i), N.cancelMethods.push(u);
          },
          remove: (i, u) => {
            const l = N.elements.indexOf(i);
            l > -1 &&
              (u && N.cancelMethods[l](), N.elements.splice(l, 1), N.cancelMethods.splice(l, 1));
          },
        },
        y = typeof window != 'undefined',
        L = {
          cancelOnUserAction: !0,
          easing: (i) => --i * i * i + 1,
          elementToScroll: y ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function p(i, u = {}) {
        return O(this, void 0, void 0, function* () {
          if (y) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((ye) => {
              ye(!1);
            });
          let l,
            M,
            x,
            g = Object.assign(Object.assign({}, L), u);
          const U = g.elementToScroll === window,
            G = !!g.elementToScroll.nodeName;
          if (!U && !G) throw 'Element to scroll needs to be either window or DOM element.';
          const ae = U ? document.documentElement : g.elementToScroll;
          getComputedStyle(ae).getPropertyValue('scroll-behavior') === 'smooth' &&
            console.warn(
              `${ae.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`
            );
          const C = U ? new q() : new X(g.elementToScroll);
          if (i instanceof Element) {
            if (((x = i), G && (!g.elementToScroll.contains(x) || g.elementToScroll.isSameNode(x))))
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (l = C.getHorizontalElementScrollOffset(x, g.elementToScroll)),
              (M = C.getVerticalElementScrollOffset(x, g.elementToScroll));
          } else if (typeof i == 'number') (l = C.getHorizontalScroll()), (M = i);
          else if (Array.isArray(i) && i.length === 2)
            (l = i[0] === null ? C.getHorizontalScroll() : i[0]),
              (M = i[1] === null ? C.getVerticalScroll() : i[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (l += g.horizontalOffset), (M += g.verticalOffset);
          const $ = C.getMaxHorizontalScroll(),
            se = C.getHorizontalScroll();
          l > $ && (l = $);
          const P = l - se,
            F = C.getMaxVerticalScroll(),
            z = C.getVerticalScroll();
          M > F && (M = F);
          const _ = M - z,
            ue = Math.abs(Math.round((P / 1e3) * g.speed)),
            Me = Math.abs(Math.round((_ / 1e3) * g.speed));
          let fe = ue > Me ? ue : Me;
          return (
            fe < g.minDuration ? (fe = g.minDuration) : fe > g.maxDuration && (fe = g.maxDuration),
            new Promise((ye, Ce) => {
              P === 0 && _ === 0 && ye(!0), N.remove(C.element, !0);
              let Ie;
              const Qe = () => {
                a(), cancelAnimationFrame(Ie), ye(!1);
              };
              N.add(C.element, Qe);
              const be = (D) => D.preventDefault(),
                we = g.cancelOnUserAction ? Qe : be,
                Ye = g.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                ke = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                a = () => {
                  ke.forEach((D) => {
                    C.element.removeEventListener(D, we, Ye);
                  });
                };
              ke.forEach((D) => {
                C.element.addEventListener(D, we, Ye);
              });
              const o = Date.now(),
                c = () => {
                  var D = Date.now() - o,
                    V = D / fe;
                  const Z = Math.round(se + P * g.easing(V)),
                    W = Math.round(z + _ * g.easing(V));
                  D < fe && (Z !== l || W !== M)
                    ? (C.scrollTo(Z, W), (Ie = requestAnimationFrame(c)))
                    : (C.scrollTo(l, M),
                      cancelAnimationFrame(Ie),
                      a(),
                      N.remove(C.element, !1),
                      ye(!0));
                };
              Ie = requestAnimationFrame(c);
            })
          );
        });
      }
      var H = p,
        B = s(40882),
        K = s(32600),
        m = s(92401),
        v = s(87795),
        A = s(26624),
        k = s(97847),
        R = s(69861),
        J = s(41067);
      function te(i, u) {
        return De(i) || Le(i, u) || ie(i, u) || re();
      }
      function re() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ie(i, u) {
        if (i) {
          if (typeof i == 'string') return me(i, u);
          var l = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (l === 'Object' && i.constructor && (l = i.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(i);
          if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
            return me(i, u);
        }
      }
      function me(i, u) {
        (u == null || u > i.length) && (u = i.length);
        for (var l = 0, M = new Array(u); l < u; l++) M[l] = i[l];
        return M;
      }
      function Le(i, u) {
        var l =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) || i['@@iterator'];
        if (l != null) {
          var M = [],
            x = !0,
            g = !1,
            U,
            G;
          try {
            for (
              l = l.call(i);
              !(x = (U = l.next()).done) && (M.push(U.value), !(u && M.length === u));
              x = !0
            );
          } catch (ae) {
            (g = !0), (G = ae);
          } finally {
            try {
              !x && l.return != null && l.return();
            } finally {
              if (g) throw G;
            }
          }
          return M;
        }
      }
      function De(i) {
        if (Array.isArray(i)) return i;
      }
      var Oe = function () {
          var u = (0, B.YB)(),
            l = (0, B.pC)(),
            M = (0, B.tx)(),
            x = (0, B.TH)(),
            g = x.hash,
            U = (0, B.WF)(),
            G = U.loading,
            ae = (0, e.useState)(!1),
            oe = te(ae, 2),
            C = oe[0],
            $ = oe[1],
            se = (0, B.eL)(),
            P = se.frontmatter,
            F = P.sidebar !== !1 && (M == null ? void 0 : M.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var z = g.replace('#', '');
                z &&
                  setTimeout(function () {
                    var _ = document.getElementById(decodeURIComponent(z));
                    _ && H(_.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [G, g]
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': C || void 0,
                onClick: function () {
                  return $(!1);
                },
              },
              e.createElement(
                B.ql,
                null,
                e.createElement('html', { lang: u.locale.replace(/-.+$/, '') }),
                P.title && e.createElement('title', null, P.title),
                P.title && e.createElement('meta', { property: 'og:title', content: P.title }),
                P.description &&
                  e.createElement('meta', { name: 'description', content: P.description }),
                P.description &&
                  e.createElement('meta', { property: 'og:description', content: P.description }),
                P.keywords &&
                  e.createElement('meta', { name: 'keywords', content: P.keywords.join(',') }),
                P.keywords &&
                  e.createElement('meta', {
                    property: 'og:keywords',
                    content: P.keywords.join(','),
                  })
              ),
              e.createElement(A.Z, null),
              e.createElement(k.Z, null),
              e.createElement(m.Z, null),
              F &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (_) {
                        _.stopPropagation(),
                          $(function (ue) {
                            return !ue;
                          });
                      },
                    },
                    e.createElement(Y, null),
                    u.formatMessage({ id: 'layout.sidebar.btn' })
                  )
                ),
              e.createElement(
                'main',
                null,
                F && e.createElement(R.Z, null),
                e.createElement(K.Z, null, l, e.createElement(v.Z, null)),
                P.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(J.Z, null)
                  )
              )
            )
          );
        },
        h = Oe;
    },
    41601: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return N;
        },
      });
      var e = s(40882),
        f = s(22374);
      function j(y, L) {
        return Y(y) || b(y, L) || I(y, L) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function I(y, L) {
        if (y) {
          if (typeof y == 'string') return Q(y, L);
          var p = Object.prototype.toString.call(y).slice(8, -1);
          if (
            (p === 'Object' && y.constructor && (p = y.constructor.name),
            p === 'Map' || p === 'Set')
          )
            return Array.from(y);
          if (p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
            return Q(y, L);
        }
      }
      function Q(y, L) {
        (L == null || L > y.length) && (L = y.length);
        for (var p = 0, H = new Array(L); p < L; p++) H[p] = y[p];
        return H;
      }
      function b(y, L) {
        var p =
          y == null
            ? null
            : (typeof Symbol != 'undefined' && y[Symbol.iterator]) || y['@@iterator'];
        if (p != null) {
          var H = [],
            B = !0,
            K = !1,
            m,
            v;
          try {
            for (
              p = p.call(y);
              !(B = (m = p.next()).done) && (H.push(m.value), !(L && H.length === L));
              B = !0
            );
          } catch (A) {
            (K = !0), (v = A);
          } finally {
            try {
              !B && p.return != null && p.return();
            } finally {
              if (K) throw v;
            }
          }
          return H;
        }
      }
      function Y(y) {
        if (Array.isArray(y)) return y;
      }
      var E = function () {
          return f.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            f.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            })
          );
        },
        O = function () {
          return f.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            f.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            })
          );
        },
        w = function () {
          return f.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            f.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            })
          );
        },
        X = { light: O, dark: E, auto: w },
        q = function () {
          var L = (0, e.WF)(),
            p = L.themeConfig.prefersColor.default,
            H = (0, e.YB)(),
            B = (0, e.OI)(),
            K = j(B, 3),
            m = K[1],
            v = m === void 0 ? p : m,
            A = K[2],
            k = X[v];
          return f.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': H.formatMessage({ id: 'header.color.mode.'.concat(v) }),
              'data-dumi-tooltip-bottom': !0,
            },
            k && f.createElement(k, null),
            f.createElement(
              'select',
              {
                onChange: function (J) {
                  return A(J.target.value);
                },
                value: v,
              },
              ['light', 'dark', 'auto'].map(function (R) {
                return f.createElement(
                  'option',
                  { value: R, key: R },
                  H.formatMessage({ id: 'header.color.mode.'.concat(R) })
                );
              })
            )
          );
        },
        N = q;
    },
    50428: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return T;
        },
      });
      var e = s(40882),
        f = s(22374),
        j = function () {
          var Q,
            b = (0, e.eL)(),
            Y = b.frontmatter;
          return Boolean((Q = Y.features) === null || Q === void 0 ? void 0 : Q.length)
            ? f.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (E) {
                      return Y.features.length % E === 0;
                    }) || 3,
                },
                Y.features.map(function (E) {
                  var O = E.title,
                    w = E.description,
                    X = E.emoji,
                    q = E.link,
                    N;
                  return (
                    q &&
                      (N = /^(\w+:)\/\/|^(mailto|tel):/.test(q)
                        ? f.createElement('a', { href: q, target: '_blank', rel: 'noreferrer' }, O)
                        : f.createElement(e.rU, { to: q }, O)),
                    f.createElement(
                      'div',
                      { key: O, className: 'dumi-default-features-item' },
                      X && f.createElement('i', null, X),
                      O && f.createElement('h3', null, N || O),
                      w && f.createElement('p', { dangerouslySetInnerHTML: { __html: w } })
                    )
                  );
                })
              )
            : null;
        },
        T = j;
    },
    56550: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return ut;
        },
      });
      var e = s(22374),
        f = function () {
          return e.createElement(e.Fragment, null);
        },
        j = f,
        T = Object.defineProperty,
        I = Object.getOwnPropertySymbols,
        Q = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        Y = (n, t, r) =>
          t in n
            ? T(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        E = (n, t) => {
          for (var r in t || (t = {})) Q.call(t, r) && Y(n, r, t[r]);
          if (I) for (var r of I(t)) b.call(t, r) && Y(n, r, t[r]);
          return n;
        };
      const O = (n) =>
        e.createElement(
          'svg',
          E({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'm563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          })
        );
      var w =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNTYzLjggNTEyIDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyeiIvPjwvc3ZnPg==',
        X = Object.defineProperty,
        q = Object.getOwnPropertySymbols,
        N = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        L = (n, t, r) =>
          t in n
            ? X(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        p = (n, t) => {
          for (var r in t || (t = {})) N.call(t, r) && L(n, r, t[r]);
          if (q) for (var r of q(t)) y.call(t, r) && L(n, r, t[r]);
          return n;
        };
      const H = (n) =>
        e.createElement(
          'svg',
          p({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          })
        );
      var B =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        K = s(40882),
        m = s(32030),
        v = s(29567),
        A = s(45416),
        k = s(98997),
        R = s(6147),
        J = s(56064),
        te = Object.defineProperty,
        re = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        Le = (n, t, r) =>
          t in n
            ? te(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        De = (n, t) => {
          for (var r in t || (t = {})) ie.call(t, r) && Le(n, r, t[r]);
          if (re) for (var r of re(t)) me.call(t, r) && Le(n, r, t[r]);
          return n;
        };
      const Oe = (n) =>
        e.createElement(
          'svg',
          De({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          })
        );
      var h =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        i = Object.defineProperty,
        u = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        x = (n, t, r) =>
          t in n
            ? i(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        g = (n, t) => {
          for (var r in t || (t = {})) l.call(t, r) && x(n, r, t[r]);
          if (u) for (var r of u(t)) M.call(t, r) && x(n, r, t[r]);
          return n;
        };
      const U = (n) =>
        e.createElement(
          'svg',
          g({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          })
        );
      var G =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        ae = Object.defineProperty,
        oe = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        $ = Object.prototype.propertyIsEnumerable,
        se = (n, t, r) =>
          t in n
            ? ae(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        P = (n, t) => {
          for (var r in t || (t = {})) C.call(t, r) && se(n, r, t[r]);
          if (oe) for (var r of oe(t)) $.call(t, r) && se(n, r, t[r]);
          return n;
        };
      const F = (n) =>
        e.createElement(
          'svg',
          P({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          })
        );
      var z =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        _ = Object.defineProperty,
        ue = Object.getOwnPropertySymbols,
        Me = Object.prototype.hasOwnProperty,
        fe = Object.prototype.propertyIsEnumerable,
        ye = (n, t, r) =>
          t in n
            ? _(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        Ce = (n, t) => {
          for (var r in t || (t = {})) Me.call(t, r) && ye(n, r, t[r]);
          if (ue) for (var r of ue(t)) fe.call(t, r) && ye(n, r, t[r]);
          return n;
        };
      const Ie = (n) =>
        e.createElement(
          'svg',
          Ce({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          })
        );
      var Qe =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        be = Object.defineProperty,
        we = Object.getOwnPropertySymbols,
        Ye = Object.prototype.hasOwnProperty,
        ke = Object.prototype.propertyIsEnumerable,
        a = (n, t, r) =>
          t in n
            ? be(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        o = (n, t) => {
          for (var r in t || (t = {})) Ye.call(t, r) && a(n, r, t[r]);
          if (we) for (var r of we(t)) ke.call(t, r) && a(n, r, t[r]);
          return n;
        };
      const c = (n) =>
        e.createElement(
          'svg',
          o({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          })
        );
      var D =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        V = Object.defineProperty,
        Z = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        le = Object.prototype.propertyIsEnumerable,
        ne = (n, t, r) =>
          t in n
            ? V(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        Ae = (n, t) => {
          for (var r in t || (t = {})) W.call(t, r) && ne(n, r, t[r]);
          if (Z) for (var r of Z(t)) le.call(t, r) && ne(n, r, t[r]);
          return n;
        };
      const ee = (n) =>
        e.createElement(
          'svg',
          Ae({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          })
        );
      var de =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        je = Object.defineProperty,
        ce = Object.getOwnPropertySymbols,
        he = Object.prototype.hasOwnProperty,
        pe = Object.prototype.propertyIsEnumerable,
        Ve = (n, t, r) =>
          t in n
            ? je(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        Ze = (n, t) => {
          for (var r in t || (t = {})) he.call(t, r) && Ve(n, r, t[r]);
          if (ce) for (var r of ce(t)) pe.call(t, r) && Ve(n, r, t[r]);
          return n;
        };
      const We = (n) =>
        e.createElement(
          'svg',
          Ze({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          })
        );
      var Ue =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        ge = Object.defineProperty,
        xe = Object.getOwnPropertySymbols,
        ve = Object.prototype.hasOwnProperty,
        Pe = Object.prototype.propertyIsEnumerable,
        Re = (n, t, r) =>
          t in n
            ? ge(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
            : (n[t] = r),
        _e = (n, t) => {
          for (var r in t || (t = {})) ve.call(t, r) && Re(n, r, t[r]);
          if (xe) for (var r of xe(t)) Pe.call(t, r) && Re(n, r, t[r]);
          return n;
        };
      const Je = (n) =>
        e.createElement(
          'svg',
          _e({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          })
        );
      var Ke =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        Ge = s(87443),
        He = {
          github: U,
          weibo: ee,
          twitter: c,
          gitlab: F,
          facebook: Oe,
          zhihu: Je,
          yuque: We,
          linkedin: Ie,
        },
        qe = function (t) {
          var r = t.icon,
            Ne = t.link,
            Se = (0, Ge.Z)(),
            Ee = (0, e.useMemo)(
              function () {
                return { Icon: He[r], link: Ne };
              },
              [r, Ne]
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': Se.formatMessage({ id: 'header.social.'.concat(r) }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: Ee.link,
              rel: 'noreferrer',
            },
            e.createElement(Ee.Icon, null)
          );
        },
        $e = qe;
      function et(n, t) {
        return at(n) || nt(n, t) || rt(n, t) || tt();
      }
      function tt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function rt(n, t) {
        if (n) {
          if (typeof n == 'string') return Xe(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (r === 'Object' && n.constructor && (r = n.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(n);
          if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return Xe(n, t);
        }
      }
      function Xe(n, t) {
        (t == null || t > n.length) && (t = n.length);
        for (var r = 0, Ne = new Array(t); r < t; r++) Ne[r] = n[r];
        return Ne;
      }
      function nt(n, t) {
        var r =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator'];
        if (r != null) {
          var Ne = [],
            Se = !0,
            Ee = !1,
            Be,
            Fe;
          try {
            for (
              r = r.call(n);
              !(Se = (Be = r.next()).done) && (Ne.push(Be.value), !(t && Ne.length === t));
              Se = !0
            );
          } catch (ze) {
            (Ee = !0), (Fe = ze);
          } finally {
            try {
              !Se && r.return != null && r.return();
            } finally {
              if (Ee) throw Fe;
            }
          }
          return Ne;
        }
      }
      function at(n) {
        if (Array.isArray(n)) return n;
      }
      var ot = function () {
          var t = (0, K.eL)(),
            r = t.frontmatter,
            Ne = (0, e.useState)(!1),
            Se = et(Ne, 2),
            Ee = Se[0],
            Be = Se[1],
            Fe = (0, K.WF)(),
            ze = Fe.themeConfig,
            lt = (0, e.useMemo)(
              function () {
                return ze.socialLinks
                  ? Object.keys(ze.socialLinks)
                      .slice(0, 5)
                      .map(function (Te) {
                        return { icon: Te, link: ze.socialLinks[Te] };
                      })
                  : [];
              },
              [ze.socialLinks]
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': Boolean(r.hero) || void 0,
              'data-mobile-active': Ee || void 0,
              onClick: function () {
                return Be(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(A.Z, null)
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(k.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(J.ZP, null),
                  e.createElement(v.Z, null),
                  e.createElement(R.Z, null),
                  ze.prefersColor.switch && e.createElement(m.Z, null),
                  lt.map(function (Te) {
                    return e.createElement($e, { icon: Te.icon, link: Te.link, key: Te.link });
                  }),
                  e.createElement(j, null)
                )
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (ct) {
                    ct.stopPropagation(),
                      Be(function (it) {
                        return !it;
                      });
                  },
                },
                Ee ? e.createElement(O, null) : e.createElement(H, null)
              )
            )
          );
        },
        ut = ot;
    },
    21430: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return I;
        },
      });
      var e = s(40882),
        f = s(5460),
        j = s(22374),
        T = function () {
          var b,
            Y = (0, e.eL)(),
            E = Y.frontmatter;
          return 'hero' in E
            ? j.createElement(
                'div',
                { className: 'dumi-default-hero' },
                E.hero.title && j.createElement(f.Z, null, E.hero.title),
                E.hero.description &&
                  j.createElement('p', { dangerouslySetInnerHTML: { __html: E.hero.description } }),
                Boolean((b = E.hero.actions) === null || b === void 0 ? void 0 : b.length) &&
                  j.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    E.hero.actions.map(function (O) {
                      var w = O.text,
                        X = O.link;
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(X)
                        ? j.createElement(
                            'a',
                            { href: X, target: '_blank', rel: 'noreferrer', key: w },
                            w
                          )
                        : j.createElement(e.rU, { key: w, to: X }, w);
                    })
                  )
              )
            : null;
        },
        I = T;
    },
    7470: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return j;
        },
      });
      var e = s(22374),
        f = function (I) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, I.children)
          );
        },
        j = f;
    },
    84255: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return K;
        },
      });
      var e = s(22374),
        f = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        Q = (m, v, A) =>
          v in m
            ? f(m, v, { enumerable: !0, configurable: !0, writable: !0, value: A })
            : (m[v] = A),
        b = (m, v) => {
          for (var A in v || (v = {})) T.call(v, A) && Q(m, A, v[A]);
          if (j) for (var A of j(v)) I.call(v, A) && Q(m, A, v[A]);
          return m;
        };
      const Y = (m) =>
        e.createElement(
          'svg',
          b({ viewBox: '64 64 896 896' }, m),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          })
        );
      var E =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==',
        O = s(40882);
      function w(m, v) {
        return L(m) || y(m, v) || q(m, v) || X();
      }
      function X() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function q(m, v) {
        if (m) {
          if (typeof m == 'string') return N(m, v);
          var A = Object.prototype.toString.call(m).slice(8, -1);
          if (
            (A === 'Object' && m.constructor && (A = m.constructor.name),
            A === 'Map' || A === 'Set')
          )
            return Array.from(m);
          if (A === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))
            return N(m, v);
        }
      }
      function N(m, v) {
        (v == null || v > m.length) && (v = m.length);
        for (var A = 0, k = new Array(v); A < v; A++) k[A] = m[A];
        return k;
      }
      function y(m, v) {
        var A =
          m == null
            ? null
            : (typeof Symbol != 'undefined' && m[Symbol.iterator]) || m['@@iterator'];
        if (A != null) {
          var k = [],
            R = !0,
            J = !1,
            te,
            re;
          try {
            for (
              A = A.call(m);
              !(R = (te = A.next()).done) && (k.push(te.value), !(v && k.length === v));
              R = !0
            );
          } catch (ie) {
            (J = !0), (re = ie);
          } finally {
            try {
              !R && A.return != null && A.return();
            } finally {
              if (J) throw re;
            }
          }
          return k;
        }
      }
      function L(m) {
        if (Array.isArray(m)) return m;
      }
      function p(m) {
        var v = m.pathname,
          A = m.current,
          k = m.target,
          R =
            'base' in A
              ? v.replace(A.base.replace(/\/$/, ''), '') || '/'
              : v.replace(new RegExp(''.concat(A.suffix, '$')), '');
        return 'base' in k
          ? ''
              .concat(k.base.replace(/\/$/, ''))
              .concat(R)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(R).concat(k.suffix);
      }
      var H = function (v) {
          var A = v.locale,
            k = v.current,
            R = (0, O.TH)(),
            J = R.pathname,
            te = (0, e.useState)(function () {
              return p({ pathname: J, current: k, target: A });
            }),
            re = w(te, 2),
            ie = re[0],
            me = re[1];
          return (
            (0, e.useEffect)(
              function () {
                me(p({ pathname: J, current: k, target: A }));
              },
              [J, k.id, A.id]
            ),
            e.createElement(O.rU, { className: 'dumi-default-lang-switch', to: ie }, A.name)
          );
        },
        B = function () {
          var v = (0, O.WF)(),
            A = v.locales,
            k = (0, O.YB)(),
            R = k.locale,
            J = (0, O.bU)();
          return A.length <= 1
            ? null
            : A.length > 2
            ? e.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                e.createElement(
                  'select',
                  {
                    defaultValue: R,
                    onChange: function (re) {
                      O.m8.push(
                        p({
                          pathname: O.m8.location.pathname,
                          current: J,
                          target: A.find(function (ie) {
                            var me = ie.id;
                            return me === re.target.value;
                          }),
                        })
                      );
                    },
                  },
                  A.map(function (te) {
                    return e.createElement('option', { key: te.id, value: te.id }, te.name);
                  })
                ),
                e.createElement(Y, null)
              )
            : e.createElement(H, {
                locale: A.find(function (te) {
                  var re = te.id;
                  return re !== R;
                }),
                current: J,
              });
        },
        K = B;
    },
    74883: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return T;
        },
      });
      var e = s(40882),
        f = s(22374),
        j = function () {
          var Q = (0, e.WF)(),
            b = Q.themeConfig,
            Y = (0, e.bU)();
          return f.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in Y ? Y.base : '/' },
            b.logo !== !1 &&
              f.createElement('img', {
                src:
                  b.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: b.name,
              }),
            b.name
          );
        },
        T = j;
    },
    36763: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return Q;
        },
      });
      var e = s(40882),
        f = s(74647),
        j = s(22374);
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (b) {
                for (var Y = 1; Y < arguments.length; Y++) {
                  var E = arguments[Y];
                  for (var O in E) Object.prototype.hasOwnProperty.call(E, O) && (b[O] = E[O]);
                }
                return b;
              }),
          T.apply(this, arguments)
        );
      }
      var I = function () {
          var Y = (0, e.OK)(),
            E = (0, e.TH)(),
            O = E.pathname;
          return j.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            Y.map(function (w) {
              return j.createElement(
                'li',
                { key: w.link },
                /^(\w+:)\/\/|^(mailto|tel):/.test(w.link)
                  ? j.createElement(
                      'a',
                      { href: w.link, target: '_blank', rel: 'noreferrer' },
                      w.title
                    )
                  : j.createElement(
                      e.rU,
                      T(
                        { to: w.link },
                        O.startsWith(w.activePath || w.link) ? { className: 'active' } : {}
                      ),
                      w.title
                    )
              );
            }),
            j.createElement(f.Z, null)
          );
        },
        Q = I;
    },
    47212: function (d, S, s) {
      'use strict';
      var e = s(22374),
        f = function () {
          return e.createElement(e.Fragment, null);
        };
      S.Z = f;
    },
    22178: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return q;
        },
      });
      var e = s(40882),
        f = s(22374);
      function j(N, y) {
        return Y(N) || b(N, y) || I(N, y) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function I(N, y) {
        if (N) {
          if (typeof N == 'string') return Q(N, y);
          var L = Object.prototype.toString.call(N).slice(8, -1);
          if (
            (L === 'Object' && N.constructor && (L = N.constructor.name),
            L === 'Map' || L === 'Set')
          )
            return Array.from(N);
          if (L === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))
            return Q(N, y);
        }
      }
      function Q(N, y) {
        (y == null || y > N.length) && (y = N.length);
        for (var L = 0, p = new Array(y); L < y; L++) p[L] = N[L];
        return p;
      }
      function b(N, y) {
        var L =
          N == null
            ? null
            : (typeof Symbol != 'undefined' && N[Symbol.iterator]) || N['@@iterator'];
        if (L != null) {
          var p = [],
            H = !0,
            B = !1,
            K,
            m;
          try {
            for (
              L = L.call(N);
              !(H = (K = L.next()).done) && (p.push(K.value), !(y && p.length === y));
              H = !0
            );
          } catch (v) {
            (B = !0), (m = v);
          } finally {
            try {
              !H && L.return != null && L.return();
            } finally {
              if (B) throw m;
            }
          }
          return p;
        }
      }
      function Y(N) {
        if (Array.isArray(N)) return N;
      }
      var E = function () {
          return f.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            f.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            })
          );
        },
        O = function () {
          return f.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            f.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            })
          );
        },
        w = 'dumi:rtl',
        X = function () {
          var y = (0, f.useState)(!1),
            L = j(y, 2),
            p = L[0],
            H = L[1],
            B = (0, e.WF)(),
            K = B.themeConfig;
          return (
            (0, f.useEffect)(function () {
              localStorage.getItem(w) &&
                (H(!0), document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            K.rtl
              ? f.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      p
                        ? (document.documentElement.removeAttribute('data-direction'),
                          localStorage.removeItem(w))
                        : (document.documentElement.setAttribute('data-direction', 'rtl'),
                          localStorage.setItem(w, '1')),
                        H(!p);
                    },
                    'data-dumi-tooltip': p ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  p ? f.createElement(E, null) : f.createElement(O, null)
                )
              : null
          );
        },
        q = X;
    },
    67089: function (d, S, s) {
      'use strict';
      s.d(S, {
        ZP: function () {
          return ke;
        },
      });
      var e = s(22374),
        f = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        Q = (a, o, c) =>
          o in a
            ? f(a, o, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (a[o] = c),
        b = (a, o) => {
          for (var c in o || (o = {})) T.call(o, c) && Q(a, c, o[c]);
          if (j) for (var c of j(o)) I.call(o, c) && Q(a, c, o[c]);
          return a;
        };
      const Y = (a) =>
        e.createElement(
          'svg',
          b({ viewBox: '64 64 896 896' }, a),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          })
        );
      var E =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        O = Object.defineProperty,
        w = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        q = Object.prototype.propertyIsEnumerable,
        N = (a, o, c) =>
          o in a
            ? O(a, o, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (a[o] = c),
        y = (a, o) => {
          for (var c in o || (o = {})) X.call(o, c) && N(a, c, o[c]);
          if (w) for (var c of w(o)) q.call(o, c) && N(a, c, o[c]);
          return a;
        };
      const L = (a) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, a),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          })
        );
      var p =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        H = Object.defineProperty,
        B = Object.getOwnPropertySymbols,
        K = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        v = (a, o, c) =>
          o in a
            ? H(a, o, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (a[o] = c),
        A = (a, o) => {
          for (var c in o || (o = {})) K.call(o, c) && v(a, c, o[c]);
          if (B) for (var c of B(o)) m.call(o, c) && v(a, c, o[c]);
          return a;
        };
      const k = (a) =>
        e.createElement(
          'svg',
          A({ viewBox: '64 64 896 896' }, a),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          })
        );
      var R =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        J = s(40882),
        te = Object.defineProperty,
        re = Object.getOwnPropertySymbols,
        ie = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        Le = (a, o, c) =>
          o in a
            ? te(a, o, { enumerable: !0, configurable: !0, writable: !0, value: c })
            : (a[o] = c),
        De = (a, o) => {
          for (var c in o || (o = {})) ie.call(o, c) && Le(a, c, o[c]);
          if (re) for (var c of re(o)) me.call(o, c) && Le(a, c, o[c]);
          return a;
        };
      const Oe = (a) =>
        e.createElement(
          'svg',
          De({ viewBox: '0 0 1024 1024' }, a),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          })
        );
      var h =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=';
      function i(a, o) {
        return g(a) || x(a, o) || l(a, o) || u();
      }
      function u() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function l(a, o) {
        if (a) {
          if (typeof a == 'string') return M(a, o);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (c === 'Object' && a.constructor && (c = a.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(a);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return M(a, o);
        }
      }
      function M(a, o) {
        (o == null || o > a.length) && (o = a.length);
        for (var c = 0, D = new Array(o); c < o; c++) D[c] = a[c];
        return D;
      }
      function x(a, o) {
        var c =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) || a['@@iterator'];
        if (c != null) {
          var D = [],
            V = !0,
            Z = !1,
            W,
            le;
          try {
            for (
              c = c.call(a);
              !(V = (W = c.next()).done) && (D.push(W.value), !(o && D.length === o));
              V = !0
            );
          } catch (ne) {
            (Z = !0), (le = ne);
          } finally {
            try {
              !V && c.return != null && c.return();
            } finally {
              if (Z) throw le;
            }
          }
          return D;
        }
      }
      function g(a) {
        if (Array.isArray(a)) return a;
      }
      var U = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            })
          );
        },
        G = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            })
          );
        },
        ae = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            })
          );
        },
        oe = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            })
          );
        },
        C = { title: U, page: G, content: ae, demo: oe },
        $ = function (o) {
          return e.createElement(
            e.Fragment,
            null,
            o.texts.map(function (c, D) {
              return e.createElement(
                e.Fragment,
                { key: D },
                c.highlighted ? e.createElement('mark', null, c.text) : c.text
              );
            })
          );
        },
        se = function (o) {
          var c = (0, e.useCallback)(
              function () {
                var le = 0,
                  ne = [];
                return (
                  o.forEach(function (Ae) {
                    Ae.title && ne.push({ type: 'title', value: { title: Ae.title } }),
                      Ae.hints.forEach(function (ee) {
                        ne.push({ type: 'hint', activeIndex: le++, value: ee });
                      });
                  }),
                  [ne, le]
                );
              },
              [o]
            ),
            D = (0, e.useState)(c),
            V = i(D, 2),
            Z = V[0],
            W = V[1];
          return (
            (0, e.useEffect)(
              function () {
                W(c);
              },
              [o]
            ),
            Z
          );
        },
        P = function (o) {
          var c = se(o.data),
            D = i(c, 2),
            V = D[0],
            Z = D[1],
            W = (0, e.useState)(-1),
            le = i(W, 2),
            ne = le[0],
            Ae = le[1];
          return (
            (0, e.useEffect)(function () {
              var ee = function (je) {
                if (je.key === 'ArrowDown') Ae((ne + 1) % Z);
                else if (je.key === 'ArrowUp') Ae((ne + Z - 1) % Z);
                else if (je.key === 'Enter' && ne >= 0) {
                  var ce,
                    he = V.find(function (pe) {
                      return pe.type === 'hint' && pe.activeIndex === ne;
                    }).value;
                  J.m8.push(he.link),
                    (ce = o.onItemSelect) === null || ce === void 0 || ce.call(o, he),
                    document.activeElement.blur();
                }
                ['Escape', 'Enter'].includes(je.key) && Ae(-1);
              };
              return (
                document.addEventListener('keydown', ee),
                function () {
                  return document.removeEventListener('keydown', ee);
                }
              );
            }),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return Ae(-1);
                },
                onMouseDownCapture: function (de) {
                  return de.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              Boolean(o.data.length || o.loading)
                ? e.createElement(
                    'dl',
                    null,
                    V.map(function (ee, de) {
                      return ee.type === 'title'
                        ? e.createElement('dt', { key: String(de) }, ee.value.title)
                        : e.createElement(
                            'dd',
                            { key: String(de) },
                            e.createElement(
                              J.rU,
                              {
                                to: ee.value.link,
                                'data-active': ne === ee.activeIndex || void 0,
                                onClick: function () {
                                  var ce;
                                  return (ce = o.onItemSelect) === null || ce === void 0
                                    ? void 0
                                    : ce.call(o, ee.value);
                                },
                              },
                              e.createElement(C[ee.value.type]),
                              e.createElement(
                                'h4',
                                null,
                                e.createElement($, { texts: ee.value.highlightTitleTexts })
                              ),
                              e.createElement(
                                'p',
                                null,
                                e.createElement($, { texts: ee.value.highlightTexts })
                              )
                            )
                          );
                    })
                  )
                : e.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    e.createElement(Oe, null),
                    e.createElement(J._H, { id: 'search.not.found' })
                  )
            )
          );
        },
        F = P,
        z = (0, e.forwardRef)(function (a, o) {
          var c = (0, J.YB)(),
            D = (0, e.useRef)(!1),
            V = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(o, function () {
              return V.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (D.current = !0);
              },
              onCompositionEnd: function (W) {
                (D.current = !1), a.onChange(W.currentTarget.value);
              },
              onFocus: a.onFocus,
              onBlur: a.onBlur,
              onKeyDown: function (W) {
                ['ArrowDown', 'ArrowUp'].includes(W.key) && W.preventDefault(),
                  W.key === 'Escape' && !D.current && W.currentTarget.blur();
              },
              onChange: function (W) {
                setTimeout(function () {
                  D.current || a.onChange(W.target.value);
                }, 1);
              },
              placeholder: c.formatMessage({ id: 'header.search.placeholder' }),
              ref: V,
            })
          );
        }),
        _ = function (o) {
          return (
            (0, e.useEffect)(
              function () {
                if (o.visible) document.body.style.overflow = 'hidden';
                else {
                  var c;
                  (document.body.style.overflow = ''),
                    (c = o.onClose) === null || c === void 0 || c.call(o);
                }
              },
              [o.visible]
            ),
            o.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: o.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    o.children
                  )
                )
              : null
          );
        },
        ue;
      function Me(a, o) {
        return Qe(a) || Ie(a, o) || ye(a, o) || fe();
      }
      function fe() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ye(a, o) {
        if (a) {
          if (typeof a == 'string') return Ce(a, o);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (c === 'Object' && a.constructor && (c = a.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(a);
          if (c === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))
            return Ce(a, o);
        }
      }
      function Ce(a, o) {
        (o == null || o > a.length) && (o = a.length);
        for (var c = 0, D = new Array(o); c < o; c++) D[c] = a[c];
        return D;
      }
      function Ie(a, o) {
        var c =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) || a['@@iterator'];
        if (c != null) {
          var D = [],
            V = !0,
            Z = !1,
            W,
            le;
          try {
            for (
              c = c.call(a);
              !(V = (W = c.next()).done) && (D.push(W.value), !(o && D.length === o));
              V = !0
            );
          } catch (ne) {
            (Z = !0), (le = ne);
          } finally {
            try {
              !V && c.return != null && c.return();
            } finally {
              if (Z) throw le;
            }
          }
          return D;
        }
      }
      function Qe(a) {
        if (Array.isArray(a)) return a;
      }
      var be = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (ue = navigator) === null || ue === void 0
              ? void 0
              : ue.platform
            : ''
        ),
        we = function (o) {
          return ['TEXTAREA', 'INPUT'].includes(o.tagName) || o.contentEditable === 'true';
        },
        Ye = function () {
          var o = (0, e.useState)(!1),
            c = Me(o, 2),
            D = c[0],
            V = c[1],
            Z = (0, e.useRef)(null),
            W = (0, e.useRef)(null),
            le = (0, e.useState)('\u2318'),
            ne = Me(le, 2),
            Ae = ne[0],
            ee = ne[1],
            de = (0, J.OO)(),
            je = de.keywords,
            ce = de.setKeywords,
            he = de.result,
            pe = de.loading,
            Ve = (0, e.useState)(!1),
            Ze = Me(Ve, 2),
            We = Ze[0],
            Ue = Ze[1];
          return (
            (0, e.useEffect)(function () {
              be || ee('Ctrl');
              var ge = function (ve) {
                if (
                  (((be ? ve.metaKey : ve.ctrlKey) && ve.key === 'k') ||
                    (ve.key === '/' && !we(ve.target))) &&
                  (ve.preventDefault(), Z.current)
                ) {
                  var Pe = Z.current.getBoundingClientRect(),
                    Re = Pe.top,
                    _e = Pe.bottom,
                    Je = Pe.left,
                    Ke = Pe.right,
                    Ge = Re >= 0 && Je >= 0 && _e <= window.innerHeight && Ke <= window.innerWidth;
                  Ge
                    ? Z.current.focus()
                    : (ce(''),
                      Ue(!0),
                      setTimeout(function () {
                        var He;
                        (He = W.current) === null || He === void 0 || He.focus();
                      }));
                }
                ve.key === 'Escape' && (ve.preventDefault(), Ue(!1));
              };
              return (
                document.addEventListener('keydown', ge),
                function () {
                  return document.removeEventListener('keydown', ge);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(k, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(z, {
                onFocus: function () {
                  return V(!0);
                },
                onBlur: function () {
                  setTimeout(function () {
                    V(!1);
                  }, 1);
                },
                onChange: function (xe) {
                  return ce(xe);
                },
                ref: Z,
              }),
              e.createElement('span', { className: 'dumi-default-search-shortcut' }, Ae, ' K'),
              je.trim() &&
                D &&
                (he.length || !pe) &&
                !We &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement('section', null, e.createElement(F, { data: he, loading: pe }))
                ),
              e.createElement(
                _,
                {
                  visible: We,
                  onMaskClick: function () {
                    Ue(!1);
                  },
                  onClose: function () {
                    return ce('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(k, { className: 'dumi-default-search-bar-svg' }),
                  e.createElement(z, {
                    onFocus: function () {
                      return V(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        V(!1);
                      }, 1);
                    },
                    onChange: function (xe) {
                      return ce(xe);
                    },
                    ref: W,
                  })
                ),
                e.createElement(F, {
                  data: he,
                  loading: pe,
                  onItemSelect: function () {
                    Ue(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(L, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        })
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(Y, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        })
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-commands-text' },
                        'to navigate'
                      )
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc'
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-commands-text' },
                        'to close'
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ke = Ye;
    },
    72444: function (d, S, s) {
      'use strict';
      s.d(S, {
        Z: function () {
          return Oe;
        },
      });
      var e = s(93525),
        f = s.n(e),
        j = s(54306),
        T = s.n(j),
        I = s(22374),
        Q = s(21140),
        b = s.n(Q),
        Y = s(63466),
        E = s.n(Y),
        O = s(68608),
        w = s.n(O),
        X = s(58853),
        q = s.n(X),
        N = s(38888),
        y = s.n(N),
        L = s(52510),
        p = s.n(L),
        H = E()(function h() {
          b()(this, h);
        }),
        B = (function (h) {
          q()(u, h);
          var i = y()(u);
          function u(l) {
            var M;
            return b()(this, u), (M = i.call(this)), p()(w()(M), 'el', void 0), (M.el = l), M;
          }
          return (
            E()(
              u,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top;
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (M) {
                    this.el.addEventListener('scroll', M);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (M) {
                    this.el.removeEventListener('scroll', M);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (M) {
                    var x = document.querySelector(M);
                    if (!x) throw new Error('element is not found.');
                    return new u(x);
                  },
                },
              ]
            ),
            u
          );
        })(H),
        K = (function (h) {
          q()(u, h);
          var i = y()(u);
          function u() {
            return b()(this, u), i.apply(this, arguments);
          }
          return (
            E()(
              u,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return this.scrollTop + this.outerHeight >= this.scrollHeight;
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (M) {
                    document.addEventListener('scroll', M);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (M) {
                    document.removeEventListener('scroll', M);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new u();
                  },
                },
              ]
            ),
            u
          );
        })(H),
        m = (function () {
          function h() {
            b()(this, h);
          }
          return (
            E()(h, null, [
              {
                key: 'create',
                value: function (u) {
                  return u ? B.create(u) : K.create();
                },
              },
            ]),
            h
          );
        })(),
        v = function (i) {
          var u = i.sectionRefs,
            l = i.rootSelector,
            M = i.offset,
            x = M === void 0 ? 0 : M,
            g = (0, I.useRef)(null);
          (0, I.useEffect)(
            function () {
              g.current = m.create(l);
            },
            [l]
          );
          var U = (0, I.useCallback)(
              function () {
                return g.current ? g.current.isScrolledToBottom() : !1;
              },
              [g]
            ),
            G = (0, I.useCallback)(
              function (z) {
                if (!g.current) return !1;
                var _ = g.current.scrollTop,
                  ue = _ + g.current.outerHeight,
                  Me = z.getBoundingClientRect(),
                  fe = g.current instanceof B ? _ + Me.top - g.current.top + x : _ + Me.top + x,
                  ye = fe + Me.height;
                return [fe < ue, ye > _].every(function (Ce) {
                  return Ce;
                });
              },
              [g, x]
            ),
            ae = (0, I.useCallback)(
              function () {
                return u.map(function (z) {
                  return z.current ? G(z.current) : !1;
                });
              },
              [G, u]
            ),
            oe = (0, I.useState)([]),
            C = T()(oe, 2),
            $ = C[0],
            se = C[1],
            P = (0, I.useMemo)(
              function () {
                return $.findIndex(function (z) {
                  return z;
                });
              },
              [$]
            ),
            F = (0, I.useCallback)(
              function () {
                var z = U()
                  ? [].concat(
                      f()(
                        new Array(u.length - 1).fill(!1).map(function (_) {
                          return _;
                        })
                      ),
                      [!0]
                    )
                  : ae();
                se(z);
              },
              [ae, U, u]
            );
          return (
            (0, I.useEffect)(
              function () {
                return (
                  F(),
                  g.current && g.current.registerScrollEvent(F),
                  function () {
                    g.current && g.current.unregisterScrollEvent(F);
                  }
                );
              },
              [F]
            ),
            { elementsStatusInViewport: $, currentElementIndexInViewport: P }
          );
        },
        A = function (i) {
          var u = i.children,
            l = i.sectionRefs,
            M = i.rootSelector,
            x = i.offset,
            g = v({ sectionRefs: l, rootSelector: M, offset: x }),
            U = g.elementsStatusInViewport,
            G = g.currentElementIndexInViewport;
          return u({ elementsStatusInViewport: U, currentElementIndexInViewport: G });
        },
        k = s(40882);
      function R() {
        return (
          (R = Object.assign
            ? Object.assign.bind()
            : function (h) {
                for (var i = 1; i < arguments.length; i++) {
                  var u = arguments[i];
                  for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (h[l] = u[l]);
                }
                return h;
              }),
          R.apply(this, arguments)
        );
      }
      function J(h, i) {
        return Le(h) || me(h, i) || re(h, i) || te();
      }
      function te() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function re(h, i) {
        if (h) {
          if (typeof h == 'string') return ie(h, i);
          var u = Object.prototype.toString.call(h).slice(8, -1);
          if (
            (u === 'Object' && h.constructor && (u = h.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(h);
          if (u === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
            return ie(h, i);
        }
      }
      function ie(h, i) {
        (i == null || i > h.length) && (i = h.length);
        for (var u = 0, l = new Array(i); u < i; u++) l[u] = h[u];
        return l;
      }
      function me(h, i) {
        var u =
          h == null
            ? null
            : (typeof Symbol != 'undefined' && h[Symbol.iterator]) || h['@@iterator'];
        if (u != null) {
          var l = [],
            M = !0,
            x = !1,
            g,
            U;
          try {
            for (
              u = u.call(h);
              !(M = (g = u.next()).done) && (l.push(g.value), !(i && l.length === i));
              M = !0
            );
          } catch (G) {
            (x = !0), (U = G);
          } finally {
            try {
              !M && u.return != null && u.return();
            } finally {
              if (x) throw U;
            }
          }
          return l;
        }
      }
      function Le(h) {
        if (Array.isArray(h)) return h;
      }
      var De = function () {
          var i = (0, k.TH)(),
            u = i.pathname,
            l = i.search,
            M = (0, k.eL)(),
            x = (0, k.zh)(),
            g = (0, k.WF)(),
            U = g.loading,
            G = (0, I.useRef)(0),
            ae = (0, I.useState)([]),
            oe = J(ae, 2),
            C = oe[0],
            $ = oe[1],
            se = I.useMemo(
              function () {
                var P = M.toc;
                return (
                  x && (P = x.toc),
                  P.filter(function (F) {
                    var z = F.depth;
                    return z > 1 && z < 4;
                  })
                );
              },
              [M, x]
            );
          return (
            (0, I.useEffect)(
              function () {
                if (!U) {
                  var P = se.map(function (F) {
                    var z = F.id;
                    return { current: document.getElementById(z) };
                  });
                  $(P);
                }
              },
              [u, l, U]
            ),
            C.length
              ? I.createElement(A, { sectionRefs: C }, function (P) {
                  var F = P.currentElementIndexInViewport;
                  return (
                    F > -1 && (G.current = F),
                    I.createElement(
                      'ul',
                      { className: 'dumi-default-toc' },
                      se
                        .filter(function (z) {
                          var _ = z.depth;
                          return _ > 1 && _ < 4;
                        })
                        .map(function (z, _) {
                          var ue = ''.concat(l, '#').concat(encodeURIComponent(z.id)),
                            Me = F > -1 ? F : G.current;
                          return I.createElement(
                            'li',
                            { key: z.id, 'data-depth': z.depth },
                            I.createElement(
                              k.rU,
                              R(
                                { to: ue, title: z.title },
                                Me === _ ? { className: 'active' } : {}
                              ),
                              z.title
                            )
                          );
                        })
                    )
                  );
                })
              : null
          );
        },
        Oe = De;
    },
    68608: function (d) {
      function S(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }
      (d.exports = S), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    38888: function (d, S, s) {
      var e = s(44908),
        f = s(14614),
        j = s(91621);
      function T(I) {
        var Q = f();
        return function () {
          var Y = e(I),
            E;
          if (Q) {
            var O = e(this).constructor;
            E = Reflect.construct(Y, arguments, O);
          } else E = Y.apply(this, arguments);
          return j(this, E);
        };
      }
      (d.exports = T), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    44908: function (d) {
      function S(s) {
        return (
          (d.exports = S =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (f) {
                  return f.__proto__ || Object.getPrototypeOf(f);
                }),
          (d.exports.__esModule = !0),
          (d.exports.default = d.exports),
          S(s)
        );
      }
      (d.exports = S), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    58853: function (d, S, s) {
      var e = s(49154);
      function f(j, T) {
        if (typeof T != 'function' && T !== null)
          throw new TypeError('Super expression must either be null or a function');
        (j.prototype = Object.create(T && T.prototype, {
          constructor: { value: j, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(j, 'prototype', { writable: !1 }),
          T && e(j, T);
      }
      (d.exports = f), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    14614: function (d) {
      function S() {
        if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (s) {
          return !1;
        }
      }
      (d.exports = S), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    91621: function (d, S, s) {
      var e = s(37635).default,
        f = s(68608);
      function j(T, I) {
        if (I && (e(I) === 'object' || typeof I == 'function')) return I;
        if (I !== void 0)
          throw new TypeError('Derived constructors may only return object or undefined');
        return f(T);
      }
      (d.exports = j), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
    49154: function (d) {
      function S(s, e) {
        return (
          (d.exports = S =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (j, T) {
                  return (j.__proto__ = T), j;
                }),
          (d.exports.__esModule = !0),
          (d.exports.default = d.exports),
          S(s, e)
        );
      }
      (d.exports = S), (d.exports.__esModule = !0), (d.exports.default = d.exports);
    },
  },
]);
