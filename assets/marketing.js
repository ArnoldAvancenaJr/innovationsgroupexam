(function() {
    "use strict";

    function h() {
        if (!(this instanceof h)) return new h;
        this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
    }
    var y = window.document.documentElement,
        at = y.matches || y.webkitMatchesSelector || y.mozMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
    h.prototype.matchesSelector = function(t, e) {
        return at.call(t, e)
    }, h.prototype.querySelectorAll = function(t, e) {
        return e.querySelectorAll(t)
    }, h.prototype.indexes = [];
    var ot = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    h.prototype.indexes.push({
        name: "ID",
        selector: function(e) {
            var i;
            if (i = e.match(ot)) return i[0].slice(1)
        },
        element: function(e) {
            if (e.id) return [e.id]
        }
    });
    var ut = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    h.prototype.indexes.push({
        name: "CLASS",
        selector: function(e) {
            var i;
            if (i = e.match(ut)) return i[0].slice(1)
        },
        element: function(e) {
            var i = e.className;
            if (i) {
                if (typeof i == "string") return i.split(/\s/);
                if (typeof i == "object" && "baseVal" in i) return i.baseVal.split(/\s/)
            }
        }
    });
    var lt = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    h.prototype.indexes.push({
        name: "TAG",
        selector: function(e) {
            var i;
            if (i = e.match(lt)) return i[0].toUpperCase()
        },
        element: function(e) {
            return [e.nodeName.toUpperCase()]
        }
    }), h.prototype.indexes.default = {
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
        function t() {
            this.map = {}
        }
        return t.prototype.get = function(e) {
            return this.map[e + " "]
        }, t.prototype.set = function(e, i) {
            this.map[e + " "] = i
        }, t
    }();
    var G = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

    function Q(t, e) {
        t = t.slice(0).concat(t.default);
        var i = t.length,
            r, s, n, a, o = e,
            u, l, c = [];
        do
            if (G.exec(""), (n = G.exec(o)) && (o = n[3], n[2] || !o)) {
                for (r = 0; r < i; r++)
                    if (l = t[r], u = l.selector(n[1])) {
                        for (s = c.length, a = !1; s--;)
                            if (c[s].index === l && c[s].key === u) {
                                a = !0;
                                break
                            }
                        a || c.push({
                            index: l,
                            key: u
                        });
                        break
                    }
            }
        while (n);
        return c
    }

    function ct(t, e) {
        var i, r, s;
        for (i = 0, r = t.length; i < r; i++)
            if (s = t[i], e.isPrototypeOf(s)) return s
    }
    h.prototype.logDefaultIndexUsed = function() {}, h.prototype.add = function(t, e) {
        var i, r, s, n, a, o, u, l, c = this.activeIndexes,
            d = this.selectors;
        if (typeof t == "string") {
            for (i = {
                    id: this.uid++,
                    selector: t,
                    data: e
                }, u = Q(this.indexes, t), r = 0; r < u.length; r++) l = u[r], n = l.key, s = l.index, a = ct(c, s), a || (a = Object.create(s), a.map = new D, c.push(a)), s === this.indexes.default && this.logDefaultIndexUsed(i), o = a.map.get(n), o || (o = [], a.map.set(n, o)), o.push(i);
            this.size++, d.push(t)
        }
    }, h.prototype.remove = function(t, e) {
        if (typeof t == "string") {
            var i, r, s, n, a, o, u, l, c = this.activeIndexes,
                d = {},
                b = arguments.length === 1;
            for (i = Q(this.indexes, t), s = 0; s < i.length; s++)
                for (r = i[s], n = c.length; n--;)
                    if (o = c[n], r.index.isPrototypeOf(o)) {
                        if (u = o.map.get(r.key), u)
                            for (a = u.length; a--;) l = u[a], l.selector === t && (b || l.data === e) && (u.splice(a, 1), d[l.id] = !0);
                        break
                    }
            this.size -= Object.keys(d).length
        }
    };

    function Y(t, e) {
        return t.id - e.id
    }
    h.prototype.queryAll = function(t) {
        if (!this.selectors.length) return [];
        var e = {},
            i = [],
            r = this.querySelectorAll(this.selectors.join(", "), t),
            s, n, a, o, u, l, c, d;
        for (s = 0, a = r.length; s < a; s++)
            for (u = r[s], l = this.matches(u), n = 0, o = l.length; n < o; n++) d = l[n], e[d.id] ? c = e[d.id] : (c = {
                id: d.id,
                selector: d.selector,
                data: d.data,
                elements: []
            }, e[d.id] = c, i.push(c)), c.elements.push(u);
        return i.sort(Y)
    }, h.prototype.matches = function(t) {
        if (!t) return [];
        var e, i, r, s, n, a, o, u, l, c, d, b = this.activeIndexes,
            v = {},
            nt = [];
        for (e = 0, s = b.length; e < s; e++)
            if (o = b[e], u = o.element(t), u) {
                for (i = 0, n = u.length; i < n; i++)
                    if (l = o.map.get(u[i]))
                        for (r = 0, a = l.length; r < a; r++) c = l[r], d = c.id, !v[d] && this.matchesSelector(t, c.selector) && (v[d] = !0, nt.push(c))
            }
        return nt.sort(Y)
    };
    var T = null,
        F = null,
        $ = [];

    function z(t, e) {
        var i = [];

        function r() {
            var n = i;
            i = [], e(n)
        }

        function s() {
            for (var n = arguments.length, a = Array(n), o = 0; o < n; o++) a[o] = arguments[o];
            i.push(a), i.length === 1 && N(t, r)
        }
        return s
    }

    function N(t, e) {
        F || (F = new MutationObserver(dt)), T || (T = t.createElement("div"), F.observe(T, {
            attributes: !0
        })), $.push(e), T.setAttribute("data-twiddle", "" + Date.now())
    }

    function dt() {
        var t = $;
        $ = [];
        for (var e = 0; e < t.length; e++) try {
            t[e]()
        } catch (i) {
            setTimeout(function() {
                throw i
            }, 0)
        }
    }
    var J = new WeakMap,
        S = new WeakMap,
        L = new WeakMap,
        m = new WeakMap;

    function E(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i],
                s = r[0],
                n = r[1],
                a = r[2];
            s === x ? (ht(a, n), ft(a, n)) : s === tt ? K(a, n) : s === I && gt(t.observers, n)
        }
    }

    function ht(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = J.get(e);
            if (i || (i = [], J.set(e, i)), i.indexOf(t.id) === -1) {
                var r = void 0;
                if (t.initialize && (r = t.initialize.call(void 0, e)), r) {
                    var s = S.get(e);
                    s || (s = {}, S.set(e, s)), s["" + t.id] = r
                }
                i.push(t.id)
            }
        }
    }

    function ft(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = m.get(e);
            if (i || (i = [], m.set(e, i)), i.indexOf(t.id) === -1) {
                t.elements.push(e);
                var r = S.get(e),
                    s = r ? r["" + t.id] : null;
                if (s && s.add && s.add.call(void 0, e), t.subscribe) {
                    var n = t.subscribe.call(void 0, e);
                    if (n) {
                        var a = L.get(e);
                        a || (a = {}, L.set(e, a)), a["" + t.id] = n
                    }
                }
                t.add && t.add.call(void 0, e), i.push(t.id)
            }
        }
    }

    function K(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = m.get(e);
            if (!!i) {
                var r = t.elements.indexOf(e);
                if (r !== -1 && t.elements.splice(r, 1), r = i.indexOf(t.id), r !== -1) {
                    var s = S.get(e),
                        n = s ? s["" + t.id] : null;
                    if (n && n.remove && n.remove.call(void 0, e), t.subscribe) {
                        var a = L.get(e),
                            o = a ? a["" + t.id] : null;
                        o && o.unsubscribe && o.unsubscribe()
                    }
                    t.remove && t.remove.call(void 0, e), i.splice(r, 1)
                }
                i.length === 0 && m.delete(e)
            }
        }
    }

    function gt(t, e) {
        var i = m.get(e);
        if (!!i) {
            for (var r = i.slice(0), s = 0; s < r.length; s++) {
                var n = t[r[s]];
                if (!!n) {
                    var a = n.elements.indexOf(e);
                    a !== -1 && n.elements.splice(a, 1);
                    var o = S.get(e),
                        u = o ? o["" + n.id] : null;
                    u && u.remove && u.remove.call(void 0, e);
                    var l = L.get(e),
                        c = l ? l["" + n.id] : null;
                    c && c.unsubscribe && c.unsubscribe(), n.remove && n.remove.call(void 0, e)
                }
            }
            m.delete(e)
        }
    }
    var R = null;

    function mt(t) {
        if (R === null) {
            var e = t.createElement("div"),
                i = t.createElement("div"),
                r = t.createElement("div");
            e.appendChild(i), i.appendChild(r), e.innerHTML = "", R = r.parentNode !== i
        }
        return R
    }

    function Z(t) {
        return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
    }
    var x = 1,
        tt = 2,
        I = 3;

    function bt(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            s.type === "childList" ? (et(t, e, s.addedNodes), pt(t, e, s.removedNodes)) : s.type === "attributes" && M(t, e, s.target)
        }
        mt(t.ownerDocument) && St(t, e)
    }

    function et(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            if (Z(s))
                for (var n = t.selectorSet.matches(s), a = 0; a < n.length; a++) {
                    var o = n[a].data;
                    e.push([x, s, o])
                }
            if ("querySelectorAll" in s)
                for (var u = t.selectorSet.queryAll(s), l = 0; l < u.length; l++)
                    for (var c = u[l], d = c.data, b = c.elements, v = 0; v < b.length; v++) e.push([x, b[v], d])
        }
    }

    function pt(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            if ("querySelectorAll" in s) {
                e.push([I, s]);
                for (var n = s.querySelectorAll("*"), a = 0; a < n.length; a++) e.push([I, n[a]])
            }
        }
    }

    function M(t, e, i) {
        if (Z(i))
            for (var r = t.selectorSet.matches(i), s = 0; s < r.length; s++) {
                var n = r[s].data;
                e.push([x, i, n])
            }
        if ("querySelectorAll" in i) {
            var a = m.get(i);
            if (a)
                for (var o = 0; o < a.length; o++) {
                    var u = t.observers[a[o]];
                    u && (t.selectorSet.matchesSelector(i, u.selector) || e.push([tt, i, u]))
                }
        }
    }

    function vt(t, e, i) {
        if ("querySelectorAll" in i) {
            M(t, e, i);
            for (var r = i.querySelectorAll("*"), s = 0; s < r.length; s++) M(t, e, r[s])
        }
    }

    function yt(t, e, i) {
        for (var r = 0; r < i.length; r++)
            for (var s = i[r], n = s.form ? s.form.elements : t.rootNode.querySelectorAll("input"), a = 0; a < n.length; a++) M(t, e, n[a])
    }

    function St(t, e) {
        for (var i = 0; i < t.observers.length; i++) {
            var r = t.observers[i];
            if (r)
                for (var s = r.elements, n = 0; n < s.length; n++) {
                    var a = s[n];
                    a.parentNode || e.push([I, a])
                }
        }
    }

    function wt(t, e) {
        var i = t.readyState;
        i === "interactive" || i === "complete" ? N(t, e) : t.addEventListener("DOMContentLoaded", N(t, e))
    }
    var At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        Tt = 0;

    function w(t) {
        this.rootNode = t.nodeType === 9 ? t.documentElement : t, this.ownerDocument = t.nodeType === 9 ? t : t.ownerDocument, this.observers = [], this.selectorSet = new h, this.mutationObserver = new MutationObserver(xt.bind(this, this)), this._scheduleAddRootNodes = z(this.ownerDocument, Et.bind(this, this)), this._handleThrottledChangedTargets = z(this.ownerDocument, Mt.bind(this, this)), this.rootNode.addEventListener("change", It.bind(this, this), !1), wt(this.ownerDocument, Lt.bind(this, this))
    }
    w.prototype.disconnect = function() {
        this.mutationObserver.disconnect()
    }, w.prototype.observe = function(t, e) {
        var i = void 0;
        typeof e == "function" ? i = {
            selector: t,
            initialize: e
        } : (typeof e == "undefined" ? "undefined" : At(e)) === "object" ? (i = e, i.selector = t) : i = t;
        var r = this,
            s = {
                id: Tt++,
                selector: i.selector,
                initialize: i.initialize,
                add: i.add,
                remove: i.remove,
                subscribe: i.subscribe,
                elements: [],
                elementConstructor: i.hasOwnProperty("constructor") ? i.constructor : this.ownerDocument.defaultView.Element,
                abort: function() {
                    r._abortObserving(s)
                }
            };
        return this.selectorSet.add(s.selector, s), this.observers[s.id] = s, this._scheduleAddRootNodes(), s
    }, w.prototype._abortObserving = function(t) {
        for (var e = t.elements, i = 0; i < e.length; i++) K(t, e[i]);
        this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
    }, w.prototype.triggerObservers = function(t) {
        var e = [];
        vt(this, e, t), E(this, e)
    };

    function Lt(t) {
        t.mutationObserver.observe(t.rootNode, {
            childList: !0,
            attributes: !0,
            subtree: !0
        }), t._scheduleAddRootNodes()
    }

    function Et(t) {
        var e = [];
        et(t, e, [t.rootNode]), E(t, e)
    }

    function xt(t, e) {
        var i = [];
        bt(t, i, e), E(t, i)
    }

    function It(t, e) {
        t._handleThrottledChangedTargets(e.target)
    }

    function Mt(t, e) {
        var i = [];
        yt(t, i, e), E(t, i)
    }
    var _ = void 0;

    function kt() {
        return _ || (_ = new w(window.document)), _
    }

    function f() {
        var t;
        return (t = kt()).observe.apply(t, arguments)
    }
    f(".js-override-utm-params", t => {
        let e = t.getAttribute("href");
        const i = document.location.search,
            r = ["utm_campaign", "utm_medium", "utm_source"];
        if (!(!e || !i))
            for (const s of r) {
                const n = new RegExp(`${s}=([^=&]*)`),
                    a = n.exec(i);
                n.lastIndex = 0, !!a && (e = e.replace(n, `${s}=${a[1]}`), t.setAttribute("href", e))
            }
    });
    var jt = Object.defineProperty,
        k = (t, e) => jt(t, "name", {
            value: e,
            configurable: !0
        });
    const g = "build-in-animate",
        it = "build-in-reduced",
        j = 30,
        q = 0,
        C = 0;
    f(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]", t => {
        const e = parseInt(t.getAttribute("data-build-in-stagger")),
            i = t.querySelectorAll(".js-build-in-item");
        for (let r = 0; r < i.length; r++) i[r].style.transitionDelay = `${r*e}ms`
    });
    const qt = new IntersectionObserver(U, {
        rootMargin: `-${q}% 0% -${j}% 0%`,
        threshold: C
    });
    f(".js-build-in-item[data-build-delay]", t => {
        const e = Number(t.getAttribute("data-build-delay") || 0);
        t instanceof HTMLElement && (t.style.transitionDelay = `${e}ms`)
    }), f(".js-build-in, .js-build-in-trigger", t => {
        if (p(t)) {
            X(t);
            return
        }
        const e = H(t);
        if (e.isDefault) return qt.observe(t);
        new IntersectionObserver(U, {
            rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
            threshold: e.threshold
        }).observe(t)
    });

    function U(t) {
        for (const e of t)
            if (e.target.classList.toggle(g, e.isIntersecting), !!e.target.classList.contains("js-build-in-trigger"))
                for (const i of e.target.querySelectorAll(".js-build-in-item")) i.classList.toggle(g, e.isIntersecting)
    }
    k(U, "toggleAnimationClasses");

    function p(t) {
        const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
            i = t.getAttribute("data-build-non-decorative") || "false";
        return e.matches && i === "false"
    }
    k(p, "shouldReduceMotion");

    function X(t) {
        t.classList.add(it), t.classList.add(g);
        for (const e of t.querySelectorAll(".js-build-in-item, .js-type-in-item")) e.classList.add(it), e.classList.add(g)
    }
    k(X, "cancelAnimationsForElement");

    function H(t) {
        const e = Number(t.getAttribute("data-build-margin-bottom") || j),
            i = Number(t.getAttribute("data-build-margin-top") || q),
            r = Number(t.getAttribute("data-build-threshold") || C);
        return {
            marginBottom: e,
            marginTop: i,
            threshold: r,
            isDefault: e === j && i === q && r === C
        }
    }
    k(H, "animationOptions"), f(".js-viewport-aware-video", {
        constructor: HTMLMediaElement,
        add(t) {
            if (t.addEventListener("click", () => {
                    t.classList.toggle("looping-paused-mktg", !t.paused), t.paused ? t.play() : t.pause()
                }), p(t)) {
                t.pause(), t.classList.add("looping-paused-mktg");
                return
            }
            const e = t.getAttribute("data-threshold") || "0.2";
            new IntersectionObserver(r => {
                for (const s of r) s.isIntersecting ? t.play() : t.pause()
            }, {
                threshold: Number(e)
            }).observe(t)
        }
    });
    var Ct = Object.defineProperty,
        B = (t, e) => Ct(t, "name", {
            value: e,
            configurable: !0
        });
    const rt = 20,
        Bt = 200;
    f(".js-type-in, .js-type-in-item", t => {
        p(t) || O(t)
    });
    const Ot = new IntersectionObserver(W, {
        rootMargin: `-${q}% 0% -${j}% 0%`,
        threshold: C
    });
    f(".js-type-in, .js-type-in-trigger", t => {
        if (p(t)) {
            X(t);
            return
        }
        const e = H(t);
        if (e.isDefault) return Ot.observe(t);
        new IntersectionObserver(W, {
            rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
            threshold: e.threshold
        }).observe(t)
    });

    function W(t) {
        for (const e of t)
            if (e.isIntersecting ? V(e.target) : O(e.target), !!e.target.classList.contains("js-type-in-trigger"))
                for (const i of e.target.querySelectorAll(".js-type-in-item")) e.isIntersecting ? V(i) : O(i)
    }
    B(W, "setAnimationState");

    function O(t) {
        const e = t.querySelectorAll(".js-type-row, .js-type-letters");
        for (const i of e) i.style.visibility = "hidden";
        t.classList.remove(g)
    }
    B(O, "resetText");

    function V(t) {
        if (t.classList.contains(g)) return;
        t.classList.add(g);
        const e = t.querySelectorAll(".js-type-row, .js-type-letters"),
            i = Number(t.getAttribute("data-type-delay") || rt),
            r = Number(t.getAttribute("data-type-row-delay") || Bt);
        setTimeout(() => P(t, e, 0, "", r), i)
    }
    B(V, "startTextAnimation");

    function P(t, e, i, r, s) {
        if (i >= e.length) return;
        const n = e[i];
        if (!t.classList.contains(g)) {
            r !== "" && (n.textContent = r);
            return
        }
        if (n.classList.contains("js-type-row")) {
            n.style.visibility = "visible", i++, setTimeout(() => P(t, e, i, "", s), s);
            return
        } else n.style.visibility === "hidden" && n.textContent != null && (r = n.textContent, n.textContent = "", n.style.visibility = "visible", n.classList.add("animation-is-typing"));
        n.textContent != null && r.length > n.textContent.length ? n.textContent = r.substr(0, n.textContent.length + 1) : (i++, i < e.length && n.classList.remove("animation-is-typing")), setTimeout(() => P(t, e, i, r, s), rt)
    }
    B(P, "animateText");
    const Pt = new IntersectionObserver(function(t) {
        for (const e of t)
            if (e.isIntersecting)
                for (const i of document.querySelectorAll(".js-scrollnav-item")) i.classList.toggle("selected", i.getAttribute("href") === `#${e.target.id}`)
    }, {
        root: null,
        rootMargin: "0px",
        threshold: .1
    });
    f(".js-section", t => Pt.observe(t));
    var Dt = Object.defineProperty,
        Ft = (t, e) => Dt(t, "name", {
            value: e,
            configurable: !0
        });
    class A extends HTMLElement {
        constructor() {
            super();
            const e = this.getAttribute("src");
            if (!e) return this;
            this.defaultSkipStep = 10, this.playToggleButton = this.querySelector(".js-github-audio-play-toggle"), this.playToggleButtonLabel = this.querySelector("#play-toggle-label"), this.currentTimeLabel = this.querySelector(".js-github-audio-current-time"), this.totalTimeLabel = this.querySelector(".js-github-audio-total-time"), this.scrubber = this.querySelector(".js-github-audio-scrubber"), this.scrubberProgress = this.querySelector(".js-github-audio-scrubber-progress"), this.skipBackwardButton = this.querySelector(".js-github-audio-skip-backward"), this.skipForwardButton = this.querySelector(".js-github-audio-skip-forward"), this.requestedAnimationFrame = 0, this.ready = !1, this.audio = this.createAudioElement(e, this.onLoadedMetaData, null, this.onEnded)
        }
        createAudioElement(e, i, r, s) {
            const n = new Audio;
            return n.preload = "metadata", i && n.addEventListener("loadedmetadata", () => {
                i.bind(this)()
            }), s && n.addEventListener("ended", () => {
                s.bind(this)()
            }), r && n.addEventListener("canplay", () => {
                r.bind(this)()
            }), n.src = e, n
        }
        static zeroFormat(e) {
            return e < 10 ? `0${e}` : `${e}`
        }
        static formatTime(e) {
            const i = Math.floor(e / 60),
                r = Math.floor(e % 60);
            return `${this.zeroFormat(i)}:${this.zeroFormat(r)}`
        }
        setTotalTimeLabel(e) {
            !this.totalTimeLabel || (this.totalTimeLabel.textContent = A.formatTime(e))
        }
        setCurrentTimeLabel(e) {
            !this.currentTimeLabel || (this.currentTimeLabel.textContent = A.formatTime(e))
        }
        getTotalTimeLabel() {
            return this.totalTimeLabel ? this.totalTimeLabel.textContent : ""
        }
        getCurrentTimeLabel() {
            return this.currentTimeLabel ? this.currentTimeLabel.textContent : ""
        }
        updateScrubberAria() {
            !this.scrubber || this.scrubber.setAttribute("aria-valuenow", this.scrubber.value)
        }
        calculatePercentagePostion(e, i) {
            return e * 100 / i
        }
        setScrubberPosition(e) {
            if (!this.scrubber || !this.scrubberProgress) return;
            this.scrubber.value = `${Math.floor(e)}`;
            const i = parseInt(this.scrubber.max);
            this.scrubberProgress.style.width = `${this.calculatePercentagePostion(e,i)}%`, this.updateScrubberAria()
        }
        updateStateWhilePlaying() {
            this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime), this.requestedAnimationFrame = requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
        }
        initScrubber() {
            !this.scrubber || (this.scrubber.min = "0", this.scrubber.max = `${Math.floor(this.audio.duration)}`, this.scrubber.setAttribute("aria-valuemin", this.scrubber.min), this.scrubber.setAttribute("aria-valuemax", this.scrubber.max), this.scrubber.addEventListener("change", () => {
                !this.scrubber || (this.audio.currentTime = parseInt(this.scrubber.value, 10), this.audio.paused || requestAnimationFrame(this.updateStateWhilePlaying.bind(this)))
            }), this.scrubber.addEventListener("input", () => {
                if (!this.scrubber || !this.scrubberProgress) return;
                const e = parseInt(this.scrubber.value, 10),
                    i = parseInt(this.scrubber.max, 10);
                this.setCurrentTimeLabel(e), this.scrubberProgress.style.width = `${this.calculatePercentagePostion(e,i)}%`, this.updateScrubberAria(), this.audio.paused || cancelAnimationFrame(this.requestedAnimationFrame)
            }), this.scrubber.addEventListener("keyup", e => {
                e.code === "Space" && this.togglePlay()
            }))
        }
        play() {
            this.audio.play(), this.playToggleButtonLabel && (this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute("data-label-pause")), this.playToggleButton && this.playToggleButton.setAttribute("data-play-state", "playing"), requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
        }
        pause() {
            this.audio.pause(), this.playToggleButtonLabel && (this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute("data-label-play")), this.playToggleButton && this.playToggleButton.setAttribute("data-play-state", "paused"), cancelAnimationFrame(this.requestedAnimationFrame)
        }
        stop() {
            this.pause(), this.audio.currentTime = 0, this.setScrubberPosition(0)
        }
        togglePlay() {
            if (this.audio.paused) {
                this.play();
                return
            }
            this.pause()
        }
        skipForward(e) {
            e = e || this.defaultSkipStep, this.audio.currentTime = this.audio.currentTime + e, this.audio.paused && (this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime))
        }
        skipBackward(e) {
            e = e || this.defaultSkipStep, this.audio.currentTime = this.audio.currentTime - e, this.audio.paused && (this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime))
        }
        onLoadedMetaData() {
            this.setTotalTimeLabel(this.audio.duration), this.initScrubber(), this.onCanPlay()
        }
        onEnded() {
            this.pause()
        }
        onCanPlay() {
            this.ready || (this.playToggleButton && (this.playToggleButton.addEventListener("click", this.togglePlay.bind(this)), this.playToggleButton.removeAttribute("disabled")), this.skipForwardButton && (this.skipForwardButton.addEventListener("click", () => {
                this.skipForward()
            }), this.skipForwardButton.removeAttribute("disabled")), this.skipBackwardButton && (this.skipBackwardButton.addEventListener("click", () => {
                this.skipBackward()
            }), this.skipBackwardButton.removeAttribute("disabled")), this.scrubber && this.scrubber.removeAttribute("disabled"), this.ready = !0)
        }
    }
    Ft(A, "GitHubAudio"), window && "customElements" in window && window.customElements.define("github-audio", A);
    var $t = Object.defineProperty,
        Nt = (t, e) => $t(t, "name", {
            value: e,
            configurable: !0
        });
    class st extends HTMLElement {
        constructor() {
            super();
            const e = this.getAttribute("data-slide-show-autoplay"),
                i = this.getAttribute("data-threshold") || "0.2";
            if (this.intervalTime = 6e3, this.bullets = this.querySelectorAll(".js-slide-show-bullet[aria-controls]"), this.gotos = this.querySelectorAll(".js-slide-show-goto[aria-controls]"), this.slideIds = [], this.interval = null, this.current = 0, this.currentSlideId = null, this.swipeArea = this.querySelector(".js-slide-show-swipe-area"), this.touchStartX = 0, this.touchEndX = 0, this.swipeLengthMod = 20, e && !p(this)) {
                const r = parseInt(e, 10);
                isNaN(r) || (this.intervalTime = r), new IntersectionObserver(n => {
                    for (const a of n) {
                        const o = a.target;
                        a.isIntersecting ? o.play() : o.pause()
                    }
                }, {
                    threshold: Number(i)
                }).observe(this)
            }
            for (let r = 0; r < this.bullets.length; r++) {
                const s = this.bullets[r],
                    n = s.getAttribute("aria-controls"),
                    a = s.getAttribute("aria-selected");
                n && this.slideIds.push(n), a && (this.current = r, this.currentSlideId = n), s.addEventListener("click", this.bulletOnClick.bind(this))
            }
            for (let r = 0; r < this.gotos.length; r++) {
                const s = this.gotos[r],
                    n = s.getAttribute("aria-controls");
                this.currentSlideId === n && s.setAttribute("aria-selected", "true"), s.addEventListener("click", this.bulletOnClick.bind(this))
            }
            this.swipeArea && (this.swipeArea.addEventListener("touchstart", this.onTouchStart.bind(this), {
                passive: !0
            }), this.swipeArea.addEventListener("touchend", this.onTouchEnd.bind(this)))
        }
        onTouchStart(e) {
            this.touchStartX = e.changedTouches[0].screenX
        }
        onTouchEnd(e) {
            this.touchEndX = e.changedTouches[0].screenX, this.touchEndX < this.touchStartX - this.swipeLengthMod && (this.pause(), this.nextSlide()), this.touchEndX > this.touchStartX + this.swipeLengthMod && (this.pause(), this.prevSlide())
        }
        pause() {
            this.interval && window.clearInterval(this.interval)
        }
        play() {
            this.pause(), this.interval = window.setInterval(this.nextSlide.bind(this), this.intervalTime)
        }
        nextSlide() {
            this.current++, this.current > this.slideIds.length - 1 && (this.current = 0), this.goToSlide(this.slideIds[this.current])
        }
        prevSlide() {
            this.current--, this.current < 0 && (this.current = this.slideIds.length - 1), this.goToSlide(this.slideIds[this.current])
        }
        bulletOnClick(e) {
            e.preventDefault();
            const i = e.target,
                r = i == null ? void 0 : i.getAttribute("aria-controls");
            r && this.goToSlide(r), this.pause()
        }
        goToSlide(e) {
            const i = this.querySelector(`.js-slide-show-slide[id="${e}"]`),
                r = this.querySelector(`.js-slide-show-bullet[aria-controls="${e}"]`),
                s = this.querySelectorAll(`.js-slide-show-goto[aria-controls="${e}"]`),
                n = this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])'),
                a = this.querySelector('.js-slide-show-bullet[aria-selected="true"]'),
                o = this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]');
            n == null || n.setAttribute("aria-hidden", "true"), a == null || a.setAttribute("aria-selected", "false");
            for (let u = 0; u < o.length; u++) o[u].setAttribute("aria-selected", "false");
            i == null || i.removeAttribute("aria-hidden"), r == null || r.setAttribute("aria-selected", "true");
            for (let u = 0; u < s.length; u++) s[u].setAttribute("aria-selected", "true")
        }
    }
    if (Nt(st, "SlideShow"), window && "customElements" in window && window.customElements.define("slide-show", st), window.location.hash) {
        const t = document.querySelector(`.faq-mktg-item${window.location.hash} details`);
        t && (t.open = !0)
    }
})();
//# sourceMappingURL=marketing-e3bfe776.js.map