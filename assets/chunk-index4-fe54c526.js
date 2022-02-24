System.register(["./chunk-vendor.js"], function(h) {
    "use strict";
    var a;
    return {
        setters: [function(r) {
            a = r.C
        }],
        execute: function() {
            class r extends CustomEvent {
                constructor(t, e) {
                    super(t, e);
                    this.relatedTarget = e.relatedTarget
                }
            }

            function l(s, t = 0) {
                let e;
                return function(...n) {
                    clearTimeout(e), e = window.setTimeout(() => {
                        clearTimeout(e), s(...n)
                    }, t)
                }
            }
            const u = new WeakMap;

            function p(s, t) {
                const e = new XMLHttpRequest;
                return e.open("GET", t, !0), e.setRequestHeader("Accept", "text/fragment+html"), d(s, e)
            }

            function d(s, t) {
                const e = u.get(s);
                e && e.abort(), u.set(s, t);
                const n = () => u.delete(s),
                    i = m(t);
                return i.then(n, n), i
            }

            function m(s) {
                return new Promise((t, e) => {
                    s.onload = function() {
                        s.status >= 200 && s.status < 300 ? t(s.responseText) : e(new Error(s.responseText))
                    }, s.onerror = e, s.send()
                })
            }
            class f {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.combobox = new a(e, n), this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = l(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }
                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }
                onKeydown(t) {
                    if (t.key === "Escape" && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && t.key === "ArrowUp" && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && t.key === "ArrowDown" && !this.container.open) {
                        if (!this.input.value.trim()) return;
                        this.container.open = !0, t.stopPropagation(), t.preventDefault()
                    }
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    if (this.interactingWithList) {
                        this.interactingWithList = !1;
                        return
                    }
                    this.container.open = !1
                }
                onCommit({
                    target: t
                }) {
                    const e = t;
                    if (!(e instanceof HTMLElement) || (this.container.open = !1, e instanceof HTMLAnchorElement)) return;
                    const n = e.getAttribute("data-autocomplete-value") || e.textContent;
                    this.container.value = n
                }
                onResultsMouseDown() {
                    this.interactingWithList = !0
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = `${this.results.id}-option-${t++}`
                }
                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) {
                        this.container.open = !1;
                        return
                    }
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href),
                        i = new URLSearchParams(n.search.slice(1));
                    i.append("q", t), n.search = i.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), p(this.input, n.toString()).then(b => {
                        this.results.innerHTML = b, this.identifyOptions();
                        const v = !!this.results.querySelector('[role="option"]');
                        this.container.open = v, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }).catch(() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })
                }
                open() {
                    !this.results.hidden || (this.combobox.start(), this.results.hidden = !1)
                }
                close() {
                    this.results.hidden || (this.combobox.stop(), this.results.hidden = !0)
                }
            }
            const o = new WeakMap;
            class c extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const t = this.getAttribute("for");
                    if (!t) return;
                    const e = this.querySelector("input"),
                        n = document.getElementById(t);
                    !(e instanceof HTMLInputElement) || !n || (o.set(this, new f(this, e, n)), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const t = o.get(this);
                    t && (t.destroy(), o.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const i = o.get(this);
                    if (!!i) switch (t) {
                        case "open":
                            n === null ? i.close() : i.open();
                            break;
                        case "value":
                            n !== null && (i.input.value = n), this.dispatchEvent(new r("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: i.input
                            }));
                            break
                    }
                }
            }
            h("A", c), window.customElements.get("auto-complete") || (window.AutocompleteElement = c, window.customElements.define("auto-complete", c))
        }
    }
});
//# sourceMappingURL=chunk-index4-31422ddc.js.map