(function() {
    "use strict";
    var he = function() {
            for (var e = new Uint32Array(256), t = 256; t--;) {
                for (var n = t, r = 8; r--;) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
                e[t] = n
            }
            return function(a) {
                var o = -1;
                typeof a == "string" && (a = function(c) {
                    for (var l = c.length, u = new Array(l), d = -1; ++d < l;) u[d] = c.charCodeAt(d);
                    return u
                }(a));
                for (var i = 0, s = a.length; i < s; i++) o = o >>> 8 ^ e[o & 255 ^ a[i]];
                return (o ^ -1) >>> 0
            }
        }(),
        me = function(e) {
            return e < 0 && (e = 4294967295 + e + 1), ("0000000" + e.toString(16)).slice(-8)
        },
        ve = function(e, t) {
            var n = he(e);
            return t ? me(n) : n
        };

    function pe(...e) {
        return JSON.stringify(e, (t, n) => typeof n == "object" ? n : String(n))
    }

    function _(e, t = {}) {
        const {
            hash: n = pe,
            cache: r = new Map
        } = t;
        return function(...a) {
            const o = n.apply(this, a);
            if (r.has(o)) return r.get(o);
            let i = e.apply(this, a);
            return i instanceof Promise && (i = i.catch(s => {
                throw r.delete(o), s
            })), r.set(o, i), i
        }
    }
    var ge = Object.defineProperty,
        b = (e, t) => ge(e, "name", {
            value: t,
            configurable: !0
        });
    class V {
        constructor(t, n, r, a) {
            this.name = t, this.enabled = n, this.percentageOfActors = r, this.actors = a
        }
        isEnabled(t) {
            return this.enabled || this.actorGateOpen(t) || this.percentageOfActorsGateOpen(t)
        }
        percentageOfActorsGateOpen(t) {
            if (!t || this.percentageOfActors < 1) return !1;
            const n = `${this.name}${t}`,
                r = 1e3;
            return ve(n) % (100 * r) < this.percentageOfActors * r
        }
        actorGateOpen(t) {
            return !t || this.actors.length < 1 ? !1 : this.actors.includes(t)
        }
    }
    b(V, "Feature");

    function B(e) {
        return typeof e != "object" || !e ? !1 : !!("name" in e && typeof e.name == "string" && "enabled" in e && typeof e.enabled == "boolean" && "percentageOfActors" in e && typeof e.percentageOfActors == "number" && "actors" in e && Array.isArray(e.actors))
    }
    b(B, "isFeature");
    class U {
        constructor(t) {
            this.features = (t.features || []).filter(B).map(n => new V(n.name, n.enabled, n.percentageOfActors, n.actors))
        }
        getFeature(t) {
            return this.features.find(n => n.name === t)
        }
    }
    b(U, "FeaturesDatafile");
    const ye = _(G);

    function G() {
        var e;
        const t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="features-datafile"]'),
            n = (t == null ? void 0 : t.content) || "{}",
            r = JSON.parse(n);
        return new U(r)
    }
    b(G, "loadFeaturesDatafile");
    let C;

    function W() {
        return `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(Date.now()/1e3)}`
    }

    function be(e) {
        const t = `GH1.1.${e}`,
            n = Date.now(),
            r = new Date(n + 1 * 365 * 86400 * 1e3).toUTCString();
        let {
            domain: a
        } = document;
        a.endsWith(".github.com") && (a = "github.com"), document.cookie = `_octo=${t}; expires=${r}; path=/; domain=${a}; secure; samesite=lax`
    }

    function Se() {
        let e;
        const n = document.cookie.match(/_octo=([^;]+)/g);
        if (!n) return;
        let r = [0, 0];
        for (const a of n) {
            const [, o] = a.split("="), [, i, ...s] = o.split("."), c = i.split("-").map(Number);
            c > r && (r = c, e = s.join("."))
        }
        return e
    }

    function we() {
        try {
            const e = Se();
            if (e) return e;
            const t = W();
            return be(t), t
        } catch {
            return C || (C = W()), C
        }
    }
    var xe = Object.defineProperty,
        J = (e, t) => xe(e, "name", {
            value: t,
            configurable: !0
        });
    const Ae = _(Q);

    function Q() {
        var e, t;
        return (((t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="enabled-features"]')) == null ? void 0 : t.content) || "").split(",")
    }
    J(Q, "enabledFeatures");
    const Fe = _(K);

    function K(e) {
        return Ae().indexOf(e) !== -1
    }
    J(K, "isEnabled");

    function f() {
        if (!(this instanceof f)) return new f;
        this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
    }
    var p = window.document.documentElement,
        Me = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector;
    f.prototype.matchesSelector = function(e, t) {
        return Me.call(e, t)
    }, f.prototype.querySelectorAll = function(e, t) {
        return t.querySelectorAll(e)
    }, f.prototype.indexes = [];
    var Ie = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    f.prototype.indexes.push({
        name: "ID",
        selector: function(t) {
            var n;
            if (n = t.match(Ie)) return n[0].slice(1)
        },
        element: function(t) {
            if (t.id) return [t.id]
        }
    });
    var Oe = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    f.prototype.indexes.push({
        name: "CLASS",
        selector: function(t) {
            var n;
            if (n = t.match(Oe)) return n[0].slice(1)
        },
        element: function(t) {
            var n = t.className;
            if (n) {
                if (typeof n == "string") return n.split(/\s/);
                if (typeof n == "object" && "baseVal" in n) return n.baseVal.split(/\s/)
            }
        }
    });
    var Ee = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    f.prototype.indexes.push({
        name: "TAG",
        selector: function(t) {
            var n;
            if (n = t.match(Ee)) return n[0].toUpperCase()
        },
        element: function(t) {
            return [t.nodeName.toUpperCase()]
        }
    }), f.prototype.indexes.default = {
        name: "UNIVERSAL",
        selector: function() {
            return !0
        },
        element: function() {
            return [!0]
        }
    };
    var D;
    typeof window.Map == "function" ? D = window.Map : D = function() {
        function e() {
            this.map = {}
        }
        return e.prototype.get = function(t) {
            return this.map[t + " "]
        }, e.prototype.set = function(t, n) {
            this.map[t + " "] = n
        }, e
    }();
    var X = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

    function Y(e, t) {
        e = e.slice(0).concat(e.default);
        var n = e.length,
            r, a, o, i, s = t,
            c, l, u = [];
        do
            if (X.exec(""), (o = X.exec(s)) && (s = o[3], o[2] || !s)) {
                for (r = 0; r < n; r++)
                    if (l = e[r], c = l.selector(o[1])) {
                        for (a = u.length, i = !1; a--;)
                            if (u[a].index === l && u[a].key === c) {
                                i = !0;
                                break
                            }
                        i || u.push({
                            index: l,
                            key: c
                        });
                        break
                    }
            }
        while (o);
        return u
    }

    function _e(e, t) {
        var n, r, a;
        for (n = 0, r = e.length; n < r; n++)
            if (a = e[n], t.isPrototypeOf(a)) return a
    }
    f.prototype.logDefaultIndexUsed = function() {}, f.prototype.add = function(e, t) {
        var n, r, a, o, i, s, c, l, u = this.activeIndexes,
            d = this.selectors;
        if (typeof e == "string") {
            for (n = {
                    id: this.uid++,
                    selector: e,
                    data: t
                }, c = Y(this.indexes, e), r = 0; r < c.length; r++) l = c[r], o = l.key, a = l.index, i = _e(u, a), i || (i = Object.create(a), i.map = new D, u.push(i)), a === this.indexes.default && this.logDefaultIndexUsed(n), s = i.map.get(o), s || (s = [], i.map.set(o, s)), s.push(n);
            this.size++, d.push(e)
        }
    }, f.prototype.remove = function(e, t) {
        if (typeof e == "string") {
            var n, r, a, o, i, s, c, l, u = this.activeIndexes,
                d = {},
                m = arguments.length === 1;
            for (n = Y(this.indexes, e), a = 0; a < n.length; a++)
                for (r = n[a], o = u.length; o--;)
                    if (s = u[o], r.index.isPrototypeOf(s)) {
                        if (c = s.map.get(r.key), c)
                            for (i = c.length; i--;) l = c[i], l.selector === e && (m || l.data === t) && (c.splice(i, 1), d[l.id] = !0);
                        break
                    }
            this.size -= Object.keys(d).length
        }
    };

    function Z(e, t) {
        return e.id - t.id
    }
    f.prototype.queryAll = function(e) {
        if (!this.selectors.length) return [];
        var t = {},
            n = [],
            r = this.querySelectorAll(this.selectors.join(", "), e),
            a, o, i, s, c, l, u, d;
        for (a = 0, i = r.length; a < i; a++)
            for (c = r[a], l = this.matches(c), o = 0, s = l.length; o < s; o++) d = l[o], t[d.id] ? u = t[d.id] : (u = {
                id: d.id,
                selector: d.selector,
                data: d.data,
                elements: []
            }, t[d.id] = u, n.push(u)), u.elements.push(c);
        return n.sort(Z)
    }, f.prototype.matches = function(e) {
        if (!e) return [];
        var t, n, r, a, o, i, s, c, l, u, d, m = this.activeIndexes,
            v = {},
            fe = [];
        for (t = 0, a = m.length; t < a; t++)
            if (s = m[t], c = s.element(e), c) {
                for (n = 0, o = c.length; n < o; n++)
                    if (l = s.map.get(c[n]))
                        for (r = 0, i = l.length; r < i; r++) u = l[r], d = u.id, !v[d] && this.matchesSelector(e, u.selector) && (v[d] = !0, fe.push(u))
            }
        return fe.sort(Z)
    };
    var S = null,
        k = null,
        P = [];

    function z(e, t) {
        var n = [];

        function r() {
            var o = n;
            n = [], t(o)
        }

        function a() {
            for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            n.push(i), n.length === 1 && $(e, r)
        }
        return a
    }

    function $(e, t) {
        k || (k = new MutationObserver(Ce)), S || (S = e.createElement("div"), k.observe(S, {
            attributes: !0
        })), P.push(t), S.setAttribute("data-twiddle", "" + Date.now())
    }

    function Ce() {
        var e = P;
        P = [];
        for (var t = 0; t < e.length; t++) try {
            e[t]()
        } catch (n) {
            setTimeout(function() {
                throw n
            }, 0)
        }
    }
    var ee = new WeakMap,
        g = new WeakMap,
        w = new WeakMap,
        h = new WeakMap;

    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                a = r[0],
                o = r[1],
                i = r[2];
            a === A ? (De(i, o), ke(i, o)) : a === re ? te(i, o) : a === F && Pe(e.observers, o)
        }
    }

    function De(e, t) {
        if (t instanceof e.elementConstructor) {
            var n = ee.get(t);
            if (n || (n = [], ee.set(t, n)), n.indexOf(e.id) === -1) {
                var r = void 0;
                if (e.initialize && (r = e.initialize.call(void 0, t)), r) {
                    var a = g.get(t);
                    a || (a = {}, g.set(t, a)), a["" + e.id] = r
                }
                n.push(e.id)
            }
        }
    }

    function ke(e, t) {
        if (t instanceof e.elementConstructor) {
            var n = h.get(t);
            if (n || (n = [], h.set(t, n)), n.indexOf(e.id) === -1) {
                e.elements.push(t);
                var r = g.get(t),
                    a = r ? r["" + e.id] : null;
                if (a && a.add && a.add.call(void 0, t), e.subscribe) {
                    var o = e.subscribe.call(void 0, t);
                    if (o) {
                        var i = w.get(t);
                        i || (i = {}, w.set(t, i)), i["" + e.id] = o
                    }
                }
                e.add && e.add.call(void 0, t), n.push(e.id)
            }
        }
    }

    function te(e, t) {
        if (t instanceof e.elementConstructor) {
            var n = h.get(t);
            if (!!n) {
                var r = e.elements.indexOf(t);
                if (r !== -1 && e.elements.splice(r, 1), r = n.indexOf(e.id), r !== -1) {
                    var a = g.get(t),
                        o = a ? a["" + e.id] : null;
                    if (o && o.remove && o.remove.call(void 0, t), e.subscribe) {
                        var i = w.get(t),
                            s = i ? i["" + e.id] : null;
                        s && s.unsubscribe && s.unsubscribe()
                    }
                    e.remove && e.remove.call(void 0, t), n.splice(r, 1)
                }
                n.length === 0 && h.delete(t)
            }
        }
    }

    function Pe(e, t) {
        var n = h.get(t);
        if (!!n) {
            for (var r = n.slice(0), a = 0; a < r.length; a++) {
                var o = e[r[a]];
                if (!!o) {
                    var i = o.elements.indexOf(t);
                    i !== -1 && o.elements.splice(i, 1);
                    var s = g.get(t),
                        c = s ? s["" + o.id] : null;
                    c && c.remove && c.remove.call(void 0, t);
                    var l = w.get(t),
                        u = l ? l["" + o.id] : null;
                    u && u.unsubscribe && u.unsubscribe(), o.remove && o.remove.call(void 0, t)
                }
            }
            h.delete(t)
        }
    }
    var N = null;

    function $e(e) {
        if (N === null) {
            var t = e.createElement("div"),
                n = e.createElement("div"),
                r = e.createElement("div");
            t.appendChild(n), n.appendChild(r), t.innerHTML = "", N = r.parentNode !== n
        }
        return N
    }

    function ne(e) {
        return "matches" in e || "webkitMatchesSelector" in e || "mozMatchesSelector" in e || "oMatchesSelector" in e || "msMatchesSelector" in e
    }
    var A = 1,
        re = 2,
        F = 3;

    function Ne(e, t, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            a.type === "childList" ? (ae(e, t, a.addedNodes), qe(e, t, a.removedNodes)) : a.type === "attributes" && M(e, t, a.target)
        }
        $e(e.ownerDocument) && Re(e, t)
    }

    function ae(e, t, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            if (ne(a))
                for (var o = e.selectorSet.matches(a), i = 0; i < o.length; i++) {
                    var s = o[i].data;
                    t.push([A, a, s])
                }
            if ("querySelectorAll" in a)
                for (var c = e.selectorSet.queryAll(a), l = 0; l < c.length; l++)
                    for (var u = c[l], d = u.data, m = u.elements, v = 0; v < m.length; v++) t.push([A, m[v], d])
        }
    }

    function qe(e, t, n) {
        for (var r = 0; r < n.length; r++) {
            var a = n[r];
            if ("querySelectorAll" in a) {
                t.push([F, a]);
                for (var o = a.querySelectorAll("*"), i = 0; i < o.length; i++) t.push([F, o[i]])
            }
        }
    }

    function M(e, t, n) {
        if (ne(n))
            for (var r = e.selectorSet.matches(n), a = 0; a < r.length; a++) {
                var o = r[a].data;
                t.push([A, n, o])
            }
        if ("querySelectorAll" in n) {
            var i = h.get(n);
            if (i)
                for (var s = 0; s < i.length; s++) {
                    var c = e.observers[i[s]];
                    c && (e.selectorSet.matchesSelector(n, c.selector) || t.push([re, n, c]))
                }
        }
    }

    function Le(e, t, n) {
        if ("querySelectorAll" in n) {
            M(e, t, n);
            for (var r = n.querySelectorAll("*"), a = 0; a < r.length; a++) M(e, t, r[a])
        }
    }

    function Te(e, t, n) {
        for (var r = 0; r < n.length; r++)
            for (var a = n[r], o = a.form ? a.form.elements : e.rootNode.querySelectorAll("input"), i = 0; i < o.length; i++) M(e, t, o[i])
    }

    function Re(e, t) {
        for (var n = 0; n < e.observers.length; n++) {
            var r = e.observers[n];
            if (r)
                for (var a = r.elements, o = 0; o < a.length; o++) {
                    var i = a[o];
                    i.parentNode || t.push([F, i])
                }
        }
    }

    function He(e, t) {
        var n = e.readyState;
        n === "interactive" || n === "complete" ? $(e, t) : e.addEventListener("DOMContentLoaded", $(e, t))
    }
    var je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        Ve = 0;

    function y(e) {
        this.rootNode = e.nodeType === 9 ? e.documentElement : e, this.ownerDocument = e.nodeType === 9 ? e : e.ownerDocument, this.observers = [], this.selectorSet = new f, this.mutationObserver = new MutationObserver(Ge.bind(this, this)), this._scheduleAddRootNodes = z(this.ownerDocument, Ue.bind(this, this)), this._handleThrottledChangedTargets = z(this.ownerDocument, Je.bind(this, this)), this.rootNode.addEventListener("change", We.bind(this, this), !1), He(this.ownerDocument, Be.bind(this, this))
    }
    y.prototype.disconnect = function() {
        this.mutationObserver.disconnect()
    }, y.prototype.observe = function(e, t) {
        var n = void 0;
        typeof t == "function" ? n = {
            selector: e,
            initialize: t
        } : (typeof t == "undefined" ? "undefined" : je(t)) === "object" ? (n = t, n.selector = e) : n = e;
        var r = this,
            a = {
                id: Ve++,
                selector: n.selector,
                initialize: n.initialize,
                add: n.add,
                remove: n.remove,
                subscribe: n.subscribe,
                elements: [],
                elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                abort: function() {
                    r._abortObserving(a)
                }
            };
        return this.selectorSet.add(a.selector, a), this.observers[a.id] = a, this._scheduleAddRootNodes(), a
    }, y.prototype._abortObserving = function(e) {
        for (var t = e.elements, n = 0; n < t.length; n++) te(e, t[n]);
        this.selectorSet.remove(e.selector, e), delete this.observers[e.id]
    }, y.prototype.triggerObservers = function(e) {
        var t = [];
        Le(this, t, e), x(this, t)
    };

    function Be(e) {
        e.mutationObserver.observe(e.rootNode, {
            childList: !0,
            attributes: !0,
            subtree: !0
        }), e._scheduleAddRootNodes()
    }

    function Ue(e) {
        var t = [];
        ae(e, t, [e.rootNode]), x(e, t)
    }

    function Ge(e, t) {
        var n = [];
        Ne(e, n, t), x(e, n)
    }

    function We(e, t) {
        e._handleThrottledChangedTargets(t.target)
    }

    function Je(e, t) {
        var n = [];
        Te(e, n, t), x(e, n)
    }
    var q = void 0;

    function Qe() {
        return q || (q = new y(window.document)), q
    }

    function Ke() {
        var e;
        return (e = Qe()).observe.apply(e, arguments)
    }
    var Xe = Object.defineProperty,
        Ye = (e, t) => Xe(e, "name", {
            value: t,
            configurable: !0
        });

    function oe(e) {
        var t, n;
        const r = (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="expected-hostname"]')) == null ? void 0 : n.content;
        if (!r) return !1;
        const a = r.replace(/\.$/, "").split(".").slice(-2).join("."),
            o = e.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".");
        return a !== o
    }
    Ye(oe, "detectProxySite"),
        function() {
            return document.readyState === "interactive" || document.readyState === "complete" ? Promise.resolve() : new Promise(e => {
                document.addEventListener("DOMContentLoaded", () => {
                    e()
                })
            })
        }();
    const Ze = function() {
        return document.readyState === "complete" ? Promise.resolve() : new Promise(e => {
            window.addEventListener("load", e)
        })
    }();
    var ze = Object.defineProperty,
        I = (e, t) => ze(e, "name", {
            value: t,
            configurable: !0
        });
    let L = [];

    function ie(e, t = !1) {
        e.timestamp === void 0 && (e.timestamp = new Date().getTime()), e.loggedIn = ce(), L.push(e), t ? R() : se()
    }
    I(ie, "sendStats");
    let T = null;
    async function se() {
        await Ze, T == null && (T = window.requestIdleCallback(R))
    }
    I(se, "scheduleSendStats");

    function R() {
        var e, t;
        if (T = null, oe(document)) return;
        const n = (t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="browser-stats-url"]')) == null ? void 0 : t.content;
        if (!n) return;
        const r = JSON.stringify({
            stats: L
        });
        try {
            navigator.sendBeacon && navigator.sendBeacon(n, r)
        } catch {}
        L = []
    }
    I(R, "flushStats");

    function ce() {
        var e, t;
        return !!((t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="user-login"]')) == null ? void 0 : t.content)
    }
    I(ce, "isLoggedIn");
    var et = Object.defineProperty,
        H = (e, t) => et(e, "name", {
            value: t,
            configurable: !0
        });

    function O(e, t, n) {
        const r = {
                hydroEventPayload: e,
                hydroEventHmac: t,
                visitorPayload: "",
                visitorHmac: "",
                hydroClientContext: n
            },
            a = document.querySelector("meta[name=visitor-payload]");
        a instanceof HTMLMetaElement && (r.visitorPayload = a.content);
        const o = document.querySelector("meta[name=visitor-hmac]") || "";
        o instanceof HTMLMetaElement && (r.visitorHmac = o.content), ie(r, !0)
    }
    H(O, "sendData");

    function tt(e) {
        const t = e.getAttribute("data-hydro-view") || "",
            n = e.getAttribute("data-hydro-view-hmac") || "",
            r = e.getAttribute("data-hydro-client-context") || "";
        O(t, n, r)
    }
    H(tt, "trackView");

    function nt(e) {
        const t = e.getAttribute("data-hydro-click-payload") || "",
            n = e.getAttribute("data-hydro-click-hmac") || "",
            r = e.getAttribute("data-hydro-client-context") || "";
        O(t, n, r)
    }
    H(nt, "sendHydroEvent");
    var rt = Object.defineProperty,
        E = (e, t) => rt(e, "name", {
            value: t,
            configurable: !0
        });

    function ue(e) {
        const t = e.getAttribute("data-feature"),
            n = e.getAttribute("data-show-when-feature-enabled") === "true";
        if (!t) return;
        const r = Fe(t) || le(t);
        r ? e.hidden = !n : e.hidden = n, de(e, r)
    }
    E(ue, "toggleFeatureFlaggedElement");

    function le(e) {
        const t = ye().getFeature(e);
        if (!t) return !1;
        const n = `User::CurrentVisitorActor:${j()}`;
        return t.isEnabled(n)
    }
    E(le, "isDatafileFeatureEnabled");

    function de(e, t) {
        if (!e.hasAttribute("data-feature-hydro") || !e.hasAttribute("data-feature-hydro-hmac")) return;
        const n = e.getAttribute("data-feature-hydro") || "",
            r = e.getAttribute("data-feature-hydro-hmac") || "";
        O(n, r, JSON.stringify({
            octolytics_id: j(),
            feature_flag_enabled: t
        }))
    }
    E(de, "sendHydroEvent");

    function j() {
        return `GH1.1.${we()}`
    }
    E(j, "octolyticsId"), Ke("[data-feature]", {
        add(e) {
            ue(e)
        }
    })
})();
//# sourceMappingURL=features-346aac06.js.map