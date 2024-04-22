"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3608],
  {
    93608: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return N;
        },
      });
      var o = t(828),
        i = t(85893),
        l = t(67294),
        d = t(26042),
        c = t(69396),
        a = t(22321),
        r = t(82739),
        s = t(25743),
        u = (t(55062), t(30381)),
        v = t.n(u),
        h = t(33841),
        f = t(81335),
        m = "#E30B13",
        p = s.Z.RangePicker,
        b = function (e) {
          var n = e.fromStations,
            t = e.tree,
            s = e.searchPayload,
            u = e.setSearchPayload,
            b = (0, o.Z)(l.useState(null), 2),
            j = b[0],
            w = b[1],
            g = (0, l.useState)(!1),
            C = g[0],
            S = g[1],
            Z = (0, l.useState)(!1),
            N = Z[0],
            y = Z[1],
            k = (0, o.Z)(l.useState([]), 2),
            L = k[0],
            P = k[1],
            M = (0, o.Z)(l.useState([]), 2),
            z = M[0],
            B = M[1],
            _ = (0, o.Z)(l.useState(null), 2),
            D = _[0],
            E = _[1],
            F = (0, o.Z)(l.useState(null), 2),
            R = F[0],
            O = F[1],
            G = (0, o.Z)(l.useState(null), 2),
            T = G[0],
            Y = G[1],
            J = (0, o.Z)(l.useState(null), 2),
            V = J[0],
            q = J[1],
            A = (0, o.Z)(l.useState(null), 2),
            H = A[0],
            I = A[1],
            K = (0, o.Z)((0, h.Z)(f.d.FromStationStorageLaunch, null), 1)[0],
            Q = (0, o.Z)((0, h.Z)(f.d.ToStationStorageLaunch, null), 1)[0],
            U = (0, r.Z)(),
            W = (0, r.Z)(),
            X = (0, l.useRef)(null),
            $ = (0, l.useRef)(null);
          (0, l.useEffect)(
            function () {
              n && P(n), j && B(j), E(""), O("");
            },
            [n, j, C, N]
          ),
            (0, l.useEffect)(
              function () {
                if (K) {
                  var e,
                    o =
                      null === n || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return e.code === K;
                          }),
                    i =
                      null === t ||
                      void 0 === t ||
                      null ===
                        (e = t[null === o || void 0 === o ? void 0 : o.id]) ||
                      void 0 === e
                        ? void 0
                        : e.map(function (e) {
                            return e.to;
                          });
                  w(i),
                    Y({
                      name: null === o || void 0 === o ? void 0 : o.name,
                      code: null === o || void 0 === o ? void 0 : o.code,
                    });
                }
                if (Q) {
                  var l =
                    null === n || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.code === Q;
                        });
                  q({
                    name: null === l || void 0 === l ? void 0 : l.name,
                    code: null === l || void 0 === l ? void 0 : l.code,
                  });
                }
                u((0, c.Z)((0, d.Z)({}, s), { fromCode: K, toCode: Q }));
              },
              [K, Q]
            ),
            (0, l.useEffect)(
              function () {
                C && X.current && X.current.focus(),
                  N && $.current && $.current.focus();
              },
              [C, N]
            );
          var ee = function (e) {
            "from" === e ? S(!0) : "to" === e && y(!0);
          };
          (0, a.t)(U, function () {
            S(!1);
          }),
            (0, a.t)(W, function () {
              y(!1);
            });
          var ne = function () {
              if (X.current && $.current) {
                var e;
                (X.current.value = ""),
                  ($.current.value = ""),
                  E(""),
                  O(""),
                  P(n);
                var o =
                    null === n || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return (
                            e.code ===
                            (null === T || void 0 === T ? void 0 : T.code)
                          );
                        }),
                  i =
                    null === t ||
                    void 0 === t ||
                    null ===
                      (e = t[null === o || void 0 === o ? void 0 : o.id]) ||
                    void 0 === e
                      ? void 0
                      : e.map(function (e) {
                          return e.to;
                        });
                w(i);
              }
            },
            te = function (e, t) {
              var o = e.target.value;
              if ("from" === t) {
                E(o);
                var i = x(n, o);
                P(i);
              } else {
                O(o);
                var l = x(j, o);
                B(l);
              }
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "bdt-search-form",
              children: [
                (0, i.jsxs)("div", {
                  className: "bdt-input-wrapper bdt-input-group has-btn-swipe",
                  style: { background: "white" },
                  children: [
                    (0, i.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        C && "dropdown-active"
                      ),
                      children: [
                        (0, i.jsxs)("div", {
                          onClick: function () {
                            return ee("from");
                          },
                          ref: U,
                          children: [
                            (0, i.jsx)("span", {
                              className: "bdt-input-label",
                              children: "Going From",
                            }),
                            (0, i.jsx)("span", {
                              className: "bdt-input-value",
                              children: (
                                null === T || void 0 === T ? void 0 : T.name
                              )
                                ? null === T || void 0 === T
                                  ? void 0
                                  : T.name
                                : "Please select",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: U,
                          children: [
                            (0, i.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, i.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, i.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("button", {
                                    onClick: function () {
                                      return S(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("input", {
                                    type: "text",
                                    placeholder: "Search by city",
                                    value: D,
                                    ref: X,
                                    onChange: function (e) {
                                      return te(e, "from");
                                    },
                                  }),
                                  (0, i.jsx)("button", {
                                    onClick: ne,
                                    className: "bdt-close-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, i.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === L || void 0 === L
                                    ? void 0
                                    : L.map(function (e) {
                                        return (0, i.jsx)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var o,
                                                  i,
                                                  l,
                                                  a =
                                                    null ===
                                                      (o = e.split(" - ")) ||
                                                    void 0 === o
                                                      ? void 0
                                                      : o[0],
                                                  r =
                                                    null ===
                                                      (i = e.split(" - ")) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i[1];
                                                S(!1);
                                                var v =
                                                    null === n || void 0 === n
                                                      ? void 0
                                                      : n.find(function (e) {
                                                          return e.code === r;
                                                        }),
                                                  h =
                                                    null === t ||
                                                    void 0 === t ||
                                                    null ===
                                                      (l =
                                                        t[
                                                          null === v ||
                                                          void 0 === v
                                                            ? void 0
                                                            : v.id
                                                        ]) ||
                                                    void 0 === l
                                                      ? void 0
                                                      : l.map(function (e) {
                                                          return e.to;
                                                        });
                                                w(h),
                                                  Y({ name: a, code: r }),
                                                  q(null),
                                                  u(
                                                    (0, c.Z)((0, d.Z)({}, s), {
                                                      fromCode: r,
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
                                                (null === T || void 0 === T
                                                  ? void 0
                                                  : T.code) === e.code &&
                                                "".concat(m, "40"),
                                            },
                                            children: (0, i.jsx)("div", {
                                              children: (0, i.jsx)("span", {
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
                    (0, i.jsxs)("div", {
                      className: "bdt-input bdt-has-dropdown ".concat(
                        N && "dropdown-active"
                      ),
                      children: [
                        (0, i.jsxs)("div", {
                          onClick: function () {
                            return ee("to");
                          },
                          ref: W,
                          children: [
                            (0, i.jsx)("span", {
                              className: "bdt-input-label",
                              children: "Going to",
                            }),
                            (0, i.jsx)("span", {
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
                        (0, i.jsxs)("div", {
                          className: "bdt-dropdown bdt-dropdown-search",
                          ref: W,
                          children: [
                            (0, i.jsx)("div", {
                              className: "bdt-dropdown-header",
                              children: (0, i.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                  (0, i.jsx)("button", {
                                    className: "bdt-search-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1em",
                                      viewBox: "0 0 512 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("button", {
                                    onClick: function () {
                                      return y(!1);
                                    },
                                    className: "bdt-back-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "1.2em",
                                      viewBox: "0 0 320 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("input", {
                                    value: R,
                                    type: "text",
                                    placeholder: "Search by city",
                                    ref: $,
                                    onChange: function (e) {
                                      return te(e, "to");
                                    },
                                  }),
                                  (0, i.jsx)("button", {
                                    onClick: ne,
                                    className: "bdt-close-btn",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "currentColor",
                                      height: "1.5em",
                                      viewBox: "0 0 384 512",
                                      children: (0, i.jsx)("path", {
                                        d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "bdt-dropdown-body",
                              children: (0, i.jsx)("ul", {
                                className: "bdt-search-list",
                                children:
                                  null === z || void 0 === z
                                    ? void 0
                                    : z.map(function (e) {
                                        return (0, i.jsx)(
                                          "li",
                                          {
                                            onClick: function () {
                                              return (function (e) {
                                                var n,
                                                  t,
                                                  o =
                                                    null ===
                                                      (n = e.split(" - ")) ||
                                                    void 0 === n
                                                      ? void 0
                                                      : n[0],
                                                  i =
                                                    null ===
                                                      (t = e.split(" - ")) ||
                                                    void 0 === t
                                                      ? void 0
                                                      : t[1];
                                                y(!1),
                                                  q({ name: o, code: i }),
                                                  u(
                                                    (0, c.Z)((0, d.Z)({}, s), {
                                                      toCode: i,
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
                                                "".concat(m, "40"),
                                            },
                                            children: (0, i.jsx)("div", {
                                              children: (0, i.jsx)("span", {
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
                    (0, i.jsx)("button", {
                      className: "btn-swipe",
                      onClick: function () {
                        var e;
                        if (V) {
                          Y({ name: V.name, code: V.code }),
                            q({ name: T.name, code: T.code });
                          var o =
                              null === n || void 0 === n
                                ? void 0
                                : n.find(function (e) {
                                    return e.code === V.code;
                                  }),
                            i =
                              null === t ||
                              void 0 === t ||
                              null ===
                                (e =
                                  t[
                                    null === o || void 0 === o ? void 0 : o.id
                                  ]) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return e.to;
                                  });
                          w(i),
                            u(
                              (0, c.Z)((0, d.Z)({}, s), {
                                fromCode: V.code,
                                toCode: T.code,
                              })
                            );
                        }
                      },
                      children: (0, i.jsx)("img", {
                        src: "/images/icon-svg/swap-red.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "bdt-input-wrapper bdt-input-group bdt-date-picker has-disabled-input bdt-input-lg",
                  children: (0, i.jsx)(p, {
                    placeholder: ["Select date", "Select date"],
                    onChange: function (e) {
                      e
                        ? (I(e[0]),
                          u((0, c.Z)((0, d.Z)({}, s), { journeyDate: e[0] })))
                        : I(null);
                    },
                    defaultValue: [H, null],
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
        x = function (e, n) {
          return e.filter(function (e) {
            return e.code.includes(n.toLowerCase());
          });
        },
        j = t(9307),
        w = t(12461),
        g = t(11163),
        C = t(49089),
        S = t(1785),
        Z = t.n(S),
        N = function (e) {
          var n = e.fromStations,
            t = e.tree,
            d = (0, l.useState)({}),
            c = d[0],
            a = d[1],
            r = (0, o.Z)((0, h.Z)(f.d.FromStationStorageLaunch, null), 2),
            s = (r[0], r[1]),
            u = (0, o.Z)((0, h.Z)(f.d.ToStationStorageLaunch, null), 2),
            v = (u[0], u[1]),
            m = (0, g.useRouter)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(b, {
                fromStations: n,
                tree: t,
                setSearchPayload: a,
                searchPayload: c,
              }),
              (0, i.jsx)("div", {
                className: "bdt-search-submit",
                children: (0, i.jsx)("button", {
                  onClick: function () {
                    var e = (0, j.kC)(c.journeyDate),
                      o = null === c || void 0 === c ? void 0 : c.fromCode,
                      i = null === c || void 0 === c ? void 0 : c.toCode;
                    if (o)
                      if (i)
                        if (
                          null === c || void 0 === c ? void 0 : c.journeyDate
                        ) {
                          s(o), v(i);
                          var l =
                              null === n || void 0 === n
                                ? void 0
                                : n.find(function (e) {
                                    return e.code === o;
                                  }),
                            d =
                              null === t || void 0 === t
                                ? void 0
                                : t[
                                    null === l || void 0 === l ? void 0 : l.id
                                  ].map(function (e) {
                                    return e.to;
                                  }),
                            a = {
                              content_type: "destination",
                              content_ids: [
                                null === n || void 0 === n
                                  ? void 0
                                  : n.find(function (e) {
                                      return e.code === o;
                                    }).id,
                                null === d || void 0 === d
                                  ? void 0
                                  : d.find(function (e) {
                                      return e.code === i;
                                    }).id,
                              ],
                              city: i,
                              region: i,
                              country: "Bangladesh",
                              travel_start: o,
                              travel_end: i,
                            },
                            r = {
                              category: "Launch",
                              action: "Search",
                              label: JSON.stringify(a),
                            };
                          C.ZP.event(r),
                            Z().dataLayer({
                              dataLayer: {
                                event: "searchButtonClick",
                                data: a,
                              },
                            }),
                            m
                              .push(
                                "/launch/search/"
                                  .concat(o, "-to-")
                                  .concat(i, "?journeyDate=")
                                  .concat(e)
                              )
                              .then(function (e) {
                                return e;
                              });
                        } else w.ZP.error("Please select journey date!");
                      else w.ZP.error("Please select destination station!");
                    else w.ZP.error("Please select departure station!");
                  },
                  type: "submit",
                  className: "btn btn-primary capitalize px-5 fw-bold",
                  children: "search ship",
                }),
              }),
            ],
          });
        };
    },
  },
]);
