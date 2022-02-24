(function() {
    "use strict";
    var se = Object.defineProperty,
        ce = (t, e) => se(t, "name", {
            value: e,
            configurable: !0
        });

    function _(t) {
        var e, r;
        const o = (r = (e = t.head) == null ? void 0 : e.querySelector('meta[name="expected-hostname"]')) == null ? void 0 : r.content;
        if (!o) return !1;
        const a = o.replace(/\.$/, "").split(".").slice(-2).join("."),
            f = t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".");
        return a !== f
    }
    ce(_, "detectProxySite");
    let P;

    function k() {
        return `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(Date.now()/1e3)}`
    }

    function ue(t) {
        const e = `GH1.1.${t}`,
            r = Date.now(),
            o = new Date(r + 1 * 365 * 86400 * 1e3).toUTCString();
        let {
            domain: a
        } = document;
        a.endsWith(".github.com") && (a = "github.com"), document.cookie = `_octo=${e}; expires=${o}; path=/; domain=${a}; secure; samesite=lax`
    }

    function fe() {
        let t;
        const r = document.cookie.match(/_octo=([^;]+)/g);
        if (!r) return;
        let o = [0, 0];
        for (const a of r) {
            const [, f] = a.split("="), [, l, ...u] = f.split("."), s = l.split("-").map(Number);
            s > o && (o = s, t = u.join("."))
        }
        return t
    }

    function pe() {
        try {
            const t = fe();
            if (t) return t;
            const e = k();
            return ue(e), e
        } catch {
            return P || (P = k()), P
        }
    }

    function de(t) {
        const e = new AbortController;
        return e.abort(t), e.signal
    }

    function I() {
        return "abort" in AbortSignal && typeof AbortSignal.abort == "function"
    }

    function me() {
        I() || (AbortSignal.abort = de)
    }

    function ge(t) {
        const e = new AbortController;
        return setTimeout(() => e.abort(new DOMException("TimeoutError")), t), e.signal
    }

    function N() {
        return "abort" in AbortSignal && typeof AbortSignal.timeout == "function"
    }

    function ye() {
        N() || (AbortSignal.timeout = ge)
    }
    class be extends Error {
        constructor(e, r, o = {}) {
            super(r);
            Object.defineProperty(this, "errors", {
                value: Array.from(e),
                configurable: !0,
                writable: !0
            }), o.cause && Object.defineProperty(this, "cause", {
                value: o.cause,
                configurable: !0,
                writable: !0
            })
        }
    }

    function R() {
        return typeof globalThis.AggregateError == "function"
    }

    function he() {
        R() || (globalThis.AggregateError = be)
    }
    const A = Reflect.getPrototypeOf(Int8Array) || {};

    function ve(t) {
        const e = this.length;
        return t = Math.trunc(t) || 0, t < 0 && (t += e), t < 0 || t >= e ? void 0 : this[t]
    }

    function U() {
        return "at" in Array.prototype && typeof Array.prototype.at == "function" && "at" in String.prototype && typeof String.prototype.at == "function" && "at" in A && typeof A.at == "function"
    }

    function we() {
        if (!U()) {
            const t = {
                value: ve,
                writable: !0,
                configurable: !0
            };
            Object.defineProperty(Array.prototype, "at", t), Object.defineProperty(String.prototype, "at", t), Object.defineProperty(A, "at", t)
        }
    }

    function Se() {
        const t = new Uint32Array(4);
        crypto.getRandomValues(t);
        let e = -1;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
            e++;
            const o = t[e >> 3] >> e % 8 * 4 & 15;
            return (r === "x" ? o : o & 3 | 8).toString(16)
        })
    }

    function D() {
        return typeof crypto == "object" && "randomUUID" in crypto && typeof crypto.randomUUID == "function"
    }

    function Ee() {
        D() || (crypto.randomUUID = Se)
    }
    const M = EventTarget.prototype.addEventListener;

    function xe(t, e, r) {
        if (typeof r == "object" && "signal" in r && r.signal instanceof AbortSignal) {
            if (r.signal.aborted) return;
            M.call(r.signal, "abort", () => {
                this.removeEventListener(t, e, r)
            })
        }
        return M.call(this, t, e, r)
    }

    function B() {
        let t = !1;
        const e = () => t = !0;

        function r() {}
        const o = Object.create({}, {
            signal: {
                get: e
            }
        });
        try {
            const a = new EventTarget;
            return a.addEventListener("test", r, o), a.removeEventListener("test", r, o), t
        } catch {
            return t
        }
    }

    function Oe() {
        typeof AbortSignal == "function" && !B() && (EventTarget.prototype.addEventListener = xe)
    }
    const $e = Object.prototype.hasOwnProperty;

    function Te(t, e) {
        if (t == null) throw new TypeError("Cannot convert undefined or null to object");
        return $e.call(Object(t), e)
    }

    function X() {
        return "hasOwn" in Object && typeof Object.hasOwn == "function"
    }

    function je() {
        X() || Object.defineProperty(Object, "hasOwn", {
            value: Te,
            configurable: !0,
            writable: !0
        })
    }

    function Pe(t) {
        return new Promise((e, r) => {
            let o = !1;
            const a = Array.from(t),
                f = [];

            function l(s) {
                o || (o = !0, e(s))
            }

            function u(s) {
                f.push(s), f.length === a.length && r(new globalThis.AggregateError(f, "All Promises rejected"))
            }
            for (const s of a) Promise.resolve(s).then(l, u)
        })
    }

    function Y() {
        return "any" in Promise && typeof Promise.any == "function"
    }

    function Ae() {
        Y() || (Promise.any = Pe)
    }
    const Ce = 50;

    function Le(t, e = {}) {
        const r = Date.now(),
            o = e.timeout || 0,
            a = Object.defineProperty({
                didTimeout: !1,
                timeRemaining() {
                    return Math.max(0, Ce - (Date.now() - r))
                }
            }, "didTimeout", {
                get() {
                    return Date.now() - r > o
                }
            });
        return window.setTimeout(() => {
            t(a)
        })
    }

    function _e(t) {
        clearTimeout(t)
    }

    function q() {
        return typeof globalThis.requestIdleCallback == "function"
    }

    function ke() {
        q() || (globalThis.requestIdleCallback = Le, globalThis.cancelIdleCallback = _e)
    }
    const Ie = typeof Blob == "function" && typeof PerformanceObserver == "function" && typeof Intl == "object" && typeof MutationObserver == "function" && typeof URLSearchParams == "function" && typeof WebSocket == "function" && typeof IntersectionObserver == "function" && typeof queueMicrotask == "function" && typeof TextEncoder == "function" && typeof TextDecoder == "function" && typeof customElements == "object" && typeof HTMLDetailsElement == "function" && typeof AbortController == "function" && typeof AbortSignal == "function" && "entries" in FormData.prototype && "toggleAttribute" in Element.prototype && "replaceChildren" in Element.prototype && "fromEntries" in Object && "flatMap" in Array.prototype && "trimEnd" in String.prototype && "allSettled" in Promise && "matchAll" in String.prototype && "replaceAll" in String.prototype && !0;

    function Ne() {
        return Ie && I() && N() && R() && U() && D() && B() && X() && Y() && q()
    }

    function Re() {
        me(), ye(), he(), we(), Ee(), Oe(), je(), Ae(), ke()
    }
    var v = "<unknown>";

    function Ue(t) {
        var e = t.split(`
`);
        return e.reduce(function(r, o) {
            var a = Be(o) || Ye(o) || We(o) || ze(o) || Fe(o);
            return a && r.push(a), r
        }, [])
    }
    var De = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Me = /\((\S*)(?::(\d+))(?::(\d+))\)/;

    function Be(t) {
        var e = De.exec(t);
        if (!e) return null;
        var r = e[2] && e[2].indexOf("native") === 0,
            o = e[2] && e[2].indexOf("eval") === 0,
            a = Me.exec(e[2]);
        return o && a != null && (e[2] = a[1], e[3] = a[2], e[4] = a[3]), {
            file: r ? null : e[2],
            methodName: e[1] || v,
            arguments: r ? [e[2]] : [],
            lineNumber: e[3] ? +e[3] : null,
            column: e[4] ? +e[4] : null
        }
    }
    var Xe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

    function Ye(t) {
        var e = Xe.exec(t);
        return e ? {
            file: e[2],
            methodName: e[1] || v,
            arguments: [],
            lineNumber: +e[3],
            column: e[4] ? +e[4] : null
        } : null
    }
    var qe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
        Ve = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

    function We(t) {
        var e = qe.exec(t);
        if (!e) return null;
        var r = e[3] && e[3].indexOf(" > eval") > -1,
            o = Ve.exec(e[3]);
        return r && o != null && (e[3] = o[1], e[4] = o[2], e[5] = null), {
            file: e[3],
            methodName: e[1] || v,
            arguments: e[2] ? e[2].split(",") : [],
            lineNumber: e[4] ? +e[4] : null,
            column: e[5] ? +e[5] : null
        }
    }
    var He = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

    function Fe(t) {
        var e = He.exec(t);
        return e ? {
            file: e[3],
            methodName: e[1] || v,
            arguments: [],
            lineNumber: +e[4],
            column: e[5] ? +e[5] : null
        } : null
    }
    var Ge = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

    function ze(t) {
        var e = Ge.exec(t);
        return e ? {
            file: e[2],
            methodName: e[1] || v,
            arguments: [],
            lineNumber: +e[3],
            column: e[4] ? +e[4] : null
        } : null
    }
    var Je = Object.defineProperty,
        S = (t, e) => Je(t, "name", {
            value: e,
            configurable: !0
        });

    function E(t) {
        const e = document.querySelectorAll(t);
        if (e.length > 0) return e[e.length - 1]
    }
    S(E, "queryLast");

    function V() {
        const t = E("meta[name=analytics-location]");
        return t ? t.content : window.location.pathname
    }
    S(V, "pagePathname");

    function W() {
        const t = E("meta[name=analytics-location-query-strip]");
        let e = "";
        t || (e = window.location.search);
        const r = E("meta[name=analytics-location-params]");
        r && (e += (e ? "&" : "?") + r.content);
        for (const o of document.querySelectorAll("meta[name=analytics-param-rename]")) {
            const a = o.content.split(":", 2);
            e = e.replace(new RegExp(`(^|[?&])${a[0]}($|=)`, "g"), `$1${a[1]}$2`)
        }
        return e
    }
    S(W, "pageQuery");

    function H() {
        return `${window.location.protocol}//${window.location.host}${V()+W()}`
    }
    S(H, "requestUri");
    var Qe = Object.defineProperty,
        p = (t, e) => Qe(t, "name", {
            value: e,
            configurable: !0
        });
    let F = !1,
        G = 0;
    const Ke = Date.now();

    function z(t) {
        t.error && x($(O(t.error)))
    }
    p(z, "reportEvent");
    async function J(t) {
        if (!!t.promise) try {
            await t.promise
        } catch (e) {
            x($(O(e)))
        }
    }
    p(J, "reportPromiseRejectionEvent");

    function Q(t, e = {}) {
        t && t.name !== "AbortError" && x($(O(t), e))
    }
    p(Q, "reportError");
    async function x(t) {
        var e, r;
        if (!re()) return;
        const o = (r = (e = document.head) == null ? void 0 : e.querySelector('meta[name="browser-errors-url"]')) == null ? void 0 : r.content;
        if (!!o) {
            if (ee(t.error.stacktrace)) {
                F = !0;
                return
            }
            G++;
            try {
                await fetch(o, {
                    method: "post",
                    body: JSON.stringify(t)
                })
            } catch {}
        }
    }
    p(x, "report");

    function O(t) {
        return {
            type: t.name,
            value: t.message,
            stacktrace: K(t)
        }
    }
    p(O, "formatError");

    function $(t, e = {}) {
        return Object.assign({
            error: t,
            sanitizedUrl: H() || window.location.href,
            readyState: document.readyState,
            referrer: document.referrer,
            timeSinceLoad: Math.round(Date.now() - Ke),
            user: te() || void 0,
            bundler: ne()
        }, e)
    }
    p($, "errorContext");

    function K(t) {
        return Ue(t.stack || "").map(e => ({
            filename: e.file || "",
            function: String(e.methodName),
            lineno: (e.lineNumber || 0).toString(),
            colno: (e.column || 0).toString()
        }))
    }
    p(K, "stacktrace");
    const Z = /(chrome|moz|safari)-extension:\/\//;

    function ee(t) {
        return t.some(e => Z.test(e.filename) || Z.test(e.function))
    }
    p(ee, "isExtensionError");

    function te() {
        var t, e;
        const r = (e = (t = document.head) == null ? void 0 : t.querySelector('meta[name="user-login"]')) == null ? void 0 : e.content;
        return r || `anonymous-${pe()}`
    }
    p(te, "pageUser");
    let C = !1;
    window.addEventListener("pageshow", () => C = !1), window.addEventListener("pagehide", () => C = !0);

    function re() {
        return !C && !F && G < 10 && Ne() && !_(document)
    }
    p(re, "reportable");

    function ne() {
        return "System" in window ? "rollup" : "webpack"
    }
    p(ne, "bundlerName"), typeof BroadcastChannel == "function" && new BroadcastChannel("shared-worker-error").addEventListener("message", e => {
        Q(e.data.error)
    }), window.addEventListener("error", z), window.addEventListener("unhandledrejection", J), window.location.hash === "#b00m" && setTimeout(() => {
        throw new Error("b00m")
    });
    var Ze = {
        exports: {}
    };
    (function(t, e) {
        (function() {
            var r = window,
                o = document;

            function a(l) {
                var u = ["MSIE ", "Trident/", "Edge/"];
                return new RegExp(u.join("|")).test(l)
            }

            function f() {
                if ("scrollBehavior" in o.documentElement.style && r.__forceSmoothScrollPolyfill__ !== !0) return;
                var l = r.HTMLElement || r.Element,
                    u = 468,
                    s = a(r.navigator.userAgent) ? 1 : 0,
                    d = {
                        scroll: r.scroll || r.scrollTo,
                        scrollBy: r.scrollBy,
                        elementScroll: l.prototype.scroll || g,
                        scrollIntoView: l.prototype.scrollIntoView
                    },
                    T = r.performance && r.performance.now ? r.performance.now.bind(r.performance) : Date.now;

                function g(n, i) {
                    this.scrollLeft = n, this.scrollTop = i
                }

                function h(n) {
                    return .5 * (1 - Math.cos(Math.PI * n))
                }

                function w(n) {
                    if (n === null || typeof n != "object" || n.behavior === void 0 || n.behavior === "auto" || n.behavior === "instant") return !0;
                    if (typeof n == "object" && n.behavior === "smooth") return !1;
                    throw new TypeError("behavior member of ScrollOptions " + n.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function ae(n, i) {
                    if (i === "Y") return n.clientHeight + s < n.scrollHeight;
                    if (i === "X") return n.clientWidth + s < n.scrollWidth
                }

                function ie(n, i) {
                    var c = r.getComputedStyle(n, null)["overflow" + i];
                    return c === "auto" || c === "scroll"
                }

                function nt(n) {
                    var i = ae(n, "Y") && ie(n, "Y"),
                        c = ae(n, "X") && ie(n, "X");
                    return i || c
                }

                function ot(n) {
                    var i;
                    do n = n.parentNode, i = n === o.body; while (i === !1 && nt(n) === !1);
                    return i = null, n
                }

                function le(n) {
                    var i = T(),
                        c, y, b, m = (i - n.startTime) / u;
                    m = m > 1 ? 1 : m, c = h(m), y = n.startX + (n.x - n.startX) * c, b = n.startY + (n.y - n.startY) * c, n.method.call(n.scrollable, y, b), (y !== n.x || b !== n.y) && r.requestAnimationFrame(le.bind(r, n))
                }

                function j(n, i, c) {
                    var y, b, m, L, at = T();
                    n === o.body ? (y = r, b = r.scrollX || r.pageXOffset, m = r.scrollY || r.pageYOffset, L = d.scroll) : (y = n, b = n.scrollLeft, m = n.scrollTop, L = g), le({
                        scrollable: y,
                        method: L,
                        startTime: at,
                        startX: b,
                        startY: m,
                        x: i,
                        y: c
                    })
                }
                r.scroll = r.scrollTo = function() {
                    if (arguments[0] !== void 0) {
                        if (w(arguments[0]) === !0) {
                            d.scroll.call(r, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : r.scrollX || r.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : r.scrollY || r.pageYOffset);
                            return
                        }
                        j.call(r, o.body, arguments[0].left !== void 0 ? ~~arguments[0].left : r.scrollX || r.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : r.scrollY || r.pageYOffset)
                    }
                }, r.scrollBy = function() {
                    if (arguments[0] !== void 0) {
                        if (w(arguments[0])) {
                            d.scrollBy.call(r, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
                            return
                        }
                        j.call(r, o.body, ~~arguments[0].left + (r.scrollX || r.pageXOffset), ~~arguments[0].top + (r.scrollY || r.pageYOffset))
                    }
                }, l.prototype.scroll = l.prototype.scrollTo = function() {
                    if (arguments[0] !== void 0) {
                        if (w(arguments[0]) === !0) {
                            if (typeof arguments[0] == "number" && arguments[1] === void 0) throw new SyntaxError("Value couldn't be converted");
                            d.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
                            return
                        }
                        var n = arguments[0].left,
                            i = arguments[0].top;
                        j.call(this, this, typeof n == "undefined" ? this.scrollLeft : ~~n, typeof i == "undefined" ? this.scrollTop : ~~i)
                    }
                }, l.prototype.scrollBy = function() {
                    if (arguments[0] !== void 0) {
                        if (w(arguments[0]) === !0) {
                            d.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                            return
                        }
                        this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        })
                    }
                }, l.prototype.scrollIntoView = function() {
                    if (w(arguments[0]) === !0) {
                        d.scrollIntoView.call(this, arguments[0] === void 0 ? !0 : arguments[0]);
                        return
                    }
                    var n = ot(this),
                        i = n.getBoundingClientRect(),
                        c = this.getBoundingClientRect();
                    n !== o.body ? (j.call(this, n, n.scrollLeft + c.left - i.left, n.scrollTop + c.top - i.top), r.getComputedStyle(n).position !== "fixed" && r.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth"
                    })) : r.scrollBy({
                        left: c.left,
                        top: c.top,
                        behavior: "smooth"
                    })
                }
            }
            t.exports = {
                polyfill: f
            }
        })()
    })(Ze);

    function et() {
        const t = document.createElement("div");
        return t.style.cssText = "-ms-user-select: element; user-select: contain;", t.style.getPropertyValue("-ms-user-select") === "element" || t.style.getPropertyValue("-ms-user-select") === "contain" || t.style.getPropertyValue("user-select") === "contain"
    }

    function tt(t) {
        if (!(t.target instanceof Element)) return;
        const e = t.target.closest(".user-select-contain");
        if (!e) return;
        const r = window.getSelection();
        if (!r.rangeCount) return;
        const o = r.getRangeAt(0).commonAncestorContainer;
        e.contains(o) || r.selectAllChildren(e)
    }
    window.getSelection && !et() && document.addEventListener("click", tt);
    var rt = Object.defineProperty,
        oe = (t, e) => rt(t, "name", {
            value: e,
            configurable: !0
        });
    self.System = self.System || (() => {
        const t = {},
            e = {},
            r = oe(a => a.replace(/-[a-f0-9]{8,}\.js$/, ".js"), "stripHash"),
            o = {
                register(a, f) {
                    const l = r(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                        u = {},
                        d = f(oe((g, h) => h ? u[g] = h : Object.assign(u, g), "collector"), o),
                        T = a.map((g, h) => o.import(r(g)).then(d.setters[h]));
                    t[l] = Promise.all(T).then(() => (d.execute(), u)), e[l] && (e[l](t[l]), delete e[l])
                },
                import (a) {
                    return t[a] || (t[a] = new Promise((f, l) => {
                        const u = setTimeout(() => {
                                l(new Error(`could not resolve ${a}, timeout after 10 seconds`))
                            }, 1e4),
                            s = document.querySelector(`script[data-src][data-module-id="${a}"]`);
                        s && (s.setAttribute("src", s.getAttribute("data-src")), s.removeAttribute("data-src"), s.addEventListener("error", () => {
                            clearTimeout(u), l(new Error(`could not resolve ${a}, error loading the module`))
                        })), e[a] = d => {
                            clearTimeout(u), f(d)
                        }
                    }))
                }
            };
        return o
    })(), Re()
})();
//# sourceMappingURL=environment-9e228f5f.js.map