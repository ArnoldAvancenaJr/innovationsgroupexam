System.register(["./chunk-index4.js", "./chunk-index.esm.js", "./chunk-index.js", "./chunk-index3.js", "./chunk-frameworks.js", "./chunk-index6.js", "./chunk-index5.js", "./chunk-index2.js", "./chunk-vendor.js"], function() {
    "use strict";
    var U;
    return {
        setters: [function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function() {}, function(_) {
            U = _.C
        }],
        execute: function() {
            function z(t) {
                t.style.display = "inline-block"
            }

            function K(t) {
                t.style.display = "none"
            }

            function $t(t) {
                const [e, n] = t.querySelectorAll(".octicon");
                !e || !n || (z(e), K(n))
            }

            function Yt(t) {
                const [e, n] = t.querySelectorAll(".octicon");
                !e || !n || (K(e), z(n))
            }
            const O = new WeakMap;
            document.addEventListener("clipboard-copy", function({
                target: t
            }) {
                if (!(t instanceof HTMLElement) || !t.hasAttribute("data-view-component")) return;
                const e = O.get(t);
                e ? (clearTimeout(e), O.delete(t)) : Yt(t), O.set(t, setTimeout(() => {
                    $t(t), O.delete(t)
                }, 2e3))
            });
            const M = new WeakMap,
                S = new WeakMap,
                x = new WeakMap;

            function I(t) {
                const e = t.currentTarget;
                if (!(e instanceof T)) return;
                const {
                    box: n,
                    image: o
                } = x.get(e) || {};
                if (!n || !o) return;
                let i = 0,
                    s = 0;
                if (t instanceof KeyboardEvent) t.key === "ArrowUp" ? s = -1 : t.key === "ArrowDown" ? s = 1 : t.key === "ArrowLeft" ? i = -1 : t.key === "ArrowRight" && (i = 1);
                else if (S.has(e) && t instanceof MouseEvent) {
                    const r = S.get(e);
                    i = t.pageX - r.dragStartX, s = t.pageY - r.dragStartY
                } else if (S.has(e) && t instanceof TouchEvent) {
                    const {
                        pageX: r,
                        pageY: c
                    } = t.changedTouches[0], {
                        dragStartX: l,
                        dragStartY: u
                    } = S.get(e);
                    i = r - l, s = c - u
                }
                if (i !== 0 || s !== 0) {
                    const r = Math.min(Math.max(0, n.offsetLeft + i), o.width - n.offsetWidth),
                        c = Math.min(Math.max(0, n.offsetTop + s), o.height - n.offsetHeight);
                    n.style.left = `${r}px`, n.style.top = `${c}px`, Z(e, {
                        x: r,
                        y: c,
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    })
                }
                if (t instanceof MouseEvent) S.set(e, {
                    dragStartX: t.pageX,
                    dragStartY: t.pageY
                });
                else if (t instanceof TouchEvent) {
                    const {
                        pageX: r,
                        pageY: c
                    } = t.changedTouches[0];
                    S.set(e, {
                        dragStartX: r,
                        dragStartY: c
                    })
                }
            }

            function A(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                const n = F(e);
                if (!(n instanceof T)) return;
                const {
                    box: o
                } = x.get(n) || {};
                if (!o) return;
                const i = n.getBoundingClientRect();
                let s, r, c;
                if (t instanceof KeyboardEvent) {
                    if (t.key === "Escape") return Q(n);
                    if (t.key === "-" && (c = -10), t.key === "=" && (c = 10), !c) return;
                    s = o.offsetWidth + c, r = o.offsetHeight + c, M.set(n, {
                        startX: o.offsetLeft,
                        startY: o.offsetTop
                    })
                } else if (t instanceof MouseEvent) {
                    const l = M.get(n);
                    if (!l) return;
                    s = t.pageX - l.startX - i.left - window.pageXOffset, r = t.pageY - l.startY - i.top - window.pageYOffset
                } else if (t instanceof TouchEvent) {
                    const l = M.get(n);
                    if (!l) return;
                    s = t.changedTouches[0].pageX - l.startX - i.left - window.pageXOffset, r = t.changedTouches[0].pageY - l.startY - i.top - window.pageYOffset
                }
                s && r && J(n, s, r, !(t instanceof KeyboardEvent))
            }

            function F(t) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e.host : t
            }

            function G(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLElement)) return;
                const n = F(e);
                if (!(n instanceof T)) return;
                const {
                    box: o
                } = x.get(n) || {};
                if (!o) return;
                const i = t.target;
                if (i instanceof HTMLElement)
                    if (i.hasAttribute("data-direction")) {
                        const s = i.getAttribute("data-direction") || "";
                        n.addEventListener("mousemove", A), n.addEventListener("touchmove", A, {
                            passive: !0
                        }), ["nw", "se"].indexOf(s) >= 0 && n.classList.add("nwse"), ["ne", "sw"].indexOf(s) >= 0 && n.classList.add("nesw"), M.set(n, {
                            startX: o.offsetLeft + (["se", "ne"].indexOf(s) >= 0 ? 0 : o.offsetWidth),
                            startY: o.offsetTop + (["se", "sw"].indexOf(s) >= 0 ? 0 : o.offsetHeight)
                        }), A(t)
                    } else n.addEventListener("mousemove", I), n.addEventListener("touchmove", I, {
                        passive: !0
                    })
            }

            function J(t, e, n, o = !0) {
                let i = Math.max(Math.abs(e), Math.abs(n), 10);
                const s = M.get(t);
                if (!s) return;
                const {
                    box: r,
                    image: c
                } = x.get(t) || {};
                if (!r || !c) return;
                i = Math.min(i, n > 0 ? c.height - s.startY : s.startY, e > 0 ? c.width - s.startX : s.startX);
                const l = o ? Math.round(Math.max(0, e > 0 ? s.startX : s.startX - i)) : r.offsetLeft,
                    u = o ? Math.round(Math.max(0, n > 0 ? s.startY : s.startY - i)) : r.offsetTop;
                r.style.left = `${l}px`, r.style.top = `${u}px`, r.style.width = `${i}px`, r.style.height = `${i}px`, Z(t, {
                    x: l,
                    y: u,
                    width: i,
                    height: i
                })
            }

            function Q(t) {
                const {
                    image: e
                } = x.get(t) || {};
                if (!e) return;
                const n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);
                M.set(t, {
                    startX: (e.clientWidth - n) / 2,
                    startY: (e.clientHeight - n) / 2
                }), J(t, n, n)
            }

            function j(t) {
                const e = t.currentTarget;
                e instanceof T && (S.delete(e), e.classList.remove("nwse", "nesw"), e.removeEventListener("mousemove", A), e.removeEventListener("mousemove", I), e.removeEventListener("touchmove", A), e.removeEventListener("touchmove", I))
            }

            function Z(t, e) {
                const {
                    image: n
                } = x.get(t) || {};
                if (!n) return;
                const o = n.naturalWidth / n.width;
                for (const i in e) {
                    const s = Math.round(e[i] * o);
                    e[i] = s;
                    const r = t.querySelector(`[data-image-crop-input='${i}']`);
                    r instanceof HTMLInputElement && (r.value = s.toString())
                }
                t.dispatchEvent(new CustomEvent("image-crop-change", {
                    bubbles: !0,
                    detail: e
                }))
            }
            class T extends HTMLElement {
                connectedCallback() {
                    if (x.has(this)) return;
                    const e = this.attachShadow({
                        mode: "open"
                    });
                    e.innerHTML = `
<style>
  :host { touch-action: none; display: block; }
  :host(.nesw) { cursor: nesw-resize; }
  :host(.nwse) { cursor: nwse-resize; }
  :host(.nesw) .crop-box, :host(.nwse) .crop-box { cursor: inherit; }
  :host([loaded]) .crop-image { display: block; }
  :host([loaded]) ::slotted([data-loading-slot]), .crop-image { display: none; }

  .crop-wrapper {
    position: relative;
    font-size: 0;
  }
  .crop-container {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
  }

  :host([rounded]) .crop-box {
    border-radius: 50%;
    box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);
  }
  .crop-box {
    position: absolute;
    border: 1px dashed #fff;
    box-sizing: border-box;
    cursor: move;
  }

  :host([rounded]) .crop-outline {
    outline: none;
  }
  .crop-outline {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    outline: 4000px solid rgba(0, 0, 0, .3);
  }

  .handle { position: absolute; }
  :host([rounded]) .handle::before { border-radius: 50%; }
  .handle:before {
    position: absolute;
    display: block;
    padding: 4px;
    transform: translate(-50%, -50%);
    content: ' ';
    background: #fff;
    border: 1px solid #767676;
  }
  .ne { top: 0; right: 0; cursor: nesw-resize; }
  .nw { top: 0; left: 0; cursor: nwse-resize; }
  .se { bottom: 0; right: 0; cursor: nwse-resize; }
  .sw { bottom: 0; left: 0; cursor: nesw-resize; }
</style>
<slot></slot>
<div class="crop-wrapper">
  <img width="100%" class="crop-image" alt="">
  <div class="crop-container">
    <div data-crop-box class="crop-box">
      <div class="crop-outline"></div>
      <div data-direction="nw" class="handle nw"></div>
      <div data-direction="ne" class="handle ne"></div>
      <div data-direction="sw" class="handle sw"></div>
      <div data-direction="se" class="handle se"></div>
    </div>
  </div>
</div>
`;
                    const n = e.querySelector("[data-crop-box]");
                    if (!(n instanceof HTMLElement)) return;
                    const o = e.querySelector("img");
                    o instanceof HTMLImageElement && (x.set(this, {
                        box: n,
                        image: o
                    }), o.addEventListener("load", () => {
                        this.loaded = !0, Q(this)
                    }), this.addEventListener("mouseleave", j), this.addEventListener("touchend", j), this.addEventListener("mouseup", j), n.addEventListener("mousedown", G), n.addEventListener("touchstart", G, {
                        passive: !0
                    }), this.addEventListener("keydown", I), this.addEventListener("keydown", A), this.src && (o.src = this.src))
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(e) {
                    e ? this.setAttribute("src", e) : this.removeAttribute("src")
                }
                get loaded() {
                    return this.hasAttribute("loaded")
                }
                set loaded(e) {
                    e ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }
                attributeChangedCallback(e, n, o) {
                    const {
                        image: i
                    } = x.get(this) || {};
                    e === "src" && (this.loaded = !1, i && (i.src = o))
                }
            }
            window.customElements.get("image-crop") || (window.ImageCropElement = T, window.customElements.define("image-crop", T));
            class tt extends HTMLElement {
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(e) {
                    e ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "menu");
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.setAttribute("aria-haspopup", "menu"), n.hasAttribute("role") || n.setAttribute("role", "button"));
                    const o = [E(e, "compositionstart", i => lt(this, i)), E(e, "compositionend", i => lt(this, i)), E(e, "click", i => it(e, i)), E(e, "change", i => it(e, i)), E(e, "keydown", i => Kt(e, this, i)), E(e, "toggle", () => et(e, this), {
                        once: !0
                    }), E(e, "toggle", () => Ut(e)), this.preload ? E(e, "mouseover", () => et(e, this), {
                        once: !0
                    }) : Xt, ...Vt(e)];
                    C.set(this, {
                        subscriptions: o,
                        loaded: !1,
                        isComposing: !1
                    })
                }
                disconnectedCallback() {
                    const e = C.get(this);
                    if (!!e) {
                        C.delete(this);
                        for (const n of e.subscriptions) n.unsubscribe()
                    }
                }
            }
            const C = new WeakMap,
                Xt = {
                    unsubscribe() {}
                };

            function E(t, e, n, o = !1) {
                return t.addEventListener(e, n, o), {
                    unsubscribe: () => {
                        t.removeEventListener(e, n, o)
                    }
                }
            }

            function et(t, e) {
                const n = e.getAttribute("src");
                if (!n) return;
                const o = C.get(e);
                if (!o || o.loaded) return;
                o.loaded = !0;
                const i = e.querySelector("include-fragment");
                i && !i.hasAttribute("src") && (i.addEventListener("loadend", () => nt(t)), i.setAttribute("src", n))
            }

            function Vt(t) {
                let e = !1;
                const n = () => e = !0,
                    o = () => e = !1,
                    i = () => {
                        !t.hasAttribute("open") || nt(t) || e || _t(t)
                    };
                return [E(t, "mousedown", n), E(t, "keydown", o), E(t, "toggle", i)]
            }

            function Ut(t) {
                if (!!t.hasAttribute("open"))
                    for (const e of document.querySelectorAll("details[open] > details-menu")) {
                        const n = e.closest("details");
                        n && n !== t && !n.contains(t) && n.removeAttribute("open")
                    }
            }

            function nt(t) {
                if (!t.hasAttribute("open")) return !1;
                const e = t.querySelector("details-menu [autofocus]");
                return e ? (e.focus(), !0) : !1
            }

            function _t(t) {
                const e = document.activeElement;
                if (e && rt(e) && t.contains(e)) return;
                const n = B(t, !0);
                n && n.focus()
            }

            function B(t, e) {
                const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    o = document.activeElement,
                    i = o instanceof HTMLElement ? n.indexOf(o) : -1,
                    s = e ? n[i + 1] : n[i - 1],
                    r = e ? n[0] : n[n.length - 1];
                return s || r
            }
            const ot = navigator.userAgent.match(/Macintosh/);

            function it(t, e) {
                const n = e.target;
                if (n instanceof Element && n.closest("details") === t) {
                    if (e.type === "click") {
                        const o = n.closest('[role="menuitem"], [role="menuitemradio"]');
                        if (!o) return;
                        const i = o.querySelector("input");
                        if (o.tagName === "LABEL" && n === i) return;
                        o.tagName === "LABEL" && i && !i.checked || st(o, t)
                    } else if (e.type === "change") {
                        const o = n.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                        o && st(o, t)
                    }
                }
            }

            function zt(t, e) {
                for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                    const o = n.querySelector('input[type="radio"], input[type="checkbox"]');
                    let i = (n === t).toString();
                    o instanceof HTMLInputElement && (i = o.indeterminate ? "mixed" : o.checked.toString()), n.setAttribute("aria-checked", i)
                }
            }

            function st(t, e) {
                if (t.hasAttribute("disabled") || t.getAttribute("aria-disabled") === "true") return;
                const n = t.closest("details-menu");
                !n || !n.dispatchEvent(new CustomEvent("details-menu-select", {
                    cancelable: !0,
                    detail: {
                        relatedTarget: t
                    }
                })) || (Ft(t, e), zt(t, e), t.getAttribute("role") !== "menuitemcheckbox" && ct(e), n.dispatchEvent(new CustomEvent("details-menu-selected", {
                    detail: {
                        relatedTarget: t
                    }
                })))
            }

            function Kt(t, e, n) {
                if (!(n instanceof KeyboardEvent) || t.querySelector("details[open]")) return;
                const o = C.get(e);
                if (!o || o.isComposing) return;
                const i = n.target instanceof Element && n.target.tagName === "SUMMARY";
                switch (n.key) {
                    case "Escape":
                        t.hasAttribute("open") && (ct(t), n.preventDefault(), n.stopPropagation());
                        break;
                    case "ArrowDown":
                        {
                            i && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const s = B(t, !0);s && s.focus(),
                            n.preventDefault()
                        }
                        break;
                    case "ArrowUp":
                        {
                            i && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const s = B(t, !1);s && s.focus(),
                            n.preventDefault()
                        }
                        break;
                    case "n":
                        if (ot && n.ctrlKey) {
                            const s = B(t, !0);
                            s && s.focus(), n.preventDefault()
                        }
                        break;
                    case "p":
                        if (ot && n.ctrlKey) {
                            const s = B(t, !1);
                            s && s.focus(), n.preventDefault()
                        }
                        break;
                    case " ":
                    case "Enter":
                        {
                            const s = document.activeElement;s instanceof HTMLElement && rt(s) && s.closest("details") === t && (n.preventDefault(), n.stopPropagation(), s.click())
                        }
                        break
                }
            }

            function rt(t) {
                const e = t.getAttribute("role");
                return e === "menuitem" || e === "menuitemcheckbox" || e === "menuitemradio"
            }

            function ct(t) {
                if (!t.hasAttribute("open")) return;
                t.removeAttribute("open");
                const n = t.querySelector("summary");
                n && n.focus()
            }

            function Ft(t, e) {
                const n = e.querySelector("[data-menu-button]");
                if (!n) return;
                const o = Gt(t);
                if (o) n.textContent = o;
                else {
                    const i = Jt(t);
                    i && (n.innerHTML = i)
                }
            }

            function Gt(t) {
                if (!t) return null;
                const e = t.hasAttribute("data-menu-button-text") ? t : t.querySelector("[data-menu-button-text]");
                return e ? e.getAttribute("data-menu-button-text") || e.textContent : null
            }

            function Jt(t) {
                if (!t) return null;
                const e = t.hasAttribute("data-menu-button-contents") ? t : t.querySelector("[data-menu-button-contents]");
                return e ? e.innerHTML : null
            }

            function lt(t, e) {
                const n = C.get(t);
                !n || (n.isComposing = e.type === "compositionstart")
            }
            window.customElements.get("details-menu") || (window.DetailsMenuElement = tt, window.customElements.define("details-menu", tt));

            function Qt(t, e = 0, {
                start: n = !0,
                middle: o = !0,
                once: i = !1
            } = {}) {
                var s = 0,
                    r, c = !1,
                    l = function u(...a) {
                        if (!c) {
                            var b = Date.now() - s;
                            s = Date.now(), n ? (n = !1, t(...a), i && u.cancel()) : (o && b < e || !o) && (clearTimeout(r), r = setTimeout(function() {
                                s = Date.now(), t(...a), i && u.cancel()
                            }, o ? e - b : e))
                        }
                    };
                return l.cancel = function() {
                    clearTimeout(r), c = !0
                }, l
            }

            function Zt(t, e = 0, {
                start: n = !1,
                middle: o = !1,
                once: i = !1
            } = {}) {
                return Qt(t, e, {
                    start: n,
                    middle: o,
                    once: i
                })
            }
            const W = new WeakMap;
            class $ extends HTMLElement {
                connectedCallback() {
                    const e = this.input;
                    if (!e) return;
                    const n = Zt(ne.bind(null, this), 300),
                        o = {
                            check: n,
                            controller: null
                        };
                    W.set(this, o), e.addEventListener("input", ut), e.addEventListener("input", n), e.autocomplete = "off", e.spellcheck = !1
                }
                disconnectedCallback() {
                    const e = this.input;
                    if (!e) return;
                    const n = W.get(this);
                    !n || (W.delete(this), e.removeEventListener("input", ut), e.removeEventListener("input", n.check), e.setCustomValidity(""))
                }
                attributeChangedCallback(e) {
                    if (e === "required") {
                        const n = this.input;
                        if (!n) return;
                        n.required = this.required
                    }
                }
                static get observedAttributes() {
                    return ["required"]
                }
                get input() {
                    return this.querySelector("input")
                }
                get src() {
                    const e = this.getAttribute("src");
                    if (!e) return "";
                    const n = this.ownerDocument.createElement("a");
                    return n.href = e, n.href
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get csrf() {
                    const e = this.querySelector("[data-csrf]");
                    return this.getAttribute("csrf") || e instanceof HTMLInputElement && e.value || ""
                }
                set csrf(e) {
                    this.setAttribute("csrf", e)
                }
                get required() {
                    return this.hasAttribute("required")
                }
                set required(e) {
                    e ? this.setAttribute("required", "") : this.removeAttribute("required")
                }
            }

            function ut(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLInputElement)) return;
                const n = e.closest("auto-check");
                if (!(n instanceof $)) return;
                const o = n.src,
                    i = n.csrf,
                    s = W.get(n);
                if (!o || !i || !s) return;
                let r = "Verifying\u2026";
                const c = l => r = l;
                e.dispatchEvent(new CustomEvent("auto-check-start", {
                    bubbles: !0,
                    detail: {
                        setValidity: c
                    }
                })), n.required && e.setCustomValidity(r)
            }

            function te() {
                return "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                }
            }
            async function ee(t, e, n) {
                try {
                    const o = await fetch(e, n);
                    return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), o
                } catch (o) {
                    throw o.name !== "AbortError" && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), o
                }
            }
            async function ne(t) {
                const e = t.input;
                if (!e) return;
                const n = t.src,
                    o = t.csrf,
                    i = W.get(t);
                if (!n || !o || !i) {
                    t.required && e.setCustomValidity("");
                    return
                }
                if (!e.value.trim()) {
                    t.required && e.setCustomValidity("");
                    return
                }
                const s = new FormData;
                s.append("authenticity_token", o), s.append("value", e.value), e.dispatchEvent(new CustomEvent("auto-check-send", {
                    bubbles: !0,
                    detail: {
                        body: s
                    }
                })), i.controller ? i.controller.abort() : t.dispatchEvent(new CustomEvent("loadstart")), i.controller = te();
                try {
                    const r = await ee(t, n, {
                        credentials: "same-origin",
                        signal: i.controller.signal,
                        method: "POST",
                        body: s
                    });
                    r.ok ? oe(r, e, t.required) : ie(r, e, t.required), i.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    }))
                } catch (r) {
                    r.name !== "AbortError" && (i.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    })))
                }
            }

            function oe(t, e, n) {
                n && e.setCustomValidity(""), e.dispatchEvent(new CustomEvent("auto-check-success", {
                    bubbles: !0,
                    detail: {
                        response: t.clone()
                    }
                }))
            }

            function ie(t, e, n) {
                let o = "Validation failed";
                const i = s => o = s;
                e.dispatchEvent(new CustomEvent("auto-check-error", {
                    bubbles: !0,
                    detail: {
                        response: t.clone(),
                        setValidity: i
                    }
                })), n && e.setCustomValidity(o)
            }
            window.customElements.get("auto-check") || (window.AutoCheckElement = $, window.customElements.define("auto-check", $));

            function se() {
                const t = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                    e = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                    n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                    o = /\bFreeBSD\b/.test(navigator.userAgent),
                    i = /\bLinux\b/.test(navigator.userAgent) && !/\bAndroid\b/.test(navigator.userAgent);
                return !(t || e || n || i || o)
            }
            const re = new Set(["\u{1F44B}", "\u{1F91A}", "\u{1F590}\uFE0F", "\u270B", "\u{1F596}", "\u{1F44C}", "\u{1F90F}", "\u270C\uFE0F", "\u{1F91E}", "\u{1F91F}", "\u{1F918}", "\u{1F919}", "\u{1F448}", "\u{1F449}", "\u{1F446}", "\u{1F595}", "\u{1F447}", "\u261D\uFE0F", "\u{1F44D}", "\u{1F44E}", "\u270A", "\u{1F44A}", "\u{1F91B}", "\u{1F91C}", "\u{1F44F}", "\u{1F64C}", "\u{1F450}", "\u{1F932}", "\u{1F64F}", "\u270D\uFE0F", "\u{1F485}", "\u{1F933}", "\u{1F4AA}", "\u{1F9B5}", "\u{1F9B6}", "\u{1F442}", "\u{1F9BB}", "\u{1F443}", "\u{1F476}", "\u{1F9D2}", "\u{1F466}", "\u{1F467}", "\u{1F9D1}", "\u{1F471}", "\u{1F468}", "\u{1F9D4}", "\u{1F471}\u200D\u2642\uFE0F", "\u{1F468}\u200D\u{1F9B0}", "\u{1F468}\u200D\u{1F9B1}", "\u{1F468}\u200D\u{1F9B3}", "\u{1F468}\u200D\u{1F9B2}", "\u{1F469}", "\u{1F471}\u200D\u2640\uFE0F", "\u{1F469}\u200D\u{1F9B0}", "\u{1F469}\u200D\u{1F9B1}", "\u{1F469}\u200D\u{1F9B3}", "\u{1F469}\u200D\u{1F9B2}", "\u{1F9D3}", "\u{1F474}", "\u{1F475}", "\u{1F64D}", "\u{1F64D}\u200D\u2642\uFE0F", "\u{1F64D}\u200D\u2640\uFE0F", "\u{1F64E}", "\u{1F64E}\u200D\u2642\uFE0F", "\u{1F64E}\u200D\u2640\uFE0F", "\u{1F645}", "\u{1F645}\u200D\u2642\uFE0F", "\u{1F645}\u200D\u2640\uFE0F", "\u{1F646}", "\u{1F646}\u200D\u2642\uFE0F", "\u{1F646}\u200D\u2640\uFE0F", "\u{1F481}", "\u{1F481}\u200D\u2642\uFE0F", "\u{1F481}\u200D\u2640\uFE0F", "\u{1F64B}", "\u{1F64B}\u200D\u2642\uFE0F", "\u{1F64B}\u200D\u2640\uFE0F", "\u{1F9CF}", "\u{1F9CF}\u200D\u2642\uFE0F", "\u{1F9CF}\u200D\u2640\uFE0F", "\u{1F647}", "\u{1F647}\u200D\u2642\uFE0F", "\u{1F647}\u200D\u2640\uFE0F", "\u{1F926}", "\u{1F926}\u200D\u2642\uFE0F", "\u{1F926}\u200D\u2640\uFE0F", "\u{1F937}", "\u{1F937}\u200D\u2642\uFE0F", "\u{1F937}\u200D\u2640\uFE0F", "\u{1F468}\u200D\u2695\uFE0F", "\u{1F469}\u200D\u2695\uFE0F", "\u{1F468}\u200D\u{1F393}", "\u{1F469}\u200D\u{1F393}", "\u{1F468}\u200D\u{1F3EB}", "\u{1F469}\u200D\u{1F3EB}", "\u{1F468}\u200D\u2696\uFE0F", "\u{1F469}\u200D\u2696\uFE0F", "\u{1F468}\u200D\u{1F33E}", "\u{1F469}\u200D\u{1F33E}", "\u{1F468}\u200D\u{1F373}", "\u{1F469}\u200D\u{1F373}", "\u{1F468}\u200D\u{1F527}", "\u{1F469}\u200D\u{1F527}", "\u{1F468}\u200D\u{1F3ED}", "\u{1F469}\u200D\u{1F3ED}", "\u{1F468}\u200D\u{1F4BC}", "\u{1F469}\u200D\u{1F4BC}", "\u{1F468}\u200D\u{1F52C}", "\u{1F469}\u200D\u{1F52C}", "\u{1F468}\u200D\u{1F4BB}", "\u{1F469}\u200D\u{1F4BB}", "\u{1F468}\u200D\u{1F3A4}", "\u{1F469}\u200D\u{1F3A4}", "\u{1F468}\u200D\u{1F3A8}", "\u{1F469}\u200D\u{1F3A8}", "\u{1F468}\u200D\u2708\uFE0F", "\u{1F469}\u200D\u2708\uFE0F", "\u{1F468}\u200D\u{1F680}", "\u{1F469}\u200D\u{1F680}", "\u{1F468}\u200D\u{1F692}", "\u{1F469}\u200D\u{1F692}", "\u{1F46E}", "\u{1F46E}\u200D\u2642\uFE0F", "\u{1F46E}\u200D\u2640\uFE0F", "\u{1F575}\uFE0F", "\u{1F575}\uFE0F\u200D\u2642\uFE0F", "\u{1F575}\uFE0F\u200D\u2640\uFE0F", "\u{1F482}", "\u{1F482}\u200D\u2642\uFE0F", "\u{1F482}\u200D\u2640\uFE0F", "\u{1F477}", "\u{1F477}\u200D\u2642\uFE0F", "\u{1F477}\u200D\u2640\uFE0F", "\u{1F934}", "\u{1F478}", "\u{1F473}", "\u{1F473}\u200D\u2642\uFE0F", "\u{1F473}\u200D\u2640\uFE0F", "\u{1F472}", "\u{1F9D5}", "\u{1F935}", "\u{1F470}", "\u{1F930}", "\u{1F931}", "\u{1F47C}", "\u{1F385}", "\u{1F936}", "\u{1F9B8}", "\u{1F9B8}\u200D\u2642\uFE0F", "\u{1F9B8}\u200D\u2640\uFE0F", "\u{1F9B9}", "\u{1F9B9}\u200D\u2642\uFE0F", "\u{1F9B9}\u200D\u2640\uFE0F", "\u{1F9D9}", "\u{1F9D9}\u200D\u2642\uFE0F", "\u{1F9D9}\u200D\u2640\uFE0F", "\u{1F9DA}", "\u{1F9DA}\u200D\u2642\uFE0F", "\u{1F9DA}\u200D\u2640\uFE0F", "\u{1F9DB}", "\u{1F9DB}\u200D\u2642\uFE0F", "\u{1F9DB}\u200D\u2640\uFE0F", "\u{1F9DC}", "\u{1F9DC}\u200D\u2642\uFE0F", "\u{1F9DC}\u200D\u2640\uFE0F", "\u{1F9DD}", "\u{1F9DD}\u200D\u2642\uFE0F", "\u{1F9DD}\u200D\u2640\uFE0F", "\u{1F486}", "\u{1F486}\u200D\u2642\uFE0F", "\u{1F486}\u200D\u2640\uFE0F", "\u{1F487}", "\u{1F487}\u200D\u2642\uFE0F", "\u{1F487}\u200D\u2640\uFE0F", "\u{1F6B6}", "\u{1F6B6}\u200D\u2642\uFE0F", "\u{1F6B6}\u200D\u2640\uFE0F", "\u{1F9CD}", "\u{1F9CD}\u200D\u2642\uFE0F", "\u{1F9CD}\u200D\u2640\uFE0F", "\u{1F9CE}", "\u{1F9CE}\u200D\u2642\uFE0F", "\u{1F9CE}\u200D\u2640\uFE0F", "\u{1F468}\u200D\u{1F9AF}", "\u{1F469}\u200D\u{1F9AF}", "\u{1F468}\u200D\u{1F9BC}", "\u{1F469}\u200D\u{1F9BC}", "\u{1F468}\u200D\u{1F9BD}", "\u{1F469}\u200D\u{1F9BD}", "\u{1F3C3}", "\u{1F3C3}\u200D\u2642\uFE0F", "\u{1F3C3}\u200D\u2640\uFE0F", "\u{1F483}", "\u{1F57A}", "\u{1F574}\uFE0F", "\u{1F9D6}", "\u{1F9D6}\u200D\u2642\uFE0F", "\u{1F9D6}\u200D\u2640\uFE0F", "\u{1F9D7}", "\u{1F9D7}\u200D\u2642\uFE0F", "\u{1F9D7}\u200D\u2640\uFE0F", "\u{1F3C7}", "\u{1F3C2}", "\u{1F3CC}\uFE0F", "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F", "\u{1F3C4}", "\u{1F3C4}\u200D\u2642\uFE0F", "\u{1F3C4}\u200D\u2640\uFE0F", "\u{1F6A3}", "\u{1F6A3}\u200D\u2642\uFE0F", "\u{1F6A3}\u200D\u2640\uFE0F", "\u{1F3CA}", "\u{1F3CA}\u200D\u2642\uFE0F", "\u{1F3CA}\u200D\u2640\uFE0F", "\u26F9\uFE0F", "\u26F9\uFE0F\u200D\u2642\uFE0F", "\u26F9\uFE0F\u200D\u2640\uFE0F", "\u{1F3CB}\uFE0F", "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F", "\u{1F6B4}", "\u{1F6B4}\u200D\u2642\uFE0F", "\u{1F6B4}\u200D\u2640\uFE0F", "\u{1F6B5}", "\u{1F6B5}\u200D\u2642\uFE0F", "\u{1F6B5}\u200D\u2640\uFE0F", "\u{1F938}", "\u{1F938}\u200D\u2642\uFE0F", "\u{1F938}\u200D\u2640\uFE0F", "\u{1F93D}", "\u{1F93D}\u200D\u2642\uFE0F", "\u{1F93D}\u200D\u2640\uFE0F", "\u{1F93E}", "\u{1F93E}\u200D\u2642\uFE0F", "\u{1F93E}\u200D\u2640\uFE0F", "\u{1F939}", "\u{1F939}\u200D\u2642\uFE0F", "\u{1F939}\u200D\u2640\uFE0F", "\u{1F9D8}", "\u{1F9D8}\u200D\u2642\uFE0F", "\u{1F9D8}\u200D\u2640\uFE0F", "\u{1F6C0}", "\u{1F6CC}", "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}", "\u{1F46D}", "\u{1F46B}", "\u{1F46C}"]);

            function q(t) {
                return re.has(t)
            }
            const R = "\u200D",
                ce = 65039;

            function le(t, e) {
                const n = P(t);
                if (!q(n)) return t;
                const o = ft(e);
                return o ? n.split(R).map(i => q(i) ? at(i, o) : i).join(R) : t
            }

            function ue(t, e) {
                const n = P(t);
                if (!q(n)) return t;
                const o = e.map(i => ft(i));
                return n.split(R).map(i => {
                    if (!q(i)) return i;
                    const s = o.shift();
                    return s ? at(i, s) : i
                }).join(R)
            }

            function P(t) {
                return [...t].filter(e => !dt(e.codePointAt(0))).join("")
            }

            function at(t, e) {
                const n = [...t].map(o => o.codePointAt(0));
                return n[1] && (dt(n[1]) || n[1] === ce) ? n[1] = e : n.splice(1, 0, e), String.fromCodePoint(...n)
            }

            function dt(t) {
                return t >= 127995 && t <= 127999
            }

            function ft(t) {
                switch (t) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null
                }
            }
            class ht extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }
                get tone() {
                    return (this.getAttribute("tone") || "").split(" ").map(e => {
                        const n = parseInt(e, 10);
                        return n >= 0 && n <= 5 ? n : 0
                    }).join(" ")
                }
                set tone(e) {
                    this.setAttribute("tone", e)
                }
                connectedCallback() {
                    if (this.image === null && !se()) {
                        const e = this.getAttribute("fallback-src");
                        if (e) {
                            this.textContent = "";
                            const n = ae(this);
                            n.src = e, this.appendChild(n)
                        }
                    }
                    this.hasAttribute("tone") && mt(this)
                }
                static get observedAttributes() {
                    return ["tone"]
                }
                attributeChangedCallback(e) {
                    switch (e) {
                        case "tone":
                            mt(this);
                            break
                    }
                }
            }

            function mt(t) {
                if (t.image) return;
                const e = t.tone.split(" ").map(n => parseInt(n, 10));
                if (e.length === 0) t.textContent = P(t.textContent || "");
                else if (e.length === 1) {
                    const n = e[0];
                    t.textContent = n === 0 ? P(t.textContent || "") : le(t.textContent || "", n)
                } else t.textContent = ue(t.textContent || "", e)
            }

            function ae(t) {
                const e = document.createElement("img");
                return e.className = "emoji", e.alt = t.getAttribute("alias") || "", e.height = 20, e.width = 20, e
            }
            window.customElements.get("g-emoji") || (window.GEmojiElement = ht, window.customElements.define("g-emoji", ht));
            const de = ["[data-md-button]", "md-header", "md-bold", "md-italic", "md-quote", "md-code", "md-link", "md-image", "md-unordered-list", "md-ordered-list", "md-task-list", "md-mention", "md-ref", "md-strikethrough"];

            function pt(t) {
                const e = [];
                for (const n of t.querySelectorAll(de.join(", "))) n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest("markdown-toolbar") === t && e.push(n);
                return e
            }

            function fe(t) {
                return function(e) {
                    (e.key === " " || e.key === "Enter") && (e.preventDefault(), t(e))
                }
            }
            const g = new WeakMap;
            class w extends HTMLElement {
                constructor() {
                    super();
                    const e = () => {
                        const n = g.get(this);
                        !n || Ht(this, n)
                    };
                    this.addEventListener("keydown", fe(e)), this.addEventListener("click", e)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                click() {
                    const e = g.get(this);
                    !e || Ht(this, e)
                }
            }
            class gt extends w {
                constructor() {
                    super();
                    const e = parseInt(this.getAttribute("level") || "3", 10);
                    if (e < 1 || e > 6) return;
                    const n = `${"#".repeat(e)} `;
                    g.set(this, {
                        prefix: n
                    })
                }
            }
            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = gt, window.customElements.define("md-header", gt));
            class wt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "**",
                        suffix: "**",
                        trimFirst: !0
                    })
                }
            }
            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = wt, window.customElements.define("md-bold", wt));
            class bt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "_",
                        suffix: "_",
                        trimFirst: !0
                    })
                }
            }
            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = bt, window.customElements.define("md-italic", bt));
            class Et extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "> ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = Et, window.customElements.define("md-quote", Et));
            class kt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "`",
                        suffix: "`",
                        blockPrefix: "```",
                        blockSuffix: "```"
                    })
                }
            }
            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = kt, window.customElements.define("md-code", kt));
            class vt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "[",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
            }
            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = vt, window.customElements.define("md-link", vt));
            class xt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "![",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
            }
            window.customElements.get("md-image") || (window.MarkdownImageButtonElement = xt, window.customElements.define("md-image", xt));
            class yt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "- ",
                        multiline: !0,
                        unorderedList: !0
                    })
                }
            }
            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = yt, window.customElements.define("md-unordered-list", yt));
            class St extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "1. ",
                        multiline: !0,
                        orderedList: !0
                    })
                }
            }
            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = St, window.customElements.define("md-ordered-list", St));
            class Lt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "- [ ] ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = Lt, window.customElements.define("md-task-list", Lt));
            class Mt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "@",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = Mt, window.customElements.define("md-mention", Mt));
            class At extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "#",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = At, window.customElements.define("md-ref", At));
            class Tt extends w {
                constructor() {
                    super();
                    g.set(this, {
                        prefix: "~~",
                        suffix: "~~",
                        trimFirst: !0
                    })
                }
            }
            window.customElements.get("md-strikethrough") || (window.MarkdownStrikethroughButtonElement = Tt, window.customElements.define("md-strikethrough", Tt));
            class Y extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "toolbar"), this.addEventListener("keydown", Ct), this.setAttribute("tabindex", "0"), this.addEventListener("focus", he, {
                        once: !0
                    })
                }
                disconnectedCallback() {
                    this.removeEventListener("keydown", Ct)
                }
                get field() {
                    const e = this.getAttribute("for");
                    if (!e) return null;
                    const n = "getRootNode" in this ? this.getRootNode() : document;
                    let o;
                    return (n instanceof Document || n instanceof ShadowRoot) && (o = n.getElementById(e)), o instanceof HTMLTextAreaElement ? o : null
                }
            }

            function he({
                target: t
            }) {
                if (!(t instanceof Element)) return;
                t.removeAttribute("tabindex");
                let e = "0";
                for (const n of pt(t)) n.setAttribute("tabindex", e), e === "0" && (n.focus(), e = "-1")
            }

            function Ct(t) {
                const e = t.key;
                if (e !== "ArrowRight" && e !== "ArrowLeft" && e !== "Home" && e !== "End") return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLElement)) return;
                const o = pt(n),
                    i = o.indexOf(t.target),
                    s = o.length;
                if (i === -1) return;
                let r = 0;
                e === "ArrowLeft" && (r = i - 1), e === "ArrowRight" && (r = i + 1), e === "End" && (r = s - 1), r < 0 && (r = s - 1), r > s - 1 && (r = 0);
                for (let c = 0; c < s; c += 1) o[c].setAttribute("tabindex", c === r ? "0" : "-1");
                t.preventDefault(), o[r].focus()
            }
            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = Y, window.customElements.define("markdown-toolbar", Y));

            function X(t) {
                return t.trim().split(`
`).length > 1
            }

            function It(t, e) {
                return Array(e + 1).join(t)
            }

            function me(t, e) {
                let n = e;
                for (; t[n] && t[n - 1] != null && !t[n - 1].match(/\s/);) n--;
                return n
            }

            function pe(t, e, n) {
                let o = e;
                const i = n ? /\n/ : /\s/;
                for (; t[o] && !t[o].match(i);) o++;
                return o
            }
            let L = null;

            function ge(t, {
                text: e,
                selectionStart: n,
                selectionEnd: o
            }) {
                const i = t.selectionStart,
                    s = t.value.slice(0, i),
                    r = t.value.slice(t.selectionEnd);
                if (L === null || L === !0) {
                    t.contentEditable = "true";
                    try {
                        L = document.execCommand("insertText", !1, e)
                    } catch {
                        L = !1
                    }
                    t.contentEditable = "false"
                }
                if (L && !t.value.slice(0, t.selectionStart).endsWith(e) && (L = !1), !L) {
                    try {
                        document.execCommand("ms-beginUndoUnit")
                    } catch {}
                    t.value = s + e + r;
                    try {
                        document.execCommand("ms-endUndoUnit")
                    } catch {}
                    t.dispatchEvent(new CustomEvent("input", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                n != null && o != null ? t.setSelectionRange(n, o) : t.setSelectionRange(i, t.selectionEnd)
            }

            function we(t, e) {
                const n = t.value.slice(t.selectionStart, t.selectionEnd);
                let o;
                e.orderedList || e.unorderedList ? o = ye(t, e) : e.multiline && X(n) ? o = ve(t, e) : o = ke(t, e), ge(t, o)
            }

            function be(t) {
                const e = t.value.split(`
`);
                let n = 0;
                for (let o = 0; o < e.length; o++) {
                    const i = e[o].length + 1;
                    t.selectionStart >= n && t.selectionStart < n + i && (t.selectionStart = n), t.selectionEnd >= n && t.selectionEnd < n + i && (t.selectionEnd = n + i - 1), n += i
                }
            }

            function Ee(t, e, n, o = !1) {
                if (t.selectionStart === t.selectionEnd) t.selectionStart = me(t.value, t.selectionStart), t.selectionEnd = pe(t.value, t.selectionEnd, o);
                else {
                    const i = t.selectionStart - e.length,
                        s = t.selectionEnd + n.length,
                        r = t.value.slice(i, t.selectionStart) === e,
                        c = t.value.slice(t.selectionEnd, s) === n;
                    r && c && (t.selectionStart = i, t.selectionEnd = s)
                }
                return t.value.slice(t.selectionStart, t.selectionEnd)
            }

            function V(t) {
                const e = t.value.slice(0, t.selectionStart),
                    n = t.value.slice(t.selectionEnd),
                    o = e.match(/\n*$/),
                    i = n.match(/^\n*/),
                    s = o ? o[0].length : 0,
                    r = i ? i[0].length : 0;
                let c, l;
                return e.match(/\S/) && s < 2 && (c = It(`
`, 2 - s)), n.match(/\S/) && r < 2 && (l = It(`
`, 2 - r)), c == null && (c = ""), l == null && (l = ""), {
                    newlinesToAppend: c,
                    newlinesToPrepend: l
                }
            }

            function ke(t, e) {
                let n, o;
                const {
                    prefix: i,
                    suffix: s,
                    blockPrefix: r,
                    blockSuffix: c,
                    replaceNext: l,
                    prefixSpace: u,
                    scanFor: a,
                    surroundWithNewlines: b
                } = e, k = t.selectionStart, D = t.selectionEnd;
                let h = t.value.slice(t.selectionStart, t.selectionEnd),
                    d = X(h) && r.length > 0 ? `${r}
` : i,
                    m = X(h) && c.length > 0 ? `
${c}` : s;
                if (u) {
                    const p = t.value[t.selectionStart - 1];
                    t.selectionStart !== 0 && p != null && !p.match(/\s/) && (d = ` ${d}`)
                }
                h = Ee(t, d, m, e.multiline);
                let f = t.selectionStart,
                    v = t.selectionEnd;
                const We = l.length > 0 && m.indexOf(l) > -1 && h.length > 0;
                if (b) {
                    const p = V(t);
                    n = p.newlinesToAppend, o = p.newlinesToPrepend, d = n + i, m += o
                }
                if (h.startsWith(d) && h.endsWith(m)) {
                    const p = h.slice(d.length, h.length - m.length);
                    if (k === D) {
                        let y = k - d.length;
                        y = Math.max(y, f), y = Math.min(y, f + p.length), f = v = y
                    } else v = f + p.length;
                    return {
                        text: p,
                        selectionStart: f,
                        selectionEnd: v
                    }
                } else if (We)
                    if (a.length > 0 && h.match(a)) {
                        m = m.replace(l, h);
                        const p = d + m;
                        return f = v = f + d.length, {
                            text: p,
                            selectionStart: f,
                            selectionEnd: v
                        }
                    } else {
                        const p = d + h + m;
                        return f = f + d.length + h.length + m.indexOf(l), v = f + l.length, {
                            text: p,
                            selectionStart: f,
                            selectionEnd: v
                        }
                    }
                else {
                    let p = d + h + m;
                    f = k + d.length, v = D + d.length;
                    const y = h.match(/^\s*|\s*$/g);
                    if (e.trimFirst && y) {
                        const Dt = y[0] || "",
                            jt = y[1] || "";
                        p = Dt + d + h.trim() + m + jt, f += Dt.length, v -= jt.length
                    }
                    return {
                        text: p,
                        selectionStart: f,
                        selectionEnd: v
                    }
                }
            }

            function ve(t, e) {
                const {
                    prefix: n,
                    suffix: o,
                    surroundWithNewlines: i
                } = e;
                let s = t.value.slice(t.selectionStart, t.selectionEnd),
                    r = t.selectionStart,
                    c = t.selectionEnd;
                const l = s.split(`
`);
                if (l.every(a => a.startsWith(n) && a.endsWith(o))) s = l.map(a => a.slice(n.length, a.length - o.length)).join(`
`), c = r + s.length;
                else if (s = l.map(a => n + a + o).join(`
`), i) {
                    const {
                        newlinesToAppend: a,
                        newlinesToPrepend: b
                    } = V(t);
                    r += a.length, c = r + s.length, s = a + s + b
                }
                return {
                    text: s,
                    selectionStart: r,
                    selectionEnd: c
                }
            }

            function Bt(t) {
                const e = t.split(`
`),
                    n = /^\d+\.\s+/,
                    o = e.every(s => n.test(s));
                let i = e;
                return o && (i = e.map(s => s.replace(n, ""))), {
                    text: i.join(`
`),
                    processed: o
                }
            }

            function Wt(t) {
                const e = t.split(`
`),
                    n = "- ",
                    o = e.every(s => s.startsWith(n));
                let i = e;
                return o && (i = e.map(s => s.slice(n.length, s.length))), {
                    text: i.join(`
`),
                    processed: o
                }
            }

            function H(t, e) {
                return e ? "- " : `${t+1}. `
            }

            function xe(t, e) {
                let n, o, i;
                return t.orderedList ? (o = Bt(e), n = Wt(o.text), i = n.text) : (o = Wt(e), n = Bt(o.text), i = n.text), [o, n, i]
            }

            function ye(t, e) {
                const n = t.selectionStart === t.selectionEnd;
                let o = t.selectionStart,
                    i = t.selectionEnd;
                be(t);
                const s = t.value.slice(t.selectionStart, t.selectionEnd),
                    [r, c, l] = xe(e, s),
                    u = l.split(`
`).map((d, m) => `${H(m,e.unorderedList)}${d}`),
                    a = u.reduce((d, m, f) => d + H(f, e.unorderedList).length, 0),
                    b = u.reduce((d, m, f) => d + H(f, !e.unorderedList).length, 0);
                if (r.processed) return n ? (o = Math.max(o - H(0, e.unorderedList).length, 0), i = o) : (o = t.selectionStart, i = t.selectionEnd - a), {
                    text: l,
                    selectionStart: o,
                    selectionEnd: i
                };
                const {
                    newlinesToAppend: k,
                    newlinesToPrepend: D
                } = V(t), h = k + u.join(`
`) + D;
                return n ? (o = Math.max(o + H(0, e.unorderedList).length + k.length, 0), i = o) : c.processed ? (o = Math.max(t.selectionStart + k.length, 0), i = t.selectionEnd + k.length + a - b) : (o = Math.max(t.selectionStart + k.length, 0), i = t.selectionEnd + k.length + a), {
                    text: h,
                    selectionStart: o,
                    selectionEnd: i
                }
            }

            function Ht(t, e) {
                const n = t.closest("markdown-toolbar");
                if (!(n instanceof Y)) return;
                const i = Object.assign(Object.assign({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        unorderedList: !1,
                        trimFirst: !1
                    }), e),
                    s = n.field;
                s && (s.focus(), we(s, i))
            }
            const Se = /\s|\(|\[/;

            function Le(t, e, n, {
                multiWord: o,
                lookBackIndex: i,
                lastMatchPosition: s
            } = {
                multiWord: !1,
                lookBackIndex: 0,
                lastMatchPosition: null
            }) {
                let r = t.lastIndexOf(e, n - 1);
                if (r === -1 || r < i) return;
                if (o) {
                    if (s != null) {
                        if (s === r) return;
                        r = s - e.length
                    }
                    if (t[r + 1] === " " && n >= r + e.length + 1 || t.lastIndexOf(`
`, n - 1) > r || t.lastIndexOf(".", n - 1) > r) return
                } else if (t.lastIndexOf(" ", n - 1) > r) return;
                const c = t[r - 1];
                return c && !Se.test(c) ? void 0 : {
                    text: t.substring(r + e.length, n),
                    position: r + e.length
                }
            }
            const Me = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                Ot = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                qt = new WeakMap;

            function Ae(t, e) {
                const n = t.nodeName.toLowerCase();
                if (n !== "textarea" && n !== "input") throw new Error("expected textField to a textarea or input");
                let o = qt.get(t);
                if (o && o.parentElement === t.parentElement) o.innerHTML = "";
                else {
                    o = document.createElement("div"), qt.set(t, o);
                    const c = window.getComputedStyle(t),
                        l = Me.slice(0);
                    n === "textarea" ? l.push("white-space:pre-wrap;") : l.push("white-space:nowrap;");
                    for (let u = 0, a = Ot.length; u < a; u++) {
                        const b = Ot[u];
                        l.push(`${b}:${c.getPropertyValue(b)};`)
                    }
                    o.style.cssText = l.join(" ")
                }
                const i = document.createElement("span");
                i.style.cssText = "position: absolute;", i.innerHTML = "&nbsp;";
                let s, r;
                if (typeof e == "number") {
                    let c = t.value.substring(0, e);
                    c && (s = document.createTextNode(c)), c = t.value.substring(e), c && (r = document.createTextNode(c))
                } else {
                    const c = t.value;
                    c && (s = document.createTextNode(c))
                }
                if (s && o.appendChild(s), o.appendChild(i), r && o.appendChild(r), !o.parentElement) {
                    if (!t.parentElement) throw new Error("textField must have a parentElement to mirror");
                    t.parentElement.insertBefore(o, t)
                }
                return o.scrollTop = t.scrollTop, o.scrollLeft = t.scrollLeft, {
                    mirror: o,
                    marker: i
                }
            }

            function Te(t, e = t.selectionEnd) {
                const {
                    mirror: n,
                    marker: o
                } = Ae(t, e), i = n.getBoundingClientRect(), s = o.getBoundingClientRect();
                return setTimeout(() => {
                    n.remove()
                }, 5e3), {
                    top: s.top - i.top,
                    left: s.left - i.left
                }
            }
            const N = new WeakMap;
            class Ce {
                constructor(e, n) {
                    this.expander = e, this.input = n, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.lookBackIndex = 0, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, n.addEventListener("paste", this.onpaste), n.addEventListener("input", this.oninput), n.addEventListener("keydown", this.onkeydown), n.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                dismissMenu() {
                    this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex)
                }
                activate(e, n) {
                    var o, i;
                    if (this.input !== document.activeElement && this.input !== ((i = (o = document.activeElement) === null || o === void 0 ? void 0 : o.shadowRoot) === null || i === void 0 ? void 0 : i.activeElement)) return;
                    this.deactivate(), this.menu = n, n.id || (n.id = `text-expander-${Math.floor(Math.random()*1e5).toString()}`), this.expander.append(n), this.combobox = new U(this.input, n);
                    const {
                        top: s,
                        left: r
                    } = Te(this.input, e.position);
                    n.style.top = `${s}px`, n.style.left = `${r}px`, this.combobox.start(), n.addEventListener("combobox-commit", this.oncommit), n.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }
                deactivate() {
                    const e = this.menu;
                    return !e || !this.combobox ? !1 : (this.menu = null, e.removeEventListener("combobox-commit", this.oncommit), e.removeEventListener("mousedown", this.onmousedown), this.combobox.destroy(), this.combobox = null, e.remove(), !0)
                }
                onCommit({
                    target: e
                }) {
                    const n = e;
                    if (!(n instanceof HTMLElement) || !this.combobox) return;
                    const o = this.match;
                    if (!o) return;
                    const i = this.input.value.substring(0, o.position - o.key.length),
                        s = this.input.value.substring(o.position + o.text.length),
                        r = {
                            item: n,
                            key: o.key,
                            value: null
                        };
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                            cancelable: !0,
                            detail: r
                        })) || !r.value) return;
                    const l = `${r.value} `;
                    this.input.value = i + l + s;
                    const u = i.length + l.length;
                    this.deactivate(), this.input.focus({
                        preventScroll: !0
                    }), this.input.selectionStart = u, this.input.selectionEnd = u, this.lookBackIndex = u, this.match = null
                }
                onBlur() {
                    if (this.interactingWithList) {
                        this.interactingWithList = !1;
                        return
                    }
                    this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async onInput() {
                    if (this.justPasted) {
                        this.justPasted = !1;
                        return
                    }
                    const e = this.findMatch();
                    if (e) {
                        this.match = e;
                        const n = await this.notifyProviders(e);
                        if (!this.match) return;
                        n ? this.activate(e, n) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                findMatch() {
                    const e = this.input.selectionEnd || 0,
                        n = this.input.value;
                    e <= this.lookBackIndex && (this.lookBackIndex = e - 1);
                    for (const {
                            key: o,
                            multiWord: i
                        } of this.expander.keys) {
                        const s = Le(n, o, e, {
                            multiWord: i,
                            lookBackIndex: this.lookBackIndex,
                            lastMatchPosition: this.match ? this.match.position : null
                        });
                        if (s) return {
                            text: s.text,
                            key: o,
                            position: s.position
                        }
                    }
                }
                async notifyProviders(e) {
                    const n = [],
                        o = c => n.push(c);
                    return this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                        cancelable: !0,
                        detail: {
                            provide: o,
                            text: e.text,
                            key: e.key
                        }
                    })) ? (await Promise.all(n)).filter(c => c.matched).map(c => c.fragment)[0] : void 0
                }
                onMousedown() {
                    this.interactingWithList = !0
                }
                onKeydown(e) {
                    e.key === "Escape" && (this.match = null, this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex, e.stopImmediatePropagation(), e.preventDefault()))
                }
            }
            class Rt extends HTMLElement {
                get keys() {
                    const e = this.getAttribute("keys"),
                        n = e ? e.split(" ") : [],
                        o = this.getAttribute("multiword"),
                        i = o ? o.split(" ") : [],
                        s = i.length === 0 && this.hasAttribute("multiword");
                    return n.map(r => ({
                        key: r,
                        multiWord: s || i.includes(r)
                    }))
                }
                connectedCallback() {
                    const e = this.querySelector('input[type="text"], textarea');
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                    const n = new Ce(this, e);
                    N.set(this, n)
                }
                disconnectedCallback() {
                    const e = N.get(this);
                    !e || (e.destroy(), N.delete(this))
                }
                dismiss() {
                    const e = N.get(this);
                    !e || e.dismissMenu()
                }
            }
            window.customElements.get("text-expander") || (window.TextExpanderElement = Rt, window.customElements.define("text-expander", Rt));
            const Ie = function() {
                return document.readyState === "complete" ? Promise.resolve() : new Promise(t => {
                    window.addEventListener("load", t)
                })
            }();
            class Pt extends HTMLElement {
                async connectedCallback() {
                    await Ie, this.content && await Be(this.lines, this.content, this.characterDelay, this.lineDelay), this.cursor && (this.cursor.hidden = !0), this.dispatchEvent(new CustomEvent("typing:complete", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                get content() {
                    return this.querySelector('[data-target="typing-effect.content"]')
                }
                get cursor() {
                    return this.querySelector('[data-target="typing-effect.cursor"]')
                }
                get lines() {
                    const e = this.getAttribute("data-lines");
                    try {
                        return e ? JSON.parse(e) : []
                    } catch {
                        return []
                    }
                }
                get prefersReducedMotion() {
                    return window.matchMedia("(prefers-reduced-motion)").matches
                }
                get characterDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-character-delay"))), 2147483647)) || 40
                }
                set characterDelay(e) {
                    if (e > 2147483647 || e < 0) throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-character-delay", String(e))
                }
                get lineDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-line-delay"))), 2147483647)) || 40
                }
                set lineDelay(e) {
                    if (e > 2147483647 || e < 0) throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-line-delay", String(e))
                }
            }
            window.customElements.get("typing-effect") || (window.TypingEffectElement = Pt, window.customElements.define("typing-effect", Pt));
            async function Be(t, e, n, o) {
                for (let i = 0; i < t.length; i++) {
                    if (n === 0) e.append(t[i]);
                    else
                        for (const s of t[i].split("")) await Nt(n), e.innerHTML += s;
                    o !== 0 && await Nt(o), i < t.length - 1 && e.append(document.createElement("br"))
                }
            }
            async function Nt(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }
        }
    }
});
//# sourceMappingURL=github-elements-4f5a74d6.js.map