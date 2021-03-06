System.register([], function(E) {
    "use strict";
    return {
        execute: function() {
            class s {
                constructor(t, n) {
                    this.file = t, this.directory = n, this.state = "pending", this.id = null, this.href = null, this.name = null, this.percent = 0
                }
                static traverse(t, n) {
                    return y(t, n)
                }
                static from(t) {
                    const n = [];
                    for (const r of t)
                        if (r instanceof File) n.push(new s(r));
                        else if (r instanceof s) n.push(r);
                    else throw new Error("Unexpected type");
                    return n
                }
                get fullPath() {
                    return this.directory ? `${this.directory}/${this.file.name}` : this.file.name
                }
                isImage() {
                    return ["image/gif", "image/png", "image/jpg", "image/jpeg", "image/svg+xml"].indexOf(this.file.type) > -1
                }
                isVideo() {
                    return ["video/mp4", "video/quicktime"].indexOf(this.file.type) > -1
                }
                saving(t) {
                    if (this.state !== "pending" && this.state !== "saving") throw new Error(`Unexpected transition from ${this.state} to saving`);
                    this.state = "saving", this.percent = t
                }
                saved(t) {
                    var n, r, i;
                    if (this.state !== "pending" && this.state !== "saving") throw new Error(`Unexpected transition from ${this.state} to saved`);
                    this.state = "saved", this.id = (n = t == null ? void 0 : t.id) !== null && n !== void 0 ? n : null, this.href = (r = t == null ? void 0 : t.href) !== null && r !== void 0 ? r : null, this.name = (i = t == null ? void 0 : t.name) !== null && i !== void 0 ? i : null
                }
                isPending() {
                    return this.state === "pending"
                }
                isSaving() {
                    return this.state === "saving"
                }
                isSaved() {
                    return this.state === "saved"
                }
            }
            E("A", s);

            function y(e, t) {
                return t && D(e) ? f("", L(e)) : Promise.resolve(l(Array.from(e.files || [])).map(n => new s(n)))
            }

            function w(e) {
                return e.name.startsWith(".")
            }

            function l(e) {
                return Array.from(e).filter(t => !w(t))
            }

            function A(e) {
                return new Promise(function(t, n) {
                    e.file(t, n)
                })
            }

            function b(e) {
                return new Promise(function(t, n) {
                    const r = [],
                        i = e.createReader(),
                        p = () => {
                            i.readEntries(v => {
                                v.length > 0 ? (r.push(...v), p()) : t(r)
                            }, n)
                        };
                    p()
                })
            }
            async function f(e, t) {
                const n = [];
                for (const r of l(t))
                    if (r.isDirectory) n.push(...await f(r.fullPath, await b(r)));
                    else {
                        const i = await A(r);
                        n.push(new s(i, e))
                    }
                return n
            }

            function D(e) {
                return e.items && Array.from(e.items).some(t => {
                    const n = t.webkitGetAsEntry && t.webkitGetAsEntry();
                    return n && n.isDirectory
                })
            }

            function L(e) {
                return Array.from(e.items).map(t => t.webkitGetAsEntry()).filter(t => t != null)
            }
            class a extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("dragenter", o), this.addEventListener("dragover", o), this.addEventListener("dragleave", d), this.addEventListener("drop", h), this.addEventListener("paste", m), this.addEventListener("change", g)
                }
                disconnectedCallback() {
                    this.removeEventListener("dragenter", o), this.removeEventListener("dragover", o), this.removeEventListener("dragleave", d), this.removeEventListener("drop", h), this.removeEventListener("paste", m), this.removeEventListener("change", g)
                }
                get directory() {
                    return this.hasAttribute("directory")
                }
                set directory(t) {
                    t ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }
                async attach(t) {
                    const n = t instanceof DataTransfer ? await s.traverse(t, this.directory) : s.from(t);
                    this.dispatchEvent(new CustomEvent("file-attachment-accept", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            attachments: n
                        }
                    })) && n.length && this.dispatchEvent(new CustomEvent("file-attachment-accepted", {
                        bubbles: !0,
                        detail: {
                            attachments: n
                        }
                    }))
                }
            }

            function u(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            let c = null;

            function o(e) {
                const t = e.currentTarget;
                c && clearTimeout(c), c = window.setTimeout(() => t.removeAttribute("hover"), 200);
                const n = e.dataTransfer;
                !n || !u(n) || (n.dropEffect = "copy", t.setAttribute("hover", ""), e.preventDefault())
            }

            function d(e) {
                e.dataTransfer && (e.dataTransfer.dropEffect = "none"), e.currentTarget.removeAttribute("hover"), e.stopPropagation(), e.preventDefault()
            }

            function h(e) {
                const t = e.currentTarget;
                if (!(t instanceof a)) return;
                t.removeAttribute("hover");
                const n = e.dataTransfer;
                !n || !u(n) || (t.attach(n), e.stopPropagation(), e.preventDefault())
            }
            const T = /^image\/(gif|png|jpeg)$/;

            function x(e) {
                for (const t of e)
                    if (t.kind === "file" && T.test(t.type)) return t.getAsFile();
                return null
            }

            function m(e) {
                if (!e.clipboardData || !e.clipboardData.items) return;
                const t = e.currentTarget;
                if (!(t instanceof a)) return;
                const n = x(e.clipboardData.items);
                if (!n) return;
                const r = [n];
                t.attach(r), e.preventDefault()
            }

            function g(e) {
                const t = e.currentTarget;
                if (!(t instanceof a)) return;
                const n = e.target;
                if (!(n instanceof HTMLInputElement)) return;
                const r = t.getAttribute("input");
                if (r && n.id !== r) return;
                const i = n.files;
                !i || i.length === 0 || (t.attach(i), n.value = "")
            }
            window.customElements.get("file-attachment") || (window.FileAttachmentElement = a, window.customElements.define("file-attachment", a))
        }
    }
});
//# sourceMappingURL=chunk-index6-8819e6f2.js.map