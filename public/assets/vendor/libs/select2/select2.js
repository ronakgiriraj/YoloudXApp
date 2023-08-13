/*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
!(function (n) {
    "function" == typeof define && define.amd
        ? define(["jquery"], n)
        : "object" == typeof module && module.exports
        ? (module.exports = function (e, t) {
              return (
                  void 0 === t &&
                      (t =
                          "undefined" != typeof window
                              ? require("jquery")
                              : require("jquery")(e)),
                  n(t),
                  t
              );
          })
        : n(jQuery);
})(function (u) {
    var e = (function () {
            if (u && u.fn && u.fn.select2 && u.fn.select2.amd)
                var e = u.fn.select2.amd;
            var t, n, i, h, s, o, f, g, m, v, y, _, r, a, b;
            function w(e, t) {
                return r.call(e, t);
            }
            function l(e, t) {
                var n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h = t && t.split("/"),
                    f = y.map,
                    g = (f && f["*"]) || {};
                if (e) {
                    for (
                        o = (e = e.split("/")).length - 1,
                            y.nodeIdCompat &&
                                b.test(e[o]) &&
                                (e[o] = e[o].replace(b, "")),
                            "." === e[0].charAt(0) &&
                                h &&
                                (e = h.slice(0, h.length - 1).concat(e)),
                            u = 0;
                        u < e.length;
                        u++
                    )
                        if ("." === (p = e[u])) e.splice(u, 1), --u;
                        else if (".." === p) {
                            if (
                                0 === u ||
                                (1 === u && ".." === e[2]) ||
                                ".." === e[u - 1]
                            )
                                continue;
                            0 < u && (e.splice(u - 1, 2), (u -= 2));
                        }
                    e = e.join("/");
                }
                if ((h || g) && f) {
                    for (u = (n = e.split("/")).length; 0 < u; --u) {
                        if (((i = n.slice(0, u).join("/")), h))
                            for (d = h.length; 0 < d; --d)
                                if (
                                    (r =
                                        (r = f[h.slice(0, d).join("/")]) &&
                                        r[i])
                                ) {
                                    (s = r), (a = u);
                                    break;
                                }
                        if (s) break;
                        !l && g && g[i] && ((l = g[i]), (c = u));
                    }
                    !s && l && ((s = l), (a = c)),
                        s && (n.splice(0, a, s), (e = n.join("/")));
                }
                return e;
            }
            function x(t, n) {
                return function () {
                    var e = a.call(arguments, 0);
                    return (
                        "string" != typeof e[0] &&
                            1 === e.length &&
                            e.push(null),
                        o.apply(h, e.concat([t, n]))
                    );
                };
            }
            function A(t) {
                return function (e) {
                    m[t] = e;
                };
            }
            function D(e) {
                if (w(v, e)) {
                    var t = v[e];
                    delete v[e], (_[e] = !0), s.apply(h, t);
                }
                if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
                return m[e];
            }
            function c(e) {
                var t,
                    n = e ? e.indexOf("!") : -1;
                return (
                    -1 < n &&
                        ((t = e.substring(0, n)),
                        (e = e.substring(n + 1, e.length))),
                    [t, e]
                );
            }
            function S(e) {
                return e ? c(e) : [];
            }
            return (
                (e && e.requirejs) ||
                    (e ? (n = e) : (e = {}),
                    (m = {}),
                    (v = {}),
                    (y = {}),
                    (_ = {}),
                    (r = Object.prototype.hasOwnProperty),
                    (a = [].slice),
                    (b = /\.js$/),
                    (f = function (e, t) {
                        var n,
                            i,
                            r = c(e),
                            s = r[0],
                            o = t[1];
                        return (
                            (e = r[1]),
                            s && (n = D((s = l(s, o)))),
                            s
                                ? (e =
                                      n && n.normalize
                                          ? n.normalize(
                                                e,
                                                ((i = o),
                                                function (e) {
                                                    return l(e, i);
                                                })
                                            )
                                          : l(e, o))
                                : ((s = (r = c((e = l(e, o))))[0]),
                                  (e = r[1]),
                                  s && (n = D(s))),
                            { f: s ? s + "!" + e : e, n: e, pr: s, p: n }
                        );
                    }),
                    (g = {
                        require: function (e) {
                            return x(e);
                        },
                        exports: function (e) {
                            var t = m[e];
                            return void 0 !== t ? t : (m[e] = {});
                        },
                        module: function (e) {
                            return {
                                id: e,
                                uri: "",
                                exports: m[e],
                                config:
                                    ((t = e),
                                    function () {
                                        return (
                                            (y && y.config && y.config[t]) || {}
                                        );
                                    }),
                            };
                            var t;
                        },
                    }),
                    (s = function (e, t, n, i) {
                        var r,
                            s,
                            o,
                            a,
                            l,
                            c,
                            u,
                            d = [],
                            p = typeof n;
                        if (
                            ((c = S((i = i || e))),
                            "undefined" == p || "function" == p)
                        ) {
                            for (
                                t =
                                    !t.length && n.length
                                        ? ["require", "exports", "module"]
                                        : t,
                                    l = 0;
                                l < t.length;
                                l += 1
                            )
                                if ("require" === (s = (a = f(t[l], c)).f))
                                    d[l] = g.require(e);
                                else if ("exports" === s)
                                    (d[l] = g.exports(e)), (u = !0);
                                else if ("module" === s) r = d[l] = g.module(e);
                                else if (w(m, s) || w(v, s) || w(_, s))
                                    d[l] = D(s);
                                else {
                                    if (!a.p)
                                        throw new Error(e + " missing " + s);
                                    a.p.load(a.n, x(i, !0), A(s), {}),
                                        (d[l] = m[s]);
                                }
                            (o = n ? n.apply(m[e], d) : void 0),
                                e &&
                                    (r && r.exports !== h && r.exports !== m[e]
                                        ? (m[e] = r.exports)
                                        : (o === h && u) || (m[e] = o));
                        } else e && (m[e] = n);
                    }),
                    (t =
                        n =
                        o =
                            function (e, t, n, i, r) {
                                if ("string" == typeof e)
                                    return g[e] ? g[e](t) : D(f(e, S(t)).f);
                                if (!e.splice) {
                                    if (
                                        ((y = e).deps && o(y.deps, y.callback),
                                        !t)
                                    )
                                        return;
                                    t.splice
                                        ? ((e = t), (t = n), (n = null))
                                        : (e = h);
                                }
                                return (
                                    (t = t || function () {}),
                                    "function" == typeof n &&
                                        ((n = i), (i = r)),
                                    i
                                        ? s(h, e, t, n)
                                        : setTimeout(function () {
                                              s(h, e, t, n);
                                          }, 4),
                                    o
                                );
                            }),
                    (o.config = function (e) {
                        return o(e);
                    }),
                    (t._defined = m),
                    ((i = function (e, t, n) {
                        if ("string" != typeof e)
                            throw new Error(
                                "See almond README: incorrect module build, no module name"
                            );
                        t.splice || ((n = t), (t = [])),
                            w(m, e) || w(v, e) || (v[e] = [e, t, n]);
                    }).amd = { jQuery: !0 }),
                    (e.requirejs = t),
                    (e.require = n),
                    (e.define = i)),
                e.define("almond", function () {}),
                e.define("jquery", [], function () {
                    var e = u || $;
                    return (
                        null == e &&
                            console &&
                            console.error &&
                            console.error(
                                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                            ),
                        e
                    );
                }),
                e.define("select2/utils", ["jquery"], function (s) {
                    var r = {};
                    function u(e) {
                        var t = e.prototype,
                            n = [];
                        for (var i in t) {
                            "function" == typeof t[i] &&
                                "constructor" !== i &&
                                n.push(i);
                        }
                        return n;
                    }
                    (r.Extend = function (e, t) {
                        var n = {}.hasOwnProperty;
                        function i() {
                            this.constructor = e;
                        }
                        for (var r in t) n.call(t, r) && (e[r] = t[r]);
                        return (
                            (i.prototype = t.prototype),
                            (e.prototype = new i()),
                            (e.__super__ = t.prototype),
                            e
                        );
                    }),
                        (r.Decorate = function (i, r) {
                            var e = u(r),
                                t = u(i);
                            function s() {
                                var e = Array.prototype.unshift,
                                    t = r.prototype.constructor.length,
                                    n = i.prototype.constructor;
                                0 < t &&
                                    (e.call(arguments, i.prototype.constructor),
                                    (n = r.prototype.constructor)),
                                    n.apply(this, arguments);
                            }
                            (r.displayName = i.displayName),
                                (s.prototype = new (function () {
                                    this.constructor = s;
                                })());
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                s.prototype[o] = i.prototype[o];
                            }
                            function a(e) {
                                var t = function () {};
                                e in s.prototype && (t = s.prototype[e]);
                                var n = r.prototype[e];
                                return function () {
                                    return (
                                        Array.prototype.unshift.call(
                                            arguments,
                                            t
                                        ),
                                        n.apply(this, arguments)
                                    );
                                };
                            }
                            for (var l = 0; l < e.length; l++) {
                                var c = e[l];
                                s.prototype[c] = a(c);
                            }
                            return s;
                        });
                    function e() {
                        this.listeners = {};
                    }
                    (e.prototype.on = function (e, t) {
                        (this.listeners = this.listeners || {}),
                            e in this.listeners
                                ? this.listeners[e].push(t)
                                : (this.listeners[e] = [t]);
                    }),
                        (e.prototype.trigger = function (e) {
                            var t = Array.prototype.slice,
                                n = t.call(arguments, 1);
                            (this.listeners = this.listeners || {}),
                                null == n && (n = []),
                                0 === n.length && n.push({}),
                                (n[0]._type = e) in this.listeners &&
                                    this.invoke(
                                        this.listeners[e],
                                        t.call(arguments, 1)
                                    ),
                                "*" in this.listeners &&
                                    this.invoke(this.listeners["*"], arguments);
                        }),
                        (e.prototype.invoke = function (e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                e[n].apply(this, t);
                        }),
                        (r.Observable = e),
                        (r.generateChars = function (e) {
                            for (var t = "", n = 0; n < e; n++) {
                                t += Math.floor(36 * Math.random()).toString(
                                    36
                                );
                            }
                            return t;
                        }),
                        (r.bind = function (e, t) {
                            return function () {
                                e.apply(t, arguments);
                            };
                        }),
                        (r._convertData = function (e) {
                            for (var t in e) {
                                var n = t.split("-"),
                                    i = e;
                                if (1 !== n.length) {
                                    for (var r = 0; r < n.length; r++) {
                                        var s = n[r];
                                        (s =
                                            s.substring(0, 1).toLowerCase() +
                                            s.substring(1)) in i || (i[s] = {}),
                                            r == n.length - 1 && (i[s] = e[t]),
                                            (i = i[s]);
                                    }
                                    delete e[t];
                                }
                            }
                            return e;
                        }),
                        (r.hasScroll = function (e, t) {
                            var n = s(t),
                                i = t.style.overflowX,
                                r = t.style.overflowY;
                            return (
                                (i !== r ||
                                    ("hidden" !== r && "visible" !== r)) &&
                                ("scroll" === i ||
                                    "scroll" === r ||
                                    n.innerHeight() < t.scrollHeight ||
                                    n.innerWidth() < t.scrollWidth)
                            );
                        }),
                        (r.escapeMarkup = function (e) {
                            var t = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;",
                            };
                            return "string" != typeof e
                                ? e
                                : String(e).replace(
                                      /[&<>"'\/\\]/g,
                                      function (e) {
                                          return t[e];
                                      }
                                  );
                        }),
                        (r.__cache = {});
                    var n = 0;
                    return (
                        (r.GetUniqueElementId = function (e) {
                            var t = e.getAttribute("data-select2-id");
                            return (
                                null != t ||
                                    ((t = e.id
                                        ? "select2-data-" + e.id
                                        : "select2-data-" +
                                          (++n).toString() +
                                          "-" +
                                          r.generateChars(4)),
                                    e.setAttribute("data-select2-id", t)),
                                t
                            );
                        }),
                        (r.StoreData = function (e, t, n) {
                            var i = r.GetUniqueElementId(e);
                            r.__cache[i] || (r.__cache[i] = {}),
                                (r.__cache[i][t] = n);
                        }),
                        (r.GetData = function (e, t) {
                            var n = r.GetUniqueElementId(e);
                            return t
                                ? r.__cache[n] && null != r.__cache[n][t]
                                    ? r.__cache[n][t]
                                    : s(e).data(t)
                                : r.__cache[n];
                        }),
                        (r.RemoveData = function (e) {
                            var t = r.GetUniqueElementId(e);
                            null != r.__cache[t] && delete r.__cache[t],
                                e.removeAttribute("data-select2-id");
                        }),
                        (r.copyNonInternalCssClasses = function (e, t) {
                            var n = e.getAttribute("class").trim().split(/\s+/);
                            n = n.filter(function (e) {
                                return 0 === e.indexOf("select2-");
                            });
                            var i = t.getAttribute("class").trim().split(/\s+/);
                            i = i.filter(function (e) {
                                return 0 !== e.indexOf("select2-");
                            });
                            var r = n.concat(i);
                            e.setAttribute("class", r.join(" "));
                        }),
                        r
                    );
                }),
                e.define(
                    "select2/results",
                    ["jquery", "./utils"],
                    function (h, f) {
                        function i(e, t, n) {
                            (this.$element = e),
                                (this.data = n),
                                (this.options = t),
                                i.__super__.constructor.call(this);
                        }
                        return (
                            f.Extend(i, f.Observable),
                            (i.prototype.render = function () {
                                var e = h(
                                    '<ul class="select2-results__options" role="listbox"></ul>'
                                );
                                return (
                                    this.options.get("multiple") &&
                                        e.attr("aria-multiselectable", "true"),
                                    (this.$results = e)
                                );
                            }),
                            (i.prototype.clear = function () {
                                this.$results.empty();
                            }),
                            (i.prototype.displayMessage = function (e) {
                                var t = this.options.get("escapeMarkup");
                                this.clear(), this.hideLoading();
                                var n = h(
                                        '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                                    ),
                                    i = this.options
                                        .get("translations")
                                        .get(e.message);
                                n.append(t(i(e.args))),
                                    (n[0].className +=
                                        " select2-results__message"),
                                    this.$results.append(n);
                            }),
                            (i.prototype.hideMessages = function () {
                                this.$results
                                    .find(".select2-results__message")
                                    .remove();
                            }),
                            (i.prototype.append = function (e) {
                                this.hideLoading();
                                var t = [];
                                if (
                                    null != e.results &&
                                    0 !== e.results.length
                                ) {
                                    e.results = this.sort(e.results);
                                    for (var n = 0; n < e.results.length; n++) {
                                        var i = e.results[n],
                                            r = this.option(i);
                                        t.push(r);
                                    }
                                    this.$results.append(t);
                                } else
                                    0 === this.$results.children().length &&
                                        this.trigger("results:message", {
                                            message: "noResults",
                                        });
                            }),
                            (i.prototype.position = function (e, t) {
                                t.find(".select2-results").append(e);
                            }),
                            (i.prototype.sort = function (e) {
                                return this.options.get("sorter")(e);
                            }),
                            (i.prototype.highlightFirstItem = function () {
                                var e = this.$results.find(
                                        ".select2-results__option--selectable"
                                    ),
                                    t = e.filter(
                                        ".select2-results__option--selected"
                                    );
                                0 < t.length
                                    ? t.first().trigger("mouseenter")
                                    : e.first().trigger("mouseenter"),
                                    this.ensureHighlightVisible();
                            }),
                            (i.prototype.setClasses = function () {
                                var t = this;
                                this.data.current(function (e) {
                                    var i = e.map(function (e) {
                                        return e.id.toString();
                                    });
                                    t.$results
                                        .find(
                                            ".select2-results__option--selectable"
                                        )
                                        .each(function () {
                                            var e = h(this),
                                                t = f.GetData(this, "data"),
                                                n = "" + t.id;
                                            (null != t.element &&
                                                t.element.selected) ||
                                            (null == t.element &&
                                                -1 < i.indexOf(n))
                                                ? (this.classList.add(
                                                      "select2-results__option--selected"
                                                  ),
                                                  e.attr(
                                                      "aria-selected",
                                                      "true"
                                                  ))
                                                : (this.classList.remove(
                                                      "select2-results__option--selected"
                                                  ),
                                                  e.attr(
                                                      "aria-selected",
                                                      "false"
                                                  ));
                                        });
                                });
                            }),
                            (i.prototype.showLoading = function (e) {
                                this.hideLoading();
                                var t = {
                                        disabled: !0,
                                        loading: !0,
                                        text: this.options
                                            .get("translations")
                                            .get("searching")(e),
                                    },
                                    n = this.option(t);
                                (n.className += " loading-results"),
                                    this.$results.prepend(n);
                            }),
                            (i.prototype.hideLoading = function () {
                                this.$results.find(".loading-results").remove();
                            }),
                            (i.prototype.option = function (e) {
                                var t = document.createElement("li");
                                t.classList.add("select2-results__option"),
                                    t.classList.add(
                                        "select2-results__option--selectable"
                                    );
                                var n = { role: "option" },
                                    i =
                                        window.Element.prototype.matches ||
                                        window.Element.prototype
                                            .msMatchesSelector ||
                                        window.Element.prototype
                                            .webkitMatchesSelector;
                                for (var r in (((null != e.element &&
                                    i.call(e.element, ":disabled")) ||
                                    (null == e.element && e.disabled)) &&
                                    ((n["aria-disabled"] = "true"),
                                    t.classList.remove(
                                        "select2-results__option--selectable"
                                    ),
                                    t.classList.add(
                                        "select2-results__option--disabled"
                                    )),
                                null == e.id &&
                                    t.classList.remove(
                                        "select2-results__option--selectable"
                                    ),
                                null != e._resultId && (t.id = e._resultId),
                                e.title && (t.title = e.title),
                                e.children &&
                                    ((n.role = "group"),
                                    (n["aria-label"] = e.text),
                                    t.classList.remove(
                                        "select2-results__option--selectable"
                                    ),
                                    t.classList.add(
                                        "select2-results__option--group"
                                    )),
                                n)) {
                                    var s = n[r];
                                    t.setAttribute(r, s);
                                }
                                if (e.children) {
                                    var o = h(t),
                                        a = document.createElement("strong");
                                    (a.className = "select2-results__group"),
                                        this.template(e, a);
                                    for (
                                        var l = [], c = 0;
                                        c < e.children.length;
                                        c++
                                    ) {
                                        var u = e.children[c],
                                            d = this.option(u);
                                        l.push(d);
                                    }
                                    var p = h("<ul></ul>", {
                                        class: "select2-results__options select2-results__options--nested",
                                    });
                                    p.append(l), o.append(a), o.append(p);
                                } else this.template(e, t);
                                return f.StoreData(t, "data", e), t;
                            }),
                            (i.prototype.bind = function (t, e) {
                                var l = this,
                                    n = t.id + "-results";
                                this.$results.attr("id", n),
                                    t.on("results:all", function (e) {
                                        l.clear(),
                                            l.append(e.data),
                                            t.isOpen() &&
                                                (l.setClasses(),
                                                l.highlightFirstItem());
                                    }),
                                    t.on("results:append", function (e) {
                                        l.append(e.data),
                                            t.isOpen() && l.setClasses();
                                    }),
                                    t.on("query", function (e) {
                                        l.hideMessages(), l.showLoading(e);
                                    }),
                                    t.on("select", function () {
                                        t.isOpen() &&
                                            (l.setClasses(),
                                            l.options.get(
                                                "scrollAfterSelect"
                                            ) && l.highlightFirstItem());
                                    }),
                                    t.on("unselect", function () {
                                        t.isOpen() &&
                                            (l.setClasses(),
                                            l.options.get(
                                                "scrollAfterSelect"
                                            ) && l.highlightFirstItem());
                                    }),
                                    t.on("open", function () {
                                        l.$results.attr(
                                            "aria-expanded",
                                            "true"
                                        ),
                                            l.$results.attr(
                                                "aria-hidden",
                                                "false"
                                            ),
                                            l.setClasses(),
                                            l.ensureHighlightVisible();
                                    }),
                                    t.on("close", function () {
                                        l.$results.attr(
                                            "aria-expanded",
                                            "false"
                                        ),
                                            l.$results.attr(
                                                "aria-hidden",
                                                "true"
                                            ),
                                            l.$results.removeAttr(
                                                "aria-activedescendant"
                                            );
                                    }),
                                    t.on("results:toggle", function () {
                                        var e = l.getHighlightedResults();
                                        0 !== e.length && e.trigger("mouseup");
                                    }),
                                    t.on("results:select", function () {
                                        var e = l.getHighlightedResults();
                                        if (0 !== e.length) {
                                            var t = f.GetData(e[0], "data");
                                            e.hasClass(
                                                "select2-results__option--selected"
                                            )
                                                ? l.trigger("close", {})
                                                : l.trigger("select", {
                                                      data: t,
                                                  });
                                        }
                                    }),
                                    t.on("results:previous", function () {
                                        var e = l.getHighlightedResults(),
                                            t = l.$results.find(
                                                ".select2-results__option--selectable"
                                            ),
                                            n = t.index(e);
                                        if (!(n <= 0)) {
                                            var i = n - 1;
                                            0 === e.length && (i = 0);
                                            var r = t.eq(i);
                                            r.trigger("mouseenter");
                                            var s = l.$results.offset().top,
                                                o = r.offset().top,
                                                a =
                                                    l.$results.scrollTop() +
                                                    (o - s);
                                            0 === i
                                                ? l.$results.scrollTop(0)
                                                : o - s < 0 &&
                                                  l.$results.scrollTop(a);
                                        }
                                    }),
                                    t.on("results:next", function () {
                                        var e = l.getHighlightedResults(),
                                            t = l.$results.find(
                                                ".select2-results__option--selectable"
                                            ),
                                            n = t.index(e) + 1;
                                        if (!(n >= t.length)) {
                                            var i = t.eq(n);
                                            i.trigger("mouseenter");
                                            var r =
                                                    l.$results.offset().top +
                                                    l.$results.outerHeight(!1),
                                                s =
                                                    i.offset().top +
                                                    i.outerHeight(!1),
                                                o =
                                                    l.$results.scrollTop() +
                                                    s -
                                                    r;
                                            0 === n
                                                ? l.$results.scrollTop(0)
                                                : r < s &&
                                                  l.$results.scrollTop(o);
                                        }
                                    }),
                                    t.on("results:focus", function (e) {
                                        e.element[0].classList.add(
                                            "select2-results__option--highlighted"
                                        ),
                                            e.element[0].setAttribute(
                                                "aria-selected",
                                                "true"
                                            );
                                    }),
                                    t.on("results:message", function (e) {
                                        l.displayMessage(e);
                                    }),
                                    h.fn.mousewheel &&
                                        this.$results.on(
                                            "mousewheel",
                                            function (e) {
                                                var t = l.$results.scrollTop(),
                                                    n =
                                                        l.$results.get(0)
                                                            .scrollHeight -
                                                        t +
                                                        e.deltaY,
                                                    i =
                                                        0 < e.deltaY &&
                                                        t - e.deltaY <= 0,
                                                    r =
                                                        e.deltaY < 0 &&
                                                        n <=
                                                            l.$results.height();
                                                i
                                                    ? (l.$results.scrollTop(0),
                                                      e.preventDefault(),
                                                      e.stopPropagation())
                                                    : r &&
                                                      (l.$results.scrollTop(
                                                          l.$results.get(0)
                                                              .scrollHeight -
                                                              l.$results.height()
                                                      ),
                                                      e.preventDefault(),
                                                      e.stopPropagation());
                                            }
                                        ),
                                    this.$results.on(
                                        "mouseup",
                                        ".select2-results__option--selectable",
                                        function (e) {
                                            var t = h(this),
                                                n = f.GetData(this, "data");
                                            t.hasClass(
                                                "select2-results__option--selected"
                                            )
                                                ? l.options.get("multiple")
                                                    ? l.trigger("unselect", {
                                                          originalEvent: e,
                                                          data: n,
                                                      })
                                                    : l.trigger("close", {})
                                                : l.trigger("select", {
                                                      originalEvent: e,
                                                      data: n,
                                                  });
                                        }
                                    ),
                                    this.$results.on(
                                        "mouseenter",
                                        ".select2-results__option--selectable",
                                        function (e) {
                                            var t = f.GetData(this, "data");
                                            l
                                                .getHighlightedResults()
                                                .removeClass(
                                                    "select2-results__option--highlighted"
                                                )
                                                .attr("aria-selected", "false"),
                                                l.trigger("results:focus", {
                                                    data: t,
                                                    element: h(this),
                                                });
                                        }
                                    );
                            }),
                            (i.prototype.getHighlightedResults = function () {
                                return this.$results.find(
                                    ".select2-results__option--highlighted"
                                );
                            }),
                            (i.prototype.destroy = function () {
                                this.$results.remove();
                            }),
                            (i.prototype.ensureHighlightVisible = function () {
                                var e = this.getHighlightedResults();
                                if (0 !== e.length) {
                                    var t = this.$results
                                            .find(
                                                ".select2-results__option--selectable"
                                            )
                                            .index(e),
                                        n = this.$results.offset().top,
                                        i = e.offset().top,
                                        r = this.$results.scrollTop() + (i - n),
                                        s = i - n;
                                    (r -= 2 * e.outerHeight(!1)),
                                        t <= 2
                                            ? this.$results.scrollTop(0)
                                            : (s >
                                                  this.$results.outerHeight() ||
                                                  s < 0) &&
                                              this.$results.scrollTop(r);
                                }
                            }),
                            (i.prototype.template = function (e, t) {
                                var n = this.options.get("templateResult"),
                                    i = this.options.get("escapeMarkup"),
                                    r = n(e, t);
                                null == r
                                    ? (t.style.display = "none")
                                    : "string" == typeof r
                                    ? (t.innerHTML = i(r))
                                    : h(t).append(r);
                            }),
                            i
                        );
                    }
                ),
                e.define("select2/keys", [], function () {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46,
                    };
                }),
                e.define(
                    "select2/selection/base",
                    ["jquery", "../utils", "../keys"],
                    function (n, i, r) {
                        function s(e, t) {
                            (this.$element = e),
                                (this.options = t),
                                s.__super__.constructor.call(this);
                        }
                        return (
                            i.Extend(s, i.Observable),
                            (s.prototype.render = function () {
                                var e = n(
                                    '<span style="border: none;" class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                                );
                                return (
                                    (this._tabindex = 0),
                                    null !=
                                    i.GetData(this.$element[0], "old-tabindex")
                                        ? (this._tabindex = i.GetData(
                                              this.$element[0],
                                              "old-tabindex"
                                          ))
                                        : null !=
                                              this.$element.attr("tabindex") &&
                                          (this._tabindex =
                                              this.$element.attr("tabindex")),
                                    e.attr(
                                        "title",
                                        this.$element.attr("title")
                                    ),
                                    e.attr("tabindex", this._tabindex),
                                    e.attr("aria-disabled", "false"),
                                    (this.$selection = e)
                                );
                            }),
                            (s.prototype.bind = function (e, t) {
                                var n = this,
                                    i = e.id + "-results";
                                (this.container = e),
                                    this.$selection.on("focus", function (e) {
                                        n.trigger("focus", e);
                                    }),
                                    this.$selection.on("blur", function (e) {
                                        n._handleBlur(e);
                                    }),
                                    this.$selection.on("keydown", function (e) {
                                        n.trigger("keypress", e),
                                            e.which === r.SPACE &&
                                                e.preventDefault();
                                    }),
                                    e.on("results:focus", function (e) {
                                        n.$selection.attr(
                                            "aria-activedescendant",
                                            e.data._resultId
                                        );
                                    }),
                                    e.on("selection:update", function (e) {
                                        n.update(e.data);
                                    }),
                                    e.on("open", function () {
                                        n.$selection.attr(
                                            "aria-expanded",
                                            "true"
                                        ),
                                            n.$selection.attr("aria-owns", i),
                                            n._attachCloseHandler(e);
                                    }),
                                    e.on("close", function () {
                                        n.$selection.attr(
                                            "aria-expanded",
                                            "false"
                                        ),
                                            n.$selection.removeAttr(
                                                "aria-activedescendant"
                                            ),
                                            n.$selection.removeAttr(
                                                "aria-owns"
                                            ),
                                            n.$selection.trigger("focus"),
                                            n._detachCloseHandler(e);
                                    }),
                                    e.on("enable", function () {
                                        n.$selection.attr(
                                            "tabindex",
                                            n._tabindex
                                        ),
                                            n.$selection.attr(
                                                "aria-disabled",
                                                "false"
                                            );
                                    }),
                                    e.on("disable", function () {
                                        n.$selection.attr("tabindex", "-1"),
                                            n.$selection.attr(
                                                "aria-disabled",
                                                "true"
                                            );
                                    });
                            }),
                            (s.prototype._handleBlur = function (e) {
                                var t = this;
                                window.setTimeout(function () {
                                    document.activeElement == t.$selection[0] ||
                                        n.contains(
                                            t.$selection[0],
                                            document.activeElement
                                        ) ||
                                        t.trigger("blur", e);
                                }, 1);
                            }),
                            (s.prototype._attachCloseHandler = function (e) {
                                n(document.body).on(
                                    "mousedown.select2." + e.id,
                                    function (e) {
                                        var t = n(e.target).closest(".select2");
                                        n(
                                            ".select2.select2-container--open"
                                        ).each(function () {
                                            this != t[0] &&
                                                i
                                                    .GetData(this, "element")
                                                    .select2("close");
                                        });
                                    }
                                );
                            }),
                            (s.prototype._detachCloseHandler = function (e) {
                                n(document.body).off(
                                    "mousedown.select2." + e.id
                                );
                            }),
                            (s.prototype.position = function (e, t) {
                                t.find(".selection").append(e);
                            }),
                            (s.prototype.destroy = function () {
                                this._detachCloseHandler(this.container);
                            }),
                            (s.prototype.update = function (e) {
                                throw new Error(
                                    "The `update` method must be defined in child classes."
                                );
                            }),
                            (s.prototype.isEnabled = function () {
                                return !this.isDisabled();
                            }),
                            (s.prototype.isDisabled = function () {
                                return this.options.get("disabled");
                            }),
                            s
                        );
                    }
                ),
                e.define(
                    "select2/selection/single",
                    ["jquery", "./base", "../utils", "../keys"],
                    function (e, t, n, i) {
                        function r() {
                            r.__super__.constructor.apply(this, arguments);
                        }
                        return (
                            n.Extend(r, t),
                            (r.prototype.render = function () {
                                var e = r.__super__.render.call(this);
                                return (
                                    e[0].classList.add(
                                        "select2-selection--single"
                                    ),
                                    e.html(
                                        '<span class="select2-selection__rendered form-select"></span>'
                                    ),
                                    e
                                );
                            }),
                            (r.prototype.bind = function (t, e) {
                                var n = this;
                                r.__super__.bind.apply(this, arguments);
                                var i = t.id + "-container";
                                this.$selection
                                    .find(".select2-selection__rendered")
                                    .attr("id", i)
                                    .attr("role", "textbox")
                                    .attr("aria-readonly", "true"),
                                    this.$selection.attr("aria-labelledby", i),
                                    this.$selection.on(
                                        "mousedown",
                                        function (e) {
                                            1 === e.which &&
                                                n.trigger("toggle", {
                                                    originalEvent: e,
                                                });
                                        }
                                    ),
                                    this.$selection.on(
                                        "focus",
                                        function (e) {}
                                    ),
                                    this.$selection.on("blur", function (e) {}),
                                    t.on("focus", function (e) {
                                        t.isOpen() ||
                                            n.$selection.trigger("focus");
                                    });
                            }),
                            (r.prototype.clear = function () {
                                var e = this.$selection.find(
                                    ".select2-selection__rendered"
                                );
                                e.empty(), e.removeAttr("title");
                            }),
                            (r.prototype.display = function (e, t) {
                                var n = this.options.get("templateSelection");
                                return this.options.get("escapeMarkup")(
                                    n(e, t)
                                );
                            }),
                            (r.prototype.selectionContainer = function () {
                                return e("<span></span>");
                            }),
                            (r.prototype.update = function (e) {
                                if (0 !== e.length) {
                                    var t = e[0],
                                        n = this.$selection.find(
                                            ".select2-selection__rendered"
                                        ),
                                        i = this.display(t, n);
                                    n.empty().append(i);
                                    var r = t.title || t.text;
                                    r
                                        ? n.attr("title", r)
                                        : n.removeAttr("title");
                                } else this.clear();
                            }),
                            r
                        );
                    }
                ),
                e.define(
                    "select2/selection/multiple",
                    ["jquery", "./base", "../utils"],
                    function (r, e, d) {
                        function s(e, t) {
                            s.__super__.constructor.apply(this, arguments);
                        }
                        return (
                            d.Extend(s, e),
                            (s.prototype.render = function () {
                                var e = s.__super__.render.call(this);
                                return (
                                    e[0].classList.add(
                                        "select2-selection--multiple"
                                    ),
                                    e.html(
                                        '<ul class="select2-selection__rendered"></ul>'
                                    ),
                                    e
                                );
                            }),
                            (s.prototype.bind = function (e, t) {
                                var i = this;
                                s.__super__.bind.apply(this, arguments);
                                var n = e.id + "-container";
                                this.$selection
                                    .find(".select2-selection__rendered")
                                    .attr("id", n),
                                    this.$selection.on("click", function (e) {
                                        i.trigger("toggle", {
                                            originalEvent: e,
                                        });
                                    }),
                                    this.$selection.on(
                                        "click",
                                        ".select2-selection__choice__remove",
                                        function (e) {
                                            if (!i.isDisabled()) {
                                                var t = r(this).parent(),
                                                    n = d.GetData(t[0], "data");
                                                i.trigger("unselect", {
                                                    originalEvent: e,
                                                    data: n,
                                                });
                                            }
                                        }
                                    ),
                                    this.$selection.on(
                                        "keydown",
                                        ".select2-selection__choice__remove",
                                        function (e) {
                                            i.isDisabled() ||
                                                e.stopPropagation();
                                        }
                                    );
                            }),
                            (s.prototype.clear = function () {
                                var e = this.$selection.find(
                                    ".select2-selection__rendered"
                                );
                                e.empty(), e.removeAttr("title");
                            }),
                            (s.prototype.display = function (e, t) {
                                var n = this.options.get("templateSelection");
                                return this.options.get("escapeMarkup")(
                                    n(e, t)
                                );
                            }),
                            (s.prototype.selectionContainer = function () {
                                return r(
                                    '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                                );
                            }),
                            (s.prototype.update = function (e) {
                                if ((this.clear(), 0 !== e.length)) {
                                    for (
                                        var t = [],
                                            n =
                                                this.$selection
                                                    .find(
                                                        ".select2-selection__rendered"
                                                    )
                                                    .attr("id") + "-choice-",
                                            i = 0;
                                        i < e.length;
                                        i++
                                    ) {
                                        var r = e[i],
                                            s = this.selectionContainer(),
                                            o = this.display(r, s),
                                            a = n + d.generateChars(4) + "-";
                                        r.id
                                            ? (a += r.id)
                                            : (a += d.generateChars(4)),
                                            s
                                                .find(
                                                    ".select2-selection__choice__display"
                                                )
                                                .append(o)
                                                .attr("id", a);
                                        var l = r.title || r.text;
                                        l && s.attr("title", l);
                                        var c = this.options
                                                .get("translations")
                                                .get("removeItem"),
                                            u = s.find(
                                                ".select2-selection__choice__remove"
                                            );
                                        u.attr("title", c()),
                                            u.attr("aria-label", c()),
                                            u.attr("aria-describedby", a),
                                            d.StoreData(s[0], "data", r),
                                            t.push(s);
                                    }
                                    this.$selection
                                        .find(".select2-selection__rendered")
                                        .append(t);
                                }
                            }),
                            s
                        );
                    }
                ),
                e.define("select2/selection/placeholder", [], function () {
                    function e(e, t, n) {
                        (this.placeholder = this.normalizePlaceholder(
                            n.get("placeholder")
                        )),
                            e.call(this, t, n);
                    }
                    return (
                        (e.prototype.normalizePlaceholder = function (e, t) {
                            return (
                                "string" == typeof t &&
                                    (t = { id: "", text: t }),
                                t
                            );
                        }),
                        (e.prototype.createPlaceholder = function (e, t) {
                            var n = this.selectionContainer();
                            return (
                                n.html(this.display(t)),
                                n[0].classList.add(
                                    "select2-selection__placeholder"
                                ),
                                n[0].classList.remove(
                                    "select2-selection__choice"
                                ),
                                n
                            );
                        }),
                        (e.prototype.update = function (e, t) {
                            var n =
                                1 == t.length && t[0].id != this.placeholder.id;
                            if (1 < t.length || n) return e.call(this, t);
                            this.clear();
                            var i = this.createPlaceholder(this.placeholder);
                            this.$selection
                                .find(".select2-selection__rendered")
                                .append(i);
                        }),
                        e
                    );
                }),
                e.define(
                    "select2/selection/allowClear",
                    ["jquery", "../keys", "../utils"],
                    function (s, i, a) {
                        function e() {}
                        return (
                            (e.prototype.bind = function (e, t, n) {
                                var i = this;
                                e.call(this, t, n),
                                    null == this.placeholder &&
                                        this.options.get("debug") &&
                                        window.console &&
                                        console.error &&
                                        console.error(
                                            "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                                        ),
                                    this.$selection.on(
                                        "mousedown",
                                        ".select2-selection__clear",
                                        function (e) {
                                            i._handleClear(e);
                                        }
                                    ),
                                    t.on("keypress", function (e) {
                                        i._handleKeyboardClear(e, t);
                                    });
                            }),
                            (e.prototype._handleClear = function (e, t) {
                                if (!this.isDisabled()) {
                                    var n = this.$selection.find(
                                        ".select2-selection__clear"
                                    );
                                    if (0 !== n.length) {
                                        t.stopPropagation();
                                        var i = a.GetData(n[0], "data"),
                                            r = this.$element.val();
                                        this.$element.val(this.placeholder.id);
                                        var s = { data: i };
                                        if (
                                            (this.trigger("clear", s),
                                            s.prevented)
                                        )
                                            this.$element.val(r);
                                        else {
                                            for (var o = 0; o < i.length; o++)
                                                if (
                                                    ((s = { data: i[o] }),
                                                    this.trigger("unselect", s),
                                                    s.prevented)
                                                )
                                                    return void this.$element.val(
                                                        r
                                                    );
                                            this.$element
                                                .trigger("input")
                                                .trigger("change"),
                                                this.trigger("toggle", {});
                                        }
                                    }
                                }
                            }),
                            (e.prototype._handleKeyboardClear = function (
                                e,
                                t,
                                n
                            ) {
                                n.isOpen() ||
                                    (t.which != i.DELETE &&
                                        t.which != i.BACKSPACE) ||
                                    this._handleClear(t);
                            }),
                            (e.prototype.update = function (e, t) {
                                if (
                                    (e.call(this, t),
                                    this.$selection
                                        .find(".select2-selection__clear")
                                        .remove(),
                                    !(
                                        0 <
                                            this.$selection.find(
                                                ".select2-selection__placeholder"
                                            ).length || 0 === t.length
                                    ))
                                ) {
                                    var n = this.$selection
                                            .find(
                                                ".select2-selection__rendered"
                                            )
                                            .attr("id"),
                                        i = this.options
                                            .get("translations")
                                            .get("removeAllItems"),
                                        r = s(
                                            '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                                        );
                                    r.attr("title", i()),
                                        r.attr("aria-label", i()),
                                        r.attr("aria-describedby", n),
                                        a.StoreData(r[0], "data", t),
                                        this.$selection.prepend(r);
                                }
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/selection/search",
                    ["jquery", "../utils", "../keys"],
                    function (i, l, c) {
                        function e(e, t, n) {
                            e.call(this, t, n);
                        }
                        return (
                            (e.prototype.render = function (e) {
                                var t = i(
                                    '<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                                );
                                (this.$searchContainer = t),
                                    (this.$search = t.find("input")),
                                    this.$search.prop(
                                        "autocomplete",
                                        this.options.get("autocomplete")
                                    );
                                var n = e.call(this);
                                return (
                                    this._transferTabIndex(),
                                    n.append(this.$searchContainer),
                                    n
                                );
                            }),
                            (e.prototype.bind = function (e, t, n) {
                                var i = this,
                                    r = t.id + "-results",
                                    s = t.id + "-container";
                                e.call(this, t, n),
                                    i.$search.attr("aria-describedby", s),
                                    t.on("open", function () {
                                        i.$search.attr("aria-controls", r),
                                            i.$search.trigger("focus");
                                    }),
                                    t.on("close", function () {
                                        i.$search.val(""),
                                            i.resizeSearch(),
                                            i.$search.removeAttr(
                                                "aria-controls"
                                            ),
                                            i.$search.removeAttr(
                                                "aria-activedescendant"
                                            ),
                                            i.$search.trigger("focus");
                                    }),
                                    t.on("enable", function () {
                                        i.$search.prop("disabled", !1),
                                            i._transferTabIndex();
                                    }),
                                    t.on("disable", function () {
                                        i.$search.prop("disabled", !0);
                                    }),
                                    t.on("focus", function (e) {
                                        i.$search.trigger("focus");
                                    }),
                                    t.on("results:focus", function (e) {
                                        e.data._resultId
                                            ? i.$search.attr(
                                                  "aria-activedescendant",
                                                  e.data._resultId
                                              )
                                            : i.$search.removeAttr(
                                                  "aria-activedescendant"
                                              );
                                    }),
                                    this.$selection.on(
                                        "focusin",
                                        ".select2-search--inline",
                                        function (e) {
                                            i.trigger("focus", e);
                                        }
                                    ),
                                    this.$selection.on(
                                        "focusout",
                                        ".select2-search--inline",
                                        function (e) {
                                            i._handleBlur(e);
                                        }
                                    ),
                                    this.$selection.on(
                                        "keydown",
                                        ".select2-search--inline",
                                        function (e) {
                                            if (
                                                (e.stopPropagation(),
                                                i.trigger("keypress", e),
                                                (i._keyUpPrevented =
                                                    e.isDefaultPrevented()),
                                                e.which === c.BACKSPACE &&
                                                    "" === i.$search.val())
                                            ) {
                                                var t = i.$selection
                                                    .find(
                                                        ".select2-selection__choice"
                                                    )
                                                    .last();
                                                if (0 < t.length) {
                                                    var n = l.GetData(
                                                        t[0],
                                                        "data"
                                                    );
                                                    i.searchRemoveChoice(n),
                                                        e.preventDefault();
                                                }
                                            }
                                        }
                                    ),
                                    this.$selection.on(
                                        "click",
                                        ".select2-search--inline",
                                        function (e) {
                                            i.$search.val() &&
                                                e.stopPropagation();
                                        }
                                    );
                                var o = document.documentMode,
                                    a = o && o <= 11;
                                this.$selection.on(
                                    "input.searchcheck",
                                    ".select2-search--inline",
                                    function (e) {
                                        a
                                            ? i.$selection.off(
                                                  "input.search input.searchcheck"
                                              )
                                            : i.$selection.off("keyup.search");
                                    }
                                ),
                                    this.$selection.on(
                                        "keyup.search input.search",
                                        ".select2-search--inline",
                                        function (e) {
                                            if (a && "input" === e.type)
                                                i.$selection.off(
                                                    "input.search input.searchcheck"
                                                );
                                            else {
                                                var t = e.which;
                                                t != c.SHIFT &&
                                                    t != c.CTRL &&
                                                    t != c.ALT &&
                                                    t != c.TAB &&
                                                    i.handleSearch(e);
                                            }
                                        }
                                    );
                            }),
                            (e.prototype._transferTabIndex = function (e) {
                                this.$search.attr(
                                    "tabindex",
                                    this.$selection.attr("tabindex")
                                ),
                                    this.$selection.attr("tabindex", "-1");
                            }),
                            (e.prototype.createPlaceholder = function (e, t) {
                                this.$search.attr("placeholder", t.text);
                            }),
                            (e.prototype.update = function (e, t) {
                                var n =
                                    this.$search[0] == document.activeElement;
                                this.$search.attr("placeholder", ""),
                                    e.call(this, t),
                                    this.resizeSearch(),
                                    n && this.$search.trigger("focus");
                            }),
                            (e.prototype.handleSearch = function () {
                                if (
                                    (this.resizeSearch(), !this._keyUpPrevented)
                                ) {
                                    var e = this.$search.val();
                                    this.trigger("query", { term: e });
                                }
                                this._keyUpPrevented = !1;
                            }),
                            (e.prototype.searchRemoveChoice = function (e, t) {
                                this.trigger("unselect", { data: t }),
                                    this.$search.val(t.text),
                                    this.handleSearch();
                            }),
                            (e.prototype.resizeSearch = function () {
                                this.$search.css("width", "25px");
                                var e = "100%";
                                "" === this.$search.attr("placeholder") &&
                                    (e =
                                        0.75 * (this.$search.val().length + 1) +
                                        "em");
                                this.$search.css("width", e);
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/selection/selectionCss",
                    ["../utils"],
                    function (i) {
                        function e() {}
                        return (
                            (e.prototype.render = function (e) {
                                var t = e.call(this),
                                    n =
                                        this.options.get("selectionCssClass") ||
                                        "";
                                return (
                                    -1 !== n.indexOf(":all:") &&
                                        ((n = n.replace(":all:", "")),
                                        i.copyNonInternalCssClasses(
                                            t[0],
                                            this.$element[0]
                                        )),
                                    t.addClass(n),
                                    t
                                );
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/selection/eventRelay",
                    ["jquery"],
                    function (o) {
                        function e() {}
                        return (
                            (e.prototype.bind = function (e, t, n) {
                                var i = this,
                                    r = [
                                        "open",
                                        "opening",
                                        "close",
                                        "closing",
                                        "select",
                                        "selecting",
                                        "unselect",
                                        "unselecting",
                                        "clear",
                                        "clearing",
                                    ],
                                    s = [
                                        "opening",
                                        "closing",
                                        "selecting",
                                        "unselecting",
                                        "clearing",
                                    ];
                                e.call(this, t, n),
                                    t.on("*", function (e, t) {
                                        if (-1 !== r.indexOf(e)) {
                                            t = t || {};
                                            var n = o.Event("select2:" + e, {
                                                params: t,
                                            });
                                            i.$element.trigger(n),
                                                -1 !== s.indexOf(e) &&
                                                    (t.prevented =
                                                        n.isDefaultPrevented());
                                        }
                                    });
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/translation",
                    ["jquery", "require"],
                    function (t, n) {
                        function i(e) {
                            this.dict = e || {};
                        }
                        return (
                            (i.prototype.all = function () {
                                return this.dict;
                            }),
                            (i.prototype.get = function (e) {
                                return this.dict[e];
                            }),
                            (i.prototype.extend = function (e) {
                                this.dict = t.extend({}, e.all(), this.dict);
                            }),
                            (i._cache = {}),
                            (i.loadPath = function (e) {
                                if (!(e in i._cache)) {
                                    var t = n(e);
                                    i._cache[e] = t;
                                }
                                return new i(i._cache[e]);
                            }),
                            i
                        );
                    }
                ),
                e.define("select2/diacritics", [], function () {
                    return {
                        "â’¶": "A",
                        "ï¼¡": "A",
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "áº¦": "A",
                        "áº¤": "A",
                        áºª: "A",
                        "áº¨": "A",
                        Ãƒ: "A",
                        "Ä€": "A",
                        "Ä‚": "A",
                        "áº°": "A",
                        "áº®": "A",
                        "áº´": "A",
                        "áº²": "A",
                        "È¦": "A",
                        "Ç ": "A",
                        "Ã„": "A",
                        Çž: "A",
                        "áº¢": "A",
                        "Ã…": "A",
                        Çº: "A",
                        "Ç": "A",
                        "È€": "A",
                        "È‚": "A",
                        "áº ": "A",
                        "áº¬": "A",
                        "áº¶": "A",
                        "á¸€": "A",
                        "Ä„": "A",
                        Èº: "A",
                        "â±¯": "A",
                        "êœ²": "AA",
                        "Ã†": "AE",
                        "Ç¼": "AE",
                        "Ç¢": "AE",
                        "êœ´": "AO",
                        "êœ¶": "AU",
                        "êœ¸": "AV",
                        êœº: "AV",
                        "êœ¼": "AY",
                        "â’·": "B",
                        "ï¼¢": "B",
                        "á¸‚": "B",
                        "á¸„": "B",
                        "á¸†": "B",
                        Éƒ: "B",
                        "Æ‚": "B",
                        "Æ": "B",
                        "â’¸": "C",
                        "ï¼£": "C",
                        "Ä†": "C",
                        Äˆ: "C",
                        ÄŠ: "C",
                        ÄŒ: "C",
                        "Ã‡": "C",
                        "á¸ˆ": "C",
                        "Æ‡": "C",
                        "È»": "C",
                        "êœ¾": "C",
                        "â’¹": "D",
                        "ï¼¤": "D",
                        "á¸Š": "D",
                        ÄŽ: "D",
                        "á¸Œ": "D",
                        "á¸": "D",
                        "á¸’": "D",
                        "á¸Ž": "D",
                        "Ä": "D",
                        "Æ‹": "D",
                        ÆŠ: "D",
                        "Æ‰": "D",
                        "ê¹": "D",
                        "Ç±": "DZ",
                        "Ç„": "DZ",
                        "Ç²": "Dz",
                        "Ç…": "Dz",
                        "â’º": "E",
                        "ï¼¥": "E",
                        Ãˆ: "E",
                        "Ã‰": "E",
                        ÃŠ: "E",
                        "á»€": "E",
                        "áº¾": "E",
                        "á»„": "E",
                        "á»‚": "E",
                        "áº¼": "E",
                        "Ä’": "E",
                        "á¸”": "E",
                        "á¸–": "E",
                        "Ä”": "E",
                        "Ä–": "E",
                        "Ã‹": "E",
                        áºº: "E",
                        Äš: "E",
                        "È„": "E",
                        "È†": "E",
                        "áº¸": "E",
                        "á»†": "E",
                        "È¨": "E",
                        "á¸œ": "E",
                        "Ä˜": "E",
                        "á¸˜": "E",
                        "á¸š": "E",
                        "Æ": "E",
                        ÆŽ: "E",
                        "â’»": "F",
                        "ï¼¦": "F",
                        "á¸ž": "F",
                        "Æ‘": "F",
                        "ê»": "F",
                        "â’¼": "G",
                        "ï¼§": "G",
                        "Ç´": "G",
                        Äœ: "G",
                        "á¸ ": "G",
                        Äž: "G",
                        "Ä ": "G",
                        "Ç¦": "G",
                        "Ä¢": "G",
                        "Ç¤": "G",
                        "Æ“": "G",
                        "êž ": "G",
                        "ê½": "G",
                        "ê¾": "G",
                        "â’½": "H",
                        "ï¼¨": "H",
                        "Ä¤": "H",
                        "á¸¢": "H",
                        "á¸¦": "H",
                        Èž: "H",
                        "á¸¤": "H",
                        "á¸¨": "H",
                        "á¸ª": "H",
                        "Ä¦": "H",
                        "â±§": "H",
                        "â±µ": "H",
                        "êž": "H",
                        "â’¾": "I",
                        "ï¼©": "I",
                        ÃŒ: "I",
                        "Ã": "I",
                        ÃŽ: "I",
                        "Ä¨": "I",
                        Äª: "I",
                        "Ä¬": "I",
                        "Ä°": "I",
                        "Ã": "I",
                        "á¸®": "I",
                        "á»ˆ": "I",
                        "Ç": "I",
                        Èˆ: "I",
                        ÈŠ: "I",
                        "á»Š": "I",
                        "Ä®": "I",
                        "á¸¬": "I",
                        "Æ—": "I",
                        "â’¿": "J",
                        "ï¼ª": "J",
                        "Ä´": "J",
                        Éˆ: "J",
                        "â“€": "K",
                        "ï¼«": "K",
                        "á¸°": "K",
                        "Ç¨": "K",
                        "á¸²": "K",
                        "Ä¶": "K",
                        "á¸´": "K",
                        "Æ˜": "K",
                        "â±©": "K",
                        "ê€": "K",
                        "ê‚": "K",
                        "ê„": "K",
                        "êž¢": "K",
                        "â“": "L",
                        "ï¼¬": "L",
                        "Ä¿": "L",
                        "Ä¹": "L",
                        "Ä½": "L",
                        "á¸¶": "L",
                        "á¸¸": "L",
                        "Ä»": "L",
                        "á¸¼": "L",
                        "á¸º": "L",
                        "Å": "L",
                        "È½": "L",
                        "â±¢": "L",
                        "â± ": "L",
                        "êˆ": "L",
                        "ê†": "L",
                        "êž€": "L",
                        "Ç‡": "LJ",
                        Çˆ: "Lj",
                        "â“‚": "M",
                        "ï¼­": "M",
                        "á¸¾": "M",
                        "á¹€": "M",
                        "á¹‚": "M",
                        "â±®": "M",
                        Æœ: "M",
                        "â“ƒ": "N",
                        "ï¼®": "N",
                        "Ç¸": "N",
                        Åƒ: "N",
                        "Ã‘": "N",
                        "á¹„": "N",
                        "Å‡": "N",
                        "á¹†": "N",
                        "Å…": "N",
                        "á¹Š": "N",
                        "á¹ˆ": "N",
                        "È ": "N",
                        "Æ": "N",
                        "êž": "N",
                        "êž¤": "N",
                        ÇŠ: "NJ",
                        "Ç‹": "Nj",
                        "â“„": "O",
                        "ï¼¯": "O",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "á»’": "O",
                        "á»": "O",
                        "á»–": "O",
                        "á»”": "O",
                        "Ã•": "O",
                        "á¹Œ": "O",
                        "È¬": "O",
                        "á¹Ž": "O",
                        ÅŒ: "O",
                        "á¹": "O",
                        "á¹’": "O",
                        ÅŽ: "O",
                        "È®": "O",
                        "È°": "O",
                        "Ã–": "O",
                        Èª: "O",
                        "á»Ž": "O",
                        "Å": "O",
                        "Ç‘": "O",
                        ÈŒ: "O",
                        ÈŽ: "O",
                        "Æ ": "O",
                        "á»œ": "O",
                        "á»š": "O",
                        "á» ": "O",
                        "á»ž": "O",
                        "á»¢": "O",
                        "á»Œ": "O",
                        "á»˜": "O",
                        Çª: "O",
                        "Ç¬": "O",
                        "Ã˜": "O",
                        "Ç¾": "O",
                        "Æ†": "O",
                        ÆŸ: "O",
                        "êŠ": "O",
                        "êŒ": "O",
                        "Å’": "OE",
                        "Æ¢": "OI",
                        "êŽ": "OO",
                        "È¢": "OU",
                        "â“…": "P",
                        "ï¼°": "P",
                        "á¹”": "P",
                        "á¹–": "P",
                        "Æ¤": "P",
                        "â±£": "P",
                        "ê": "P",
                        "ê’": "P",
                        "ê”": "P",
                        "â“†": "Q",
                        "ï¼±": "Q",
                        "ê–": "Q",
                        "ê˜": "Q",
                        ÉŠ: "Q",
                        "â“‡": "R",
                        "ï¼²": "R",
                        "Å”": "R",
                        "á¹˜": "R",
                        "Å˜": "R",
                        "È": "R",
                        "È’": "R",
                        "á¹š": "R",
                        "á¹œ": "R",
                        "Å–": "R",
                        "á¹ž": "R",
                        ÉŒ: "R",
                        "â±¤": "R",
                        "êš": "R",
                        "êž¦": "R",
                        "êž‚": "R",
                        "â“ˆ": "S",
                        "ï¼³": "S",
                        áºž: "S",
                        Åš: "S",
                        "á¹¤": "S",
                        Åœ: "S",
                        "á¹ ": "S",
                        "Å ": "S",
                        "á¹¦": "S",
                        "á¹¢": "S",
                        "á¹¨": "S",
                        "È˜": "S",
                        Åž: "S",
                        "â±¾": "S",
                        "êž¨": "S",
                        "êž„": "S",
                        "â“‰": "T",
                        "ï¼´": "T",
                        "á¹ª": "T",
                        "Å¤": "T",
                        "á¹¬": "T",
                        Èš: "T",
                        "Å¢": "T",
                        "á¹°": "T",
                        "á¹®": "T",
                        "Å¦": "T",
                        "Æ¬": "T",
                        "Æ®": "T",
                        "È¾": "T",
                        "êž†": "T",
                        "êœ¨": "TZ",
                        "â“Š": "U",
                        "ï¼µ": "U",
                        "Ã™": "U",
                        Ãš: "U",
                        "Ã›": "U",
                        "Å¨": "U",
                        "á¹¸": "U",
                        Åª: "U",
                        "á¹º": "U",
                        "Å¬": "U",
                        Ãœ: "U",
                        "Ç›": "U",
                        "Ç—": "U",
                        "Ç•": "U",
                        "Ç™": "U",
                        "á»¦": "U",
                        "Å®": "U",
                        "Å°": "U",
                        "Ç“": "U",
                        "È”": "U",
                        "È–": "U",
                        "Æ¯": "U",
                        "á»ª": "U",
                        "á»¨": "U",
                        "á»®": "U",
                        "á»¬": "U",
                        "á»°": "U",
                        "á»¤": "U",
                        "á¹²": "U",
                        "Å²": "U",
                        "á¹¶": "U",
                        "á¹´": "U",
                        "É„": "U",
                        "â“‹": "V",
                        "ï¼¶": "V",
                        "á¹¼": "V",
                        "á¹¾": "V",
                        "Æ²": "V",
                        "êž": "V",
                        "É…": "V",
                        "ê ": "VY",
                        "â“Œ": "W",
                        "ï¼·": "W",
                        "áº€": "W",
                        "áº‚": "W",
                        "Å´": "W",
                        "áº†": "W",
                        "áº„": "W",
                        áºˆ: "W",
                        "â±²": "W",
                        "â“": "X",
                        "ï¼¸": "X",
                        áºŠ: "X",
                        áºŒ: "X",
                        "â“Ž": "Y",
                        "ï¼¹": "Y",
                        "á»²": "Y",
                        "Ã": "Y",
                        "Å¶": "Y",
                        "á»¸": "Y",
                        "È²": "Y",
                        áºŽ: "Y",
                        "Å¸": "Y",
                        "á»¶": "Y",
                        "á»´": "Y",
                        "Æ³": "Y",
                        ÉŽ: "Y",
                        "á»¾": "Y",
                        "â“": "Z",
                        "ï¼º": "Z",
                        "Å¹": "Z",
                        "áº": "Z",
                        "Å»": "Z",
                        "Å½": "Z",
                        "áº’": "Z",
                        "áº”": "Z",
                        Æµ: "Z",
                        "È¤": "Z",
                        "â±¿": "Z",
                        "â±«": "Z",
                        "ê¢": "Z",
                        "â“": "a",
                        "ï½": "a",
                        áºš: "a",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "áº§": "a",
                        "áº¥": "a",
                        "áº«": "a",
                        "áº©": "a",
                        "Ã£": "a",
                        "Ä": "a",
                        Äƒ: "a",
                        "áº±": "a",
                        "áº¯": "a",
                        áºµ: "a",
                        "áº³": "a",
                        "È§": "a",
                        "Ç¡": "a",
                        "Ã¤": "a",
                        ÇŸ: "a",
                        "áº£": "a",
                        "Ã¥": "a",
                        "Ç»": "a",
                        ÇŽ: "a",
                        "È": "a",
                        Èƒ: "a",
                        "áº¡": "a",
                        "áº­": "a",
                        "áº·": "a",
                        "á¸": "a",
                        "Ä…": "a",
                        "â±¥": "a",
                        "É": "a",
                        "êœ³": "aa",
                        "Ã¦": "ae",
                        "Ç½": "ae",
                        "Ç£": "ae",
                        êœµ: "ao",
                        "êœ·": "au",
                        "êœ¹": "av",
                        "êœ»": "av",
                        "êœ½": "ay",
                        "â“‘": "b",
                        "ï½‚": "b",
                        "á¸ƒ": "b",
                        "á¸…": "b",
                        "á¸‡": "b",
                        "Æ€": "b",
                        Æƒ: "b",
                        "É“": "b",
                        "â“’": "c",
                        "ï½ƒ": "c",
                        "Ä‡": "c",
                        "Ä‰": "c",
                        "Ä‹": "c",
                        "Ä": "c",
                        "Ã§": "c",
                        "á¸‰": "c",
                        Æˆ: "c",
                        "È¼": "c",
                        "êœ¿": "c",
                        "â†„": "c",
                        "â““": "d",
                        "ï½„": "d",
                        "á¸‹": "d",
                        "Ä": "d",
                        "á¸": "d",
                        "á¸‘": "d",
                        "á¸“": "d",
                        "á¸": "d",
                        "Ä‘": "d",
                        ÆŒ: "d",
                        "É–": "d",
                        "É—": "d",
                        "êº": "d",
                        "Ç³": "dz",
                        "Ç†": "dz",
                        "â“”": "e",
                        "ï½…": "e",
                        "Ã¨": "e",
                        "Ã©": "e",
                        Ãª: "e",
                        "á»": "e",
                        "áº¿": "e",
                        "á»…": "e",
                        "á»ƒ": "e",
                        "áº½": "e",
                        "Ä“": "e",
                        "á¸•": "e",
                        "á¸—": "e",
                        "Ä•": "e",
                        "Ä—": "e",
                        "Ã«": "e",
                        "áº»": "e",
                        "Ä›": "e",
                        "È…": "e",
                        "È‡": "e",
                        "áº¹": "e",
                        "á»‡": "e",
                        "È©": "e",
                        "á¸": "e",
                        "Ä™": "e",
                        "á¸™": "e",
                        "á¸›": "e",
                        "É‡": "e",
                        "É›": "e",
                        "Ç": "e",
                        "â“•": "f",
                        "ï½†": "f",
                        "á¸Ÿ": "f",
                        "Æ’": "f",
                        "ê¼": "f",
                        "â“–": "g",
                        "ï½‡": "g",
                        Çµ: "g",
                        "Ä": "g",
                        "á¸¡": "g",
                        ÄŸ: "g",
                        "Ä¡": "g",
                        "Ç§": "g",
                        "Ä£": "g",
                        "Ç¥": "g",
                        "É ": "g",
                        "êž¡": "g",
                        "áµ¹": "g",
                        "ê¿": "g",
                        "â“—": "h",
                        "ï½ˆ": "h",
                        "Ä¥": "h",
                        "á¸£": "h",
                        "á¸§": "h",
                        ÈŸ: "h",
                        "á¸¥": "h",
                        "á¸©": "h",
                        "á¸«": "h",
                        "áº–": "h",
                        "Ä§": "h",
                        "â±¨": "h",
                        "â±¶": "h",
                        "É¥": "h",
                        "Æ•": "hv",
                        "â“˜": "i",
                        "ï½‰": "i",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ä©": "i",
                        "Ä«": "i",
                        "Ä­": "i",
                        "Ã¯": "i",
                        "á¸¯": "i",
                        "á»‰": "i",
                        "Ç": "i",
                        "È‰": "i",
                        "È‹": "i",
                        "á»‹": "i",
                        "Ä¯": "i",
                        "á¸­": "i",
                        "É¨": "i",
                        "Ä±": "i",
                        "â“™": "j",
                        "ï½Š": "j",
                        Äµ: "j",
                        "Ç°": "j",
                        "É‰": "j",
                        "â“š": "k",
                        "ï½‹": "k",
                        "á¸±": "k",
                        "Ç©": "k",
                        "á¸³": "k",
                        "Ä·": "k",
                        "á¸µ": "k",
                        "Æ™": "k",
                        "â±ª": "k",
                        "ê": "k",
                        "êƒ": "k",
                        "ê…": "k",
                        "êž£": "k",
                        "â“›": "l",
                        "ï½Œ": "l",
                        "Å€": "l",
                        Äº: "l",
                        "Ä¾": "l",
                        "á¸·": "l",
                        "á¸¹": "l",
                        "Ä¼": "l",
                        "á¸½": "l",
                        "á¸»": "l",
                        "Å¿": "l",
                        "Å‚": "l",
                        Æš: "l",
                        "É«": "l",
                        "â±¡": "l",
                        "ê‰": "l",
                        "êž": "l",
                        "ê‡": "l",
                        "Ç‰": "lj",
                        "â“œ": "m",
                        "ï½": "m",
                        "á¸¿": "m",
                        "á¹": "m",
                        "á¹ƒ": "m",
                        "É±": "m",
                        "É¯": "m",
                        "â“": "n",
                        "ï½Ž": "n",
                        "Ç¹": "n",
                        "Å„": "n",
                        "Ã±": "n",
                        "á¹…": "n",
                        Åˆ: "n",
                        "á¹‡": "n",
                        "Å†": "n",
                        "á¹‹": "n",
                        "á¹‰": "n",
                        Æž: "n",
                        "É²": "n",
                        "Å‰": "n",
                        "êž‘": "n",
                        "êž¥": "n",
                        ÇŒ: "nj",
                        "â“ž": "o",
                        "ï½": "o",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "á»“": "o",
                        "á»‘": "o",
                        "á»—": "o",
                        "á»•": "o",
                        Ãµ: "o",
                        "á¹": "o",
                        "È­": "o",
                        "á¹": "o",
                        "Å": "o",
                        "á¹‘": "o",
                        "á¹“": "o",
                        "Å": "o",
                        "È¯": "o",
                        "È±": "o",
                        "Ã¶": "o",
                        "È«": "o",
                        "á»": "o",
                        "Å‘": "o",
                        "Ç’": "o",
                        "È": "o",
                        "È": "o",
                        "Æ¡": "o",
                        "á»": "o",
                        "á»›": "o",
                        "á»¡": "o",
                        "á»Ÿ": "o",
                        "á»£": "o",
                        "á»": "o",
                        "á»™": "o",
                        "Ç«": "o",
                        "Ç­": "o",
                        "Ã¸": "o",
                        "Ç¿": "o",
                        "É”": "o",
                        "ê‹": "o",
                        "ê": "o",
                        Éµ: "o",
                        "Å“": "oe",
                        "Æ£": "oi",
                        "È£": "ou",
                        "ê": "oo",
                        "â“Ÿ": "p",
                        "ï½": "p",
                        "á¹•": "p",
                        "á¹—": "p",
                        "Æ¥": "p",
                        "áµ½": "p",
                        "ê‘": "p",
                        "ê“": "p",
                        "ê•": "p",
                        "â“ ": "q",
                        "ï½‘": "q",
                        "É‹": "q",
                        "ê—": "q",
                        "ê™": "q",
                        "â“¡": "r",
                        "ï½’": "r",
                        "Å•": "r",
                        "á¹™": "r",
                        "Å™": "r",
                        "È‘": "r",
                        "È“": "r",
                        "á¹›": "r",
                        "á¹": "r",
                        "Å—": "r",
                        "á¹Ÿ": "r",
                        "É": "r",
                        "É½": "r",
                        "ê›": "r",
                        "êž§": "r",
                        êžƒ: "r",
                        "â“¢": "s",
                        "ï½“": "s",
                        ÃŸ: "s",
                        "Å›": "s",
                        "á¹¥": "s",
                        "Å": "s",
                        "á¹¡": "s",
                        "Å¡": "s",
                        "á¹§": "s",
                        "á¹£": "s",
                        "á¹©": "s",
                        "È™": "s",
                        ÅŸ: "s",
                        "È¿": "s",
                        "êž©": "s",
                        "êž…": "s",
                        "áº›": "s",
                        "â“£": "t",
                        "ï½”": "t",
                        "á¹«": "t",
                        "áº—": "t",
                        "Å¥": "t",
                        "á¹­": "t",
                        "È›": "t",
                        "Å£": "t",
                        "á¹±": "t",
                        "á¹¯": "t",
                        "Å§": "t",
                        "Æ­": "t",
                        Êˆ: "t",
                        "â±¦": "t",
                        "êž‡": "t",
                        "êœ©": "tz",
                        "â“¤": "u",
                        "ï½•": "u",
                        "Ã¹": "u",
                        Ãº: "u",
                        "Ã»": "u",
                        "Å©": "u",
                        "á¹¹": "u",
                        "Å«": "u",
                        "á¹»": "u",
                        "Å­": "u",
                        "Ã¼": "u",
                        Çœ: "u",
                        "Ç˜": "u",
                        "Ç–": "u",
                        Çš: "u",
                        "á»§": "u",
                        "Å¯": "u",
                        "Å±": "u",
                        "Ç”": "u",
                        "È•": "u",
                        "È—": "u",
                        "Æ°": "u",
                        "á»«": "u",
                        "á»©": "u",
                        "á»¯": "u",
                        "á»­": "u",
                        "á»±": "u",
                        "á»¥": "u",
                        "á¹³": "u",
                        "Å³": "u",
                        "á¹·": "u",
                        "á¹µ": "u",
                        "Ê‰": "u",
                        "â“¥": "v",
                        "ï½–": "v",
                        "á¹½": "v",
                        "á¹¿": "v",
                        "Ê‹": "v",
                        "êŸ": "v",
                        ÊŒ: "v",
                        "ê¡": "vy",
                        "â“¦": "w",
                        "ï½—": "w",
                        "áº": "w",
                        áºƒ: "w",
                        Åµ: "w",
                        "áº‡": "w",
                        "áº…": "w",
                        "áº˜": "w",
                        "áº‰": "w",
                        "â±³": "w",
                        "â“§": "x",
                        "ï½˜": "x",
                        "áº‹": "x",
                        "áº": "x",
                        "â“¨": "y",
                        "ï½™": "y",
                        "á»³": "y",
                        "Ã½": "y",
                        "Å·": "y",
                        "á»¹": "y",
                        "È³": "y",
                        "áº": "y",
                        "Ã¿": "y",
                        "á»·": "y",
                        "áº™": "y",
                        "á»µ": "y",
                        "Æ´": "y",
                        "É": "y",
                        "á»¿": "y",
                        "â“©": "z",
                        "ï½š": "z",
                        Åº: "z",
                        "áº‘": "z",
                        "Å¼": "z",
                        "Å¾": "z",
                        "áº“": "z",
                        "áº•": "z",
                        "Æ¶": "z",
                        "È¥": "z",
                        "É€": "z",
                        "â±¬": "z",
                        "ê£": "z",
                        "Î†": "Î‘",
                        Îˆ: "Î•",
                        "Î‰": "Î—",
                        ÎŠ: "Î™",
                        Îª: "Î™",
                        ÎŒ: "ÎŸ",
                        ÎŽ: "Î¥",
                        "Î«": "Î¥",
                        "Î": "Î©",
                        "Î¬": "Î±",
                        "Î­": "Îµ",
                        "Î®": "Î·",
                        "Î¯": "Î¹",
                        ÏŠ: "Î¹",
                        "Î": "Î¹",
                        ÏŒ: "Î¿",
                        "Ï": "Ï…",
                        "Ï‹": "Ï…",
                        "Î°": "Ï…",
                        ÏŽ: "Ï‰",
                        "Ï‚": "Ïƒ",
                        "â€™": "'",
                    };
                }),
                e.define("select2/data/base", ["../utils"], function (i) {
                    function n(e, t) {
                        n.__super__.constructor.call(this);
                    }
                    return (
                        i.Extend(n, i.Observable),
                        (n.prototype.current = function (e) {
                            throw new Error(
                                "The `current` method must be defined in child classes."
                            );
                        }),
                        (n.prototype.query = function (e, t) {
                            throw new Error(
                                "The `query` method must be defined in child classes."
                            );
                        }),
                        (n.prototype.bind = function (e, t) {}),
                        (n.prototype.destroy = function () {}),
                        (n.prototype.generateResultId = function (e, t) {
                            var n = e.id + "-result-";
                            return (
                                (n += i.generateChars(4)),
                                null != t.id
                                    ? (n += "-" + t.id.toString())
                                    : (n += "-" + i.generateChars(4)),
                                n
                            );
                        }),
                        n
                    );
                }),
                e.define(
                    "select2/data/select",
                    ["./base", "../utils", "jquery"],
                    function (e, l, c) {
                        function n(e, t) {
                            (this.$element = e),
                                (this.options = t),
                                n.__super__.constructor.call(this);
                        }
                        return (
                            l.Extend(n, e),
                            (n.prototype.current = function (e) {
                                var t = this;
                                e(
                                    Array.prototype.map.call(
                                        this.$element[0].querySelectorAll(
                                            ":checked"
                                        ),
                                        function (e) {
                                            return t.item(c(e));
                                        }
                                    )
                                );
                            }),
                            (n.prototype.select = function (r) {
                                var s = this;
                                if (
                                    ((r.selected = !0),
                                    null != r.element &&
                                        "option" ===
                                            r.element.tagName.toLowerCase())
                                )
                                    return (
                                        (r.element.selected = !0),
                                        void this.$element
                                            .trigger("input")
                                            .trigger("change")
                                    );
                                if (this.$element.prop("multiple"))
                                    this.current(function (e) {
                                        var t = [];
                                        (r = [r]).push.apply(r, e);
                                        for (var n = 0; n < r.length; n++) {
                                            var i = r[n].id;
                                            -1 === t.indexOf(i) && t.push(i);
                                        }
                                        s.$element.val(t),
                                            s.$element
                                                .trigger("input")
                                                .trigger("change");
                                    });
                                else {
                                    var e = r.id;
                                    this.$element.val(e),
                                        this.$element
                                            .trigger("input")
                                            .trigger("change");
                                }
                            }),
                            (n.prototype.unselect = function (r) {
                                var s = this;
                                if (this.$element.prop("multiple")) {
                                    if (
                                        ((r.selected = !1),
                                        null != r.element &&
                                            "option" ===
                                                r.element.tagName.toLowerCase())
                                    )
                                        return (
                                            (r.element.selected = !1),
                                            void this.$element
                                                .trigger("input")
                                                .trigger("change")
                                        );
                                    this.current(function (e) {
                                        for (
                                            var t = [], n = 0;
                                            n < e.length;
                                            n++
                                        ) {
                                            var i = e[n].id;
                                            i !== r.id &&
                                                -1 === t.indexOf(i) &&
                                                t.push(i);
                                        }
                                        s.$element.val(t),
                                            s.$element
                                                .trigger("input")
                                                .trigger("change");
                                    });
                                }
                            }),
                            (n.prototype.bind = function (e, t) {
                                var n = this;
                                (this.container = e).on("select", function (e) {
                                    n.select(e.data);
                                }),
                                    e.on("unselect", function (e) {
                                        n.unselect(e.data);
                                    });
                            }),
                            (n.prototype.destroy = function () {
                                this.$element.find("*").each(function () {
                                    l.RemoveData(this);
                                });
                            }),
                            (n.prototype.query = function (i, e) {
                                var r = [],
                                    s = this;
                                this.$element.children().each(function () {
                                    if (
                                        "option" ===
                                            this.tagName.toLowerCase() ||
                                        "optgroup" ===
                                            this.tagName.toLowerCase()
                                    ) {
                                        var e = c(this),
                                            t = s.item(e),
                                            n = s.matches(i, t);
                                        null !== n && r.push(n);
                                    }
                                }),
                                    e({ results: r });
                            }),
                            (n.prototype.addOptions = function (e) {
                                this.$element.append(e);
                            }),
                            (n.prototype.option = function (e) {
                                var t;
                                e.children
                                    ? ((t =
                                          document.createElement(
                                              "optgroup"
                                          )).label = e.text)
                                    : void 0 !==
                                      (t = document.createElement("option"))
                                          .textContent
                                    ? (t.textContent = e.text)
                                    : (t.innerText = e.text),
                                    void 0 !== e.id && (t.value = e.id),
                                    e.disabled && (t.disabled = !0),
                                    e.selected && (t.selected = !0),
                                    e.title && (t.title = e.title);
                                var n = this._normalizeItem(e);
                                return (
                                    (n.element = t),
                                    l.StoreData(t, "data", n),
                                    c(t)
                                );
                            }),
                            (n.prototype.item = function (e) {
                                var t = {};
                                if (null != (t = l.GetData(e[0], "data")))
                                    return t;
                                var n = e[0];
                                if ("option" === n.tagName.toLowerCase())
                                    t = {
                                        id: e.val(),
                                        text: e.text(),
                                        disabled: e.prop("disabled"),
                                        selected: e.prop("selected"),
                                        title: e.prop("title"),
                                    };
                                else if (
                                    "optgroup" === n.tagName.toLowerCase()
                                ) {
                                    t = {
                                        text: e.prop("label"),
                                        children: [],
                                        title: e.prop("title"),
                                    };
                                    for (
                                        var i = e.children("option"),
                                            r = [],
                                            s = 0;
                                        s < i.length;
                                        s++
                                    ) {
                                        var o = c(i[s]),
                                            a = this.item(o);
                                        r.push(a);
                                    }
                                    t.children = r;
                                }
                                return (
                                    ((t = this._normalizeItem(t)).element =
                                        e[0]),
                                    l.StoreData(e[0], "data", t),
                                    t
                                );
                            }),
                            (n.prototype._normalizeItem = function (e) {
                                e !== Object(e) && (e = { id: e, text: e });
                                return (
                                    null !=
                                        (e = c.extend({}, { text: "" }, e))
                                            .id && (e.id = e.id.toString()),
                                    null != e.text &&
                                        (e.text = e.text.toString()),
                                    null == e._resultId &&
                                        e.id &&
                                        null != this.container &&
                                        (e._resultId = this.generateResultId(
                                            this.container,
                                            e
                                        )),
                                    c.extend(
                                        {},
                                        { selected: !1, disabled: !1 },
                                        e
                                    )
                                );
                            }),
                            (n.prototype.matches = function (e, t) {
                                return this.options.get("matcher")(e, t);
                            }),
                            n
                        );
                    }
                ),
                e.define(
                    "select2/data/array",
                    ["./select", "../utils", "jquery"],
                    function (e, t, f) {
                        function i(e, t) {
                            (this._dataToConvert = t.get("data") || []),
                                i.__super__.constructor.call(this, e, t);
                        }
                        return (
                            t.Extend(i, e),
                            (i.prototype.bind = function (e, t) {
                                i.__super__.bind.call(this, e, t),
                                    this.addOptions(
                                        this.convertToOptions(
                                            this._dataToConvert
                                        )
                                    );
                            }),
                            (i.prototype.select = function (n) {
                                var e = this.$element
                                    .find("option")
                                    .filter(function (e, t) {
                                        return t.value == n.id.toString();
                                    });
                                0 === e.length &&
                                    ((e = this.option(n)), this.addOptions(e)),
                                    i.__super__.select.call(this, n);
                            }),
                            (i.prototype.convertToOptions = function (e) {
                                var t = this,
                                    n = this.$element.find("option"),
                                    i = n
                                        .map(function () {
                                            return t.item(f(this)).id;
                                        })
                                        .get(),
                                    r = [];
                                function s(e) {
                                    return function () {
                                        return f(this).val() == e.id;
                                    };
                                }
                                for (var o = 0; o < e.length; o++) {
                                    var a = this._normalizeItem(e[o]);
                                    if (0 <= i.indexOf(a.id)) {
                                        var l = n.filter(s(a)),
                                            c = this.item(l),
                                            u = f.extend(!0, {}, a, c),
                                            d = this.option(u);
                                        l.replaceWith(d);
                                    } else {
                                        var p = this.option(a);
                                        if (a.children) {
                                            var h = this.convertToOptions(
                                                a.children
                                            );
                                            p.append(h);
                                        }
                                        r.push(p);
                                    }
                                }
                                return r;
                            }),
                            i
                        );
                    }
                ),
                e.define(
                    "select2/data/ajax",
                    ["./array", "../utils", "jquery"],
                    function (e, t, s) {
                        function n(e, t) {
                            (this.ajaxOptions = this._applyDefaults(
                                t.get("ajax")
                            )),
                                null != this.ajaxOptions.processResults &&
                                    (this.processResults =
                                        this.ajaxOptions.processResults),
                                n.__super__.constructor.call(this, e, t);
                        }
                        return (
                            t.Extend(n, e),
                            (n.prototype._applyDefaults = function (e) {
                                var t = {
                                    data: function (e) {
                                        return s.extend({}, e, { q: e.term });
                                    },
                                    transport: function (e, t, n) {
                                        var i = s.ajax(e);
                                        return i.then(t), i.fail(n), i;
                                    },
                                };
                                return s.extend({}, t, e, !0);
                            }),
                            (n.prototype.processResults = function (e) {
                                return e;
                            }),
                            (n.prototype.query = function (n, i) {
                                var r = this;
                                null != this._request &&
                                    (s.isFunction(this._request.abort) &&
                                        this._request.abort(),
                                    (this._request = null));
                                var t = s.extend(
                                    { type: "GET" },
                                    this.ajaxOptions
                                );
                                function e() {
                                    var e = t.transport(
                                        t,
                                        function (e) {
                                            var t = r.processResults(e, n);
                                            r.options.get("debug") &&
                                                window.console &&
                                                console.error &&
                                                ((t &&
                                                    t.results &&
                                                    Array.isArray(t.results)) ||
                                                    console.error(
                                                        "Select2: The AJAX results did not return an array in the `results` key of the response."
                                                    )),
                                                i(t);
                                        },
                                        function () {
                                            ("status" in e &&
                                                (0 === e.status ||
                                                    "0" === e.status)) ||
                                                r.trigger("results:message", {
                                                    message: "errorLoading",
                                                });
                                        }
                                    );
                                    r._request = e;
                                }
                                "function" == typeof t.url &&
                                    (t.url = t.url.call(this.$element, n)),
                                    "function" == typeof t.data &&
                                        (t.data = t.data.call(
                                            this.$element,
                                            n
                                        )),
                                    this.ajaxOptions.delay && null != n.term
                                        ? (this._queryTimeout &&
                                              window.clearTimeout(
                                                  this._queryTimeout
                                              ),
                                          (this._queryTimeout =
                                              window.setTimeout(
                                                  e,
                                                  this.ajaxOptions.delay
                                              )))
                                        : e();
                            }),
                            n
                        );
                    }
                ),
                e.define("select2/data/tags", ["jquery"], function (t) {
                    function e(e, t, n) {
                        var i = n.get("tags"),
                            r = n.get("createTag");
                        void 0 !== r && (this.createTag = r);
                        var s = n.get("insertTag");
                        if (
                            (void 0 !== s && (this.insertTag = s),
                            e.call(this, t, n),
                            Array.isArray(i))
                        )
                            for (var o = 0; o < i.length; o++) {
                                var a = i[o],
                                    l = this._normalizeItem(a),
                                    c = this.option(l);
                                this.$element.append(c);
                            }
                    }
                    return (
                        (e.prototype.query = function (e, c, u) {
                            var d = this;
                            this._removeOldTags(),
                                null != c.term && null == c.page
                                    ? e.call(this, c, function e(t, n) {
                                          for (
                                              var i = t.results, r = 0;
                                              r < i.length;
                                              r++
                                          ) {
                                              var s = i[r],
                                                  o =
                                                      null != s.children &&
                                                      !e(
                                                          {
                                                              results:
                                                                  s.children,
                                                          },
                                                          !0
                                                      );
                                              if (
                                                  (
                                                      s.text || ""
                                                  ).toUpperCase() ===
                                                      (
                                                          c.term || ""
                                                      ).toUpperCase() ||
                                                  o
                                              )
                                                  return (
                                                      !n &&
                                                      ((t.data = i), void u(t))
                                                  );
                                          }
                                          if (n) return !0;
                                          var a = d.createTag(c);
                                          if (null != a) {
                                              var l = d.option(a);
                                              l.attr("data-select2-tag", !0),
                                                  d.addOptions([l]),
                                                  d.insertTag(i, a);
                                          }
                                          (t.results = i), u(t);
                                      })
                                    : e.call(this, c, u);
                        }),
                        (e.prototype.createTag = function (e, t) {
                            if (null == t.term) return null;
                            var n = t.term.trim();
                            return "" === n ? null : { id: n, text: n };
                        }),
                        (e.prototype.insertTag = function (e, t, n) {
                            t.unshift(n);
                        }),
                        (e.prototype._removeOldTags = function (e) {
                            this.$element
                                .find("option[data-select2-tag]")
                                .each(function () {
                                    this.selected || t(this).remove();
                                });
                        }),
                        e
                    );
                }),
                e.define("select2/data/tokenizer", ["jquery"], function (d) {
                    function e(e, t, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i),
                            e.call(this, t, n);
                    }
                    return (
                        (e.prototype.bind = function (e, t, n) {
                            e.call(this, t, n),
                                (this.$search =
                                    t.dropdown.$search ||
                                    t.selection.$search ||
                                    n.find(".select2-search__field"));
                        }),
                        (e.prototype.query = function (e, t, n) {
                            var r = this;
                            t.term = t.term || "";
                            var i = this.tokenizer(
                                t,
                                this.options,
                                function (e) {
                                    var t,
                                        n = r._normalizeItem(e);
                                    if (
                                        !r.$element
                                            .find("option")
                                            .filter(function () {
                                                return d(this).val() === n.id;
                                            }).length
                                    ) {
                                        var i = r.option(n);
                                        i.attr("data-select2-tag", !0),
                                            r._removeOldTags(),
                                            r.addOptions([i]);
                                    }
                                    (t = n), r.trigger("select", { data: t });
                                }
                            );
                            i.term !== t.term &&
                                (this.$search.length &&
                                    (this.$search.val(i.term),
                                    this.$search.trigger("focus")),
                                (t.term = i.term)),
                                e.call(this, t, n);
                        }),
                        (e.prototype.tokenizer = function (e, t, n, i) {
                            for (
                                var r = n.get("tokenSeparators") || [],
                                    s = t.term,
                                    o = 0,
                                    a =
                                        this.createTag ||
                                        function (e) {
                                            return { id: e.term, text: e.term };
                                        };
                                o < s.length;

                            ) {
                                var l = s[o];
                                if (-1 !== r.indexOf(l)) {
                                    var c = s.substr(0, o),
                                        u = a(d.extend({}, t, { term: c }));
                                    null != u
                                        ? (i(u),
                                          (s = s.substr(o + 1) || ""),
                                          (o = 0))
                                        : o++;
                                } else o++;
                            }
                            return { term: s };
                        }),
                        e
                    );
                }),
                e.define("select2/data/minimumInputLength", [], function () {
                    function e(e, t, n) {
                        (this.minimumInputLength = n.get("minimumInputLength")),
                            e.call(this, t, n);
                    }
                    return (
                        (e.prototype.query = function (e, t, n) {
                            (t.term = t.term || ""),
                                t.term.length < this.minimumInputLength
                                    ? this.trigger("results:message", {
                                          message: "inputTooShort",
                                          args: {
                                              minimum: this.minimumInputLength,
                                              input: t.term,
                                              params: t,
                                          },
                                      })
                                    : e.call(this, t, n);
                        }),
                        e
                    );
                }),
                e.define("select2/data/maximumInputLength", [], function () {
                    function e(e, t, n) {
                        (this.maximumInputLength = n.get("maximumInputLength")),
                            e.call(this, t, n);
                    }
                    return (
                        (e.prototype.query = function (e, t, n) {
                            (t.term = t.term || ""),
                                0 < this.maximumInputLength &&
                                t.term.length > this.maximumInputLength
                                    ? this.trigger("results:message", {
                                          message: "inputTooLong",
                                          args: {
                                              maximum: this.maximumInputLength,
                                              input: t.term,
                                              params: t,
                                          },
                                      })
                                    : e.call(this, t, n);
                        }),
                        e
                    );
                }),
                e.define(
                    "select2/data/maximumSelectionLength",
                    [],
                    function () {
                        function e(e, t, n) {
                            (this.maximumSelectionLength = n.get(
                                "maximumSelectionLength"
                            )),
                                e.call(this, t, n);
                        }
                        return (
                            (e.prototype.bind = function (e, t, n) {
                                var i = this;
                                e.call(this, t, n),
                                    t.on("select", function () {
                                        i._checkIfMaximumSelected();
                                    });
                            }),
                            (e.prototype.query = function (e, t, n) {
                                var i = this;
                                this._checkIfMaximumSelected(function () {
                                    e.call(i, t, n);
                                });
                            }),
                            (e.prototype._checkIfMaximumSelected = function (
                                e,
                                n
                            ) {
                                var i = this;
                                this.current(function (e) {
                                    var t = null != e ? e.length : 0;
                                    0 < i.maximumSelectionLength &&
                                    t >= i.maximumSelectionLength
                                        ? i.trigger("results:message", {
                                              message: "maximumSelected",
                                              args: {
                                                  maximum:
                                                      i.maximumSelectionLength,
                                              },
                                          })
                                        : n && n();
                                });
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/dropdown",
                    ["jquery", "./utils"],
                    function (t, e) {
                        function n(e, t) {
                            (this.$element = e),
                                (this.options = t),
                                n.__super__.constructor.call(this);
                        }
                        return (
                            e.Extend(n, e.Observable),
                            (n.prototype.render = function () {
                                var e = t(
                                    '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                                );
                                return (
                                    e.attr("dir", this.options.get("dir")),
                                    (this.$dropdown = e)
                                );
                            }),
                            (n.prototype.bind = function () {}),
                            (n.prototype.position = function (e, t) {}),
                            (n.prototype.destroy = function () {
                                this.$dropdown.remove();
                            }),
                            n
                        );
                    }
                ),
                e.define("select2/dropdown/search", ["jquery"], function (s) {
                    function e() {}
                    return (
                        (e.prototype.render = function (e) {
                            var t = e.call(this),
                                n = s(
                                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                                );
                            return (
                                (this.$searchContainer = n),
                                (this.$search = n.find("input")),
                                this.$search.prop(
                                    "autocomplete",
                                    this.options.get("autocomplete")
                                ),
                                t.prepend(n),
                                t
                            );
                        }),
                        (e.prototype.bind = function (e, t, n) {
                            var i = this,
                                r = t.id + "-results";
                            e.call(this, t, n),
                                this.$search.on("keydown", function (e) {
                                    i.trigger("keypress", e),
                                        (i._keyUpPrevented =
                                            e.isDefaultPrevented());
                                }),
                                this.$search.on("input", function (e) {
                                    s(this).off("keyup");
                                }),
                                this.$search.on("keyup input", function (e) {
                                    i.handleSearch(e);
                                }),
                                t.on("open", function () {
                                    i.$search.attr("tabindex", 0),
                                        i.$search.attr("aria-controls", r),
                                        i.$search.trigger("focus"),
                                        window.setTimeout(function () {
                                            i.$search.trigger("focus");
                                        }, 0);
                                }),
                                t.on("close", function () {
                                    i.$search.attr("tabindex", -1),
                                        i.$search.removeAttr("aria-controls"),
                                        i.$search.removeAttr(
                                            "aria-activedescendant"
                                        ),
                                        i.$search.val(""),
                                        i.$search.trigger("blur");
                                }),
                                t.on("focus", function () {
                                    t.isOpen() || i.$search.trigger("focus");
                                }),
                                t.on("results:all", function (e) {
                                    (null != e.query.term &&
                                        "" !== e.query.term) ||
                                        (i.showSearch(e)
                                            ? i.$searchContainer[0].classList.remove(
                                                  "select2-search--hide"
                                              )
                                            : i.$searchContainer[0].classList.add(
                                                  "select2-search--hide"
                                              ));
                                }),
                                t.on("results:focus", function (e) {
                                    e.data._resultId
                                        ? i.$search.attr(
                                              "aria-activedescendant",
                                              e.data._resultId
                                          )
                                        : i.$search.removeAttr(
                                              "aria-activedescendant"
                                          );
                                });
                        }),
                        (e.prototype.handleSearch = function (e) {
                            if (!this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", { term: t });
                            }
                            this._keyUpPrevented = !1;
                        }),
                        (e.prototype.showSearch = function (e, t) {
                            return !0;
                        }),
                        e
                    );
                }),
                e.define("select2/dropdown/hidePlaceholder", [], function () {
                    function e(e, t, n, i) {
                        (this.placeholder = this.normalizePlaceholder(
                            n.get("placeholder")
                        )),
                            e.call(this, t, n, i);
                    }
                    return (
                        (e.prototype.append = function (e, t) {
                            (t.results = this.removePlaceholder(t.results)),
                                e.call(this, t);
                        }),
                        (e.prototype.normalizePlaceholder = function (e, t) {
                            return (
                                "string" == typeof t &&
                                    (t = { id: "", text: t }),
                                t
                            );
                        }),
                        (e.prototype.removePlaceholder = function (e, t) {
                            for (
                                var n = t.slice(0), i = t.length - 1;
                                0 <= i;
                                i--
                            ) {
                                var r = t[i];
                                this.placeholder.id === r.id && n.splice(i, 1);
                            }
                            return n;
                        }),
                        e
                    );
                }),
                e.define(
                    "select2/dropdown/infiniteScroll",
                    ["jquery"],
                    function (n) {
                        function e(e, t, n, i) {
                            (this.lastParams = {}),
                                e.call(this, t, n, i),
                                (this.$loadingMore = this.createLoadingMore()),
                                (this.loading = !1);
                        }
                        return (
                            (e.prototype.append = function (e, t) {
                                this.$loadingMore.remove(),
                                    (this.loading = !1),
                                    e.call(this, t),
                                    this.showLoadingMore(t) &&
                                        (this.$results.append(
                                            this.$loadingMore
                                        ),
                                        this.loadMoreIfNeeded());
                            }),
                            (e.prototype.bind = function (e, t, n) {
                                var i = this;
                                e.call(this, t, n),
                                    t.on("query", function (e) {
                                        (i.lastParams = e), (i.loading = !0);
                                    }),
                                    t.on("query:append", function (e) {
                                        (i.lastParams = e), (i.loading = !0);
                                    }),
                                    this.$results.on(
                                        "scroll",
                                        this.loadMoreIfNeeded.bind(this)
                                    );
                            }),
                            (e.prototype.loadMoreIfNeeded = function () {
                                var e = n.contains(
                                    document.documentElement,
                                    this.$loadingMore[0]
                                );
                                if (!this.loading && e) {
                                    var t =
                                        this.$results.offset().top +
                                        this.$results.outerHeight(!1);
                                    this.$loadingMore.offset().top +
                                        this.$loadingMore.outerHeight(!1) <=
                                        t + 50 && this.loadMore();
                                }
                            }),
                            (e.prototype.loadMore = function () {
                                this.loading = !0;
                                var e = n.extend(
                                    {},
                                    { page: 1 },
                                    this.lastParams
                                );
                                e.page++, this.trigger("query:append", e);
                            }),
                            (e.prototype.showLoadingMore = function (e, t) {
                                return t.pagination && t.pagination.more;
                            }),
                            (e.prototype.createLoadingMore = function () {
                                var e = n(
                                        '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                                    ),
                                    t = this.options
                                        .get("translations")
                                        .get("loadingMore");
                                return e.html(t(this.lastParams)), e;
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/dropdown/attachBody",
                    ["jquery", "../utils"],
                    function (f, a) {
                        function e(e, t, n) {
                            (this.$dropdownParent = f(
                                n.get("dropdownParent") || document.body
                            )),
                                e.call(this, t, n);
                        }
                        return (
                            (e.prototype.bind = function (e, t, n) {
                                var i = this;
                                e.call(this, t, n),
                                    t.on("open", function () {
                                        i._showDropdown(),
                                            i._attachPositioningHandler(t),
                                            i._bindContainerResultHandlers(t);
                                    }),
                                    t.on("close", function () {
                                        i._hideDropdown(),
                                            i._detachPositioningHandler(t);
                                    }),
                                    this.$dropdownContainer.on(
                                        "mousedown",
                                        function (e) {
                                            e.stopPropagation();
                                        }
                                    );
                            }),
                            (e.prototype.destroy = function (e) {
                                e.call(this), this.$dropdownContainer.remove();
                            }),
                            (e.prototype.position = function (e, t, n) {
                                t.attr("class", n.attr("class")),
                                    t[0].classList.remove("select2"),
                                    t[0].classList.add(
                                        "select2-container--open"
                                    ),
                                    t.css({
                                        position: "absolute",
                                        top: -999999,
                                    }),
                                    (this.$container = n);
                            }),
                            (e.prototype.render = function (e) {
                                var t = f("<span></span>"),
                                    n = e.call(this);
                                return (
                                    t.append(n), (this.$dropdownContainer = t)
                                );
                            }),
                            (e.prototype._hideDropdown = function (e) {
                                this.$dropdownContainer.detach();
                            }),
                            (e.prototype._bindContainerResultHandlers =
                                function (e, t) {
                                    if (!this._containerResultsHandlersBound) {
                                        var n = this;
                                        t.on("results:all", function () {
                                            n._positionDropdown(),
                                                n._resizeDropdown();
                                        }),
                                            t.on("results:append", function () {
                                                n._positionDropdown(),
                                                    n._resizeDropdown();
                                            }),
                                            t.on(
                                                "results:message",
                                                function () {
                                                    n._positionDropdown(),
                                                        n._resizeDropdown();
                                                }
                                            ),
                                            t.on("select", function () {
                                                n._positionDropdown(),
                                                    n._resizeDropdown();
                                            }),
                                            t.on("unselect", function () {
                                                n._positionDropdown(),
                                                    n._resizeDropdown();
                                            }),
                                            (this._containerResultsHandlersBound =
                                                !0);
                                    }
                                }),
                            (e.prototype._attachPositioningHandler = function (
                                e,
                                t
                            ) {
                                var n = this,
                                    i = "scroll.select2." + t.id,
                                    r = "resize.select2." + t.id,
                                    s = "orientationchange.select2." + t.id,
                                    o = this.$container
                                        .parents()
                                        .filter(a.hasScroll);
                                o.each(function () {
                                    a.StoreData(
                                        this,
                                        "select2-scroll-position",
                                        {
                                            x: f(this).scrollLeft(),
                                            y: f(this).scrollTop(),
                                        }
                                    );
                                }),
                                    o.on(i, function (e) {
                                        var t = a.GetData(
                                            this,
                                            "select2-scroll-position"
                                        );
                                        f(this).scrollTop(t.y);
                                    }),
                                    f(window).on(
                                        i + " " + r + " " + s,
                                        function (e) {
                                            n._positionDropdown(),
                                                n._resizeDropdown();
                                        }
                                    );
                            }),
                            (e.prototype._detachPositioningHandler = function (
                                e,
                                t
                            ) {
                                var n = "scroll.select2." + t.id,
                                    i = "resize.select2." + t.id,
                                    r = "orientationchange.select2." + t.id;
                                this.$container
                                    .parents()
                                    .filter(a.hasScroll)
                                    .off(n),
                                    f(window).off(n + " " + i + " " + r);
                            }),
                            (e.prototype._positionDropdown = function () {
                                var e = f(window),
                                    t = this.$dropdown[0].classList.contains(
                                        "select2-dropdown--above"
                                    ),
                                    n = this.$dropdown[0].classList.contains(
                                        "select2-dropdown--below"
                                    ),
                                    i = null,
                                    r = this.$container.offset();
                                r.bottom =
                                    r.top + this.$container.outerHeight(!1);
                                var s = {
                                    height: this.$container.outerHeight(!1),
                                };
                                (s.top = r.top), (s.bottom = r.top + s.height);
                                var o = this.$dropdown.outerHeight(!1),
                                    a = e.scrollTop(),
                                    l = e.scrollTop() + e.height(),
                                    c = a < r.top - o,
                                    u = l > r.bottom + o,
                                    d = { left: r.left, top: s.bottom },
                                    p = this.$dropdownParent;
                                "static" === p.css("position") &&
                                    (p = p.offsetParent());
                                var h = { top: 0, left: 0 };
                                (f.contains(document.body, p[0]) ||
                                    p[0].isConnected) &&
                                    (h = p.offset()),
                                    (d.top -= h.top),
                                    (d.left -= h.left),
                                    t || n || (i = "below"),
                                    u || !c || t
                                        ? !c && u && t && (i = "below")
                                        : (i = "above"),
                                    ("above" == i || (t && "below" !== i)) &&
                                        (d.top = s.top - h.top - o),
                                    null != i &&
                                        (this.$dropdown[0].classList.remove(
                                            "select2-dropdown--below"
                                        ),
                                        this.$dropdown[0].classList.remove(
                                            "select2-dropdown--above"
                                        ),
                                        this.$dropdown[0].classList.add(
                                            "select2-dropdown--" + i
                                        ),
                                        this.$container[0].classList.remove(
                                            "select2-container--below"
                                        ),
                                        this.$container[0].classList.remove(
                                            "select2-container--above"
                                        ),
                                        this.$container[0].classList.add(
                                            "select2-container--" + i
                                        )),
                                    this.$dropdownContainer.css(d);
                            }),
                            (e.prototype._resizeDropdown = function () {
                                var e = {
                                    width:
                                        this.$container.outerWidth(!1) + "px",
                                };
                                this.options.get("dropdownAutoWidth") &&
                                    ((e.minWidth = e.width),
                                    (e.position = "relative"),
                                    (e.width = "auto")),
                                    this.$dropdown.css(e);
                            }),
                            (e.prototype._showDropdown = function (e) {
                                this.$dropdownContainer.appendTo(
                                    this.$dropdownParent
                                ),
                                    this._positionDropdown(),
                                    this._resizeDropdown();
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/dropdown/minimumResultsForSearch",
                    [],
                    function () {
                        function e(e, t, n, i) {
                            (this.minimumResultsForSearch = n.get(
                                "minimumResultsForSearch"
                            )),
                                this.minimumResultsForSearch < 0 &&
                                    (this.minimumResultsForSearch = 1 / 0),
                                e.call(this, t, n, i);
                        }
                        return (
                            (e.prototype.showSearch = function (e, t) {
                                return (
                                    !(
                                        (function e(t) {
                                            for (
                                                var n = 0, i = 0;
                                                i < t.length;
                                                i++
                                            ) {
                                                var r = t[i];
                                                r.children
                                                    ? (n += e(r.children))
                                                    : n++;
                                            }
                                            return n;
                                        })(t.data.results) <
                                        this.minimumResultsForSearch
                                    ) && e.call(this, t)
                                );
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/dropdown/selectOnClose",
                    ["../utils"],
                    function (s) {
                        function e() {}
                        return (
                            (e.prototype.bind = function (e, t, n) {
                                var i = this;
                                e.call(this, t, n),
                                    t.on("close", function (e) {
                                        i._handleSelectOnClose(e);
                                    });
                            }),
                            (e.prototype._handleSelectOnClose = function (
                                e,
                                t
                            ) {
                                if (t && null != t.originalSelect2Event) {
                                    var n = t.originalSelect2Event;
                                    if (
                                        "select" === n._type ||
                                        "unselect" === n._type
                                    )
                                        return;
                                }
                                var i = this.getHighlightedResults();
                                if (!(i.length < 1)) {
                                    var r = s.GetData(i[0], "data");
                                    (null != r.element && r.element.selected) ||
                                        (null == r.element && r.selected) ||
                                        this.trigger("select", { data: r });
                                }
                            }),
                            e
                        );
                    }
                ),
                e.define("select2/dropdown/closeOnSelect", [], function () {
                    function e() {}
                    return (
                        (e.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                                t.on("select", function (e) {
                                    i._selectTriggered(e);
                                }),
                                t.on("unselect", function (e) {
                                    i._selectTriggered(e);
                                });
                        }),
                        (e.prototype._selectTriggered = function (e, t) {
                            var n = t.originalEvent;
                            (n && (n.ctrlKey || n.metaKey)) ||
                                this.trigger("close", {
                                    originalEvent: n,
                                    originalSelect2Event: t,
                                });
                        }),
                        e
                    );
                }),
                e.define(
                    "select2/dropdown/dropdownCss",
                    ["../utils"],
                    function (i) {
                        function e() {}
                        return (
                            (e.prototype.render = function (e) {
                                var t = e.call(this),
                                    n =
                                        this.options.get("dropdownCssClass") ||
                                        "";
                                return (
                                    -1 !== n.indexOf(":all:") &&
                                        ((n = n.replace(":all:", "")),
                                        i.copyNonInternalCssClasses(
                                            t[0],
                                            this.$element[0]
                                        )),
                                    t.addClass(n),
                                    t
                                );
                            }),
                            e
                        );
                    }
                ),
                e.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded.";
                        },
                        inputTooLong: function (e) {
                            var t = e.input.length - e.maximum,
                                n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n;
                        },
                        inputTooShort: function (e) {
                            return (
                                "Please enter " +
                                (e.minimum - e.input.length) +
                                " or more characters"
                            );
                        },
                        loadingMore: function () {
                            return "Loading more resultsâ€¦";
                        },
                        maximumSelected: function (e) {
                            var t =
                                "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t;
                        },
                        noResults: function () {
                            return "No results found";
                        },
                        searching: function () {
                            return "Searchingâ€¦";
                        },
                        removeAllItems: function () {
                            return "Remove all items";
                        },
                        removeItem: function () {
                            return "Remove item";
                        },
                    };
                }),
                e.define(
                    "select2/defaults",
                    [
                        "jquery",
                        "./results",
                        "./selection/single",
                        "./selection/multiple",
                        "./selection/placeholder",
                        "./selection/allowClear",
                        "./selection/search",
                        "./selection/selectionCss",
                        "./selection/eventRelay",
                        "./utils",
                        "./translation",
                        "./diacritics",
                        "./data/select",
                        "./data/array",
                        "./data/ajax",
                        "./data/tags",
                        "./data/tokenizer",
                        "./data/minimumInputLength",
                        "./data/maximumInputLength",
                        "./data/maximumSelectionLength",
                        "./dropdown",
                        "./dropdown/search",
                        "./dropdown/hidePlaceholder",
                        "./dropdown/infiniteScroll",
                        "./dropdown/attachBody",
                        "./dropdown/minimumResultsForSearch",
                        "./dropdown/selectOnClose",
                        "./dropdown/closeOnSelect",
                        "./dropdown/dropdownCss",
                        "./i18n/en",
                    ],
                    function (
                        l,
                        s,
                        o,
                        a,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g,
                        t,
                        m,
                        v,
                        y,
                        _,
                        b,
                        $,
                        w,
                        x,
                        A,
                        D,
                        S,
                        E,
                        O,
                        C,
                        L,
                        T,
                        q,
                        e
                    ) {
                        function n() {
                            this.reset();
                        }
                        return (
                            (n.prototype.apply = function (e) {
                                if (
                                    (null ==
                                        (e = l.extend(!0, {}, this.defaults, e))
                                            .dataAdapter &&
                                        (null != e.ajax
                                            ? (e.dataAdapter = y)
                                            : null != e.data
                                            ? (e.dataAdapter = v)
                                            : (e.dataAdapter = m),
                                        0 < e.minimumInputLength &&
                                            (e.dataAdapter = f.Decorate(
                                                e.dataAdapter,
                                                $
                                            )),
                                        0 < e.maximumInputLength &&
                                            (e.dataAdapter = f.Decorate(
                                                e.dataAdapter,
                                                w
                                            )),
                                        0 < e.maximumSelectionLength &&
                                            (e.dataAdapter = f.Decorate(
                                                e.dataAdapter,
                                                x
                                            )),
                                        e.tags &&
                                            (e.dataAdapter = f.Decorate(
                                                e.dataAdapter,
                                                _
                                            )),
                                        (null == e.tokenSeparators &&
                                            null == e.tokenizer) ||
                                            (e.dataAdapter = f.Decorate(
                                                e.dataAdapter,
                                                b
                                            ))),
                                    null == e.resultsAdapter &&
                                        ((e.resultsAdapter = s),
                                        null != e.ajax &&
                                            (e.resultsAdapter = f.Decorate(
                                                e.resultsAdapter,
                                                E
                                            )),
                                        null != e.placeholder &&
                                            (e.resultsAdapter = f.Decorate(
                                                e.resultsAdapter,
                                                S
                                            )),
                                        e.selectOnClose &&
                                            (e.resultsAdapter = f.Decorate(
                                                e.resultsAdapter,
                                                L
                                            ))),
                                    null == e.dropdownAdapter)
                                ) {
                                    if (e.multiple) e.dropdownAdapter = A;
                                    else {
                                        var t = f.Decorate(A, D);
                                        e.dropdownAdapter = t;
                                    }
                                    0 !== e.minimumResultsForSearch &&
                                        (e.dropdownAdapter = f.Decorate(
                                            e.dropdownAdapter,
                                            C
                                        )),
                                        e.closeOnSelect &&
                                            (e.dropdownAdapter = f.Decorate(
                                                e.dropdownAdapter,
                                                T
                                            )),
                                        null != e.dropdownCssClass &&
                                            (e.dropdownAdapter = f.Decorate(
                                                e.dropdownAdapter,
                                                q
                                            )),
                                        (e.dropdownAdapter = f.Decorate(
                                            e.dropdownAdapter,
                                            O
                                        ));
                                }
                                null == e.selectionAdapter &&
                                    (e.multiple
                                        ? (e.selectionAdapter = a)
                                        : (e.selectionAdapter = o),
                                    null != e.placeholder &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            c
                                        )),
                                    e.allowClear &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            u
                                        )),
                                    e.multiple &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            d
                                        )),
                                    null != e.selectionCssClass &&
                                        (e.selectionAdapter = f.Decorate(
                                            e.selectionAdapter,
                                            p
                                        )),
                                    (e.selectionAdapter = f.Decorate(
                                        e.selectionAdapter,
                                        h
                                    ))),
                                    (e.language = this._resolveLanguage(
                                        e.language
                                    )),
                                    e.language.push("en");
                                for (
                                    var n = [], i = 0;
                                    i < e.language.length;
                                    i++
                                ) {
                                    var r = e.language[i];
                                    -1 === n.indexOf(r) && n.push(r);
                                }
                                return (
                                    (e.language = n),
                                    (e.translations = this._processTranslations(
                                        e.language,
                                        e.debug
                                    )),
                                    e
                                );
                            }),
                            (n.prototype.reset = function () {
                                function a(e) {
                                    return e.replace(
                                        /[^\u0000-\u007E]/g,
                                        function (e) {
                                            return t[e] || e;
                                        }
                                    );
                                }
                                this.defaults = {
                                    amdLanguageBase: "./i18n/",
                                    autocomplete: "off",
                                    closeOnSelect: !0,
                                    debug: !1,
                                    dropdownAutoWidth: !1,
                                    escapeMarkup: f.escapeMarkup,
                                    language: {},
                                    matcher: function e(t, n) {
                                        if (
                                            null == t.term ||
                                            "" === t.term.trim()
                                        )
                                            return n;
                                        if (
                                            n.children &&
                                            0 < n.children.length
                                        ) {
                                            for (
                                                var i = l.extend(!0, {}, n),
                                                    r = n.children.length - 1;
                                                0 <= r;
                                                r--
                                            )
                                                null == e(t, n.children[r]) &&
                                                    i.children.splice(r, 1);
                                            return 0 < i.children.length
                                                ? i
                                                : e(t, i);
                                        }
                                        var s = a(n.text).toUpperCase(),
                                            o = a(t.term).toUpperCase();
                                        return -1 < s.indexOf(o) ? n : null;
                                    },
                                    minimumInputLength: 0,
                                    maximumInputLength: 0,
                                    maximumSelectionLength: 0,
                                    minimumResultsForSearch: 0,
                                    selectOnClose: !1,
                                    scrollAfterSelect: !1,
                                    sorter: function (e) {
                                        return e;
                                    },
                                    templateResult: function (e) {
                                        return e.text;
                                    },
                                    templateSelection: function (e) {
                                        return e.text;
                                    },
                                    theme: "default",
                                    width: "resolve",
                                };
                            }),
                            (n.prototype.applyFromElement = function (e, t) {
                                var n = e.language,
                                    i = this.defaults.language,
                                    r = t.prop("lang"),
                                    s = t.closest("[lang]").prop("lang"),
                                    o = Array.prototype.concat.call(
                                        this._resolveLanguage(r),
                                        this._resolveLanguage(n),
                                        this._resolveLanguage(i),
                                        this._resolveLanguage(s)
                                    );
                                return (e.language = o), e;
                            }),
                            (n.prototype._resolveLanguage = function (e) {
                                if (!e) return [];
                                if (l.isEmptyObject(e)) return [];
                                if (l.isPlainObject(e)) return [e];
                                var t;
                                t = Array.isArray(e) ? e : [e];
                                for (var n = [], i = 0; i < t.length; i++)
                                    if (
                                        (n.push(t[i]),
                                        "string" == typeof t[i] &&
                                            0 < t[i].indexOf("-"))
                                    ) {
                                        var r = t[i].split("-")[0];
                                        n.push(r);
                                    }
                                return n;
                            }),
                            (n.prototype._processTranslations = function (
                                e,
                                t
                            ) {
                                for (
                                    var n = new g(), i = 0;
                                    i < e.length;
                                    i++
                                ) {
                                    var r = new g(),
                                        s = e[i];
                                    if ("string" == typeof s)
                                        try {
                                            r = g.loadPath(s);
                                        } catch (e) {
                                            try {
                                                (s =
                                                    this.defaults
                                                        .amdLanguageBase + s),
                                                    (r = g.loadPath(s));
                                            } catch (e) {
                                                t &&
                                                    window.console &&
                                                    console.warn &&
                                                    console.warn(
                                                        'Select2: The language file for "' +
                                                            s +
                                                            '" could not be automatically loaded. A fallback will be used instead.'
                                                    );
                                            }
                                        }
                                    else r = l.isPlainObject(s) ? new g(s) : s;
                                    n.extend(r);
                                }
                                return n;
                            }),
                            (n.prototype.set = function (e, t) {
                                var n = {};
                                n[l.camelCase(e)] = t;
                                var i = f._convertData(n);
                                l.extend(!0, this.defaults, i);
                            }),
                            new n()
                        );
                    }
                ),
                e.define(
                    "select2/options",
                    ["jquery", "./defaults", "./utils"],
                    function (d, n, p) {
                        function e(e, t) {
                            (this.options = e),
                                null != t && this.fromElement(t),
                                null != t &&
                                    (this.options = n.applyFromElement(
                                        this.options,
                                        t
                                    )),
                                (this.options = n.apply(this.options));
                        }
                        return (
                            (e.prototype.fromElement = function (e) {
                                var t = ["select2"];
                                null == this.options.multiple &&
                                    (this.options.multiple =
                                        e.prop("multiple")),
                                    null == this.options.disabled &&
                                        (this.options.disabled =
                                            e.prop("disabled")),
                                    null == this.options.autocomplete &&
                                        e.prop("autocomplete") &&
                                        (this.options.autocomplete =
                                            e.prop("autocomplete")),
                                    null == this.options.dir &&
                                        (e.prop("dir")
                                            ? (this.options.dir = e.prop("dir"))
                                            : e.closest("[dir]").prop("dir")
                                            ? (this.options.dir = e
                                                  .closest("[dir]")
                                                  .prop("dir"))
                                            : (this.options.dir = "ltr")),
                                    e.prop("disabled", this.options.disabled),
                                    e.prop("multiple", this.options.multiple),
                                    p.GetData(e[0], "select2Tags") &&
                                        (this.options.debug &&
                                            window.console &&
                                            console.warn &&
                                            console.warn(
                                                'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                                            ),
                                        p.StoreData(
                                            e[0],
                                            "data",
                                            p.GetData(e[0], "select2Tags")
                                        ),
                                        p.StoreData(e[0], "tags", !0)),
                                    p.GetData(e[0], "ajaxUrl") &&
                                        (this.options.debug &&
                                            window.console &&
                                            console.warn &&
                                            console.warn(
                                                "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                                            ),
                                        e.attr(
                                            "ajax--url",
                                            p.GetData(e[0], "ajaxUrl")
                                        ),
                                        p.StoreData(
                                            e[0],
                                            "ajax-Url",
                                            p.GetData(e[0], "ajaxUrl")
                                        ));
                                var n = {};
                                function i(e, t) {
                                    return t.toUpperCase();
                                }
                                for (
                                    var r = 0;
                                    r < e[0].attributes.length;
                                    r++
                                ) {
                                    var s = e[0].attributes[r].name,
                                        o = "data-";
                                    if (s.substr(0, o.length) == o) {
                                        var a = s.substring(o.length),
                                            l = p.GetData(e[0], a);
                                        n[a.replace(/-([a-z])/g, i)] = l;
                                    }
                                }
                                d.fn.jquery &&
                                    "1." == d.fn.jquery.substr(0, 2) &&
                                    e[0].dataset &&
                                    (n = d.extend(!0, {}, e[0].dataset, n));
                                var c = d.extend(!0, {}, p.GetData(e[0]), n);
                                for (var u in (c = p._convertData(c)))
                                    -1 < t.indexOf(u) ||
                                        (d.isPlainObject(this.options[u])
                                            ? d.extend(this.options[u], c[u])
                                            : (this.options[u] = c[u]));
                                return this;
                            }),
                            (e.prototype.get = function (e) {
                                return this.options[e];
                            }),
                            (e.prototype.set = function (e, t) {
                                this.options[e] = t;
                            }),
                            e
                        );
                    }
                ),
                e.define(
                    "select2/core",
                    ["jquery", "./options", "./utils", "./keys"],
                    function (t, c, u, i) {
                        var d = function (e, t) {
                            null != u.GetData(e[0], "select2") &&
                                u.GetData(e[0], "select2").destroy(),
                                (this.$element = e),
                                (this.id = this._generateId(e)),
                                (t = t || {}),
                                (this.options = new c(t, e)),
                                d.__super__.constructor.call(this);
                            var n = e.attr("tabindex") || 0;
                            u.StoreData(e[0], "old-tabindex", n),
                                e.attr("tabindex", "-1");
                            var i = this.options.get("dataAdapter");
                            this.dataAdapter = new i(e, this.options);
                            var r = this.render();
                            this._placeContainer(r);
                            var s = this.options.get("selectionAdapter");
                            (this.selection = new s(e, this.options)),
                                (this.$selection = this.selection.render()),
                                this.selection.position(this.$selection, r);
                            var o = this.options.get("dropdownAdapter");
                            (this.dropdown = new o(e, this.options)),
                                (this.$dropdown = this.dropdown.render()),
                                this.dropdown.position(this.$dropdown, r);
                            var a = this.options.get("resultsAdapter");
                            (this.results = new a(
                                e,
                                this.options,
                                this.dataAdapter
                            )),
                                (this.$results = this.results.render()),
                                this.results.position(
                                    this.$results,
                                    this.$dropdown
                                );
                            var l = this;
                            this._bindAdapters(),
                                this._registerDomEvents(),
                                this._registerDataEvents(),
                                this._registerSelectionEvents(),
                                this._registerDropdownEvents(),
                                this._registerResultsEvents(),
                                this._registerEvents(),
                                this.dataAdapter.current(function (e) {
                                    l.trigger("selection:update", { data: e });
                                }),
                                e[0].classList.add("select2-hidden-accessible"),
                                e.attr("aria-hidden", "true"),
                                this._syncAttributes(),
                                u.StoreData(e[0], "select2", this),
                                e.data("select2", this);
                        };
                        return (
                            u.Extend(d, u.Observable),
                            (d.prototype._generateId = function (e) {
                                return (
                                    "select2-" +
                                    (null != e.attr("id")
                                        ? e.attr("id")
                                        : null != e.attr("name")
                                        ? e.attr("name") +
                                          "-" +
                                          u.generateChars(2)
                                        : u.generateChars(4)
                                    ).replace(/(:|\.|\[|\]|,)/g, "")
                                );
                            }),
                            (d.prototype._placeContainer = function (e) {
                                e.insertAfter(this.$element);
                                var t = this._resolveWidth(
                                    this.$element,
                                    this.options.get("width")
                                );
                                null != t && e.css("width", t);
                            }),
                            (d.prototype._resolveWidth = function (e, t) {
                                var n =
                                    /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                                if ("resolve" == t) {
                                    var i = this._resolveWidth(e, "style");
                                    return null != i
                                        ? i
                                        : this._resolveWidth(e, "element");
                                }
                                if ("element" == t) {
                                    var r = e.outerWidth(!1);
                                    return r <= 0 ? "100%" : "100%";
                                }
                                if ("style" != t)
                                    return "computedstyle" != t
                                        ? t
                                        : window.getComputedStyle(e[0]).width;
                                var s = e.attr("style");
                                if ("string" != typeof s) return null;
                                for (
                                    var o = s.split(";"), a = 0, l = o.length;
                                    a < l;
                                    a += 1
                                ) {
                                    var c = o[a].replace(/\s/g, "").match(n);
                                    if (null !== c && 1 <= c.length)
                                        return c[1];
                                }
                                return null;
                            }),
                            (d.prototype._bindAdapters = function () {
                                this.dataAdapter.bind(this, this.$container),
                                    this.selection.bind(this, this.$container),
                                    this.dropdown.bind(this, this.$container),
                                    this.results.bind(this, this.$container);
                            }),
                            (d.prototype._registerDomEvents = function () {
                                var t = this;
                                this.$element.on("change.select2", function () {
                                    t.dataAdapter.current(function (e) {
                                        t.trigger("selection:update", {
                                            data: e,
                                        });
                                    });
                                }),
                                    this.$element.on(
                                        "focus.select2",
                                        function (e) {
                                            t.trigger("focus", e);
                                        }
                                    ),
                                    (this._syncA = u.bind(
                                        this._syncAttributes,
                                        this
                                    )),
                                    (this._syncS = u.bind(
                                        this._syncSubtree,
                                        this
                                    )),
                                    (this._observer =
                                        new window.MutationObserver(function (
                                            e
                                        ) {
                                            t._syncA(), t._syncS(e);
                                        })),
                                    this._observer.observe(this.$element[0], {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !1,
                                    });
                            }),
                            (d.prototype._registerDataEvents = function () {
                                var n = this;
                                this.dataAdapter.on("*", function (e, t) {
                                    n.trigger(e, t);
                                });
                            }),
                            (d.prototype._registerSelectionEvents =
                                function () {
                                    var n = this,
                                        i = ["toggle", "focus"];
                                    this.selection.on("toggle", function () {
                                        n.toggleDropdown();
                                    }),
                                        this.selection.on(
                                            "focus",
                                            function (e) {
                                                n.focus(e);
                                            }
                                        ),
                                        this.selection.on("*", function (e, t) {
                                            -1 === i.indexOf(e) &&
                                                n.trigger(e, t);
                                        });
                                }),
                            (d.prototype._registerDropdownEvents = function () {
                                var n = this;
                                this.dropdown.on("*", function (e, t) {
                                    n.trigger(e, t);
                                });
                            }),
                            (d.prototype._registerResultsEvents = function () {
                                var n = this;
                                this.results.on("*", function (e, t) {
                                    n.trigger(e, t);
                                });
                            }),
                            (d.prototype._registerEvents = function () {
                                var n = this;
                                this.on("open", function () {
                                    n.$container[0].classList.add(
                                        "select2-container--open"
                                    );
                                }),
                                    this.on("close", function () {
                                        n.$container[0].classList.remove(
                                            "select2-container--open"
                                        );
                                    }),
                                    this.on("enable", function () {
                                        n.$container[0].classList.remove(
                                            "select2-container--disabled"
                                        );
                                    }),
                                    this.on("disable", function () {
                                        n.$container[0].classList.add(
                                            "select2-container--disabled"
                                        );
                                    }),
                                    this.on("blur", function () {
                                        n.$container[0].classList.remove(
                                            "select2-container--focus"
                                        );
                                    }),
                                    this.on("query", function (t) {
                                        n.isOpen() || n.trigger("open", {}),
                                            this.dataAdapter.query(
                                                t,
                                                function (e) {
                                                    n.trigger("results:all", {
                                                        data: e,
                                                        query: t,
                                                    });
                                                }
                                            );
                                    }),
                                    this.on("query:append", function (t) {
                                        this.dataAdapter.query(t, function (e) {
                                            n.trigger("results:append", {
                                                data: e,
                                                query: t,
                                            });
                                        });
                                    }),
                                    this.on("keypress", function (e) {
                                        var t = e.which;
                                        n.isOpen()
                                            ? t === i.ESC ||
                                              t === i.TAB ||
                                              (t === i.UP && e.altKey)
                                                ? (n.close(e),
                                                  e.preventDefault())
                                                : t === i.ENTER
                                                ? (n.trigger(
                                                      "results:select",
                                                      {}
                                                  ),
                                                  e.preventDefault())
                                                : t === i.SPACE && e.ctrlKey
                                                ? (n.trigger(
                                                      "results:toggle",
                                                      {}
                                                  ),
                                                  e.preventDefault())
                                                : t === i.UP
                                                ? (n.trigger(
                                                      "results:previous",
                                                      {}
                                                  ),
                                                  e.preventDefault())
                                                : t === i.DOWN &&
                                                  (n.trigger(
                                                      "results:next",
                                                      {}
                                                  ),
                                                  e.preventDefault())
                                            : (t === i.ENTER ||
                                                  t === i.SPACE ||
                                                  (t === i.DOWN && e.altKey)) &&
                                              (n.open(), e.preventDefault());
                                    });
                            }),
                            (d.prototype._syncAttributes = function () {
                                this.options.set(
                                    "disabled",
                                    this.$element.prop("disabled")
                                ),
                                    this.isDisabled()
                                        ? (this.isOpen() && this.close(),
                                          this.trigger("disable", {}))
                                        : this.trigger("enable", {});
                            }),
                            (d.prototype._isChangeMutation = function (e) {
                                var t = this;
                                if (e.addedNodes && 0 < e.addedNodes.length)
                                    for (
                                        var n = 0;
                                        n < e.addedNodes.length;
                                        n++
                                    ) {
                                        if (e.addedNodes[n].selected) return !0;
                                    }
                                else {
                                    if (
                                        e.removedNodes &&
                                        0 < e.removedNodes.length
                                    )
                                        return !0;
                                    if (Array.isArray(e))
                                        return e.some(function (e) {
                                            return t._isChangeMutation(e);
                                        });
                                }
                                return !1;
                            }),
                            (d.prototype._syncSubtree = function (e) {
                                var t = this._isChangeMutation(e),
                                    n = this;
                                t &&
                                    this.dataAdapter.current(function (e) {
                                        n.trigger("selection:update", {
                                            data: e,
                                        });
                                    });
                            }),
                            (d.prototype.trigger = function (e, t) {
                                var n = d.__super__.trigger,
                                    i = {
                                        open: "opening",
                                        close: "closing",
                                        select: "selecting",
                                        unselect: "unselecting",
                                        clear: "clearing",
                                    };
                                if ((void 0 === t && (t = {}), e in i)) {
                                    var r = i[e],
                                        s = { prevented: !1, name: e, args: t };
                                    if ((n.call(this, r, s), s.prevented))
                                        return void (t.prevented = !0);
                                }
                                n.call(this, e, t);
                            }),
                            (d.prototype.toggleDropdown = function () {
                                this.isDisabled() ||
                                    (this.isOpen()
                                        ? this.close()
                                        : this.open());
                            }),
                            (d.prototype.open = function () {
                                this.isOpen() ||
                                    this.isDisabled() ||
                                    this.trigger("query", {});
                            }),
                            (d.prototype.close = function (e) {
                                this.isOpen() &&
                                    this.trigger("close", { originalEvent: e });
                            }),
                            (d.prototype.isEnabled = function () {
                                return !this.isDisabled();
                            }),
                            (d.prototype.isDisabled = function () {
                                return this.options.get("disabled");
                            }),
                            (d.prototype.isOpen = function () {
                                return this.$container[0].classList.contains(
                                    "select2-container--open"
                                );
                            }),
                            (d.prototype.hasFocus = function () {
                                return this.$container[0].classList.contains(
                                    "select2-container--focus"
                                );
                            }),
                            (d.prototype.focus = function (e) {
                                this.hasFocus() ||
                                    (this.$container[0].classList.add(
                                        "select2-container--focus"
                                    ),
                                    this.trigger("focus", {}));
                            }),
                            (d.prototype.enable = function (e) {
                                this.options.get("debug") &&
                                    window.console &&
                                    console.warn &&
                                    console.warn(
                                        'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                                    ),
                                    (null != e && 0 !== e.length) || (e = [!0]);
                                var t = !e[0];
                                this.$element.prop("disabled", t);
                            }),
                            (d.prototype.data = function () {
                                this.options.get("debug") &&
                                    0 < arguments.length &&
                                    window.console &&
                                    console.warn &&
                                    console.warn(
                                        'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                                    );
                                var t = [];
                                return (
                                    this.dataAdapter.current(function (e) {
                                        t = e;
                                    }),
                                    t
                                );
                            }),
                            (d.prototype.val = function (e) {
                                if (
                                    (this.options.get("debug") &&
                                        window.console &&
                                        console.warn &&
                                        console.warn(
                                            'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                                        ),
                                    null == e || 0 === e.length)
                                )
                                    return this.$element.val();
                                var t = e[0];
                                Array.isArray(t) &&
                                    (t = t.map(function (e) {
                                        return e.toString();
                                    })),
                                    this.$element
                                        .val(t)
                                        .trigger("input")
                                        .trigger("change");
                            }),
                            (d.prototype.destroy = function () {
                                this.$container.remove(),
                                    this._observer.disconnect(),
                                    (this._observer = null),
                                    (this._syncA = null),
                                    (this._syncS = null),
                                    this.$element.off(".select2"),
                                    this.$element.attr(
                                        "tabindex",
                                        u.GetData(
                                            this.$element[0],
                                            "old-tabindex"
                                        )
                                    ),
                                    this.$element[0].classList.remove(
                                        "select2-hidden-accessible"
                                    ),
                                    this.$element.attr("aria-hidden", "false"),
                                    u.RemoveData(this.$element[0]),
                                    this.$element.removeData("select2"),
                                    this.dataAdapter.destroy(),
                                    this.selection.destroy(),
                                    this.dropdown.destroy(),
                                    this.results.destroy(),
                                    (this.dataAdapter = null),
                                    (this.selection = null),
                                    (this.dropdown = null),
                                    (this.results = null);
                            }),
                            (d.prototype.render = function () {
                                var e = t(
                                    '<span style="width: 100% !important;" class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                                );
                                return (
                                    e.attr("dir", this.options.get("dir")),
                                    (this.$container = e),
                                    this.$container[0].classList.add(
                                        "select2-container--" +
                                            this.options.get("theme")
                                    ),
                                    u.StoreData(e[0], "element", this.$element),
                                    e
                                );
                            }),
                            d
                        );
                    }
                ),
                e.define("jquery-mousewheel", ["jquery"], function (e) {
                    return e;
                }),
                e.define(
                    "jquery.select2",
                    [
                        "jquery",
                        "jquery-mousewheel",
                        "./select2/core",
                        "./select2/defaults",
                        "./select2/utils",
                    ],
                    function (r, e, s, t, o) {
                        if (null == r.fn.select2) {
                            var a = ["open", "close", "destroy"];
                            r.fn.select2 = function (t) {
                                if ("object" == typeof (t = t || {}))
                                    return (
                                        this.each(function () {
                                            var e = r.extend(!0, {}, t);
                                            new s(r(this), e);
                                        }),
                                        this
                                    );
                                if ("string" != typeof t)
                                    throw new Error(
                                        "Invalid arguments for Select2: " + t
                                    );
                                var n,
                                    i = Array.prototype.slice.call(
                                        arguments,
                                        1
                                    );
                                return (
                                    this.each(function () {
                                        var e = o.GetData(this, "select2");
                                        null == e &&
                                            window.console &&
                                            console.error &&
                                            console.error(
                                                "The select2('" +
                                                    t +
                                                    "') method was called on an element that is not using Select2."
                                            ),
                                            (n = e[t].apply(e, i));
                                    }),
                                    -1 < a.indexOf(t) ? this : n
                                );
                            };
                        }
                        return (
                            null == r.fn.select2.defaults &&
                                (r.fn.select2.defaults = t),
                            s
                        );
                    }
                ),
                { define: e.define, require: e.require }
            );
        })(),
        t = e.require("jquery.select2");
    return (u.fn.select2.amd = e), t;
});
