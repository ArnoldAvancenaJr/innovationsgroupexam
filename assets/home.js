System.register(["./chunk-vendor.js"], function() {
    "use strict";
    var n, o;
    return {
        setters: [function(r) {
            n = r.a, o = r.o
        }],
        execute: function() {
            n("click", ".js-toggler-target-off", e => {
                if (e.button !== 0) return;
                const t = e.currentTarget.closest(".js-toggler-container");
                t && t.classList.remove("on")
            });
            const r = new IntersectionObserver(e => {
                for (const t of e) t.isIntersecting ? t.target.removeAttribute("tabindex") : t.target.setAttribute("tabindex", "-1")
            }, {
                rootMargin: "0% 0% 0% 0%",
                threshold: 0
            });
            o(".js-home-repo-card", e => {
                r.observe(e)
            })
        }
    }
});
//# sourceMappingURL=home-d471fe87.js.map