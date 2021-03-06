System.register([], function(v) {
    "use strict";
    return {
        execute: function() {
            const d = new WeakMap;
            class b extends HTMLElement {
                constructor() {
                    super();
                    const t = g.bind(null, this, !0),
                        n = {
                            currentQuery: null,
                            oninput: y(t),
                            fetch: t,
                            controller: null
                        };
                    d.set(this, n)
                }
                static get observedAttributes() {
                    return ["src"]
                }
                attributeChangedCallback(t, n) {
                    n && t === "src" && g(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
                    const n = d.get(this);
                    !n || (t.addEventListener("focus", n.fetch), t.addEventListener("change", n.fetch), t.addEventListener("input", n.oninput))
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const n = d.get(this);
                    !n || (t.removeEventListener("focus", n.fetch), t.removeEventListener("change", n.fetch), t.removeEventListener("input", n.oninput))
                }
                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
            }
            v("R", b);

            function C() {
                return "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                }
            }
            async function g(e, t) {
                const n = e.input;
                if (!n) return;
                const r = d.get(e);
                if (!r) return;
                const o = n.value;
                if (t && r.currentQuery === o) return;
                r.currentQuery = o;
                const i = e.src;
                if (!i) return;
                const u = document.getElementById(e.getAttribute("aria-owns") || "");
                if (!u) return;
                const a = new URL(i, window.location.href),
                    f = new URLSearchParams(a.search);
                f.append(e.getAttribute("param") || "q", o), a.search = f.toString(), r.controller ? r.controller.abort() : (e.dispatchEvent(new CustomEvent("loadstart")), e.setAttribute("loading", "")), r.controller = C();
                let s, l = "";
                try {
                    s = await L(e, a.toString(), {
                        signal: r.controller.signal,
                        credentials: "same-origin",
                        headers: {
                            accept: "text/fragment+html"
                        }
                    }), l = await s.text(), e.removeAttribute("loading"), r.controller = null
                } catch (c) {
                    c.name !== "AbortError" && (e.removeAttribute("loading"), r.controller = null);
                    return
                }
                s && s.ok ? (u.innerHTML = l, e.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                }))) : e.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                }))
            }
            async function L(e, t, n) {
                try {
                    const r = await fetch(t, n);
                    return e.dispatchEvent(new CustomEvent("load")), e.dispatchEvent(new CustomEvent("loadend")), r
                } catch (r) {
                    throw r.name !== "AbortError" && (e.dispatchEvent(new CustomEvent("error")), e.dispatchEvent(new CustomEvent("loadend"))), r
                }
            }

            function y(e) {
                let t;
                return function() {
                    clearTimeout(t), t = setTimeout(() => {
                        clearTimeout(t), e()
                    }, 300)
                }
            }
            window.customElements.get("remote-input") || (window.RemoteInputElement = b, window.customElements.define("remote-input", b));
            class p extends HTMLElement {
                constructor() {
                    super();
                    this.currentQuery = null, this.filter = null, this.debounceInputChange = x(() => E(this, !0)), this.boundFilterResults = () => {
                        E(this, !1)
                    }
                }
                static get observedAttributes() {
                    return ["aria-owns"]
                }
                attributeChangedCallback(t, n) {
                    n && t === "aria-owns" && E(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    !t || (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const t = this.input;
                    !t || (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }
                reset() {
                    const t = this.input;
                    t && (t.value = "", t.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })))
                }
            }
            v("F", p);
            async function E(e, t = !1) {
                const n = e.input;
                if (!n) return;
                const r = n.value.trim(),
                    o = e.getAttribute("aria-owns");
                if (!o) return;
                const i = document.getElementById(o);
                if (!i) return;
                const u = i.hasAttribute("data-filter-list") ? i : i.querySelector("[data-filter-list]");
                if (!u || (e.dispatchEvent(new CustomEvent("filter-input-start", {
                        bubbles: !0
                    })), t && e.currentQuery === r)) return;
                e.currentQuery = r;
                const a = e.filter || A,
                    f = u.childElementCount;
                let s = 0,
                    l = !1;
                for (const h of Array.from(u.children)) {
                    if (!(h instanceof HTMLElement)) continue;
                    const M = T(h),
                        m = a(h, M, r);
                    m.hideNew === !0 && (l = m.hideNew), h.hidden = !m.match, m.match && s++
                }
                const c = i.querySelector("[data-filter-new-item]"),
                    w = !!c && r.length > 0 && !l;
                c instanceof HTMLElement && (c.hidden = !w, w && S(c, r)), k(i, s > 0 || w), e.dispatchEvent(new CustomEvent("filter-input-updated", {
                    bubbles: !0,
                    detail: {
                        count: s,
                        total: f
                    }
                }))
            }

            function A(e, t, n) {
                return {
                    match: t.toLowerCase().indexOf(n.toLowerCase()) !== -1,
                    hideNew: t === n
                }
            }

            function T(e) {
                return ((e.querySelector("[data-filter-item-text]") || e).textContent || "").trim()
            }

            function S(e, t) {
                const n = e.querySelector("[data-filter-new-item-text]");
                n && (n.textContent = t);
                const r = e.querySelector("[data-filter-new-item-value]");
                (r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && (r.value = t)
            }

            function k(e, t) {
                const n = e.querySelector("[data-filter-empty-state]");
                n instanceof HTMLElement && (n.hidden = t)
            }

            function x(e) {
                let t;
                return function() {
                    clearTimeout(t), t = setTimeout(() => {
                        clearTimeout(t), e()
                    }, 300)
                }
            }
            window.customElements.get("filter-input") || (window.FilterInputElement = p, window.customElements.define("filter-input", p))
        }
    }
});
//# sourceMappingURL=chunk-index5-17cd51e5.js.map