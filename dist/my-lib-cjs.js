'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react');
function t(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
function n(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        if ('default' !== n) {
          var r = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            r.get
              ? r
              : {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                },
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
var r = t(e),
  a = n(e);
const l = e.memo((t) => {
    const {
        type: n,
        width: a,
        height: l,
        disabled: o,
        circle: i,
        dashed: c,
        loading: s,
        handleClick: d,
        children: u,
      } = t,
      f = e.useMemo(
        () =>
          n || 'danger' === n || 'warning' === n || 'warning' === n || 'text' === n ? n : 'primary',
        [n],
      ),
      m = e.useMemo(() => {
        var e = { width: '100px', height: '40px' };
        return (
          a && (e.width = a + 'px'),
          l && (e.height = l + 'px'),
          i && (e = Object.assign(Object.assign({}, e), { borderRadius: '50%' })),
          c &&
            'text' === n &&
            (e = Object.assign(Object.assign({}, e), { border: '1px dashed #ccc' })),
          o && (e = Object.assign(Object.assign({}, e), { cursor: 'not-allowed' })),
          e
        );
      }, [a, l, i, c]);
    return r.default.createElement(
      'div',
      { className: 'button' },
      r.default.createElement(
        'button',
        { className: f, style: m, disabled: !!o, onClick: d },
        s && r.default.createElement('div', { className: 'loading1' }),
        u,
      ),
    );
  }),
  o = e.memo((t) => {
    const { children: n, fontSize: a, borderColor: l, align: o, dashed: i } = t,
      c = e.useMemo(
        () =>
          'left' === o
            ? { justifyContent: 'left' }
            : 'right' === o
            ? { justifyContent: 'right' }
            : {},
        [o],
      ),
      s = e.useMemo(() => (l ? { borderColor: l } : {}), [l]),
      d = e.useMemo(() => {
        if (a) return { fontSize: `${a}px` };
      }, [a]);
    return r.default.createElement(
      'div',
      { className: 'divider' },
      r.default.createElement(
        'div',
        { className: i ? 'dashed' : 'line', style: Object.assign(Object.assign({}, c), s) },
        n && r.default.createElement('span', { className: 'line-text', style: d }, n),
      ),
    );
  });
var i = e.memo((t) => {
  const { children: n, extraStyle: a } = t,
    l = e.useMemo(() => a || {}, [a]);
  return r.default.createElement('div', { className: 'layout', style: l }, n);
});
var c = e.memo((t) => {
  const { children: n, extraStyle: a } = t,
    l = e.useMemo(() => a || {}, [a]);
  return r.default.createElement('div', { className: 'header', style: l }, n);
});
var s = e.memo((t) => {
  const { row: n, extraStyle: a } = t,
    l = e.useMemo(() => (n ? { width: `${n}0%` } : {}), [n]),
    o = e.useMemo(() => a || {}, [a]);
  return r.default.createElement(
    'div',
    { className: 'slider', style: Object.assign(Object.assign({}, l), o) },
    t.children,
  );
});
var d = e.memo((t) => {
  const { children: n, row: a, extraStyle: l } = t,
    o = e.useMemo(() => (a ? { width: `${a}0%` } : {}), [a]),
    i = e.useMemo(() => l || {}, [l]);
  return r.default.createElement(
    'div',
    { className: 'content', style: Object.assign(Object.assign({}, o), i) },
    n,
  );
});
var u = e.memo((t) => {
    const { children: n, extraStyle: a } = t,
      l = e.useMemo(() => a || {}, [a]);
    return r.default.createElement('div', { className: 'footer', style: l }, n);
  }),
  f = e.createContext({});
function m(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? h(Object(n), !0).forEach(function (t) {
          m(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : h(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function g(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function b(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
        var r,
          a,
          l = [],
          o = !0,
          i = !1;
        try {
          for (
            n = n.call(e);
            !(o = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t);
            o = !0
          );
        } catch (e) {
          (i = !0), (a = e);
        } finally {
          try {
            o || null == n.return || n.return();
          } finally {
            if (i) throw a;
          }
        }
        return l;
      }
    })(e, t) ||
    (function (e, t) {
      if (e) {
        if ('string' == typeof e) return g(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? g(e, t)
            : void 0
        );
      }
    })(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function y(e, t) {
  if (null == e) return {};
  var n,
    r,
    a = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
  }
  return a;
}
var v,
  x,
  k =
    ((v = function (e) {
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function () {
        var t = {}.hasOwnProperty;
        function n() {
          for (var e = [], r = 0; r < arguments.length; r++) {
            var a = arguments[r];
            if (a) {
              var l = typeof a;
              if ('string' === l || 'number' === l) e.push(a);
              else if (Array.isArray(a)) {
                if (a.length) {
                  var o = n.apply(null, a);
                  o && e.push(o);
                }
              } else if ('object' === l)
                if (a.toString === Object.prototype.toString)
                  for (var i in a) t.call(a, i) && a[i] && e.push(i);
                else e.push(a.toString());
            }
          }
          return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
      })();
    }),
    v((x = { exports: {} }), x.exports),
    x.exports);
function w(e) {
  return (
    (w =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    w(e)
  );
}
function E(e, t) {
  (function (e) {
    return 'string' == typeof e && -1 !== e.indexOf('.') && 1 === parseFloat(e);
  })(e) && (e = '100%');
  var n = (function (e) {
    return 'string' == typeof e && -1 !== e.indexOf('%');
  })(e);
  return (
    (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (e =
          360 === t
            ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
            : (e % t) / parseFloat(String(t)))
  );
}
function N(e) {
  return e <= 1 ? 100 * Number(e) + '%' : e;
}
function C(e) {
  return 1 === e.length ? '0' + e : String(e);
}
function O(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function S(e) {
  return M(e) / 255;
}
function M(e) {
  return parseInt(e, 16);
}
var j = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function A(e) {
  var t,
    n,
    r,
    a = { r: 0, g: 0, b: 0 },
    l = 1,
    o = null,
    i = null,
    c = null,
    s = !1,
    d = !1;
  return (
    'string' == typeof e &&
      (e = (function (e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (j[e]) (e = j[e]), (t = !0);
        else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var n = z.rgb.exec(e);
        if (n) return { r: n[1], g: n[2], b: n[3] };
        if ((n = z.rgba.exec(e))) return { r: n[1], g: n[2], b: n[3], a: n[4] };
        if ((n = z.hsl.exec(e))) return { h: n[1], s: n[2], l: n[3] };
        if ((n = z.hsla.exec(e))) return { h: n[1], s: n[2], l: n[3], a: n[4] };
        if ((n = z.hsv.exec(e))) return { h: n[1], s: n[2], v: n[3] };
        if ((n = z.hsva.exec(e))) return { h: n[1], s: n[2], v: n[3], a: n[4] };
        if ((n = z.hex8.exec(e)))
          return { r: M(n[1]), g: M(n[2]), b: M(n[3]), a: S(n[4]), format: t ? 'name' : 'hex8' };
        if ((n = z.hex6.exec(e)))
          return { r: M(n[1]), g: M(n[2]), b: M(n[3]), format: t ? 'name' : 'hex' };
        if ((n = z.hex4.exec(e)))
          return {
            r: M(n[1] + n[1]),
            g: M(n[2] + n[2]),
            b: M(n[3] + n[3]),
            a: S(n[4] + n[4]),
            format: t ? 'name' : 'hex8',
          };
        if ((n = z.hex3.exec(e)))
          return {
            r: M(n[1] + n[1]),
            g: M(n[2] + n[2]),
            b: M(n[3] + n[3]),
            format: t ? 'name' : 'hex',
          };
        return !1;
      })(e)),
    'object' == typeof e &&
      (R(e.r) && R(e.g) && R(e.b)
        ? ((t = e.r),
          (n = e.g),
          (r = e.b),
          (a = { r: 255 * E(t, 255), g: 255 * E(n, 255), b: 255 * E(r, 255) }),
          (s = !0),
          (d = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
        : R(e.h) && R(e.s) && R(e.v)
        ? ((o = N(e.s)),
          (i = N(e.v)),
          (a = (function (e, t, n) {
            (e = 6 * E(e, 360)), (t = E(t, 100)), (n = E(n, 100));
            var r = Math.floor(e),
              a = e - r,
              l = n * (1 - t),
              o = n * (1 - a * t),
              i = n * (1 - (1 - a) * t),
              c = r % 6;
            return {
              r: 255 * [n, o, l, l, i, n][c],
              g: 255 * [i, n, n, o, l, l][c],
              b: 255 * [l, l, i, n, n, o][c],
            };
          })(e.h, o, i)),
          (s = !0),
          (d = 'hsv'))
        : R(e.h) &&
          R(e.s) &&
          R(e.l) &&
          ((o = N(e.s)),
          (c = N(e.l)),
          (a = (function (e, t, n) {
            var r, a, l;
            if (((e = E(e, 360)), (t = E(t, 100)), (n = E(n, 100)), 0 === t))
              (a = n), (l = n), (r = n);
            else {
              var o = n < 0.5 ? n * (1 + t) : n + t - n * t,
                i = 2 * n - o;
              (r = O(i, o, e + 1 / 3)), (a = O(i, o, e)), (l = O(i, o, e - 1 / 3));
            }
            return { r: 255 * r, g: 255 * a, b: 255 * l };
          })(e.h, o, c)),
          (s = !0),
          (d = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (l = e.a)),
    (l = (function (e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    })(l)),
    {
      ok: s,
      format: e.format || d,
      r: Math.min(255, Math.max(a.r, 0)),
      g: Math.min(255, Math.max(a.g, 0)),
      b: Math.min(255, Math.max(a.b, 0)),
      a: l,
    }
  );
}
var F = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
  T = '[\\s|\\(]+(' + F + ')[,|\\s]+(' + F + ')[,|\\s]+(' + F + ')\\s*\\)?',
  B = '[\\s|\\(]+(' + F + ')[,|\\s]+(' + F + ')[,|\\s]+(' + F + ')[,|\\s]+(' + F + ')\\s*\\)?',
  z = {
    CSS_UNIT: new RegExp(F),
    rgb: new RegExp('rgb' + T),
    rgba: new RegExp('rgba' + B),
    hsl: new RegExp('hsl' + T),
    hsla: new RegExp('hsla' + B),
    hsv: new RegExp('hsv' + T),
    hsva: new RegExp('hsva' + B),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function R(e) {
  return Boolean(z.CSS_UNIT.exec(String(e)));
}
var L = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 },
];
function I(e) {
  var t = (function (e, t, n) {
    (e = E(e, 255)), (t = E(t, 255)), (n = E(n, 255));
    var r = Math.max(e, t, n),
      a = Math.min(e, t, n),
      l = 0,
      o = r,
      i = r - a,
      c = 0 === r ? 0 : i / r;
    if (r === a) l = 0;
    else {
      switch (r) {
        case e:
          l = (t - n) / i + (t < n ? 6 : 0);
          break;
        case t:
          l = (n - e) / i + 2;
          break;
        case n:
          l = (e - t) / i + 4;
      }
      l /= 6;
    }
    return { h: l, s: c, v: o };
  })(e.r, e.g, e.b);
  return { h: 360 * t.h, s: t.s, v: t.v };
}
function P(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(
    (function (e, t, n, r) {
      var a = [
        C(Math.round(e).toString(16)),
        C(Math.round(t).toString(16)),
        C(Math.round(n).toString(16)),
      ];
      return r &&
        a[0].startsWith(a[0].charAt(1)) &&
        a[1].startsWith(a[1].charAt(1)) &&
        a[2].startsWith(a[2].charAt(1))
        ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
        : a.join('');
    })(t, n, r, !1),
  );
}
function D(e, t, n) {
  var r = n / 100;
  return { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
}
function $(e, t, n) {
  var r;
  return (
    (r =
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? n
          ? Math.round(e.h) - 2 * t
          : Math.round(e.h) + 2 * t
        : n
        ? Math.round(e.h) + 2 * t
        : Math.round(e.h) - 2 * t) < 0
      ? (r += 360)
      : r >= 360 && (r -= 360),
    r
  );
}
function q(e, t, n) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (r = 1),
      n && 5 === t && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2)));
  var r;
}
function J(e, t, n) {
  var r;
  return (r = n ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (r = 1), Number(r.toFixed(2));
}
function U(e) {
  for (
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = [],
      r = A(e),
      a = 5;
    a > 0;
    a -= 1
  ) {
    var l = I(r),
      o = P(A({ h: $(l, a, !0), s: q(l, a, !0), v: J(l, a, !0) }));
    n.push(o);
  }
  n.push(P(r));
  for (var i = 1; i <= 4; i += 1) {
    var c = I(r),
      s = P(A({ h: $(c, i), s: q(c, i), v: J(c, i) }));
    n.push(s);
  }
  return 'dark' === t.theme
    ? L.map(function (e) {
        var r = e.index,
          a = e.opacity;
        return P(D(A(t.backgroundColor || '#141414'), A(n[r]), 100 * a));
      })
    : n;
}
var _ = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  H = {},
  K = {};
Object.keys(_).forEach(function (e) {
  (H[e] = U(_[e])),
    (H[e].primary = H[e][5]),
    (K[e] = U(_[e], { theme: 'dark', backgroundColor: '#141414' })),
    (K[e].primary = K[e][5]);
}),
  H.red,
  H.volcano,
  H.gold,
  H.orange,
  H.yellow,
  H.lime,
  H.green,
  H.cyan,
  H.blue,
  H.geekblue,
  H.purple,
  H.magenta,
  H.grey;
var W = {};
function V(e, t) {
  'production' === process.env.NODE_ENV ||
    e ||
    void 0 === console ||
    console.error('Warning: '.concat(t));
}
function G(e, t) {
  !(function (e, t, n) {
    t || W[n] || (e(!1, n), (W[n] = !0));
  })(V, e, t);
}
function Y() {
  return !('undefined' == typeof window || !window.document || !window.document.createElement);
}
function Q() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : 'rc-util-key';
}
function X(e) {
  return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
}
function Z(e) {
  var t,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!Y()) return null;
  var r,
    a = document.createElement('style');
  (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) &&
    (a.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce);
  a.innerHTML = e;
  var l = X(n),
    o = l.firstChild;
  return (
    n.prepend && l.prepend
      ? l.prepend(a)
      : n.prepend && o
      ? l.insertBefore(a, o)
      : l.appendChild(a),
    a
  );
}
var ee = new Map();
function te(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = X(t);
  return Array.from(ee.get(n).children).find(function (n) {
    return 'STYLE' === n.tagName && n.getAttribute(Q(t)) === e;
  });
}
function ne(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = X(n);
  if (!ee.has(r)) {
    var a = Z('', n),
      l = a.parentNode;
    ee.set(r, l), l.removeChild(a);
  }
  var o = te(t, n);
  if (o) {
    var i, c, s;
    if (
      (null === (i = n.csp) || void 0 === i ? void 0 : i.nonce) &&
      o.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)
    )
      o.nonce = null === (s = n.csp) || void 0 === s ? void 0 : s.nonce;
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var d = Z(e, n);
  return d.setAttribute(Q(n), t), d;
}
function re(e) {
  return (
    'object' === w(e) &&
    'string' == typeof e.name &&
    'string' == typeof e.theme &&
    ('object' === w(e.icon) || 'function' == typeof e.icon)
  );
}
function ae() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    if ('class' === n) (t.className = r), delete t.class;
    else t[n] = r;
    return t;
  }, {});
}
function le(e, t, n) {
  return n
    ? r.default.createElement(
        e.tag,
        p(p({ key: t }, ae(e.attrs)), n),
        (e.children || []).map(function (n, r) {
          return le(n, ''.concat(t, '-').concat(e.tag, '-').concat(r));
        }),
      )
    : r.default.createElement(
        e.tag,
        p({ key: t }, ae(e.attrs)),
        (e.children || []).map(function (n, r) {
          return le(n, ''.concat(t, '-').concat(e.tag, '-').concat(r));
        }),
      );
}
function oe(e) {
  return U(e)[0];
}
function ie(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var ce =
    '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
  se = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
  de = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
var ue = function (t) {
  var n,
    r,
    a = t.icon,
    l = t.className,
    o = t.onClick,
    i = t.style,
    c = t.primaryColor,
    s = t.secondaryColor,
    d = y(t, se),
    u = de;
  if (
    (c && (u = { primaryColor: c, secondaryColor: s || oe(c) }),
    (function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
        n = e.useContext(f).csp;
      e.useEffect(function () {
        ne(t, '@ant-design-icons', { prepend: !0, csp: n });
      }, []);
    })(),
    (n = re(a)),
    (r = 'icon should be icon definiton, but got '.concat(a)),
    G(n, '[@ant-design/icons] '.concat(r)),
    !re(a))
  )
    return null;
  var m = a;
  return (
    m &&
      'function' == typeof m.icon &&
      (m = p(p({}, m), {}, { icon: m.icon(u.primaryColor, u.secondaryColor) })),
    le(
      m.icon,
      'svg-'.concat(m.name),
      p(
        {
          className: l,
          onClick: o,
          style: i,
          'data-icon': m.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        d,
      ),
    )
  );
};
(ue.displayName = 'IconReact'),
  (ue.getTwoToneColors = function () {
    return p({}, de);
  }),
  (ue.setTwoToneColors = function (e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (de.primaryColor = t), (de.secondaryColor = n || oe(t)), (de.calculated = !!n);
  });
var fe = ue;
function me(e) {
  var t = b(ie(e), 2),
    n = t[0],
    r = t[1];
  return fe.setTwoToneColors({ primaryColor: n, secondaryColor: r });
}
var he = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
me('#1890ff');
var pe = a.forwardRef(function (e, t) {
  var n,
    r = e.className,
    l = e.icon,
    o = e.spin,
    i = e.rotate,
    c = e.tabIndex,
    s = e.onClick,
    d = e.twoToneColor,
    u = y(e, he),
    h = a.useContext(f).prefixCls,
    g = void 0 === h ? 'anticon' : h,
    v = k(
      g,
      (m((n = {}), ''.concat(g, '-').concat(l.name), !!l.name),
      m(n, ''.concat(g, '-spin'), !!o || 'loading' === l.name),
      n),
      r,
    ),
    x = c;
  void 0 === x && s && (x = -1);
  var w = i
      ? { msTransform: 'rotate('.concat(i, 'deg)'), transform: 'rotate('.concat(i, 'deg)') }
      : void 0,
    E = b(ie(d), 2),
    N = E[0],
    C = E[1];
  return a.createElement(
    'span',
    p(
      p({ role: 'img', 'aria-label': l.name }, u),
      {},
      { ref: t, tabIndex: x, onClick: s, className: v },
    ),
    a.createElement(fe, { icon: l, primaryColor: N, secondaryColor: C, style: w }),
  );
});
(pe.displayName = 'AntdIcon'),
  (pe.getTwoToneColor = function () {
    var e = fe.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (pe.setTwoToneColor = me);
var ge = pe,
  be = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
          },
        },
      ],
    },
    name: 'caret-down',
    theme: 'outlined',
  },
  ye = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: be }));
  };
ye.displayName = 'CaretDownOutlined';
var ve = a.forwardRef(ye),
  xe = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
          },
        },
      ],
    },
    name: 'caret-up',
    theme: 'outlined',
  },
  ke = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: xe }));
  };
ke.displayName = 'CaretUpOutlined';
var we = a.forwardRef(ke),
  Ee = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  },
  Ne = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: Ee }));
  };
Ne.displayName = 'CloseOutlined';
var Ce = a.forwardRef(Ne),
  Oe = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
      ],
    },
    name: 'down',
    theme: 'outlined',
  },
  Se = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: Oe }));
  };
Se.displayName = 'DownOutlined';
var Me = a.forwardRef(Se),
  je = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'ellipsis',
    theme: 'outlined',
  },
  Ae = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: je }));
  };
Ae.displayName = 'EllipsisOutlined';
var Fe = a.forwardRef(Ae),
  Te = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
          },
        },
      ],
    },
    name: 'eye',
    theme: 'outlined',
  },
  Be = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: Te }));
  };
Be.displayName = 'EyeOutlined';
var ze = a.forwardRef(Be),
  Re = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          },
        },
      ],
    },
    name: 'left',
    theme: 'outlined',
  },
  Le = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: Re }));
  };
Le.displayName = 'LeftOutlined';
var Ie = a.forwardRef(Le),
  Pe = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
          },
        },
      ],
    },
    name: 'loading',
    theme: 'outlined',
  },
  De = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: Pe }));
  };
De.displayName = 'LoadingOutlined';
var $e = a.forwardRef(De),
  qe = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
          },
        },
      ],
    },
    name: 'right',
    theme: 'outlined',
  },
  Je = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: qe }));
  };
Je.displayName = 'RightOutlined';
var Ue = a.forwardRef(Je),
  _e = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z',
          },
        },
      ],
    },
    name: 'up',
    theme: 'outlined',
  },
  He = function (e, t) {
    return a.createElement(ge, p(p({}, e), {}, { ref: t, icon: _e }));
  };
He.displayName = 'UpOutlined';
var Ke = a.forwardRef(He);
var We = e.memo((t) => {
  const {
      changePageCallback: n,
      total: a,
      pageSizeOptions: l,
      showJumpInput: o,
      showSizeChanger: i,
    } = t,
    [c, s] = e.useState(1),
    [d, u] = e.useState([]),
    [f, m] = e.useState(l ? l[0] : 10);
  e.useState(!1);
  const h = e.useMemo(() => {
    if ((s(1), Math.ceil(a / f) > 6)) u([2, 3, 4, 5, 6]);
    else if (Math.ceil(a / f) > 2) {
      const e = new Array(Math.ceil(a / f) - 2).fill(0);
      e.forEach((t, n) => {
        e[n] = n + 2;
      }),
        u(e);
    } else u([]);
    return Math.ceil(a / f);
  }, [a, f]);
  e.useEffect(() => {
    console.log(typeof c);
  }, [c]);
  const p = (e) => () => {
    if (h <= 6) return n(e), s(e);
    e > 4 && e <= h - 4 && u([e - 2, e - 1, e, e + 1, e + 2]),
      e <= 4 && u([2, 3, 4, 5, 6]),
      e > h - 4 && u([h - 5, h - 4, h - 3, h - 2, h - 1]),
      s(e),
      n(e);
  };
  return r.default.createElement(
    'div',
    { className: 'pagination' },
    r.default.createElement(
      'div',
      {
        className: 1 === c ? 'prev disabled' : 'prev',
        onClick: () => {
          if (1 !== c) {
            if ((s(c - 1), h > 6)) {
              if (c > h - 3) return;
              c > 4 ? u(d.map((e) => e - 1)) : c - 5 <= 4 && u([2, 3, 4, 5, 6]);
            }
            n(c - 1);
          }
        },
      },
      r.default.createElement(Ie, null),
    ),
    r.default.createElement(
      'div',
      { className: 1 === c ? 'actived numberBox' : 'numberBox', onClick: p(1) },
      '1',
    ),
    c > 4 &&
      h > 6 &&
      r.default.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            c - 5 <= 4
              ? (u([2, 3, 4, 5, 6]), (e = c - 5 <= 1 ? 1 : c - 5))
              : c + 5 > h
              ? (u([c - 7, c - 6, c - 5, c - 4, c - 3]), (e = c - 5))
              : c - 5 > 4 && (u(d.map((e) => e - 5)), (e = c - 5)),
              s(e),
              n(e);
          },
        },
        r.default.createElement(Fe, null),
      ),
    h <= 4 &&
      d.length >= 1 &&
      d.map((e) =>
        r.default.createElement(
          'div',
          { className: c === e + 2 ? 'actived numberBox' : 'numberBox', key: e, onClick: p(e + 2) },
          e + 2,
        ),
      ),
    h > 4 &&
      d.map((e, t) =>
        r.default.createElement(
          'div',
          { className: c === e ? 'actived numberBox' : 'numberBox', key: t, onClick: p(e) },
          e,
        ),
      ),
    h - c >= 4 &&
      h > 6 &&
      r.default.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            c + 7 >= h
              ? (u([h - 5, h - 4, h - 3, h - 2, h - 1]), (e = c + 5 > h ? h : c + 5))
              : c - 5 < 0
              ? (u([c + 3, c + 4, c + 5, c + 6, c + 7]), (e = c + 5))
              : c + 5 < h && (u(d.map((e) => e + 5)), (e = c + 5)),
              s(e),
              n(e);
          },
        },
        r.default.createElement(Fe, null),
      ),
    h > 1 &&
      r.default.createElement(
        'div',
        { className: c === h ? 'actived numberBox' : 'numberBox', onClick: p(h) },
        h,
      ),
    r.default.createElement(
      'div',
      {
        className: c === h || h <= 1 ? 'next disabled' : 'next',
        onClick: () => {
          if (c !== h) {
            if ((s(c + 1), h > 6))
              if (c + 5 > h) u([h - 5, h - 4, h - 3, h - 2, h - 1]);
              else {
                if (c < 4) return;
                c + 5 < h && u(d.map((e) => e + 1));
              }
            n(c + 1);
          }
        },
      },
      r.default.createElement(Ue, null),
    ),
    Array.isArray(l) &&
      i &&
      r.default.createElement(Ve, {
        option: l.map((e) => ({ label: `${e} 条/页`, value: e })),
        width: 100,
        handleSelectCallback: (e) => {
          console.log(e), m(e);
        },
      }),
    o &&
      r.default.createElement(
        'div',
        { className: 'jumpBox' },
        r.default.createElement('span', null, '跳至'),
        r.default.createElement('input', {
          type: 'text',
          className: 'jump',
          onKeyUp: (e) => {
            if (13 === e.keyCode) {
              const t = Number(e.target.value);
              if (t > h || t < 0 || isNaN(t)) return (e.target.value = '');
              t > 6 && t < h - 6
                ? u([t - 2, t - 1, t, t + 1, t + 2])
                : t - 5 < 0
                ? u([2, 3, 4, 5, 6])
                : t + 5 > h && u([h - 5, h - 4, h - 3, h - 2, h - 1]),
                s(t),
                n(t),
                (e.target.value = '');
            }
          },
        }),
        r.default.createElement('span', null, '页'),
      ),
  );
});
var Ve = e.memo((t) => {
  const {
      option: n,
      width: a,
      placeholder: l,
      disabled: o,
      loading: i,
      showSearch: c,
      clearable: s,
      handleSelectCallback: d,
      handleTextChange: u,
    } = t,
    [f, m] = e.useState(''),
    h = e.createRef();
  e.useEffect(() => {
    (h.current.height = '0px'), console.log(n);
  }, []);
  const p = e.useMemo(() => (a ? { width: `${a}px` } : {}), [a]),
    g = e.useMemo(() => {
      if (o) return { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' };
    }, [o]),
    b = (e) => {
      e.stopPropagation(),
        o ||
          (console.log(h.current.style.height),
          '0px' === h.current.style.height || '' === h.current.style.height
            ? (h.current.style.height = c ? 100 * v.length + '%' : 100 * n.length + '%')
            : (h.current.style.height = '0px'),
          console.log(h.current.height));
    },
    y = (e, t) => {
      t.stopPropagation(),
        e.disabled || ((h.current.style.height = '0px'), m(e.label), d && d(e.value));
    },
    v = e.useMemo(() => n.filter((e) => e.label.includes(f)), [n, f]),
    x = e.useCallback(
      (e) => {
        m(e.target.value),
          (h.current.style.height =
            100 * n.filter((t) => t.label.includes(e.target.value)).length + '%'),
          u && u(e.target.value);
      },
      [f],
    );
  return c
    ? r.default.createElement(
        r.default.Fragment,
        null,
        r.default.createElement(
          'div',
          { className: 'select', style: Object.assign(Object.assign({}, p), g) },
          r.default.createElement(
            'div',
            { className: 'selected' },
            r.default.createElement('input', {
              type: 'text',
              className: 'selected',
              value: f,
              placeholder: l,
              onClick: b,
              onChange: (e) => x(e),
            }),
            s
              ? r.default.createElement(Ce, { onClick: () => m('') })
              : r.default.createElement(Me, { onClick: b }),
          ),
          r.default.createElement(
            'div',
            { className: 'selectOptions', style: p, ref: h },
            v.map((e) =>
              r.default.createElement(
                'div',
                {
                  key: e.label,
                  className: 'option',
                  style: e.disabled
                    ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                    : {},
                  onClick: (t) => y(e, t),
                },
                e.label,
              ),
            ),
          ),
        ),
      )
    : r.default.createElement(
        'div',
        { className: 'select', style: Object.assign(Object.assign({}, p), g) },
        r.default.createElement(
          'div',
          { className: 'selected', onClick: b },
          f
            ? r.default.createElement('div', { className: 'size' }, f)
            : (l && r.default.createElement('div', { className: 'placeholder' }, l)) ||
                r.default.createElement('div', null),
          i ? r.default.createElement($e, null) : r.default.createElement(Me, null),
        ),
        r.default.createElement(
          'div',
          { className: 'selectOptions', style: p, ref: h },
          n.map((e) =>
            r.default.createElement(
              'div',
              {
                key: e.label,
                className: 'option',
                style: e.disabled
                  ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                  : {},
                onClick: (t) => y(e, t),
              },
              e.label,
            ),
          ),
        ),
      );
});
var Ge = e.memo((t) => {
  const {
      width: n,
      moreStyle: a,
      type: l,
      placeholder: o,
      showClear: i,
      showTogglePwd: c,
      min: s,
      max: d,
      step: u,
      handleIptChange: f,
      handleKeyDown: m,
      handleNumChange: h,
      defaultValue: p,
    } = t,
    [g, b] = e.useState(p || ''),
    [y, v] = e.useState(!0),
    x = e.useMemo(
      () => (c && 'password' === l ? (y ? 'password' : 'text') : l || 'text'),
      [l, c, y],
    ),
    k = e.useMemo(() => {
      let e = { width: '170px' };
      return n && (e.width = n + 'px'), Object.assign(Object.assign({}, e), a);
    }, [n, a]);
  return r.default.createElement(
    'div',
    { className: 'box', style: { width: n ? n + 'px' : '170px' } },
    r.default.createElement('input', {
      className: 'input',
      style: k,
      type: x,
      placeholder: o,
      value: g,
      onChange: (e) => {
        b(e.target.value), f && f(e.target.value);
      },
      onBlur: (e) => {
        'num' === l && NaN == Number(g) && b('');
      },
      onKeyUp: (e) => m && m(e),
    }),
    (i &&
      r.default.createElement(Ce, {
        style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
        onClick: () => b(''),
      })) ||
      ('password' === l &&
        c &&
        r.default.createElement(ze, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => v(!y),
        })) ||
      ('num' === l &&
        r.default.createElement(
          'div',
          { className: 'numTags' },
          r.default.createElement(Ke, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(g)) return b('');
              const e = u || 1;
              return u && d && Number(g) + e > d
                ? (h && h(d), b(d))
                : u && s && Number(g) + e < s
                ? (h && h(s), b(s))
                : (h && h(Number(g) + e), void b(Number(g) + e));
            },
          }),
          r.default.createElement(Me, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(g)) return b('');
              const e = u || 1;
              if (u && s && Number(g) - e < s) return h && h(s), b(s);
              h && h(Number(g) - e), b(Number(g) - e);
            },
          }),
        )),
  );
});
var Ye = e.memo((e) => {
  const { children: t } = e;
  return r.default.createElement('div', { style: { display: 'none' } }, t);
});
var Qe = e.memo((t) => {
  const { children: n, value: a, canAddOption: l, boxStyle: o, onChange: i } = t,
    [c, s] = e.useState(a || 0),
    [d, u] = e.useState(n),
    [f, m] = e.useState(''),
    [h, p] = e.useState(l && !1);
  e.useEffect(() => {
    console.log(o);
  });
  const g = (e, t, n) => {
      e.disabled || (n && n.stopPropagation(), s(t), i && i(e, t), l && p(!1));
    },
    b = () => {
      s(d.length), p(!0);
    },
    y = (e) => {
      13 == e.keyCode && f && (u((e) => [...e, { props: { children: f } }]), p(!1));
    },
    v = (e) => {
      m(e);
    },
    x = e.useCallback(
      (e, t) => (e.disabled ? 'groupDisabledStyle' : t == c ? 'groupActive' : 'groupStyle'),
      [n, o, a, c],
    );
  return r.default.createElement(
    'div',
    { className: 'radioGroup' },
    d.map((e, t) =>
      o
        ? r.default.createElement(
            'div',
            {
              className: x(e.props, t),
              style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
              key: t,
              onClick: (n) => g(e.props, t, n),
            },
            e.props.children,
          )
        : r.default.createElement(
            'div',
            {
              className: 'radioBox',
              style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
              key: t,
              onClick: (n) => g(e.props, t, n),
            },
            r.default.createElement(
              'span',
              { className: e.props.disabled ? 'disabledLabel' : 'radioLabel' },
              e.props.children,
            ),
            r.default.createElement('input', {
              className: e.props.disabled ? 'disabledRadio' : 'radio',
              readOnly: !0,
              type: 'radio',
              checked: c === t,
              disabled: e.props.disabled,
            }),
          ),
    ),
    l
      ? o
        ? r.default.createElement(
            'div',
            { className: 'addOption' },
            r.default.createElement(
              'div',
              { className: c === d.length ? 'groupActive' : 'groupStyle', onClick: b },
              'More...',
            ),
            h && r.default.createElement(Ge, { handleKeyDown: y, handleIptChange: v }),
          )
        : r.default.createElement(
            'div',
            { className: 'addOption' },
            r.default.createElement(
              'div',
              { className: 'radioBox', onClick: b },
              r.default.createElement('span', { className: 'radioLabel' }, 'More...'),
              r.default.createElement('input', {
                className: 'radio',
                type: 'radio',
                readOnly: !0,
                checked: c === d.length,
              }),
            ),
            h && r.default.createElement(Ge, { handleKeyDown: y, handleIptChange: v }),
          )
      : r.default.createElement(r.default.Fragment, null),
  );
});
var Xe = e.memo((t) => {
  const [n, a] = e.useState(''),
    [l, o] = e.useState(''),
    [i, c] = e.useState({}),
    { items: s, width: d, dark: u, ableToggle: f, defaultOpen: m, handleRouteChange: h } = t;
  e.useEffect(() => {
    const e = p(s, {}, '');
    if (m)
      for (var t in e)
        (e[t].height = e[t].childNum + 1),
          e[t].children.length > 0 &&
            (e[t].children.map((e) => (e.height = 50 * (e.childNum + 1) + 'px')),
            (e[t].height += e[t].children.reduce((e, t) => e.childNum + t.childNum))),
          (e[t].height = 50 * e[t].height + 'px');
    c(e);
  }, []),
    e.useEffect(() => {
      h && h(l);
    }, [l]);
  const p = (e, t, n) => (
      e.forEach((e) => {
        var r;
        e.children &&
          (1 == e.level
            ? (t[e.key] = {
                key: e.key,
                height: '50px',
                childNum: e.children.length,
                level: e.level,
                children: [],
              })
            : null === (r = t[n]) ||
              void 0 === r ||
              r.children.push({
                key: e.key,
                height: '50px',
                childNum: e.children.length,
                level: e.level,
              }),
          p(e.children, t, e.level && 1 == e.level ? e.key : ''));
      }),
      t
    ),
    g = (e) => {
      var t;
      return i[e]
        ? { height: null === (t = i[e]) || void 0 === t ? void 0 : t.height }
        : { height: '50px' };
    },
    b = e.useCallback(
      (e) => {
        var t;
        for (var n in i) {
          const r =
            null === (t = i[n].children) || void 0 === t ? void 0 : t.findIndex((t) => t.key == e);
          if (-1 !== r) return { height: i[n].children[r].height };
        }
        return { height: '50px' };
      },
      [i],
    ),
    y = e.useMemo(() => {
      if (d) {
        if ('string' == typeof d) return { width: d.includes('%') ? d : d + 'px' };
        if ('number' == typeof d) return { width: d + 'px' };
      }
      return { width: '220px' };
    }, [d]),
    v = (e) => {
      if (e.children)
        return e.children.map((t) =>
          r.default.createElement(
            'div',
            { key: t.key },
            r.default.createElement(
              'div',
              {
                className: l == t.key ? 'activeMenuOptions' : 'childMenuOptions',
                style: Object.assign({}, b(t.key)),
              },
              r.default.createElement(
                'div',
                {
                  className:
                    t.children && -1 !== t.children.findIndex((e) => e.key == l)
                      ? 'activeFatherTitle'
                      : 'fatherTitle',
                  onClick: (n) =>
                    ((e, t, n) => {
                      if (
                        (((2 == e.level && !e.children) || 3 == e.level) && (a(n), o(e.key)),
                        2 == e.level)
                      ) {
                        const t = Object.assign({}, i);
                        for (var r in t)
                          if (
                            t[r].children &&
                            -1 !== t[r].children.findIndex((t) => t.key == e.key)
                          ) {
                            const n = t[r].children.findIndex((t) => t.key == e.key);
                            t[r].children[n].height =
                              '50px' == t[r].children[n].height
                                ? 50 * (t[r].children[n].childNum + 1) + 'px'
                                : '50px';
                            let a = 50 * (t[r].childNum - t[r].children.length) + 50;
                            (a += t[r].children.reduce(
                              (e, t) =>
                                Number(e.height.split('px')[0]) + Number(t.height.split('px')[0]),
                            )),
                              (t[r].height = a);
                          }
                        c(t);
                      }
                      if (3 == e.level)
                        for (var r in i)
                          i[r].children &&
                            -1 !== i[r].children.findIndex((e) => e.key == n) &&
                            a(i[r].key);
                    })(t, 0, e.key),
                },
                r.default.createElement('span', null, t.label),
                t.children &&
                  ('50px' == b(t.key).height
                    ? r.default.createElement(ve, null)
                    : r.default.createElement(we, null)),
              ),
              r.default.createElement(
                'div',
                { className: 'childMenuOptions', key: t.key },
                t.children && v(t),
              ),
            ),
          ),
        );
    };
  return r.default.createElement(
    'div',
    { className: u ? 'darkMenu' : 'menu', style: y },
    s.map((e) =>
      r.default.createElement(
        'div',
        { key: e.key },
        r.default.createElement(
          'div',
          { className: 'menuOptions', style: g(e.key) },
          r.default.createElement(
            'div',
            {
              className: n == e.key ? 'activeFatherTitle' : 'fatherTitle',
              onClick: (t) =>
                ((e, t) => {
                  t.stopPropagation();
                  const n = e.key,
                    r = Object.assign({}, i);
                  if (
                    ((r[n].height =
                      '50px' == r[n].height ? 50 * (r[n].childNum + 1) + 'px' : '50px'),
                    f)
                  ) {
                    if ('50px' !== r[n].height)
                      for (var a in r)
                        a !== n &&
                          ((r[a].height = '50px'),
                          r[a].children && r[a].children.map((e) => (e.height = '50px')));
                  } else
                    0 !== r[n].children.length &&
                      r[n].children.forEach((e) => {
                        e.height = '50px';
                      });
                  c(r);
                })(e, t),
            },
            r.default.createElement(
              'div',
              { className: 'left' },
              r.default.createElement('i', null, e.icon),
              r.default.createElement('span', null, e.label),
            ),
            '50px' == g(e.key).height
              ? r.default.createElement(ve, null)
              : r.default.createElement(we, null),
          ),
          r.default.createElement(r.default.Fragment, null, e.children && v(e)),
        ),
      ),
    ),
  );
});
var Ze = e.memo((t) => {
  const {
      children: n,
      affixType: a,
      offsetTop: l,
      offsetLeft: o,
      offsetBottom: i,
      offsetRight: c,
      style: s,
    } = t,
    [d, u] = e.useState({});
  let f;
  e.useEffect(() => {
    const e = document.querySelector('.affix');
    return (
      (f = new IntersectionObserver((e) => h(e))),
      f.observe(e),
      'scroll' == a
        ? (window.addEventListener('scroll', m),
          u(
            (e) => (
              (e.position = 'relative'),
              l && !e.bottom && (e.top = 0),
              i && !e.top && (e.bottom = 0),
              o && !e.right && (e.left = 0),
              c && !e.left && (e.right = 0),
              JSON.parse(JSON.stringify(e))
            ),
          ))
        : u(
            (e) => (
              (e.position = 'fixed'),
              l && !e.bottom && (e.top = l),
              i && !e.top && (e.bottom = i),
              o && !e.right && (e.left = o),
              c && !e.left && (e.right = c),
              JSON.parse(JSON.stringify(e))
            ),
          ),
      () => {
        f.unobserve(e);
      }
    );
  }, []);
  const m = () => {
      document.querySelector('.affix'),
        window.scrollY < 200 &&
          u((e) => {
            for (const t in e)
              'position' == t
                ? (e[t] = 'relative')
                : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
            return JSON.parse(JSON.stringify(e));
          });
    },
    h = (e) => {
      e.forEach((e) => {
        e.isIntersecting ||
          ('relative' == d.position &&
            u(
              (e) => (
                (e.position = 'fixed'),
                l && l !== e.top && (e.top = `${l}px`),
                i && i !== e.bottom && (e.bottom = `${i}px`),
                o && o !== e.left && (e.left = `${o}px`),
                c && c !== e.right && (e.right = `${c}px`),
                JSON.parse(JSON.stringify(e))
              ),
            ));
      });
    };
  return r.default.createElement(
    'div',
    { className: 'affix', style: Object.assign(Object.assign({}, d), s) },
    n,
  );
});
(exports.Affix = Ze),
  (exports.Button = l),
  (exports.Content = d),
  (exports.Divider = o),
  (exports.Footer = u),
  (exports.Header = c),
  (exports.Input = Ge),
  (exports.Layout = i),
  (exports.Menu = Xe),
  (exports.Pagination = We),
  (exports.Radio = Ye),
  (exports.RadioGroup = Qe),
  (exports.Select = Ve),
  (exports.Slider = s);
