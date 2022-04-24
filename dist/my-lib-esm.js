import * as e from 'react';
import t, {
  memo as n,
  useMemo as r,
  createContext as a,
  useContext as l,
  useEffect as i,
  useState as o,
  createRef as c,
  useCallback as s,
} from 'react';
const d = n((e) => {
    const {
        type: n,
        width: a,
        height: l,
        disabled: i,
        circle: o,
        dashed: c,
        loading: s,
        handleClick: d,
        children: f,
      } = e,
      u = r(
        () =>
          n || 'danger' === n || 'warning' === n || 'warning' === n || 'text' === n ? n : 'primary',
        [n],
      ),
      h = r(() => {
        var e = { width: '100px', height: '40px' };
        return (
          a && (e.width = a + 'px'),
          l && (e.height = l + 'px'),
          o && (e = Object.assign(Object.assign({}, e), { borderRadius: '50%' })),
          c &&
            'text' === n &&
            (e = Object.assign(Object.assign({}, e), { border: '1px dashed #ccc' })),
          i && (e = Object.assign(Object.assign({}, e), { cursor: 'not-allowed' })),
          e
        );
      }, [a, l, o, c]);
    return t.createElement(
      'div',
      { className: 'button' },
      t.createElement(
        'button',
        { className: u, style: h, disabled: !!i, onClick: d },
        s && t.createElement('div', { className: 'loading1' }),
        f,
      ),
    );
  }),
  f = n((e) => {
    const { children: n, fontSize: a, borderColor: l, align: i, dashed: o } = e,
      c = r(
        () =>
          'left' === i
            ? { justifyContent: 'left' }
            : 'right' === i
            ? { justifyContent: 'right' }
            : {},
        [i],
      ),
      s = r(() => (l ? { borderColor: l } : {}), [l]),
      d = r(() => {
        if (a) return { fontSize: `${a}px` };
      }, [a]);
    return t.createElement(
      'div',
      { className: 'divider' },
      t.createElement(
        'div',
        { className: o ? 'dashed' : 'line', style: Object.assign(Object.assign({}, c), s) },
        n && t.createElement('span', { className: 'line-text', style: d }, n),
      ),
    );
  });
var u = n((e) => {
  const { children: n, extraStyle: a } = e,
    l = r(() => a || {}, [a]);
  return t.createElement('div', { className: 'layout', style: l }, n);
});
var h = n((e) => {
  const { children: n, extraStyle: a } = e,
    l = r(() => a || {}, [a]);
  return t.createElement('div', { className: 'header', style: l }, n);
});
var m = n((e) => {
  const { row: n, extraStyle: a } = e,
    l = r(() => (n ? { width: `${n}0%` } : {}), [n]),
    i = r(() => a || {}, [a]);
  return t.createElement(
    'div',
    { className: 'slider', style: Object.assign(Object.assign({}, l), i) },
    e.children,
  );
});
var p = n((e) => {
  const { children: n, row: a, extraStyle: l } = e,
    i = r(() => (a ? { width: `${a}0%` } : {}), [a]),
    o = r(() => l || {}, [l]);
  return t.createElement(
    'div',
    { className: 'content', style: Object.assign(Object.assign({}, i), o) },
    n,
  );
});
var g = n((e) => {
    const { children: n, extraStyle: a } = e,
      l = r(() => a || {}, [a]);
    return t.createElement('div', { className: 'footer', style: l }, n);
  }),
  b = a({});
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
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
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
function k(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function w(e, t) {
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
          i = !0,
          o = !1;
        try {
          for (
            n = n.call(e);
            !(i = (r = n.next()).done) && (l.push(r.value), !t || l.length !== t);
            i = !0
          );
        } catch (e) {
          (o = !0), (a = e);
        } finally {
          try {
            i || null == n.return || n.return();
          } finally {
            if (o) throw a;
          }
        }
        return l;
      }
    })(e, t) ||
    (function (e, t) {
      if (e) {
        if ('string' == typeof e) return k(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? k(e, t)
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
function E(e, t) {
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
          for (var e = [], r = 0; r < arguments.length; r++) {
            var a = arguments[r];
            if (a) {
              var l = typeof a;
              if ('string' === l || 'number' === l) e.push(a);
              else if (Array.isArray(a)) {
                if (a.length) {
                  var i = n.apply(null, a);
                  i && e.push(i);
                }
              } else if ('object' === l)
                if (a.toString === Object.prototype.toString)
                  for (var o in a) t.call(a, o) && a[o] && e.push(o);
                else e.push(a.toString());
            }
          }
          return e.join(' ');
        }
        e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
      })();
    }),
    N((C = { exports: {} }), C.exports),
    C.exports);
function S(e) {
  return (
    (S =
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
    S(e)
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
function A(e) {
  return e <= 1 ? 100 * Number(e) + '%' : e;
}
function M(e) {
  return 1 === e.length ? '0' + e : String(e);
}
function F(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function T(e) {
  return B(e) / 255;
}
function B(e) {
  return parseInt(e, 16);
}
var z = {
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
    r,
    a = { r: 0, g: 0, b: 0 },
    l = 1,
    i = null,
    o = null,
    c = null,
    s = !1,
    d = !1;
  return (
    'string' == typeof e &&
      (e = (function (e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (z[e]) (e = z[e]), (t = !0);
        else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var n = D.rgb.exec(e);
        if (n) return { r: n[1], g: n[2], b: n[3] };
        if ((n = D.rgba.exec(e))) return { r: n[1], g: n[2], b: n[3], a: n[4] };
        if ((n = D.hsl.exec(e))) return { h: n[1], s: n[2], l: n[3] };
        if ((n = D.hsla.exec(e))) return { h: n[1], s: n[2], l: n[3], a: n[4] };
        if ((n = D.hsv.exec(e))) return { h: n[1], s: n[2], v: n[3] };
        if ((n = D.hsva.exec(e))) return { h: n[1], s: n[2], v: n[3], a: n[4] };
        if ((n = D.hex8.exec(e)))
          return { r: B(n[1]), g: B(n[2]), b: B(n[3]), a: T(n[4]), format: t ? 'name' : 'hex8' };
        if ((n = D.hex6.exec(e)))
          return { r: B(n[1]), g: B(n[2]), b: B(n[3]), format: t ? 'name' : 'hex' };
        if ((n = D.hex4.exec(e)))
          return {
            r: B(n[1] + n[1]),
            g: B(n[2] + n[2]),
            b: B(n[3] + n[3]),
            a: T(n[4] + n[4]),
            format: t ? 'name' : 'hex8',
          };
        if ((n = D.hex3.exec(e)))
          return {
            r: B(n[1] + n[1]),
            g: B(n[2] + n[2]),
            b: B(n[3] + n[3]),
            format: t ? 'name' : 'hex',
          };
        return !1;
      })(e)),
    'object' == typeof e &&
      ($(e.r) && $(e.g) && $(e.b)
        ? ((t = e.r),
          (n = e.g),
          (r = e.b),
          (a = { r: 255 * j(t, 255), g: 255 * j(n, 255), b: 255 * j(r, 255) }),
          (s = !0),
          (d = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
        : $(e.h) && $(e.s) && $(e.v)
        ? ((i = A(e.s)),
          (o = A(e.v)),
          (a = (function (e, t, n) {
            (e = 6 * j(e, 360)), (t = j(t, 100)), (n = j(n, 100));
            var r = Math.floor(e),
              a = e - r,
              l = n * (1 - t),
              i = n * (1 - a * t),
              o = n * (1 - (1 - a) * t),
              c = r % 6;
            return {
              r: 255 * [n, i, l, l, o, n][c],
              g: 255 * [o, n, n, i, l, l][c],
              b: 255 * [l, l, o, n, n, i][c],
            };
          })(e.h, i, o)),
          (s = !0),
          (d = 'hsv'))
        : $(e.h) &&
          $(e.s) &&
          $(e.l) &&
          ((i = A(e.s)),
          (c = A(e.l)),
          (a = (function (e, t, n) {
            var r, a, l;
            if (((e = j(e, 360)), (t = j(t, 100)), (n = j(n, 100)), 0 === t))
              (a = n), (l = n), (r = n);
            else {
              var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                o = 2 * n - i;
              (r = F(o, i, e + 1 / 3)), (a = F(o, i, e)), (l = F(o, i, e - 1 / 3));
            }
            return { r: 255 * r, g: 255 * a, b: 255 * l };
          })(e.h, i, c)),
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
var R = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
  I = '[\\s|\\(]+(' + R + ')[,|\\s]+(' + R + ')[,|\\s]+(' + R + ')\\s*\\)?',
  P = '[\\s|\\(]+(' + R + ')[,|\\s]+(' + R + ')[,|\\s]+(' + R + ')[,|\\s]+(' + R + ')\\s*\\)?',
  D = {
    CSS_UNIT: new RegExp(R),
    rgb: new RegExp('rgb' + I),
    rgba: new RegExp('rgba' + P),
    hsl: new RegExp('hsl' + I),
    hsla: new RegExp('hsla' + P),
    hsv: new RegExp('hsv' + I),
    hsva: new RegExp('hsva' + P),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function $(e) {
  return Boolean(D.CSS_UNIT.exec(String(e)));
}
var q = [
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
function J(e) {
  var t = (function (e, t, n) {
    (e = j(e, 255)), (t = j(t, 255)), (n = j(n, 255));
    var r = Math.max(e, t, n),
      a = Math.min(e, t, n),
      l = 0,
      i = r,
      o = r - a,
      c = 0 === r ? 0 : o / r;
    if (r === a) l = 0;
    else {
      switch (r) {
        case e:
          l = (t - n) / o + (t < n ? 6 : 0);
          break;
        case t:
          l = (n - e) / o + 2;
          break;
        case n:
          l = (e - t) / o + 4;
      }
      l /= 6;
    }
    return { h: l, s: c, v: i };
  })(e.r, e.g, e.b);
  return { h: 360 * t.h, s: t.s, v: t.v };
}
function U(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(
    (function (e, t, n, r) {
      var a = [
        M(Math.round(e).toString(16)),
        M(Math.round(t).toString(16)),
        M(Math.round(n).toString(16)),
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
function H(e, t, n) {
  var r = n / 100;
  return { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
}
function K(e, t, n) {
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
function W(e, t, n) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (r = 1),
      n && 5 === t && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2)));
  var r;
}
function V(e, t, n) {
  var r;
  return (r = n ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (r = 1), Number(r.toFixed(2));
}
function _(e) {
  for (
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = [],
      r = L(e),
      a = 5;
    a > 0;
    a -= 1
  ) {
    var l = J(r),
      i = U(L({ h: K(l, a, !0), s: W(l, a, !0), v: V(l, a, !0) }));
    n.push(i);
  }
  n.push(U(r));
  for (var o = 1; o <= 4; o += 1) {
    var c = J(r),
      s = U(L({ h: K(c, o), s: W(c, o), v: V(c, o) }));
    n.push(s);
  }
  return 'dark' === t.theme
    ? q.map(function (e) {
        var r = e.index,
          a = e.opacity;
        return U(H(L(t.backgroundColor || '#141414'), L(n[r]), 100 * a));
      })
    : n;
}
var G = {
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
  Y = {},
  Q = {};
Object.keys(G).forEach(function (e) {
  (Y[e] = _(G[e])),
    (Y[e].primary = Y[e][5]),
    (Q[e] = _(G[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Q[e].primary = Q[e][5]);
}),
  Y.red,
  Y.volcano,
  Y.gold,
  Y.orange,
  Y.yellow,
  Y.lime,
  Y.green,
  Y.cyan,
  Y.blue,
  Y.geekblue,
  Y.purple,
  Y.magenta,
  Y.grey;
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
function re(e) {
  return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
}
function ae(e) {
  var t,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!te()) return null;
  var r,
    a = document.createElement('style');
  (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) &&
    (a.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce);
  a.innerHTML = e;
  var l = re(n),
    i = l.firstChild;
  return (
    n.prepend && l.prepend
      ? l.prepend(a)
      : n.prepend && i
      ? l.insertBefore(a, i)
      : l.appendChild(a),
    a
  );
}
var le = new Map();
function ie(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = re(t);
  return Array.from(le.get(n).children).find(function (n) {
    return 'STYLE' === n.tagName && n.getAttribute(ne(t)) === e;
  });
}
function oe(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = re(n);
  if (!le.has(r)) {
    var a = ae('', n),
      l = a.parentNode;
    le.set(r, l), l.removeChild(a);
  }
  var i = ie(t, n);
  if (i) {
    var o, c, s;
    if (
      (null === (o = n.csp) || void 0 === o ? void 0 : o.nonce) &&
      i.nonce !== (null === (c = n.csp) || void 0 === c ? void 0 : c.nonce)
    )
      i.nonce = null === (s = n.csp) || void 0 === s ? void 0 : s.nonce;
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var d = ae(e, n);
  return d.setAttribute(ne(n), t), d;
}
function ce(e) {
  return (
    'object' === S(e) &&
    'string' == typeof e.name &&
    'string' == typeof e.theme &&
    ('object' === S(e.icon) || 'function' == typeof e.icon)
  );
}
function se() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    if ('class' === n) (t.className = r), delete t.class;
    else t[n] = r;
    return t;
  }, {});
}
function de(e, n, r) {
  return r
    ? t.createElement(
        e.tag,
        x(x({ key: n }, se(e.attrs)), r),
        (e.children || []).map(function (t, r) {
          return de(t, ''.concat(n, '-').concat(e.tag, '-').concat(r));
        }),
      )
    : t.createElement(
        e.tag,
        x({ key: n }, se(e.attrs)),
        (e.children || []).map(function (t, r) {
          return de(t, ''.concat(n, '-').concat(e.tag, '-').concat(r));
        }),
      );
}
function fe(e) {
  return _(e)[0];
}
function ue(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var he =
    '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
  me = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'],
  pe = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
var ge = function (e) {
  var t,
    n,
    r = e.icon,
    a = e.className,
    o = e.onClick,
    c = e.style,
    s = e.primaryColor,
    d = e.secondaryColor,
    f = E(e, me),
    u = pe;
  if (
    (s && (u = { primaryColor: s, secondaryColor: d || fe(s) }),
    (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
        t = l(b).csp;
      i(function () {
        oe(e, '@ant-design-icons', { prepend: !0, csp: t });
      }, []);
    })(),
    (t = ce(r)),
    (n = 'icon should be icon definiton, but got '.concat(r)),
    ee(t, '[@ant-design/icons] '.concat(n)),
    !ce(r))
  )
    return null;
  var h = r;
  return (
    h &&
      'function' == typeof h.icon &&
      (h = x(x({}, h), {}, { icon: h.icon(u.primaryColor, u.secondaryColor) })),
    de(
      h.icon,
      'svg-'.concat(h.name),
      x(
        {
          className: a,
          onClick: o,
          style: c,
          'data-icon': h.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        f,
      ),
    )
  );
};
(ge.displayName = 'IconReact'),
  (ge.getTwoToneColors = function () {
    return x({}, pe);
  }),
  (ge.setTwoToneColors = function (e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (pe.primaryColor = t), (pe.secondaryColor = n || fe(t)), (pe.calculated = !!n);
  });
var be = ge;
function ye(e) {
  var t = w(ue(e), 2),
    n = t[0],
    r = t[1];
  return be.setTwoToneColors({ primaryColor: n, secondaryColor: r });
}
var ve = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
ye('#1890ff');
var xe = e.forwardRef(function (t, n) {
  var r,
    a = t.className,
    l = t.icon,
    i = t.spin,
    o = t.rotate,
    c = t.tabIndex,
    s = t.onClick,
    d = t.twoToneColor,
    f = E(t, ve),
    u = e.useContext(b).prefixCls,
    h = void 0 === u ? 'anticon' : u,
    m = O(
      h,
      (y((r = {}), ''.concat(h, '-').concat(l.name), !!l.name),
      y(r, ''.concat(h, '-spin'), !!i || 'loading' === l.name),
      r),
      a,
    ),
    p = c;
  void 0 === p && s && (p = -1);
  var g = o
      ? { msTransform: 'rotate('.concat(o, 'deg)'), transform: 'rotate('.concat(o, 'deg)') }
      : void 0,
    v = w(ue(d), 2),
    k = v[0],
    N = v[1];
  return e.createElement(
    'span',
    x(
      x({ role: 'img', 'aria-label': l.name }, f),
      {},
      { ref: n, tabIndex: p, onClick: s, className: m },
    ),
    e.createElement(be, { icon: l, primaryColor: k, secondaryColor: N, style: g }),
  );
});
(xe.displayName = 'AntdIcon'),
  (xe.getTwoToneColor = function () {
    var e = be.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (xe.setTwoToneColor = ye);
var ke = xe,
  we = {
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
  Ee = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: we }));
  };
Ee.displayName = 'CaretDownOutlined';
var Ne = e.forwardRef(Ee),
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
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: Ce }));
  };
Oe.displayName = 'CaretUpOutlined';
var Se = e.forwardRef(Oe),
  je = {
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
  Ae = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: je }));
  };
Ae.displayName = 'CloseOutlined';
var Me = e.forwardRef(Ae),
  Fe = {
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
  Te = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: Fe }));
  };
Te.displayName = 'DownOutlined';
var Be = e.forwardRef(Te),
  ze = {
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
  Le = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: ze }));
  };
Le.displayName = 'EllipsisOutlined';
var Re = e.forwardRef(Le),
  Ie = {
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
  Pe = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: Ie }));
  };
Pe.displayName = 'EyeOutlined';
var De = e.forwardRef(Pe),
  $e = {
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
  qe = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: $e }));
  };
qe.displayName = 'LeftOutlined';
var Je = e.forwardRef(qe),
  Ue = {
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
  He = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: Ue }));
  };
He.displayName = 'LoadingOutlined';
var Ke = e.forwardRef(He),
  We = {
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
  Ve = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: We }));
  };
Ve.displayName = 'RightOutlined';
var _e = e.forwardRef(Ve),
  Ge = {
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
  Ye = function (t, n) {
    return e.createElement(ke, x(x({}, t), {}, { ref: n, icon: Ge }));
  };
Ye.displayName = 'UpOutlined';
var Qe = e.forwardRef(Ye);
var Xe = n((e) => {
  const {
      changePageCallback: n,
      total: a,
      pageSizeOptions: l,
      showJumpInput: c,
      showSizeChanger: s,
    } = e,
    [d, f] = o(1),
    [u, h] = o([]),
    [m, p] = o(l ? l[0] : 10);
  o(!1);
  const g = r(() => {
    if ((f(1), Math.ceil(a / m) > 6)) h([2, 3, 4, 5, 6]);
    else if (Math.ceil(a / m) > 2) {
      const e = new Array(Math.ceil(a / m) - 2).fill(0);
      e.forEach((t, n) => {
        e[n] = n + 2;
      }),
        h(e);
    } else h([]);
    return Math.ceil(a / m);
  }, [a, m]);
  i(() => {
    console.log(typeof d);
  }, [d]);
  const b = (e) => () => {
    if (g <= 6) return n(e), f(e);
    e > 4 && e <= g - 4 && h([e - 2, e - 1, e, e + 1, e + 2]),
      e <= 4 && h([2, 3, 4, 5, 6]),
      e > g - 4 && h([g - 5, g - 4, g - 3, g - 2, g - 1]),
      f(e),
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
            if ((f(d - 1), g > 6)) {
              if (d > g - 3) return;
              d > 4 ? h(u.map((e) => e - 1)) : d - 5 <= 4 && h([2, 3, 4, 5, 6]);
            }
            n(d - 1);
          }
        },
      },
      t.createElement(Je, null),
    ),
    t.createElement(
      'div',
      { className: 1 === d ? 'actived numberBox' : 'numberBox', onClick: b(1) },
      '1',
    ),
    d > 4 &&
      g > 6 &&
      t.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            d - 5 <= 4
              ? (h([2, 3, 4, 5, 6]), (e = d - 5 <= 1 ? 1 : d - 5))
              : d + 5 > g
              ? (h([d - 7, d - 6, d - 5, d - 4, d - 3]), (e = d - 5))
              : d - 5 > 4 && (h(u.map((e) => e - 5)), (e = d - 5)),
              f(e),
              n(e);
          },
        },
        t.createElement(Re, null),
      ),
    g <= 4 &&
      u.length >= 1 &&
      u.map((e) =>
        t.createElement(
          'div',
          { className: d === e + 2 ? 'actived numberBox' : 'numberBox', key: e, onClick: b(e + 2) },
          e + 2,
        ),
      ),
    g > 4 &&
      u.map((e, n) =>
        t.createElement(
          'div',
          { className: d === e ? 'actived numberBox' : 'numberBox', key: n, onClick: b(e) },
          e,
        ),
      ),
    g - d >= 4 &&
      g > 6 &&
      t.createElement(
        'div',
        {
          className: 'numberBox',
          onClick: () => {
            var e = 0;
            d + 7 >= g
              ? (h([g - 5, g - 4, g - 3, g - 2, g - 1]), (e = d + 5 > g ? g : d + 5))
              : d - 5 < 0
              ? (h([d + 3, d + 4, d + 5, d + 6, d + 7]), (e = d + 5))
              : d + 5 < g && (h(u.map((e) => e + 5)), (e = d + 5)),
              f(e),
              n(e);
          },
        },
        t.createElement(Re, null),
      ),
    g > 1 &&
      t.createElement(
        'div',
        { className: d === g ? 'actived numberBox' : 'numberBox', onClick: b(g) },
        g,
      ),
    t.createElement(
      'div',
      {
        className: d === g || g <= 1 ? 'next disabled' : 'next',
        onClick: () => {
          if (d !== g) {
            if ((f(d + 1), g > 6))
              if (d + 5 > g) h([g - 5, g - 4, g - 3, g - 2, g - 1]);
              else {
                if (d < 4) return;
                d + 5 < g && h(u.map((e) => e + 1));
              }
            n(d + 1);
          }
        },
      },
      t.createElement(_e, null),
    ),
    Array.isArray(l) &&
      s &&
      t.createElement(Ze, {
        option: l.map((e) => ({ label: `${e} 条/页`, value: e })),
        width: 100,
        handleSelectCallback: (e) => {
          console.log(e), p(e);
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
              if (t > g || t < 0 || isNaN(t)) return (e.target.value = '');
              t > 6 && t < g - 6
                ? h([t - 2, t - 1, t, t + 1, t + 2])
                : t - 5 < 0
                ? h([2, 3, 4, 5, 6])
                : t + 5 > g && h([g - 5, g - 4, g - 3, g - 2, g - 1]),
                f(t),
                n(t),
                (e.target.value = '');
            }
          },
        }),
        t.createElement('span', null, '页'),
      ),
  );
});
var Ze = n((e) => {
  const {
      option: n,
      width: a,
      placeholder: l,
      disabled: d,
      loading: f,
      showSearch: u,
      clearable: h,
      handleSelectCallback: m,
      handleTextChange: p,
    } = e,
    [g, b] = o(''),
    y = c();
  i(() => {
    (y.current.height = '0px'), console.log(n);
  }, []);
  const v = r(() => (a ? { width: `${a}px` } : {}), [a]),
    x = r(() => {
      if (d) return { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' };
    }, [d]),
    k = (e) => {
      e.stopPropagation(),
        d ||
          (console.log(y.current.style.height),
          '0px' === y.current.style.height || '' === y.current.style.height
            ? (y.current.style.height = u ? 100 * E.length + '%' : 100 * n.length + '%')
            : (y.current.style.height = '0px'),
          console.log(y.current.height));
    },
    w = (e, t) => {
      t.stopPropagation(),
        e.disabled || ((y.current.style.height = '0px'), b(e.label), m && m(e.value));
    },
    E = r(() => n.filter((e) => e.label.includes(g)), [n, g]),
    N = s(
      (e) => {
        b(e.target.value),
          (y.current.style.height =
            100 * n.filter((t) => t.label.includes(e.target.value)).length + '%'),
          p && p(e.target.value);
      },
      [g],
    );
  return u
    ? t.createElement(
        t.Fragment,
        null,
        t.createElement(
          'div',
          { className: 'select', style: Object.assign(Object.assign({}, v), x) },
          t.createElement(
            'div',
            { className: 'selected' },
            t.createElement('input', {
              type: 'text',
              className: 'selected',
              value: g,
              placeholder: l,
              onClick: k,
              onChange: (e) => N(e),
            }),
            h ? t.createElement(Me, { onClick: () => b('') }) : t.createElement(Be, { onClick: k }),
          ),
          t.createElement(
            'div',
            { className: 'selectOptions', style: v, ref: y },
            E.map((e) =>
              t.createElement(
                'div',
                {
                  key: e.label,
                  className: 'option',
                  style: e.disabled
                    ? { cursor: 'not-allowed', background: 'rgb(238, 238, 238)' }
                    : {},
                  onClick: (t) => w(e, t),
                },
                e.label,
              ),
            ),
          ),
        ),
      )
    : t.createElement(
        'div',
        { className: 'select', style: Object.assign(Object.assign({}, v), x) },
        t.createElement(
          'div',
          { className: 'selected', onClick: k },
          g
            ? t.createElement('div', { className: 'size' }, g)
            : (l && t.createElement('div', { className: 'placeholder' }, l)) ||
                t.createElement('div', null),
          f ? t.createElement(Ke, null) : t.createElement(Be, null),
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
                onClick: (t) => w(e, t),
              },
              e.label,
            ),
          ),
        ),
      );
});
var et = n((e) => {
  const {
      width: n,
      moreStyle: a,
      type: l,
      placeholder: i,
      showClear: c,
      showTogglePwd: s,
      min: d,
      max: f,
      step: u,
      handleIptChange: h,
      handleKeyDown: m,
      handleNumChange: p,
      defaultValue: g,
    } = e,
    [b, y] = o(g || ''),
    [v, x] = o(!0),
    k = r(() => (s && 'password' === l ? (v ? 'password' : 'text') : l || 'text'), [l, s, v]),
    w = r(() => {
      let e = { width: '170px' };
      return n && (e.width = n + 'px'), Object.assign(Object.assign({}, e), a);
    }, [n, a]);
  return t.createElement(
    'div',
    { className: 'box', style: { width: n ? n + 'px' : '170px' } },
    t.createElement('input', {
      className: 'input',
      style: w,
      type: k,
      placeholder: i,
      value: b,
      onChange: (e) => {
        y(e.target.value), h && h(e.target.value);
      },
      onBlur: (e) => {
        'num' === l && NaN == Number(b) && y('');
      },
      onKeyUp: (e) => m && m(e),
    }),
    (c &&
      t.createElement(Me, {
        style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
        onClick: () => y(''),
      })) ||
      ('password' === l &&
        s &&
        t.createElement(De, {
          style: { position: 'absolute', right: '5px', fontSize: '12px', cursor: 'pointer' },
          onClick: () => x(!v),
        })) ||
      ('num' === l &&
        t.createElement(
          'div',
          { className: 'numTags' },
          t.createElement(Qe, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(b)) return y('');
              const e = u || 1;
              return u && f && Number(b) + e > f
                ? (p && p(f), y(f))
                : u && d && Number(b) + e < d
                ? (p && p(d), y(d))
                : (p && p(Number(b) + e), void y(Number(b) + e));
            },
          }),
          t.createElement(Be, {
            style: { cursor: 'pointer', fontSize: '10px' },
            onClick: () => {
              if ('num' === l && NaN == Number(b)) return y('');
              const e = u || 1;
              if (u && d && Number(b) - e < d) return p && p(d), y(d);
              p && p(Number(b) - e), y(Number(b) - e);
            },
          }),
        )),
  );
});
var tt = n((e) => {
  const { children: n } = e;
  return t.createElement('div', { style: { display: 'none' } }, n);
});
var nt = n((e) => {
  const { children: n, value: r, canAddOption: a, boxStyle: l, onChange: c } = e,
    [d, f] = o(r || 0),
    [u, h] = o(n),
    [m, p] = o(''),
    [g, b] = o(a && !1);
  i(() => {
    console.log(l);
  });
  const y = (e, t, n) => {
      e.disabled || (n && n.stopPropagation(), f(t), c && c(e, t), a && b(!1));
    },
    v = () => {
      f(u.length), b(!0);
    },
    x = (e) => {
      13 == e.keyCode && m && (h((e) => [...e, { props: { children: m } }]), b(!1));
    },
    k = (e) => {
      p(e);
    },
    w = s(
      (e, t) => (e.disabled ? 'groupDisabledStyle' : t == d ? 'groupActive' : 'groupStyle'),
      [n, l, r, d],
    );
  return t.createElement(
    'div',
    { className: 'radioGroup' },
    u.map((e, n) =>
      l
        ? t.createElement(
            'div',
            {
              className: w(e.props, n),
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
    a
      ? l
        ? t.createElement(
            'div',
            { className: 'addOption' },
            t.createElement(
              'div',
              { className: d === u.length ? 'groupActive' : 'groupStyle', onClick: v },
              'More...',
            ),
            g && t.createElement(et, { handleKeyDown: x, handleIptChange: k }),
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
                checked: d === u.length,
              }),
            ),
            g && t.createElement(et, { handleKeyDown: x, handleIptChange: k }),
          )
      : t.createElement(t.Fragment, null),
  );
});
var rt = n((e) => {
  const [n, a] = o(''),
    [l, c] = o(''),
    [d, f] = o({}),
    { items: u, width: h, dark: m, ableToggle: p, defaultOpen: g, handleRouteChange: b } = e;
  i(() => {
    const e = y(u, {}, '');
    if (g)
      for (var t in e)
        (e[t].height = e[t].childNum + 1),
          e[t].children.length > 0 &&
            (e[t].children.map((e) => (e.height = 50 * (e.childNum + 1) + 'px')),
            (e[t].height += e[t].children.reduce((e, t) => e.childNum + t.childNum))),
          (e[t].height = 50 * e[t].height + 'px');
    f(e);
  }, []),
    i(() => {
      b && b(l);
    }, [l]);
  const y = (e, t, n) => (
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
    x = s(
      (e) => {
        var t;
        for (var n in d) {
          const r =
            null === (t = d[n].children) || void 0 === t ? void 0 : t.findIndex((t) => t.key == e);
          if (-1 !== r) return { height: d[n].children[r].height };
        }
        return { height: '50px' };
      },
      [d],
    ),
    k = r(() => {
      if (h) {
        if ('string' == typeof h) return { width: h.includes('%') ? h : h + 'px' };
        if ('number' == typeof h) return { width: h + 'px' };
      }
      return { width: '220px' };
    }, [h]),
    w = (e) => {
      if (e.children)
        return e.children.map((n) =>
          t.createElement(
            'div',
            { key: n.key },
            t.createElement(
              'div',
              {
                className: l == n.key ? 'activeMenuOptions' : 'childMenuOptions',
                style: Object.assign({}, x(n.key)),
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
                        (((2 == e.level && !e.children) || 3 == e.level) && (a(n), c(e.key)),
                        2 == e.level)
                      ) {
                        const t = Object.assign({}, d);
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
                        f(t);
                      }
                      if (3 == e.level)
                        for (var r in d)
                          d[r].children &&
                            -1 !== d[r].children.findIndex((e) => e.key == n) &&
                            a(d[r].key);
                    })(n, 0, e.key),
                },
                t.createElement('span', null, n.label),
                n.children &&
                  ('50px' == x(n.key).height
                    ? t.createElement(Ne, null)
                    : t.createElement(Se, null)),
              ),
              t.createElement(
                'div',
                { className: 'childMenuOptions', key: n.key },
                n.children && w(n),
              ),
            ),
          ),
        );
    };
  return t.createElement(
    'div',
    { className: m ? 'darkMenu' : 'menu', style: k },
    u.map((e) =>
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
                    r = Object.assign({}, d);
                  if (
                    ((r[n].height =
                      '50px' == r[n].height ? 50 * (r[n].childNum + 1) + 'px' : '50px'),
                    p)
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
                  f(r);
                })(e, t),
            },
            t.createElement(
              'div',
              { className: 'left' },
              t.createElement('i', null, e.icon),
              t.createElement('span', null, e.label),
            ),
            '50px' == v(e.key).height ? t.createElement(Ne, null) : t.createElement(Se, null),
          ),
          t.createElement(t.Fragment, null, e.children && w(e)),
        ),
      ),
    ),
  );
});
var at = n((e) => {
  const {
      children: n,
      affixType: r,
      offsetTop: a,
      offsetLeft: l,
      offsetBottom: c,
      offsetRight: s,
      style: d,
    } = e,
    [f, u] = o({});
  let h;
  i(() => {
    const e = document.querySelector('.affix');
    return (
      (h = new IntersectionObserver((e) => p(e))),
      h.observe(e),
      'scroll' == r
        ? (window.addEventListener('scroll', m),
          u(
            (e) => (
              (e.position = 'relative'),
              a && !e.bottom && (e.top = 0),
              c && !e.top && (e.bottom = 0),
              l && !e.right && (e.left = 0),
              s && !e.left && (e.right = 0),
              JSON.parse(JSON.stringify(e))
            ),
          ))
        : u(
            (e) => (
              (e.position = 'fixed'),
              a && !e.bottom && (e.top = a),
              c && !e.top && (e.bottom = c),
              l && !e.right && (e.left = l),
              s && !e.left && (e.right = s),
              JSON.parse(JSON.stringify(e))
            ),
          ),
      () => {
        h.unobserve(e);
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
    p = (e) => {
      e.forEach((e) => {
        e.isIntersecting ||
          ('relative' == f.position &&
            u(
              (e) => (
                (e.position = 'fixed'),
                a && a !== e.top && (e.top = `${a}px`),
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
    { className: 'affix', style: Object.assign(Object.assign({}, f), d) },
    n,
  );
});
export {
  at as Affix,
  d as Button,
  p as Content,
  f as Divider,
  g as Footer,
  h as Header,
  et as Input,
  u as Layout,
  rt as Menu,
  Xe as Pagination,
  tt as Radio,
  nt as RadioGroup,
  Ze as Select,
  m as Slider,
};
