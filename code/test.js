!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document)
          throw new Error("jQuery requires a window with a document");
      return t(e)
  }
  : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
      var t = "length"in e && e.length
        , n = Q.type(e);
      return "function" !== n && !Q.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }
  function r(e, t, n) {
      if (Q.isFunction(t))
          return Q.grep(e, function(e, r) {
              return !!t.call(e, r, e) !== n
          });
      if (t.nodeType)
          return Q.grep(e, function(e) {
              return e === t !== n
          });
      if ("string" == typeof t) {
          if (ae.test(t))
              return Q.filter(t, e, n);
          t = Q.filter(t, e)
      }
      return Q.grep(e, function(e) {
          return Y.call(t, e) >= 0 !== n
      })
  }
  function o(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; )
          ;
      return e
  }
  function i(e) {
      var t = de[e] = {};
      return Q.each(e.match(pe) || [], function(e, n) {
          t[n] = !0
      }),
      t
  }
  function s() {
      Z.removeEventListener("DOMContentLoaded", s, !1),
      e.removeEventListener("load", s, !1),
      Q.ready()
  }
  function a() {
      Object.defineProperty(this.cache = {}, 0, {
          get: function() {
              return {}
          }
      }),
      this.expando = Q.expando + a.uid++
  }
  function l(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(we, "-$1").toLowerCase(),
          n = e.getAttribute(r),
          "string" == typeof n) {
              try {
                  n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : be.test(n) ? Q.parseJSON(n) : n)
              } catch (o) {}
              ye.set(e, t, n)
          } else
              n = void 0;
      return n
  }
  function c() {
      return !0
  }
  function u() {
      return !1
  }
  function f() {
      try {
          return Z.activeElement
      } catch (e) {}
  }
  function h(e, t) {
      return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }
  function p(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
      e
  }
  function d(e) {
      var t = Ie.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"),
      e
  }
  function g(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
          ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
  }
  function m(e, t) {
      var n, r, o, i, s, a, l, c;
      if (1 === t.nodeType) {
          if (ve.hasData(e) && (i = ve.access(e),
          s = ve.set(t, i),
          c = i.events)) {
              delete s.handle,
              s.events = {};
              for (o in c)
                  for (n = 0,
                  r = c[o].length; n < r; n++)
                      Q.event.add(t, o, c[o][n])
          }
          ye.hasData(e) && (a = ye.access(e),
          l = Q.extend({}, a),
          ye.set(t, l))
      }
  }
  function v(e, t) {
      var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
  }
  function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }
  function b(t, n) {
      var r, o = Q(n.createElement(t)).appendTo(n.body), i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : Q.css(o[0], "display");
      return o.detach(),
      i
  }
  function w(e) {
      var t = Z
        , n = Pe[e];
      return n || (n = b(e, t),
      "none" !== n && n || (Fe = (Fe || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
      t = Fe[0].contentDocument,
      t.write(),
      t.close(),
      n = b(e, t),
      Fe.detach()),
      Pe[e] = n),
      n
  }
  function x(e, t, n) {
      var r, o, i, s, a = e.style;
      return n = n || We(e),
      n && (s = n.getPropertyValue(t) || n[t]),
      n && ("" !== s || Q.contains(e.ownerDocument, e) || (s = Q.style(e, t)),
      Be.test(s) && qe.test(t) && (r = a.width,
      o = a.minWidth,
      i = a.maxWidth,
      a.minWidth = a.maxWidth = a.width = s,
      s = n.width,
      a.width = r,
      a.minWidth = o,
      a.maxWidth = i)),
      void 0 !== s ? s + "" : s
  }
  function _(e, t) {
      return {
          get: function() {
              return e() ? void delete this.get : (this.get = t).apply(this, arguments)
          }
      }
  }
  function k(e, t) {
      if (t in e)
          return t;
      for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Ge.length; o--; )
          if (t = Ge[o] + n,
          t in e)
              return t;
      return r
  }
  function S(e, t, n) {
      var r = Xe.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }
  function T(e, t, n, r, o) {
      for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; i < 4; i += 2)
          "margin" === n && (s += Q.css(e, n + _e[i], !0, o)),
          r ? ("content" === n && (s -= Q.css(e, "padding" + _e[i], !0, o)),
          "margin" !== n && (s -= Q.css(e, "border" + _e[i] + "Width", !0, o))) : (s += Q.css(e, "padding" + _e[i], !0, o),
          "padding" !== n && (s += Q.css(e, "border" + _e[i] + "Width", !0, o)));
      return s
  }
  function C(e, t, n) {
      var r = !0
        , o = "width" === t ? e.offsetWidth : e.offsetHeight
        , i = We(e)
        , s = "border-box" === Q.css(e, "boxSizing", !1, i);
      if (o <= 0 || null == o) {
          if (o = x(e, t, i),
          (o < 0 || null == o) && (o = e.style[t]),
          Be.test(o))
              return o;
          r = s && (V.boxSizingReliable() || o === e.style[t]),
          o = parseFloat(o) || 0
      }
      return o + T(e, t, n || (s ? "border" : "content"), r, i) + "px"
  }
  function M(e, t) {
      for (var n, r, o, i = [], s = 0, a = e.length; s < a; s++)
          r = e[s],
          r.style && (i[s] = ve.get(r, "olddisplay"),
          n = r.style.display,
          t ? (i[s] || "none" !== n || (r.style.display = ""),
          "" === r.style.display && ke(r) && (i[s] = ve.access(r, "olddisplay", w(r.nodeName)))) : (o = ke(r),
          "none" === n && o || ve.set(r, "olddisplay", o ? n : Q.css(r, "display"))));
      for (s = 0; s < a; s++)
          r = e[s],
          r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[s] || "" : "none"));
      return e
  }
  function E(e, t, n, r, o) {
      return new E.prototype.init(e,t,n,r,o)
  }
  function A() {
      return setTimeout(function() {
          Ve = void 0
      }),
      Ve = Q.now()
  }
  function z(e, t) {
      var n, r = 0, o = {
          height: e
      };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
          n = _e[r],
          o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e),
      o
  }
  function N(e, t, n) {
      for (var r, o = (nt[t] || []).concat(nt["*"]), i = 0, s = o.length; i < s; i++)
          if (r = o[i].call(n, t, e))
              return r
  }
  function j(e, t, n) {
      var r, o, i, s, a, l, c, u, f = this, h = {}, p = e.style, d = e.nodeType && ke(e), g = ve.get(e, "fxshow");
      n.queue || (a = Q._queueHooks(e, "fx"),
      null == a.unqueued && (a.unqueued = 0,
      l = a.empty.fire,
      a.empty.fire = function() {
          a.unqueued || l()
      }
      ),
      a.unqueued++,
      f.always(function() {
          f.always(function() {
              a.unqueued--,
              Q.queue(e, "fx").length || a.empty.fire()
          })
      })),
      1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
      c = Q.css(e, "display"),
      u = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c,
      "inline" === u && "none" === Q.css(e, "float") && (p.display = "inline-block")),
      n.overflow && (p.overflow = "hidden",
      f.always(function() {
          p.overflow = n.overflow[0],
          p.overflowX = n.overflow[1],
          p.overflowY = n.overflow[2]
      }));
      for (r in t)
          if (o = t[r],
          Ke.exec(o)) {
              if (delete t[r],
              i = i || "toggle" === o,
              o === (d ? "hide" : "show")) {
                  if ("show" !== o || !g || void 0 === g[r])
                      continue;
                  d = !0
              }
              h[r] = g && g[r] || Q.style(e, r)
          } else
              c = void 0;
      if (Q.isEmptyObject(h))
          "inline" === ("none" === c ? w(e.nodeName) : c) && (p.display = c);
      else {
          g ? "hidden"in g && (d = g.hidden) : g = ve.access(e, "fxshow", {}),
          i && (g.hidden = !d),
          d ? Q(e).show() : f.done(function() {
              Q(e).hide()
          }),
          f.done(function() {
              var t;
              ve.remove(e, "fxshow");
              for (t in h)
                  Q.style(e, t, h[t])
          });
          for (r in h)
              s = N(d ? g[r] : 0, r, f),
              r in g || (g[r] = s.start,
              d && (s.end = s.start,
              s.start = "width" === r || "height" === r ? 1 : 0))
      }
  }
  function O(e, t) {
      var n, r, o, i, s;
      for (n in e)
          if (r = Q.camelCase(n),
          o = t[r],
          i = e[n],
          Q.isArray(i) && (o = i[1],
          i = e[n] = i[0]),
          n !== r && (e[r] = i,
          delete e[n]),
          s = Q.cssHooks[r],
          s && "expand"in s) {
              i = s.expand(i),
              delete e[r];
              for (n in i)
                  n in e || (e[n] = i[n],
                  t[n] = o)
          } else
              t[r] = o
  }
  function L(e, t, n) {
      var r, o, i = 0, s = tt.length, a = Q.Deferred().always(function() {
          delete l.elem
      }), l = function() {
          if (o)
              return !1;
          for (var t = Ve || A(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, i = 1 - r, s = 0, l = c.tweens.length; s < l; s++)
              c.tweens[s].run(i);
          return a.notifyWith(e, [c, i, n]),
          i < 1 && l ? n : (a.resolveWith(e, [c]),
          !1)
      }, c = a.promise({
          elem: e,
          props: Q.extend({}, t),
          opts: Q.extend(!0, {
              specialEasing: {}
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Ve || A(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
              var r = Q.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
              return c.tweens.push(r),
              r
          },
          stop: function(t) {
              var n = 0
                , r = t ? c.tweens.length : 0;
              if (o)
                  return this;
              for (o = !0; n < r; n++)
                  c.tweens[n].run(1);
              return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
              this
          }
      }), u = c.props;
      for (O(u, c.opts.specialEasing); i < s; i++)
          if (r = tt[i].call(c, e, u, c.opts))
              return r;
      return Q.map(u, N, c),
      Q.isFunction(c.opts.start) && c.opts.start.call(e, c),
      Q.fx.timer(Q.extend(l, {
          elem: e,
          anim: c,
          queue: c.opts.queue
      })),
      c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function D(e) {
      return function(t, n) {
          "string" != typeof t && (n = t,
          t = "*");
          var r, o = 0, i = t.toLowerCase().match(pe) || [];
          if (Q.isFunction(n))
              for (; r = i[o++]; )
                  "+" === r[0] ? (r = r.slice(1) || "*",
                  (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }
  function I(e, t, n, r) {
      function o(a) {
          var l;
          return i[a] = !0,
          Q.each(e[a] || [], function(e, a) {
              var c = a(t, n, r);
              return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
              o(c),
              !1)
          }),
          l
      }
      var i = {}
        , s = e === bt;
      return o(t.dataTypes[0]) || !i["*"] && o("*")
  }
  function H(e, t) {
      var n, r, o = Q.ajaxSettings.flatOptions || {};
      for (n in t)
          void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && Q.extend(!0, e, r),
      e
  }
  function R(e, t, n) {
      for (var r, o, i, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
          l.shift(),
          void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (o in a)
              if (a[o] && a[o].test(r)) {
                  l.unshift(o);
                  break
              }
      if (l[0]in n)
          i = l[0];
      else {
          for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                  i = o;
                  break
              }
              s || (s = o)
          }
          i = i || s
      }
      if (i)
          return i !== l[0] && l.unshift(i),
          n[i]
  }
  function F(e, t, n, r) {
      var o, i, s, a, l, c = {}, u = e.dataTypes.slice();
      if (u[1])
          for (s in e.converters)
              c[s.toLowerCase()] = e.converters[s];
      for (i = u.shift(); i; )
          if (e.responseFields[i] && (n[e.responseFields[i]] = t),
          !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          l = i,
          i = u.shift())
              if ("*" === i)
                  i = l;
              else if ("*" !== l && l !== i) {
                  if (s = c[l + " " + i] || c["* " + i],
                  !s)
                      for (o in c)
                          if (a = o.split(" "),
                          a[1] === i && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                              s === !0 ? s = c[o] : c[o] !== !0 && (i = a[0],
                              u.unshift(a[1]));
                              break
                          }
                  if (s !== !0)
                      if (s && e["throws"])
                          t = s(t);
                      else
                          try {
                              t = s(t)
                          } catch (f) {
                              return {
                                  state: "parsererror",
                                  error: s ? f : "No conversion from " + l + " to " + i
                              }
                          }
              }
      return {
          state: "success",
          data: t
      }
  }
  function P(e, t, n, r) {
      var o;
      if (Q.isArray(t))
          Q.each(t, function(t, o) {
              n || St.test(e) ? r(e, o) : P(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r)
          });
      else if (n || "object" !== Q.type(t))
          r(e, t);
      else
          for (o in t)
              P(e + "[" + o + "]", t[o], n, r)
  }
  function q(e) {
      return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  var B = []
    , W = B.slice
    , $ = B.concat
    , X = B.push
    , Y = B.indexOf
    , U = {}
    , J = U.toString
    , G = U.hasOwnProperty
    , V = {}
    , Z = e.document
    , K = "2.1.4"
    , Q = function(e, t) {
      return new Q.fn.init(e,t)
  }
    , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , te = /^-ms-/
    , ne = /-([\da-z])/gi
    , re = function(e, t) {
      return t.toUpperCase()
  };
  Q.fn = Q.prototype = {
      jquery: K,
      constructor: Q,
      selector: "",
      length: 0,
      toArray: function() {
          return W.call(this)
      },
      get: function(e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : W.call(this)
      },
      pushStack: function(e) {
          var t = Q.merge(this.constructor(), e);
          return t.prevObject = this,
          t.context = this.context,
          t
      },
      each: function(e, t) {
          return Q.each(this, e, t)
      },
      map: function(e) {
          return this.pushStack(Q.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(W.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length
            , n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor(null)
      },
      push: X,
      sort: B.sort,
      splice: B.splice
  },
  Q.extend = Q.fn.extend = function() {
      var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s,
      s = arguments[a] || {},
      a++),
      "object" == typeof s || Q.isFunction(s) || (s = {}),
      a === l && (s = this,
      a--); a < l; a++)
          if (null != (e = arguments[a]))
              for (t in e)
                  n = s[t],
                  r = e[t],
                  s !== r && (c && r && (Q.isPlainObject(r) || (o = Q.isArray(r))) ? (o ? (o = !1,
                  i = n && Q.isArray(n) ? n : []) : i = n && Q.isPlainObject(n) ? n : {},
                  s[t] = Q.extend(c, i, r)) : void 0 !== r && (s[t] = r));
      return s
  }
  ,
  Q.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
          return "function" === Q.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
          return null != e && e === e.window
      },
      isNumeric: function(e) {
          return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
      },
      isPlainObject: function(e) {
          return "object" === Q.type(e) && !e.nodeType && !Q.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e)
              return !1;
          return !0
      },
      type: function(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[J.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
          var t, n = eval;
          e = Q.trim(e),
          e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
          t.text = e,
          Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
          return e.replace(te, "ms-").replace(ne, re)
      },
      nodeName: function(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t, r) {
          var o, i = 0, s = e.length, a = n(e);
          if (r) {
              if (a)
                  for (; i < s && (o = t.apply(e[i], r),
                  o !== !1); i++)
                      ;
              else
                  for (i in e)
                      if (o = t.apply(e[i], r),
                      o === !1)
                          break
          } else if (a)
              for (; i < s && (o = t.call(e[i], i, e[i]),
              o !== !1); i++)
                  ;
          else
              for (i in e)
                  if (o = t.call(e[i], i, e[i]),
                  o === !1)
                      break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(ee, "")
      },
      makeArray: function(e, t) {
          var r = t || [];
          return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)),
          r
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : Y.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
          return e.length = o,
          e
      },
      grep: function(e, t, n) {
          for (var r, o = [], i = 0, s = e.length, a = !n; i < s; i++)
              r = !t(e[i], i),
              r !== a && o.push(e[i]);
          return o
      },
      map: function(e, t, r) {
          var o, i = 0, s = e.length, a = n(e), l = [];
          if (a)
              for (; i < s; i++)
                  o = t(e[i], i, r),
                  null != o && l.push(o);
          else
              for (i in e)
                  o = t(e[i], i, r),
                  null != o && l.push(o);
          return $.apply([], l)
      },
      guid: 1,
      proxy: function(e, t) {
          var n, r, o;
          if ("string" == typeof t && (n = e[t],
          t = e,
          e = n),
          Q.isFunction(e))
              return r = W.call(arguments, 2),
              o = function() {
                  return e.apply(t || this, r.concat(W.call(arguments)))
              }
              ,
              o.guid = e.guid = e.guid || Q.guid++,
              o
      },
      now: Date.now,
      support: V
  }),
  Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
      U["[object " + t + "]"] = t.toLowerCase()
  });
  var oe = function(e) {
      function t(e, t, n, r) {
          var o, i, s, a, l, c, f, p, d, g;
          if ((t ? t.ownerDocument || t : P) !== j && N(t),
          t = t || j,
          n = n || [],
          a = t.nodeType,
          "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
              return n;
          if (!r && L) {
              if (11 !== a && (o = ye.exec(e)))
                  if (s = o[1]) {
                      if (9 === a) {
                          if (i = t.getElementById(s),
                          !i || !i.parentNode)
                              return n;
                          if (i.id === s)
                              return n.push(i),
                              n
                      } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(s)) && R(t, i) && i.id === s)
                          return n.push(i),
                          n
                  } else {
                      if (o[2])
                          return K.apply(n, t.getElementsByTagName(e)),
                          n;
                      if ((s = o[3]) && x.getElementsByClassName)
                          return K.apply(n, t.getElementsByClassName(s)),
                          n
                  }
              if (x.qsa && (!D || !D.test(e))) {
                  if (p = f = F,
                  d = t,
                  g = 1 !== a && e,
                  1 === a && "object" !== t.nodeName.toLowerCase()) {
                      for (c = T(e),
                      (f = t.getAttribute("id")) ? p = f.replace(we, "\\$&") : t.setAttribute("id", p),
                      p = "[id='" + p + "'] ",
                      l = c.length; l--; )
                          c[l] = p + h(c[l]);
                      d = be.test(e) && u(t.parentNode) || t,
                      g = c.join(",")
                  }
                  if (g)
                      try {
                          return K.apply(n, d.querySelectorAll(g)),
                          n
                      } catch (m) {} finally {
                          f || t.removeAttribute("id")
                      }
              }
          }
          return M(e.replace(le, "$1"), t, n, r)
      }
      function n() {
          function e(n, r) {
              return t.push(n + " ") > _.cacheLength && delete e[t.shift()],
              e[n + " "] = r
          }
          var t = [];
          return e
      }
      function r(e) {
          return e[F] = !0,
          e
      }
      function o(e) {
          var t = j.createElement("div");
          try {
              return !!e(t)
          } catch (n) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t),
              t = null
          }
      }
      function i(e, t) {
          for (var n = e.split("|"), r = e.length; r--; )
              _.attrHandle[n[r]] = t
      }
      function s(e, t) {
          var n = t && e
            , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
          if (r)
              return r;
          if (n)
              for (; n = n.nextSibling; )
                  if (n === t)
                      return -1;
          return e ? 1 : -1
      }
      function a(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return "input" === n && t.type === e
          }
      }
      function l(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }
      function c(e) {
          return r(function(t) {
              return t = +t,
              r(function(n, r) {
                  for (var o, i = e([], n.length, t), s = i.length; s--; )
                      n[o = i[s]] && (n[o] = !(r[o] = n[o]))
              })
          })
      }
      function u(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      function f() {}
      function h(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++)
              r += e[t].value;
          return r
      }
      function p(e, t, n) {
          var r = t.dir
            , o = n && "parentNode" === r
            , i = B++;
          return t.first ? function(t, n, i) {
              for (; t = t[r]; )
                  if (1 === t.nodeType || o)
                      return e(t, n, i)
          }
          : function(t, n, s) {
              var a, l, c = [q, i];
              if (s) {
                  for (; t = t[r]; )
                      if ((1 === t.nodeType || o) && e(t, n, s))
                          return !0
              } else
                  for (; t = t[r]; )
                      if (1 === t.nodeType || o) {
                          if (l = t[F] || (t[F] = {}),
                          (a = l[r]) && a[0] === q && a[1] === i)
                              return c[2] = a[2];
                          if (l[r] = c,
                          c[2] = e(t, n, s))
                              return !0
                      }
          }
      }
      function d(e) {
          return e.length > 1 ? function(t, n, r) {
              for (var o = e.length; o--; )
                  if (!e[o](t, n, r))
                      return !1;
              return !0
          }
          : e[0]
      }
      function g(e, n, r) {
          for (var o = 0, i = n.length; o < i; o++)
              t(e, n[o], r);
          return r
      }
      function m(e, t, n, r, o) {
          for (var i, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
              (i = e[a]) && (n && !n(i, r, o) || (s.push(i),
              c && t.push(a)));
          return s
      }
      function v(e, t, n, o, i, s) {
          return o && !o[F] && (o = v(o)),
          i && !i[F] && (i = v(i, s)),
          r(function(r, s, a, l) {
              var c, u, f, h = [], p = [], d = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, h, e, a, l), b = n ? i || (r ? e : d || o) ? [] : s : y;
              if (n && n(y, b, a, l),
              o)
                  for (c = m(b, p),
                  o(c, [], a, l),
                  u = c.length; u--; )
                      (f = c[u]) && (b[p[u]] = !(y[p[u]] = f));
              if (r) {
                  if (i || e) {
                      if (i) {
                          for (c = [],
                          u = b.length; u--; )
                              (f = b[u]) && c.push(y[u] = f);
                          i(null, b = [], c, l)
                      }
                      for (u = b.length; u--; )
                          (f = b[u]) && (c = i ? ee(r, f) : h[u]) > -1 && (r[c] = !(s[c] = f))
                  }
              } else
                  b = m(b === s ? b.splice(d, b.length) : b),
                  i ? i(null, s, b, l) : K.apply(s, b)
          })
      }
      function y(e) {
          for (var t, n, r, o = e.length, i = _.relative[e[0].type], s = i || _.relative[" "], a = i ? 1 : 0, l = p(function(e) {
              return e === t
          }, s, !0), c = p(function(e) {
              return ee(t, e) > -1
          }, s, !0), u = [function(e, n, r) {
              var o = !i && (r || n !== E) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
              return t = null,
              o
          }
          ]; a < o; a++)
              if (n = _.relative[e[a].type])
                  u = [p(d(u), n)];
              else {
                  if (n = _.filter[e[a].type].apply(null, e[a].matches),
                  n[F]) {
                      for (r = ++a; r < o && !_.relative[e[r].type]; r++)
                          ;
                      return v(a > 1 && d(u), a > 1 && h(e.slice(0, a - 1).concat({
                          value: " " === e[a - 2].type ? "*" : ""
                      })).replace(le, "$1"), n, a < r && y(e.slice(a, r)), r < o && y(e = e.slice(r)), r < o && h(e))
                  }
                  u.push(n)
              }
          return d(u)
      }
      function b(e, n) {
          var o = n.length > 0
            , i = e.length > 0
            , s = function(r, s, a, l, c) {
              var u, f, h, p = 0, d = "0", g = r && [], v = [], y = E, b = r || i && _.find.TAG("*", c), w = q += null == y ? 1 : Math.random() || .1, x = b.length;
              for (c && (E = s !== j && s); d !== x && null != (u = b[d]); d++) {
                  if (i && u) {
                      for (f = 0; h = e[f++]; )
                          if (h(u, s, a)) {
                              l.push(u);
                              break
                          }
                      c && (q = w)
                  }
                  o && ((u = !h && u) && p--,
                  r && g.push(u))
              }
              if (p += d,
              o && d !== p) {
                  for (f = 0; h = n[f++]; )
                      h(g, v, s, a);
                  if (r) {
                      if (p > 0)
                          for (; d--; )
                              g[d] || v[d] || (v[d] = V.call(l));
                      v = m(v)
                  }
                  K.apply(l, v),
                  c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
              }
              return c && (q = w,
              E = y),
              g
          };
          return o ? r(s) : s
      }
      var w, x, _, k, S, T, C, M, E, A, z, N, j, O, L, D, I, H, R, F = "sizzle" + 1 * new Date, P = e.document, q = 0, B = 0, W = n(), $ = n(), X = n(), Y = function(e, t) {
          return e === t && (z = !0),
          0
      }, U = 1 << 31, J = {}.hasOwnProperty, G = [], V = G.pop, Z = G.push, K = G.push, Q = G.slice, ee = function(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
              if (e[n] === t)
                  return n;
          return -1
      }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), he = new RegExp(se), pe = new RegExp("^" + oe + "$"), de = {
          ID: new RegExp("^#(" + re + ")"),
          CLASS: new RegExp("^\\.(" + re + ")"),
          TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + se),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
          bool: new RegExp("^(?:" + te + ")$","i"),
          needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
      }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), _e = function(e, t, n) {
          var r = "0x" + t - 65536;
          return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, ke = function() {
          N()
      };
      try {
          K.apply(G = Q.call(P.childNodes), P.childNodes),
          G[P.childNodes.length].nodeType
      } catch (Se) {
          K = {
              apply: G.length ? function(e, t) {
                  Z.apply(e, Q.call(t))
              }
              : function(e, t) {
                  for (var n = e.length, r = 0; e[n++] = t[r++]; )
                      ;
                  e.length = n - 1
              }
          }
      }
      x = t.support = {},
      S = t.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }
      ,
      N = t.setDocument = function(e) {
          var t, n, r = e ? e.ownerDocument || e : P;
          return r !== j && 9 === r.nodeType && r.documentElement ? (j = r,
          O = r.documentElement,
          n = r.defaultView,
          n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)),
          L = !S(r),
          x.attributes = o(function(e) {
              return e.className = "i",
              !e.getAttribute("className")
          }),
          x.getElementsByTagName = o(function(e) {
              return e.appendChild(r.createComment("")),
              !e.getElementsByTagName("*").length
          }),
          x.getElementsByClassName = ve.test(r.getElementsByClassName),
          x.getById = o(function(e) {
              return O.appendChild(e).id = F,
              !r.getElementsByName || !r.getElementsByName(F).length
          }),
          x.getById ? (_.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && L) {
                  var n = t.getElementById(e);
                  return n && n.parentNode ? [n] : []
              }
          }
          ,
          _.filter.ID = function(e) {
              var t = e.replace(xe, _e);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }
          ) : (delete _.find.ID,
          _.filter.ID = function(e) {
              var t = e.replace(xe, _e);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }
          ),
          _.find.TAG = x.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
          }
          : function(e, t) {
              var n, r = [], o = 0, i = t.getElementsByTagName(e);
              if ("*" === e) {
                  for (; n = i[o++]; )
                      1 === n.nodeType && r.push(n);
                  return r
              }
              return i
          }
          ,
          _.find.CLASS = x.getElementsByClassName && function(e, t) {
              if (L)
                  return t.getElementsByClassName(e)
          }
          ,
          I = [],
          D = [],
          (x.qsa = ve.test(r.querySelectorAll)) && (o(function(e) {
              O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>",
              e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"),
              e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"),
              e.querySelectorAll("[id~=" + F + "-]").length || D.push("~="),
              e.querySelectorAll(":checked").length || D.push(":checked"),
              e.querySelectorAll("a#" + F + "+*").length || D.push(".#.+[+~]")
          }),
          o(function(e) {
              var t = r.createElement("input");
              t.setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="),
              e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"),
              e.querySelectorAll("*,:x"),
              D.push(",.*:")
          })),
          (x.matchesSelector = ve.test(H = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(e) {
              x.disconnectedMatch = H.call(e, "div"),
              H.call(e, "[s!='']:x"),
              I.push("!=", se)
          }),
          D = D.length && new RegExp(D.join("|")),
          I = I.length && new RegExp(I.join("|")),
          t = ve.test(O.compareDocumentPosition),
          R = t || ve.test(O.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e
                , r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          }
          : function(e, t) {
              if (t)
                  for (; t = t.parentNode; )
                      if (t === e)
                          return !0;
              return !1
          }
          ,
          Y = t ? function(e, t) {
              if (e === t)
                  return z = !0,
                  0;
              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
              1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === P && R(P, e) ? -1 : t === r || t.ownerDocument === P && R(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
          }
          : function(e, t) {
              if (e === t)
                  return z = !0,
                  0;
              var n, o = 0, i = e.parentNode, a = t.parentNode, l = [e], c = [t];
              if (!i || !a)
                  return e === r ? -1 : t === r ? 1 : i ? -1 : a ? 1 : A ? ee(A, e) - ee(A, t) : 0;
              if (i === a)
                  return s(e, t);
              for (n = e; n = n.parentNode; )
                  l.unshift(n);
              for (n = t; n = n.parentNode; )
                  c.unshift(n);
              for (; l[o] === c[o]; )
                  o++;
              return o ? s(l[o], c[o]) : l[o] === P ? -1 : c[o] === P ? 1 : 0
          }
          ,
          r) : j
      }
      ,
      t.matches = function(e, n) {
          return t(e, null, null, n)
      }
      ,
      t.matchesSelector = function(e, n) {
          if ((e.ownerDocument || e) !== j && N(e),
          n = n.replace(fe, "='$1']"),
          x.matchesSelector && L && (!I || !I.test(n)) && (!D || !D.test(n)))
              try {
                  var r = H.call(e, n);
                  if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                      return r
              } catch (o) {}
          return t(n, j, null, [e]).length > 0
      }
      ,
      t.contains = function(e, t) {
          return (e.ownerDocument || e) !== j && N(e),
          R(e, t)
      }
      ,
      t.attr = function(e, t) {
          (e.ownerDocument || e) !== j && N(e);
          var n = _.attrHandle[t.toLowerCase()]
            , r = n && J.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
          return void 0 !== r ? r : x.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }
      ,
      t.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }
      ,
      t.uniqueSort = function(e) {
          var t, n = [], r = 0, o = 0;
          if (z = !x.detectDuplicates,
          A = !x.sortStable && e.slice(0),
          e.sort(Y),
          z) {
              for (; t = e[o++]; )
                  t === e[o] && (r = n.push(o));
              for (; r--; )
                  e.splice(n[r], 1)
          }
          return A = null,
          e
      }
      ,
      k = t.getText = function(e) {
          var t, n = "", r = 0, o = e.nodeType;
          if (o) {
              if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent)
                      return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling)
                      n += k(e)
              } else if (3 === o || 4 === o)
                  return e.nodeValue
          } else
              for (; t = e[r++]; )
                  n += k(t);
          return n
      }
      ,
      _ = t.selectors = {
          cacheLength: 50,
          createPseudo: r,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(xe, _e),
                  e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(),
                  "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                  e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                  e[2] = n.slice(0, t)),
                  e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(xe, _e).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = W[e + " "];
                  return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, n, r) {
                  return function(o) {
                      var i = t.attr(o, e);
                      return null == i ? "!=" === n : !n || (i += "",
                      "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                  }
              },
              CHILD: function(e, t, n, r, o) {
                  var i = "nth" !== e.slice(0, 3)
                    , s = "last" !== e.slice(-4)
                    , a = "of-type" === t;
                  return 1 === r && 0 === o ? function(e) {
                      return !!e.parentNode
                  }
                  : function(t, n, l) {
                      var c, u, f, h, p, d, g = i !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                      if (m) {
                          if (i) {
                              for (; g; ) {
                                  for (f = t; f = f[g]; )
                                      if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                          return !1;
                                  d = g = "only" === e && !d && "nextSibling"
                              }
                              return !0
                          }
                          if (d = [s ? m.firstChild : m.lastChild],
                          s && y) {
                              for (u = m[F] || (m[F] = {}),
                              c = u[e] || [],
                              p = c[0] === q && c[1],
                              h = c[0] === q && c[2],
                              f = p && m.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop(); )
                                  if (1 === f.nodeType && ++h && f === t) {
                                      u[e] = [q, p, h];
                                      break
                                  }
                          } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === q)
                              h = c[1];
                          else
                              for (; (f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++h || (y && ((f[F] || (f[F] = {}))[e] = [q, h]),
                              f !== t)); )
                                  ;
                          return h -= o,
                          h === r || h % r === 0 && h / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, n) {
                  var o, i = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                  return i[F] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                  _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                      for (var r, o = i(e, n), s = o.length; s--; )
                          r = ee(e, o[s]),
                          e[r] = !(t[r] = o[s])
                  }) : function(e) {
                      return i(e, 0, o)
                  }
                  ) : i
              }
          },
          pseudos: {
              not: r(function(e) {
                  var t = []
                    , n = []
                    , o = C(e.replace(le, "$1"));
                  return o[F] ? r(function(e, t, n, r) {
                      for (var i, s = o(e, null, r, []), a = e.length; a--; )
                          (i = s[a]) && (e[a] = !(t[a] = i))
                  }) : function(e, r, i) {
                      return t[0] = e,
                      o(t, null, i, n),
                      t[0] = null,
                      !n.pop()
                  }
              }),
              has: r(function(e) {
                  return function(n) {
                      return t(e, n).length > 0
                  }
              }),
              contains: r(function(e) {
                  return e = e.replace(xe, _e),
                  function(t) {
                      return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                  }
              }),
              lang: r(function(e) {
                  return pe.test(e || "") || t.error("unsupported lang: " + e),
                  e = e.replace(xe, _e).toLowerCase(),
                  function(t) {
                      var n;
                      do
                          if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                              return n = n.toLowerCase(),
                              n === e || 0 === n.indexOf(e + "-");
                      while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1
                  }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === O
              },
              focus: function(e) {
                  return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: function(e) {
                  return e.disabled === !1
              },
              disabled: function(e) {
                  return e.disabled === !0
              },
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                  e.selected === !0
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6)
                          return !1;
                  return !0
              },
              parent: function(e) {
                  return !_.pseudos.empty(e)
              },
              header: function(e) {
                  return me.test(e.nodeName)
              },
              input: function(e) {
                  return ge.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: c(function() {
                  return [0]
              }),
              last: c(function(e, t) {
                  return [t - 1]
              }),
              eq: c(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: c(function(e, t) {
                  for (var n = 0; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              odd: c(function(e, t) {
                  for (var n = 1; n < t; n += 2)
                      e.push(n);
                  return e
              }),
              lt: c(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; )
                      e.push(r);
                  return e
              }),
              gt: c(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; )
                      e.push(r);
                  return e
              })
          }
      },
      _.pseudos.nth = _.pseudos.eq;
      for (w in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
      })
          _.pseudos[w] = a(w);
      for (w in {
          submit: !0,
          reset: !0
      })
          _.pseudos[w] = l(w);
      return f.prototype = _.filters = _.pseudos,
      _.setFilters = new f,
      T = t.tokenize = function(e, n) {
          var r, o, i, s, a, l, c, u = $[e + " "];
          if (u)
              return n ? 0 : u.slice(0);
          for (a = e,
          l = [],
          c = _.preFilter; a; ) {
              r && !(o = ce.exec(a)) || (o && (a = a.slice(o[0].length) || a),
              l.push(i = [])),
              r = !1,
              (o = ue.exec(a)) && (r = o.shift(),
              i.push({
                  value: r,
                  type: o[0].replace(le, " ")
              }),
              a = a.slice(r.length));
              for (s in _.filter)
                  !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (r = o.shift(),
                  i.push({
                      value: r,
                      type: s,
                      matches: o
                  }),
                  a = a.slice(r.length));
              if (!r)
                  break
          }
          return n ? a.length : a ? t.error(e) : $(e, l).slice(0)
      }
      ,
      C = t.compile = function(e, t) {
          var n, r = [], o = [], i = X[e + " "];
          if (!i) {
              for (t || (t = T(e)),
              n = t.length; n--; )
                  i = y(t[n]),
                  i[F] ? r.push(i) : o.push(i);
              i = X(e, b(o, r)),
              i.selector = e
          }
          return i
      }
      ,
      M = t.select = function(e, t, n, r) {
          var o, i, s, a, l, c = "function" == typeof e && e, f = !r && T(e = c.selector || e);
          if (n = n || [],
          1 === f.length) {
              if (i = f[0] = f[0].slice(0),
              i.length > 2 && "ID" === (s = i[0]).type && x.getById && 9 === t.nodeType && L && _.relative[i[1].type]) {
                  if (t = (_.find.ID(s.matches[0].replace(xe, _e), t) || [])[0],
                  !t)
                      return n;
                  c && (t = t.parentNode),
                  e = e.slice(i.shift().value.length)
              }
              for (o = de.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o],
              !_.relative[a = s.type]); )
                  if ((l = _.find[a]) && (r = l(s.matches[0].replace(xe, _e), be.test(i[0].type) && u(t.parentNode) || t))) {
                      if (i.splice(o, 1),
                      e = r.length && h(i),
                      !e)
                          return K.apply(n, r),
                          n;
                      break
                  }
          }
          return (c || C(e, f))(r, t, !L, n, be.test(e) && u(t.parentNode) || t),
          n
      }
      ,
      x.sortStable = F.split("").sort(Y).join("") === F,
      x.detectDuplicates = !!z,
      N(),
      x.sortDetached = o(function(e) {
          return 1 & e.compareDocumentPosition(j.createElement("div"))
      }),
      o(function(e) {
          return e.innerHTML = "<a href='#'></a>",
          "#" === e.firstChild.getAttribute("href")
      }) || i("type|href|height|width", function(e, t, n) {
          if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }),
      x.attributes && o(function(e) {
          return e.innerHTML = "<input/>",
          e.firstChild.setAttribute("value", ""),
          "" === e.firstChild.getAttribute("value")
      }) || i("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue
      }),
      o(function(e) {
          return null == e.getAttribute("disabled")
      }) || i(te, function(e, t, n) {
          var r;
          if (!n)
              return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }),
      t
  }(e);
  Q.find = oe,
  Q.expr = oe.selectors,
  Q.expr[":"] = Q.expr.pseudos,
  Q.unique = oe.uniqueSort,
  Q.text = oe.getText,
  Q.isXMLDoc = oe.isXML,
  Q.contains = oe.contains;
  var ie = Q.expr.match.needsContext
    , se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
    , ae = /^.[^:#\[\.,]*$/;
  Q.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }
  ,
  Q.fn.extend({
      find: function(e) {
          var t, n = this.length, r = [], o = this;
          if ("string" != typeof e)
              return this.pushStack(Q(e).filter(function() {
                  for (t = 0; t < n; t++)
                      if (Q.contains(o[t], this))
                          return !0
              }));
          for (t = 0; t < n; t++)
              Q.find(e, o[t], r);
          return r = this.pushStack(n > 1 ? Q.unique(r) : r),
          r.selector = this.selector ? this.selector + " " + e : e,
          r
      },
      filter: function(e) {
          return this.pushStack(r(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(r(this, e || [], !0))
      },
      is: function(e) {
          return !!r(this, "string" == typeof e && ie.test(e) ? Q(e) : e || [], !1).length
      }
  });
  var le, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ue = Q.fn.init = function(e, t) {
      var n, r;
      if (!e)
          return this;
      if ("string" == typeof e) {
          if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e),
          !n || !n[1] && t)
              return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
          if (n[1]) {
              if (t = t instanceof Q ? t[0] : t,
              Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
              se.test(n[1]) && Q.isPlainObject(t))
                  for (n in t)
                      Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
              return this
          }
          return r = Z.getElementById(n[2]),
          r && r.parentNode && (this.length = 1,
          this[0] = r),
          this.context = Z,
          this.selector = e,
          this
      }
      return e.nodeType ? (this.context = this[0] = e,
      this.length = 1,
      this) : Q.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector,
      this.context = e.context),
      Q.makeArray(e, this))
  }
  ;
  ue.prototype = Q.fn,
  le = Q(Z);
  var fe = /^(?:parents|prev(?:Until|All))/
    , he = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
  };
  Q.extend({
      dir: function(e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                  if (o && Q(e).is(n))
                      break;
                  r.push(e)
              }
          return r
      },
      sibling: function(e, t) {
          for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
          return n
      }
  }),
  Q.fn.extend({
      has: function(e) {
          var t = Q(e, this)
            , n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (Q.contains(this, t[e]))
                      return !0
          })
      },
      closest: function(e, t) {
          for (var n, r = 0, o = this.length, i = [], s = ie.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                      i.push(n);
                      break
                  }
          return this.pushStack(i.length > 1 ? Q.unique(i) : i)
      },
      index: function(e) {
          return e ? "string" == typeof e ? Y.call(Q(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  }),
  Q.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return Q.dir(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return Q.dir(e, "parentNode", n)
      },
      next: function(e) {
          return o(e, "nextSibling")
      },
      prev: function(e) {
          return o(e, "previousSibling")
      },
      nextAll: function(e) {
          return Q.dir(e, "nextSibling")
      },
      prevAll: function(e) {
          return Q.dir(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return Q.dir(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return Q.dir(e, "previousSibling", n)
      },
      siblings: function(e) {
          return Q.sibling((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return Q.sibling(e.firstChild)
      },
      contents: function(e) {
          return e.contentDocument || Q.merge([], e.childNodes)
      }
  }, function(e, t) {
      Q.fn[e] = function(n, r) {
          var o = Q.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (o = Q.filter(r, o)),
          this.length > 1 && (he[e] || Q.unique(o),
          fe.test(e) && o.reverse()),
          this.pushStack(o)
      }
  });
  var pe = /\S+/g
    , de = {};
  Q.Callbacks = function(e) {
      e = "string" == typeof e ? de[e] || i(e) : Q.extend({}, e);
      var t, n, r, o, s, a, l = [], c = !e.once && [], u = function(i) {
          for (t = e.memory && i,
          n = !0,
          a = o || 0,
          o = 0,
          s = l.length,
          r = !0; l && a < s; a++)
              if (l[a].apply(i[0], i[1]) === !1 && e.stopOnFalse) {
                  t = !1;
                  break
              }
          r = !1,
          l && (c ? c.length && u(c.shift()) : t ? l = [] : f.disable())
      }, f = {
          add: function() {
              if (l) {
                  var n = l.length;
                  !function i(t) {
                      Q.each(t, function(t, n) {
                          var r = Q.type(n);
                          "function" === r ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                      })
                  }(arguments),
                  r ? s = l.length : t && (o = n,
                  u(t))
              }
              return this
          },
          remove: function() {
              return l && Q.each(arguments, function(e, t) {
                  for (var n; (n = Q.inArray(t, l, n)) > -1; )
                      l.splice(n, 1),
                      r && (n <= s && s--,
                      n <= a && a--)
              }),
              this
          },
          has: function(e) {
              return e ? Q.inArray(e, l) > -1 : !(!l || !l.length)
          },
          empty: function() {
              return l = [],
              s = 0,
              this
          },
          disable: function() {
              return l = c = t = void 0,
              this
          },
          disabled: function() {
              return !l
          },
          lock: function() {
              return c = void 0,
              t || f.disable(),
              this
          },
          locked: function() {
              return !c
          },
          fireWith: function(e, t) {
              return !l || n && !c || (t = t || [],
              t = [e, t.slice ? t.slice() : t],
              r ? c.push(t) : u(t)),
              this
          },
          fire: function() {
              return f.fireWith(this, arguments),
              this
          },
          fired: function() {
              return !!n
          }
      };
      return f
  }
  ,
  Q.extend({
      Deferred: function(e) {
          var t = [["resolve", "done", Q.Callbacks("once memory"), "resolved"], ["reject", "fail", Q.Callbacks("once memory"), "rejected"], ["notify", "progress", Q.Callbacks("memory")]]
            , n = "pending"
            , r = {
              state: function() {
                  return n
              },
              always: function() {
                  return o.done(arguments).fail(arguments),
                  this
              },
              then: function() {
                  var e = arguments;
                  return Q.Deferred(function(n) {
                      Q.each(t, function(t, i) {
                          var s = Q.isFunction(e[t]) && e[t];
                          o[i[1]](function() {
                              var e = s && s.apply(this, arguments);
                              e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                          })
                      }),
                      e = null
                  }).promise()
              },
              promise: function(e) {
                  return null != e ? Q.extend(e, r) : r
              }
          }
            , o = {};
          return r.pipe = r.then,
          Q.each(t, function(e, i) {
              var s = i[2]
                , a = i[3];
              r[i[1]] = s.add,
              a && s.add(function() {
                  n = a
              }, t[1 ^ e][2].disable, t[2][2].lock),
              o[i[0]] = function() {
                  return o[i[0] + "With"](this === o ? r : this, arguments),
                  this
              }
              ,
              o[i[0] + "With"] = s.fireWith
          }),
          r.promise(o),
          e && e.call(o, o),
          o
      },
      when: function(e) {
          var t, n, r, o = 0, i = W.call(arguments), s = i.length, a = 1 !== s || e && Q.isFunction(e.promise) ? s : 0, l = 1 === a ? e : Q.Deferred(), c = function(e, n, r) {
              return function(o) {
                  n[e] = this,
                  r[e] = arguments.length > 1 ? W.call(arguments) : o,
                  r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
              }
          };
          if (s > 1)
              for (t = new Array(s),
              n = new Array(s),
              r = new Array(s); o < s; o++)
                  i[o] && Q.isFunction(i[o].promise) ? i[o].promise().done(c(o, r, i)).fail(l.reject).progress(c(o, n, t)) : --a;
          return a || l.resolveWith(r, i),
          l.promise()
      }
  });
  var ge;
  Q.fn.ready = function(e) {
      return Q.ready.promise().done(e),
      this
  }
  ,
  Q.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
          e ? Q.readyWait++ : Q.ready(!0)
      },
      ready: function(e) {
          (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0,
          e !== !0 && --Q.readyWait > 0 || (ge.resolveWith(Z, [Q]),
          Q.fn.triggerHandler && (Q(Z).triggerHandler("ready"),
          Q(Z).off("ready"))))
      }
  }),
  Q.ready.promise = function(t) {
      return ge || (ge = Q.Deferred(),
      "complete" === Z.readyState ? setTimeout(Q.ready) : (Z.addEventListener("DOMContentLoaded", s, !1),
      e.addEventListener("load", s, !1))),
      ge.promise(t)
  }
  ,
  Q.ready.promise();
  var me = Q.access = function(e, t, n, r, o, i, s) {
      var a = 0
        , l = e.length
        , c = null == n;
      if ("object" === Q.type(n)) {
          o = !0;
          for (a in n)
              Q.access(e, t, a, n[a], !0, i, s)
      } else if (void 0 !== r && (o = !0,
      Q.isFunction(r) || (s = !0),
      c && (s ? (t.call(e, r),
      t = null) : (c = t,
      t = function(e, t, n) {
          return c.call(Q(e), n)
      }
      )),
      t))
          for (; a < l; a++)
              t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : i
  }
  ;
  Q.acceptData = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  ,
  a.uid = 1,
  a.accepts = Q.acceptData,
  a.prototype = {
      key: function(e) {
          if (!a.accepts(e))
              return 0;
          var t = {}
            , n = e[this.expando];
          if (!n) {
              n = a.uid++;
              try {
                  t[this.expando] = {
                      value: n
                  },
                  Object.defineProperties(e, t)
              } catch (r) {
                  t[this.expando] = n,
                  Q.extend(e, t)
              }
          }
          return this.cache[n] || (this.cache[n] = {}),
          n
      },
      set: function(e, t, n) {
          var r, o = this.key(e), i = this.cache[o];
          if ("string" == typeof t)
              i[t] = n;
          else if (Q.isEmptyObject(i))
              Q.extend(this.cache[o], t);
          else
              for (r in t)
                  i[r] = t[r];
          return i
      },
      get: function(e, t) {
          var n = this.cache[this.key(e)];
          return void 0 === t ? n : n[t]
      },
      access: function(e, t, n) {
          var r;
          return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
          void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n),
          void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r, o, i = this.key(e), s = this.cache[i];
          if (void 0 === t)
              this.cache[i] = {};
          else {
              Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (o = Q.camelCase(t),
              t in s ? r = [t, o] : (r = o,
              r = r in s ? [r] : r.match(pe) || [])),
              n = r.length;
              for (; n--; )
                  delete s[r[n]]
          }
      },
      hasData: function(e) {
          return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
      },
      discard: function(e) {
          e[this.expando] && delete this.cache[e[this.expando]]
      }
  };
  var ve = new a
    , ye = new a
    , be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
    , we = /([A-Z])/g;
  Q.extend({
      hasData: function(e) {
          return ye.hasData(e) || ve.hasData(e)
      },
      data: function(e, t, n) {
          return ye.access(e, t, n)
      },
      removeData: function(e, t) {
          ye.remove(e, t)
      },
      _data: function(e, t, n) {
          return ve.access(e, t, n)
      },
      _removeData: function(e, t) {
          ve.remove(e, t)
      }
  }),
  Q.fn.extend({
      data: function(e, t) {
          var n, r, o, i = this[0], s = i && i.attributes;
          if (void 0 === e) {
              if (this.length && (o = ye.get(i),
              1 === i.nodeType && !ve.get(i, "hasDataAttrs"))) {
                  for (n = s.length; n--; )
                      s[n] && (r = s[n].name,
                      0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)),
                      l(i, r, o[r])));
                  ve.set(i, "hasDataAttrs", !0)
              }
              return o
          }
          return "object" == typeof e ? this.each(function() {
              ye.set(this, e)
          }) : me(this, function(t) {
              var n, r = Q.camelCase(e);
              if (i && void 0 === t) {
                  if (n = ye.get(i, e),
                  void 0 !== n)
                      return n;
                  if (n = ye.get(i, r),
                  void 0 !== n)
                      return n;
                  if (n = l(i, r, void 0),
                  void 0 !== n)
                      return n
              } else
                  this.each(function() {
                      var n = ye.get(this, r);
                      ye.set(this, r, t),
                      e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                  })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              ye.remove(this, e)
          })
      }
  }),
  Q.extend({
      queue: function(e, t, n) {
          var r;
          if (e)
              return t = (t || "fx") + "queue",
              r = ve.get(e, t),
              n && (!r || Q.isArray(n) ? r = ve.access(e, t, Q.makeArray(n)) : r.push(n)),
              r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = Q.queue(e, t)
            , r = n.length
            , o = n.shift()
            , i = Q._queueHooks(e, t)
            , s = function() {
              Q.dequeue(e, t)
          };
          "inprogress" === o && (o = n.shift(),
          r--),
          o && ("fx" === t && n.unshift("inprogress"),
          delete i.stop,
          o.call(e, s, i)),
          !r && i && i.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return ve.get(e, n) || ve.access(e, n, {
              empty: Q.Callbacks("once memory").add(function() {
                  ve.remove(e, [t + "queue", n])
              })
          })
      }
  }),
  Q.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e,
          e = "fx",
          n--),
          arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = Q.queue(this, e, t);
              Q._queueHooks(this, e),
              "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              Q.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1, o = Q.Deferred(), i = this, s = this.length, a = function() {
              --r || o.resolveWith(i, [i])
          };
          for ("string" != typeof e && (t = e,
          e = void 0),
          e = e || "fx"; s--; )
              n = ve.get(i[s], e + "queueHooks"),
              n && n.empty && (r++,
              n.empty.add(a));
          return a(),
          o.promise(t)
      }
  });
  var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
    , _e = ["Top", "Right", "Bottom", "Left"]
    , ke = function(e, t) {
      return e = t || e,
      "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
  }
    , Se = /^(?:checkbox|radio)$/i;
  !function() {
      var e = Z.createDocumentFragment()
        , t = e.appendChild(Z.createElement("div"))
        , n = Z.createElement("input");
      n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      V.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
      t.innerHTML = "<textarea>x</textarea>",
      V.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
  }();
  var Te = "undefined";
  V.focusinBubbles = "onfocusin"in e;
  var Ce = /^key/
    , Me = /^(?:mouse|pointer|contextmenu)|click/
    , Ee = /^(?:focusinfocus|focusoutblur)$/
    , Ae = /^([^.]*)(?:\.(.+)|)$/;
  Q.event = {
      global: {},
      add: function(e, t, n, r, o) {
          var i, s, a, l, c, u, f, h, p, d, g, m = ve.get(e);
          if (m)
              for (n.handler && (i = n,
              n = i.handler,
              o = i.selector),
              n.guid || (n.guid = Q.guid++),
              (l = m.events) || (l = m.events = {}),
              (s = m.handle) || (s = m.handle = function(t) {
                  return typeof Q !== Te && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
              }
              ),
              t = (t || "").match(pe) || [""],
              c = t.length; c--; )
                  a = Ae.exec(t[c]) || [],
                  p = g = a[1],
                  d = (a[2] || "").split(".").sort(),
                  p && (f = Q.event.special[p] || {},
                  p = (o ? f.delegateType : f.bindType) || p,
                  f = Q.event.special[p] || {},
                  u = Q.extend({
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && Q.expr.match.needsContext.test(o),
                      namespace: d.join(".")
                  }, i),
                  (h = l[p]) || (h = l[p] = [],
                  h.delegateCount = 0,
                  f.setup && f.setup.call(e, r, d, s) !== !1 || e.addEventListener && e.addEventListener(p, s, !1)),
                  f.add && (f.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                  o ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                  Q.event.global[p] = !0)
      },
      remove: function(e, t, n, r, o) {
          var i, s, a, l, c, u, f, h, p, d, g, m = ve.hasData(e) && ve.get(e);
          if (m && (l = m.events)) {
              for (t = (t || "").match(pe) || [""],
              c = t.length; c--; )
                  if (a = Ae.exec(t[c]) || [],
                  p = g = a[1],
                  d = (a[2] || "").split(".").sort(),
                  p) {
                      for (f = Q.event.special[p] || {},
                      p = (r ? f.delegateType : f.bindType) || p,
                      h = l[p] || [],
                      a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      s = i = h.length; i--; )
                          u = h[i],
                          !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (h.splice(i, 1),
                          u.selector && h.delegateCount--,
                          f.remove && f.remove.call(e, u));
                      s && !h.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || Q.removeEvent(e, p, m.handle),
                      delete l[p])
                  } else
                      for (p in l)
                          Q.event.remove(e, p + t[c], n, r, !0);
              Q.isEmptyObject(l) && (delete m.handle,
              ve.remove(e, "events"))
          }
      },
      trigger: function(t, n, r, o) {
          var i, s, a, l, c, u, f, h = [r || Z], p = G.call(t, "type") ? t.type : t, d = G.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = a = r = r || Z,
          3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(p + Q.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."),
          p = d.shift(),
          d.sort()),
          c = p.indexOf(":") < 0 && "on" + p,
          t = t[Q.expando] ? t : new Q.Event(p,"object" == typeof t && t),
          t.isTrigger = o ? 2 : 3,
          t.namespace = d.join("."),
          t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
          t.result = void 0,
          t.target || (t.target = r),
          n = null == n ? [t] : Q.makeArray(n, [t]),
          f = Q.event.special[p] || {},
          o || !f.trigger || f.trigger.apply(r, n) !== !1)) {
              if (!o && !f.noBubble && !Q.isWindow(r)) {
                  for (l = f.delegateType || p,
                  Ee.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                      h.push(s),
                      a = s;
                  a === (r.ownerDocument || Z) && h.push(a.defaultView || a.parentWindow || e)
              }
              for (i = 0; (s = h[i++]) && !t.isPropagationStopped(); )
                  t.type = i > 1 ? l : f.bindType || p,
                  u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"),
                  u && u.apply(s, n),
                  u = c && s[c],
                  u && u.apply && Q.acceptData(s) && (t.result = u.apply(s, n),
                  t.result === !1 && t.preventDefault());
              return t.type = p,
              o || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !Q.acceptData(r) || c && Q.isFunction(r[p]) && !Q.isWindow(r) && (a = r[c],
              a && (r[c] = null),
              Q.event.triggered = p,
              r[p](),
              Q.event.triggered = void 0,
              a && (r[c] = a)),
              t.result
          }
      },
      dispatch: function(e) {
          e = Q.event.fix(e);
          var t, n, r, o, i, s = [], a = W.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], c = Q.event.special[e.type] || {};
          if (a[0] = e,
          e.delegateTarget = this,
          !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
              for (s = Q.event.handlers.call(this, e, l),
              t = 0; (o = s[t++]) && !e.isPropagationStopped(); )
                  for (e.currentTarget = o.elem,
                  n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                      e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i,
                      e.data = i.data,
                      r = ((Q.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a),
                      void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                      e.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, e),
              e.result
          }
      },
      handlers: function(e, t) {
          var n, r, o, i, s = [], a = t.delegateCount, l = e.target;
          if (a && l.nodeType && (!e.button || "click" !== e.type))
              for (; l !== this; l = l.parentNode || this)
                  if (l.disabled !== !0 || "click" !== e.type) {
                      for (r = [],
                      n = 0; n < a; n++)
                          i = t[n],
                          o = i.selector + " ",
                          void 0 === r[o] && (r[o] = i.needsContext ? Q(o, this).index(l) >= 0 : Q.find(o, this, null, [l]).length),
                          r[o] && r.push(i);
                      r.length && s.push({
                          elem: l,
                          handlers: r
                      })
                  }
          return a < t.length && s.push({
              elem: this,
              handlers: t.slice(a)
          }),
          s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
          props: "char charCode key keyCode".split(" "),
          filter: function(e, t) {
              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
              e
          }
      },
      mouseHooks: {
          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
          filter: function(e, t) {
              var n, r, o, i = t.button;
              return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
              r = n.documentElement,
              o = n.body,
              e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0),
              e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)),
              e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
              e
          }
      },
      fix: function(e) {
          if (e[Q.expando])
              return e;
          var t, n, r, o = e.type, i = e, s = this.fixHooks[o];
          for (s || (this.fixHooks[o] = s = Me.test(o) ? this.mouseHooks : Ce.test(o) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new Q.Event(i),
          t = r.length; t--; )
              n = r[t],
              e[n] = i[n];
          return e.target || (e.target = Z),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          s.filter ? s.filter(e, i) : e
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== f() && this.focus)
                      return this.focus(),
                      !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === f() && this.blur)
                      return this.blur(),
                      !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && Q.nodeName(this, "input"))
                      return this.click(),
                      !1
              },
              _default: function(e) {
                  return Q.nodeName(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      },
      simulate: function(e, t, n, r) {
          var o = Q.extend(new Q.Event, n, {
              type: e,
              isSimulated: !0,
              originalEvent: {}
          });
          r ? Q.event.trigger(o, null, t) : Q.event.dispatch.call(t, o),
          o.isDefaultPrevented() && n.preventDefault()
      }
  },
  Q.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
  }
  ,
  Q.Event = function(e, t) {
      return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e,
      this.type = e.type,
      this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e,
      t && Q.extend(this, t),
      this.timeStamp = e && e.timeStamp || Q.now(),
      void (this[Q.expando] = !0)) : new Q.Event(e,t)
  }
  ,
  Q.Event.prototype = {
      isDefaultPrevented: u,
      isPropagationStopped: u,
      isImmediatePropagationStopped: u,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = c,
          e && e.preventDefault && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = c,
          e && e.stopPropagation && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = c,
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation()
      }
  },
  Q.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      Q.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this, o = e.relatedTarget, i = e.handleObj;
              return o && (o === r || Q.contains(r, o)) || (e.type = i.origType,
              n = i.handler.apply(this, arguments),
              e.type = t),
              n
          }
      }
  }),
  V.focusinBubbles || Q.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          Q.event.simulate(t, e.target, Q.event.fix(e), !0)
      };
      Q.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this
                , o = ve.access(r, t);
              o || r.addEventListener(e, n, !0),
              ve.access(r, t, (o || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this
                , o = ve.access(r, t) - 1;
              o ? ve.access(r, t, o) : (r.removeEventListener(e, n, !0),
              ve.remove(r, t))
          }
      }
  }),
  Q.fn.extend({
      on: function(e, t, n, r, o) {
          var i, s;
          if ("object" == typeof e) {
              "string" != typeof t && (n = n || t,
              t = void 0);
              for (s in e)
                  this.on(s, t, n, e[s], o);
              return this
          }
          if (null == n && null == r ? (r = t,
          n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
          n = void 0) : (r = n,
          n = t,
          t = void 0)),
          r === !1)
              r = u;
          else if (!r)
              return this;
          return 1 === o && (i = r,
          r = function(e) {
              return Q().off(e),
              i.apply(this, arguments)
          }
          ,
          r.guid = i.guid || (i.guid = Q.guid++)),
          this.each(function() {
              Q.event.add(this, e, r, n, t)
          })
      },
      one: function(e, t, n, r) {
          return this.on(e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj)
              return r = e.handleObj,
              Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
              this;
          if ("object" == typeof e) {
              for (o in e)
                  this.off(o, t, e[o]);
              return this
          }
          return t !== !1 && "function" != typeof t || (n = t,
          t = void 0),
          n === !1 && (n = u),
          this.each(function() {
              Q.event.remove(this, e, n, t)
          })
      },
      trigger: function(e, t) {
          return this.each(function() {
              Q.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n)
              return Q.event.trigger(e, t, n, !0)
      }
  });
  var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
    , Ne = /<([\w:]+)/
    , je = /<|&#?\w+;/
    , Oe = /<(?:script|style|link)/i
    , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
    , De = /^$|\/(?:java|ecma)script/i
    , Ie = /^true\/(.*)/
    , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
    , Re = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
  };
  Re.optgroup = Re.option,
  Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead,
  Re.th = Re.td,
  Q.extend({
      clone: function(e, t, n) {
          var r, o, i, s, a = e.cloneNode(!0), l = Q.contains(e.ownerDocument, e);
          if (!(V.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
              for (s = v(a),
              i = v(e),
              r = 0,
              o = i.length; r < o; r++)
                  y(i[r], s[r]);
          if (t)
              if (n)
                  for (i = i || v(e),
                  s = s || v(a),
                  r = 0,
                  o = i.length; r < o; r++)
                      m(i[r], s[r]);
              else
                  m(e, a);
          return s = v(a, "script"),
          s.length > 0 && g(s, !l && v(e, "script")),
          a
      },
      buildFragment: function(e, t, n, r) {
          for (var o, i, s, a, l, c, u = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
              if (o = e[h],
              o || 0 === o)
                  if ("object" === Q.type(o))
                      Q.merge(f, o.nodeType ? [o] : o);
                  else if (je.test(o)) {
                      for (i = i || u.appendChild(t.createElement("div")),
                      s = (Ne.exec(o) || ["", ""])[1].toLowerCase(),
                      a = Re[s] || Re._default,
                      i.innerHTML = a[1] + o.replace(ze, "<$1></$2>") + a[2],
                      c = a[0]; c--; )
                          i = i.lastChild;
                      Q.merge(f, i.childNodes),
                      i = u.firstChild,
                      i.textContent = ""
                  } else
                      f.push(t.createTextNode(o));
          for (u.textContent = "",
          h = 0; o = f[h++]; )
              if ((!r || Q.inArray(o, r) === -1) && (l = Q.contains(o.ownerDocument, o),
              i = v(u.appendChild(o), "script"),
              l && g(i),
              n))
                  for (c = 0; o = i[c++]; )
                      De.test(o.type || "") && n.push(o);
          return u
      },
      cleanData: function(e) {
          for (var t, n, r, o, i = Q.event.special, s = 0; void 0 !== (n = e[s]); s++) {
              if (Q.acceptData(n) && (o = n[ve.expando],
              o && (t = ve.cache[o]))) {
                  if (t.events)
                      for (r in t.events)
                          i[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                  ve.cache[o] && delete ve.cache[o]
              }
              delete ye.cache[n[ye.expando]]
          }
      }
  }),
  Q.fn.extend({
      text: function(e) {
          return me(this, function(e) {
              return void 0 === e ? Q.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = h(this, e);
                  t.appendChild(e)
              }
          })
      },
      prepend: function() {
          return this.domManip(arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = h(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return this.domManip(arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      remove: function(e, t) {
          for (var n, r = e ? Q.filter(e, this) : this, o = 0; null != (n = r[o]); o++)
              t || 1 !== n.nodeType || Q.cleanData(v(n)),
              n.parentNode && (t && Q.contains(n.ownerDocument, n) && g(v(n, "script")),
              n.parentNode.removeChild(n));
          return this
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (Q.cleanData(v(e, !1)),
              e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e,
          t = null == t ? e : t,
          this.map(function() {
              return Q.clone(this, e, t)
          })
      },
      html: function(e) {
          return me(this, function(e) {
              var t = this[0] || {}
                , n = 0
                , r = this.length;
              if (void 0 === e && 1 === t.nodeType)
                  return t.innerHTML;
              if ("string" == typeof e && !Oe.test(e) && !Re[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = e.replace(ze, "<$1></$2>");
                  try {
                      for (; n < r; n++)
                          t = this[n] || {},
                          1 === t.nodeType && (Q.cleanData(v(t, !1)),
                          t.innerHTML = e);
                      t = 0
                  } catch (o) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = arguments[0];
          return this.domManip(arguments, function(t) {
              e = this.parentNode,
              Q.cleanData(v(this)),
              e && e.replaceChild(t, this)
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
      },
      detach: function(e) {
          return this.remove(e, !0)
      },
      domManip: function(e, t) {
          e = $.apply([], e);
          var n, r, o, i, s, a, l = 0, c = this.length, u = this, f = c - 1, h = e[0], g = Q.isFunction(h);
          if (g || c > 1 && "string" == typeof h && !V.checkClone && Le.test(h))
              return this.each(function(n) {
                  var r = u.eq(n);
                  g && (e[0] = h.call(this, n, r.html())),
                  r.domManip(e, t)
              });
          if (c && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this),
          r = n.firstChild,
          1 === n.childNodes.length && (n = r),
          r)) {
              for (o = Q.map(v(n, "script"), p),
              i = o.length; l < c; l++)
                  s = n,
                  l !== f && (s = Q.clone(s, !0, !0),
                  i && Q.merge(o, v(s, "script"))),
                  t.call(this[l], s, l);
              if (i)
                  for (a = o[o.length - 1].ownerDocument,
                  Q.map(o, d),
                  l = 0; l < i; l++)
                      s = o[l],
                      De.test(s.type || "") && !ve.access(s, "globalEval") && Q.contains(a, s) && (s.src ? Q._evalUrl && Q._evalUrl(s.src) : Q.globalEval(s.textContent.replace(He, "")))
          }
          return this
      }
  }),
  Q.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      Q.fn[e] = function(e) {
          for (var n, r = [], o = Q(e), i = o.length - 1, s = 0; s <= i; s++)
              n = s === i ? this : this.clone(!0),
              Q(o[s])[t](n),
              X.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var Fe, Pe = {}, qe = /^margin/, Be = new RegExp("^(" + xe + ")(?!px)[a-z%]+$","i"), We = function(t) {
      return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
  };
  !function() {
      function t() {
          s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
          s.innerHTML = "",
          o.appendChild(i);
          var t = e.getComputedStyle(s, null);
          n = "1%" !== t.top,
          r = "4px" === t.width,
          o.removeChild(i)
      }
      var n, r, o = Z.documentElement, i = Z.createElement("div"), s = Z.createElement("div");
      s.style && (s.style.backgroundClip = "content-box",
      s.cloneNode(!0).style.backgroundClip = "",
      V.clearCloneStyle = "content-box" === s.style.backgroundClip,
      i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
      i.appendChild(s),
      e.getComputedStyle && Q.extend(V, {
          pixelPosition: function() {
              return t(),
              n
          },
          boxSizingReliable: function() {
              return null == r && t(),
              r
          },
          reliableMarginRight: function() {
              var t, n = s.appendChild(Z.createElement("div"));
              return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
              n.style.marginRight = n.style.width = "0",
              s.style.width = "1px",
              o.appendChild(i),
              t = !parseFloat(e.getComputedStyle(n, null).marginRight),
              o.removeChild(i),
              s.removeChild(n),
              t
          }
      }))
  }(),
  Q.swap = function(e, t, n, r) {
      var o, i, s = {};
      for (i in t)
          s[i] = e.style[i],
          e.style[i] = t[i];
      o = n.apply(e, r || []);
      for (i in t)
          e.style[i] = s[i];
      return o
  }
  ;
  var $e = /^(none|table(?!-c[ea]).+)/
    , Xe = new RegExp("^(" + xe + ")(.*)$","i")
    , Ye = new RegExp("^([+-])=(" + xe + ")","i")
    , Ue = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
  }
    , Je = {
      letterSpacing: "0",
      fontWeight: "400"
  }
    , Ge = ["Webkit", "O", "Moz", "ms"];
  Q.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = x(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {
          "float": "cssFloat"
      },
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o, i, s, a = Q.camelCase(t), l = e.style;
              return t = Q.cssProps[a] || (Q.cssProps[a] = k(l, a)),
              s = Q.cssHooks[t] || Q.cssHooks[a],
              void 0 === n ? s && "get"in s && void 0 !== (o = s.get(e, !1, r)) ? o : l[t] : (i = typeof n,
              "string" === i && (o = Ye.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Q.css(e, t)),
              i = "number"),
              null != n && n === n && ("number" !== i || Q.cssNumber[a] || (n += "px"),
              V.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
              s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n)),
              void 0)
          }
      },
      css: function(e, t, n, r) {
          var o, i, s, a = Q.camelCase(t);
          return t = Q.cssProps[a] || (Q.cssProps[a] = k(e.style, a)),
          s = Q.cssHooks[t] || Q.cssHooks[a],
          s && "get"in s && (o = s.get(e, !0, n)),
          void 0 === o && (o = x(e, t, r)),
          "normal" === o && t in Je && (o = Je[t]),
          "" === n || n ? (i = parseFloat(o),
          n === !0 || Q.isNumeric(i) ? i || 0 : o) : o
      }
  }),
  Q.each(["height", "width"], function(e, t) {
      Q.cssHooks[t] = {
          get: function(e, n, r) {
              if (n)
                  return $e.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, Ue, function() {
                      return C(e, t, r)
                  }) : C(e, t, r)
          },
          set: function(e, n, r) {
              var o = r && We(e);
              return S(e, n, r ? T(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, o), o) : 0)
          }
      }
  }),
  Q.cssHooks.marginRight = _(V.reliableMarginRight, function(e, t) {
      if (t)
          return Q.swap(e, {
              display: "inline-block"
          }, x, [e, "marginRight"])
  }),
  Q.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      Q.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                  o[e + _e[r] + t] = i[r] || i[r - 2] || i[0];
              return o
          }
      },
      qe.test(e) || (Q.cssHooks[e + t].set = S)
  }),
  Q.fn.extend({
      css: function(e, t) {
          return me(this, function(e, t, n) {
              var r, o, i = {}, s = 0;
              if (Q.isArray(t)) {
                  for (r = We(e),
                  o = t.length; s < o; s++)
                      i[t[s]] = Q.css(e, t[s], !1, r);
                  return i
              }
              return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
          }, e, t, arguments.length > 1)
      },
      show: function() {
          return M(this, !0)
      },
      hide: function() {
          return M(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              ke(this) ? Q(this).show() : Q(this).hide()
          })
      }
  }),
  Q.Tween = E,
  E.prototype = {
      constructor: E,
      init: function(e, t, n, r, o, i) {
          this.elem = e,
          this.prop = n,
          this.easing = o || "swing",
          this.options = t,
          this.start = this.now = this.cur(),
          this.end = r,
          this.unit = i || (Q.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = E.propHooks[this.prop];
          return e && e.get ? e.get(this) : E.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = E.propHooks[this.prop];
          return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
          this.now = (this.end - this.start) * t + this.start,
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : E.propHooks._default.set(this),
          this
      }
  },
  E.prototype.init.prototype = E.prototype,
  E.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""),
              t && "auto" !== t ? t : 0) : e.elem[e.prop]
          },
          set: function(e) {
              Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
          }
      }
  },
  E.propHooks.scrollTop = E.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  },
  Q.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      }
  },
  Q.fx = E.prototype.init,
  Q.fx.step = {};
  var Ve, Ze, Ke = /^(?:toggle|show|hide)$/, Qe = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$","i"), et = /queueHooks$/, tt = [j], nt = {
      "*": [function(e, t) {
          var n = this.createTween(e, t)
            , r = n.cur()
            , o = Qe.exec(t)
            , i = o && o[3] || (Q.cssNumber[e] ? "" : "px")
            , s = (Q.cssNumber[e] || "px" !== i && +r) && Qe.exec(Q.css(n.elem, e))
            , a = 1
            , l = 20;
          if (s && s[3] !== i) {
              i = i || s[3],
              o = o || [],
              s = +r || 1;
              do
                  a = a || ".5",
                  s /= a,
                  Q.style(n.elem, e, s + i);
              while (a !== (a = n.cur() / r) && 1 !== a && --l)
          }
          return o && (s = n.start = +s || +r || 0,
          n.unit = i,
          n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
          n
      }
      ]
  };
  Q.Animation = Q.extend(L, {
      tweener: function(e, t) {
          Q.isFunction(e) ? (t = e,
          e = ["*"]) : e = e.split(" ");
          for (var n, r = 0, o = e.length; r < o; r++)
              n = e[r],
              nt[n] = nt[n] || [],
              nt[n].unshift(t)
      },
      prefilter: function(e, t) {
          t ? tt.unshift(e) : tt.push(e)
      }
  }),
  Q.speed = function(e, t, n) {
      var r = e && "object" == typeof e ? Q.extend({}, e) : {
          complete: n || !n && t || Q.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !Q.isFunction(t) && t
      };
      return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default,
      null != r.queue && r.queue !== !0 || (r.queue = "fx"),
      r.old = r.complete,
      r.complete = function() {
          Q.isFunction(r.old) && r.old.call(this),
          r.queue && Q.dequeue(this, r.queue)
      }
      ,
      r
  }
  ,
  Q.fn.extend({
      fadeTo: function(e, t, n, r) {
          return this.filter(ke).css("opacity", 0).show().end().animate({
              opacity: t
          }, e, n, r)
      },
      animate: function(e, t, n, r) {
          var o = Q.isEmptyObject(e)
            , i = Q.speed(t, n, r)
            , s = function() {
              var t = L(this, Q.extend({}, e), i);
              (o || ve.get(this, "finish")) && t.stop(!0)
          };
          return s.finish = s,
          o || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
      },
      stop: function(e, t, n) {
          var r = function(e) {
              var t = e.stop;
              delete e.stop,
              t(n)
          };
          return "string" != typeof e && (n = t,
          t = e,
          e = void 0),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function() {
              var t = !0
                , o = null != e && e + "queueHooks"
                , i = Q.timers
                , s = ve.get(this);
              if (o)
                  s[o] && s[o].stop && r(s[o]);
              else
                  for (o in s)
                      s[o] && s[o].stop && et.test(o) && r(s[o]);
              for (o = i.length; o--; )
                  i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                  t = !1,
                  i.splice(o, 1));
              !t && n || Q.dequeue(this, e)
          })
      },
      finish: function(e) {
          return e !== !1 && (e = e || "fx"),
          this.each(function() {
              var t, n = ve.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = Q.timers, s = r ? r.length : 0;
              for (n.finish = !0,
              Q.queue(this, e, []),
              o && o.stop && o.stop.call(this, !0),
              t = i.length; t--; )
                  i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                  i.splice(t, 1));
              for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish
          })
      }
  }),
  Q.each(["toggle", "show", "hide"], function(e, t) {
      var n = Q.fn[t];
      Q.fn[t] = function(e, r, o) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, o)
      }
  }),
  Q.each({
      slideDown: z("show"),
      slideUp: z("hide"),
      slideToggle: z("toggle"),
      fadeIn: {
          opacity: "show"
      },
      fadeOut: {
          opacity: "hide"
      },
      fadeToggle: {
          opacity: "toggle"
      }
  }, function(e, t) {
      Q.fn[e] = function(e, n, r) {
          return this.animate(t, e, n, r)
      }
  }),
  Q.timers = [],
  Q.fx.tick = function() {
      var e, t = 0, n = Q.timers;
      for (Ve = Q.now(); t < n.length; t++)
          e = n[t],
          e() || n[t] !== e || n.splice(t--, 1);
      n.length || Q.fx.stop(),
      Ve = void 0
  }
  ,
  Q.fx.timer = function(e) {
      Q.timers.push(e),
      e() ? Q.fx.start() : Q.timers.pop()
  }
  ,
  Q.fx.interval = 13,
  Q.fx.start = function() {
      Ze || (Ze = setInterval(Q.fx.tick, Q.fx.interval))
  }
  ,
  Q.fx.stop = function() {
      clearInterval(Ze),
      Ze = null
  }
  ,
  Q.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
  },
  Q.fn.delay = function(e, t) {
      return e = Q.fx ? Q.fx.speeds[e] || e : e,
      t = t || "fx",
      this.queue(t, function(t, n) {
          var r = setTimeout(t, e);
          n.stop = function() {
              clearTimeout(r)
          }
      })
  }
  ,
  function() {
      var e = Z.createElement("input")
        , t = Z.createElement("select")
        , n = t.appendChild(Z.createElement("option"));
      e.type = "checkbox",
      V.checkOn = "" !== e.value,
      V.optSelected = n.selected,
      t.disabled = !0,
      V.optDisabled = !n.disabled,
      e = Z.createElement("input"),
      e.value = "t",
      e.type = "radio",
      V.radioValue = "t" === e.value
  }();
  var rt, ot, it = Q.expr.attrHandle;
  Q.fn.extend({
      attr: function(e, t) {
          return me(this, Q.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              Q.removeAttr(this, e)
          })
      }
  }),
  Q.extend({
      attr: function(e, t, n) {
          var r, o, i = e.nodeType;
          if (e && 3 !== i && 8 !== i && 2 !== i)
              return typeof e.getAttribute === Te ? Q.prop(e, t, n) : (1 === i && Q.isXMLDoc(e) || (t = t.toLowerCase(),
              r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? ot : rt)),
              void 0 === n ? r && "get"in r && null !== (o = r.get(e, t)) ? o : (o = Q.find.attr(e, t),
              null == o ? void 0 : o) : null !== n ? r && "set"in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
              n) : void Q.removeAttr(e, t))
      },
      removeAttr: function(e, t) {
          var n, r, o = 0, i = t && t.match(pe);
          if (i && 1 === e.nodeType)
              for (; n = i[o++]; )
                  r = Q.propFix[n] || n,
                  Q.expr.match.bool.test(n) && (e[r] = !1),
                  e.removeAttribute(n)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!V.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t),
                      n && (e.value = n),
                      t
                  }
              }
          }
      }
  }),
  ot = {
      set: function(e, t, n) {
          return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n),
          n
      }
  },
  Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = it[t] || Q.find.attr;
      it[t] = function(e, t, r) {
          var o, i;
          return r || (i = it[t],
          it[t] = o,
          o = null != n(e, t, r) ? t.toLowerCase() : null,
          it[t] = i),
          o
      }
  });
  var st = /^(?:input|select|textarea|button)$/i;
  Q.fn.extend({
      prop: function(e, t) {
          return me(this, Q.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[Q.propFix[e] || e]
          })
      }
  }),
  Q.extend({
      propFix: {
          "for": "htmlFor",
          "class": "className"
      },
      prop: function(e, t, n) {
          var r, o, i, s = e.nodeType;
          if (e && 3 !== s && 8 !== s && 2 !== s)
              return i = 1 !== s || !Q.isXMLDoc(e),
              i && (t = Q.propFix[t] || t,
              o = Q.propHooks[t]),
              void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
              }
          }
      }
  }),
  V.optSelected || (Q.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex,
          null
      }
  }),
  Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      Q.propFix[this.toLowerCase()] = this
  });
  var at = /[\t\r\n\f]/g;
  Q.fn.extend({
      addClass: function(e) {
          var t, n, r, o, i, s, a = "string" == typeof e && e, l = 0, c = this.length;
          if (Q.isFunction(e))
              return this.each(function(t) {
                  Q(this).addClass(e.call(this, t, this.className))
              });
          if (a)
              for (t = (e || "").match(pe) || []; l < c; l++)
                  if (n = this[l],
                  r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                      for (i = 0; o = t[i++]; )
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      s = Q.trim(r),
                      n.className !== s && (n.className = s)
                  }
          return this
      },
      removeClass: function(e) {
          var t, n, r, o, i, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
          if (Q.isFunction(e))
              return this.each(function(t) {
                  Q(this).removeClass(e.call(this, t, this.className))
              });
          if (a)
              for (t = (e || "").match(pe) || []; l < c; l++)
                  if (n = this[l],
                  r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                      for (i = 0; o = t[i++]; )
                          for (; r.indexOf(" " + o + " ") >= 0; )
                              r = r.replace(" " + o + " ", " ");
                      s = e ? Q.trim(r) : "",
                      n.className !== s && (n.className = s)
                  }
          return this
      },
      toggleClass: function(e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
              Q(this).toggleClass(e.call(this, n, this.className, t), t)
          }) : this.each(function() {
              if ("string" === n)
                  for (var t, r = 0, o = Q(this), i = e.match(pe) || []; t = i[r++]; )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                  n !== Te && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className),
                  this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
          })
      },
      hasClass: function(e) {
          for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
              if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)
                  return !0;
          return !1
      }
  });
  var lt = /\r/g;
  Q.fn.extend({
      val: function(e) {
          var t, n, r, o = this[0];
          {
              if (arguments.length)
                  return r = Q.isFunction(e),
                  this.each(function(n) {
                      var o;
                      1 === this.nodeType && (o = r ? e.call(this, n, Q(this).val()) : e,
                      null == o ? o = "" : "number" == typeof o ? o += "" : Q.isArray(o) && (o = Q.map(o, function(e) {
                          return null == e ? "" : e + ""
                      })),
                      t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()],
                      t && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                  });
              if (o)
                  return t = Q.valHooks[o.type] || Q.valHooks[o.nodeName.toLowerCase()],
                  t && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value,
                  "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
          }
      }
  }),
  Q.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = Q.find.attr(e, "value");
                  return null != t ? t : Q.trim(Q.text(e))
              }
          },
          select: {
              get: function(e) {
                  for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || o < 0, s = i ? null : [], a = i ? o + 1 : r.length, l = o < 0 ? a : i ? o : 0; l < a; l++)
                      if (n = r[l],
                      (n.selected || l === o) && (V.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                          if (t = Q(n).val(),
                          i)
                              return t;
                          s.push(t)
                      }
                  return s
              },
              set: function(e, t) {
                  for (var n, r, o = e.options, i = Q.makeArray(t), s = o.length; s--; )
                      r = o[s],
                      (r.selected = Q.inArray(r.value, i) >= 0) && (n = !0);
                  return n || (e.selectedIndex = -1),
                  i
              }
          }
      }
  }),
  Q.each(["radio", "checkbox"], function() {
      Q.valHooks[this] = {
          set: function(e, t) {
              if (Q.isArray(t))
                  return e.checked = Q.inArray(Q(e).val(), t) >= 0
          }
      },
      V.checkOn || (Q.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      }
      )
  }),
  Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      Q.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }),
  Q.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      },
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  });
  var ct = Q.now()
    , ut = /\?/;
  Q.parseJSON = function(e) {
      return JSON.parse(e + "")
  }
  ,
  Q.parseXML = function(e) {
      var t, n;
      if (!e || "string" != typeof e)
          return null;
      try {
          n = new DOMParser,
          t = n.parseFromString(e, "text/xml")
      } catch (r) {
          t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + e),
      t
  }
  ;
  var ft = /#.*$/
    , ht = /([?&])_=[^&]*/
    , pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
    , dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
    , gt = /^(?:GET|HEAD)$/
    , mt = /^\/\//
    , vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
    , yt = {}
    , bt = {}
    , wt = "*/".concat("*")
    , xt = e.location.href
    , _t = vt.exec(xt.toLowerCase()) || [];
  Q.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: xt,
          type: "GET",
          isLocal: dt.test(_t[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": wt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /xml/,
              html: /html/,
              json: /json/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": Q.parseJSON,
              "text xml": Q.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? H(H(e, Q.ajaxSettings), t) : H(Q.ajaxSettings, e)
      },
      ajaxPrefilter: D(yt),
      ajaxTransport: D(bt),
      ajax: function(e, t) {
          function n(e, t, n, s) {
              var l, u, v, y, w, _ = t;
              2 !== b && (b = 2,
              a && clearTimeout(a),
              r = void 0,
              i = s || "",
              x.readyState = e > 0 ? 4 : 0,
              l = e >= 200 && e < 300 || 304 === e,
              n && (y = R(f, x, n)),
              y = F(f, y, x, l),
              l ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"),
              w && (Q.lastModified[o] = w),
              w = x.getResponseHeader("etag"),
              w && (Q.etag[o] = w)),
              204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state,
              u = y.data,
              v = y.error,
              l = !v)) : (v = _,
              !e && _ || (_ = "error",
              e < 0 && (e = 0))),
              x.status = e,
              x.statusText = (t || _) + "",
              l ? d.resolveWith(h, [u, _, x]) : d.rejectWith(h, [x, _, v]),
              x.statusCode(m),
              m = void 0,
              c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? u : v]),
              g.fireWith(h, [x, _]),
              c && (p.trigger("ajaxComplete", [x, f]),
              --Q.active || Q.event.trigger("ajaxStop")))
          }
          "object" == typeof e && (t = e,
          e = void 0),
          t = t || {};
          var r, o, i, s, a, l, c, u, f = Q.ajaxSetup({}, t), h = f.context || f, p = f.context && (h.nodeType || h.jquery) ? Q(h) : Q.event, d = Q.Deferred(), g = Q.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
              readyState: 0,
              getResponseHeader: function(e) {
                  var t;
                  if (2 === b) {
                      if (!s)
                          for (s = {}; t = pt.exec(i); )
                              s[t[1].toLowerCase()] = t[2];
                      t = s[e.toLowerCase()]
                  }
                  return null == t ? null : t
              },
              getAllResponseHeaders: function() {
                  return 2 === b ? i : null
              },
              setRequestHeader: function(e, t) {
                  var n = e.toLowerCase();
                  return b || (e = y[n] = y[n] || e,
                  v[e] = t),
                  this
              },
              overrideMimeType: function(e) {
                  return b || (f.mimeType = e),
                  this
              },
              statusCode: function(e) {
                  var t;
                  if (e)
                      if (b < 2)
                          for (t in e)
                              m[t] = [m[t], e[t]];
                      else
                          x.always(e[x.status]);
                  return this
              },
              abort: function(e) {
                  var t = e || w;
                  return r && r.abort(t),
                  n(0, t),
                  this
              }
          };
          if (d.promise(x).complete = g.add,
          x.success = x.done,
          x.error = x.fail,
          f.url = ((e || f.url || xt) + "").replace(ft, "").replace(mt, _t[1] + "//"),
          f.type = t.method || t.type || f.method || f.type,
          f.dataTypes = Q.trim(f.dataType || "*").toLowerCase().match(pe) || [""],
          null == f.crossDomain && (l = vt.exec(f.url.toLowerCase()),
          f.crossDomain = !(!l || l[1] === _t[1] && l[2] === _t[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))),
          f.data && f.processData && "string" != typeof f.data && (f.data = Q.param(f.data, f.traditional)),
          I(yt, f, t, x),
          2 === b)
              return x;
          c = Q.event && f.global,
          c && 0 === Q.active++ && Q.event.trigger("ajaxStart"),
          f.type = f.type.toUpperCase(),
          f.hasContent = !gt.test(f.type),
          o = f.url,
          f.hasContent || (f.data && (o = f.url += (ut.test(o) ? "&" : "?") + f.data,
          delete f.data),
          f.cache === !1 && (f.url = ht.test(o) ? o.replace(ht, "$1_=" + ct++) : o + (ut.test(o) ? "&" : "?") + "_=" + ct++)),
          f.ifModified && (Q.lastModified[o] && x.setRequestHeader("If-Modified-Since", Q.lastModified[o]),
          Q.etag[o] && x.setRequestHeader("If-None-Match", Q.etag[o])),
          (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType),
          x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : f.accepts["*"]);
          for (u in f.headers)
              x.setRequestHeader(u, f.headers[u]);
          if (f.beforeSend && (f.beforeSend.call(h, x, f) === !1 || 2 === b))
              return x.abort();
          w = "abort";
          for (u in {
              success: 1,
              error: 1,
              complete: 1
          })
              x[u](f[u]);
          if (r = I(bt, f, t, x)) {
              x.readyState = 1,
              c && p.trigger("ajaxSend", [x, f]),
              f.async && f.timeout > 0 && (a = setTimeout(function() {
                  x.abort("timeout")
              }, f.timeout));
              try {
                  b = 1,
                  r.send(v, n)
              } catch (_) {
                  if (!(b < 2))
                      throw _;
                  n(-1, _)
              }
          } else
              n(-1, "No Transport");
          return x
      },
      getJSON: function(e, t, n) {
          return Q.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return Q.get(e, void 0, t, "script")
      }
  }),
  Q.each(["get", "post"], function(e, t) {
      Q[t] = function(e, n, r, o) {
          return Q.isFunction(n) && (o = o || r,
          r = n,
          n = void 0),
          Q.ajax({
              url: e,
              type: t,
              dataType: o,
              data: n,
              success: r
          })
      }
  }),
  Q._evalUrl = function(e) {
      return Q.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          "throws": !0
      })
  }
  ,
  Q.fn.extend({
      wrapAll: function(e) {
          var t;
          return Q.isFunction(e) ? this.each(function(t) {
              Q(this).wrapAll(e.call(this, t))
          }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0),
          this[0].parentNode && t.insertBefore(this[0]),
          t.map(function() {
              for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
              return e
          }).append(this)),
          this)
      },
      wrapInner: function(e) {
          return Q.isFunction(e) ? this.each(function(t) {
              Q(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = Q(this)
                , n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = Q.isFunction(e);
          return this.each(function(n) {
              Q(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function() {
          return this.parent().each(function() {
              Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
          }).end()
      }
  }),
  Q.expr.filters.hidden = function(e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }
  ,
  Q.expr.filters.visible = function(e) {
      return !Q.expr.filters.hidden(e)
  }
  ;
  var kt = /%20/g
    , St = /\[\]$/
    , Tt = /\r?\n/g
    , Ct = /^(?:submit|button|image|reset|file)$/i
    , Mt = /^(?:input|select|textarea|keygen)/i;
  Q.param = function(e, t) {
      var n, r = [], o = function(e, t) {
          t = Q.isFunction(t) ? t() : null == t ? "" : t,
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional),
      Q.isArray(e) || e.jquery && !Q.isPlainObject(e))
          Q.each(e, function() {
              o(this.name, this.value)
          });
      else
          for (n in e)
              P(n, e[n], t, o);
      return r.join("&").replace(kt, "+")
  }
  ,
  Q.fn.extend({
      serialize: function() {
          return Q.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = Q.prop(this, "elements");
              return e ? Q.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !Q(this).is(":disabled") && Mt.test(this.nodeName) && !Ct.test(e) && (this.checked || !Se.test(e))
          }).map(function(e, t) {
              var n = Q(this).val();
              return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Tt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Tt, "\r\n")
              }
          }).get()
      }
  }),
  Q.ajaxSettings.xhr = function() {
      try {
          return new XMLHttpRequest
      } catch (e) {}
  }
  ;
  var Et = 0
    , At = {}
    , zt = {
      0: 200,
      1223: 204
  }
    , Nt = Q.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
      for (var e in At)
          At[e]()
  }),
  V.cors = !!Nt && "withCredentials"in Nt,
  V.ajax = Nt = !!Nt,
  Q.ajaxTransport(function(e) {
      var t;
      if (V.cors || Nt && !e.crossDomain)
          return {
              send: function(n, r) {
                  var o, i = e.xhr(), s = ++Et;
                  if (i.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                      for (o in e.xhrFields)
                          i[o] = e.xhrFields[o];
                  e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType),
                  e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                  for (o in n)
                      i.setRequestHeader(o, n[o]);
                  t = function(e) {
                      return function() {
                          t && (delete At[s],
                          t = i.onload = i.onerror = null,
                          "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(zt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                              text: i.responseText
                          } : void 0, i.getAllResponseHeaders()))
                      }
                  }
                  ,
                  i.onload = t(),
                  i.onerror = t("error"),
                  t = At[s] = t("abort");
                  try {
                      i.send(e.hasContent && e.data || null)
                  } catch (a) {
                      if (t)
                          throw a
                  }
              },
              abort: function() {
                  t && t()
              }
          }
  }),
  Q.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /(?:java|ecma)script/
      },
      converters: {
          "text script": function(e) {
              return Q.globalEval(e),
              e
          }
      }
  }),
  Q.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1),
      e.crossDomain && (e.type = "GET")
  }),
  Q.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(r, o) {
                  t = Q("<script>").prop({
                      async: !0,
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(),
                      n = null,
                      e && o("error" === e.type ? 404 : 200, e.type)
                  }
                  ),
                  Z.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var jt = []
    , Ot = /(=)\?(?=&|$)|\?\?/;
  Q.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = jt.pop() || Q.expando + "_" + ct++;
          return this[e] = !0,
          e
      }
  }),
  Q.ajaxPrefilter("json jsonp", function(t, n, r) {
      var o, i, s, a = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0])
          return o = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
          a ? t[a] = t[a].replace(Ot, "$1" + o) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          t.converters["script json"] = function() {
              return s || Q.error(o + " was not called"),
              s[0]
          }
          ,
          t.dataTypes[0] = "json",
          i = e[o],
          e[o] = function() {
              s = arguments
          }
          ,
          r.always(function() {
              e[o] = i,
              t[o] && (t.jsonpCallback = n.jsonpCallback,
              jt.push(o)),
              s && Q.isFunction(i) && i(s[0]),
              s = i = void 0
          }),
          "script"
  }),
  Q.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e)
          return null;
      "boolean" == typeof t && (n = t,
      t = !1),
      t = t || Z;
      var r = se.exec(e)
        , o = !n && [];
      return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, o),
      o && o.length && Q(o).remove(),
      Q.merge([], r.childNodes))
  }
  ;
  var Lt = Q.fn.load;
  Q.fn.load = function(e, t, n) {
      if ("string" != typeof e && Lt)
          return Lt.apply(this, arguments);
      var r, o, i, s = this, a = e.indexOf(" ");
      return a >= 0 && (r = Q.trim(e.slice(a)),
      e = e.slice(0, a)),
      Q.isFunction(t) ? (n = t,
      t = void 0) : t && "object" == typeof t && (o = "POST"),
      s.length > 0 && Q.ajax({
          url: e,
          type: o,
          dataType: "html",
          data: t
      }).done(function(e) {
          i = arguments,
          s.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
      }).complete(n && function(e, t) {
          s.each(n, i || [e.responseText, t, e])
      }
      ),
      this
  }
  ,
  Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      Q.fn[t] = function(e) {
          return this.on(t, e)
      }
  }),
  Q.expr.filters.animated = function(e) {
      return Q.grep(Q.timers, function(t) {
          return e === t.elem
      }).length
  }
  ;
  var Dt = e.document.documentElement;
  Q.offset = {
      setOffset: function(e, t, n) {
          var r, o, i, s, a, l, c, u = Q.css(e, "position"), f = Q(e), h = {};
          "static" === u && (e.style.position = "relative"),
          a = f.offset(),
          i = Q.css(e, "top"),
          l = Q.css(e, "left"),
          c = ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1,
          c ? (r = f.position(),
          s = r.top,
          o = r.left) : (s = parseFloat(i) || 0,
          o = parseFloat(l) || 0),
          Q.isFunction(t) && (t = t.call(e, n, a)),
          null != t.top && (h.top = t.top - a.top + s),
          null != t.left && (h.left = t.left - a.left + o),
          "using"in t ? t.using.call(e, h) : f.css(h)
      }
  },
  Q.fn.extend({
      offset: function(e) {
          if (arguments.length)
              return void 0 === e ? this : this.each(function(t) {
                  Q.offset.setOffset(this, e, t)
              });
          var t, n, r = this[0], o = {
              top: 0,
              left: 0
          }, i = r && r.ownerDocument;
          if (i)
              return t = i.documentElement,
              Q.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (o = r.getBoundingClientRect()),
              n = q(i),
              {
                  top: o.top + n.pageYOffset - t.clientTop,
                  left: o.left + n.pageXOffset - t.clientLeft
              }) : o
      },
      position: function() {
          if (this[0]) {
              var e, t, n = this[0], r = {
                  top: 0,
                  left: 0
              };
              return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
              t = this.offset(),
              Q.nodeName(e[0], "html") || (r = e.offset()),
              r.top += Q.css(e[0], "borderTopWidth", !0),
              r.left += Q.css(e[0], "borderLeftWidth", !0)),
              {
                  top: t.top - r.top - Q.css(n, "marginTop", !0),
                  left: t.left - r.left - Q.css(n, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              for (var e = this.offsetParent || Dt; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position"); )
                  e = e.offsetParent;
              return e || Dt
          })
      }
  }),
  Q.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(t, n) {
      var r = "pageYOffset" === n;
      Q.fn[t] = function(o) {
          return me(this, function(t, o, i) {
              var s = q(t);
              return void 0 === i ? s ? s[n] : t[o] : void (s ? s.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i)
          }, t, o, arguments.length, null)
      }
  }),
  Q.each(["top", "left"], function(e, t) {
      Q.cssHooks[t] = _(V.pixelPosition, function(e, n) {
          if (n)
              return n = x(e, t),
              Be.test(n) ? Q(e).position()[t] + "px" : n
      })
  }),
  Q.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      Q.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          Q.fn[r] = function(r, o) {
              var i = arguments.length && (n || "boolean" != typeof r)
                , s = n || (r === !0 || o === !0 ? "margin" : "border");
              return me(this, function(t, n, r) {
                  var o;
                  return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                  Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? Q.css(t, n, s) : Q.style(t, n, r, s)
              }, t, i ? r : void 0, i, null)
          }
      })
  }),
  Q.fn.size = function() {
      return this.length
  }
  ,
  Q.fn.andSelf = Q.fn.addBack,
  "function" == typeof define && define.amd && define("jquery", [], function() {
      return Q
  });
  var It = e.jQuery
    , Ht = e.$;
  return Q.noConflict = function(t) {
      return e.$ === Q && (e.$ = Ht),
      t && e.jQuery === Q && (e.jQuery = It),
      Q
  }
  ,
  typeof t === Te && (e.jQuery = e.$ = Q),
  Q
}),
function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  function t() {
      var e = document.getElementsByTagName("script")
        , t = e.length ? e[e.length - 1].src.split("?")[0] : "";
      return t.split("/").length > 0 ? t.split("/").slice(0, -1).join("/") + "/" : ""
  }
  function n(e, t, n) {
      for (var r = 0; r < t.length; r++)
          n(e, t[r])
  }
  var r = !1
    , o = !1
    , i = 0
    , s = 2e3
    , a = 0
    , l = e
    , c = ["webkit", "ms", "moz", "o"]
    , u = window.requestAnimationFrame || !1
    , f = window.cancelAnimationFrame || !1;
  if (!u)
      for (var h in c) {
          var p = c[h];
          if (u = window[p + "RequestAnimationFrame"]) {
              f = window[p + "CancelAnimationFrame"] || window[p + "CancelRequestAnimationFrame"];
              break
          }
      }
  var d = window.MutationObserver || window.WebKitMutationObserver || !1
    , g = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#bbb",
      cursorwidth: "8px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
      },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: .3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: t(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1
  }
    , m = !1
    , v = function() {
      function e() {
          var e = ["grab", "-webkit-grab", "-moz-grab"];
          (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
          for (var t = 0; t < e.length; t++) {
              var r = e[t];
              if (n.cursor = r,
              n.cursor == r)
                  return r
          }
          return "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
      }
      if (m)
          return m;
      var t = document.createElement("DIV")
        , n = t.style
        , r = navigator.userAgent
        , o = navigator.platform
        , i = {};
      i.haspointerlock = "pointerLockElement"in document || "webkitPointerLockElement"in document || "mozPointerLockElement"in document,
      i.isopera = "opera"in window,
      i.isopera12 = i.isopera && "getUserMedia"in navigator,
      i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
      i.isie = "all"in document && "attachEvent"in t && !i.isopera,
      i.isieold = i.isie && !("msInterpolationMode"in n),
      i.isie7 = i.isie && !i.isieold && (!("documentMode"in document) || 7 == document.documentMode),
      i.isie8 = i.isie && "documentMode"in document && 8 == document.documentMode,
      i.isie9 = i.isie && "performance"in window && 9 == document.documentMode,
      i.isie10 = i.isie && "performance"in window && 10 == document.documentMode,
      i.isie11 = "msRequestFullscreen"in t && document.documentMode >= 11,
      i.isieedge12 = navigator.userAgent.match(/Edge\/12\./),
      i.isieedge = "msOverflowStyle"in t,
      i.ismodernie = i.isie11 || i.isieedge,
      i.isie9mobile = /iemobile.9/i.test(r),
      i.isie9mobile && (i.isie9 = !1),
      i.isie7mobile = !i.isie9mobile && i.isie7 && /iemobile/i.test(r),
      i.ismozilla = "MozAppearance"in n,
      i.iswebkit = "WebkitAppearance"in n,
      i.ischrome = "chrome"in window,
      i.ischrome38 = i.ischrome && "touchAction"in n,
      i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock,
      i.ischrome26 = !i.ischrome38 && i.ischrome && "transition"in n,
      i.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window,
      i.hasw3ctouch = (window.PointerEvent || !1) && (navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
      i.hasmstouch = !i.hasw3ctouch && (window.MSPointerEvent || !1),
      i.ismac = /^mac$/i.test(o),
      i.isios = i.cantouch && /iphone|ipad|ipod/i.test(o),
      i.isios4 = i.isios && !("seal"in Object),
      i.isios7 = i.isios && "webkitHidden"in document,
      i.isios8 = i.isios && "hidden"in document,
      i.isandroid = /android/i.test(r),
      i.haseventlistener = "addEventListener"in t,
      i.trstyle = !1,
      i.hastransform = !1,
      i.hastranslate3d = !1,
      i.transitionstyle = !1,
      i.hastransition = !1,
      i.transitionend = !1;
      var s, a = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
      for (s = 0; s < a.length; s++)
          if (void 0 !== n[a[s]]) {
              i.trstyle = a[s];
              break
          }
      i.hastransform = !!i.trstyle,
      i.hastransform && (n[i.trstyle] = "translate3d(1px,2px,3px)",
      i.hastranslate3d = /translate3d/.test(n[i.trstyle])),
      i.transitionstyle = !1,
      i.prefixstyle = "",
      i.transitionend = !1,
      a = ["transition", "webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"];
      var l = ["", "-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"]
        , c = ["transitionend", "webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"];
      for (s = 0; s < a.length; s++)
          if (a[s]in n) {
              i.transitionstyle = a[s],
              i.prefixstyle = l[s],
              i.transitionend = c[s];
              break
          }
      return i.ischrome26 && (i.prefixstyle = l[1]),
      i.hastransition = i.transitionstyle,
      i.cursorgrabvalue = e(),
      i.hasmousecapture = "setCapture"in t,
      i.hasMutationObserver = d !== !1,
      t = null,
      m = i,
      i
  }
    , y = function(e, t) {
      function n() {
          var e = y.doc.css(k.trstyle);
          return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
      }
      function c() {
          var e = y.win;
          if ("zIndex"in e)
              return e.zIndex();
          for (; e.length > 0; ) {
              if (9 == e[0].nodeType)
                  return !1;
              var t = e.css("zIndex");
              if (!isNaN(t) && 0 != t)
                  return parseInt(t);
              e = e.parent()
          }
          return !1
      }
      function h(e, t, n) {
          var r = e.css(t)
            , o = parseFloat(r);
          if (isNaN(o)) {
              o = M[r] || 0;
              var i = 3 == o ? n ? y.win.outerHeight() - y.win.innerHeight() : y.win.outerWidth() - y.win.innerWidth() : 1;
              return y.isie8 && o && (o += 1),
              i ? o : 0
          }
          return o
      }
      function p(e, t, n, r) {
          y._bind(e, t, function(r) {
              var r = r ? r : window.event
                , o = {
                  original: r,
                  target: r.target || r.srcElement,
                  type: "wheel",
                  deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                  deltaX: 0,
                  deltaZ: 0,
                  preventDefault: function() {
                      return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
                      !1
                  },
                  stopImmediatePropagation: function() {
                      r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                  }
              };
              return "mousewheel" == t ? (r.wheelDeltaX && (o.deltaX = -.025 * r.wheelDeltaX),
              r.wheelDeltaY && (o.deltaY = -.025 * r.wheelDeltaY),
              !o.deltaY && !o.deltaX && (o.deltaY = -.025 * r.wheelDelta)) : o.deltaY = r.detail,
              n.call(e, o)
          }, r)
      }
      function m(e, t, n) {
          var r, o;
          if (0 == e.deltaMode ? (r = -Math.floor(e.deltaX * (y.opt.mousescrollstep / 54)),
          o = -Math.floor(e.deltaY * (y.opt.mousescrollstep / 54))) : 1 == e.deltaMode && (r = -Math.floor(e.deltaX * y.opt.mousescrollstep),
          o = -Math.floor(e.deltaY * y.opt.mousescrollstep)),
          t && y.opt.oneaxismousemode && 0 == r && o && (r = o,
          o = 0,
          n)) {
              var i = r < 0 ? y.getScrollLeft() >= y.page.maxw : y.getScrollLeft() <= 0;
              i && (o = r,
              r = 0)
          }
          if (y.isrtlmode && (r = -r),
          r && (y.scrollmom && y.scrollmom.stop(),
          y.lastdeltax += r,
          y.debounced("mousewheelx", function() {
              var e = y.lastdeltax;
              y.lastdeltax = 0,
              y.rail.drag || y.doScrollLeftBy(e)
          }, 15)),
          o) {
              if (y.opt.nativeparentscrolling && n && !y.ispage && !y.zoomactive)
                  if (o < 0) {
                      if (y.getScrollTop() >= y.page.maxh)
                          return !0
                  } else if (y.getScrollTop() <= 0)
                      return !0;
              y.scrollmom && y.scrollmom.stop(),
              y.lastdeltay += o,
              y.synched("mousewheely", function() {
                  var e = y.lastdeltay;
                  y.lastdeltay = 0,
                  y.rail.drag || y.doScrollBy(e)
              }, 15)
          }
          return e.stopImmediatePropagation(),
          e.preventDefault()
      }
      var y = this;
      if (this.version = "3.6.8",
      this.name = "nicescroll",
      this.me = t,
      this.opt = {
          doc: l("body"),
          win: !1
      },
      l.extend(this.opt, g),
      this.opt.snapbackspeed = 80,
      e)
          for (var w in y.opt)
              void 0 !== e[w] && (y.opt[w] = e[w]);
      if (y.opt.disablemutationobserver && (d = !1),
      this.doc = y.opt.doc,
      this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "",
      this.ispage = /^BODY|HTML/.test(y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName),
      this.haswrapper = y.opt.win !== !1,
      this.win = y.opt.win || (this.ispage ? l(window) : this.doc),
      this.docscroll = this.ispage && !this.haswrapper ? l(window) : this.win,
      this.body = l("body"),
      this.viewport = !1,
      this.isfixed = !1,
      this.iframe = !1,
      this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
      this.istextarea = "TEXTAREA" == this.win[0].nodeName,
      this.forcescreen = !1,
      this.canshowonmouseevent = "scroll" != y.opt.autohidemode,
      this.onmousedown = !1,
      this.onmouseup = !1,
      this.onmousemove = !1,
      this.onmousewheel = !1,
      this.onkeypress = !1,
      this.ongesturezoom = !1,
      this.onclick = !1,
      this.onscrollstart = !1,
      this.onscrollend = !1,
      this.onscrollcancel = !1,
      this.onzoomin = !1,
      this.onzoomout = !1,
      this.view = !1,
      this.page = !1,
      this.scroll = {
          x: 0,
          y: 0
      },
      this.scrollratio = {
          x: 0,
          y: 0
      },
      this.cursorheight = 20,
      this.scrollvaluemax = 0,
      "auto" == this.opt.rtlmode) {
          var x = this.win[0] == window ? this.body : this.win
            , _ = x.css("writing-mode") || x.css("-webkit-writing-mode") || x.css("-ms-writing-mode") || x.css("-moz-writing-mode");
          "horizontal-tb" == _ || "lr-tb" == _ || "" == _ ? (this.isrtlmode = "rtl" == x.css("direction"),
          this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == _ || "tb" == _ || "tb-rl" == _ || "rl-tb" == _,
          this.isvertical = "vertical-rl" == _ || "tb" == _ || "tb-rl" == _)
      } else
          this.isrtlmode = this.opt.rtlmode === !0,
          this.isvertical = !1;
      this.scrollrunning = !1,
      this.scrollmom = !1,
      this.observer = !1,
      this.observerremover = !1,
      this.observerbody = !1;
      do
          this.id = "ascrail" + s++;
      while (document.getElementById(this.id));
      this.rail = !1,
      this.cursor = !1,
      this.cursorfreezed = !1,
      this.selectiondrag = !1,
      this.zoom = !1,
      this.zoomactive = !1,
      this.hasfocus = !1,
      this.hasmousefocus = !1,
      this.visibility = !0,
      this.railslocked = !1,
      this.locked = !1,
      this.hidden = !1,
      this.cursoractive = !0,
      this.wheelprevented = !1,
      this.overflowx = y.opt.overflowx,
      this.overflowy = y.opt.overflowy,
      this.nativescrollingarea = !1,
      this.checkarea = 0,
      this.events = [],
      this.saved = {},
      this.delaylist = {},
      this.synclist = {},
      this.lastdeltax = 0,
      this.lastdeltay = 0,
      this.detected = v();
      var k = l.extend({}, this.detected);
      this.canhwscroll = k.hastransform && y.opt.hwacceleration,
      this.ishwscroll = this.canhwscroll && y.haswrapper,
      this.isrtlmode ? this.isvertical ? this.hasreversehr = !(k.iswebkit || k.isie || k.isie11) : this.hasreversehr = !(k.iswebkit || k.isie && !k.isie10 && !k.isie11) : this.hasreversehr = !1,
      this.istouchcapable = !1,
      k.cantouch || !k.hasw3ctouch && !k.hasmstouch ? !k.cantouch || k.isios || k.isandroid || !k.iswebkit && !k.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0,
      y.opt.enablemouselockapi || (k.hasmousecapture = !1,
      k.haspointerlock = !1),
      this.debounced = function(e, t, n) {
          if (y) {
              var r = y.delaylist[e] || !1;
              r || (y.delaylist[e] = {
                  h: u(function() {
                      y.delaylist[e].fn.call(y),
                      y.delaylist[e] = !1
                  }, n)
              },
              t.call(y)),
              y.delaylist[e].fn = t
          }
      }
      ;
      var S = !1;
      this.synched = function(e, t) {
          function n() {
              S || (u(function() {
                  if (y) {
                      S = !1;
                      for (var e in y.synclist) {
                          var t = y.synclist[e];
                          t && t.call(y),
                          y.synclist[e] = !1
                      }
                  }
              }),
              S = !0)
          }
          return y.synclist[e] = t,
          n(),
          e
      }
      ,
      this.unsynched = function(e) {
          y.synclist[e] && (y.synclist[e] = !1)
      }
      ,
      this.css = function(e, t) {
          for (var n in t)
              y.saved.css.push([e, n, e.css(n)]),
              e.css(n, t[n])
      }
      ,
      this.scrollTop = function(e) {
          return void 0 === e ? y.getScrollTop() : y.setScrollTop(e)
      }
      ,
      this.scrollLeft = function(e) {
          return void 0 === e ? y.getScrollLeft() : y.setScrollLeft(e)
      }
      ;
      var T = function(e, t, n, r, o, i, s) {
          this.st = e,
          this.ed = t,
          this.spd = n,
          this.p1 = r || 0,
          this.p2 = o || 1,
          this.p3 = i || 0,
          this.p4 = s || 1,
          this.ts = (new Date).getTime(),
          this.df = this.ed - this.st
      };
      if (T.prototype = {
          B2: function(e) {
              return 3 * e * e * (1 - e)
          },
          B3: function(e) {
              return 3 * e * (1 - e) * (1 - e)
          },
          B4: function(e) {
              return (1 - e) * (1 - e) * (1 - e)
          },
          getNow: function() {
              var e = (new Date).getTime()
                , t = 1 - (e - this.ts) / this.spd
                , n = this.B2(t) + this.B3(t) + this.B4(t);
              return t < 0 ? this.ed : this.st + Math.round(this.df * n)
          },
          update: function(e, t) {
              return this.st = this.getNow(),
              this.ed = e,
              this.spd = t,
              this.ts = (new Date).getTime(),
              this.df = this.ed - this.st,
              this
          }
      },
      this.ishwscroll) {
          this.doc.translate = {
              x: 0,
              y: 0,
              tx: "0px",
              ty: "0px"
          },
          k.hastranslate3d && k.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
          this.getScrollTop = function(e) {
              if (!e) {
                  var t = n();
                  if (t)
                      return 16 == t.length ? -t[13] : -t[5];
                  if (y.timerscroll && y.timerscroll.bz)
                      return y.timerscroll.bz.getNow()
              }
              return y.doc.translate.y
          }
          ,
          this.getScrollLeft = function(e) {
              if (!e) {
                  var t = n();
                  if (t)
                      return 16 == t.length ? -t[12] : -t[4];
                  if (y.timerscroll && y.timerscroll.bh)
                      return y.timerscroll.bh.getNow()
              }
              return y.doc.translate.x
          }
          ,
          this.notifyScrollEvent = function(e) {
              var t = document.createEvent("UIEvents");
              t.initUIEvent("scroll", !1, !0, window, 1),
              t.niceevent = !0,
              e.dispatchEvent(t)
          }
          ;
          var C = this.isrtlmode ? 1 : -1;
          k.hastranslate3d && y.opt.enabletranslate3d ? (this.setScrollTop = function(e, t) {
              y.doc.translate.y = e,
              y.doc.translate.ty = e * -1 + "px",
              y.doc.css(k.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"),
              t || y.notifyScrollEvent(y.win[0]);
          }
          ,
          this.setScrollLeft = function(e, t) {
              y.doc.translate.x = e,
              y.doc.translate.tx = e * C + "px",
              y.doc.css(k.trstyle, "translate3d(" + y.doc.translate.tx + "," + y.doc.translate.ty + ",0px)"),
              t || y.notifyScrollEvent(y.win[0])
          }
          ) : (this.setScrollTop = function(e, t) {
              y.doc.translate.y = e,
              y.doc.translate.ty = e * -1 + "px",
              y.doc.css(k.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"),
              t || y.notifyScrollEvent(y.win[0])
          }
          ,
          this.setScrollLeft = function(e, t) {
              y.doc.translate.x = e,
              y.doc.translate.tx = e * C + "px",
              y.doc.css(k.trstyle, "translate(" + y.doc.translate.tx + "," + y.doc.translate.ty + ")"),
              t || y.notifyScrollEvent(y.win[0])
          }
          )
      } else
          this.getScrollTop = function() {
              return y.docscroll.scrollTop()
          }
          ,
          this.setScrollTop = function(e) {
              return setTimeout(function() {
                  y && y.docscroll.scrollTop(e)
              }, 1)
          }
          ,
          this.getScrollLeft = function() {
              var e;
              return e = y.hasreversehr ? y.detected.ismozilla ? y.page.maxw - Math.abs(y.docscroll.scrollLeft()) : y.page.maxw - y.docscroll.scrollLeft() : y.docscroll.scrollLeft()
          }
          ,
          this.setScrollLeft = function(e) {
              return setTimeout(function() {
                  if (y)
                      return y.hasreversehr && (e = y.detected.ismozilla ? -(y.page.maxw - e) : y.page.maxw - e),
                      y.docscroll.scrollLeft(e)
              }, 1)
          }
          ;
      this.getTarget = function(e) {
          return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
      }
      ,
      this.hasParent = function(e, t) {
          if (!e)
              return !1;
          for (var n = e.target || e.srcElement || e || !1; n && n.id != t; )
              n = n.parentNode || !1;
          return n !== !1
      }
      ;
      var M = {
          thin: 1,
          medium: 3,
          thick: 5
      };
      this.getDocumentScrollOffset = function() {
          return {
              top: window.pageYOffset || document.documentElement.scrollTop,
              left: window.pageXOffset || document.documentElement.scrollLeft
          }
      }
      ,
      this.getOffset = function() {
          if (y.isfixed) {
              var e = y.win.offset()
                , t = y.getDocumentScrollOffset();
              return e.top -= t.top,
              e.left -= t.left,
              e
          }
          var n = y.win.offset();
          if (!y.viewport)
              return n;
          var r = y.viewport.offset();
          return {
              top: n.top - r.top,
              left: n.left - r.left
          }
      }
      ,
      this.updateScrollBar = function(e) {
          var t, n;
          if (y.ishwscroll)
              y.rail.css({
                  height: y.win.innerHeight() - (y.opt.railpadding.top + y.opt.railpadding.bottom)
              }),
              y.railh && y.railh.css({
                  width: y.win.innerWidth() - (y.opt.railpadding.left + y.opt.railpadding.right)
              });
          else {
              var r = y.getOffset();
              if (t = {
                  top: r.top,
                  left: r.left - (y.opt.railpadding.left + y.opt.railpadding.right)
              },
              t.top += h(y.win, "border-top-width", !0),
              t.left += y.rail.align ? y.win.outerWidth() - h(y.win, "border-right-width") - y.rail.width : h(y.win, "border-left-width"),
              n = y.opt.railoffset,
              n && (n.top && (t.top += n.top),
              n.left && (t.left += n.left)),
              y.railslocked || y.rail.css({
                  top: t.top,
                  left: t.left,
                  height: (e ? e.h : y.win.innerHeight()) - (y.opt.railpadding.top + y.opt.railpadding.bottom)
              }),
              y.zoom && y.zoom.css({
                  top: t.top + 1,
                  left: 1 == y.rail.align ? t.left - 20 : t.left + y.rail.width + 4
              }),
              y.railh && !y.railslocked) {
                  t = {
                      top: r.top,
                      left: r.left
                  },
                  n = y.opt.railhoffset,
                  n && (n.top && (t.top += n.top),
                  n.left && (t.left += n.left));
                  var o = y.railh.align ? t.top + h(y.win, "border-top-width", !0) + y.win.innerHeight() - y.railh.height : t.top + h(y.win, "border-top-width", !0)
                    , i = t.left + h(y.win, "border-left-width");
                  y.railh.css({
                      top: o - (y.opt.railpadding.top + y.opt.railpadding.bottom),
                      left: i,
                      width: y.railh.width
                  })
              }
          }
      }
      ,
      this.doRailClick = function(e, t, n) {
          var r, o, i, s;
          y.railslocked || (y.cancelEvent(e),
          t ? (r = n ? y.doScrollLeft : y.doScrollTop,
          i = n ? (e.pageX - y.railh.offset().left - y.cursorwidth / 2) * y.scrollratio.x : (e.pageY - y.rail.offset().top - y.cursorheight / 2) * y.scrollratio.y,
          r(i)) : (r = n ? y.doScrollLeftBy : y.doScrollBy,
          i = n ? y.scroll.x : y.scroll.y,
          s = n ? e.pageX - y.railh.offset().left : e.pageY - y.rail.offset().top,
          o = n ? y.view.w : y.view.h,
          r(i >= s ? o : -o)))
      }
      ,
      y.hasanimationframe = u,
      y.hascancelanimationframe = f,
      y.hasanimationframe ? y.hascancelanimationframe || (f = function() {
          y.cancelAnimationFrame = !0
      }
      ) : (u = function(e) {
          return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
      }
      ,
      f = clearTimeout),
      this.init = function() {
          if (y.saved.css = [],
          k.isie7mobile)
              return !0;
          if (k.isoperamini)
              return !0;
          k.isie10 ? "-ms-touch-action" : "touch-action";
          k.hasmstouch && y.css(y.ispage ? l("html") : y.win, {
              _touchaction: "none"
          });
          var e = k.ismodernie || k.isie10 ? {
              "-ms-overflow-style": "none"
          } : {
              "overflow-y": "hidden"
          };
          if (y.zindex = "auto",
          y.ispage || "auto" != y.opt.zindex ? y.zindex = y.opt.zindex : y.zindex = c() || "auto",
          !y.ispage && "auto" != y.zindex && y.zindex > a && (a = y.zindex),
          y.isie && 0 == y.zindex && "auto" == y.opt.zindex && (y.zindex = "auto"),
          !y.ispage || !k.cantouch && !k.isieold && !k.isie9mobile) {
              var t = y.docscroll;
              y.ispage && (t = y.haswrapper ? y.win : y.doc),
              k.isie9mobile || y.css(t, e),
              y.ispage && k.isie7 && ("BODY" == y.doc[0].nodeName ? y.css(l("html"), {
                  "overflow-y": "hidden"
              }) : "HTML" == y.doc[0].nodeName && y.css(l("body"), e)),
              !k.isios || y.ispage || y.haswrapper || y.css(l("body"), {
                  "-webkit-overflow-scrolling": "touch"
              });
              var n = l(document.createElement("div"));
              n.css({
                  position: "relative",
                  top: 0,
                  "float": "right",
                  width: y.opt.cursorwidth,
                  height: 0,
                  "background-color": y.opt.cursorcolor,
                  border: y.opt.cursorborder,
                  "background-clip": "padding-box",
                  "-webkit-border-radius": y.opt.cursorborderradius,
                  "-moz-border-radius": y.opt.cursorborderradius,
                  "border-radius": y.opt.cursorborderradius
              }),
              n.hborder = parseFloat(n.outerHeight() - n.innerHeight()),
              n.addClass("nicescroll-cursors"),
              y.cursor = n;
              var s = l(document.createElement("div"));
              s.attr("id", y.id),
              s.addClass("nicescroll-rails nicescroll-rails-vr");
              var u, f, h = ["left", "right", "top", "bottom"];
              for (var p in h)
                  f = h[p],
                  u = y.opt.railpadding[f],
                  u ? s.css("padding-" + f, u + "px") : y.opt.railpadding[f] = 0;
              s.append(n),
              s.width = Math.max(parseFloat(y.opt.cursorwidth), n.outerWidth()),
              s.css({
                  width: s.width + "px",
                  zIndex: y.zindex,
                  background: y.opt.background,
                  cursor: "default"
              }),
              s.visibility = !0,
              s.scrollable = !0,
              s.align = "left" == y.opt.railalign ? 0 : 1,
              y.rail = s,
              y.rail.drag = !1;
              var g = !1;
              !y.opt.boxzoom || y.ispage || k.isieold || (g = document.createElement("div"),
              y.bind(g, "click", y.doZoom),
              y.bind(g, "mouseenter", function() {
                  y.zoom.css("opacity", y.opt.cursoropacitymax)
              }),
              y.bind(g, "mouseleave", function() {
                  y.zoom.css("opacity", y.opt.cursoropacitymin)
              }),
              y.zoom = l(g),
              y.zoom.css({
                  cursor: "pointer",
                  zIndex: y.zindex,
                  backgroundImage: "url(" + y.opt.scriptpath + "zoomico.png)",
                  height: 18,
                  width: 18,
                  backgroundPosition: "0px 0px"
              }),
              y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom),
              k.cantouch && y.opt.gesturezoom && (y.ongesturezoom = function(e) {
                  return e.scale > 1.5 && y.doZoomIn(e),
                  e.scale < .8 && y.doZoomOut(e),
                  y.cancelEvent(e)
              }
              ,
              y.bind(y.win, "gestureend", y.ongesturezoom))),
              y.railh = !1;
              var m;
              if (y.opt.horizrailenabled) {
                  y.css(t, {
                      overflowX: "hidden"
                  });
                  var n = l(document.createElement("div"));
                  n.css({
                      position: "absolute",
                      top: 0,
                      height: y.opt.cursorwidth,
                      width: 0,
                      backgroundColor: y.opt.cursorcolor,
                      border: y.opt.cursorborder,
                      backgroundClip: "padding-box",
                      "-webkit-border-radius": y.opt.cursorborderradius,
                      "-moz-border-radius": y.opt.cursorborderradius,
                      "border-radius": y.opt.cursorborderradius
                  }),
                  k.isieold && n.css("overflow", "hidden"),
                  n.wborder = parseFloat(n.outerWidth() - n.innerWidth()),
                  n.addClass("nicescroll-cursors"),
                  y.cursorh = n,
                  m = l(document.createElement("div")),
                  m.attr("id", y.id + "-hr"),
                  m.addClass("nicescroll-rails nicescroll-rails-hr"),
                  m.height = Math.max(parseFloat(y.opt.cursorwidth), n.outerHeight()),
                  m.css({
                      height: m.height + "px",
                      zIndex: y.zindex,
                      background: y.opt.background
                  }),
                  m.append(n),
                  m.visibility = !0,
                  m.scrollable = !0,
                  m.align = "top" == y.opt.railvalign ? 0 : 1,
                  y.railh = m,
                  y.railh.drag = !1
              }
              if (y.ispage)
                  s.css({
                      position: "fixed",
                      top: 0,
                      height: "100%"
                  }),
                  s.align ? s.css({
                      right: 0
                  }) : s.css({
                      left: 0
                  }),
                  y.body.append(s),
                  y.railh && (m.css({
                      position: "fixed",
                      left: 0,
                      width: "100%"
                  }),
                  m.align ? m.css({
                      bottom: 0
                  }) : m.css({
                      top: 0
                  }),
                  y.body.append(m));
              else {
                  if (y.ishwscroll) {
                      "static" == y.win.css("position") && y.css(y.win, {
                          position: "relative"
                      });
                      var v = "HTML" == y.win[0].nodeName ? y.body : y.win;
                      l(v).scrollTop(0).scrollLeft(0),
                      y.zoom && (y.zoom.css({
                          position: "absolute",
                          top: 1,
                          right: 0,
                          "margin-right": s.width + 4
                      }),
                      v.append(y.zoom)),
                      s.css({
                          position: "absolute",
                          top: 0
                      }),
                      s.align ? s.css({
                          right: 0
                      }) : s.css({
                          left: 0
                      }),
                      v.append(s),
                      m && (m.css({
                          position: "absolute",
                          left: 0,
                          bottom: 0
                      }),
                      m.align ? m.css({
                          bottom: 0
                      }) : m.css({
                          top: 0
                      }),
                      v.append(m))
                  } else {
                      y.isfixed = "fixed" == y.win.css("position");
                      var w = y.isfixed ? "fixed" : "absolute";
                      y.isfixed || (y.viewport = y.getViewport(y.win[0])),
                      y.viewport && (y.body = y.viewport,
                      0 == /fixed|absolute/.test(y.viewport.css("position")) && y.css(y.viewport, {
                          position: "relative"
                      })),
                      s.css({
                          position: w
                      }),
                      y.zoom && y.zoom.css({
                          position: w
                      }),
                      y.updateScrollBar(),
                      y.body.append(s),
                      y.zoom && y.body.append(y.zoom),
                      y.railh && (m.css({
                          position: w
                      }),
                      y.body.append(m))
                  }
                  k.isios && y.css(y.win, {
                      "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                      "-webkit-touch-callout": "none"
                  }),
                  k.isie && y.opt.disableoutline && y.win.attr("hideFocus", "true"),
                  k.iswebkit && y.opt.disableoutline && y.win.css("outline", "none")
              }
              if (y.opt.autohidemode === !1 ? (y.autohidedom = !1,
              y.rail.css({
                  opacity: y.opt.cursoropacitymax
              }),
              y.railh && y.railh.css({
                  opacity: y.opt.cursoropacitymax
              })) : y.opt.autohidemode === !0 || "leave" === y.opt.autohidemode ? (y.autohidedom = l().add(y.rail),
              k.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)),
              y.railh && (y.autohidedom = y.autohidedom.add(y.railh)),
              y.railh && k.isie8 && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "scroll" == y.opt.autohidemode ? (y.autohidedom = l().add(y.rail),
              y.railh && (y.autohidedom = y.autohidedom.add(y.railh))) : "cursor" == y.opt.autohidemode ? (y.autohidedom = l().add(y.cursor),
              y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh))) : "hidden" == y.opt.autohidemode && (y.autohidedom = !1,
              y.hide(),
              y.railslocked = !1),
              k.isie9mobile) {
                  y.scrollmom = new b(y),
                  y.onmangotouch = function() {
                      var e = y.getScrollTop()
                        , t = y.getScrollLeft();
                      if (e == y.scrollmom.lastscrolly && t == y.scrollmom.lastscrollx)
                          return !0;
                      var n = e - y.mangotouch.sy
                        , r = t - y.mangotouch.sx
                        , o = Math.round(Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)));
                      if (0 != o) {
                          var i = n < 0 ? -1 : 1
                            , s = r < 0 ? -1 : 1
                            , a = +new Date;
                          if (y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy),
                          a - y.mangotouch.tm > 80 || y.mangotouch.dry != i || y.mangotouch.drx != s)
                              y.scrollmom.stop(),
                              y.scrollmom.reset(t, e),
                              y.mangotouch.sy = e,
                              y.mangotouch.ly = e,
                              y.mangotouch.sx = t,
                              y.mangotouch.lx = t,
                              y.mangotouch.dry = i,
                              y.mangotouch.drx = s,
                              y.mangotouch.tm = a;
                          else {
                              y.scrollmom.stop(),
                              y.scrollmom.update(y.mangotouch.sx - r, y.mangotouch.sy - n),
                              y.mangotouch.tm = a;
                              var l = Math.max(Math.abs(y.mangotouch.ly - e), Math.abs(y.mangotouch.lx - t));
                              y.mangotouch.ly = e,
                              y.mangotouch.lx = t,
                              l > 2 && (y.mangotouch.lazy = setTimeout(function() {
                                  y.mangotouch.lazy = !1,
                                  y.mangotouch.dry = 0,
                                  y.mangotouch.drx = 0,
                                  y.mangotouch.tm = 0,
                                  y.scrollmom.doMomentum(30)
                              }, 100))
                          }
                      }
                  }
                  ;
                  var x = y.getScrollTop()
                    , _ = y.getScrollLeft();
                  y.mangotouch = {
                      sy: x,
                      ly: x,
                      dry: 0,
                      sx: _,
                      lx: _,
                      drx: 0,
                      lazy: !1,
                      tm: 0
                  },
                  y.bind(y.docscroll, "scroll", y.onmangotouch)
              } else {
                  if (k.cantouch || y.istouchcapable || y.opt.touchbehavior || k.hasmstouch) {
                      y.scrollmom = new b(y),
                      y.ontouchstart = function(e) {
                          if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                              return !1;
                          if (y.hasmoving = !1,
                          !y.railslocked) {
                              var t;
                              if (k.hasmstouch)
                                  for (t = !!e.target && e.target; t; ) {
                                      var n = l(t).getNiceScroll();
                                      if (n.length > 0 && n[0].me == y.me)
                                          break;
                                      if (n.length > 0)
                                          return !1;
                                      if ("DIV" == t.nodeName && t.id == y.id)
                                          break;
                                      t = !!t.parentNode && t.parentNode
                                  }
                              if (y.cancelScroll(),
                              t = y.getTarget(e)) {
                                  var r = /INPUT/i.test(t.nodeName) && /range/i.test(t.type);
                                  if (r)
                                      return y.stopPropagation(e)
                              }
                              if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                              e.clientY = e.changedTouches[0].clientY),
                              y.forcescreen) {
                                  var o = e;
                                  e = {
                                      original: e.original ? e.original : e
                                  },
                                  e.clientX = o.screenX,
                                  e.clientY = o.screenY
                              }
                              if (y.rail.drag = {
                                  x: e.clientX,
                                  y: e.clientY,
                                  sx: y.scroll.x,
                                  sy: y.scroll.y,
                                  st: y.getScrollTop(),
                                  sl: y.getScrollLeft(),
                                  pt: 2,
                                  dl: !1
                              },
                              y.ispage || !y.opt.directionlockdeadzone)
                                  y.rail.drag.dl = "f";
                              else {
                                  var i = {
                                      w: l(window).width(),
                                      h: l(window).height()
                                  }
                                    , s = {
                                      w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                      h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                  }
                                    , a = Math.max(0, s.h - i.h)
                                    , c = Math.max(0, s.w - i.w);
                                  !y.rail.scrollable && y.railh.scrollable ? y.rail.drag.ck = a > 0 && "v" : y.rail.scrollable && !y.railh.scrollable ? y.rail.drag.ck = c > 0 && "h" : y.rail.drag.ck = !1,
                                  y.rail.drag.ck || (y.rail.drag.dl = "f")
                              }
                              if (y.opt.touchbehavior && y.isiframe && k.isie) {
                                  var u = y.win.position();
                                  y.rail.drag.x += u.left,
                                  y.rail.drag.y += u.top
                              }
                              if (y.hasmoving = !1,
                              y.lastmouseup = !1,
                              y.scrollmom.reset(e.clientX, e.clientY),
                              !k.cantouch && !this.istouchcapable && !e.pointerType) {
                                  var f = !!t && /INPUT|SELECT|TEXTAREA/i.test(t.nodeName);
                                  if (!f)
                                      return !y.ispage && k.hasmousecapture && t.setCapture(),
                                      y.opt.touchbehavior ? (t.onclick && !t._onclick && (t._onclick = t.onclick,
                                      t.onclick = function(e) {
                                          return !y.hasmoving && void t._onclick.call(this, e)
                                      }
                                      ),
                                      y.cancelEvent(e)) : y.stopPropagation(e);
                                  /SUBMIT|CANCEL|BUTTON/i.test(l(t).attr("type")) && (pc = {
                                      tg: t,
                                      click: !1
                                  },
                                  y.preventclick = pc)
                              }
                          }
                      }
                      ,
                      y.ontouchend = function(e) {
                          if (!y.rail.drag)
                              return !0;
                          if (2 == y.rail.drag.pt) {
                              if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                                  return !1;
                              if (y.scrollmom.doMomentum(),
                              y.rail.drag = !1,
                              y.hasmoving && (y.lastmouseup = !0,
                              y.hideCursor(),
                              k.hasmousecapture && document.releaseCapture(),
                              !k.cantouch))
                                  return y.cancelEvent(e)
                          } else if (1 == y.rail.drag.pt)
                              return y.onmouseup(e)
                      }
                      ;
                      var S = y.opt.touchbehavior && y.isiframe && !k.hasmousecapture;
                      y.ontouchmove = function(e, t) {
                          if (!y.rail.drag)
                              return !1;
                          if (e.targetTouches && y.opt.preventmultitouchscrolling && e.targetTouches.length > 1)
                              return !1;
                          if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                              return !1;
                          if (2 == y.rail.drag.pt) {
                              if (k.cantouch && k.isios && void 0 === e.original)
                                  return !0;
                              y.hasmoving = !0,
                              y.preventclick && !y.preventclick.click && (y.preventclick.click = y.preventclick.tg.onclick || !1,
                              y.preventclick.tg.onclick = y.onpreventclick);
                              var n = l.extend({
                                  original: e
                              }, e);
                              if (e = n,
                              "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                              e.clientY = e.changedTouches[0].clientY),
                              y.forcescreen) {
                                  var r = e;
                                  e = {
                                      original: e.original ? e.original : e
                                  },
                                  e.clientX = r.screenX,
                                  e.clientY = r.screenY
                              }
                              var o, i;
                              if (i = o = 0,
                              S && !t) {
                                  var s = y.win.position();
                                  i = -s.left,
                                  o = -s.top
                              }
                              var a = e.clientY + o
                                , c = a - y.rail.drag.y
                                , u = e.clientX + i
                                , f = u - y.rail.drag.x
                                , h = y.rail.drag.st - c;
                              y.ishwscroll && y.opt.bouncescroll ? h < 0 ? h = Math.round(h / 2) : h > y.page.maxh && (h = y.page.maxh + Math.round((h - y.page.maxh) / 2)) : (h < 0 && (h = 0,
                              a = 0),
                              h > y.page.maxh && (h = y.page.maxh,
                              a = 0));
                              var p;
                              y.railh && y.railh.scrollable && (p = y.isrtlmode ? f - y.rail.drag.sl : y.rail.drag.sl - f,
                              y.ishwscroll && y.opt.bouncescroll ? p < 0 ? p = Math.round(p / 2) : p > y.page.maxw && (p = y.page.maxw + Math.round((p - y.page.maxw) / 2)) : (p < 0 && (p = 0,
                              u = 0),
                              p > y.page.maxw && (p = y.page.maxw,
                              u = 0)));
                              var d = !1;
                              if (y.rail.drag.dl)
                                  d = !0,
                                  "v" == y.rail.drag.dl ? p = y.rail.drag.sl : "h" == y.rail.drag.dl && (h = y.rail.drag.st);
                              else {
                                  var g = Math.abs(c)
                                    , m = Math.abs(f)
                                    , v = y.opt.directionlockdeadzone;
                                  if ("v" == y.rail.drag.ck) {
                                      if (g > v && m <= .3 * g)
                                          return y.rail.drag = !1,
                                          !0;
                                      m > v && (y.rail.drag.dl = "f",
                                      l("body").scrollTop(l("body").scrollTop()))
                                  } else if ("h" == y.rail.drag.ck) {
                                      if (m > v && g <= .3 * m)
                                          return y.rail.drag = !1,
                                          !0;
                                      g > v && (y.rail.drag.dl = "f",
                                      l("body").scrollLeft(l("body").scrollLeft()))
                                  }
                              }
                              if (y.synched("touchmove", function() {
                                  y.rail.drag && 2 == y.rail.drag.pt && (y.prepareTransition && y.prepareTransition(0),
                                  y.rail.scrollable && y.setScrollTop(h),
                                  y.scrollmom.update(u, a),
                                  y.railh && y.railh.scrollable ? (y.setScrollLeft(p),
                                  y.showCursor(h, p)) : y.showCursor(h),
                                  k.isie10 && document.selection.clear())
                              }),
                              k.ischrome && y.istouchcapable && (d = !1),
                              d)
                                  return y.cancelEvent(e)
                          } else if (1 == y.rail.drag.pt)
                              return y.onmousemove(e)
                      }
                  }
                  if (y.onmousedown = function(e, t) {
                      if (!y.rail.drag || 1 == y.rail.drag.pt) {
                          if (y.railslocked)
                              return y.cancelEvent(e);
                          y.cancelScroll(),
                          y.rail.drag = {
                              x: e.clientX,
                              y: e.clientY,
                              sx: y.scroll.x,
                              sy: y.scroll.y,
                              pt: 1,
                              hr: !!t
                          };
                          var n = y.getTarget(e);
                          return !y.ispage && k.hasmousecapture && n.setCapture(),
                          y.isiframe && !k.hasmousecapture && (y.saved.csspointerevents = y.doc.css("pointer-events"),
                          y.css(y.doc, {
                              "pointer-events": "none"
                          })),
                          y.hasmoving = !1,
                          y.cancelEvent(e)
                      }
                  }
                  ,
                  y.onmouseup = function(e) {
                      if (y.rail.drag)
                          return 1 != y.rail.drag.pt || (k.hasmousecapture && document.releaseCapture(),
                          y.isiframe && !k.hasmousecapture && y.doc.css("pointer-events", y.saved.csspointerevents),
                          y.rail.drag = !1,
                          y.hasmoving && y.triggerScrollEnd(),
                          y.cancelEvent(e))
                  }
                  ,
                  y.onmousemove = function(e) {
                      if (y.rail.drag) {
                          if (1 != y.rail.drag.pt)
                              return;
                          if (k.ischrome && 0 == e.which)
                              return y.onmouseup(e);
                          if (y.cursorfreezed = !0,
                          y.hasmoving = !0,
                          y.rail.drag.hr) {
                              y.scroll.x = y.rail.drag.sx + (e.clientX - y.rail.drag.x),
                              y.scroll.x < 0 && (y.scroll.x = 0);
                              var t = y.scrollvaluemaxw;
                              y.scroll.x > t && (y.scroll.x = t)
                          } else {
                              y.scroll.y = y.rail.drag.sy + (e.clientY - y.rail.drag.y),
                              y.scroll.y < 0 && (y.scroll.y = 0);
                              var n = y.scrollvaluemax;
                              y.scroll.y > n && (y.scroll.y = n)
                          }
                          return y.synched("mousemove", function() {
                              y.rail.drag && 1 == y.rail.drag.pt && (y.showCursor(),
                              y.rail.drag.hr ? y.hasreversehr ? y.doScrollLeft(y.scrollvaluemaxw - Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollLeft(Math.round(y.scroll.x * y.scrollratio.x), y.opt.cursordragspeed) : y.doScrollTop(Math.round(y.scroll.y * y.scrollratio.y), y.opt.cursordragspeed))
                          }),
                          y.cancelEvent(e)
                      }
                      y.checkarea = 0
                  }
                  ,
                  k.cantouch || y.opt.touchbehavior)
                      y.onpreventclick = function(e) {
                          if (y.preventclick)
                              return y.preventclick.tg.onclick = y.preventclick.click,
                              y.preventclick = !1,
                              y.cancelEvent(e)
                      }
                      ,
                      y.bind(y.win, "mousedown", y.ontouchstart),
                      y.onclick = !k.isios && function(e) {
                          return !y.lastmouseup || (y.lastmouseup = !1,
                          y.cancelEvent(e))
                      }
                      ,
                      y.opt.grabcursorenabled && k.cursorgrabvalue && (y.css(y.ispage ? y.doc : y.win, {
                          cursor: k.cursorgrabvalue
                      }),
                      y.css(y.rail, {
                          cursor: k.cursorgrabvalue
                      }));
                  else {
                      var T = function(e) {
                          if (y.selectiondrag) {
                              if (e) {
                                  var t = y.win.outerHeight()
                                    , n = e.pageY - y.selectiondrag.top;
                                  n > 0 && n < t && (n = 0),
                                  n >= t && (n -= t),
                                  y.selectiondrag.df = n
                              }
                              if (0 != y.selectiondrag.df) {
                                  var r = 2 * -Math.floor(y.selectiondrag.df / 6);
                                  y.doScrollBy(r),
                                  y.debounced("doselectionscroll", function() {
                                      T()
                                  }, 50)
                              }
                          }
                      };
                      "getSelection"in document ? y.hasTextSelected = function() {
                          return document.getSelection().rangeCount > 0
                      }
                      : "selection"in document ? y.hasTextSelected = function() {
                          return "None" != document.selection.type
                      }
                      : y.hasTextSelected = function() {
                          return !1
                      }
                      ,
                      y.onselectionstart = function(e) {
                          y.ispage || (y.selectiondrag = y.win.offset())
                      }
                      ,
                      y.onselectionend = function(e) {
                          y.selectiondrag = !1
                      }
                      ,
                      y.onselectiondrag = function(e) {
                          y.selectiondrag && y.hasTextSelected() && y.debounced("selectionscroll", function() {
                              T(e)
                          }, 250)
                      }
                  }
                  k.hasw3ctouch ? (y.css(y.rail, {
                      "touch-action": "none"
                  }),
                  y.css(y.cursor, {
                      "touch-action": "none"
                  }),
                  y.bind(y.win, "pointerdown", y.ontouchstart),
                  y.bind(document, "pointerup", y.ontouchend),
                  y.bind(document, "pointermove", y.ontouchmove)) : k.hasmstouch ? (y.css(y.rail, {
                      "-ms-touch-action": "none"
                  }),
                  y.css(y.cursor, {
                      "-ms-touch-action": "none"
                  }),
                  y.bind(y.win, "MSPointerDown", y.ontouchstart),
                  y.bind(document, "MSPointerUp", y.ontouchend),
                  y.bind(document, "MSPointerMove", y.ontouchmove),
                  y.bind(y.cursor, "MSGestureHold", function(e) {
                      e.preventDefault()
                  }),
                  y.bind(y.cursor, "contextmenu", function(e) {
                      e.preventDefault()
                  })) : this.istouchcapable && (y.bind(y.win, "touchstart", y.ontouchstart),
                  y.bind(document, "touchend", y.ontouchend),
                  y.bind(document, "touchcancel", y.ontouchend),
                  y.bind(document, "touchmove", y.ontouchmove)),
                  (y.opt.cursordragontouch || !k.cantouch && !y.opt.touchbehavior) && (y.rail.css({
                      cursor: "default"
                  }),
                  y.railh && y.railh.css({
                      cursor: "default"
                  }),
                  y.jqbind(y.rail, "mouseenter", function() {
                      return !(!y.ispage && !y.win.is(":visible")) && (y.canshowonmouseevent && y.showCursor(),
                      void (y.rail.active = !0))
                  }),
                  y.jqbind(y.rail, "mouseleave", function() {
                      y.rail.active = !1,
                      y.rail.drag || y.hideCursor()
                  }),
                  y.opt.sensitiverail && (y.bind(y.rail, "click", function(e) {
                      y.doRailClick(e, !1, !1)
                  }),
                  y.bind(y.rail, "dblclick", function(e) {
                      y.doRailClick(e, !0, !1)
                  }),
                  y.bind(y.cursor, "click", function(e) {
                      y.cancelEvent(e)
                  }),
                  y.bind(y.cursor, "dblclick", function(e) {
                      y.cancelEvent(e)
                  })),
                  y.railh && (y.jqbind(y.railh, "mouseenter", function() {
                      return !(!y.ispage && !y.win.is(":visible")) && (y.canshowonmouseevent && y.showCursor(),
                      void (y.rail.active = !0))
                  }),
                  y.jqbind(y.railh, "mouseleave", function() {
                      y.rail.active = !1,
                      y.rail.drag || y.hideCursor()
                  }),
                  y.opt.sensitiverail && (y.bind(y.railh, "click", function(e) {
                      y.doRailClick(e, !1, !0)
                  }),
                  y.bind(y.railh, "dblclick", function(e) {
                      y.doRailClick(e, !0, !0)
                  }),
                  y.bind(y.cursorh, "click", function(e) {
                      y.cancelEvent(e)
                  }),
                  y.bind(y.cursorh, "dblclick", function(e) {
                      y.cancelEvent(e)
                  })))),
                  k.cantouch || y.opt.touchbehavior ? (y.bind(k.hasmousecapture ? y.win : document, "mouseup", y.ontouchend),
                  y.bind(document, "mousemove", y.ontouchmove),
                  y.onclick && y.bind(document, "click", y.onclick),
                  y.opt.cursordragontouch ? (y.bind(y.cursor, "mousedown", y.onmousedown),
                  y.bind(y.cursor, "mouseup", y.onmouseup),
                  y.cursorh && y.bind(y.cursorh, "mousedown", function(e) {
                      y.onmousedown(e, !0)
                  }),
                  y.cursorh && y.bind(y.cursorh, "mouseup", y.onmouseup)) : (y.bind(y.rail, "mousedown", function(e) {
                      e.preventDefault()
                  }),
                  y.railh && y.bind(y.railh, "mousedown", function(e) {
                      e.preventDefault()
                  }))) : (y.bind(k.hasmousecapture ? y.win : document, "mouseup", y.onmouseup),
                  y.bind(document, "mousemove", y.onmousemove),
                  y.onclick && y.bind(document, "click", y.onclick),
                  y.bind(y.cursor, "mousedown", y.onmousedown),
                  y.bind(y.cursor, "mouseup", y.onmouseup),
                  y.railh && (y.bind(y.cursorh, "mousedown", function(e) {
                      y.onmousedown(e, !0)
                  }),
                  y.bind(y.cursorh, "mouseup", y.onmouseup)),
                  !y.ispage && y.opt.enablescrollonselection && (y.bind(y.win[0], "mousedown", y.onselectionstart),
                  y.bind(document, "mouseup", y.onselectionend),
                  y.bind(y.cursor, "mouseup", y.onselectionend),
                  y.cursorh && y.bind(y.cursorh, "mouseup", y.onselectionend),
                  y.bind(document, "mousemove", y.onselectiondrag)),
                  y.zoom && (y.jqbind(y.zoom, "mouseenter", function() {
                      y.canshowonmouseevent && y.showCursor(),
                      y.rail.active = !0
                  }),
                  y.jqbind(y.zoom, "mouseleave", function() {
                      y.rail.active = !1,
                      y.rail.drag || y.hideCursor()
                  }))),
                  y.opt.enablemousewheel && (y.isiframe || y.mousewheel(k.isie && y.ispage ? document : y.win, y.onmousewheel),
                  y.mousewheel(y.rail, y.onmousewheel),
                  y.railh && y.mousewheel(y.railh, y.onmousewheelhr)),
                  y.ispage || k.cantouch || /HTML|^BODY/.test(y.win[0].nodeName) || (y.win.attr("tabindex") || y.win.attr({
                      tabindex: i++
                  }),
                  y.jqbind(y.win, "focus", function(e) {
                      r = y.getTarget(e).id || !0,
                      y.hasfocus = !0,
                      y.canshowonmouseevent && y.noticeCursor()
                  }),
                  y.jqbind(y.win, "blur", function(e) {
                      r = !1,
                      y.hasfocus = !1
                  }),
                  y.jqbind(y.win, "mouseenter", function(e) {
                      o = y.getTarget(e).id || !0,
                      y.hasmousefocus = !0,
                      y.canshowonmouseevent && y.noticeCursor()
                  }),
                  y.jqbind(y.win, "mouseleave", function() {
                      o = !1,
                      y.hasmousefocus = !1,
                      y.rail.drag || y.hideCursor()
                  }))
              }
              if (y.onkeypress = function(e) {
                  if (y.railslocked && 0 == y.page.maxh)
                      return !0;
                  e = e ? e : window.e;
                  var t = y.getTarget(e);
                  if (t && /INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)) {
                      var n = t.getAttribute("type") || t.type || !1;
                      if (!n || !/submit|button|cancel/i.tp)
                          return !0
                  }
                  if (l(t).attr("contenteditable"))
                      return !0;
                  if (y.hasfocus || y.hasmousefocus && !r || y.ispage && !r && !o) {
                      var i = e.keyCode;
                      if (y.railslocked && 27 != i)
                          return y.cancelEvent(e);
                      var s = e.ctrlKey || !1
                        , a = e.shiftKey || !1
                        , c = !1;
                      switch (i) {
                      case 38:
                      case 63233:
                          y.doScrollBy(72),
                          c = !0;
                          break;
                      case 40:
                      case 63235:
                          y.doScrollBy(-72),
                          c = !0;
                          break;
                      case 37:
                      case 63232:
                          y.railh && (s ? y.doScrollLeft(0) : y.doScrollLeftBy(72),
                          c = !0);
                          break;
                      case 39:
                      case 63234:
                          y.railh && (s ? y.doScrollLeft(y.page.maxw) : y.doScrollLeftBy(-72),
                          c = !0);
                          break;
                      case 33:
                      case 63276:
                          y.doScrollBy(y.view.h),
                          c = !0;
                          break;
                      case 34:
                      case 63277:
                          y.doScrollBy(-y.view.h),
                          c = !0;
                          break;
                      case 36:
                      case 63273:
                          y.railh && s ? y.doScrollPos(0, 0) : y.doScrollTo(0),
                          c = !0;
                          break;
                      case 35:
                      case 63275:
                          y.railh && s ? y.doScrollPos(y.page.maxw, y.page.maxh) : y.doScrollTo(y.page.maxh),
                          c = !0;
                          break;
                      case 32:
                          y.opt.spacebarenabled && (a ? y.doScrollBy(y.view.h) : y.doScrollBy(-y.view.h),
                          c = !0);
                          break;
                      case 27:
                          y.zoomactive && (y.doZoom(),
                          c = !0)
                      }
                      if (c)
                          return y.cancelEvent(e)
                  }
              }
              ,
              y.opt.enablekeyboard && y.bind(document, k.isopera && !k.isopera12 ? "keypress" : "keydown", y.onkeypress),
              y.bind(document, "keydown", function(e) {
                  var t = e.ctrlKey || !1;
                  t && (y.wheelprevented = !0)
              }),
              y.bind(document, "keyup", function(e) {
                  var t = e.ctrlKey || !1;
                  t || (y.wheelprevented = !1)
              }),
              y.bind(window, "blur", function(e) {
                  y.wheelprevented = !1
              }),
              y.bind(window, "resize", y.lazyResize),
              y.bind(window, "orientationchange", y.lazyResize),
              y.bind(window, "load", y.lazyResize),
              k.ischrome && !y.ispage && !y.haswrapper) {
                  var C = y.win.attr("style")
                    , M = parseFloat(y.win.css("width")) + 1;
                  y.win.css("width", M),
                  y.synched("chromefix", function() {
                      y.win.attr("style", C)
                  })
              }
              y.onAttributeChange = function(e) {
                  y.lazyResize(y.isieold ? 250 : 30)
              }
              ,
              y.isie11 || d === !1 || (y.observerbody = new d(function(e) {
                  if (e.forEach(function(e) {
                      if ("attributes" == e.type)
                          return l("body").hasClass("modal-open") && l("body").hasClass("modal-dialog") && !l.contains(l(".modal-dialog")[0], y.doc[0]) ? y.hide() : y.show()
                  }),
                  document.body.scrollHeight != y.page.maxh)
                      return y.lazyResize(30)
              }
              ),
              y.observerbody.observe(document.body, {
                  childList: !0,
                  subtree: !0,
                  characterData: !1,
                  attributes: !0,
                  attributeFilter: ["class"]
              })),
              y.ispage || y.haswrapper || (d !== !1 ? (y.observer = new d(function(e) {
                  e.forEach(y.onAttributeChange)
              }
              ),
              y.observer.observe(y.win[0], {
                  childList: !0,
                  characterData: !1,
                  attributes: !0,
                  subtree: !1
              }),
              y.observerremover = new d(function(e) {
                  e.forEach(function(e) {
                      if (e.removedNodes.length > 0)
                          for (var t in e.removedNodes)
                              if (y && e.removedNodes[t] == y.win[0])
                                  return y.remove()
                  })
              }
              ),
              y.observerremover.observe(y.win[0].parentNode, {
                  childList: !0,
                  characterData: !1,
                  attributes: !1,
                  subtree: !1
              })) : (y.bind(y.win, k.isie && !k.isie9 ? "propertychange" : "DOMAttrModified", y.onAttributeChange),
              k.isie9 && y.win[0].attachEvent("onpropertychange", y.onAttributeChange),
              y.bind(y.win, "DOMNodeRemoved", function(e) {
                  e.target == y.win[0] && y.remove()
              }))),
              !y.ispage && y.opt.boxzoom && y.bind(window, "resize", y.resizeZoom),
              y.istextarea && (y.bind(y.win, "keydown", y.lazyResize),
              y.bind(y.win, "mouseup", y.lazyResize)),
              y.lazyResize(30)
          }
          if ("IFRAME" == this.doc[0].nodeName) {
              var E = function() {
                  y.iframexd = !1;
                  var t;
                  try {
                      t = "contentDocument"in this ? this.contentDocument : this.contentWindow.document;
                      t.domain
                  } catch (n) {
                      y.iframexd = !0,
                      t = !1
                  }
                  if (y.iframexd)
                      return "console"in window && console.log("NiceScroll error: policy restriced iframe"),
                      !0;
                  if (y.forcescreen = !0,
                  y.isiframe && (y.iframe = {
                      doc: l(t),
                      html: y.doc.contents().find("html")[0],
                      body: y.doc.contents().find("body")[0]
                  },
                  y.getContentSize = function() {
                      return {
                          w: Math.max(y.iframe.html.scrollWidth, y.iframe.body.scrollWidth),
                          h: Math.max(y.iframe.html.scrollHeight, y.iframe.body.scrollHeight)
                      }
                  }
                  ,
                  y.docscroll = l(y.iframe.body)),
                  !k.isios && y.opt.iframeautoresize && !y.isiframe) {
                      y.win.scrollTop(0),
                      y.doc.height("");
                      var r = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                      y.doc.height(r)
                  }
                  y.lazyResize(30),
                  k.isie7 && y.css(l(y.iframe.html), e),
                  y.css(l(y.iframe.body), e),
                  k.isios && y.haswrapper && y.css(l(t.body), {
                      "-webkit-transform": "translate3d(0,0,0)"
                  }),
                  "contentWindow"in this ? y.bind(this.contentWindow, "scroll", y.onscroll) : y.bind(t, "scroll", y.onscroll),
                  y.opt.enablemousewheel && y.mousewheel(t, y.onmousewheel),
                  y.opt.enablekeyboard && y.bind(t, k.isopera ? "keypress" : "keydown", y.onkeypress),
                  (k.cantouch || y.opt.touchbehavior) && (y.bind(t, "mousedown", y.ontouchstart),
                  y.bind(t, "mousemove", function(e) {
                      return y.ontouchmove(e, !0)
                  }),
                  y.opt.grabcursorenabled && k.cursorgrabvalue && y.css(l(t.body), {
                      cursor: k.cursorgrabvalue
                  })),
                  y.bind(t, "mouseup", y.ontouchend),
                  y.zoom && (y.opt.dblclickzoom && y.bind(t, "dblclick", y.doZoom),
                  y.ongesturezoom && y.bind(t, "gestureend", y.ongesturezoom))
              };
              this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                  E.call(y.doc[0], !1)
              }, 500),
              y.bind(this.doc, "load", E)
          }
      }
      ,
      this.showCursor = function(e, t) {
          if (y.cursortimeout && (clearTimeout(y.cursortimeout),
          y.cursortimeout = 0),
          y.rail) {
              if (y.autohidedom && (y.autohidedom.stop().css({
                  opacity: y.opt.cursoropacitymax
              }),
              y.cursoractive = !0),
              y.rail.drag && 1 == y.rail.drag.pt || (void 0 !== e && e !== !1 && (y.scroll.y = Math.round(1 * e / y.scrollratio.y)),
              void 0 !== t && (y.scroll.x = Math.round(1 * t / y.scrollratio.x))),
              y.cursor.css({
                  height: y.cursorheight,
                  top: y.scroll.y
              }),
              y.cursorh) {
                  var n = y.hasreversehr ? y.scrollvaluemaxw - y.scroll.x : y.scroll.x;
                  !y.rail.align && y.rail.visibility ? y.cursorh.css({
                      width: y.cursorwidth,
                      left: n + y.rail.width
                  }) : y.cursorh.css({
                      width: y.cursorwidth,
                      left: n
                  }),
                  y.cursoractive = !0
              }
              y.zoom && y.zoom.stop().css({
                  opacity: y.opt.cursoropacitymax
              })
          }
      }
      ,
      this.hideCursor = function(e) {
          y.cursortimeout || y.rail && y.autohidedom && (y.hasmousefocus && "leave" == y.opt.autohidemode || (y.cursortimeout = setTimeout(function() {
              y.rail.active && y.showonmouseevent || (y.autohidedom.stop().animate({
                  opacity: y.opt.cursoropacitymin
              }),
              y.zoom && y.zoom.stop().animate({
                  opacity: y.opt.cursoropacitymin
              }),
              y.cursoractive = !1),
              y.cursortimeout = 0
          }, e || y.opt.hidecursordelay)))
      }
      ,
      this.noticeCursor = function(e, t, n) {
          y.showCursor(t, n),
          y.rail.active || y.hideCursor(e)
      }
      ,
      this.getContentSize = y.ispage ? function() {
          return {
              w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
              h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }
      }
      : y.haswrapper ? function() {
          return {
              w: y.doc.outerWidth() + parseInt(y.win.css("paddingLeft")) + parseInt(y.win.css("paddingRight")),
              h: y.doc.outerHeight() + parseInt(y.win.css("paddingTop")) + parseInt(y.win.css("paddingBottom"))
          }
      }
      : function() {
          return {
              w: y.docscroll[0].scrollWidth,
              h: y.docscroll[0].scrollHeight
          }
      }
      ,
      this.onResize = function(e, t) {
          if (!y || !y.win)
              return !1;
          if (!y.haswrapper && !y.ispage) {
              if ("none" == y.win.css("display"))
                  return y.visibility && y.hideRail().hideRailHr(),
                  !1;
              y.hidden || y.visibility || y.showRail().showRailHr()
          }
          var n = y.page.maxh
            , r = y.page.maxw
            , o = {
              h: y.view.h,
              w: y.view.w
          };
          if (y.view = {
              w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
              h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight)
          },
          y.page = t ? t : y.getContentSize(),
          y.page.maxh = Math.max(0, y.page.h - y.view.h),
          y.page.maxw = Math.max(0, y.page.w - y.view.w),
          y.page.maxh == n && y.page.maxw == r && y.view.w == o.w && y.view.h == o.h) {
              if (y.ispage)
                  return y;
              var i = y.win.offset();
              if (y.lastposition) {
                  var s = y.lastposition;
                  if (s.top == i.top && s.left == i.left)
                      return y
              }
              y.lastposition = i
          }
          if (0 == y.page.maxh ? (y.hideRail(),
          y.scrollvaluemax = 0,
          y.scroll.y = 0,
          y.scrollratio.y = 0,
          y.cursorheight = 0,
          y.setScrollTop(0),
          y.rail && (y.rail.scrollable = !1)) : (y.page.maxh -= y.opt.railpadding.top + y.opt.railpadding.bottom,
          y.rail.scrollable = !0),
          0 == y.page.maxw ? (y.hideRailHr(),
          y.scrollvaluemaxw = 0,
          y.scroll.x = 0,
          y.scrollratio.x = 0,
          y.cursorwidth = 0,
          y.setScrollLeft(0),
          y.railh && (y.railh.scrollable = !1)) : (y.page.maxw -= y.opt.railpadding.left + y.opt.railpadding.right,
          y.railh && (y.railh.scrollable = y.opt.horizrailenabled)),
          y.railslocked = y.locked || 0 == y.page.maxh && 0 == y.page.maxw,
          y.railslocked)
              return y.ispage || y.updateScrollBar(y.view),
              !1;
          y.hidden || y.visibility ? !y.railh || y.hidden || y.railh.visibility || y.showRailHr() : y.showRail().showRailHr(),
          y.istextarea && y.win.css("resize") && "none" != y.win.css("resize") && (y.view.h -= 20),
          y.cursorheight = Math.min(y.view.h, Math.round(y.view.h * (y.view.h / y.page.h))),
          y.cursorheight = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorheight),
          y.cursorwidth = Math.min(y.view.w, Math.round(y.view.w * (y.view.w / y.page.w))),
          y.cursorwidth = y.opt.cursorfixedheight ? y.opt.cursorfixedheight : Math.max(y.opt.cursorminheight, y.cursorwidth),
          y.scrollvaluemax = y.view.h - y.cursorheight - y.cursor.hborder - (y.opt.railpadding.top + y.opt.railpadding.bottom),
          y.railh && (y.railh.width = y.page.maxh > 0 ? y.view.w - y.rail.width : y.view.w,
          y.scrollvaluemaxw = y.railh.width - y.cursorwidth - y.cursorh.wborder - (y.opt.railpadding.left + y.opt.railpadding.right)),
          y.ispage || y.updateScrollBar(y.view),
          y.scrollratio = {
              x: y.page.maxw / y.scrollvaluemaxw,
              y: y.page.maxh / y.scrollvaluemax
          };
          var a = y.getScrollTop();
          return a > y.page.maxh ? y.doScrollTop(y.page.maxh) : (y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)),
          y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x)),
          y.cursoractive && y.noticeCursor()),
          y.scroll.y && 0 == y.getScrollTop() && y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)),
          y
      }
      ,
      this.resize = y.onResize,
      this.hlazyresize = 0,
      this.lazyResize = function(e) {
          return y.haswrapper || y.hide(),
          y.hlazyresize && clearTimeout(y.hlazyresize),
          y.hlazyresize = setTimeout(function() {
              y && y.show().resize()
          }, 240),
          y
      }
      ,
      this.jqbind = function(e, t, n) {
          y.events.push({
              e: e,
              n: t,
              f: n,
              q: !0
          }),
          l(e).bind(t, n)
      }
      ,
      this.mousewheel = function(e, t, n) {
          var r = "jquery"in e ? e[0] : e;
          if ("onwheel"in document.createElement("div"))
              y._bind(r, "wheel", t, n || !1);
          else {
              var o = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
              p(r, o, t, n || !1),
              "DOMMouseScroll" == o && p(r, "MozMousePixelScroll", t, n || !1)
          }
      }
      ,
      k.haseventlistener ? (this.bind = function(e, t, n, r) {
          var o = "jquery"in e ? e[0] : e;
          y._bind(o, t, n, r || !1)
      }
      ,
      this._bind = function(e, t, n, r) {
          y.events.push({
              e: e,
              n: t,
              f: n,
              b: r,
              q: !1
          }),
          e.addEventListener(t, n, r || !1)
      }
      ,
      this.cancelEvent = function(e) {
          if (!e)
              return !1;
          var e = e.original ? e.original : e;
          return e.cancelable && e.preventDefault(),
          e.stopPropagation(),
          e.preventManipulation && e.preventManipulation(),
          !1
      }
      ,
      this.stopPropagation = function(e) {
          if (!e)
              return !1;
          var e = e.original ? e.original : e;
          return e.stopPropagation(),
          !1
      }
      ,
      this._unbind = function(e, t, n, r) {
          e.removeEventListener(t, n, r)
      }
      ) : (this.bind = function(e, t, n, r) {
          var o = "jquery"in e ? e[0] : e;
          y._bind(o, t, function(e) {
              return e = e || window.event || !1,
              e && e.srcElement && (e.target = e.srcElement),
              "pageY"in e || (e.pageX = e.clientX + document.documentElement.scrollLeft,
              e.pageY = e.clientY + document.documentElement.scrollTop),
              n.call(o, e) !== !1 && r !== !1 || y.cancelEvent(e)
          })
      }
      ,
      this._bind = function(e, t, n, r) {
          y.events.push({
              e: e,
              n: t,
              f: n,
              b: r,
              q: !1
          }),
          e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
      }
      ,
      this.cancelEvent = function(e) {
          var e = window.event || !1;
          return !!e && (e.cancelBubble = !0,
          e.cancel = !0,
          e.returnValue = !1,
          !1)
      }
      ,
      this.stopPropagation = function(e) {
          var e = window.event || !1;
          return !!e && (e.cancelBubble = !0,
          !1)
      }
      ,
      this._unbind = function(e, t, n, r) {
          e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = !1
      }
      ),
      this.unbindAll = function() {
          for (var e = 0; e < y.events.length; e++) {
              var t = y.events[e];
              t.q ? t.e.unbind(t.n, t.f) : y._unbind(t.e, t.n, t.f, t.b)
          }
      }
      ,
      this.showRail = function() {
          return 0 == y.page.maxh || !y.ispage && "none" == y.win.css("display") || (y.visibility = !0,
          y.rail.visibility = !0,
          y.rail.css("display", "block")),
          y
      }
      ,
      this.showRailHr = function() {
          return y.railh ? (0 == y.page.maxw || !y.ispage && "none" == y.win.css("display") || (y.railh.visibility = !0,
          y.railh.css("display", "block")),
          y) : y
      }
      ,
      this.hideRail = function() {
          return y.visibility = !1,
          y.rail.visibility = !1,
          y.rail.css("display", "none"),
          y
      }
      ,
      this.hideRailHr = function() {
          return y.railh ? (y.railh.visibility = !1,
          y.railh.css("display", "none"),
          y) : y
      }
      ,
      this.show = function() {
          return y.hidden = !1,
          y.railslocked = !1,
          y.showRail().showRailHr()
      }
      ,
      this.hide = function() {
          return y.hidden = !0,
          y.railslocked = !0,
          y.hideRail().hideRailHr()
      }
      ,
      this.toggle = function() {
          return y.hidden ? y.show() : y.hide()
      }
      ,
      this.remove = function() {
          y.stop(),
          y.cursortimeout && clearTimeout(y.cursortimeout);
          for (var e in y.delaylist)
              y.delaylist[e] && f(y.delaylist[e].h);
          y.doZoomOut(),
          y.unbindAll(),
          k.isie9 && y.win[0].detachEvent("onpropertychange", y.onAttributeChange),
          y.observer !== !1 && y.observer.disconnect(),
          y.observerremover !== !1 && y.observerremover.disconnect(),
          y.observerbody !== !1 && y.observerbody.disconnect(),
          y.events = null,
          y.cursor && y.cursor.remove(),
          y.cursorh && y.cursorh.remove(),
          y.rail && y.rail.remove(),
          y.railh && y.railh.remove(),
          y.zoom && y.zoom.remove();
          for (var t = 0; t < y.saved.css.length; t++) {
              var n = y.saved.css[t];
              n[0].css(n[1], void 0 === n[2] ? "" : n[2])
          }
          y.saved = !1,
          y.me.data("__nicescroll", "");
          var r = l.nicescroll;
          r.each(function(e) {
              if (this && this.id === y.id) {
                  delete r[e];
                  for (var t = ++e; t < r.length; t++,
                  e++)
                      r[e] = r[t];
                  r.length--,
                  r.length && delete r[r.length]
              }
          });
          for (var o in y)
              y[o] = null,
              delete y[o];
          y = null
      }
      ,
      this.scrollstart = function(e) {
          return this.onscrollstart = e,
          y
      }
      ,
      this.scrollend = function(e) {
          return this.onscrollend = e,
          y
      }
      ,
      this.scrollcancel = function(e) {
          return this.onscrollcancel = e,
          y
      }
      ,
      this.zoomin = function(e) {
          return this.onzoomin = e,
          y
      }
      ,
      this.zoomout = function(e) {
          return this.onzoomout = e,
          y
      }
      ,
      this.isScrollable = function(e) {
          var t = e.target ? e.target : e;
          if ("OPTION" == t.nodeName)
              return !0;
          for (; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName); ) {
              var n = l(t)
                , r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
              if (/scroll|auto/.test(r))
                  return t.clientHeight != t.scrollHeight;
              t = !!t.parentNode && t.parentNode
          }
          return !1
      }
      ,
      this.getViewport = function(e) {
          for (var t = !(!e || !e.parentNode) && e.parentNode; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName); ) {
              var n = l(t);
              if (/fixed|absolute/.test(n.css("position")))
                  return n;
              var r = n.css("overflowY") || n.css("overflowX") || n.css("overflow") || "";
              if (/scroll|auto/.test(r) && t.clientHeight != t.scrollHeight)
                  return n;
              if (n.getNiceScroll().length > 0)
                  return n;
              t = !!t.parentNode && t.parentNode
          }
          return !1
      }
      ,
      this.triggerScrollEnd = function() {
          if (y.onscrollend) {
              var e = y.getScrollLeft()
                , t = y.getScrollTop()
                , n = {
                  type: "scrollend",
                  current: {
                      x: e,
                      y: t
                  },
                  end: {
                      x: e,
                      y: t
                  }
              };
              y.onscrollend.call(y, n)
          }
      }
      ,
      this.onmousewheel = function(e) {
          if (!y.wheelprevented) {
              if (y.railslocked)
                  return y.debounced("checkunlock", y.resize, 250),
                  !0;
              if (y.rail.drag)
                  return y.cancelEvent(e);
              if ("auto" == y.opt.oneaxismousemode && 0 != e.deltaX && (y.opt.oneaxismousemode = !1),
              y.opt.oneaxismousemode && 0 == e.deltaX && !y.rail.scrollable)
                  return !y.railh || !y.railh.scrollable || y.onmousewheelhr(e);
              var t = +new Date
                , n = !1;
              if (y.opt.preservenativescrolling && y.checkarea + 600 < t && (y.nativescrollingarea = y.isScrollable(e),
              n = !0),
              y.checkarea = t,
              y.nativescrollingarea)
                  return !0;
              var r = m(e, !1, n);
              return r && (y.checkarea = 0),
              r
          }
      }
      ,
      this.onmousewheelhr = function(e) {
          if (!y.wheelprevented) {
              if (y.railslocked || !y.railh.scrollable)
                  return !0;
              if (y.rail.drag)
                  return y.cancelEvent(e);
              var t = +new Date
                , n = !1;
              return y.opt.preservenativescrolling && y.checkarea + 600 < t && (y.nativescrollingarea = y.isScrollable(e),
              n = !0),
              y.checkarea = t,
              !!y.nativescrollingarea || (y.railslocked ? y.cancelEvent(e) : m(e, !0, n))
          }
      }
      ,
      this.stop = function() {
          return y.cancelScroll(),
          y.scrollmon && y.scrollmon.stop(),
          y.cursorfreezed = !1,
          y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)),
          y.noticeCursor(),
          y
      }
      ,
      this.getTransitionSpeed = function(e) {
          var t = Math.round(10 * y.opt.scrollspeed)
            , n = Math.min(t, Math.round(e / 20 * y.opt.scrollspeed));
          return n > 20 ? n : 0
      }
      ,
      y.opt.smoothscroll ? y.ishwscroll && k.hastransition && y.opt.usetransition && y.opt.smoothscroll ? (this.prepareTransition = function(e, t) {
          var n = t ? e > 20 ? e : 0 : y.getTransitionSpeed(e)
            , r = n ? k.prefixstyle + "transform " + n + "ms ease-out" : "";
          return y.lasttransitionstyle && y.lasttransitionstyle == r || (y.lasttransitionstyle = r,
          y.doc.css(k.transitionstyle, r)),
          n
      }
      ,
      this.doScrollLeft = function(e, t) {
          var n = y.scrollrunning ? y.newscrolly : y.getScrollTop();
          y.doScrollPos(e, n, t)
      }
      ,
      this.doScrollTop = function(e, t) {
          var n = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
          y.doScrollPos(n, e, t)
      }
      ,
      this.doScrollPos = function(e, t, n) {
          var r = y.getScrollTop()
            , o = y.getScrollLeft();
          return ((y.newscrolly - r) * (t - r) < 0 || (y.newscrollx - o) * (e - o) < 0) && y.cancelScroll(),
          0 == y.opt.bouncescroll && (t < 0 ? t = 0 : t > y.page.maxh && (t = y.page.maxh),
          e < 0 ? e = 0 : e > y.page.maxw && (e = y.page.maxw)),
          (!y.scrollrunning || e != y.newscrollx || t != y.newscrolly) && (y.newscrolly = t,
          y.newscrollx = e,
          y.newscrollspeed = n || !1,
          !y.timer && void (y.timer = setTimeout(function() {
              var n = y.getScrollTop()
                , r = y.getScrollLeft()
                , o = {};
              o.x = e - r,
              o.y = t - n,
              o.px = r,
              o.py = n;
              var i = Math.round(Math.sqrt(Math.pow(o.x, 2) + Math.pow(o.y, 2)))
                , s = y.newscrollspeed && y.newscrollspeed > 1 ? y.newscrollspeed : y.getTransitionSpeed(i);
              if (y.newscrollspeed && y.newscrollspeed <= 1 && (s *= y.newscrollspeed),
              y.prepareTransition(s, !0),
              y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm),
              s > 0) {
                  if (!y.scrollrunning && y.onscrollstart) {
                      var a = {
                          type: "scrollstart",
                          current: {
                              x: r,
                              y: n
                          },
                          request: {
                              x: e,
                              y: t
                          },
                          end: {
                              x: y.newscrollx,
                              y: y.newscrolly
                          },
                          speed: s
                      };
                      y.onscrollstart.call(y, a)
                  }
                  k.transitionend ? y.scrollendtrapped || (y.scrollendtrapped = !0,
                  y.bind(y.doc, k.transitionend, y.onScrollTransitionEnd, !1)) : (y.scrollendtrapped && clearTimeout(y.scrollendtrapped),
                  y.scrollendtrapped = setTimeout(y.onScrollTransitionEnd, s));
                  var l = n
                    , c = r;
                  y.timerscroll = {
                      bz: new T(l,y.newscrolly,s,0,0,.58,1),
                      bh: new T(c,y.newscrollx,s,0,0,.58,1)
                  },
                  y.cursorfreezed || (y.timerscroll.tm = setInterval(function() {
                      y.showCursor(y.getScrollTop(), y.getScrollLeft())
                  }, 60))
              }
              y.synched("doScroll-set", function() {
                  y.timer = 0,
                  y.scrollendtrapped && (y.scrollrunning = !0),
                  y.setScrollTop(y.newscrolly),
                  y.setScrollLeft(y.newscrollx),
                  y.scrollendtrapped || y.onScrollTransitionEnd()
              })
          }, 50)))
      }
      ,
      this.cancelScroll = function() {
          if (!y.scrollendtrapped)
              return !0;
          var e = y.getScrollTop()
            , t = y.getScrollLeft();
          return y.scrollrunning = !1,
          k.transitionend || clearTimeout(k.transitionend),
          y.scrollendtrapped = !1,
          y._unbind(y.doc[0], k.transitionend, y.onScrollTransitionEnd),
          y.prepareTransition(0),
          y.setScrollTop(e),
          y.railh && y.setScrollLeft(t),
          y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm),
          y.timerscroll = !1,
          y.cursorfreezed = !1,
          y.showCursor(e, t),
          y
      }
      ,
      this.onScrollTransitionEnd = function() {
          y.scrollendtrapped && y._unbind(y.doc[0], k.transitionend, y.onScrollTransitionEnd),
          y.scrollendtrapped = !1,
          y.prepareTransition(0),
          y.timerscroll && y.timerscroll.tm && clearInterval(y.timerscroll.tm),
          y.timerscroll = !1;
          var e = y.getScrollTop()
            , t = y.getScrollLeft();
          return y.setScrollTop(e),
          y.railh && y.setScrollLeft(t),
          y.noticeCursor(!1, e, t),
          y.cursorfreezed = !1,
          e < 0 ? e = 0 : e > y.page.maxh && (e = y.page.maxh),
          t < 0 ? t = 0 : t > y.page.maxw && (t = y.page.maxw),
          e != y.newscrolly || t != y.newscrollx ? y.doScrollPos(t, e, y.opt.snapbackspeed) : (y.onscrollend && y.scrollrunning && y.triggerScrollEnd(),
          void (y.scrollrunning = !1))
      }
      ) : (this.doScrollLeft = function(e, t) {
          var n = y.scrollrunning ? y.newscrolly : y.getScrollTop();
          y.doScrollPos(e, n, t)
      }
      ,
      this.doScrollTop = function(e, t) {
          var n = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
          y.doScrollPos(n, e, t)
      }
      ,
      this.doScrollPos = function(e, t, n) {
          function r() {
              if (y.cancelAnimationFrame)
                  return !0;
              if (y.scrollrunning = !0,
              h = 1 - h)
                  return y.timer = u(r) || 1;
              var e, t, n = 0, o = t = y.getScrollTop();
              if (y.dst.ay) {
                  o = y.bzscroll ? y.dst.py + y.bzscroll.getNow() * y.dst.ay : y.newscrolly;
                  var i = o - t;
                  (i < 0 && o < y.newscrolly || i > 0 && o > y.newscrolly) && (o = y.newscrolly),
                  y.setScrollTop(o),
                  o == y.newscrolly && (n = 1)
              } else
                  n = 1;
              var s = e = y.getScrollLeft();
              if (y.dst.ax) {
                  s = y.bzscroll ? y.dst.px + y.bzscroll.getNow() * y.dst.ax : y.newscrollx;
                  var i = s - e;
                  (i < 0 && s < y.newscrollx || i > 0 && s > y.newscrollx) && (s = y.newscrollx),
                  y.setScrollLeft(s),
                  s == y.newscrollx && (n += 1)
              } else
                  n += 1;
              2 == n ? (y.timer = 0,
              y.cursorfreezed = !1,
              y.bzscroll = !1,
              y.scrollrunning = !1,
              o < 0 ? o = 0 : o > y.page.maxh && (o = Math.max(0, y.page.maxh)),
              s < 0 ? s = 0 : s > y.page.maxw && (s = y.page.maxw),
              s != y.newscrollx || o != y.newscrolly ? y.doScrollPos(s, o) : y.onscrollend && y.triggerScrollEnd()) : y.timer = u(r) || 1
          }
          var t = void 0 === t || t === !1 ? y.getScrollTop(!0) : t;
          if (y.timer && y.newscrolly == t && y.newscrollx == e)
              return !0;
          y.timer && f(y.timer),
          y.timer = 0;
          var o = y.getScrollTop()
            , i = y.getScrollLeft();
          ((y.newscrolly - o) * (t - o) < 0 || (y.newscrollx - i) * (e - i) < 0) && y.cancelScroll(),
          y.newscrolly = t,
          y.newscrollx = e,
          y.bouncescroll && y.rail.visibility || (y.newscrolly < 0 ? y.newscrolly = 0 : y.newscrolly > y.page.maxh && (y.newscrolly = y.page.maxh)),
          y.bouncescroll && y.railh.visibility || (y.newscrollx < 0 ? y.newscrollx = 0 : y.newscrollx > y.page.maxw && (y.newscrollx = y.page.maxw)),
          y.dst = {},
          y.dst.x = e - i,
          y.dst.y = t - o,
          y.dst.px = i,
          y.dst.py = o;
          var s = Math.round(Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2)));
          y.dst.ax = y.dst.x / s,
          y.dst.ay = y.dst.y / s;
          var a = 0
            , l = s;
          0 == y.dst.x ? (a = o,
          l = t,
          y.dst.ay = 1,
          y.dst.py = 0) : 0 == y.dst.y && (a = i,
          l = e,
          y.dst.ax = 1,
          y.dst.px = 0);
          var c = y.getTransitionSpeed(s);
          if (n && n <= 1 && (c *= n),
          c > 0 ? y.bzscroll = y.bzscroll ? y.bzscroll.update(l, c) : new T(a,l,c,0,1,0,1) : y.bzscroll = !1,
          !y.timer) {
              (o == y.page.maxh && t >= y.page.maxh || i == y.page.maxw && e >= y.page.maxw) && y.checkContentSize();
              var h = 1;
              if (y.cancelAnimationFrame = !1,
              y.timer = 1,
              y.onscrollstart && !y.scrollrunning) {
                  var p = {
                      type: "scrollstart",
                      current: {
                          x: i,
                          y: o
                      },
                      request: {
                          x: e,
                          y: t
                      },
                      end: {
                          x: y.newscrollx,
                          y: y.newscrolly
                      },
                      speed: c
                  };
                  y.onscrollstart.call(y, p)
              }
              r(),
              (o == y.page.maxh && t >= o || i == y.page.maxw && e >= i) && y.checkContentSize(),
              y.noticeCursor()
          }
      }
      ,
      this.cancelScroll = function() {
          return y.timer && f(y.timer),
          y.timer = 0,
          y.bzscroll = !1,
          y.scrollrunning = !1,
          y
      }
      ) : (this.doScrollLeft = function(e, t) {
          var n = y.getScrollTop();
          y.doScrollPos(e, n, t)
      }
      ,
      this.doScrollTop = function(e, t) {
          var n = y.getScrollLeft();
          y.doScrollPos(n, e, t)
      }
      ,
      this.doScrollPos = function(e, t, n) {
          var r = e > y.page.maxw ? y.page.maxw : e;
          r < 0 && (r = 0);
          var o = t > y.page.maxh ? y.page.maxh : t;
          o < 0 && (o = 0),
          y.synched("scroll", function() {
              y.setScrollTop(o),
              y.setScrollLeft(r)
          })
      }
      ,
      this.cancelScroll = function() {}
      ),
      this.doScrollBy = function(e, t) {
          var n = 0;
          if (t)
              n = Math.floor((y.scroll.y - e) * y.scrollratio.y);
          else {
              var r = y.timer ? y.newscrolly : y.getScrollTop(!0);
              n = r - e
          }
          if (y.bouncescroll) {
              var o = Math.round(y.view.h / 2);
              n < -o ? n = -o : n > y.page.maxh + o && (n = y.page.maxh + o)
          }
          y.cursorfreezed = !1;
          var i = y.getScrollTop(!0);
          return n < 0 && i <= 0 ? y.noticeCursor() : n > y.page.maxh && i >= y.page.maxh ? (y.checkContentSize(),
          y.noticeCursor()) : void y.doScrollTop(n)
      }
      ,
      this.doScrollLeftBy = function(e, t) {
          var n = 0;
          if (t)
              n = Math.floor((y.scroll.x - e) * y.scrollratio.x);
          else {
              var r = y.timer ? y.newscrollx : y.getScrollLeft(!0);
              n = r - e
          }
          if (y.bouncescroll) {
              var o = Math.round(y.view.w / 2);
              n < -o ? n = -o : n > y.page.maxw + o && (n = y.page.maxw + o)
          }
          y.cursorfreezed = !1;
          var i = y.getScrollLeft(!0);
          return n < 0 && i <= 0 ? y.noticeCursor() : n > y.page.maxw && i >= y.page.maxw ? y.noticeCursor() : void y.doScrollLeft(n)
      }
      ,
      this.doScrollTo = function(e, t) {
          var n = t ? Math.round(e * y.scrollratio.y) : e;
          n < 0 ? n = 0 : n > y.page.maxh && (n = y.page.maxh),
          y.cursorfreezed = !1,
          y.doScrollTop(e)
      }
      ,
      this.checkContentSize = function() {
          var e = y.getContentSize();
          e.h == y.page.h && e.w == y.page.w || y.resize(!1, e)
      }
      ,
      y.onscroll = function(e) {
          y.rail.drag || y.cursorfreezed || y.synched("scroll", function() {
              y.scroll.y = Math.round(y.getScrollTop() * (1 / y.scrollratio.y)),
              y.railh && (y.scroll.x = Math.round(y.getScrollLeft() * (1 / y.scrollratio.x))),
              y.noticeCursor()
          })
      }
      ,
      y.bind(y.docscroll, "scroll", y.onscroll),
      this.doZoomIn = function(e) {
          if (!y.zoomactive) {
              y.zoomactive = !0,
              y.zoomrestore = {
                  style: {}
              };
              var t = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"]
                , n = y.win[0].style;
              for (var r in t) {
                  var o = t[r];
                  y.zoomrestore.style[o] = void 0 !== n[o] ? n[o] : ""
              }
              y.zoomrestore.style.width = y.win.css("width"),
              y.zoomrestore.style.height = y.win.css("height"),
              y.zoomrestore.padding = {
                  w: y.win.outerWidth() - y.win.width(),
                  h: y.win.outerHeight() - y.win.height()
              },
              k.isios4 && (y.zoomrestore.scrollTop = l(window).scrollTop(),
              l(window).scrollTop(0)),
              y.win.css({
                  position: k.isios4 ? "absolute" : "fixed",
                  top: 0,
                  left: 0,
                  zIndex: a + 100,
                  margin: 0
              });
              var i = y.win.css("backgroundColor");
              return ("" == i || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(i)) && y.win.css("backgroundColor", "#fff"),
              y.rail.css({
                  zIndex: a + 101
              }),
              y.zoom.css({
                  zIndex: a + 102
              }),
              y.zoom.css("backgroundPosition", "0px -18px"),
              y.resizeZoom(),
              y.onzoomin && y.onzoomin.call(y),
              y.cancelEvent(e)
          }
      }
      ,
      this.doZoomOut = function(e) {
          if (y.zoomactive)
              return y.zoomactive = !1,
              y.win.css("margin", ""),
              y.win.css(y.zoomrestore.style),
              k.isios4 && l(window).scrollTop(y.zoomrestore.scrollTop),
              y.rail.css({
                  "z-index": y.zindex
              }),
              y.zoom.css({
                  "z-index": y.zindex
              }),
              y.zoomrestore = !1,
              y.zoom.css("backgroundPosition", "0px 0px"),
              y.onResize(),
              y.onzoomout && y.onzoomout.call(y),
              y.cancelEvent(e)
      }
      ,
      this.doZoom = function(e) {
          return y.zoomactive ? y.doZoomOut(e) : y.doZoomIn(e)
      }
      ,
      this.resizeZoom = function() {
          if (y.zoomactive) {
              var e = y.getScrollTop();
              y.win.css({
                  width: l(window).width() - y.zoomrestore.padding.w + "px",
                  height: l(window).height() - y.zoomrestore.padding.h + "px"
              }),
              y.onResize(),
              y.setScrollTop(Math.min(y.page.maxh, e))
          }
      }
      ,
      this.init(),
      l.nicescroll.push(this)
  }
    , b = function(e) {
      var t = this;
      this.nc = e,
      this.lastx = 0,
      this.lasty = 0,
      this.speedx = 0,
      this.speedy = 0,
      this.lasttime = 0,
      this.steptime = 0,
      this.snapx = !1,
      this.snapy = !1,
      this.demulx = 0,
      this.demuly = 0,
      this.lastscrollx = -1,
      this.lastscrolly = -1,
      this.chkx = 0,
      this.chky = 0,
      this.timer = 0,
      this.time = function() {
          return +new Date
      }
      ,
      this.reset = function(e, n) {
          t.stop();
          var r = t.time();
          t.steptime = 0,
          t.lasttime = r,
          t.speedx = 0,
          t.speedy = 0,
          t.lastx = e,
          t.lasty = n,
          t.lastscrollx = -1,
          t.lastscrolly = -1
      }
      ,
      this.update = function(e, n) {
          var r = t.time();
          t.steptime = r - t.lasttime,
          t.lasttime = r;
          var o = n - t.lasty
            , i = e - t.lastx
            , s = t.nc.getScrollTop()
            , a = t.nc.getScrollLeft()
            , l = s + o
            , c = a + i;
          t.snapx = c < 0 || c > t.nc.page.maxw,
          t.snapy = l < 0 || l > t.nc.page.maxh,
          t.speedx = i,
          t.speedy = o,
          t.lastx = e,
          t.lasty = n
      }
      ,
      this.stop = function() {
          t.nc.unsynched("domomentum2d"),
          t.timer && clearTimeout(t.timer),
          t.timer = 0,
          t.lastscrollx = -1,
          t.lastscrolly = -1
      }
      ,
      this.doSnapy = function(e, n) {
          var r = !1;
          n < 0 ? (n = 0,
          r = !0) : n > t.nc.page.maxh && (n = t.nc.page.maxh,
          r = !0),
          e < 0 ? (e = 0,
          r = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw,
          r = !0),
          r ? t.nc.doScrollPos(e, n, t.nc.opt.snapbackspeed) : t.nc.triggerScrollEnd()
      }
      ,
      this.doMomentum = function(e) {
          var n = t.time()
            , r = e ? n + e : t.lasttime
            , o = t.nc.getScrollLeft()
            , i = t.nc.getScrollTop()
            , s = t.nc.page.maxh
            , a = t.nc.page.maxw;
          t.speedx = a > 0 ? Math.min(60, t.speedx) : 0,
          t.speedy = s > 0 ? Math.min(60, t.speedy) : 0;
          var l = r && n - r <= 60;
          (i < 0 || i > s || o < 0 || o > a) && (l = !1);
          var c = !(!t.speedy || !l) && t.speedy
            , u = !(!t.speedx || !l) && t.speedx;
          if (c || u) {
              var f = Math.max(16, t.steptime);
              if (f > 50) {
                  var h = f / 50;
                  t.speedx *= h,
                  t.speedy *= h,
                  f = 50
              }
              t.demulxy = 0,
              t.lastscrollx = t.nc.getScrollLeft(),
              t.chkx = t.lastscrollx,
              t.lastscrolly = t.nc.getScrollTop(),
              t.chky = t.lastscrolly;
              var p = t.lastscrollx
                , d = t.lastscrolly
                , g = function() {
                  var e = t.time() - n > 600 ? .04 : .02;
                  t.speedx && (p = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)),
                  t.lastscrollx = p,
                  (p < 0 || p > a) && (e = .1)),
                  t.speedy && (d = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)),
                  t.lastscrolly = d,
                  (d < 0 || d > s) && (e = .1)),
                  t.demulxy = Math.min(1, t.demulxy + e),
                  t.nc.synched("domomentum2d", function() {
                      if (t.speedx) {
                          t.nc.getScrollLeft();
                          t.chkx = p,
                          t.nc.setScrollLeft(p)
                      }
                      if (t.speedy) {
                          t.nc.getScrollTop();
                          t.chky = d,
                          t.nc.setScrollTop(d)
                      }
                      t.timer || (t.nc.hideCursor(),
                      t.doSnapy(p, d))
                  }),
                  t.demulxy < 1 ? t.timer = setTimeout(g, f) : (t.stop(),
                  t.nc.hideCursor(),
                  t.doSnapy(p, d))
              };
              g()
          } else
              t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
      }
  }
    , w = e.fn.scrollTop;
  e.cssHooks.pageYOffset = {
      get: function(e, t, n) {
          var r = l.data(e, "__nicescroll") || !1;
          return r && r.ishwscroll ? r.getScrollTop() : w.call(e)
      },
      set: function(e, t) {
          var n = l.data(e, "__nicescroll") || !1;
          return n && n.ishwscroll ? n.setScrollTop(parseInt(t)) : w.call(e, t),
          this
      }
  },
  e.fn.scrollTop = function(e) {
      if (void 0 === e) {
          var t = !!this[0] && (l.data(this[0], "__nicescroll") || !1);
          return t && t.ishwscroll ? t.getScrollTop() : w.call(this)
      }
      return this.each(function() {
          var t = l.data(this, "__nicescroll") || !1;
          t && t.ishwscroll ? t.setScrollTop(parseInt(e)) : w.call(l(this), e)
      })
  }
  ;
  var x = e.fn.scrollLeft;
  l.cssHooks.pageXOffset = {
      get: function(e, t, n) {
          var r = l.data(e, "__nicescroll") || !1;
          return r && r.ishwscroll ? r.getScrollLeft() : x.call(e)
      },
      set: function(e, t) {
          var n = l.data(e, "__nicescroll") || !1;
          return n && n.ishwscroll ? n.setScrollLeft(parseInt(t)) : x.call(e, t),
          this
      }
  },
  e.fn.scrollLeft = function(e) {
      if (void 0 === e) {
          var t = !!this[0] && (l.data(this[0], "__nicescroll") || !1);
          return t && t.ishwscroll ? t.getScrollLeft() : x.call(this)
      }
      return this.each(function() {
          var t = l.data(this, "__nicescroll") || !1;
          t && t.ishwscroll ? t.setScrollLeft(parseInt(e)) : x.call(l(this), e)
      })
  }
  ;
  var _ = function(e) {
      var t = this;
      if (this.length = 0,
      this.name = "nicescrollarray",
      this.each = function(e) {
          return l.each(t, e),
          t
      }
      ,
      this.push = function(e) {
          t[t.length] = e,
          t.length++
      }
      ,
      this.eq = function(e) {
          return t[e]
      }
      ,
      e)
          for (var n = 0; n < e.length; n++) {
              var r = l.data(e[n], "__nicescroll") || !1;
              r && (this[this.length] = r,
              this.length++)
          }
      return this
  };
  n(_.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, t) {
      e[t] = function() {
          var e = arguments;
          return this.each(function() {
              this[t].apply(this, e)
          })
      }
  }),
  e.fn.getNiceScroll = function(e) {
      return void 0 === e ? new _(this) : this[e] && l.data(this[e], "__nicescroll") || !1
  }
  ,
  e.expr[":"].nicescroll = function(e) {
      return void 0 !== l.data(e, "__nicescroll")
  }
  ,
  l.fn.niceScroll = function(e, t) {
      void 0 !== t || "object" != typeof e || "jquery"in e || (t = e,
      e = !1),
      t = l.extend({}, t);
      var n = new _;
      void 0 === t && (t = {}),
      e && (t.doc = l(e),
      t.win = l(this));
      var r = !("doc"in t);
      return r || "win"in t || (t.win = l(this)),
      this.each(function() {
          var e = l(this).data("__nicescroll") || !1;
          e || (t.doc = r ? l(this) : t.doc,
          e = new y(t,l(this)),
          l(this).data("__nicescroll", e)),
          n.push(e)
      }),
      1 == n.length ? n[0] : n
  }
  ,
  window.NiceScroll = {
      getjQuery: function() {
          return e
      }
  },
  l.nicescroll || (l.nicescroll = new _,
  l.nicescroll.options = g)
}),
"object" != typeof JSON && (JSON = {}),
function() {
  "use strict";
  function f(e) {
      return e < 10 ? "0" + e : e
  }
  function this_value() {
      return this.valueOf()
  }
  function quote(e) {
      return rx_escapable.lastIndex = 0,
      rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
          var t = meta[e];
          return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + e + '"'
  }
  function str(e, t) {
      var n, r, o, i, s, a = gap, l = t[e];
      switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)),
      "function" == typeof rep && (l = rep.call(t, e, l)),
      typeof l) {
      case "string":
          return quote(l);
      case "number":
          return isFinite(l) ? String(l) : "null";
      case "boolean":
      case "null":
          return String(l);
      case "object":
          if (!l)
              return "null";
          if (gap += indent,
          s = [],
          "[object Array]" === Object.prototype.toString.apply(l)) {
              for (i = l.length,
              n = 0; n < i; n += 1)
                  s[n] = str(n, l) || "null";
              return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]",
              gap = a,
              o
          }
          if (rep && "object" == typeof rep)
              for (i = rep.length,
              n = 0; n < i; n += 1)
                  "string" == typeof rep[n] && (r = rep[n],
                  o = str(r, l),
                  o && s.push(quote(r) + (gap ? ": " : ":") + o));
          else
              for (r in l)
                  Object.prototype.hasOwnProperty.call(l, r) && (o = str(r, l),
                  o && s.push(quote(r) + (gap ? ": " : ":") + o));
          return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}",
          gap = a,
          o
      }
  }
  var rx_one = /^[\],:{}\s]*$/
    , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
    , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
    , rx_four = /(?:^|:|,)(?:\s*\[)+/g
    , rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
    , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
  }
  ,
  Boolean.prototype.toJSON = this_value,
  Number.prototype.toJSON = this_value,
  String.prototype.toJSON = this_value);
  var gap, indent, meta, rep;
  "function" != typeof JSON.stringify && (meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
  },
  JSON.stringify = function(e, t, n) {
      var r;
      if (gap = "",
      indent = "",
      "number" == typeof n)
          for (r = 0; r < n; r += 1)
              indent += " ";
      else
          "string" == typeof n && (indent = n);
      if (rep = t,
      t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
          throw new Error("JSON.stringify");
      return str("", {
          "": e
      })
  }
  ),
  "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
      function walk(e, t) {
          var n, r, o = e[t];
          if (o && "object" == typeof o)
              for (n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n),
                  void 0 !== r ? o[n] = r : delete o[n]);
          return reviver.call(e, t, o)
      }
      var j;
      if (text = String(text),
      rx_dangerous.lastIndex = 0,
      rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
          return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
      })),
      rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
          return j = eval("(" + text + ")"),
          "function" == typeof reviver ? walk({
              "": j
          }, "") : j;
      throw new SyntaxError("JSON.parse")
  }
  )
}(),
function(e, t) {
  var n = {
      version: "2.3.2",
      areas: {},
      apis: {},
      inherit: function(e, t) {
          for (var n in e)
              t.hasOwnProperty(n) || (t[n] = e[n]);
          return t
      },
      stringify: function(e) {
          return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e)
      },
      parse: function(e) {
          try {
              return JSON.parse(e)
          } catch (t) {
              return e
          }
      },
      fn: function(e, t) {
          n.storeAPI[e] = t;
          for (var r in n.apis)
              n.apis[r][e] = t
      },
      get: function(e, t) {
          return e.getItem(t)
      },
      set: function(e, t, n) {
          e.setItem(t, n)
      },
      remove: function(e, t) {
          e.removeItem(t)
      },
      key: function(e, t) {
          return e.key(t)
      },
      length: function(e) {
          return e.length
      },
      clear: function(e) {
          e.clear()
      },
      Store: function(e, t, r) {
          var o = n.inherit(n.storeAPI, function(e, t, n) {
              return 0 === arguments.length ? o.getAll() : void 0 !== t ? o.set(e, t, n) : "string" == typeof e || "number" == typeof e ? o.get(e) : e ? o.setAll(e, t) : o.clear()
          });
          o._id = e;
          try {
              var i = "_safariPrivate_";
              t.setItem(i, "sucks"),
              o._area = t,
              t.removeItem(i)
          } catch (s) {}
          return o._area || (o._area = n.inherit(n.storageAPI, {
              items: {},
              name: "fake"
          })),
          o._ns = r || "",
          n.areas[e] || (n.areas[e] = o._area),
          n.apis[o._ns + o._id] || (n.apis[o._ns + o._id] = o),
          o
      },
      storeAPI: {
          area: function(e, t) {
              var r = this[e];
              return r && r.area || (r = n.Store(e, t, this._ns),
              this[e] || (this[e] = r)),
              r
          },
          namespace: function(e, t) {
              if (!e)
                  return this._ns ? this._ns.substring(0, this._ns.length - 1) : "";
              var r = e
                , o = this[r];
              return o && o.namespace || (o = n.Store(this._id, this._area, this._ns + r + "."),
              this[r] || (this[r] = o),
              t || o.area("session", n.areas.session)),
              o
          },
          isFake: function() {
              return "fake" === this._area.name
          },
          toString: function() {
              return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]"
          },
          has: function(e) {
              return this._area.has ? this._area.has(this._in(e)) : !!(this._in(e)in this._area)
          },
          size: function() {
              return this.keys().length
          },
          each: function(e, t) {
              for (var r = 0, o = n.length(this._area); r < o; r++) {
                  var i = this._out(n.key(this._area, r));
                  if (void 0 !== i && e.call(this, i, t || this.get(i)) === !1)
                      break;
                  o > n.length(this._area) && (o--,
                  r--)
              }
              return t || this
          },
          keys: function() {
              return this.each(function(e, t) {
                  t.push(e)
              }, [])
          },
          get: function(e, t) {
              var r = n.get(this._area, this._in(e));
              return null !== r ? n.parse(r) : t || r
          },
          getAll: function() {
              return this.each(function(e, t) {
                  t[e] = this.get(e)
              }, {})
          },
          set: function(e, t, r) {
              var o = this.get(e);
              return null != o && r === !1 ? t : n.set(this._area, this._in(e), n.stringify(t), r) || o
          },
          setAll: function(e, t) {
              var n, r;
              for (var o in e)
                  r = e[o],
                  this.set(o, r, t) !== r && (n = !0);
              return n
          },
          remove: function(e) {
              var t = this.get(e);
              return n.remove(this._area, this._in(e)),
              t
          },
          clear: function() {
              return this._ns ? this.each(function(e) {
                  n.remove(this._area, this._in(e))
              }, 1) : n.clear(this._area),
              this
          },
          clearAll: function() {
              var e = this._area;
              for (var t in n.areas)
                  n.areas.hasOwnProperty(t) && (this._area = n.areas[t],
                  this.clear());
              return this._area = e,
              this
          },
          _in: function(e) {
              return "string" != typeof e && (e = n.stringify(e)),
              this._ns ? this._ns + e : e
          },
          _out: function(e) {
              return this._ns ? e && 0 === e.indexOf(this._ns) ? e.substring(this._ns.length) : void 0 : e
          }
      },
      storageAPI: {
          length: 0,
          has: function(e) {
              return this.items.hasOwnProperty(e)
          },
          key: function(e) {
              var t = 0;
              for (var n in this.items)
                  if (this.has(n) && e === t++)
                      return n
          },
          setItem: function(e, t) {
              this.has(e) || this.length++,
              this.items[e] = t
          },
          removeItem: function(e) {
              this.has(e) && (delete this.items[e],
              this.length--)
          },
          getItem: function(e) {
              return this.has(e) ? this.items[e] : null
          },
          clear: function() {
              for (var e in this.list)
                  this.removeItem(e)
          },
          toString: function() {
              return this.length + " items in " + this.name + "Storage"
          }
      }
  };
  e.store && (n.conflict = e.store);
  var r = n.Store("local", function() {
      try {
          return localStorage
      } catch (e) {}
  }());
  r.local = r,
  r._ = n,
  r.area("session", function() {
      try {
          return sessionStorage
      } catch (e) {}
  }()),
  e.store = r,
  "function" == typeof t && void 0 !== t.amd ? t(function() {
      return r
  }) : "undefined" != typeof module && module.exports && (module.exports = r)
}(this, this.define),
function(e) {
  function t() {
      return "" === c.hash || "#" === c.hash
  }
  function n(e, t) {
      for (var n = 0; n < e.length; n += 1)
          if (t(e[n], n, e) === !1)
              return
  }
  function r(e) {
      for (var t = [], n = 0, r = e.length; n < r; n++)
          t = t.concat(e[n]);
      return t
  }
  function o(e, t, n) {
      if (!e.length)
          return n();
      var r = 0;
      !function o() {
          t(e[r], function(t) {
              t || t === !1 ? (n(t),
              n = function() {}
              ) : (r += 1,
              r === e.length ? n() : o())
          })
      }()
  }
  function i(e, t, n) {
      n = e;
      for (var r in t)
          if (t.hasOwnProperty(r) && (n = t[r](e),
          n !== e))
              break;
      return n === e ? "([._a-zA-Z0-9-%()]+)" : n
  }
  function a(e, t) {
      for (var n, r = 0, o = ""; n = e.substr(r).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/); )
          r = n.index + n[0].length,
          n[0] = n[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)"),
          o += e.substr(0, n.index) + n[0];
      e = o += e.substr(r);
      var s, a, l = e.match(/:([^\/]+)/gi);
      if (l) {
          a = l.length;
          for (var c = 0; c < a; c++)
              s = l[c],
              e = "::" === s.slice(0, 2) ? s.slice(1) : e.replace(s, i(s, t))
      }
      return e
  }
  function l(e, t, n, r) {
      var o, i = 0, s = 0, a = 0, n = (n || "(").toString(), r = (r || ")").toString();
      for (o = 0; o < e.length; o++) {
          var l = e[o];
          if (l.indexOf(n, i) > l.indexOf(r, i) || ~l.indexOf(n, i) && !~l.indexOf(r, i) || !~l.indexOf(n, i) && ~l.indexOf(r, i)) {
              if (s = l.indexOf(n, i),
              a = l.indexOf(r, i),
              ~s && !~a || !~s && ~a) {
                  var c = e.slice(0, (o || 1) + 1).join(t);
                  e = [c].concat(e.slice((o || 1) + 1))
              }
              i = (a > s ? a : s) + 1,
              o = 0
          } else
              i = 0
      }
      return e
  }
  var c = document.location
    , u = {
      mode: "modern",
      hash: c.hash,
      history: !1,
      check: function() {
          var e = c.hash;
          e != this.hash && (this.hash = e,
          this.onHashChanged())
      },
      fire: function() {
          "modern" === this.mode ? this.history === !0 ? window.onpopstate() : window.onhashchange() : this.onHashChanged()
      },
      init: function(e, t) {
          function n(e) {
              for (var t = 0, n = f.listeners.length; t < n; t++)
                  f.listeners[t](e)
          }
          var r = this;
          if (this.history = t,
          f.listeners || (f.listeners = []),
          "onhashchange"in window && (void 0 === document.documentMode || document.documentMode > 7))
              this.history === !0 ? setTimeout(function() {
                  window.onpopstate = n
              }, 500) : window.onhashchange = n,
              this.mode = "modern";
          else {
              var o = document.createElement("iframe");
              o.id = "state-frame",
              o.style.display = "none",
              document.body.appendChild(o),
              this.writeFrame(""),
              "onpropertychange"in document && "attachEvent"in document && document.attachEvent("onpropertychange", function() {
                  "location" === event.propertyName && r.check()
              }),
              window.setInterval(function() {
                  r.check()
              }, 50),
              this.onHashChanged = n,
              this.mode = "legacy"
          }
          return f.listeners.push(e),
          this.mode
      },
      destroy: function(e) {
          if (f && f.listeners)
              for (var t = f.listeners, n = t.length - 1; n >= 0; n--)
                  t[n] === e && t.splice(n, 1)
      },
      setHash: function(e) {
          return "legacy" === this.mode && this.writeFrame(e),
          this.history === !0 ? (window.history.pushState({}, document.title, e),
          this.fire()) : c.hash = "/" === e[0] ? e : "/" + e,
          this
      },
      writeFrame: function(e) {
          var t = document.getElementById("state-frame")
            , n = t.contentDocument || t.contentWindow.document;
          n.open(),
          n.write("<script>_hash = '" + e + "'; onload = parent.listener.syncHash;<script>"),
          n.close()
      },
      syncHash: function() {
          var e = this._hash;
          return e != c.hash && (c.hash = e),
          this
      },
      onHashChanged: function() {}
  }
    , f = e.Router = function(e) {
      return this instanceof f ? (this.params = {},
      this.routes = {},
      this.methods = ["on", "once", "after", "before"],
      this.scope = [],
      this._methods = {},
      this._insert = this.insert,
      this.insert = this.insertEx,
      this.historySupport = null != (null != window.history ? window.history.pushState : null),
      this.configure(),
      void this.mount(e || {})) : new f(e)
  }
  ;
  f.prototype.init = function(e) {
      var n, r = this;
      return this.handler = function(e) {
          var t = e && e.newURL || window.location.hash
            , n = r.history === !0 ? r.getPath() : t.replace(/.*#/, "");
          r.dispatch("on", "/" === n.charAt(0) ? n : "/" + n)
      }
      ,
      u.init(this.handler, this.history),
      this.history === !1 ? t() && e ? c.hash = e : t() || r.dispatch("on", "/" + c.hash.replace(/^(#\/|#|\/)/, "")) : (this.convert_hash_in_init ? (n = t() && e ? e : t() ? null : c.hash.replace(/^#/, ""),
      n && window.history.replaceState({}, document.title, n)) : n = this.getPath(),
      (n || this.run_in_init === !0) && this.handler()),
      this
  }
  ,
  f.prototype.explode = function() {
      var e = this.history === !0 ? this.getPath() : c.hash;
      return "/" === e.charAt(1) && (e = e.slice(1)),
      e.slice(1, e.length).split("/")
  }
  ,
  f.prototype.setRoute = function(e, t, n) {
      var r = this.explode();
      return "number" == typeof e && "string" == typeof t ? r[e] = t : "string" == typeof n ? r.splice(e, t, s) : r = [e],
      u.setHash(r.join("/")),
      r
  }
  ,
  f.prototype.insertEx = function(e, t, n, r) {
      return "once" === e && (e = "on",
      n = function(e) {
          var t = !1;
          return function() {
              if (!t)
                  return t = !0,
                  e.apply(this, arguments)
          }
      }(n)),
      this._insert(e, t, n, r)
  }
  ,
  f.prototype.getRoute = function(e) {
      var t = e;
      if ("number" == typeof e)
          t = this.explode()[e];
      else if ("string" == typeof e) {
          var n = this.explode();
          t = n.indexOf(e)
      } else
          t = this.explode();
      return t
  }
  ,
  f.prototype.destroy = function() {
      return u.destroy(this.handler),
      this
  }
  ,
  f.prototype.getPath = function() {
      var e = window.location.pathname;
      return "/" !== e.substr(0, 1) && (e = "/" + e),
      e
  }
  ;
  var h = /\?.*/;
  f.prototype.configure = function(e) {
      e = e || {};
      for (var t = 0; t < this.methods.length; t++)
          this._methods[this.methods[t]] = !0;
      return this.recurse = e.recurse || this.recurse || !1,
      this.async = e.async || !1,
      this.delimiter = e.delimiter || "/",
      this.strict = "undefined" == typeof e.strict || e.strict,
      this.notfound = e.notfound,
      this.resource = e.resource,
      this.history = e.html5history && this.historySupport || !1,
      this.run_in_init = this.history === !0 && e.run_handler_in_init !== !1,
      this.convert_hash_in_init = this.history === !0 && e.convert_hash_in_init !== !1,
      this.every = {
          after: e.after || null,
          before: e.before || null,
          on: e.on || null
      },
      this
  }
  ,
  f.prototype.param = function(e, t) {
      ":" !== e[0] && (e = ":" + e);
      var n = new RegExp(e,"g");
      return this.params[e] = function(e) {
          return e.replace(n, t.source || t)
      }
      ,
      this
  }
  ,
  f.prototype.on = f.prototype.route = function(e, t, n) {
      var r = this;
      return n || "function" != typeof t || (n = t,
      t = e,
      e = "on"),
      Array.isArray(t) ? t.forEach(function(t) {
          r.on(e, t, n)
      }) : (t.source && (t = t.source.replace(/\\\//gi, "/")),
      Array.isArray(e) ? e.forEach(function(e) {
          r.on(e.toLowerCase(), t, n)
      }) : (t = t.split(new RegExp(this.delimiter)),
      t = l(t, this.delimiter),
      void this.insert(e, this.scope.concat(t), n)))
  }
  ,
  f.prototype.path = function(e, t) {
      var n = this.scope.length;
      e.source && (e = e.source.replace(/\\\//gi, "/")),
      e = e.split(new RegExp(this.delimiter)),
      e = l(e, this.delimiter),
      this.scope = this.scope.concat(e),
      t.call(this, this),
      this.scope.splice(n, e.length)
  }
  ,
  f.prototype.dispatch = function(e, t, n) {
      function r() {
          i.last = s.after,
          i.invoke(i.runlist(s), i, n)
      }
      var o, i = this, s = this.traverse(e, t.replace(h, ""), this.routes, ""), a = this._invoked;
      return this._invoked = !0,
      s && 0 !== s.length ? ("forward" === this.recurse && (s = s.reverse()),
      o = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last],
      o && o.length > 0 && a ? (this.async ? this.invoke(o, this, r) : (this.invoke(o, this),
      r()),
      !0) : (r(),
      !0)) : (this.last = [],
      "function" == typeof this.notfound && this.invoke([this.notfound], {
          method: e,
          path: t
      }, n),
      !1)
  }
  ,
  f.prototype.invoke = function(e, t, r) {
      var i, s = this;
      this.async ? (i = function(n, r) {
          return Array.isArray(n) ? o(n, i, r) : void ("function" == typeof n && n.apply(t, (e.captures || []).concat(r)))
      }
      ,
      o(e, i, function() {
          r && r.apply(t, arguments)
      })) : (i = function(r) {
          return Array.isArray(r) ? n(r, i) : "function" == typeof r ? r.apply(t, e.captures || []) : void ("string" == typeof r && s.resource && s.resource[r].apply(t, e.captures || []))
      }
      ,
      n(e, i))
  }
  ,
  f.prototype.traverse = function(e, t, n, r, o) {
      function i(e) {
          function t(e) {
              for (var n = [], r = 0; r < e.length; r++)
                  n[r] = Array.isArray(e[r]) ? t(e[r]) : e[r];
              return n
          }
          function n(e) {
              for (var t = e.length - 1; t >= 0; t--)
                  Array.isArray(e[t]) ? (n(e[t]),
                  0 === e[t].length && e.splice(t, 1)) : o(e[t]) || e.splice(t, 1)
          }
          if (!o)
              return e;
          var r = t(e);
          return r.matched = e.matched,
          r.captures = e.captures,
          r.after = e.after.filter(o),
          n(r),
          r
      }
      var s, a, l, c, u = [];
      if (t === this.delimiter && n[e])
          return c = [[n.before, n[e]].filter(Boolean)],
          c.after = [n.after].filter(Boolean),
          c.matched = !0,
          c.captures = [],
          i(c);
      for (var f in n)
          if (n.hasOwnProperty(f) && (!this._methods[f] || this._methods[f] && "object" == typeof n[f] && !Array.isArray(n[f]))) {
              if (s = a = r + this.delimiter + f,
              this.strict || (a += "[" + this.delimiter + "]?"),
              l = t.match(new RegExp("^" + a)),
              !l)
                  continue;
              if (l[0] && l[0] == t && n[f][e])
                  return c = [[n[f].before, n[f][e]].filter(Boolean)],
                  c.after = [n[f].after].filter(Boolean),
                  c.matched = !0,
                  c.captures = l.slice(1),
                  this.recurse && n === this.routes && (c.push([n.before, n.on].filter(Boolean)),
                  c.after = c.after.concat([n.after].filter(Boolean))),
                  i(c);
              if (c = this.traverse(e, t, n[f], s),
              c.matched)
                  return c.length > 0 && (u = u.concat(c)),
                  this.recurse && (u.push([n[f].before, n[f].on].filter(Boolean)),
                  c.after = c.after.concat([n[f].after].filter(Boolean)),
                  n === this.routes && (u.push([n.before, n.on].filter(Boolean)),
                  c.after = c.after.concat([n.after].filter(Boolean)))),
                  u.matched = !0,
                  u.captures = c.captures,
                  u.after = c.after,
                  i(u)
          }
      return !1
  }
  ,
  f.prototype.insert = function(e, t, n, r) {
      var o, i, s, l, c;
      if (t = t.filter(function(e) {
          return e && e.length > 0
      }),
      r = r || this.routes,
      c = t.shift(),
      /\:|\*/.test(c) && !/\\d|\\w/.test(c) && (c = a(c, this.params)),
      t.length > 0)
          return r[c] = r[c] || {},
          this.insert(e, t, n, r[c]);
      if (c || t.length || r !== this.routes) {
          if (i = typeof r[c],
          s = Array.isArray(r[c]),
          r[c] && !s && "object" == i)
              switch (o = typeof r[c][e]) {
              case "function":
                  return void (r[c][e] = [r[c][e], n]);
              case "object":
                  return void r[c][e].push(n);
              case "undefined":
                  return void (r[c][e] = n)
              }
          else if ("undefined" == i)
              return l = {},
              l[e] = n,
              void (r[c] = l);
          throw new Error("Invalid route context: " + i)
      }
      switch (o = typeof r[e]) {
      case "function":
          return void (r[e] = [r[e], n]);
      case "object":
          return void r[e].push(n);
      case "undefined":
          return void (r[e] = n)
      }
  }
  ,
  f.prototype.extend = function(e) {
      function t(e) {
          r._methods[e] = !0,
          r[e] = function() {
              var t = 1 === arguments.length ? [e, ""] : [e];
              r.on.apply(r, t.concat(Array.prototype.slice.call(arguments)))
          }
      }
      var n, r = this, o = e.length;
      for (n = 0; n < o; n++)
          t(e[n])
  }
  ,
  f.prototype.runlist = function(e) {
      var t = this.every && this.every.before ? [this.every.before].concat(r(e)) : r(e);
      return this.every && this.every.on && t.push(this.every.on),
      t.captures = e.captures,
      t.source = e.source,
      t
  }
  ,
  f.prototype.mount = function(e, t) {
      function n(t, n) {
          var o = t
            , i = t.split(r.delimiter)
            , s = typeof e[t]
            , a = "" === i[0] || !r._methods[i[0]]
            , c = a ? "on" : o;
          return a && (o = o.slice((o.match(new RegExp("^" + r.delimiter)) || [""])[0].length),
          i.shift()),
          a && "object" === s && !Array.isArray(e[t]) ? (n = n.concat(i),
          void r.mount(e[t], n)) : (a && (n = n.concat(o.split(r.delimiter)),
          n = l(n, r.delimiter)),
          void r.insert(c, n, e[t]))
      }
      if (e && "object" == typeof e && !Array.isArray(e)) {
          var r = this;
          t = t || [],
          Array.isArray(t) || (t = t.split(r.delimiter));
          for (var o in e)
              e.hasOwnProperty(o) && n(o, t.slice(0))
      }
  }
}("object" == typeof exports ? exports : window);
var Hogan = {};
!function(e) {
  function t(e, t, n) {
      var r;
      return t && "object" == typeof t && (void 0 !== t[e] ? r = t[e] : n && t.get && "function" == typeof t.get && (r = t.get(e))),
      r
  }
  function n(e, t, n, r, o, i) {
      function s() {}
      function a() {}
      s.prototype = e,
      a.prototype = e.subs;
      var l, c = new s;
      c.subs = new a,
      c.subsText = {},
      c.buf = "",
      r = r || {},
      c.stackSubs = r,
      c.subsText = i;
      for (l in t)
          r[l] || (r[l] = t[l]);
      for (l in r)
          c.subs[l] = r[l];
      o = o || {},
      c.stackPartials = o;
      for (l in n)
          o[l] || (o[l] = n[l]);
      for (l in o)
          c.partials[l] = o[l];
      return c
  }
  function r(e) {
      return String(null === e || void 0 === e ? "" : e)
  }
  function o(e) {
      return e = r(e),
      u.test(e) ? e.replace(i, "&amp;").replace(s, "&lt;").replace(a, "&gt;").replace(l, "&#39;").replace(c, "&quot;") : e
  }
  e.Template = function(e, t, n, r) {
      e = e || {},
      this.r = e.code || this.r,
      this.c = n,
      this.options = r || {},
      this.text = t || "",
      this.partials = e.partials || {},
      this.subs = e.subs || {},
      this.buf = ""
  }
  ,
  e.Template.prototype = {
      r: function(e, t, n) {
          return ""
      },
      v: o,
      t: r,
      render: function(e, t, n) {
          return this.ri([e], t || {}, n)
      },
      ri: function(e, t, n) {
          return this.r(e, t, n)
      },
      ep: function(e, t) {
          var r = this.partials[e]
            , o = t[r.name];
          if (r.instance && r.base == o)
              return r.instance;
          if ("string" == typeof o) {
              if (!this.c)
                  throw new Error("No compiler available.");
              o = this.c.compile(o, this.options)
          }
          if (!o)
              return null;
          if (this.partials[e].base = o,
          r.subs) {
              t.stackText || (t.stackText = {});
              for (key in r.subs)
                  t.stackText[key] || (t.stackText[key] = void 0 !== this.activeSub && t.stackText[this.activeSub] ? t.stackText[this.activeSub] : this.text);
              o = n(o, r.subs, r.partials, this.stackSubs, this.stackPartials, t.stackText)
          }
          return this.partials[e].instance = o,
          o
      },
      rp: function(e, t, n, r) {
          var o = this.ep(e, n);
          return o ? o.ri(t, n, r) : ""
      },
      rs: function(e, t, n) {
          var r = e[e.length - 1];
          if (!f(r))
              return void n(e, t, this);
          for (var o = 0; o < r.length; o++)
              e.push(r[o]),
              n(e, t, this),
              e.pop()
      },
      s: function(e, t, n, r, o, i, s) {
          var a;
          return (!f(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, n, r, o, i, s)),
          a = !!e,
          !r && a && t && t.push("object" == typeof e ? e : t[t.length - 1]),
          a)
      },
      d: function(e, n, r, o) {
          var i, s = e.split("."), a = this.f(s[0], n, r, o), l = this.options.modelGet, c = null;
          if ("." === e && f(n[n.length - 2]))
              a = n[n.length - 1];
          else
              for (var u = 1; u < s.length; u++)
                  i = t(s[u], a, l),
                  void 0 !== i ? (c = a,
                  a = i) : a = "";
          return !(o && !a) && (o || "function" != typeof a || (n.push(c),
          a = this.mv(a, n, r),
          n.pop()),
          a)
      },
      f: function(e, n, r, o) {
          for (var i = !1, s = null, a = !1, l = this.options.modelGet, c = n.length - 1; c >= 0; c--)
              if (s = n[c],
              i = t(e, s, l),
              void 0 !== i) {
                  a = !0;
                  break
              }
          return a ? (o || "function" != typeof i || (i = this.mv(i, n, r)),
          i) : !o && ""
      },
      ls: function(e, t, n, o, i) {
          var s = this.options.delimiters;
          return this.options.delimiters = i,
          this.b(this.ct(r(e.call(t, o)), t, n)),
          this.options.delimiters = s,
          !1
      },
      ct: function(e, t, n) {
          if (this.options.disableLambda)
              throw new Error("Lambda features disabled.");
          return this.c.compile(e, this.options).render(t, n)
      },
      b: function(e) {
          this.buf += e
      },
      fl: function() {
          var e = this.buf;
          return this.buf = "",
          e
      },
      ms: function(e, t, n, r, o, i, s) {
          var a, l = t[t.length - 1], c = e.call(l);
          return "function" == typeof c ? !!r || (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text,
          this.ls(c, l, n, a.substring(o, i), s)) : c
      },
      mv: function(e, t, n) {
          var o = t[t.length - 1]
            , i = e.call(o);
          return "function" == typeof i ? this.ct(r(i.call(o)), o, n) : i
      },
      sub: function(e, t, n, r) {
          var o = this.subs[e];
          o && (this.activeSub = e,
          o(t, n, this, r),
          this.activeSub = !1)
      }
  };
  var i = /&/g
    , s = /</g
    , a = />/g
    , l = /\'/g
    , c = /\"/g
    , u = /[&<>\"\']/
    , f = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  }
}("undefined" != typeof exports ? exports : Hogan),
function(e) {
  function t(e) {
      "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
  }
  function n(e) {
      return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
  }
  function r(e, t, n) {
      if (t.charAt(n) != e.charAt(0))
          return !1;
      for (var r = 1, o = e.length; r < o; r++)
          if (t.charAt(n + r) != e.charAt(r))
              return !1;
      return !0
  }
  function o(t, n, r, a) {
      var l = []
        , c = null
        , u = null
        , f = null;
      for (u = r[r.length - 1]; t.length > 0; ) {
          if (f = t.shift(),
          u && "<" == u.tag && !(f.tag in x))
              throw new Error("Illegal content in < super tag.");
          if (e.tags[f.tag] <= e.tags.$ || i(f, a))
              r.push(f),
              f.nodes = o(t, f.tag, r, a);
          else {
              if ("/" == f.tag) {
                  if (0 === r.length)
                      throw new Error("Closing tag without opener: /" + f.n);
                  if (c = r.pop(),
                  f.n != c.n && !s(f.n, c.n, a))
                      throw new Error("Nesting error: " + c.n + " vs. " + f.n);
                  return c.end = f.i,
                  l
              }
              "\n" == f.tag && (f.last = 0 == t.length || "\n" == t[0].tag)
          }
          l.push(f)
      }
      if (r.length > 0)
          throw new Error("missing closing tag: " + r.pop().n);
      return l
  }
  function i(e, t) {
      for (var n = 0, r = t.length; n < r; n++)
          if (t[n].o == e.n)
              return e.tag = "#",
              !0
  }
  function s(e, t, n) {
      for (var r = 0, o = n.length; r < o; r++)
          if (n[r].c == e && n[r].o == t)
              return !0
  }
  function a(e) {
      var t = [];
      for (var n in e)
          t.push('"' + c(n) + '": function(c,p,t,i) {' + e[n] + "}");
      return "{ " + t.join(",") + " }"
  }
  function l(e) {
      var t = [];
      for (var n in e.partials)
          t.push('"' + c(n) + '":{name:"' + c(e.partials[n].name) + '", ' + l(e.partials[n]) + "}");
      return "partials: {" + t.join(",") + "}, subs: " + a(e.subs)
  }
  function c(e) {
      return e.replace(y, "\\\\").replace(g, '\\"').replace(m, "\\n").replace(v, "\\r").replace(b, "\\u2028").replace(w, "\\u2029")
  }
  function u(e) {
      return ~e.indexOf(".") ? "d" : "f"
  }
  function f(e, t) {
      var n = "<" + (t.prefix || "")
        , r = n + e.n + _++;
      return t.partials[r] = {
          name: e.n,
          partials: {}
      },
      t.code += 't.b(t.rp("' + c(r) + '",c,p,"' + (e.indent || "") + '"));',
      r
  }
  function h(e, t) {
      t.code += "t.b(t.t(t." + u(e.n) + '("' + c(e.n) + '",c,p,0)));'
  }
  function p(e) {
      return "t.b(" + e + ");"
  }
  var d = /\S/
    , g = /\"/g
    , m = /\n/g
    , v = /\r/g
    , y = /\\/g
    , b = /\u2028/
    , w = /\u2029/;
  e.tags = {
      "#": 1,
      "^": 2,
      "<": 3,
      $: 4,
      "/": 5,
      "!": 6,
      ">": 7,
      "=": 8,
      _v: 9,
      "{": 10,
      "&": 11,
      _t: 12
  },
  e.scan = function(o, i) {
      function s() {
          y.length > 0 && (b.push({
              tag: "_t",
              text: new String(y)
          }),
          y = "")
      }
      function a() {
          for (var t = !0, n = _; n < b.length; n++)
              if (t = e.tags[b[n].tag] < e.tags._v || "_t" == b[n].tag && null === b[n].text.match(d),
              !t)
                  return !1;
          return t
      }
      function l(e, t) {
          if (s(),
          e && a())
              for (var n, r = _; r < b.length; r++)
                  b[r].text && ((n = b[r + 1]) && ">" == n.tag && (n.indent = b[r].text.toString()),
                  b.splice(r, 1));
          else
              t || b.push({
                  tag: "\n"
              });
          w = !1,
          _ = b.length
      }
      function c(e, t) {
          var r = "=" + S
            , o = e.indexOf(r, t)
            , i = n(e.substring(e.indexOf("=", t) + 1, o)).split(" ");
          return k = i[0],
          S = i[i.length - 1],
          o + r.length - 1
      }
      var u = o.length
        , f = 0
        , h = 1
        , p = 2
        , g = f
        , m = null
        , v = null
        , y = ""
        , b = []
        , w = !1
        , x = 0
        , _ = 0
        , k = "{{"
        , S = "}}";
      for (i && (i = i.split(" "),
      k = i[0],
      S = i[1]),
      x = 0; x < u; x++)
          g == f ? r(k, o, x) ? (--x,
          s(),
          g = h) : "\n" == o.charAt(x) ? l(w) : y += o.charAt(x) : g == h ? (x += k.length - 1,
          v = e.tags[o.charAt(x + 1)],
          m = v ? o.charAt(x + 1) : "_v",
          "=" == m ? (x = c(o, x),
          g = f) : (v && x++,
          g = p),
          w = x) : r(S, o, x) ? (b.push({
              tag: m,
              n: n(y),
              otag: k,
              ctag: S,
              i: "/" == m ? w - k.length : x + S.length
          }),
          y = "",
          x += S.length - 1,
          g = f,
          "{" == m && ("}}" == S ? x++ : t(b[b.length - 1]))) : y += o.charAt(x);
      return l(w, !0),
      b
  }
  ;
  var x = {
      _t: !0,
      "\n": !0,
      $: !0,
      "/": !0
  };
  e.stringify = function(t, n, r) {
      return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + l(t) + "}"
  }
  ;
  var _ = 0;
  e.generate = function(t, n, r) {
      _ = 0;
      var o = {
          code: "",
          subs: {},
          partials: {}
      };
      return e.walk(t, o),
      r.asString ? this.stringify(o, n, r) : this.makeTemplate(o, n, r)
  }
  ,
  e.wrapMain = function(e) {
      return 'var t=this;t.b(i=i||"");' + e + "return t.fl();"
  }
  ,
  e.template = e.Template,
  e.makeTemplate = function(e, t, n) {
      var r = this.makePartials(e);
      return r.code = new Function("c","p","i",this.wrapMain(e.code)),
      new this.template(r,t,this,n)
  }
  ,
  e.makePartials = function(e) {
      var t, n = {
          subs: {},
          partials: e.partials,
          name: e.name
      };
      for (t in n.partials)
          n.partials[t] = this.makePartials(n.partials[t]);
      for (t in e.subs)
          n.subs[t] = new Function("c","p","t","i",e.subs[t]);
      return n
  }
  ,
  e.codegen = {
      "#": function(t, n) {
          n.code += "if(t.s(t." + u(t.n) + '("' + c(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){',
          e.walk(t.nodes, n),
          n.code += "});c.pop();}"
      },
      "^": function(t, n) {
          n.code += "if(!t.s(t." + u(t.n) + '("' + c(t.n) + '",c,p,1),c,p,1,0,0,"")){',
          e.walk(t.nodes, n),
          n.code += "};"
      },
      ">": f,
      "<": function(t, n) {
          var r = {
              partials: {},
              code: "",
              subs: {},
              inPartial: !0
          };
          e.walk(t.nodes, r);
          var o = n.partials[f(t, n)];
          o.subs = r.subs,
          o.partials = r.partials
      },
      $: function(t, n) {
          var r = {
              subs: {},
              code: "",
              partials: n.partials,
              prefix: t.n
          };
          e.walk(t.nodes, r),
          n.subs[t.n] = r.code,
          n.inPartial || (n.code += 't.sub("' + c(t.n) + '",c,p,i);')
      },
      "\n": function(e, t) {
          t.code += p('"\\n"' + (e.last ? "" : " + i"))
      },
      _v: function(e, t) {
          t.code += "t.b(t.v(t." + u(e.n) + '("' + c(e.n) + '",c,p,0)));'
      },
      _t: function(e, t) {
          t.code += p('"' + c(e.text) + '"')
      },
      "{": h,
      "&": h
  },
  e.walk = function(t, n) {
      for (var r, o = 0, i = t.length; o < i; o++)
          r = e.codegen[t[o].tag],
          r && r(t[o], n);
      return n
  }
  ,
  e.parse = function(e, t, n) {
      return n = n || {},
      o(e, "", [], n.sectionTags || [])
  }
  ,
  e.cache = {},
  e.cacheKey = function(e, t) {
      return [e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet].join("||")
  }
  ,
  e.compile = function(t, n) {
      n = n || {};
      var r = e.cacheKey(t, n)
        , o = this.cache[r];
      if (o) {
          var i = o.partials;
          for (var s in i)
              delete i[s].instance;
          return o
      }
      return o = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n),
      this.cache[r] = o
  }
}("undefined" != typeof exports ? exports : Hogan),
function() {
  function e(e, t) {
      if (e !== t) {
          var n = null === e
            , r = e === w
            , o = e === e
            , i = null === t
            , s = t === w
            , a = t === t;
          if (e > t && !i || !o || n && !s && a || r && a)
              return 1;
          if (e < t && !n || !a || i && !r && o || s && o)
              return -1
      }
      return 0
  }
  function t(e, t, n) {
      for (var r = e.length, o = n ? r : -1; n ? o-- : ++o < r; )
          if (t(e[o], o, e))
              return o;
      return -1
  }
  function n(e, t, n) {
      if (t !== t)
          return h(e, n);
      n -= 1;
      for (var r = e.length; ++n < r; )
          if (e[n] === t)
              return n;
      return -1
  }
  function r(e) {
      return "function" == typeof e || !1
  }
  function o(e) {
      return null == e ? "" : e + ""
  }
  function i(e, t) {
      for (var n = -1, r = e.length; ++n < r && -1 < t.indexOf(e.charAt(n)); )
          ;
      return n
  }
  function s(e, t) {
      for (var n = e.length; n-- && -1 < t.indexOf(e.charAt(n)); )
          ;
      return n
  }
  function a(t, n) {
      return e(t.a, n.a) || t.b - n.b
  }
  function l(e) {
      return De[e]
  }
  function c(e) {
      return Ie[e]
  }
  function u(e, t, n) {
      return t ? e = Fe[e] : n && (e = Pe[e]),
      "\\" + e
  }
  function f(e) {
      return "\\" + Pe[e]
  }
  function h(e, t, n) {
      var r = e.length;
      for (t += n ? 0 : -1; n ? t-- : ++t < r; ) {
          var o = e[t];
          if (o !== o)
              return t
      }
      return -1
  }
  function p(e) {
      return !!e && "object" == typeof e
  }
  function d(e) {
      return 160 >= e && 9 <= e && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || 8192 <= e && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
  }
  function g(e, t) {
      for (var n = -1, r = e.length, o = -1, i = []; ++n < r; )
          e[n] === t && (e[n] = F,
          i[++o] = n);
      return i
  }
  function m(e) {
      for (var t = -1, n = e.length; ++t < n && d(e.charCodeAt(t)); )
          ;
      return t
  }
  function v(e) {
      for (var t = e.length; t-- && d(e.charCodeAt(t)); )
          ;
      return t
  }
  function y(e) {
      return He[e]
  }
  function b(d) {
      function De(e) {
          if (p(e) && !(Ei(e) || e instanceof Re)) {
              if (e instanceof He)
                  return e;
              if (eo.call(e, "__chain__") && eo.call(e, "__wrapped__"))
                  return Bn(e)
          }
          return new He(e)
      }
      function Ie() {}
      function He(e, t, n) {
          this.__wrapped__ = e,
          this.__actions__ = n || [],
          this.__chain__ = !!t
      }
      function Re(e) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__dir__ = 1,
          this.__filtered__ = !1,
          this.__iteratees__ = [],
          this.__takeCount__ = Eo,
          this.__views__ = []
      }
      function Fe() {
          this.__data__ = {}
      }
      function Pe(e) {
          var t = e ? e.length : 0;
          for (this.data = {
              hash: vo(null),
              set: new uo
          }; t--; )
              this.push(e[t])
      }
      function qe(e, t) {
          var n = e.data;
          return ("string" == typeof t || mr(t) ? n.set.has(t) : n.hash[t]) ? 0 : -1
      }
      function Be(e, t) {
          var n = -1
            , r = e.length;
          for (t || (t = Pr(r)); ++n < r; )
              t[n] = e[n];
          return t
      }
      function We(e, t) {
          for (var n = -1, r = e.length; ++n < r && !1 !== t(e[n], n, e); )
              ;
          return e
      }
      function $e(e, t) {
          for (var n = -1, r = e.length; ++n < r; )
              if (!t(e[n], n, e))
                  return !1;
          return !0
      }
      function Xe(e, t) {
          for (var n = -1, r = e.length, o = -1, i = []; ++n < r; ) {
              var s = e[n];
              t(s, n, e) && (i[++o] = s)
          }
          return i
      }
      function Je(e, t) {
          for (var n = -1, r = e.length, o = Pr(r); ++n < r; )
              o[n] = t(e[n], n, e);
          return o
      }
      function Ge(e, t) {
          for (var n = -1, r = t.length, o = e.length; ++n < r; )
              e[o + n] = t[n];
          return e
      }
      function Ve(e, t, n, r) {
          var o = -1
            , i = e.length;
          for (r && i && (n = e[++o]); ++o < i; )
              n = t(n, e[o], o, e);
          return n
      }
      function Ze(e, t) {
          for (var n = -1, r = e.length; ++n < r; )
              if (t(e[n], n, e))
                  return !0;
          return !1
      }
      function Ke(e, t, n, r) {
          return e !== w && eo.call(r, n) ? e : t
      }
      function Qe(e, t, n) {
          for (var r = -1, o = Fi(t), i = o.length; ++r < i; ) {
              var s = o[r]
                , a = e[s]
                , l = n(a, t[s], s, e, t);
              (l === l ? l === a : a !== a) && (a !== w || s in e) || (e[s] = l)
          }
          return e
      }
      function et(e, t) {
          return null == t ? e : nt(t, Fi(t), e)
      }
      function tt(e, t) {
          for (var n = -1, r = null == e, o = !r && An(e), i = o ? e.length : 0, s = t.length, a = Pr(s); ++n < s; ) {
              var l = t[n];
              a[n] = o ? zn(l, i) ? e[l] : w : r ? w : e[l]
          }
          return a
      }
      function nt(e, t, n) {
          n || (n = {});
          for (var r = -1, o = t.length; ++r < o; ) {
              var i = t[r];
              n[i] = e[i]
          }
          return n
      }
      function rt(e, t, n) {
          var r = typeof e;
          return "function" == r ? t === w ? e : Ft(e, t, n) : null == e ? Dr : "object" == r ? wt(e) : t === w ? Fr(e) : xt(e, t)
      }
      function ot(e, t, n, r, o, i, s) {
          var a;
          if (n && (a = o ? n(e, r, o) : n(e)),
          a !== w)
              return a;
          if (!mr(e))
              return e;
          if (r = Ei(e)) {
              if (a = Tn(e),
              !t)
                  return Be(e, a)
          } else {
              var l = no.call(e)
                , c = l == X;
              if (l != U && l != P && (!c || o))
                  return Le[l] ? Mn(e, l, t) : o ? e : {};
              if (a = Cn(c ? {} : e),
              !t)
                  return et(a, e)
          }
          for (i || (i = []),
          s || (s = []),
          o = i.length; o--; )
              if (i[o] == e)
                  return s[o];
          return i.push(e),
          s.push(a),
          (r ? We : pt)(e, function(r, o) {
              a[o] = ot(r, t, n, o, e, i, s)
          }),
          a
      }
      function it(e, t, n) {
          if ("function" != typeof e)
              throw new Gr(R);
          return fo(function() {
              e.apply(w, n)
          }, t)
      }
      function st(e, t) {
          var r = e ? e.length : 0
            , o = [];
          if (!r)
              return o;
          var i = -1
            , s = _n()
            , a = s === n
            , l = a && t.length >= D && vo && uo ? new Pe(t) : null
            , c = t.length;
          l && (s = qe,
          a = !1,
          t = l);
          e: for (; ++i < r; )
              if (l = e[i],
              a && l === l) {
                  for (var u = c; u--; )
                      if (t[u] === l)
                          continue e;
                  o.push(l)
              } else
                  0 > s(t, l, 0) && o.push(l);
          return o
      }
      function at(e, t) {
          var n = !0;
          return Do(e, function(e, r, o) {
              return n = !!t(e, r, o)
          }),
          n
      }
      function lt(e, t, n, r) {
          var o = r
            , i = o;
          return Do(e, function(e, s, a) {
              s = +t(e, s, a),
              (n(s, o) || s === r && s === i) && (o = s,
              i = e)
          }),
          i
      }
      function ct(e, t) {
          var n = [];
          return Do(e, function(e, r, o) {
              t(e, r, o) && n.push(e)
          }),
          n
      }
      function ut(e, t, n, r) {
          var o;
          return n(e, function(e, n, i) {
              return t(e, n, i) ? (o = r ? n : e,
              !1) : void 0
          }),
          o
      }
      function ft(e, t, n, r) {
          r || (r = []);
          for (var o = -1, i = e.length; ++o < i; ) {
              var s = e[o];
              p(s) && An(s) && (n || Ei(s) || hr(s)) ? t ? ft(s, t, n, r) : Ge(r, s) : n || (r[r.length] = s)
          }
          return r
      }
      function ht(e, t) {
          Ho(e, t, Mr)
      }
      function pt(e, t) {
          return Ho(e, t, Fi)
      }
      function dt(e, t) {
          return Ro(e, t, Fi)
      }
      function gt(e, t) {
          for (var n = -1, r = t.length, o = -1, i = []; ++n < r; ) {
              var s = t[n];
              gr(e[s]) && (i[++o] = s)
          }
          return i
      }
      function mt(e, t, n) {
          if (null != e) {
              n !== w && n in Pn(e) && (t = [n]),
              n = 0;
              for (var r = t.length; null != e && n < r; )
                  e = e[t[n++]];
              return n && n == r ? e : w
          }
      }
      function vt(e, t, n, r, o, i) {
          if (e === t)
              e = !0;
          else if (null == e || null == t || !mr(e) && !p(t))
              e = e !== e && t !== t;
          else
              e: {
                  var s = vt
                    , a = Ei(e)
                    , l = Ei(t)
                    , c = q
                    , u = q;
                  a || (c = no.call(e),
                  c == P ? c = U : c != U && (a = _r(e))),
                  l || (u = no.call(t),
                  u == P ? u = U : u != U && _r(t));
                  var f = c == U
                    , l = u == U
                    , u = c == u;
                  if (!u || a || f) {
                      if (!r && (c = f && eo.call(e, "__wrapped__"),
                      l = l && eo.call(t, "__wrapped__"),
                      c || l)) {
                          e = s(c ? e.value() : e, l ? t.value() : t, n, r, o, i);
                          break e
                      }
                      if (u) {
                          for (o || (o = []),
                          i || (i = []),
                          c = o.length; c--; )
                              if (o[c] == e) {
                                  e = i[c] == t;
                                  break e
                              }
                          o.push(e),
                          i.push(t),
                          e = (a ? vn : bn)(e, t, s, n, r, o, i),
                          o.pop(),
                          i.pop()
                      } else
                          e = !1
                  } else
                      e = yn(e, t, c)
              }
          return e
      }
      function yt(e, t, n) {
          var r = t.length
            , o = r
            , i = !n;
          if (null == e)
              return !o;
          for (e = Pn(e); r--; ) {
              var s = t[r];
              if (i && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                  return !1
          }
          for (; ++r < o; ) {
              var s = t[r]
                , a = s[0]
                , l = e[a]
                , c = s[1];
              if (i && s[2]) {
                  if (l === w && !(a in e))
                      return !1
              } else if (s = n ? n(l, c, a) : w,
              s === w ? !vt(c, l, n, !0) : !s)
                  return !1
          }
          return !0
      }
      function bt(e, t) {
          var n = -1
            , r = An(e) ? Pr(e.length) : [];
          return Do(e, function(e, o, i) {
              r[++n] = t(e, o, i)
          }),
          r
      }
      function wt(e) {
          var t = kn(e);
          if (1 == t.length && t[0][2]) {
              var n = t[0][0]
                , r = t[0][1];
              return function(e) {
                  return null != e && (e[n] === r && (r !== w || n in Pn(e)))
              }
          }
          return function(e) {
              return yt(e, t)
          }
      }
      function xt(e, t) {
          var n = Ei(e)
            , r = jn(e) && t === t && !mr(t)
            , o = e + "";
          return e = qn(e),
          function(i) {
              if (null == i)
                  return !1;
              var s = o;
              if (i = Pn(i),
              !(!n && r || s in i)) {
                  if (i = 1 == e.length ? i : mt(i, Et(e, 0, -1)),
                  null == i)
                      return !1;
                  s = Un(e),
                  i = Pn(i)
              }
              return i[s] === t ? t !== w || s in i : vt(t, i[s], w, !0)
          }
      }
      function _t(e, t, n, r, o) {
          if (!mr(e))
              return e;
          var i = An(t) && (Ei(t) || _r(t))
            , s = i ? w : Fi(t);
          return We(s || t, function(a, l) {
              if (s && (l = a,
              a = t[l]),
              p(a)) {
                  r || (r = []),
                  o || (o = []);
                  e: {
                      for (var c = l, u = r, f = o, h = u.length, d = t[c]; h--; )
                          if (u[h] == d) {
                              e[c] = f[h];
                              break e
                          }
                      var h = e[c]
                        , g = n ? n(h, d, c, e, t) : w
                        , m = g === w;
                      m && (g = d,
                      An(d) && (Ei(d) || _r(d)) ? g = Ei(h) ? h : An(h) ? Be(h) : [] : br(d) || hr(d) ? g = hr(h) ? Tr(h) : br(h) ? h : {} : m = !1),
                      u.push(d),
                      f.push(g),
                      m ? e[c] = _t(g, d, n, u, f) : (g === g ? g !== h : h === h) && (e[c] = g)
                  }
              } else
                  c = e[l],
                  u = n ? n(c, a, l, e, t) : w,
                  (f = u === w) && (u = a),
                  u === w && (!i || l in e) || !f && (u === u ? u === c : c !== c) || (e[l] = u)
          }),
          e
      }
      function kt(e) {
          return function(t) {
              return null == t ? w : t[e]
          }
      }
      function St(e) {
          var t = e + "";
          return e = qn(e),
          function(n) {
              return mt(n, e, t)
          }
      }
      function Tt(e, t) {
          for (var n = e ? t.length : 0; n--; ) {
              var r = t[n];
              if (r != o && zn(r)) {
                  var o = r;
                  ho.call(e, r, 1)
              }
          }
      }
      function Ct(e, t) {
          return e + yo(Co() * (t - e + 1))
      }
      function Mt(e, t, n, r, o) {
          return o(e, function(e, o, i) {
              n = r ? (r = !1,
              e) : t(n, e, o, i)
          }),
          n
      }
      function Et(e, t, n) {
          var r = -1
            , o = e.length;
          for (t = null == t ? 0 : +t || 0,
          0 > t && (t = -t > o ? 0 : o + t),
          n = n === w || n > o ? o : +n || 0,
          0 > n && (n += o),
          o = t > n ? 0 : n - t >>> 0,
          t >>>= 0,
          n = Pr(o); ++r < o; )
              n[r] = e[r + t];
          return n
      }
      function At(e, t) {
          var n;
          return Do(e, function(e, r, o) {
              return n = t(e, r, o),
              !n
          }),
          !!n
      }
      function zt(e, t) {
          var n = e.length;
          for (e.sort(t); n--; )
              e[n] = e[n].c;
          return e
      }
      function Nt(t, n, r) {
          var o = wn()
            , i = -1;
          return n = Je(n, function(e) {
              return o(e)
          }),
          t = bt(t, function(e) {
              return {
                  a: Je(n, function(t) {
                      return t(e)
                  }),
                  b: ++i,
                  c: e
              }
          }),
          zt(t, function(t, n) {
              var o;
              e: {
                  for (var i = -1, s = t.a, a = n.a, l = s.length, c = r.length; ++i < l; )
                      if (o = e(s[i], a[i])) {
                          if (i >= c)
                              break e;
                          i = r[i],
                          o *= "asc" === i || !0 === i ? 1 : -1;
                          break e
                      }
                  o = t.b - n.b
              }
              return o
          })
      }
      function jt(e, t) {
          var n = 0;
          return Do(e, function(e, r, o) {
              n += +t(e, r, o) || 0
          }),
          n
      }
      function Ot(e, t) {
          var r = -1
            , o = _n()
            , i = e.length
            , s = o === n
            , a = s && i >= D
            , l = a && vo && uo ? new Pe((void 0)) : null
            , c = [];
          l ? (o = qe,
          s = !1) : (a = !1,
          l = t ? [] : c);
          e: for (; ++r < i; ) {
              var u = e[r]
                , f = t ? t(u, r, e) : u;
              if (s && u === u) {
                  for (var h = l.length; h--; )
                      if (l[h] === f)
                          continue e;
                  t && l.push(f),
                  c.push(u)
              } else
                  0 > o(l, f, 0) && ((t || a) && l.push(f),
                  c.push(u))
          }
          return c
      }
      function Lt(e, t) {
          for (var n = -1, r = t.length, o = Pr(r); ++n < r; )
              o[n] = e[t[n]];
          return o
      }
      function Dt(e, t, n, r) {
          for (var o = e.length, i = r ? o : -1; (r ? i-- : ++i < o) && t(e[i], i, e); )
              ;
          return n ? Et(e, r ? 0 : i, r ? i + 1 : o) : Et(e, r ? i + 1 : 0, r ? o : i)
      }
      function It(e, t) {
          var n = e;
          n instanceof Re && (n = n.value());
          for (var r = -1, o = t.length; ++r < o; )
              var i = t[r]
                , n = i.func.apply(i.thisArg, Ge([n], i.args));
          return n
      }
      function Ht(e, t, n) {
          var r = 0
            , o = e ? e.length : r;
          if ("number" == typeof t && t === t && o <= zo) {
              for (; r < o; ) {
                  var i = r + o >>> 1
                    , s = e[i];
                  (n ? s <= t : s < t) && null !== s ? r = i + 1 : o = i
              }
              return o
          }
          return Rt(e, t, Dr, n)
      }
      function Rt(e, t, n, r) {
          t = n(t);
          for (var o = 0, i = e ? e.length : 0, s = t !== t, a = null === t, l = t === w; o < i; ) {
              var c = yo((o + i) / 2)
                , u = n(e[c])
                , f = u !== w
                , h = u === u;
              (s ? h || r : a ? h && f && (r || null != u) : l ? h && (r || f) : null == u ? 0 : r ? u <= t : u < t) ? o = c + 1 : i = c
          }
          return ko(i, Ao)
      }
      function Ft(e, t, n) {
          if ("function" != typeof e)
              return Dr;
          if (t === w)
              return e;
          switch (n) {
          case 1:
              return function(n) {
                  return e.call(t, n)
              }
              ;
          case 3:
              return function(n, r, o) {
                  return e.call(t, n, r, o)
              }
              ;
          case 4:
              return function(n, r, o, i) {
                  return e.call(t, n, r, o, i)
              }
              ;
          case 5:
              return function(n, r, o, i, s) {
                  return e.call(t, n, r, o, i, s)
              }
          }
          return function() {
              return e.apply(t, arguments)
          }
      }
      function Pt(e) {
          var t = new io(e.byteLength);
          return new po(t).set(new po(e)),
          t
      }
      function qt(e, t, n) {
          for (var r = n.length, o = -1, i = _o(e.length - r, 0), s = -1, a = t.length, l = Pr(a + i); ++s < a; )
              l[s] = t[s];
          for (; ++o < r; )
              l[n[o]] = e[o];
          for (; i--; )
              l[s++] = e[o++];
          return l
      }
      function Bt(e, t, n) {
          for (var r = -1, o = n.length, i = -1, s = _o(e.length - o, 0), a = -1, l = t.length, c = Pr(s + l); ++i < s; )
              c[i] = e[i];
          for (s = i; ++a < l; )
              c[s + a] = t[a];
          for (; ++r < o; )
              c[s + n[r]] = e[i++];
          return c
      }
      function Wt(e, t) {
          return function(n, r, o) {
              var i = t ? t() : {};
              if (r = wn(r, o, 3),
              Ei(n)) {
                  o = -1;
                  for (var s = n.length; ++o < s; ) {
                      var a = n[o];
                      e(i, a, r(a, o, n), n)
                  }
              } else
                  Do(n, function(t, n, o) {
                      e(i, t, r(t, n, o), o)
                  });
              return i
          }
      }
      function $t(e) {
          return ur(function(t, n) {
              var r = -1
                , o = null == t ? 0 : n.length
                , i = 2 < o ? n[o - 2] : w
                , s = 2 < o ? n[2] : w
                , a = 1 < o ? n[o - 1] : w;
              for ("function" == typeof i ? (i = Ft(i, a, 5),
              o -= 2) : (i = "function" == typeof a ? a : w,
              o -= i ? 1 : 0),
              s && Nn(n[0], n[1], s) && (i = 3 > o ? w : i,
              o = 1); ++r < o; )
                  (s = n[r]) && e(t, s, i);
              return t
          })
      }
      function Xt(e, t) {
          return function(n, r) {
              var o = n ? qo(n) : 0;
              if (!Ln(o))
                  return e(n, r);
              for (var i = t ? o : -1, s = Pn(n); (t ? i-- : ++i < o) && !1 !== r(s[i], i, s); )
                  ;
              return n
          }
      }
      function Yt(e) {
          return function(t, n, r) {
              var o = Pn(t);
              r = r(t);
              for (var i = r.length, s = e ? i : -1; e ? s-- : ++s < i; ) {
                  var a = r[s];
                  if (!1 === n(o[a], a, o))
                      break
              }
              return t
          }
      }
      function Ut(e, t) {
          function n() {
              return (this && this !== Ye && this instanceof n ? r : e).apply(t, arguments)
          }
          var r = Gt(e);
          return n
      }
      function Jt(e) {
          return function(t) {
              var n = -1;
              t = Or(zr(t));
              for (var r = t.length, o = ""; ++n < r; )
                  o = e(o, t[n], n);
              return o
          }
      }
      function Gt(e) {
          return function() {
              var t = arguments;
              switch (t.length) {
              case 0:
                  return new e;
              case 1:
                  return new e(t[0]);
              case 2:
                  return new e(t[0],t[1]);
              case 3:
                  return new e(t[0],t[1],t[2]);
              case 4:
                  return new e(t[0],t[1],t[2],t[3]);
              case 5:
                  return new e(t[0],t[1],t[2],t[3],t[4]);
              case 6:
                  return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
              case 7:
                  return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
              }
              var n = Lo(e.prototype)
                , t = e.apply(n, t);
              return mr(t) ? t : n
          }
      }
      function Vt(e) {
          function t(n, r, o) {
              return o && Nn(n, r, o) && (r = w),
              n = mn(n, e, w, w, w, w, w, r),
              n.placeholder = t.placeholder,
              n
          }
          return t
      }
      function Zt(e, t) {
          return ur(function(n) {
              var r = n[0];
              return null == r ? r : (n.push(t),
              e.apply(w, n))
          })
      }
      function Kt(e, t) {
          return function(n, r, o) {
              if (o && Nn(n, r, o) && (r = w),
              r = wn(r, o, 3),
              1 == r.length) {
                  o = n = Ei(n) ? n : Fn(n);
                  for (var i = r, s = -1, a = o.length, l = t, c = l; ++s < a; ) {
                      var u = o[s]
                        , f = +i(u);
                      e(f, l) && (l = f,
                      c = u)
                  }
                  if (o = c,
                  !n.length || o !== t)
                      return o
              }
              return lt(n, r, e, t)
          }
      }
      function Qt(e, n) {
          return function(r, o, i) {
              return o = wn(o, i, 3),
              Ei(r) ? (o = t(r, o, n),
              -1 < o ? r[o] : w) : ut(r, o, e)
          }
      }
      function en(e) {
          return function(n, r, o) {
              return n && n.length ? (r = wn(r, o, 3),
              t(n, r, e)) : -1
          }
      }
      function tn(e) {
          return function(t, n, r) {
              return n = wn(n, r, 3),
              ut(t, n, e, !0)
          }
      }
      function nn(e) {
          return function() {
              for (var t, n = arguments.length, r = e ? n : -1, o = 0, i = Pr(n); e ? r-- : ++r < n; ) {
                  var s = i[o++] = arguments[r];
                  if ("function" != typeof s)
                      throw new Gr(R);
                  !t && He.prototype.thru && "wrapper" == xn(s) && (t = new He([],(!0)))
              }
              for (r = t ? -1 : n; ++r < n; ) {
                  var s = i[r]
                    , o = xn(s)
                    , a = "wrapper" == o ? Po(s) : w;
                  t = a && On(a[0]) && a[1] == (A | T | M | z) && !a[4].length && 1 == a[9] ? t[xn(a[0])].apply(t, a[3]) : 1 == s.length && On(s) ? t[o]() : t.thru(s)
              }
              return function() {
                  var e = arguments
                    , r = e[0];
                  if (t && 1 == e.length && Ei(r) && r.length >= D)
                      return t.plant(r).value();
                  for (var o = 0, e = n ? i[o].apply(this, e) : r; ++o < n; )
                      e = i[o].call(this, e);
                  return e
              }
          }
      }
      function rn(e, t) {
          return function(n, r, o) {
              return "function" == typeof r && o === w && Ei(n) ? e(n, r) : t(n, Ft(r, o, 3))
          }
      }
      function on(e) {
          return function(t, n, r) {
              return ("function" != typeof n || r !== w) && (n = Ft(n, r, 3)),
              e(t, n, Mr)
          }
      }
      function sn(e) {
          return function(t, n, r) {
              return ("function" != typeof n || r !== w) && (n = Ft(n, r, 3)),
              e(t, n)
          }
      }
      function an(e) {
          return function(t, n, r) {
              var o = {};
              return n = wn(n, r, 3),
              pt(t, function(t, r, i) {
                  i = n(t, r, i),
                  r = e ? i : r,
                  t = e ? t : i,
                  o[r] = t
              }),
              o
          }
      }
      function ln(e) {
          return function(t, n, r) {
              return t = o(t),
              (e ? t : "") + hn(t, n, r) + (e ? "" : t)
          }
      }
      function cn(e) {
          var t = ur(function(n, r) {
              var o = g(r, t.placeholder);
              return mn(n, e, w, r, o)
          });
          return t
      }
      function un(e, t) {
          return function(n, r, o, i) {
              var s = 3 > arguments.length;
              return "function" == typeof r && i === w && Ei(n) ? e(n, r, o, s) : Mt(n, wn(r, i, 4), o, s, t)
          }
      }
      function fn(e, t, n, r, o, i, s, a, l, c) {
          function u() {
              for (var b = arguments.length, x = b, S = Pr(b); x--; )
                  S[x] = arguments[x];
              if (r && (S = qt(S, r, o)),
              i && (S = Bt(S, i, s)),
              d || v) {
                  var x = u.placeholder
                    , T = g(S, x)
                    , b = b - T.length;
                  if (b < c) {
                      var C = a ? Be(a) : w
                        , b = _o(c - b, 0)
                        , A = d ? T : w
                        , T = d ? w : T
                        , z = d ? S : w
                        , S = d ? w : S;
                      return t |= d ? M : E,
                      t &= ~(d ? E : M),
                      m || (t &= ~(_ | k)),
                      S = [e, t, n, z, A, S, T, C, l, b],
                      C = fn.apply(w, S),
                      On(e) && Bo(C, S),
                      C.placeholder = x,
                      C
                  }
              }
              if (x = h ? n : this,
              C = p ? x[e] : e,
              a)
                  for (b = S.length,
                  A = ko(a.length, b),
                  T = Be(S); A--; )
                      z = a[A],
                      S[A] = zn(z, b) ? T[z] : w;
              return f && l < S.length && (S.length = l),
              this && this !== Ye && this instanceof u && (C = y || Gt(e)),
              C.apply(x, S)
          }
          var f = t & A
            , h = t & _
            , p = t & k
            , d = t & T
            , m = t & S
            , v = t & C
            , y = p ? w : Gt(e);
          return u
      }
      function hn(e, t, n) {
          return e = e.length,
          t = +t,
          e < t && wo(t) ? (t -= e,
          n = null == n ? " " : n + "",
          Nr(n, mo(t / n.length)).slice(0, t)) : ""
      }
      function pn(e, t, n, r) {
          function o() {
              for (var t = -1, a = arguments.length, l = -1, c = r.length, u = Pr(c + a); ++l < c; )
                  u[l] = r[l];
              for (; a--; )
                  u[l++] = arguments[++t];
              return (this && this !== Ye && this instanceof o ? s : e).apply(i ? n : this, u)
          }
          var i = t & _
            , s = Gt(e);
          return o
      }
      function dn(e) {
          var t = $r[e];
          return function(e, n) {
              return (n = n === w ? 0 : +n || 0) ? (n = lo(10, n),
              t(e * n) / n) : t(e)
          }
      }
      function gn(e) {
          return function(t, n, r, o) {
              var i = wn(r);
              return null == r && i === rt ? Ht(t, n, e) : Rt(t, n, i(r, o, 1), e)
          }
      }
      function mn(e, t, n, r, o, i, s, a) {
          var l = t & k;
          if (!l && "function" != typeof e)
              throw new Gr(R);
          var c = r ? r.length : 0;
          if (c || (t &= ~(M | E),
          r = o = w),
          c -= o ? o.length : 0,
          t & E) {
              var u = r
                , f = o;
              r = o = w
          }
          var h = l ? w : Po(e);
          return n = [e, t, n, r, o, u, f, i, s, a],
          h && (r = n[1],
          t = h[1],
          a = r | t,
          o = t == A && r == T || t == A && r == z && n[7].length <= h[8] || t == (A | z) && r == T,
          (a < A || o) && (t & _ && (n[2] = h[2],
          a |= r & _ ? 0 : S),
          (r = h[3]) && (o = n[3],
          n[3] = o ? qt(o, r, h[4]) : Be(r),
          n[4] = o ? g(n[3], F) : Be(h[4])),
          (r = h[5]) && (o = n[5],
          n[5] = o ? Bt(o, r, h[6]) : Be(r),
          n[6] = o ? g(n[5], F) : Be(h[6])),
          (r = h[7]) && (n[7] = Be(r)),
          t & A && (n[8] = null == n[8] ? h[8] : ko(n[8], h[8])),
          null == n[9] && (n[9] = h[9]),
          n[0] = h[0],
          n[1] = a),
          t = n[1],
          a = n[9]),
          n[9] = null == a ? l ? 0 : e.length : _o(a - c, 0) || 0,
          (h ? Fo : Bo)(t == _ ? Ut(n[0], n[2]) : t != M && t != (_ | M) || n[4].length ? fn.apply(w, n) : pn.apply(w, n), n)
      }
      function vn(e, t, n, r, o, i, s) {
          var a = -1
            , l = e.length
            , c = t.length;
          if (l != c && (!o || c <= l))
              return !1;
          for (; ++a < l; ) {
              var u = e[a]
                , c = t[a]
                , f = r ? r(o ? c : u, o ? u : c, a) : w;
              if (f !== w) {
                  if (f)
                      continue;
                  return !1
              }
              if (o) {
                  if (!Ze(t, function(e) {
                      return u === e || n(u, e, r, o, i, s)
                  }))
                      return !1
              } else if (u !== c && !n(u, c, r, o, i, s))
                  return !1
          }
          return !0
      }
      function yn(e, t, n) {
          switch (n) {
          case B:
          case W:
              return +e == +t;
          case $:
              return e.name == t.name && e.message == t.message;
          case Y:
              return e != +e ? t != +t : e == +t;
          case J:
          case G:
              return e == t + ""
          }
          return !1
      }
      function bn(e, t, n, r, o, i, s) {
          var a = Fi(e)
            , l = a.length
            , c = Fi(t).length;
          if (l != c && !o)
              return !1;
          for (c = l; c--; ) {
              var u = a[c];
              if (!(o ? u in t : eo.call(t, u)))
                  return !1
          }
          for (var f = o; ++c < l; ) {
              var u = a[c]
                , h = e[u]
                , p = t[u]
                , d = r ? r(o ? p : h, o ? h : p, u) : w;
              if (d === w ? !n(h, p, r, o, i, s) : !d)
                  return !1;
              f || (f = "constructor" == u)
          }
          return !(!f && (n = e.constructor,
          r = t.constructor,
          n != r && "constructor"in e && "constructor"in t && !("function" == typeof n && n instanceof n && "function" == typeof r && r instanceof r)))
      }
      function wn(e, t, n) {
          var r = De.callback || Lr
            , r = r === Lr ? rt : r;
          return n ? r(e, t, n) : r
      }
      function xn(e) {
          for (var t = e.name + "", n = Oo[t], r = n ? n.length : 0; r--; ) {
              var o = n[r]
                , i = o.func;
              if (null == i || i == e)
                  return o.name
          }
          return t
      }
      function _n(e, t, r) {
          var o = De.indexOf || Yn
            , o = o === Yn ? n : o;
          return e ? o(e, t, r) : o
      }
      function kn(e) {
          e = Er(e);
          for (var t = e.length; t--; ) {
              var n = e[t][1];
              e[t][2] = n === n && !mr(n)
          }
          return e
      }
      function Sn(e, t) {
          var n = null == e ? w : e[t];
          return vr(n) ? n : w
      }
      function Tn(e) {
          var t = e.length
            , n = new e.constructor(t);
          return t && "string" == typeof e[0] && eo.call(e, "index") && (n.index = e.index,
          n.input = e.input),
          n
      }
      function Cn(e) {
          return e = e.constructor,
          "function" == typeof e && e instanceof e || (e = Yr),
          new e
      }
      function Mn(e, t, n) {
          var r = e.constructor;
          switch (t) {
          case V:
              return Pt(e);
          case B:
          case W:
              return new r((+e));
          case Z:
          case K:
          case Q:
          case ee:
          case te:
          case ne:
          case re:
          case oe:
          case ie:
              return t = e.buffer,
              new r(n ? Pt(t) : t,e.byteOffset,e.length);
          case Y:
          case G:
              return new r(e);
          case J:
              var o = new r(e.source,Se.exec(e));
              o.lastIndex = e.lastIndex
          }
          return o
      }
      function En(e, t, n) {
          return null == e || jn(t, e) || (t = qn(t),
          e = 1 == t.length ? e : mt(e, Et(t, 0, -1)),
          t = Un(t)),
          t = null == e ? e : e[t],
          null == t ? w : t.apply(e, n)
      }
      function An(e) {
          return null != e && Ln(qo(e))
      }
      function zn(e, t) {
          return e = "number" == typeof e || Me.test(e) ? +e : -1,
          t = null == t ? No : t,
          -1 < e && 0 == e % 1 && e < t
      }
      function Nn(e, t, n) {
          if (!mr(n))
              return !1;
          var r = typeof t;
          return !!("number" == r ? An(n) && zn(t, n.length) : "string" == r && t in n) && (t = n[t],
          e === e ? e === t : t !== t)
      }
      function jn(e, t) {
          var n = typeof e;
          return !!("string" == n && ve.test(e) || "number" == n) || !Ei(e) && (!me.test(e) || null != t && e in Pn(t))
      }
      function On(e) {
          var t = xn(e)
            , n = De[t];
          return "function" == typeof n && t in Re.prototype && (e === n || (t = Po(n),
          !!t && e === t[0]))
      }
      function Ln(e) {
          return "number" == typeof e && -1 < e && 0 == e % 1 && e <= No
      }
      function Dn(e, t) {
          return e === w ? t : Ai(e, t, Dn)
      }
      function In(e, t) {
          e = Pn(e);
          for (var n = -1, r = t.length, o = {}; ++n < r; ) {
              var i = t[n];
              i in e && (o[i] = e[i])
          }
          return o
      }
      function Hn(e, t) {
          var n = {};
          return ht(e, function(e, r, o) {
              t(e, r, o) && (n[r] = e)
          }),
          n
      }
      function Rn(e) {
          for (var t = Mr(e), n = t.length, r = n && e.length, o = !!r && Ln(r) && (Ei(e) || hr(e)), i = -1, s = []; ++i < n; ) {
              var a = t[i];
              (o && zn(a, r) || eo.call(e, a)) && s.push(a)
          }
          return s
      }
      function Fn(e) {
          return null == e ? [] : An(e) ? mr(e) ? e : Yr(e) : Ar(e)
      }
      function Pn(e) {
          return mr(e) ? e : Yr(e)
      }
      function qn(e) {
          if (Ei(e))
              return e;
          var t = [];
          return o(e).replace(ye, function(e, n, r, o) {
              t.push(r ? o.replace(_e, "$1") : n || e)
          }),
          t
      }
      function Bn(e) {
          return e instanceof Re ? e.clone() : new He(e.__wrapped__,e.__chain__,Be(e.__actions__))
      }
      function Wn(e, t, n) {
          return e && e.length ? ((n ? Nn(e, t, n) : null == t) && (t = 1),
          Et(e, 0 > t ? 0 : t)) : []
      }
      function $n(e, t, n) {
          var r = e ? e.length : 0;
          return r ? ((n ? Nn(e, t, n) : null == t) && (t = 1),
          t = r - (+t || 0),
          Et(e, 0, 0 > t ? 0 : t)) : []
      }
      function Xn(e) {
          return e ? e[0] : w
      }
      function Yn(e, t, r) {
          var o = e ? e.length : 0;
          if (!o)
              return -1;
          if ("number" == typeof r)
              r = 0 > r ? _o(o + r, 0) : r;
          else if (r)
              return r = Ht(e, t),
              r < o && (t === t ? t === e[r] : e[r] !== e[r]) ? r : -1;
          return n(e, t, r || 0)
      }
      function Un(e) {
          var t = e ? e.length : 0;
          return t ? e[t - 1] : w
      }
      function Jn(e) {
          return Wn(e, 1)
      }
      function Gn(e, t, r, o) {
          if (!e || !e.length)
              return [];
          null != t && "boolean" != typeof t && (o = r,
          r = Nn(e, t, o) ? w : t,
          t = !1);
          var i = wn();
          if ((null != r || i !== rt) && (r = i(r, o, 3)),
          t && _n() === n) {
              t = r;
              var s;
              r = -1,
              o = e.length;
              for (var i = -1, a = []; ++r < o; ) {
                  var l = e[r]
                    , c = t ? t(l, r, e) : l;
                  r && s === c || (s = c,
                  a[++i] = l)
              }
              e = a
          } else
              e = Ot(e, r);
          return e
      }
      function Vn(e) {
          if (!e || !e.length)
              return [];
          var t = -1
            , n = 0;
          e = Xe(e, function(e) {
              return An(e) ? (n = _o(e.length, n),
              !0) : void 0
          });
          for (var r = Pr(n); ++t < n; )
              r[t] = Je(e, kt(t));
          return r
      }
      function Zn(e, t, n) {
          return e && e.length ? (e = Vn(e),
          null == t ? e : (t = Ft(t, n, 4),
          Je(e, function(e) {
              return Ve(e, t, w, !0)
          }))) : []
      }
      function Kn(e, t) {
          var n = -1
            , r = e ? e.length : 0
            , o = {};
          for (!r || t || Ei(e[0]) || (t = []); ++n < r; ) {
              var i = e[n];
              t ? o[i] = t[n] : i && (o[i[0]] = i[1])
          }
          return o
      }
      function Qn(e) {
          return e = De(e),
          e.__chain__ = !0,
          e
      }
      function er(e, t, n) {
          return t.call(n, e)
      }
      function tr(e, t, n) {
          var r = Ei(e) ? $e : at;
          return n && Nn(e, t, n) && (t = w),
          ("function" != typeof t || n !== w) && (t = wn(t, n, 3)),
          r(e, t)
      }
      function nr(e, t, n) {
          var r = Ei(e) ? Xe : ct;
          return t = wn(t, n, 3),
          r(e, t)
      }
      function rr(e, t, n, r) {
          var o = e ? qo(e) : 0;
          return Ln(o) || (e = Ar(e),
          o = e.length),
          n = "number" != typeof n || r && Nn(t, n, r) ? 0 : 0 > n ? _o(o + n, 0) : n || 0,
          "string" == typeof e || !Ei(e) && xr(e) ? n <= o && -1 < e.indexOf(t, n) : !!o && -1 < _n(e, t, n)
      }
      function or(e, t, n) {
          var r = Ei(e) ? Je : bt;
          return t = wn(t, n, 3),
          r(e, t)
      }
      function ir(e, t, n) {
          if (n ? Nn(e, t, n) : null == t) {
              e = Fn(e);
              var r = e.length;
              return 0 < r ? e[Ct(0, r - 1)] : w
          }
          n = -1,
          e = Sr(e);
          var r = e.length
            , o = r - 1;
          for (t = ko(0 > t ? 0 : +t || 0, r); ++n < t; ) {
              var r = Ct(n, o)
                , i = e[r];
              e[r] = e[n],
              e[n] = i
          }
          return e.length = t,
          e
      }
      function sr(e, t, n) {
          var r = Ei(e) ? Ze : At;
          return n && Nn(e, t, n) && (t = w),
          ("function" != typeof t || n !== w) && (t = wn(t, n, 3)),
          r(e, t)
      }
      function ar(e, t) {
          var n;
          if ("function" != typeof t) {
              if ("function" != typeof e)
                  throw new Gr(R);
              var r = e;
              e = t,
              t = r
          }
          return function() {
              return 0 < --e && (n = t.apply(this, arguments)),
              1 >= e && (t = w),
              n
          }
      }
      function lr(e, t, n) {
          function r(t, n) {
              n && so(n),
              l = h = p = w,
              t && (d = di(),
              c = e.apply(f, a),
              h || l || (a = f = w))
          }
          function o() {
              var e = t - (di() - u);
              0 >= e || e > t ? r(p, l) : h = fo(o, e)
          }
          function i() {
              r(m, h)
          }
          function s() {
              if (a = arguments,
              u = di(),
              f = this,
              p = m && (h || !v),
              !1 === g)
                  var n = v && !h;
              else {
                  l || v || (d = u);
                  var r = g - (u - d)
                    , s = 0 >= r || r > g;
                  s ? (l && (l = so(l)),
                  d = u,
                  c = e.apply(f, a)) : l || (l = fo(i, r))
              }
              return s && h ? h = so(h) : h || t === g || (h = fo(o, t)),
              n && (s = !0,
              c = e.apply(f, a)),
              !s || h || l || (a = f = w),
              c
          }
          var a, l, c, u, f, h, p, d = 0, g = !1, m = !0;
          if ("function" != typeof e)
              throw new Gr(R);
          if (t = 0 > t ? 0 : +t || 0,
          !0 === n)
              var v = !0
                , m = !1;
          else
              mr(n) && (v = !!n.leading,
              g = "maxWait"in n && _o(+n.maxWait || 0, t),
              m = "trailing"in n ? !!n.trailing : m);
          return s.cancel = function() {
              h && so(h),
              l && so(l),
              d = 0,
              l = h = p = w
          }
          ,
          s
      }
      function cr(e, t) {
          function n() {
              var r = arguments
                , o = t ? t.apply(this, r) : r[0]
                , i = n.cache;
              return i.has(o) ? i.get(o) : (r = e.apply(this, r),
              n.cache = i.set(o, r),
              r)
          }
          if ("function" != typeof e || t && "function" != typeof t)
              throw new Gr(R);
          return n.cache = new cr.Cache,
          n
      }
      function ur(e, t) {
          if ("function" != typeof e)
              throw new Gr(R);
          return t = _o(t === w ? e.length - 1 : +t || 0, 0),
          function() {
              for (var n = arguments, r = -1, o = _o(n.length - t, 0), i = Pr(o); ++r < o; )
                  i[r] = n[t + r];
              switch (t) {
              case 0:
                  return e.call(this, i);
              case 1:
                  return e.call(this, n[0], i);
              case 2:
                  return e.call(this, n[0], n[1], i)
              }
              for (o = Pr(t + 1),
              r = -1; ++r < t; )
                  o[r] = n[r];
              return o[t] = i,
              e.apply(this, o)
          }
      }
      function fr(e, t) {
          return e > t
      }
      function hr(e) {
          return p(e) && An(e) && eo.call(e, "callee") && !co.call(e, "callee")
      }
      function pr(e, t, n, r) {
          return r = (n = "function" == typeof n ? Ft(n, r, 3) : w) ? n(e, t) : w,
          r === w ? vt(e, t, n) : !!r
      }
      function dr(e) {
          return p(e) && "string" == typeof e.message && no.call(e) == $
      }
      function gr(e) {
          return mr(e) && no.call(e) == X
      }
      function mr(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t)
      }
      function vr(e) {
          return null != e && (gr(e) ? oo.test(Qr.call(e)) : p(e) && Ce.test(e))
      }
      function yr(e) {
          return "number" == typeof e || p(e) && no.call(e) == Y
      }
      function br(e) {
          var t;
          if (!p(e) || no.call(e) != U || hr(e) || !(eo.call(e, "constructor") || (t = e.constructor,
          "function" != typeof t || t instanceof t)))
              return !1;
          var n;
          return ht(e, function(e, t) {
              n = t
          }),
          n === w || eo.call(e, n)
      }
      function wr(e) {
          return mr(e) && no.call(e) == J
      }
      function xr(e) {
          return "string" == typeof e || p(e) && no.call(e) == G
      }
      function _r(e) {
          return p(e) && Ln(e.length) && !!Oe[no.call(e)]
      }
      function kr(e, t) {
          return e < t
      }
      function Sr(e) {
          var t = e ? qo(e) : 0;
          return Ln(t) ? t ? Be(e) : [] : Ar(e)
      }
      function Tr(e) {
          return nt(e, Mr(e))
      }
      function Cr(e) {
          return gt(e, Mr(e))
      }
      function Mr(e) {
          if (null == e)
              return [];
          mr(e) || (e = Yr(e));
          for (var t = e.length, t = t && Ln(t) && (Ei(e) || hr(e)) && t || 0, n = e.constructor, r = -1, n = "function" == typeof n && n.prototype === e, o = Pr(t), i = 0 < t; ++r < t; )
              o[r] = r + "";
          for (var s in e)
              i && zn(s, t) || "constructor" == s && (n || !eo.call(e, s)) || o.push(s);
          return o
      }
      function Er(e) {
          e = Pn(e);
          for (var t = -1, n = Fi(e), r = n.length, o = Pr(r); ++t < r; ) {
              var i = n[t];
              o[t] = [i, e[i]]
          }
          return o
      }
      function Ar(e) {
          return Lt(e, Fi(e))
      }
      function zr(e) {
          return (e = o(e)) && e.replace(Ee, l).replace(xe, "")
      }
      function Nr(e, t) {
          var n = "";
          if (e = o(e),
          t = +t,
          1 > t || !e || !wo(t))
              return n;
          do
              t % 2 && (n += e),
              t = yo(t / 2),
              e += e;
          while (t);
          return n
      }
      function jr(e, t, n) {
          var r = e;
          return (e = o(e)) ? (n ? Nn(r, t, n) : null == t) ? e.slice(m(e), v(e) + 1) : (t += "",
          e.slice(i(e, t), s(e, t) + 1)) : e
      }
      function Or(e, t, n) {
          return n && Nn(e, t, n) && (t = w),
          e = o(e),
          e.match(t || Ne) || []
      }
      function Lr(e, t, n) {
          return n && Nn(e, t, n) && (t = w),
          p(e) ? Ir(e) : rt(e, t)
      }
      function Dr(e) {
          return e
      }
      function Ir(e) {
          return wt(ot(e, !0))
      }
      function Hr(e, t, n) {
          if (null == n) {
              var r = mr(t)
                , o = r ? Fi(t) : w;
              ((o = o && o.length ? gt(t, o) : w) ? o.length : r) || (o = !1,
              n = t,
              t = e,
              e = this)
          }
          o || (o = gt(t, Fi(t)));
          var i = !0
            , r = -1
            , s = gr(e)
            , a = o.length;
          !1 === n ? i = !1 : mr(n) && "chain"in n && (i = n.chain);
          for (; ++r < a; ) {
              n = o[r];
              var l = t[n];
              e[n] = l,
              s && (e.prototype[n] = function(t) {
                  return function() {
                      var n = this.__chain__;
                      if (i || n) {
                          var r = e(this.__wrapped__);
                          return (r.__actions__ = Be(this.__actions__)).push({
                              func: t,
                              args: arguments,
                              thisArg: e
                          }),
                          r.__chain__ = n,
                          r
                      }
                      return t.apply(e, Ge([this.value()], arguments))
                  }
              }(l))
          }
          return e
      }
      function Rr() {}
      function Fr(e) {
          return jn(e) ? kt(e) : St(e)
      }
      d = d ? Ue.defaults(Ye.Object(), d, Ue.pick(Ye, je)) : Ye;
      var Pr = d.Array
        , qr = d.Date
        , Br = d.Error
        , Wr = d.Function
        , $r = d.Math
        , Xr = d.Number
        , Yr = d.Object
        , Ur = d.RegExp
        , Jr = d.String
        , Gr = d.TypeError
        , Vr = Pr.prototype
        , Zr = Yr.prototype
        , Kr = Jr.prototype
        , Qr = Wr.prototype.toString
        , eo = Zr.hasOwnProperty
        , to = 0
        , no = Zr.toString
        , ro = Ye._
        , oo = Ur("^" + Qr.call(eo).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
        , io = d.ArrayBuffer
        , so = d.clearTimeout
        , ao = d.parseFloat
        , lo = $r.pow
        , co = Zr.propertyIsEnumerable
        , uo = Sn(d, "Set")
        , fo = d.setTimeout
        , ho = Vr.splice
        , po = d.Uint8Array
        , go = Sn(d, "WeakMap")
        , mo = $r.ceil
        , vo = Sn(Yr, "create")
        , yo = $r.floor
        , bo = Sn(Pr, "isArray")
        , wo = d.isFinite
        , xo = Sn(Yr, "keys")
        , _o = $r.max
        , ko = $r.min
        , So = Sn(qr, "now")
        , To = d.parseInt
        , Co = $r.random
        , Mo = Xr.NEGATIVE_INFINITY
        , Eo = Xr.POSITIVE_INFINITY
        , Ao = 4294967294
        , zo = 2147483647
        , No = 9007199254740991
        , jo = go && new go
        , Oo = {};
      De.support = {},
      De.templateSettings = {
          escape: pe,
          evaluate: de,
          interpolate: ge,
          variable: "",
          imports: {
              _: De
          }
      };
      var Lo = function() {
          function e() {}
          return function(t) {
              if (mr(t)) {
                  e.prototype = t;
                  var n = new e;
                  e.prototype = w
              }
              return n || {}
          }
      }()
        , Do = Xt(pt)
        , Io = Xt(dt, !0)
        , Ho = Yt()
        , Ro = Yt(!0)
        , Fo = jo ? function(e, t) {
          return jo.set(e, t),
          e
      }
      : Dr
        , Po = jo ? function(e) {
          return jo.get(e)
      }
      : Rr
        , qo = kt("length")
        , Bo = function() {
          var e = 0
            , t = 0;
          return function(n, r) {
              var o = di()
                , i = L - (o - t);
              if (t = o,
              0 < i) {
                  if (++e >= O)
                      return n
              } else
                  e = 0;
              return Fo(n, r)
          }
      }()
        , Wo = ur(function(e, t) {
          return p(e) && An(e) ? st(e, ft(t, !1, !0)) : []
      })
        , $o = en()
        , Xo = en(!0)
        , Yo = ur(function(e) {
          for (var t = e.length, r = t, o = Pr(u), i = _n(), s = i === n, a = []; r--; ) {
              var l = e[r] = An(l = e[r]) ? l : [];
              o[r] = s && 120 <= l.length && vo && uo ? new Pe(r && l) : null
          }
          var s = e[0]
            , c = -1
            , u = s ? s.length : 0
            , f = o[0];
          e: for (; ++c < u; )
              if (l = s[c],
              0 > (f ? qe(f, l) : i(a, l, 0))) {
                  for (r = t; --r; ) {
                      var h = o[r];
                      if (0 > (h ? qe(h, l) : i(e[r], l, 0)))
                          continue e
                  }
                  f && f.push(l),
                  a.push(l)
              }
          return a
      })
        , Uo = ur(function(t, n) {
          n = ft(n);
          var r = tt(t, n);
          return Tt(t, n.sort(e)),
          r
      })
        , Jo = gn()
        , Go = gn(!0)
        , Vo = ur(function(e) {
          return Ot(ft(e, !1, !0))
      })
        , Zo = ur(function(e, t) {
          return An(e) ? st(e, t) : []
      })
        , Ko = ur(Vn)
        , Qo = ur(function(e) {
          var t = e.length
            , n = 2 < t ? e[t - 2] : w
            , r = 1 < t ? e[t - 1] : w;
          return 2 < t && "function" == typeof n ? t -= 2 : (n = 1 < t && "function" == typeof r ? (--t,
          r) : w,
          r = w),
          e.length = t,
          Zn(e, n, r)
      })
        , ei = ur(function(e) {
          return e = ft(e),
          this.thru(function(t) {
              t = Ei(t) ? t : [Pn(t)];
              for (var n = e, r = -1, o = t.length, i = -1, s = n.length, a = Pr(o + s); ++r < o; )
                  a[r] = t[r];
              for (; ++i < s; )
                  a[r++] = n[i];
              return a
          })
      })
        , ti = ur(function(e, t) {
          return tt(e, ft(t))
      })
        , ni = Wt(function(e, t, n) {
          eo.call(e, n) ? ++e[n] : e[n] = 1
      })
        , ri = Qt(Do)
        , oi = Qt(Io, !0)
        , ii = rn(We, Do)
        , si = rn(function(e, t) {
          for (var n = e.length; n-- && !1 !== t(e[n], n, e); )
              ;
          return e
      }, Io)
        , ai = Wt(function(e, t, n) {
          eo.call(e, n) ? e[n].push(t) : e[n] = [t]
      })
        , li = Wt(function(e, t, n) {
          e[n] = t
      })
        , ci = ur(function(e, t, n) {
          var r = -1
            , o = "function" == typeof t
            , i = jn(t)
            , s = An(e) ? Pr(e.length) : [];
          return Do(e, function(e) {
              var a = o ? t : i && null != e ? e[t] : w;
              s[++r] = a ? a.apply(e, n) : En(e, t, n)
          }),
          s
      })
        , ui = Wt(function(e, t, n) {
          e[n ? 0 : 1].push(t)
      }, function() {
          return [[], []]
      })
        , fi = un(Ve, Do)
        , hi = un(function(e, t, n, r) {
          var o = e.length;
          for (r && o && (n = e[--o]); o--; )
              n = t(n, e[o], o, e);
          return n
      }, Io)
        , pi = ur(function(e, t) {
          if (null == e)
              return [];
          var n = t[2];
          return n && Nn(t[0], t[1], n) && (t.length = 1),
          Nt(e, ft(t), [])
      })
        , di = So || function() {
          return (new qr).getTime()
      }
        , gi = ur(function(e, t, n) {
          var r = _;
          if (n.length)
              var o = g(n, gi.placeholder)
                , r = r | M;
          return mn(e, r, t, n, o)
      })
        , mi = ur(function(e, t) {
          t = t.length ? ft(t) : Cr(e);
          for (var n = -1, r = t.length; ++n < r; ) {
              var o = t[n];
              e[o] = mn(e[o], _, e)
          }
          return e
      })
        , vi = ur(function(e, t, n) {
          var r = _ | k;
          if (n.length)
              var o = g(n, vi.placeholder)
                , r = r | M;
          return mn(t, r, e, n, o)
      })
        , yi = Vt(T)
        , bi = Vt(C)
        , wi = ur(function(e, t) {
          return it(e, 1, t)
      })
        , xi = ur(function(e, t, n) {
          return it(e, t, n)
      })
        , _i = nn()
        , ki = nn(!0)
        , Si = ur(function(e, t) {
          if (t = ft(t),
          "function" != typeof e || !$e(t, r))
              throw new Gr(R);
          var n = t.length;
          return ur(function(r) {
              for (var o = ko(r.length, n); o--; )
                  r[o] = t[o](r[o]);
              return e.apply(this, r)
          })
      })
        , Ti = cn(M)
        , Ci = cn(E)
        , Mi = ur(function(e, t) {
          return mn(e, z, w, w, w, ft(t))
      })
        , Ei = bo || function(e) {
          return p(e) && Ln(e.length) && no.call(e) == q
      }
        , Ai = $t(_t)
        , zi = $t(function(e, t, n) {
          return n ? Qe(e, t, n) : et(e, t)
      })
        , Ni = Zt(zi, function(e, t) {
          return e === w ? t : e
      })
        , ji = Zt(Ai, Dn)
        , Oi = tn(pt)
        , Li = tn(dt)
        , Di = on(Ho)
        , Ii = on(Ro)
        , Hi = sn(pt)
        , Ri = sn(dt)
        , Fi = xo ? function(e) {
          var t = null == e ? w : e.constructor;
          return "function" == typeof t && t.prototype === e || "function" != typeof e && An(e) ? Rn(e) : mr(e) ? xo(e) : []
      }
      : Rn
        , Pi = an(!0)
        , qi = an()
        , Bi = ur(function(e, t) {
          if (null == e)
              return {};
          if ("function" != typeof t[0])
              return t = Je(ft(t), Jr),
              In(e, st(Mr(e), t));
          var n = Ft(t[0], t[1], 3);
          return Hn(e, function(e, t, r) {
              return !n(e, t, r)
          })
      })
        , Wi = ur(function(e, t) {
          return null == e ? {} : "function" == typeof t[0] ? Hn(e, Ft(t[0], t[1], 3)) : In(e, ft(t))
      })
        , $i = Jt(function(e, t, n) {
          return t = t.toLowerCase(),
          e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
      })
        , Xi = Jt(function(e, t, n) {
          return e + (n ? "-" : "") + t.toLowerCase()
      })
        , Yi = ln()
        , Ui = ln(!0)
        , Ji = Jt(function(e, t, n) {
          return e + (n ? "_" : "") + t.toLowerCase()
      })
        , Gi = Jt(function(e, t, n) {
          return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
      })
        , Vi = ur(function(e, t) {
          try {
              return e.apply(w, t)
          } catch (n) {
              return dr(n) ? n : new Br(n)
          }
      })
        , Zi = ur(function(e, t) {
          return function(n) {
              return En(n, e, t)
          }
      })
        , Ki = ur(function(e, t) {
          return function(n) {
              return En(e, n, t)
          }
      })
        , Qi = dn("ceil")
        , es = dn("floor")
        , ts = Kt(fr, Mo)
        , ns = Kt(kr, Eo)
        , rs = dn("round");
      return De.prototype = Ie.prototype,
      He.prototype = Lo(Ie.prototype),
      He.prototype.constructor = He,
      Re.prototype = Lo(Ie.prototype),
      Re.prototype.constructor = Re,
      Fe.prototype["delete"] = function(e) {
          return this.has(e) && delete this.__data__[e]
      }
      ,
      Fe.prototype.get = function(e) {
          return "__proto__" == e ? w : this.__data__[e]
      }
      ,
      Fe.prototype.has = function(e) {
          return "__proto__" != e && eo.call(this.__data__, e)
      }
      ,
      Fe.prototype.set = function(e, t) {
          return "__proto__" != e && (this.__data__[e] = t),
          this
      }
      ,
      Pe.prototype.push = function(e) {
          var t = this.data;
          "string" == typeof e || mr(e) ? t.set.add(e) : t.hash[e] = !0
      }
      ,
      cr.Cache = Fe,
      De.after = function(e, t) {
          if ("function" != typeof t) {
              if ("function" != typeof e)
                  throw new Gr(R);
              var n = e;
              e = t,
              t = n
          }
          return e = wo(e = +e) ? e : 0,
          function() {
              return 1 > --e ? t.apply(this, arguments) : void 0
          }
      }
      ,
      De.ary = function(e, t, n) {
          return n && Nn(e, t, n) && (t = w),
          t = e && null == t ? e.length : _o(+t || 0, 0),
          mn(e, A, w, w, w, w, t)
      }
      ,
      De.assign = zi,
      De.at = ti,
      De.before = ar,
      De.bind = gi,
      De.bindAll = mi,
      De.bindKey = vi,
      De.callback = Lr,
      De.chain = Qn,
      De.chunk = function(e, t, n) {
          t = (n ? Nn(e, t, n) : null == t) ? 1 : _o(yo(t) || 1, 1),
          n = 0;
          for (var r = e ? e.length : 0, o = -1, i = Pr(mo(r / t)); n < r; )
              i[++o] = Et(e, n, n += t);
          return i
      }
      ,
      De.compact = function(e) {
          for (var t = -1, n = e ? e.length : 0, r = -1, o = []; ++t < n; ) {
              var i = e[t];
              i && (o[++r] = i)
          }
          return o
      }
      ,
      De.constant = function(e) {
          return function() {
              return e
          }
      }
      ,
      De.countBy = ni,
      De.create = function(e, t, n) {
          var r = Lo(e);
          return n && Nn(e, t, n) && (t = w),
          t ? et(r, t) : r
      }
      ,
      De.curry = yi,
      De.curryRight = bi,
      De.debounce = lr,
      De.defaults = Ni,
      De.defaultsDeep = ji,
      De.defer = wi,
      De.delay = xi,
      De.difference = Wo,
      De.drop = Wn,
      De.dropRight = $n,
      De.dropRightWhile = function(e, t, n) {
          return e && e.length ? Dt(e, wn(t, n, 3), !0, !0) : []
      }
      ,
      De.dropWhile = function(e, t, n) {
          return e && e.length ? Dt(e, wn(t, n, 3), !0) : []
      }
      ,
      De.fill = function(e, t, n, r) {
          var o = e ? e.length : 0;
          if (!o)
              return [];
          for (n && "number" != typeof n && Nn(e, t, n) && (n = 0,
          r = o),
          o = e.length,
          n = null == n ? 0 : +n || 0,
          0 > n && (n = -n > o ? 0 : o + n),
          r = r === w || r > o ? o : +r || 0,
          0 > r && (r += o),
          o = n > r ? 0 : r >>> 0,
          n >>>= 0; n < o; )
              e[n++] = t;
          return e
      }
      ,
      De.filter = nr,
      De.flatten = function(e, t, n) {
          var r = e ? e.length : 0;
          return n && Nn(e, t, n) && (t = !1),
          r ? ft(e, t) : []
      }
      ,
      De.flattenDeep = function(e) {
          return e && e.length ? ft(e, !0) : []
      }
      ,
      De.flow = _i,
      De.flowRight = ki,
      De.forEach = ii,
      De.forEachRight = si,
      De.forIn = Di,
      De.forInRight = Ii,
      De.forOwn = Hi,
      De.forOwnRight = Ri,
      De.functions = Cr,
      De.groupBy = ai,
      De.indexBy = li,
      De.initial = function(e) {
          return $n(e, 1)
      }
      ,
      De.intersection = Yo,
      De.invert = function(e, t, n) {
          n && Nn(e, t, n) && (t = w),
          n = -1;
          for (var r = Fi(e), o = r.length, i = {}; ++n < o; ) {
              var s = r[n]
                , a = e[s];
              t ? eo.call(i, a) ? i[a].push(s) : i[a] = [s] : i[a] = s
          }
          return i
      }
      ,
      De.invoke = ci,
      De.keys = Fi,
      De.keysIn = Mr,
      De.map = or,
      De.mapKeys = Pi,
      De.mapValues = qi,
      De.matches = Ir,
      De.matchesProperty = function(e, t) {
          return xt(e, ot(t, !0))
      }
      ,
      De.memoize = cr,
      De.merge = Ai,
      De.method = Zi,
      De.methodOf = Ki,
      De.mixin = Hr,
      De.modArgs = Si,
      De.negate = function(e) {
          if ("function" != typeof e)
              throw new Gr(R);
          return function() {
              return !e.apply(this, arguments)
          }
      }
      ,
      De.omit = Bi,
      De.once = function(e) {
          return ar(2, e)
      }
      ,
      De.pairs = Er,
      De.partial = Ti,
      De.partialRight = Ci,
      De.partition = ui,
      De.pick = Wi,
      De.pluck = function(e, t) {
          return or(e, Fr(t))
      }
      ,
      De.property = Fr,
      De.propertyOf = function(e) {
          return function(t) {
              return mt(e, qn(t), t + "")
          }
      }
      ,
      De.pull = function() {
          var e = arguments
            , t = e[0];
          if (!t || !t.length)
              return t;
          for (var n = 0, r = _n(), o = e.length; ++n < o; )
              for (var i = 0, s = e[n]; -1 < (i = r(t, s, i)); )
                  ho.call(t, i, 1);
          return t
      }
      ,
      De.pullAt = Uo,
      De.range = function(e, t, n) {
          n && Nn(e, t, n) && (t = n = w),
          e = +e || 0,
          n = null == n ? 1 : +n || 0,
          null == t ? (t = e,
          e = 0) : t = +t || 0;
          var r = -1;
          t = _o(mo((t - e) / (n || 1)), 0);
          for (var o = Pr(t); ++r < t; )
              o[r] = e,
              e += n;
          return o
      }
      ,
      De.rearg = Mi,
      De.reject = function(e, t, n) {
          var r = Ei(e) ? Xe : ct;
          return t = wn(t, n, 3),
          r(e, function(e, n, r) {
              return !t(e, n, r)
          })
      }
      ,
      De.remove = function(e, t, n) {
          var r = [];
          if (!e || !e.length)
              return r;
          var o = -1
            , i = []
            , s = e.length;
          for (t = wn(t, n, 3); ++o < s; )
              n = e[o],
              t(n, o, e) && (r.push(n),
              i.push(o));
          return Tt(e, i),
          r
      }
      ,
      De.rest = Jn,
      De.restParam = ur,
      De.set = function(e, t, n) {
          if (null == e)
              return e;
          var r = t + "";
          t = null != e[r] || jn(t, e) ? [r] : qn(t);
          for (var r = -1, o = t.length, i = o - 1, s = e; null != s && ++r < o; ) {
              var a = t[r];
              mr(s) && (r == i ? s[a] = n : null == s[a] && (s[a] = zn(t[r + 1]) ? [] : {})),
              s = s[a]
          }
          return e
      }
      ,
      De.shuffle = function(e) {
          return ir(e, Eo)
      }
      ,
      De.slice = function(e, t, n) {
          var r = e ? e.length : 0;
          return r ? (n && "number" != typeof n && Nn(e, t, n) && (t = 0,
          n = r),
          Et(e, t, n)) : []
      }
      ,
      De.sortBy = function(e, t, n) {
          if (null == e)
              return [];
          n && Nn(e, t, n) && (t = w);
          var r = -1;
          return t = wn(t, n, 3),
          e = bt(e, function(e, n, o) {
              return {
                  a: t(e, n, o),
                  b: ++r,
                  c: e
              }
          }),
          zt(e, a)
      }
      ,
      De.sortByAll = pi,
      De.sortByOrder = function(e, t, n, r) {
          return null == e ? [] : (r && Nn(t, n, r) && (n = w),
          Ei(t) || (t = null == t ? [] : [t]),
          Ei(n) || (n = null == n ? [] : [n]),
          Nt(e, t, n))
      }
      ,
      De.spread = function(e) {
          if ("function" != typeof e)
              throw new Gr(R);
          return function(t) {
              return e.apply(this, t)
          }
      }
      ,
      De.take = function(e, t, n) {
          return e && e.length ? ((n ? Nn(e, t, n) : null == t) && (t = 1),
          Et(e, 0, 0 > t ? 0 : t)) : []
      }
      ,
      De.takeRight = function(e, t, n) {
          var r = e ? e.length : 0;
          return r ? ((n ? Nn(e, t, n) : null == t) && (t = 1),
          t = r - (+t || 0),
          Et(e, 0 > t ? 0 : t)) : []
      }
      ,
      De.takeRightWhile = function(e, t, n) {
          return e && e.length ? Dt(e, wn(t, n, 3), !1, !0) : []
      }
      ,
      De.takeWhile = function(e, t, n) {
          return e && e.length ? Dt(e, wn(t, n, 3)) : []
      }
      ,
      De.tap = function(e, t, n) {
          return t.call(n, e),
          e
      }
      ,
      De.throttle = function(e, t, n) {
          var r = !0
            , o = !0;
          if ("function" != typeof e)
              throw new Gr(R);
          return !1 === n ? r = !1 : mr(n) && (r = "leading"in n ? !!n.leading : r,
          o = "trailing"in n ? !!n.trailing : o),
          lr(e, t, {
              leading: r,
              maxWait: +t,
              trailing: o
          })
      }
      ,
      De.thru = er,
      De.times = function(e, t, n) {
          if (e = yo(e),
          1 > e || !wo(e))
              return [];
          var r = -1
            , o = Pr(ko(e, 4294967295));
          for (t = Ft(t, n, 1); ++r < e; )
              4294967295 > r ? o[r] = t(r) : t(r);
          return o
      }
      ,
      De.toArray = Sr,
      De.toPlainObject = Tr,
      De.transform = function(e, t, n, r) {
          var o = Ei(e) || _r(e);
          return t = wn(t, r, 4),
          null == n && (o || mr(e) ? (r = e.constructor,
          n = o ? Ei(e) ? new r : [] : Lo(gr(r) ? r.prototype : w)) : n = {}),
          (o ? We : pt)(e, function(e, r, o) {
              return t(n, e, r, o)
          }),
          n
      }
      ,
      De.union = Vo,
      De.uniq = Gn,
      De.unzip = Vn,
      De.unzipWith = Zn,
      De.values = Ar,
      De.valuesIn = function(e) {
          return Lt(e, Mr(e))
      }
      ,
      De.where = function(e, t) {
          return nr(e, wt(t))
      }
      ,
      De.without = Zo,
      De.wrap = function(e, t) {
          return t = null == t ? Dr : t,
          mn(t, M, w, [e], [])
      }
      ,
      De.xor = function() {
          for (var e = -1, t = arguments.length; ++e < t; ) {
              var n = arguments[e];
              if (An(n))
                  var r = r ? Ge(st(r, n), st(n, r)) : n
          }
          return r ? Ot(r) : []
      }
      ,
      De.zip = Ko,
      De.zipObject = Kn,
      De.zipWith = Qo,
      De.backflow = ki,
      De.collect = or,
      De.compose = ki,
      De.each = ii,
      De.eachRight = si,
      De.extend = zi,
      De.iteratee = Lr,
      De.methods = Cr,
      De.object = Kn,
      De.select = nr,
      De.tail = Jn,
      De.unique = Gn,
      Hr(De, De),
      De.add = function(e, t) {
          return (+e || 0) + (+t || 0)
      }
      ,
      De.attempt = Vi,
      De.camelCase = $i,
      De.capitalize = function(e) {
          return (e = o(e)) && e.charAt(0).toUpperCase() + e.slice(1)
      }
      ,
      De.ceil = Qi,
      De.clone = function(e, t, n, r) {
          return t && "boolean" != typeof t && Nn(e, t, n) ? t = !1 : "function" == typeof t && (r = n,
          n = t,
          t = !1),
          "function" == typeof n ? ot(e, t, Ft(n, r, 3)) : ot(e, t)
      }
      ,
      De.cloneDeep = function(e, t, n) {
          return "function" == typeof t ? ot(e, !0, Ft(t, n, 3)) : ot(e, !0)
      }
      ,
      De.deburr = zr,
      De.endsWith = function(e, t, n) {
          e = o(e),
          t += "";
          var r = e.length;
          return n = n === w ? r : ko(0 > n ? 0 : +n || 0, r),
          n -= t.length,
          0 <= n && e.indexOf(t, n) == n
      }
      ,
      De.escape = function(e) {
          return (e = o(e)) && he.test(e) ? e.replace(ue, c) : e
      }
      ,
      De.escapeRegExp = function(e) {
          return (e = o(e)) && we.test(e) ? e.replace(be, u) : e || "(?:)"
      }
      ,
      De.every = tr,
      De.find = ri,
      De.findIndex = $o,
      De.findKey = Oi,
      De.findLast = oi,
      De.findLastIndex = Xo,
      De.findLastKey = Li,
      De.findWhere = function(e, t) {
          return ri(e, wt(t))
      }
      ,
      De.first = Xn,
      De.floor = es,
      De.get = function(e, t, n) {
          return e = null == e ? w : mt(e, qn(t), t + ""),
          e === w ? n : e
      }
      ,
      De.gt = fr,
      De.gte = function(e, t) {
          return e >= t
      }
      ,
      De.has = function(e, t) {
          if (null == e)
              return !1;
          var n = eo.call(e, t);
          if (!n && !jn(t)) {
              if (t = qn(t),
              e = 1 == t.length ? e : mt(e, Et(t, 0, -1)),
              null == e)
                  return !1;
              t = Un(t),
              n = eo.call(e, t)
          }
          return n || Ln(e.length) && zn(t, e.length) && (Ei(e) || hr(e))
      }
      ,
      De.identity = Dr,
      De.includes = rr,
      De.indexOf = Yn,
      De.inRange = function(e, t, n) {
          return t = +t || 0,
          n === w ? (n = t,
          t = 0) : n = +n || 0,
          e >= ko(t, n) && e < _o(t, n)
      }
      ,
      De.isArguments = hr,
      De.isArray = Ei,
      De.isBoolean = function(e) {
          return !0 === e || !1 === e || p(e) && no.call(e) == B
      }
      ,
      De.isDate = function(e) {
          return p(e) && no.call(e) == W
      }
      ,
      De.isElement = function(e) {
          return !!e && 1 === e.nodeType && p(e) && !br(e)
      }
      ,
      De.isEmpty = function(e) {
          return null == e || (An(e) && (Ei(e) || xr(e) || hr(e) || p(e) && gr(e.splice)) ? !e.length : !Fi(e).length)
      }
      ,
      De.isEqual = pr,
      De.isError = dr,
      De.isFinite = function(e) {
          return "number" == typeof e && wo(e)
      }
      ,
      De.isFunction = gr,
      De.isMatch = function(e, t, n, r) {
          return n = "function" == typeof n ? Ft(n, r, 3) : w,
          yt(e, kn(t), n)
      }
      ,
      De.isNaN = function(e) {
          return yr(e) && e != +e
      }
      ,
      De.isNative = vr,
      De.isNull = function(e) {
          return null === e
      }
      ,
      De.isNumber = yr,
      De.isObject = mr,
      De.isPlainObject = br,
      De.isRegExp = wr,
      De.isString = xr,
      De.isTypedArray = _r,
      De.isUndefined = function(e) {
          return e === w
      }
      ,
      De.kebabCase = Xi,
      De.last = Un,
      De.lastIndexOf = function(e, t, n) {
          var r = e ? e.length : 0;
          if (!r)
              return -1;
          var o = r;
          if ("number" == typeof n)
              o = (0 > n ? _o(r + n, 0) : ko(n || 0, r - 1)) + 1;
          else if (n)
              return o = Ht(e, t, !0) - 1,
              e = e[o],
              (t === t ? t === e : e !== e) ? o : -1;
          if (t !== t)
              return h(e, o, !0);
          for (; o--; )
              if (e[o] === t)
                  return o;
          return -1
      }
      ,
      De.lt = kr,
      De.lte = function(e, t) {
          return e <= t
      }
      ,
      De.max = ts,
      De.min = ns,
      De.noConflict = function() {
          return Ye._ = ro,
          this
      }
      ,
      De.noop = Rr,
      De.now = di,
      De.pad = function(e, t, n) {
          e = o(e),
          t = +t;
          var r = e.length;
          return r < t && wo(t) ? (r = (t - r) / 2,
          t = yo(r),
          r = mo(r),
          n = hn("", r, n),
          n.slice(0, t) + e + n) : e
      }
      ,
      De.padLeft = Yi,
      De.padRight = Ui,
      De.parseInt = function(e, t, n) {
          return (n ? Nn(e, t, n) : null == t) ? t = 0 : t && (t = +t),
          e = jr(e),
          To(e, t || (Te.test(e) ? 16 : 10))
      }
      ,
      De.random = function(e, t, n) {
          n && Nn(e, t, n) && (t = n = w);
          var r = null == e
            , o = null == t;
          return null == n && (o && "boolean" == typeof e ? (n = e,
          e = 1) : "boolean" == typeof t && (n = t,
          o = !0)),
          r && o && (t = 1,
          o = !1),
          e = +e || 0,
          o ? (t = e,
          e = 0) : t = +t || 0,
          n || e % 1 || t % 1 ? (n = Co(),
          ko(e + n * (t - e + ao("1e-" + ((n + "").length - 1))), t)) : Ct(e, t)
      }
      ,
      De.reduce = fi,
      De.reduceRight = hi,
      De.repeat = Nr,
      De.result = function(e, t, n) {
          var r = null == e ? w : e[t];
          return r === w && (null == e || jn(t, e) || (t = qn(t),
          e = 1 == t.length ? e : mt(e, Et(t, 0, -1)),
          r = null == e ? w : e[Un(t)]),
          r = r === w ? n : r),
          gr(r) ? r.call(e) : r
      }
      ,
      De.round = rs,
      De.runInContext = b,
      De.size = function(e) {
          var t = e ? qo(e) : 0;
          return Ln(t) ? t : Fi(e).length
      }
      ,
      De.snakeCase = Ji,
      De.some = sr,
      De.sortedIndex = Jo,
      De.sortedLastIndex = Go,
      De.startCase = Gi,
      De.startsWith = function(e, t, n) {
          return e = o(e),
          n = null == n ? 0 : ko(0 > n ? 0 : +n || 0, e.length),
          e.lastIndexOf(t, n) == n
      }
      ,
      De.sum = function(e, t, n) {
          if (n && Nn(e, t, n) && (t = w),
          t = wn(t, n, 3),
          1 == t.length) {
              e = Ei(e) ? e : Fn(e),
              n = e.length;
              for (var r = 0; n--; )
                  r += +t(e[n]) || 0;
              e = r
          } else
              e = jt(e, t);
          return e
      }
      ,
      De.template = function(e, t, n) {
          var r = De.templateSettings;
          n && Nn(e, t, n) && (t = n = w),
          e = o(e),
          t = Qe(et({}, n || t), r, Ke),
          n = Qe(et({}, t.imports), r.imports, Ke);
          var i, s, a = Fi(n), l = Lt(n, a), c = 0;
          n = t.interpolate || Ae;
          var u = "__p+='";
          n = Ur((t.escape || Ae).source + "|" + n.source + "|" + (n === ge ? ke : Ae).source + "|" + (t.evaluate || Ae).source + "|$", "g");
          var h = "sourceURL"in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
          if (e.replace(n, function(t, n, r, o, a, l) {
              return r || (r = o),
              u += e.slice(c, l).replace(ze, f),
              n && (i = !0,
              u += "'+__e(" + n + ")+'"),
              a && (s = !0,
              u += "';" + a + ";\n__p+='"),
              r && (u += "'+((__t=(" + r + "))==null?'':__t)+'"),
              c = l + t.length,
              t
          }),
          u += "';",
          (t = t.variable) || (u = "with(obj){" + u + "}"),
          u = (s ? u.replace(se, "") : u).replace(ae, "$1").replace(le, "$1;"),
          u = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (i ? ",__e=_.escape" : "") + (s ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + u + "return __p}",
          t = Vi(function() {
              return Wr(a, h + "return " + u).apply(w, l)
          }),
          t.source = u,
          dr(t))
              throw t;
          return t
      }
      ,
      De.trim = jr,
      De.trimLeft = function(e, t, n) {
          var r = e;
          return (e = o(e)) ? e.slice((n ? Nn(r, t, n) : null == t) ? m(e) : i(e, t + "")) : e
      }
      ,
      De.trimRight = function(e, t, n) {
          var r = e;
          return (e = o(e)) ? (n ? Nn(r, t, n) : null == t) ? e.slice(0, v(e) + 1) : e.slice(0, s(e, t + "") + 1) : e
      }
      ,
      De.trunc = function(e, t, n) {
          n && Nn(e, t, n) && (t = w);
          var r = N;
          if (n = j,
          null != t)
              if (mr(t)) {
                  var i = "separator"in t ? t.separator : i
                    , r = "length"in t ? +t.length || 0 : r;
                  n = "omission"in t ? o(t.omission) : n
              } else
                  r = +t || 0;
          if (e = o(e),
          r >= e.length)
              return e;
          if (r -= n.length,
          1 > r)
              return n;
          if (t = e.slice(0, r),
          null == i)
              return t + n;
          if (wr(i)) {
              if (e.slice(r).search(i)) {
                  var s, a = e.slice(0, r);
                  for (i.global || (i = Ur(i.source, (Se.exec(i) || "") + "g")),
                  i.lastIndex = 0; e = i.exec(a); )
                      s = e.index;
                  t = t.slice(0, null == s ? r : s)
              }
          } else
              e.indexOf(i, r) != r && (i = t.lastIndexOf(i),
              -1 < i && (t = t.slice(0, i)));
          return t + n
      }
      ,
      De.unescape = function(e) {
          return (e = o(e)) && fe.test(e) ? e.replace(ce, y) : e
      }
      ,
      De.uniqueId = function(e) {
          var t = ++to;
          return o(e) + t
      }
      ,
      De.words = Or,
      De.all = tr,
      De.any = sr,
      De.contains = rr,
      De.eq = pr,
      De.detect = ri,
      De.foldl = fi,
      De.foldr = hi,
      De.head = Xn,
      De.include = rr,
      De.inject = fi,
      Hr(De, function() {
          var e = {};
          return pt(De, function(t, n) {
              De.prototype[n] || (e[n] = t)
          }),
          e
      }(), !1),
      De.sample = ir,
      De.prototype.sample = function(e) {
          return this.__chain__ || null != e ? this.thru(function(t) {
              return ir(t, e)
          }) : ir(this.value())
      }
      ,
      De.VERSION = x,
      We("bind bindKey curry curryRight partial partialRight".split(" "), function(e) {
          De[e].placeholder = De
      }),
      We(["drop", "take"], function(e, t) {
          Re.prototype[e] = function(n) {
              var r = this.__filtered__;
              if (r && !t)
                  return new Re(this);
              n = null == n ? 1 : _o(yo(n) || 0, 0);
              var o = this.clone();
              return r ? o.__takeCount__ = ko(o.__takeCount__, n) : o.__views__.push({
                  size: n,
                  type: e + (0 > o.__dir__ ? "Right" : "")
              }),
              o
          }
          ,
          Re.prototype[e + "Right"] = function(t) {
              return this.reverse()[e](t).reverse()
          }
      }),
      We(["filter", "map", "takeWhile"], function(e, t) {
          var n = t + 1
            , r = n != H;
          Re.prototype[e] = function(e, t) {
              var o = this.clone();
              return o.__iteratees__.push({
                  iteratee: wn(e, t, 1),
                  type: n
              }),
              o.__filtered__ = o.__filtered__ || r,
              o
          }
      }),
      We(["first", "last"], function(e, t) {
          var n = "take" + (t ? "Right" : "");
          Re.prototype[e] = function() {
              return this[n](1).value()[0]
          }
      }),
      We(["initial", "rest"], function(e, t) {
          var n = "drop" + (t ? "" : "Right");
          Re.prototype[e] = function() {
              return this.__filtered__ ? new Re(this) : this[n](1)
          }
      }),
      We(["pluck", "where"], function(e, t) {
          var n = t ? "filter" : "map"
            , r = t ? wt : Fr;
          Re.prototype[e] = function(e) {
              return this[n](r(e))
          }
      }),
      Re.prototype.compact = function() {
          return this.filter(Dr)
      }
      ,
      Re.prototype.reject = function(e, t) {
          return e = wn(e, t, 1),
          this.filter(function(t) {
              return !e(t)
          })
      }
      ,
      Re.prototype.slice = function(e, t) {
          e = null == e ? 0 : +e || 0;
          var n = this;
          return n.__filtered__ && (0 < e || 0 > t) ? new Re(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)),
          t !== w && (t = +t || 0,
          n = 0 > t ? n.dropRight(-t) : n.take(t - e)),
          n)
      }
      ,
      Re.prototype.takeRightWhile = function(e, t) {
          return this.reverse().takeWhile(e, t).reverse()
      }
      ,
      Re.prototype.toArray = function() {
          return this.take(Eo)
      }
      ,
      pt(Re.prototype, function(e, t) {
          var n = /^(?:filter|map|reject)|While$/.test(t)
            , r = /^(?:first|last)$/.test(t)
            , o = De[r ? "take" + ("last" == t ? "Right" : "") : t];
          o && (De.prototype[t] = function() {
              function t(e) {
                  return r && s ? o(e, 1)[0] : o.apply(w, Ge([e], i))
              }
              var i = r ? [1] : arguments
                , s = this.__chain__
                , a = this.__wrapped__
                , l = !!this.__actions__.length
                , c = a instanceof Re
                , u = i[0]
                , f = c || Ei(a);
              return f && n && "function" == typeof u && 1 != u.length && (c = f = !1),
              u = {
                  func: er,
                  args: [t],
                  thisArg: w
              },
              l = c && !l,
              r && !s ? l ? (a = a.clone(),
              a.__actions__.push(u),
              e.call(a)) : o.call(w, this.value())[0] : !r && f ? (a = l ? a : new Re(this),
              a = e.apply(a, i),
              a.__actions__.push(u),
              new He(a,s)) : this.thru(t)
          }
          )
      }),
      We("join pop push replace shift sort splice split unshift".split(" "), function(e) {
          var t = (/^(?:replace|split)$/.test(e) ? Kr : Vr)[e]
            , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
            , r = /^(?:join|pop|replace|shift)$/.test(e);
          De.prototype[e] = function() {
              var e = arguments;
              return r && !this.__chain__ ? t.apply(this.value(), e) : this[n](function(n) {
                  return t.apply(n, e)
              })
          }
      }),
      pt(Re.prototype, function(e, t) {
          var n = De[t];
          if (n) {
              var r = n.name + "";
              (Oo[r] || (Oo[r] = [])).push({
                  name: t,
                  func: n
              })
          }
      }),
      Oo[fn(w, k).name] = [{
          name: "wrapper",
          func: w
      }],
      Re.prototype.clone = function() {
          var e = new Re(this.__wrapped__);
          return e.__actions__ = Be(this.__actions__),
          e.__dir__ = this.__dir__,
          e.__filtered__ = this.__filtered__,
          e.__iteratees__ = Be(this.__iteratees__),
          e.__takeCount__ = this.__takeCount__,
          e.__views__ = Be(this.__views__),
          e
      }
      ,
      Re.prototype.reverse = function() {
          if (this.__filtered__) {
              var e = new Re(this);
              e.__dir__ = -1,
              e.__filtered__ = !0
          } else
              e = this.clone(),
              e.__dir__ *= -1;
          return e
      }
      ,
      Re.prototype.value = function() {
          var e, t = this.__wrapped__.value(), n = this.__dir__, r = Ei(t), o = 0 > n, i = r ? t.length : 0;
          e = i;
          for (var s = this.__views__, a = 0, l = -1, c = s.length; ++l < c; ) {
              var u = s[l]
                , f = u.size;
              switch (u.type) {
              case "drop":
                  a += f;
                  break;
              case "dropRight":
                  e -= f;
                  break;
              case "take":
                  e = ko(e, a + f);
                  break;
              case "takeRight":
                  a = _o(a, e - f)
              }
          }
          if (e = {
              start: a,
              end: e
          },
          s = e.start,
          a = e.end,
          e = a - s,
          o = o ? a : s - 1,
          s = this.__iteratees__,
          a = s.length,
          l = 0,
          c = ko(e, this.__takeCount__),
          !r || i < D || i == e && c == e)
              return It(t, this.__actions__);
          r = [];
          e: for (; e-- && l < c; ) {
              for (o += n,
              i = -1,
              u = t[o]; ++i < a; ) {
                  var h = s[i]
                    , f = h.type
                    , h = h.iteratee(u);
                  if (f == H)
                      u = h;
                  else if (!h) {
                      if (f == I)
                          continue e;
                      break e
                  }
              }
              r[l++] = u
          }
          return r
      }
      ,
      De.prototype.chain = function() {
          return Qn(this)
      }
      ,
      De.prototype.commit = function() {
          return new He(this.value(),this.__chain__)
      }
      ,
      De.prototype.concat = ei,
      De.prototype.plant = function(e) {
          for (var t, n = this; n instanceof Ie; ) {
              var r = Bn(n);
              t ? o.__wrapped__ = r : t = r;
              var o = r
                , n = n.__wrapped__
          }
          return o.__wrapped__ = e,
          t
      }
      ,
      De.prototype.reverse = function() {
          function e(e) {
              return e.reverse()
          }
          var t = this.__wrapped__;
          return t instanceof Re ? (this.__actions__.length && (t = new Re(this)),
          t = t.reverse(),
          t.__actions__.push({
              func: er,
              args: [e],
              thisArg: w
          }),
          new He(t,this.__chain__)) : this.thru(e)
      }
      ,
      De.prototype.toString = function() {
          return this.value() + ""
      }
      ,
      De.prototype.run = De.prototype.toJSON = De.prototype.valueOf = De.prototype.value = function() {
          return It(this.__wrapped__, this.__actions__)
      }
      ,
      De.prototype.collect = De.prototype.map,
      De.prototype.head = De.prototype.first,
      De.prototype.select = De.prototype.filter,
      De.prototype.tail = De.prototype.rest,
      De
  }
  var w, x = "3.10.1", _ = 1, k = 2, S = 4, T = 8, C = 16, M = 32, E = 64, A = 128, z = 256, N = 30, j = "...", O = 150, L = 16, D = 200, I = 1, H = 2, R = "Expected a function", F = "__lodash_placeholder__", P = "[object Arguments]", q = "[object Array]", B = "[object Boolean]", W = "[object Date]", $ = "[object Error]", X = "[object Function]", Y = "[object Number]", U = "[object Object]", J = "[object RegExp]", G = "[object String]", V = "[object ArrayBuffer]", Z = "[object Float32Array]", K = "[object Float64Array]", Q = "[object Int8Array]", ee = "[object Int16Array]", te = "[object Int32Array]", ne = "[object Uint8Array]", re = "[object Uint8ClampedArray]", oe = "[object Uint16Array]", ie = "[object Uint32Array]", se = /\b__p\+='';/g, ae = /\b(__p\+=)''\+/g, le = /(__e\(.*?\)|\b__t\))\+'';/g, ce = /&(?:amp|lt|gt|quot|#39|#96);/g, ue = /[&<>"'`]/g, fe = RegExp(ce.source), he = RegExp(ue.source), pe = /<%-([\s\S]+?)%>/g, de = /<%([\s\S]+?)%>/g, ge = /<%=([\s\S]+?)%>/g, me = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, ve = /^\w*$/, ye = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, be = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, we = RegExp(be.source), xe = /[\u0300-\u036f\ufe20-\ufe23]/g, _e = /\\(\\)?/g, ke = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Se = /\w*$/, Te = /^0[xX]/, Ce = /^\[object .+?Constructor\]$/, Me = /^\d+$/, Ee = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Ae = /($^)/, ze = /['\n\r\u2028\u2029\\]/g, Ne = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"), je = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "), Oe = {};
  Oe[Z] = Oe[K] = Oe[Q] = Oe[ee] = Oe[te] = Oe[ne] = Oe[re] = Oe[oe] = Oe[ie] = !0,
  Oe[P] = Oe[q] = Oe[V] = Oe[B] = Oe[W] = Oe[$] = Oe[X] = Oe["[object Map]"] = Oe[Y] = Oe[U] = Oe[J] = Oe["[object Set]"] = Oe[G] = Oe["[object WeakMap]"] = !1;
  var Le = {};
  Le[P] = Le[q] = Le[V] = Le[B] = Le[W] = Le[Z] = Le[K] = Le[Q] = Le[ee] = Le[te] = Le[Y] = Le[U] = Le[J] = Le[G] = Le[ne] = Le[re] = Le[oe] = Le[ie] = !0,
  Le[$] = Le[X] = Le["[object Map]"] = Le["[object Set]"] = Le["[object WeakMap]"] = !1;
  var De = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss"
  }
    , Ie = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "`": "&#96;"
  }
    , He = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
      "&#96;": "`"
  }
    , Re = {
      "function": !0,
      object: !0
  }
    , Fe = {
      0: "x30",
      1: "x31",
      2: "x32",
      3: "x33",
      4: "x34",
      5: "x35",
      6: "x36",
      7: "x37",
      8: "x38",
      9: "x39",
      A: "x41",
      B: "x42",
      C: "x43",
      D: "x44",
      E: "x45",
      F: "x46",
      a: "x61",
      b: "x62",
      c: "x63",
      d: "x64",
      e: "x65",
      f: "x66",
      n: "x6e",
      r: "x72",
      t: "x74",
      u: "x75",
      v: "x76",
      x: "x78"
  }
    , Pe = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
  }
    , qe = Re[typeof exports] && exports && !exports.nodeType && exports
    , Be = Re[typeof module] && module && !module.nodeType && module
    , We = Re[typeof self] && self && self.Object && self
    , $e = Re[typeof window] && window && window.Object && window
    , Xe = Be && Be.exports === qe && qe
    , Ye = qe && Be && "object" == typeof global && global && global.Object && global || $e !== (this && this.window) && $e || We || this
    , Ue = b();
  "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ye._ = Ue,
  define(function() {
      return Ue
  })) : qe && Be ? Xe ? (Be.exports = Ue)._ = Ue : qe._ = Ue : Ye._ = Ue
}
.call(this),
function(e, t) {
  var n, r, o, i, s, a, l, c, u, f, h, p, d, g, m, v, y, b, w, x, _, k, S, T;
  n = function(e) {
      return new n.prototype.init(e)
  }
  ,
  "undefined" != typeof require && "undefined" != typeof exports && "undefined" != typeof module ? module.exports = n : e.Globalize = n,
  n.cultures = {},
  n.prototype = {
      constructor: n,
      init: function(e) {
          return this.cultures = n.cultures,
          this.cultureSelector = e,
          this
      }
  },
  n.prototype.init.prototype = n.prototype,
  n.cultures["default"] = {
      name: "en",
      englishName: "English",
      nativeName: "English",
      isRTL: !1,
      language: "en",
      numberFormat: {
          pattern: ["-n"],
          decimals: 2,
          ",": ",",
          ".": ".",
          groupSizes: [3],
          "+": "+",
          "-": "-",
          NaN: "NaN",
          negativeInfinity: "-Infinity",
          positiveInfinity: "Infinity",
          percent: {
              pattern: ["-n %", "n %"],
              decimals: 2,
              groupSizes: [3],
              ",": ",",
              ".": ".",
              symbol: "%"
          },
          currency: {
              pattern: ["($n)", "$n"],
              decimals: 2,
              groupSizes: [3],
              ",": ",",
              ".": ".",
              symbol: "$"
          }
      },
      calendars: {
          standard: {
              name: "Gregorian_USEnglish",
              "/": "/",
              ":": ":",
              firstDay: 0,
              days: {
                  names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
              },
              months: {
                  names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                  namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
              },
              AM: ["AM", "am", "AM"],
              PM: ["PM", "pm", "PM"],
              eras: [{
                  name: "A.D.",
                  start: null,
                  offset: 0
              }],
              twoDigitYearMax: 2029,
              patterns: {
                  d: "M/d/yyyy",
                  D: "dddd, MMMM dd, yyyy",
                  t: "h:mm tt",
                  T: "h:mm:ss tt",
                  f: "dddd, MMMM dd, yyyy h:mm tt",
                  F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                  M: "MMMM dd",
                  Y: "yyyy MMMM",
                  S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
              }
          }
      },
      messages: {}
  },
  n.cultures["default"].calendar = n.cultures["default"].calendars.standard,
  n.cultures.en = n.cultures["default"],
  n.cultureSelector = "en",
  r = /^0x[a-f0-9]+$/i,
  o = /^[+\-]?infinity$/i,
  i = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,
  s = /^\s+|\s+$/g,
  a = function(e, t) {
      if (e.indexOf)
          return e.indexOf(t);
      for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
              return n;
      return -1
  }
  ,
  l = function(e, t) {
      return e.substr(e.length - t.length) === t
  }
  ,
  c = function() {
      var e, n, r, o, i, s, a = arguments[0] || {}, l = 1, p = arguments.length, d = !1;
      for ("boolean" == typeof a && (d = a,
      a = arguments[1] || {},
      l = 2),
      "object" == typeof a || f(a) || (a = {}); l < p; l++)
          if (null != (e = arguments[l]))
              for (n in e)
                  r = a[n],
                  o = e[n],
                  a !== o && (d && o && (h(o) || (i = u(o))) ? (i ? (i = !1,
                  s = r && u(r) ? r : []) : s = r && h(r) ? r : {},
                  a[n] = c(d, s, o)) : o !== t && (a[n] = o));
      return a
  }
  ,
  u = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  }
  ,
  f = function(e) {
      return "[object Function]" === Object.prototype.toString.call(e)
  }
  ,
  h = function(e) {
      return "[object Object]" === Object.prototype.toString.call(e)
  }
  ,
  p = function(e, t) {
      return 0 === e.indexOf(t)
  }
  ,
  d = function(e) {
      return (e + "").replace(s, "")
  }
  ,
  g = function(e) {
      return isNaN(e) ? NaN : Math[e < 0 ? "ceil" : "floor"](e)
  }
  ,
  m = function(e, t, n) {
      var r;
      for (r = e.length; r < t; r += 1)
          e = n ? "0" + e : e + "0";
      return e
  }
  ,
  v = function(e, t) {
      for (var n = 0, r = !1, o = 0, i = e.length; o < i; o++) {
          var s = e.charAt(o);
          switch (s) {
          case "'":
              r ? t.push("'") : n++,
              r = !1;
              break;
          case "\\":
              r && t.push("\\"),
              r = !r;
              break;
          default:
              t.push(s),
              r = !1
          }
      }
      return n
  }
  ,
  y = function(e, t) {
      t = t || "F";
      var n, r = e.patterns, o = t.length;
      if (1 === o) {
          if (n = r[t],
          !n)
              throw "Invalid date format string '" + t + "'.";
          t = n
      } else
          2 === o && "%" === t.charAt(0) && (t = t.charAt(1));
      return t
  }
  ,
  b = function(e, t, n) {
      function r(e, t) {
          var n, r = e + "";
          return t > 1 && r.length < t ? (n = w[t - 2] + r,
          n.substr(n.length - t, t)) : n = r
      }
      function o() {
          return d || g ? d : (d = S.test(t),
          g = !0,
          d)
      }
      function i(e, t) {
          if (m)
              return m[t];
          switch (t) {
          case 0:
              return e.getFullYear();
          case 1:
              return e.getMonth();
          case 2:
              return e.getDate();
          default:
              throw "Invalid part value " + t
          }
      }
      var s, a = n.calendar, l = a.convert;
      if (!t || !t.length || "i" === t) {
          if (n && n.name.length)
              if (l)
                  s = b(e, a.patterns.F, n);
              else {
                  var c = new Date(e.getTime())
                    , u = _(e, a.eras);
                  c.setFullYear(k(e, a, u)),
                  s = c.toLocaleString()
              }
          else
              s = e.toString();
          return s
      }
      var f = a.eras
        , h = "s" === t;
      t = y(a, t),
      s = [];
      var p, d, g, m, w = ["0", "00", "000"], S = /([^d]|^)(d|dd)([^d]|$)/g, T = 0, C = x();
      for (!h && l && (m = l.fromGregorian(e)); ; ) {
          var M = C.lastIndex
            , E = C.exec(t)
            , A = t.slice(M, E ? E.index : t.length);
          if (T += v(A, s),
          !E)
              break;
          if (T % 2)
              s.push(E[0]);
          else {
              var z = E[0]
                , N = z.length;
              switch (z) {
              case "ddd":
              case "dddd":
                  var j = 3 === N ? a.days.namesAbbr : a.days.names;
                  s.push(j[e.getDay()]);
                  break;
              case "d":
              case "dd":
                  d = !0,
                  s.push(r(i(e, 2), N));
                  break;
              case "MMM":
              case "MMMM":
                  var O = i(e, 1);
                  s.push(a.monthsGenitive && o() ? a.monthsGenitive[3 === N ? "namesAbbr" : "names"][O] : a.months[3 === N ? "namesAbbr" : "names"][O]);
                  break;
              case "M":
              case "MM":
                  s.push(r(i(e, 1) + 1, N));
                  break;
              case "y":
              case "yy":
              case "yyyy":
                  O = m ? m[0] : k(e, a, _(e, f), h),
                  N < 4 && (O %= 100),
                  s.push(r(O, N));
                  break;
              case "h":
              case "hh":
                  p = e.getHours() % 12,
                  0 === p && (p = 12),
                  s.push(r(p, N));
                  break;
              case "H":
              case "HH":
                  s.push(r(e.getHours(), N));
                  break;
              case "m":
              case "mm":
                  s.push(r(e.getMinutes(), N));
                  break;
              case "s":
              case "ss":
                  s.push(r(e.getSeconds(), N));
                  break;
              case "t":
              case "tt":
                  O = e.getHours() < 12 ? a.AM ? a.AM[0] : " " : a.PM ? a.PM[0] : " ",
                  s.push(1 === N ? O.charAt(0) : O);
                  break;
              case "f":
              case "ff":
              case "fff":
                  s.push(r(e.getMilliseconds(), 3).substr(0, N));
                  break;
              case "z":
              case "zz":
                  p = e.getTimezoneOffset() / 60,
                  s.push((p <= 0 ? "+" : "-") + r(Math.floor(Math.abs(p)), N));
                  break;
              case "zzz":
                  p = e.getTimezoneOffset() / 60,
                  s.push((p <= 0 ? "+" : "-") + r(Math.floor(Math.abs(p)), 2) + ":" + r(Math.abs(e.getTimezoneOffset() % 60), 2));
                  break;
              case "g":
              case "gg":
                  a.eras && s.push(a.eras[_(e, f)].name);
                  break;
              case "/":
                  s.push(a["/"]);
                  break;
              default:
                  throw "Invalid date format pattern '" + z + "'."
              }
          }
      }
      return s.join("")
  }
  ,
  function() {
      var e;
      e = function(e, t, n) {
          var r = n.groupSizes
            , o = r[0]
            , i = 1
            , s = Math.pow(10, t)
            , a = Math.round(e * s) / s;
          isFinite(a) || (a = e),
          e = a;
          var l = e + ""
            , c = ""
            , u = l.split(/e/i)
            , f = u.length > 1 ? parseInt(u[1], 10) : 0;
          l = u[0],
          u = l.split("."),
          l = u[0],
          c = u.length > 1 ? u[1] : "";
          f > 0 ? (c = m(c, f, !1),
          l += c.slice(0, f),
          c = c.substr(f)) : f < 0 && (f = -f,
          l = m(l, f + 1, !0),
          c = l.slice(-f, l.length) + c,
          l = l.slice(0, -f)),
          c = t > 0 ? n["."] + (c.length > t ? c.slice(0, t) : m(c, t)) : "";
          for (var h = l.length - 1, p = n[","], d = ""; h >= 0; ) {
              if (0 === o || o > h)
                  return l.slice(0, h + 1) + (d.length ? p + d + c : c);
              d = l.slice(h - o + 1, h + 1) + (d.length ? p + d : ""),
              h -= o,
              i < r.length && (o = r[i],
              i++)
          }
          return l.slice(0, h + 1) + p + d + c
      }
      ,
      w = function(t, n, r) {
          if (!isFinite(t))
              return t === 1 / 0 ? r.numberFormat.positiveInfinity : t === -(1 / 0) ? r.numberFormat.negativeInfinity : r.numberFormat.NaN;
          if (!n || "i" === n)
              return r.name.length ? t.toLocaleString() : t.toString();
          n = n || "D";
          var o, i = r.numberFormat, s = Math.abs(t), a = -1;
          n.length > 1 && (a = parseInt(n.slice(1), 10));
          var l, c = n.charAt(0).toUpperCase();
          switch (c) {
          case "D":
              o = "n",
              s = g(s),
              a !== -1 && (s = m("" + s, a, !0)),
              t < 0 && (s = "-" + s);
              break;
          case "N":
              l = i;
          case "C":
              l = l || i.currency;
          case "P":
              l = l || i.percent,
              o = t < 0 ? l.pattern[0] : l.pattern[1] || "n",
              a === -1 && (a = l.decimals),
              s = e(s * ("P" === c ? 100 : 1), a, l);
              break;
          default:
              throw "Bad number format specifier: " + c
          }
          for (var u = /n|\$|-|%/g, f = ""; ; ) {
              var h = u.lastIndex
                , p = u.exec(o);
              if (f += o.slice(h, p ? p.index : o.length),
              !p)
                  break;
              switch (p[0]) {
              case "n":
                  f += s;
                  break;
              case "$":
                  f += i.currency.symbol;
                  break;
              case "-":
                  /[1-9]/.test(s) && (f += i["-"]);
                  break;
              case "%":
                  f += i.percent.symbol
              }
          }
          return f
      }
  }(),
  x = function() {
      return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
  }
  ,
  _ = function(e, t) {
      if (!t)
          return 0;
      for (var n, r = e.getTime(), o = 0, i = t.length; o < i; o++)
          if (n = t[o].start,
          null === n || r >= n)
              return o;
      return 0
  }
  ,
  k = function(e, t, n, r) {
      var o = e.getFullYear();
      return !r && t.eras && (o -= t.eras[n].offset),
      o
  }
  ,
  function() {
      var e, t, n, r, o, i, s;
      e = function(e, t) {
          if (t < 100) {
              var n = new Date
                , r = _(n)
                , o = k(n, e, r)
                , i = e.twoDigitYearMax;
              i = "string" == typeof i ? (new Date).getFullYear() % 100 + parseInt(i, 10) : i,
              t += o - o % 100,
              t > i && (t -= 100)
          }
          return t
      }
      ,
      t = function(e, t, n) {
          var r, o = e.days, l = e._upperDays;
          return l || (e._upperDays = l = [s(o.names), s(o.namesAbbr), s(o.namesShort)]),
          t = i(t),
          n ? (r = a(l[1], t),
          r === -1 && (r = a(l[2], t))) : r = a(l[0], t),
          r
      }
      ,
      n = function(e, t, n) {
          var r = e.months
            , o = e.monthsGenitive || e.months
            , l = e._upperMonths
            , c = e._upperMonthsGen;
          l || (e._upperMonths = l = [s(r.names), s(r.namesAbbr)],
          e._upperMonthsGen = c = [s(o.names), s(o.namesAbbr)]),
          t = i(t);
          var u = a(n ? l[1] : l[0], t);
          return u < 0 && (u = a(n ? c[1] : c[0], t)),
          u
      }
      ,
      r = function(e, t) {
          var n = e._parseRegExp;
          if (n) {
              var r = n[t];
              if (r)
                  return r
          } else
              e._parseRegExp = n = {};
          for (var o, i = y(e, t).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), s = ["^"], a = [], l = 0, c = 0, u = x(); null !== (o = u.exec(i)); ) {
              var f = i.slice(l, o.index);
              if (l = u.lastIndex,
              c += v(f, s),
              c % 2)
                  s.push(o[0]);
              else {
                  var h, p = o[0], d = p.length;
                  switch (p) {
                  case "dddd":
                  case "ddd":
                  case "MMMM":
                  case "MMM":
                  case "gg":
                  case "g":
                      h = "(\\D+)";
                      break;
                  case "tt":
                  case "t":
                      h = "(\\D*)";
                      break;
                  case "yyyy":
                  case "fff":
                  case "ff":
                  case "f":
                      h = "(\\d{" + d + "})";
                      break;
                  case "dd":
                  case "d":
                  case "MM":
                  case "M":
                  case "yy":
                  case "y":
                  case "HH":
                  case "H":
                  case "hh":
                  case "h":
                  case "mm":
                  case "m":
                  case "ss":
                  case "s":
                      h = "(\\d\\d?)";
                      break;
                  case "zzz":
                      h = "([+-]?\\d\\d?:\\d{2})";
                      break;
                  case "zz":
                  case "z":
                      h = "([+-]?\\d\\d?)";
                      break;
                  case "/":
                      h = "(\\/)";
                      break;
                  default:
                      throw "Invalid date format pattern '" + p + "'."
                  }
                  h && s.push(h),
                  a.push(o[0])
              }
          }
          v(i.slice(l), s),
          s.push("$");
          var g = s.join("").replace(/\s+/g, "\\s+")
            , m = {
              regExp: g,
              groups: a
          };
          return n[t] = m
      }
      ,
      o = function(e, t, n) {
          return e < t || e > n
      }
      ,
      i = function(e) {
          return e.split(" ").join(" ").toUpperCase()
      }
      ,
      s = function(e) {
          for (var t = [], n = 0, r = e.length; n < r; n++)
              t[n] = i(e[n]);
          return t
      }
      ,
      S = function(i, s, a) {
          i = d(i);
          var l = a.calendar
            , c = r(l, s)
            , u = new RegExp(c.regExp).exec(i);
          if (null === u)
              return null;
          for (var f, h = c.groups, g = null, m = null, v = null, y = null, b = null, w = 0, x = 0, _ = 0, k = 0, S = null, T = !1, C = 0, M = h.length; C < M; C++) {
              var E = u[C + 1];
              if (E) {
                  var A = h[C]
                    , z = A.length
                    , N = parseInt(E, 10);
                  switch (A) {
                  case "dd":
                  case "d":
                      if (y = N,
                      o(y, 1, 31))
                          return null;
                      break;
                  case "MMM":
                  case "MMMM":
                      if (v = n(l, E, 3 === z),
                      o(v, 0, 11))
                          return null;
                      break;
                  case "M":
                  case "MM":
                      if (v = N - 1,
                      o(v, 0, 11))
                          return null;
                      break;
                  case "y":
                  case "yy":
                  case "yyyy":
                      if (m = z < 4 ? e(l, N) : N,
                      o(m, 0, 9999))
                          return null;
                      break;
                  case "h":
                  case "hh":
                      if (w = N,
                      12 === w && (w = 0),
                      o(w, 0, 11))
                          return null;
                      break;
                  case "H":
                  case "HH":
                      if (w = N,
                      o(w, 0, 23))
                          return null;
                      break;
                  case "m":
                  case "mm":
                      if (x = N,
                      o(x, 0, 59))
                          return null;
                      break;
                  case "s":
                  case "ss":
                      if (_ = N,
                      o(_, 0, 59))
                          return null;
                      break;
                  case "tt":
                  case "t":
                      if (T = l.PM && (E === l.PM[0] || E === l.PM[1] || E === l.PM[2]),
                      !T && (!l.AM || E !== l.AM[0] && E !== l.AM[1] && E !== l.AM[2]))
                          return null;
                      break;
                  case "f":
                  case "ff":
                  case "fff":
                      if (k = N * Math.pow(10, 3 - z),
                      o(k, 0, 999))
                          return null;
                      break;
                  case "ddd":
                  case "dddd":
                      if (b = t(l, E, 3 === z),
                      o(b, 0, 6))
                          return null;
                      break;
                  case "zzz":
                      var j = E.split(/:/);
                      if (2 !== j.length)
                          return null;
                      if (f = parseInt(j[0], 10),
                      o(f, -12, 13))
                          return null;
                      var O = parseInt(j[1], 10);
                      if (o(O, 0, 59))
                          return null;
                      S = 60 * f + (p(E, "-") ? -O : O);
                      break;
                  case "z":
                  case "zz":
                      if (f = N,
                      o(f, -12, 13))
                          return null;
                      S = 60 * f;
                      break;
                  case "g":
                  case "gg":
                      var L = E;
                      if (!L || !l.eras)
                          return null;
                      L = d(L.toLowerCase());
                      for (var D = 0, I = l.eras.length; D < I; D++)
                          if (L === l.eras[D].name.toLowerCase()) {
                              g = D;
                              break
                          }
                      if (null === g)
                          return null
                  }
              }
          }
          var H, R = new Date, F = l.convert;
          if (H = F ? F.fromGregorian(R)[0] : R.getFullYear(),
          null === m ? m = H : l.eras && (m += l.eras[g || 0].offset),
          null === v && (v = 0),
          null === y && (y = 1),
          F) {
              if (R = F.toGregorian(m, v, y),
              null === R)
                  return null
          } else {
              if (R.setFullYear(m, v, y),
              R.getDate() !== y)
                  return null;
              if (null !== b && R.getDay() !== b)
                  return null
          }
          if (T && w < 12 && (w += 12),
          R.setHours(w, x, _, k),
          null !== S) {
              var P = R.getMinutes() - (S + R.getTimezoneOffset());
              R.setHours(R.getHours() + parseInt(P / 60, 10), P % 60)
          }
          return R
      }
  }(),
  T = function(e, t, n) {
      var r, o = t["-"], i = t["+"];
      switch (n) {
      case "n -":
          o = " " + o,
          i = " " + i;
      case "n-":
          l(e, o) ? r = ["-", e.substr(0, e.length - o.length)] : l(e, i) && (r = ["+", e.substr(0, e.length - i.length)]);
          break;
      case "- n":
          o += " ",
          i += " ";
      case "-n":
          p(e, o) ? r = ["-", e.substr(o.length)] : p(e, i) && (r = ["+", e.substr(i.length)]);
          break;
      case "(n)":
          p(e, "(") && l(e, ")") && (r = ["-", e.substr(1, e.length - 2)])
      }
      return r || ["", e]
  }
  ,
  n.prototype.findClosestCulture = function(e) {
      return n.findClosestCulture.call(this, e)
  }
  ,
  n.prototype.format = function(e, t, r) {
      return n.format.call(this, e, t, r)
  }
  ,
  n.prototype.localize = function(e, t) {
      return n.localize.call(this, e, t)
  }
  ,
  n.prototype.parseInt = function(e, t, r) {
      return n.parseInt.call(this, e, t, r)
  }
  ,
  n.prototype.parseFloat = function(e, t, r) {
      return n.parseFloat.call(this, e, t, r)
  }
  ,
  n.prototype.culture = function(e) {
      return n.culture.call(this, e)
  }
  ,
  n.addCultureInfo = function(e, t, n) {
      var r = {}
        , o = !1;
      "string" != typeof e ? (n = e,
      e = this.culture().name,
      r = this.cultures[e]) : "string" != typeof t ? (n = t,
      o = null == this.cultures[e],
      r = this.cultures[e] || this.cultures["default"]) : (o = !0,
      r = this.cultures[t]),
      this.cultures[e] = c(!0, {}, r, n),
      o && (this.cultures[e].calendar = this.cultures[e].calendars.standard)
  }
  ,
  n.findClosestCulture = function(e) {
      var t;
      if (!e)
          return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
      if ("string" == typeof e && (e = e.split(",")),
      u(e)) {
          var n, r, o = this.cultures, i = e, s = i.length, a = [];
          for (r = 0; r < s; r++) {
              e = d(i[r]);
              var l, c = e.split(";");
              n = d(c[0]),
              1 === c.length ? l = 1 : (e = d(c[1]),
              0 === e.indexOf("q=") ? (e = e.substr(2),
              l = parseFloat(e),
              l = isNaN(l) ? 0 : l) : l = 1),
              a.push({
                  lang: n,
                  pri: l
              })
          }
          for (a.sort(function(e, t) {
              return e.pri < t.pri ? 1 : e.pri > t.pri ? -1 : 0
          }),
          r = 0; r < s; r++)
              if (n = a[r].lang,
              t = o[n])
                  return t;
          for (r = 0; r < s; r++)
              for (n = a[r].lang; ; ) {
                  var f = n.lastIndexOf("-");
                  if (f === -1)
                      break;
                  if (n = n.substr(0, f),
                  t = o[n])
                      return t
              }
          for (r = 0; r < s; r++) {
              n = a[r].lang;
              for (var h in o) {
                  var p = o[h];
                  if (p.language == n)
                      return p
              }
          }
      } else if ("object" == typeof e)
          return e;
      return t || null
  }
  ,
  n.format = function(e, t, n) {
      var r = this.findClosestCulture(n);
      return e instanceof Date ? e = b(e, t, r) : "number" == typeof e && (e = w(e, t, r)),
      e
  }
  ,
  n.localize = function(e, t) {
      return this.findClosestCulture(t).messages[e] || this.cultures["default"].messages[e]
  }
  ,
  n.parseDate = function(e, t, n) {
      n = this.findClosestCulture(n);
      var r, o, i;
      if (t) {
          if ("string" == typeof t && (t = [t]),
          t.length)
              for (var s = 0, a = t.length; s < a; s++) {
                  var l = t[s];
                  if (l && (r = S(e, l, n)))
                      break
              }
      } else {
          i = n.calendar.patterns;
          for (o in i)
              if (r = S(e, i[o], n))
                  break
      }
      return r || null
  }
  ,
  n.parseInt = function(e, t, r) {
      return g(n.parseFloat(e, t, r))
  }
  ,
  n.parseFloat = function(e, t, n) {
      "number" != typeof t && (n = t,
      t = 10);
      var s = this.findClosestCulture(n)
        , a = NaN
        , l = s.numberFormat;
      if (e.indexOf(s.numberFormat.currency.symbol) > -1 && (e = e.replace(s.numberFormat.currency.symbol, ""),
      e = e.replace(s.numberFormat.currency["."], s.numberFormat["."])),
      e.indexOf(s.numberFormat.percent.symbol) > -1 && (e = e.replace(s.numberFormat.percent.symbol, "")),
      e = e.replace(/ /g, ""),
      o.test(e))
          a = parseFloat(e);
      else if (!t && r.test(e))
          a = parseInt(e, 16);
      else {
          var c = T(e, l, l.pattern[0])
            , u = c[0]
            , f = c[1];
          "" === u && "(n)" !== l.pattern[0] && (c = T(e, l, "(n)"),
          u = c[0],
          f = c[1]),
          "" === u && "-n" !== l.pattern[0] && (c = T(e, l, "-n"),
          u = c[0],
          f = c[1]),
          u = u || "+";
          var h, p, d = f.indexOf("e");
          d < 0 && (d = f.indexOf("E")),
          d < 0 ? (p = f,
          h = null) : (p = f.substr(0, d),
          h = f.substr(d + 1));
          var g, m, v = l["."], y = p.indexOf(v);
          y < 0 ? (g = p,
          m = null) : (g = p.substr(0, y),
          m = p.substr(y + v.length));
          var b = l[","];
          g = g.split(b).join("");
          var w = b.replace(/\u00A0/g, " ");
          b !== w && (g = g.split(w).join(""));
          var x = u + g;
          if (null !== m && (x += "." + m),
          null !== h) {
              var _ = T(h, l, "-n");
              x += "e" + (_[0] || "+") + _[1]
          }
          i.test(x) && (a = parseFloat(x))
      }
      return a
  }
  ,
  n.culture = function(e) {
      return "undefined" != typeof e && (this.cultureSelector = e),
      this.findClosestCulture(e) || this.cultures["default"]
  }
}(this),
function(e, t) {
  var n;
  n = "undefined" != typeof require && "undefined" != typeof exports && "undefined" != typeof module ? require("globalize") : e.Globalize,
  n.addCultureInfo("zh-CN", "default", {
      name: "zh-CN",
      englishName: "Chinese (Simplified, PRC)",
      nativeName: "中文(中华人民共和国)",
      language: "zh-CHS",
      numberFormat: {
          NaN: "非数字",
          negativeInfinity: "负无穷大",
          positiveInfinity: "正无穷大",
          percent: {
              pattern: ["-n%", "n%"]
          },
          currency: {
              pattern: ["$-n", "$n"],
              symbol: "¥"
          }
      },
      calendars: {
          standard: {
              days: {
                  names: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  namesAbbr: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  namesShort: ["日", "一", "二", "三", "四", "五", "六"]
              },
              months: {
                  names: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""],
                  namesAbbr: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""]
              },
              AM: ["上午", "上午", "上午"],
              PM: ["下午", "下午", "下午"],
              eras: [{
                  name: "公元",
                  start: null,
                  offset: 0
              }],
              patterns: {
                  d: "yyyy/M/d",
                  D: "yyyy'年'M'月'd'日'",
                  t: "H:mm",
                  T: "H:mm:ss",
                  f: "yyyy'年'M'月'd'日' H:mm",
                  F: "yyyy'年'M'月'd'日' H:mm:ss",
                  M: "M'月'd'日'",
                  Y: "yyyy'年'M'月'"
              }
          }
      },
      pagerGoToPageString: "跳转至",
      pagerallstring: "总页数",
      pagerShowRowsString: "每页显示",
      pagerRangeString: " 总记录数 ",
      pagerPreviousButtonString: "上一页",
      pagerNextButtonString: "下一页",
      pageUnitString: "页",
      pagerFirstButtonsString: "首页",
      pagerLastButtonString: "末页",
      emptyDataString: "没有数据",
      pagerrangestring: " 共计 ",
      loadText: "加载中..."
  })
}(this);
