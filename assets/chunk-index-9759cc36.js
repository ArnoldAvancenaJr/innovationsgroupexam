System.register(["./chunk-index2.js"], function(d) {
    "use strict";
    return {
        setters: [function() {}],
        execute: function() {
            window.IncludeFragmentElement.prototype.fetch = e => (e.headers.append("X-Requested-With", "XMLHttpRequest"), window.fetch(e));

            function l(e) {
                return Array.from(e.querySelectorAll('[role="tablist"] [role="tab"]')).filter(t => t instanceof HTMLElement && t.closest(e.tagName) === e)
            }
            class o extends HTMLElement {
                constructor() {
                    super();
                    this.addEventListener("keydown", t => {
                        const i = t.target;
                        if (!(i instanceof HTMLElement) || i.closest(this.tagName) !== this || i.getAttribute("role") !== "tab" && !i.closest('[role="tablist"]')) return;
                        const n = l(this),
                            a = n.indexOf(n.find(s => s.matches('[aria-selected="true"]')));
                        if (t.code === "ArrowRight") {
                            let s = a + 1;
                            s >= n.length && (s = 0), c(this, s)
                        } else if (t.code === "ArrowLeft") {
                            let s = a - 1;
                            s < 0 && (s = n.length - 1), c(this, s)
                        } else t.code === "Home" ? (c(this, 0), t.preventDefault()) : t.code === "End" && (c(this, n.length - 1), t.preventDefault())
                    }), this.addEventListener("click", t => {
                        const i = l(this);
                        if (!(t.target instanceof Element) || t.target.closest(this.tagName) !== this) return;
                        const n = t.target.closest('[role="tab"]');
                        if (!(n instanceof HTMLElement) || !n.closest('[role="tablist"]')) return;
                        const a = i.indexOf(n);
                        c(this, a)
                    })
                }
                connectedCallback() {
                    for (const t of l(this)) t.hasAttribute("aria-selected") || t.setAttribute("aria-selected", "false"), t.hasAttribute("tabindex") || (t.getAttribute("aria-selected") === "true" ? t.setAttribute("tabindex", "0") : t.setAttribute("tabindex", "-1"))
                }
            }
            d("T", o);

            function c(e, t) {
                const i = l(e),
                    n = Array.from(e.querySelectorAll('[role="tabpanel"]')).filter(r => r.closest(e.tagName) === e),
                    a = i[t],
                    s = n[t];
                if (!!e.dispatchEvent(new CustomEvent("tab-container-change", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            relatedTarget: s
                        }
                    }))) {
                    for (const r of i) r.setAttribute("aria-selected", "false"), r.setAttribute("tabindex", "-1");
                    for (const r of n) r.hidden = !0, !r.hasAttribute("tabindex") && !r.hasAttribute("data-tab-container-no-tabstop") && r.setAttribute("tabindex", "0");
                    a.setAttribute("aria-selected", "true"), a.setAttribute("tabindex", "0"), a.focus(), s.hidden = !1, e.dispatchEvent(new CustomEvent("tab-container-changed", {
                        bubbles: !0,
                        detail: {
                            relatedTarget: s
                        }
                    }))
                }
            }
            window.customElements.get("tab-container") || (window.TabContainerElement = o, window.customElements.define("tab-container", o))
        }
    }
});
//# sourceMappingURL=chunk-index-20eee1d2.js.map