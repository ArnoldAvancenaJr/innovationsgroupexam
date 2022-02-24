System.register([], function(l) {
    "use strict";
    return {
        execute: function() {
            l({
                d: m,
                g: u,
                s: d
            });
            var f = Object.defineProperty,
                r = (n, o) => f(n, "name", {
                    value: o,
                    configurable: !0
                });

            function u(n) {
                const o = [];
                for (const e of a()) {
                    const [i, c] = e.trim().split("=");
                    n === i && typeof c != "undefined" && o.push({
                        key: i,
                        value: c
                    })
                }
                return o
            }
            r(u, "getCookies");

            function a() {
                try {
                    return document.cookie.split(";")
                } catch {
                    return []
                }
            }
            r(a, "readCookies");

            function d(n, o, e = null, i = !1, c = "lax") {
                let t = document.domain;
                if (t == null) throw new Error("Unable to get document domain");
                t.endsWith(".github.com") && (t = "github.com");
                const s = location.protocol === "https:" ? "; secure" : "",
                    h = e ? `; expires=${e}` : "";
                i === !1 && (t = `.${t}`);
                try {
                    document.cookie = `${n}=${o}; path=/; domain=${t}${h}${s}; samesite=${c}`
                } catch {}
            }
            r(d, "setCookie");

            function m(n, o = !1) {
                let e = document.domain;
                if (e == null) throw new Error("Unable to get document domain");
                e.endsWith(".github.com") && (e = "github.com");
                const i = new Date().getTime(),
                    c = new Date(i - 1).toUTCString(),
                    t = location.protocol === "https:" ? "; secure" : "",
                    s = `; expires=${c}`;
                o === !1 && (e = `.${e}`);
                try {
                    document.cookie = `${n}=''; path=/; domain=${e}${s}${t}`
                } catch {}
            }
            r(m, "deleteCookie")
        }
    }
});
//# sourceMappingURL=chunk-cookies-5ebed743.js.map