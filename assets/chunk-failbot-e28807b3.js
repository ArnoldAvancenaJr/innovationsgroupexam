System.register(["./chunk-frameworks.js", "./chunk-vendor.js"], function(j) {
    "use strict";
    var f, l, d, y;
    return {
        setters: [function(o) {
            f = o.ay, l = o.a9, d = o.az
        }, function(o) {
            y = o.a1
        }],
        execute: function() {
            j({
                a: S,
                r: s
            });

            function o() {
                return "abort" in AbortSignal && typeof AbortSignal.abort == "function"
            }

            function P() {
                return "abort" in AbortSignal && typeof AbortSignal.timeout == "function"
            }

            function C() {
                return typeof globalThis.AggregateError == "function"
            }
            const m = Reflect.getPrototypeOf(Int8Array) || {};

            function x() {
                return "at" in Array.prototype && typeof Array.prototype.at == "function" && "at" in String.prototype && typeof String.prototype.at == "function" && "at" in m && typeof m.at == "function"
            }

            function $() {
                return typeof crypto == "object" && "randomUUID" in crypto && typeof crypto.randomUUID == "function"
            }

            function I() {
                let t = !1;
                const e = () => t = !0;

                function n() {}
                const i = Object.create({}, {
                    signal: {
                        get: e
                    }
                });
                try {
                    const O = new EventTarget;
                    return O.addEventListener("test", n, i), O.removeEventListener("test", n, i), t
                } catch {
                    return t
                }
            }

            function U() {
                return "hasOwn" in Object && typeof Object.hasOwn == "function"
            }

            function L() {
                return "any" in Promise && typeof Promise.any == "function"
            }

            function T() {
                return typeof globalThis.requestIdleCallback == "function"
            }
            const _ = typeof Blob == "function" && typeof PerformanceObserver == "function" && typeof Intl == "object" && typeof MutationObserver == "function" && typeof URLSearchParams == "function" && typeof WebSocket == "function" && typeof IntersectionObserver == "function" && typeof queueMicrotask == "function" && typeof TextEncoder == "function" && typeof TextDecoder == "function" && typeof customElements == "object" && typeof HTMLDetailsElement == "function" && typeof AbortController == "function" && typeof AbortSignal == "function" && "entries" in FormData.prototype && "toggleAttribute" in Element.prototype && "replaceChildren" in Element.prototype && "fromEntries" in Object && "flatMap" in Array.prototype && "trimEnd" in String.prototype && "allSettled" in Promise && "matchAll" in String.prototype && "replaceAll" in String.prototype && !0;

            function D() {
                return _ && o() && P() && C() && x() && $() && I() && U() && L() && T()
            }
            var q = Object.defineProperty,
                r = (t, e) => q(t, "name", {
                    value: e,
                    configurable: !0
                });
            let b = !1,
                g = 0;
            const M = Date.now();

            function S(t) {
                t.error && a(u(c(t.error)))
            }
            r(S, "reportEvent");
            async function N(t) {
                if (!!t.promise) try {
                    await t.promise
                } catch (e) {
                    a(u(c(e)))
                }
            }
            r(N, "reportPromiseRejectionEvent");

            function s(t, e = {}) {
                t && t.name !== "AbortError" && a(u(c(t), e))
            }
            r(s, "reportError");
            async function a(t) {
                var e, n;
                if (!A()) return;
                const i = (n = (e = document.head) == null ? void 0 : e.querySelector('meta[name="browser-errors-url"]')) == null ? void 0 : n.content;
                if (!!i) {
                    if (v(t.error.stacktrace)) {
                        b = !0;
                        return
                    }
                    g++;
                    try {
                        await fetch(i, {
                            method: "post",
                            body: JSON.stringify(t)
                        })
                    } catch {}
                }
            }
            r(a, "report");

            function c(t) {
                return {
                    type: t.name,
                    value: t.message,
                    stacktrace: E(t)
                }
            }
            r(c, "formatError");

            function u(t, e = {}) {
                return Object.assign({
                    error: t,
                    sanitizedUrl: f() || window.location.href,
                    readyState: document.readyState,
                    referrer: document.referrer,
                    timeSinceLoad: Math.round(Date.now() - M),
                    user: w() || void 0,
                    bundler: k()
                }, e)
            }
            r(u, "errorContext");

            function E(t) {
                return y(t.stack || "").map(e => ({
                    filename: e.file || "",
                    function: String(e.methodName),
                    lineno: (e.lineNumber || 0).toString(),
                    colno: (e.column || 0).toString()
                }))
            }
            r(E, "stacktrace");
            const h = /(chrome|moz|safari)-extension:\/\//;

            function v(t) {
                return t.some(e => h.test(e.filename) || h.test(e.function))
            }
            r(v, "isExtensionError");

            function w() {
                var t, e;
                const n = (e = (t = document.head) == null ? void 0 : t.querySelector('meta[name="user-login"]')) == null ? void 0 : e.content;
                return n || `anonymous-${d()}`
            }
            r(w, "pageUser");
            let p = !1;
            window.addEventListener("pageshow", () => p = !1), window.addEventListener("pagehide", () => p = !0);

            function A() {
                return !p && !b && g < 10 && D() && !l(document)
            }
            r(A, "reportable");

            function k() {
                return "System" in window ? "rollup" : "webpack"
            }
            r(k, "bundlerName"), typeof BroadcastChannel == "function" && new BroadcastChannel("shared-worker-error").addEventListener("message", e => {
                s(e.data.error)
            })
        }
    }
});
//# sourceMappingURL=chunk-failbot-9d54bdeb.js.map