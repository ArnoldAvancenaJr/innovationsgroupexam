System.register([], function(u) {
    "use strict";
    return {
        execute: function() {
            const o = new WeakMap,
                i = new IntersectionObserver(e => {
                    for (const t of e)
                        if (t.isIntersecting) {
                            const {
                                target: n
                            } = t;
                            if (i.unobserve(n), !(n instanceof s)) return;
                            n.loading === "lazy" && r(n)
                        }
                }, {
                    rootMargin: "0px 0px 256px 0px",
                    threshold: .01
                });

            function c() {
                return new Promise(e => setTimeout(e, 0))
            }
            async function r(e) {
                return i.unobserve(e), a(e).then(function(t) {
                    const n = document.createElement("template");
                    n.innerHTML = t;
                    const d = document.importNode(n.content, !0);
                    !e.dispatchEvent(new CustomEvent("include-fragment-replace", {
                        cancelable: !0,
                        detail: {
                            fragment: d
                        }
                    })) || (e.replaceWith(d), e.dispatchEvent(new CustomEvent("include-fragment-replaced")))
                }, function() {
                    e.classList.add("is-error")
                })
            }

            function a(e) {
                const t = e.src;
                let n = o.get(e);
                return n && n.src === t ? n.data : (t ? n = h(e) : n = Promise.reject(new Error("missing src")), o.set(e, {
                    src: t,
                    data: n
                }), n)
            }

            function h(e) {
                return c().then(() => (e.dispatchEvent(new Event("loadstart")), e.fetch(e.request()))).then(t => {
                    if (t.status !== 200) throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);
                    const n = t.headers.get("Content-Type");
                    if (!l(e.accept) && (!n || !n.includes(e.accept ? e.accept : "text/html"))) throw new Error(`Failed to load resource: expected ${e.accept||"text/html"} but was ${n}`);
                    return t.text()
                }).then(t => (c().then(() => {
                    e.dispatchEvent(new Event("load")), e.dispatchEvent(new Event("loadend"))
                }), t), t => {
                    throw c().then(() => {
                        e.dispatchEvent(new Event("error")), e.dispatchEvent(new Event("loadend"))
                    }), t
                })
            }

            function l(e) {
                return e && !!e.split(",").find(t => t.match(/^\s*\*\/\*/))
            }
            class s extends HTMLElement {
                static get observedAttributes() {
                    return ["src", "loading"]
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const n = this.ownerDocument.createElement("a");
                        return n.href = t, n.href
                    } else return ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get loading() {
                    return this.getAttribute("loading") === "lazy" ? "lazy" : "eager"
                }
                set loading(t) {
                    this.setAttribute("loading", t)
                }
                get accept() {
                    return this.getAttribute("accept") || ""
                }
                set accept(t) {
                    this.setAttribute("accept", t)
                }
                get data() {
                    return a(this)
                }
                attributeChangedCallback(t, n) {
                    t === "src" ? this.isConnected && this.loading === "eager" && r(this) : t === "loading" && this.isConnected && n !== "eager" && this.loading === "eager" && r(this)
                }
                constructor() {
                    super();
                    this.attachShadow({
                        mode: "open"
                    }).innerHTML = `
      <style> 
        :host {
          display: block;
        }
      </style>
      <slot></slot>`
                }
                connectedCallback() {
                    this.src && this.loading === "eager" && r(this), this.loading === "lazy" && i.observe(this)
                }
                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "text/html"
                        }
                    })
                }
                load() {
                    return a(this)
                }
                fetch(t) {
                    return fetch(t)
                }
            }
            u("I", s), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = s, window.customElements.define("include-fragment", s))
        }
    }
});
//# sourceMappingURL=chunk-index2-ce72cb1b.js.map