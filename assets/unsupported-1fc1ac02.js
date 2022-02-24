(function() {
    "use strict";

    function i() {
        return "abort" in AbortSignal && typeof AbortSignal.abort == "function"
    }

    function p() {
        return "abort" in AbortSignal && typeof AbortSignal.timeout == "function"
    }

    function u() {
        return typeof globalThis.AggregateError == "function"
    }
    const e = Reflect.getPrototypeOf(Int8Array) || {};

    function c() {
        return "at" in Array.prototype && typeof Array.prototype.at == "function" && "at" in String.prototype && typeof String.prototype.at == "function" && "at" in e && typeof e.at == "function"
    }

    function f() {
        return typeof crypto == "object" && "randomUUID" in crypto && typeof crypto.randomUUID == "function"
    }

    function a() {
        let t = !1;
        const S = () => t = !0;

        function n() {}
        const o = Object.create({}, {
            signal: {
                get: S
            }
        });
        try {
            const r = new EventTarget;
            return r.addEventListener("test", n, o), r.removeEventListener("test", n, o), t
        } catch {
            return t
        }
    }

    function y() {
        return "hasOwn" in Object && typeof Object.hasOwn == "function"
    }

    function s() {
        return "any" in Promise && typeof Promise.any == "function"
    }

    function l() {
        return typeof globalThis.requestIdleCallback == "function"
    }
    const b = typeof Blob == "function" && typeof PerformanceObserver == "function" && typeof Intl == "object" && typeof MutationObserver == "function" && typeof URLSearchParams == "function" && typeof WebSocket == "function" && typeof IntersectionObserver == "function" && typeof queueMicrotask == "function" && typeof TextEncoder == "function" && typeof TextDecoder == "function" && typeof customElements == "object" && typeof HTMLDetailsElement == "function" && typeof AbortController == "function" && typeof AbortSignal == "function" && "entries" in FormData.prototype && "toggleAttribute" in Element.prototype && "replaceChildren" in Element.prototype && "fromEntries" in Object && "flatMap" in Array.prototype && "trimEnd" in String.prototype && "allSettled" in Promise && "matchAll" in String.prototype && "replaceAll" in String.prototype && !0;

    function d() {
        return b && i() && p() && u() && c() && f() && a() && y() && s() && l()
    }
    if (!d()) {
        const t = document.getElementById("unsupported-browser");
        t && t.removeAttribute("hidden")
    }
})();
//# sourceMappingURL=unsupported-45317870.js.map