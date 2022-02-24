System.register(["./chunk-frameworks.js", "./chunk-vendor.js"], function(g) {
    "use strict";
    var u, d, o, m;
    return {
        setters: [function(t) {
            u = t.c, d = t.I, o = t.ax
        }, function(t) {
            m = t.o
        }],
        execute: function() {
            g("a", c);
            var t = Object.defineProperty,
                r = (e, i) => t(e, "name", {
                    value: i,
                    configurable: !0
                });
            m(".js-responsive-underlinenav", {
                constructor: HTMLElement,
                subscribe: e => (c(e), u(window, "resize", () => l(e)))
            });
            async function c(e) {
                await d, l(e)
            }
            r(c, "asyncCalculateVisibility");

            function y(e, i) {
                e.style.visibility = i ? "hidden" : "";
                const n = e.getAttribute("data-tab-item");
                if (n) {
                    const s = document.querySelector(`[data-menu-item=${n}]`);
                    s instanceof HTMLElement && (s.hidden = !i)
                }
            }
            r(y, "toggleItem");

            function l(e) {
                const i = e.querySelectorAll(".js-responsive-underlinenav-item"),
                    n = e.querySelector(".js-responsive-underlinenav-overflow"),
                    s = o(n, e);
                if (!s) return;
                let f = !1;
                for (const a of i) {
                    const b = o(a, e);
                    if (b) {
                        const v = b.left + a.offsetWidth >= s.left;
                        y(a, v), f = f || v
                    }
                }
                n.style.visibility = f ? "" : "hidden"
            }
            r(l, "calculateVisibility")
        }
    }
});
//# sourceMappingURL=chunk-responsive-underlinenav-a23c0002.js.map