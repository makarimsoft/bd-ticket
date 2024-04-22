"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5743],
  {
    20841: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(1413),
        a = t(67294),
        o = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z",
                },
              },
            ],
          },
          name: "calendar",
          theme: "outlined",
        },
        c = t(42135),
        l = function (e, n) {
          return a.createElement(
            c.Z,
            (0, r.Z)((0, r.Z)({}, e), {}, { ref: n, icon: o })
          );
        };
      l.displayName = "CalendarOutlined";
      var u = a.forwardRef(l);
    },
    25743: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Yn;
        },
      });
      var r = t(30381),
        a = t.n(r),
        o = t(80334),
        c = {
          getNow: function () {
            return a()();
          },
          getFixedDate: function (e) {
            return a()(e, "YYYY-MM-DD");
          },
          getEndDate: function (e) {
            return e.clone().endOf("month");
          },
          getWeekDay: function (e) {
            var n = e.clone().locale("en_US");
            return n.weekday() + n.localeData().firstDayOfWeek();
          },
          getYear: function (e) {
            return e.year();
          },
          getMonth: function (e) {
            return e.month();
          },
          getDate: function (e) {
            return e.date();
          },
          getHour: function (e) {
            return e.hour();
          },
          getMinute: function (e) {
            return e.minute();
          },
          getSecond: function (e) {
            return e.second();
          },
          addYear: function (e, n) {
            return e.clone().add(n, "year");
          },
          addMonth: function (e, n) {
            return e.clone().add(n, "month");
          },
          addDate: function (e, n) {
            return e.clone().add(n, "day");
          },
          setYear: function (e, n) {
            return e.clone().year(n);
          },
          setMonth: function (e, n) {
            return e.clone().month(n);
          },
          setDate: function (e, n) {
            return e.clone().date(n);
          },
          setHour: function (e, n) {
            return e.clone().hour(n);
          },
          setMinute: function (e, n) {
            return e.clone().minute(n);
          },
          setSecond: function (e, n) {
            return e.clone().second(n);
          },
          isAfter: function (e, n) {
            return e.isAfter(n);
          },
          isValidate: function (e) {
            return e.isValid();
          },
          locale: {
            getWeekFirstDay: function (e) {
              return a()().locale(e).localeData().firstDayOfWeek();
            },
            getWeekFirstDate: function (e, n) {
              return n.clone().locale(e).weekday(0);
            },
            getWeek: function (e, n) {
              return n.clone().locale(e).week();
            },
            getShortWeekDays: function (e) {
              return a()().locale(e).localeData().weekdaysMin();
            },
            getShortMonths: function (e) {
              return a()().locale(e).localeData().monthsShort();
            },
            format: function (e, n, t) {
              return n.clone().locale(e).format(t);
            },
            parse: function (e, n, t) {
              for (var r = [], c = 0; c < t.length; c += 1) {
                var l = t[c],
                  u = n;
                if (l.includes("wo") || l.includes("Wo")) {
                  var i = (l = l.replace(/wo/g, "w").replace(/Wo/g, "W")).match(
                      /[-YyMmDdHhSsWwGg]+/g
                    ),
                    s = u.match(/[-\d]+/g);
                  i && s
                    ? ((l = i.join("")), (u = s.join("")))
                    : r.push(l.replace(/o/g, ""));
                }
                var f = a()(u, l, e, !0);
                if (f.isValid()) return f;
              }
              for (var d = 0; d < r.length; d += 1) {
                var v = a()(n, r[d], e, !1);
                if (v.isValid())
                  return (
                    (0, o.ET)(
                      !1,
                      "Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this."
                    ),
                    v
                  );
              }
              return null;
            },
          },
        },
        l = t(87462),
        u = t(93355),
        i = t(67294),
        s = t(71577);
      var f = t(20550);
      var d = t(4942),
        v = t(20841),
        m = t(1413),
        p = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z",
                },
              },
            ],
          },
          name: "clock-circle",
          theme: "outlined",
        },
        g = t(42135),
        h = function (e, n) {
          return i.createElement(
            g.Z,
            (0, m.Z)((0, m.Z)({}, e), {}, { ref: n, icon: p })
          );
        };
      h.displayName = "ClockCircleOutlined";
      var C = i.forwardRef(h),
        b = t(4340),
        Z = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z",
                },
              },
            ],
          },
          name: "swap-right",
          theme: "outlined",
        },
        w = function (e, n) {
          return i.createElement(
            g.Z,
            (0, m.Z)((0, m.Z)({}, e), {}, { ref: n, icon: Z })
          );
        };
      w.displayName = "SwapRightOutlined";
      var y = i.forwardRef(w),
        k = t(93967),
        E = t.n(k),
        D = t(15671),
        N = t(43144),
        x = t(60136),
        P = t(73568),
        M = t(97685),
        R = t(21770),
        S = t(71002),
        Y = t(15105),
        O = i.createContext({}),
        V = { visibility: "hidden" };
      var T = function (e) {
        var n = e.prefixCls,
          t = e.prevIcon,
          r = void 0 === t ? "\u2039" : t,
          a = e.nextIcon,
          o = void 0 === a ? "\u203a" : a,
          c = e.superPrevIcon,
          l = void 0 === c ? "\xab" : c,
          u = e.superNextIcon,
          s = void 0 === u ? "\xbb" : u,
          f = e.onSuperPrev,
          d = e.onSuperNext,
          v = e.onPrev,
          m = e.onNext,
          p = e.children,
          g = i.useContext(O),
          h = g.hideNextBtn,
          C = g.hidePrevBtn;
        return i.createElement(
          "div",
          { className: n },
          f &&
            i.createElement(
              "button",
              {
                type: "button",
                onClick: f,
                tabIndex: -1,
                className: "".concat(n, "-super-prev-btn"),
                style: C ? V : {},
              },
              l
            ),
          v &&
            i.createElement(
              "button",
              {
                type: "button",
                onClick: v,
                tabIndex: -1,
                className: "".concat(n, "-prev-btn"),
                style: C ? V : {},
              },
              r
            ),
          i.createElement("div", { className: "".concat(n, "-view") }, p),
          m &&
            i.createElement(
              "button",
              {
                type: "button",
                onClick: m,
                tabIndex: -1,
                className: "".concat(n, "-next-btn"),
                style: h ? V : {},
              },
              o
            ),
          d &&
            i.createElement(
              "button",
              {
                type: "button",
                onClick: d,
                tabIndex: -1,
                className: "".concat(n, "-super-next-btn"),
                style: h ? V : {},
              },
              s
            )
        );
      };
      var L = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.viewDate,
          a = e.onPrevDecades,
          o = e.onNextDecades;
        if (i.useContext(O).hideHeader) return null;
        var c = "".concat(n, "-header"),
          u = t.getYear(r),
          s = Math.floor(u / ne) * ne,
          f = s + ne - 1;
        return i.createElement(
          T,
          (0, l.Z)({}, e, { prefixCls: c, onSuperPrev: a, onSuperNext: o }),
          s,
          "-",
          f
        );
      };
      function H(e, n, t, r, a) {
        var o = e.setHour(n, t);
        return (o = e.setMinute(o, r)), (o = e.setSecond(o, a));
      }
      function I(e, n, t) {
        if (!t) return n;
        var r = n;
        return (
          (r = e.setHour(r, e.getHour(t))),
          (r = e.setMinute(r, e.getMinute(t))),
          (r = e.setSecond(r, e.getSecond(t)))
        );
      }
      function A(e, n) {
        var t = e.getYear(n),
          r = e.getMonth(n) + 1,
          a = e.getEndDate(e.getFixedDate("".concat(t, "-").concat(r, "-01"))),
          o = e.getDate(a),
          c = r < 10 ? "0".concat(r) : "".concat(r);
        return "".concat(t, "-").concat(c, "-").concat(o);
      }
      function F(e) {
        for (
          var n = e.prefixCls,
            t = e.disabledDate,
            r = e.onSelect,
            a = e.picker,
            o = e.rowNum,
            c = e.colNum,
            l = e.prefixColumn,
            u = e.rowClassName,
            s = e.baseDate,
            f = e.getCellClassName,
            v = e.getCellText,
            p = e.getCellNode,
            g = e.getCellDate,
            h = e.generateConfig,
            C = e.titleCell,
            b = e.headerCells,
            Z = i.useContext(O),
            w = Z.onDateMouseEnter,
            y = Z.onDateMouseLeave,
            k = Z.mode,
            D = "".concat(n, "-cell"),
            N = [],
            x = 0;
          x < o;
          x += 1
        ) {
          for (
            var P = [],
              M = void 0,
              R = function () {
                var e,
                  n = g(s, x * c + S),
                  o = pe({
                    cellDate: n,
                    mode: k,
                    disabledDate: t,
                    generateConfig: h,
                  });
                0 === S && ((M = n), l && P.push(l(M)));
                var u = C && C(n);
                P.push(
                  i.createElement(
                    "td",
                    {
                      key: S,
                      title: u,
                      className: E()(
                        D,
                        (0, m.Z)(
                          ((e = {}),
                          (0, d.Z)(e, "".concat(D, "-disabled"), o),
                          (0, d.Z)(
                            e,
                            "".concat(D, "-start"),
                            1 === v(n) || ("year" === a && Number(u) % 10 === 0)
                          ),
                          (0, d.Z)(
                            e,
                            "".concat(D, "-end"),
                            u === A(h, n) ||
                              ("year" === a && Number(u) % 10 === 9)
                          ),
                          e),
                          f(n)
                        )
                      ),
                      onClick: function () {
                        o || r(n);
                      },
                      onMouseEnter: function () {
                        !o && w && w(n);
                      },
                      onMouseLeave: function () {
                        !o && y && y(n);
                      },
                    },
                    p
                      ? p(n)
                      : i.createElement(
                          "div",
                          { className: "".concat(D, "-inner") },
                          v(n)
                        )
                  )
                );
              },
              S = 0;
            S < c;
            S += 1
          )
            R();
          N.push(i.createElement("tr", { key: x, className: u && u(M) }, P));
        }
        return i.createElement(
          "div",
          { className: "".concat(n, "-body") },
          i.createElement(
            "table",
            { className: "".concat(n, "-content") },
            b && i.createElement("thead", null, i.createElement("tr", null, b)),
            i.createElement("tbody", null, N)
          )
        );
      }
      var W = function (e) {
          var n = ee - 1,
            t = e.prefixCls,
            r = e.viewDate,
            a = e.generateConfig,
            o = "".concat(t, "-cell"),
            c = a.getYear(r),
            u = Math.floor(c / ee) * ee,
            s = Math.floor(c / ne) * ne,
            f = s + ne - 1,
            v = a.setYear(r, s - Math.ceil((12 * ee - ne) / 2));
          return i.createElement(
            F,
            (0, l.Z)({}, e, {
              rowNum: 4,
              colNum: 3,
              baseDate: v,
              getCellText: function (e) {
                var t = a.getYear(e);
                return "".concat(t, "-").concat(t + n);
              },
              getCellClassName: function (e) {
                var t,
                  r = a.getYear(e),
                  c = r + n;
                return (
                  (t = {}),
                  (0, d.Z)(t, "".concat(o, "-in-view"), s <= r && c <= f),
                  (0, d.Z)(t, "".concat(o, "-selected"), r === u),
                  t
                );
              },
              getCellDate: function (e, n) {
                return a.addYear(e, n * ee);
              },
            })
          );
        },
        j = t(74902),
        K = t(75164),
        U = t(5110),
        B = new Map();
      function q(e, n, t) {
        if ((B.get(e) && cancelAnimationFrame(B.get(e)), t <= 0))
          B.set(
            e,
            requestAnimationFrame(function () {
              e.scrollTop = n;
            })
          );
        else {
          var r = ((n - e.scrollTop) / t) * 10;
          B.set(
            e,
            requestAnimationFrame(function () {
              (e.scrollTop += r), e.scrollTop !== n && q(e, n, t - 10);
            })
          );
        }
      }
      function z(e, n) {
        var t = n.onLeftRight,
          r = n.onCtrlLeftRight,
          a = n.onUpDown,
          o = n.onPageUpDown,
          c = n.onEnter,
          l = e.which,
          u = e.ctrlKey,
          i = e.metaKey;
        switch (l) {
          case Y.Z.LEFT:
            if (u || i) {
              if (r) return r(-1), !0;
            } else if (t) return t(-1), !0;
            break;
          case Y.Z.RIGHT:
            if (u || i) {
              if (r) return r(1), !0;
            } else if (t) return t(1), !0;
            break;
          case Y.Z.UP:
            if (a) return a(-1), !0;
            break;
          case Y.Z.DOWN:
            if (a) return a(1), !0;
            break;
          case Y.Z.PAGE_UP:
            if (o) return o(-1), !0;
            break;
          case Y.Z.PAGE_DOWN:
            if (o) return o(1), !0;
            break;
          case Y.Z.ENTER:
            if (c) return c(), !0;
        }
        return !1;
      }
      function _(e, n, t, r) {
        var a = e;
        if (!a)
          switch (n) {
            case "time":
              a = r ? "hh:mm:ss a" : "HH:mm:ss";
              break;
            case "week":
              a = "gggg-wo";
              break;
            case "month":
              a = "YYYY-MM";
              break;
            case "quarter":
              a = "YYYY-[Q]Q";
              break;
            case "year":
              a = "YYYY";
              break;
            default:
              a = t ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
          }
        return a;
      }
      function G(e, n, t) {
        var r = "time" === e ? 8 : 10,
          a = "function" === typeof n ? n(t.getNow()).length : n.length;
        return Math.max(r, a) + 2;
      }
      var Q = null,
        X = new Set();
      var $ = {
        year: function (e) {
          return "month" === e || "date" === e ? "year" : e;
        },
        month: function (e) {
          return "date" === e ? "month" : e;
        },
        quarter: function (e) {
          return "month" === e || "date" === e ? "quarter" : e;
        },
        week: function (e) {
          return "date" === e ? "week" : e;
        },
        time: null,
        date: null,
      };
      function J(e, n) {
        return e.some(function (e) {
          return e && e.contains(n);
        });
      }
      var ee = 10,
        ne = 10 * ee;
      var te = function (e) {
        var n = e.prefixCls,
          t = e.onViewDateChange,
          r = e.generateConfig,
          a = e.viewDate,
          o = e.operationRef,
          c = e.onSelect,
          u = e.onPanelChange,
          s = "".concat(n, "-decade-panel");
        o.current = {
          onKeyDown: function (e) {
            return z(e, {
              onLeftRight: function (e) {
                c(r.addYear(a, e * ee), "key");
              },
              onCtrlLeftRight: function (e) {
                c(r.addYear(a, e * ne), "key");
              },
              onUpDown: function (e) {
                c(r.addYear(a, e * ee * 3), "key");
              },
              onEnter: function () {
                u("year", a);
              },
            });
          },
        };
        var f = function (e) {
          var n = r.addYear(a, e * ne);
          t(n), u(null, n);
        };
        return i.createElement(
          "div",
          { className: s },
          i.createElement(
            L,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onPrevDecades: function () {
                f(-1);
              },
              onNextDecades: function () {
                f(1);
              },
            })
          ),
          i.createElement(
            W,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onSelect: function (e) {
                c(e, "mouse"), u("year", e);
              },
            })
          )
        );
      };
      function re(e, n) {
        return (!e && !n) || (!(!e || !n) && void 0);
      }
      function ae(e, n, t) {
        var r = re(n, t);
        return "boolean" === typeof r ? r : e.getYear(n) === e.getYear(t);
      }
      function oe(e, n) {
        return Math.floor(e.getMonth(n) / 3) + 1;
      }
      function ce(e, n, t) {
        var r = re(n, t);
        return "boolean" === typeof r
          ? r
          : ae(e, n, t) && oe(e, n) === oe(e, t);
      }
      function le(e, n, t) {
        var r = re(n, t);
        return "boolean" === typeof r
          ? r
          : ae(e, n, t) && e.getMonth(n) === e.getMonth(t);
      }
      function ue(e, n, t) {
        var r = re(n, t);
        return "boolean" === typeof r
          ? r
          : e.getYear(n) === e.getYear(t) &&
              e.getMonth(n) === e.getMonth(t) &&
              e.getDate(n) === e.getDate(t);
      }
      function ie(e, n, t, r) {
        var a = re(t, r);
        return "boolean" === typeof a
          ? a
          : ae(e, t, r) && e.locale.getWeek(n, t) === e.locale.getWeek(n, r);
      }
      function se(e, n, t) {
        return (
          ue(e, n, t) &&
          (function (e, n, t) {
            var r = re(n, t);
            return "boolean" === typeof r
              ? r
              : e.getHour(n) === e.getHour(t) &&
                  e.getMinute(n) === e.getMinute(t) &&
                  e.getSecond(n) === e.getSecond(t);
          })(e, n, t)
        );
      }
      function fe(e, n, t, r) {
        return (
          !!(n && t && r) &&
          !ue(e, n, r) &&
          !ue(e, t, r) &&
          e.isAfter(r, n) &&
          e.isAfter(t, r)
        );
      }
      function de(e, n, t) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        switch (n) {
          case "year":
            return t.addYear(e, 10 * r);
          case "quarter":
          case "month":
            return t.addYear(e, r);
          default:
            return t.addMonth(e, r);
        }
      }
      function ve(e, n) {
        var t = n.generateConfig,
          r = n.locale,
          a = n.format;
        return "function" === typeof a ? a(e) : t.locale.format(r.locale, e, a);
      }
      function me(e, n) {
        var t = n.generateConfig,
          r = n.locale,
          a = n.formatList;
        return e && "function" !== typeof a[0]
          ? t.locale.parse(r.locale, e, a)
          : null;
      }
      function pe(e) {
        var n = e.cellDate,
          t = e.mode,
          r = e.disabledDate,
          a = e.generateConfig;
        if (!r) return !1;
        var o = function (e, t, o) {
          for (var c = t; c <= o; ) {
            var l = void 0;
            switch (e) {
              case "date":
                if (((l = a.setDate(n, c)), !r(l))) return !1;
                break;
              case "month":
                if (
                  !pe({
                    cellDate: (l = a.setMonth(n, c)),
                    mode: "month",
                    generateConfig: a,
                    disabledDate: r,
                  })
                )
                  return !1;
                break;
              case "year":
                if (
                  !pe({
                    cellDate: (l = a.setYear(n, c)),
                    mode: "year",
                    generateConfig: a,
                    disabledDate: r,
                  })
                )
                  return !1;
            }
            c += 1;
          }
          return !0;
        };
        switch (t) {
          case "date":
          case "week":
            return r(n);
          case "month":
            return o("date", 1, a.getDate(a.getEndDate(n)));
          case "quarter":
            var c = 3 * Math.floor(a.getMonth(n) / 3);
            return o("month", c, c + 2);
          case "year":
            return o("month", 0, 11);
          case "decade":
            var l = a.getYear(n),
              u = Math.floor(l / ee) * ee;
            return o("year", u, u + ee - 1);
        }
      }
      var ge = function (e) {
          if (i.useContext(O).hideHeader) return null;
          var n = e.prefixCls,
            t = e.generateConfig,
            r = e.locale,
            a = e.value,
            o = e.format,
            c = "".concat(n, "-header");
          return i.createElement(
            T,
            { prefixCls: c },
            a ? ve(a, { locale: r, format: o, generateConfig: t }) : "\xa0"
          );
        },
        he = t(56982);
      function Ce(e, n) {
        for (
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "0",
            r = String(e);
          r.length < n;

        )
          r = "".concat(t).concat(e);
        return r;
      }
      function be(e) {
        return null === e || void 0 === e ? [] : Array.isArray(e) ? e : [e];
      }
      function Ze(e) {
        var n = {};
        return (
          Object.keys(e).forEach(function (t) {
            ("data-" !== t.substr(0, 5) &&
              "aria-" !== t.substr(0, 5) &&
              "role" !== t &&
              "name" !== t) ||
              "data-__" === t.substr(0, 7) ||
              (n[t] = e[t]);
          }),
          n
        );
      }
      function we(e, n) {
        return e ? e[n] : null;
      }
      function ye(e, n, t) {
        var r = [we(e, 0), we(e, 1)];
        return (
          (r[t] = "function" === typeof n ? n(r[t]) : n),
          r[0] || r[1] ? r : null
        );
      }
      var ke = function (e) {
        var n = e.prefixCls,
          t = e.units,
          r = e.onSelect,
          a = e.value,
          o = e.active,
          c = e.hideDisabledOptions,
          l = "".concat(n, "-cell"),
          u = i.useContext(O).open,
          s = (0, i.useRef)(null),
          f = (0, i.useRef)(new Map()),
          v = (0, i.useRef)();
        return (
          (0, i.useLayoutEffect)(
            function () {
              var e = f.current.get(a);
              e && !1 !== u && q(s.current, e.offsetTop, 120);
            },
            [a]
          ),
          (0, i.useLayoutEffect)(
            function () {
              if (u) {
                var e = f.current.get(a);
                e &&
                  (v.current = (function (e, n) {
                    var t;
                    return (
                      (function r() {
                        (0, U.Z)(e)
                          ? n()
                          : (t = (0, K.Z)(function () {
                              r();
                            }));
                      })(),
                      function () {
                        K.Z.cancel(t);
                      }
                    );
                  })(e, function () {
                    q(s.current, e.offsetTop, 0);
                  }));
              }
              return function () {
                var e;
                null === (e = v.current) || void 0 === e || e.call(v);
              };
            },
            [u]
          ),
          i.createElement(
            "ul",
            {
              className: E()(
                "".concat(n, "-column"),
                (0, d.Z)({}, "".concat(n, "-column-active"), o)
              ),
              ref: s,
              style: { position: "relative" },
            },
            t.map(function (e) {
              var n;
              return c && e.disabled
                ? null
                : i.createElement(
                    "li",
                    {
                      key: e.value,
                      ref: function (n) {
                        f.current.set(e.value, n);
                      },
                      className: E()(
                        l,
                        ((n = {}),
                        (0, d.Z)(n, "".concat(l, "-disabled"), e.disabled),
                        (0, d.Z)(n, "".concat(l, "-selected"), a === e.value),
                        n)
                      ),
                      onClick: function () {
                        e.disabled || r(e.value);
                      },
                    },
                    i.createElement(
                      "div",
                      { className: "".concat(l, "-inner") },
                      e.label
                    )
                  );
            })
          )
        );
      };
      function Ee(e, n) {
        if (e.length !== n.length) return !0;
        for (var t = 0; t < e.length; t += 1)
          if (e[t].disabled !== n[t].disabled) return !0;
        return !1;
      }
      function De(e, n, t, r) {
        for (var a = [], o = t >= 1 ? 0 | t : 1, c = e; c <= n; c += o)
          a.push({
            label: Ce(c, 2),
            value: c,
            disabled: (r || []).includes(c),
          });
        return a;
      }
      var Ne = function (e) {
        var n,
          t = e.generateConfig,
          r = e.prefixCls,
          a = e.operationRef,
          o = e.activeColumnIndex,
          c = e.value,
          l = e.showHour,
          u = e.showMinute,
          s = e.showSecond,
          f = e.use12Hours,
          d = e.hourStep,
          v = void 0 === d ? 1 : d,
          p = e.minuteStep,
          g = void 0 === p ? 1 : p,
          h = e.secondStep,
          C = void 0 === h ? 1 : h,
          b = e.disabledHours,
          Z = e.disabledMinutes,
          w = e.disabledSeconds,
          y = e.disabledTime,
          k = e.hideDisabledOptions,
          E = e.onSelect,
          D = [],
          N = "".concat(r, "-content"),
          x = "".concat(r, "-time-panel"),
          P = c ? t.getHour(c) : -1,
          R = P,
          S = c ? t.getMinute(c) : -1,
          Y = c ? t.getSecond(c) : -1,
          O = t.getNow(),
          V = i.useMemo(
            function () {
              if (y) {
                var e = y(O);
                return [e.disabledHours, e.disabledMinutes, e.disabledSeconds];
              }
              return [b, Z, w];
            },
            [b, Z, w, y, O]
          ),
          T = (0, M.Z)(V, 3),
          L = T[0],
          I = T[1],
          A = T[2],
          F = De(0, 23, v, L && L()),
          W = (0, he.Z)(
            function () {
              return F;
            },
            F,
            Ee
          );
        f && ((n = R >= 12), (R %= 12));
        var j = i.useMemo(
            function () {
              if (!f) return [!1, !1];
              var e = [!0, !0];
              return (
                W.forEach(function (n) {
                  var t = n.disabled,
                    r = n.value;
                  t || (r >= 12 ? (e[1] = !1) : (e[0] = !1));
                }),
                e
              );
            },
            [f, W]
          ),
          K = (0, M.Z)(j, 2),
          U = K[0],
          B = K[1],
          q = i.useMemo(
            function () {
              return f
                ? W.filter(
                    n
                      ? function (e) {
                          return e.value >= 12;
                        }
                      : function (e) {
                          return e.value < 12;
                        }
                  ).map(function (e) {
                    var n = e.value % 12,
                      t = 0 === n ? "12" : Ce(n, 2);
                    return (0,
                    m.Z)((0, m.Z)({}, e), {}, { label: t, value: n });
                  })
                : W;
            },
            [f, n, W]
          ),
          z = De(0, 59, g, I && I(P)),
          _ = De(0, 59, C, A && A(P, S)),
          G = (function (e) {
            var n = e.value,
              t = e.generateConfig,
              r = e.disabledMinutes,
              a = e.disabledSeconds,
              o = e.minutes,
              c = e.seconds,
              l = e.use12Hours;
            return function (e, u, i, s) {
              var f = n || t.getNow(),
                d = Math.max(0, u),
                v = Math.max(0, i),
                m = Math.max(0, s),
                p = r && r(d);
              if (null === p || void 0 === p ? void 0 : p.includes(v)) {
                var g = o.find(function (e) {
                  return !p.includes(e.value);
                });
                if (!g) return null;
                v = g.value;
              }
              var h = a && a(d, v);
              if (null === h || void 0 === h ? void 0 : h.includes(m)) {
                var C = c.find(function (e) {
                  return !h.includes(e.value);
                });
                if (!C) return null;
                m = C.value;
              }
              return H(t, f, l && e ? d + 12 : d, v, m);
            };
          })({
            value: c,
            generateConfig: t,
            disabledMinutes: I,
            disabledSeconds: A,
            minutes: z,
            seconds: _,
            use12Hours: f,
          });
        function Q(e, n, t, r, a) {
          !1 !== e &&
            D.push({
              node: i.cloneElement(n, {
                prefixCls: x,
                value: t,
                active: o === D.length,
                onSelect: a,
                units: r,
                hideDisabledOptions: k,
              }),
              onSelect: a,
              value: t,
              units: r,
            });
        }
        (a.current = {
          onUpDown: function (e) {
            var n = D[o];
            if (n)
              for (
                var t = n.units.findIndex(function (e) {
                    return e.value === n.value;
                  }),
                  r = n.units.length,
                  a = 1;
                a < r;
                a += 1
              ) {
                var c = n.units[(t + e * a + r) % r];
                if (!0 !== c.disabled) {
                  n.onSelect(c.value);
                  break;
                }
              }
          },
        }),
          Q(l, i.createElement(ke, { key: "hour" }), R, q, function (e) {
            E(G(n, e, S, Y), "mouse");
          }),
          Q(u, i.createElement(ke, { key: "minute" }), S, z, function (e) {
            E(G(n, R, e, Y), "mouse");
          }),
          Q(s, i.createElement(ke, { key: "second" }), Y, _, function (e) {
            E(G(n, R, S, e), "mouse");
          });
        var X = -1;
        return (
          "boolean" === typeof n && (X = n ? 1 : 0),
          Q(
            !0 === f,
            i.createElement(ke, { key: "12hours" }),
            X,
            [
              { label: "AM", value: 0, disabled: U },
              { label: "PM", value: 1, disabled: B },
            ],
            function (e) {
              E(G(!!e, R, S, Y), "mouse");
            }
          ),
          i.createElement(
            "div",
            { className: N },
            D.map(function (e) {
              return e.node;
            })
          )
        );
      };
      var xe = function (e) {
          var n = e.generateConfig,
            t = e.format,
            r = void 0 === t ? "HH:mm:ss" : t,
            a = e.prefixCls,
            o = e.active,
            c = e.operationRef,
            u = e.showHour,
            s = e.showMinute,
            f = e.showSecond,
            v = e.use12Hours,
            m = void 0 !== v && v,
            p = e.onSelect,
            g = e.value,
            h = "".concat(a, "-time-panel"),
            C = i.useRef(),
            b = i.useState(-1),
            Z = (0, M.Z)(b, 2),
            w = Z[0],
            y = Z[1],
            k = [u, s, f, m].filter(function (e) {
              return !1 !== e;
            }).length;
          return (
            (c.current = {
              onKeyDown: function (e) {
                return z(e, {
                  onLeftRight: function (e) {
                    y((w + e + k) % k);
                  },
                  onUpDown: function (e) {
                    -1 === w ? y(0) : C.current && C.current.onUpDown(e);
                  },
                  onEnter: function () {
                    p(g || n.getNow(), "key"), y(-1);
                  },
                });
              },
              onBlur: function () {
                y(-1);
              },
            }),
            i.createElement(
              "div",
              { className: E()(h, (0, d.Z)({}, "".concat(h, "-active"), o)) },
              i.createElement(ge, (0, l.Z)({}, e, { format: r, prefixCls: a })),
              i.createElement(
                Ne,
                (0, l.Z)({}, e, {
                  prefixCls: a,
                  activeColumnIndex: w,
                  operationRef: C,
                })
              )
            )
          );
        },
        Pe = i.createContext({});
      function Me(e) {
        var n = e.cellPrefixCls,
          t = e.generateConfig,
          r = e.rangedValue,
          a = e.hoverRangedValue,
          o = e.isInView,
          c = e.isSameCell,
          l = e.offsetCell,
          u = e.today,
          i = e.value;
        return function (e) {
          var s,
            f = l(e, -1),
            v = l(e, 1),
            m = we(r, 0),
            p = we(r, 1),
            g = we(a, 0),
            h = we(a, 1),
            C = fe(t, g, h, e);
          function b(e) {
            return c(m, e);
          }
          function Z(e) {
            return c(p, e);
          }
          var w = c(g, e),
            y = c(h, e),
            k = (C || y) && (!o(f) || Z(f)),
            E = (C || w) && (!o(v) || b(v));
          return (
            (s = {}),
            (0, d.Z)(s, "".concat(n, "-in-view"), o(e)),
            (0, d.Z)(s, "".concat(n, "-in-range"), fe(t, m, p, e)),
            (0, d.Z)(s, "".concat(n, "-range-start"), b(e)),
            (0, d.Z)(s, "".concat(n, "-range-end"), Z(e)),
            (0, d.Z)(s, "".concat(n, "-range-start-single"), b(e) && !p),
            (0, d.Z)(s, "".concat(n, "-range-end-single"), Z(e) && !m),
            (0, d.Z)(
              s,
              "".concat(n, "-range-start-near-hover"),
              b(e) && (c(f, g) || fe(t, g, h, f))
            ),
            (0, d.Z)(
              s,
              "".concat(n, "-range-end-near-hover"),
              Z(e) && (c(v, h) || fe(t, g, h, v))
            ),
            (0, d.Z)(s, "".concat(n, "-range-hover"), C),
            (0, d.Z)(s, "".concat(n, "-range-hover-start"), w),
            (0, d.Z)(s, "".concat(n, "-range-hover-end"), y),
            (0, d.Z)(s, "".concat(n, "-range-hover-edge-start"), k),
            (0, d.Z)(s, "".concat(n, "-range-hover-edge-end"), E),
            (0, d.Z)(
              s,
              "".concat(n, "-range-hover-edge-start-near-range"),
              k && c(f, p)
            ),
            (0, d.Z)(
              s,
              "".concat(n, "-range-hover-edge-end-near-range"),
              E && c(v, m)
            ),
            (0, d.Z)(s, "".concat(n, "-today"), c(u, e)),
            (0, d.Z)(s, "".concat(n, "-selected"), c(i, e)),
            s
          );
        };
      }
      var Re = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.prefixColumn,
          a = e.locale,
          o = e.rowCount,
          c = e.viewDate,
          u = e.value,
          s = e.dateRender,
          f = i.useContext(Pe),
          d = f.rangedValue,
          v = f.hoverRangedValue,
          m = (function (e, n, t) {
            var r = n.locale.getWeekFirstDay(e),
              a = n.setDate(t, 1),
              o = n.getWeekDay(a),
              c = n.addDate(a, r - o);
            return (
              n.getMonth(c) === n.getMonth(t) &&
                n.getDate(c) > 1 &&
                (c = n.addDate(c, -7)),
              c
            );
          })(a.locale, t, c),
          p = "".concat(n, "-cell"),
          g = t.locale.getWeekFirstDay(a.locale),
          h = t.getNow(),
          C = [],
          b =
            a.shortWeekDays ||
            (t.locale.getShortWeekDays
              ? t.locale.getShortWeekDays(a.locale)
              : []);
        r &&
          C.push(
            i.createElement("th", { key: "empty", "aria-label": "empty cell" })
          );
        for (var Z = 0; Z < 7; Z += 1)
          C.push(i.createElement("th", { key: Z }, b[(Z + g) % 7]));
        var w = Me({
            cellPrefixCls: p,
            today: h,
            value: u,
            generateConfig: t,
            rangedValue: r ? null : d,
            hoverRangedValue: r ? null : v,
            isSameCell: function (e, n) {
              return ue(t, e, n);
            },
            isInView: function (e) {
              return le(t, e, c);
            },
            offsetCell: function (e, n) {
              return t.addDate(e, n);
            },
          }),
          y = s
            ? function (e) {
                return s(e, h);
              }
            : void 0;
        return i.createElement(
          F,
          (0, l.Z)({}, e, {
            rowNum: o,
            colNum: 7,
            baseDate: m,
            getCellNode: y,
            getCellText: t.getDate,
            getCellClassName: w,
            getCellDate: t.addDate,
            titleCell: function (e) {
              return ve(e, {
                locale: a,
                format: "YYYY-MM-DD",
                generateConfig: t,
              });
            },
            headerCells: C,
          })
        );
      };
      var Se = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.locale,
          a = e.viewDate,
          o = e.onNextMonth,
          c = e.onPrevMonth,
          u = e.onNextYear,
          s = e.onPrevYear,
          f = e.onYearClick,
          d = e.onMonthClick;
        if (i.useContext(O).hideHeader) return null;
        var v = "".concat(n, "-header"),
          m =
            r.shortMonths ||
            (t.locale.getShortMonths ? t.locale.getShortMonths(r.locale) : []),
          p = t.getMonth(a),
          g = i.createElement(
            "button",
            {
              type: "button",
              key: "year",
              onClick: f,
              tabIndex: -1,
              className: "".concat(n, "-year-btn"),
            },
            ve(a, { locale: r, format: r.yearFormat, generateConfig: t })
          ),
          h = i.createElement(
            "button",
            {
              type: "button",
              key: "month",
              onClick: d,
              tabIndex: -1,
              className: "".concat(n, "-month-btn"),
            },
            r.monthFormat
              ? ve(a, { locale: r, format: r.monthFormat, generateConfig: t })
              : m[p]
          ),
          C = r.monthBeforeYear ? [h, g] : [g, h];
        return i.createElement(
          T,
          (0, l.Z)({}, e, {
            prefixCls: v,
            onSuperPrev: s,
            onPrev: c,
            onNext: o,
            onSuperNext: u,
          }),
          C
        );
      };
      var Ye = function (e) {
          var n = e.prefixCls,
            t = e.panelName,
            r = void 0 === t ? "date" : t,
            a = e.keyboardConfig,
            o = e.active,
            c = e.operationRef,
            u = e.generateConfig,
            s = e.value,
            f = e.viewDate,
            v = e.onViewDateChange,
            p = e.onPanelChange,
            g = e.onSelect,
            h = "".concat(n, "-").concat(r, "-panel");
          c.current = {
            onKeyDown: function (e) {
              return z(
                e,
                (0, m.Z)(
                  {
                    onLeftRight: function (e) {
                      g(u.addDate(s || f, e), "key");
                    },
                    onCtrlLeftRight: function (e) {
                      g(u.addYear(s || f, e), "key");
                    },
                    onUpDown: function (e) {
                      g(u.addDate(s || f, 7 * e), "key");
                    },
                    onPageUpDown: function (e) {
                      g(u.addMonth(s || f, e), "key");
                    },
                  },
                  a
                )
              );
            },
          };
          var C = function (e) {
              var n = u.addYear(f, e);
              v(n), p(null, n);
            },
            b = function (e) {
              var n = u.addMonth(f, e);
              v(n), p(null, n);
            };
          return i.createElement(
            "div",
            { className: E()(h, (0, d.Z)({}, "".concat(h, "-active"), o)) },
            i.createElement(
              Se,
              (0, l.Z)({}, e, {
                prefixCls: n,
                value: s,
                viewDate: f,
                onPrevYear: function () {
                  C(-1);
                },
                onNextYear: function () {
                  C(1);
                },
                onPrevMonth: function () {
                  b(-1);
                },
                onNextMonth: function () {
                  b(1);
                },
                onMonthClick: function () {
                  p("month", f);
                },
                onYearClick: function () {
                  p("year", f);
                },
              })
            ),
            i.createElement(
              Re,
              (0, l.Z)({}, e, {
                onSelect: function (e) {
                  return g(e, "mouse");
                },
                prefixCls: n,
                value: s,
                viewDate: f,
                rowCount: 6,
              })
            )
          );
        },
        Oe = (function () {
          for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return n;
        })("date", "time");
      var Ve = function (e) {
        var n = e.prefixCls,
          t = e.operationRef,
          r = e.generateConfig,
          a = e.value,
          o = e.defaultValue,
          c = e.disabledTime,
          u = e.showTime,
          s = e.onSelect,
          f = "".concat(n, "-datetime-panel"),
          v = i.useState(null),
          p = (0, M.Z)(v, 2),
          g = p[0],
          h = p[1],
          C = i.useRef({}),
          b = i.useRef({}),
          Z = "object" === (0, S.Z)(u) ? (0, m.Z)({}, u) : {},
          w = function (e) {
            b.current.onBlur && b.current.onBlur(e), h(null);
          };
        t.current = {
          onKeyDown: function (e) {
            if (e.which === Y.Z.TAB) {
              var n = (function (e) {
                var n = Oe.indexOf(g) + e;
                return Oe[n] || null;
              })(e.shiftKey ? -1 : 1);
              return h(n), n && e.preventDefault(), !0;
            }
            if (g) {
              var t = "date" === g ? C : b;
              return (
                t.current && t.current.onKeyDown && t.current.onKeyDown(e), !0
              );
            }
            return (
              !![Y.Z.LEFT, Y.Z.RIGHT, Y.Z.UP, Y.Z.DOWN].includes(e.which) &&
              (h("date"), !0)
            );
          },
          onBlur: w,
          onClose: w,
        };
        var y = function (e, n) {
            var t = e;
            "date" === n && !a && Z.defaultValue
              ? ((t = r.setHour(t, r.getHour(Z.defaultValue))),
                (t = r.setMinute(t, r.getMinute(Z.defaultValue))),
                (t = r.setSecond(t, r.getSecond(Z.defaultValue))))
              : "time" === n &&
                !a &&
                o &&
                ((t = r.setYear(t, r.getYear(o))),
                (t = r.setMonth(t, r.getMonth(o))),
                (t = r.setDate(t, r.getDate(o)))),
              s && s(t, "mouse");
          },
          k = c ? c(a || null) : {};
        return i.createElement(
          "div",
          { className: E()(f, (0, d.Z)({}, "".concat(f, "-active"), g)) },
          i.createElement(
            Ye,
            (0, l.Z)({}, e, {
              operationRef: C,
              active: "date" === g,
              onSelect: function (e) {
                y(
                  I(
                    r,
                    e,
                    a || "object" !== (0, S.Z)(u) ? null : u.defaultValue
                  ),
                  "date"
                );
              },
            })
          ),
          i.createElement(
            xe,
            (0, l.Z)({}, e, { format: void 0 }, Z, k, {
              disabledTime: null,
              defaultValue: void 0,
              operationRef: b,
              active: "time" === g,
              onSelect: function (e) {
                y(e, "time");
              },
            })
          )
        );
      };
      var Te = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.locale,
          a = e.value,
          o = "".concat(n, "-cell"),
          c = "".concat(n, "-week-panel-row");
        return i.createElement(
          Ye,
          (0, l.Z)({}, e, {
            panelName: "week",
            prefixColumn: function (e) {
              return i.createElement(
                "td",
                { key: "week", className: E()(o, "".concat(o, "-week")) },
                t.locale.getWeek(r.locale, e)
              );
            },
            rowClassName: function (e) {
              return E()(
                c,
                (0, d.Z)({}, "".concat(c, "-selected"), ie(t, r.locale, a, e))
              );
            },
            keyboardConfig: { onLeftRight: null },
          })
        );
      };
      var Le = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.locale,
          a = e.viewDate,
          o = e.onNextYear,
          c = e.onPrevYear,
          u = e.onYearClick;
        if (i.useContext(O).hideHeader) return null;
        var s = "".concat(n, "-header");
        return i.createElement(
          T,
          (0, l.Z)({}, e, { prefixCls: s, onSuperPrev: c, onSuperNext: o }),
          i.createElement(
            "button",
            {
              type: "button",
              onClick: u,
              className: "".concat(n, "-year-btn"),
            },
            ve(a, { locale: r, format: r.yearFormat, generateConfig: t })
          )
        );
      };
      var He = function (e) {
        var n = e.prefixCls,
          t = e.locale,
          r = e.value,
          a = e.viewDate,
          o = e.generateConfig,
          c = e.monthCellRender,
          u = i.useContext(Pe),
          s = u.rangedValue,
          f = u.hoverRangedValue,
          d = Me({
            cellPrefixCls: "".concat(n, "-cell"),
            value: r,
            generateConfig: o,
            rangedValue: s,
            hoverRangedValue: f,
            isSameCell: function (e, n) {
              return le(o, e, n);
            },
            isInView: function () {
              return !0;
            },
            offsetCell: function (e, n) {
              return o.addMonth(e, n);
            },
          }),
          v =
            t.shortMonths ||
            (o.locale.getShortMonths ? o.locale.getShortMonths(t.locale) : []),
          m = o.setMonth(a, 0),
          p = c
            ? function (e) {
                return c(e, t);
              }
            : void 0;
        return i.createElement(
          F,
          (0, l.Z)({}, e, {
            rowNum: 4,
            colNum: 3,
            baseDate: m,
            getCellNode: p,
            getCellText: function (e) {
              return t.monthFormat
                ? ve(e, { locale: t, format: t.monthFormat, generateConfig: o })
                : v[o.getMonth(e)];
            },
            getCellClassName: d,
            getCellDate: o.addMonth,
            titleCell: function (e) {
              return ve(e, { locale: t, format: "YYYY-MM", generateConfig: o });
            },
          })
        );
      };
      var Ie = function (e) {
        var n = e.prefixCls,
          t = e.operationRef,
          r = e.onViewDateChange,
          a = e.generateConfig,
          o = e.value,
          c = e.viewDate,
          u = e.onPanelChange,
          s = e.onSelect,
          f = "".concat(n, "-month-panel");
        t.current = {
          onKeyDown: function (e) {
            return z(e, {
              onLeftRight: function (e) {
                s(a.addMonth(o || c, e), "key");
              },
              onCtrlLeftRight: function (e) {
                s(a.addYear(o || c, e), "key");
              },
              onUpDown: function (e) {
                s(a.addMonth(o || c, 3 * e), "key");
              },
              onEnter: function () {
                u("date", o || c);
              },
            });
          },
        };
        var d = function (e) {
          var n = a.addYear(c, e);
          r(n), u(null, n);
        };
        return i.createElement(
          "div",
          { className: f },
          i.createElement(
            Le,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onPrevYear: function () {
                d(-1);
              },
              onNextYear: function () {
                d(1);
              },
              onYearClick: function () {
                u("year", c);
              },
            })
          ),
          i.createElement(
            He,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onSelect: function (e) {
                s(e, "mouse"), u("date", e);
              },
            })
          )
        );
      };
      var Ae = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.locale,
          a = e.viewDate,
          o = e.onNextYear,
          c = e.onPrevYear,
          u = e.onYearClick;
        if (i.useContext(O).hideHeader) return null;
        var s = "".concat(n, "-header");
        return i.createElement(
          T,
          (0, l.Z)({}, e, { prefixCls: s, onSuperPrev: c, onSuperNext: o }),
          i.createElement(
            "button",
            {
              type: "button",
              onClick: u,
              className: "".concat(n, "-year-btn"),
            },
            ve(a, { locale: r, format: r.yearFormat, generateConfig: t })
          )
        );
      };
      var Fe = function (e) {
        var n = e.prefixCls,
          t = e.locale,
          r = e.value,
          a = e.viewDate,
          o = e.generateConfig,
          c = i.useContext(Pe),
          u = c.rangedValue,
          s = c.hoverRangedValue,
          f = Me({
            cellPrefixCls: "".concat(n, "-cell"),
            value: r,
            generateConfig: o,
            rangedValue: u,
            hoverRangedValue: s,
            isSameCell: function (e, n) {
              return ce(o, e, n);
            },
            isInView: function () {
              return !0;
            },
            offsetCell: function (e, n) {
              return o.addMonth(e, 3 * n);
            },
          }),
          d = o.setDate(o.setMonth(a, 0), 1);
        return i.createElement(
          F,
          (0, l.Z)({}, e, {
            rowNum: 1,
            colNum: 4,
            baseDate: d,
            getCellText: function (e) {
              return ve(e, {
                locale: t,
                format: t.quarterFormat || "[Q]Q",
                generateConfig: o,
              });
            },
            getCellClassName: f,
            getCellDate: function (e, n) {
              return o.addMonth(e, 3 * n);
            },
            titleCell: function (e) {
              return ve(e, {
                locale: t,
                format: "YYYY-[Q]Q",
                generateConfig: o,
              });
            },
          })
        );
      };
      var We = function (e) {
        var n = e.prefixCls,
          t = e.operationRef,
          r = e.onViewDateChange,
          a = e.generateConfig,
          o = e.value,
          c = e.viewDate,
          u = e.onPanelChange,
          s = e.onSelect,
          f = "".concat(n, "-quarter-panel");
        t.current = {
          onKeyDown: function (e) {
            return z(e, {
              onLeftRight: function (e) {
                s(a.addMonth(o || c, 3 * e), "key");
              },
              onCtrlLeftRight: function (e) {
                s(a.addYear(o || c, e), "key");
              },
              onUpDown: function (e) {
                s(a.addYear(o || c, e), "key");
              },
            });
          },
        };
        var d = function (e) {
          var n = a.addYear(c, e);
          r(n), u(null, n);
        };
        return i.createElement(
          "div",
          { className: f },
          i.createElement(
            Ae,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onPrevYear: function () {
                d(-1);
              },
              onNextYear: function () {
                d(1);
              },
              onYearClick: function () {
                u("year", c);
              },
            })
          ),
          i.createElement(
            Fe,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onSelect: function (e) {
                s(e, "mouse");
              },
            })
          )
        );
      };
      var je = function (e) {
        var n = e.prefixCls,
          t = e.generateConfig,
          r = e.viewDate,
          a = e.onPrevDecade,
          o = e.onNextDecade,
          c = e.onDecadeClick;
        if (i.useContext(O).hideHeader) return null;
        var u = "".concat(n, "-header"),
          s = t.getYear(r),
          f = Math.floor(s / Ue) * Ue,
          d = f + Ue - 1;
        return i.createElement(
          T,
          (0, l.Z)({}, e, { prefixCls: u, onSuperPrev: a, onSuperNext: o }),
          i.createElement(
            "button",
            {
              type: "button",
              onClick: c,
              className: "".concat(n, "-decade-btn"),
            },
            f,
            "-",
            d
          )
        );
      };
      var Ke = function (e) {
          var n = e.prefixCls,
            t = e.value,
            r = e.viewDate,
            a = e.locale,
            o = e.generateConfig,
            c = i.useContext(Pe),
            u = c.rangedValue,
            s = c.hoverRangedValue,
            f = "".concat(n, "-cell"),
            d = o.getYear(r),
            v = Math.floor(d / Ue) * Ue,
            m = v + Ue - 1,
            p = o.setYear(r, v - Math.ceil((12 - Ue) / 2)),
            g = Me({
              cellPrefixCls: f,
              value: t,
              generateConfig: o,
              rangedValue: u,
              hoverRangedValue: s,
              isSameCell: function (e, n) {
                return ae(o, e, n);
              },
              isInView: function (e) {
                var n = o.getYear(e);
                return v <= n && n <= m;
              },
              offsetCell: function (e, n) {
                return o.addYear(e, n);
              },
            });
          return i.createElement(
            F,
            (0, l.Z)({}, e, {
              rowNum: 4,
              colNum: 3,
              baseDate: p,
              getCellText: o.getYear,
              getCellClassName: g,
              getCellDate: o.addYear,
              titleCell: function (e) {
                return ve(e, { locale: a, format: "YYYY", generateConfig: o });
              },
            })
          );
        },
        Ue = 10;
      var Be = function (e) {
        var n = e.prefixCls,
          t = e.operationRef,
          r = e.onViewDateChange,
          a = e.generateConfig,
          o = e.value,
          c = e.viewDate,
          u = e.sourceMode,
          s = e.onSelect,
          f = e.onPanelChange,
          d = "".concat(n, "-year-panel");
        t.current = {
          onKeyDown: function (e) {
            return z(e, {
              onLeftRight: function (e) {
                s(a.addYear(o || c, e), "key");
              },
              onCtrlLeftRight: function (e) {
                s(a.addYear(o || c, e * Ue), "key");
              },
              onUpDown: function (e) {
                s(a.addYear(o || c, 3 * e), "key");
              },
              onEnter: function () {
                f("date" === u ? "date" : "month", o || c);
              },
            });
          },
        };
        var v = function (e) {
          var n = a.addYear(c, 10 * e);
          r(n), f(null, n);
        };
        return i.createElement(
          "div",
          { className: d },
          i.createElement(
            je,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onPrevDecade: function () {
                v(-1);
              },
              onNextDecade: function () {
                v(1);
              },
              onDecadeClick: function () {
                f("decade", c);
              },
            })
          ),
          i.createElement(
            Ke,
            (0, l.Z)({}, e, {
              prefixCls: n,
              onSelect: function (e) {
                f("date" === u ? "date" : "month", e), s(e, "mouse");
              },
            })
          )
        );
      };
      function qe(e, n, t) {
        return t
          ? i.createElement(
              "div",
              { className: "".concat(e, "-footer-extra") },
              t(n)
            )
          : null;
      }
      function ze(e) {
        var n,
          t,
          r = e.prefixCls,
          a = e.rangeList,
          o = void 0 === a ? [] : a,
          c = e.components,
          l = void 0 === c ? {} : c,
          u = e.needConfirmButton,
          s = e.onNow,
          f = e.onOk,
          d = e.okDisabled,
          v = e.showNow,
          m = e.locale;
        if (o.length) {
          var p = l.rangeItem || "span";
          n = i.createElement(
            i.Fragment,
            null,
            o.map(function (e) {
              var n = e.label,
                t = e.onClick,
                a = e.onMouseEnter,
                o = e.onMouseLeave;
              return i.createElement(
                "li",
                { key: n, className: "".concat(r, "-preset") },
                i.createElement(
                  p,
                  { onClick: t, onMouseEnter: a, onMouseLeave: o },
                  n
                )
              );
            })
          );
        }
        if (u) {
          var g = l.button || "button";
          s &&
            !n &&
            !1 !== v &&
            (n = i.createElement(
              "li",
              { className: "".concat(r, "-now") },
              i.createElement(
                "a",
                { className: "".concat(r, "-now-btn"), onClick: s },
                m.now
              )
            )),
            (t =
              u &&
              i.createElement(
                "li",
                { className: "".concat(r, "-ok") },
                i.createElement(g, { disabled: d, onClick: f }, m.ok)
              ));
        }
        return n || t
          ? i.createElement("ul", { className: "".concat(r, "-ranges") }, n, t)
          : null;
      }
      var _e = ["date", "month"];
      var Ge = function (e) {
          var n,
            t = e.prefixCls,
            r = void 0 === t ? "rc-picker" : t,
            a = e.className,
            c = e.style,
            u = e.locale,
            s = e.generateConfig,
            f = e.value,
            v = e.defaultValue,
            p = e.pickerValue,
            g = e.defaultPickerValue,
            h = e.disabledDate,
            C = e.mode,
            b = e.picker,
            Z = void 0 === b ? "date" : b,
            w = e.tabIndex,
            y = void 0 === w ? 0 : w,
            k = e.showNow,
            D = e.showTime,
            N = e.showToday,
            x = e.renderExtraFooter,
            P = e.hideHeader,
            V = e.onSelect,
            T = e.onChange,
            L = e.onPanelChange,
            A = e.onMouseDown,
            F = e.onPickerValueChange,
            W = e.onOk,
            j = e.components,
            K = e.direction,
            U = e.hourStep,
            B = void 0 === U ? 1 : U,
            q = e.minuteStep,
            z = void 0 === q ? 1 : q,
            _ = e.secondStep,
            G = void 0 === _ ? 1 : _,
            Q = ("date" === Z && !!D) || "time" === Z,
            X = 24 % B === 0,
            J = 60 % z === 0,
            ee = 60 % G === 0,
            ne = i.useContext(O),
            re = ne.operationRef,
            ae = ne.panelRef,
            oe = ne.onSelect,
            ce = ne.hideRanges,
            le = ne.defaultOpenValue,
            ue = i.useContext(Pe),
            ie = ue.inRange,
            fe = ue.panelPosition,
            de = ue.rangedValue,
            ve = ue.hoverRangedValue,
            me = i.useRef({}),
            pe = i.useRef(!0),
            ge = (0, R.Z)(null, {
              value: f,
              defaultValue: v,
              postState: function (e) {
                return !e && le && "time" === Z ? le : e;
              },
            }),
            he = (0, M.Z)(ge, 2),
            Ce = he[0],
            be = he[1],
            Ze = (0, R.Z)(null, {
              value: p,
              defaultValue: g || Ce,
              postState: function (e) {
                var n = s.getNow();
                if (!e) return n;
                if (!Ce && D) {
                  var t = "object" === (0, S.Z)(D) ? D.defaultValue : v;
                  return I(s, Array.isArray(e) ? e[0] : e, t || n);
                }
                return Array.isArray(e) ? e[0] : e;
              },
            }),
            we = (0, M.Z)(Ze, 2),
            ye = we[0],
            ke = we[1],
            Ee = function (e) {
              ke(e), F && F(e);
            },
            De = function (e) {
              var n = $[Z];
              return n ? n(e) : e;
            },
            Ne = (0, R.Z)(
              function () {
                return "time" === Z ? "time" : De("date");
              },
              { value: C }
            ),
            Me = (0, M.Z)(Ne, 2),
            Re = Me[0],
            Se = Me[1];
          i.useEffect(
            function () {
              Se(Z);
            },
            [Z]
          );
          var Oe,
            Le = i.useState(function () {
              return Re;
            }),
            He = (0, M.Z)(Le, 2),
            Ae = He[0],
            Fe = He[1],
            je = function (e, n) {
              var t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              (Re === Z || t) &&
                (be(e),
                V && V(e),
                oe && oe(e, n),
                !T ||
                  se(s, e, Ce) ||
                  (null === h || void 0 === h ? void 0 : h(e)) ||
                  T(e));
            },
            Ke = function (e) {
              if (me.current && me.current.onKeyDown) {
                var n = !0,
                  t = e.which;
                if (
                  ([
                    Y.Z.LEFT,
                    Y.Z.RIGHT,
                    Y.Z.UP,
                    Y.Z.DOWN,
                    Y.Z.PAGE_UP,
                    Y.Z.PAGE_DOWN,
                    Y.Z.ENTER,
                  ].includes(t) &&
                    (e.preventDefault(),
                    t !== Y.Z.ENTER &&
                      0 === y &&
                      (n = (function (e) {
                        if (_e.includes(Re)) {
                          var n,
                            t,
                            r = "date" === Re;
                          switch (
                            ((t =
                              e === Y.Z.PAGE_UP || e === Y.Z.PAGE_DOWN
                                ? r
                                  ? s.addMonth
                                  : s.addYear
                                : r
                                ? s.addDate
                                : s.addMonth),
                            e)
                          ) {
                            case Y.Z.LEFT:
                            case Y.Z.PAGE_UP:
                              n = t(ye, -1);
                              break;
                            case Y.Z.RIGHT:
                            case Y.Z.PAGE_DOWN:
                              n = t(ye, 1);
                              break;
                            case Y.Z.UP:
                            case Y.Z.DOWN:
                              n = t(
                                ye,
                                Number(
                                  ""
                                    .concat(e === Y.Z.UP ? "-" : "")
                                    .concat(r ? 7 : 3)
                                )
                              );
                          }
                          if (n)
                            return !(null === h || void 0 === h
                              ? void 0
                              : h(n));
                        }
                        return !0;
                      })(t))),
                  n)
                )
                  return me.current.onKeyDown(e);
              }
              return (
                (0, o.ZP)(
                  !1,
                  "Panel not correct handle keyDown event. Please help to fire issue about this."
                ),
                !1
              );
            };
          re &&
            "right" !== fe &&
            (re.current = {
              onKeyDown: Ke,
              onClose: function () {
                me.current && me.current.onClose && me.current.onClose();
              },
            }),
            i.useEffect(
              function () {
                f && !pe.current && ke(f);
              },
              [f]
            ),
            i.useEffect(function () {
              pe.current = !1;
            }, []);
          var Ue,
            Ge,
            Qe,
            Xe = (0, m.Z)(
              (0, m.Z)({}, e),
              {},
              {
                operationRef: me,
                prefixCls: r,
                viewDate: ye,
                value: Ce,
                onViewDateChange: Ee,
                sourceMode: Ae,
                onPanelChange: function (e, n) {
                  var t = De(e || Re);
                  Fe(Re), Se(t), L && (Re !== t || se(s, ye, ye)) && L(n, t);
                },
                disabledDate: h,
              }
            );
          switch ((delete Xe.onChange, delete Xe.onSelect, Re)) {
            case "decade":
              Oe = i.createElement(
                te,
                (0, l.Z)({}, Xe, {
                  onSelect: function (e, n) {
                    Ee(e), je(e, n);
                  },
                })
              );
              break;
            case "year":
              Oe = i.createElement(
                Be,
                (0, l.Z)({}, Xe, {
                  onSelect: function (e, n) {
                    Ee(e), je(e, n);
                  },
                })
              );
              break;
            case "month":
              Oe = i.createElement(
                Ie,
                (0, l.Z)({}, Xe, {
                  onSelect: function (e, n) {
                    Ee(e), je(e, n);
                  },
                })
              );
              break;
            case "quarter":
              Oe = i.createElement(
                We,
                (0, l.Z)({}, Xe, {
                  onSelect: function (e, n) {
                    Ee(e), je(e, n);
                  },
                })
              );
              break;
            case "week":
              Oe = i.createElement(
                Te,
                (0, l.Z)({}, Xe, {
                  onSelect: function (e, n) {
                    Ee(e), je(e, n);
                  },
                })
              );
              break;
            case "time":
              delete Xe.showTime,
                (Oe = i.createElement(
                  xe,
                  (0, l.Z)({}, Xe, "object" === (0, S.Z)(D) ? D : null, {
                    onSelect: function (e, n) {
                      Ee(e), je(e, n);
                    },
                  })
                ));
              break;
            default:
              Oe = D
                ? i.createElement(
                    Ve,
                    (0, l.Z)({}, Xe, {
                      onSelect: function (e, n) {
                        Ee(e), je(e, n);
                      },
                    })
                  )
                : i.createElement(
                    Ye,
                    (0, l.Z)({}, Xe, {
                      onSelect: function (e, n) {
                        Ee(e), je(e, n);
                      },
                    })
                  );
          }
          if (
            (ce ||
              ((Ue = qe(r, Re, x)),
              (Ge = ze({
                prefixCls: r,
                components: j,
                needConfirmButton: Q,
                okDisabled: !Ce || (h && h(Ce)),
                locale: u,
                showNow: k,
                onNow:
                  Q &&
                  function () {
                    var e = s.getNow(),
                      n = (function (e, n, t, r, a, o) {
                        var c = Math.floor(e / r) * r;
                        if (c < e) return [c, 60 - a, 60 - o];
                        var l = Math.floor(n / a) * a;
                        return l < n
                          ? [c, l, 60 - o]
                          : [c, l, Math.floor(t / o) * o];
                      })(
                        s.getHour(e),
                        s.getMinute(e),
                        s.getSecond(e),
                        X ? B : 1,
                        J ? z : 1,
                        ee ? G : 1
                      ),
                      t = H(s, e, n[0], n[1], n[2]);
                    je(t, "submit");
                  },
                onOk: function () {
                  Ce && (je(Ce, "submit", !0), W && W(Ce));
                },
              }))),
            N && "date" === Re && "date" === Z && !D)
          ) {
            var $e = s.getNow(),
              Je = "".concat(r, "-today-btn"),
              en = h && h($e);
            Qe = i.createElement(
              "a",
              {
                className: E()(Je, en && "".concat(Je, "-disabled")),
                "aria-disabled": en,
                onClick: function () {
                  en || je($e, "mouse", !0);
                },
              },
              u.today
            );
          }
          return i.createElement(
            O.Provider,
            {
              value: (0, m.Z)(
                (0, m.Z)({}, ne),
                {},
                {
                  mode: Re,
                  hideHeader: "hideHeader" in e ? P : ne.hideHeader,
                  hidePrevBtn: ie && "right" === fe,
                  hideNextBtn: ie && "left" === fe,
                }
              ),
            },
            i.createElement(
              "div",
              {
                tabIndex: y,
                className: E()(
                  "".concat(r, "-panel"),
                  a,
                  ((n = {}),
                  (0, d.Z)(
                    n,
                    "".concat(r, "-panel-has-range"),
                    de && de[0] && de[1]
                  ),
                  (0, d.Z)(
                    n,
                    "".concat(r, "-panel-has-range-hover"),
                    ve && ve[0] && ve[1]
                  ),
                  (0, d.Z)(n, "".concat(r, "-panel-rtl"), "rtl" === K),
                  n)
                ),
                style: c,
                onKeyDown: Ke,
                onBlur: function (e) {
                  me.current && me.current.onBlur && me.current.onBlur(e);
                },
                onMouseDown: A,
                ref: ae,
              },
              Oe,
              Ue || Ge || Qe
                ? i.createElement(
                    "div",
                    { className: "".concat(r, "-footer") },
                    Ue,
                    Ge,
                    Qe
                  )
                : null
            )
          );
        },
        Qe = t(81263),
        Xe = {
          bottomLeft: {
            points: ["tl", "bl"],
            offset: [0, 4],
            overflow: { adjustX: 1, adjustY: 1 },
          },
          bottomRight: {
            points: ["tr", "br"],
            offset: [0, 4],
            overflow: { adjustX: 1, adjustY: 1 },
          },
          topLeft: {
            points: ["bl", "tl"],
            offset: [0, -4],
            overflow: { adjustX: 0, adjustY: 1 },
          },
          topRight: {
            points: ["br", "tr"],
            offset: [0, -4],
            overflow: { adjustX: 0, adjustY: 1 },
          },
        };
      var $e = function (e) {
        var n,
          t = e.prefixCls,
          r = e.popupElement,
          a = e.popupStyle,
          o = e.visible,
          c = e.dropdownClassName,
          l = e.dropdownAlign,
          u = e.transitionName,
          s = e.getPopupContainer,
          f = e.children,
          v = e.range,
          m = e.popupPlacement,
          p = e.direction,
          g = "".concat(t, "-dropdown");
        return i.createElement(
          Qe.Z,
          {
            showAction: [],
            hideAction: [],
            popupPlacement:
              void 0 !== m ? m : "rtl" === p ? "bottomRight" : "bottomLeft",
            builtinPlacements: Xe,
            prefixCls: g,
            popupTransitionName: u,
            popup: r,
            popupAlign: l,
            popupVisible: o,
            popupClassName: E()(
              c,
              ((n = {}),
              (0, d.Z)(n, "".concat(g, "-range"), v),
              (0, d.Z)(n, "".concat(g, "-rtl"), "rtl" === p),
              n)
            ),
            popupStyle: a,
            getPopupContainer: s,
          },
          f
        );
      };
      function Je(e) {
        var n = e.open,
          t = e.value,
          r = e.isClickOutside,
          a = e.triggerOpen,
          o = e.forwardKeyDown,
          c = e.onKeyDown,
          l = e.blurToCancel,
          u = e.onSubmit,
          s = e.onCancel,
          f = e.onFocus,
          d = e.onBlur,
          v = e.currentFocusedKey,
          m = e.key,
          p = void 0 === m ? "start" : m,
          g = (0, i.useState)(!1),
          h = (0, M.Z)(g, 2),
          C = h[0],
          b = h[1],
          Z = (0, i.useState)(!1),
          w = (0, M.Z)(Z, 2),
          y = w[0],
          k = w[1],
          E = (0, i.useRef)(),
          D = (0, i.useRef)(!1),
          N = (0, i.useRef)(!1),
          x = (0, i.useRef)(!1),
          P = {
            onMouseDown: function () {
              b(!0), a(!0);
            },
            onKeyDown: function (e) {
              if (
                (c(e, function () {
                  x.current = !0;
                }),
                !x.current)
              ) {
                switch (e.which) {
                  case Y.Z.ENTER:
                    return (
                      n ? !1 !== u() && b(!0) : a(!0), void e.preventDefault()
                    );
                  case Y.Z.TAB:
                    return void (C && n && !e.shiftKey
                      ? (b(!1), e.preventDefault())
                      : !C &&
                        n &&
                        !o(e) &&
                        e.shiftKey &&
                        (b(!0), e.preventDefault()));
                  case Y.Z.ESC:
                    return b(!0), void s();
                }
                n || [Y.Z.SHIFT].includes(e.which) ? C || o(e) : a(!0);
              }
            },
            onFocus: function (e) {
              b(!0),
                k(!0),
                v && (v.current = p),
                clearTimeout(E.current),
                f && f(e);
            },
            onBlur: function (e) {
              !D.current && r(document.activeElement)
                ? (l
                    ? setTimeout(function () {
                        for (
                          var e = document.activeElement;
                          e && e.shadowRoot;

                        )
                          e = e.shadowRoot.activeElement;
                        r(e) && s();
                      }, 0)
                    : n && (a(!1), N.current && u()),
                  k(!1),
                  v
                    ? ((v.current = ""),
                      (E.current = setTimeout(function () {
                        v.current || null === d || void 0 === d || d(e);
                      }, 100)))
                    : null === d || void 0 === d || d(e))
                : (D.current = !1);
            },
          };
        return (
          (0, i.useEffect)(
            function () {
              N.current = !1;
            },
            [n]
          ),
          (0, i.useEffect)(
            function () {
              N.current = !0;
            },
            [t]
          ),
          (0, i.useEffect)(function () {
            return (
              (e = function (e) {
                var t = (function (e) {
                    var n,
                      t = e.target;
                    return (
                      (e.composed &&
                        t.shadowRoot &&
                        (null === (n = e.composedPath) || void 0 === n
                          ? void 0
                          : n.call(e)[0])) ||
                      t
                    );
                  })(e),
                  o = r(t);
                n
                  ? o
                    ? (y && !o) || a(!1)
                    : ((D.current = !0),
                      requestAnimationFrame(function () {
                        D.current = !1;
                      }))
                  : y && !o && (D.current = !0);
              }),
              !Q &&
                "undefined" !== typeof window &&
                window.addEventListener &&
                ((Q = function (e) {
                  (0, j.Z)(X).forEach(function (n) {
                    n(e);
                  });
                }),
                window.addEventListener("mousedown", Q)),
              X.add(e),
              function () {
                X.delete(e),
                  0 === X.size &&
                    (window.removeEventListener("mousedown", Q), (Q = null));
              }
            );
            var e;
          }),
          (0, i.useEffect)(function () {
            return function () {
              return clearTimeout(E.current);
            };
          }, []),
          [P, { focused: y, typing: C }]
        );
      }
      function en(e) {
        var n = e.valueTexts,
          t = e.onTextChange,
          r = i.useState(""),
          a = (0, M.Z)(r, 2),
          o = a[0],
          c = a[1],
          l = i.useRef([]);
        function u() {
          c(l.current[0]);
        }
        return (
          (l.current = n),
          i.useEffect(
            function () {
              n.every(function (e) {
                return e !== o;
              }) && u();
            },
            [n.join("||")]
          ),
          [
            o,
            function (e) {
              c(e), t(e);
            },
            u,
          ]
        );
      }
      var nn = t(91881);
      function tn(e, n) {
        var t = n.formatList,
          r = n.generateConfig,
          a = n.locale;
        return (0, he.Z)(
          function () {
            if (!e) return [[""], ""];
            for (var n = "", o = [], c = 0; c < t.length; c += 1) {
              var l = t[c],
                u = ve(e, { generateConfig: r, locale: a, format: l });
              o.push(u), 0 === c && (n = u);
            }
            return [o, n];
          },
          [e, t, a],
          function (e, n) {
            return (
              !se(r, e[0], n[0]) ||
              !(0, nn.Z)(e[1], n[1], !0) ||
              !(0, nn.Z)(e[2], n[2], !0)
            );
          }
        );
      }
      function rn(e, n) {
        var t = n.formatList,
          r = n.generateConfig,
          a = n.locale,
          o = (0, i.useState)(null),
          c = (0, M.Z)(o, 2),
          l = c[0],
          u = c[1],
          s = (0, i.useRef)(null);
        function f(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          cancelAnimationFrame(s.current),
            n
              ? u(e)
              : (s.current = requestAnimationFrame(function () {
                  u(e);
                }));
        }
        var d = tn(l, { formatList: t, generateConfig: r, locale: a }),
          v = (0, M.Z)(d, 2)[1];
        function m() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          f(null, e);
        }
        return (
          (0, i.useEffect)(
            function () {
              m(!0);
            },
            [e]
          ),
          (0, i.useEffect)(function () {
            return function () {
              return cancelAnimationFrame(s.current);
            };
          }, []),
          [
            v,
            function (e) {
              f(e);
            },
            m,
          ]
        );
      }
      function an(e) {
        var n,
          t = e.prefixCls,
          r = void 0 === t ? "rc-picker" : t,
          a = e.id,
          c = e.tabIndex,
          u = e.style,
          s = e.className,
          f = e.dropdownClassName,
          v = e.dropdownAlign,
          p = e.popupStyle,
          g = e.transitionName,
          h = e.generateConfig,
          C = e.locale,
          b = e.inputReadOnly,
          Z = e.allowClear,
          w = e.autoFocus,
          y = e.showTime,
          k = e.picker,
          D = void 0 === k ? "date" : k,
          N = e.format,
          x = e.use12Hours,
          P = e.value,
          S = e.defaultValue,
          Y = e.open,
          V = e.defaultOpen,
          T = e.defaultOpenValue,
          L = e.suffixIcon,
          H = e.clearIcon,
          I = e.disabled,
          A = e.disabledDate,
          F = e.placeholder,
          W = e.getPopupContainer,
          j = e.pickerRef,
          K = e.panelRender,
          U = e.onChange,
          B = e.onOpenChange,
          q = e.onFocus,
          z = e.onBlur,
          Q = e.onMouseDown,
          X = e.onMouseUp,
          $ = e.onMouseEnter,
          ee = e.onMouseLeave,
          ne = e.onContextMenu,
          te = e.onClick,
          re = e.onKeyDown,
          ae = e.onSelect,
          oe = e.direction,
          ce = e.autoComplete,
          le = void 0 === ce ? "off" : ce,
          ue = e.inputRender,
          ie = i.useRef(null),
          fe = ("date" === D && !!y) || "time" === D;
        var de = be(_(N, D, y, x)),
          pe = i.useRef(null),
          ge = i.useRef(null),
          he = i.useRef(null),
          Ce = (0, R.Z)(null, { value: P, defaultValue: S }),
          we = (0, M.Z)(Ce, 2),
          ye = we[0],
          ke = we[1],
          Ee = i.useState(ye),
          De = (0, M.Z)(Ee, 2),
          Ne = De[0],
          xe = De[1],
          Pe = i.useRef(null),
          Me = (0, R.Z)(!1, {
            value: Y,
            defaultValue: V,
            postState: function (e) {
              return !I && e;
            },
            onChange: function (e) {
              B && B(e),
                !e && Pe.current && Pe.current.onClose && Pe.current.onClose();
            },
          }),
          Re = (0, M.Z)(Me, 2),
          Se = Re[0],
          Ye = Re[1],
          Oe = tn(Ne, { formatList: de, generateConfig: h, locale: C }),
          Ve = (0, M.Z)(Oe, 2),
          Te = Ve[0],
          Le = Ve[1],
          He = en({
            valueTexts: Te,
            onTextChange: function (e) {
              var n = me(e, { locale: C, formatList: de, generateConfig: h });
              !n || (A && A(n)) || xe(n);
            },
          }),
          Ie = (0, M.Z)(He, 3),
          Ae = Ie[0],
          Fe = Ie[1],
          We = Ie[2],
          je = function (e) {
            xe(e),
              ke(e),
              U &&
                !se(h, ye, e) &&
                U(
                  e,
                  e
                    ? ve(e, { generateConfig: h, locale: C, format: de[0] })
                    : ""
                );
          },
          Ke = function (e) {
            (I && e) || Ye(e);
          },
          Ue = Je({
            blurToCancel: fe,
            open: Se,
            value: Ae,
            triggerOpen: Ke,
            forwardKeyDown: function (e) {
              return Se && Pe.current && Pe.current.onKeyDown
                ? Pe.current.onKeyDown(e)
                : ((0, o.ZP)(
                    !1,
                    "Picker not correct forward KeyDown operation. Please help to fire issue about this."
                  ),
                  !1);
            },
            isClickOutside: function (e) {
              return !J([pe.current, ge.current, he.current], e);
            },
            onSubmit: function () {
              return !(!Ne || (A && A(Ne))) && (je(Ne), Ke(!1), We(), !0);
            },
            onCancel: function () {
              Ke(!1), xe(ye), We();
            },
            onKeyDown: function (e, n) {
              null === re || void 0 === re || re(e, n);
            },
            onFocus: q,
            onBlur: z,
          }),
          Be = (0, M.Z)(Ue, 2),
          qe = Be[0],
          ze = Be[1],
          _e = ze.focused,
          Qe = ze.typing;
        i.useEffect(
          function () {
            Se ||
              (xe(ye), Te.length && "" !== Te[0] ? Le !== Ae && We() : Fe(""));
          },
          [Se, Te]
        ),
          i.useEffect(
            function () {
              Se || We();
            },
            [D]
          ),
          i.useEffect(
            function () {
              xe(ye);
            },
            [ye]
          ),
          j &&
            (j.current = {
              focus: function () {
                ie.current && ie.current.focus();
              },
              blur: function () {
                ie.current && ie.current.blur();
              },
            });
        var Xe = rn(Ae, { formatList: de, generateConfig: h, locale: C }),
          nn = (0, M.Z)(Xe, 3),
          an = nn[0],
          on = nn[1],
          cn = nn[2],
          ln = (0, m.Z)(
            (0, m.Z)({}, e),
            {},
            {
              className: void 0,
              style: void 0,
              pickerValue: void 0,
              onPickerValueChange: void 0,
              onChange: null,
            }
          ),
          un = i.createElement(
            Ge,
            (0, l.Z)({}, ln, {
              generateConfig: h,
              className: E()((0, d.Z)({}, "".concat(r, "-panel-focused"), !Qe)),
              value: Ne,
              locale: C,
              tabIndex: -1,
              onSelect: function (e) {
                null === ae || void 0 === ae || ae(e), xe(e);
              },
              direction: oe,
              onPanelChange: function (n, t) {
                var r = e.onPanelChange;
                cn(!0), null === r || void 0 === r || r(n, t);
              },
            })
          );
        K && (un = K(un));
        var sn,
          fn,
          dn = i.createElement(
            "div",
            {
              className: "".concat(r, "-panel-container"),
              onMouseDown: function (e) {
                e.preventDefault();
              },
            },
            un
          );
        L &&
          (sn = i.createElement(
            "span",
            { className: "".concat(r, "-suffix") },
            L
          )),
          Z &&
            ye &&
            !I &&
            (fn = i.createElement(
              "span",
              {
                onMouseDown: function (e) {
                  e.preventDefault(), e.stopPropagation();
                },
                onMouseUp: function (e) {
                  e.preventDefault(), e.stopPropagation(), je(null), Ke(!1);
                },
                className: "".concat(r, "-clear"),
                role: "button",
              },
              H ||
                i.createElement("span", {
                  className: "".concat(r, "-clear-btn"),
                })
            ));
        var vn = (0, m.Z)(
            (0, m.Z)(
              (0, m.Z)(
                {
                  id: a,
                  tabIndex: c,
                  disabled: I,
                  readOnly: b || "function" === typeof de[0] || !Qe,
                  value: an || Ae,
                  onChange: function (e) {
                    Fe(e.target.value);
                  },
                  autoFocus: w,
                  placeholder: F,
                  ref: ie,
                  title: Ae,
                },
                qe
              ),
              {},
              { size: G(D, de[0], h) },
              Ze(e)
            ),
            {},
            { autoComplete: le }
          ),
          mn = ue ? ue(vn) : i.createElement("input", vn);
        var pn = "rtl" === oe ? "bottomRight" : "bottomLeft";
        return i.createElement(
          O.Provider,
          {
            value: {
              operationRef: Pe,
              hideHeader: "time" === D,
              panelRef: pe,
              onSelect: function (e, n) {
                ("submit" === n || ("key" !== n && !fe)) && (je(e), Ke(!1));
              },
              open: Se,
              defaultOpenValue: T,
              onDateMouseEnter: on,
              onDateMouseLeave: cn,
            },
          },
          i.createElement(
            $e,
            {
              visible: Se,
              popupElement: dn,
              popupStyle: p,
              prefixCls: r,
              dropdownClassName: f,
              dropdownAlign: v,
              getPopupContainer: W,
              transitionName: g,
              popupPlacement: pn,
              direction: oe,
            },
            i.createElement(
              "div",
              {
                ref: he,
                className: E()(
                  r,
                  s,
                  ((n = {}),
                  (0, d.Z)(n, "".concat(r, "-disabled"), I),
                  (0, d.Z)(n, "".concat(r, "-focused"), _e),
                  (0, d.Z)(n, "".concat(r, "-rtl"), "rtl" === oe),
                  n)
                ),
                style: u,
                onMouseDown: Q,
                onMouseUp: X,
                onMouseEnter: $,
                onMouseLeave: ee,
                onContextMenu: ne,
                onClick: function () {
                  for (
                    var e = arguments.length, n = new Array(e), t = 0;
                    t < e;
                    t++
                  )
                    n[t] = arguments[t];
                  null === te || void 0 === te || te.apply(void 0, n),
                    ie.current && (ie.current.focus(), Ke(!0));
                },
              },
              i.createElement(
                "div",
                {
                  className: E()(
                    "".concat(r, "-input"),
                    (0, d.Z)({}, "".concat(r, "-input-placeholder"), !!an)
                  ),
                  ref: ge,
                },
                mn,
                sn,
                fn
              )
            )
          )
        );
      }
      var on = (function (e) {
          (0, x.Z)(t, e);
          var n = (0, P.Z)(t);
          function t() {
            var e;
            (0, D.Z)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(a))).pickerRef =
                i.createRef()),
              (e.focus = function () {
                e.pickerRef.current && e.pickerRef.current.focus();
              }),
              (e.blur = function () {
                e.pickerRef.current && e.pickerRef.current.blur();
              }),
              e
            );
          }
          return (
            (0, N.Z)(t, [
              {
                key: "render",
                value: function () {
                  return i.createElement(
                    an,
                    (0, l.Z)({}, this.props, { pickerRef: this.pickerRef })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component),
        cn = on;
      function ln(e, n, t, r) {
        var a = de(e, t, r, 1);
        function o(t) {
          return t(e, n) ? "same" : t(a, n) ? "closing" : "far";
        }
        switch (t) {
          case "year":
            return o(function (e, n) {
              return (function (e, n, t) {
                var r = re(n, t);
                return "boolean" === typeof r
                  ? r
                  : Math.floor(e.getYear(n) / 10) ===
                      Math.floor(e.getYear(t) / 10);
              })(r, e, n);
            });
          case "quarter":
          case "month":
            return o(function (e, n) {
              return ae(r, e, n);
            });
          default:
            return o(function (e, n) {
              return le(r, e, n);
            });
        }
      }
      function un(e) {
        var n = e.values,
          t = e.picker,
          r = e.defaultDates,
          a = e.generateConfig,
          o = i.useState(function () {
            return [we(r, 0), we(r, 1)];
          }),
          c = (0, M.Z)(o, 2),
          l = c[0],
          u = c[1],
          s = i.useState(null),
          f = (0, M.Z)(s, 2),
          d = f[0],
          v = f[1],
          m = we(n, 0),
          p = we(n, 1);
        return [
          function (e) {
            return l[e]
              ? l[e]
              : we(d, e) ||
                  (function (e, n, t, r) {
                    var a = we(e, 0),
                      o = we(e, 1);
                    if (0 === n) return a;
                    if (a && o)
                      switch (ln(a, o, t, r)) {
                        case "same":
                        case "closing":
                          return a;
                        default:
                          return de(o, t, r, -1);
                      }
                    return a;
                  })(n, e, t, a) ||
                  m ||
                  p ||
                  a.getNow();
          },
          function (e, t) {
            if (e) {
              var r = ye(d, e, t);
              u(ye(l, null, t) || [null, null]);
              var a = (t + 1) % 2;
              we(n, a) || (r = ye(r, e, a)), v(r);
            } else (m || p) && v(null);
          },
        ];
      }
      function sn(e, n) {
        return e && e[0] && e[1] && n.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
      }
      function fn(e, n, t, r) {
        return !!e || !(!r || !r[n]) || !!t[(n + 1) % 2];
      }
      function dn(e) {
        var n,
          t,
          r,
          a = e.prefixCls,
          c = void 0 === a ? "rc-picker" : a,
          u = e.id,
          s = e.style,
          f = e.className,
          v = e.popupStyle,
          p = e.dropdownClassName,
          g = e.transitionName,
          h = e.dropdownAlign,
          C = e.getPopupContainer,
          b = e.generateConfig,
          Z = e.locale,
          w = e.placeholder,
          y = e.autoFocus,
          k = e.disabled,
          D = e.format,
          N = e.picker,
          x = void 0 === N ? "date" : N,
          P = e.showTime,
          Y = e.use12Hours,
          V = e.separator,
          T = void 0 === V ? "~" : V,
          L = e.value,
          H = e.defaultValue,
          I = e.defaultPickerValue,
          A = e.open,
          F = e.defaultOpen,
          W = e.disabledDate,
          j = e.disabledTime,
          K = e.dateRender,
          U = e.panelRender,
          B = e.ranges,
          q = e.allowEmpty,
          z = e.allowClear,
          Q = e.suffixIcon,
          X = e.clearIcon,
          $ = e.pickerRef,
          ee = e.inputReadOnly,
          ne = e.mode,
          te = e.renderExtraFooter,
          re = e.onChange,
          ae = e.onOpenChange,
          le = e.onPanelChange,
          fe = e.onCalendarChange,
          pe = e.onFocus,
          ge = e.onBlur,
          he = e.onMouseDown,
          Ce = e.onMouseUp,
          ke = e.onMouseEnter,
          Ee = e.onMouseLeave,
          De = e.onClick,
          Ne = e.onOk,
          xe = e.onKeyDown,
          Me = e.components,
          Re = e.order,
          Se = e.direction,
          Ye = e.activePickerIndex,
          Oe = e.autoComplete,
          Ve = void 0 === Oe ? "off" : Oe,
          Te = ("date" === x && !!P) || "time" === x,
          Le = (0, i.useRef)({}),
          He = (0, i.useRef)(null),
          Ie = (0, i.useRef)(null),
          Ae = (0, i.useRef)(null),
          Fe = (0, i.useRef)(null),
          We = (0, i.useRef)(null),
          je = (0, i.useRef)(null),
          Ke = (0, i.useRef)(null),
          Ue = (0, i.useRef)(null);
        var Be = be(_(D, x, P, Y)),
          _e = (0, R.Z)(0, { value: Ye }),
          Qe = (0, M.Z)(_e, 2),
          Xe = Qe[0],
          nn = Qe[1],
          an = (0, i.useRef)(null),
          on = i.useMemo(
            function () {
              return Array.isArray(k) ? k : [k || !1, k || !1];
            },
            [k]
          ),
          cn = (0, R.Z)(null, {
            value: L,
            defaultValue: H,
            postState: function (e) {
              return "time" !== x || Re ? sn(e, b) : e;
            },
          }),
          ln = (0, M.Z)(cn, 2),
          dn = ln[0],
          vn = ln[1],
          mn = un({
            values: dn,
            picker: x,
            defaultDates: I,
            generateConfig: b,
          }),
          pn = (0, M.Z)(mn, 2),
          gn = pn[0],
          hn = pn[1],
          Cn = (0, R.Z)(dn, {
            postState: function (e) {
              var n = e;
              if (on[0] && on[1]) return n;
              for (var t = 0; t < 2; t += 1)
                !on[t] ||
                  n ||
                  we(n, t) ||
                  we(q, t) ||
                  (n = ye(n, b.getNow(), t));
              return n;
            },
          }),
          bn = (0, M.Z)(Cn, 2),
          Zn = bn[0],
          wn = bn[1],
          yn = (0, R.Z)([x, x], { value: ne }),
          kn = (0, M.Z)(yn, 2),
          En = kn[0],
          Dn = kn[1];
        (0, i.useEffect)(
          function () {
            Dn([x, x]);
          },
          [x]
        );
        var Nn = function (e, n) {
            Dn(e), le && le(n, e);
          },
          xn = (function (e, n, t) {
            var r = e.picker,
              a = e.locale,
              o = e.selectedValue,
              c = e.disabledDate,
              l = e.disabled,
              u = e.generateConfig,
              s = we(o, 0),
              f = we(o, 1);
            function d(e) {
              return u.locale.getWeekFirstDate(a.locale, e);
            }
            function v(e) {
              return 100 * u.getYear(e) + u.getMonth(e);
            }
            function m(e) {
              return 10 * u.getYear(e) + oe(u, e);
            }
            return [
              i.useCallback(
                function (e) {
                  if (c && c(e)) return !0;
                  if (l[1] && f) return !ue(u, e, f) && u.isAfter(e, f);
                  if (n && f)
                    switch (r) {
                      case "quarter":
                        return m(e) > m(f);
                      case "month":
                        return v(e) > v(f);
                      case "week":
                        return d(e) > d(f);
                      default:
                        return !ue(u, e, f) && u.isAfter(e, f);
                    }
                  return !1;
                },
                [c, l[1], f, n]
              ),
              i.useCallback(
                function (e) {
                  if (c && c(e)) return !0;
                  if (l[0] && s) return !ue(u, e, f) && u.isAfter(s, e);
                  if (t && s)
                    switch (r) {
                      case "quarter":
                        return m(e) < m(s);
                      case "month":
                        return v(e) < v(s);
                      case "week":
                        return d(e) < d(s);
                      default:
                        return !ue(u, e, s) && u.isAfter(s, e);
                    }
                  return !1;
                },
                [c, l[0], s, t]
              ),
            ];
          })(
            {
              picker: x,
              selectedValue: Zn,
              locale: Z,
              disabled: on,
              disabledDate: W,
              generateConfig: b,
            },
            Le.current[1],
            Le.current[0]
          ),
          Pn = (0, M.Z)(xn, 2),
          Mn = Pn[0],
          Rn = Pn[1],
          Sn = (0, R.Z)(!1, {
            value: A,
            defaultValue: F,
            postState: function (e) {
              return !on[Xe] && e;
            },
            onChange: function (e) {
              ae && ae(e),
                !e && an.current && an.current.onClose && an.current.onClose();
            },
          }),
          Yn = (0, M.Z)(Sn, 2),
          On = Yn[0],
          Vn = Yn[1],
          Tn = On && 0 === Xe,
          Ln = On && 1 === Xe,
          Hn = (0, i.useState)(0),
          In = (0, M.Z)(Hn, 2),
          An = In[0],
          Fn = In[1];
        (0, i.useEffect)(
          function () {
            !On && He.current && Fn(He.current.offsetWidth);
          },
          [On]
        );
        var Wn = i.useRef();
        function jn(e, n) {
          if (e)
            clearTimeout(Wn.current),
              (Le.current[n] = !0),
              nn(n),
              Vn(e),
              On || hn(null, n);
          else if (Xe === n) {
            Vn(e);
            var t = Le.current;
            Wn.current = setTimeout(function () {
              t === Le.current && (Le.current = {});
            });
          }
        }
        function Kn(e) {
          jn(!0, e),
            setTimeout(function () {
              var n = [je, Ke][e];
              n.current && n.current.focus();
            }, 0);
        }
        function Un(e, n) {
          var t = e,
            r = we(t, 0),
            a = we(t, 1);
          r &&
            a &&
            b.isAfter(r, a) &&
            (("week" === x && !ie(b, Z.locale, r, a)) ||
            ("quarter" === x && !ce(b, r, a)) ||
            ("week" !== x && "quarter" !== x && "time" !== x && !ue(b, r, a))
              ? (0 === n
                  ? ((t = [r, null]), (a = null))
                  : ((r = null), (t = [null, a])),
                (Le.current = (0, d.Z)({}, n, !0)))
              : ("time" === x && !1 === Re) || (t = sn(t, b))),
            wn(t);
          var o =
              t && t[0]
                ? ve(t[0], { generateConfig: b, locale: Z, format: Be[0] })
                : "",
            c =
              t && t[1]
                ? ve(t[1], { generateConfig: b, locale: Z, format: Be[0] })
                : "";
          fe && fe(t, [o, c], { range: 0 === n ? "start" : "end" });
          var l = fn(r, 0, on, q),
            u = fn(a, 1, on, q);
          (null === t || (l && u)) &&
            (vn(t),
            !re ||
              (se(b, we(dn, 0), r) && se(b, we(dn, 1), a)) ||
              re(t, [o, c]));
          var i = null;
          0 !== n || on[1] ? 1 !== n || on[0] || (i = 0) : (i = 1),
            null === i || i === Xe || (Le.current[i] && we(t, i)) || !we(t, n)
              ? jn(!1, n)
              : Kn(i);
        }
        var Bn = function (e) {
            return On && an.current && an.current.onKeyDown
              ? an.current.onKeyDown(e)
              : ((0, o.ZP)(
                  !1,
                  "Picker not correct forward KeyDown operation. Please help to fire issue about this."
                ),
                !1);
          },
          qn = { formatList: Be, generateConfig: b, locale: Z },
          zn = tn(we(Zn, 0), qn),
          _n = (0, M.Z)(zn, 2),
          Gn = _n[0],
          Qn = _n[1],
          Xn = tn(we(Zn, 1), qn),
          $n = (0, M.Z)(Xn, 2),
          Jn = $n[0],
          et = $n[1],
          nt = function (e, n) {
            var t = me(e, { locale: Z, formatList: Be, generateConfig: b });
            t && !(0 === n ? Mn : Rn)(t) && (wn(ye(Zn, t, n)), hn(t, n));
          },
          tt = en({
            valueTexts: Gn,
            onTextChange: function (e) {
              return nt(e, 0);
            },
          }),
          rt = (0, M.Z)(tt, 3),
          at = rt[0],
          ot = rt[1],
          ct = rt[2],
          lt = en({
            valueTexts: Jn,
            onTextChange: function (e) {
              return nt(e, 1);
            },
          }),
          ut = (0, M.Z)(lt, 3),
          it = ut[0],
          st = ut[1],
          ft = ut[2],
          dt = (0, i.useState)(null),
          vt = (0, M.Z)(dt, 2),
          mt = vt[0],
          pt = vt[1],
          gt = (0, i.useState)(null),
          ht = (0, M.Z)(gt, 2),
          Ct = ht[0],
          bt = ht[1],
          Zt = rn(at, { formatList: Be, generateConfig: b, locale: Z }),
          wt = (0, M.Z)(Zt, 3),
          yt = wt[0],
          kt = wt[1],
          Et = wt[2],
          Dt = rn(it, { formatList: Be, generateConfig: b, locale: Z }),
          Nt = (0, M.Z)(Dt, 3),
          xt = Nt[0],
          Pt = Nt[1],
          Mt = Nt[2],
          Rt = function (e, n) {
            return {
              blurToCancel: Te,
              forwardKeyDown: Bn,
              onBlur: ge,
              isClickOutside: function (e) {
                return !J([Ie.current, Ae.current, Fe.current, He.current], e);
              },
              onFocus: function (n) {
                nn(e), pe && pe(n);
              },
              triggerOpen: function (n) {
                jn(n, e);
              },
              onSubmit: function () {
                if (!Zn || (W && W(Zn[e]))) return !1;
                Un(Zn, e), n();
              },
              onCancel: function () {
                jn(!1, e), wn(dn), n();
              },
            };
          },
          St = (0, i.useRef)(""),
          Yt = Je(
            (0, m.Z)(
              (0, m.Z)({}, Rt(0, ct)),
              {},
              {
                open: Tn,
                value: at,
                currentFocusedKey: St,
                key: "start",
                onKeyDown: function (e, n) {
                  null === xe || void 0 === xe || xe(e, n);
                },
              }
            )
          ),
          Ot = (0, M.Z)(Yt, 2),
          Vt = Ot[0],
          Tt = Ot[1],
          Lt = Tt.focused,
          Ht = Tt.typing,
          It = Je(
            (0, m.Z)(
              (0, m.Z)({}, Rt(1, ft)),
              {},
              {
                open: Ln,
                value: it,
                currentFocusedKey: St,
                key: "end",
                onKeyDown: function (e, n) {
                  null === xe || void 0 === xe || xe(e, n);
                },
              }
            )
          ),
          At = (0, M.Z)(It, 2),
          Ft = At[0],
          Wt = At[1],
          jt = Wt.focused,
          Kt = Wt.typing,
          Ut =
            dn && dn[0]
              ? ve(dn[0], {
                  locale: Z,
                  format: "YYYYMMDDHHmmss",
                  generateConfig: b,
                })
              : "",
          Bt =
            dn && dn[1]
              ? ve(dn[1], {
                  locale: Z,
                  format: "YYYYMMDDHHmmss",
                  generateConfig: b,
                })
              : "";
        (0, i.useEffect)(
          function () {
            On ||
              (wn(dn),
              Gn.length && "" !== Gn[0] ? Qn !== at && ct() : ot(""),
              Jn.length && "" !== Jn[0] ? et !== it && ft() : st(""));
          },
          [On, Gn, Jn]
        ),
          (0, i.useEffect)(
            function () {
              wn(dn);
            },
            [Ut, Bt]
          ),
          $ &&
            ($.current = {
              focus: function () {
                je.current && je.current.focus();
              },
              blur: function () {
                je.current && je.current.blur(),
                  Ke.current && Ke.current.blur();
              },
            });
        var qt = Object.keys(B || {}).map(function (e) {
          var n = B[e],
            t = "function" === typeof n ? n() : n;
          return {
            label: e,
            onClick: function () {
              Un(t, null), jn(!1, Xe);
            },
            onMouseEnter: function () {
              pt(t);
            },
            onMouseLeave: function () {
              pt(null);
            },
          };
        });
        function zt() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = null;
          On && Ct && Ct[0] && Ct[1] && b.isAfter(Ct[1], Ct[0]) && (r = Ct);
          var a = P;
          if (P && "object" === (0, S.Z)(P) && P.defaultValue) {
            var o = P.defaultValue;
            a = (0, m.Z)(
              (0, m.Z)({}, P),
              {},
              { defaultValue: we(o, Xe) || void 0 }
            );
          }
          var u = null;
          return (
            K &&
              (u = function (e, n) {
                return K(e, n, { range: Xe ? "end" : "start" });
              }),
            i.createElement(
              Pe.Provider,
              {
                value: {
                  inRange: !0,
                  panelPosition: n,
                  rangedValue: mt || Zn,
                  hoverRangedValue: r,
                },
              },
              i.createElement(
                Ge,
                (0, l.Z)({}, e, t, {
                  dateRender: u,
                  showTime: a,
                  mode: En[Xe],
                  generateConfig: b,
                  style: void 0,
                  direction: Se,
                  disabledDate: 0 === Xe ? Mn : Rn,
                  disabledTime: function (e) {
                    return !!j && j(e, 0 === Xe ? "start" : "end");
                  },
                  className: E()(
                    (0, d.Z)(
                      {},
                      "".concat(c, "-panel-focused"),
                      0 === Xe ? !Ht : !Kt
                    )
                  ),
                  value: we(Zn, Xe),
                  locale: Z,
                  tabIndex: -1,
                  onPanelChange: function (e, t) {
                    0 === Xe && Et(!0),
                      1 === Xe && Mt(!0),
                      Nn(ye(En, t, Xe), ye(Zn, e, Xe));
                    var r = e;
                    "right" === n && En[Xe] === t && (r = de(r, t, b, -1)),
                      hn(r, Xe);
                  },
                  onOk: null,
                  onSelect: void 0,
                  onChange: void 0,
                  defaultValue: we(Zn, 0 === Xe ? 1 : 0),
                })
              )
            )
          );
        }
        var _t = 0,
          Gt = 0;
        if (Xe && Ae.current && We.current && Ie.current) {
          _t = Ae.current.offsetWidth + We.current.offsetWidth;
          var Qt =
            Ue.current.offsetLeft > _t
              ? Ue.current.offsetLeft - _t
              : Ue.current.offsetLeft;
          Ie.current.offsetWidth &&
            Ue.current.offsetWidth &&
            _t >
              Ie.current.offsetWidth -
                Ue.current.offsetWidth -
                ("rtl" === Se ? 0 : Qt) &&
            (Gt = _t);
        }
        var Xt = "rtl" === Se ? { right: _t } : { left: _t };
        var $t,
          Jt,
          er = i.createElement(
            "div",
            {
              className: E()(
                "".concat(c, "-range-wrapper"),
                "".concat(c, "-").concat(x, "-range-wrapper")
              ),
              style: { minWidth: An },
            },
            i.createElement("div", {
              ref: Ue,
              className: "".concat(c, "-range-arrow"),
              style: Xt,
            }),
            (function () {
              var e,
                n = qe(c, En[Xe], te),
                t = ze({
                  prefixCls: c,
                  components: Me,
                  needConfirmButton: Te,
                  okDisabled: !we(Zn, Xe) || (W && W(Zn[Xe])),
                  locale: Z,
                  rangeList: qt,
                  onOk: function () {
                    we(Zn, Xe) && (Un(Zn, Xe), Ne && Ne(Zn));
                  },
                });
              if ("time" === x || P) e = zt();
              else {
                var r = gn(Xe),
                  a = de(r, x, b),
                  o = En[Xe] === x,
                  l = zt(!!o && "left", {
                    pickerValue: r,
                    onPickerValueChange: function (e) {
                      hn(e, Xe);
                    },
                  }),
                  u = zt("right", {
                    pickerValue: a,
                    onPickerValueChange: function (e) {
                      hn(de(e, x, b, -1), Xe);
                    },
                  });
                e =
                  "rtl" === Se
                    ? i.createElement(i.Fragment, null, u, o && l)
                    : i.createElement(i.Fragment, null, l, o && u);
              }
              var s = i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: "".concat(c, "-panels") },
                  e
                ),
                (n || t) &&
                  i.createElement(
                    "div",
                    { className: "".concat(c, "-footer") },
                    n,
                    t
                  )
              );
              return (
                U && (s = U(s)),
                i.createElement(
                  "div",
                  {
                    className: "".concat(c, "-panel-container"),
                    style: { marginLeft: Gt },
                    ref: Ie,
                    onMouseDown: function (e) {
                      e.preventDefault();
                    },
                  },
                  s
                )
              );
            })()
          );
        Q &&
          ($t = i.createElement(
            "span",
            { className: "".concat(c, "-suffix") },
            Q
          )),
          z &&
            ((we(dn, 0) && !on[0]) || (we(dn, 1) && !on[1])) &&
            (Jt = i.createElement(
              "span",
              {
                onMouseDown: function (e) {
                  e.preventDefault(), e.stopPropagation();
                },
                onMouseUp: function (e) {
                  e.preventDefault(), e.stopPropagation();
                  var n = dn;
                  on[0] || (n = ye(n, null, 0)),
                    on[1] || (n = ye(n, null, 1)),
                    Un(n, null),
                    jn(!1, Xe);
                },
                className: "".concat(c, "-clear"),
              },
              X ||
                i.createElement("span", {
                  className: "".concat(c, "-clear-btn"),
                })
            ));
        var nr = { size: G(x, Be[0], b) },
          tr = 0,
          rr = 0;
        Ae.current &&
          Fe.current &&
          We.current &&
          (0 === Xe
            ? (rr = Ae.current.offsetWidth)
            : ((tr = _t), (rr = Fe.current.offsetWidth)));
        var ar = "rtl" === Se ? { right: tr } : { left: tr };
        return i.createElement(
          O.Provider,
          {
            value: {
              operationRef: an,
              hideHeader: "time" === x,
              onDateMouseEnter: function (e) {
                bt(ye(Zn, e, Xe)), 0 === Xe ? kt(e) : Pt(e);
              },
              onDateMouseLeave: function () {
                bt(ye(Zn, null, Xe)), 0 === Xe ? Et() : Mt();
              },
              hideRanges: !0,
              onSelect: function (e, n) {
                var t = ye(Zn, e, Xe);
                "submit" === n || ("key" !== n && !Te)
                  ? (Un(t, Xe), 0 === Xe ? Et() : Mt())
                  : wn(t);
              },
              open: On,
            },
          },
          i.createElement(
            $e,
            {
              visible: On,
              popupElement: er,
              popupStyle: v,
              prefixCls: c,
              dropdownClassName: p,
              dropdownAlign: h,
              getPopupContainer: C,
              transitionName: g,
              range: !0,
              direction: Se,
            },
            i.createElement(
              "div",
              (0, l.Z)(
                {
                  ref: He,
                  className: E()(
                    c,
                    "".concat(c, "-range"),
                    f,
                    ((n = {}),
                    (0, d.Z)(n, "".concat(c, "-disabled"), on[0] && on[1]),
                    (0, d.Z)(n, "".concat(c, "-focused"), 0 === Xe ? Lt : jt),
                    (0, d.Z)(n, "".concat(c, "-rtl"), "rtl" === Se),
                    n)
                  ),
                  style: s,
                  onClick: function (e) {
                    De && De(e),
                      On ||
                        je.current.contains(e.target) ||
                        Ke.current.contains(e.target) ||
                        (on[0] ? on[1] || Kn(1) : Kn(0));
                  },
                  onMouseEnter: ke,
                  onMouseLeave: Ee,
                  onMouseDown: function (e) {
                    he && he(e),
                      !On ||
                        (!Lt && !jt) ||
                        je.current.contains(e.target) ||
                        Ke.current.contains(e.target) ||
                        e.preventDefault();
                  },
                  onMouseUp: Ce,
                },
                Ze(e)
              ),
              i.createElement(
                "div",
                {
                  className: E()(
                    "".concat(c, "-input"),
                    ((t = {}),
                    (0, d.Z)(t, "".concat(c, "-input-active"), 0 === Xe),
                    (0, d.Z)(t, "".concat(c, "-input-placeholder"), !!yt),
                    t)
                  ),
                  ref: Ae,
                },
                i.createElement(
                  "input",
                  (0, l.Z)(
                    {
                      id: u,
                      disabled: on[0],
                      readOnly: ee || "function" === typeof Be[0] || !Ht,
                      value: yt || at,
                      onChange: function (e) {
                        ot(e.target.value);
                      },
                      autoFocus: y,
                      placeholder: we(w, 0) || "",
                      ref: je,
                    },
                    Vt,
                    nr,
                    { autoComplete: Ve }
                  )
                )
              ),
              i.createElement(
                "div",
                { className: "".concat(c, "-range-separator"), ref: We },
                T
              ),
              i.createElement(
                "div",
                {
                  className: E()(
                    "".concat(c, "-input"),
                    ((r = {}),
                    (0, d.Z)(r, "".concat(c, "-input-active"), 1 === Xe),
                    (0, d.Z)(r, "".concat(c, "-input-placeholder"), !!xt),
                    r)
                  ),
                  ref: Fe,
                },
                i.createElement(
                  "input",
                  (0, l.Z)(
                    {
                      disabled: on[1],
                      readOnly: ee || "function" === typeof Be[0] || !Kt,
                      value: xt || it,
                      onChange: function (e) {
                        st(e.target.value);
                      },
                      placeholder: we(w, 1) || "",
                      ref: Ke,
                    },
                    Ft,
                    nr,
                    { autoComplete: Ve }
                  )
                )
              ),
              i.createElement("div", {
                className: "".concat(c, "-active-bar"),
                style: (0, m.Z)(
                  (0, m.Z)({}, ar),
                  {},
                  { width: rr, position: "absolute" }
                ),
              }),
              $t,
              Jt
            )
          )
        );
      }
      var vn = (function (e) {
          (0, x.Z)(t, e);
          var n = (0, P.Z)(t);
          function t() {
            var e;
            (0, D.Z)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((e = n.call.apply(n, [this].concat(a))).pickerRef =
                i.createRef()),
              (e.focus = function () {
                e.pickerRef.current && e.pickerRef.current.focus();
              }),
              (e.blur = function () {
                e.pickerRef.current && e.pickerRef.current.blur();
              }),
              e
            );
          }
          return (
            (0, N.Z)(t, [
              {
                key: "render",
                value: function () {
                  return i.createElement(
                    dn,
                    (0, l.Z)({}, this.props, { pickerRef: this.pickerRef })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component),
        mn = vn,
        pn = cn,
        gn = t(53124),
        hn = t(98866),
        Cn = t(97647),
        bn = t(65223),
        Zn = t(4173),
        wn = t(23715),
        yn = t(9708),
        kn = t(87206);
      function En(e, n, t) {
        return void 0 !== t
          ? t
          : "year" === e && n.lang.yearPlaceholder
          ? n.lang.yearPlaceholder
          : "quarter" === e && n.lang.quarterPlaceholder
          ? n.lang.quarterPlaceholder
          : "month" === e && n.lang.monthPlaceholder
          ? n.lang.monthPlaceholder
          : "week" === e && n.lang.weekPlaceholder
          ? n.lang.weekPlaceholder
          : "time" === e && n.timePickerLocale.placeholder
          ? n.timePickerLocale.placeholder
          : n.lang.placeholder;
      }
      function Dn(e, n, t) {
        return void 0 !== t
          ? t
          : "year" === e && n.lang.yearPlaceholder
          ? n.lang.rangeYearPlaceholder
          : "quarter" === e && n.lang.quarterPlaceholder
          ? n.lang.rangeQuarterPlaceholder
          : "month" === e && n.lang.monthPlaceholder
          ? n.lang.rangeMonthPlaceholder
          : "week" === e && n.lang.weekPlaceholder
          ? n.lang.rangeWeekPlaceholder
          : "time" === e && n.timePickerLocale.placeholder
          ? n.timePickerLocale.rangePlaceholder
          : n.lang.rangePlaceholder;
      }
      function Nn(e, n) {
        var t = { adjustX: 1, adjustY: 1 };
        switch (n) {
          case "bottomLeft":
            return { points: ["tl", "bl"], offset: [0, 4], overflow: t };
          case "bottomRight":
            return { points: ["tr", "br"], offset: [0, 4], overflow: t };
          case "topLeft":
            return { points: ["bl", "tl"], offset: [0, -4], overflow: t };
          case "topRight":
            return { points: ["br", "tr"], offset: [0, -4], overflow: t };
          default:
            return {
              points: "rtl" === e ? ["tr", "br"] : ["tl", "bl"],
              offset: [0, 4],
              overflow: t,
            };
        }
      }
      var xn = function (e, n) {
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            n.indexOf(r) < 0 &&
            (t[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            n.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (t[r[a]] = e[r[a]]);
        }
        return t;
      };
      var Pn = function (e, n) {
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            n.indexOf(r) < 0 &&
            (t[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            n.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (t[r[a]] = e[r[a]]);
        }
        return t;
      };
      var Mn = {
        button: function (e) {
          return i.createElement(
            s.Z,
            (0, l.Z)({ size: "small", type: "primary" }, e)
          );
        },
        rangeItem: function (e) {
          return i.createElement(f.Z, (0, l.Z)({ color: "blue" }, e));
        },
      };
      function Rn(e) {
        var n,
          t = e.format,
          r = e.picker,
          a = e.showHour,
          o = e.showMinute,
          c = e.showSecond,
          u = e.use12Hours,
          i = ((n = t), n ? (Array.isArray(n) ? n : [n]) : [])[0],
          s = (0, l.Z)({}, e);
        return (
          i &&
            "string" === typeof i &&
            (i.includes("s") || void 0 !== c || (s.showSecond = !1),
            i.includes("m") || void 0 !== o || (s.showMinute = !1),
            i.includes("H") ||
              i.includes("h") ||
              void 0 !== a ||
              (s.showHour = !1),
            (i.includes("a") || i.includes("A")) &&
              void 0 === u &&
              (s.use12Hours = !0)),
          "time" === r
            ? s
            : ("function" === typeof i && delete s.format, { showTime: s })
        );
      }
      (0, u.b)("bottomLeft", "bottomRight", "topLeft", "topRight");
      var Sn = function (e) {
          var n = (function (e) {
              function n(n, t) {
                var r = (0, i.forwardRef)(function (t, r) {
                  var a = t.prefixCls,
                    o = t.getPopupContainer,
                    c = t.className,
                    u = t.size,
                    s = t.bordered,
                    f = void 0 === s || s,
                    m = t.placement,
                    p = t.placeholder,
                    g = t.popupClassName,
                    h = t.dropdownClassName,
                    Z = t.disabled,
                    w = t.status,
                    y = Pn(t, [
                      "prefixCls",
                      "getPopupContainer",
                      "className",
                      "size",
                      "bordered",
                      "placement",
                      "placeholder",
                      "popupClassName",
                      "dropdownClassName",
                      "disabled",
                      "status",
                    ]),
                    k = (0, i.useContext)(gn.E_),
                    D = k.getPrefixCls,
                    N = k.direction,
                    x = k.getPopupContainer,
                    P = D("picker", a),
                    M = (0, Zn.ri)(P, N),
                    R = M.compactSize,
                    S = M.compactItemClassnames,
                    Y = i.useRef(null),
                    O = t.format,
                    V = t.showTime;
                  (0, i.useImperativeHandle)(r, function () {
                    return {
                      focus: function () {
                        var e;
                        return null === (e = Y.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      blur: function () {
                        var e;
                        return null === (e = Y.current) || void 0 === e
                          ? void 0
                          : e.blur();
                      },
                    };
                  });
                  var T = { showToday: !0 },
                    L = {};
                  n && (L.picker = n);
                  var H = n || t.picker;
                  L = (0, l.Z)(
                    (0, l.Z)(
                      (0, l.Z)({}, L),
                      V ? Rn((0, l.Z)({ format: O, picker: H }, V)) : {}
                    ),
                    "time" === H
                      ? Rn((0, l.Z)((0, l.Z)({ format: O }, t), { picker: H }))
                      : {}
                  );
                  var I = D(),
                    A = i.useContext(Cn.Z),
                    F = R || u || A,
                    W = i.useContext(hn.Z),
                    j = null !== Z && void 0 !== Z ? Z : W,
                    K = (0, i.useContext)(bn.aM),
                    U = K.hasFeedback,
                    B = K.status,
                    q = K.feedbackIcon,
                    z = i.createElement(
                      i.Fragment,
                      null,
                      "time" === H
                        ? i.createElement(C, null)
                        : i.createElement(v.Z, null),
                      U && q
                    );
                  return i.createElement(
                    wn.Z,
                    { componentName: "DatePicker", defaultLocale: kn.Z },
                    function (n) {
                      var r = (0, l.Z)((0, l.Z)({}, n), t.locale);
                      return i.createElement(
                        pn,
                        (0, l.Z)(
                          {
                            ref: Y,
                            placeholder: En(H, r, p),
                            suffixIcon: z,
                            dropdownAlign: Nn(N, m),
                            clearIcon: i.createElement(b.Z, null),
                            prevIcon: i.createElement("span", {
                              className: "".concat(P, "-prev-icon"),
                            }),
                            nextIcon: i.createElement("span", {
                              className: "".concat(P, "-next-icon"),
                            }),
                            superPrevIcon: i.createElement("span", {
                              className: "".concat(P, "-super-prev-icon"),
                            }),
                            superNextIcon: i.createElement("span", {
                              className: "".concat(P, "-super-next-icon"),
                            }),
                            allowClear: !0,
                            transitionName: "".concat(I, "-slide-up"),
                          },
                          T,
                          y,
                          L,
                          {
                            locale: r.lang,
                            className: E()(
                              (0, d.Z)(
                                (0, d.Z)({}, "".concat(P, "-").concat(F), F),
                                "".concat(P, "-borderless"),
                                !f
                              ),
                              (0, yn.Z)(P, (0, yn.F)(B, w), U),
                              S,
                              c
                            ),
                            prefixCls: P,
                            getPopupContainer: o || x,
                            generateConfig: e,
                            components: Mn,
                            direction: N,
                            disabled: j,
                            dropdownClassName: g || h,
                          }
                        )
                      );
                    }
                  );
                });
                return t && (r.displayName = t), r;
              }
              return {
                DatePicker: n(),
                WeekPicker: n("week", "WeekPicker"),
                MonthPicker: n("month", "MonthPicker"),
                YearPicker: n("year", "YearPicker"),
                TimePicker: n("time", "TimePicker"),
                QuarterPicker: n("quarter", "QuarterPicker"),
              };
            })(e),
            t = n.DatePicker,
            r = n.WeekPicker,
            a = n.MonthPicker,
            o = n.YearPicker,
            c = n.TimePicker,
            u = n.QuarterPicker,
            s = (function (e) {
              return (0, i.forwardRef)(function (n, t) {
                var r = n.prefixCls,
                  a = n.getPopupContainer,
                  o = n.className,
                  c = n.placement,
                  u = n.size,
                  s = n.disabled,
                  f = n.bordered,
                  m = void 0 === f || f,
                  p = n.placeholder,
                  g = n.popupClassName,
                  h = n.dropdownClassName,
                  Z = n.status,
                  w = xn(n, [
                    "prefixCls",
                    "getPopupContainer",
                    "className",
                    "placement",
                    "size",
                    "disabled",
                    "bordered",
                    "placeholder",
                    "popupClassName",
                    "dropdownClassName",
                    "status",
                  ]),
                  k = i.useRef(null),
                  D = (0, i.useContext)(gn.E_),
                  N = D.getPrefixCls,
                  x = D.direction,
                  P = D.getPopupContainer,
                  M = N("picker", r),
                  R = (0, Zn.ri)(M, x),
                  S = R.compactSize,
                  Y = R.compactItemClassnames,
                  O = n.format,
                  V = n.showTime,
                  T = n.picker,
                  L = N(),
                  H = {};
                H = (0, l.Z)(
                  (0, l.Z)(
                    (0, l.Z)({}, H),
                    V ? Rn((0, l.Z)({ format: O, picker: T }, V)) : {}
                  ),
                  "time" === T
                    ? Rn((0, l.Z)((0, l.Z)({ format: O }, n), { picker: T }))
                    : {}
                );
                var I = i.useContext(Cn.Z),
                  A = S || u || I,
                  F = i.useContext(hn.Z),
                  W = null !== s && void 0 !== s ? s : F,
                  j = (0, i.useContext)(bn.aM),
                  K = j.hasFeedback,
                  U = j.status,
                  B = j.feedbackIcon,
                  q = i.createElement(
                    i.Fragment,
                    null,
                    "time" === T
                      ? i.createElement(C, null)
                      : i.createElement(v.Z, null),
                    K && B
                  );
                return (
                  (0, i.useImperativeHandle)(t, function () {
                    return {
                      focus: function () {
                        var e;
                        return null === (e = k.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      blur: function () {
                        var e;
                        return null === (e = k.current) || void 0 === e
                          ? void 0
                          : e.blur();
                      },
                    };
                  }),
                  i.createElement(
                    wn.Z,
                    { componentName: "DatePicker", defaultLocale: kn.Z },
                    function (t) {
                      var r = (0, l.Z)((0, l.Z)({}, t), n.locale);
                      return i.createElement(
                        mn,
                        (0, l.Z)(
                          {
                            separator: i.createElement(
                              "span",
                              {
                                "aria-label": "to",
                                className: "".concat(M, "-separator"),
                              },
                              i.createElement(y, null)
                            ),
                            disabled: W,
                            ref: k,
                            dropdownAlign: Nn(x, c),
                            placeholder: Dn(T, r, p),
                            suffixIcon: q,
                            clearIcon: i.createElement(b.Z, null),
                            prevIcon: i.createElement("span", {
                              className: "".concat(M, "-prev-icon"),
                            }),
                            nextIcon: i.createElement("span", {
                              className: "".concat(M, "-next-icon"),
                            }),
                            superPrevIcon: i.createElement("span", {
                              className: "".concat(M, "-super-prev-icon"),
                            }),
                            superNextIcon: i.createElement("span", {
                              className: "".concat(M, "-super-next-icon"),
                            }),
                            allowClear: !0,
                            transitionName: "".concat(L, "-slide-up"),
                          },
                          w,
                          H,
                          {
                            className: E()(
                              (0, d.Z)(
                                (0, d.Z)({}, "".concat(M, "-").concat(A), A),
                                "".concat(M, "-borderless"),
                                !m
                              ),
                              (0, yn.Z)(M, (0, yn.F)(U, Z), K),
                              Y,
                              o
                            ),
                            locale: r.lang,
                            prefixCls: M,
                            getPopupContainer: a || P,
                            generateConfig: e,
                            components: Mn,
                            direction: x,
                            dropdownClassName: g || h,
                          }
                        )
                      );
                    }
                  )
                );
              });
            })(e),
            f = t;
          return (
            (f.WeekPicker = r),
            (f.MonthPicker = a),
            (f.YearPicker = o),
            (f.RangePicker = s),
            (f.TimePicker = c),
            (f.QuarterPicker = u),
            f
          );
        },
        Yn = Sn(c);
    },
    20550: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return w;
        },
      });
      var r = t(4942),
        a = t(87462),
        o = t(97685),
        c = t(97937),
        l = t(93967),
        u = t.n(l),
        i = t(98423),
        s = t(67294),
        f = t(53124),
        d = t(98787),
        v = t(68349),
        m = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              n.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (t[r[a]] = e[r[a]]);
          }
          return t;
        },
        p = function (e) {
          var n = e.prefixCls,
            t = e.className,
            o = e.checked,
            c = e.onChange,
            l = e.onClick,
            i = m(e, [
              "prefixCls",
              "className",
              "checked",
              "onChange",
              "onClick",
            ]),
            d = (0, s.useContext(f.E_).getPrefixCls)("tag", n),
            v = u()(
              d,
              (0, r.Z)(
                (0, r.Z)({}, "".concat(d, "-checkable"), !0),
                "".concat(d, "-checkable-checked"),
                o
              ),
              t
            );
          return s.createElement(
            "span",
            (0, a.Z)({}, i, {
              className: v,
              onClick: function (e) {
                null === c || void 0 === c || c(!o),
                  null === l || void 0 === l || l(e);
              },
            })
          );
        },
        g = function (e, n) {
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              n.indexOf(r) < 0 &&
              (t[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              n.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (t[r[a]] = e[r[a]]);
          }
          return t;
        },
        h = new RegExp("^(".concat(d.Y.join("|"), ")(-inverse)?$")),
        C = new RegExp("^(".concat(d.E.join("|"), ")$")),
        b = function (e, n) {
          var t = e.prefixCls,
            l = e.className,
            d = e.style,
            m = e.children,
            p = e.icon,
            b = e.color,
            Z = e.onClose,
            w = e.closeIcon,
            y = e.closable,
            k = void 0 !== y && y,
            E = g(e, [
              "prefixCls",
              "className",
              "style",
              "children",
              "icon",
              "color",
              "onClose",
              "closeIcon",
              "closable",
            ]),
            D = s.useContext(f.E_),
            N = D.getPrefixCls,
            x = D.direction,
            P = s.useState(!0),
            M = (0, o.Z)(P, 2),
            R = M[0],
            S = M[1];
          s.useEffect(
            function () {
              "visible" in E && S(E.visible);
            },
            [E.visible]
          );
          var Y = function () {
              return !!b && (h.test(b) || C.test(b));
            },
            O = (0, a.Z)({ backgroundColor: b && !Y() ? b : void 0 }, d),
            V = Y(),
            T = N("tag", t),
            L = u()(
              T,
              (0, r.Z)(
                (0, r.Z)(
                  (0, r.Z)(
                    (0, r.Z)({}, "".concat(T, "-").concat(b), V),
                    "".concat(T, "-has-color"),
                    b && !V
                  ),
                  "".concat(T, "-hidden"),
                  !R
                ),
                "".concat(T, "-rtl"),
                "rtl" === x
              ),
              l
            ),
            H = function (e) {
              e.stopPropagation(),
                null === Z || void 0 === Z || Z(e),
                e.defaultPrevented || "visible" in E || S(!1);
            },
            I = "onClick" in E || (m && "a" === m.type),
            A = (0, i.Z)(E, ["visible"]),
            F = p || null,
            W = F
              ? s.createElement(
                  s.Fragment,
                  null,
                  F,
                  s.createElement("span", null, m)
                )
              : m,
            j = s.createElement(
              "span",
              (0, a.Z)({}, A, { ref: n, className: L, style: O }),
              W,
              k
                ? w
                  ? s.createElement(
                      "span",
                      { className: "".concat(T, "-close-icon"), onClick: H },
                      w
                    )
                  : s.createElement(c.Z, {
                      className: "".concat(T, "-close-icon"),
                      onClick: H,
                    })
                : null
            );
          return I ? s.createElement(v.Z, null, j) : j;
        },
        Z = s.forwardRef(b);
      Z.CheckableTag = p;
      var w = Z;
    },
  },
]);
