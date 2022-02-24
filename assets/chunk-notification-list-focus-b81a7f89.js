System.register(["./chunk-frameworks.js"], function(d) {
    "use strict";
    var f, g;
    return {
        setters: [function(o) {
            f = o.x, g = o.f
        }],
        execute: function() {
            d({
                g: l,
                r: m
            });
            var o = Object.defineProperty,
                s = (t, n) => o(t, "name", {
                    value: n,
                    configurable: !0
                });

            function l(t, n) {
                const i = t || c();
                if (!i) return {};
                const e = i.querySelector(n || ".js-notifications-list-item.navigation-focus");
                return e instanceof HTMLElement ? {
                    id: e.getAttribute("data-notification-id"),
                    position: u(i).indexOf(e)
                } : {}
            }
            s(l, "getCurrentFocus");

            function m({
                id: t,
                position: n
            }, i) {
                const e = i || c();
                if (!(e instanceof HTMLElement)) return;
                const a = u(e);
                let r;
                t && (r = a.find(v => v.getAttribute("data-notification-id") === t)), !r && n != null && (r = a[Math.min(n, a.length - 1)]), r instanceof HTMLElement && g(e, r)
            }
            s(m, "restoreFocus");

            function c() {
                return document.querySelector(".js-notifications-list .js-navigation-container")
            }
            s(c, "getNotificationsList");

            function u(t) {
                return Array.from(t.querySelectorAll(".js-navigation-item")).filter(f)
            }
            s(u, "getItems")
        }
    }
});
//# sourceMappingURL=chunk-notification-list-focus-e6eb60ab.js.map