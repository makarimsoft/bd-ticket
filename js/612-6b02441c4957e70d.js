(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [612],
  {
    28164: function (e, n, t) {
      "use strict";
      var i = t(85893),
        o = t(24026),
        s = t.n(o),
        a = t(11163);
      n.Z = function (e) {
        var n = e.popularRoutes,
          t = e.islanding,
          o = (n || []).routes,
          l = (0, a.useRouter)(),
          r =
            o &&
            o.slice(0, 12).reduce(function (e, n, t) {
              var i = Math.floor(t / 12);
              return e[i] || (e[i] = []), e[i].push(n), e;
            }, []);
        return r && r.length > 0
          ? (0, i.jsx)("section", {
              className: ""
                .concat(s()["bus-operators"], " ")
                .concat(t ? "" : "bg-white"),
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsxs)("div", {
                  className: "gy-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-12",
                      children: (0, i.jsx)("h2", {
                        className: "section-title",
                        children: "Popular Bus Routes",
                      }),
                    }),
                    null === r || void 0 === r
                      ? void 0
                      : r.map(function (e, n) {
                          return (0, i.jsx)(
                            "div",
                            {
                              className: "col-12 pt-2",
                              children: (0, i.jsx)("ul", {
                                className: ""
                                  .concat(s()["bus-list"], " ")
                                  .concat(s().routes),
                                children: r[n].map(function (e) {
                                  var n = e.identifier.split(" ").join("-");
                                  return (0, i.jsx)(
                                    "li",
                                    {
                                      children: (0, i.jsx)("a", {
                                        href: "/popular-routes/".concat(n),
                                        onClick: function (e) {
                                          e.preventDefault(),
                                            l.push(
                                              "/popular-routes/".concat(n)
                                            );
                                        },
                                        children: e.name,
                                      }),
                                    },
                                    e.identifier
                                  );
                                }),
                              }),
                            },
                            n
                          );
                        }),
                  ],
                }),
              }),
            })
          : null;
      };
    },
    49077: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return y;
        },
      });
      var i = t(828),
        o = t(85893),
        s = t(67294),
        a = t(26042),
        l = t(69396),
        r = t(22321),
        d = t(82739),
        c = t(25743),
        u = (t(55062), t(30381)),
        v = t.n(u),
        m = t(33841),
        h = t(81335),
        f = "#E30B13",
        p = c.Z.RangePicker,
        x = function (e) {
          var n = e.fromStations,
            t = e.tree,
            c = e.searchPayload,
            u = e.setSearchPayload,
            x = e.selectedTrendingFrom,
            b = e.selectedTrendingTo,
            g = (0, i.Z)(s.useState(null), 2),
            w = g[0],
            N = g[1],
            _ = (0, s.useState)(!1),
            S = _[0],
            k = _[1],
            Z = (0, s.useState)(!1),
            C = Z[0],
            y = Z[1],
            L = (0, i.Z)(s.useState([]), 2),
            T = L[0],
            P = L[1],
            F = (0, i.Z)(s.useState([]), 2),
            B = F[0],
            z = F[1],
            M = (0, i.Z)(s.useState(""), 2),
            D = M[0],
            R = M[1],
            E = (0, i.Z)(s.useState(""), 2),
            A = E[0],
            U = E[1],
            q = (0, i.Z)(s.useState(null), 2),
            G = q[0],
            J = q[1],
            O = (0, i.Z)(s.useState(null), 2),
            V = O[0],
            W = O[1],
            X = (0, i.Z)(s.useState(null), 2),
            Y = X[0],
            H = X[1],
            I = (0, i.Z)((0, m.Z)(h.d.FromStationStorage, null), 1)[0],
            K = (0, i.Z)((0, m.Z)(h.d.ToStationStorage, null), 1)[0],
            Q = (0, d.Z)(),
            $ = (0, d.Z)(),
            ee = (0, s.useRef)(null),
            ne = (0, s.useRef)(null);
          (0, s.useEffect)(
            function () {
              n && P(n), w && z(w), R(""), U("");
            },
            [n, w, S, C]
          ),
            (0, s.useEffect)(
              function () {
                if (I) {
                  var e,
                    i =
                      null === n || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return e.code === I;
                          }),
                    o =
                      null === t ||
                      void 0 === t ||
                      null ===
                        (e = t[null === i || void 0 === i ? void 0 : i.id]) ||
                      void 0 === e
                        ? void 0
                        : e.map(function (e) {
                            return e.to;
                          });
                  N(o),
                    J({
                      name: null === i || void 0 === i ? void 0 : i.name,
                      code: null === i || void 0 === i ? void 0 : i.code,
                    });
                }
                if (K) {
                  var s =
                    null === n || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.code === K;
                        });
                  W({
                    name: null === s || void 0 === s ? void 0 : s.name,
                    code: null === s || void 0 === s ? void 0 : s.code,
                  });
                }
                u((0, l.Z)((0, a.Z)({}, c), { fromCode: I, toCode: K }));
              },
              [I, K]
            ),
            (0, s.useEffect)(
              function () {
                if (x) {
                  var e,
                    i =
                      null === n || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return e.code === x;
                          }),
                    o =
                      null === t ||
                      void 0 === t ||
                      null ===
                        (e = t[null === i || void 0 === i ? void 0 : i.id]) ||
                      void 0 === e
                        ? void 0
                        : e.map(function (e) {
                            return e.to;
                          });
                  N(o),
                    J({
                      name: null === i || void 0 === i ? void 0 : i.name,
                      code: null === i || void 0 === i ? void 0 : i.code,
                    });
                }
                if (b) {
                  var s =
                    null === n || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.code === b;
                        });
                  W({
                    name: null === s || void 0 === s ? void 0 : s.name,
                    code: null === s || void 0 === s ? void 0 : s.code,
                  });
                }
                x &&
                  b &&
                  u((0, l.Z)((0, a.Z)({}, c), { fromCode: x, toCode: b }));
              },
              [x, b]
            ),
            (0, s.useEffect)(
              function () {
                S && ee.current && ee.current.focus(),
                  C && ne.current && ne.current.focus();
              },
              [S, C]
            );
          var te = function (e) {
            "from" === e ? k(!0) : "to" === e && y(!0);
          };
          (0, r.t)(Q, function () {
            k(!1);
          }),
            (0, r.t)($, function () {
              y(!1);
            });
          var ie = function () {
              if (ee.current && ne.current) {
                var e;
                (ee.current.value = ""),
                  (ne.current.value = ""),
                  R(""),
                  U(""),
                  P(n);
                var i =
                    null === n || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return (
                            e.code ===
                            (null === G || void 0 === G ? void 0 : G.code)
                          );
                        }),
                  o =
                    null === t ||
                    void 0 === t ||
                    null ===
                      (e = t[null === i || void 0 === i ? void 0 : i.id]) ||
                    void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return e.to;
                        });
                N(o);
              }
            },
            oe = function (e, t) {
              var i = e.target.value;
              if ("from" === t) {
                R(i);
                var o = j(n, i);
                P(o);
              } else {
                U(i);
                var s = j(w, i);
                z(s);
              }
            };
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: "bdt-search-form",
              children: [
                (0, o.jsxs)("div", {
                  className: "bdt-input-wrapper bdt-input-group has-btn-swipe",
                  style: { background: "white" },
                  children: [
                    (0, o.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        S && "dropdown-active"
                      ),
                      children: [
                        (0, o.jsxs)("div", {
                          onClick: function () {
                            return te("from");
                          },
                          ref: Q,
                          children: [
                            (0, o.jsx)("span", {
                              className: "bdt-input-label",
                              children: "Going From",
                            }),
                            (0, o.jsx)("span", {
                              className: "bdt-input-value",
                              children: (
                                null === G || void 0 === G ? void 0 : G.name
                              )
                                ? null === G || void 0 === G
                                  ? void 0
                                  : G.name
                                : "Please select",
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: Q,
                          children: [
                            (0, o.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, o.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, o.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("button", {
                                    onClick: function () {
                                      return k(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("input", {
                                    type: "text",
                                    placeholder: "Search by city",
                                    value: D,
                                    ref: ee,
                                    onChange: function (e) {
                                      return oe(e, "from");
                                    },
                                  }),
                                  (0, o.jsx)("button", {
                                    onClick: ie,
                                    className: "bdt-close-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, o.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === T || void 0 === T
                                    ? void 0
                                    : T.map(function (e) {
                                        return (0, o.jsx)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var i,
                                                  o,
                                                  s,
                                                  r =
                                                    null ===
                                                      (i = e.split(" - ")) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i[0],
                                                  d =
                                                    null ===
                                                      (o = e.split(" - ")) ||
                                                    void 0 === o
                                                      ? void 0
                                                      : o[1];
                                                k(!1);
                                                var v =
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.find(function (e) {
                                                          return e.code === d;
                                                        }),
                                                  m =
                                                    null === t ||
                                                    void 0 === t ||
                                                    null ===
                                                      (s =
                                                        t[
                                                          null === v ||
                                                          void 0 === v
                                                            ? void 0
                                                            : v.id
                                                        ]) ||
                                                    void 0 === s
                                                      ? void 0
                                                      : s.map(function (e) {
                                                          return e.to;
                                                        });
                                                N(m),
                                                  J({ name: r, code: d }),
                                                  W(null),
                                                  u(
                                                    (0, l.Z)((0, a.Z)({}, c), {
                                                      fromCode: d,
                                                      toCode: null,
                                                    })
                                                  );
                                              })(
                                                ""
                                                  .concat(e.name, " - ")
                                                  .concat(e.code)
                                              );
                                            },
                                            style: {
                                              backgroundColor:
                                                (null === G || void 0 === G
                                                  ? void 0
                                                  : G.code) === e.code &&
                                                "".concat(f, "40"),
                                            },
                                            children: (0, o.jsx)("div", {
                                              children: (0, o.jsx)("span", {
                                                className: "bdt-value",
                                                children: e.name,
                                              }),
                                            }),
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
                    (0, o.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        C && "dropdown-active"
                      ),
                      children: [
                        (0, o.jsxs)("div", {
                          onClick: function () {
                            return te("to");
                          },
                          ref: $,
                          children: [
                            (0, o.jsx)("span", {
                              className: "bdt-input-label",
                              children: "Going to",
                            }),
                            (0, o.jsx)("span", {
                              className: "bdt-input-value",
                              children: (
                                null === V || void 0 === V ? void 0 : V.name
                              )
                                ? null === V || void 0 === V
                                  ? void 0
                                  : V.name
                                : "Please select",
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: $,
                          children: [
                            (0, o.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, o.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, o.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("button", {
                                    onClick: function () {
                                      return y(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, o.jsx)("input", {
                                    value: A,
                                    type: "text",
                                    placeholder: "Search by city",
                                    ref: ne,
                                    onChange: function (e) {
                                      return oe(e, "to");
                                    },
                                  }),
                                  (0, o.jsx)("button", {
                                    onClick: ie,
                                    className: "bdt-close-btn",
                                    children: (0, o.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, o.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, o.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === B || void 0 === B
                                    ? void 0
                                    : B.map(function (e) {
                                        return (0, o.jsx)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var n,
                                                  t,
                                                  i =
                                                    null ===
                                                      (n = e.split(" - ")) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n[0],
                                                  o =
                                                    null ===
                                                      (t = e.split(" - ")) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t[1];
                                                y(!1),
                                                  W({ name: i, code: o }),
                                                  u(
                                                    (0, l.Z)((0, a.Z)({}, c), {
                                                      toCode: o,
                                                    })
                                                  );
                                              })(
                                                ""
                                                  .concat(e.name, " - ")
                                                  .concat(e.code)
                                              );
                                            },
                                            style: {
                                              backgroundColor:
                                                (null === V || void 0 === V
                                                  ? void 0
                                                  : V.code) === e.code &&
                                                "".concat(f, "40"),
                                            },
                                            children: (0, o.jsx)("div", {
                                              children: (0, o.jsx)("span", {
                                                className: "bdt-value",
                                                children: e.name,
                                              }),
                                            }),
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
                    (0, o.jsxs)("button", {
                      className: "btn-swipe",
                      onClick: function () {
                        var e;
                        if (V) {
                          J({ name: V.name, code: V.code }),
                            W({ name: G.name, code: G.code });
                          var i =
                              null === n || void 0 === n
                                ? void 0
                                : n.find(function (e) {
                                    return e.code === V.code;
                                  }),
                            o =
                              null === t ||
                              void 0 === t ||
                              null ===
                                (e =
                                  t[
                                    null === i || void 0 === i ? void 0 : i.id
                                  ]) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return e.to;
                                  });
                          N(o),
                            u(
                              (0, l.Z)((0, a.Z)({}, c), {
                                fromCode: V.code,
                                toCode: G.code,
                              })
                            );
                        }
                      },
                      children: [
                        (0, o.jsx)("img", {
                          src: "/images/icon-svg/swap-red-light.svg",
                          className: "scheme-secondary",
                          alt: "icon",
                        }),
                        (0, o.jsx)("img", {
                          src: "/images/icon-svg/swap-red-light.svg",
                          alt: "icon",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className:
                    "bdt-input-wrapper bdt-input-group bdt-date-picker has-disabled-input bdt-input-lg",
                  children: (0, o.jsx)(p, {
                    placeholder: ["Select date", "Select date"],
                    onChange: function (e) {
                      e
                        ? (H(e[0]),
                          u((0, l.Z)((0, a.Z)({}, c), { journeyDate: e[0] })))
                        : H(null);
                    },
                    defaultValue: [Y, null],
                    inputReadOnly: !0,
                    format: "DD MMM'YY",
                    disabledDate: function (e) {
                      return e && e < v()().startOf("day");
                    },
                    disabled: [!1, !0],
                    allowEmpty: [!1, !0],
                    allowClear: !0,
                  }),
                }),
              ],
            }),
          });
        },
        j = function (e, n) {
          return e.filter(function (e) {
            return e.code.includes(n.toLowerCase());
          });
        },
        b = t(9307),
        g = t(12461),
        w = t(11163),
        N = t(49089),
        _ = t(1785),
        S = t.n(_),
        k = t(57536),
        Z = [
          { fromName: "dhaka", toName: "rajshahi" },
          { fromName: "dhaka", toName: "barisal" },
          { fromName: "dhaka", toName: "coxs-bazar" },
          { fromName: "dhaka", toName: "chittagong" },
          { fromName: "dhaka", toName: "chapainawabganj" },
        ],
        C = function (e) {
          var n = e.handleSelectedStations,
            t = e.isNotLanding,
            i = (0, k.a)().isFullHDAndUp;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: "bdt-trending-search",
              style: { marginLeft: t && i && "40px", paddingLeft: !t && "5px" },
              children: [
                (0, o.jsx)("span", {
                  className: "fw-semibold me-3",
                  children: "Trending Searches:",
                }),
                (0, o.jsx)("ul", {
                  className: "list-route",
                  children:
                    null === Z || void 0 === Z
                      ? void 0
                      : Z.map(function (e, t) {
                          return (0, o.jsx)(
                            "li",
                            {
                              onClick: function () {
                                return n(e);
                              },
                              children: (0, o.jsx)("a", {
                                style: { cursor: "pointer" },
                                children: (0, o.jsxs)("ul", {
                                  className: "list-route-card",
                                  children: [
                                    (0, o.jsx)("li", { children: e.fromName }),
                                    (0, o.jsx)("li", { children: e.toName }),
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
        y = function (e) {
          var n = e.fromStations,
            t = e.tree,
            a = e.isNotLanding,
            l = e.handleSelectedStationsBus,
            r = e.selectedTrendingFrom,
            d = e.selectedTrendingTo,
            c = (0, s.useState)({}),
            u = c[0],
            v = c[1],
            f = (0, i.Z)((0, m.Z)(h.d.FromStationStorage, null), 2),
            p = (f[0], f[1]),
            j = (0, i.Z)((0, m.Z)(h.d.ToStationStorage, null), 2),
            _ = (j[0], j[1]),
            Z = (0, w.useRouter)(),
            y = (0, k.a)().isWidescreenAndUp;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(x, {
                fromStations: n,
                tree: t,
                setSearchPayload: v,
                searchPayload: u,
                selectedTrendingFrom: r,
                selectedTrendingTo: d,
              }),
              y &&
                (0, o.jsx)(C, { isNotLanding: a, handleSelectedStations: l }),
              (0, o.jsx)("div", {
                className: "bdt-search-submit",
                children: (0, o.jsx)("button", {
                  onClick: function () {
                    var e = (0, b.kC)(u.journeyDate),
                      i = null === u || void 0 === u ? void 0 : u.fromCode,
                      o = null === u || void 0 === u ? void 0 : u.toCode;
                    if (i)
                      if (o)
                        if (
                          null === u || void 0 === u ? void 0 : u.journeyDate
                        ) {
                          p(i), _(o);
                          var s =
                              null === n || void 0 === n
                                ? void 0
                                : n.find(function (e) {
                                    return e.code === i;
                                  }),
                            a =
                              null === t || void 0 === t
                                ? void 0
                                : t[
                                    null === s || void 0 === s ? void 0 : s.id
                                  ].map(function (e) {
                                    return e.to;
                                  }),
                            l = {
                              content_type: "destination",
                              content_ids: [
                                null === n || void 0 === n
                                  ? void 0
                                  : n.find(function (e) {
                                      return e.code === i;
                                    }).id,
                                null === a || void 0 === a
                                  ? void 0
                                  : a.find(function (e) {
                                      return e.code === o;
                                    }).id,
                              ],
                              city: o,
                              region: o,
                              country: "Bangladesh",
                              travel_start: i,
                              travel_end: o,
                            },
                            r = {
                              category: "Bus",
                              action: "Search",
                              label: JSON.stringify(l),
                            };
                          N.ZP.event(r),
                            S().dataLayer({
                              dataLayer: {
                                event: "searchButtonClick",
                                data: l,
                              },
                            }),
                            Z.push(
                              "/bus/search/"
                                .concat(i, "-to-")
                                .concat(o, "?journeyDate=")
                                .concat(e)
                            ).then(function (e) {
                              return e;
                            });
                        } else g.ZP.error("Please select journey date!");
                      else g.ZP.error("Please select destination station!");
                    else g.ZP.error("Please select departure station!");
                  },
                  type: "submit",
                  className: "btn btn-primary capitalize px-5 fw-bold",
                  children: "search bus",
                }),
              }),
            ],
          });
        };
    },
    67623: function (e, n, t) {
      "use strict";
      var i = t(26042),
        o = t(69396),
        s = t(85893),
        a = (t(67294), t(46066)),
        l = (t(98745), t(98322), t(21932)),
        r = t.n(l),
        d = t(20949),
        c = t(57536);
      n.Z = function (e) {
        var n = e.popularDestinations,
          t = e.isLanding,
          l = e.handleSelectedStationsBus,
          u = (0, c.a)().isWidescreenAndUp;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("section", {
            className: "section-md ".concat(t ? "bg-white" : ""),
            children: (0, s.jsx)("div", {
              className: "container",
              children: (0, s.jsxs)("div", {
                className: "row gy-4",
                children: [
                  (0, s.jsx)("div", {
                    className: "col-12",
                    children: (0, s.jsx)("div", {
                      className: r()["section-title"] + " mb-0",
                      children: (0, s.jsx)("h2", {
                        className: "mb-0",
                        children: "Frequently Traveled Bus Routes",
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "col-12 pt-2",
                    children: (0, s.jsx)("div", {
                      className: "places",
                      children: (0, s.jsx)(
                        a.Z,
                        (0, o.Z)(
                          (0, i.Z)(
                            { className: "mt-0 text-center" },
                            (function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return (0, i.Z)(
                                {
                                  slidesToShow: 3,
                                  arrows: u && !0,
                                  nextArrow: (0, s.jsx)(d.F, {}),
                                  prevArrow: (0, s.jsx)(d.K, {}),
                                  responsive: [
                                    {
                                      breakpoint: 991,
                                      settings: { slidesToShow: 2 },
                                    },
                                    {
                                      breakpoint: 767,
                                      settings: {
                                        slidesToShow: 1,
                                        centerMode: !0,
                                        centerPadding: "20px",
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
                                : n.map(function (e) {
                                    return (0, s.jsx)(
                                      "div",
                                      {
                                        className: "px-2",
                                        onClick: function () {
                                          return l({
                                            fromName: e.from,
                                            toName: e.to,
                                          });
                                        },
                                        children: (0, s.jsxs)("div", {
                                          className: "place",
                                          children: [
                                            (0, s.jsx)("img", {
                                              src: e.featureImage,
                                              className:
                                                "bg-image slider-image",
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "content",
                                              children: (0, s.jsx)("h3", {
                                                className:
                                                  "h4 d-inline-block mb-0",
                                                children: e.title,
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                      e.id
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
    24026: function (e) {
      e.exports = {
        "bus-operators": "operators_bus-operators__oF55A",
        "section-title": "operators_section-title__BTzzh",
        "bus-list": "operators_bus-list__Dqfo4",
        routes: "operators_routes__Xn3zT",
        "route-wrapper": "operators_route-wrapper__9hVW_",
      };
    },
    21932: function (e) {
      e.exports = {
        "feature-banner": "destination_feature-banner__mgtkP",
        "feature-slider": "destination_feature-slider__9Thwq",
        "slick-slide": "destination_slick-slide__XVubQ",
        "slick-arrow": "destination_slick-arrow__eYe0m",
        "slick-prev": "destination_slick-prev__Igrj7",
        "slick-next": "destination_slick-next__SZ__U",
        "section-title": "destination_section-title__9aSlJ",
        "slider-sm": "destination_slider-sm__jntjF",
        block: "destination_block__Sd9tj",
        "text-block": "destination_text-block___pgS7",
        swiper: "destination_swiper__KNlFs",
        "swiper-wrapper": "destination_swiper-wrapper__glTHG",
        "slider-image": "destination_slider-image__9XJPu",
        "swiper-navigation": "destination_swiper-navigation__CdZSx",
      };
    },
  },
]);
