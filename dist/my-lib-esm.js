import * as e from 'react';
import t, {
  memo as n,
  useMemo as a,
  createContext as r,
  useContext as l,
  useEffect as o,
  useState as i,
  createRef as c,
  useCallback as s,
} from 'react';
const d = n((e) => {
    const {
        type: n,
        width: r,
        height: l,
        disabled: o,
        circle: i,
        dashed: c,
        loading: s,
        handleClick: d,
        children: u,
      } = e,
      m = a(
        () =>
          n || 'danger' === n || 'warning' === n || 'warning' === n || 'text' === n ? n : 'primary',
        [n],
      ),
      f = a(() => {
        var e = { width: '100px', height: '40px' };
        return (
          r && (e.width = r + 'px'),
          l && (e.height = l + 'px'),
          i && (e = Object.assign(Object.assign({}, e), { borderRadius: '50%' })),
          c &&
            'text' === n &&
            (e = Object.assign(Object.assign({}, e), { border: '1px dashed #ccc' })),
          o && (e = Object.assign(Object.assign({}, e), { cursor: 'not-allowed' })),
          e
        );
      }, [r, l, i, c]);
    return t.createElement(
      'div',
      { className: 'button' },
      t.createElement(
        'button',
        { className: m, style: f, disabled: !!o, onClick: d },
        s && t.createElement('div', { className: 'loading1' }),
        u,
      ),
    );
  }),
  u = n((e) => {
    const { children: n, fontSize: r, borderColor: l, align: o, dashed: i } = e,
      c = a(
        () =>
          'left' === o
            ? { justifyContent: 'left' }
            : 'right' === o
            ? { justifyContent: 'right' }
            : {},
        [o],
      ),
      s = a(() => (l ? { borderColor: l } : {}), [l]),
      d = a(() => {
        if (r) return { fontSize: `${r}px` };
      }, [r]);
    return t.createElement(
      'div',
      { className: 'divider' },
      t.createElement(
        'div',
        { className: i ? 'dashed' : 'line', style: Object.assign(Object.assign({}, c), s) },
        n && t.createElement('span', { className: 'line-text', style: d }, n),
      ),
    );
  });
var m = n((e) => {
  const { children: n, extraStyle: r } = e,
    l = a(() => r || {}, [r]);
  return t.createElement('div', { className: 'layout', style: l }, n);
});
var f = n((e) => {
  const { children: n, extraStyle: r } = e,
    l = a(() => r || {}, [r]);
  return t.createElement('div', { className: 'header', style: l }, n);
});
var h = n((e) => {
  const { row: n, extraStyle: r } = e,
    l = a(() => (n ? { width: `${n}0%` } : {}), [n]),
    o = a(() => r || {}, [r]);
  return t.createElement(
    'div',
    { className: 'slider', style: Object.assign(Object.assign({}, l), o) },
    e.children,
  );
});
var g = n((e) => {
  const { children: n, row: r, extraStyle: l } = e,
    o = a(() => (r ? { width: `${r}0%` } : {}), [r]),
    i = a(() => l || {}, [l]);
  return t.createElement(
    'div',
    { className: 'content', style: Object.assign(Object.assign({}, o), i) },
    n,
  );
});
var p = n((e) => {
    const { children: n, extraStyle: r } = e,
      l = a(() => r || {}, [r]);
    return t.createElement('div', { className: 'footer', style: l }, n);
  }),
  b = r({});
function y(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
  }
  return n;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? v(Object(n), !0).forEach(function (t) {
          y(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : v(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function x(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function k(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      var n =
        null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
        var a,
          r,
          l = [],
          o = !0,
          i = !1;
        try {
          for (
            n = n.call(e);
            !(o = (a = n.next()).done) && (l.push(a.value), !t || l.length !== t);
            o = !0
          );
        } catch (e) {
          (i = !0), (r = e);
        } finally {
          try {
            o || null == n.return || n.return();
          } finally {
            if (i) throw r;
          }
        }
        return l;
      }
    })(e, t) ||
    (function (e, t) {
      if (e) {
        if ('string' == typeof e) return x(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? x(e, t)
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
function w(e, t) {
  if (null == e) return {};
  var n,
    a,
    r = (function (e, t) {
      if (null == e) return {};
      var n,
        a,
        r = {},
        l = Object.keys(e);
      for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      (n = l[a]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
var N,
  C,
  O =
    ((N = function (e) {
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function () {
        var t = {}.hasOwnProperty;
        function n() {
          for (var e = [], a = 0; a < arguments.length; a++) {
            var r = arguments[a];
            if (r) {
              var l = typeof r;
              if ('string' === l || 'number' === l) e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  var o = n.apply(null, r);
                  o && e.push(o);
                }
              } else if ('object' === l)
                if (r.toString === Object.prototype.toString)
                  for (var i in r) t.call(r, i) && r[i] && e.push(i);
                else e.push(r.toString());
            }
          }
          return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
      })();
    }),
    N((C = { exports: {} }), C.exports),
    C.exports);
function M(e) {
  return (
    (M =
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
    M(e)
  );
}
function j(e, t) {
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
function D(e) {
  return e <= 1 ? 100 * Number(e) + '%' : e;
}
function S(e) {
  return 1 === e.length ? '0' + e : String(e);
}
function A(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function F(e) {
  return Y(e) / 255;
}
function Y(e) {
  return parseInt(e, 16);
}
var $ = {
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
function L(e) {
  var t,
    n,
    a,
    r = { r: 0, g: 0, b: 0 },
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
        if ($[e]) (e = $[e]), (t = !0);
        else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var n = R.rgb.exec(e);
        if (n) return { r: n[1], g: n[2], b: n[3] };
        if ((n = R.rgba.exec(e))) return { r: n[1], g: n[2], b: n[3], a: n[4] };
        if ((n = R.hsl.exec(e))) return { h: n[1], s: n[2], l: n[3] };
        if ((n = R.hsla.exec(e))) return { h: n[1], s: n[2], l: n[3], a: n[4] };
        if ((n = R.hsv.exec(e))) return { h: n[1], s: n[2], v: n[3] };
        if ((n = R.hsva.exec(e))) return { h: n[1], s: n[2], v: n[3], a: n[4] };
        if ((n = R.hex8.exec(e)))
          return { r: Y(n[1]), g: Y(n[2]), b: Y(n[3]), a: F(n[4]), format: t ? 'name' : 'hex8' };
        if ((n = R.hex6.exec(e)))
          return { r: Y(n[1]), g: Y(n[2]), b: Y(n[3]), format: t ? 'name' : 'hex' };
        if ((n = R.hex4.exec(e)))
          return {
            r: Y(n[1] + n[1]),
            g: Y(n[2] + n[2]),
            b: Y(n[3] + n[3]),
            a: F(n[4] + n[4]),
            format: t ? 'name' : 'hex8',
          };
        if ((n = R.hex3.exec(e)))
          return {
            r: Y(n[1] + n[1]),
            g: Y(n[2] + n[2]),
            b: Y(n[3] + n[3]),
            format: t ? 'name' : 'hex',
          };
        return !1;
      })(e)),
    'object' == typeof e &&
      (I(e.r) && I(e.g) && I(e.b)
        ? ((t = e.r),
          (n = e.g),
          (a = e.b),
          (r = { r: 255 * j(t, 255), g: 255 * j(n, 255), b: 255 * j(a, 255) }),
          (s = !0),
          (d = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
        : I(e.h) && I(e.s) && I(e.v)
        ? ((o = D(e.s)),
          (i = D(e.v)),
          (r = (function (e, t, n) {
            (e = 6 * j(e, 360)), (t = j(t, 100)), (n = j(n, 100));
            var a = Math.floor(e),
              r = e - a,
              l = n * (1 - t),
              o = n * (1 - r * t),
              i = n * (1 - (1 - r) * t),
              c = a % 6;
            return {
              r: 255 * [n, o, l, l, i, n][c],
              g: 255 * [i, n, n, o, l, l][c],
              b: 255 * [l, l, i, n, n, o][c],
            };
          })(e.h, o, i)),
          (s = !0),
          (d = 'hsv'))
        : I(e.h) &&
          I(e.s) &&
          I(e.l) &&
          ((o = D(e.s)),
          (c = D(e.l)),
          (r = (function (e, t, n) {
            var a, r, l;
            if (((e = j(e, 360)), (t = j(t, 100)), (n = j(n, 100)), 0 === t))
              (r = n), (l = n), (a = n);
            else {
              var o = n < 0.5 ? n * (1 + t) : n + t - n * t,
                i = 2 * n - o;
              (a = A(i, o, e + 1 / 3)), (r = A(i, o, e)), (l = A(i, o, e - 1 / 3));
            }
            return { r: 255 * a, g: 255 * r, b: 255 * l };
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
      r: Math.min(255, Math.max(r.r, 0)),
      g: Math.min(255, Math.max(r.g, 0)),
      b: Math.min(255, Math.max(r.b, 0)),
      a: l,
    }
  );
}
var B = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
  z = '[\\s|\\(]+(' + B + ')[,|\\s]+(' + B + ')[,|\\s]+(' + B + ')\\s*\\)?',
  T = '[\\s|\\(]+(' + B + ')[,|\\s]+(' + B + ')[,|\\s]+(' + B + ')[,|\\s]+(' + B + ')\\s*\\)?',
  R = {
    CSS_UNIT: new RegExp(B),
    rgb: new RegExp('rgb' + z),
    rgba: new RegExp('rgba' + T),
    hsl: new RegExp('hsl' + z),
    hsla: new RegExp('hsla' + T),
    hsv: new RegExp('hsv' + z),
    hsva: new RegExp('hsva' + T),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function I(e) {
  return Boolean(R.CSS_UNIT.exec(String(e)));
}
var P = [
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
function H(e) {
  var t = (function (e, t, n) {
    (e = j(e, 255)), (t = j(t, 255)), (n = j(n, 255));
    var a = Math.max(e, t, n),
      r = Math.min(e, t, n),
      l = 0,
      o = a,
      i = a - r,
      c = 0 === a ? 0 : i / a;
    if (a === r) l = 0;
    else {
      switch (a) {
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
function q(e) {
  var t = e.r,
    n = e.g,
    a = e.b;
  return '#'.concat(
    (function (e, t, n, a) {
      var r = [
        S(Math.round(e).toString(16)),
        S(Math.round(t).toString(16)),
        S(Math.round(n).toString(16)),
      ];
      return a &&
        r[0].startsWith(r[0].charAt(1)) &&
        r[1].startsWith(r[1].charAt(1)) &&
        r[2].startsWith(r[2].charAt(1))
        ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
        : r.join('');
    })(t, n, a, !1),
  );
}
function J(e, t, n) {
  var a = n / 100;
  return { r: (t.r - e.r) * a + e.r, g: (t.g - e.g) * a + e.g, b: (t.b - e.b) * a + e.b };
}
function K(e, t, n) {
  var a;
  return (
    (a =
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? n
          ? Math.round(e.h) - 2 * t
          : Math.round(e.h) + 2 * t
        : n
        ? Math.round(e.h) + 2 * t
        : Math.round(e.h) - 2 * t) < 0
      ? (a += 360)
      : a >= 360 && (a -= 360),
    a
  );
}
function V(e, t, n) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((a = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (a = 1),
      n && 5 === t && a > 0.1 && (a = 0.1),
      a < 0.06 && (a = 0.06),
      Number(a.toFixed(2)));
  var a;
}
function W(e, t, n) {
  var a;
  return (a = n ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (a = 1), Number(a.toFixed(2));
}
function U(e) {
  for (
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = [],
      a = L(e),
      r = 5;
    r > 0;
    r -= 1
  ) {
    var l = H(a),
      o = q(L({ h: K(l, r, !0), s: V(l, r, !0), v: W(l, r, !0) }));
    n.push(o);
  }
  n.push(q(a));
  for (var i = 1; i <= 4; i += 1) {
    var c = H(a),
      s = q(L({ h: K(c, i), s: V(c, i), v: W(c, i) }));
    n.push(s);
  }
  return 'dark' === t.theme
    ? P.map(function (e) {
        var a = e.index,
          r = e.opacity;
        return q(J(L(t.backgroundColor || '#141414'), L(n[a]), 100 * r));
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
  G = {},
  Q = {};
Object.keys(_).forEach(function (e) {
  (G[e] = U(_[e])),
    (G[e].primary = G[e][5]),
    (Q[e] = U(_[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Q[e].primary = Q[e][5]);
}),
  G.red,
  G.volcano,
  G.gold,
  G.orange,
  G.yellow,
  G.lime,
  G.green,
  G.cyan,
  G.blue,
  G.geekblue,
  G.purple,
  G.magenta,
  G.grey;
var X = {};
function Z(e, t) {
  'production' === process.env.NODE_ENV ||
    e ||
    void 0 === console ||
    console.error('Warning: '.concat(t));
}
function ee(e, t) {
  !(function (e, t, n) {
    t || X[n] || (e(!1, n), (X[n] = !0));
  })(Z, e, t);
}
function te() {
  return !('undefined' == typeof window || !window.document || !window.document.createElement);
}
function ne() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : 'rc-util-key';
}
function ae(e) {
  return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
}
function re(e) {
  var t,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!te()) return null;
  var a,
    r = document.createElement('style');
  (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) &&
    (r.nonce = null === (a = n.csp) || void 0 === a ? void 0 : a.nonce);
  r.innerHTML = e;
  var l = ae(n),
    o = l.firstChild;
  return (
    n.prepend && l.prepend
      ? l.prepend(r)
      : n.prepend && o
      ? l.insertBefore(r, o)
      : l.appendChild(r),
    r
  );
}
var le = new Map();
function oe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = ae(t);
  return Array.from(le.get(n).children).find(function (n) {
    return 'STYLE' === n.tagName && n.getAttribute(ne(t)) === e;
  });
}
function ie(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    a = ae(n);
  if (!le.has(a)) {
    var r = re('', n),
      l = r.parentNode;
    le.set(a, l), l.removeChild(r);
  }
  var o = oe(t, n);
  if (o) {
    var i, c, s;
    if (
      (null === (i = n.csp) || void 0 === i ? void 0 : i.nonce) &&
      o.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)
    )
      o.nonce = null === (s = n.csp) || void 0 === s ? void 0 : s.nonce;
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var d = re(e, n);
  return d.setAttribute(ne(n), t), d;
}
function ce(e) {
  return (
    'object' === M(e) &&
    'string' == typeof e.name &&
    'string' == typeof e.theme &&
    ('object' === M(e.icon) || 'function' == typeof e.icon)
  );
}
function se() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var a = e[n];
    if ('class' === n) (t.className = a), delete t.class;
    else t[n] = a;
    return t;
  }, {});
}
function de(e, n, a) {
  return a
    ? t.createElement(
        e.tag,
        E(E({ key: n }, se(e.attrs)), a),
        (e.children || []).map(function (t, a) {
          return de(t, ''.concat(n, '-').concat(e.tag, '-').concat(a));
        }),
      )
    : t.createElement(
        e.tag,
        E({ key: n }, se(e.attrs)),
        (e.children || []).map(function (t, a) {
          return de(t, ''.concat(n, '-').concat(e.tag, '-').concat(a));
        }),
      );
}
function ue(e) {
  return U(e)[0];
}
function me(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var fe =
    '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
  he = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
  ge = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
var pe = function (e) {
  var t,
    n,
    a = e.icon,
    r = e.className,
    i = e.onClick,
    c = e.style,
    s = e.primaryColor,
    d = e.secondaryColor,
    u = w(e, he),
    m = ge;
  if (
    (s && (m = { primaryColor: s, secondaryColor: d || ue(s) }),
    (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
        t = l(b).csp;
      o(function () {
        ie(e, '@ant-design-icons', { prepend: !0, csp: t });
      }, []);
    })(),
    (t = ce(a)),
    (n = 'icon should be icon definiton, but got '.concat(a)),
    ee(t, '[@ant-design/icons] '.concat(n)),
    !ce(a))
  )
    return null;
  var f = a;
  return (
    f &&
      'function' == typeof f.icon &&
      (f = E(E({}, f), {}, { icon: f.icon(m.primaryColor, m.secondaryColor) })),
    de(
      f.icon,
      'svg-'.concat(f.name),
      E(
        {
          className: r,
          onClick: i,
          style: c,
          'data-icon': f.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        u,
      ),
    )
  );
};
(pe.displayName = 'IconReact'),
  (pe.getTwoToneColors = function () {
    return E({}, ge);
  }),
  (pe.setTwoToneColors = function (e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (ge.primaryColor = t), (ge.secondaryColor = n || ue(t)), (ge.calculated = !!n);
  });
var be = pe;
function ye(e) {
  var t = k(me(e), 2),
    n = t[0],
    a = t[1];
  return be.setTwoToneColors({ primaryColor: n, secondaryColor: a });
}
var ve = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
ye('#1890ff');
var Ee = e.forwardRef(function (t, n) {
  var a,
    r = t.className,
    l = t.icon,
    o = t.spin,
    i = t.rotate,
    c = t.tabIndex,
    s = t.onClick,
    d = t.twoToneColor,
    u = w(t, ve),
    m = e.useContext(b).prefixCls,
    f = void 0 === m ? 'anticon' : m,
    h = O(
      f,
      (y((a = {}), ''.concat(f, '-').concat(l.name), !!l.name),
      y(a, ''.concat(f, '-spin'), !!o || 'loading' === l.name),
      a),
      r,
    ),
    g = c;
  void 0 === g && s && (g = -1);
  var p = i
      ? { msTransform: 'rotate('.concat(i, 'deg)'), transform: 'rotate('.concat(i, 'deg)') }
      : void 0,
    v = k(me(d), 2),
    x = v[0],
    N = v[1];
  return e.createElement(
    'span',
    E(
      E({ role: 'img', 'aria-label': l.name }, u),
      {},
      { ref: n, tabIndex: g, onClick: s, className: h },
    ),
    e.createElement(be, { icon: l, primaryColor: x, secondaryColor: N, style: p }),
  );
});
(Ee.displayName = 'AntdIcon'),
  (Ee.getTwoToneColor = function () {
    var e = be.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (Ee.setTwoToneColor = ye);
var xe = Ee,
  ke = {
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
  we = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: ke }));
  };
we.displayName = 'CaretDownOutlined';
var Ne = e.forwardRef(we),
  Ce = {
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
  Oe = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: Ce }));
  };
Oe.displayName = 'CaretUpOutlined';
var Me = e.forwardRef(Oe),
  je = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
          },
        },
      ],
    },
    name: 'check',
    theme: 'outlined',
  },
  De = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: je }));
  };
De.displayName = 'CheckOutlined';
var Se = e.forwardRef(De),
  Ae = {
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
  Fe = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: Ae }));
  };
Fe.displayName = 'CloseOutlined';
var Ye = e.forwardRef(Fe),
  $e = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
          },
        },
      ],
    },
    name: 'double-left',
    theme: 'outlined',
  },
  Le = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: $e }));
  };
Le.displayName = 'DoubleLeftOutlined';
var Be = e.forwardRef(Le),
  ze = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
          },
        },
      ],
    },
    name: 'double-right',
    theme: 'outlined',
  },
  Te = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: ze }));
  };
Te.displayName = 'DoubleRightOutlined';
var Re = e.forwardRef(Te),
  Ie = {
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
  Pe = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: Ie }));
  };
Pe.displayName = 'DownOutlined';
var He = e.forwardRef(Pe),
  qe = {
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
  Je = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: qe }));
  };
Je.displayName = 'EllipsisOutlined';
var Ke = e.forwardRef(Je),
  Ve = {
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
  We = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: Ve }));
  };
We.displayName = 'EyeOutlined';
var Ue = e.forwardRef(We),
  _e = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
        {
          tag: 'path',
          attrs: {
            d: 'M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7a321 321 0 01-44.5 55.7 317.17 317.17 0 01-101.3 68.3c-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3a321 321 0 0144.5 55.7c3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8a9.18 9.18 0 00-8.2-13.3z',
          },
        },
      ],
    },
    name: 'field-time',
    theme: 'outlined',
  },
  Ge = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: _e }));
  };
Ge.displayName = 'FieldTimeOutlined';
var Qe = e.forwardRef(Ge),
  Xe = {
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
  Ze = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: Xe }));
  };
Ze.displayName = 'LeftOutlined';
var et = e.forwardRef(Ze),
  tt = {
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
  nt = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: tt }));
  };
nt.displayName = 'LoadingOutlined';
var at = e.forwardRef(nt),
  rt = {
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
  lt = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: rt }));
  };
lt.displayName = 'RightOutlined';
var ot = e.forwardRef(lt),
  it = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z',
          },
        },
      ],
    },
    name: 'rollback',
    theme: 'outlined',
  },
  ct = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: it }));
  };
ct.displayName = 'RollbackOutlined';
var st = e.forwardRef(ct),
  dt = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
          },
        },
      ],
    },
    name: 'swap-right',
    theme: 'outlined',
  },
  ut = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: dt }));
  };
ut.displayName = 'SwapRightOutlined';
var mt = e.forwardRef(ut),
  ft = {
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
  ht = function (t, n) {
    return e.createElement(xe, E(E({}, t), {}, { ref: n, icon: ft }));
  };
ht.displayName = 'UpOutlined';
var gt = e.forwardRef(ht);
var pt = n((e) => {
  const {
      changePageCallback: n,
      total: r,
      pageSizeOptions: l,
      showJumpInput: c,
      showSizeChanger: s,
    } = e,
    [d, u] = i(1),
    [m, f] = i([]),
    [h, g] = i(l ? l[0] : 10),
    p = a(() => {
      if ((u(1), Math.ceil(r / h) > 6)) f([2, 3, 4, 5, 6]);
      else if (Math.ceil(r / h) > 2) {
        const e = new Array(Math.ceil(r / h) - 2).fill(0);
        e.forEach((t, n) => {
          e[n] = n + 2;
        }),
          f(e);
      } else f([]);
      return Math.ceil(r / h);
    }, [r, h]);
  o(() => {
    console.log(typeof d);
  }, [d]);
  const b = (e) => () => {
    if (p <= 6) return n(e), u(e);
    e > 4 && e <= p - 4 && f([e - 2, e - 1, e, e + 1, e + 2]),
      e <= 4 && f([2, 3, 4, 5, 6]),
      e > p - 4 && f([p - 5, p - 4, p - 3, p - 2, p - 1]),
      u(e),
      n(e);
  };
  return t.createElement(
    'div',
    { className: 'pagination' },
    t.createElement(
      'div',
      {
        className: 1 === d ? 'prev disabled' : 'prev',
        onClick: () => {
          if (1 !== d) {
            if ((u(d - 1), p > 6)) {
              if (d > p - 3) return;
              d > 4 ? f(m.map((e) => e - 1)) : d - 5 <= 4 && f([2, 3, 4, 5, 6]);
            }
            n(d - 1);
          }
        },
      },
      t.createElement(et, null),
    ),
    t.createElement(
      'div',
      { className: 1 === d ? 'actived numberBox' : 'numberBox', onClick: b(1) },
      '1',
    ),
    d > 4 &&
      p > 6 &&
      t.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            d - 5 <= 4
              ? (f([2, 3, 4, 5, 6]), (e = d - 5 <= 1 ? 1 : d - 5))
              : d + 5 > p
              ? (f([d - 7, d - 6, d - 5, d - 4, d - 3]), (e = d - 5))
              : d - 5 > 4 && (f(m.map((e) => e - 5)), (e = d - 5)),
              u(e),
              n(e);
          },
        },
        t.createElement(Ke, null),
      ),
    p <= 4 &&
      m.length >= 1 &&
      m.map((e) =>
        t.createElement(
          'div',
          { className: d === e + 2 ? 'actived numberBox' : 'numberBox', key: e, onClick: b(e + 2) },
          e + 2,
        ),
      ),
    p > 4 &&
      m.map((e, n) =>
        t.createElement(
          'div',
          { className: d === e ? 'actived numberBox' : 'numberBox', key: n, onClick: b(e) },
          e,
        ),
      ),
    p - d >= 4 &&
      p > 6 &&
      t.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            d + 7 >= p
              ? (f([p - 5, p - 4, p - 3, p - 2, p - 1]), (e = d + 5 > p ? p : d + 5))
              : d - 5 < 0
              ? (f([d + 3, d + 4, d + 5, d + 6, d + 7]), (e = d + 5))
              : d + 5 < p && (f(m.map((e) => e + 5)), (e = d + 5)),
              u(e),
              n(e);
          },
        },
        t.createElement(Ke, null),
      ),
    p > 1 &&
      t.createElement(
        'div',
        { className: d === p ? 'actived numberBox' : 'numberBox', onClick: b(p) },
        p,
      ),
    t.createElement(
      'div',
      {
        className: d === p || p <= 1 ? 'next disabled' : 'next',
        onClick: () => {
          if (d !== p) {
            if ((u(d + 1), p > 6))
              if (d + 5 > p) f([p - 5, p - 4, p - 3, p - 2, p - 1]);
              else {
                if (d < 4) return;
                d + 5 < p && f(m.map((e) => e + 1));
              }
            n(d + 1);
          }
        },
      },
      t.createElement(ot, null),
    ),
    Array.isArray(l) &&
      s &&
      t.createElement(bt, {
        option: l.map((e) => ({ label: `${e} 条/页`, value: e })),
        width: 100,
        handleSelectCallback: (e) => {
          console.log(e), g(e);
        },
      }),
    c &&
      t.createElement(
        'div',
        { className: 'jumpBox' },
        t.createElement('span', null, '跳至'),
        t.createElement('input', {
          type: 'text',
          className: 'jump',
          onKeyUp: (e) => {
            if (13 === e.keyCode) {
              const t = Number(e.target.value);
              if (t > p || t < 0 || isNaN(t)) return (e.target.value = '');
              t > 6 && t < p - 6
                ? f([t - 2, t - 1, t, t + 1, t + 2])
                : t - 5 < 0
                ? f([2, 3, 4, 5, 6])
                : t + 5 > p && f([p - 5, p - 4, p - 3, p - 2, p - 1]),
                u(t),
                n(t),
                (e.target.value = '');
            }
          },
        }),
        t.createElement('span', null, '页'),
      ),
  );
});
var bt = n((e) => {
  const {
      option: n,
      width: r,
      placeholder: l,
      disabled: d,
      loading: u,
      showSearch: m,
      clearable: f,
      handleSelectCallback: h,
      handleTextChange: g,
    } = e,
    [p, b] = i(''),
    y = c();
  o(() => {
    (y.current.height = '0px'), console.log(n);
  }, []);
  const v = a(() => (r ? { width: `${r}px` } : {}), [r]),
    E = a(() => {
      if (d) return { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' };
    }, [d]),
    x = (e) => {
      e.stopPropagation(),
        d ||
          (console.log(y.current.style.height),
          '0px' === y.current.style.height || '' === y.current.style.height
            ? (y.current.style.height = m ? 100 * w.length + '%' : 100 * n.length + '%')
            : (y.current.style.height = '0px'),
          console.log(y.current.height));
    },
    k = (e, t) => {
      t.stopPropagation(),
        e.disabled || ((y.current.style.height = '0px'), b(e.label), h && h(e.value));
    },
    w = a(() => n.filter((e) => e.label.includes(p)), [n, p]),
    N = s(
      (e) => {
        b(e.target.value),
          (y.current.style.height =
            100 * n.filter((t) => t.label.includes(e.target.value)).length + '%'),
          g && g(e.target.value);
      },
      [p],
    );
  return m
    ? t.createElement(
        t.Fragment,
        null,
        t.createElement(
          'div',
          { className: 'select', style: Object.assign(Object.assign({}, v), E) },
          t.createElement(
            'div',
            { className: 'selected' },
            t.createElement('input', {
              type: 'text',
              className: 'selected',
              value: p,
              placeholder: l,
              onClick: x,
              onChange: (e) => N(e),
            }),
            f ? t.createElement(Ye, { onClick: () => b('') }) : t.createElement(He, { onClick: x }),
          ),
          t.createElement(
            'div',
            { className: 'selectOptions', style: v, ref: y },
            w.map((e) =>
              t.createElement(
                'div',
                {
                  key: e.label,
                  className: 'option',
                  style: e.disabled
                    ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                    : {},
                  onClick: (t) => k(e, t),
                },
                e.label,
              ),
            ),
          ),
        ),
      )
    : t.createElement(
        'div',
        { className: 'select', style: Object.assign(Object.assign({}, v), E) },
        t.createElement(
          'div',
          { className: 'selected', onClick: x },
          p
            ? t.createElement('div', { className: 'size' }, p)
            : (l && t.createElement('div', { className: 'placeholder' }, l)) ||
                t.createElement('div', null),
          u ? t.createElement(at, null) : t.createElement(He, null),
        ),
        t.createElement(
          'div',
          { className: 'selectOptions', style: v, ref: y },
          n.map((e) =>
            t.createElement(
              'div',
              {
                key: e.label,
                className: 'option',
                style: e.disabled
                  ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                  : {},
                onClick: (t) => k(e, t),
              },
              e.label,
            ),
          ),
        ),
      );
});
var yt = n((e) => {
  const {
      width: n,
      moreStyle: r,
      type: l,
      placeholder: o,
      showClear: c,
      showTogglePwd: s,
      min: d,
      max: u,
      step: m,
      handleIptChange: f,
      handleKeyDown: h,
      handleIptFocus: g,
      handleIptBlur: p,
      handleNumChange: b,
      clearCallback: y,
      defaultValue: v,
    } = e,
    [E, x] = i(v || ''),
    [k, w] = i(!0),
    N = a(() => (s && 'password' === l ? (k ? 'password' : 'text') : l || 'text'), [l, s, k]),
    C = a(() => {
      let e = { width: '170px' };
      return n && (e.width = n + 'px'), Object.assign(Object.assign({}, e), r);
    }, [n, r]);
  return t.createElement(
    'div',
    { className: 'box', style: { width: n ? n + 'px' : '170px' } },
    t.createElement('input', {
      className: 'input',
      style: C,
      type: N,
      placeholder: o,
      value: v || E,
      onChange: (e) => {
        x(e.target.value), f && f(e.target.value);
      },
      onBlur: (e) => {
        'num' === l && NaN == Number(E) && x(''), p && p();
      },
      onFocus: () => {
        g && g(E);
      },
      onKeyUp: (e) => h && h(e),
    }),
    (c &&
      t.createElement(Ye, {
        style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
        onClick: () => {
          x(''), y && y();
        },
      })) ||
      ('password' === l &&
        s &&
        t.createElement(Ue, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => w(!k),
        })) ||
      ('num' === l &&
        t.createElement(
          'div',
          { className: 'numTags' },
          t.createElement(gt, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(E)) return x('');
              const e = m || 1;
              return m && u && Number(E) + e > u
                ? (b && b(u), x(u))
                : m && d && Number(E) + e < d
                ? (b && b(d), x(d))
                : (b && b(Number(E) + e), void x(Number(E) + e));
            },
          }),
          t.createElement(He, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(E)) return x('');
              const e = m || 1;
              if (m && d && Number(E) - e < d) return b && b(d), x(d);
              b && b(Number(E) - e), x(Number(E) - e);
            },
          }),
        )),
  );
});
var vt = n((e) => {
  const { children: n } = e;
  return t.createElement('div', { style: { display: 'none' } }, n);
});
var Et = n((e) => {
  const { children: n, value: a, canAddOption: r, boxStyle: l, onChange: c } = e,
    [d, u] = i(a || 0),
    [m, f] = i(n),
    [h, g] = i(''),
    [p, b] = i(r && !1);
  o(() => {
    console.log(l);
  });
  const y = (e, t, n) => {
      e.disabled || (n && n.stopPropagation(), u(t), c && c(e, t), r && b(!1));
    },
    v = () => {
      u(m.length), b(!0);
    },
    E = (e) => {
      13 == e.keyCode && h && (f((e) => [...e, { props: { children: h } }]), b(!1));
    },
    x = (e) => {
      g(e);
    },
    k = s(
      (e, t) => (e.disabled ? 'groupDisabledStyle' : t == d ? 'groupActive' : 'groupStyle'),
      [n, l, a, d],
    );
  return t.createElement(
    'div',
    { className: 'radioGroup' },
    m.map((e, n) =>
      l
        ? t.createElement(
            'div',
            {
              className: k(e.props, n),
              style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
              key: n,
              onClick: (t) => y(e.props, n, t),
            },
            e.props.children,
          )
        : t.createElement(
            'div',
            {
              className: 'radioBox',
              style: e.props.disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' },
              key: n,
              onClick: (t) => y(e.props, n, t),
            },
            t.createElement(
              'span',
              { className: e.props.disabled ? 'disabledLabel' : 'radioLabel' },
              e.props.children,
            ),
            t.createElement('input', {
              className: e.props.disabled ? 'disabledRadio' : 'radio',
              readOnly: !0,
              type: 'radio',
              checked: d === n,
              disabled: e.props.disabled,
            }),
          ),
    ),
    r
      ? l
        ? t.createElement(
            'div',
            { className: 'addOption' },
            t.createElement(
              'div',
              { className: d === m.length ? 'groupActive' : 'groupStyle', onClick: v },
              'More...',
            ),
            p && t.createElement(yt, { handleKeyDown: E, handleIptChange: x }),
          )
        : t.createElement(
            'div',
            { className: 'addOption' },
            t.createElement(
              'div',
              { className: 'radioBox', onClick: v },
              t.createElement('span', { className: 'radioLabel' }, 'More...'),
              t.createElement('input', {
                className: 'radio',
                type: 'radio',
                readOnly: !0,
                checked: d === m.length,
              }),
            ),
            p && t.createElement(yt, { handleKeyDown: E, handleIptChange: x }),
          )
      : t.createElement(t.Fragment, null),
  );
});
var xt = n((e) => {
  const [n, r] = i(''),
    [l, c] = i(''),
    [d, u] = i({}),
    { items: m, width: f, dark: h, ableToggle: g, defaultOpen: p, handleRouteChange: b } = e;
  o(() => {
    const e = y(m, {}, '');
    if (p)
      for (var t in e)
        (e[t].height = e[t].childNum + 1),
          e[t].children.length > 0 &&
            (e[t].children.map((e) => (e.height = 50 * (e.childNum + 1) + 'px')),
            (e[t].height += e[t].children.reduce((e, t) => e.childNum + t.childNum))),
          (e[t].height = 50 * e[t].height + 'px');
    u(e);
  }, []),
    o(() => {
      b && b(l);
    }, [l]);
  const y = (e, t, n) => (
      e.forEach((e) => {
        var a;
        e.children &&
          (1 == e.level
            ? (t[e.key] = {
                key: e.key,
                height: '50px',
                childNum: e.children.length,
                level: e.level,
                children: [],
              })
            : null === (a = t[n]) ||
              void 0 === a ||
              a.children.push({
                key: e.key,
                height: '50px',
                childNum: e.children.length,
                level: e.level,
              }),
          y(e.children, t, e.level && 1 == e.level ? e.key : ''));
      }),
      t
    ),
    v = (e) => {
      var t;
      return d[e]
        ? { height: null === (t = d[e]) || void 0 === t ? void 0 : t.height }
        : { height: '50px' };
    },
    E = s(
      (e) => {
        var t;
        for (var n in d) {
          const a =
            null === (t = d[n].children) || void 0 === t ? void 0 : t.findIndex((t) => t.key == e);
          if (-1 !== a) return { height: d[n].children[a].height };
        }
        return { height: '50px' };
      },
      [d],
    ),
    x = a(() => {
      if (f) {
        if ('string' == typeof f) return { width: f.includes('%') ? f : f + 'px' };
        if ('number' == typeof f) return { width: f + 'px' };
      }
      return { width: '220px' };
    }, [f]),
    k = (e) => {
      if (e.children)
        return e.children.map((n) =>
          t.createElement(
            'div',
            { key: n.key },
            t.createElement(
              'div',
              {
                className: l == n.key ? 'activeMenuOptions' : 'childMenuOptions',
                style: Object.assign({}, E(n.key)),
              },
              t.createElement(
                'div',
                {
                  className:
                    n.children && -1 !== n.children.findIndex((e) => e.key == l)
                      ? 'activeFatherTitle'
                      : 'fatherTitle',
                  onClick: (t) =>
                    ((e, t, n) => {
                      if (
                        (((2 == e.level && !e.children) || 3 == e.level) && (r(n), c(e.key)),
                        2 == e.level)
                      ) {
                        const t = Object.assign({}, d);
                        for (var a in t)
                          if (
                            t[a].children &&
                            -1 !== t[a].children.findIndex((t) => t.key == e.key)
                          ) {
                            const n = t[a].children.findIndex((t) => t.key == e.key);
                            t[a].children[n].height =
                              '50px' == t[a].children[n].height
                                ? 50 * (t[a].children[n].childNum + 1) + 'px'
                                : '50px';
                            let r = 50 * (t[a].childNum - t[a].children.length) + 50;
                            (r += t[a].children.reduce(
                              (e, t) =>
                                Number(e.height.split('px')[0]) + Number(t.height.split('px')[0]),
                            )),
                              (t[a].height = r);
                          }
                        u(t);
                      }
                      if (3 == e.level)
                        for (var a in d)
                          d[a].children &&
                            -1 !== d[a].children.findIndex((e) => e.key == n) &&
                            r(d[a].key);
                    })(n, 0, e.key),
                },
                t.createElement('span', null, n.label),
                n.children &&
                  ('50px' == E(n.key).height
                    ? t.createElement(Ne, null)
                    : t.createElement(Me, null)),
              ),
              t.createElement(
                'div',
                { className: 'childMenuOptions', key: n.key },
                n.children && k(n),
              ),
            ),
          ),
        );
    };
  return t.createElement(
    'div',
    { className: h ? 'darkMenu' : 'menu', style: x },
    m.map((e) =>
      t.createElement(
        'div',
        { key: e.key },
        t.createElement(
          'div',
          { className: 'menuOptions', style: v(e.key) },
          t.createElement(
            'div',
            {
              className: n == e.key ? 'activeFatherTitle' : 'fatherTitle',
              onClick: (t) =>
                ((e, t) => {
                  t.stopPropagation();
                  const n = e.key,
                    a = Object.assign({}, d);
                  if (
                    ((a[n].height =
                      '50px' == a[n].height ? 50 * (a[n].childNum + 1) + 'px' : '50px'),
                    g)
                  ) {
                    if ('50px' !== a[n].height)
                      for (var r in a)
                        r !== n &&
                          ((a[r].height = '50px'),
                          a[r].children && a[r].children.map((e) => (e.height = '50px')));
                  } else
                    0 !== a[n].children.length &&
                      a[n].children.forEach((e) => {
                        e.height = '50px';
                      });
                  u(a);
                })(e, t),
            },
            t.createElement(
              'div',
              { className: 'left' },
              t.createElement('i', null, e.icon),
              t.createElement('span', null, e.label),
            ),
            '50px' == v(e.key).height ? t.createElement(Ne, null) : t.createElement(Me, null),
          ),
          t.createElement(t.Fragment, null, e.children && k(e)),
        ),
      ),
    ),
  );
});
var kt = n((e) => {
  const {
      children: n,
      affixType: a,
      offsetTop: r,
      offsetLeft: l,
      offsetBottom: c,
      offsetRight: s,
      style: d,
    } = e,
    [u, m] = i({});
  let f;
  o(() => {
    const e = document.querySelector('.affix');
    return (
      (f = new IntersectionObserver((e) => g(e))),
      f.observe(e),
      'scroll' == a
        ? (window.addEventListener('scroll', h),
          m(
            (e) => (
              (e.position = 'relative'),
              r && !e.bottom && (e.top = 0),
              c && !e.top && (e.bottom = 0),
              l && !e.right && (e.left = 0),
              s && !e.left && (e.right = 0),
              JSON.parse(JSON.stringify(e))
            ),
          ))
        : m(
            (e) => (
              (e.position = 'fixed'),
              r && !e.bottom && (e.top = r),
              c && !e.top && (e.bottom = c),
              l && !e.right && (e.left = l),
              s && !e.left && (e.right = s),
              JSON.parse(JSON.stringify(e))
            ),
          ),
      () => {
        f.unobserve(e);
      }
    );
  }, []);
  const h = () => {
      document.querySelector('.affix'),
        window.scrollY < 200 &&
          m((e) => {
            for (const t in e)
              'position' == t
                ? (e[t] = 'relative')
                : ('right' != t && 'left' != t && 'top' != t && 'bottom' != t) || (e[t] = '0');
            return JSON.parse(JSON.stringify(e));
          });
    },
    g = (e) => {
      e.forEach((e) => {
        e.isIntersecting ||
          ('relative' == u.position &&
            m(
              (e) => (
                (e.position = 'fixed'),
                r && r !== e.top && (e.top = `${r}px`),
                c && c !== e.bottom && (e.bottom = `${c}px`),
                l && l !== e.left && (e.left = `${l}px`),
                s && s !== e.right && (e.right = `${s}px`),
                JSON.parse(JSON.stringify(e))
              ),
            ));
      });
    };
  return t.createElement(
    'div',
    { className: 'affix', style: Object.assign(Object.assign({}, u), d) },
    n,
  );
});
var wt = n((e) => {
  const { showClear: n, align: a, handleChange: r } = e,
    [l, c] = i({
      startYear: new Date().getFullYear(),
      startMonth: new Date().getMonth() + 1,
      startDay: new Date().getDate(),
    }),
    [d, u] = i({
      endYear: new Date().getFullYear(),
      endMonth: new Date().getMonth() + 2,
      endDay: new Date().getDate(),
    }),
    [m, f] = i(''),
    [h, g] = i(''),
    [p, b] = i(0),
    [y, v] = i(0),
    [E, x] = i([]),
    [k, w] = i([]),
    [N, C] = i(!1),
    [O, M] = i(!1),
    [j, D] = i({ start: !1, end: !1 });
  let S = document.querySelector('.activeBorder');
  o(() => {
    const { startYear: e, startMonth: t } = l,
      { endYear: n, endMonth: a } = d,
      r = new Date(`${e}/${t}/1`).getDay(),
      o = new Date(`${n}/${a}/1`).getDay(),
      i = new Date(e, t, 0).getDate(),
      c = new Date(n, a, 0).getDate(),
      s = new Array(r).fill(''),
      u = new Array(o).fill('');
    for (let e = 1; e < i + 1; e++) s.push(e);
    for (let e = 1; e < c + 1; e++) u.push(e);
    x(s), b(r), w(u), v(o);
  }, [l.startYear, l.startMonth, d.endYear, d.endMonth]),
    o(() => {
      window.addEventListener('click', () => {
        C(!1),
          setTimeout(() => {
            M(!1);
          }, 300);
      });
    }, []),
    o(() => {
      j.start &&
        j.end &&
        (C(!1),
        setTimeout(() => {
          M(!1);
        }, 300),
        D((e) => ((e.start = !1), (e.end = !1), Object.assign({}, e))),
        r && r(m, h));
    }, [j]);
  const A = (e) => {
      if ('start' == e) {
        const e = Object.assign({}, l);
        (e.startYear -= 1), c(e);
      } else if ('end' == e && d.endYear > l.startYear) {
        const e = Object.assign({}, d);
        (e.endYear -= 1), u(e);
      }
    },
    F = (e) => {
      if ('start' == e) {
        if (l.startYear < d.endYear) {
          const e = Object.assign({}, l);
          (e.startYear += 1), c(e);
        }
      } else if ('end' == e) {
        const e = Object.assign({}, d);
        (e.endYear += 1), u(e);
      }
    },
    Y = (e) => {
      if ('start' == e) {
        const e = Object.assign({}, l);
        1 == e.startMonth ? ((e.startMonth = 12), (e.startYear -= 1)) : (e.startMonth -= 1), c(e);
      } else if ('end' == e) {
        if (d.endYear == l.startYear && d.endMonth == l.startMonth) return;
        {
          const e = Object.assign({}, d);
          1 == e.endMonth ? ((e.endMonth = 12), (e.endYear -= 1)) : (e.endMonth -= 1),
            e.endDay < l.startDay && (e.endDay = l.startDay),
            u(e);
        }
      }
    },
    $ = (e) => {
      if ('start' == e) {
        if (d.endYear == l.startYear && d.endMonth == l.startMonth) return;
        {
          const e = Object.assign({}, l);
          12 == e.startMonth ? ((e.startMonth = 1), (e.startYear += 1)) : (e.startMonth += 1), c(e);
        }
      } else if ('end' == e) {
        const e = Object.assign({}, d);
        12 == e.endMonth ? ((e.endMonth = 1), (e.endYear += 1)) : (e.endMonth += 1), u(e);
      }
    },
    L = s(
      () =>
        a
          ? {
              right: { left: '360px', bottom: '20px' },
              left: { right: '600px', bottom: '20px' },
              top: { bottom: '40px' },
              bottom: { top: '40px' },
            }[a]
          : { bottom: { top: '40px' } },
      [a],
    ),
    B = s(
      (e) =>
        '' == e
          ? 'white'
          : l.startYear == d.endYear && l.startMonth == d.endMonth && e < l.startDay
          ? 'disabled-day'
          : 'day-box',
      [l, d],
    );
  return t.createElement(
    'div',
    { className: 'range', onClick: (e) => e.stopPropagation() },
    t.createElement(
      'div',
      { className: 'rangePicker', onClick: (e) => e.stopPropagation() },
      t.createElement(yt, {
        placeholder: '请输入开始日期',
        defaultValue: m || `${l.startYear}-${l.startMonth}-${l.startDay}`,
        handleIptChange: (e) => f(e),
        handleIptFocus: () => {
          C(!0), M(!0), (S.style.left = '0');
        },
        handleKeyDown: (e) =>
          ((e) => {
            if (13 == e.keyCode)
              if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(m)) {
                const e = m.split('-');
                Number(e[0]) <= d.endYear && Number(e[1]) <= d.endMonth && Number(e[2]) <= d.endDay
                  ? (c(
                      (t) => (
                        (t.startYear = Number(e[0])),
                        (t.startMonth = Number(e[1])),
                        (t.startDay = Number(e[2])),
                        Object.assign({}, t)
                      ),
                    ),
                    D((e) => ((e.start = !0), Object.assign({}, e))))
                  : f('');
              } else f('');
          })(e),
        handleIptBlur: () => {
          /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(m) || f('');
        },
        clearCallback: () => {
          f(''),
            c((e) => {
              const t = new Date();
              return (
                (e.startDay = t.getDate()),
                (e.startMonth = t.getMonth() + 1),
                (e.startYear = t.getFullYear()),
                Object.assign({}, e)
              );
            });
        },
        showClear: n,
      }),
      t.createElement(mt, { style: { color: '#cccccc', fontSize: '20px' } }),
      t.createElement(yt, {
        placeholder: '请输入结束日期',
        defaultValue: h || `${d.endYear}-${d.endMonth}-${d.endDay}`,
        handleIptChange: (e) => g(e),
        handleIptFocus: () => {
          C(!0), M(!0), (S.style.left = '190px');
        },
        handleKeyDown: (e) =>
          ((e) => {
            if (13 == e.keyCode)
              if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(h)) {
                const e = h.split('-');
                Number(e[0]) >= l.startYear &&
                Number(e[1]) >= l.startMonth &&
                Number(e[2]) >= l.startDay
                  ? (u(
                      (t) => (
                        (t.endYear = Number(e[0])),
                        (t.endMonth = Number(e[1])),
                        (t.endDay = Number(e[2])),
                        Object.assign({}, t)
                      ),
                    ),
                    D((e) => ((e.end = !0), Object.assign({}, e))))
                  : g('');
              } else g('');
          })(e),
        handleIptBlur: () => {
          /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(h) || g('');
        },
        clearCallback: () => {
          g(''),
            u((e) => {
              const t = new Date();
              return (
                (e.endDay = t.getDate()),
                (e.endMonth = t.getMonth() + 1),
                (e.endYear = t.getFullYear()),
                Object.assign({}, e)
              );
            });
        },
        showClear: n,
      }),
      t.createElement('div', { className: 'activeBorder' }),
    ),
    O &&
      t.createElement(
        'div',
        {
          className: 'date-box',
          onClick: (e) => e.stopPropagation(),
          style: Object.assign(Object.assign({}, N ? { opacity: 1 } : {}), L()),
        },
        t.createElement(
          'div',
          { className: 'left' },
          t.createElement(
            'div',
            { className: 'top-bar' },
            t.createElement(
              'div',
              { className: 'icon' },
              t.createElement(Be, { style: { cursor: 'pointer' }, onClick: () => A('start') }),
              t.createElement(et, {
                style: { marginLeft: '10px', cursor: 'pointer' },
                onClick: () => Y('start'),
              }),
            ),
            t.createElement('div', { className: 'info' }, l.startYear, '年 ', l.startMonth, '月'),
            t.createElement(
              'div',
              null,
              t.createElement(ot, { style: { cursor: 'pointer' }, onClick: () => $('start') }),
              t.createElement(Re, {
                style: { marginLeft: '10px', cursor: 'pointer' },
                onClick: () => F('start'),
              }),
            ),
          ),
          t.createElement(
            'div',
            { className: 'week' },
            t.createElement('div', null, '一'),
            t.createElement('div', null, '二'),
            t.createElement('div', null, '三'),
            t.createElement('div', null, '四'),
            t.createElement('div', null, '五'),
            t.createElement('div', null, '六'),
            t.createElement('div', null, '日'),
          ),
          t.createElement(
            'div',
            { className: 'day-list' },
            E.map((e, n) =>
              t.createElement(
                'div',
                {
                  key: n,
                  className: '' == e ? 'white' : 'box-list',
                  style:
                    e == l.startDay
                      ? {
                          color: '#fff',
                          background: '#1890FF',
                          fontWeight: 'bold',
                          borderRadius: '5px',
                        }
                      : {},
                  onClick: () => {
                    var t;
                    '' != (t = Number(e)) &&
                      (c((e) => ((e.startDay = t), Object.assign({}, e))),
                      D((e) => ((e.start = !0), Object.assign({}, e))),
                      f(`${l.startYear}-${l.startMonth}-${t}`),
                      l.startYear == d.endYear &&
                        l.startMonth == d.endMonth &&
                        t > d.endDay &&
                        u((e) => ((e.endDay = t), Object.assign({}, e))));
                  },
                },
                e,
              ),
            ),
          ),
        ),
        t.createElement(
          'div',
          { className: 'right' },
          t.createElement(
            'div',
            { className: 'top-bar' },
            t.createElement(
              'div',
              null,
              t.createElement(Be, { style: { cursor: 'pointer' }, onClick: () => A('end') }),
              t.createElement(et, {
                style: { marginLeft: '10px', cursor: 'pointer' },
                onClick: () => Y('end'),
              }),
            ),
            t.createElement('div', { className: 'info' }, d.endYear, '年 ', d.endMonth, '月'),
            t.createElement(
              'div',
              { className: 'icon' },
              t.createElement(ot, { style: { cursor: 'pointer' }, onClick: () => $('end') }),
              t.createElement(Re, {
                style: { marginLeft: '10px', cursor: 'pointer' },
                onClick: () => F('end'),
              }),
            ),
          ),
          t.createElement(
            'div',
            { className: 'week' },
            t.createElement('div', null, '一'),
            t.createElement('div', null, '二'),
            t.createElement('div', null, '三'),
            t.createElement('div', null, '四'),
            t.createElement('div', null, '五'),
            t.createElement('div', null, '六'),
            t.createElement('div', null, '日'),
          ),
          t.createElement(
            'div',
            { className: 'day-list' },
            k.map((e, n) =>
              t.createElement(
                'div',
                {
                  key: n,
                  className: B(e),
                  style:
                    e == d.endDay
                      ? {
                          color: '#fff',
                          background: '#1890FF',
                          fontWeight: 'bold',
                          borderRadius: '5px',
                        }
                      : {},
                  onClick: () => {
                    return (
                      (t = Number(e)),
                      void (
                        (l.startYear == d.endYear &&
                          l.startMonth == d.endMonth &&
                          t < l.startDay) ||
                        (D((e) => ((e.end = !0), Object.assign({}, e))),
                        u((e) => ((e.endDay = t), Object.assign({}, e))),
                        g(`${d.endYear}-${d.endMonth}-${t}`))
                      )
                    );
                    var t;
                  },
                },
                e,
              ),
            ),
          ),
        ),
      ),
  );
});
const Nt = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];
var Ct = n((e) => {
  const { type: n, showRange: a, showClear: r, align: l, handleChange: c } = e,
    [d, u] = i(!1),
    [m, f] = i(!1),
    [h, g] = i({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    }),
    [p, b] = i(0),
    [y, v] = i([]),
    [E, x] = i(0),
    [k, w] = i(null),
    [N, C] = i([2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]);
  o(() => {
    window.addEventListener('click', () => {
      u(!1),
        setTimeout(() => {
          f(!1);
        }, 300);
    });
  }, []),
    o(() => {
      const { year: e, month: t } = h,
        n = new Date(`${e}/${t}/1`).getDay(),
        a = new Date(e, t, 0).getDate(),
        r = new Array(n).fill('');
      for (let e = 1; e < a + 1; e++) r.push(e);
      b(n), v(r);
    }, [h.year, h.month]);
  const O = (e) => {
      e.stopPropagation(), u(!0), f(!0);
    },
    M = {
      result: { letterSpacing: 'normal', color: '#1890FF', width: '120px' },
      icon: { opacity: 1, marginLeft: '5px' },
      checkBox: { opacity: 1 },
      dayActive: {
        backgroundColor: '#1890FF',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '5px',
      },
    },
    j = s(
      () =>
        l
          ? {
              right: { left: '170px', bottom: '20px' },
              left: { right: '800px', bottom: '40px' },
              top: { bottom: '40px' },
              bottom: { top: '40px' },
            }[l]
          : { bottom: { top: '40px' } },
      [l],
    );
  return a
    ? t.createElement(wt, {
        showClear: r,
        align: l || 'bottom',
        handleChange: (e, t) => {
          c && c(e, t);
        },
      })
    : t.createElement(
        'div',
        { className: 'time-picker' },
        ('primary' == n || !n) &&
          t.createElement(
            'div',
            { className: 'result', style: d ? M.result : {}, onClick: (e) => O(e) },
            t.createElement('span', null, h.year, '-', h.month, '-', h.day),
            t.createElement(
              'div',
              { className: 'icon', style: d ? M.icon : {} },
              t.createElement(Qe, null),
            ),
          ),
        'input' == n &&
          t.createElement(
            'div',
            null,
            t.createElement('input', {
              className: 'input',
              value: null !== k ? k : `${h.year}-${h.month}-${h.day}`,
              onClick: (e) => O(e),
              onChange: (e) =>
                ((e) => {
                  w(e.target.value);
                })(e),
              onKeyDown: (e) =>
                ((e) => {
                  if (13 == e.keyCode) {
                    if (
                      null !== k &&
                      /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(k)
                    ) {
                      const e = k.split('-');
                      g(
                        (t) => (
                          (t.year = Number(e[0])),
                          (t.month = Number(e[1])),
                          (t.day = Number(e[2])),
                          Object.assign({}, t)
                        ),
                      ),
                        c && c(`${Number(e[0])}-${Number(e[1])}-${Number(e[2])}`);
                    }
                    w(null),
                      u(!1),
                      setTimeout(() => {
                        f(!1);
                      }, 300);
                  }
                })(e),
              onBlur: () => {
                if (
                  null !== k &&
                  /^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(k)
                ) {
                  const e = k.split('-');
                  g(
                    (t) => (
                      (t.year = Number(e[0])),
                      (t.month = Number(e[1])),
                      (t.day = Number(e[2])),
                      Object.assign({}, t)
                    ),
                  );
                }
                w(null);
              },
            }),
            r &&
              t.createElement(Ye, {
                style: { position: 'relative', right: '15px', fontSize: '12px', cursor: 'pointer' },
                onClick: () => {
                  g(
                    (e) => (
                      (e.year = new Date().getFullYear()),
                      (e.month = new Date().getMonth() + 1),
                      (e.day = new Date().getDate()),
                      Object.assign({}, e)
                    ),
                  ),
                    w(null);
                },
              }),
          ),
        m &&
          t.createElement(
            'div',
            {
              className: 'check-box',
              style: Object.assign(Object.assign({}, d ? M.checkBox : {}), j()),
              onClick: (e) => e.stopPropagation(),
            },
            t.createElement(
              'div',
              { className: 'top-bar' },
              t.createElement('b', { className: 'year', onClick: () => x(2) }, h.year),
              t.createElement(
                'b',
                { className: 'month', onClick: () => x(1), style: { marginRight: '20px' } },
                h.month,
              ),
              t.createElement(
                'div',
                {
                  className: 'close-icon',
                  onClick: () => {
                    u(!1),
                      setTimeout(() => {
                        f(!1);
                      }, 300);
                  },
                },
                t.createElement(Ye, null),
              ),
            ),
            t.createElement(
              'div',
              { className: 'date-content' },
              0 == E &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(
                    'div',
                    { className: 'week' },
                    t.createElement('div', null, '日'),
                    t.createElement('div', null, '一'),
                    t.createElement('div', null, '二'),
                    t.createElement('div', null, '三'),
                    t.createElement('div', null, '四'),
                    t.createElement('div', null, '五'),
                    t.createElement('div', null, '六'),
                  ),
                  t.createElement(
                    'div',
                    { className: 'day-list' },
                    y.map((e, n) =>
                      t.createElement(
                        'div',
                        {
                          key: n,
                          className: e ? 'day' : 'white',
                          style: h.day == e ? M.dayActive : {},
                          onClick: () =>
                            ((e) => {
                              e &&
                                (g((t) => ((t.day = e), Object.assign({}, t))),
                                c && c(`${h.year}-${h.month}-${h.day}`),
                                u(!1),
                                setTimeout(() => {
                                  f(!1);
                                }, 300));
                            })(e),
                        },
                        e,
                      ),
                    ),
                  ),
                ),
              1 == E &&
                t.createElement(
                  'div',
                  { className: 'month-toggle-box' },
                  Nt.map((e, n) =>
                    t.createElement(
                      'div',
                      {
                        key: e,
                        className: 'month',
                        style: n + 1 == h.month ? M.dayActive : {},
                        onClick: () => {
                          return (
                            (e = n + 1), g((t) => ((t.month = e), Object.assign({}, t))), void x(0)
                          );
                          var e;
                        },
                      },
                      e,
                    ),
                  ),
                ),
              2 == E &&
                t.createElement(
                  'div',
                  { className: 'year-toggle-box' },
                  t.createElement(
                    'div',
                    { className: 'toggle-bar' },
                    t.createElement(Be, {
                      style: { cursor: 'pointer' },
                      onClick: () => {
                        C((e) => [...e.map((e) => e - 9)]);
                      },
                    }),
                    t.createElement('span', null, N[0], '-', N[8]),
                    t.createElement(Re, {
                      style: { cursor: 'pointer' },
                      onClick: () => {
                        C((e) => [...e.map((e) => e + 9)]);
                      },
                    }),
                  ),
                  t.createElement(
                    'div',
                    { className: 'list' },
                    N.map((e) =>
                      t.createElement(
                        'div',
                        {
                          key: e,
                          className: 'year',
                          style: e == h.year ? M.dayActive : {},
                          onClick: () => {
                            return (
                              (t = e), g((e) => ((e.year = t), Object.assign({}, e))), void x(0)
                            );
                            var t;
                          },
                        },
                        e,
                      ),
                    ),
                  ),
                ),
            ),
            t.createElement(
              'div',
              { className: 'time-footer' },
              0 == E &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement(
                    'div',
                    {
                      className: 'today',
                      onClick: () => {
                        const e = new Date();
                        g(
                          (t) => (
                            (t.year = e.getFullYear()),
                            (t.month = e.getMonth() + 1),
                            (t.day = e.getDate()),
                            Object.assign({}, t)
                          ),
                        );
                      },
                    },
                    t.createElement('span', null, '今天'),
                    t.createElement(Se, null),
                  ),
                  t.createElement(
                    'div',
                    { className: 'toggle-month' },
                    t.createElement(et, {
                      style: { marginRight: '5px' },
                      onClick: () => {
                        const e = Object.assign({}, h);
                        1 == e.month ? ((e.year -= 1), (e.month = 12)) : (e.month -= 1), g(e);
                      },
                    }),
                    t.createElement(ot, {
                      onClick: () => {
                        const e = Object.assign({}, h);
                        12 == e.month ? ((e.year += 1), (e.month = 1)) : (e.month += 1), g(e);
                      },
                    }),
                  ),
                ),
              (1 == E || 2 == E) &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement('div', null),
                  t.createElement(
                    'div',
                    { className: 'go-back-icon', onClick: () => x(0) },
                    t.createElement(st, null),
                  ),
                ),
            ),
          ),
      );
});
var Ot = n((e) => {
  const { children: n, delay: a } = e,
    [r, l] = i(!1),
    s = c();
  let d;
  o(() => {
    (d = new IntersectionObserver((e) => u(e))), d.observe(s.current);
  }, []);
  const u = (e) => {
    e.forEach((e) => {
      e.isIntersecting &&
        (a
          ? setTimeout(() => {
              l(!0);
            }, a)
          : l(!0));
    });
  };
  return t.createElement('div', { className: 'lazyLoad', ref: s }, r && n);
});
export {
  kt as Affix,
  d as Button,
  g as Content,
  Ct as DatePicker,
  u as Divider,
  p as Footer,
  f as Header,
  yt as Input,
  m as Layout,
  Ot as LazyLoad,
  xt as Menu,
  pt as Pagination,
  vt as Radio,
  Et as RadioGroup,
  bt as Select,
  h as Slider,
};
