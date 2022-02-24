System.register([], function(d) {
    "use strict";
    return {
        execute: function() {
            function f(e) {
                const t = document.createElement("pre");
                return t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t
            }

            function c(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e.textContent);
                const t = getSelection();
                if (t == null) return Promise.reject(new Error);
                t.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(e), t.addRange(n), document.execCommand("copy"), t.removeAllRanges(), Promise.resolve()
            }

            function o(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e);
                const t = document.body;
                if (!t) return Promise.reject(new Error);
                const n = f(e);
                return t.appendChild(n), c(n), t.removeChild(n), Promise.resolve()
            }

            function s(e) {
                const t = e.getAttribute("for"),
                    n = e.getAttribute("value");

                function a() {
                    e.dispatchEvent(new CustomEvent("clipboard-copy", {
                        bubbles: !0
                    }))
                }
                if (n) o(n).then(a);
                else if (t) {
                    const i = "getRootNode" in Element.prototype ? e.getRootNode() : e.ownerDocument;
                    if (!(i instanceof Document || "ShadowRoot" in window && i instanceof ShadowRoot)) return;
                    const l = i.getElementById(t);
                    l && m(l).then(a)
                }
            }

            function m(e) {
                return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? o(e.value) : e instanceof HTMLAnchorElement && e.hasAttribute("href") ? o(e.href) : c(e)
            }

            function p(e) {
                const t = e.currentTarget;
                t instanceof HTMLElement && s(t)
            }

            function u(e) {
                if (e.key === " " || e.key === "Enter") {
                    const t = e.currentTarget;
                    t instanceof HTMLElement && (e.preventDefault(), s(t))
                }
            }

            function b(e) {
                e.currentTarget.addEventListener("keydown", u)
            }

            function g(e) {
                e.currentTarget.removeEventListener("keydown", u)
            }
            class r extends HTMLElement {
                constructor() {
                    super();
                    this.addEventListener("click", p), this.addEventListener("focus", b), this.addEventListener("blur", g)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
            }
            d("C", r), window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = r, window.customElements.define("clipboard-copy", r))
        }
    }
});
//# sourceMappingURL=chunk-index.esm-b1f3f620.js.map