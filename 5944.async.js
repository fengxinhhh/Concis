(self.webpackChunkconcis_ui = self.webpackChunkconcis_ui || []).push([
  [5944],
  {
    47568: function (B, M, g) {
      'use strict';
      var A = g(40882),
        u = g(22374),
        b = g(53975);
      function I(r, t) {
        return k(r) || T(r, t) || E(r, t) || S();
      }
      function S() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function E(r, t) {
        if (r) {
          if (typeof r == 'string') return j(r, t);
          var e = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (e === 'Object' && r.constructor && (e = r.constructor.name),
            e === 'Map' || e === 'Set')
          )
            return Array.from(r);
          if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
            return j(r, t);
        }
      }
      function j(r, t) {
        (t == null || t > r.length) && (t = r.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
        return n;
      }
      function T(r, t) {
        var e =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) || r['@@iterator'];
        if (e != null) {
          var n = [],
            i = !0,
            l = !1,
            o,
            c;
          try {
            for (
              e = e.call(r);
              !(i = (o = e.next()).done) && (n.push(o.value), !(t && n.length === t));
              i = !0
            );
          } catch (d) {
            (l = !0), (c = d);
          } finally {
            try {
              !i && e.return != null && e.return();
            } finally {
              if (l) throw c;
            }
          }
          return n;
        }
      }
      function k(r) {
        if (Array.isArray(r)) return r;
      }
      var L = {
          toString: function (t) {
            return typeof t.type == 'string' && t.type in this
              ? 'enum' in t
                ? this.enum(t)
                : this[t.type](t)
              : t.type
              ? this.getValidClassName(t) || t.type
              : 'const' in t
              ? t.const
              : 'oneOf' in t
              ? this.oneOf(t)
              : 'unknown';
          },
          string: function (t) {
            return t.type;
          },
          number: function (t) {
            return t.type;
          },
          boolean: function (t) {
            return t.type;
          },
          any: function (t) {
            return t.type;
          },
          object: function (t) {
            var e = this,
              n = [];
            return (
              Object.entries(t.properties || {}).forEach(function (i) {
                var l,
                  o = I(i, 2),
                  c = o[0],
                  d = o[1];
                n.push(
                  ''
                    .concat(c)
                    .concat(
                      (l = t.required) !== null && l !== void 0 && l.includes(c) ? '' : '?',
                      ': '
                    )
                    .concat(d.type === 'object' ? 'object' : e.toString(d))
                );
              }),
              n.length ? '{ '.concat(n.join('; '), ' }') : '{}'
            );
          },
          array: function (t) {
            if (t.items) {
              var e = this.getValidClassName(t.items);
              return e ? ''.concat(e, '[]') : ''.concat(this.toString(t.items), '[]');
            }
            return 'any[]';
          },
          element: function (t) {
            return '<'.concat(t.componentName, ' />');
          },
          function: function (t) {
            var e = this,
              n = t.signature;
            return ''
              .concat(n.isAsync ? 'async ' : '', '(')
              .concat(
                n.arguments
                  .map(function (i) {
                    return ''.concat(i.key, ': ').concat(e.toString(i));
                  })
                  .join(', '),
                ') => '
              )
              .concat(this.toString(n.returnType));
          },
          dom: function (t) {
            return t.className || 'DOM';
          },
          enum: function (t) {
            return t.enum
              .map(function (e) {
                return JSON.stringify(e);
              })
              .join(' | ');
          },
          oneOf: function (t) {
            var e = this;
            return t.oneOf
              .map(function (n) {
                return e.getValidClassName(n) || e.toString(n);
              })
              .join(' | ');
          },
          getValidClassName: function (t) {
            return 'className' in t && typeof t.className == 'string' && t.className !== '__type'
              ? t.className
              : null;
          },
        },
        x = function (t) {
          var e = (0, u.useState)(function () {
              return L.toString(t);
            }),
            n = I(e, 2),
            i = n[0],
            l = n[1];
          return (
            (0, u.useEffect)(
              function () {
                l(L.toString(t));
              },
              [t]
            ),
            u.createElement('code', null, i)
          );
        },
        P = function (t) {
          var e,
            n = (0, A.eL)(),
            i = n.frontmatter,
            l = (0, A.cc)(),
            o = l.components,
            c = t.id || i.atomId,
            d = (0, A.YB)();
          if (!c) throw new Error('`id` properties if required for API component!');
          var p = o == null ? void 0 : o[c];
          return u.createElement(
            'div',
            { className: 'markdown' },
            u.createElement(
              b.Z,
              null,
              u.createElement(
                'thead',
                null,
                u.createElement(
                  'tr',
                  null,
                  u.createElement('th', null, d.formatMessage({ id: 'api.component.name' })),
                  u.createElement('th', null, d.formatMessage({ id: 'api.component.description' })),
                  u.createElement('th', null, d.formatMessage({ id: 'api.component.type' })),
                  u.createElement('th', null, d.formatMessage({ id: 'api.component.default' }))
                )
              ),
              u.createElement(
                'tbody',
                null,
                p && (e = p.propsConfig) !== null && e !== void 0 && e.properties
                  ? Object.entries(p.propsConfig.properties).map(function (a) {
                      var f,
                        s = I(a, 2),
                        y = s[0],
                        v = s[1];
                      return u.createElement(
                        'tr',
                        { key: y },
                        u.createElement('td', null, y),
                        u.createElement('td', null, v.description || '--'),
                        u.createElement('td', null, u.createElement(x, v)),
                        u.createElement(
                          'td',
                          null,
                          u.createElement(
                            'code',
                            null,
                            (f = p.propsConfig.required) !== null && f !== void 0 && f.includes(y)
                              ? d.formatMessage({ id: 'api.component.required' })
                              : JSON.stringify(v.default) || '--'
                          )
                        )
                      );
                    })
                  : u.createElement(
                      'tr',
                      null,
                      u.createElement(
                        'td',
                        { colSpan: 4 },
                        d.formatMessage(
                          { id: 'api.component.'.concat(o ? 'not.found' : 'unavailable') },
                          { id: c }
                        )
                      )
                    )
              )
            )
          );
        };
      M.Z = P;
    },
    64519: function (B, M, g) {
      'use strict';
      var A = g(22374);
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (S) {
                for (var E = 1; E < arguments.length; E++) {
                  var j = arguments[E];
                  for (var T in j) Object.prototype.hasOwnProperty.call(j, T) && (S[T] = j[T]);
                }
                return S;
              }),
          u.apply(this, arguments)
        );
      }
      var b = function (E) {
          return React.createElement('span', u({ className: 'dumi-default-badge' }, E));
        },
        I = null;
    },
    53975: function (B, M, g) {
      'use strict';
      g.d(M, {
        Z: function () {
          return t;
        },
      });
      var A = g(30826),
        u = g.n(A),
        b = g(22374),
        I = ['children'];
      function S(e, n) {
        return L(e) || k(e, n) || j(e, n) || E();
      }
      function E() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function j(e, n) {
        if (e) {
          if (typeof e == 'string') return T(e, n);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          if (
            (i === 'Object' && e.constructor && (i = e.constructor.name),
            i === 'Map' || i === 'Set')
          )
            return Array.from(e);
          if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
            return T(e, n);
        }
      }
      function T(e, n) {
        (n == null || n > e.length) && (n = e.length);
        for (var i = 0, l = new Array(n); i < n; i++) l[i] = e[i];
        return l;
      }
      function k(e, n) {
        var i =
          e == null
            ? null
            : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
        if (i != null) {
          var l = [],
            o = !0,
            c = !1,
            d,
            p;
          try {
            for (
              i = i.call(e);
              !(o = (d = i.next()).done) && (l.push(d.value), !(n && l.length === n));
              o = !0
            );
          } catch (a) {
            (c = !0), (p = a);
          } finally {
            try {
              !o && i.return != null && i.return();
            } finally {
              if (c) throw p;
            }
          }
          return l;
        }
      }
      function L(e) {
        if (Array.isArray(e)) return e;
      }
      function x(e, n) {
        if (e == null) return {};
        var i = P(e, n),
          l,
          o;
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (o = 0; o < c.length; o++)
            (l = c[o]),
              !(n.indexOf(l) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, l) &&
                (i[l] = e[l]);
        }
        return i;
      }
      function P(e, n) {
        if (e == null) return {};
        var i = {},
          l = Object.keys(e),
          o,
          c;
        for (c = 0; c < l.length; c++) (o = l[c]), !(n.indexOf(o) >= 0) && (i[o] = e[o]);
        return i;
      }
      var r = function (n) {
          var i = n.children,
            l = x(n, I),
            o = (0, b.useRef)(null),
            c = (0, b.useState)(!1),
            d = S(c, 2),
            p = d[0],
            a = d[1],
            f = (0, b.useState)(!1),
            s = S(f, 2),
            y = s[0],
            v = s[1];
          return (
            (0, b.useEffect)(function () {
              var h = o.current;
              if (h) {
                var _ = u()(function () {
                  a(h.scrollLeft > 0), v(h.scrollLeft < h.scrollWidth - h.offsetWidth);
                }, 100);
                return (
                  _(),
                  h.addEventListener('scroll', _),
                  window.addEventListener('resize', _),
                  function () {
                    h.removeEventListener('scroll', _), window.removeEventListener('resize', _);
                  }
                );
              }
            }, []),
            b.createElement(
              'div',
              { className: 'dumi-default-table' },
              b.createElement(
                'div',
                {
                  className: 'dumi-default-table-content',
                  ref: o,
                  'data-left-folded': p || void 0,
                  'data-right-folded': y || void 0,
                },
                b.createElement('table', l, i)
              )
            )
          );
        },
        t = r;
    },
    30826: function (B, M, g) {
      var A = 'Expected a function',
        u = NaN,
        b = '[object Symbol]',
        I = /^\s+|\s+$/g,
        S = /^[-+]0x[0-9a-f]+$/i,
        E = /^0b[01]+$/i,
        j = /^0o[0-7]+$/i,
        T = parseInt,
        k = typeof g.g == 'object' && g.g && g.g.Object === Object && g.g,
        L = typeof self == 'object' && self && self.Object === Object && self,
        x = k || L || Function('return this')(),
        P = Object.prototype,
        r = P.toString,
        t = Math.max,
        e = Math.min,
        n = function () {
          return x.Date.now();
        };
      function i(a, f, s) {
        var y,
          v,
          h,
          _,
          O,
          N,
          w = 0,
          V = !1,
          W = !1,
          $ = !0;
        if (typeof a != 'function') throw new TypeError(A);
        (f = p(f) || 0),
          o(s) &&
            ((V = !!s.leading),
            (W = 'maxWait' in s),
            (h = W ? t(p(s.maxWait) || 0, f) : h),
            ($ = 'trailing' in s ? !!s.trailing : $));
        function F(m) {
          var C = y,
            R = v;
          return (y = v = void 0), (w = m), (_ = a.apply(R, C)), _;
        }
        function z(m) {
          return (w = m), (O = setTimeout(D, f)), V ? F(m) : _;
        }
        function J(m) {
          var C = m - N,
            R = m - w,
            Z = f - C;
          return W ? e(Z, h - R) : Z;
        }
        function H(m) {
          var C = m - N,
            R = m - w;
          return N === void 0 || C >= f || C < 0 || (W && R >= h);
        }
        function D() {
          var m = n();
          if (H(m)) return K(m);
          O = setTimeout(D, J(m));
        }
        function K(m) {
          return (O = void 0), $ && y ? F(m) : ((y = v = void 0), _);
        }
        function G() {
          O !== void 0 && clearTimeout(O), (w = 0), (y = N = v = O = void 0);
        }
        function X() {
          return O === void 0 ? _ : K(n());
        }
        function U() {
          var m = n(),
            C = H(m);
          if (((y = arguments), (v = this), (N = m), C)) {
            if (O === void 0) return z(N);
            if (W) return (O = setTimeout(D, f)), F(N);
          }
          return O === void 0 && (O = setTimeout(D, f)), _;
        }
        return (U.cancel = G), (U.flush = X), U;
      }
      function l(a, f, s) {
        var y = !0,
          v = !0;
        if (typeof a != 'function') throw new TypeError(A);
        return (
          o(s) &&
            ((y = 'leading' in s ? !!s.leading : y), (v = 'trailing' in s ? !!s.trailing : v)),
          i(a, f, { leading: y, maxWait: f, trailing: v })
        );
      }
      function o(a) {
        var f = typeof a;
        return !!a && (f == 'object' || f == 'function');
      }
      function c(a) {
        return !!a && typeof a == 'object';
      }
      function d(a) {
        return typeof a == 'symbol' || (c(a) && r.call(a) == b);
      }
      function p(a) {
        if (typeof a == 'number') return a;
        if (d(a)) return u;
        if (o(a)) {
          var f = typeof a.valueOf == 'function' ? a.valueOf() : a;
          a = o(f) ? f + '' : f;
        }
        if (typeof a != 'string') return a === 0 ? a : +a;
        a = a.replace(I, '');
        var s = E.test(a);
        return s || j.test(a) ? T(a.slice(2), s ? 2 : 8) : S.test(a) ? u : +a;
      }
      B.exports = l;
    },
  },
]);
