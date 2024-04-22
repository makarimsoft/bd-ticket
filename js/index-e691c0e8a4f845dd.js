(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(90906);
        },
      ]);
    },
    90906: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return re;
          },
          default: function () {
            return oe;
          },
        });
      var a = t(828),
        i = t(85893),
        n = t(11163),
        l = t(67294),
        r = t(83540),
        o = t(33841),
        c = t(81335),
        d = t(38500),
        u = t(46934),
        m = t(6252),
        h = t(45447),
        p = t(39223),
        v = t(26019),
        x = t(13448),
        f = t(75487),
        g = t(28954),
        j = t(49077),
        _ = t(93608),
        b = t(26042),
        N = t(69396),
        y = t(29815),
        w = t(22321),
        k = t(82739),
        S = t(11382),
        Z = t(25743),
        C = t(35117),
        T = t(23279),
        A = t.n(T),
        B = (t(55062), t(30381)),
        P = t.n(B),
        L = Z.Z.RangePicker,
        O = [
          {
            id: "63e0b8a91414d30f30e01349",
            extIdList: [{ idVal: 9 }],
            name: "Chittagong",
          },
          {
            id: "63e0b8a91414d30f30e01346",
            extIdList: [{ idVal: 6 }],
            name: "Cox's Bazar",
          },
          {
            id: "63e0b8a91414d30f30e0134f",
            extIdList: [{ idVal: 22 }],
            name: "Saint Martin Island",
          },
          {
            id: "63e0b8a91414d30f30e01350",
            extIdList: [{ idVal: 23 }],
            name: "Sajek Valley",
          },
          {
            id: "63e0b8a91414d30f30e01351",
            extIdList: [{ idVal: 24 }],
            name: "Sylhet",
          },
        ],
        R = function (e) {
          var s = e.setSearchPayload,
            t = e.searchPayload,
            n = (0, l.useState)(!1),
            r = n[0],
            d = n[1],
            u = (0, l.useState)(!1),
            m = u[0],
            h = u[1],
            p = (0, a.Z)(l.useState(null), 2),
            v = p[0],
            x = p[1],
            f = (0, a.Z)(l.useState(null), 2),
            g = f[0],
            j = f[1],
            _ = (0, a.Z)(l.useState(null), 2),
            Z = _[0],
            T = _[1],
            B = (0, a.Z)(l.useState(null), 2),
            R = B[0],
            H = B[1],
            D = (0, a.Z)((0, o.Z)(c.d.HotelSearchParams, null), 1)[0],
            I = (0, a.Z)(l.useState({ adults: 1, child: 0, noOfRoom: 1 }), 2),
            F = I[0],
            M = I[1],
            E = (0, a.Z)(l.useState([]), 2),
            z = E[0],
            W = E[1],
            K = (0, k.Z)(),
            U = (0, k.Z)(),
            G = (0, l.useRef)(null),
            V = (0, C.wP)(),
            q = V.getLocationMutate,
            Y = V.isLoading,
            Q = l.useMemo(
              function () {
                return F.adults + F.child;
              },
              [F]
            );
          (0, l.useEffect)(function () {
            T(O);
          }, []),
            (0, l.useEffect)(
              function () {
                D &&
                  (D.locationName && H(D.locationName),
                  D.checkInDate &&
                    D.checkOutDate &&
                    (x(P()(D.checkInDate)), j(P()(D.checkOutDate))),
                  s(
                    (0, N.Z)((0, b.Z)({}, t), {
                      destination: D.locationName,
                      locationId: D.locationId,
                      checkIn: D.checkInDate,
                      checkOut: D.checkOutDate,
                    })
                  ));
              },
              [D]
            );
          var X = function (e) {
            "from" === e ? d(!0) : "traveller" === e && h(!0);
          };
          (0, w.t)(K, function () {
            d(!1);
          }),
            (0, w.t)(U, function () {
              h(!1);
            });
          var J = function (e, a) {
              var i = (0, b.Z)({}, F);
              if ("add" === a) i[e] = i[e] + 1;
              else if ("sub" === a) {
                if ("adults" === e && 1 === i[e]) return;
                if ("child" === e && 0 === i[e]) return;
                if ("noOfRoom" === e && 1 === i[e]) return;
                i[e] = i[e] - 1;
              }
              s((0, N.Z)((0, b.Z)({}, t), { guests: i })),
                M(i),
                $(z, i.child, "child");
            },
            $ = function (e, a, i) {
              if (e.length < a) {
                var n = (0, y.Z)(e),
                  l = a - n.length;
                (n = (0, y.Z)(n).concat((0, y.Z)(Array(l).fill(null)))),
                  "child" === i && W(n);
              }
              if (e.length > a) {
                var r = (0, y.Z)(e),
                  o = r.length - a;
                (r = r.slice(0, r.length - o)),
                  "child" === i &&
                    (W(r), s((0, N.Z)((0, b.Z)({}, t), { childAges: r })));
              }
            },
            ee = (0, l.useCallback)(
              A()(function (e) {
                var s = e.target.value;
                s.length > 2
                  ? q(s, {
                      onSuccess: function (e) {
                        var s;
                        (null === (s = e.data) || void 0 === s
                          ? void 0
                          : s.data) && T(e.data.data.content);
                      },
                    })
                  : 0 === s.length && T(O);
              }, 1e3),
              []
            ),
            se = Array.from({ length: F.child }, function (e, a) {
              return (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)(
                  "li",
                  {
                    children: [
                      (0, i.jsxs)("label", {
                        htmlFor: "number-of-child",
                        style: { fontWeight: "bold" },
                        children: ["Child ", a + 1, " Age"],
                      }),
                      (0, i.jsxs)("select", {
                        onChange: function (e) {
                          return (function (e, a) {
                            var i = e.target.value,
                              n = (0, y.Z)(z);
                            if ("Please select" === i)
                              return (
                                (n[a] = null),
                                W(n),
                                void s(
                                  (0, N.Z)((0, b.Z)({}, t), { childAges: n })
                                )
                              );
                            (n[a] = i),
                              W(n),
                              s((0, N.Z)((0, b.Z)({}, t), { childAges: n }));
                          })(e, a);
                        },
                        name: "number-of-child",
                        id: "number-of-child",
                        children: [
                          (0, i.jsx)("option", {
                            value: null,
                            children: "Please select",
                          }),
                          (0, i.jsx)("option", {
                            value: 2,
                            children: "2 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 3,
                            children: "3 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 4,
                            children: "4 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 5,
                            children: "5 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 6,
                            children: "6 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 7,
                            children: "7 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 8,
                            children: "8 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 9,
                            children: "9 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 10,
                            children: "10 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 11,
                            children: "11 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 12,
                            children: "12 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 13,
                            children: "13 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 14,
                            children: "14 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 15,
                            children: "15 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 16,
                            children: "16 years old",
                          }),
                          (0, i.jsx)("option", {
                            value: 17,
                            children: "17 years old",
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                ),
              });
            });
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: "bdt-search-form",
              children: [
                (0, i.jsx)("div", {
                  className: "bdt-input-wrapper bdt-input-group has-btn-swipe",
                  style: { background: "white" },
                  children: (0, i.jsxs)("div", {
                    className: "bdt-input bdt-has-dropdown ".concat(
                      r && "dropdown-active"
                    ),
                    children: [
                      (0, i.jsxs)("div", {
                        onClick: function () {
                          return X("from");
                        },
                        ref: K,
                        children: [
                          (0, i.jsx)("span", {
                            className: "bdt-input-label",
                            children: "Destination",
                          }),
                          (0, i.jsx)("span", {
                            className: "bdt-input-value",
                            children: R || "Please select",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "bdt-dropdown bdt-dropdown-search",
                        ref: K,
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
                                    return d(!1);
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
                                  ref: G,
                                  placeholder: "Search by city or place",
                                  onChange: ee,
                                }),
                                (0, i.jsx)("button", {
                                  onClick: function () {
                                    G.current && ((G.current.value = ""), T(O));
                                  },
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
                              children: Y
                                ? (0, i.jsx)(S.Z, {
                                    style: {
                                      display: "flex",
                                      justifyContent: "center",
                                      paddingTop: "10px",
                                    },
                                  })
                                : null === Z || void 0 === Z
                                ? void 0
                                : Z.map(function (e) {
                                    return (0, i.jsx)(
                                      "li",
                                      {
                                        onClick: function () {
                                          var a, i, n;
                                          return (
                                            (i = e.name),
                                            (n =
                                              null === (a = e.extIdList) ||
                                              void 0 === a
                                                ? void 0
                                                : a[0].idVal),
                                            d(!1),
                                            H(i),
                                            void s(
                                              (0, N.Z)((0, b.Z)({}, t), {
                                                destination: i,
                                                locationId: n,
                                              })
                                            )
                                          );
                                        },
                                        style: {
                                          backgroundColor:
                                            R === e.name &&
                                            "".concat("#E30B13", "40"),
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
                }),
                (0, i.jsx)("div", {
                  className:
                    "bdt-input-wrapper bdt-input-group bdt-date-picker-hotel has-promo-text bdt-input-lg",
                  children: (0, i.jsx)(L, {
                    placeholder: ["Select date", "Select date"],
                    onChange: function (e) {
                      if (!e) return x(null), void j(null);
                      x(e[0]),
                        j(e[1]),
                        s(
                          (0, N.Z)((0, b.Z)({}, t), {
                            checkIn: e[0],
                            checkOut: e[1],
                          })
                        );
                    },
                    value: [v, g],
                    format: "DD MMM'YY",
                    disabledDate: function (e) {
                      return e && e < P()().startOf("day");
                    },
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "bdt-input-wrapper",
                  children: (0, i.jsxs)("div", {
                    className: "bdt-input bdt-has-dropdown ".concat(
                      m && "dropdown-active",
                      " bdt-input-md"
                    ),
                    style: { background: "white" },
                    children: [
                      (0, i.jsxs)("div", {
                        onClick: function () {
                          return X("traveller");
                        },
                        ref: U,
                        children: [
                          (0, i.jsx)("span", {
                            className: "bdt-input-label",
                            children: "Guests/Rooms",
                          }),
                          (0, i.jsx)("span", {
                            className: "bdt-input-value",
                            children: ""
                              .concat(Q, " Guest(S), ")
                              .concat(F.noOfRoom, " Room(S)"),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "bdt-dropdown cursor-auto h-auto",
                        children: [
                          (0, i.jsxs)("div", {
                            ref: U,
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "bdt-dropdown-header header-small-devices",
                                children: (0, i.jsx)("div", {
                                  className: "small-devices-heading",
                                  children: "Edit Guests/Rooms",
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "bdt-dropdown-body",
                                children: (0, i.jsxs)("ul", {
                                  className: "bdt-travel-class",
                                  children: [
                                    (0, i.jsxs)("li", {
                                      children: [
                                        (0, i.jsxs)("div", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: "bdt-value",
                                              children: "Adults",
                                            }),
                                            " ",
                                            (0, i.jsx)("br", {}),
                                            (0, i.jsx)("small", {
                                              className: "bdt-extra-value",
                                              children: "12 years and above",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: "bdt-traveler-controls",
                                          children: [
                                            (0, i.jsx)("button", {
                                              onClick: function () {
                                                return J("adults", "sub");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children:
                                                1 ===
                                                (null === F || void 0 === F
                                                  ? void 0
                                                  : F.adults)
                                                  ? (0, i.jsx)("img", {
                                                      style: {
                                                        cursor: "not-allowed",
                                                      },
                                                      src: "/images/icon-svg/minus-disable.svg",
                                                      alt: "icon",
                                                    })
                                                  : (0, i.jsx)("img", {
                                                      src: "/images/icon-svg/minus.svg",
                                                      alt: "icon",
                                                    }),
                                            }),
                                            (0, i.jsx)("span", {
                                              children: F.adults,
                                            }),
                                            (0, i.jsx)("button", {
                                              onClick: function () {
                                                return J("adults", "add");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children: (0, i.jsx)("img", {
                                                src: "/images/icon-svg/plus.svg",
                                                alt: "icon",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("li", {
                                      className: "child",
                                      children: [
                                        (0, i.jsxs)("div", {
                                          className: "d-flex",
                                          children: [
                                            (0, i.jsxs)("div", {
                                              children: [
                                                (0, i.jsx)("span", {
                                                  className: "bdt-value",
                                                  children: "Children",
                                                }),
                                                " ",
                                                (0, i.jsx)("br", {}),
                                                (0, i.jsx)("small", {
                                                  className: "bdt-extra-value",
                                                  children: "2-11 years",
                                                }),
                                              ],
                                            }),
                                            (0, i.jsxs)("div", {
                                              className:
                                                "bdt-traveler-controls",
                                              children: [
                                                (0, i.jsx)("button", {
                                                  onClick: function () {
                                                    return J("child", "sub");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children:
                                                    0 ===
                                                    (null === F || void 0 === F
                                                      ? void 0
                                                      : F.child)
                                                      ? (0, i.jsx)("img", {
                                                          style: {
                                                            cursor:
                                                              "not-allowed",
                                                          },
                                                          src: "/images/icon-svg/minus-disable.svg",
                                                          alt: "icon",
                                                        })
                                                      : (0, i.jsx)("img", {
                                                          src: "/images/icon-svg/minus.svg",
                                                          alt: "icon",
                                                        }),
                                                }),
                                                (0, i.jsx)("span", {
                                                  children: F.child,
                                                }),
                                                (0, i.jsx)("button", {
                                                  onClick: function () {
                                                    return J("child", "add");
                                                  },
                                                  className:
                                                    "no-style text-primary",
                                                  children: (0, i.jsx)("img", {
                                                    src: "/images/icon-svg/plus.svg",
                                                    alt: "icon",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        F.child > 0 &&
                                          (0, i.jsxs)("div", {
                                            className: "bdt-select-wrapper",
                                            children: [
                                              (0, i.jsx)("ul", {
                                                className: "select-list",
                                                children: se,
                                              }),
                                              (null === z || void 0 === z
                                                ? void 0
                                                : z.includes(null)) &&
                                                (0, i.jsx)("small", {
                                                  className: "text-danger",
                                                  children:
                                                    "Please add child age",
                                                }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, i.jsxs)("li", {
                                      children: [
                                        (0, i.jsxs)("div", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: "bdt-value",
                                              children: "Number of Rooms",
                                            }),
                                            " ",
                                            (0, i.jsx)("br", {}),
                                          ],
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: "bdt-traveler-controls",
                                          children: [
                                            (0, i.jsx)("button", {
                                              onClick: function () {
                                                return J("noOfRoom", "sub");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children:
                                                1 ===
                                                (null === F || void 0 === F
                                                  ? void 0
                                                  : F.noOfRoom)
                                                  ? (0, i.jsx)("img", {
                                                      style: {
                                                        cursor: "not-allowed",
                                                      },
                                                      src: "/images/icon-svg/minus-disable.svg",
                                                      alt: "icon",
                                                    })
                                                  : (0, i.jsx)("img", {
                                                      src: "/images/icon-svg/minus.svg",
                                                      alt: "icon",
                                                    }),
                                            }),
                                            (0, i.jsx)("span", {
                                              children: F.noOfRoom,
                                            }),
                                            (0, i.jsx)("button", {
                                              onClick: function () {
                                                return J("noOfRoom", "add");
                                              },
                                              className:
                                                "no-style text-primary",
                                              children: (0, i.jsx)("img", {
                                                src: "/images/icon-svg/plus.svg",
                                                alt: "icon",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "bdt-dropdown-footer footer-small-devices",
                            children: (0, i.jsx)("button", {
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
        H = t(9307),
        D = t(12461),
        I = function () {
          var e = (0, l.useState)({
              guests: { adults: 1, child: 0, noOfRoom: 1 },
              childAges: [null],
            }),
            s = e[0],
            t = e[1],
            r = (0, a.Z)((0, o.Z)(c.d.HotelSearchParams, null), 2),
            d = (r[0], r[1]),
            u = (0, a.Z)((0, o.Z)(c.d.HotelCouponCode, null), 2),
            m = (u[0], u[1]),
            h = (0, n.useRouter)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(R, { searchPayload: s, setSearchPayload: t }),
              (0, i.jsx)("div", {
                className: "bdt-search-submit",
                children: (0, i.jsx)("button", {
                  onClick: function () {
                    var e,
                      t = (0, H.kC)(s.checkIn),
                      a = (0, H.kC)(s.checkOut),
                      i = null === s || void 0 === s ? void 0 : s.destination,
                      n = null === s || void 0 === s ? void 0 : s.locationId,
                      l = null === s || void 0 === s ? void 0 : s.guests;
                    i
                      ? t && a
                        ? (null === s || void 0 === s
                            ? void 0
                            : s.guests.child) > 0 &&
                          (null === s ||
                          void 0 === s ||
                          null === (e = s.childAges) ||
                          void 0 === e
                            ? void 0
                            : e.includes(null))
                          ? D.ZP.error("Please select all child ages!")
                          : (d({
                              locationId: n,
                              locationName: i,
                              checkInDate: t,
                              checkOutDate: a,
                              guests: l,
                              sortBy: "POPULARITY",
                              orderBy: "DESC",
                              offset: 0,
                              limit: 10,
                            }),
                            m(null),
                            h.push("/hotel/search-result"))
                        : D.ZP.error("Please select check in/check out date!")
                      : D.ZP.error("Please select a destination!");
                  },
                  type: "submit",
                  className: "btn btn-primary capitalize px-5 fw-bold",
                  children: "search Hotel",
                }),
              }),
            ],
          });
        },
        F = function (e) {
          var s = e.handleTabSelect,
            t = e.tabSelect,
            a = e.handleSelectedStations,
            n = e.selectedFromOutside,
            l = e.selectedToOutside,
            r = e.handleTripType,
            o = e.selectedTripType,
            c = e.fromStations,
            d = e.tree,
            u = e.stationsResLaunch,
            m = e.treeResLaunch,
            h = e.handleSelectedStationsBus,
            p = e.selectedTrendingFrom,
            v = e.selectedTrendingTo;
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: "bdt-search bdt-search-selected-".concat(
                t.toLowerCase()
              ),
              children: (0, i.jsxs)("div", {
                className: "bdt-search-inner",
                style: { marginTop: "50px" },
                children: [
                  (0, i.jsxs)("ul", {
                    className: "bdt-search-types",
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsxs)("button", {
                          style: { fontWeight: "bold" },
                          className: "Bus" === t ? "active" : void 0,
                          onClick: function () {
                            return s("Bus");
                          },
                          children: [
                            (0, i.jsx)("img", {
                              src: "/images/icon-svg/bus.svg",
                              alt: "icon",
                            }),
                            "BUS",
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsxs)("button", {
                          style: { fontWeight: "bold" },
                          className: "Air" === t ? "active" : void 0,
                          onClick: function () {
                            return s("Air");
                          },
                          children: [
                            (0, i.jsx)("img", {
                              src: "/images/icon-svg/air.svg",
                              alt: "icon",
                            }),
                            "AIR",
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsxs)("button", {
                          style: { fontWeight: "bold" },
                          className: "Launch" === t ? "active" : void 0,
                          onClick: function () {
                            return s("Launch");
                          },
                          children: [
                            (0, i.jsx)("img", {
                              src: "/images/icon-svg/launch.svg",
                              alt: "icon",
                            }),
                            "SHIP",
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsxs)("button", {
                          style: { fontWeight: "bold" },
                          className: "Hotel" === t ? "active" : void 0,
                          onClick: function () {
                            return s("Hotel");
                          },
                          children: [
                            (0, i.jsx)("img", {
                              src: "/images/icon-svg/hotel-alt-5.svg",
                              alt: "icon",
                            }),
                            "HOTEL",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "bdt-search-wrapper",
                    children: [
                      "Bus" === t &&
                        (0, i.jsx)(j.Z, {
                          selectedTrendingFrom: p,
                          selectedTrendingTo: v,
                          handleSelectedStationsBus: h,
                          fromStations: c,
                          tree: d,
                          isNotLanding: !1,
                        }),
                      "Launch" === t &&
                        (0, i.jsx)(_.Z, { fromStations: u, tree: m }),
                      "Air" === t &&
                        (0, i.jsx)(g.Z, {
                          selectedFromOutside: n,
                          selectedToOutside: l,
                          handleSelectedStations: a,
                          handleTripType: r,
                          selectedTripType: o,
                        }),
                      "Hotel" === t && (0, i.jsx)(I, {}),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        M = t(85434),
        E = t(20949),
        z = t(57536),
        W = t(46066),
        K = (t(98745), t(98322), t(80495)),
        U = t.n(K),
        G = t(94192),
        V = t.n(G),
        q = t(24958),
        Y = t(48460),
        Q = t.n(Y),
        X = function (e) {
          var s = e.targetDate,
            t = function () {
              var e = +s - +new Date(),
                t = { days: 0, hours: 0, minutes: 0, seconds: 0 };
              return (
                e > 0 &&
                  (t = {
                    days: Math.floor(e / 864e5),
                    hours: Math.floor((e / 36e5) % 24),
                    minutes: Math.floor((e / 1e3 / 60) % 60),
                    seconds: Math.floor((e / 1e3) % 60),
                  }),
                t
              );
            },
            a = (0, l.useState)(t()),
            n = a[0],
            r = a[1];
          (0, l.useEffect)(
            function () {
              var e = setTimeout(function () {
                r(t());
              }, 1e3);
              return function () {
                return clearTimeout(e);
              };
            },
            [s, n]
          );
          var o = function (e) {
            return e < 10 ? "0".concat(e) : e.toString();
          };
          return (0, i.jsxs)("div", {
            className: Q().timer,
            children: [
              (0, i.jsxs)("div", {
                className: "".concat(Q().timerBox, " rounded"),
                children: [
                  (0, i.jsx)("div", {
                    className: "".concat(Q().number),
                    children: o(n.days),
                  }),
                  (0, i.jsx)("div", {
                    className: "".concat(Q().label),
                    children: "Days",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "".concat(Q().timerBox, " rounded"),
                children: [
                  (0, i.jsx)("div", {
                    className: "".concat(Q().number),
                    children: o(n.hours),
                  }),
                  (0, i.jsx)("div", {
                    className: "".concat(Q().label),
                    children: "Hrs",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "".concat(Q().timerBox, " rounded"),
                children: [
                  (0, i.jsx)("div", {
                    className: "".concat(Q().number),
                    children: o(n.minutes),
                  }),
                  (0, i.jsx)("div", {
                    className: "".concat(Q().label),
                    children: "Mins",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "".concat(Q().timerBox, " rounded"),
                children: [
                  (0, i.jsx)("div", {
                    className: "".concat(Q().number),
                    children: o(n.seconds),
                  }),
                  (0, i.jsx)("div", {
                    className: "".concat(Q().label),
                    children: "Secs",
                  }),
                ],
              }),
            ],
          });
        },
        J = function (e) {
          var s = e.promotionList,
            t = e.handleBook,
            a = (0, n.useRouter)(),
            l = (0, z.a)().isWidescreenAndUp,
            r = function (e) {
              a.push("/promotions/featured/".concat(e));
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: "section-md bg-white",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsxs)("div", {
                  className: "row gy-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-12 text-center",
                      children: (0, i.jsx)("h2", {
                        className: "mb-0",
                        children: "Flash Deals",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "col-12 pt-2",
                      children: (0, i.jsx)("div", {
                        className: "row gy-4",
                        children: (0, i.jsx)(
                          W.Z,
                          (0, N.Z)(
                            (0, b.Z)(
                              { className: "text-center" },
                              (function () {
                                var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {};
                                return (0, b.Z)(
                                  {
                                    slidesToShow: 3,
                                    nextArrow: (0, i.jsx)(E.F, {}),
                                    prevArrow: (0, i.jsx)(E.K, {}),
                                    arrows: l && !0,
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
                                null === s || void 0 === s
                                  ? void 0
                                  : s.map(function (e, s) {
                                      return (0, i.jsx)(
                                        "div",
                                        {
                                          className:
                                            "col-sm-6 col-xl-4 px-2 pb-2",
                                          children: (0, i.jsxs)("article", {
                                            className: ""
                                              .concat(V()["travel-card"], " ")
                                              .concat(V()["tour-item"]),
                                            style: {
                                              boxShadow:
                                                "0 1px 6px rgba(0,0,0,.2)",
                                            },
                                            children: [
                                              (0, i.jsx)("div", {
                                                className:
                                                  V()["travel-card-image"],
                                                children: (0, i.jsx)("a", {
                                                  onClick: function () {
                                                    return r(e.identifier);
                                                  },
                                                  children: (0, i.jsxs)("div", {
                                                    className:
                                                      V().imageContainer,
                                                    children: [
                                                      (0, i.jsx)("img", {
                                                        src: e.featuredImage,
                                                        alt: e.title,
                                                        className:
                                                          V().backgroundImage,
                                                      }),
                                                      (0, i.jsx)(X, {
                                                        targetDate: new Date(
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.expireDate
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              }),
                                              (0, i.jsx)("div", {
                                                onClick: function () {
                                                  return r(e.identifier);
                                                },
                                                className:
                                                  V()["travel-card-details"],
                                                style: { textAlign: "left" },
                                                children: (0, i.jsx)("h3", {
                                                  className: V().title,
                                                  children: (0, i.jsx)("a", {
                                                    children: e.title,
                                                  }),
                                                }),
                                              }),
                                              (0, i.jsxs)("div", {
                                                className:
                                                  U()["tour-item-bottom"],
                                                children: [
                                                  (0, q.dT)(
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.metaKeywords
                                                  ) &&
                                                    (0, i.jsx)("a", {
                                                      className: "".concat(
                                                        U().button,
                                                        " btn btn-primary"
                                                      ),
                                                      style: {
                                                        height: "40px",
                                                        padding: "10px 12px",
                                                      },
                                                      onClick: function () {
                                                        return t(e);
                                                      },
                                                      children: "Book Now",
                                                    }),
                                                  (0, i.jsxs)("div", {
                                                    children: [
                                                      (0, i.jsx)("p", {
                                                        children: (0, i.jsxs)(
                                                          "del",
                                                          {
                                                            children: [
                                                              "BDT ",
                                                              e.basePrice,
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, i.jsxs)("h4", {
                                                        className: "".concat(
                                                          U().h5,
                                                          " h5"
                                                        ),
                                                        children: [
                                                          "BDT ",
                                                          e.offerPrice,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        s
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
        },
        $ = t(63578),
        ee = t.n($),
        se = t(32504),
        te = [
          {
            image: "/images/hotels/sea_pearl.jpg",
            title: "Sea Pearl Beach Resort & Spa",
            discount: "63%",
            place: "Cox's Bazar",
            discountPrice: "\u09f318,000",
            price: "\u09f318,000",
            star: 5,
          },
          {
            image: "/images/hotels/hotel_agrabad.jpg",
            title: "Hotel Agrabad",
            discount: "75%",
            place: "Chittagong",
            discountPrice: "\u09f36,700",
            price: "\u09f322,280",
            star: 5,
          },
          {
            image: "/images/hotels/sand_castle_1.jpg",
            title: "Sand Castle Beach Resort",
            discount: "20%",
            place: "Saint Martin's Island",
            discountPrice: "\u09f311,200",
            price: "\u09f313,000",
            star: 4,
          },
        ];
      var ae = function () {
          var e = (0, z.a)().isWidescreenAndUp;
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: "section bg-white",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsxs)("div", {
                  className: "row gy-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "col-12",
                      children: (0, i.jsx)("div", {
                        className: ee()["section-title"] + " mb-0",
                        children: (0, i.jsx)("h2", {
                          className: "mb-0",
                          children: "Popular Hotels",
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "col-12 pt-2",
                      children: (0, i.jsx)(
                        W.Z,
                        (0, N.Z)(
                          (0, b.Z)(
                            { className: "mt-0 text-center" },
                            (function () {
                              var s =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return (0, b.Z)(
                                {
                                  centerMode: !1,
                                  rows: 1,
                                  slidesToShow: 3,
                                  arrows: e && !0,
                                  nextArrow: (0, i.jsx)(se.F, {}),
                                  prevArrow: (0, i.jsx)(se.K, {}),
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
                                        centerPadding: "0px",
                                      },
                                    },
                                  ],
                                },
                                s
                              );
                            })()
                          ),
                          {
                            lazyLoad: "ondemand",
                            children:
                              null === te || void 0 === te
                                ? void 0
                                : te.map(function (e, s) {
                                    return (0, i.jsx)(
                                      "div",
                                      {
                                        className:
                                          "col-sm-6 col-xl-4 px-2 pb-2",
                                        children: (0, i.jsxs)("article", {
                                          className: ee()["travel-card"],
                                          style: {
                                            boxShadow:
                                              "0 1px 6px rgba(0,0,0,.2)",
                                          },
                                          children: [
                                            (0, i.jsx)("div", {
                                              className:
                                                ee()["travel-card-image"],
                                              children: (0, i.jsx)("a", {
                                                children: (0, i.jsx)("img", {
                                                  src: e.image,
                                                  alt: e.title,
                                                }),
                                              }),
                                            }),
                                            (0, i.jsxs)("div", {
                                              className:
                                                ee()["travel-card-details"],
                                              style: { textAlign: "left" },
                                              children: [
                                                (0, i.jsx)("h3", {
                                                  className: ee().title,
                                                  children: (0, i.jsx)("a", {
                                                    children: e.title,
                                                  }),
                                                }),
                                                (0, i.jsx)("small", {
                                                  children: e.place,
                                                }),
                                                (0, i.jsxs)("div", {
                                                  style: {
                                                    color: "#34730f",
                                                    fontSize: "16px",
                                                  },
                                                  className: ee().price,
                                                  children: [
                                                    "Price starts from ",
                                                    e.discountPrice,
                                                    " ",
                                                  ],
                                                }),
                                                (0, i.jsx)("div", {
                                                  className: ee().rating,
                                                  children: Array.from(
                                                    { length: e.star },
                                                    function (e, s) {
                                                      return (0, i.jsx)(
                                                        "img",
                                                        {
                                                          style: {
                                                            display: "inline",
                                                          },
                                                          src: "./icons/star.svg",
                                                          className: "icon",
                                                          alt: "Image ".concat(
                                                            s
                                                          ),
                                                        },
                                                        s
                                                      );
                                                    }
                                                  ),
                                                }),
                                                (0, i.jsx)("span", {
                                                  className: ee().review,
                                                  style: {
                                                    fontSize: "14px",
                                                    fontWeight: "bold",
                                                  },
                                                  children: "(Refundable)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      s
                                    );
                                  }),
                          }
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        ie = t(67623),
        ne = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: "section-md",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsx)("div", {
                  className: "row",
                  children: (0, i.jsx)("div", {
                    className: "col-12 pt-5",
                    children: (0, i.jsxs)("div", {
                      className:
                        "row gy-4 justify-content-around align-items-center",
                      style: { marginBottom: "20px" },
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-sm-6 col-md-4 col-lg-4",
                          children: (0, i.jsx)("img", {
                            src: "/images/add-app-2.png",
                            alt: "playstore-preview",
                            className: "img-fluid",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "col-sm-12 col-md-6 col-lg-5",
                          children: [
                            (0, i.jsx)("h3", {
                              className: "capitalize h4 mb-4",
                              children:
                                "download Our App Instant Access via Google Play and Apple Store",
                            }),
                            (0, i.jsxs)("div", {
                              className: "row align-items-center",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "col-6",
                                  children: [
                                    (0, i.jsx)("a", {
                                      href: "/redirect-to-store",
                                      target: "_blank",
                                      className: "d-block mb-4",
                                      children: (0, i.jsx)("img", {
                                        src: "/images/playstore.png",
                                        className: "img-fluid",
                                        alt: "play-store",
                                      }),
                                    }),
                                    (0, i.jsx)("a", {
                                      href: "https://apps.apple.com/us/app/bdtickets/id1552613900",
                                      target: "_blank",
                                      className: "d-block",
                                      children: (0, i.jsx)("img", {
                                        src: "/images/appstore.png",
                                        className: "img-fluid",
                                        alt: "play-store",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("div", {
                                  className: "col-6",
                                  children: (0, i.jsx)("div", {
                                    className:
                                      "p-3 rounded-sm bdt-shadow-card bg-white",
                                    children: (0, i.jsx)("img", {
                                      src: "/images/qr-code-2.png",
                                      className: "img-fluid",
                                      alt: "qr-code",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        le = t(28164);
      var re = !0,
        oe = function (e) {
          var s,
            t = e.stations,
            g = e.tree,
            j = e.popularDestinations,
            _ = e.stationsAir,
            b = e.stationsResLaunch,
            N = e.treeResLaunch,
            y = e.promotionList,
            w = e.frequentRoutes,
            k = e.popularRoutes,
            S = (0, l.useState)("Bus"),
            Z = S[0],
            C = S[1],
            T = (0, l.useState)(null),
            A = T[0],
            B = T[1],
            P = (0, l.useState)(null),
            L = P[0],
            O = P[1],
            R = (0, l.useState)("ONEWAY"),
            H = R[0],
            D = R[1],
            I = (0, l.useState)(),
            E = I[0],
            W = I[1],
            K = (0, l.useState)(),
            U = K[0],
            G = K[1],
            V = (0, a.Z)((0, o.Z)(c.d.FromAirportStorage, null), 1)[0],
            Y = (0, a.Z)((0, o.Z)(c.d.ToAirportStorage, null), 1)[0],
            Q = (0, a.Z)((0, o.Z)(c.d.StationListAir, null), 2),
            X = Q[0],
            $ = Q[1],
            ee = (0, z.a)().isWidescreenAndUp,
            se = (0, p.Ah)(),
            te = (0, v._N)().extAuthMutate,
            re = (0, n.useRouter)(),
            oe = re.query,
            ce = re.replace,
            de = re.push,
            ue = oe.application,
            me = oe.key,
            he = oe.token;
          (0, l.useEffect)(
            function () {
              X || $(_);
            },
            [X]
          ),
            (0, l.useEffect)(
              function () {
                if (V) {
                  var e,
                    s =
                      null ===
                        (e =
                          null === V || void 0 === V
                            ? void 0
                            : V.split(" - ")) || void 0 === e
                        ? void 0
                        : e[1],
                    t =
                      null === _ || void 0 === _
                        ? void 0
                        : _.find(function (e) {
                            return e.code === s;
                          });
                  B({
                    name: null === t || void 0 === t ? void 0 : t.name,
                    code: null === t || void 0 === t ? void 0 : t.code,
                    airport:
                      null === t || void 0 === t ? void 0 : t.airportName,
                  });
                }
                if (Y) {
                  var a,
                    i =
                      null ===
                        (a =
                          null === Y || void 0 === Y
                            ? void 0
                            : Y.split(" - ")) || void 0 === a
                        ? void 0
                        : a[1],
                    n =
                      null === _ || void 0 === _
                        ? void 0
                        : _.find(function (e) {
                            return e.code === i;
                          });
                  O({ name: n.name, code: n.code, airport: n.airportName });
                }
              },
              [V, Y]
            ),
            (0, l.useEffect)(
              function () {
                me &&
                  he &&
                  te(
                    { token: he, userId: me },
                    {
                      onSuccess: function (e) {
                        var s = e.data;
                        (null === s || void 0 === s ? void 0 : s.data)
                          ? (fe(s),
                            ue !== d.Mx.Bus
                              ? ce({
                                  pathname:
                                    ue === d.Mx.Launch ? f.Z.Launch : f.Z.Air,
                                })
                              : ue === d.Mx.Bus && ce({ pathname: f.Z.Bus }),
                            localStorage.setItem(
                              c.d.Token,
                              JSON.stringify(s.data.access)
                            ))
                          : x.Z.open({
                              message: "Failed to login!",
                              duration: 3,
                              type: "error",
                            });
                      },
                    }
                  );
              },
              [me, he]
            );
          var pe = function (e) {
              W(null === e || void 0 === e ? void 0 : e.fromName),
                G(null === e || void 0 === e ? void 0 : e.toName),
                je("banner"),
                C("Bus");
            },
            ve = function (e) {
              B({ name: e.fromName, code: e.fromCode, airport: e.fromAirport }),
                O({ name: e.toName, code: e.toCode, airport: e.toAirport });
            },
            xe = function (e) {
              D(e);
            },
            fe = function (e) {
              var s = e.data.access,
                t = (0, m.T)(s.token);
              (0, u.B)(s.token),
                se({
                  type: h.I.LOGIN_SUCCESS,
                  payload: { access: s, user: t },
                });
            };
          (0, o.Z)(c.d.FromStationsBus, t), (0, o.Z)(c.d.TreeBus, g);
          var ge = function (e) {
              C(e);
            },
            je = function (e) {
              var s =
                document.getElementById(e).getBoundingClientRect().top +
                window.pageYOffset +
                -100;
              window.scrollTo({ top: s, behavior: "smooth" });
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("section", {
                className: "banner-mobile",
                children: [
                  (0, i.jsx)("div", {
                    className: "banner-mobile-overlay",
                    style: {
                      backgroundImage: "url('images/banner/banner-web.png')",
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: "container-fluid",
                    children: (0, i.jsx)("div", {
                      className: "row",
                      children: (0, i.jsx)("div", {
                        className: "col-12",
                        children: (0, i.jsxs)("ul", {
                          className: "bdt-search-types-mobile",
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsxs)("button", {
                                className: "btn",
                                onClick: function () {
                                  return ge("Bus");
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "images/icon-svg/bus-alt-copy.svg",
                                    alt: "",
                                  }),
                                  "Bus",
                                ],
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsxs)("button", {
                                className: "btn",
                                onClick: function () {
                                  return ge("Air");
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "images/icon-svg/air-alt-copy2.svg",
                                    alt: "",
                                  }),
                                  "Air",
                                ],
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsxs)("button", {
                                className: "btn",
                                onClick: function () {
                                  return ge("Launch");
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "images/icon-svg/launch-alt-copy2.svg",
                                    alt: "",
                                  }),
                                  "Ship",
                                ],
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsxs)("button", {
                                className: "btn",
                                onClick: function () {
                                  return ge("Hotel");
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "images/icon-svg/hotel-2-copy.svg",
                                    alt: "",
                                  }),
                                  "Hotel",
                                ],
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsxs)("button", {
                                className: "btn",
                                onClick: function () {
                                  return de("/promotions");
                                },
                                children: [
                                  (0, i.jsx)("img", {
                                    src: "images/icon-svg/offer-alt-copy2.svg",
                                    alt: "",
                                  }),
                                  "Deals",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              !ee &&
                (0, i.jsx)("div", {
                  id: "banner",
                  className: "banner-mobile color-scheme-secondary d-lg-none",
                  style: { paddingBottom: "16px" },
                  children: (0, i.jsx)(F, {
                    handleTabSelect: ge,
                    tabSelect: Z,
                    handleSelectedStationsBus: pe,
                    fromStations: t,
                    tree: g,
                    selectedTrendingFrom: E,
                    selectedTrendingTo: U,
                    stationsResLaunch: b,
                    treeResLaunch: N,
                    handleSelectedStations: ve,
                    selectedFromOutside: A,
                    selectedToOutside: L,
                    handleTripType: xe,
                    selectedTripType: H,
                  }),
                }),
              (0, i.jsx)("div", {
                id: "banner",
                className: "d-none d-lg-block",
                children: (0, i.jsx)(F, {
                  handleTabSelect: ge,
                  tabSelect: Z,
                  selectedTrendingFrom: E,
                  selectedTrendingTo: U,
                  handleSelectedStationsBus: pe,
                  fromStations: t,
                  tree: g,
                  stationsResLaunch: b,
                  treeResLaunch: N,
                  handleSelectedStations: ve,
                  selectedFromOutside: A,
                  selectedToOutside: L,
                  handleTripType: xe,
                  selectedTripType: H,
                }),
              }),
              (null === y ||
              void 0 === y ||
              null === (s = y.content) ||
              void 0 === s
                ? void 0
                : s.length) > 0 &&
                (0, i.jsx)(J, {
                  handleBook: function (e) {
                    var s = (0, q.dT)(
                      null === e || void 0 === e ? void 0 : e.metaKeywords
                    );
                    W(null === s || void 0 === s ? void 0 : s[0]),
                      G(null === s || void 0 === s ? void 0 : s[1]),
                      je("banner"),
                      C("Bus");
                  },
                  promotionList: y.content,
                }),
              (0, i.jsx)(ie.Z, {
                handleSelectedStationsBus: pe,
                popularDestinations: w,
              }),
              (0, i.jsx)(M.Z, {
                handleSelectedDestination: function (e) {
                  var s =
                      null === _ || void 0 === _
                        ? void 0
                        : _.find(function (s) {
                            return s.code === e.from;
                          }),
                    t =
                      null === _ || void 0 === _
                        ? void 0
                        : _.find(function (s) {
                            return s.code === e.to;
                          });
                  C("Air"),
                    D("ROUNDTRIP"),
                    B({ name: s.name, code: s.code, airport: s.airportName }),
                    O({ name: t.name, code: t.code, airport: t.airportName }),
                    je("banner");
                },
                popularDestinations: j,
              }),
              (0, i.jsx)(le.Z, { popularRoutes: k, islanding: !0 }),
              (0, i.jsx)(ae, {}),
              (0, i.jsx)(ne, {}),
              (0, i.jsx)(r.Z, {}),
            ],
          });
        };
    },
    48460: function (e) {
      e.exports = {
        timer: "timer_timer__YmZ_N",
        timerBox: "timer_timerBox__n9xeP",
        number: "timer_number__ieRvU",
        label: "timer_label__Wqq4P",
      };
    },
    94192: function (e) {
      e.exports = {
        "feature-banner": "offers_feature-banner__OahSA",
        "feature-slider": "offers_feature-slider__y4TFo",
        "slick-slide": "offers_slick-slide__Pyo7j",
        "slick-arrow": "offers_slick-arrow__5m_hP",
        "slick-prev": "offers_slick-prev__FNAlh",
        "slick-next": "offers_slick-next__oKyAC",
        "section-title": "offers_section-title__QHg1S",
        "slider-sm": "offers_slider-sm__1UaeD",
        block: "offers_block__3DQU_",
        "text-block": "offers_text-block__KF1sz",
        swiper: "offers_swiper__J4RyZ",
        "swiper-wrapper": "offers_swiper-wrapper__Bc3Cl",
        "slider-image": "offers_slider-image__FKFD7",
        "swiper-navigation": "offers_swiper-navigation__NQO3E",
        "travel-card": "offers_travel-card__Cm3p1",
        "travel-card-image": "offers_travel-card-image__Hew2_",
        offer: "offers_offer__KTSJp",
        "travel-card-details": "offers_travel-card-details__S9e_R",
        title: "offers_title__ffxiu",
        price: "offers_price__eQAN7",
        rating: "offers_rating__X48Gj",
        review: "offers_review__ynL5e",
        "tour-item": "offers_tour-item__owjE5",
        "tour-item-content": "offers_tour-item-content__iSAu9",
        h5: "offers_h5__ybRhC",
        button: "offers_button__T7DTX",
        "badge-event": "offers_badge-event__6JmLk",
        "tour-item-category": "offers_tour-item-category__KVgBZ",
        "tour-item-bottom": "offers_tour-item-bottom__7KfSA",
        outline: "offers_outline__CDRTr",
        imageContainer: "offers_imageContainer__C_xvW",
        backgroundImage: "offers_backgroundImage__8uv8t",
      };
    },
    63578: function (e) {
      e.exports = {
        "feature-banner": "popularHotels_feature-banner__VzCaD",
        "feature-slider": "popularHotels_feature-slider__vfriW",
        "slick-slide": "popularHotels_slick-slide__gmRcd",
        "slick-arrow": "popularHotels_slick-arrow__GbQix",
        "slick-prev": "popularHotels_slick-prev__DMX0a",
        "slick-next": "popularHotels_slick-next__OLXvu",
        "section-title": "popularHotels_section-title__kuQbQ",
        "slider-sm": "popularHotels_slider-sm__HuCnO",
        block: "popularHotels_block__qTi_w",
        "text-block": "popularHotels_text-block__jFrx4",
        swiper: "popularHotels_swiper__GDqcd",
        "swiper-wrapper": "popularHotels_swiper-wrapper__HcbvX",
        "slider-image": "popularHotels_slider-image__0Op2g",
        "swiper-navigation": "popularHotels_swiper-navigation__93KQ6",
        "travel-card": "popularHotels_travel-card__fh0o5",
        "travel-card-image": "popularHotels_travel-card-image__H76nX",
        offer: "popularHotels_offer__yEGZ7",
        "travel-card-details": "popularHotels_travel-card-details__CGq9m",
        title: "popularHotels_title__p0ZEr",
        price: "popularHotels_price__I1AaZ",
        rating: "popularHotels_rating__3zdVM",
        review: "popularHotels_review__LYh0C",
      };
    },
    80495: function (e) {
      e.exports = {
        "tour-item": "allPackages_tour-item__owhBz",
        "tour-item-content": "allPackages_tour-item-content___YgA1",
        h5: "allPackages_h5__jYceU",
        btn: "allPackages_btn__OZijU",
        "badge-event": "allPackages_badge-event__OgEAO",
        "tour-item-category": "allPackages_tour-item-category__AEn9e",
        "tour-item-bottom": "allPackages_tour-item-bottom__S6ixV",
        outline: "allPackages_outline__3FrKO",
      };
    },
  },
  function (e) {
    e.O(0, [5743, 7842, 7323, 612, 3608, 4696, 9774, 2888, 179], function () {
      return (s = 48312), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
