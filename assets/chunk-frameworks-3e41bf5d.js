System.register(["./chunk-vendor.js"], function(D) {
    "use strict";
    var M, x, W, w, ko, fn, rt, Po;
    return {
        setters: [function(z) {
            M = z.h, x = z.o, W = z.f, w = z.a, ko = z.S, fn = z.r, rt = z.t, Po = z.c
        }],
        execute: function() {
            D({
                A: ds,
                B: pt,
                C: Xe,
                D: ws,
                E: _s,
                F: vs,
                G: yr,
                H: ys,
                J: Xo,
                K: Ti,
                L: Ar,
                M: xs,
                N: Ts,
                O: As,
                P: Vn,
                R: it,
                S: Ks,
                T: Us,
                U: ea,
                V: ps,
                W: Vs,
                X: Qr,
                Y: da,
                a: ne,
                a$: go,
                a0: eo,
                a1: Di,
                a2: zt,
                a3: Sa,
                a4: Pn,
                a6: Ui,
                a7: Wi,
                a9: jn,
                aA: tr,
                aB: hs,
                aC: Yn,
                aD: yo,
                aE: vo,
                aF: wt,
                aG: Pi,
                aH: xi,
                aI: tn,
                aJ: nn,
                aK: an,
                aL: bc,
                aM: gc,
                aN: qr,
                aO: rn,
                aP: Nn,
                aQ: Dn,
                aR: At,
                aS: Ko,
                aT: Os,
                aU: ei,
                aV: No,
                aW: Do,
                aX: Pe,
                aY: Wn,
                aZ: Si,
                a_: Fo,
                aa: Tn,
                ab: An,
                af: Oa,
                ag: Pt,
                ai: Gi,
                aj: Ua,
                ak: Xn,
                al: Ns,
                am: Ir,
                an: dc,
                ao: Na,
                ap: Lu,
                ar,
                as: xt,
                at: Yr,
                au: Ht,
                av: Ps,
                aw: qt,
                ax: st,
                ay: xa,
                az: qi,
                b: ke,
                b0: Gt,
                b1: ft,
                b2: Ao,
                b3: ma,
                b4: Ki,
                b5: co,
                b6: Va,
                b7: wu,
                b8: Ji,
                b9: xo,
                ba: no,
                bb: ro,
                bc: oo,
                bd: so,
                be: zs,
                bf: to,
                bg: ks,
                c: U,
                d: ct,
                e: mt,
                f: En,
                g: ht,
                h: bt,
                i: Go,
                j: Me,
                k: Ni,
                l: Zn,
                m: _n,
                n: Fi,
                o: me,
                p: Jo,
                q: re,
                r: kn,
                s: On,
                t: De,
                u: _i,
                v: G,
                w: Xi,
                x: hn,
                y: ms,
                z: cr
            });
            var z = Object.defineProperty,
                dn = (e, t) => z(e, "name", {
                    value: t,
                    configurable: !0
                });
            class ot {
                constructor(t) {
                    this.closed = !1, this.unsubscribe = () => {
                        t(), this.closed = !0
                    }
                }
            }
            D("ah", ot), dn(ot, "Subscription");

            function U(e, t, n, r = {
                capture: !1
            }) {
                return e.addEventListener(t, n, r), new ot(() => {
                    e.removeEventListener(t, n, r)
                })
            }
            dn(U, "fromEvent");

            function it(...e) {
                return new ot(() => {
                    for (const t of e) t.unsubscribe()
                })
            }
            dn(it, "compose");
            var Tc = Object.defineProperty,
                ue = (e, t) => Tc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function xo(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    left: t.left + window.pageXOffset
                }
            }
            ue(xo, "offset");

            function fe(e) {
                let t = e;
                const n = t.ownerDocument;
                if (!n || !t.offsetParent) return;
                const r = n.defaultView.HTMLElement;
                if (t !== n.body) {
                    for (; t !== n.body;) {
                        if (t.parentElement instanceof r) t = t.parentElement;
                        else return;
                        const {
                            position: o,
                            overflowY: i,
                            overflowX: s
                        } = getComputedStyle(t);
                        if (o === "fixed" || i === "auto" || s === "auto" || i === "scroll" || s === "scroll") break
                    }
                    return t instanceof Document ? null : t
                }
            }
            ue(fe, "overflowParent");

            function Ce(e, t) {
                let n = t;
                const r = e.ownerDocument;
                if (!r) return;
                const o = r.documentElement;
                if (!o || e === o) return;
                const i = st(e, n);
                if (!i) return;
                n = i._container;
                const s = n === r.documentElement && r.defaultView ? {
                        top: r.defaultView.pageYOffset,
                        left: r.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    a = i.top - s.top,
                    c = i.left - s.left,
                    l = n.clientHeight,
                    f = n.clientWidth,
                    d = l - (a + e.offsetHeight),
                    u = f - (c + e.offsetWidth);
                return {
                    top: a,
                    left: c,
                    bottom: d,
                    right: u,
                    height: l,
                    width: f
                }
            }
            ue(Ce, "overflowOffset");

            function st(e, t) {
                let n = e;
                const r = n.ownerDocument;
                if (!r) return;
                const o = r.documentElement;
                if (!o) return;
                const i = r.defaultView.HTMLElement;
                let s = 0,
                    a = 0;
                const c = n.offsetHeight,
                    l = n.offsetWidth;
                for (; !(n === r.body || n === t);)
                    if (s += n.offsetTop || 0, a += n.offsetLeft || 0, n.offsetParent instanceof i) n = n.offsetParent;
                    else return;
                let f, d, u;
                if (!t || t === r || t === r.defaultView || t === r.documentElement || t === r.body) u = o, f = Oo(r.body, o), d = jo(r.body, o);
                else if (t instanceof i) u = t, f = t.scrollHeight, d = t.scrollWidth;
                else return;
                const m = f - (s + c),
                    h = d - (a + l);
                return {
                    top: s,
                    left: a,
                    bottom: m,
                    right: h,
                    _container: u
                }
            }
            ue(st, "positionedOffset");

            function Oo(e, t) {
                return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight)
            }
            ue(Oo, "getDocumentHeight");

            function jo(e, t) {
                return Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth)
            }
            ue(jo, "getDocumentWidth");
            var Ac = Object.defineProperty,
                mn = (e, t) => Ac(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Cc = D("_", mn(() => {
                    const e = document.querySelector("meta[name=keyboard-shortcuts-preference]");
                    return e ? e.content === "all" : !0
                }, "areCharacterKeyShortcutsEnabled")),
                kc = D("$", mn(e => /Enter|Arrow|Escape|Meta|Control|Esc/.test(e) || e.includes("Alt") && e.includes("Shift"), "isNonCharacterKeyShortcut")),
                Pc = D("Q", mn(e => {
                    const t = M(e);
                    return Cc() ? !0 : kc(t)
                }, "isShortcutAllowed"));
            var xc = Object.defineProperty,
                Oc = (e, t) => xc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function pn(e, t) {
                let n = e;
                const r = e.ownerDocument;
                (n === r || n === r.defaultView || n === r.documentElement || n === r.body) && (n = r);
                const o = r.defaultView.Document;
                if (n instanceof o) {
                    const s = t.top != null ? t.top : r.defaultView.pageYOffset,
                        a = t.left != null ? t.left : r.defaultView.pageXOffset;
                    r.defaultView.scrollTo(a, s);
                    return
                }
                const i = r.defaultView.HTMLElement;
                if (!(n instanceof i)) throw new Error("invariant");
                n.scrollTop = t.top, t.left != null && (n.scrollLeft = t.left)
            }
            Oc(pn, "scrollTo");
            var jc = Object.defineProperty,
                Mo = (e, t) => jc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function $o(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0
            }
            Mo($o, "hidden");

            function hn(e) {
                return !$o(e)
            }
            Mo(hn, "visible");
            var Mc = Object.defineProperty,
                E = (e, t) => Mc(e, "name", {
                    value: t,
                    configurable: !0
                });
            const J = navigator.userAgent.match(/Macintosh/),
                gn = J ? "metaKey" : "ctrlKey",
                Io = J ? "Meta" : "Control";
            let bn = !1,
                vn = {
                    x: 0,
                    y: 0
                };
            x(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: e => it(U(e, "mouseover", qo), U(e, "mouseover", Ho))
            });

            function qo(e) {
                e instanceof MouseEvent && ((vn.x !== e.clientX || vn.y !== e.clientY) && (bn = !1), vn = {
                    x: e.clientX,
                    y: e.clientY
                })
            }
            E(qo, "onContainerMouseMove");

            function Ho(e) {
                if (bn) return;
                const t = e.currentTarget,
                    {
                        target: n
                    } = e;
                if (!(n instanceof Element) || !(t instanceof HTMLElement) || !t.closest(".js-active-navigation-container")) return;
                const r = n.closest(".js-navigation-item");
                r && N(r, t)
            }
            E(Ho, "onContainerMouseOver");
            let at = 0;
            x(".js-active-navigation-container", {
                add() {
                    at++, at === 1 && document.addEventListener("keydown", yn)
                },
                remove() {
                    at--, at === 0 && document.removeEventListener("keydown", yn)
                }
            });

            function yn(e) {
                if (e.target !== document.body && e.target instanceof HTMLElement && !e.target.classList.contains("js-navigation-enable")) return;
                bn = !0;
                const t = lt();
                let n = !1;
                if (t) {
                    const r = t.querySelector(".js-navigation-item.navigation-focus") || t;
                    n = W(r, "navigation:keydown", {
                        hotkey: M(e),
                        originalEvent: e,
                        originalTarget: e.target
                    })
                }
                n || e.preventDefault()
            }
            E(yn, "fireCustomKeydown"), w("navigation:keydown", ".js-active-navigation-container", function(e) {
                const t = e.currentTarget,
                    n = e.detail.originalTarget.matches("input, textarea"),
                    r = e.target;
                if (!!Pc(e.detail.originalEvent)) {
                    if (r.classList.contains("js-navigation-item"))
                        if (n) {
                            if (J) switch (M(e.detail.originalEvent)) {
                                case "Control+n":
                                    Oe(r, t);
                                    break;
                                case "Control+p":
                                    xe(r, t)
                            }
                            switch (M(e.detail.originalEvent)) {
                                case "ArrowUp":
                                    xe(r, t);
                                    break;
                                case "ArrowDown":
                                    Oe(r, t);
                                    break;
                                case "Enter":
                                case `${Io}+Enter`:
                                    Sn(r, e.detail.originalEvent[gn]);
                                    break
                            }
                        } else {
                            if (J) switch (M(e.detail.originalEvent)) {
                                case "Control+n":
                                    Oe(r, t);
                                    break;
                                case "Control+p":
                                    xe(r, t);
                                    break;
                                case "Alt+v":
                                    Vo(r, t);
                                    break;
                                case "Control+v":
                                    Bo(r, t)
                            }
                            switch (M(e.detail.originalEvent)) {
                                case "j":
                                case "J":
                                    Oe(r, t);
                                    break;
                                case "k":
                                case "K":
                                    xe(r, t);
                                    break;
                                case "o":
                                case "Enter":
                                case `${Io}+Enter`:
                                    Sn(r, e.detail[gn]);
                                    break
                            }
                        }
                    else {
                        const o = te(t)[0];
                        if (o)
                            if (n) {
                                if (J) switch (M(e.detail.originalEvent)) {
                                    case "Control+n":
                                        N(o, t)
                                }
                                switch (M(e.detail.originalEvent)) {
                                    case "ArrowDown":
                                        N(o, t)
                                }
                            } else {
                                if (J) switch (M(e.detail.originalEvent)) {
                                    case "Control+n":
                                    case "Control+v":
                                        N(o, t)
                                }
                                switch (M(e.detail.originalEvent)) {
                                    case "j":
                                        N(o, t)
                                }
                            }
                    }
                    if (n) {
                        if (J) switch (M(e.detail.originalEvent)) {
                            case "Control+n":
                            case "Control+p":
                                e.preventDefault()
                        }
                        switch (M(e.detail.originalEvent)) {
                            case "ArrowUp":
                            case "ArrowDown":
                                e.preventDefault();
                                break;
                            case "Enter":
                                e.preventDefault()
                        }
                    } else {
                        if (J) switch (M(e.detail.originalEvent)) {
                            case "Control+n":
                            case "Control+p":
                            case "Control+v":
                            case "Alt+v":
                                e.preventDefault()
                        }
                        switch (M(e.detail.originalEvent)) {
                            case "j":
                            case "k":
                            case "o":
                                e.preventDefault();
                                break;
                            case "Enter":
                            case `${gn}+Enter`:
                                e.preventDefault()
                        }
                    }
                }
            });

            function wn(e) {
                const t = e.modifierKey || e.altKey || e.ctrlKey || e.metaKey;
                W(e.currentTarget, "navigation:open", {
                    modifierKey: t,
                    shiftKey: e.shiftKey
                }) || e.preventDefault()
            }
            E(wn, "fireOpen"), w("click", ".js-active-navigation-container .js-navigation-item", function(e) {
                wn(e)
            }), w("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function(e) {
                const t = e.currentTarget.classList.contains("js-navigation-open") ? e.currentTarget : e.currentTarget.querySelector(".js-navigation-open");
                t instanceof HTMLAnchorElement ? (e.detail.modifierKey ? (window.open(t.href, "_blank"), window.focus()) : t.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })) && t.click(), e.preventDefault()) : wn(e)
            });

            function ke(e) {
                const t = lt();
                e !== t && (t !== null && ct(t), e == null || e.classList.add("js-active-navigation-container"))
            }
            E(ke, "activate");

            function ct(e) {
                e.classList.remove("js-active-navigation-container")
            }
            E(ct, "deactivate");
            const Ro = [];

            function Do(e) {
                const t = lt();
                t && Ro.push(t), ke(e)
            }
            E(Do, "push");

            function No(e) {
                ct(e), Pe(e);
                const t = Ro.pop();
                t && ke(t)
            }
            E(No, "pop");

            function En(e, t) {
                const n = t || e,
                    r = te(e)[0],
                    o = n.closest(".js-navigation-item") || r;
                if (ke(e), o instanceof HTMLElement) {
                    if (N(o, e)) return;
                    const s = fe(o);
                    ut(s, o)
                }
            }
            E(En, "focus");

            function Pe(e) {
                const t = e.querySelectorAll(".js-navigation-item.navigation-focus");
                for (const n of t) n.classList.remove("navigation-focus")
            }
            E(Pe, "clear");

            function Fo(e, t) {
                Pe(e), En(e, t)
            }
            E(Fo, "refocus");

            function xe(e, t) {
                const n = te(t),
                    r = n.indexOf(e),
                    o = n[r - 1];
                if (o) {
                    if (N(o, t)) return;
                    const s = fe(o);
                    Ln(t) === "page" ? je(s, o) : ut(s, o)
                }
            }
            E(xe, "cursorUp");

            function Oe(e, t) {
                const n = te(t),
                    r = n.indexOf(e),
                    o = n[r + 1];
                if (o) {
                    if (N(o, t)) return;
                    const s = fe(o);
                    Ln(t) === "page" ? je(s, o) : ut(s, o)
                }
            }
            E(Oe, "cursorDown");

            function Vo(e, t) {
                const n = te(t);
                let r = n.indexOf(e);
                const o = fe(e);
                if (o == null) return;
                let i, s;
                for (;
                    (i = n[r - 1]) && (s = Ce(i, o)) && s.top >= 0;) r--;
                if (i) {
                    if (N(i, t)) return;
                    je(o, i)
                }
            }
            E(Vo, "pageUp");

            function Bo(e, t) {
                const n = te(t);
                let r = n.indexOf(e);
                const o = fe(e);
                if (o == null) return;
                let i, s;
                for (;
                    (i = n[r + 1]) && (s = Ce(i, o)) && s.bottom >= 0;) r++;
                if (i) {
                    if (N(i, t)) return;
                    je(o, i)
                }
            }
            E(Bo, "pageDown");

            function Sn(e, t = !1) {
                W(e, "navigation:keyopen", {
                    modifierKey: t
                })
            }
            E(Sn, "keyOpen");

            function N(e, t) {
                return W(e, "navigation:focus") ? (Pe(t), e.classList.add("navigation-focus"), !1) : !0
            }
            E(N, "focusItem");

            function lt() {
                return document.querySelector(".js-active-navigation-container")
            }
            E(lt, "getActiveContainer");

            function te(e) {
                const t = [];
                for (const n of e.querySelectorAll(".js-navigation-item")) n instanceof HTMLElement && hn(n) && t.push(n);
                return t
            }
            E(te, "getItems");

            function Ln(e) {
                return e.getAttribute("data-navigation-scroll") || "item"
            }
            E(Ln, "getScrollStyle");

            function je(e, t, n = "smooth") {
                const r = Ce(t, e);
                !r || (r.bottom <= 0 ? t.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : r.top <= 0 && t.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }
            E(je, "scrollPageTo");

            function ut(e, t) {
                const n = st(t, e),
                    r = Ce(t, e);
                if (!(n == null || r == null))
                    if (r.bottom <= 0 && document.body) {
                        const i = (e.offsetParent != null ? e.scrollHeight : document.body.scrollHeight) - (n.bottom + r.height);
                        pn(e, {
                            top: i
                        })
                    } else r.top <= 0 && pn(e, {
                        top: n.top
                    })
            }
            E(ut, "scrollItemTo");

            function $c(...e) {
                return JSON.stringify(e, (t, n) => typeof n == "object" ? n : String(n))
            }

            function _n(e, t = {}) {
                const {
                    hash: n = $c,
                    cache: r = new Map
                } = t;
                return function(...o) {
                    const i = n.apply(this, o);
                    if (r.has(i)) return r.get(i);
                    let s = e.apply(this, o);
                    return s instanceof Promise && (s = s.catch(a => {
                        throw r.delete(i), a
                    })), r.set(i, s), s
                }
            }
            var Ic = Object.defineProperty,
                zo = (e, t) => Ic(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Tn(e) {
                const t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let n = An(t);
                if (e.name) {
                    const r = e.matches("input[type=submit]") ? "Submit" : "",
                        o = e.value || r;
                    n || (n = document.createElement("input"), n.type = "hidden", n.classList.add("is-submit-button-value"), t.prepend(n)), n.name = e.name, n.value = o
                } else n && n.remove()
            }
            zo(Tn, "persistSubmitButtonValue");

            function An(e) {
                const t = e.querySelector("input.is-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }
            zo(An, "findPersistedSubmitButtonValue");
            var qc = Object.defineProperty,
                Uo = (e, t) => qc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Me() {
                const e = document.getElementById("ajax-error-message");
                e && (e.hidden = !1)
            }
            Uo(Me, "showGlobalError");

            function ft() {
                const e = document.getElementById("ajax-error-message");
                e && (e.hidden = !0)
            }
            Uo(ft, "hideGlobalError"), w("deprecatedAjaxError", "[data-remote]", function(e) {
                const t = e.detail,
                    {
                        error: n,
                        text: r
                    } = t;
                e.currentTarget === e.target && (n === "abort" || n === "canceled" || (/<html/.test(r) ? (Me(), e.stopImmediatePropagation()) : setTimeout(function() {
                    e.defaultPrevented || Me()
                }, 0)))
            }), w("deprecatedAjaxSend", "[data-remote]", function() {
                ft()
            }), w("click", ".js-ajax-error-dismiss", function() {
                ft()
            });
            var Hc = Object.defineProperty,
                X = (e, t) => Hc(e, "name", {
                    value: t,
                    configurable: !0
                });
            w("click", ".js-remote-submit-button", async function(e) {
                const n = e.currentTarget.form;
                e.preventDefault();
                let r;
                try {
                    r = await fetch(n.action, {
                        method: n.method,
                        body: new FormData(n),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch {}
                r && !r.ok && Me()
            });

            function Cn(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: n
                }))
            }
            X(Cn, "fire");

            function kn(e, t) {
                t && (Wo(e, t), Tn(t)), Cn(e, "submit", !0) && e.submit()
            }
            X(kn, "requestSubmit");

            function Wo(e, t) {
                if (!(e instanceof HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
                if (!(t instanceof HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
                if (t.type !== "submit") throw new TypeError("The specified element is not a submit button.");
                if (!e || e !== t.form) throw new Error("The specified element is not owned by the form element.")
            }
            X(Wo, "checkButtonValidity");

            function Xo(e, t) {
                if (typeof t == "boolean")
                    if (e instanceof HTMLInputElement) e.checked = t;
                    else throw new TypeError("only checkboxes can be set to boolean value");
                else {
                    if (e.type === "checkbox") throw new TypeError("checkbox can't be set to string value");
                    e.value = t
                }
                Cn(e, "change", !1)
            }
            X(Xo, "changeValue");

            function Ko(e, t) {
                for (const n in t) {
                    const r = t[n],
                        o = e.elements.namedItem(n);
                    (o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) && (o.value = r)
                }
            }
            X(Ko, "fillFormValues");

            function Pn(e) {
                if (!(e instanceof HTMLElement)) return !1;
                const t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return t === "select" || t === "textarea" || t === "input" && n !== "submit" && n !== "reset" || e.isContentEditable
            }
            X(Pn, "isFormField");

            function xn(e) {
                return new URLSearchParams(e)
            }
            X(xn, "searchParamsFromFormData");

            function Jo(e, t) {
                const n = new URLSearchParams(e.search),
                    r = xn(t);
                for (const [o, i] of r) n.append(o, i);
                return n.toString()
            }
            X(Jo, "combineGetFormSearchParams");

            function Go(e) {
                return xn(new FormData(e)).toString()
            }
            X(Go, "serialize");
            var Rc = Object.defineProperty,
                $e = (e, t) => Rc(e, "name", {
                    value: t,
                    configurable: !0
                });
            class Yo {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            }
            $e(Yo, "NoOpStorage");

            function On(e, t = {
                throwQuotaErrorsOnSet: !1
            }, n = window) {
                let r;
                try {
                    r = n[e]
                } catch {
                    r = new Yo
                }
                const {
                    throwQuotaErrorsOnSet: o
                } = t;

                function i(c) {
                    try {
                        return r.getItem(c)
                    } catch {
                        return null
                    }
                }
                $e(i, "getItem");

                function s(c, l) {
                    try {
                        r.setItem(c, l)
                    } catch (f) {
                        if (o && f.message.toLowerCase().includes("quota")) throw f
                    }
                }
                $e(s, "setItem");

                function a(c) {
                    try {
                        r.removeItem(c)
                    } catch {}
                }
                return $e(a, "removeItem"), {
                    getItem: i,
                    setItem: s,
                    removeItem: a
                }
            }
            $e(On, "safeStorage");
            var Dc = Object.defineProperty,
                Nc = (e, t) => Dc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function jn(e) {
                var t, n;
                const r = (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="expected-hostname"]')) == null ? void 0 : n.content;
                if (!r) return !1;
                const o = r.replace(/\.$/, "").split(".").slice(-2).join("."),
                    i = e.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".");
                return o !== i
            }
            Nc(jn, "detectProxySite");
            const Mn = D("a5", function() {
                    return document.readyState === "interactive" || document.readyState === "complete" ? Promise.resolve() : new Promise(e => {
                        document.addEventListener("DOMContentLoaded", () => {
                            e()
                        })
                    })
                }()),
                $n = D("I", function() {
                    return document.readyState === "complete" ? Promise.resolve() : new Promise(e => {
                        window.addEventListener("load", e)
                    })
                }());
            var Fc = Object.defineProperty,
                dt = (e, t) => Fc(e, "name", {
                    value: t,
                    configurable: !0
                });
            let In = [];

            function ne(e, t = !1) {
                e.timestamp === void 0 && (e.timestamp = new Date().getTime()), e.loggedIn = Zo(), In.push(e), t ? Hn() : Qo()
            }
            dt(ne, "sendStats");
            let qn = null;
            async function Qo() {
                await $n, qn == null && (qn = window.requestIdleCallback(Hn))
            }
            dt(Qo, "scheduleSendStats");

            function Hn() {
                var e, t;
                if (qn = null, jn(document)) return;
                const n = (t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="browser-stats-url"]')) == null ? void 0 : t.content;
                if (!n) return;
                const r = JSON.stringify({
                    stats: In
                });
                try {
                    navigator.sendBeacon && navigator.sendBeacon(n, r)
                } catch {}
                In = []
            }
            dt(Hn, "flushStats");

            function Zo() {
                var e, t;
                return !!((t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="user-login"]')) == null ? void 0 : t.content)
            }
            dt(Zo, "isLoggedIn");
            var Vc = Object.defineProperty,
                Rn = (e, t) => Vc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Dn(e) {
                const t = [...e.querySelectorAll("meta[name=html-safe-nonce]")].map(n => n.content);
                if (t.length < 1) throw new Error("could not find html-safe-nonce on document");
                return t
            }
            Rn(Dn, "getDocumentHtmlSafeNonces");
            class Ie extends Error {
                constructor(t, n) {
                    super(`${t} for HTTP ${n.status}`);
                    this.response = n
                }
            }
            Rn(Ie, "ResponseError");

            function Nn(e, t, n = !1) {
                const r = t.headers.get("content-type") || "";
                if (!n && !r.startsWith("text/html")) throw new Ie(`expected response with text/html, but was ${r}`, t);
                if (n && !(r.startsWith("text/html") || r.startsWith("application/json"))) throw new Ie(`expected response with text/html or application/json, but was ${r}`, t);
                const o = t.headers.get("x-html-safe");
                if (o) {
                    if (!e.includes(o)) throw new Ie("response X-HTML-Safe nonce did not match", t)
                } else throw new Ie("missing X-HTML-Safe nonce", t)
            }
            Rn(Nn, "verifyResponseHtmlSafeNonce");
            var Bc = Object.defineProperty,
                zc = (e, t) => Bc(e, "name", {
                    value: t,
                    configurable: !0
                });

            function re(e, t) {
                const n = e.createElement("template");
                return n.innerHTML = t, e.importNode(n.content, !0)
            }
            zc(re, "parseHTML");
            var Uc = Object.defineProperty,
                Fn = (e, t) => Uc(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function mt(e, t, n) {
                const r = new Request(t, n);
                r.headers.append("X-Requested-With", "XMLHttpRequest");
                const o = await self.fetch(r);
                if (o.status < 200 || o.status >= 300) throw new Error(`HTTP ${o.status}${o.statusText||""}`);
                return Nn(Dn(e), o), re(e, await o.text())
            }
            Fn(mt, "fetchSafeDocumentFragment");

            function ei(e, t, n = 1e3) {
                return Fn(async function r(o) {
                    const i = new Request(e, t);
                    i.headers.append("X-Requested-With", "XMLHttpRequest");
                    const s = await self.fetch(i);
                    if (s.status < 200 || s.status >= 300) throw new Error(`HTTP ${s.status}${s.statusText||""}`);
                    if (s.status === 200) return s;
                    if (s.status === 202) return await new Promise(a => setTimeout(a, o)), r(o * 1.5);
                    throw new Error(`Unexpected ${s.status} response status from poll endpoint`)
                }, "poll")(n)
            }
            Fn(ei, "fetchPoll");
            var Wc = Object.defineProperty,
                de = (e, t) => Wc(e, "name", {
                    value: t,
                    configurable: !0
                });
            let ti = !1;
            const ni = new ko;

            function ri(e) {
                const t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of ni.matches(t)) n.data.call(null, t)
            }
            de(ri, "handleFocus");

            function me(e, t) {
                ti || (ti = !0, document.addEventListener("focus", ri, !0)), ni.add(e, t), document.activeElement instanceof HTMLElement && document.activeElement.matches(e) && t(document.activeElement)
            }
            de(me, "onFocus");

            function Vn(e, t, n) {
                function r(o) {
                    const i = o.currentTarget;
                    !i || (i.removeEventListener(e, n), i.removeEventListener("blur", r))
                }
                de(r, "blurHandler"), me(t, function(o) {
                    o.addEventListener(e, n), o.addEventListener("blur", r)
                })
            }
            de(Vn, "onKey");

            function pt(e, t) {
                function n(r) {
                    const {
                        currentTarget: o
                    } = r;
                    !o || (o.removeEventListener("input", t), o.removeEventListener("blur", n))
                }
                de(n, "blurHandler"), me(e, function(r) {
                    r.addEventListener("input", t), r.addEventListener("blur", n)
                })
            }
            de(pt, "onInput");
            var Xc = Object.defineProperty,
                pe = (e, t) => Xc(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Kc = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]", "input[data-required-value]", "textarea[data-required-value]"].join(",");

            function Bn(e) {
                const t = e.getAttribute("data-required-value"),
                    n = e.getAttribute("data-required-value-prefix");
                if (e.value === t) e.setCustomValidity("");
                else {
                    let r = t;
                    n && (r = n + r), e.setCustomValidity(r)
                }
            }
            pe(Bn, "checkValidityForRequiredValueField"), pt("[data-required-value]", function(e) {
                const t = e.currentTarget;
                Bn(t)
            }), w("change", "[data-required-value]", function(e) {
                const t = e.currentTarget;
                Bn(t), G(t.form)
            }), pt("[data-required-trimmed]", function(e) {
                const t = e.currentTarget;
                t.value.trim() === "" ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity("")
            }), w("change", "[data-required-trimmed]", function(e) {
                const t = e.currentTarget;
                t.value.trim() === "" ? t.setCustomValidity(t.getAttribute("data-required-trimmed")) : t.setCustomValidity(""), G(t.form)
            }), me(Kc, e => {
                let t = e.checkValidity();

                function n() {
                    const r = e.checkValidity();
                    r !== t && e.form && G(e.form), t = r
                }
                pe(n, "inputHandler"), e.addEventListener("input", n), e.addEventListener("blur", pe(function r() {
                    e.removeEventListener("input", n), e.removeEventListener("blur", r)
                }, "blurHandler"))
            });
            const oi = new WeakMap;

            function ii(e) {
                oi.get(e) || (e.addEventListener("change", () => G(e)), oi.set(e, !0))
            }
            pe(ii, "installHandlers");

            function G(e) {
                const t = e.checkValidity();
                for (const n of e.querySelectorAll("button[data-disable-invalid]")) n.disabled = !t
            }
            pe(G, "validate"), x("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form;
                    t && (ii(t), e.disabled = !t.checkValidity())
                }
            }), x("input[data-required-change], textarea[data-required-change]", function(e) {
                const t = e,
                    n = t.type === "radio" && t.form ? t.form.elements.namedItem(t.name).value : null;

                function r(o) {
                    const i = t.form;
                    if (o && t.type === "radio" && i && n)
                        for (const s of i.elements.namedItem(t.name)) s instanceof HTMLInputElement && s.setCustomValidity(t.value === n ? "unchanged" : "");
                    else t.setCustomValidity(t.value === (n || t.defaultValue) ? "unchanged" : "")
                }
                pe(r, "customValidity"), t.addEventListener("input", r), t.addEventListener("change", r), r(), t.form && G(t.form)
            }), document.addEventListener("reset", function(e) {
                if (e.target instanceof HTMLFormElement) {
                    const t = e.target;
                    setTimeout(() => G(t))
                }
            });
            var Jc = Object.defineProperty,
                Gc = (e, t) => Jc(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function ht(e) {
                const n = document.querySelector("#site-details-dialog").content.cloneNode(!0),
                    r = n.querySelector("details"),
                    o = r.querySelector("details-dialog"),
                    i = r.querySelector(".js-details-dialog-spinner");
                e.detailsClass && r.classList.add(...e.detailsClass.split(" ")), e.dialogClass && o.classList.add(...e.dialogClass.split(" ")), e.label ? o.setAttribute("aria-label", e.label) : e.labelledBy && o.setAttribute("aria-labelledby", e.labelledBy), document.body.append(n);
                const s = await e.content;
                return i.remove(), o.prepend(s), r.addEventListener("toggle", () => {
                    r.hasAttribute("open") || (W(o, "dialog:remove"), r.remove())
                }), o
            }
            Gc(ht, "dialog");
            const si = "data-close-dialog",
                ai = `[${si}]`;

            function ci(e) {
                let t = Array.from(e.querySelectorAll("[autofocus]")).filter(ui)[0];
                t || (t = e, e.setAttribute("tabindex", "-1")), t.focus()
            }

            function li(e) {
                const t = e.currentTarget;
                t instanceof Element && (e.key === "Escape" || e.key === "Esc" ? (zn(t, !1), e.stopPropagation()) : e.key === "Tab" && Qc(e))
            }

            function ui(e) {
                return e.tabIndex >= 0 && !e.disabled && Yc(e)
            }

            function Yc(e) {
                return !e.hidden && (!e.type || e.type !== "hidden") && (e.offsetWidth > 0 || e.offsetHeight > 0)
            }

            function Qc(e) {
                if (!(e.currentTarget instanceof Element)) return;
                const t = e.currentTarget.querySelector("details-dialog");
                if (!t) return;
                e.preventDefault();
                const n = Array.from(t.querySelectorAll("*")).filter(ui);
                if (n.length === 0) return;
                const r = e.shiftKey ? -1 : 1,
                    o = t.getRootNode(),
                    i = t.contains(o.activeElement) ? o.activeElement : null;
                let s = r === -1 ? -1 : 0;
                if (i instanceof HTMLElement) {
                    const a = n.indexOf(i);
                    a !== -1 && (s = a + r)
                }
                s < 0 ? s = n.length - 1 : s = s % n.length, n[s].focus()
            }

            function fi(e) {
                const t = e.querySelector("details-dialog");
                return t instanceof he ? t.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                })) : !0
            }

            function di(e) {
                if (!(e.currentTarget instanceof Element)) return;
                const t = e.currentTarget.closest("details");
                !t || !t.hasAttribute("open") || fi(t) || (e.preventDefault(), e.stopPropagation())
            }

            function mi(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-dialog");
                if (n instanceof he)
                    if (t.hasAttribute("open")) {
                        const r = "getRootNode" in n ? n.getRootNode() : document;
                        r.activeElement instanceof HTMLElement && oe.set(n, {
                            details: t,
                            activeElement: r.activeElement
                        }), ci(n), t.addEventListener("keydown", li)
                    } else {
                        for (const o of n.querySelectorAll("form")) o.reset();
                        const r = Zc(t, n);
                        r && r.focus(), t.removeEventListener("keydown", li)
                    }
            }

            function Zc(e, t) {
                const n = oe.get(t);
                return n && n.activeElement instanceof HTMLElement ? n.activeElement : e.querySelector("summary")
            }

            function zn(e, t) {
                t !== e.hasAttribute("open") && (t ? e.setAttribute("open", "") : fi(e) && e.removeAttribute("open"))
            }

            function gt(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-dialog");
                if (!(n instanceof he)) return;
                const r = n.querySelector("include-fragment:not([src])");
                if (!r) return;
                const o = n.src;
                o !== null && (r.addEventListener("loadend", () => {
                    t.hasAttribute("open") && ci(n)
                }), r.setAttribute("src", o), Un(t))
            }

            function pi(e, t, n) {
                Un(e), t && e.addEventListener("toggle", gt, {
                    once: !0
                }), t && n && e.addEventListener("mouseover", gt, {
                    once: !0
                })
            }

            function Un(e) {
                e.removeEventListener("toggle", gt), e.removeEventListener("mouseover", gt)
            }
            const oe = new WeakMap;
            class he extends HTMLElement {
                static get CLOSE_ATTR() {
                    return si
                }
                static get CLOSE_SELECTOR() {
                    return ai
                }
                constructor() {
                    super();
                    oe.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", function({
                        target: t
                    }) {
                        if (!(t instanceof Element)) return;
                        const n = t.closest("details");
                        n && t.closest(ai) && zn(n, !1)
                    })
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    this.setAttribute("src", t || "")
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = oe.get(this);
                    if (!t) return;
                    const n = this.parentElement;
                    if (!n) return;
                    const r = n.querySelector("summary");
                    r && (r.hasAttribute("role") || r.setAttribute("role", "button"), r.addEventListener("click", di, {
                        capture: !0
                    })), n.addEventListener("toggle", mi), t.details = n, pi(n, this.src, this.preload)
                }
                disconnectedCallback() {
                    const t = oe.get(this);
                    if (!t) return;
                    const {
                        details: n
                    } = t;
                    if (!n) return;
                    n.removeEventListener("toggle", mi), Un(n);
                    const r = n.querySelector("summary");
                    r && r.removeEventListener("click", di, {
                        capture: !0
                    }), t.details = null
                }
                toggle(t) {
                    const n = oe.get(this);
                    if (!n) return;
                    const {
                        details: r
                    } = n;
                    !r || zn(r, t)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const t = oe.get(this);
                    if (!t) return;
                    const {
                        details: n
                    } = t;
                    !n || pi(n, this.src, this.preload)
                }
            }
            window.customElements.get("details-dialog") || (window.DetailsDialogElement = he, window.customElements.define("details-dialog", he));
            var el = Object.defineProperty,
                K = (e, t) => el(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Wn(e, t = !1) {
                return bt(e) || bi(e, t) || wi(e) || Ei(e)
            }
            K(Wn, "hasInteractions");

            function bt(e) {
                for (const t of e.querySelectorAll("input, textarea"))
                    if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && hi(t)) return !0;
                return !1
            }
            K(bt, "hasDirtyFields");

            function hi(e) {
                if (e instanceof HTMLInputElement && (e.type === "checkbox" || e.type === "radio")) {
                    if (e.checked !== e.defaultChecked) return !0
                } else if (e.value !== e.defaultValue) return !0;
                return !1
            }
            K(hi, "formFieldValueChanged");
            let vt;
            async function tl(e, t) {
                vt = e;
                try {
                    await t()
                } finally {
                    vt = null
                }
            }
            K(tl, "withActiveElement");

            function gi(e) {
                return vt instanceof Element ? vt : e && e.ownerDocument && e.ownerDocument.activeElement ? e.ownerDocument.activeElement : null
            }
            K(gi, "getActiveElement");
            let ge;
            document.addEventListener("mouseup", function(e) {
                ge = e.target
            });

            function bi(e, t) {
                const n = gi(e);
                return n === null || t && n === e ? !1 : n === e && Pn(n) || e.contains(n) && !yi(n) ? !0 : ge instanceof Element && e.contains(ge) && !!ge.closest("details[open] > summary")
            }
            K(bi, "hasFocus");
            const vi = "a[href], button";

            function yi(e) {
                var t;
                if (e instanceof he) return !0;
                const n = e instanceof HTMLAnchorElement || e instanceof HTMLButtonElement,
                    r = (t = e.parentElement) == null ? void 0 : t.classList.contains("task-list-item");
                if (n && r) return !0;
                if (!(ge instanceof Element)) return !1;
                const o = e.closest(vi);
                if (!o) return !1;
                const i = ge.closest(vi);
                return o === i
            }
            K(yi, "activeElementIsSafe");

            function wi(e) {
                return e.matches(":active:enabled")
            }
            K(wi, "hasMousedown");

            function Ei(e) {
                return !!(e.closest(".is-dirty") || e.querySelector(".is-dirty"))
            }
            K(Ei, "markedAsDirty");

            function Si(e, t) {
                return Xn(nl(e), t)
            }

            function Xn(e, t) {
                var n = e;
                if (!n) return Promise.resolve(t());
                var r = n.ownerDocument.documentElement;

                function o(a) {
                    for (var c = []; a;) {
                        var l = a.getBoundingClientRect(),
                            f = l.top,
                            d = l.left;
                        c.push({
                            element: a,
                            top: f,
                            left: d
                        }), a = a.parentElement
                    }
                    return c
                }

                function i(a) {
                    for (var c = 0; c < a.length; c++) {
                        var l = a[c];
                        if (r.contains(l.element)) return l
                    }
                }
                var s = o(n);
                return Promise.resolve(t()).then(function(a) {
                    var c = i(s);
                    if (c) {
                        n = c.element;
                        var l = c.top,
                            f = c.left,
                            d = n.getBoundingClientRect(),
                            u = d.top,
                            m = d.left;
                        rl(n, m - f, u - l)
                    }
                    return a
                })
            }

            function nl(e) {
                if (e.activeElement !== e.body) return e.activeElement;
                var t = e.querySelectorAll(":hover"),
                    n = t.length;
                if (n) return t[n - 1]
            }

            function rl(e, t, n) {
                var r = e.ownerDocument,
                    o = r.defaultView;

                function i(u) {
                    return u.offsetParent ? {
                        top: u.scrollTop,
                        left: u.scrollLeft
                    } : {
                        top: o.pageYOffset,
                        left: o.pageXOffset
                    }
                }

                function s(u, m, h) {
                    if (m === 0 && h === 0) return [0, 0];
                    var y = i(u),
                        $ = y.top + h,
                        p = y.left + m;
                    u === r || u === o || u === r.documentElement || u === r.body ? r.defaultView.scrollTo(p, $) : (u.scrollTop = $, u.scrollLeft = p);
                    var S = i(u);
                    return [S.left - y.left, S.top - y.top]
                }

                function a(u) {
                    var m = u;
                    if (!(!m.offsetParent || m === r.body)) {
                        for (; m !== r.body;) {
                            if (m.parentElement) m = m.parentElement;
                            else return;
                            var h = o.getComputedStyle(m),
                                y = h.position,
                                $ = h.overflowY,
                                p = h.overflowX;
                            if (y === "fixed" || $ === "auto" || p === "auto" || $ === "scroll" || p === "scroll") break
                        }
                        return m
                    }
                }
                for (var c = a(e), l = 0, f = 0; c;) {
                    var d = s(c, t - l, n - f);
                    if (l += d[0], f += d[1], l === t && f === n) break;
                    c = a(c)
                }
            }
            var ol = Object.defineProperty,
                Kn = (e, t) => ol(e, "name", {
                    value: t,
                    configurable: !0
                });
            const yt = new WeakMap,
                Li = D("aq", {});
            async function _i(e) {
                if (yt.get(e)) return;
                const t = e.hasAttribute("data-retain-focus"),
                    n = e.getAttribute("data-url");
                if (!n) throw new Error("could not get url");
                const r = new AbortController;
                yt.set(e, r);
                try {
                    const o = await fetch(n, {
                        signal: r.signal,
                        headers: {
                            Accept: "text/html",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!o.ok) return;
                    const i = await o.text();
                    if (Wn(e, t)) {
                        console.warn("Failed to update content with interactions", e);
                        return
                    }
                    return Li[n] = i, Jn(e, i, t)
                } catch {} finally {
                    yt.delete(e)
                }
            }
            Kn(_i, "updateContent");
            async function Ti(e, t, n = !1) {
                const r = yt.get(e);
                r == null || r.abort();
                const o = e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                return !n && o && o === e && (Li[o.getAttribute("data-url") || ""] = t), Jn(e, t)
            }
            Kn(Ti, "replaceContent");

            function Jn(e, t, n = !1) {
                return Si(document, () => {
                    const r = re(document, t.trim()),
                        o = n && e.ownerDocument && e === e.ownerDocument.activeElement ? r.querySelector("*") : null,
                        i = Array.from(e.querySelectorAll("details[open][id]")).map(s => s.id);
                    e.tagName === "DETAILS" && e.id && e.hasAttribute("open") && i.push(e.id);
                    for (const s of e.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const a = s.getAttribute("data-updatable-content-scroll-position-id") || "";
                        Ai.set(a, s.scrollTop)
                    }
                    for (const s of i) {
                        const a = r.querySelector(`#${s}`);
                        a && a.setAttribute("open", "")
                    }
                    e.replaceWith(r), o instanceof HTMLElement && o.focus()
                })
            }
            Kn(Jn, "replace");
            const Ai = new Map;
            x(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(e) {
                    const t = e.getAttribute("data-updatable-content-scroll-position-id");
                    if (!t) return;
                    const n = Ai.get(t);
                    n != null && (e.scrollTop = n)
                }
            });
            var be = -1 / 0,
                il = 1 / 0,
                sl = -.005,
                al = -.005,
                cl = -.01,
                Ci = 1,
                ll = .9,
                ul = .8,
                fl = .7,
                dl = .6;

            function ml(e) {
                return e.toLowerCase() === e
            }

            function pl(e) {
                return e.toUpperCase() === e
            }

            function hl(e) {
                for (var t = e.length, n = new Array(t), r = "/", o = 0; o < t; o++) {
                    var i = e[o];
                    r === "/" ? n[o] = ll : r === "-" || r === "_" || r === " " ? n[o] = ul : r === "." ? n[o] = dl : ml(r) && pl(i) ? n[o] = fl : n[o] = 0, r = i
                }
                return n
            }

            function ki(e, t, n, r) {
                for (var o = e.length, i = t.length, s = e.toLowerCase(), a = t.toLowerCase(), c = hl(t), l = 0; l < o; l++) {
                    n[l] = new Array(i), r[l] = new Array(i);
                    for (var f = be, d = l === o - 1 ? al : cl, u = 0; u < i; u++)
                        if (s[l] === a[u]) {
                            var m = be;
                            l ? u && (m = Math.max(r[l - 1][u - 1] + c[u], n[l - 1][u - 1] + Ci)) : m = u * sl + c[u], n[l][u] = m, r[l][u] = f = Math.max(m, f + d)
                        } else n[l][u] = be, r[l][u] = f = f + d
                }
            }

            function Pi(e, t) {
                var n = e.length,
                    r = t.length;
                if (!n || !r) return be;
                if (n === r) return il;
                if (r > 1024) return be;
                var o = new Array(n),
                    i = new Array(n);
                return ki(e, t, o, i), i[n - 1][r - 1]
            }

            function xi(e, t) {
                var n = e.length,
                    r = t.length,
                    o = new Array(n);
                if (!n || !r) return o;
                if (n === r) {
                    for (var i = 0; i < n; i++) o[i] = i;
                    return o
                }
                if (r > 1024) return o;
                var s = new Array(n),
                    a = new Array(n);
                ki(e, t, s, a);
                for (var c = !1, i = n - 1, l = r - 1; i >= 0; i--)
                    for (; l >= 0; l--)
                        if (s[i][l] !== be && (c || s[i][l] === a[i][l])) {
                            c = i && l && a[i][l] === s[i - 1][l - 1] + Ci, o[i] = l--;
                            break
                        }
                return o
            }

            function wt(e, t) {
                e = e.toLowerCase(), t = t.toLowerCase();
                for (var n = e.length, r = 0, o = 0; r < n; r += 1)
                    if (o = t.indexOf(e[r], o) + 1, o === 0) return !1;
                return !0
            }
            var gl = Object.defineProperty,
                qe = (e, t) => gl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Oi = qe((e, t, n) => {
                    if (!wt(e, t)) return -1 / 0;
                    const r = Pi(e, t);
                    return r < n ? -1 / 0 : r
                }, "getScore"),
                bl = qe((e, t, n) => {
                    e.innerHTML = "";
                    let r = 0;
                    for (const o of xi(t, n)) {
                        n.slice(r, o) !== "" && e.appendChild(document.createTextNode(n.slice(r, o))), r = o + 1;
                        const s = document.createElement("mark");
                        s.textContent = n[o], e.appendChild(s)
                    }
                    e.appendChild(document.createTextNode(n.slice(r)))
                }, "highlightElement"),
                ji = new WeakMap,
                ve = new WeakMap,
                Et = new WeakMap,
                Gn = qe(e => {
                    if (!Et.has(e) && e instanceof HTMLElement) {
                        const t = (e.getAttribute("data-value") || e.textContent || "").trim();
                        return Et.set(e, t), t
                    }
                    return Et.get(e) || ""
                }, "getTextCache");
            class St extends HTMLElement {
                connectedCallback() {
                    const t = this.querySelector("ul");
                    if (!t) return;
                    const n = new Set(t.querySelectorAll("li")),
                        r = this.querySelector("input");
                    r instanceof HTMLInputElement && r.addEventListener("input", () => {
                        this.value = r.value
                    });
                    const o = new MutationObserver(s => {
                        let a = !1;
                        for (const c of s)
                            if (c.type === "childList" && c.addedNodes.length) {
                                for (const l of c.addedNodes)
                                    if (l instanceof HTMLLIElement && !n.has(l)) {
                                        const f = Gn(l);
                                        a = a || wt(this.value, f), n.add(l)
                                    }
                            }
                        a && this.sort()
                    });
                    o.observe(t, {
                        childList: !0
                    });
                    const i = {
                        handler: o,
                        items: n,
                        lazyItems: new Map,
                        timer: null
                    };
                    ve.set(this, i)
                }
                disconnectedCallback() {
                    const t = ve.get(this);
                    t && (t.handler.disconnect(), ve.delete(this))
                }
                addLazyItems(t, n) {
                    const r = ve.get(this);
                    if (!r) return;
                    const {
                        lazyItems: o
                    } = r, {
                        value: i
                    } = this;
                    let s = !1;
                    for (const a of t) o.set(a, n), s = s || Boolean(i) && wt(i, a);
                    s && this.sort()
                }
                sort() {
                    const t = ji.get(this);
                    t && (t.aborted = !0);
                    const n = {
                        aborted: !1
                    };
                    ji.set(this, n);
                    const {
                        minScore: r,
                        markSelector: o,
                        maxMatches: i,
                        value: s
                    } = this, a = ve.get(this);
                    if (!a || !this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                            cancelable: !0,
                            detail: s
                        }))) return;
                    const {
                        items: c,
                        lazyItems: l
                    } = a, f = this.hasAttribute("mark-selector"), d = this.querySelector("ul");
                    if (!d) return;
                    const u = [];
                    if (s) {
                        for (const m of c) {
                            const h = Gn(m),
                                y = Oi(s, h, r);
                            y !== -1 / 0 && u.push({
                                item: m,
                                score: y
                            })
                        }
                        for (const [m, h] of l) {
                            const y = Oi(s, m, r);
                            y !== -1 / 0 && u.push({
                                text: m,
                                render: h,
                                score: y
                            })
                        }
                        u.sort((m, h) => h.score - m.score).splice(i)
                    } else {
                        let m = u.length;
                        for (const h of c) {
                            if (m >= i) break;
                            u.push({
                                item: h,
                                score: 1
                            }), m += 1
                        }
                        for (const [h, y] of l) {
                            if (m >= i) break;
                            u.push({
                                text: h,
                                render: y,
                                score: 1
                            }), m += 1
                        }
                    }
                    requestAnimationFrame(() => {
                        if (n.aborted) return;
                        const m = d.querySelector('input[type="radio"]:checked');
                        d.innerHTML = "";
                        let h = 0;
                        const y = qe(() => {
                            if (n.aborted) return;
                            const $ = Math.min(u.length, h + 100),
                                p = document.createDocumentFragment();
                            for (let k = h; k < $; k += 1) {
                                const I = u[k];
                                let q = null;
                                if ("render" in I && "text" in I) {
                                    const {
                                        render: ee,
                                        text: le
                                    } = I;
                                    q = ee(le), c.add(q), Et.set(q, le), l.delete(le)
                                } else "item" in I && (q = I.item);
                                q instanceof HTMLElement && (f && bl(o && q.querySelector(o) || q, f ? s : "", Gn(q)), p.appendChild(q))
                            }
                            h = $;
                            let S = !1;
                            if (m instanceof HTMLInputElement)
                                for (const k of p.querySelectorAll('input[type="radio"]:checked')) k instanceof HTMLInputElement && k.value !== m.value && (k.checked = !1, S = !0);
                            if (d.appendChild(p), m && S && m.dispatchEvent(new Event("change", {
                                    bubbles: !0
                                })), $ < u.length) requestAnimationFrame(y);
                            else {
                                d.hidden = u.length === 0;
                                const k = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                k && (k.hidden = u.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                    detail: u.length
                                }))
                            }
                        }, "nextBatch");
                        y()
                    })
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get markSelector() {
                    return this.getAttribute("mark-selector") || ""
                }
                set markSelector(t) {
                    t ? this.setAttribute("mark-selector", t) : this.removeAttribute("mark-selector")
                }
                get minScore() {
                    return Number(this.getAttribute("min-score") || 0)
                }
                set minScore(t) {
                    Number.isNaN(t) || this.setAttribute("min-score", String(t))
                }
                get maxMatches() {
                    return Number(this.getAttribute("max-matches") || 1 / 0)
                }
                set maxMatches(t) {
                    Number.isNaN(t) || this.setAttribute("max-matches", String(t))
                }
                static get observedAttributes() {
                    return ["value", "mark-selector", "min-score", "max-matches"]
                }
                attributeChangedCallback(t, n, r) {
                    if (n === r) return;
                    const o = ve.get(this);
                    !o || (o.timer && window.clearTimeout(o.timer), o.timer = window.setTimeout(() => this.sort(), 100))
                }
            }
            D("Z", St), qe(St, "FuzzyListElement"), window.customElements.get("fuzzy-list") || (window.FuzzyListElement = St, window.customElements.define("fuzzy-list", St));
            var vl = Object.defineProperty,
                Mi = (e, t) => vl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Yn() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }
            Mi(Yn, "getPlatform");

            function $i(e) {
                const t = (e.getAttribute("data-platforms") || "").split(","),
                    n = Yn();
                return Boolean(n && t.includes(n))
            }
            Mi($i, "runningOnPlatform"), x(".js-remove-unless-platform", function(e) {
                $i(e) || e.remove()
            });

            function yl() {
                let e;
                try {
                    e = window.top.document.referrer
                } catch {
                    if (window.parent) try {
                        e = window.parent.document.referrer
                    } catch {}
                }
                return e === "" && (e = document.referrer), e
            }

            function wl() {
                try {
                    return `${screen.width}x${screen.height}`
                } catch {
                    return "unknown"
                }
            }

            function El() {
                let e = 0,
                    t = 0;
                try {
                    return typeof window.innerWidth == "number" ? (t = window.innerWidth, e = window.innerHeight) : document.documentElement != null && document.documentElement.clientWidth != null ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : document.body != null && document.body.clientWidth != null && (t = document.body.clientWidth, e = document.body.clientHeight), `${t}x${e}`
                } catch {
                    return "unknown"
                }
            }

            function Sl() {
                return {
                    referrer: yl(),
                    user_agent: navigator.userAgent,
                    screen_resolution: wl(),
                    browser_resolution: El(),
                    pixel_ratio: window.devicePixelRatio,
                    timestamp: Date.now(),
                    tz_seconds: new Date().getTimezoneOffset() * -60
                }
            }
            let Qn;

            function Ii() {
                return `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(Date.now()/1e3)}`
            }

            function Ll(e) {
                const t = `GH1.1.${e}`,
                    n = Date.now(),
                    r = new Date(n + 1 * 365 * 86400 * 1e3).toUTCString();
                let {
                    domain: o
                } = document;
                o.endsWith(".github.com") && (o = "github.com"), document.cookie = `_octo=${t}; expires=${r}; path=/; domain=${o}; secure; samesite=lax`
            }

            function _l() {
                let e;
                const n = document.cookie.match(/_octo=([^;]+)/g);
                if (!n) return;
                let r = [0, 0];
                for (const o of n) {
                    const [, i] = o.split("="), [, s, ...a] = i.split("."), c = s.split("-").map(Number);
                    c > r && (r = c, e = a.join("."))
                }
                return e
            }

            function qi() {
                try {
                    const e = _l();
                    if (e) return e;
                    const t = Ii();
                    return Ll(t), t
                } catch {
                    return Qn || (Qn = Ii()), Qn
                }
            }
            class Tl {
                constructor(t) {
                    this.options = t
                }
                get collectorUrl() {
                    return this.options.collectorUrl
                }
                get clientId() {
                    return this.options.clientId ? this.options.clientId : qi()
                }
                createEvent(t) {
                    return {
                        page: location.href,
                        title: document.title,
                        context: { ...this.options.baseContext,
                            ...t
                        }
                    }
                }
                sendPageView(t) {
                    const n = this.createEvent(t);
                    this.send({
                        page_views: [n]
                    })
                }
                sendEvent(t, n) {
                    const r = { ...this.createEvent(n),
                        type: t
                    };
                    this.send({
                        events: [r]
                    })
                }
                send({
                    page_views: t,
                    events: n
                }) {
                    const r = {
                            client_id: this.clientId,
                            page_views: t,
                            events: n,
                            request_context: Sl()
                        },
                        o = JSON.stringify(r);
                    try {
                        if (navigator.sendBeacon) {
                            navigator.sendBeacon(this.collectorUrl, o);
                            return
                        }
                    } catch {}
                    fetch(this.collectorUrl, {
                        method: "POST",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: o,
                        keepalive: !1
                    })
                }
            }

            function Al(e = "ha") {
                let t;
                const n = {},
                    r = document.head.querySelectorAll(`meta[name^="${e}-"]`);
                for (const o of Array.from(r)) {
                    const {
                        name: i,
                        content: s
                    } = o, a = i.replace(`${e}-`, "").replace(/-/g, "_");
                    a === "url" ? t = s : n[a] = s
                }
                if (!t) throw new Error(`AnalyticsClient ${e}-url meta tag not found`);
                return {
                    collectorUrl: t,
                    ...Object.keys(n).length > 0 ? {
                        baseContext: n
                    } : {}
                }
            }
            var Cl = Object.defineProperty,
                Hi = (e, t) => Cl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Ri = "dimension_";
            let He;
            try {
                const e = Al("octolytics");
                if (e.baseContext) {
                    delete e.baseContext.app_id, delete e.baseContext.event_url, delete e.baseContext.host;
                    for (const n in e.baseContext) n.startsWith(Ri) && (e.baseContext[n.replace(Ri, "")] = e.baseContext[n], delete e.baseContext[n])
                }
                const t = document.querySelector("meta[name=visitor-payload]");
                if (t) {
                    const n = JSON.parse(atob(t.content)),
                        r = e.baseContext || {};
                    Object.assign(r, n), e.baseContext = r
                }
                He = new Tl(e)
            } catch {}

            function Di(e) {
                He == null || He.sendPageView(e)
            }
            Hi(Di, "sendPageView");

            function Ni(e, t) {
                var n, r;
                const o = (r = (n = document.head) == null ? void 0 : n.querySelector('meta[name="current-catalog-service"]')) == null ? void 0 : r.content,
                    i = o ? {
                        service: o
                    } : {};
                for (const [s, a] of Object.entries(t)) a != null && (i[s] = `${a}`);
                He == null || He.sendEvent(e || "unknown", i)
            }
            Hi(Ni, "sendEvent");
            var kl = Object.defineProperty,
                Lt = (e, t) => kl(e, "name", {
                    value: t,
                    configurable: !0
                });
            let ie = null;
            (async function() {
                await Mn, Vi()
            })();

            function Fi(e) {
                Zn(Bi(e))
            }
            Lt(Fi, "announceFromElement");

            function Zn(e) {
                !ie || (ie.textContent = "", ie.textContent = e)
            }
            Lt(Zn, "announce");

            function Vi() {
                ie = document.createElement("div"), ie.setAttribute("aria-live", "polite"), ie.classList.add("sr-only"), document.body.append(ie)
            }
            Lt(Vi, "createNoticeContainer");

            function Bi(e) {
                return (e.getAttribute("aria-label") || e.innerText || "").trim()
            }
            Lt(Bi, "getTextContent");
            var Pl = Object.defineProperty,
                R = (e, t) => Pl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Re = [];
            let _t = 0,
                Tt;

            function At() {
                return Tt
            }
            R(At, "getState");

            function Ct() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch {
                    return 0
                }
            }
            R(Ct, "safeGetHistory");

            function zi() {
                const e = {
                    _id: new Date().getTime()
                };
                return ye(e), e
            }
            R(zi, "initializeState");

            function kt() {
                return Ct() - 1 + _t
            }
            R(kt, "position");

            function ye(e) {
                Tt = e;
                const t = location.href;
                Re[kt()] = {
                    url: t,
                    state: Tt
                }, Re.length = Ct(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }
            R(ye, "setState");

            function er() {
                return new Date().getTime()
            }
            R(er, "uniqueId");

            function tr(e, t, n) {
                _t = 0;
                const r = Object.assign({}, {
                    _id: er()
                }, e);
                history.pushState(r, t, n), ye(r)
            }
            R(tr, "pushState");

            function De(e, t, n) {
                const r = Object.assign({}, {
                    _id: At()._id
                }, e);
                history.replaceState(r, t, n), ye(r)
            }
            R(De, "replaceState");

            function Ui() {
                const e = Re[kt() - 1];
                if (e) return e.url
            }
            R(Ui, "getBackURL");

            function Wi() {
                const e = Re[kt() + 1];
                if (e) return e.url
            }
            R(Wi, "getForwardURL"), Tt = zi(), window.addEventListener("popstate", R(function(t) {
                const n = t.state;
                if (!n || !n._id) return;
                n._id < (At()._id || NaN) ? _t-- : _t++, ye(n)
            }, "onPopstate"), !0), window.addEventListener("hashchange", R(function() {
                if (Ct() > Re.length) {
                    const t = {
                        _id: er()
                    };
                    history.replaceState(t, "", location.href), ye(t)
                }
            }, "onHashchange"), !0);
            var xl = Object.defineProperty,
                we = (e, t) => xl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Xi() {
                return Promise.resolve()
            }
            we(Xi, "microtask");

            function Ki() {
                return new Promise(window.requestAnimationFrame)
            }
            we(Ki, "animationFrame");
            async function Ol(e, t) {
                let n;
                const r = new Promise((o, i) => {
                    n = self.setTimeout(() => i(new Error("timeout")), e)
                });
                if (!t) return r;
                try {
                    await Promise.race([r, nr(t)])
                } catch (o) {
                    throw self.clearTimeout(n), o
                }
            }
            we(Ol, "timeout");
            async function Ji(e, t) {
                let n;
                const r = new Promise(o => {
                    n = self.setTimeout(o, e)
                });
                if (!t) return r;
                try {
                    await Promise.race([r, nr(t)])
                } catch (o) {
                    throw self.clearTimeout(n), o
                }
            }
            we(Ji, "wait");

            function nr(e) {
                return new Promise((t, n) => {
                    const r = new Error("aborted");
                    r.name = "AbortError", e.aborted ? n(r) : e.addEventListener("abort", () => n(r))
                })
            }
            we(nr, "whenAborted");

            function Gi(e) {
                const t = [];
                return function(n) {
                    t.push(n), t.length === 1 && queueMicrotask(() => {
                        const r = [...t];
                        t.length = 0, e(r)
                    })
                }
            }
            we(Gi, "taskQueue");
            var jl = Object.defineProperty,
                Yi = (e, t) => jl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const rr = {},
                Ne = {};
            (async () => (await Mn, rr[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]")), Ne[document.location.pathname] = Array.from(document.querySelectorAll("[data-pjax-replace]"))))(), document.addEventListener("pjax:beforeReplace", function(e) {
                const t = e.detail.contents || [],
                    n = e.target;
                for (let r = 0; r < t.length; r++) {
                    const o = t[r];
                    o instanceof Element && (o.id === "pjax-head" ? (rr[document.location.pathname] = Array.from(o.children), t[r] = null) : o.hasAttribute("data-pjax-replace") && (Ne[document.location.pathname] || (Ne[document.location.pathname] = []), Ne[document.location.pathname].push(o), n.querySelector(`#${o.id}`) || (t[r] = null)))
                }
            });

            function or() {
                const e = Ne[document.location.pathname];
                if (!!e)
                    for (const t of e) {
                        const n = document.querySelector(`#${t.id}`);
                        n && n.replaceWith(t)
                    }
            }
            Yi(or, "replaceCachedElements");

            function ir() {
                const e = rr[document.location.pathname];
                if (!e) return;
                const t = document.head;
                for (const n of document.querySelectorAll("head [data-pjax-transient]")) n.remove();
                for (const n of e) n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && t.append(n) : (n.setAttribute("data-pjax-transient", ""), t.append(n))
            }
            Yi(ir, "replaceTransientTags");
            var Ml = Object.defineProperty,
                sr = (e, t) => Ml(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Pt(e, t = location.hash) {
                return xt(e, ar(t))
            }
            sr(Pt, "findFragmentTarget");

            function xt(e, t) {
                return t === "" ? null : e.getElementById(t) || e.getElementsByName(t)[0]
            }
            sr(xt, "findElementByFragmentName");

            function ar(e) {
                try {
                    return decodeURIComponent(e.slice(1))
                } catch {
                    return ""
                }
            }
            sr(ar, "decodeFragmentValue");
            var $l = Object.defineProperty,
                Qi = (e, t) => $l(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Il = _n(Zi);

            function Zi() {
                var e, t;
                return (((t = (e = document.head) == null ? void 0 : e.querySelector('meta[name="enabled-features"]')) == null ? void 0 : t.content) || "").split(",")
            }
            Qi(Zi, "enabledFeatures");
            const es = D("a8", _n(ts));

            function ts(e) {
                return Il().indexOf(e) !== -1
            }
            Qi(ts, "isEnabled");
            var ql = Object.defineProperty,
                L = (e, t) => ql(e, "name", {
                    value: t,
                    configurable: !0
                });
            const ns = 20;
            let O, Fe = null;

            function j(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            L(j, "dispatch");
            async function cr(e) {
                var t, n, r, o;
                const i = {
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0,
                    ...e
                };
                i.requestUrl = i.url;
                const a = Be(i.url).hash,
                    c = i.container,
                    l = dr(c);
                O || (O = {
                    id: ur(),
                    url: window.location.href,
                    title: document.title,
                    container: l,
                    fragment: i.fragment
                }, De(O, O.title, O.url)), Fe == null || Fe.abort();
                const {
                    signal: f
                } = Fe = new AbortController;
                i.push === !0 && i.replace !== !0 && (cs(O.id, fr(c)), tr(null, "", i.requestUrl)), j(c, "pjax:start", {
                    url: i.url
                }), j(c, "pjax:send");
                let d;
                const u = fs();
                try {
                    d = await fetch(i.url, {
                        signal: f,
                        method: i.type,
                        body: i.data,
                        headers: {
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": l,
                            "X-Requested-With": "XMLHttpRequest",
                            "X-PJAX-VERSION": (t = u.pjax) != null ? t : "",
                            "X-PJAX-CSP-VERSION": (n = u.csp) != null ? n : "",
                            "X-PJAX-CSS-VERSION": (r = u.css) != null ? r : "",
                            "X-PJAX-JS-VERSION": (o = u.js) != null ? o : ""
                        }
                    })
                } catch {
                    d = void 0
                }
                if (!d || !d.ok) {
                    const Ae = j(c, "pjax:error");
                    if (i.type === "GET" && Ae) {
                        const Co = d && d.headers.get("X-PJAX-URL"),
                            sf = Co ? Be(Co).href : i.requestUrl;
                        ne({
                            pjaxFailureReason: "response_error",
                            requestUrl: i.requestUrl
                        }), Ve(sf)
                    }
                    j(c, "pjax:complete"), j(c, "pjax:end");
                    return
                }
                const m = O,
                    h = us(),
                    y = d.headers.get("X-PJAX-Version"),
                    $ = await d.text(),
                    p = is($, d, i),
                    {
                        contents: S
                    } = p,
                    k = Be(p.url);
                if (a && (k.hash = a, p.url = k.href), h && y && h !== y) {
                    j(c, "pjax:hardLoad", {
                        reason: "version_mismatch"
                    }), ne({
                        pjaxFailureReason: "version_mismatch",
                        requestUrl: i.requestUrl
                    }), Ve(p.url);
                    return
                }
                if (!S) {
                    j(c, "pjax:hardLoad", {
                        reason: "missing_response_body"
                    }), ne({
                        pjaxFailureReason: "missing_response_body",
                        requestUrl: i.requestUrl
                    }), Ve(p.url);
                    return
                }
                O = {
                    id: i.id != null ? i.id : ur(),
                    url: p.url,
                    title: p.title,
                    container: l,
                    fragment: i.fragment
                }, (i.push === !0 || i.replace === !0) && De(O, p.title, p.url);
                const I = document.activeElement,
                    q = i.container != null && i.container.contains(I);
                if (I instanceof HTMLElement && q) try {
                    I.blur()
                } catch {}
                p.title && (document.title = p.title), j(c, "pjax:beforeReplace", {
                    contents: S,
                    state: O,
                    previousState: m
                }), mr(c, S), or(), ir();
                const ee = c.querySelector("input[autofocus], textarea[autofocus]");
                ee && document.activeElement !== ee && ee.focus(), p.scripts && ss(p.scripts), p.stylesheets && as(p.stylesheets);
                let le = i.scrollTo;
                if (a) {
                    const Ae = Pt(document, a);
                    Ae && (le = Ae.getBoundingClientRect().top + window.pageYOffset)
                }
                typeof le == "number" && window.scrollTo(window.pageXOffset, le), j(c, "pjax:success"), j(c, "pjax:complete"), j(c, "pjax:end")
            }
            L(cr, "pjaxRequest");

            function Ve(e) {
                O && De(null, "", O.url), window.location.replace(e)
            }
            L(Ve, "locationReplace");
            let Ot = !0;
            const Hl = window.location.href,
                lr = window.history.state;
            lr && lr.container && (O = lr), "state" in window.history && (Ot = !1);

            function rs(e) {
                if (es("PJAX_DISABLED") || es("TURBO")) return;
                Ot || Fe == null || Fe.abort();
                const t = O,
                    n = e.state;
                let r = null;
                if (n && n.container) {
                    if (Ot && Hl === n.url) return;
                    if (t) {
                        if (t.id === n.id) return;
                        r = t.id < n.id ? "forward" : "back"
                    }
                    const [o, i, s] = Ue[n.id] || [], a = document.querySelector(o || n.container);
                    if (a instanceof HTMLElement) {
                        t && ls(r, t.id, fr(a)), j(a, "pjax:popstate", {
                            state: n,
                            direction: r,
                            cachedAt: s
                        });
                        const c = {
                            id: n.id,
                            url: n.url,
                            container: a,
                            push: !1,
                            fragment: n.fragment || "",
                            scrollTo: !1
                        };
                        i ? (j(a, "pjax:start"), O = n, n.title && (document.title = n.title), j(a, "pjax:beforeReplace", {
                            contents: i,
                            state: n,
                            previousState: t
                        }), mr(a, i), or(), ir(), j(a, "pjax:end")) : cr(c), a.offsetHeight
                    } else ne({
                        pjaxFailureReason: "no_container",
                        requestUrl: t == null ? void 0 : t.url
                    }), Ve(location.href)
                }
                Ot = !1
            }
            L(rs, "onPjaxPopstate");

            function ur() {
                return new Date().getTime()
            }
            L(ur, "uniqueId");

            function fr(e) {
                const t = e.cloneNode(!0);
                return [dr(e), Array.from(t.childNodes), Date.now()]
            }
            L(fr, "cloneContents");

            function Be(e) {
                const t = document.createElement("a");
                return t.href = e, t
            }
            L(Be, "parseURL");

            function dr(e) {
                if (e.id) return `#${e.id}`;
                throw new Error("pjax container has no id")
            }
            L(dr, "getContainerSelector");

            function ze(e, t, n) {
                let r = [];
                for (const o of e) o instanceof Element && (o instanceof n && o.matches(t) && r.push(o), r = r.concat(Array.from(o.querySelectorAll(t))));
                return r
            }
            L(ze, "findAll");

            function mr(e, t) {
                e.innerHTML = "";
                for (const n of t) n != null && e.appendChild(n)
            }
            L(mr, "replaceWithNodes");

            function os(e, t) {
                const n = e.headers.get("X-PJAX-URL");
                return n ? Be(n).href : t
            }
            L(os, "resolveUrl");

            function is(e, t, n) {
                const r = {
                        url: os(t, n.requestUrl),
                        title: ""
                    },
                    o = /<html/i.test(e);
                if ((t.headers.get("Content-Type") || "").split(";", 1)[0].trim() !== "text/html") return r;
                let s, a;
                if (o) {
                    const f = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                        d = e.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                    s = f ? Array.from(re(document, f[0]).childNodes) : [], a = d ? Array.from(re(document, d[0]).childNodes) : []
                } else s = a = Array.from(re(document, e).childNodes);
                if (a.length === 0) return r;
                const c = ze(s, "title", HTMLTitleElement);
                r.title = c.length > 0 && c[c.length - 1].textContent || "";
                let l;
                if (n.fragment) {
                    if (n.fragment === "body") l = a;
                    else {
                        const f = ze(a, n.fragment, Element);
                        l = f.length > 0 ? [f[0]] : []
                    }
                    if (l.length && (n.fragment === "body" ? r.contents = l : r.contents = l.flatMap(f => Array.from(f.childNodes)), !r.title)) {
                        const f = l[0];
                        f instanceof Element && (r.title = f.getAttribute("title") || f.getAttribute("data-title") || "")
                    }
                } else o || (r.contents = a);
                if (r.contents) {
                    r.contents = r.contents.filter(function(u) {
                        return u instanceof Element ? !u.matches("title") : !0
                    });
                    for (const u of r.contents)
                        if (u instanceof Element)
                            for (const m of u.querySelectorAll("title")) m.remove();
                    const f = ze(r.contents, "script[src]", HTMLScriptElement);
                    for (const u of f) u.remove();
                    r.scripts = f, r.contents = r.contents.filter(u => f.indexOf(u) === -1);
                    const d = ze(r.contents, "link[rel=stylesheet]", HTMLLinkElement);
                    for (const u of d) u.remove();
                    r.stylesheets = d, r.contents = r.contents.filter(u => !d.includes(u))
                }
                return r.title && (r.title = r.title.trim()), r
            }
            L(is, "extractContainer");

            function ss(e) {
                const t = document.querySelectorAll("script[src]");
                for (const n of e) {
                    const {
                        src: r
                    } = n;
                    if (Array.from(t).some(a => a.src === r)) continue;
                    const o = document.createElement("script"),
                        i = n.getAttribute("type");
                    i && (o.type = i);
                    const s = n.getAttribute("integrity");
                    s && (o.integrity = s, o.crossOrigin = "anonymous"), o.src = r, document.head && document.head.appendChild(o)
                }
            }
            L(ss, "executeScriptTags");

            function as(e) {
                const t = document.querySelectorAll("link[rel=stylesheet]");
                for (const n of e) Array.from(t).some(r => r.href === n.href) || document.head && document.head.appendChild(n)
            }
            L(as, "injectStyleTags");
            const Ue = {},
                pr = [],
                jt = [];

            function cs(e, t) {
                Ue[e] = t, jt.push(e), Mt(pr, 0), Mt(jt, ns)
            }
            L(cs, "cachePush");

            function ls(e, t, n) {
                let r, o;
                Ue[t] = n, e === "forward" ? (r = jt, o = pr) : (r = pr, o = jt), r.push(t);
                const i = o.pop();
                i && delete Ue[i], Mt(r, ns)
            }
            L(ls, "cachePop");

            function Mt(e, t) {
                for (; e.length > t;) {
                    const n = e.shift();
                    if (n == null) return;
                    delete Ue[n]
                }
            }
            L(Mt, "trimCacheStack");

            function us() {
                for (const e of document.getElementsByTagName("meta")) {
                    const t = e.getAttribute("http-equiv");
                    if (t && t.toUpperCase() === "X-PJAX-VERSION") return e.content
                }
                return null
            }
            L(us, "findVersion");

            function We(e) {
                var t;
                const n = document.querySelector(`meta[http-equiv="${e}"]`);
                return (t = n == null ? void 0 : n.content) != null ? t : null
            }
            L(We, "pjaxMeta");

            function fs() {
                return {
                    pjax: We("X-PJAX-VERSION"),
                    csp: We("X-PJAX-CSP-VERSION"),
                    css: We("X-PJAX-CSS-VERSION"),
                    js: We("X-PJAX-JS-VERSION")
                }
            }
            L(fs, "findAllVersions");

            function ds() {
                return O
            }
            L(ds, "getState"), window.addEventListener("popstate", rs);
            var Rl = Object.defineProperty,
                se = (e, t) => Rl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Y = new WeakMap;

            function hr(e) {
                const t = Y.get(e);
                !t || (t.timer != null && clearTimeout(t.timer), t.timer = window.setTimeout(() => {
                    t.timer != null && (t.timer = null), t.inputed = !1, t.listener.call(null, e)
                }, t.wait))
            }
            se(hr, "schedule");

            function gr(e) {
                const t = e.currentTarget,
                    n = Y.get(t);
                !n || (n.keypressed = !0, n.timer != null && clearTimeout(n.timer))
            }
            se(gr, "onKeydownInput");

            function br(e) {
                const t = e.currentTarget,
                    n = Y.get(t);
                !n || (n.keypressed = !1, n.inputed && hr(t))
            }
            se(br, "onKeyupInput");

            function vr(e) {
                const t = e.currentTarget,
                    n = Y.get(t);
                !n || (n.inputed = !0, n.keypressed || hr(t))
            }
            se(vr, "onInputInput");

            function ms(e, t, n = {
                wait: null
            }) {
                Y.set(e, {
                    keypressed: !1,
                    inputed: !1,
                    timer: void 0,
                    listener: t,
                    wait: n.wait != null ? n.wait : 100
                }), e.addEventListener("keydown", gr), e.addEventListener("keyup", br), e.addEventListener("input", vr)
            }
            se(ms, "addThrottledInputEventListener");

            function ps(e, t) {
                e.removeEventListener("keydown", gr), e.removeEventListener("keyup", br), e.removeEventListener("input", vr);
                const n = Y.get(e);
                n && (n.timer != null && n.listener === t && clearTimeout(n.timer), Y.delete(e))
            }
            se(ps, "removeThrottledInputEventListener");

            function hs(e) {
                const t = Y.get(e);
                t && t.listener.call(null, e)
            }
            se(hs, "dispatchThrottledInputEvent");
            var Dl = Object.defineProperty,
                F = (e, t) => Dl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function yr(e) {
                const t = e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (t)
                    if (t.length === 1) {
                        const n = $t(t[0]);
                        return n ? Object.freeze({
                            start: n,
                            end: n
                        }) : void 0
                    } else if (t.length === 2) {
                    const n = $t(t[0]),
                        r = $t(t[1]);
                    return !n || !r ? void 0 : Sr(Object.freeze({
                        start: n,
                        end: r
                    }))
                } else return;
                else return
            }
            F(yr, "parseBlobRange");

            function gs(e) {
                const {
                    start: t,
                    end: n
                } = Sr(e);
                return t.column != null && n.column != null ? `L${t.line}C${t.column}-L${n.line}C${n.column}` : t.line === n.line ? `L${t.line}` : `L${t.line}-L${n.line}`
            }
            F(gs, "formatBlobRange");

            function bs(e) {
                const t = e.match(/(file-.+?-)L\d+?/i);
                return t ? t[1] : ""
            }
            F(bs, "parseAnchorPrefix");

            function vs(e) {
                const t = yr(e),
                    n = bs(e);
                return {
                    blobRange: t,
                    anchorPrefix: n
                }
            }
            F(vs, "parseFileAnchor");

            function ys({
                anchorPrefix: e,
                blobRange: t
            }) {
                return t ? `#${e}${gs(t)}` : "#"
            }
            F(ys, "formatBlobRangeAnchor");

            function $t(e) {
                const t = e.match(/L(\d+)/),
                    n = e.match(/C(\d+)/);
                return t ? Object.freeze({
                    line: parseInt(t[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }
            F($t, "parseBlobOffset");

            function ws(e, t) {
                const [n, r] = wr(e.start, !0, t), [o, i] = wr(e.end, !1, t);
                if (!n || !o) return;
                let s = r,
                    a = i;
                if (s === -1 && (s = 0), a === -1 && (a = o.childNodes.length), !n.ownerDocument) throw new Error("DOMRange needs to be inside document");
                const c = n.ownerDocument.createRange();
                return c.setStart(n, s), c.setEnd(o, a), c
            }
            F(ws, "DOMRangeFromBlob");

            function wr(e, t, n) {
                const r = [null, 0],
                    o = n(e.line);
                if (!o) return r;
                if (e.column == null) return [o, -1];
                let i = e.column - 1;
                const s = Er(o);
                for (let a = 0; a < s.length; a++) {
                    const c = s[a],
                        l = i - (c.textContent || "").length;
                    if (l === 0) {
                        const f = s[a + 1];
                        return t && f ? [f, 0] : [c, i]
                    } else if (l < 0) return [c, i];
                    i = l
                }
                return r
            }
            F(wr, "findRangeOffset");

            function Er(e) {
                if (e.nodeType === Node.TEXT_NODE) return [e];
                if (!e.childNodes || !e.childNodes.length) return [];
                let t = [];
                for (const n of e.childNodes) t = t.concat(Er(n));
                return t
            }
            F(Er, "getAllTextNodes");

            function Sr(e) {
                const t = [e.start, e.end];
                return t.sort(Es), t[0] === e.start && t[1] === e.end ? e : Object.freeze({
                    start: t[0],
                    end: t[1]
                })
            }
            F(Sr, "ascendingBlobRange");

            function Es(e, t) {
                return e.line === t.line && e.column === t.column ? 0 : e.line === t.line && typeof e.column == "number" && typeof t.column == "number" ? e.column - t.column : e.line - t.line
            }
            F(Es, "compareBlobOffsets");
            var Nl = Object.defineProperty,
                Lr = (e, t) => Nl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Ee = [];
            let _r = 0;

            function Xe(e) {
                (async function() {
                    Ee.push(e), await Mn, Ss()
                })()
            }
            Lr(Xe, "hashChange"), Xe.clear = () => {
                Ee.length = _r = 0
            };

            function Ss() {
                const e = _r;
                _r = Ee.length, It(Ee.slice(e), null, window.location.href)
            }
            Lr(Ss, "runRemainingHandlers");

            function It(e, t, n) {
                const r = window.location.hash.slice(1),
                    o = r ? document.getElementById(r) : null,
                    i = {
                        oldURL: t,
                        newURL: n,
                        target: o
                    };
                for (const s of e) s.call(null, i)
            }
            Lr(It, "runHandlers");
            let Tr = window.location.href;
            window.addEventListener("popstate", function() {
                Tr = window.location.href
            }), window.addEventListener("hashchange", function(e) {
                const t = window.location.href;
                try {
                    It(Ee, e.oldURL || Tr, t)
                } finally {
                    Tr = t
                }
            });
            let Ls = null;
            document.addEventListener("pjax:start", function() {
                Ls = window.location.href
            }), document.addEventListener("pjax:end", function() {
                It(Ee, Ls, window.location.href)
            });
            var Fl = Object.defineProperty,
                Vl = (e, t) => Fl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function _s(e, t) {
                t.appendChild(e.extractContents()), e.insertNode(t)
            }
            Vl(_s, "surroundContents");
            var Bl = Object.defineProperty,
                Ke = (e, t) => Bl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function qt(e) {
                const t = "\u200D",
                    n = e.split(t);
                let r = 0;
                for (const o of n) r += Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length;
                return r / n.length
            }
            Ke(qt, "getUtf8StringLength");

            function Ar(e, t, n) {
                let r = e.value.substring(0, e.selectionEnd || 0),
                    o = e.value.substring(e.selectionEnd || 0);
                return r = r.replace(t, n), o = o.replace(t, n), Cr(e, r + o, r.length), n
            }
            Ke(Ar, "replaceText");

            function Ts(e, t, n) {
                if (e.selectionStart === null || e.selectionEnd === null) return Ar(e, t, n);
                const r = e.value.substring(0, e.selectionStart),
                    o = e.value.substring(e.selectionEnd);
                return Cr(e, r + n + o, r.length), n
            }
            Ke(Ts, "replaceSelection");

            function As(e, t, n = {}) {
                const r = e.selectionEnd || 0,
                    o = e.value.substring(0, r),
                    i = e.value.substring(r),
                    s = e.value === "" || o.match(/\n$/) ? "" : `
`,
                    a = n.appendNewline ? `
` : "",
                    c = s + t + a;
                e.value = o + c + i;
                const l = r + c.length;
                return e.selectionStart = l, e.selectionEnd = l, e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), e.focus(), c
            }
            Ke(As, "insertText");

            function Cr(e, t, n) {
                e.value = t, e.selectionStart = n, e.selectionEnd = n, e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                }))
            }
            Ke(Cr, "setTextareaValueAndCursor");
            var zl = Object.defineProperty,
                Se = (e, t) => zl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Cs(e, t, n) {
                const r = n.closest(".js-characters-remaining-container");
                if (!r) return;
                const o = r.querySelector(".js-characters-remaining"),
                    i = String(o.getAttribute("data-suffix")),
                    s = qt(e),
                    a = t - s;
                a <= 20 ? (o.textContent = `${a} ${i}`, o.classList.toggle("color-fg-danger", a <= 5), o.hidden = !1) : o.hidden = !0
            }
            Se(Cs, "showRemainingCharacterCount");

            function kr(e) {
                return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength") || "") : e.maxLength
            }
            Se(kr, "getFieldLimit");

            function ks(e) {
                const t = kr(e),
                    n = qt(e.value);
                return t - n < 0
            }
            Se(ks, "hasExceededCharacterLimit");

            function Ht(e) {
                const t = kr(e);
                Cs(e.value, t, e)
            }
            Se(Ht, "updateInputRemainingCharacters");

            function Ps(e) {
                const t = e.querySelectorAll(".js-characters-remaining-container");
                for (const n of t) {
                    const r = n.querySelector(".js-characters-remaining-field");
                    Ht(r)
                }
            }
            Se(Ps, "resetCharactersRemainingCounts"), me(".js-characters-remaining-field", function(e) {
                function t() {
                    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Ht(e)
                }
                Se(t, "onInput"), t(), e.addEventListener("input", t), e.addEventListener("blur", () => {
                    e.removeEventListener("input", t)
                }, {
                    once: !0
                })
            });
            var Ul = Object.defineProperty,
                Rt = (e, t) => Ul(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Pr = new WeakMap;

            function xs(e) {
                return Pr.get(e)
            }
            Rt(xs, "getCodeEditor");
            async function Os(e) {
                return Pr.get(e) || xr(await js(e, "codeEditor:ready"))
            }
            Rt(Os, "getAsyncCodeEditor");

            function xr(e) {
                if (!(e instanceof CustomEvent)) throw new Error("assert: event is not a CustomEvent");
                const t = e.detail.editor;
                if (!e.target) throw new Error("assert: event.target is null");
                return Pr.set(e.target, t), t
            }
            Rt(xr, "onEditorFromEvent"), w("codeEditor:ready", ".js-code-editor", xr);

            function js(e, t) {
                return new Promise(n => {
                    e.addEventListener(t, n, {
                        once: !0
                    })
                })
            }
            Rt(js, "nextEvent");
            var Wl = Object.defineProperty,
                Or = (e, t) => Wl(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Xl = "ontransitionend" in window;

            function Ms(e, t) {
                if (!Xl) {
                    t();
                    return
                }
                const n = Array.from(e.querySelectorAll(".js-transitionable"));
                e.classList.contains("js-transitionable") && n.push(e);
                for (const r of n) {
                    const o = jr(r);
                    r instanceof HTMLElement && (r.addEventListener("transitionend", () => {
                        r.style.display = "", r.style.visibility = "", o && Mr(r, function() {
                            r.style.height = ""
                        })
                    }, {
                        once: !0
                    }), r.style.boxSizing = "content-box", r.style.display = "block", r.style.visibility = "visible", o && Mr(r, function() {
                        r.style.height = getComputedStyle(r).height
                    }), r.offsetHeight)
                }
                t();
                for (const r of n)
                    if (r instanceof HTMLElement && jr(r)) {
                        const o = getComputedStyle(r).height;
                        r.style.boxSizing = "", o === "0px" ? r.style.height = `${r.scrollHeight}px` : r.style.height = "0px"
                    }
            }
            Or(Ms, "performTransition");

            function jr(e) {
                return getComputedStyle(e).transitionProperty === "height"
            }
            Or(jr, "isTransitioningHeight");

            function Mr(e, t) {
                e.style.transition = "none", t(), e.offsetHeight, e.style.transition = ""
            }
            Or(Mr, "withoutTransition");
            var Kl = Object.defineProperty,
                V = (e, t) => Kl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function $s(e, t) {
                t.find(n => {
                    const r = e.querySelectorAll(n),
                        o = r[r.length - 1];
                    if (o && document.activeElement !== o) return o.focus(), !0
                })
            }
            V($s, "findAndFocusByQuerySelector");

            function Is(e) {
                $s(e, [".js-focus-on-dismiss", "input[autofocus], textarea[autofocus]"])
            }
            V(Is, "restoreAutofocus");

            function qs(e) {
                !e.classList.contains("tooltipped") || (e.classList.remove("tooltipped"), e.addEventListener("mouseleave", () => {
                    e.classList.add("tooltipped"), e.blur()
                }, {
                    once: !0
                }))
            }
            V(qs, "hideTooltip");

            function Hs(e) {
                return [...document.querySelectorAll(".js-details-container")].filter(t => t.getAttribute("data-details-container-group") === e)
            }
            V(Hs, "groupMembers");

            function Rs(e) {
                return [...e.querySelectorAll(".js-details-target")].filter(t => t.closest(".js-details-container") === e)
            }
            V(Rs, "containerTargets");

            function Ds(e, t) {
                const n = e.getAttribute("data-details-container-group");
                return n ? (Xn(e, () => {
                    for (const r of Hs(n)) r !== e && $r(r, t)
                }), n) : null
            }
            V(Ds, "toggleGroup");

            function $r(e, t) {
                e.classList.toggle("open", t), e.classList.toggle("Details--on", t);
                for (const n of Rs(e)) n.setAttribute("aria-expanded", t.toString())
            }
            V($r, "updateOpenState");

            function Ir(e, t) {
                var n, r;
                const o = e.getAttribute("data-details-container") || ".js-details-container",
                    i = e.closest(o),
                    s = (n = t == null ? void 0 : t.force) != null ? n : !i.classList.contains("open"),
                    a = (r = t == null ? void 0 : t.withGroup) != null ? r : !1;
                Ms(i, () => {
                    $r(i, s);
                    const c = a ? Ds(i, s) : null;
                    Promise.resolve().then(() => {
                        Is(i), qs(e), i.dispatchEvent(new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: s
                            }
                        })), c && i.dispatchEvent(new CustomEvent("details:toggled-group", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: s,
                                group: c
                            }
                        }))
                    })
                })
            }
            V(Ir, "toggleDetailsTarget");

            function Ns(e) {
                const t = e.getAttribute("data-details-container") || ".js-details-container",
                    r = e.closest(t).classList;
                return r.contains("Details--on") || r.contains("open")
            }
            V(Ns, "isDetailsTargetExpanded");

            function Fs(e) {
                const t = e.altKey,
                    n = e.currentTarget;
                Ir(n, {
                    withGroup: t
                }), e.preventDefault()
            }
            V(Fs, "handleDetailsTargetClick"), w("click", ".js-details-target", Fs), Xe(function({
                target: e
            }) {
                e && qr(e)
            });

            function qr(e) {
                let t = !1,
                    n = e.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (t = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !t), n.classList.toggle("Details--on", !t), t = !1), n = n.parentElement
            }
            V(qr, "ensureExpanded");
            var Jl = Object.defineProperty,
                Je = (e, t) => Jl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Vs(e, t) {
                let n = Hr(e, t);
                if (n && t.indexOf("/") === -1) {
                    const r = e.substring(e.lastIndexOf("/") + 1);
                    n += Hr(r, t)
                }
                return n
            }
            Je(Vs, "fuzzyScore");

            function Bs(e) {
                const t = e.toLowerCase().split("");
                let n = "";
                for (let r = 0; r < t.length; r++) {
                    const i = t[r].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                    r === 0 ? n += `(.*)(${i})` : n += `([^${i}]*?)(${i})`
                }
                return new RegExp(`${n}(.*?)$`, "i")
            }
            Je(Bs, "fuzzyRegexp");

            function zs(e, t, n) {
                if (t) {
                    const r = e.innerHTML.trim().match(n || Bs(t));
                    if (!r) return;
                    let o = !1;
                    const i = [];
                    for (let s = 1; s < r.length; ++s) {
                        const a = r[s];
                        !a || (s % 2 === 0 ? o || (i.push("<mark>"), o = !0) : o && (i.push("</mark>"), o = !1), i.push(a))
                    }
                    e.innerHTML = i.join("")
                } else {
                    const r = e.innerHTML.trim(),
                        o = r.replace(/<\/?mark>/g, "");
                    r !== o && (e.innerHTML = o)
                }
            }
            Je(zs, "fuzzyHighlightElement");

            function Hr(e, t) {
                let n = e;
                if (n === t) return 1;
                const r = n.length;
                let o = 0,
                    i = 0;
                for (let l = 0; l < t.length; l++) {
                    const f = t[l],
                        d = n.indexOf(f.toLowerCase()),
                        u = n.indexOf(f.toUpperCase()),
                        m = Math.min(d, u),
                        h = m > -1 ? m : Math.max(d, u);
                    if (h === -1) return 0;
                    o += .1, n[h] === f && (o += .1), h === 0 && (o += .8, l === 0 && (i = 1)), n.charAt(h - 1) === " " && (o += .8), n = n.substring(h + 1, r)
                }
                const s = t.length,
                    a = o / s;
                let c = (a * (s / r) + a) / 2;
                return i && c + .1 < 1 && (c += .1), c
            }
            Je(Hr, "stringScore");

            function Us(e, t) {
                return e.score > t.score ? -1 : e.score < t.score ? 1 : e.text < t.text ? -1 : e.text > t.text ? 1 : 0
            }
            Je(Us, "compare");
            var Gl = Object.defineProperty,
                Yl = (e, t) => Gl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function* Ws(e, t) {
                for (const n of e) {
                    const r = t(n);
                    r != null && (yield r)
                }
            }
            Yl(Ws, "filterMap");
            var Ql = Object.defineProperty,
                Xs = (e, t) => Ql(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Ks(e, t, n) {
                return [...Ws(e, Xs(o => {
                    const i = t(o);
                    return i != null ? [o, i] : null
                }, "sortKey"))].sort((o, i) => n(o[1], i[1])).map(([o]) => o)
            }
            Xs(Ks, "filterSort");
            var Zl = Object.defineProperty,
                Q = (e, t) => Zl(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Js(e) {
                return new Promise(t => {
                    e.addEventListener("dialog:remove", t, {
                        once: !0
                    })
                })
            }
            Q(Js, "waitForDialogClose");

            function Rr(e) {
                const t = document.querySelector(".sso-modal");
                !t || (t.classList.remove("success", "error"), e ? t.classList.add("success") : t.classList.add("error"))
            }
            Q(Rr, "setModalStatus");

            function Gs(e) {
                const t = document.querySelector("meta[name=sso-expires-around]");
                t && t.setAttribute("content", e)
            }
            Q(Gs, "updateExpiresAroundTag");
            async function Ys() {
                const e = document.querySelector("link[rel=sso-modal]"),
                    t = await ht({
                        content: mt(document, e.href),
                        dialogClass: "sso-modal"
                    });
                let n = null;
                const r = window.external;
                if (r.ssoComplete = function(o) {
                        o.error ? (n = !1, Rr(n)) : (n = !0, Rr(n), Gs(o.expiresAround), window.focus()), r.ssoComplete = null
                    }, await Js(t), !n) throw new Error("sso prompt canceled")
            }
            Q(Ys, "ssoPrompt"), x(".js-sso-modal-complete", function(e) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const t = e.getAttribute("data-error"),
                        n = e.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: t,
                        expiresAround: n
                    }), window.close()
                } else {
                    const t = e.getAttribute("data-fallback-url");
                    t && (window.location.href = t)
                }
            });

            function Qs(e) {
                if (!(e instanceof HTMLMetaElement)) return !0;
                const t = parseInt(e.content);
                return new Date().getTime() / 1e3 > t
            }
            Q(Qs, "expiresSoon");
            async function Zs() {
                const e = document.querySelector("link[rel=sso-session]"),
                    t = document.querySelector("meta[name=sso-expires-around]");
                if (!(e instanceof HTMLLinkElement) || !Qs(t)) return !0;
                const n = e.href;
                return await (await fetch(n, {
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })).json()
            }
            Q(Zs, "fetchSsoStatus");
            let Dt = null;

            function Dr() {
                Dt = null
            }
            Q(Dr, "clearActiveSsoPrompt");
            async function ea() {
                await Zs() || (Dt || (Dt = Ys().then(Dr).catch(Dr)), await Dt)
            }
            Q(ea, "default");
            var eu = Object.defineProperty,
                Nt = (e, t) => eu(e, "name", {
                    value: t,
                    configurable: !0
                });
            w("click", ".js-skip-to-content", function(e) {
                const t = document.getElementById("start-of-content");
                if (t) {
                    const n = t.nextElementSibling;
                    n instanceof HTMLElement && (n.setAttribute("tabindex", "-1"), n.setAttribute("data-skipped-to-content", "1"), n.focus())
                }
                e.preventDefault()
            });

            function ta() {
                let e = !1;
                const t = document.getElementById("start-of-content");
                if (t) {
                    const n = t.nextElementSibling;
                    if (n instanceof HTMLElement) return e = n.getAttribute("data-skipped-to-content") === "1", e && n.removeAttribute("data-skipped-to-content"), e
                }
            }
            Nt(ta, "hasSkippedToContent");
            const tu = "ontouchstart" in document;

            function na() {
                return window.innerWidth > 1012
            }
            Nt(na, "compatibleDesktop");
            for (const e of document.querySelectorAll(".HeaderMenu-details")) e.addEventListener("toggle", ra), tu || (e.addEventListener("mouseover", Fr), e.addEventListener("mouseleave", Fr));
            let Nr = !1;

            function ra(e) {
                if (!Nr) {
                    Nr = !0;
                    for (const t of document.querySelectorAll(".HeaderMenu-details")) t !== e.currentTarget && t.removeAttribute("open");
                    setTimeout(() => Nr = !1)
                }
            }
            Nt(ra, "onMenuToggle");

            function Fr(e) {
                const {
                    currentTarget: t
                } = e;
                !(t instanceof HTMLElement) || !na() || (e.type === "mouseover" && e instanceof MouseEvent ? e.target instanceof Node && e.relatedTarget instanceof Node && t.contains(e.target) && !t.contains(e.relatedTarget) && t.setAttribute("open", "") : t.removeAttribute("open"))
            }
            Nt(Fr, "onMenuHover");
            var nu = Object.defineProperty,
                T = (e, t) => nu(e, "name", {
                    value: t,
                    configurable: !0
                });
            let Vr = !1,
                Ge = 0;
            const Ye = [];

            function Br() {
                Ye.length ? oa() : ia()
            }
            T(Br, "manageObservers");

            function oa() {
                Vr || (window.addEventListener("resize", Qe), document.addEventListener("scroll", Qe), Vr = !0)
            }
            T(oa, "addObservers");

            function ia() {
                window.removeEventListener("resize", Qe), document.removeEventListener("scroll", Qe), Vr = !1
            }
            T(ia, "removeObservers");

            function Ft() {
                Vt(!0)
            }
            T(Ft, "forceStickyRelayout");

            function Qe() {
                Vt()
            }
            T(Qe, "checkElementsForStickingHandler");

            function Vt(e = !1) {
                for (const t of Ye)
                    if (t.element.offsetHeight > 0) {
                        const {
                            element: n,
                            placeholder: r,
                            top: o
                        } = t, i = n.getBoundingClientRect();
                        if (r) {
                            const s = r.getBoundingClientRect();
                            n.classList.contains("is-stuck") ? s.top > Le(n, o) ? Ur(t) : Wr(t) : i.top <= Le(n, o) ? zr(t) : e && Wr(t)
                        } else i.top - Le(n, o) < .1 ? zr(t) : Ur(t)
                    }
            }
            T(Vt, "checkElementsForSticking");

            function sa(e) {
                const {
                    position: t
                } = window.getComputedStyle(e);
                return /sticky/.test(t)
            }
            T(sa, "browserHasSticky");

            function zr({
                element: e,
                placeholder: t,
                top: n
            }) {
                if (t) {
                    const r = e.getBoundingClientRect();
                    Bt(e, Le(e, n)), e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, e.style.marginTop = "0", e.style.position = "fixed", t.style.display = "block"
                }
                e.classList.add("is-stuck")
            }
            T(zr, "pinSet");

            function Ur({
                element: e,
                placeholder: t
            }) {
                t && (e.style.position = "static", e.style.marginTop = t.style.marginTop, t.style.display = "none"), e.classList.remove("is-stuck")
            }
            T(Ur, "unpinSet");

            function Wr({
                element: e,
                placeholder: t,
                offsetParent: n,
                top: r
            }) {
                if (t && !ta()) {
                    const o = e.getBoundingClientRect(),
                        i = t.getBoundingClientRect();
                    if (Bt(e, Le(e, r)), e.style.left = `${i.left}px`, e.style.width = `${i.width}px`, n) {
                        const s = n.getBoundingClientRect();
                        s.bottom < o.height + parseInt(String(r)) && (e.style.top = `${s.bottom-o.height}px`)
                    }
                }
            }
            T(Wr, "updatePinnedSet");

            function aa(e) {
                if (sa(e)) return null;
                const t = e.previousElementSibling;
                if (t && t.classList.contains("is-placeholder")) return t;
                const n = document.createElement("div");
                return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(e).height, n.className = e.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), e.parentNode.insertBefore(n, e)
            }
            T(aa, "findOrCreatePlaceholder");

            function ca(e) {
                const t = aa(e),
                    n = window.getComputedStyle(e).position;
                e.style.position = "static";
                const r = e.offsetParent;
                e.style.position = "fixed";
                const o = Jr(e),
                    i = {
                        element: e,
                        placeholder: t,
                        offsetParent: r,
                        top: o === "auto" ? 0 : parseInt(o || "0")
                    };
                e.style.position = n, Ye.push(i)
            }
            T(ca, "createSet");

            function la(e) {
                const t = Ye.map(n => n.element).indexOf(e);
                Ye.splice(t, 1)
            }
            T(la, "removeSet");
            async function ua(e) {
                await $n, ca(e), Vt(), Br()
            }
            T(ua, "initializeSet"), x(".js-sticky", {
                constructor: HTMLElement,
                add(e) {
                    ua(e)
                },
                remove(e) {
                    la(e), Br()
                }
            }), x(".js-notification-top-shelf", {
                constructor: HTMLElement,
                add(e) {
                    fa(e)
                },
                remove() {
                    for (const e of document.querySelectorAll(".js-notification-top-shelf")) e.remove();
                    Ge > 0 && (Ge = 0, Xr(), Ft())
                }
            }), x(".js-notification-shelf-offset-top, .js-position-sticky", {
                constructor: HTMLElement,
                add: Kr
            });
            async function fa(e) {
                if (e.offsetParent === null) return;
                await $n;
                const t = Math.floor(e.getBoundingClientRect().height);
                t > 0 && (Ge = t, Xr(), Ft())
            }
            T(fa, "initializeNotificationShelf");

            function Xr() {
                for (const e of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top")) Kr(e)
            }
            T(Xr, "updateTopOffsets");

            function Kr(e) {
                if (e.classList.contains("js-notification-top-shelf")) return;
                const t = parseInt(Jr(e)) || 0;
                Bt(e, t + Ge)
            }
            T(Kr, "updateTopOffset");

            function Jr(e) {
                const t = e.getAttribute("data-original-top");
                if (t != null) return t;
                const n = window.getComputedStyle(e).top;
                return e.setAttribute("data-original-top", n), n
            }
            T(Jr, "getOriginalTop");

            function Le(e, t) {
                return e.classList.contains("js-notification-top-shelf") ? t : t + Ge
            }
            T(Le, "withShelfOffset");

            function Bt(e, t) {
                e.style.setProperty("top", `${t}px`, "important")
            }
            T(Bt, "setTopImportant");
            var ru = Object.defineProperty,
                Gr = (e, t) => ru(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Yr(e) {
                const t = e.ownerDocument;
                setTimeout(() => {
                    t && t.defaultView && (e.scrollIntoView(), t.defaultView.scrollBy(0, -Qr(t)))
                }, 0)
            }
            Gr(Yr, "scrollIntoView");

            function da(e) {
                const t = Pt(e);
                t && Yr(t)
            }
            Gr(da, "scrollToFragmentTarget");

            function Qr(e) {
                Ft();
                const t = e.querySelectorAll(".js-sticky-offset-scroll"),
                    n = e.querySelectorAll(".js-position-sticky"),
                    r = Math.max(0, ...Array.from(t).map(s => {
                        const {
                            top: a,
                            height: c
                        } = s.getBoundingClientRect();
                        return a === 0 ? c : 0
                    })) + Math.max(0, ...Array.from(n).map(s => {
                        const {
                            top: a,
                            height: c
                        } = s.getBoundingClientRect(), l = parseInt(getComputedStyle(s).top);
                        if (!s.parentElement) return 0;
                        const f = s.parentElement.getBoundingClientRect().top;
                        return a === l && f < 0 ? c : 0
                    })),
                    o = e.querySelectorAll(".js-position-sticky-stacked"),
                    i = Array.from(o).reduce((s, a) => {
                        const {
                            height: c,
                            top: l
                        } = a.getBoundingClientRect(), f = l < 0, d = a.classList.contains("is-stuck");
                        return s + (!f && d ? c : 0)
                    }, 0);
                return r + i
            }
            Gr(Qr, "computeFixedYOffset");
            var ou = Object.defineProperty,
                Zr = (e, t) => ou(e, "name", {
                    value: t,
                    configurable: !0
                });

            function zt(e, t, n) {
                const r = {
                        hydroEventPayload: e,
                        hydroEventHmac: t,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: n
                    },
                    o = document.querySelector("meta[name=visitor-payload]");
                o instanceof HTMLMetaElement && (r.visitorPayload = o.content);
                const i = document.querySelector("meta[name=visitor-hmac]") || "";
                i instanceof HTMLMetaElement && (r.visitorHmac = i.content), ne(r, !0)
            }
            Zr(zt, "sendData");

            function eo(e) {
                const t = e.getAttribute("data-hydro-view") || "",
                    n = e.getAttribute("data-hydro-view-hmac") || "",
                    r = e.getAttribute("data-hydro-client-context") || "";
                zt(t, n, r)
            }
            Zr(eo, "trackView");

            function ma(e) {
                const t = e.getAttribute("data-hydro-click-payload") || "",
                    n = e.getAttribute("data-hydro-click-hmac") || "",
                    r = e.getAttribute("data-hydro-client-context") || "";
                zt(t, n, r)
            }
            Zr(ma, "sendHydroEvent");
            var iu = Object.defineProperty,
                Ze = (e, t) => iu(e, "name", {
                    value: t,
                    configurable: !0
                });
            const pa = {
                frequency: .6,
                recency: .4
            };

            function ha(e, t) {
                return e.sort((n, r) => t(n) - t(r))
            }
            Ze(ha, "sortBy");

            function to(e) {
                const t = ba(e),
                    n = va(e);
                return function(r) {
                    return ga(t.get(r) || 0, n.get(r) || 0)
                }
            }
            Ze(to, "scorer");

            function ga(e, t) {
                return e * pa.frequency + t * pa.recency
            }
            Ze(ga, "score");

            function ba(e) {
                const t = [...Object.values(e)].reduce((n, r) => n + r.visitCount, 0);
                return new Map(Object.keys(e).map(n => [n, e[n].visitCount / t]))
            }
            Ze(ba, "frequencyMap");

            function va(e) {
                const t = ha([...Object.keys(e)], r => e[r].lastVisitedAt),
                    n = t.length;
                return new Map(t.map((r, o) => [r, (o + 1) / n]))
            }
            Ze(va, "recencyMap");
            var su = Object.defineProperty,
                B = (e, t) => su(e, "name", {
                    value: t,
                    configurable: !0
                });
            const au = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                ya = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
                wa = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
                ],
                Ea = 100;

            function Sa(e) {
                const t = e.match(au);
                if (t) {
                    Ut(no(t[1], t[2]));
                    return
                }
                let n;
                for (let o = 0, i = wa.length; o < i; o++) {
                    const [s, a] = wa[o];
                    if (n = e.match(a), n) {
                        let c = null,
                            l = null;
                        switch (s) {
                            case "organization":
                                c = n[1], l = n[2];
                                break;
                            case "repository":
                                c = `${n[1]}/${n[2]}`, l = n[3];
                                break
                        }
                        c && l && Ut(oo(c, l));
                        return
                    }
                }
                let r;
                for (let o = 0, i = ya.length; o < i; o++)
                    if (r = e.match(ya[o]), r) {
                        Ut(ro(r[1], r[2]));
                        return
                    }
            }
            B(Sa, "logPageView");

            function La(e) {
                const t = Object.keys(e);
                if (t.length <= Ea) return e;
                const n = to(e),
                    r = t.sort((o, i) => n(i) - n(o)).slice(0, Ea / 2);
                return Object.fromEntries(r.map(o => [o, e[o]]))
            }
            B(La, "limitedPageViews");

            function Ut(e) {
                const t = so(),
                    n = _a(),
                    r = t[e] || {
                        lastVisitedAt: n,
                        visitCount: 0
                    };
                r.visitCount += 1, r.lastVisitedAt = n, t[e] = r, io(La(t))
            }
            B(Ut, "logPageViewByKey");

            function _a() {
                return Math.floor(Date.now() / 1e3)
            }
            B(_a, "currentEpochTimeInSeconds");

            function no(e, t) {
                return `team:${e}/${t}`
            }
            B(no, "buildTeamKey");

            function ro(e, t) {
                return `repository:${e}/${t}`
            }
            B(ro, "buildRepositoryKey");

            function oo(e, t) {
                return `project:${e}/${t}`
            }
            B(oo, "buildProjectKey");
            const cu = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/,
                Ta = "jump_to:page_views";

            function io(e) {
                Aa(Ta, JSON.stringify(e))
            }
            B(io, "setPageViewsMap");

            function so() {
                const e = Ca(Ta);
                if (!e) return {};
                let t;
                try {
                    t = JSON.parse(e)
                } catch {
                    return io({}), {}
                }
                const n = {};
                for (const r in t) r.match(cu) && (n[r] = t[r]);
                return n
            }
            B(so, "getPageViewsMap");

            function Aa(e, t) {
                try {
                    window.localStorage.setItem(e, t)
                } catch {}
            }
            B(Aa, "setItem");

            function Ca(e) {
                try {
                    return window.localStorage.getItem(e)
                } catch {
                    return null
                }
            }
            B(Ca, "getItem");
            var lu = Object.defineProperty,
                Wt = (e, t) => lu(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Xt(e) {
                const t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1]
            }
            Wt(Xt, "queryLast");

            function ka() {
                const e = Xt("meta[name=analytics-location]");
                return e ? e.content : window.location.pathname
            }
            Wt(ka, "pagePathname");

            function Pa() {
                const e = Xt("meta[name=analytics-location-query-strip]");
                let t = "";
                e || (t = window.location.search);
                const n = Xt("meta[name=analytics-location-params]");
                n && (t += (t ? "&" : "?") + n.content);
                for (const r of document.querySelectorAll("meta[name=analytics-param-rename]")) {
                    const o = r.content.split(":", 2);
                    t = t.replace(new RegExp(`(^|[?&])${o[0]}($|=)`, "g"), `$1${o[1]}$2`)
                }
                return t
            }
            Wt(Pa, "pageQuery");

            function xa() {
                return `${window.location.protocol}//${window.location.host}${ka()+Pa()}`
            }
            Wt(xa, "requestUri");
            const {
                getItem: uu,
                setItem: fu,
                removeItem: du
            } = On("sessionStorage");
            D({
                ad: uu,
                ae: fu,
                ac: du
            });
            var mu = Object.defineProperty,
                Kt = (e, t) => mu(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Oa(e, t) {
                const n = e.closest("[data-notification-id]");
                t.hasAttribute("data-status") && ja(n, t.getAttribute("data-status")), t.hasAttribute("data-subscription-status") && Ma(n, t.getAttribute("data-subscription-status")), t.hasAttribute("data-starred-status") && $a(n, t.getAttribute("data-starred-status"))
            }
            Kt(Oa, "updateNotificationStates");

            function ja(e, t) {
                e.classList.toggle("notification-archived", t === "archived"), e.classList.toggle("notification-unread", t === "unread"), e.classList.toggle("notification-read", t === "read")
            }
            Kt(ja, "toggleNotificationStatus");

            function Ma(e, t) {
                e.classList.toggle("notification-unsubscribed", t === "unsubscribed")
            }
            Kt(Ma, "toggleNotificationSubscriptionStatus");

            function $a(e, t) {
                e.classList.toggle("notification-starred", t === "starred")
            }
            Kt($a, "toggleNotificationStarredStatus");

            function Ia(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4),
                    n = e.replace(/-/g, "+").replace(/_/g, "/") + t,
                    r = atob(n),
                    o = new ArrayBuffer(r.length),
                    i = new Uint8Array(o);
                for (let s = 0; s < r.length; s++) i[s] = r.charCodeAt(s);
                return o
            }

            function qa(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const i of t) n += String.fromCharCode(i);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }
            var b = "copy",
                H = "convert";

            function _e(e, t, n) {
                if (t === b) return n;
                if (t === H) return e(n);
                if (t instanceof Array) return n.map(r => _e(e, t[0], r));
                if (t instanceof Object) {
                    const r = {};
                    for (const [o, i] of Object.entries(t)) {
                        if (i.derive) {
                            const s = i.derive(n);
                            s !== void 0 && (n[o] = s)
                        }
                        if (!(o in n)) {
                            if (i.required) throw new Error(`Missing key: ${o}`);
                            continue
                        }
                        if (n[o] == null) {
                            r[o] = null;
                            continue
                        }
                        r[o] = _e(e, i.schema, n[o])
                    }
                    return r
                }
            }

            function ao(e, t) {
                return {
                    required: !0,
                    schema: e,
                    derive: t
                }
            }

            function v(e) {
                return {
                    required: !0,
                    schema: e
                }
            }

            function A(e) {
                return {
                    required: !1,
                    schema: e
                }
            }
            var Ha = {
                    type: v(b),
                    id: v(H),
                    transports: A(b)
                },
                Ra = {
                    appid: A(b),
                    appidExclude: A(b),
                    credProps: A(b)
                },
                Da = {
                    appid: A(b),
                    appidExclude: A(b),
                    credProps: A(b)
                },
                pu = {
                    publicKey: v({
                        rp: v(b),
                        user: v({
                            id: v(H),
                            name: v(b),
                            displayName: v(b)
                        }),
                        challenge: v(H),
                        pubKeyCredParams: v(b),
                        timeout: A(b),
                        excludeCredentials: A([Ha]),
                        authenticatorSelection: A(b),
                        attestation: A(b),
                        extensions: A(Ra)
                    }),
                    signal: A(b)
                },
                hu = {
                    type: v(b),
                    id: v(b),
                    rawId: v(H),
                    response: v({
                        clientDataJSON: v(H),
                        attestationObject: v(H),
                        transports: ao(b, e => {
                            var t;
                            return ((t = e.getTransports) == null ? void 0 : t.call(e)) || []
                        })
                    }),
                    clientExtensionResults: ao(Da, e => e.getClientExtensionResults())
                },
                gu = {
                    mediation: A(b),
                    publicKey: v({
                        challenge: v(H),
                        timeout: A(b),
                        rpId: A(b),
                        allowCredentials: A([Ha]),
                        userVerification: A(b),
                        extensions: A(Ra)
                    }),
                    signal: A(b)
                },
                bu = {
                    type: v(b),
                    id: v(b),
                    rawId: v(H),
                    response: v({
                        clientDataJSON: v(H),
                        authenticatorData: v(H),
                        signature: v(H),
                        userHandle: v(H)
                    }),
                    clientExtensionResults: ao(Da, e => e.getClientExtensionResults())
                };

            function vu(e) {
                return _e(Ia, pu, e)
            }

            function yu(e) {
                return _e(qa, hu, e)
            }
            async function wu(e) {
                const t = await navigator.credentials.create(vu(e));
                return yu(t)
            }

            function Eu(e) {
                return _e(Ia, gu, e)
            }

            function Su(e) {
                return _e(qa, bu, e)
            }
            async function Lu(e) {
                const t = await navigator.credentials.get(Eu(e));
                return Su(t)
            }

            function Na() {
                return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
            }
            var _u = Object.defineProperty,
                Fa = (e, t) => _u(e, "name", {
                    value: t,
                    configurable: !0
                });

            function co() {
                return Na() ? "supported" : "unsupported"
            }
            Fa(co, "webauthnSupportLevel");
            async function Va() {
                var e;
                return await ((e = window.PublicKeyCredential) == null ? void 0 : e.isUserVerifyingPlatformAuthenticatorAvailable()) ? "supported" : "unsupported"
            }
            Fa(Va, "iuvpaaSupportLevel");
            var Tu = Object.defineProperty,
                Jt = (e, t) => Tu(e, "name", {
                    value: t,
                    configurable: !0
                });
            let lo = !1;

            function Ba(e) {
                const t = new URL(e, window.location.origin),
                    n = new URLSearchParams(t.search.slice(1));
                return n.set("webauthn-support", co()), t.search = n.toString(), t.toString()
            }
            Jt(Ba, "urlWithParams");
            async function za() {
                const e = document.querySelector("link[rel=sudo-modal]"),
                    t = document.querySelector(".js-sudo-prompt");
                if (t instanceof HTMLTemplateElement) return t;
                if (e) {
                    const n = await mt(document, Ba(e.href));
                    return document.body.appendChild(n), document.querySelector(".js-sudo-prompt")
                } else throw new Error("couldn't load sudo prompt")
            }
            Jt(za, "loadPromptTemplate");
            let uo = !1;
            async function fo() {
                if (lo) return !1;
                lo = !0, uo = !1;
                const t = (await za()).content.cloneNode(!0),
                    n = await ht({
                        content: t
                    });
                return await new Promise(r => {
                    n.addEventListener("dialog:remove", function() {
                        lo = !1, r()
                    }, {
                        once: !0
                    })
                }), uo
            }
            Jt(fo, "sudoPrompt"), fn(".js-sudo-form", async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    if (!n.response) throw n;
                    let r;
                    switch (n.response.status) {
                        case 401:
                            r = "Incorrect password.";
                            break;
                        case 429:
                            r = "Too many password attempts. Please wait and try again later.";
                            break;
                        default:
                            r = "Failed to receive a response. Please try again later."
                    }
                    e.querySelector(".js-sudo-error").textContent = r, e.querySelector(".js-sudo-error").hidden = !1, e.querySelector(".js-sudo-password").value = "";
                    return
                }
                uo = !0, e.closest("details").removeAttribute("open")
            });
            async function Ua() {
                const e = await fetch("/sessions/in_sudo", {
                    headers: {
                        accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                return e.ok && await e.text() === "true" ? !0 : fo()
            }
            Jt(Ua, "triggerSudoPrompt");
            const mo = new WeakMap;
            let g = null;

            function Au() {
                return !!g
            }

            function Cu(e, t, n) {
                mo.set(e, {
                    sortStarted: t,
                    sortFinished: n
                }), e.addEventListener("dragstart", Pu), e.addEventListener("dragenter", xu), e.addEventListener("dragend", ju), e.addEventListener("drop", Ou), e.addEventListener("dragover", Mu)
            }

            function ku(e, t) {
                if (e.parentNode === t.parentNode) {
                    let n = e;
                    for (; n;) {
                        if (n === t) return !0;
                        n = n.previousElementSibling
                    }
                }
                return !1
            }

            function Wa(e, t) {
                return e.closest("task-lists") === t.closest("task-lists")
            }

            function Pu(e) {
                if (e.currentTarget !== e.target) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".contains-task-list");
                if (!n || (t.classList.add("is-ghost"), e.dataTransfer && e.dataTransfer.setData("text/plain", (t.textContent || "").trim()), !t.parentElement)) return;
                const r = Array.from(t.parentElement.children),
                    o = r.indexOf(t),
                    i = mo.get(t);
                i && i.sortStarted(n), g = {
                    didDrop: !1,
                    dragging: t,
                    dropzone: t,
                    sourceList: n,
                    sourceSibling: r[o + 1] || null,
                    sourceIndex: o
                }
            }

            function xu(e) {
                if (!g) return;
                const t = e.currentTarget;
                if (t instanceof Element) {
                    if (!Wa(g.dragging, t)) {
                        e.stopPropagation();
                        return
                    }
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), g.dropzone !== t && (g.dragging.classList.add("is-dragging"), g.dropzone = t, ku(g.dragging, t) ? t.before(g.dragging) : t.after(g.dragging))
                }
            }

            function Ou(e) {
                if (!g) return;
                e.preventDefault(), e.stopPropagation();
                const t = e.currentTarget;
                if (!(t instanceof Element) || (g.didDrop = !0, !g.dragging.parentElement)) return;
                let n = Array.from(g.dragging.parentElement.children).indexOf(g.dragging);
                const r = t.closest(".contains-task-list");
                if (!r || g.sourceIndex === n && g.sourceList === r) return;
                g.sourceList === r && g.sourceIndex < n && n++;
                const o = {
                        list: g.sourceList,
                        index: g.sourceIndex
                    },
                    i = {
                        list: r,
                        index: n
                    },
                    s = mo.get(g.dragging);
                s && s.sortFinished({
                    src: o,
                    dst: i
                })
            }

            function ju() {
                !g || (g.dragging.classList.remove("is-dragging"), g.dragging.classList.remove("is-ghost"), g.didDrop || g.sourceList.insertBefore(g.dragging, g.sourceSibling), g = null)
            }

            function Mu(e) {
                if (!g) return;
                const t = e.currentTarget;
                if (t instanceof Element) {
                    if (!Wa(g.dragging, t)) {
                        e.stopPropagation();
                        return
                    }
                    e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move")
                }
            }
            const Xa = new WeakMap;
            class ae extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("change", n => {
                        const r = n.target;
                        r instanceof HTMLInputElement && (!r.classList.contains("task-list-item-checkbox") || this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: Hu(r),
                                checked: r.checked
                            }
                        })))
                    });
                    const t = new MutationObserver(Ya.bind(null, this));
                    Xa.set(this, t), t.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), Ya(this)
                }
                disconnectedCallback() {
                    const t = Xa.get(this);
                    t && t.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(t, n, r) {
                    if (n !== r) switch (t) {
                        case "disabled":
                            Qa(this);
                            break
                    }
                }
            }
            const Ka = document.createElement("template");
            Ka.innerHTML = `
  <span class="handle">
    <svg class="drag-handle" aria-hidden="true" width="16" height="16">
      <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  </span>`;
            const Ja = new WeakMap;

            function $u(e) {
                if (Ja.get(e)) return;
                Ja.set(e, !0);
                const t = e.closest("task-lists");
                if (!(t instanceof ae) || t.querySelectorAll(".task-list-item").length <= 1) return;
                const n = Ka.content.cloneNode(!0),
                    r = n.querySelector(".handle");
                if (e.prepend(n), !r) throw new Error("handle not found");
                r.addEventListener("mouseenter", Vu), r.addEventListener("mouseleave", Bu), Cu(e, Nu, Fu), e.addEventListener("mouseenter", Iu), e.addEventListener("mouseleave", qu)
            }

            function Iu(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest("task-lists");
                n instanceof ae && n.sortable && !n.disabled && t.classList.add("hovered")
            }

            function qu(e) {
                const t = e.currentTarget;
                t instanceof Element && t.classList.remove("hovered")
            }

            function Hu(e) {
                const t = po(e);
                if (!t) throw new Error(".contains-task-list not found");
                const n = e.closest(".task-list-item"),
                    r = Array.from(t.children).filter(i => i.tagName === "LI"),
                    o = n ? r.indexOf(n) : -1;
                return [Du(t), o]
            }

            function po(e) {
                const t = e.parentElement;
                return t ? t.closest(".contains-task-list") : null
            }

            function Ru(e) {
                return po(e) === Ga(e)
            }

            function Ga(e) {
                const t = po(e);
                return t ? Ga(t) || t : null
            }

            function Ya(e) {
                const t = e.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of t) Ru(n) && $u(n);
                Qa(e)
            }

            function Qa(e) {
                for (const t of e.querySelectorAll(".task-list-item")) t.classList.toggle("enabled", !e.disabled);
                for (const t of e.querySelectorAll(".task-list-item-checkbox")) t instanceof HTMLInputElement && (t.disabled = e.disabled)
            }

            function Du(e) {
                const t = e.closest("task-lists");
                if (!t) throw new Error("parent not found");
                return Array.from(t.querySelectorAll("ol, ul")).indexOf(e)
            }
            const ho = new WeakMap;

            function Nu(e) {
                const t = e.closest("task-lists");
                if (!t) throw new Error("parent not found");
                ho.set(t, Array.from(t.querySelectorAll("ol, ul")))
            }

            function Fu({
                src: e,
                dst: t
            }) {
                const n = e.list.closest("task-lists");
                if (!n) return;
                const r = ho.get(n);
                !r || (ho.delete(n), n.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(e.list), e.index],
                        dst: [r.indexOf(t.list), t.index]
                    }
                })))
            }

            function Vu(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".task-list-item");
                if (!n) return;
                const r = n.closest("task-lists");
                r instanceof ae && r.sortable && !r.disabled && n.setAttribute("draggable", "true")
            }

            function Bu(e) {
                if (Au()) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".task-list-item");
                !n || n.setAttribute("draggable", "false")
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = ae, window.customElements.define("task-lists", ae));
            var zu = Object.defineProperty,
                P = (e, t) => zu(e, "name", {
                    value: t,
                    configurable: !0
                });
            x(".js-task-list-container .js-task-list-field", function(e) {
                const t = e.closest(".js-task-list-container");
                Gt(t), Zt(t)
            }), w("task-lists-move", "task-lists", function(e) {
                const {
                    src: t,
                    dst: n
                } = e.detail, r = e.currentTarget.closest(".js-task-list-container");
                bo(r, "reordered", {
                    operation: "move",
                    src: t,
                    dst: n
                })
            }), w("task-lists-check", "task-lists", function(e) {
                const {
                    position: t,
                    checked: n
                } = e.detail, r = e.currentTarget.closest(".js-task-list-container");
                bo(r, `checked:${n?1:0}`, {
                    operation: "check",
                    position: t,
                    checked: n
                })
            });

            function Gt(e) {
                if (e.querySelector(".js-task-list-field")) {
                    const t = e.querySelectorAll("task-lists");
                    for (const n of t)
                        if (n instanceof ae) {
                            n.disabled = !1;
                            const r = n.querySelectorAll("button");
                            for (const o of r) o.disabled = !1
                        }
                }
            }
            P(Gt, "enableTaskList");

            function go(e) {
                for (const t of e.querySelectorAll("task-lists"))
                    if (t instanceof ae) {
                        t.disabled = !0;
                        const n = t.querySelectorAll("button");
                        for (const r of n) r.disabled = !0
                    }
            }
            P(go, "disableTaskList");

            function bo(e, t, n) {
                const r = e.querySelector(".js-comment-update");
                go(e), Zt(e);
                const o = r.elements.namedItem("task_list_track");
                o instanceof Element && o.remove();
                const i = r.elements.namedItem("task_list_operation");
                i instanceof Element && i.remove();
                const s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", t), r.appendChild(s);
                const a = document.createElement("input");
                if (a.setAttribute("type", "hidden"), a.setAttribute("name", "task_list_operation"), a.setAttribute("value", JSON.stringify(n)), r.appendChild(a), !r.elements.namedItem("task_list_key")) {
                    const f = r.querySelector(".js-task-list-field").getAttribute("name").split("[")[0],
                        d = document.createElement("input");
                    d.setAttribute("type", "hidden"), d.setAttribute("name", "task_list_key"), d.setAttribute("value", f), r.appendChild(d)
                }
                e.classList.remove("is-comment-stale"), kn(r)
            }
            P(bo, "saveTaskList"), fn(".js-task-list-container .js-comment-update", async function(e, t) {
                const n = e.closest(".js-task-list-container"),
                    r = e.elements.namedItem("task_list_track");
                r instanceof Element && r.remove();
                const o = e.elements.namedItem("task_list_operation");
                o instanceof Element && o.remove();
                let i;
                try {
                    i = await t.json()
                } catch (s) {
                    let a;
                    try {
                        a = JSON.parse(s.response.text)
                    } catch {}
                    if (a && a.stale) {
                        const c = n.querySelector(".js-task-list-field");
                        c.classList.add("session-resumable-canceled"), c.classList.remove("js-session-resumable")
                    } else s.response.status === 422 || window.location.reload()
                }
                i && (o && i.json.source && (n.querySelector(".js-task-list-field").value = i.json.source), Gt(n), requestAnimationFrame(() => Zt(n)))
            });
            let et = !1,
                Yt = !1,
                tt = null;

            function Za(e) {
                e.inputType === "insertLineBreak" ? et = !0 : et = !1
            }
            P(Za, "tryAutoCompleteOnBeforeInput");

            function ec(e) {
                const t = e;
                if (!et && !(t.inputType === "insertLineBreak")) return;
                const n = t.target;
                tc(n), et = !1
            }
            P(ec, "autoCompleteOnInput");

            function tc(e) {
                const t = lc(e.value, [e.selectionStart, e.selectionEnd]);
                t !== void 0 && Qt(e, t)
            }
            P(tc, "listAutocomplete");

            function Qt(e, t) {
                if (tt === null || tt === !0) {
                    e.contentEditable = "true";
                    try {
                        et = !1;
                        let n;
                        t.commandId === sc.insertText ? (n = t.autocompletePrefix, t.writeSelection[0] !== null && t.writeSelection[1] !== null && (e.selectionStart = t.writeSelection[0], e.selectionEnd = t.writeSelection[1])) : e.selectionStart = t.selection[0], tt = document.execCommand(t.commandId, !1, n)
                    } catch {
                        tt = !1
                    }
                    e.contentEditable = "false"
                }
                if (!tt) {
                    try {
                        document.execCommand("ms-beginUndoUnit")
                    } catch {}
                    e.value = t.text;
                    try {
                        document.execCommand("ms-endUndoUnit")
                    } catch {}
                    e.dispatchEvent(new CustomEvent("input", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                t.selection[0] != null && t.selection[1] != null && (e.selectionStart = t.selection[0], e.selectionEnd = t.selection[1])
            }
            P(Qt, "updateElementText");

            function nc(e) {
                if (Yt) return;
                const t = e;
                if (t.key === "Enter" && t.shiftKey && !t.metaKey) {
                    const n = t.target,
                        r = ac(n.value, [n.selectionStart, n.selectionEnd]);
                    if (r === void 0) return;
                    Qt(n, r), t.preventDefault(), W(n, "change")
                }
            }
            P(nc, "handleShiftEnter");

            function rc() {
                Yt = !0
            }
            P(rc, "onCompositionStart");

            function oc() {
                Yt = !1
            }
            P(oc, "onCompositionEnd");

            function ic(e) {
                if (Yt) return;
                const t = e;
                if (t.key === "Escape") {
                    fc(e);
                    return
                }
                if (t.key !== "Tab") return;
                const n = t.target,
                    r = uc(n.value, [n.selectionStart, n.selectionEnd], t.shiftKey);
                r !== void 0 && (t.preventDefault(), Qt(n, r))
            }
            P(ic, "updateIndentation"), x(".js-task-list-field", {
                subscribe: e => it(U(e, "keydown", ic), U(e, "keydown", nc), U(e, "beforeinput", Za), U(e, "input", ec), U(e, "compositionstart", rc), U(e, "compositionend", oc))
            });
            var sc = (e => (e.insertText = "insertText", e.delete = "delete", e))(sc || {});
            const Uu = /^(\s*)?/;

            function ac(e, t) {
                const n = t[0];
                if (!n || !e) return;
                const r = e.substring(0, n).split(`
`),
                    o = r[r.length - 1],
                    i = o == null ? void 0 : o.match(Uu);
                if (!i) return;
                const a = `
${i[1]||""}`;
                return {
                    text: e.substring(0, n) + a + e.substring(n),
                    autocompletePrefix: a,
                    selection: [n + a.length, n + a.length],
                    commandId: "insertText",
                    writeSelection: [null, null]
                }
            }
            P(ac, "addSoftNewline");
            const Wu = /^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;

            function cc(e, t) {
                let n = e.split(`
`);
                return n = n.map(r => {
                    if (r.replace(/^\s+/, "").startsWith(`${t}.`)) {
                        const o = r.replace(`${t}`, `${t+1}`);
                        return t += 1, o
                    }
                    return r
                }), n.join(`
`)
            }
            P(cc, "updateRemainingNumberBullets");

            function lc(e, t) {
                const n = t[0];
                if (!n || !e) return;
                const r = e.substring(0, n).split(`
`),
                    o = r[r.length - 2],
                    i = o == null ? void 0 : o.match(Wu);
                if (!i) return;
                const s = i[0],
                    a = i[1],
                    c = i[2],
                    l = parseInt(i[3], 10),
                    f = Boolean(i[4]),
                    d = !isNaN(l);
                let m = `${d?`${l+1}.`:c} ${f?"[ ] ":""}`,
                    h = e.indexOf(`
`, n);
                h < 0 && (h = e.length);
                const y = e.substring(n, h);
                if (y.startsWith(m) && (m = ""), o.replace(s, "").trim().length > 0 || y.trim().length > 0) {
                    let p = `${a}${m}`,
                        S = e.substring(n);
                    const k = p.length;
                    let I = [null, null];
                    const q = /^\s*$/g;
                    let ee = e.substring(0, n) + p + S;
                    return d && !e.substring(n).match(q) && (S = cc(e.substring(n), l + 1), p += S, I = [n, n + p.length], ee = e.substring(0, n) + p), {
                        text: ee,
                        autocompletePrefix: p,
                        selection: [n + k, n + k],
                        commandId: "insertText",
                        writeSelection: I
                    }
                } else {
                    const p = n - `
${s}`.length;
                    return {
                        autocompletePrefix: "",
                        text: e.substring(0, p) + e.substring(n),
                        selection: [p, p],
                        commandId: "delete",
                        writeSelection: [null, null]
                    }
                }
            }
            P(lc, "autocompletedList");

            function uc(e, t, n) {
                const r = t[0] || 0,
                    o = t[1] || r;
                if (t[0] === null || r === o) return;
                const i = e.substring(0, r).lastIndexOf(`
`) + 1,
                    s = e.indexOf(`
`, o - 1),
                    a = s > 0 ? s : e.length - 1,
                    c = e.substring(i, a).split(`
`);
                let l = !1,
                    f = 0,
                    d = 0;
                const u = [];
                for (const $ of c) {
                    const p = $.match(/^\s*/);
                    if (p) {
                        let S = p[0];
                        const k = $.substring(S.length);
                        if (n) {
                            const I = S.length;
                            S = S.slice(0, -2), f = l ? f : S.length - I, l = !0, d += S.length - I
                        } else S += "  ", f = 2, d += 2;
                        u.push(S + k)
                    }
                }
                const m = u.join(`
`),
                    h = e.substring(0, i) + m + e.substring(a),
                    y = [Math.max(i, r + f), o + d];
                return {
                    text: h,
                    selection: y,
                    autocompletePrefix: m,
                    commandId: "insertText",
                    writeSelection: [i, a]
                }
            }
            P(uc, "indent");

            function fc(e) {
                const n = e.target;
                n.selectionDirection === "backward" ? n.selectionEnd = n.selectionStart : n.selectionStart = n.selectionEnd
            }
            P(fc, "deselectText");

            function Zt(e) {
                if (document.querySelectorAll("tracked-issues-progress").length === 0 || e.closest(".js-timeline-item")) return;
                const n = e.querySelectorAll(".js-comment-body [type=checkbox]"),
                    r = n.length,
                    o = Array.from(n).filter(s => s.checked).length,
                    i = document.querySelectorAll("tracked-issues-progress[data-type=checklist]");
                for (const s of i) s.setAttribute("data-completed", String(o)), s.setAttribute("data-total", String(r))
            }
            P(Zt, "updateProgress");
            var Xu = Object.defineProperty,
                Ku = (e, t) => Xu(e, "name", {
                    value: t,
                    configurable: !0
                });

            function dc() {
                if ("Intl" in window) try {
                    return new window.Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch {}
            }
            Ku(dc, "timezone");
            var mc = Object.defineProperty,
                Ju = Object.getOwnPropertyDescriptor,
                Gu = (e, t) => mc(e, "name", {
                    value: t,
                    configurable: !0
                }),
                en = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? Ju(t, n) : t, i = e.length - 1, s; i >= 0; i--)(s = e[i]) && (o = (r ? s(t, n, o) : s(o)) || o);
                    return r && o && mc(t, n, o), o
                };
            let Te = class extends HTMLElement {
                connectedCallback() {
                    this.submitButton.disabled = !0, this.toggleSpecificOptions()
                }
                enableForm() {
                    this.submitButton.disabled = !1
                }
                toggleSpecificOptions() {
                    this.selectRadio.checked ? this.specificOptions.hidden = !1 : this.specificOptions.hidden = !0
                }
            };
            Gu(Te, "ActionsPolicyFormElement"), en([rt], Te.prototype, "specificOptions", 2), en([rt], Te.prototype, "submitButton", 2), en([rt], Te.prototype, "selectRadio", 2), Te = en([Po], Te);
            var Yu = Object.defineProperty,
                pc = (e, t) => Yu(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function vo(e, t = !0) {
                const n = e.querySelectorAll('[name="codespace[location]"], [name="location"]');
                if (n.length === 0) return;
                for (const s of n)
                    if (s.value) return;
                const r = e.querySelector("button[type=submit]");
                r instanceof HTMLInputElement && (r.disabled = !0);
                const o = e.getAttribute("data-codespace-locations-url");
                if (!o) return;
                const i = await yo(o);
                if (t && i)
                    for (const s of n) s.value = i.current;
                return i
            }
            pc(vo, "prefetchCodespaceLocation");
            async function yo(e) {
                const t = await fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    const n = new Error,
                        r = t.statusText ? ` ${t.statusText}` : "";
                    throw n.message = `HTTP ${t.status}${r}`, n
                }
                return t.json()
            }
            pc(yo, "fetchLocationValues"), w("submit", ".js-prefetch-codespace-location", async function(e) {
                const t = e.currentTarget;
                e.preventDefault(), await vo(t), t.submit()
            });
            var Qu = Object.defineProperty,
                hc = (e, t) => Qu(e, "name", {
                    value: t,
                    configurable: !0
                });
            w("click", ".js-toggle-inline-comment-form", function(e) {
                const t = e.currentTarget.closest(".js-line-comments");
                tn(t)
            }), w("quote-selection", ".js-line-comments", function(e) {
                tn(e.currentTarget)
            }), Vn("keydown", ".js-inline-comment-form-container form .js-comment-field", function(e) {
                const t = e.target;
                if (!t.classList.contains("js-navigation-enable") && e.key === "Escape" && t.value.length === 0) {
                    const n = t.closest("form");
                    nn(n), e.preventDefault()
                }
            }), w("click", ".js-hide-inline-comment-form", function(e) {
                const t = e.currentTarget.closest("form");
                !bt(t) || confirm(e.target.getAttribute("data-confirm-cancel-text")) ? nn(t) : e.preventDefault()
            });

            function tn(e) {
                var t;
                const n = e.querySelector(".js-inline-comment-form-container");
                n.classList.add("open"), (t = n.querySelector(".js-write-tab")) == null || t.click(), n.querySelector(".js-comment-field").focus(), W(n, "inlinecomment:focus")
            }
            hc(tn, "focusForm");

            function nn(e) {
                e.reset();
                const t = e.closest(".js-inline-comment-form-container");
                t.classList.remove("open");
                const n = t.querySelector(".js-multi-line-preview");
                n && (n.hidden = !0), W(t, "inlinecomment:collapse")
            }
            hc(nn, "blurForm");
            var Zu = Object.defineProperty,
                wo = (e, t) => Zu(e, "name", {
                    value: t,
                    configurable: !0
                });
            class Eo {
                constructor(t, n, r) {
                    this.diffId = t, this.side = n, this.lineNumber = r, this.element = xt(document, this.anchor())
                }
                sideForCommenting() {
                    return this.element && this.element.classList.contains("blob-num-context") ? "right" : {
                        R: "right",
                        L: "left"
                    }[this.side]
                }
                isContext() {
                    return this.element ? this.element.classList.contains("blob-num-context") : !1
                }
                anchor() {
                    return `${this.diffId}${this.anchorSuffix()}`
                }
                anchorSuffix() {
                    return `${this.side}${this.lineNumber}`
                }
                is(t) {
                    return this.diffId === t.diffId && this.side === t.side && this.lineNumber === t.lineNumber
                }
            }
            wo(Eo, "DiffPosition");
            class So {
                constructor(t, n, r, o, i) {
                    this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this._rows = new Set, this._isAcrossHunks = !1, this._isContextOnly = !0, this._includesExpandedLine = !1, this._commentOutsideTheDiff = !1, this.diffId = t, this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${t}"]`), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new Eo(t, n, r), this.end = new Eo(t, o, i), this.lineCount = 0, this.parse()
                }
                anchor() {
                    const t = [];
                    return t.push(this.start.anchor()), this.start.is(this.end) || t.push(this.end.anchorSuffix()), t.join("-")
                }
                parse() {
                    if (!this.diffTable) return;
                    let t = this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));
                    t = this.filterInRange(t), this.lineCount = t.length, this.elements = this.expandRelatedElements(t), this._commentOutsideTheDiff = this.diffTable.classList.contains("js-comment-outside-the-diff"), this.isParsed = !0
                }
                unify(t) {
                    if (!this.isSplit) return Array.from(t);
                    const n = [];
                    let r = [],
                        o = [];
                    for (const i of t) i.classList.contains("blob-num-addition") ? r.push(i) : i.classList.contains("blob-num-deletion") ? o.push(i) : (n.push(...o, ...r, i), r = [], o = []);
                    return n.push(...o, ...r), n
                }
                filterInRange(t) {
                    if (!this.start.element || !this.end.element) return [];
                    let n = t.indexOf(this.start.element),
                        r = t.indexOf(this.end.element);
                    if (n > r) {
                        [n, r] = [r, n];
                        const [o, i] = [this.end, this.start];
                        this.start = o, this.end = i
                    }
                    return t.slice(n, r + 1)
                }
                isContextOnly() {
                    return this.isParsed || this.parse(), this._isContextOnly
                }
                isAcrossHunks() {
                    return this.isParsed || this.parse(), this._isAcrossHunks
                }
                includesExpandedLine() {
                    return this.isParsed || this.parse(), this._includesExpandedLine
                }
                commentOutsideTheDiffEnabled() {
                    return this.isParsed || this.parse(), this._commentOutsideTheDiff
                }
                rows() {
                    return this.isParsed || this.parse(), this._rows
                }
                expandRelatedElements(t) {
                    const n = this.isSplit,
                        r = t[0],
                        o = t[t.length - 1];
                    if (r && o) {
                        const s = r.closest("[data-hunk]"),
                            a = o.closest("[data-hunk]");
                        if (s && a) {
                            const c = s.getAttribute("data-hunk"),
                                l = a.getAttribute("data-hunk");
                            c !== l && (this._isAcrossHunks = !0)
                        }
                    }
                    const i = wo((s, a) => {
                        !this._includesExpandedLine && a.closest(".blob-expanded") && (this._includesExpandedLine = !0);
                        const c = a.parentElement;
                        c instanceof HTMLElement && this._rows.add(c);
                        const l = a.classList.contains("blob-num-deletion") || a.classList.contains("blob-num-addition");
                        if (l && (this._isContextOnly = !1), !c) return s;
                        if (n && l) return Array.from(c.children).indexOf(a) < 2 ? s.add(c.children[0]).add(c.children[1]) : s.add(c.children[2]).add(c.children[3]);
                        for (const f of Array.from(c.children)) s.add(f);
                        return s
                    }, "expander");
                    return t.reduce(i, new Set)
                }
            }
            wo(So, "DiffRange");
            var ef = Object.defineProperty,
                tf = (e, t) => ef(e, "name", {
                    value: t,
                    configurable: !0
                });

            function rn(e) {
                const t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                if (t != null && t.length === 6) return t;
                const n = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                return n != null && n.length === 6 ? n : null
            }
            tf(rn, "matchHash");
            var nf = Object.defineProperty,
                C = (e, t) => nf(e, "name", {
                    value: t,
                    configurable: !0
                });
            let _ = null,
                on = null,
                sn = !1,
                ce = null;

            function gc() {
                return _
            }
            C(gc, "getCurrentRange");

            function Lo(e) {
                return !!e.closest(".js-multi-line-comments-enabled")
            }
            C(Lo, "isMultiLineCommentingEnabled");

            function an(e, t) {
                if (!Lo(e)) return !1;
                const {
                    start: {
                        lineNumber: n
                    },
                    end: {
                        lineNumber: r
                    }
                } = t;
                return !(n === r && t.isContextOnly() || !t.commentOutsideTheDiffEnabled() && (t.isAcrossHunks() || t.includesExpandedLine()))
            }
            C(an, "isMultiLineCommentAllowed");

            function cn(e) {
                return e.closest(".js-diff-table").classList.contains("is-selecting")
            }
            C(cn, "isSelecting");

            function bc() {
                window.history.replaceState(null, "", "#"), Z()
            }
            C(bc, "clearSelection");

            function nt(e, t) {
                let n = e.id;
                if (t) {
                    const r = rn(n);
                    if (!r) return;
                    const o = r[1],
                        i = r[2],
                        s = r[3];
                    if (_ && _.diffId === o) {
                        if (i === _.start.side && s < _.start.lineNumber) return;
                        const a = new So(o, _.start.side, _.start.lineNumber, i, +s);
                        n = a.anchor();
                        const c = e.closest(".js-file-content[data-hydro-view]");
                        c instanceof HTMLElement && _c(c, a), sn && cn(e) && e.closest(".js-diff-table").classList.toggle("is-commenting", an(e, a)), on = C(function() {
                            if (an(e, a)) {
                                const f = `.js-add-line-comment[data-side="${a.end.sideForCommenting()}"]`,
                                    d = e.closest("tr").querySelector(f);
                                d && a && d.click()
                            }
                        }, "showMultiLineCommentForm")
                    }
                }
                window.history.replaceState(null, null, `#${n}`), Z()
            }
            C(nt, "setSelection");

            function ln(e) {
                if (!(e instanceof HTMLElement)) return null;
                if (e.classList.contains("js-linkable-line-number")) return e;
                const t = e.previousElementSibling;
                return t ? ln(t) : null
            }
            C(ln, "nearestLinkableLineNumber");

            function vc(e) {
                !_ || e.target.closest(".js-diff-table") || (window.history.replaceState(null, null, "#"), Z())
            }
            C(vc, "handleClick");

            function yc() {
                if (!ce) return;
                nt(ce, !1);
                const e = ce.closest(".js-diff-table");
                ce = null, e.classList.add("is-selecting"), e.classList.add("is-commenting"), document.addEventListener("mouseup", function(t) {
                    e.classList.remove("is-selecting"), e.classList.remove("is-selecting", "is-commenting"), on && on(), on = null, un(e), t.preventDefault()
                }, {
                    once: !0
                })
            }
            C(yc, "beginDrag");

            function wc(e) {
                const t = ln(e);
                !t || !cn(t) || nt(t, !0)
            }
            C(wc, "commentSelectionMouseverToCode");

            function Ec(e) {
                !cn(e) || nt(e, !0)
            }
            C(Ec, "commentSelectionMouseverToLineNumbers");

            function _o(e) {
                const t = e.target;
                if (!(t instanceof Element)) return;
                ce && yc();
                const n = t.closest(".blob-code, .js-linkable-line-number");
                if (!!n) {
                    if (n.classList.contains("blob-code")) return wc(n);
                    n.classList.contains("js-linkable-line-number") && Ec(n)
                }
            }
            C(_o, "handleDragMouseEvent");

            function To(e) {
                e.addEventListener("mouseenter", _o, {
                    capture: !0
                })
            }
            C(To, "addCommentSelectionEvents");

            function un(e) {
                sn = !1, e.removeEventListener("mouseenter", _o, {
                    capture: !0
                }), setTimeout(() => {
                    document.addEventListener("click", vc, {
                        once: !0
                    })
                }, 0)
            }
            C(un, "removeCommentSelectionEvents"), w("mousedown", ".js-add-line-comment", function(e) {
                if (!(e instanceof MouseEvent) || e.button !== 0) return;
                const t = e.target.parentElement;
                if (!t || !Lo(e.target)) return;
                const n = ln(t);
                if (!n) return;
                const r = e.target.closest(".js-diff-table");
                To(r), ce = n, sn = !0, e.target.addEventListener("mouseup", function() {
                    un(r), ce = null, sn = !1
                }, {
                    once: !0
                }), _ && _.lineCount > 1 && e.preventDefault()
            }), w("mousedown", ".js-linkable-line-number", function(e) {
                if (!(e instanceof MouseEvent) || e.button !== 0) return;
                const t = e.target;
                if (!(t instanceof Element)) return;
                const n = t.closest(".js-diff-table");
                n.classList.add("is-selecting"), To(n), document.addEventListener("mouseup", function() {
                    t.closest(".js-diff-table").classList.remove("is-selecting"), un(n)
                }, {
                    once: !0
                }), nt(t, e instanceof MouseEvent && e.shiftKey), e.preventDefault()
            });

            function Sc() {
                if (!_) return;
                for (const i of _.elements) i.classList.add("selected-line");
                const e = [],
                    t = [],
                    n = [],
                    r = [];
                for (const i of _.rows()) {
                    const [s, a, c, l] = i.children;
                    e.push(s), t.push(a), n.push(c), r.push(l)
                }

                function o(i) {
                    for (const [s, a] of i.entries()) {
                        if (a.classList.contains("empty-cell")) continue;
                        const c = i[s - 1];
                        (!c || !c.classList.contains("selected-line")) && a.classList.add("selected-line-top");
                        const l = i[s + 1];
                        (!l || !l.classList.contains("selected-line")) && a.classList.add("selected-line-bottom")
                    }
                }
                C(o, "doBorder"), o(e), o(t), o(n), o(r);
                for (const [i, s] of t.entries()) r[i].classList.contains("selected-line") || s.classList.add("selected-line-right");
                for (const [i, s] of n.entries()) t[i].classList.contains("selected-line") || s.classList.add("selected-line-left")
            }
            C(Sc, "drawBorderForSplit");

            function Lc() {
                if (!_) return;
                for (const r of _.elements) r.classList.add("selected-line");
                const e = Array.from(_.rows()),
                    t = e[0];
                for (const r of t.children) r.classList.add("selected-line-top");
                const n = e[e.length - 1];
                for (const r of n.children) r.classList.add("selected-line-bottom")
            }
            C(Lc, "drawBorderForUnified");

            function Z() {
                if (_) {
                    for (const c of _.elements) c.classList.remove("selected-line", "selected-line-top", "selected-line-bottom", "selected-line-left", "selected-line-right");
                    _ = null
                }
                const e = rn(window.location.hash);
                if (!e) return;
                const t = e[1],
                    n = e[2],
                    r = e[3],
                    o = e[4] || n,
                    i = e[5] || r;
                _ = new So(t, n, +r, o, +i);
                const a = Array.from(_.elements)[0];
                !a || (a.closest(".js-diff-table").classList.contains("file-diff-split") ? Sc() : Lc())
            }
            C(Z, "showHighlight");

            function _c(e, t) {
                const n = {
                    starting_diff_position: t.start.side + t.start.lineNumber,
                    ending_diff_position: t.end.side + t.end.lineNumber,
                    line_count: t.lineCount
                };
                e.setAttribute("data-hydro-client-context", JSON.stringify(n)), eo(e)
            }
            C(_c, "sendHydroEvent"), Xe(Z), x(".blob-expanded", Z), x(".js-diff-progressive-loader", function(e) {
                e.addEventListener("load", Z)
            }), x(".js-diff-entry-loader", function(e) {
                e.addEventListener("load", Z)
            }), w("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
                if (!(e.target instanceof Element)) return;
                e.preventDefault(), e.target.closest(".js-rich-diff").classList.remove("collapsed")
            }), w("click", ".js-show-rich-diff", function(e) {
                const t = e.currentTarget.closest(".js-warn-no-visible-changes");
                if (!t) return;
                t.classList.add("d-none");
                const r = t.parentElement.querySelector(".js-no-rich-changes");
                r && r.classList.remove("d-none")
            });
            var rf = Object.defineProperty,
                of = (e, t) => rf(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Ao(e, t) {
                const n = e.nextElementSibling;
                return n instanceof HTMLElement ? n.classList.contains(t) ? n : Ao(n, t) : null
            } of (Ao, "findNextElementSibling")
        }
    }
});
//# sourceMappingURL=chunk-frameworks-bf843d64.js.map