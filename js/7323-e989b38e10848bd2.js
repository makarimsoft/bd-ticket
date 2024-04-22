(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7323],
  {
    11382: function (e, n, t) {
      "use strict";
      var a = t(87462),
        s = t(4942),
        i = t(97685),
        r = t(93967),
        l = t.n(r),
        o = t(23279),
        c = t.n(o),
        d = t(98423),
        u = t(67294),
        m = t(53124),
        p = t(96159),
        v = t(93355),
        h = function (e, n) {
          var t = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              n.indexOf(a) < 0 &&
              (t[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (a = Object.getOwnPropertySymbols(e); s < a.length; s++)
              n.indexOf(a[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[s]) &&
                (t[a[s]] = e[a[s]]);
          }
          return t;
        },
        f = ((0, v.b)("small", "default", "large"), null);
      var x = function (e) {
          var n = e.spinPrefixCls,
            t = e.spinning,
            r = void 0 === t || t,
            o = e.delay,
            v = e.className,
            x = e.size,
            g = void 0 === x ? "default" : x,
            j = e.tip,
            b = e.wrapperClassName,
            N = e.style,
            y = e.children,
            Z = h(e, [
              "spinPrefixCls",
              "spinning",
              "delay",
              "className",
              "size",
              "tip",
              "wrapperClassName",
              "style",
              "children",
            ]),
            w = u.useState(function () {
              return (
                r &&
                !(function (e, n) {
                  return !!e && !!n && !isNaN(Number(n));
                })(r, o)
              );
            }),
            C = (0, i.Z)(w, 2),
            S = C[0],
            k = C[1];
          u.useEffect(
            function () {
              var e = c()(function () {
                k(r);
              }, o);
              return (
                e(),
                function () {
                  var n;
                  null ===
                    (n = null === e || void 0 === e ? void 0 : e.cancel) ||
                    void 0 === n ||
                    n.call(e);
                }
              );
            },
            [o, r]
          );
          var A = function (t) {
            var i = t.direction,
              r = l()(
                n,
                (0, s.Z)(
                  (0, s.Z)(
                    (0, s.Z)(
                      (0, s.Z)(
                        (0, s.Z)({}, "".concat(n, "-sm"), "small" === g),
                        "".concat(n, "-lg"),
                        "large" === g
                      ),
                      "".concat(n, "-spinning"),
                      S
                    ),
                    "".concat(n, "-show-text"),
                    !!j
                  ),
                  "".concat(n, "-rtl"),
                  "rtl" === i
                ),
                v
              ),
              o = (0, d.Z)(Z, ["indicator", "prefixCls"]),
              c = u.createElement(
                "div",
                (0, a.Z)({}, o, {
                  style: N,
                  className: r,
                  "aria-live": "polite",
                  "aria-busy": S,
                }),
                (function (e, n) {
                  var t = n.indicator,
                    a = "".concat(e, "-dot");
                  return null === t
                    ? null
                    : (0, p.l$)(t)
                    ? (0, p.Tm)(t, { className: l()(t.props.className, a) })
                    : (0, p.l$)(f)
                    ? (0, p.Tm)(f, { className: l()(f.props.className, a) })
                    : u.createElement(
                        "span",
                        { className: l()(a, "".concat(e, "-dot-spin")) },
                        u.createElement("i", {
                          className: "".concat(e, "-dot-item"),
                        }),
                        u.createElement("i", {
                          className: "".concat(e, "-dot-item"),
                        }),
                        u.createElement("i", {
                          className: "".concat(e, "-dot-item"),
                        }),
                        u.createElement("i", {
                          className: "".concat(e, "-dot-item"),
                        })
                      );
                })(n, e),
                j
                  ? u.createElement(
                      "div",
                      { className: "".concat(n, "-text") },
                      j
                    )
                  : null
              );
            if ("undefined" !== typeof y) {
              var m = l()(
                "".concat(n, "-container"),
                (0, s.Z)({}, "".concat(n, "-blur"), S)
              );
              return u.createElement(
                "div",
                (0, a.Z)({}, o, {
                  className: l()("".concat(n, "-nested-loading"), b),
                }),
                S && u.createElement("div", { key: "loading" }, c),
                u.createElement("div", { className: m, key: "container" }, y)
              );
            }
            return c;
          };
          return u.createElement(m.C, null, A);
        },
        g = function (e) {
          var n = e.prefixCls,
            t = (0, u.useContext(m.E_).getPrefixCls)("spin", n),
            s = (0, a.Z)((0, a.Z)({}, e), { spinPrefixCls: t });
          return u.createElement(x, (0, a.Z)({}, s));
        };
      (g.setDefaultIndicator = function (e) {
        f = e;
      }),
        (n.Z = g);
    },
    27561: function (e, n, t) {
      var a = t(67990),
        s = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, a(e) + 1).replace(s, "") : e;
      };
    },
    67990: function (e) {
      var n = /\s/;
      e.exports = function (e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)); );
        return t;
      };
    },
    23279: function (e, n, t) {
      var a = t(13218),
        s = t(7771),
        i = t(14841),
        r = Math.max,
        l = Math.min;
      e.exports = function (e, n, t) {
        var o,
          c,
          d,
          u,
          m,
          p,
          v = 0,
          h = !1,
          f = !1,
          x = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function g(n) {
          var t = o,
            a = c;
          return (o = c = void 0), (v = n), (u = e.apply(a, t));
        }
        function j(e) {
          return (v = e), (m = setTimeout(N, n)), h ? g(e) : u;
        }
        function b(e) {
          var t = e - p;
          return void 0 === p || t >= n || t < 0 || (f && e - v >= d);
        }
        function N() {
          var e = s();
          if (b(e)) return y(e);
          m = setTimeout(
            N,
            (function (e) {
              var t = n - (e - p);
              return f ? l(t, d - (e - v)) : t;
            })(e)
          );
        }
        function y(e) {
          return (m = void 0), x && o ? g(e) : ((o = c = void 0), u);
        }
        function Z() {
          var e = s(),
            t = b(e);
          if (((o = arguments), (c = this), (p = e), t)) {
            if (void 0 === m) return j(p);
            if (f) return clearTimeout(m), (m = setTimeout(N, n)), g(p);
          }
          return void 0 === m && (m = setTimeout(N, n)), u;
        }
        return (
          (n = i(n) || 0),
          a(t) &&
            ((h = !!t.leading),
            (d = (f = "maxWait" in t) ? r(i(t.maxWait) || 0, n) : d),
            (x = "trailing" in t ? !!t.trailing : x)),
          (Z.cancel = function () {
            void 0 !== m && clearTimeout(m), (v = 0), (o = p = c = m = void 0);
          }),
          (Z.flush = function () {
            return void 0 === m ? u : y(s());
          }),
          Z
        );
      };
    },
    13218: function (e) {
      e.exports = function (e) {
        var n = typeof e;
        return null != e && ("object" == n || "function" == n);
      };
    },
    7771: function (e, n, t) {
      var a = t(55639);
      e.exports = function () {
        return a.Date.now();
      };
    },
    14841: function (e, n, t) {
      var a = t(27561),
        s = t(13218),
        i = t(33448),
        r = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (s(e)) {
          var n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = s(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var t = l.test(e);
        return t || o.test(e) ? c(e.slice(2), t ? 2 : 8) : r.test(e) ? NaN : +e;
      };
    },
    83540: function (e, n, t) {
      "use strict";
      var a = t(85893);
      t(67294);
      n.Z = function () {
        return (0, a.jsx)("section", {
          className: "section-md bg-white",
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsxs)("div", {
              className: "row gy-4",
              children: [
                (0, a.jsx)("div", {
                  className: "col-12 text-center",
                  children: (0, a.jsx)("h2", {
                    className: "mb-0",
                    children: "We Accept",
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-12 pt-2",
                  children: (0, a.jsxs)("ul", {
                    className: "payment-list",
                    children: [
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/brac-bank.png",
                          alt: "brac-bank",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/american-express.png",
                          alt: "american-express",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/bkash.png",
                          alt: "bkash",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/city-bank.png",
                          alt: "city-bank",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/eastern-bank.png",
                          alt: "eastern-bank",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/master-card.png",
                          alt: "master-card",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/nagad_2.png",
                          alt: "nagad",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/nexus-pay.png",
                          alt: "nexus-pay",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/rocket.png",
                          alt: "rocket",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/sure-cash.png",
                          alt: "sure-cash",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/upai.png",
                          alt: "upai",
                        }),
                      }),
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)("img", {
                          src: "/images/payment-methods/visa.png",
                          alt: "visa",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    28954: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var a = t(26042),
        s = t(69396),
        i = t(828),
        r = t(85893),
        l = t(67294),
        o = t(29815),
        c = t(22321),
        d = t(82739),
        u = t(25743),
        m = t(11382),
        p = t(50888),
        v = (t(55062), t(30381)),
        h = t.n(v),
        f = u.Z.RangePicker,
        x = "#E30B13",
        g = (0, r.jsx)(p.Z, { style: { fontSize: 24 }, spin: !0 }),
        j = function (e) {
          var n = e.stationListAir,
            t = e.selectedFromOutside,
            u = e.selectedToOutside,
            p = e.selectedTripType,
            v = e.setSearchPayload,
            j = e.searchPayload,
            y = e.isLoading,
            Z = (0, l.useState)(!1),
            w = Z[0],
            C = Z[1],
            S = (0, l.useState)(!1),
            k = S[0],
            A = S[1],
            _ = (0, l.useState)(!1),
            T = _[0],
            E = _[1],
            D = (0, i.Z)(l.useState([]), 2),
            O = D[0],
            P = D[1],
            L = (0, i.Z)(l.useState([]), 2),
            I = L[0],
            M = L[1],
            B = (0, i.Z)(l.useState([]), 2),
            R = B[0],
            F = B[1],
            z = (0, i.Z)(l.useState([]), 2),
            U = z[0],
            W = z[1],
            Y = (0, i.Z)(l.useState([]), 2),
            G = Y[0],
            H = Y[1],
            K = (0, i.Z)(l.useState([]), 2),
            V = K[0],
            $ = K[1],
            q = (0, i.Z)(l.useState([]), 2),
            X = q[0],
            J = q[1],
            Q = (0, i.Z)(l.useState(null), 2),
            ee = Q[0],
            ne = Q[1],
            te = (0, i.Z)(l.useState(null), 2),
            ae = te[0],
            se = te[1],
            ie = (0, i.Z)(l.useState(1), 2),
            re = ie[0],
            le = ie[1],
            oe = (0, i.Z)(l.useState(0), 2),
            ce = oe[0],
            de = oe[1],
            ue = (0, i.Z)(l.useState(0), 2),
            me = ue[0],
            pe = ue[1],
            ve = (0, i.Z)(l.useState("ECONOMY"), 2),
            he = ve[0],
            fe = ve[1],
            xe = (0, i.Z)(l.useState([]), 2),
            ge = xe[0],
            je = xe[1],
            be = (0, i.Z)(l.useState([]), 2),
            Ne = be[0],
            ye = be[1],
            Ze = (0, i.Z)(l.useState(null), 2),
            we = Ze[0],
            Ce = Ze[1],
            Se = (0, i.Z)(l.useState(null), 2),
            ke = Se[0],
            Ae = Se[1],
            _e = (0, i.Z)(l.useState(""), 2),
            Te = _e[0],
            Ee = _e[1],
            De = (0, i.Z)(l.useState(""), 2),
            Oe = De[0],
            Pe = De[1],
            Le = (0, d.Z)(),
            Ie = (0, d.Z)(),
            Me = (0, d.Z)(),
            Be = (0, l.useRef)(null),
            Re = (0, l.useRef)(null);
          (0, l.useEffect)(
            function () {
              if (n) {
                M(n), P(n), F(n);
                var e = n.filter(function (e) {
                    return "DOMESTIC" === e.routeType;
                  }),
                  t = n.filter(function (e) {
                    return (
                      "DOMESTIC" === e.routeType ||
                      "DOMESTIC_INTERNATIONAL" === e.routeType
                    );
                  }),
                  a = n.filter(function (e) {
                    return "INTERNATIONAL" === e.routeType;
                  }),
                  s = n.filter(function (e) {
                    return (
                      "DOMESTIC_INTERNATIONAL" === e.routeType ||
                      "INTERNATIONAL" === e.routeType
                    );
                  });
                W(e), H(t), $(a), J(s);
              }
            },
            [n]
          ),
            (0, l.useEffect)(
              function () {
                t && ne(t), u && se(u);
              },
              [t, u]
            ),
            (0, l.useEffect)(
              function () {
                w && Be.current && Be.current.focus(),
                  k && Re.current && Re.current.focus();
              },
              [w, k]
            );
          var Fe = function (e) {
              "from" === e
                ? C(!0)
                : "to" === e
                ? A(!0)
                : "traveller" === e && E(!0);
            },
            ze = function () {
              if (Be.current && Re.current) {
                (Be.current.value = ""),
                  (Re.current.value = ""),
                  Ee(""),
                  Pe(""),
                  P(n);
                var e = U.some(function (e) {
                    return (
                      e.code ===
                      (null === ee || void 0 === ee ? void 0 : ee.code)
                    );
                  }),
                  t = V.some(function (e) {
                    return (
                      e.code ===
                      (null === ee || void 0 === ee ? void 0 : ee.code)
                    );
                  });
                e ? (M(G), F(G)) : t ? (M(X), F(X)) : (M(n), F(n));
              }
            };
          (0, c.t)(Le, function () {
            C(!1);
          }),
            (0, c.t)(Ie, function () {
              A(!1);
            }),
            (0, c.t)(Me, function () {
              E(!1);
            });
          var Ue = function (e, n) {
              if (!("add" === n && re + ce + me >= 9))
                if ("adult" === e) {
                  var t = re;
                  "add" === n ? (t += 1) : "sub" === n && t > 1 && (t -= 1),
                    le(t),
                    v(
                      (0, s.Z)((0, a.Z)({}, j), {
                        passenger: (0, s.Z)((0, a.Z)({}, j.passenger), {
                          adult: t,
                        }),
                      })
                    );
                } else if ("child" === e) {
                  var i = ce;
                  "add" === n && i < 4
                    ? (i += 1)
                    : "sub" === n && i > 0 && (i -= 1),
                    de(i),
                    v(
                      (0, s.Z)((0, a.Z)({}, j), {
                        passenger: (0, s.Z)((0, a.Z)({}, j.passenger), {
                          children: i,
                        }),
                      })
                    ),
                    We(ge, i, "child");
                } else if ("infant" === e) {
                  var r = me;
                  "add" === n && me < 2
                    ? (r += 1)
                    : "sub" === n && r > 0 && (r -= 1),
                    pe(r),
                    v(
                      (0, s.Z)((0, a.Z)({}, j), {
                        passenger: (0, s.Z)((0, a.Z)({}, j.passenger), {
                          infant: r,
                        }),
                      })
                    ),
                    We(Ne, r, "infant");
                }
            },
            We = function (e, n, t) {
              if (e.length < n) {
                var i = (0, o.Z)(e),
                  r = n - i.length;
                (i = (0, o.Z)(i).concat((0, o.Z)(Array(r).fill(null)))),
                  "child" === t ? je(i) : "infant" === t && ye(i);
              }
              if (e.length > n) {
                var l = (0, o.Z)(e),
                  c = l.length - n;
                (l = l.slice(0, l.length - c)),
                  "child" === t
                    ? (je(l), v((0, s.Z)((0, a.Z)({}, j), { childAges: l })))
                    : "infant" === t &&
                      (v((0, s.Z)((0, a.Z)({}, j), { infantAges: l })), ye(l));
              }
            },
            Ye = function (e) {
              return e && e < h()().startOf("day");
            },
            Ge = function (e, t) {
              var a = e.target.value;
              if ("from" === t) {
                Ee(a);
                var s = N(n, a);
                P(s);
              } else {
                Pe(a);
                var i = N(R, a);
                M(i);
              }
            },
            He = function (e) {
              if (!e) return Ce(null), void Ae(null);
              2 === e.length
                ? (Ce(e[0]),
                  Ae(e[1]),
                  v(
                    (0, s.Z)((0, a.Z)({}, j), {
                      journeyDate: e[0],
                      returnDate: e[1],
                    })
                  ))
                : (Ce(e), v((0, s.Z)((0, a.Z)({}, j), { journeyDate: e })));
            },
            Ke = b.find(function (e) {
              return e.value === he;
            }).name,
            Ve = Array.from({ length: ce }, function (e, n) {
              return (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)(
                  "li",
                  {
                    children: [
                      (0, r.jsxs)("label", {
                        htmlFor: "number-of-child",
                        style: { fontWeight: "bold" },
                        children: ["Child ", n + 1, " Age"],
                      }),
                      (0, r.jsxs)("select", {
                        onChange: function (e) {
                          return (function (e, n) {
                            var t = e.target.value,
                              i = (0, o.Z)(ge);
                            if ("Please select" === t)
                              return (
                                (i[n] = null),
                                je(i),
                                void v(
                                  (0, s.Z)((0, a.Z)({}, j), { childAges: i })
                                )
                              );
                            (i[n] = t),
                              je(i),
                              v((0, s.Z)((0, a.Z)({}, j), { childAges: i }));
                          })(e, n);
                        },
                        name: "number-of-child",
                        id: "number-of-child",
                        children: [
                          (0, r.jsx)("option", {
                            value: null,
                            children: "Please select",
                          }),
                          (0, r.jsx)("option", {
                            value: 2,
                            children: "2 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 3,
                            children: "3 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 4,
                            children: "4 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 5,
                            children: "5 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 6,
                            children: "6 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 7,
                            children: "7 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 8,
                            children: "8 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 9,
                            children: "9 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 10,
                            children: "10 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 11,
                            children: "11 years old",
                          }),
                          (0, r.jsx)("option", {
                            value: 12,
                            children: "12 years old",
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                ),
              });
            }),
            $e = Array.from({ length: me }, function (e, n) {
              return (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)(
                  "li",
                  {
                    children: [
                      (0, r.jsxs)("label", {
                        htmlFor: "number-of-child",
                        style: { fontWeight: "bold" },
                        children: ["Infant ", n + 1, " Age"],
                      }),
                      (0, r.jsxs)("select", {
                        onChange: function (e) {
                          return (function (e, n) {
                            var t = e.target.value,
                              i = (0, o.Z)(Ne);
                            if ("Please select" === t)
                              return (
                                (i[n] = null),
                                ye(i),
                                void v(
                                  (0, s.Z)((0, a.Z)({}, j), { infantAges: i })
                                )
                              );
                            (i[n] = t),
                              ye(i),
                              v((0, s.Z)((0, a.Z)({}, j), { infantAges: i }));
                          })(e, n);
                        },
                        name: "number-of-child",
                        id: "number-of-child",
                        children: [
                          (0, r.jsx)("option", {
                            value: null,
                            children: "Please select",
                          }),
                          (0, r.jsx)("option", {
                            value: 0,
                            children: "0 year old",
                          }),
                          (0, r.jsx)("option", {
                            value: 1,
                            children: "1 year old",
                          }),
                        ],
                      }),
                    ],
                  },
                  n
                ),
              });
            });
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: "bdt-search-form",
              children: [
                (0, r.jsxs)("div", {
                  className: "bdt-input-wrapper bdt-input-group has-btn-swipe",
                  style: { background: "white" },
                  children: [
                    (0, r.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        w && "dropdown-active"
                      ),
                      children: [
                        (0, r.jsx)("div", {
                          ref: Le,
                          children: y
                            ? (0, r.jsx)(m.Z, {
                                indicator: g,
                                children: (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-label",
                                      children: "Flying from",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-value",
                                      children: (
                                        null === ee || void 0 === ee
                                          ? void 0
                                          : ee.name
                                      )
                                        ? null === ee || void 0 === ee
                                          ? void 0
                                          : ee.name
                                        : "Please select",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-extra-value",
                                      children: (
                                        null === ee || void 0 === ee
                                          ? void 0
                                          : ee.code
                                      )
                                        ? ""
                                            .concat(
                                              null === ee || void 0 === ee
                                                ? void 0
                                                : ee.code,
                                              ", "
                                            )
                                            .concat(
                                              null === ee || void 0 === ee
                                                ? void 0
                                                : ee.airport
                                            )
                                        : "Departure airport / city",
                                    }),
                                  ],
                                }),
                              })
                            : (0, r.jsxs)("div", {
                                onClick: function () {
                                  return Fe("from");
                                },
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-label",
                                    children: "Flying from",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-value",
                                    children: (
                                      null === ee || void 0 === ee
                                        ? void 0
                                        : ee.name
                                    )
                                      ? null === ee || void 0 === ee
                                        ? void 0
                                        : ee.name
                                      : "Please select",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-extra-value",
                                    children: (
                                      null === ee || void 0 === ee
                                        ? void 0
                                        : ee.code
                                    )
                                      ? ""
                                          .concat(
                                            null === ee || void 0 === ee
                                              ? void 0
                                              : ee.code,
                                            ", "
                                          )
                                          .concat(
                                            null === ee || void 0 === ee
                                              ? void 0
                                              : ee.airport
                                          )
                                      : "Departure airport / city",
                                  }),
                                ],
                              }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: Le,
                          children: [
                            (0, r.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, r.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, r.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: function () {
                                      return C(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "text",
                                    value: Te,
                                    ref: Be,
                                    placeholder:
                                      "Search by city or airport code",
                                    onChange: function (e) {
                                      return Ge(e, "from");
                                    },
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: ze,
                                    className: "bdt-close-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, r.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === O || void 0 === O
                                    ? void 0
                                    : O.map(function (e) {
                                        return (0, r.jsxs)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var t,
                                                  i,
                                                  r,
                                                  l =
                                                    null ===
                                                      (t = e.split(" - ")) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t[0],
                                                  o =
                                                    null ===
                                                      (i = e.split(" - ")) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i[1],
                                                  c =
                                                    null ===
                                                      (r = e.split(" - ")) ||
                                                    void 0 === r
                                                      ? void 0
                                                      : r[2],
                                                  d = U.some(function (e) {
                                                    return e.code === o;
                                                  }),
                                                  u = V.some(function (e) {
                                                    return e.code === o;
                                                  });
                                                d
                                                  ? (M(G), F(G))
                                                  : u
                                                  ? (M(X), F(X))
                                                  : (M(n), F(n)),
                                                  C(!1),
                                                  ne({
                                                    name: l,
                                                    code: o,
                                                    airport: c,
                                                  }),
                                                  se(null),
                                                  v(
                                                    (0, s.Z)((0, a.Z)({}, j), {
                                                      fromCode: o,
                                                      fromName: l,
                                                      toCode: null,
                                                      toName: null,
                                                    })
                                                  );
                                              })(
                                                ""
                                                  .concat(e.name, " - ")
                                                  .concat(e.code, " - ")
                                                  .concat(e.airportName)
                                              );
                                            },
                                            style: {
                                              backgroundColor:
                                                (null === ee || void 0 === ee
                                                  ? void 0
                                                  : ee.code) === e.code &&
                                                "".concat(x, "40"),
                                            },
                                            children: [
                                              (0, r.jsxs)("div", {
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className: "bdt-value",
                                                    children: e.name,
                                                  }),
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "bdt-extra-value",
                                                    children: e.airportName,
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("span", {
                                                className: "bdt-short-form",
                                                children: e.code,
                                              }),
                                            ],
                                          },
                                          e.id
                                        );
                                      }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        k && "dropdown-active"
                      ),
                      children: [
                        (0, r.jsx)("div", {
                          ref: Ie,
                          children: y
                            ? (0, r.jsx)(m.Z, {
                                indicator: g,
                                children: (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-label",
                                      children: "Flying to",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-value",
                                      children: (
                                        null === ae || void 0 === ae
                                          ? void 0
                                          : ae.name
                                      )
                                        ? null === ae || void 0 === ae
                                          ? void 0
                                          : ae.name
                                        : "Please select",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "bdt-input-extra-value",
                                      children: (
                                        null === ae || void 0 === ae
                                          ? void 0
                                          : ae.code
                                      )
                                        ? ""
                                            .concat(
                                              null === ae || void 0 === ae
                                                ? void 0
                                                : ae.code,
                                              ", "
                                            )
                                            .concat(
                                              null === ae || void 0 === ae
                                                ? void 0
                                                : ae.airport
                                            )
                                        : "Destination airport / city",
                                    }),
                                  ],
                                }),
                              })
                            : (0, r.jsxs)("div", {
                                onClick: function () {
                                  return Fe("to");
                                },
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-label",
                                    children: "Flying to",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-value",
                                    children: (
                                      null === ae || void 0 === ae
                                        ? void 0
                                        : ae.name
                                    )
                                      ? null === ae || void 0 === ae
                                        ? void 0
                                        : ae.name
                                      : "Please select",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "bdt-input-extra-value",
                                    children: (
                                      null === ae || void 0 === ae
                                        ? void 0
                                        : ae.code
                                    )
                                      ? ""
                                          .concat(
                                            null === ae || void 0 === ae
                                              ? void 0
                                              : ae.code,
                                            ", "
                                          )
                                          .concat(
                                            null === ae || void 0 === ae
                                              ? void 0
                                              : ae.airport
                                          )
                                      : "Destination airport / city",
                                  }),
                                ],
                              }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: Ie,
                          children: [
                            (0, r.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, r.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, r.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: function () {
                                      return A(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "text",
                                    value: Oe,
                                    ref: Re,
                                    placeholder:
                                      "Search by city or airport code",
                                    onChange: function (e) {
                                      return Ge(e, "to");
                                    },
                                  }),
                                  (0, r.jsx)("button", {
                                    onClick: ze,
                                    className: "bdt-close-btn",
                                    children: (0, r.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, r.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, r.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === I || void 0 === I
                                    ? void 0
                                    : I.map(function (e) {
                                        return (0, r.jsxs)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var n,
                                                  t,
                                                  i,
                                                  r =
                                                    null ===
                                                      (n = e.split(" - ")) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n[0],
                                                  l =
                                                    null ===
                                                      (t = e.split(" - ")) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t[1],
                                                  o =
                                                    null ===
                                                      (i = e.split(" - ")) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i[2];
                                                A(!1),
                                                  se({
                                                    name: r,
                                                    code: l,
                                                    airport: o,
                                                  }),
                                                  v(
                                                    (0, s.Z)((0, a.Z)({}, j), {
                                                      toCode: l,
                                                      toName: r,
                                                    })
                                                  );
                                              })(
                                                ""
                                                  .concat(e.name, " - ")
                                                  .concat(e.code, " - ")
                                                  .concat(e.airportName)
                                              );
                                            },
                                            style: {
                                              backgroundColor:
                                                (null === ae || void 0 === ae
                                                  ? void 0
                                                  : ae.code) === e.code &&
                                                "".concat(x, "40"),
                                            },
                                            children: [
                                              (0, r.jsxs)("div", {
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className: "bdt-value",
                                                    children: e.name,
                                                  }),
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "bdt-extra-value",
                                                    children: e.airportName,
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("span", {
                                                className: "bdt-short-form",
                                                children: e.code,
                                              }),
                                            ],
                                          },
                                          e.id
                                        );
                                      }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      className: "btn-swipe",
                      onClick: function () {
                        if (ae) {
                          var e = U.some(function (e) {
                              return e.code === ae.code;
                            }),
                            t = V.some(function (e) {
                              return e.code === ae.code;
                            });
                          e ? (M(G), F(G)) : t ? (M(X), F(X)) : (M(n), F(n)),
                            ne({
                              name: ae.name,
                              code: ae.code,
                              airport: ae.airport,
                            }),
                            se({
                              name: ee.name,
                              code: ee.code,
                              airport: ee.airport,
                            }),
                            v(
                              (0, s.Z)((0, a.Z)({}, j), {
                                fromCode: ae.code,
                                fromName: ae.name,
                                toCode: ee.code,
                                toName: ee.name,
                              })
                            );
                        }
                      },
                      children: (0, r.jsx)("img", {
                        src: "/images/icon-svg/swap-red.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
                "ONEWAY" === p
                  ? (0, r.jsxs)("div", {
                      className:
                        "bdt-input-wrapper bdt-input-group bdt-date-picker has-extra-value has-disabled-input",
                      children: [
                        we &&
                          (0, r.jsx)("span", {
                            className: "extra-value",
                            children: h()(we).format("dddd"),
                          }),
                        (0, r.jsx)(f, {
                          placeholder: ["Select date", "Select date"],
                          onChange: He,
                          defaultValue: [we, null],
                          inputReadOnly: !0,
                          format: "DD MMM'YY",
                          disabledDate: Ye,
                          disabled: [!1, !0],
                          allowEmpty: [!0, !0],
                          allowClear: !0,
                        }),
                      ],
                    })
                  : (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsxs)("div", {
                        className:
                          "bdt-input-wrapper bdt-input-group bdt-date-picker has-extra-value",
                        children: [
                          we &&
                            (0, r.jsx)("span", {
                              className: "extra-value",
                              children: h()(we).format("dddd"),
                            }),
                          (0, r.jsx)(f, {
                            disabledDate: Ye,
                            placeholder: ["Select date", "Select date"],
                            onChange: He,
                            defaultValue: [we, ke],
                            inputReadOnly: !0,
                            format: "DD MMM'YY",
                          }),
                          (0, r.jsx)("span", {
                            className: "extra-value",
                            children: ke
                              ? h()(ke).format("dddd")
                              : "Save more on return",
                          }),
                        ],
                      }),
                    }),
                (0, r.jsx)("div", {
                  className: "bdt-input-wrapper",
                  style: { background: "white" },
                  children: (0, r.jsxs)("div", {
                    className: "bdt-input bdt-has-dropdown ".concat(
                      T && "dropdown-active"
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        onClick: function () {
                          return Fe("traveller");
                        },
                        ref: Me,
                        children: [
                          (0, r.jsx)("span", {
                            className: "bdt-input-label",
                            children: "TRAVELER, CLASS",
                          }),
                          (0, r.jsxs)("span", {
                            className: "bdt-input-value",
                            children: [re + ce + me, " Traveler(s)"],
                          }),
                          (0, r.jsx)("span", {
                            className: "bdt-input-extra-value",
                            children: Ke,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "bdt-dropdown cursor-auto h-auto",
                        children: [
                          (0, r.jsxs)("div", {
                            ref: Me,
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "bdt-dropdown-header header-small-devices",
                                children: (0, r.jsx)("div", {
                                  className: "small-devices-heading",
                                  children: "Edit Traveler",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "bdt-dropdown-body",
                                children: (0, r.jsxs)("ul", {
                                  className: "bdt-travel-class",
                                  children: [
                                    (0, r.jsxs)("li", {
                                      children: [
                                        (0, r.jsxs)("div", {
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "bdt-value",
                                              children: "Adults",
                                            }),
                                            " ",
                                            (0, r.jsx)("br", {}),
                                            (0, r.jsx)("small", {
                                              className: "bdt-extra-value",
                                              children: "12 years and above",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "bdt-traveler-controls",
                                          children: [
                                            (0, r.jsx)("button", {
                                              onClick: function () {
                                                return Ue("adult", "sub");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children:
                                                1 === re
                                                  ? (0, r.jsx)("img", {
                                                      style: {
                                                        cursor: "not-allowed",
                                                      },
                                                      src: "/images/icon-svg/minus-disable.svg",
                                                      alt: "icon",
                                                    })
                                                  : (0, r.jsx)("img", {
                                                      src: "/images/icon-svg/minus.svg",
                                                      alt: "icon",
                                                    }),
                                            }),
                                            (0, r.jsx)("span", {
                                              children: re,
                                            }),
                                            (0, r.jsx)("button", {
                                              onClick: function () {
                                                return Ue("adult", "add");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children:
                                                re + ce + me >= 9
                                                  ? (0, r.jsx)("img", {
                                                      style: {
                                                        cursor: "not-allowed",
                                                      },
                                                      src: "/images/icon-svg/plus-disable.svg",
                                                      alt: "icon",
                                                    })
                                                  : (0, r.jsx)("img", {
                                                      src: "/images/icon-svg/plus.svg",
                                                      alt: "icon",
                                                    }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("li", {
                                      className: "child",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "d-flex",
                                          children: [
                                            (0, r.jsxs)("div", {
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "bdt-value",
                                                  children: "Children",
                                                }),
                                                " ",
                                                (0, r.jsx)("br", {}),
                                                (0, r.jsx)("small", {
                                                  className: "bdt-extra-value",
                                                  children: "2-12 years",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "bdt-traveler-controls",
                                              children: [
                                                (0, r.jsx)("button", {
                                                  onClick: function () {
                                                    return Ue("child", "sub");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children:
                                                    0 === ce
                                                      ? (0, r.jsx)("img", {
                                                          style: {
                                                            cursor:
                                                              "not-allowed",
                                                          },
                                                          src: "/images/icon-svg/minus-disable.svg",
                                                          alt: "icon",
                                                        })
                                                      : (0, r.jsx)("img", {
                                                          src: "/images/icon-svg/minus.svg",
                                                          alt: "icon",
                                                        }),
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: ce,
                                                }),
                                                (0, r.jsx)("button", {
                                                  onClick: function () {
                                                    return Ue("child", "add");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children:
                                                    re + ce + me >= 9 || ce >= 4
                                                      ? (0, r.jsx)("img", {
                                                          style: {
                                                            cursor:
                                                              "not-allowed",
                                                          },
                                                          src: "/images/icon-svg/plus-disable.svg",
                                                          alt: "icon",
                                                        })
                                                      : (0, r.jsx)("img", {
                                                          src: "/images/icon-svg/plus.svg",
                                                          alt: "icon",
                                                        }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        ce > 0 &&
                                          (0, r.jsxs)("div", {
                                            className: "bdt-select-wrapper",
                                            children: [
                                              (0, r.jsx)("ul", {
                                                className: "select-list",
                                                children: Ve,
                                              }),
                                              (null === ge || void 0 === ge
                                                ? void 0
                                                : ge.includes(null)) &&
                                                (0, r.jsx)("small", {
                                                  className: "text-danger",
                                                  children:
                                                    "Please add child age",
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, r.jsxs)("li", {
                                      className: "child",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "d-flex",
                                          children: [
                                            (0, r.jsxs)("div", {
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "bdt-value",
                                                  children: "Infant",
                                                }),
                                                " ",
                                                (0, r.jsx)("br", {}),
                                                (0, r.jsx)("small", {
                                                  className: "bdt-extra-value",
                                                  children: "Below 2 years",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className:
                                                "bdt-traveler-controls",
                                              children: [
                                                (0, r.jsx)("button", {
                                                  onClick: function () {
                                                    return Ue("infant", "sub");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children:
                                                    0 === me
                                                      ? (0, r.jsx)("img", {
                                                          style: {
                                                            cursor:
                                                              "not-allowed",
                                                          },
                                                          src: "/images/icon-svg/minus-disable.svg",
                                                          alt: "icon",
                                                        })
                                                      : (0, r.jsx)("img", {
                                                          src: "/images/icon-svg/minus.svg",
                                                          alt: "icon",
                                                        }),
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: me,
                                                }),
                                                (0, r.jsx)("button", {
                                                  onClick: function () {
                                                    return Ue("infant", "add");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children:
                                                    re + ce + me >= 9 || me >= 2
                                                      ? (0, r.jsx)("img", {
                                                          style: {
                                                            cursor:
                                                              "not-allowed",
                                                          },
                                                          src: "/images/icon-svg/plus-disable.svg",
                                                          alt: "icon",
                                                        })
                                                      : (0, r.jsx)("img", {
                                                          src: "/images/icon-svg/plus.svg",
                                                          alt: "icon",
                                                        }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        me > 0 &&
                                          (0, r.jsxs)("div", {
                                            className: "bdt-select-wrapper",
                                            children: [
                                              (0, r.jsx)("ul", {
                                                className: "select-list",
                                                children: $e,
                                              }),
                                              (null === Ne || void 0 === Ne
                                                ? void 0
                                                : Ne.includes(null)) &&
                                                (0, r.jsx)("small", {
                                                  className: "text-danger",
                                                  children:
                                                    "Please add infant age",
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, r.jsxs)("li", {
                                      className: "cabin-class",
                                      children: [
                                        (0, r.jsx)("span", {
                                          className: "bdt-value",
                                          children: "Class",
                                        }),
                                        (0, r.jsx)("ul", {
                                          className: "gap-5 flex-wrap d-flex",
                                          children: b.map(function (e, n) {
                                            return (0, r.jsxs)(
                                              "li",
                                              {
                                                className: "d-inline-block",
                                                children: [
                                                  (0, r.jsx)("input", {
                                                    type: "radio",
                                                    name: "cabin-class",
                                                    className:
                                                      "bdt-input-radio radio-sm",
                                                    defaultChecked:
                                                      "ECONOMY" === e.value,
                                                    id: e.value,
                                                    onClick: function () {
                                                      return (
                                                        (n = e.value),
                                                        fe(n),
                                                        void v(
                                                          (0, s.Z)(
                                                            (0, a.Z)({}, j),
                                                            { cabinClass: n }
                                                          )
                                                        )
                                                      );
                                                      var n;
                                                    },
                                                  }),
                                                  (0, r.jsx)("label", {
                                                    htmlFor: e.value,
                                                    className: "bdt-label",
                                                    children: e.name,
                                                  }),
                                                ],
                                              },
                                              n
                                            );
                                          }),
                                        }),
                                        (0, r.jsx)("button", {
                                          onClick: function () {
                                            return E(!1);
                                          },
                                          className:
                                            "btn btn-primary mt-2 px-3 py-2 ms-auto d-md-block d-none",
                                          children: "Done",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "bdt-dropdown-footer footer-small-devices",
                            children: (0, r.jsx)("button", {
                              className:
                                "btn btn-primary mt-2 px-3 py-2 ms-auto d-md-block",
                              children: "Done",
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
        b = [
          { name: "Economy Class", value: "ECONOMY" },
          { name: "Business Class", value: "BUSINESS_CLASS" },
          { name: "Primium Economy", value: "PREMIUM_ECONOMY" },
        ],
        N = function (e, n) {
          return e.filter(function (e) {
            return ""
              .concat(e.code, " ")
              .concat(e.name)
              .toLowerCase()
              .includes(n.toLowerCase());
          });
        },
        y = t(57536),
        Z = [
          {
            fromName: "Dhaka",
            fromCode: "DAC",
            fromAirport: "Shahjalal International Airport,BANGLADESH",
            toName: "Bangkok",
            toCode: "BKK",
            toAirport: "Suvarnabhumi Airport,THAILAND",
          },
          {
            fromName: "Dhaka",
            fromCode: "DAC",
            fromAirport: "Shahjalal International Airport,BANGLADESH",
            toName: "Kolkata",
            toCode: "CCU",
            toAirport: "Netaji Subhas Chandra Bose International Airport,INDIA",
          },
          {
            fromName: "Dhaka",
            fromCode: "DAC",
            fromAirport: "Shahjalal International Airport,BANGLADESH",
            toName: "Coxs Bazar",
            toCode: "CXB",
            toAirport: "Cox's Bazar Airport,BANGLADESH",
          },
        ],
        w = function (e) {
          var n = e.handleSelectedStations,
            t = e.isNotLanding,
            a = (0, y.a)().isFullHDAndUp;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className: "bdt-trending-search",
              style: { marginLeft: t && a && "15px" },
              children: [
                (0, r.jsx)("span", {
                  className: "fw-semibold me-3",
                  children: "Trending Searches:",
                }),
                (0, r.jsx)("ul", {
                  className: "list-route",
                  children:
                    null === Z || void 0 === Z
                      ? void 0
                      : Z.map(function (e, t) {
                          return (0, r.jsx)(
                            "li",
                            {
                              onClick: function () {
                                return n(e);
                              },
                              children: (0, r.jsx)("a", {
                                style: { cursor: "pointer" },
                                children: (0, r.jsxs)("ul", {
                                  className: "list-route-card",
                                  children: [
                                    (0, r.jsx)("li", { children: e.fromName }),
                                    (0, r.jsx)("li", { children: e.toName }),
                                  ],
                                }),
                              }),
                            },
                            t
                          );
                        }),
                }),
              ],
            }),
          });
        },
        C = t(9307),
        S = t(38500),
        k = t(12461),
        A = t(11163),
        _ = t(33841),
        T = t(81335),
        E = t(49089),
        D = t(1785),
        O = t.n(D),
        P = t(48695),
        L = function (e) {
          var n = e.handleTripType,
            t = e.stationsAir,
            o = e.handleSelectedStations,
            c = e.selectedFromOutside,
            d = e.selectedTripType,
            u = e.selectedToOutside,
            m = e.isNotLanding,
            p = (0, l.useState)({
              passenger: { adult: 1, children: 0, infant: 0 },
              childAges: [null],
              infantAges: [null],
              cabinClass: "ECONOMY",
            }),
            v = p[0],
            h = p[1],
            f = (0, l.useState)(null),
            x = f[0],
            g = f[1],
            b = (0, i.Z)((0, _.Z)(T.d.FromAirportStorage, null), 2),
            N = (b[0], b[1]),
            Z = (0, i.Z)((0, _.Z)(T.d.ToAirportStorage, null), 2),
            D = (Z[0], Z[1]),
            L = (0, y.a)().isWidescreenAndUp,
            I = (0, A.useRouter)(),
            M = (0, P.zj)(),
            B = M.getStationsAirMutate,
            R = M.isLoading;
          (0, l.useEffect)(function () {
            m
              ? g(t)
              : x ||
                B(null, {
                  onSuccess: function (e) {
                    var n, t;
                    (null === e ||
                    void 0 === e ||
                    null === (n = e.data) ||
                    void 0 === n
                      ? void 0
                      : n.data) &&
                      g(
                        null === e ||
                          void 0 === e ||
                          null === (t = e.data) ||
                          void 0 === t
                          ? void 0
                          : t.data
                      );
                  },
                });
          }, []),
            (0, l.useEffect)(
              function () {
                h(
                  (0, s.Z)((0, a.Z)({}, v), {
                    fromCode: null === c || void 0 === c ? void 0 : c.code,
                    fromName: null === c || void 0 === c ? void 0 : c.name,
                    toCode: null === u || void 0 === u ? void 0 : u.code,
                    toName: null === u || void 0 === u ? void 0 : u.name,
                  })
                );
              },
              [c, u]
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("ul", {
                className: "bdt-search-options bdt-shadow-input",
                children: [
                  (0, r.jsxs)("li", {
                    children: [
                      (0, r.jsx)("input", {
                        type: "radio",
                        name: "trip-type",
                        className: "bdt-input-radio",
                        checked: "ONEWAY" === d,
                        id: "oneway",
                        onChange: function () {
                          return n("ONEWAY");
                        },
                      }),
                      (0, r.jsx)("label", {
                        htmlFor: "oneway",
                        className: "bdt-label",
                        children: "One Way",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("li", {
                    children: [
                      (0, r.jsx)("input", {
                        type: "radio",
                        name: "trip-type",
                        className: "bdt-input-radio",
                        checked: "ROUNDTRIP" === d,
                        id: "roundtrip",
                        onChange: function () {
                          return n("ROUNDTRIP");
                        },
                      }),
                      (0, r.jsx)("label", {
                        htmlFor: "roundtrip",
                        className: "bdt-label",
                        children: "Round Trip",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(j, {
                selectedTripType: d,
                stationListAir: x,
                selectedFromOutside: c,
                selectedToOutside: u,
                searchPayload: v,
                setSearchPayload: h,
                isLoading: R,
              }),
              L &&
                (0, r.jsx)(w, { handleSelectedStations: o, isNotLanding: m }),
              (0, r.jsx)("div", {
                className: "bdt-search-submit",
                children: (0, r.jsx)("button", {
                  onClick: function () {
                    var e,
                      n,
                      t,
                      a,
                      s,
                      i,
                      r = (0, C.kC)(v.journeyDate),
                      l = { journeyDate: r, classType: v.cabinClass };
                    v.returnDate && (l.returnDate = (0, C.kC)(v.returnDate)),
                      d === S.X9.OneWay
                        ? (l.tripType = S.X9.OneWay)
                        : (l.tripType = S.X9.RoundTrip),
                      null ===
                        (e = Object.keys(
                          null === v || void 0 === v ? void 0 : v.passenger
                        )) ||
                        void 0 === e ||
                        e.forEach(function (e) {
                          l[e] =
                            null === v || void 0 === v
                              ? void 0
                              : v.passenger[e];
                        });
                    var o = null === v || void 0 === v ? void 0 : v.fromCode,
                      c = null === v || void 0 === v ? void 0 : v.toCode,
                      u = null === v || void 0 === v ? void 0 : v.fromName,
                      m = null === v || void 0 === v ? void 0 : v.toName;
                    if (o)
                      if (c)
                        if (null === v || void 0 === v ? void 0 : v.journeyDate)
                          if (
                            (null === v || void 0 === v
                              ? void 0
                              : v.returnDate) ||
                            "ROUNDTRIP" !== d
                          )
                            if (o !== c)
                              if (
                                (null === v || void 0 === v
                                  ? void 0
                                  : v.passenger.children) > 0 &&
                                (null === v ||
                                void 0 === v ||
                                null === (n = v.childAges) ||
                                void 0 === n
                                  ? void 0
                                  : n.includes(null))
                              )
                                k.ZP.error("Please select all child ages!");
                              else if (
                                (null === v || void 0 === v
                                  ? void 0
                                  : v.passenger.infant) > 0 &&
                                (null === v ||
                                void 0 === v ||
                                null === (t = v.infantAges) ||
                                void 0 === t
                                  ? void 0
                                  : t.includes(null))
                              )
                                k.ZP.error("Please select all infant ages!");
                              else {
                                var p = "".concat(u, " - ").concat(o),
                                  h = "".concat(m, " - ").concat(c);
                                N(p), D(h);
                                var f = {
                                    content_type: "flight",
                                    departing_departure_date: r,
                                    returning_departure_date:
                                      null === l || void 0 === l
                                        ? void 0
                                        : l.returnDate,
                                    origin_airport: o,
                                    destination_airport: c,
                                    num_adults:
                                      null === (a = v.passenger) || void 0 === a
                                        ? void 0
                                        : a.adult,
                                    num_children:
                                      null === (s = v.passenger) || void 0 === s
                                        ? void 0
                                        : s.children,
                                    num_infants:
                                      null === (i = v.passenger) || void 0 === i
                                        ? void 0
                                        : i.infant,
                                    travel_class: v.cabinClass,
                                    currency: "BDT",
                                  },
                                  x = {
                                    category: "Air",
                                    action: "Search",
                                    label: JSON.stringify(f),
                                  };
                                E.ZP.event(x),
                                  O().dataLayer({
                                    dataLayer: {
                                      event: "searchButtonClick",
                                      data: f,
                                    },
                                  }),
                                  I.push({
                                    pathname: "/air/search/"
                                      .concat(o, "-to-")
                                      .concat(c),
                                    query: l,
                                  });
                              }
                            else
                              k.ZP.error(
                                "Departure and Destination airport can not be the same!"
                              );
                          else k.ZP.error("Please select return date!");
                        else k.ZP.error("Please select journey date!");
                      else k.ZP.error("Please select destination airport!");
                    else k.ZP.error("Please select departure airport!");
                  },
                  type: "submit",
                  className: "btn btn-primary capitalize px-5 fw-bold",
                  children: "search flight",
                }),
              }),
            ],
          });
        };
    },
    85434: function (e, n, t) {
      "use strict";
      var a = t(26042),
        s = t(69396),
        i = t(85893),
        r = (t(67294), t(46066)),
        l = (t(98745), t(98322), t(7135)),
        o = t.n(l),
        c = t(20949),
        d = t(57536);
      n.Z = function (e) {
        var n = e.popularDestinations,
          t = e.isLanding,
          l = e.handleSelectedDestination,
          u = e.type,
          m = (0, d.a)().isWidescreenAndUp;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("section", {
            className: "section-md ".concat(
              "Domestic" === u || t ? "" : "bg-white"
            ),
            children: (0, i.jsx)("div", {
              className: "container",
              children: (0, i.jsxs)("div", {
                className: "row gy-4",
                children: [
                  (0, i.jsx)("div", {
                    className: "col-12",
                    children: (0, i.jsx)("div", {
                      className: o()["section-title"] + " mb-0",
                      children: (0, i.jsxs)("h2", {
                        className: "mb-0",
                        children: ["Trending ", u, " Flight Destinations"],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "col-12 pt-2",
                    children: (0, i.jsx)("div", {
                      className: o()["slider-image"],
                      style: { cursor: "pointer", marginBottom: "0px" },
                      children: (0, i.jsx)(
                        r.Z,
                        (0, s.Z)(
                          (0, a.Z)(
                            { className: "text-center" },
                            (function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return (0, a.Z)(
                                {
                                  rows: 1,
                                  slidesToShow: 5,
                                  arrows: m && !0,
                                  nextArrow: (0, i.jsx)(c.F, {}),
                                  prevArrow: (0, i.jsx)(c.K, {}),
                                  responsive: [
                                    {
                                      breakpoint: 991,
                                      settings: { slidesToShow: 3 },
                                    },
                                    {
                                      breakpoint: 767,
                                      settings: {
                                        slidesToShow: 2,
                                        centerMode: !0,
                                        centerPadding: "20px",
                                      },
                                    },
                                    {
                                      breakpoint: 575,
                                      settings: {
                                        slidesToShow: 2,
                                        centerMode: !0,
                                        centerPadding: "75px",
                                      },
                                    },
                                    {
                                      breakpoint: 480,
                                      settings: {
                                        slidesToShow: 1,
                                        centerMode: !0,
                                        centerPadding: "75px",
                                      },
                                    },
                                  ],
                                },
                                e
                              );
                            })()
                          ),
                          {
                            lazyLoad: "ondemand",
                            children:
                              null === n || void 0 === n
                                ? void 0
                                : n.map(function (e, n) {
                                    return (0, i.jsx)(
                                      "div",
                                      {
                                        className: "px-2",
                                        onClick: function () {
                                          return l(e);
                                        },
                                        children: (0, i.jsxs)("div", {
                                          className: o().block,
                                          children: [
                                            (0, i.jsx)("img", {
                                              className: "img-fluid",
                                              src: e.featureImage,
                                              alt: "place",
                                            }),
                                            (0, i.jsx)("div", {
                                              className: o()["text-block"],
                                              style: {
                                                backgroundColor:
                                                  "rgba(128, 128, 128, 0.5)",
                                              },
                                              children: (0, i.jsx)("h4", {
                                                className: "h5",
                                                style: {
                                                  marginTop: "7px",
                                                  marginBottom: "7px",
                                                },
                                                children: e.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                      n
                                    );
                                  }),
                          }
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    48695: function (e, n, t) {
      "use strict";
      t.d(n, {
        zj: function () {
          return N;
        },
        To: function () {
          return j;
        },
        Z1: function () {
          return g;
        },
        HL: function () {
          return b;
        },
      });
      var a,
        s = t(26042),
        i = t(69396),
        r = t(99534),
        l = t(56193),
        o = t(88767),
        c = t(47568),
        d = t(97582),
        u = t(98263),
        m = t(24756);
      !(function (e) {
        (e.Tree = "/routes/tree"),
          (e.StationFrom = "/stations/from"),
          (e.StationDeparture =
            "/stations/departure?transportType=AIR&routeType=DOMESTIC"),
          (e.StationDestination = "/stations/destination"),
          (e.Routes = "/routes/route"),
          (e.PrepareImage = "/image/prepare"),
          (e.TravellersByUserId = "/traveler/showByUserId/:id");
      })(a || (a = {}));
      var p = t(38500),
        v = (function () {
          var e = (0, c.Z)(function () {
            return (0, d.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    (0, m.kw)({
                      method: u.o.Get,
                      path: a.StationDeparture,
                      port: p.Z9.Air,
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        h =
          ((function () {
            var e = (0, c.Z)(function (e) {
              return (0, d.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      (0, m.kw)({
                        method: u.o.Get,
                        path: a.StationDestination,
                        port: p.Z9.Air,
                        config: { params: { fromStationId: e } },
                      }),
                    ];
                  case 1:
                    return [2, n.sent()];
                }
              });
            });
          })(),
          (function () {
            var e = (0, c.Z)(function (e) {
              return (0, d.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      (0, m.kw)({
                        method: u.o.Get,
                        path: a.TravellersByUserId,
                        port: p.Z9.Aaum,
                        requireAuth: !0,
                        slugs: { id: e },
                      }),
                    ];
                  case 1:
                    return [2, n.sent()];
                }
              });
            });
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
        f = (function () {
          var e = (0, c.Z)(function (e) {
            return (0, d.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [
                    4,
                    (0, m.kw)({
                      method: u.o.Post,
                      path: a.PrepareImage,
                      port: p.Z9.Air,
                      requireAuth: !0,
                      data: e,
                    }),
                  ];
                case 1:
                  return [2, n.sent()];
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        x = (function () {
          var e = (0, c.Z)(function (e) {
            var n;
            return (0, d.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (n = { headers: { "Content-Type": e.contentType } }),
                    [
                      4,
                      (0, m.kw)({
                        method: u.o.Put,
                        completePath: e.url,
                        port: p.Z9.Air,
                        config: n,
                        data: e.payload,
                      }),
                    ]
                  );
                case 1:
                  return [2, t.sent()];
              }
            });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        g = function () {
          var e = (0, o.useMutation)(l.i.SEARCH_PREVIOUS_TRAVELLERS, h),
            n = e.mutate,
            t = (0, r.Z)(e, ["mutate"]);
          return (0, i.Z)((0, s.Z)({}, t), { previousTravellersMutate: n });
        },
        j = function () {
          var e = (0, o.useMutation)(l.i.PREPARE_IMAGE_AIR, f),
            n = e.mutate,
            t = (0, r.Z)(e, ["mutate"]);
          return (0, i.Z)((0, s.Z)({}, t), { prepareImageMutate: n });
        },
        b = function () {
          var e = (0, o.useMutation)(l.i.UPLOAD_IMAGE_AIR, x),
            n = e.mutate,
            t = (0, r.Z)(e, ["mutate"]);
          return (0, i.Z)((0, s.Z)({}, t), { uploadImageMutate: n });
        },
        N = function () {
          var e = (0, o.useMutation)(l.i.GET_STATIONS_AIR, v),
            n = e.mutate,
            t = (0, r.Z)(e, ["mutate"]);
          return (0, i.Z)((0, s.Z)({}, t), { getStationsAirMutate: n });
        };
    },
    20949: function (e, n, t) {
      "use strict";
      t.d(n, {
        F: function () {
          return r;
        },
        K: function () {
          return l;
        },
      });
      var a = t(26042),
        s = t(69396),
        i = t(85893);
      function r(e) {
        var n = e.className,
          t = e.style,
          r = e.onClick;
        return (0, i.jsx)("div", {
          className: n,
          style: (0, s.Z)((0, a.Z)({}, t), { display: "block" }),
          onClick: r,
          children: (0, i.jsx)("svg", {
            width: "12",
            height: "20",
            viewBox: "0 0 12 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M0.939668 0.454072C0.658462 0.735364 0.500488 1.11683 0.500488 1.51457C0.500488 1.91232 0.658462 2.29378 0.939668 2.57507L8.36467 10.0001L0.939668 17.4251C0.666431 17.708 0.515239 18.0869 0.518656 18.4802C0.522074 18.8735 0.679828 19.2497 0.95794 19.5278C1.23605 19.8059 1.61227 19.9637 2.00557 19.9671C2.39886 19.9705 2.77776 19.8193 3.06067 19.5461L11.5462 11.0606C11.8274 10.7793 11.9853 10.3978 11.9853 10.0001C11.9853 9.60233 11.8274 9.22086 11.5462 8.93957L3.06067 0.454072C2.77938 0.172866 2.39791 0.0148926 2.00017 0.0148926C1.60242 0.0148926 1.22096 0.172866 0.939668 0.454072Z",
              fill: "#5B2192",
            }),
          }),
        });
      }
      function l(e) {
        var n = e.className,
          t = e.style,
          r = e.onClick;
        return (0, i.jsx)("div", {
          className: n,
          style: (0, s.Z)((0, a.Z)({}, t), { display: "block" }),
          onClick: r,
          children: (0, i.jsx)("svg", {
            width: "12",
            height: "20",
            viewBox: "0 0 12 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M11.5428 19.5305C11.824 19.2493 11.9819 18.8678 11.9819 18.47C11.9819 18.0723 11.824 17.6908 11.5428 17.4095L4.11775 9.98455L11.5428 2.55955C11.816 2.27664 11.9672 1.89774 11.9638 1.50444C11.9603 1.11115 11.8026 0.73493 11.5245 0.456818C11.2464 0.178706 10.8701 0.0209539 10.4769 0.0175363C10.0836 0.0141187 9.70466 0.16531 9.42175 0.438547L0.936253 8.92405C0.655047 9.20534 0.497074 9.5868 0.497074 9.98455C0.497074 10.3823 0.655047 10.7638 0.936254 11.045L9.42175 19.5305C9.70305 19.8118 10.0845 19.9697 10.4823 19.9697C10.88 19.9697 11.2615 19.8118 11.5428 19.5305V19.5305Z",
              fill: "#5B2192",
            }),
          }),
        });
      }
    },
    7135: function (e) {
      e.exports = {
        "feature-banner": "destination_feature-banner__SJZFc",
        "feature-slider": "destination_feature-slider__xcVF0",
        "slick-slide": "destination_slick-slide__o2gQu",
        "slick-arrow": "destination_slick-arrow__fTexf",
        "slick-prev": "destination_slick-prev__1vKko",
        "slick-next": "destination_slick-next__HBQL7",
        "section-title": "destination_section-title__xCWlO",
        "slider-sm": "destination_slider-sm__gZpKA",
        block: "destination_block___yP7D",
        "text-block": "destination_text-block__jYA1P",
        swiper: "destination_swiper__MqiBN",
        "swiper-wrapper": "destination_swiper-wrapper__hz4Uz",
        "slider-image": "destination_slider-image__2cr6z",
        "swiper-navigation": "destination_swiper-navigation__ZGOJ_",
      };
    },
  },
]);
