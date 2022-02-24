System.register(["./chunk-frameworks.js", "./chunk-vendor.js", "./chunk-index.js", "./chunk-index2.js", "./chunk-index3.js", "./chunk-index4.js", "./chunk-index.esm.js", "./chunk-cookies.js", "./chunk-edit.js", "./chunk-index5.js", "./chunk-failbot.js", "./chunk-responsive-underlinenav.js", "./chunk-tag-input.js"], function(Py, y) {
    "use strict";
    var Tt, Ct, Fe, He, Oi, ae, Oe, xt, Te, E, U, At, bn, Pt, Di, ce, qt, Ir, Rr, Fr, Bi, Ni, Mt, le, De, yn, Hr, vn, Ui, Or, W, ue, Dr, ee, he, K, Be, Ne, wn, Wi, $t, zi, Vi, Ki, Xi, Gi, Ji, Br, Nr, Qi, Yi, Ue, It, Zi, ea, ge, ta, na, ra, Ur, Wr, oa, sa, ia, aa, jn, ca, la, Ln, ua, zr, da, Vr, fa, ma, pa, Kr, ha, ga, ba, Rt, ya, Xr, va, P, Ce, te, Gr, f, C, v, p, We, de, fe, wa, ja, La, Sa, Ea, ka, _a, Ta, Ca, xa, Aa, Jr, Qr, Pa, Sn, qa, Ma, $a, En, kn, Ia, Ft, Ht, Ra, Fa, Ha, Oa, Da, Yr, Ba, Zr, Ot, Na, Ua, Wa, za, Va, Ka, Xa, w, _n, eo, Ga, Ja, to, no, ro, Qa, Ya, Za, ec;
    return {
        setters: [function(u) {
            Tt = u.v, Ct = u.k, Fe = u.l, He = u.n, Oi = u.p, ae = u.q, Oe = u.t, xt = u.o, Te = u.w, E = u.c, U = u.r, At = u.x, bn = u.y, Pt = u.z, Di = u.A, ce = u.B, qt = u.C, Ir = u.D, Rr = u.E, Fr = u.F, Bi = u.G, Ni = u.H, Mt = u.I, le = u.a, De = u.J, yn = u.K, Hr = u.L, vn = u.M, Ui = u.N, Or = u.O, W = u.P, ue = u.m, Dr = u.Q, ee = u.R, he = u.g, K = u.e, Be = u.S, Ne = u.T, wn = u.U, Wi = u.V, $t = u.W, zi = u.X, Vi = u.Y, Ki = u.Z, Xi = u._, Gi = u.$, Ji = u.a0, Br = u.a1, Nr = u.a2, Qi = u.a3, Yi = u.a4, Ue = u.j, It = u.a5, Zi = u.a6, ea = u.a7, ge = u.a8, ta = u.i, na = u.a9, ra = u.aa, Ur = u.ab, Wr = u.ac, oa = u.ad, sa = u.ae, ia = u.af, aa = u.ag, jn = u.u, ca = u.ah, la = u.s, Ln = u.ai, ua = u.aj, zr = u.ak, da = u.al, Vr = u.am, fa = u.an, ma = u.ao, pa = u.ap, Kr = u.aq, ha = u.ar, ga = u.as, ba = u.at, Rt = u.h, ya = u.au, Xr = u.av, va = u.aw
        }, function(u) {
            P = u.t, Ce = u.b, te = u.c, Gr = u.C, f = u.a, C = u.r, v = u.f, p = u.o, We = u.j, de = u.i, fe = u.T, wa = u.s, ja = u.k, La = u.l, Sa = u.m, Ea = u.n, ka = u.q, _a = u.v, Ta = u.w, Ca = u.x, xa = u.y, Aa = u.z, Jr = u.A, Qr = u.B, Pa = u.D, Sn = u.h, qa = u.Q, Ma = u.M, $a = u.E, En = u.e, kn = u.g, Ia = u.F, Ft = u.G, Ht = u.H, Ra = u.I, Fa = u.J, Ha = u.K, Oa = u.L, Da = u.P, Yr = u.N, Ba = u.O, Zr = u.R, Ot = u.U, Na = u.V, Ua = u.W, Wa = u.X, za = u.Y, Va = u.Z, Ka = u._, Xa = u.$, w = u.a0
        }, function(u) {
            _n = u.T
        }, function(u) {
            eo = u.I
        }, function(u) {
            Ga = u.R
        }, function(u) {
            Ja = u.A
        }, function(u) {
            to = u.C
        }, function(u) {
            no = u.g, ro = u.d, Qa = u.s
        }, function() {}, function(u) {
            Ya = u.R, Za = u.F
        }, function(u) {
            ec = u.r
        }, function() {}, function() {}],
        execute: function() {
            var u = Object.defineProperty,
                dp = (e, t) => u(e, "name", {
                    value: t,
                    configurable: !0
                }),
                tc = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                _ = (e, t, n) => (tc(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                ze = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                be = (e, t, n, r) => (tc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                Ve, X, xe, ne, Dt, oo, st;
            class so extends HTMLElement {
                constructor() {
                    super(...arguments);
                    ze(this, Ve, !1), ze(this, X, new Set), ze(this, xe, new Map), ze(this, ne, 1 / 0), ze(this, Dt, new Map), ze(this, oo, new Map), ze(this, st, 0)
                }
                static get observedAttributes() {
                    return ["data-updating"]
                }
                get updating() {
                    return this.getAttribute("data-updating") === "lazy" ? "lazy" : "eager"
                }
                set updating(t) {
                    this.setAttribute("data-updating", t)
                }
                get size() {
                    return _(this, X).size
                }
                get range() {
                    const t = this.getBoundingClientRect().height,
                        {
                            scrollTop: n
                        } = this,
                        r = `${n}-${t}`;
                    if (_(this, Dt).has(r)) return _(this, Dt).get(r);
                    let o = 0,
                        s = 0,
                        i = 0,
                        a = 0;
                    const c = _(this, xe);
                    for (const l of _(this, X)) {
                        const d = c.get(l) || _(this, ne);
                        if (i + d < n) i += d, o += 1, s += 1;
                        else if (a - d < t) a += d, s += 1;
                        else if (a >= t) break
                    }
                    return [o, s]
                }
                attributeChangedCallback(t, n, r) {
                    if (n === r || !this.isConnected) return;
                    const o = t === "data-updating" && r === "eager",
                        s = t === "data-sorted" && this.hasAttribute("data-sorted");
                    (o || s) && this.update()
                }
                connectedCallback() {
                    this.addEventListener("scroll", () => this.update()), this.updateSync = this.updateSync.bind(this)
                }
                update() {
                    _(this, st) && cancelAnimationFrame(_(this, st)), !_(this, Ve) && this.hasAttribute("data-sorted") ? be(this, st, requestAnimationFrame(() => {
                        this.dispatchEvent(new CustomEvent("virtual-list-sort", {
                            cancelable: !0
                        })) && this.sort()
                    })) : be(this, st, requestAnimationFrame(this.updateSync))
                }
                renderItem(t) {
                    const n = {
                        item: t,
                        fragment: document.createDocumentFragment()
                    };
                    return this.dispatchEvent(new CustomEvent("virtual-list-render-item", {
                        detail: n
                    })), n.fragment.children[0]
                }
                recalculateHeights(t) {
                    const n = this.querySelector("ul, ol, tbody");
                    n && (n.append(this.renderItem(t)), be(this, ne, n.children[0].getBoundingClientRect().height), _(this, xe).set(t, _(this, ne)), n.replaceChildren())
                }
                updateSync() {
                    const t = this.querySelector("ul, ol");
                    if (!t) return;
                    const [n, r] = this.range;
                    if (r < n || !this.dispatchEvent(new CustomEvent("virtual-list-update", {
                            cancelable: !0
                        }))) return;
                    const s = new Map,
                        i = _(this, oo);
                    let a = -1,
                        c = !0,
                        l = 0;
                    for (const j of _(this, X)) {
                        if (a === -1 && (!Number.isFinite(_(this, ne)) || _(this, ne) === 0) && this.recalculateHeights(j), a += 1, a < n) {
                            l += _(this, xe).get(j) || _(this, ne);
                            continue
                        }
                        if (a > r) {
                            c = !1;
                            break
                        }
                        let L = null;
                        if (i.has(j)) L = i.get(j);
                        else {
                            if (L = this.renderItem(j), !L) continue;
                            i.set(j, L)
                        }
                        s.set(j, L)
                    }
                    t.replaceChildren(...s.values()), t.style.paddingTop = `${l}px`;
                    const d = this.size * _(this, ne);
                    t.style.height = `${d||0}px`;
                    let m = !1;
                    const h = this.getBoundingClientRect().bottom;
                    for (const [j, L] of s) {
                        const {
                            height: x,
                            bottom: S
                        } = L.getBoundingClientRect();
                        m = m || S >= h, _(this, xe).set(j, x)
                    }
                    if (!c && this.size > s.size && !m) return _(this, Dt).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`), this.update();
                    this.dispatchEvent(new CustomEvent("virtual-list-updated"))
                }
                has(t) {
                    return _(this, X).has(t)
                }
                add(t) {
                    return _(this, X).add(t), be(this, Ve, !1), Number.isFinite(_(this, ne)) || this.recalculateHeights(t), this.updating === "eager" && this.update(), this
                }
                delete(t) {
                    const n = _(this, X).delete(t);
                    return be(this, Ve, !1), _(this, xe).delete(t), this.updating === "eager" && this.update(), n
                }
                clear() {
                    _(this, X).clear(), _(this, xe).clear(), be(this, ne, 1 / 0), be(this, Ve, !0), this.updating === "eager" && this.update()
                }
                forEach(t, n) {
                    for (const r of this) t.call(n, r, r, this)
                }
                entries() {
                    return _(this, X).entries()
                }
                values() {
                    return _(this, X).values()
                }
                keys() {
                    return _(this, X).keys()
                }[Symbol.iterator]() {
                    return _(this, X)[Symbol.iterator]()
                }
                sort(t) {
                    return be(this, X, new Set(Array.from(this).sort(t))), be(this, Ve, !0), this.updating === "eager" && this.update(), this
                }
            }
            dp(so, "VirtualListElement"), Ve = new WeakMap, X = new WeakMap, xe = new WeakMap, ne = new WeakMap, Dt = new WeakMap, oo = new WeakMap, st = new WeakMap, window.customElements.get("virtual-list") || (window.VirtualListElement = so, window.customElements.define("virtual-list", so));
            var fp = Object.defineProperty,
                io = (e, t) => fp(e, "name", {
                    value: t,
                    configurable: !0
                }),
                nc = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                Ae = (e, t, n) => (nc(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                Tn = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                Pe = (e, t, n, r) => (nc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                it, at, Ke, Bt;

            function rc(e) {
                return Boolean(e instanceof Set || e && typeof e == "object" && "size" in e && "add" in e && "delete" in e && "clear" in e)
            }
            io(rc, "isSetAlike");
            class ao extends HTMLElement {
                constructor() {
                    super(...arguments);
                    Tn(this, it, 0), Tn(this, at, null), Tn(this, Ke, void 0), Tn(this, Bt, new Set), this.filtered = new Set, this.filter = io((t, n) => String(t).includes(n), "filter")
                }
                static get observedAttributes() {
                    return ["src", "loading", "data-property", "aria-owns"]
                }
                get input() {
                    return this.querySelector("input, textarea")
                }
                get src() {
                    return this.getAttribute("src") || ""
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
                get property() {
                    return this.getAttribute("data-property") || ""
                }
                set property(t) {
                    this.setAttribute("data-property", t)
                }
                reset() {
                    this.filtered.clear(), Pe(this, Bt, new Set)
                }
                clear() {
                    !this.input || (this.input.value = "", this.input.dispatchEvent(new Event("input")))
                }
                attributeChangedCallback(t, n, r) {
                    const o = this.isConnected && this.src,
                        s = this.loading === "eager",
                        i = t === "src" || t === "loading" || t === "accept" || t === "data-property",
                        a = t === "src" || t === "data-property",
                        c = n !== r;
                    if (a && c && (Pe(this, at, null), Ae(this, Ke) && clearTimeout(Ae(this, Ke))), o && s && i && c) cancelAnimationFrame(Ae(this, it)), Pe(this, it, requestAnimationFrame(() => this.load()));
                    else if (t === "aria-owns") {
                        const l = this.ownerDocument.getElementById(r);
                        if (!l) return;
                        rc(l) && (this.filtered = l)
                    }
                }
                connectedCallback() {
                    this.src && this.loading === "eager" && (cancelAnimationFrame(Ae(this, it)), Pe(this, it, requestAnimationFrame(() => this.load())));
                    const t = this.input;
                    if (!t) return;
                    const n = this.getAttribute("aria-owns");
                    n !== null && this.attributeChangedCallback("aria-owns", "", n), t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), this.src && this.loading === "lazy" && (document.activeElement === t ? this.load() : t.addEventListener("focus", () => {
                        this.load()
                    }, {
                        once: !0
                    })), t.addEventListener("input", this)
                }
                disconnectedCallback() {
                    var t;
                    (t = this.input) == null || t.removeEventListener("input", this)
                }
                handleEvent(t) {
                    var n, r;
                    t.type === "input" && (Ae(this, Ke) && clearTimeout(Ae(this, Ke)), Pe(this, Ke, window.setTimeout(() => this.filterItems(), ((r = (n = this.input) == null ? void 0 : n.value) == null ? void 0 : r.length) || 0 < 3 ? 300 : 100)))
                }
                async load() {
                    if (!this.src) throw new Error("missing src");
                    await new Promise(t => setTimeout(t, 0)), this.dispatchEvent(new Event("loadstart"));
                    try {
                        const t = await this.fetch(this.request());
                        if (location.origin + this.src !== t.url) return;
                        if (!t.ok) throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);
                        Pe(this, Bt, new Set((await t.json())[this.property])), Pe(this, at, null), this.dispatchEvent(new Event("loadend"))
                    } catch (t) {
                        throw (async () => (this.dispatchEvent(new Event("error")), this.dispatchEvent(new Event("loadend"))))(), t
                    }
                    this.filtered.clear(), this.filterItems()
                }
                request() {
                    return new Request(this.src, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "application/json"
                        }
                    })
                }
                fetch(t) {
                    return fetch(t)
                }
                filterItems() {
                    var t, n;
                    const r = (n = (t = this.input) == null ? void 0 : t.value.trim()) != null ? n : "",
                        o = Ae(this, at);
                    if (Pe(this, at, r), r === o) return;
                    this.dispatchEvent(new CustomEvent("virtual-filter-input-filter"));
                    let s;
                    o && r.includes(o) ? s = this.filtered : (s = Ae(this, Bt), this.filtered.clear());
                    for (const i of s) this.filter(i, r) ? this.filtered.add(i) : this.filtered.delete(i);
                    this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))
                }
            }
            io(ao, "VirtualFilterInputElement"), it = new WeakMap, at = new WeakMap, Ke = new WeakMap, Bt = new WeakMap, window.customElements.get("virtual-filter-input") || (window.VirtualFilterInputElement = ao, window.customElements.define("virtual-filter-input", ao));
            var mp = Object.defineProperty,
                oc = (e, t) => mp(e, "name", {
                    value: t,
                    configurable: !0
                }),
                sc = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                Xe = (e, t, n) => (sc(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                Cn = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                xn = (e, t, n, r) => (sc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                An, Pn, ct, Nt;

            function ic(e, t) {
                const n = [];
                let r = 0;
                for (let o = 0; o < e.length; o++) {
                    const s = e[o],
                        i = t.indexOf(s, r);
                    if (i === -1) return n;
                    r = i + 1, n.push(i)
                }
                return n
            }
            oc(ic, "defaultPositions");
            class qn extends HTMLElement {
                constructor() {
                    super(...arguments);
                    Cn(this, An, ""), Cn(this, Pn, ""), Cn(this, ct, void 0), Cn(this, Nt, void 0)
                }
                get query() {
                    return this.ownerInput ? this.ownerInput.value : this.getAttribute("query") || ""
                }
                set query(t) {
                    this.setAttribute("query", t)
                }
                get ownerInput() {
                    const t = this.ownerDocument.getElementById(this.getAttribute("data-owner-input") || "");
                    return t instanceof HTMLInputElement ? t : null
                }
                connectedCallback() {
                    var t;
                    this.handleEvent(), (t = this.ownerInput) == null || t.addEventListener("input", this), xn(this, ct, new MutationObserver(() => this.handleEvent()))
                }
                handleEvent() {
                    Xe(this, Nt) && cancelAnimationFrame(Xe(this, Nt)), xn(this, Nt, requestAnimationFrame(() => this.mark()))
                }
                disconnectedCallback() {
                    var t;
                    (t = this.ownerInput) == null || t.removeEventListener("input", this), Xe(this, ct).disconnect()
                }
                mark() {
                    const t = this.textContent || "",
                        n = this.query;
                    if (t === Xe(this, An) && n === Xe(this, Pn)) return;
                    xn(this, An, t), xn(this, Pn, n), Xe(this, ct).disconnect();
                    let r = 0;
                    const o = document.createDocumentFragment();
                    for (const s of (this.positions || ic)(n, t)) {
                        if (Number(s) !== s || s < r || s > t.length) continue;
                        t.slice(r, s) !== "" && o.appendChild(document.createTextNode(t.slice(r, s))), r = s + 1;
                        const a = document.createElement("mark");
                        a.textContent = t[s], o.appendChild(a)
                    }
                    o.appendChild(document.createTextNode(t.slice(r))), this.replaceChildren(o), Xe(this, ct).observe(this, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    })
                }
            }
            oc(qn, "MarkedTextElement"), An = new WeakMap, Pn = new WeakMap, ct = new WeakMap, Nt = new WeakMap, qn.observedAttributes = ["query", "data-owner-input"], window.customElements.get("marked-text") || (window.MarkedTextElement = qn, window.customElements.define("marked-text", qn));
            var ac = Object.defineProperty,
                pp = Object.getOwnPropertyDescriptor,
                hp = (e, t) => ac(e, "name", {
                    value: t,
                    configurable: !0
                }),
                Mn = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? pp(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && ac(t, n, o), o
                };
            let lt = class extends HTMLElement {
                updateURL(e) {
                    const t = e.currentTarget,
                        n = t.getAttribute("data-url") || "";
                    if (this.helpField.value = n, t.matches(".js-git-protocol-clone-url"))
                        for (const r of this.helpTexts) r.textContent = n;
                    for (const r of this.cloneURLButtons) r.classList.remove("selected");
                    t.classList.add("selected")
                }
            };
            hp(lt, "GitCloneHelpElement"), Mn([P], lt.prototype, "helpField", 2), Mn([Ce], lt.prototype, "helpTexts", 2), Mn([Ce], lt.prototype, "cloneURLButtons", 2), lt = Mn([te], lt);
            var gp = Object.defineProperty,
                $n = (e, t) => gp(e, "name", {
                    value: t,
                    configurable: !0
                });
            class In extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("input", co)
                }
                disconnectedCallback() {
                    this.removeEventListener("input", co)
                }
            }
            $n(In, "PasswordStrengthElement"), window.customElements.get("password-strength") || (window.PasswordStrengthElement = In, window.customElements.define("password-strength", In));

            function co(e) {
                const t = e.currentTarget;
                if (!(t instanceof In)) return;
                const n = e.target;
                if (!(n instanceof HTMLInputElement)) return;
                const r = n.form;
                if (!(r instanceof HTMLFormElement)) return;
                const o = cc(n.value, {
                    minimumCharacterCount: Number(t.getAttribute("minimum-character-count")),
                    passphraseLength: Number(t.getAttribute("passphrase-length"))
                });
                if (o.valid) {
                    n.setCustomValidity("");
                    const s = t.querySelector("dl.form-group");
                    s && (s.classList.remove("errored"), s.classList.add("successed"))
                } else n.setCustomValidity(t.getAttribute("invalid-message") || "Invalid");
                lc(t, o), Tt(r)
            }
            $n(co, "onInput");

            function cc(e, t) {
                const n = {
                    valid: !1,
                    hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
                    hasMinimumPassphraseLength: t.passphraseLength !== 0 && e.length >= t.passphraseLength,
                    hasLowerCase: /[a-z]/.test(e),
                    hasNumber: /\d/.test(e)
                };
                return n.valid = n.hasMinimumPassphraseLength || n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber, n
            }
            $n(cc, "validatePassword");

            function lc(e, t) {
                var n, r;
                const o = e.querySelector("[data-more-than-n-chars]"),
                    s = e.querySelector("[data-min-chars]"),
                    i = e.querySelector("[data-number-requirement]"),
                    a = e.querySelector("[data-letter-requirement]"),
                    c = ((n = e.getAttribute("error-class")) == null ? void 0 : n.split(" ").filter(d => d.length > 0)) || [],
                    l = ((r = e.getAttribute("pass-class")) == null ? void 0 : r.split(" ").filter(d => d.length > 0)) || [];
                for (const d of [o, s, i, a]) d == null || d.classList.remove(...c, ...l);
                if (t.hasMinimumPassphraseLength && o) o.classList.add(...l);
                else if (t.valid) s.classList.add(...l), i.classList.add(...l), a.classList.add(...l);
                else {
                    const d = t.hasMinimumCharacterCount ? l : c,
                        m = t.hasNumber ? l : c,
                        h = t.hasLowerCase ? l : c;
                    o == null || o.classList.add(...c), s.classList.add(...d), i.classList.add(...m), a.classList.add(...h)
                }
            }
            $n(lc, "highlightPasswordStrengthExplainer");
            var bp = Object.defineProperty,
                yp = (e, t) => bp(e, "name", {
                    value: t,
                    configurable: !0
                });
            class lo extends eo {
                async fetch(t, n = 1e3) {
                    const r = await super.fetch(t);
                    return r.status === 202 ? (await new Promise(o => setTimeout(o, n)), this.fetch(t, n * 1.5)) : r
                }
            }
            yp(lo, "PollIncludeFragmentElement"), window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = lo, window.customElements.define("poll-include-fragment", lo));
            var vp = Object.defineProperty,
                uc = (e, t) => vp(e, "name", {
                    value: t,
                    configurable: !0
                });
            class uo extends Ga {
                connectedCallback() {
                    Ut.push(this), Rn || (fo(), Rn = window.setInterval(fo, 1e3))
                }
                disconnectedCallback() {
                    const t = Ut.indexOf(this);
                    t !== -1 && Ut.splice(t, 1), Ut.length || (window.clearInterval(Rn), Rn = void 0)
                }
                getFormattedDate() {
                    const t = this.date;
                    if (!t) return;
                    const n = new Date().getTime() - t.getTime(),
                        r = Math.floor(n / 1e3),
                        o = Math.floor(r / 60),
                        s = Math.floor(o / 60),
                        i = Math.floor(s / 24),
                        a = r - o * 60,
                        c = o - s * 60,
                        l = s - i * 24;
                    return o < 1 ? this.applyPrecision([`${r}s`]) : s < 1 ? this.applyPrecision([`${o}m`, `${a}s`]) : i < 1 ? this.applyPrecision([`${s}h`, `${c}m`, `${a}s`]) : this.applyPrecision([`${i}d`, `${l}h`, `${c}m`, `${a}s`])
                }
                applyPrecision(t) {
                    const n = Number(this.getAttribute("data-precision") || t.length);
                    return t.slice(0, n).join(" ")
                }
            }
            uc(uo, "PreciseTimeAgoElement");
            const Ut = [];
            let Rn;

            function fo() {
                for (const e of Ut) e.textContent = e.getFormattedDate() || ""
            }
            uc(fo, "updateNowElements"), window.customElements.get("precise-time-ago") || (window.PreciseTimeAgoElement = uo, window.customElements.define("precise-time-ago", uo));
            var wp = Object.defineProperty,
                dc = (e, t) => wp(e, "name", {
                    value: t,
                    configurable: !0
                });
            const jp = /\s|\(|\[/;

            function fc(e, t, n) {
                const r = e.lastIndexOf(t, n - 1);
                if (r === -1 || e.lastIndexOf(" ", n - 1) > r) return;
                const s = e[r - 1];
                return s && !jp.test(s) ? void 0 : {
                    word: e.substring(r + t.length, n),
                    position: r + t.length,
                    beginningOfLine: Lp(s)
                }
            }
            dc(fc, "keyword");
            const Lp = dc(e => e === void 0 || /\n/.test(e), "isBeginningOfLine");
            var Sp = Object.defineProperty,
                Ep = (e, t) => Sp(e, "name", {
                    value: t,
                    configurable: !0
                });
            const kp = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                mc = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                pc = new WeakMap;

            function hc(e, t) {
                const n = e.nodeName.toLowerCase();
                if (n !== "textarea" && n !== "input") throw new Error("expected textField to a textarea or input");
                let r = pc.get(e);
                if (r && r.parentElement === e.parentElement) r.innerHTML = "";
                else {
                    r = document.createElement("div"), pc.set(e, r);
                    const a = window.getComputedStyle(e),
                        c = kp.slice(0);
                    n === "textarea" ? c.push("white-space:pre-wrap;") : c.push("white-space:nowrap;");
                    for (let l = 0, d = mc.length; l < d; l++) {
                        const m = mc[l];
                        c.push(`${m}:${a.getPropertyValue(m)};`)
                    }
                    r.style.cssText = c.join(" ")
                }
                const o = document.createElement("span");
                o.style.cssText = "position: absolute;", o.innerHTML = "&nbsp;";
                let s, i;
                if (typeof t == "number") {
                    let a = e.value.substring(0, t);
                    a && (s = document.createTextNode(a)), a = e.value.substring(t), a && (i = document.createTextNode(a))
                } else {
                    const a = e.value;
                    a && (s = document.createTextNode(a))
                }
                if (s && r.appendChild(s), r.appendChild(o), i && r.appendChild(i), !r.parentElement) {
                    if (!e.parentElement) throw new Error("textField must have a parentElement to mirror");
                    e.parentElement.insertBefore(r, e)
                }
                return r.scrollTop = e.scrollTop, r.scrollLeft = e.scrollLeft, {
                    mirror: r,
                    marker: o
                }
            }
            Ep(hc, "textFieldMirror");
            var _p = Object.defineProperty,
                Tp = (e, t) => _p(e, "name", {
                    value: t,
                    configurable: !0
                });

            function gc(e, t = e.selectionEnd) {
                const {
                    mirror: n,
                    marker: r
                } = hc(e, t), o = n.getBoundingClientRect(), s = r.getBoundingClientRect();
                return setTimeout(() => {
                    n.remove()
                }, 5e3), {
                    top: s.top - o.top,
                    left: s.left - o.left
                }
            }
            Tp(gc, "textFieldSelectionPosition");
            var Cp = Object.defineProperty,
                mo = (e, t) => Cp(e, "name", {
                    value: t,
                    configurable: !0
                });
            const ut = new WeakMap;
            class bc {
                constructor(t, n) {
                    this.expander = t, this.input = n, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithMenu = !1, n.addEventListener("paste", this.onpaste), n.addEventListener("input", this.oninput), n.addEventListener("keydown", this.onkeydown), n.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                activate(t, n) {
                    this.input === document.activeElement && this.setMenu(t, n)
                }
                deactivate() {
                    const t = this.menu,
                        n = this.combobox;
                    return !t || !n ? !1 : (this.menu = null, this.combobox = null, t.removeEventListener("combobox-commit", this.oncommit), t.removeEventListener("mousedown", this.onmousedown), n.destroy(), t.remove(), !0)
                }
                setMenu(t, n) {
                    this.deactivate(), this.menu = n, n.id || (n.id = `text-expander-${Math.floor(Math.random()*1e5).toString()}`), this.expander.append(n);
                    const r = n.querySelector(".js-slash-command-menu-items");
                    r ? this.combobox = new Gr(this.input, r) : this.combobox = new Gr(this.input, n);
                    const {
                        top: o,
                        left: s
                    } = gc(this.input, t.position), i = parseInt(window.getComputedStyle(this.input).fontSize);
                    n.style.top = `${o+i}px`, n.style.left = `${s}px`, this.combobox.start(), n.addEventListener("combobox-commit", this.oncommit), n.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }
                setValue(t) {
                    if (t == null) return;
                    const n = this.match;
                    if (!n) return;
                    const r = this.input.value.substring(0, n.position - n.key.length),
                        o = this.input.value.substring(n.position + n.text.length);
                    let {
                        cursor: s,
                        value: i
                    } = this.replaceCursorMark(t);
                    i = (i == null ? void 0 : i.length) === 0 ? i : `${i} `, this.input.value = r + i + o, this.deactivate(), this.input.focus(), s = r.length + (s || i.length), this.input.selectionStart = s, this.input.selectionEnd = s
                }
                replaceCursorMark(t) {
                    const n = /%cursor%/gm,
                        r = n.exec(t);
                    return r ? {
                        cursor: r.index,
                        value: t.replace(n, "")
                    } : {
                        cursor: null,
                        value: t
                    }
                }
                onCommit({
                    target: t
                }) {
                    const n = t;
                    if (!(n instanceof HTMLElement) || !this.combobox) return;
                    const r = this.match;
                    if (!r) return;
                    const o = {
                        item: n,
                        key: r.key,
                        value: null
                    };
                    !this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                        cancelable: !0,
                        detail: o
                    })) || o.value && this.setValue(o.value)
                }
                onBlur() {
                    if (this.interactingWithMenu) {
                        this.interactingWithMenu = !1;
                        return
                    }
                    this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async delay(t) {
                    return new Promise(n => setTimeout(n, t))
                }
                async onInput() {
                    if (this.justPasted) {
                        this.justPasted = !1;
                        return
                    }
                    const t = this.findMatch();
                    if (t) {
                        if (this.match = t, await this.delay(this.appropriateDelay(this.match)), this.match !== t) return;
                        const n = await this.notifyProviders(t);
                        if (!this.match) return;
                        n ? this.activate(t, n) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                appropriateDelay(t) {
                    return t.beginningOfLine || t.text !== "" ? 0 : 250
                }
                findMatch() {
                    const t = this.input.selectionEnd,
                        n = this.input.value;
                    for (const r of this.expander.keys) {
                        const o = fc(n, r, t);
                        if (o) return {
                            text: o.word,
                            key: r,
                            position: o.position,
                            beginningOfLine: o.beginningOfLine
                        }
                    }
                }
                async notifyProviders(t) {
                    const n = [],
                        r = mo(a => n.push(a), "provide");
                    return this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                        cancelable: !0,
                        detail: {
                            provide: r,
                            text: t.text,
                            key: t.key
                        }
                    })) ? (await Promise.all(n)).filter(a => a.matched).map(a => a.fragment)[0] : void 0
                }
                onMousedown() {
                    this.interactingWithMenu = !0
                }
                onKeydown(t) {
                    t.key === "Escape" && this.deactivate() && (t.stopImmediatePropagation(), t.preventDefault())
                }
            }
            mo(bc, "SlashCommandExpander");
            class po extends HTMLElement {
                get keys() {
                    const t = this.getAttribute("keys");
                    return t ? t.split(" ") : []
                }
                connectedCallback() {
                    const t = this.querySelector('input[type="text"], textarea');
                    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                    const n = new bc(this, t);
                    ut.set(this, n)
                }
                disconnectedCallback() {
                    const t = ut.get(this);
                    !t || (t.destroy(), ut.delete(this))
                }
                setValue(t) {
                    const n = ut.get(this);
                    !n || n.setValue(t)
                }
                setMenu(t, n = !1) {
                    const r = ut.get(this);
                    !r || !r.match || (n && (r.interactingWithMenu = !0), r.setMenu(r.match, t))
                }
                closeMenu() {
                    const t = ut.get(this);
                    !t || t.setValue("")
                }
                isLoading() {
                    const t = this.getElementsByClassName("js-slash-command-expander-loading")[0];
                    if (t) {
                        const n = t.cloneNode(!0);
                        n.classList.remove("d-none"), this.setMenu(n)
                    }
                }
                showError() {
                    const t = this.getElementsByClassName("js-slash-command-expander-error")[0];
                    if (t) {
                        const n = t.cloneNode(!0);
                        n.classList.remove("d-none"), this.setMenu(n)
                    }
                }
            }
            mo(po, "SlashCommandExpanderElement"), window.customElements.get("slash-command-expander") || (window.SlashCommandExpanderElement = po, window.customElements.define("slash-command-expander", po)), f("deprecatedAjaxSend", "[data-remote]", function(e) {
                e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
            }), f("deprecatedAjaxComplete", "[data-remote]", function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            }), C("form.js-ajax-pagination, .js-ajax-pagination form", async function(e, t) {
                const n = e.closest(".js-ajax-pagination");
                let r;
                try {
                    r = await t.html()
                } catch (o) {
                    if (o.response && o.response.status === 404) {
                        n.remove();
                        return
                    } else throw o
                }
                n.replaceWith(r.html), v(e, "page:loaded")
            });
            const xp = "analytics.click";
            f("click", "[data-analytics-event]", e => {
                const n = e.currentTarget.getAttribute("data-analytics-event");
                if (!n) return;
                const r = JSON.parse(n);
                Ct(xp, r)
            }), document.addEventListener("pjax:start", function() {
                Fe("Loading page")
            }), document.addEventListener("pjax:error", function() {
                Fe("Loading failed")
            }), document.addEventListener("pjax:end", function() {
                Fe("Loading complete")
            });
            var Ap = Object.defineProperty,
                yc = (e, t) => Ap(e, "name", {
                    value: t,
                    configurable: !0
                });
            const vc = new WeakMap;
            p("auto-check", function(e) {
                if (e.classList.contains("js-prevent-default-behavior")) return;
                const t = e.querySelector("input");
                if (!t) return;
                const n = t.closest(".form-group") || e,
                    r = t.form;
                let o;

                function s() {
                    return o || (o = `input-check-${(Math.random()*1e4).toFixed(0)}`), o
                }
                yc(s, "generateId");
                const i = t.getAttribute("aria-describedby");
                t.addEventListener("focusout:delay", () => {
                    t.setAttribute("aria-describedby", [o, i].join(" "))
                });
                const a = n.querySelector("p.note");
                a && (a.id || (a.id = s()), vc.set(a, a.innerHTML)), e.addEventListener("loadstart", () => {
                    Fn(t, n), n.classList.add("is-loading"), t.classList.add("is-autocheck-loading"), Tt(r)
                }), e.addEventListener("loadend", () => {
                    n.classList.remove("is-loading"), t.classList.remove("is-autocheck-loading")
                }), t.addEventListener("auto-check-success", async c => {
                    t.classList.add("is-autocheck-successful"), n.classList.add("successed"), Tt(r);
                    const {
                        response: l
                    } = c.detail;
                    if (!l) return;
                    const d = await l.text();
                    if (!!d) {
                        if (a instanceof HTMLElement) a.innerHTML = d, He(a);
                        else {
                            const m = l.status === 200,
                                h = n.tagName === "DL" ? "dd" : "div",
                                g = document.createElement(h);
                            g.id = s(), g.classList.add(m ? "success" : "warning"), g.innerHTML = d, n.append(g), n.classList.add(m ? "successed" : "warn"), He(g), m && (g.hidden = document.activeElement !== t)
                        }
                        v(t, "auto-check-message-updated")
                    }
                }), t.addEventListener("auto-check-error", async c => {
                    t.classList.add("is-autocheck-errored"), n.classList.add("errored"), Tt(r);
                    const {
                        response: l
                    } = c.detail;
                    if (!l) return;
                    const d = await l.text();
                    if (a instanceof HTMLElement) a.innerHTML = d || "Something went wrong", He(a);
                    else {
                        const m = n.tagName === "DL" ? "dd" : "div",
                            h = document.createElement(m);
                        h.id = s(), h.classList.add("error"), h.innerHTML = d || "Something went wrong", n.append(h), He(h)
                    }
                }), t.addEventListener("input", () => {
                    t.removeAttribute("aria-describedby"), t.value || Fn(t, n)
                }), t.addEventListener("blur", () => {
                    const c = n.querySelector(".success");
                    c && (c.hidden = !0)
                }), t.addEventListener("focus", () => {
                    const c = n.querySelector(".success");
                    c && (c.hidden = !1)
                }), r.addEventListener("reset", () => {
                    Fn(t, n)
                })
            });

            function Fn(e, t) {
                var n, r, o, s, i, a;
                t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                const c = t.querySelector("p.note");
                if (c) {
                    const l = vc.get(c);
                    l && (c.innerHTML = l)
                }
                t.tagName === "DL" ? ((n = t.querySelector("dd.error")) == null || n.remove(), (r = t.querySelector("dd.warning")) == null || r.remove(), (o = t.querySelector("dd.success")) == null || o.remove()) : ((s = t.querySelector("div.error")) == null || s.remove(), (i = t.querySelector("div.warning")) == null || i.remove(), (a = t.querySelector("div.success")) == null || a.remove())
            }
            yc(Fn, "reset");
            var Pp = Object.defineProperty,
                qp = (e, t) => Pp(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("auto-complete", function(e) {
                e.addEventListener("loadstart", () => e.classList.add("is-auto-complete-loading")), e.addEventListener("loadend", () => e.classList.remove("is-auto-complete-loading"))
            }), p("auto-complete", {
                constructor: Ja,
                initialize: ho
            }), f("auto-complete-change", "auto-complete", function(e) {
                ho(e.currentTarget)
            });

            function ho(e) {
                const t = e.closest("form");
                if (!t) return;
                const n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }
            qp(ho, "toggleSubmitButton");
            let go = null;
            f("submit", "[data-autosearch-results-container]", async function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) return;
                e.preventDefault(), go == null || go.abort(), t.classList.add("is-sending");
                const n = new URL(t.action, window.location.origin),
                    r = t.method,
                    o = new FormData(t),
                    s = Oi(n, o);
                let i = null;
                r === "get" ? n.search = s : i = o;
                const {
                    signal: a
                } = go = new AbortController, c = new Request(n.toString(), {
                    method: r,
                    body: i,
                    signal: a,
                    headers: {
                        Accept: "text/html",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                let l;
                try {
                    l = await fetch(c)
                } catch {}
                if (t.classList.remove("is-sending"), !l || !l.ok || a.aborted) return;
                const d = t.getAttribute("data-autosearch-results-container"),
                    m = d ? document.getElementById(d) : null;
                m && (m.innerHTML = "", m.appendChild(ae(document, await l.text()))), Oe(null, "", `?${s}`)
            }), xt("input[data-autoselect], textarea[data-autoselect]", async function(e) {
                await Te(), e.select()
            });
            var Mp = Object.defineProperty,
                $p = (e, t) => Mp(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("change", "form[data-autosubmit]", function(e) {
                const t = e.currentTarget;
                U(t)
            }), f("change", "input[data-autosubmit], select[data-autosubmit]", bo);

            function bo(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement) && !(t instanceof HTMLSelectElement)) return;
                const n = t.form;
                U(n)
            }
            $p(bo, "submit");
            const Ip = We(bo, 300);
            p("input[data-throttled-autosubmit]", {
                subscribe: e => E(e, "input", Ip)
            });
            var Rp = Object.defineProperty,
                wc = (e, t) => Rp(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function jc(e) {
                const t = e.getAttribute("data-url") || "";
                if (await Lc(t)) {
                    const r = e.getAttribute("data-gravatar-text");
                    r != null && (e.textContent = r)
                }
            }
            wc(jc, "detectGravatar"), p(".js-detect-gravatar", function(e) {
                jc(e)
            });
            async function Lc(e) {
                const t = e;
                if (!t) return !1;
                try {
                    const n = await fetch(t, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    return n.ok ? (await n.json()).has_gravatar : !1
                } catch {
                    return !1
                }
            }
            wc(Lc, "fetchGravatarInfo");
            var Sc = Object.defineProperty,
                Fp = Object.getOwnPropertyDescriptor,
                yo = (e, t) => Sc(e, "name", {
                    value: t,
                    configurable: !0
                }),
                vo = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? Fp(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && Sc(t, n, o), o
                };
            class Ec {
                constructor(t = 50, n = 30) {
                    this.elements = [], this.timer = null, this.callbacks = [], this.csrf = null, this.timeout = t, this.limit = n
                }
                push(t) {
                    if (this.timer && (window.clearTimeout(this.timer), this.timer = null), t instanceof HTMLElement) {
                        const n = t.querySelector("[data-csrf]");
                        n !== null && (this.csrf = n.value)
                    }
                    this.elements.length >= this.limit && this.flush(), this.elements.push(t), this.timer = window.setTimeout(() => {
                        this.flush()
                    }, this.timeout)
                }
                onFlush(t) {
                    this.callbacks.push(t)
                }
                async flush() {
                    const t = this.elements.splice(0, this.limit);
                    t.length !== 0 && await Promise.all(this.callbacks.map(n => n(t)))
                }
            }
            yo(Ec, "AutoFlushingQueue");
            async function kc(e, t) {
                const n = await fetch(e, {
                    method: "POST",
                    body: t,
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                if (n.ok) {
                    const r = await n.json(),
                        o = new Map;
                    for (const s in r) o.set(s, r[s]);
                    return o
                } else return new Map
            }
            yo(kc, "fetchContents");
            const _c = new Map;
            let Wt = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.url = ""
                }
                connectedCallback() {
                    this.queue.push(this)
                }
                get queue() {
                    let e = _c.get(this.url);
                    return e || (e = this.buildAutoFlushingQueue(), _c.set(this.url, e), e)
                }
                buildAutoFlushingQueue() {
                    const e = new Ec;
                    return e.onFlush(async t => {
                        const n = new Map,
                            r = new FormData;
                        e.csrf !== null && r.set("authenticity_token", e.csrf);
                        for (const s in t) {
                            const i = t[s],
                                a = `item-${s}`;
                            n.set(a, i);
                            for (const c of i.inputs) r.append(`items[${a}][${c.name}]`, c.value)
                        }
                        const o = await kc(this.url, r);
                        for (const [s, i] of o.entries()) n.get(s).replaceWith(ae(document, i))
                    }), e
                }
            };
            yo(Wt, "BatchDeferredContentElement"), vo([de], Wt.prototype, "url", 2), vo([Ce], Wt.prototype, "inputs", 2), Wt = vo([te], Wt);
            var Hp = Object.defineProperty,
                dt = (e, t) => Hp(e, "name", {
                    value: t,
                    configurable: !0
                });
            let wo = null;
            f("click", ".js-org-signup-duration-change", e => {
                e.preventDefault();
                const n = e.currentTarget.getAttribute("data-plan-duration");
                Cc(n), Ac(n);
                for (const r of document.querySelectorAll(".js-seat-field")) Ge(r);
                Tc()
            }), f("change", ".js-org-signup-duration-toggle", function({
                currentTarget: e
            }) {
                const t = document.getElementById("js-pjax-container"),
                    n = new URL(e.getAttribute("data-url"), window.location.origin);
                Pt({
                    url: n.toString(),
                    container: t
                })
            });
            async function Ge(e) {
                const t = e.getAttribute("data-item-name") || "items",
                    n = e.value,
                    r = new URL(e.getAttribute("data-url"), window.location.origin),
                    o = new URLSearchParams(r.search.slice(1)),
                    s = o.get("plan_duration") || e.getAttribute("data-plan-duration"),
                    i = parseInt(e.getAttribute("data-item-minimum")) || 0,
                    a = parseInt(e.getAttribute("data-item-maximum")) || s === "year" ? 100 : 300,
                    c = parseInt(e.getAttribute("data-item-count")) || 0,
                    l = Math.max(i, parseInt(n) || 0),
                    d = l > a,
                    m = document.querySelector(".js-downgrade-button"),
                    h = document.getElementById("downgrade-disabled-message");
                m instanceof HTMLButtonElement && (m.disabled = l === c), h instanceof HTMLElement && m instanceof HTMLButtonElement && (h.hidden = !m.disabled), o.append(t, l.toString()), document.querySelector(".js-transform-user") && o.append("transform_user", "1"), r.search = o.toString(), wo == null || wo.abort();
                const {
                    signal: j
                } = wo = new AbortController;
                let L = null;
                try {
                    const I = await fetch(r.toString(), {
                        signal: j,
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!I.ok) return;
                    L = await I.json()
                } catch {}
                if (j.aborted || !L) return;
                const x = document.querySelector(".js-contact-us");
                x && x.classList.toggle("d-none", !d);
                const S = document.querySelector(".js-payment-summary");
                S && S.classList.toggle("d-none", d);
                const q = document.querySelector(".js-submit-billing");
                q instanceof HTMLElement && (q.hidden = d);
                const M = document.querySelector(".js-billing-section");
                M && M.classList.toggle("has-removed-contents", L.free || L.is_enterprise_cloud_trial);
                const A = document.querySelector(".js-upgrade-info");
                A && A.classList.toggle("d-none", l <= 0);
                const pe = document.querySelector(".js-downgrade-info");
                pe && pe.classList.toggle("d-none", l >= 0);
                const T = document.querySelector(".js-extra-seats-line-item");
                T && T.classList.toggle("d-none", L.no_additional_seats), document.querySelector(".js-seat-field") && xc(n);
                const V = document.querySelector(".js-minimum-seats-disclaimer");
                V && (V.classList.toggle("tooltipped", L.seats === 5), V.classList.toggle("tooltipped-nw", L.seats === 5));
                const ot = L.selectors;
                for (const I in ot)
                    for (const Re of document.querySelectorAll(I)) Re.innerHTML = ot[I];
                Oe(Di(), "", L.url)
            }
            dt(Ge, "updateTotals");

            function Tc() {
                for (const e of document.querySelectorAll(".js-unit-price")) e.hidden = !e.hidden
            }
            dt(Tc, "toggleDurationUnitPrices");

            function Cc(e) {
                const t = e === "year" ? "month" : "year";
                for (const r of document.querySelectorAll(".js-plan-duration-text")) r.innerHTML = e;
                for (const r of document.querySelectorAll(".unstyled-available-plan-duration-adjective")) r.innerHTML = `${e}ly`;
                for (const r of document.querySelectorAll(".js-org-signup-duration-change")) r.setAttribute("data-plan-duration", t);
                const n = document.getElementById("signup-plan-duration");
                n && (n.value = e)
            }
            dt(Cc, "updateDurationFields");

            function xc(e) {
                var t;
                for (const n of document.querySelectorAll(".js-seat-field")) {
                    const r = n.getAttribute("data-item-max-seats"),
                        o = (t = n == null ? void 0 : n.parentNode) == null ? void 0 : t.querySelector(".Popover");
                    r && r.length ? parseInt(e, 10) > parseInt(r, 10) ? (n.classList.add("color-border-danger-emphasis"), o == null || o.removeAttribute("hidden")) : (n.classList.remove("color-border-danger-emphasis"), o == null || o.setAttribute("hidden", "true"), n.value = e) : n.value = e
                }
            }
            dt(xc, "updateSeatFields");

            function Ac(e) {
                for (const t of document.querySelectorAll(".js-seat-field")) {
                    const n = new URL(t.getAttribute("data-url"), window.location.origin),
                        r = new URLSearchParams(n.search.slice(1));
                    r.delete("plan_duration"), r.append("plan_duration", e), n.search = r.toString(), t.setAttribute("data-url", n.toString())
                }
            }
            dt(Ac, "updateSeatFieldURLs"), p(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    At(e) && Ge(e), bn(e, function() {
                        Ge(e)
                    })
                }
            }), p(".js-addon-downgrade-field", {
                constructor: HTMLSelectElement,
                add(e) {
                    At(e) && Ge(e), e.addEventListener("change", function() {
                        Ge(e)
                    })
                }
            });

            function Pc(e) {
                const t = document.querySelector(".js-addon-purchase-field"),
                    n = e.target.querySelector("input:checked");
                if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                    const r = n.getAttribute("data-upgrade-url");
                    r && (t.setAttribute("data-url", r), t.value = "0", Ge(t))
                }
            }
            dt(Pc, "handleOrgChange"), f("details-menu-selected", ".js-organization-container", Pc, {
                capture: !0
            }), ce(".js-csv-filter-field", function(e) {
                const t = e.target.value.toLowerCase();
                for (const n of document.querySelectorAll(".js-csv-data tbody tr")) n instanceof HTMLElement && (!n.textContent || (n.hidden = !!t && !n.textContent.toLowerCase().includes(t)))
            });
            var Op = Object.defineProperty,
                Dp = (e, t) => Op(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-blob-header.is-stuck", {
                add(e) {
                    jo(e)
                },
                remove(e) {
                    jo(e, !0)
                }
            });

            function jo(e, t = !1) {
                const n = {
                    "tooltipped-nw": "tooltipped-sw",
                    "tooltipped-n": "tooltipped-s",
                    "tooltipped-ne": "tooltipped-se"
                };
                for (const [r, o] of Object.entries(n)) {
                    const s = t ? o : r,
                        i = t ? r : o;
                    for (const a of e.querySelectorAll(`.${s}`)) a.classList.replace(s, i)
                }
            }
            Dp(jo, "flipTooltip");
            var Bp = Object.defineProperty,
                R = (e, t) => Bp(e, "name", {
                    value: t,
                    configurable: !0
                });
            let Lo = !1;

            function Hn(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }
            R(Hn, "queryLineElement");

            function qc({
                blobRange: e,
                anchorPrefix: t
            }) {
                if (document.querySelectorAll(".js-file-line").length !== 0 && (Mc(), !!e)) {
                    if (e.start.column === null || e.end.column === null)
                        for (let r = e.start.line; r <= e.end.line; r += 1) {
                            const o = Hn(t, r);
                            o && o.classList.add("highlighted")
                        } else if (e.start.line === e.end.line && e.start.column != null && e.end.column != null) {
                            const r = Ir(e, o => Hn(t, o));
                            if (r) {
                                const o = document.createElement("span");
                                o.classList.add("highlighted"), Rr(r, o)
                            }
                        }
                }
            }
            R(qc, "highlightLines");

            function Mc() {
                for (const e of document.querySelectorAll(".js-file-line.highlighted")) e.classList.remove("highlighted");
                for (const e of document.querySelectorAll(".js-file-line .highlighted")) {
                    const t = e.closest(".js-file-line");
                    e.replaceWith(...e.childNodes), t.normalize()
                }
            }
            R(Mc, "clearHighlights");

            function $c() {
                const e = Fr(window.location.hash);
                qc(e), Dc();
                const {
                    blobRange: t,
                    anchorPrefix: n
                } = e, r = t && Hn(n, t.start.line);
                if (!Lo && r) {
                    r.scrollIntoView();
                    const o = r.closest(".blob-wrapper, .js-blob-wrapper");
                    o.scrollLeft = 0
                }
                Lo = !1
            }
            R($c, "scrollLinesIntoView"), qt(function() {
                if (document.querySelector(".js-file-line-container")) {
                    setTimeout($c, 0);
                    const e = window.location.hash;
                    for (const t of document.querySelectorAll(".js-update-url-with-hash"))
                        if (t instanceof HTMLAnchorElement) t.hash = e;
                        else if (t instanceof HTMLFormElement) {
                        const n = new URL(t.action, window.location.origin);
                        n.hash = e, t.action = n.toString()
                    }
                }
            });

            function Ic(e) {
                const t = [];
                for (const r of e) t.push(r.textContent);
                const n = document.getElementById("js-copy-lines");
                if (n instanceof to) {
                    n.textContent = `Copy ${e.length===1?"line":"lines"}`, n.value = t.join(`
`);
                    const r = `Blob, copyLines, numLines:${e.length.toString()}`;
                    n.setAttribute("data-ga-click", r)
                }
            }
            R(Ic, "setCopyLines");

            function Rc(e) {
                const t = document.querySelector(".js-permalink-shortcut");
                if (t instanceof HTMLAnchorElement) {
                    const n = `${t.href}${window.location.hash}`,
                        r = document.getElementById("js-copy-permalink");
                    if (r instanceof to) {
                        r.value = n;
                        const o = `Blob, copyPermalink, numLines:${e.toString()}`;
                        r.setAttribute("data-ga-click", o)
                    }
                    return n
                }
            }
            R(Rc, "setPermalink");

            function Fc(e, t) {
                const n = document.getElementById("js-new-issue");
                if (n instanceof HTMLAnchorElement) {
                    if (!n.href) return;
                    const r = new URL(n.href, window.location.origin),
                        o = new URLSearchParams(r.search);
                    o.set("permalink", e), r.search = o.toString(), n.href = r.toString(), n.setAttribute("data-ga-click", `Blob, newIssue, numLines:${t.toString()}`)
                }
            }
            R(Fc, "setOpenIssueLink");

            function Hc(e, t) {
                const n = document.getElementById("js-new-discussion");
                if (!(n instanceof HTMLAnchorElement) || !(n == null ? void 0 : n.href)) return;
                const r = new URL(n.href, window.location.origin),
                    o = new URLSearchParams(r.search);
                o.set("permalink", e), r.search = o.toString(), n.href = r.toString(), n.setAttribute("data-ga-click", `Blob, newDiscussion, numLines:${t.toString()}`)
            }
            R(Hc, "setOpenDiscussionLink");

            function Oc(e) {
                const t = document.getElementById("js-view-git-blame");
                !t || t.setAttribute("data-ga-click", `Blob, viewGitBlame, numLines:${e.toString()}`)
            }
            R(Oc, "setViewGitBlame");

            function Dc() {
                const e = document.querySelector(".js-file-line-actions");
                if (!e) return;
                const t = document.querySelectorAll(".js-file-line.highlighted"),
                    n = t[0];
                if (n) {
                    Ic(t), Oc(t.length);
                    const r = Rc(t.length);
                    r && Fc(r, t.length), r && Hc(r, t.length), e.style.top = `${n.offsetTop-2}px`, e.classList.remove("d-none")
                } else e.classList.add("d-none")
            }
            R(Dc, "showOrHideLineActions");

            function Bc(e) {
                const t = window.scrollY;
                Lo = !0, e(), window.scrollTo(0, t)
            }
            R(Bc, "preserveLineNumberScrollPosition"), f("click", ".js-line-number", function(e) {
                const t = Fr(e.currentTarget.id),
                    {
                        blobRange: n
                    } = t,
                    r = Bi(window.location.hash);
                r && e.shiftKey && (t.blobRange = {
                    start: r.start,
                    end: n.end
                }), Bc(() => {
                    window.location.hash = Ni(t)
                })
            }), f("submit", ".js-jump-to-line-form", function(e) {
                const r = e.currentTarget.querySelector(".js-jump-to-line-field").value.replace(/[^\d-]/g, "").split("-").map(o => parseInt(o, 10)).filter(o => o > 0).sort((o, s) => o - s);
                r.length && (window.location.hash = `L${r.join("-L")}`), e.preventDefault()
            }), p(".js-check-bidi", Wc);
            const Np = /[\u202A-\u202E]|[\u2066-\u2069]/,
                Nc = {
                    "\u202A": "U+202A",
                    "\u202B": "U+202B",
                    "\u202C": "U+202C",
                    "\u202D": "U+202D",
                    "\u202E": "U+202E",
                    "\u2066": "U+2066",
                    "\u2067": "U+2067",
                    "\u2068": "U+2068",
                    "\u2069": "U+2069"
                };

            function So(e, t) {
                if (e.nodeType === Node.TEXT_NODE) return Uc(e, t);
                if (!e.childNodes || !e.childNodes.length) return !1;
                let n = !1;
                for (const r of e.childNodes)
                    if (n || (n = So(r, t)), n && !t) break;
                return n
            }
            R(So, "checkNodeForBidiCharacters");

            function Uc(e, t) {
                let n = !1;
                if (e.nodeValue)
                    for (let r = e.nodeValue.length - 1; r >= 0; r--) {
                        const o = e.nodeValue.charAt(r);
                        if (Nc[o]) {
                            if (n = !0, !t) break;
                            const s = new fe(t, {
                                    revealedCharacter: Nc[o]
                                }),
                                i = new Range;
                            i.setStart(e, r), i.setEnd(e, r + 1), i.deleteContents(), i.insertNode(s)
                        }
                    }
                return n
            }
            R(Uc, "checkTextNodeForBidiCharacters");

            function Wc(e) {
                let t = !1;
                const n = performance.now(),
                    r = e.textContent || "";
                if (Np.test(r)) {
                    const i = e.querySelectorAll(".diff-table .blob-code-inner, .js-file-line-container .js-file-line, .js-suggested-changes-blob .blob-code-inner"),
                        a = document.querySelector(".js-line-alert-template"),
                        c = document.querySelector(".js-revealed-character-template");
                    for (const l of i)
                        if (So(l, c) && (t = !0, a)) {
                            const d = new fe(a, {});
                            e.getAttribute("data-line-alert") === "before" ? l.before(d) : l.after(d)
                        }
                }
                const s = {
                    durationMs: (performance.now() - n).toString(),
                    result: t.toString()
                };
                if (Ct("blob_js_check_bidi_character", s), t) {
                    const i = document.querySelector(".js-file-alert-template");
                    if (i) {
                        const a = new URL(window.location.href, window.location.origin);
                        a.searchParams.get("h") === "1" ? a.searchParams.delete("h") : a.searchParams.set("h", "1");
                        const c = new fe(i, {
                            revealButtonHref: a.href
                        });
                        e.prepend(c)
                    }
                }
                e.classList.remove("js-check-bidi")
            }
            R(Wc, "alertOnBidiCharacter");
            class zc {
                constructor(t, n) {
                    this.lineElement = t, this.numberElement = n
                }
                range(t, n) {
                    t = isNaN(t) ? 0 : t, n = isNaN(n) ? 0 : n;
                    let r = null,
                        o = 0,
                        s = 0;
                    for (const [a, c] of this.lineElement.childNodes.entries()) {
                        const l = (c.textContent || "").length;
                        if (l > t && !r && (r = c, o = a), l >= n) {
                            s = a;
                            break
                        }
                        t -= l, n -= l
                    }
                    const i = document.createRange();
                    if (o === s) {
                        for (; r && r.nodeName !== "#text";) r = r.childNodes[0];
                        if (!r) return null;
                        i.setStart(r, t), i.setEnd(r, n)
                    } else i.setStart(this.lineElement, o), i.setEnd(this.lineElement, s + 1);
                    return i
                }
            }
            R(zc, "CodeListingLine");
            class Vc {
                constructor(t) {
                    this.container = t
                }
                findLine(t) {
                    if (!t) return null;
                    const n = this.container.querySelector(`.js-blob-rnum[data-line-number='${t}']`);
                    if (!n) return null;
                    let r = n.nextElementSibling;
                    return !r || !r.classList.contains("js-file-line") ? null : (r = r.querySelector(".js-code-nav-pass") || r, new zc(r, n))
                }
            }
            R(Vc, "CodeListing");
            const Kc = new WeakMap;

            function Eo(e) {
                const t = e.closest(".js-blob-code-container, .js-file-content"),
                    n = e.querySelector(".js-codeowners-error-tooltip-template"),
                    r = e.querySelector(".js-codeowners-error-line-alert-template");
                if (!t || !n || !r) return;
                const o = e.querySelectorAll(".js-codeowners-error"),
                    s = new Vc(t);
                for (const i of o) {
                    if (Kc.get(i)) continue;
                    const a = i.getAttribute("data-line"),
                        c = i.getAttribute("data-kind"),
                        l = i.getAttribute("data-suggestion"),
                        d = parseInt(i.getAttribute("data-start-offset") || "", 10),
                        m = parseInt(i.getAttribute("data-end-offset") || "", 10),
                        h = s.findLine(a),
                        g = h == null ? void 0 : h.range(d, m);
                    if (!h || !g) continue;
                    let j = c;
                    l && (j += `: ${l}`);
                    const L = document.createElement("SPAN");
                    L.className = "error-highlight", g.surroundContents(L);
                    const x = new fe(n, {
                        message: j
                    }).firstElementChild;
                    g.surroundContents(x);
                    const S = new fe(r, {});
                    h.numberElement.appendChild(S), Kc.set(i, !0)
                }
            }
            R(Eo, "annotateCodeownersErrors"), p(".js-codeowners-errors", Eo), f("expander:expanded", ".js-file", function(e) {
                if (!e.target || !(e.target instanceof HTMLElement)) return;
                const t = e.target.querySelector(".js-codeowners-errors");
                !t || Eo(t)
            });
            var Up = Object.defineProperty,
                Wp = (e, t) => Up(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Xc(e) {
                const t = e.target,
                    n = t == null ? void 0 : t.closest(".js-branch-protection-integration-select"),
                    r = n == null ? void 0 : n.querySelector(".js-branch-protection-integration-select-current"),
                    o = t == null ? void 0 : t.closest(".js-branch-protection-integration-select-item"),
                    s = o == null ? void 0 : o.querySelector(".js-branch-protection-integration-select-label");
                r && s && n && (r.innerHTML = s.innerHTML, n.open = !1)
            }
            Wp(Xc, "changeSelection"), f("change", ".js-branch-protection-integration-select-input", Xc);
            var zp = Object.defineProperty,
                ko = (e, t) => zp(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Gc(e) {
                const t = new URL(e.getAttribute("data-bulk-actions-url"), window.location.origin),
                    n = new URLSearchParams(t.search.slice(1)),
                    r = e.getAttribute("data-bulk-actions-parameter"),
                    o = Array.from(e.querySelectorAll(".js-bulk-actions-toggle:checked"));
                if (r) {
                    const s = o.map(i => i.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")).sort();
                    for (const i of s) n.append(`${r}[]`, i)
                } else
                    for (const s of o.sort((i, a) => i.value > a.value ? 1 : -1)) n.append(s.name, s.value);
                return t.search = n.toString(), t.toString()
            }
            ko(Gc, "bulkUrl");
            let _o = null;
            async function Jc(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = t.querySelector(".js-bulk-actions"),
                    r = !!t.querySelector(".js-bulk-actions-toggle:checked");
                _o == null || _o.abort();
                const {
                    signal: o
                } = _o = new AbortController;
                let s = "";
                try {
                    const i = await fetch(Gc(t), {
                        signal: o,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!i.ok) return;
                    s = await i.text()
                } catch {}
                o.aborted || !s || (r ? (To(t), n.innerHTML = s) : (n.innerHTML = s, To(t)), v(t, "bulk-actions:updated"))
            }
            ko(Jc, "updateBulkActions");

            function To(e) {
                const t = document.querySelector(".js-membership-tabs");
                if (t) {
                    const n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }
            ko(To, "toggleMembershipTabs"), f("change", ".js-bulk-actions-toggle", function(e) {
                const n = e.currentTarget.closest(".js-bulk-actions-container");
                v(n, "bulk-actions:update")
            }), f("bulk-actions:update", ".js-bulk-actions-container", We(Jc, 100));
            var Vp = Object.defineProperty,
                On = (e, t) => Vp(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Qc(e) {
                try {
                    const t = window.localStorage.getItem(e);
                    return {
                        kind: "ok",
                        value: t ? JSON.parse(t) : null
                    }
                } catch (t) {
                    return {
                        kind: "err",
                        value: t
                    }
                }
            }
            On(Qc, "getLocalJSON");

            function Co(e, t) {
                try {
                    return window.localStorage.setItem(e, JSON.stringify(t)), {
                        kind: "ok",
                        value: null
                    }
                } catch (n) {
                    return {
                        kind: "err",
                        value: n
                    }
                }
            }
            On(Co, "setLocalJSON");

            function Yc() {
                const e = {};
                for (const t of document.getElementsByTagName("script")) {
                    const n = t.src.match(/\/([\w-]+)-[0-9a-f]{8,}\.js$/);
                    n && (e[`${n[1]}.js`] = t.src)
                }
                for (const t of document.getElementsByTagName("link")) {
                    const n = t.href.match(/\/([\w-]+)-[0-9a-f]{8,}\.css$/);
                    n && (e[`${n[1]}.css`] = t.href)
                }
                return e
            }
            On(Yc, "gatherBundleURLs");

            function Zc() {
                const e = Yc(),
                    t = Qc("bundle-urls");
                if (t.kind === "err") {
                    Co("bundle-urls", e);
                    return
                }
                const n = t.value || {},
                    r = Object.keys(e).filter(o => n[o] !== e[o]);
                r.length && Co("bundle-urls", { ...n,
                    ...e
                }).kind === "ok" && le({
                    downloadedBundles: r
                })
            }
            On(Zc, "report"), (async () => (await Mt, window.requestIdleCallback(Zc)))();
            var Kp = Object.defineProperty,
                Xp = (e, t) => Kp(e, "name", {
                    value: t,
                    configurable: !0
                });
            let el, xo = !1;

            function Ao() {
                el = document.activeElement, document.body && document.body.classList.toggle("intent-mouse", xo)
            }
            Xp(Ao, "setClass"), document.addEventListener("mousedown", function() {
                xo = !0, el === document.activeElement && Ao()
            }, {
                capture: !0
            }), document.addEventListener("keydown", function() {
                xo = !1
            }, {
                capture: !0
            }), document.addEventListener("focusin", Ao, {
                capture: !0
            });
            var Gp = Object.defineProperty,
                Jp = (e, t) => Gp(e, "name", {
                    value: t,
                    configurable: !0
                });

            function tl(e) {
                e.preventDefault(), e.stopPropagation()
            }
            Jp(tl, "cancelEvent"), p("a.btn.disabled", {
                subscribe: e => E(e, "click", tl)
            }), p(".js-check-all-container", {
                constructor: HTMLElement,
                subscribe: wa
            });
            var Qp = Object.defineProperty,
                nl = (e, t) => Qp(e, "name", {
                    value: t,
                    configurable: !0
                });
            const rl = "logout-was-successful";

            function ol() {
                for (const e of [sessionStorage, localStorage]) try {
                    e.clear()
                } catch {}
            }
            nl(ol, "clearData");

            function sl() {
                no(rl).length > 0 && (ol(), ro(rl))
            }
            nl(sl, "clearDataIfJustLoggedOut"), sl();
            var Yp = Object.defineProperty,
                il = (e, t) => Yp(e, "name", {
                    value: t,
                    configurable: !0
                });
            const al = 2e3;
            f("clipboard-copy", "[data-copy-feedback]", e => {
                const t = e.currentTarget,
                    n = t.getAttribute("data-copy-feedback"),
                    r = t.getAttribute("aria-label"),
                    o = t.getAttribute("data-tooltip-direction") || "s";
                t.setAttribute("aria-label", n), t.classList.add("tooltipped", `tooltipped-${o}`), t instanceof HTMLElement && (He(t), setTimeout(() => {
                    r ? t.setAttribute("aria-label", r) : t.removeAttribute("aria-label"), t.classList.remove("tooltipped", `tooltipped-${o}`)
                }, al))
            });

            function cl(e) {
                qo.delete(e), Po(e)
            }
            il(cl, "timerCallback");

            function Po(e) {
                const t = e.querySelector(".js-clipboard-copy-icon"),
                    n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"), t && t.classList.toggle("d-none"), n && (n.classList.contains("d-sm-none") ? n.classList.toggle("d-sm-none") : n.classList.toggle("d-none"))
            }
            il(Po, "toggleCopyButton");
            const qo = new WeakMap;
            f("clipboard-copy", ".js-clipboard-copy:not([data-view-component])", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                const t = qo.get(e);
                t ? clearTimeout(t) : Po(e), qo.set(e, window.setTimeout(cl, al, e))
            });
            var Zp = Object.defineProperty,
                z = (e, t) => Zp(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("click", ".js-code-nav-retry", async function(e) {
                if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                const t = document.querySelector(".js-tagsearch-popover");
                if (!t) return;
                const n = t.querySelector(".js-tagsearch-popover-content");
                if (!n) return;
                let r;
                const o = e.currentTarget;
                if (o.getAttribute("data-code-nav-kind") === "definitions" ? r = t.querySelector(".js-tagsearch-popover-content") : r = t.querySelector(".js-code-nav-references"), !r) return;
                const i = o.getAttribute("data-code-nav-url");
                if (!i) return;
                const a = new URL(i, window.location.origin);
                try {
                    const c = await fetch(a.toString(), {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!c.ok) return;
                    const l = await c.text();
                    if (!l) return;
                    r.innerHTML = l
                } catch {
                    return
                }
                n.scrollTop = 0
            }), p(".js-code-nav-container", {
                constructor: HTMLElement,
                subscribe(e) {
                    const t = e,
                        n = document.querySelector(".js-tagsearch-popover");
                    if (!(n instanceof HTMLElement)) return {
                        unsubscribe() {}
                    };
                    const r = n.querySelector(".js-tagsearch-popover-content"),
                        o = new WeakMap,
                        s = new WeakMap;
                    let i;
                    async function a(S) {
                        const q = ul(/\w+[!?]?/g, S.clientX, S.clientY);
                        if (!q) return;
                        const M = q.commonAncestorContainer.parentElement;
                        for (const Ay of M.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(Ay)) return;
                        if (M.closest(".js-skip-tagsearch")) return;
                        const A = q.toString();
                        if (!A || A.match(/\n|\s|[();&.=",]/)) return;
                        let pe = s.get(M);
                        if (pe || (pe = new Set, s.set(M, pe)), pe.has(A)) return;
                        pe.add(A);
                        const T = M.closest(".js-tagsearch-file");
                        if (!T) return;
                        const _t = T.getAttribute("data-tagsearch-path") || "";
                        let V = T.getAttribute("data-tagsearch-lang") || "";
                        if (V === "HTML+ERB")
                            if (M.closest(".pl-sre")) V = "Ruby";
                            else return;
                        if (e.classList.contains("js-code-block-container") && (V = fl(M) || "", !V)) return;
                        const ot = ml(q),
                            I = await ll(n, A, V, ot, _t);
                        if (!I) return;
                        const Re = document.createElement("span");
                        Re.classList.add("pl-token"), Re.addEventListener("click", l);
                        const cp = document.createElement("span");
                        cp.innerHTML = I;
                        const Hi = cp.firstElementChild;
                        if (!Hi) return;
                        const lp = Hi.getAttribute("data-hydro-click"),
                            up = Hi.getAttribute("data-hydro-click-hmac");
                        up && lp && (Re.setAttribute("data-hydro-click", lp), Re.setAttribute("data-hydro-click-hmac", up)), o.set(Re, I), q.surroundContents(Re)
                    }
                    z(a, "onMouseMove");

                    function c() {
                        r.scrollTop = 0
                    }
                    z(c, "resetScrollTop");

                    function l(S) {
                        if (S.altKey || S.ctrlKey || S.metaKey || S.shiftKey) return;
                        const q = S.currentTarget;
                        q === i ? g() : (d(q), h()), S.preventDefault()
                    }
                    z(l, "onClick");

                    function d(S) {
                        i && i.classList.remove("active"), i = S, i.classList.add("active"), r.innerHTML = o.get(S) || "", m(S)
                    }
                    z(d, "populatePopover");

                    function m(S) {
                        const q = t.getClientRects()[0],
                            M = S.getClientRects()[0];
                        n.style.position = "absolute", n.style.zIndex = "1", t.classList.contains("position-relative") ? (n.style.top = `${M.bottom-q.top+7}px`, n.style.left = `${M.left-q.left-10}px`) : (n.style.top = `${window.scrollY+M.bottom+7}px`, n.style.left = `${window.scrollX+M.left-10}px`)
                    }
                    z(m, "positionPopover");

                    function h() {
                        if (!n.hidden) {
                            c();
                            return
                        }
                        n.hidden = !1, c(), document.addEventListener("click", L), document.addEventListener("keyup", x), window.addEventListener("resize", j)
                    }
                    z(h, "showPopover");

                    function g() {
                        n.hidden || (n.hidden = !0, i && i.classList.remove("active"), i = void 0, document.removeEventListener("click", L), document.removeEventListener("keyup", x), window.removeEventListener("resize", j))
                    }
                    z(g, "hidePopover");

                    function j() {
                        i instanceof HTMLElement && m(i)
                    }
                    z(j, "onResize");

                    function L(S) {
                        const {
                            target: q
                        } = S;
                        q instanceof Node && !n.contains(q) && !i.contains(q) && g()
                    }
                    z(L, "onDocumentClick");

                    function x(S) {
                        switch (S.key) {
                            case "Escape":
                                g();
                                break
                        }
                    }
                    return z(x, "onKeyup"), e.addEventListener("mousemove", a), {
                        unsubscribe() {
                            e.removeEventListener("mousemove", a)
                        }
                    }
                }
            });
            async function ll(e, t, n, r, o) {
                const s = e.getAttribute("data-tagsearch-url");
                if (!s) return "";
                const i = e.getAttribute("data-tagsearch-ref");
                if (!i) return "";
                let a = e.getAttribute("data-tagsearch-code-nav-context");
                a || (a = "UNKNOWN_VIEW");
                const c = new URL(s, window.location.origin),
                    l = new URLSearchParams;
                l.set("q", t), l.set("blob_path", o), l.set("ref", i), l.set("language", n), l.set("row", r[0].toString()), l.set("col", r[1].toString()), l.set("code_nav_context", a), c.search = l.toString();
                try {
                    const d = await fetch(c.toString(), {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!d.ok) return "";
                    const m = await d.text();
                    return /js-tagsearch-no-definitions/.test(m) ? "" : m
                } catch {
                    return ""
                }
            }
            z(ll, "fetchPopoverContents");

            function ul(e, t, n) {
                let r, o;
                if (document.caretPositionFromPoint) {
                    const c = document.caretPositionFromPoint(t, n);
                    c && (r = c.offsetNode, o = c.offset)
                } else if (document.caretRangeFromPoint) {
                    const c = document.caretRangeFromPoint(t, n);
                    c && (r = c.startContainer, o = c.startOffset)
                }
                if (!r || typeof o != "number" || r.nodeType !== Node.TEXT_NODE) return;
                const s = r.textContent;
                if (!s) return null;
                const i = dl(s, e, o);
                if (!i) return null;
                const a = document.createRange();
                return a.setStart(r, i[1]), a.setEnd(r, i[2]), a
            }
            z(ul, "matchFromPoint");

            function dl(e, t, n) {
                let r;
                for (; r = t.exec(e);) {
                    const o = r.index + r[0].length;
                    if (r.index <= n && n < o) return [r[0], r.index, o]
                }
                return null
            }
            z(dl, "findNearestMatch");

            function fl(e) {
                const t = e.closest(".highlight");
                if (t)
                    for (const n of t.classList) switch (n) {
                        case "highlight-source-go":
                            return "Go";
                        case "highlight-source-js":
                            return "JavaScript";
                        case "highlight-source-python":
                            return "Python";
                        case "highlight-source-ruby":
                            return "Ruby";
                        case "highlight-source-ts":
                            return "TypeScript"
                    }
                return null
            }
            z(fl, "getCodeBlockLanguage");

            function ml(e) {
                let t = e.startContainer,
                    n = e.startOffset,
                    r = !1;
                for (;;) {
                    let o = t.previousSibling;
                    for (; !r && o;)["#comment", "BUTTON"].includes(o.nodeName) || (n += (o.textContent || "").length), o = o.previousSibling;
                    const s = t.parentElement;
                    if (s) {
                        if (s.classList.contains("js-code-nav-pass")) r = !0;
                        else if (s.classList.contains("js-file-line")) {
                            const i = s.previousElementSibling;
                            if (!i.classList.contains("js-code-nav-line-number")) throw new Error("invariant");
                            return [parseInt(i.getAttribute("data-line-number") || "1", 10) - 1, n]
                        }
                        t = s
                    } else return [0, 0]
                }
            }
            z(ml, "getRowAndColumn");
            var eh = Object.defineProperty,
                pl = (e, t) => eh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function hl(e) {
                const t = e.querySelector(".js-comment-form-error");
                t instanceof HTMLElement && (t.hidden = !0)
            }
            pl(hl, "clearFormError"), f("click", ".errored.js-remove-error-state-on-click", function({
                currentTarget: e
            }) {
                e.classList.remove("errored")
            }), C(".js-new-comment-form", async function(e, t) {
                let n;
                hl(e);
                try {
                    n = await t.json()
                } catch (s) {
                    gl(e, s)
                }
                if (!n) return;
                e.reset();
                for (const s of e.querySelectorAll(".js-resettable-field")) De(s, s.getAttribute("data-reset-value") || "");
                const r = e.querySelector(".js-write-tab");
                r instanceof HTMLElement && r.click();
                const o = n.json.updateContent;
                for (const s in o) {
                    const i = o[s],
                        a = document.querySelector(s);
                    a instanceof HTMLElement ? yn(a, i) : console.warn(`couldn't find ${s} for immediate update`)
                }
                v(e, "comment:success")
            });

            function gl(e, t) {
                let n = "You can't comment at this time";
                if (t.response && t.response.status === 422) {
                    const o = t.response.json;
                    o.errors && (Array.isArray(o.errors) ? n += ` \u2014 your comment ${o.errors.join(", ")}` : n = o.errors)
                }
                n += ". ";
                const r = e.querySelector(".js-comment-form-error");
                if (r instanceof HTMLElement) {
                    r.textContent = n, r.hidden = !1;
                    const o = r.closest("div.form-group.js-remove-error-state-on-click");
                    o && o.classList.add("errored")
                }
            }
            pl(gl, "handleFormError");
            var th = Object.defineProperty,
                bl = (e, t) => th(e, "name", {
                    value: t,
                    configurable: !0
                });
            const nh = bl((e, t) => {
                    const n = e.querySelector(".js-form-action-text"),
                        r = n || e;
                    r.textContent = t ? e.getAttribute("data-comment-text") : r.getAttribute("data-default-action-text")
                }, "setButtonText"),
                rh = bl(e => {
                    let t;
                    return n => {
                        const o = n.currentTarget.value.trim();
                        o !== t && (t = o, nh(e, Boolean(o)))
                    }
                }, "createInputHandler");
            p(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form.querySelector(".js-comment-field"),
                        n = rh(e);
                    return {
                        add() {
                            t.addEventListener("input", n), t.addEventListener("change", n)
                        },
                        remove() {
                            t.removeEventListener("input", n), t.removeEventListener("change", n)
                        }
                    }
                }
            });
            var oh = Object.defineProperty,
                yl = (e, t) => oh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Mo(e, t) {
                const n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }
            yl(Mo, "toggleFocus");

            function vl(e) {
                const t = e.currentTarget;
                t instanceof Element && Mo(t, !1)
            }
            yl(vl, "blurred"), xt(".js-comment-field", function(e) {
                Mo(e, !0), e.addEventListener("blur", vl, {
                    once: !0
                })
            });
            var sh = Object.defineProperty,
                ih = (e, t) => sh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const ah = 2303741511,
                ch = 4;
            class Dn {
                static fromFile(t) {
                    return new Promise(function(n, r) {
                        const o = new FileReader;
                        o.onload = function() {
                            n(new Dn(o.result))
                        }, o.onerror = function() {
                            r(o.error)
                        }, o.readAsArrayBuffer(t)
                    })
                }
                constructor(t) {
                    this.dataview = new DataView(t), this.pos = 0
                }
                advance(t) {
                    this.pos += t
                }
                readInt(t) {
                    const n = this,
                        r = function() {
                            switch (t) {
                                case 1:
                                    return n.dataview.getUint8(n.pos);
                                case 2:
                                    return n.dataview.getUint16(n.pos);
                                case 4:
                                    return n.dataview.getUint32(n.pos);
                                default:
                                    throw new Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(t), r
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(t) {
                    const n = [];
                    for (let r = 0; r < t; r++) n.push(String.fromCharCode(this.readChar()));
                    return n.join("")
                }
                scan(t) {
                    if (this.readLong() !== ah) throw new Error("invalid PNG");
                    for (this.advance(4);;) {
                        const n = this.readLong(),
                            r = this.readString(4),
                            o = this.pos + n + ch;
                        if (t.call(this, r, n) === !1 || r === "IEND") break;
                        this.pos = o
                    }
                }
            }
            ih(Dn, "PNGScanner");
            var lh = Object.defineProperty,
                uh = (e, t) => lh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const dh = .0254;
            async function wl(e) {
                if (e.type !== "image/png") return null;
                const t = e.slice(0, 10240, e.type),
                    n = await Dn.fromFile(t),
                    r = {
                        width: 0,
                        height: 0,
                        ppi: 1
                    };
                return n.scan(function(o) {
                    switch (o) {
                        case "IHDR":
                            return r.width = this.readLong(), r.height = this.readLong(), !0;
                        case "pHYs":
                            {
                                const s = this.readLong(),
                                    i = this.readLong(),
                                    a = this.readChar();
                                let c;
                                return a === 1 && (c = dh),
                                c && (r.ppi = Math.round((s + i) / 2 * c)),
                                !1
                            }
                        case "IDAT":
                            return !1
                    }
                    return !0
                }), r
            }
            uh(wl, "imageDimensions");
            const fh = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"],
                jl = typeof window != "undefined" && window.mozInnerScreenX != null;

            function mh(e, t, n) {
                const r = n && n.debug || !1;
                if (r) {
                    const d = document.querySelector("#input-textarea-caret-position-mirror-div");
                    d && d.parentNode.removeChild(d)
                }
                const o = document.createElement("div");
                o.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(o);
                const s = o.style,
                    i = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
                    a = e.nodeName === "INPUT";
                s.whiteSpace = "pre-wrap", a || (s.wordWrap = "break-word"), s.position = "absolute", r || (s.visibility = "hidden");
                for (const d of fh)
                    if (a && d === "lineHeight")
                        if (i.boxSizing === "border-box") {
                            const m = parseInt(i.height),
                                h = parseInt(i.paddingTop) + parseInt(i.paddingBottom) + parseInt(i.borderTopWidth) + parseInt(i.borderBottomWidth),
                                g = h + parseInt(i.lineHeight);
                            m > g ? s.lineHeight = `${m-h}px` : m === g ? s.lineHeight = i.lineHeight : s.lineHeight = 0
                        } else s.lineHeight = i.height;
                else if (!a && d === "width" && i.boxSizing === "border-box") {
                    let m = parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth),
                        h = jl ? parseFloat(i[d]) - m : e.clientWidth + m;
                    s[d] = `${h}px`
                } else s[d] = i[d];
                jl ? e.scrollHeight > parseInt(i.height) && (s.overflowY = "scroll") : s.overflow = "hidden", o.textContent = e.value.substring(0, t), a && (o.textContent = o.textContent.replace(/\s/g, "\xA0"));
                const c = document.createElement("span");
                c.textContent = e.value.substring(t) || ".", o.appendChild(c);
                const l = {
                    top: c.offsetTop + parseInt(i.borderTopWidth),
                    left: c.offsetLeft + parseInt(i.borderLeftWidth),
                    height: parseInt(i.lineHeight)
                };
                return r ? c.style.backgroundColor = "#aaa" : document.body.removeChild(o), l
            }
            var ph = Object.defineProperty,
                Je = (e, t) => ph(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Bn = new WeakMap;
            class Ll {
                constructor(t, n, r) {
                    this.index = t, this.coords = n, this.textArea = r
                }
                get top() {
                    return this.coords.top
                }
                get left() {
                    return this.coords.left
                }
                get height() {
                    return this.coords.height
                }
                currentChar(t = 1) {
                    return this.textArea.value.substring(this.index - t, this.index)
                }
                checkLine(t) {
                    return t < this.coords.top ? -1 : t > this.coords.top + this.coords.height ? 1 : 0
                }
                xDistance(t) {
                    return Math.abs(this.left - t)
                }
            }
            Je(Ll, "CaretPosition");

            function ye(e, t) {
                let n;
                if (Bn.has(e) ? n = Bn.get(e) : (n = new Map, Bn.set(e, n)), n.has(t)) return n.get(t); {
                    const r = new Ll(t, mh(e, t), e);
                    return n.set(t, r), r
                }
            }
            Je(ye, "fetchCaretCoords");
            const zt = Je((e, t, n, r, o, s) => {
                    if (n === t) return n;
                    const i = Je(d => {
                        const m = d.filter(h => h.checkLine(o) === 0).sort((h, g) => h.xDistance(r) > g.xDistance(r) ? 1 : -1);
                        return m.length === 0 ? n : m[0].index
                    }, "bestPosition");
                    if (n - t === 1) {
                        const d = ye(e, t),
                            m = ye(e, n);
                        return i([d, m])
                    }
                    if (n - t === 2) {
                        const d = ye(e, t),
                            m = ye(e, n - 1),
                            h = ye(e, n);
                        return i([d, m, h])
                    }
                    const a = Math.floor((n + t) / 2);
                    if (a === t || a === n) return a;
                    const c = ye(e, a);
                    if (o > c.top + c.height) return zt(e, a + 1, n, r, o, s + 1);
                    if (o < c.top) return zt(e, t, a - 1, r, o, s + 1);
                    const l = 3;
                    return c.xDistance(r) < l ? a : c.left < r ? ye(e, a + 1).checkLine(o) !== 0 ? a : zt(e, a + 1, n, r, o, s + 1) : c.left > r ? ye(e, a - 1).checkLine(o) !== 0 ? a : zt(e, t, a - 1, r, o, s + 1) : a
                }, "binaryCursorSearch"),
                hh = Je((e, t, n) => {
                    const o = e.value.length - 1;
                    return zt(e, 0, o, t, n, 0)
                }, "findCursorPosition");

            function Sl(e, t, n) {
                const r = hh(e, t, n);
                e.setSelectionRange(r, r)
            }
            Je(Sl, "setCursorPosition");

            function El(e, t) {
                const n = e.getBoundingClientRect();
                t.type === "dragenter" && Bn.delete(e);
                const r = t.clientX - n.left,
                    o = t.clientY - n.top + e.scrollTop;
                Sl(e, r, o)
            }
            Je(El, "updateCaret");
            var gh = Object.defineProperty,
                F = (e, t) => gh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-paste-markdown", {
                constructor: HTMLElement,
                add(e) {
                    ja(e), La(e), Sa(e), Ea(e), ka(e)
                },
                remove(e) {
                    _a(e), Ta(e), Ca(e), xa(e), Aa(e)
                }
            });
            const $o = new WeakMap;

            function bh(e, t) {
                $o.set(e, t)
            }
            F(bh, "cachePlaceholder");

            function kl(e) {
                return $o.get(e) || Ro(e)
            }
            F(kl, "getPlaceholder");

            function Nn(e) {
                return ["video/mp4", "video/quicktime"].includes(e.file.type)
            }
            F(Nn, "isVideo");

            function _l(e) {
                return e.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
            }
            F(_l, "parameterizeName");

            function Io(e) {
                return Nn(e) ? `
Uploading ${e.file.name}\u2026
` : `${e.isImage()?"!":""}[Uploading ${e.file.name}\u2026]()`
            }
            F(Io, "placeholderText");

            function Tl(e) {
                return _l(e).replace(/\.[^.]+$/, "").replace(/\./g, " ")
            }
            F(Tl, "altText");
            const yh = 72 * 2;

            function Vt(e) {
                const n = e.target.closest("form").querySelector(".btn-primary");
                n.disabled = !0
            }
            F(Vt, "disableSubmit");

            function Kt(e) {
                const n = e.target.closest("form").querySelector(".btn-primary");
                n.disabled = !1
            }
            F(Kt, "enableSubmit");
            async function Cl(e) {
                const {
                    attachment: t
                } = e.detail, n = e.currentTarget;
                let r;
                t.isImage() ? r = await Pl(t) : Nn(t) ? r = Al(t) : r = xl(t), Ho("", r, e, n)
            }
            F(Cl, "onUploadCompleted");

            function xl(e) {
                return `[${e.file.name}](${e.href})`
            }
            F(xl, "mdLink");

            function Al(e) {
                return `
${e.href}
`
            }
            F(Al, "videoMarkdown");
            async function Pl(e) {
                const t = await ql(e.file),
                    n = Tl(e.file.name),
                    r = e.href;
                return t.ppi === yh ? `<img width="${Math.round(t.width/2)}" alt="${n}" src="${r}">` : `![${n}](${r})`
            }
            F(Pl, "imageTag");
            async function ql(e) {
                var t;
                const n = {
                    width: 0,
                    height: 0,
                    ppi: 0
                };
                try {
                    return (t = await wl(e)) != null ? t : n
                } catch {
                    return n
                }
            }
            F(ql, "imageSize");

            function Ro(e) {
                const t = Io(e);
                return Nn(e) ? `
${t}
` : `${t}
`
            }
            F(Ro, "replacementText");

            function Fo(e) {
                const t = e.currentTarget.querySelector(".js-comment-field"),
                    n = kl(e.detail.attachment);
                if (t) t.setCustomValidity(""), Hr(t, n, "");
                else {
                    const o = vn(e.currentTarget.querySelector(".js-code-editor")).editor.getSearchCursor(n);
                    o.findNext(), o.replace("")
                }
            }
            F(Fo, "removeFailedUpload");

            function Ho(e, t, n, r) {
                const o = (r || n.currentTarget).querySelector(".js-comment-field"),
                    s = (r || n.currentTarget).querySelector(".js-file-upload-loading-text"),
                    i = Io(n.detail.attachment),
                    {
                        batch: a
                    } = n.detail;
                if (o) {
                    const c = o.value.substring(o.selectionStart, o.selectionEnd);
                    if (e === "uploading") {
                        let l;
                        c.length ? l = Ui(o, c, i) : l = Or(o, i, {
                            appendNewline: !0
                        }), $o.set(n.detail.attachment, l)
                    } else Hr(o, i, t);
                    a.isFinished() ? Kt(n) : Vt(n)
                } else {
                    const c = vn((r || n.currentTarget).querySelector(".js-code-editor")).editor;
                    if (e === "uploading")
                        if (c.getSelection().length) c.replaceSelection(i);
                        else {
                            const l = c.getCursor(),
                                d = Ro(n.detail.attachment);
                            c.replaceRange(d, l)
                        }
                    else {
                        const l = c.getSearchCursor(i);
                        l.findNext(), l.replace(t)
                    }
                    a.isFinished() ? Kt(n) : Vt(n)
                }
                if (s) {
                    const c = s.getAttribute("data-file-upload-message");
                    s.textContent = `${c} (${a.uploaded()+1}/${a.size})`
                }
            }
            F(Ho, "setValidityAndLinkText"), f("upload:setup", ".js-upload-markdown-image", function(e) {
                Ho("uploading", "", e)
            }), f("upload:complete", ".js-upload-markdown-image", Cl), f("upload:error", ".js-upload-markdown-image", function(e) {
                Fo(e);
                const {
                    batch: t
                } = e.detail;
                t.isFinished() ? Kt(e) : Vt(e)
            });

            function Oo(e) {
                var t;
                e.stopPropagation();
                const n = e.currentTarget;
                if (!n) return;
                const r = n.querySelector(".js-comment-field");
                if (r) El(r, e);
                else {
                    const o = (t = vn(n.querySelector(".js-code-editor"))) == null ? void 0 : t.editor;
                    if (o) {
                        const s = o.coordsChar({
                            left: e.pageX,
                            top: e.pageY
                        });
                        o.setCursor(s)
                    }
                }
            }
            F(Oo, "updateCursor"), f("dragenter", "file-attachment", Oo), f("dragover", "file-attachment", Oo), f("upload:invalid", ".js-upload-markdown-image", function(e) {
                Fo(e);
                const {
                    batch: t
                } = e.detail;
                t.isFinished() ? Kt(e) : Vt(e)
            });
            var vh = Object.defineProperty,
                Qe = (e, t) => vh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Ml(e) {
                const t = e.querySelector(".js-data-preview-url-csrf"),
                    n = e.closest("form").elements.namedItem("authenticity_token");
                if (t instanceof HTMLInputElement) return t.value;
                if (n instanceof HTMLInputElement) return n.value;
                throw new Error("Comment preview authenticity token not found")
            }
            Qe(Ml, "token");

            function Un(e) {
                const t = e.closest(".js-previewable-comment-form"),
                    n = e.classList.contains("js-preview-tab");
                if (n) {
                    const s = t.querySelector(".js-write-bucket"),
                        i = t.querySelector(".js-preview-body");
                    s.clientHeight > 0 && (i.style.minHeight = `${s.clientHeight}px`)
                }
                t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
                const r = t.querySelector('.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
                r.setAttribute("aria-selected", "false"), r.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
                const o = t.querySelector(".js-write-tab");
                return n ? o.setAttribute("data-hotkey", "Control+P,Meta+Shift+p") : o.removeAttribute("data-hotkey"), t
            }
            Qe(Un, "activateTab"), f("click", ".js-write-tab", function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof _n) {
                    setTimeout(() => {
                        n.querySelector(".js-comment-field").focus()
                    });
                    return
                }
                const r = Un(t);
                v(n, "preview:toggle:off"), setTimeout(() => {
                    r.querySelector(".js-comment-field").focus()
                });
                const o = n.querySelector("markdown-toolbar");
                o instanceof HTMLElement && (o.hidden = !1)
            }), f("click", ".js-preview-tab", function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof _n) return;
                const r = Un(t);
                v(n, "preview:toggle:on"), setTimeout(() => {
                    Wn(r)
                });
                const o = n.querySelector("markdown-toolbar");
                o instanceof HTMLElement && (o.hidden = !0), e.stopPropagation(), e.preventDefault()
            }), f("tab-container-change", ".js-previewable-comment-form", function(e) {
                const t = e.detail.relatedTarget,
                    n = t && t.classList.contains("js-preview-panel"),
                    r = e.currentTarget,
                    o = r.querySelector(".js-write-tab");
                if (n) {
                    const s = r.querySelector(".js-write-bucket"),
                        i = r.querySelector(".js-preview-body");
                    !i.hasAttribute("data-skip-sizing") && s.clientHeight > 0 && (i.style.minHeight = `${s.clientHeight}px`), o.setAttribute("data-hotkey", "Control+P,Meta+Shift+p"), Wn(r);
                    const c = r.querySelector("markdown-toolbar");
                    c instanceof HTMLElement && (c.hidden = !0)
                } else {
                    o.removeAttribute("data-hotkey");
                    const s = r.querySelector("markdown-toolbar");
                    s instanceof HTMLElement && (s.hidden = !1)
                }
                r.classList.toggle("preview-selected", n), r.classList.toggle("write-selected", !n)
            }), f("preview:render", ".js-previewable-comment-form", function(e) {
                const t = e.target.querySelector(".js-preview-tab"),
                    n = Un(t);
                setTimeout(() => {
                    Wn(n);
                    const r = n.querySelector("markdown-toolbar");
                    r instanceof HTMLElement && (r.hidden = !0)
                })
            });

            function $l(e) {
                var t, n, r, o, s, i, a, c, l;
                const d = e.querySelector(".js-comment-field").value,
                    m = (t = e.querySelector(".js-path")) == null ? void 0 : t.value,
                    h = (n = e.querySelector(".js-line-number")) == null ? void 0 : n.value,
                    g = (r = e.querySelector(".js-start-line-number")) == null ? void 0 : r.value,
                    j = (o = e.querySelector(".js-side")) == null ? void 0 : o.value,
                    L = (s = e.querySelector(".js-start-side")) == null ? void 0 : s.value,
                    x = (i = e.querySelector(".js-start-commit-oid")) == null ? void 0 : i.value,
                    S = (a = e.querySelector(".js-end-commit-oid")) == null ? void 0 : a.value,
                    q = (c = e.querySelector(".js-base-commit-oid")) == null ? void 0 : c.value,
                    M = (l = e.querySelector(".js-comment-id")) == null ? void 0 : l.value,
                    A = new FormData;
                return A.append("text", d), A.append("authenticity_token", Ml(e)), m && A.append("path", m), h && A.append("line_number", h), g && A.append("start_line_number", g), j && A.append("side", j), L && A.append("start_side", L), x && A.append("start_commit_oid", x), S && A.append("end_commit_oid", S), q && A.append("base_commit_oid", q), M && A.append("comment_id", M), A
            }
            Qe($l, "previewForm");

            function Do(e) {
                const t = e.getAttribute("data-preview-url"),
                    n = $l(e);
                return v(e, "preview:setup", {
                    data: n
                }), wh(t, n)
            }
            Qe(Do, "fetchPreview");
            const wh = ue(Il, {
                hash: Rl
            });
            let Bo = null;
            async function Il(e, t) {
                Bo == null || Bo.abort();
                const {
                    signal: n
                } = Bo = new AbortController, r = await fetch(e, {
                    method: "post",
                    body: t,
                    signal: n
                });
                if (!r.ok) throw new Error("something went wrong");
                return r.text()
            }
            Qe(Il, "uncachedFetch");

            function Rl(e, t) {
                const n = [...t.entries()].toString();
                return `${e}:${n}`
            }
            Qe(Rl, "hash");
            async function Wn(e) {
                const t = e.querySelector(".comment-body");
                t.innerHTML = "<p>Loading preview&hellip;</p>";
                try {
                    const n = await Do(e);
                    t.innerHTML = n || "<p>Nothing to preview</p>", v(e, "preview:rendered")
                } catch (n) {
                    n.name !== "AbortError" && (t.innerHTML = "<p>Error rendering preview</p>")
                }
            }
            Qe(Wn, "renderPreview"), p(".js-preview-tab", function(e) {
                e.addEventListener("mouseenter", async () => {
                    const t = e.closest(".js-previewable-comment-form");
                    try {
                        await Do(t)
                    } catch {}
                })
            }), W("keydown", ".js-comment-field", function(e) {
                const t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toUpperCase() === "P") {
                    const n = t.closest(".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (n instanceof _n ? n.querySelector(".js-preview-tab").click() : (t.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1
                    }))), e.preventDefault(), e.stopImmediatePropagation())
                }
            });
            var jh = Object.defineProperty,
                No = (e, t) => jh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Fl = /^(\+1|-1|:\+1?|:-1?)$/,
                Lh = No(e => {
                    let t = !1;
                    for (const n of e.split(`
`)) {
                        const r = n.trim();
                        if (!(!r || r.startsWith(">"))) {
                            if (t && Fl.test(r) === !1) return !1;
                            !t && Fl.test(r) && (t = !0)
                        }
                    }
                    return t
                }, "isReactionLikeComment");
            f("focusout", "#new_comment_field", function(e) {
                const n = e.currentTarget.closest(".js-reaction-suggestion");
                n && Wo(n)
            }), f("focusin", "#new_comment_field", function(e) {
                Uo(e)
            }), W("keyup", "#new_comment_field", function(e) {
                Uo(e)
            });

            function Uo(e) {
                const t = e.target,
                    n = t.value,
                    r = t.closest(".js-reaction-suggestion");
                if (!!r)
                    if (Lh(n)) {
                        r.classList.remove("hide-reaction-suggestion"), r.classList.add("reaction-suggestion");
                        const o = r.getAttribute("data-reaction-markup");
                        r.setAttribute("data-reaction-suggestion-message", o)
                    } else Wo(r)
            }
            No(Uo, "toggleReactionSuggestion");

            function Wo(e) {
                e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
            }
            No(Wo, "clearReactionSuggestion"), f("navigation:keydown", ".js-commits-list-item", function(e) {
                !Dr(e.detail.originalEvent) || e.target instanceof Element && e.detail.hotkey === "c" && e.target.querySelector(".js-navigation-open").click()
            }), document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = "a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]",
                    n = e.target.closest(t);
                if (!n) return;
                const r = n.getAttribute("data-confirm");
                !r || n instanceof HTMLInputElement && n.hasAttribute("data-confirm-checked") && !n.checked || confirm(r) || (e.stopImmediatePropagation(), e.preventDefault())
            }, !0), ce(".js-company-name-input", function(e) {
                const t = e.target,
                    n = t.form,
                    r = n.querySelector(".js-corp-tos-link"),
                    o = n.querySelector(".js-tos-link");
                o && (o.classList.add("d-none"), o.setAttribute("aria-hidden", "true"), r && (r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false")));
                const s = n.querySelectorAll(".js-company-name-text");
                if (s.length !== 0)
                    for (const i of s)
                        if (t.value)
                            if (i.hasAttribute("data-wording")) {
                                const c = i.getAttribute("data-wording");
                                i.textContent = ` ${c} ${t.value}`
                            } else i.textContent = t.value;
                else i.textContent = ""
            });
            var Sh = Object.defineProperty,
                Eh = (e, t) => Sh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    const n = e.form.querySelector(".js-company-name-input"),
                        r = document.querySelector(".js-company-name-text"),
                        o = document.querySelector(".js-corp-tos-link"),
                        s = document.querySelector(".js-tos-link");
                    n && (e.getAttribute("data-optional") && n.removeAttribute("required"), De(n, "")), s.classList.remove("d-none"), s.setAttribute("aria-hidden", "false"), o.classList.add("d-none"), o.setAttribute("aria-hidden", "true"), r && (r.textContent = "")
                }
            }), p(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const n = e.form.querySelector(".js-company-name-input");
                    n && (n.setAttribute("required", ""), v(n, "focus"), v(n, "input"))
                }
            }), p(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;

                    function n() {
                        if (t.checked && t.form) {
                            const r = t.form.querySelector(".js-company-owned");
                            De(r, !0)
                        }
                    }
                    Eh(n, "autoselect"), t.addEventListener("change", n), n()
                }
            });
            var kh = Object.defineProperty,
                ft = (e, t) => kh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("include-fragment, poll-include-fragment", {
                subscribe: e => ee(E(e, "error", Ol), E(e, "loadstart", Hl))
            }), f("click", "include-fragment button[data-retry-button]", ({
                currentTarget: e
            }) => {
                const t = e.closest("include-fragment"),
                    n = t.src;
                t.src = "", t.src = n
            });

            function zo(e, t) {
                const n = e.currentTarget;
                if (n instanceof Element) {
                    for (const r of n.querySelectorAll("[data-show-on-error]")) r instanceof HTMLElement && (r.hidden = !t);
                    for (const r of n.querySelectorAll("[data-hide-on-error]")) r instanceof HTMLElement && (r.hidden = t)
                }
            }
            ft(zo, "toggleElements");

            function Hl(e) {
                zo(e, !1)
            }
            ft(Hl, "onLoad");

            function Ol(e) {
                zo(e, !0)
            }
            ft(Ol, "onError");

            function Vo({
                currentTarget: e
            }) {
                e instanceof Element && Ko(e)
            }
            ft(Vo, "loadDeferredContentByEvent");

            function Ko(e) {
                const t = e.closest("details");
                t && Dl(t)
            }
            ft(Ko, "loadDeferredContent");

            function Dl(e) {
                const t = e.getAttribute("data-deferred-details-content-url");
                if (t) {
                    e.removeAttribute("data-deferred-details-content-url");
                    const n = e.querySelector("include-fragment, poll-include-fragment");
                    n && (n.src = t)
                }
            }
            ft(Dl, "setIncludeFragmentSrc");
            var _h = Object.defineProperty,
                Bl = (e, t) => _h(e, "name", {
                    value: t,
                    configurable: !0
                });
            let qe = null;
            document.addEventListener("keydown", function(e) {
                !e.defaultPrevented && e.key === "Escape" && qe && qe.removeAttribute("open")
            }), p(".js-dropdown-details", {
                subscribe: e => ee(E(e, "toggle", Ul), E(e, "toggle", Nl))
            });

            function Nl({
                currentTarget: e
            }) {
                const t = e;
                if (t.hasAttribute("open")) {
                    const n = t.querySelector("[autofocus]");
                    n && n.focus()
                } else {
                    const n = t.querySelector("summary");
                    n && n.focus()
                }
            }
            Bl(Nl, "autofocus");

            function Ul({
                currentTarget: e
            }) {
                const t = e;
                t.hasAttribute("open") ? (qe && qe !== t && qe.removeAttribute("open"), qe = t) : t === qe && (qe = null)
            }
            Bl(Ul, "closeCurrentDetailsDropdown"), p("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e => {
                    const t = e.querySelector("summary");
                    return E(t, "mouseenter", Vo)
                }
            }), p("[data-deferred-details-content-url]", {
                subscribe: e => E(e, "toggle", Vo)
            }), f("click", "[data-toggle-for]", function(e) {
                const t = e.currentTarget.getAttribute("data-toggle-for") || "",
                    n = document.getElementById(t);
                !n || (n.hasAttribute("open") ? n.removeAttribute("open") : n.setAttribute("open", "open"))
            }), qt(function({
                target: e
            }) {
                if (!e || e.closest("summary")) return;
                let t = e.parentElement;
                for (; t;) t = t.closest("details"), t && (t.hasAttribute("open") || t.setAttribute("open", ""), t = t.parentElement)
            }), f("details-dialog-close", "[data-disable-dialog-dismiss]", function(e) {
                e.preventDefault()
            });
            var Th = Object.defineProperty,
                Wl = (e, t) => Th(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("details.select-menu details-menu include-fragment", function(e) {
                const t = e.closest("details");
                !t || (e.addEventListener("loadstart", function() {
                    t.classList.add("is-loading"), t.classList.remove("has-error")
                }), e.addEventListener("error", function() {
                    t.classList.add("has-error")
                }), e.addEventListener("loadend", function() {
                    t.classList.remove("is-loading");
                    const n = t.querySelector(".js-filterable-field");
                    n && v(n, "filterable:change")
                }))
            }), p("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "", v(e, "filterable:change"))
                    })
                }
            }), p("details-menu[role=menu] [role=menu]", e => {
                const t = e.closest("details-menu[role]");
                t && t !== e && t.removeAttribute("role")
            }), p("details details-menu remote-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "")
                    })
                }
            }), p("form details-menu", e => {
                const t = e.closest("form");
                t.addEventListener("reset", () => {
                    setTimeout(() => zl(t), 0)
                })
            });

            function zl(e) {
                const t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                for (const n of t) v(n, "change")
            }
            Wl(zl, "resetMenus"), W("keypress", "details-menu .js-filterable-field, details-menu filter-input input", e => {
                if (e.key === "Enter") {
                    const r = e.currentTarget.closest("details-menu").querySelector('[role^="menuitem"]:not([hidden])');
                    r instanceof HTMLElement && r.click(), e.preventDefault()
                }
            }), f("details-menu-selected", "details-menu", e => {
                const n = e.currentTarget.querySelector(".js-filterable-field");
                n instanceof HTMLInputElement && n.value && n.focus()
            }, {
                capture: !0
            }), f("details-menu-selected", "[data-menu-input]", e => {
                if (!(e.target instanceof Element)) return;
                const t = e.target.getAttribute("data-menu-input"),
                    n = document.getElementById(t);
                (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) && (n.value = e.detail.relatedTarget.value)
            }, {
                capture: !0
            }), p("details-menu remote-input", {
                constructor: Ya,
                initialize(e) {
                    const t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t) return;
                    let n = null;
                    e.addEventListener("load", () => {
                        document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? n = document.activeElement.id : n = null
                    }), e.addEventListener("loadend", () => {
                        if (n) {
                            const r = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                            r instanceof HTMLElement ? r.focus() : e.input && e.input.focus()
                        }
                    })
                }
            }), f("details-menu-selected", "details-menu[data-menu-max-options]", e => {
                const t = +e.currentTarget.getAttribute("data-menu-max-options"),
                    n = e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]'),
                    r = t === n.length;
                e.currentTarget.querySelector("[data-menu-max-options-warning]").hidden = !r;
                for (const o of e.currentTarget.querySelectorAll('[role="menuitemcheckbox"] input')) o.disabled = r && !o.checked
            }, {
                capture: !0
            }), p("details > details-menu", {
                subscribe(e) {
                    const t = e.closest("details");
                    return E(t, "toggle", Vl)
                }
            });
            async function Vl({
                currentTarget: e
            }) {
                const t = e,
                    n = t.hasAttribute("open");
                v(t, n ? "menu:activate" : "menu:deactivate"), await Te(), v(t, n ? "menu:activated" : "menu:deactivated")
            }
            Wl(Vl, "fireMenuToggleEvent"), p("details > details-menu[preload]:not([src])", {
                subscribe(e) {
                    return E(e.parentElement, "mouseover", function(t) {
                        const r = t.currentTarget.querySelector("include-fragment[src]");
                        r == null || r.load()
                    })
                }
            });
            var Ch = Object.defineProperty,
                Xo = (e, t) => Ch(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Go = new WeakMap,
                Kl = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");

            function Xl(e) {
                return e instanceof HTMLInputElement ? e.value || "Submit" : e.innerHTML || ""
            }
            Xo(Xl, "getButtonText");

            function Jo(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }
            Xo(Jo, "setButtonText"), f("submit", "form", function(e) {
                for (const t of e.currentTarget.querySelectorAll(Kl)) {
                    Go.set(t, Xl(t));
                    const n = t.getAttribute("data-disable-with");
                    n && Jo(t, n), t.disabled = !0
                }
            }, {
                capture: !0
            });

            function Qo(e) {
                for (const t of e.querySelectorAll(Kl)) {
                    const n = Go.get(t);
                    n != null && (Jo(t, n), (!t.hasAttribute("data-disable-invalid") || e.checkValidity()) && (t.disabled = !1), Go.delete(t))
                }
            }
            Xo(Qo, "revert"), f("deprecatedAjaxComplete", "form", function({
                currentTarget: e,
                target: t
            }) {
                e === t && Qo(e)
            }), Jr(Qo);
            var xh = Object.defineProperty,
                mt = (e, t) => xh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-document-dropzone", {
                constructor: HTMLElement,
                add(e) {
                    document.body.addEventListener("dragstart", rs), document.body.addEventListener("dragend", os), document.body.addEventListener("dragenter", Xt), document.body.addEventListener("dragover", Xt), document.body.addEventListener("dragleave", es), e.addEventListener("drop", ts)
                },
                remove(e) {
                    document.body.removeEventListener("dragstart", rs), document.body.removeEventListener("dragend", os), document.body.removeEventListener("dragenter", Xt), document.body.removeEventListener("dragover", Xt), document.body.removeEventListener("dragleave", es), e.removeEventListener("drop", ts)
                }
            });

            function Yo(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            mt(Yo, "hasFile");
            let Zo = null;

            function Xt(e) {
                if (ns) return;
                const t = e.currentTarget;
                Zo && window.clearTimeout(Zo), Zo = window.setTimeout(() => t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                !n || !Yo(n) || (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }
            mt(Xt, "onDragenter");

            function es(e) {
                e.target instanceof Element && e.target.classList.contains("js-document-dropzone") && e.currentTarget.classList.remove("dragover")
            }
            mt(es, "onBodyDragleave");

            function ts(e) {
                const t = e.currentTarget;
                t.classList.remove("dragover"), document.body.classList.remove("dragover");
                const n = e.dataTransfer;
                !n || !Yo(n) || (v(t, "document:drop", {
                    transfer: n
                }), e.stopPropagation(), e.preventDefault())
            }
            mt(ts, "onDrop");
            let ns = !1;

            function rs() {
                ns = !0
            }
            mt(rs, "onDragstart");

            function os() {
                ns = !1
            }
            mt(os, "onDragend");
            var Ah = Object.defineProperty,
                zn = (e, t) => Ah(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function ss(e, t) {
                const r = new TextEncoder().encode(t),
                    {
                        seal: o
                    } = await y.import("./chunk-tweetsodium.js");
                return o(r, e)
            }
            zn(ss, "encrypt");

            function is(e) {
                const t = atob(e).split("").map(n => n.charCodeAt(0));
                return Uint8Array.from(t)
            }
            zn(is, "decode");

            function as(e) {
                let t = "";
                for (const n of e) t += String.fromCharCode(n);
                return btoa(t)
            }
            zn(as, "encode"), f("submit", "form.js-encrypt-submit", async function(e) {
                const t = e.currentTarget;
                if (e.defaultPrevented || !t.checkValidity()) return;
                const n = t.elements.namedItem("secret_value");
                if (n.disabled = !0, !n.value) return;
                e.preventDefault();
                const r = is(t.getAttribute("data-public-key"));
                t.elements.namedItem("encrypted_value").value = as(await ss(r, n.value)), t.submit()
            }), f("submit", "form.js-encrypt-bulk-submit", cs(!0)), f("submit", "form.js-encrypt-bulk-submit-enable-empty", cs(!1));

            function cs(e) {
                return async function(t) {
                    const n = t.currentTarget;
                    if (t.defaultPrevented || !n.checkValidity()) return;
                    const r = is(n.getAttribute("data-public-key"));
                    t.preventDefault();
                    for (const o of n.elements) {
                        const s = o;
                        if (s.id.endsWith("secret")) {
                            if (s.disabled = !0, s.required && !s.value) {
                                const a = `${s.name} is invalid!`,
                                    c = document.querySelector("template.js-flash-template");
                                c.after(new fe(c, {
                                    className: "flash-error",
                                    message: a
                                }));
                                return
                            }
                            const i = `${s.name}_encrypted_value`;
                            if (!s.value) {
                                n.elements.namedItem(i).disabled = e;
                                continue
                            }
                            n.elements.namedItem(i).value = as(await ss(r, s.value))
                        }
                    }
                    n.submit()
                }
            }
            zn(cs, "submitBulk");
            var Ph = Object.defineProperty,
                ls = (e, t) => Ph(e, "name", {
                    value: t,
                    configurable: !0
                });
            let Vn;

            function Gt(e, t) {
                const n = document.querySelector('.js-site-favicon[type="image/svg+xml"]'),
                    r = document.querySelector('.js-site-favicon[type="image/png"]');
                t || (t = "light");
                const o = t === "light" ? "" : "-dark";
                if (n && r)
                    if (Vn == null && (Vn = n.href), e) {
                        e = e.substr(0, e.lastIndexOf(".")), e = `${e}${o}.svg`, n.href = e;
                        const s = n.href.substr(0, n.href.lastIndexOf("."));
                        r.href = `${s}.png`
                    } else {
                        const s = n.href.indexOf("-dark.svg"),
                            i = n.href.substr(0, s !== -1 ? s : n.href.lastIndexOf("."));
                        n.href = `${i}${o}.svg`, r.href = `${i}${o}.png`
                    }
            }
            ls(Gt, "updateFavicon");

            function Jt() {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            }
            ls(Jt, "prefersDarkColorScheme");

            function Gl() {
                Vn != null && Gt(Vn, Jt() ? "dark" : "light")
            }
            ls(Gl, "resetIcon"), p("[data-favicon-override]", {
                add(e) {
                    const t = e.getAttribute("data-favicon-override");
                    setTimeout(() => Gt(t, Jt() ? "dark" : "light"))
                },
                remove() {
                    Gl()
                }
            }), Jt() && Gt(void 0, "dark"), window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
                Gt(void 0, Jt() ? "dark" : "light")
            });
            var qh = Object.defineProperty,
                Jl = (e, t) => qh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-feature-preview-indicator-container", e => {
                Ql(e)
            });
            async function Ql(e) {
                const t = e.getAttribute("data-feature-preview-indicator-src"),
                    n = await Yl(t),
                    r = e.querySelectorAll(".js-feature-preview-indicator");
                for (const o of r) o.hidden = !n
            }
            Jl(Ql, "fetchFeaturePreviewIndicator");
            async function Yl(e) {
                try {
                    const t = await fetch(e, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    return t.ok ? (await t.json()).show_indicator : !1
                } catch {
                    return !1
                }
            }
            Jl(Yl, "fetchIndicator"), f("click", "[data-feature-preview-trigger-url]", async e => {
                const t = e.currentTarget,
                    n = t.getAttribute("data-feature-preview-trigger-url"),
                    r = await he({
                        content: K(document, n),
                        dialogClass: "feature-preview-dialog"
                    }),
                    o = t.getAttribute("data-feature-preview-close-details"),
                    s = t.getAttribute("data-feature-preview-close-hmac");
                r.addEventListener("dialog:remove", () => {
                    le({
                        hydroEventPayload: o,
                        hydroEventHmac: s
                    }, !0)
                });
                const i = document.querySelectorAll(".js-feature-preview-indicator");
                for (const a of i) a.hidden = !0
            }), C(".js-feature-preview-unenroll", async (e, t) => {
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                v(e, `feature-preview-unenroll:${n}`)
            }), C(".js-feature-preview-enroll", async (e, t) => {
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                v(e, `feature-preview-enroll:${n}`)
            });
            var Mh = Object.defineProperty,
                Kn = (e, t) => Mh(e, "name", {
                    value: t,
                    configurable: !0
                });
            class Zl {
                constructor(t, n) {
                    this.attachment = t, this.policy = n
                }
                async process(t) {
                    var n, r, o, s;
                    const i = window.performance.now(),
                        a = new Headers(this.policy.header || {}),
                        c = new XMLHttpRequest;
                    c.open("POST", this.policy.upload_url, !0);
                    for (const [h, g] of a) c.setRequestHeader(h, g);
                    c.onloadstart = () => {
                        t.attachmentUploadDidStart(this.attachment, this.policy)
                    }, c.upload.onprogress = h => {
                        if (h.lengthComputable) {
                            const g = Math.round(h.loaded / h.total * 100);
                            t.attachmentUploadDidProgress(this.attachment, g)
                        }
                    }, await eu(c, tu(this.attachment, this.policy)), c.status === 204 ? (us(this.policy), t.attachmentUploadDidComplete(this.attachment, this.policy, {})) : c.status === 201 ? (us(this.policy), t.attachmentUploadDidComplete(this.attachment, this.policy, JSON.parse(c.responseText))) : t.attachmentUploadDidError(this.attachment, {
                        status: c.status,
                        body: c.responseText
                    });
                    const m = {
                        duration: window.performance.now() - i,
                        size: (r = (n = this.attachment) == null ? void 0 : n.file) == null ? void 0 : r.size,
                        fileType: (s = (o = this.attachment) == null ? void 0 : o.file) == null ? void 0 : s.type,
                        success: c.status === 204 || c.status === 201
                    };
                    le({
                        uploadTiming: m
                    }, !0)
                }
            }
            Kn(Zl, "AttachmentUpload");

            function eu(e, t) {
                return new Promise((n, r) => {
                    e.onload = () => n(e), e.onerror = r, e.send(t)
                })
            }
            Kn(eu, "send");

            function tu(e, t) {
                const n = new FormData;
                t.same_origin && n.append("authenticity_token", t.upload_authenticity_token);
                for (const r in t.form) n.append(r, t.form[r]);
                return n.append("file", e.file), n
            }
            Kn(tu, "uploadForm");

            function us(e) {
                const t = typeof e.asset_upload_url == "string" ? e.asset_upload_url : null,
                    n = typeof e.asset_upload_authenticity_token == "string" ? e.asset_upload_authenticity_token : null;
                if (!(t && n)) return;
                const r = new FormData;
                r.append("authenticity_token", n), fetch(t, {
                    method: "PUT",
                    body: r,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            Kn(us, "markComplete");
            var $h = Object.defineProperty,
                ve = (e, t) => $h(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function nu(e, t) {
                const n = iu(e, t);
                for (const r of e.attachments) {
                    const o = await ru(e, r, t);
                    if (!o) return;
                    try {
                        await new Zl(r, o).process(n)
                    } catch {
                        v(t, "upload:error", {
                            batch: e,
                            attachment: r
                        }), we(t, "is-failed");
                        return
                    }
                }
            }
            ve(nu, "upload");
            async function ru(e, t, n) {
                const r = ou(t, n),
                    o = [];
                v(n, "upload:setup", {
                    batch: e,
                    attachment: t,
                    form: r,
                    preprocess: o
                });
                try {
                    await Promise.all(o);
                    const s = await fetch(su(r, n));
                    if (s.ok) return await s.json();
                    v(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    });
                    const i = await s.text(),
                        a = s.status,
                        {
                            state: c,
                            messaging: l
                        } = ds({
                            status: a,
                            body: i
                        }, t.file);
                    we(n, c, l)
                } catch {
                    v(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    }), we(n, "is-failed")
                }
                return null
            }
            ve(ru, "validate");

            function ou(e, t) {
                const n = t.querySelector(".js-data-upload-policy-url-csrf").value,
                    r = t.getAttribute("data-upload-repository-id"),
                    o = t.getAttribute("data-subject-type"),
                    s = t.getAttribute("data-subject-param"),
                    i = e.file,
                    a = new FormData;
                return a.append("name", i.name), a.append("size", String(i.size)), a.append("content_type", i.type), a.append("authenticity_token", n), o && a.append("subject_type", o), s && a.append("subject", s), r && a.append("repository_id", r), e.directory && a.append("directory", e.directory), a
            }
            ve(ou, "policyForm");

            function su(e, t) {
                return new Request(t.getAttribute("data-upload-policy-url"), {
                    method: "POST",
                    body: e,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            ve(su, "policyRequest");

            function iu(e, t) {
                return {
                    attachmentUploadDidStart(n, r) {
                        n.saving(0), we(t, "is-uploading"), v(t, "upload:start", {
                            batch: e,
                            attachment: n,
                            policy: r
                        })
                    },
                    attachmentUploadDidProgress(n, r) {
                        n.saving(r), v(t, "upload:progress", {
                            batch: e,
                            attachment: n
                        })
                    },
                    attachmentUploadDidComplete(n, r, o) {
                        n.saved(au(o, r)), v(t, "upload:complete", {
                            batch: e,
                            attachment: n
                        }), e.isFinished() && we(t, "is-default")
                    },
                    attachmentUploadDidError(n, r) {
                        v(t, "upload:error", {
                            batch: e,
                            attachment: n
                        });
                        const {
                            state: o
                        } = ds(r);
                        we(t, o)
                    }
                }
            }
            ve(iu, "createDelegate");

            function au(e, t) {
                const n = (e.id == null ? null : String(e.id)) || (t.asset.id == null ? null : String(t.asset.id)),
                    r = (typeof e.href == "string" ? e.href : null) || (typeof t.asset.href == "string" ? t.asset.href : null);
                return {
                    id: n,
                    href: r,
                    name: t.asset.name
                }
            }
            ve(au, "savedAttributes");

            function ds(e, t) {
                if (e.status === 400) return {
                    state: "is-bad-file"
                };
                if (e.status !== 422) return {
                    state: "is-failed"
                };
                const n = JSON.parse(e.body);
                if (!n || !n.errors) return {
                    state: "is-failed"
                };
                for (const r of n.errors) switch (r.field) {
                    case "size":
                        {
                            const o = t ? t.size : null;
                            return o != null && o === 0 ? {
                                state: "is-empty"
                            } : {
                                state: "is-too-big",
                                messaging: {
                                    message: Ih(r.message),
                                    target: ".js-upload-too-big"
                                }
                            }
                        }
                    case "file_count":
                        return {
                            state: "is-too-many"
                        };
                    case "width":
                    case "height":
                        return {
                            state: "is-bad-dimensions"
                        };
                    case "name":
                        return r.code === "already_exists" ? {
                            state: "is-duplicate-filename"
                        } : {
                            state: "is-bad-file"
                        };
                    case "content_type":
                        return {
                            state: "is-bad-file"
                        };
                    case "uploader_id":
                        return {
                            state: "is-bad-permissions"
                        };
                    case "repository_id":
                        return {
                            state: "is-repository-required"
                        };
                    case "format":
                        return {
                            state: "is-bad-format"
                        }
                }
                return {
                    state: "is-failed"
                }
            }
            ve(ds, "policyErrorState");
            const Ih = ve(e => e.startsWith("size") ? e.substring(5) : e, "trimSizeErrorMessage"),
                Rh = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

            function we(e, t, n) {
                if (n) {
                    const {
                        message: r,
                        target: o
                    } = n, s = e.querySelector(o);
                    s && (s.innerHTML = r)
                }
                e.classList.remove(...Rh), e.classList.add(t)
            }
            ve(we, "resetState");
            var Fh = Object.defineProperty,
                Xn = (e, t) => Fh(e, "name", {
                    value: t,
                    configurable: !0
                });
            class cu {
                constructor(t) {
                    this.attachments = t, this.size = this.attachments.length, this.total = Gn(this.attachments, n => n.file.size)
                }
                percent() {
                    const t = Xn(r => r.file.size * r.percent / 100, "bytes"),
                        n = Gn(this.attachments, t);
                    return Math.round(n / this.total * 100)
                }
                uploaded() {
                    const t = Xn(n => n.isSaved() ? 1 : 0, "value");
                    return Gn(this.attachments, t)
                }
                isFinished() {
                    return this.attachments.every(t => t.isSaved())
                }
            }
            Xn(cu, "Batch");

            function Gn(e, t) {
                return e.reduce((n, r) => n + t(r), 0)
            }
            Xn(Gn, "sum");
            var Hh = Object.defineProperty,
                Jn = (e, t) => Hh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("file-attachment[hover]", {
                add(e) {
                    e.classList.add("dragover")
                },
                remove(e) {
                    e.classList.remove("dragover")
                }
            }), f("file-attachment-accept", "file-attachment", function(e) {
                const {
                    attachments: t
                } = e.detail;
                t.length === 0 && (we(e.currentTarget, "is-hidden-file"), e.preventDefault())
            }), f("file-attachment-accepted", "file-attachment", function(e) {
                const t = e.currentTarget.querySelector(".drag-and-drop");
                if (t && t.hidden) return;
                const {
                    attachments: n
                } = e.detail;
                nu(new cu(n), e.currentTarget)
            });
            let lu = 0;
            p("file-attachment", {
                add(e) {
                    lu++ === 0 && (document.addEventListener("drop", ms), document.addEventListener("dragover", ps));
                    const t = e.closest("form");
                    t && t.addEventListener("reset", hs)
                },
                remove(e) {
                    --lu === 0 && (document.removeEventListener("drop", ms), document.removeEventListener("dragover", ps));
                    const t = e.closest("form");
                    t && t.removeEventListener("reset", hs)
                }
            });

            function fs(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            Jn(fs, "hasFile");

            function ms(e) {
                const t = e.dataTransfer;
                t && fs(t) && e.preventDefault()
            }
            Jn(ms, "onDocumentDrop");

            function ps(e) {
                const t = e.dataTransfer;
                t && fs(t) && e.preventDefault()
            }
            Jn(ps, "onDocumentDragover");

            function hs({
                currentTarget: e
            }) {
                const t = e.querySelector("file-attachment");
                we(t, "is-default")
            }
            Jn(hs, "onFormReset");
            var Oh = Object.defineProperty,
                Dh = (e, t) => Oh(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("filter-input-updated", "filter-input", e => {
                const t = e.currentTarget.input;
                if (!(document.activeElement && document.activeElement === t)) return;
                const {
                    count: n,
                    total: r
                } = e.detail;
                Fe(`Found ${n} out of ${r} ${r===1?"item":"items"}`)
            }), f("toggle", "details", e => {
                setTimeout(() => uu(e.target), 0)
            }, {
                capture: !0
            }), f("tab-container-changed", "tab-container", e => {
                if (!(e.target instanceof HTMLElement)) return;
                const {
                    relatedTarget: t
                } = e.detail, n = e.target.querySelector("filter-input");
                n instanceof Za && n.setAttribute("aria-owns", t.id)
            }, {
                capture: !0
            });

            function uu(e) {
                const t = e.querySelector("filter-input");
                t && !e.hasAttribute("open") && t.reset()
            }
            Dh(uu, "resetFilter");
            var Bh = Object.defineProperty,
                du = (e, t) => Bh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function gs(e, t, n, r = {}) {
                var o;
                const s = (o = r.limit) != null ? o : 1 / 0;
                let i = 0;
                for (const a of e.children) {
                    const c = n(a, t);
                    c == null || (c && i < s ? (i++, bs(a, !0)) : bs(a, !1))
                }
                return i
            }
            du(gs, "filterList");

            function bs(e, t) {
                e.style.display = t ? "" : "none", e.hidden = !t
            }
            du(bs, "toggle");
            var Nh = Object.defineProperty,
                Uh = (e, t) => Nh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const fu = new WeakMap;

            function mu(e, t, n) {
                const r = t.toLowerCase(),
                    o = n.limit;
                let s = fu.get(e);
                const i = e.querySelector('input[type="radio"]:checked'),
                    a = Array.from(e.children);
                s || (s = Array.from(e.children), fu.set(e, s));
                for (const j of a) e.removeChild(j), j instanceof HTMLElement && (j.style.display = "");
                const c = r ? Be(s, n.sortKey, Ne) : s,
                    l = o == null ? c : c.slice(0, o),
                    d = l.length,
                    m = document.createDocumentFragment();
                for (const j of l) m.appendChild(j);
                let h = !1;
                if (i instanceof HTMLInputElement)
                    for (const j of m.querySelectorAll('input[type="radio"]:checked')) j instanceof HTMLInputElement && j.value !== i.value && (j.checked = !1, h = !0);
                e.appendChild(m), i && h && i.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const g = e.querySelectorAll(".js-divider");
                for (const j of g) j.classList.toggle("d-none", Boolean(r && r.trim().length > 0));
                return d
            }
            Uh(mu, "filterSortList");
            var Wh = Object.defineProperty,
                Ye = (e, t) => Wh(e, "name", {
                    value: t,
                    configurable: !0
                });
            let ys = new AbortController;
            const Qt = new WeakMap,
                pu = new WeakMap,
                hu = new WeakMap;
            async function gu(e, t, n, r) {
                n && !Qt.has(e) && vu(e);
                const o = await bu(e, t, n, r);
                return e.hasAttribute("data-filterable-data-pre-rendered") && (o.suggestions = yu(e, n)), o
            }
            Ye(gu, "getData");
            async function bu(e, t, n, r) {
                const o = new URL(e.getAttribute("data-filterable-src") || "", window.location.origin);
                if (o.pathname === "/") throw new Error("could not get data-filterable-src");
                if (n) {
                    const s = Qt.get(e),
                        i = t.trim();
                    if (s.lastSearchText === i) return s.lastSearchResult;
                    const a = s.lastSearchText === void 0;
                    s.lastSearchText = i;
                    const c = e.getAttribute("data-filterable-for") || "",
                        l = document.getElementById(c);
                    if (ys.abort(), i === "" && !r) s.lastSearchResult = {
                        suggestions: [],
                        users: []
                    };
                    else {
                        ys = new AbortController;
                        const d = {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                signal: ys.signal
                            },
                            m = o.searchParams || new URLSearchParams;
                        m.set("q", t), m.set("typeAhead", "true"), o.search = m.toString(), a || l == null || l.classList.add("is-loading");
                        const h = await fetch(o.toString(), d);
                        s.lastSearchResult = await h.json()
                    }
                    return l == null || l.classList.remove("is-loading"), s.lastSearchResult
                } else {
                    const s = {
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    };
                    return await (await fetch(o.toString(), s)).json()
                }
            }
            Ye(bu, "fetchQueryIfNeeded");

            function yu(e, t) {
                const n = [],
                    r = e.querySelectorAll(".js-filterable-suggested-user");
                if (r.length > 0)
                    for (const o of e.querySelectorAll(".js-filterable-suggested-user")) o.classList.remove("js-filterable-suggested-user"), n.push({
                        name: o.querySelector(".js-description").textContent,
                        login: o.querySelector(".js-username").textContent,
                        selected: o.getAttribute("aria-checked") === "true",
                        element: o,
                        suggestion: !0
                    });
                if (t) {
                    const o = Qt.get(e);
                    return r.length > 0 && (o.cachedSuggestions = n, o.userResultCache.clear()), o.cachedSuggestions
                }
                return n
            }
            Ye(yu, "getPreRenderedUsers");

            function vu(e) {
                Qt.set(e, {
                    lastSearchResult: {
                        suggestions: [],
                        users: []
                    },
                    cachedSuggestions: [],
                    userResultCache: new Map
                })
            }
            Ye(vu, "initializeTypeAheadCache");
            async function wu(e, t, n) {
                var r, o;
                hu.set(e, t), await wn();
                const s = e.hasAttribute("data-filterable-show-suggestion-header"),
                    i = e.hasAttribute("data-filterable-type-ahead"),
                    a = e.hasAttribute("data-filterable-type-ahead-query-on-empty");
                let c = pu.get(e);
                if (!c) try {
                    c = await gu(e, t, i, a), i || pu.set(e, c)
                } catch (T) {
                    if (T.name === "AbortError") return -1;
                    throw T
                }
                if (!i && hu.get(e) !== t) return -1;
                const l = n.limit,
                    d = e.querySelector("template"),
                    m = {};
                for (const T of e.querySelectorAll("input[type=hidden]")) m[`${T.name}${T.value}`] = T;
                let h = d.nextElementSibling;
                for (; h;) {
                    const T = h;
                    h = T.nextElementSibling, T instanceof HTMLElement && (i || T.getAttribute("aria-checked") === "true" || T.classList.contains("select-menu-divider")) ? T.hidden = !0 : T.remove()
                }
                let g = 0;
                const j = t.trim() === "",
                    L = document.createDocumentFragment(),
                    x = e.querySelector(".js-divider-suggestions"),
                    S = e.querySelector(".js-divider-rest"),
                    q = Qt.get(e);

                function M(T) {
                    const _t = `${T.login} ${T.name}`.toLowerCase().trim().includes(t),
                        V = !(l != null && g >= l) && _t;
                    if (V || T.selected || T.suggestion) {
                        const I = ju(T, d, m, q);
                        I.hidden = !V, V && g++, L.appendChild(I)
                    }
                }
                Ye(M, "addItem");
                let A = !1;
                if (x && (((r = c.suggestions) == null ? void 0 : r.length) > 0 || s && c.users.length > 0)) {
                    const T = (o = c.suggestions) != null ? o : [],
                        _t = T.filter(I => I.selected),
                        V = T.filter(I => !I.selected);
                    for (const I of _t) M(I);
                    L.appendChild(x);
                    const ot = g;
                    for (const I of V) M(I);
                    A = g > ot, x.hidden = !A || i && !j, s && c.users.length > 0 && (x.hidden = !j)
                }
                S && L.appendChild(S);
                const pe = g;
                for (const T of c.users) M(T);
                return S && (S.hidden = pe === g || !A), e.append(L), g
            }
            Ye(wu, "substringMemoryFilterList");

            function ju(e, t, n, r) {
                if (e.element != null) return e.element;
                if (r == null ? void 0 : r.userResultCache.has(e.id)) return r.userResultCache.get(e.id);
                const o = t.content.cloneNode(!0),
                    s = o.querySelector("input[type=checkbox], input[type=radio]");
                e.type && (s.name = `reviewer_${e.type}_ids[]`), s.value = e.id;
                const i = `${s.name}${e.id}`;
                let a = e.selected;
                n[i] && (a = !0, n[i].remove(), delete n[i]);
                const c = o.querySelector("[role^=menuitem]");
                a && (c.setAttribute("aria-checked", "true"), s.checked = !0), e.disabled && c.setAttribute("aria-disabled", "true");
                const l = o.querySelector(".js-username");
                l && (l.textContent = e.login);
                const d = o.querySelector(".js-description");
                d && (d.textContent = e.name);
                const m = o.querySelector(".js-extended-description");
                m && (e.description ? m.textContent = e.description : m.remove());
                const h = o.querySelector(".js-avatar");
                return h.className = `${h.className} ${e.class}`, h.src = e.avatar, e.element = c, r == null || r.userResultCache.set(e.id, c), e.element
            }
            Ye(ju, "createReviewerItem");
            var zh = Object.defineProperty,
                je = (e, t) => zh(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.autocomplete || (e.autocomplete = "off");
                    const t = e.hasAttribute("type-ahead") ? 200 : null;
                    let n = e.value;
                    async function r(s) {
                        n !== s.value && (n = s.value, await Te(), v(s, "filterable:change"))
                    }
                    je(r, "onInputChange");
                    async function o() {
                        n = e.value, await Te(), v(e, "filterable:change")
                    }
                    return je(o, "onFocus"), {
                        add(s) {
                            s.addEventListener("focus", o), bn(s, r, {
                                wait: t
                            }), document.activeElement === s && o()
                        },
                        remove(s) {
                            s.removeEventListener("focus", o), Wi(s, r)
                        }
                    }
                }
            }), f("filterable:change", ".js-filterable-field", async function(e) {
                const t = e.currentTarget,
                    n = t.value.trim().toLowerCase(),
                    r = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
                for (const o of r) {
                    const s = await Su(o, n);
                    if (s === -1) return;
                    document.activeElement && t === document.activeElement && Fe(`${s} results found.`), o.dispatchEvent(new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    }))
                }
            });

            function Lu(e) {
                return e.hasAttribute("data-filter-value") ? e.getAttribute("data-filter-value").toLowerCase().trim() : e.textContent.toLowerCase().trim()
            }
            je(Lu, "defaultText");
            async function Su(e, t) {
                const n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null;
                let r = 0;
                switch (e.getAttribute("data-filterable-type")) {
                    case "fuzzy":
                        {
                            const o = t.toLowerCase();r = mu(e, t, {
                                limit: n,
                                sortKey: je(i => {
                                    const a = Lu(i),
                                        c = $t(a, o);
                                    return c > 0 ? {
                                        score: c,
                                        text: a
                                    } : null
                                }, "sortKey")
                            });
                            break
                        }
                    case "substring":
                        r = gs(e, t.toLowerCase(), ku, {
                            limit: n
                        });
                        break;
                    case "substring-memory":
                        r = await wu(e, t, {
                            limit: n
                        });
                        break;
                    default:
                        r = gs(e, t.toLowerCase(), Eu, {
                            limit: n
                        });
                        break
                }
                return e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", r === 0), r
            }
            je(Su, "filter");

            function Eu(e, t) {
                return e.textContent.toLowerCase().trim().startsWith(t)
            }
            je(Eu, "prefix");

            function ku(e, t) {
                return e.hasAttribute("data-skip-substring-filter") || e.classList.contains("select-menu-no-results") ? null : (e.querySelector("[data-filterable-item-text]") || e).textContent.toLowerCase().trim().includes(t)
            }
            je(ku, "substring"), f("filterable:change", "details-menu .select-menu-list", function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-new-item-form");
                n && _u(t, n, e.detail.inputField.value)
            });

            function _u(e, t, n) {
                const r = n.length > 0 && !Tu(e, n);
                if (e.classList.toggle("is-showing-new-item-form", r), !r) return;
                t.querySelector(".js-new-item-name").textContent = n;
                const o = t.querySelector(".js-new-item-value");
                (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && (o.value = n)
            }
            je(_u, "toggleForm");

            function Tu(e, t) {
                for (const n of e.querySelectorAll("[data-menu-button-text]"))
                    if (n.textContent.toLowerCase().trim() === t.toLowerCase()) return !0;
                return !1
            }
            je(Tu, "itemExists"), p("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    e.closest(".select-menu-list").classList.add("filterable-empty")
                },
                remove(e) {
                    e.closest(".select-menu-list").classList.remove("filterable-empty")
                }
            });
            var Vh = Object.defineProperty,
                vs = (e, t) => Vh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Cu = navigator.userAgent.match(/Firefox\/(\d+)/);
            Cu && Number(Cu[1]) < 76 && (p('details-menu label[tabindex][role^="menuitem"]', e => {
                const t = e.querySelector("input");
                if (!t) return;
                const n = e.classList.contains("select-menu-item"),
                    r = t.classList.contains("d-none"),
                    o = n || r || t.hidden;
                n && t.classList.add("d-block"), r && t.classList.remove("d-none"), o && (t.classList.add("sr-only"), t.hidden = !1), e.removeAttribute("tabindex")
            }), f("focus", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e => {
                const t = e.currentTarget.closest("label");
                t.classList.contains("select-menu-item") && t.classList.add("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.add("hx_menuitem--focus"), t.classList.contains("dropdown-item") && t.classList.add("hx_menuitem--focus"), e.currentTarget.addEventListener("blur", () => {
                    t.classList.contains("select-menu-item") && t.classList.remove("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.remove("hx_menuitem--focus"), t.classList.contains("dropdown-item") && t.classList.remove("hx_menuitem--focus")
                }, {
                    once: !0
                })
            }, {
                capture: !0
            }), W("keydown", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', async function(e) {
                if (ws(e)) e.currentTarget instanceof Element && xu(e.currentTarget);
                else if (e.key === "Enter") {
                    const t = e.currentTarget;
                    e.preventDefault(), await Te(), t instanceof HTMLInputElement && t.click()
                }
            }), f("blur", 'details-menu label input[role="menuitemradio"], details-menu label input[role="menuitemcheckbox"]', e => {
                js(e.currentTarget)
            }, {
                capture: !0
            }), W("keyup", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e => {
                !ws(e) || e.currentTarget instanceof Element && js(e.currentTarget)
            }));

            function ws(e) {
                return e.key === "ArrowDown" || e.key === "ArrowUp"
            }
            vs(ws, "isArrowKeys");

            function xu(e) {
                const t = e.closest("label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role")), e.setAttribute("role", t.getAttribute("data-role")), t.removeAttribute("role")
            }
            vs(xu, "switchRoleToInputForNavigation");

            function js(e) {
                const t = e.closest("label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role")), t.setAttribute("role", t.getAttribute("data-role")), e.removeAttribute("role")
            }
            vs(js, "switchRoleBackToOriginalState");
            var Kh = Object.defineProperty,
                Xh = (e, t) => Kh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Ls() {
                zi(document) && Vi(document)
            }
            Xh(Ls, "scrollTargetIntoViewIfNeeded"), qt(Ls), f("click", 'a[href^="#"]', function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && setTimeout(Ls, 0)
            }), f("click", ".js-flash-close", function(e) {
                const t = e.currentTarget.closest(".flash-messages");
                e.currentTarget.closest(".flash").remove(), t && !t.querySelector(".flash") && t.remove()
            });
            var Gh = Object.defineProperty,
                Jh = (e, t) => Gh(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Qh = ["flash-notice", "flash-error", "flash-message", "flash-warn"];

            function Au(e) {
                for (const {
                        key: t,
                        value: n
                    } of Qh.flatMap(no)) {
                    ro(t);
                    let r;
                    try {
                        r = atob(decodeURIComponent(n))
                    } catch {
                        continue
                    }
                    e.after(new fe(e, {
                        className: t,
                        message: r
                    }))
                }
            }
            Jh(Au, "displayFlash"), p("template.js-flash-template", {
                constructor: HTMLTemplateElement,
                add(e) {
                    Au(e)
                }
            });
            const Ss = new WeakMap;
            document.addEventListener("focus", function(e) {
                const t = e.target;
                t instanceof Element && !Ss.get(t) && (v(t, "focusin:delay"), Ss.set(t, !0))
            }, {
                capture: !0
            }), document.addEventListener("blur", function(e) {
                setTimeout(function() {
                    const t = e.target;
                    t instanceof Element && t !== document.activeElement && (v(t, "focusout:delay"), Ss.delete(t))
                }, 200)
            }, {
                capture: !0
            }), C(".js-form-toggle-target", async function(e, t) {
                try {
                    await t.text()
                } catch {
                    return
                }
                const n = e.closest(".js-form-toggle-container");
                n.querySelector(".js-form-toggle-target[hidden]").hidden = !1, e.hidden = !0
            });
            var Yh = Object.defineProperty,
                Zh = (e, t) => Yh(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Pu(e) {
                e instanceof CustomEvent && Fe(`${e.detail} results found.`)
            }
            Zh(Pu, "noticeHandler"), p("fuzzy-list", {
                constructor: Ki,
                subscribe: e => E(e, "fuzzy-list-sorted", Pu)
            }), f("click", ".email-hidden-toggle", function(e) {
                const t = e.currentTarget.nextElementSibling;
                t instanceof HTMLElement && (t.style.display = "", t.classList.toggle("expanded"), e.preventDefault())
            });
            var eg = Object.defineProperty,
                qu = (e, t) => eg(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-hook-url-field", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        const n = e.form;
                        if (!n) return;
                        let r;
                        try {
                            r = new URL(e.value)
                        } catch {}
                        const o = n.querySelector(".js-invalid-url-notice");
                        o instanceof HTMLElement && (o.hidden = !!(e.value === "" || r && /^https?:/.test(r.protocol)));
                        const s = n.querySelector(".js-insecure-url-notice");
                        s instanceof HTMLElement && r && e.value && (s.hidden = /^https:$/.test(r.protocol));
                        const i = n.querySelector(".js-ssl-hook-fields");
                        i instanceof HTMLElement && (i.hidden = !(r && r.protocol === "https:"))
                    }
                    qu(t, "checkUrl"), bn(e, t), t()
                }
            });

            function Es(e) {
                const t = document.querySelectorAll(".js-hook-event-checkbox");
                for (const n of t) n.checked = n.matches(e)
            }
            qu(Es, "chooseEvents"), f("change", ".js-hook-event-choice", function(e) {
                const t = e.currentTarget,
                    n = t.checked && t.value === "custom",
                    r = t.closest(".js-hook-events-field");
                if (r && r.classList.toggle("is-custom", n), t.checked)
                    if (n) {
                        const o = document.querySelector(".js-hook-wildcard-event");
                        o.checked = !1
                    } else t.value === "push" ? Es('[value="push"]') : t.value === "all" && Es(".js-hook-wildcard-event")
            }), f("click", ".js-hook-deliveries-pagination-button", async function(e) {
                const t = e.currentTarget;
                t.disabled = !0;
                const n = t.parentElement,
                    r = t.getAttribute("data-url");
                n.before(await K(document, r)), n.remove()
            }), C(".js-redeliver-hook-form", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch {
                    e.classList.add("failed");
                    return
                }
                document.querySelector(".js-hook-deliveries-container").replaceWith(n.html)
            });
            var tg = Object.defineProperty,
                ng = (e, t) => tg(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("[data-hotkey]", {
                constructor: HTMLElement,
                add(e) {
                    if (Xi()) Qr(e);
                    else {
                        const t = e.getAttribute("data-hotkey");
                        if (t) {
                            const n = Mu(t);
                            n.length > 0 && (e.setAttribute("data-hotkey", n), Qr(e))
                        }
                    }
                },
                remove(e) {
                    Pa(e)
                }
            });

            function Mu(e) {
                return e.split(",").filter(n => Gi(n)).join(",")
            }
            ng(Mu, "filterOutCharacterKeyShortcuts");
            var rg = Object.defineProperty,
                H = (e, t) => rg(e, "name", {
                    value: t,
                    configurable: !0
                });
            const O = document.querySelector(".js-hovercard-content"),
                og = ue(K);
            let me, Qn = null,
                ks, _s = 0;
            const Ts = 12,
                Cs = 24,
                $u = Cs - 7,
                Iu = 16,
                sg = 100,
                ig = 250;

            function Me(e) {
                return "Popover-message--" + e
            }
            H(Me, "contentClass");

            function Ru(e) {
                setTimeout(() => {
                    if (document.body && document.body.contains(e)) {
                        const t = e.querySelector("[data-hovercard-tracking]");
                        if (t) {
                            const r = t.getAttribute("data-hovercard-tracking");
                            r && Ct("user-hovercard-load", JSON.parse(r))
                        }
                        const n = e.querySelector("[data-hydro-view]");
                        n instanceof HTMLElement && Ji(n)
                    }
                }, 500)
            }
            H(Ru, "trackLoad");

            function pt() {
                O instanceof HTMLElement && (O.style.display = "none", O.children[0].innerHTML = "", Qn = null, me = null)
            }
            H(pt, "hideCard");

            function Fu(e) {
                const t = e.getClientRects();
                let n = t[0] || e.getBoundingClientRect() || {
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0
                };
                if (t.length > 0) {
                    for (const r of t)
                        if (r.left < _s && r.right > _s) {
                            n = r;
                            break
                        }
                }
                return n
            }
            H(Fu, "selectRectNearestMouse");

            function Hu(e) {
                const {
                    width: t,
                    height: n
                } = O.getBoundingClientRect(), {
                    left: r,
                    top: o,
                    height: s,
                    width: i
                } = Fu(e), a = o > n;
                if (e.classList.contains("js-hovercard-left")) {
                    const l = r - t - Ts,
                        d = o + s / 2;
                    return {
                        containerTop: a ? d - n + $u + Iu / 2 : d - $u - Iu / 2,
                        containerLeft: l,
                        contentClassSuffix: a ? "right-bottom" : "right-top"
                    }
                } else {
                    const l = window.innerWidth - r > t,
                        d = r + i / 2,
                        m = l ? d - Cs : d - t + Cs;
                    return {
                        containerTop: a ? o - n - Ts : o + s + Ts,
                        containerLeft: m,
                        contentClassSuffix: a ? l ? "bottom-left" : "bottom-right" : l ? "top-left" : "top-right"
                    }
                }
            }
            H(Hu, "calculatePositions");

            function Ou(e, t) {
                if (!(O instanceof HTMLElement)) return;
                O.style.visibility = "hidden", O.style.display = "block", t.classList.remove(Me("bottom-left"), Me("bottom-right"), Me("right-top"), Me("right-bottom"), Me("top-left"), Me("top-right"));
                const {
                    containerTop: n,
                    containerLeft: r,
                    contentClassSuffix: o
                } = Hu(e);
                t.classList.add(Me(o)), O.style.top = `${n+window.pageYOffset}px`, O.style.left = `${r+window.pageXOffset}px`, Ku(e, O), O.style.visibility = ""
            }
            H(Ou, "positionCard");

            function xs(e, t) {
                if (!(O instanceof HTMLElement)) return;
                const n = O.children[0];
                n.innerHTML = "";
                const r = document.createElement("div");
                for (const o of e.children) r.appendChild(o.cloneNode(!0));
                n.appendChild(r), Ou(t, n), Ru(r), O.style.display = "block"
            }
            H(xs, "showCard");

            function Du(e) {
                const t = e.closest("[data-hovercard-subject-tag]");
                if (t) return t.getAttribute("data-hovercard-subject-tag");
                const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                return n ? n.getAttribute("content") : null
            }
            H(Du, "determineEnclosingSubject");

            function Bu(e) {
                const t = e.getAttribute("data-hovercard-url");
                if (t) {
                    const n = Du(e);
                    if (n) {
                        const r = new URL(t, window.location.origin),
                            o = new URLSearchParams(r.search.slice(1));
                        return o.append("subject", n), o.append("current_path", window.location.pathname + window.location.search), r.search = o.toString(), r.toString()
                    }
                    return t
                }
                return ""
            }
            H(Bu, "hovercardUrlFromTarget");

            function Nu(e) {
                const t = e.getAttribute("data-hovercard-type");
                return t === "pull_request" || t === "issue" ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : t === "team" ? !!e.closest("[data-team-hovercards-enabled]") : t === "repository" ? !!e.closest("[data-repository-hovercards-enabled]") : t === "commit" ? !!e.closest("[data-commit-hovercards-enabled]") : t === "project" ? !!e.closest("[data-project-hovercards-enabled]") : t === "discussion" ? !!e.closest("[data-discussion-hovercards-enabled]") : t === "acv_badge" ? !!e.closest("[data-acv-badge-hovercards-enabled]") : t === "sponsors_listing" ? !!e.closest("[data-sponsors-listing-hovercards-enabled]") : !0
            }
            H(Nu, "hovercardsAreEnabledForType");
            async function Uu(e, t) {
                if ("ontouchstart" in document) return;
                const r = e.currentTarget;
                if (e instanceof MouseEvent && (_s = e.clientX), !(r instanceof Element) || me === r || r.closest(".js-hovercard-content") || !Nu(r)) return;
                pt(), me = r, Qn = document.activeElement;
                const o = Bu(r);
                let s;
                try {
                    const i = new Promise(a => window.setTimeout(a, t, 0));
                    s = await og(document, o), await i
                } catch (i) {
                    const a = i.response;
                    if (a && a.status === 404) {
                        const c = "Hovercard is unavailable";
                        r.setAttribute("aria-label", c), r.classList.add("tooltipped", "tooltipped-ne")
                    } else if (a && a.status === 410) {
                        const c = await a.clone().json();
                        r.setAttribute("aria-label", c.message), r.classList.add("tooltipped", "tooltipped-ne")
                    }
                    return
                }
                r === me && (xs(s, r), e instanceof KeyboardEvent && O instanceof HTMLElement && O.focus())
            }
            H(Uu, "activateFn");

            function Wu(e) {
                Uu(e, ig)
            }
            H(Wu, "activateWithTimeoutFn");

            function Yn(e) {
                if (!!me) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        const t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
                    } else e instanceof KeyboardEvent && Qn instanceof HTMLElement && Qn.focus();
                    pt()
                }
            }
            H(Yn, "deactivateFn");

            function zu(e) {
                const t = me;
                ks = window.setTimeout(() => {
                    me === t && Yn(e)
                }, sg)
            }
            H(zu, "deactivateWithTimeoutFn");

            function As(e) {
                if (e instanceof KeyboardEvent) switch (e.key) {
                    case "Escape":
                        Yn(e)
                }
            }
            H(As, "keyupFn");

            function Vu() {
                ks && clearTimeout(ks)
            }
            H(Vu, "cancelDeactivation"), O && (p("[data-hovercard-url]", {
                subscribe: e => ee(E(e, "mouseover", Wu), E(e, "mouseleave", zu), E(e, "keyup", As))
            }), p("[data-hovercard-url]", {
                remove(e) {
                    me === e && pt()
                }
            }), p(".js-hovercard-content", {
                subscribe: e => ee(E(e, "mouseover", Vu), E(e, "mouseleave", Yn), E(e, "keyup", As))
            }), p(".js-hovercard-include-fragment", {
                constructor: HTMLTemplateElement,
                add(e) {
                    me && xs(e.content, me)
                }
            }), f("menu:activated", "details", pt), window.addEventListener("statechange", pt));

            function Ku(e, t) {
                const n = e.getAttribute("data-hovercard-z-index-override");
                n ? t.style.zIndex = n : t.style.zIndex = "100"
            }
            H(Ku, "setZIndexOverride"), async function() {
                document.addEventListener("pjax:complete", () => Br({
                    pjax: "true"
                })), await Mt, Br()
            }(), f("click", "[data-octo-click]", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                const n = t.getAttribute("data-octo-click") || "",
                    r = {};
                if (t.hasAttribute("data-ga-click")) {
                    const s = t.getAttribute("data-ga-click").split(",");
                    r.category = s[0].trim(), r.action = s[1].trim()
                }
                if (t.hasAttribute("data-octo-dimensions")) {
                    const o = t.getAttribute("data-octo-dimensions").split(",");
                    for (const s of o) {
                        const [i, a] = s.split(/:(.+)/);
                        i && (r[i] = a || "")
                    }
                }
                Ct(n, r)
            }), f("click", "[data-hydro-click]", function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-hydro-click") || "",
                    r = t.getAttribute("data-hydro-click-hmac") || "",
                    o = t.getAttribute("data-hydro-client-context") || "";
                Nr(n, r, o)
            }), f("click", "[data-optimizely-hydro-click]", function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-optimizely-hydro-click") || "",
                    r = t.getAttribute("data-optimizely-hydro-click-hmac") || "";
                Nr(n, r, "")
            }), C(".js-immediate-updates", async function(e, t) {
                let n;
                try {
                    n = (await t.json()).json.updateContent
                } catch (r) {
                    r.response.json && (n = r.response.json.updateContent)
                }
                if (n)
                    for (const r in n) {
                        const o = n[r],
                            s = document.querySelector(r);
                        s instanceof HTMLElement && yn(s, o)
                    }
            }), p("[data-indeterminate]", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.indeterminate = !0
                }
            });
            var ag = Object.defineProperty,
                cg = (e, t) => ag(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Xu() {
                y.import("./chunk-jump-to.js")
            }
            cg(Xu, "load"), p(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    e.addEventListener("focusin", Xu, {
                        once: !0
                    }), Qi(window.location.pathname)
                }
            });
            var lg = Object.defineProperty,
                ug = (e, t) => lg(e, "name", {
                    value: t,
                    configurable: !0
                });
            let Ps = !1;
            async function qs() {
                if (Ps) return;
                Ps = !0;
                const t = {
                        contexts: document.querySelector("meta[name=github-keyboard-shortcuts]").content
                    },
                    n = `/site/keyboard_shortcuts?${new URLSearchParams(t).toString()}`,
                    r = await he({
                        content: K(document, n),
                        labelledBy: "keyboard-shortcuts-heading"
                    });
                r.style.width = "800px", r.addEventListener("dialog:remove", function() {
                    Ps = !1
                }, {
                    once: !0
                })
            }
            ug(qs, "showKeyboardShortcuts"), f("click", ".js-keyboard-shortcuts", qs), document.addEventListener("keydown", e => {
                e instanceof KeyboardEvent && (!Dr(e) || e.target instanceof Node && Yi(e.target) || Sn(e) === "Shift+?" && qs())
            }), p(".js-modifier-key", {
                constructor: HTMLElement,
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.textContent;
                        t && (t = t.replace(/ctrl/, "\u2318"), t = t.replace(/alt/, "\u2325"), e.textContent = t)
                    }
                }
            }), p(".js-modifier-label-key", {
                add(e) {
                    var t;
                    let n = (t = e.textContent) == null ? void 0 : t.replace(/ctrl/i, "Ctrl");
                    !n || (/Macintosh/.test(navigator.userAgent) && (n = n.replace(/ctrl/i, "Cmd"), n = n.replace(/alt/i, "Option")), e.textContent = n)
                }
            });
            var dg = Object.defineProperty,
                fg = (e, t) => dg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Yt(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                const n = parseInt(t.getAttribute("data-input-max-length") || "", 10),
                    r = parseInt(t.getAttribute("data-warning-length") || "", 10) || 5,
                    s = t.value.replace(/(\r\n|\n|\r)/g, `\r
`);
                let i = n - s.length;
                if (i <= 0) {
                    let d = s.substr(0, n);
                    d.endsWith("\r") ? (d = d.substr(0, n - 1), i = 1) : i = 0, t.value = d
                }
                const a = t.getAttribute("data-warning-text"),
                    l = t.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
                i <= r ? (l.textContent = a.replace(new RegExp("{{remaining}}", "g"), `${i}`), l.classList.remove("d-none")) : (l.textContent = "", l.classList.add("d-none"))
            }
            fg(Yt, "displayLengthWarning"), p(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", Yt), e.addEventListener("change", Yt)
                },
                remove(e) {
                    e.removeEventListener("input", Yt), e.removeEventListener("change", Yt)
                }
            }), p("link[rel=prefetch-viewed]", {
                initialize() {
                    window.requestIdleCallback(() => {
                        fetch(location.href, {
                            method: "HEAD",
                            credentials: "same-origin",
                            headers: {
                                Purpose: "prefetch-viewed"
                            }
                        })
                    })
                }
            }), f("click", ".js-member-search-filter", function(e) {
                e.preventDefault();
                const t = e.currentTarget.getAttribute("data-filter"),
                    r = e.currentTarget.closest("[data-filter-on]").getAttribute("data-filter-on"),
                    o = document.querySelector(".js-member-filter-field"),
                    s = o.value,
                    i = new RegExp(`${r}:(?:[a-z]|_|((').*(')))+`),
                    a = s.toString().trim().replace(i, "");
                o.value = `${a} ${t}`.replace(/\s\s/, " ").trim(), o.focus(), v(o, "input")
            }), f("auto-check-success", ".js-new-organization-name", function(e) {
                const t = e.target,
                    r = t.closest("dd").querySelector(".js-field-hint-name");
                !r || (r.textContent = t.value)
            }), C(".js-notice-dismiss", async function(e, t) {
                await t.text(), e.closest(".js-notice").remove()
            }), f("submit", ".js-notice-dismiss-remote", async function(e) {
                const t = e.currentTarget;
                e.preventDefault();
                let n;
                try {
                    n = await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch {
                    Ue();
                    return
                }
                n && !n.ok ? Ue() : t.closest(".js-notice").remove()
            });
            var mg = Object.defineProperty,
                pg = (e, t) => mg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Gu(e) {
                try {
                    const t = e.getBoundingClientRect();
                    if (t.height === 0 && t.width === 0 || e.style.opacity === "0" || e.style.visibility === "hidden") return !1
                } catch {}
                return !0
            }
            pg(Gu, "isVisible"), f("click", ".js-github-dev-shortcut", function(e) {
                e.preventDefault();
                for (const n of document.querySelectorAll("textarea.js-comment-field"))
                    if (n.value && Gu(n) && !confirm("Are you sure you want to open github.dev?")) return;
                const t = e.currentTarget;
                t.pathname = window.location.pathname, t.hash = window.location.hash, window.location.href = t.href
            }), f("click", ".js-github-dev-new-tab-shortcut", function(e) {
                const t = e.currentTarget;
                t.pathname = window.location.pathname, t.hash = window.location.hash
            }), f("click", ".js-permalink-shortcut", function(e) {
                const t = e.currentTarget;
                try {
                    Oe(null, "", t.href + window.location.hash)
                } catch {
                    window.location.href = t.href + window.location.hash
                }
                for (const n of document.querySelectorAll(".js-permalink-replaceable-link")) n instanceof HTMLAnchorElement && (n.href = n.getAttribute("data-permalink-href"));
                e.preventDefault()
            }), C(".js-permission-menu-form", async function(e, t) {
                const n = e.querySelector(".js-permission-success"),
                    r = e.querySelector(".js-permission-error");
                n.hidden = !0, r.hidden = !0, e.classList.add("is-loading");
                let o;
                try {
                    o = await t.json()
                } catch {
                    e.classList.remove("is-loading"), r.hidden = !1;
                    return
                }
                e.classList.remove("is-loading"), n.hidden = !1;
                const s = e.closest(".js-org-repo");
                if (s) {
                    const i = o.json;
                    s.classList.toggle("with-higher-access", i.members_with_higher_access)
                }
            });
            var hg = Object.defineProperty,
                Zn = (e, t) => hg(e, "name", {
                    value: t,
                    configurable: !0
                });
            (async function() {
                await It;
                const e = document.querySelector(".js-pjax-loader-bar");
                if (!e) return;
                const t = e.firstElementChild;
                if (!(t instanceof HTMLElement)) return;
                let n = 0,
                    r = null,
                    o = null;

                function s() {
                    i(0), e && e.classList.add("is-loading"), r = window.setTimeout(a, 0)
                }
                Zn(s, "initiateLoader");

                function i(l) {
                    t instanceof HTMLElement && (l === 0 && (o == null && (o = getComputedStyle(t).transition), t.style.transition = "none"), n = l, t.style.width = `${n}%`, l === 0 && (t.clientWidth, t.style.transition = o || ""))
                }
                Zn(i, "setWidth");

                function a() {
                    n === 0 && (n = 12), i(Math.min(n + 3, 95)), r = window.setTimeout(a, 500)
                }
                Zn(a, "increment");

                function c() {
                    r && clearTimeout(r), i(100), e && e.classList.remove("is-loading")
                }
                Zn(c, "finishLoader"), document.addEventListener("pjax:start", s), document.addEventListener("pjax:end", c)
            })();
            var gg = Object.defineProperty,
                Ms = (e, t) => gg(e, "name", {
                    value: t,
                    configurable: !0
                });
            let $s = null;
            const Is = "last_pjax_request",
                er = "pjax_start",
                Rs = "pjax_end";

            function Ju(e) {
                e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(er), $s = e.detail.url)
            }
            Ms(Ju, "markPjaxStart");
            async function Qu() {
                if (await Te(), !window.performance.getEntriesByName(er).length) return;
                window.performance.mark(Rs), window.performance.measure(Is, er, Rs);
                const t = window.performance.getEntriesByName(Is).pop(),
                    n = t ? t.duration : null;
                !n || ($s && le({
                    requestUrl: $s,
                    pjaxDuration: Math.round(n)
                }), Yu())
            }
            Ms(Qu, "trackPjaxTiming");

            function Yu() {
                window.performance.clearMarks(er), window.performance.clearMarks(Rs), window.performance.clearMeasures(Is)
            }
            Ms(Yu, "clearPjaxMarks"), "getEntriesByName" in window.performance && (document.addEventListener("pjax:start", Ju), document.addEventListener("pjax:end", Qu));
            var bg = Object.defineProperty,
                Fs = (e, t) => bg(e, "name", {
                    value: t,
                    configurable: !0
                });
            let Hs = null;
            const Os = "last_turbo_request",
                tr = "turbo_start",
                Ds = "turbo_end";

            function Zu(e) {
                var t;
                e instanceof CustomEvent && (!((t = e.detail) == null ? void 0 : t.url) || (window.performance.mark(tr), Hs = e.detail.url))
            }
            Fs(Zu, "markTurboStart");
            async function ed() {
                if (await Te(), !window.performance.getEntriesByName(tr).length) return;
                window.performance.mark(Ds), window.performance.measure(Os, tr, Ds);
                const t = window.performance.getEntriesByName(Os).pop(),
                    n = t ? t.duration : null;
                !n || (Hs && le({
                    requestUrl: Hs,
                    turboDuration: Math.round(n)
                }), td())
            }
            Fs(ed, "trackTurboTiming");

            function td() {
                window.performance.clearMarks(tr), window.performance.clearMarks(Ds), window.performance.clearMeasures(Os)
            }
            Fs(td, "clearTurboMarks"), "getEntriesByName" in window.performance && (document.addEventListener("turbo:before-fetch-request", Zu), document.addEventListener("turbo:render", ed)), document.addEventListener("pjax:click", function(e) {
                if (window.onbeforeunload) return e.preventDefault()
            });
            var yg = Object.defineProperty,
                vg = (e, t) => yg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function nd(e) {
                const t = e.createElement("textarea");
                return t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", e.body.appendChild(t), t.focus(), () => (t.blur(), t.remove(), t.value)
            }
            vg(nd, "captureKeypresses");
            let nr = null;
            f("pjax:click", ".js-pjax-capture-input", function() {
                nr = nd(document)
            }), f("pjax:end", "#js-repo-pjax-container", function() {
                if (nr) {
                    const e = nr(),
                        t = document.querySelector(".js-pjax-restore-captured-input");
                    t instanceof HTMLInputElement && e && De(t, e), nr = null
                }
            });
            var wg = Object.defineProperty,
                jg = (e, t) => wg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function rd(e, t) {
                const n = e.split("/", 3).join("/"),
                    r = t.split("/", 3).join("/");
                return n === r
            }
            jg(rd, "isSameRepo"), f("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
                const t = e.currentTarget.pathname;
                rd(t, location.pathname) || e.preventDefault()
            }), f("pjax:click", ".js-comment-body", function(e) {
                const t = e.target;
                t instanceof HTMLAnchorElement && t.pathname.split("/")[3] === "files" && e.preventDefault()
            }), f("pjax:click", ".js-pjax-history-navigate", function(e) {
                e.currentTarget instanceof HTMLAnchorElement && (e.currentTarget.href === Zi() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : e.currentTarget.href === ea() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault()))
            });
            var Lg = Object.defineProperty,
                od = (e, t) => Lg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Bs(e) {
                return e.getAttribute("data-pjax-preserve-scroll") != null ? !1 : 0
            }
            od(Bs, "preserveScrollTo");

            function Zt(e) {
                let t = e;
                for (; t;) {
                    const n = t.getAttribute("data-pjax");
                    if (n && n !== "true") return document.querySelector(n);
                    t = t.parentElement && t.parentElement.closest("[data-pjax]")
                }
                return e.closest("[data-pjax-container]")
            }
            od(Zt, "detectContainer");
            var Sg = Object.defineProperty,
                sd = (e, t) => Sg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function id(e) {
                if (e.id) return `#${e.id}`;
                throw new Error("pjax container has no id")
            }
            sd(id, "getContainerSelector");

            function ad(e, t) {
                const n = Zt(e),
                    r = id(n),
                    o = new URL(e.href, window.location.origin),
                    s = new URLSearchParams(o.search.slice(1));
                return o.search = s.toString(), fetch(o.href, {
                    headers: Object.assign({
                        Accept: "text/html",
                        "X-PJAX": "true",
                        "X-PJAX-Container": r,
                        "X-Requested-With": "XMLHttpRequest"
                    }, t && t.headers)
                })
            }
            sd(ad, "pjaxFetch"), p("[data-pjax-container] link[rel=pjax-prefetch]", {
                constructor: HTMLLinkElement,
                initialize(e) {
                    ad(e, {
                        headers: {
                            Purpose: "prefetch"
                        }
                    })
                }
            });
            var Eg = Object.defineProperty,
                cd = (e, t) => Eg(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("click", "[data-pjax] a, a[data-pjax]", function(e) {
                const t = e.currentTarget;
                if (t instanceof HTMLAnchorElement) {
                    if (t.getAttribute("data-skip-pjax") != null || t.getAttribute("data-remote") != null) return;
                    const n = Zt(t);
                    n && ld(e, {
                        container: n,
                        scrollTo: Bs(t)
                    })
                }
            }), f("change", "select[data-pjax]", function(e) {
                if (ge("PJAX_DISABLED") || ge("TURBO")) return;
                const t = e.currentTarget,
                    n = Zt(t);
                n && Pt({
                    url: t.value,
                    container: n
                })
            });

            function ld(e, t) {
                if (ge("PJAX_DISABLED") || ge("TURBO")) return;
                const n = e.currentTarget;
                if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== n.protocol || location.hostname !== n.hostname || n.href.indexOf("#") > -1 && Ns(n) === Ns(location) || e.defaultPrevented) return;
                const r = {
                        url: n.href,
                        target: n,
                        ...t
                    },
                    o = new CustomEvent("pjax:click", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            options: r,
                            relatedEvent: e
                        }
                    });
                n.dispatchEvent(o) && (Pt(r), e.preventDefault(), n.dispatchEvent(new CustomEvent("pjax:clicked", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        options: r
                    }
                })))
            }
            cd(ld, "click");

            function Ns(e) {
                return e.href.replace(/#.*/, "")
            }
            cd(Ns, "stripHash");
            var kg = Object.defineProperty,
                _g = (e, t) => kg(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("submit", "form[data-pjax]", function(e) {
                if (ge("PJAX_DISABLED") || ge("TURBO")) return;
                const t = e.currentTarget,
                    n = Zt(t);
                if (!n) return;
                const r = Bs(t),
                    o = {
                        type: (t.method || "GET").toUpperCase(),
                        url: t.action,
                        target: t,
                        scrollTo: r,
                        container: n
                    };
                if (o.type === "GET") {
                    if (t.querySelector("input[type=file]")) return;
                    const s = ud(o.url);
                    s.search += (s.search ? "&" : "") + ta(t), o.url = s.toString()
                } else o.data = new FormData(t);
                Pt(o), e.preventDefault()
            });

            function ud(e) {
                const t = document.createElement("a");
                return t.href = e, t
            }
            _g(ud, "parseURL"), p("body.js-print-popup", () => {
                window.print(), setTimeout(window.close, 1e3)
            }), p("poll-include-fragment[data-redirect-url]", function(e) {
                const t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", function() {
                    window.location.href = t
                })
            }), p("poll-include-fragment[data-reload]", function(e) {
                e.addEventListener("load", function() {
                    window.location.reload()
                })
            });
            const Tg = "$__",
                dd = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
                fd = document.querySelector("meta[name=expected-hostname]");
            if (dd instanceof HTMLMetaElement && fd instanceof HTMLMetaElement && na(document)) {
                const e = {
                        url: window.location.href,
                        expectedHostname: fd.content,
                        documentHostname: document.location.hostname,
                        proxyPayload: dd.content
                    },
                    t = new Error,
                    n = {};
                n[`${Tg}`] = btoa(JSON.stringify(e)), ec(t, n)
            }
            var Cg = Object.defineProperty,
                xg = (e, t) => Cg(e, "name", {
                    value: t,
                    configurable: !0
                });
            W("keydown", ".js-quick-submit", function(e) {
                md(e)
            });

            function md(e) {
                const t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    const n = t.form,
                        r = n.querySelector("input[type=submit], button[type=submit]");
                    if (e.shiftKey) {
                        const o = n.querySelector(".js-quick-submit-alternative");
                        (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && !o.disabled && U(n, o)
                    } else(r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && r.disabled || U(n);
                    e.preventDefault()
                }
            }
            xg(md, "quickSubmit");
            var Ag = Object.defineProperty,
                Us = (e, t) => Ag(e, "name", {
                    value: t,
                    configurable: !0
                });
            let rr;
            p(".js-comment-quote-reply", function(e) {
                var t;
                e.hidden = ((t = e.closest(".js-quote-selection-container")) == null ? void 0 : t.querySelector(".js-inline-comment-form-container textarea, .js-new-comment-form textarea")) == null
            });

            function Ws(e) {
                return e.nodeName === "DIV" && e.classList.contains("highlight")
            }
            Us(Ws, "isHighlightContainer");

            function pd(e) {
                return e.nodeName === "IMG" || e.firstChild != null
            }
            Us(pd, "hasContent");
            const hd = {
                PRE(e) {
                    const t = e.parentElement;
                    if (t && Ws(t)) {
                        const n = t.className.match(/highlight-source-(\S+)/),
                            r = n ? n[1] : "",
                            o = (e.textContent || "").replace(/\n+$/, "");
                        e.textContent = `\`\`\`${r}
${o}
\`\`\``, e.append(`

`)
                    }
                    return e
                },
                A(e) {
                    const t = e.textContent || "";
                    return e.classList.contains("user-mention") || e.classList.contains("team-mention") || e.classList.contains("issue-link") && /^#\d+$/.test(t) ? t : e
                },
                IMG(e) {
                    const t = e.getAttribute("alt");
                    return t && e.classList.contains("emoji") ? t : e
                },
                DIV(e) {
                    if (e.classList.contains("js-suggested-changes-blob")) e.remove();
                    else if (e.classList.contains("blob-wrapper-embedded")) {
                        const t = e.parentElement,
                            n = t.querySelector("a[href]"),
                            r = document.createElement("p");
                        r.textContent = n.href, t.replaceWith(r)
                    }
                    return e
                }
            };

            function gd(e) {
                const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(o) {
                            return o.nodeName in hd && pd(o) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    }),
                    n = [];
                let r = t.nextNode();
                for (; r;) r instanceof HTMLElement && n.push(r), r = t.nextNode();
                n.reverse();
                for (const o of n) o.replaceWith(hd[o.nodeName](o))
            }
            Us(gd, "insertMarkdownSyntax"), f("click", ".js-comment-quote-reply", function({
                isTrusted: e,
                currentTarget: t
            }) {
                const n = t.closest(".js-comment"),
                    r = n.querySelector(".js-comment-body"),
                    o = n.querySelector(".js-comment-body").cloneNode(!0),
                    s = n.closest(".js-quote-selection-container"),
                    i = r.querySelectorAll("button.js-convert-to-issue-button, span.js-clear");
                for (const l of i) l.remove();
                let a = new qa;
                if (!e && a.range.collapsed || (s.hasAttribute("data-quote-markdown") && (a = new Ma(s.getAttribute("data-quote-markdown") || "", l => {
                        const d = a.range.startContainer.parentElement,
                            m = d && d.closest("pre");
                        if (m instanceof HTMLElement) {
                            const h = m.parentElement;
                            if (h && Ws(h)) {
                                const g = document.createElement("div");
                                g.className = h.className, g.appendChild(l), l.appendChild(g)
                            }
                        }
                        gd(l)
                    })), rr && r.contains(rr.anchorNode) ? a.range = rr.range : a.range.collapsed && a.select(r), a.closest(".js-quote-selection-container") !== s)) return;
                const c = a.range;
                s.dispatchEvent(new CustomEvent("quote-selection", {
                    bubbles: !0,
                    detail: a
                })), a.range = c;
                for (const l of s.querySelectorAll("textarea"))
                    if (At(l)) {
                        a.insert(l);
                        break
                    }
                n.querySelector(".js-comment-body").replaceWith(o)
            });
            let zs;
            document.addEventListener("selectionchange", We(function() {
                const e = window.getSelection();
                let t;
                try {
                    t = e.getRangeAt(0)
                } catch {
                    zs = null;
                    return
                }
                zs = {
                    anchorNode: e.anchorNode,
                    range: t
                }
            }, 100)), document.addEventListener("toggle", () => {
                rr = zs
            }, {
                capture: !0
            });
            var Pg = Object.defineProperty,
                bd = (e, t) => Pg(e, "name", {
                    value: t,
                    configurable: !0
                });
            C(".js-pick-reaction", async function(e, t) {
                const n = await t.json(),
                    r = e.closest(".js-comment"),
                    o = r.querySelector(".js-reactions-container"),
                    s = r.querySelector(".js-comment-header-reaction-button"),
                    i = ae(document, n.json.reactions_container.trim()),
                    a = ae(document, n.json.comment_header_reaction_button.trim());
                o.replaceWith(i), s.replaceWith(a)
            });

            function Vs(e) {
                const t = e.target,
                    n = t.getAttribute("data-reaction-label"),
                    o = t.closest(".js-add-reaction-popover").querySelector(".js-reaction-description");
                o.hasAttribute("data-default-text") || o.setAttribute("data-default-text", o.textContent || ""), o.textContent = n
            }
            bd(Vs, "showReactionContent");

            function Ks(e) {
                const n = e.target.closest(".js-add-reaction-popover").querySelector(".js-reaction-description"),
                    r = n.getAttribute("data-default-text");
                r && (n.textContent = r)
            }
            bd(Ks, "hideReactionContent"), f("toggle", ".js-reaction-popover-container", function(e) {
                const t = e.currentTarget.hasAttribute("open");
                for (const n of e.target.querySelectorAll(".js-reaction-option-item")) t ? (n.addEventListener("mouseenter", Vs), n.addEventListener("mouseleave", Ks)) : (n.removeEventListener("mouseenter", Vs), n.removeEventListener("mouseleave", Ks))
            }, {
                capture: !0
            });
            var qg = Object.defineProperty,
                Mg = (e, t) => qg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function yd(e, t, n) {
                e.getAttribute("data-type") === "json" && n.headers.set("Accept", "application/json"), v(e, "deprecatedAjaxSend", {
                    request: n
                }), t.text().catch(o => {
                    if (o.response) return o.response;
                    throw o
                }).then(o => {
                    o.status < 300 ? v(e, "deprecatedAjaxSuccess") : v(e, "deprecatedAjaxError", {
                        error: o.statusText,
                        status: o.status,
                        text: o.text
                    })
                }, o => {
                    v(e, "deprecatedAjaxError", {
                        error: o.message,
                        status: 0,
                        text: null
                    })
                }).then(() => {
                    v(e, "deprecatedAjaxComplete")
                })
            }
            Mg(yd, "submitWithLegacyEvents"), f("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
                const t = e.currentTarget;
                t.form && !e.defaultPrevented && ra(t)
            }), C("form[data-remote]", yd), f("deprecatedAjaxComplete", "form", function({
                currentTarget: e
            }) {
                const t = Ur(e);
                t && t.remove()
            }), Jr(e => {
                const t = Ur(e);
                t && t.remove()
            }), $a(wn);
            var vd = Object.defineProperty,
                $g = Object.getOwnPropertyDescriptor,
                Ig = (e, t) => vd(e, "name", {
                    value: t,
                    configurable: !0
                }),
                en = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? $g(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && vd(t, n, o), o
                };
            let Ze = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.loaderWasFocused = !1
                }
                connectedCallback() {
                    this.setPaginationUrl(this.list)
                }
                get hasNextPage() {
                    return !this.form.hidden
                }
                loadNextPage() {
                    !this.hasNextPage || U(this.form)
                }
                get disabled() {
                    return this.submitButton.hasAttribute("aria-disabled")
                }
                set disabled(e) {
                    e ? this.submitButton.setAttribute("aria-disabled", "true") : this.submitButton.removeAttribute("aria-disabled"), this.submitButton.classList.toggle("disabled", e)
                }
                loadstart(e) {
                    e.target.addEventListener("focus", () => {
                        this.loaderWasFocused = !0
                    }, {
                        once: !0
                    }), e.target.addEventListener("include-fragment-replaced", () => {
                        var t;
                        this.setPaginationUrl(this.list), this.loaderWasFocused && ((t = this.focusMarkers.pop()) == null || t.focus()), this.loaderWasFocused = !1
                    }, {
                        once: !0
                    })
                }
                async submit(e) {
                    var t;
                    if (e.preventDefault(), this.disabled) return;
                    this.disabled = !0;
                    let n;
                    try {
                        const o = await fetch(this.form.action);
                        if (!o.ok) return;
                        n = await o.text()
                    } catch {
                        return
                    }
                    const r = ae(document, n);
                    this.setPaginationUrl(r), this.list.append(r), (t = this.focusMarkers.pop()) == null || t.focus(), this.disabled = !1, this.dispatchEvent(new CustomEvent("remote-pagination-load"))
                }
                setPaginationUrl(e) {
                    const t = e.querySelector("[data-pagination-src]");
                    if (!t) return;
                    const n = t.getAttribute("data-pagination-src");
                    n ? (this.form.action = n, this.form.hidden = !1) : this.form.hidden = !0
                }
            };
            Ig(Ze, "RemotePaginationElement"), en([P], Ze.prototype, "form", 2), en([P], Ze.prototype, "list", 2), en([Ce], Ze.prototype, "focusMarkers", 2), en([P], Ze.prototype, "submitButton", 2), Ze = en([te], Ze), p(".has-removed-contents", function() {
                let e;
                return {
                    add(t) {
                        e = Array.from(t.childNodes);
                        for (const r of e) t.removeChild(r);
                        const n = t.closest("form");
                        n && v(n, "change")
                    },
                    remove(t) {
                        for (const r of e) t.appendChild(r);
                        const n = t.closest("form");
                        n && v(n, "change")
                    }
                }
            });
            var Rg = Object.defineProperty,
                ht = (e, t) => Rg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function wd() {
                return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            }
            ht(wd, "getUserSystemColorMode");
            const Xs = ".js-render-plaintext";

            function jd(e) {
                const t = e.closest(".js-render-needs-enrichment");
                if (!t) return;
                t.querySelector(Xs) && or(t, !1)
            }
            ht(jd, "markdownEnrichmentSuccess");

            function Ld(e) {
                var t;
                const n = (t = e.parentElement) == null ? void 0 : t.closest(".js-render-needs-enrichment");
                if (!n) return;
                or(n, !1);
                const r = n.querySelector(Xs);
                if (!r) return;
                const o = r.querySelector("pre"),
                    s = kn `
    <div class="flash flash-error mb-4">Error rendering markdown</div>
    ${o}
  `;
                n.classList.add("render-error"), r.classList.remove("render-plaintext-hidden"), En(s, r)
            }
            ht(Ld, "markdownEnrichmentFailed");

            function or(e, t) {
                const n = e.getElementsByClassName("js-render-enrichment-loader")[0],
                    r = e.getElementsByClassName("render-expand")[0];
                n && (n.hidden = !t), r && (r.hidden = t)
            }
            ht(or, "setCodeBlockLoaderVisibility");

            function Sd(e, t) {
                const n = e.querySelector(Xs);
                t ? n.classList.remove("render-plaintext-hidden") : n.classList.add("render-plaintext-hidden")
            }
            ht(Sd, "setRawCodeBlockVisibility");
            class Ed {
                constructor(t) {
                    this.el = t, this.enrichmentTarget = t.getElementsByClassName("js-render-enrichment-target")[0], this.iframeUrl = this.getIframeUrl(), this.identifier = this.el.getAttribute("data-identity"), this.iframeContentType = this.el.getAttribute("data-type"), this.iframeOrigin = new URL(this.iframeUrl, window.location.origin).origin, this.iframeContent = this.el.getAttribute("data-content"), or(this.el, !0)
                }
                enrich() {
                    const t = this.createDialog();
                    En(t, this.enrichmentTarget), this.setupModal()
                }
                getIframeUrl() {
                    const t = this.el.getAttribute("data-src"),
                        n = { ...this.colorMode()
                        },
                        r = Object.entries(n).map(([o, s]) => `${o}=${s}`).join("&");
                    return `${t}?${r}`
                }
                colorMode() {
                    var t;
                    let n = (t = document.querySelector("html")) == null ? void 0 : t.getAttribute("data-color-mode");
                    return (n === "auto" || !n) && (n = wd()), {
                        color_mode: n
                    }
                }
                setupModal() {
                    const t = this.generateIframeCode("-fullscreen"),
                        n = this.el.querySelector(".Box-body");
                    this.el.querySelector(".js-full-screen-render").addEventListener("click", () => {
                        En(t, n)
                    })
                }
                createDialog() {
                    const t = this.generateIframeCode();
                    return kn ` <div class="d-flex flex-column flex-auto js-render-box">
      <details class="details-reset details-overlay details-overlay-dark">
        <summary class="btn-sm btn position-absolute js-full-screen-render render-expand" aria-haspopup="dialog" hidden>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="octicon"
            style="display:inline-block;vertical-align:text-bottom"
          >
            <path
              fill-rule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"
            ></path>
          </svg>
        </summary>
        <details-dialog class="Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast">
          <div>
            <button
              aria-label="Close dialog"
              data-close-dialog=""
              type="button"
              data-view-component="true"
              class="Link--muted btn-link position-absolute render-full-screen-close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                style="display:inline-block;vertical-align:text-bottom"
                class="octicon octicon-x"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
            <div class="Box-body"></div>
          </div>
        </details-dialog>
      </details>
      ${t}
    </div>`
                }
                generateIframeCode(t = "") {
                    const n = this.identifier + t,
                        r = `${this.iframeUrl}#${n}`;
                    return kn `
      <div
        class="render-container js-render-target p-0"
        data-identity="${n}"
        data-host="${this.iframeOrigin}"
        data-type="${this.iframeContentType}"
      >
        <iframe
          class="render-viewer"
          src="${r}"
          name="${n}"
          data-content="${this.iframeContent}"
          sandbox="allow-scripts allow-same-origin allow-top-navigation"
        >
        </iframe>
      </div>
    `
                }
            }
            ht(Ed, "EnrichableMarkdownRenderer"), p(".js-render-needs-enrichment", function(e) {
                const t = e;
                new Ed(t).enrich()
            }), f("preview:toggle:off", ".js-previewable-comment-form", function(e) {
                const n = e.currentTarget.querySelector(".js-render-needs-enrichment"),
                    r = n == null ? void 0 : n.querySelector(".js-render-enrichment-target");
                !r || (r.innerHTML = "")
            }), f("preview:rendered", ".js-previewable-comment-form", function(e) {
                const n = e.currentTarget.querySelector(".js-render-needs-enrichment");
                n && Sd(n, !1)
            });
            var Fg = Object.defineProperty,
                tn = (e, t) => Fg(e, "name", {
                    value: t,
                    configurable: !0
                });
            const sr = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
                Hg = ["is-render-ready", "is-render-loading", "is-render-loaded", "is-render-failed", "is-render-failed-fatally"],
                gt = new WeakMap;

            function Gs(e) {
                const t = gt.get(e);
                t != null && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
            }
            tn(Gs, "resetTiming");

            function nn(e) {
                e.classList.remove(...sr), e.classList.add("is-render-failed"), Ld(e), Gs(e)
            }
            tn(nn, "renderFailed");

            function Js(e, t = !1) {
                var n;
                !At(e) || e.classList.contains("is-render-ready") || e.classList.contains("is-render-failed") || e.classList.contains("is-render-failed-fatally") || t && !((n = gt.get(e)) == null ? void 0 : n.hello) || nn(e)
            }
            tn(Js, "timeoutWatchdog"), p(".js-render-target", function(e) {
                var t;
                const n = e;
                n.classList.remove(...Hg), n.style.height = "auto", !((t = gt.get(e)) == null ? void 0 : t.load) && (Gs(e), !gt.get(e) && (gt.set(e, {
                    load: Date.now(),
                    hello: null,
                    helloTimer: window.setTimeout(Js, 1e4, e, !0),
                    loadTimer: window.setTimeout(Js, 45e3, e)
                }), e.classList.add("is-render-automatic", "is-render-requested")))
            });

            function ir(e, t) {
                e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
            }
            tn(ir, "postAsJson"), window.addEventListener("message", function(e) {
                let t = e.data;
                if (!t) return;
                if (typeof t == "string") try {
                    t = JSON.parse(t)
                } catch {
                    return
                }
                if (typeof t.type != "string" && t.type !== "render" || typeof t.identity != "string") return;
                const n = t.identity;
                if (typeof t.body != "string") return;
                const r = t.body;
                let o;
                for (const l of document.querySelectorAll(".js-render-target"))
                    if (l.getAttribute("data-identity") === n) {
                        o = l;
                        break
                    }
                if (!o || e.origin !== o.getAttribute("data-host")) return;
                const s = t.payload != null ? t.payload : void 0,
                    i = o.querySelector("iframe"),
                    a = i == null ? void 0 : i.contentWindow;

                function c() {
                    const l = i == null ? void 0 : i.getAttribute("data-content");
                    if (!l) return;
                    const d = {
                        type: "render:cmd",
                        body: {
                            cmd: "code_rendering_service:data:ready",
                            "code_rendering_service:data:ready": JSON.parse(l)
                        }
                    };
                    ir(a, d)
                }
                switch (tn(c, "postData"), r) {
                    case "hello":
                        {
                            const l = gt.get(o) || {
                                untimed: !0
                            };l.hello = Date.now();
                            const d = {
                                    type: "render:cmd",
                                    body: {
                                        cmd: "ack",
                                        ack: !0
                                    }
                                },
                                m = {
                                    type: "render:cmd",
                                    body: {
                                        cmd: "branding",
                                        branding: !1
                                    }
                                };
                            if (!a) return;ir(a, d),
                            ir(a, m)
                        }
                        break;
                    case "error":
                        nn(o);
                        break;
                    case "error:fatal":
                        {
                            nn(o),
                            o.classList.add("is-render-failed-fatal");
                            break
                        }
                    case "error:invalid":
                        nn(o), o.classList.add("is-render-failed-invalid");
                        break;
                    case "loading":
                        o.classList.remove(...sr), o.classList.add("is-render-loading");
                        break;
                    case "loaded":
                        o.classList.remove(...sr), o.classList.add("is-render-loaded");
                        break;
                    case "ready":
                        jd(o), o.classList.remove(...sr), o.classList.add("is-render-ready"), s && typeof s.height == "number" && (o.style.height = `${s.height}px`);
                        break;
                    case "resize":
                        s && typeof s.height == "number" && (o.style.height = `${s.height}px`);
                        break;
                    case "code_rendering_service:markdown:get_data":
                        if (!a) return;
                        c();
                        break
                }
            }), C("form[data-replace-remote-form]", async function(e, t) {
                e.classList.remove("is-error"), e.classList.add("is-loading");
                try {
                    let n = e;
                    const r = await t.html(),
                        o = e.closest("[data-replace-remote-form-target]");
                    if (o) {
                        const s = o.getAttribute("data-replace-remote-form-target");
                        n = s ? document.getElementById(s) : o
                    }
                    n.replaceWith(r.html)
                } catch {
                    e.classList.remove("is-loading"), e.classList.add("is-error")
                }
            }), PerformanceObserver && (PerformanceObserver.supportedEntryTypes || []).includes("longtask") && new PerformanceObserver(function(t) {
                const n = t.getEntries().map(({
                    name: r,
                    duration: o
                }) => ({
                    name: r,
                    duration: o,
                    url: window.location.href
                }));
                le({
                    longTasks: n
                })
            }).observe({
                entryTypes: ["longtask"]
            });
            var Og = Object.defineProperty,
                Dg = (e, t) => Og(e, "name", {
                    value: t,
                    configurable: !0
                });
            const kd = new WeakMap;

            function _d(e) {
                return e.closest("markdown-toolbar").field
            }
            Dg(_d, "getTextarea"), f("click", ".js-markdown-link-button", async function({
                currentTarget: e
            }) {
                const n = document.querySelector(".js-markdown-link-dialog").content.cloneNode(!0);
                if (!(n instanceof DocumentFragment)) return;
                const r = await he({
                    content: n,
                    labelledBy: "box-title"
                });
                e instanceof HTMLElement && kd.set(r, _d(e).selectionEnd)
            }), f("click", ".js-markdown-link-insert", ({
                currentTarget: e
            }) => {
                const t = e.closest("details-dialog"),
                    n = document.querySelector(`#${e.getAttribute("data-for-textarea")}`),
                    r = kd.get(t) || 0,
                    o = t.querySelector("#js-dialog-link-href").value,
                    i = `[${t.querySelector("#js-dialog-link-text").value}](${o}) `,
                    a = n.value.slice(0, r),
                    c = n.value.slice(r);
                n.value = a + i + c, n.focus(), n.selectionStart = n.selectionEnd = r + i.length
            }), f("details-menu-select", ".js-saved-reply-menu", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.detail.relatedTarget.querySelector(".js-saved-reply-body");
                if (!t) return;
                const n = (t.textContent || "").trim(),
                    o = e.target.closest(".js-previewable-comment-form").querySelector("textarea.js-comment-field");
                Or(o, n), setTimeout(() => o.focus(), 0)
            }, {
                capture: !0
            }), W("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
                Sn(e) === "Control+." && (e.target.closest(".js-previewable-comment-form").querySelector(".js-saved-reply-container").setAttribute("open", ""), e.preventDefault())
            }), W("keydown", ".js-saved-reply-filter-input", function(e) {
                if (/^Control\+[1-9]$/.test(Sn(e))) {
                    const n = e.target.closest(".js-saved-reply-container").querySelectorAll('[role="menuitem"]'),
                        r = Number(e.key),
                        o = n[r - 1];
                    o instanceof HTMLElement && (o.click(), e.preventDefault())
                }
            });
            var Bg = Object.defineProperty,
                Qs = (e, t) => Bg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Td(e, t) {
                return e.querySelector(`#LC${t}`)
            }
            Qs(Td, "queryLineElement");

            function Cd(e, t) {
                const n = Ir(e, r => Td(t, r));
                if (n) {
                    const r = document.createElement("span"),
                        o = ["text-bold", "hx_keyword-hl", "rounded-2", "d-inline-block"];
                    r.classList.add(...o), Rr(n, r)
                }
            }
            Qs(Cd, "highlightColumns");

            function xd(e) {
                const t = parseInt(e.getAttribute("data-start-line")),
                    n = parseInt(e.getAttribute("data-end-line")),
                    r = parseInt(e.getAttribute("data-start-column")),
                    o = parseInt(e.getAttribute("data-end-column"));
                return t !== n || t === n && r === o ? null : {
                    start: {
                        line: t,
                        column: r
                    },
                    end: {
                        line: n,
                        column: o !== 0 ? o : null
                    }
                }
            }
            Qs(xd, "parseColumnHighlightRange"), p(".js-highlight-code-snippet-columns", function(e) {
                const t = xd(e);
                t !== null && Cd(t, e)
            }), f("click", ".js-segmented-nav-button", function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.getAttribute("data-selected-tab"),
                    r = t.closest(".js-segmented-nav"),
                    o = r.parentElement;
                for (const s of r.querySelectorAll(".js-segmented-nav-button")) s.classList.remove("selected");
                t.classList.add("selected");
                for (const s of o.querySelectorAll(".js-selected-nav-tab")) s.parentElement === o && s.classList.remove("active");
                document.querySelector(`.${n}`).classList.add("active")
            });
            var Ng = Object.defineProperty,
                Ug = (e, t) => Ng(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Le(e) {
                const t = e || window.location,
                    n = document.head && document.head.querySelector("meta[name=session-resume-id]");
                return n instanceof HTMLMetaElement && n.content || t.pathname
            }
            Ug(Le, "getPageID");
            const Wg = We(function() {
                Ft(Le())
            }, 50);
            window.addEventListener("submit", Ia, {
                capture: !0
            }), window.addEventListener("pageshow", function() {
                Ft(Le())
            }), window.addEventListener("pjax:end", function() {
                Ft(Le())
            }), p(".js-session-resumable", function() {
                Wg()
            }), window.addEventListener("pagehide", function() {
                Ht(Le(), {
                    selector: ".js-session-resumable"
                })
            }), window.addEventListener("pjax:beforeReplace", function(e) {
                const t = e.detail.previousState,
                    n = t ? t.url : null;
                if (n) Ht(Le(new URL(n, window.location.origin)), {
                    selector: ".js-session-resumable"
                });
                else {
                    const r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                    setTimeout(function() {
                        throw r
                    })
                }
            }), document.addEventListener("pjax:end", function() {
                const e = document.querySelector('meta[name="selected-link"]'),
                    t = e && e.getAttribute("value");
                if (!!t)
                    for (const n of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        const r = (n.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        r ? n.setAttribute("aria-current", "page") : n.removeAttribute("aria-current"), n.classList.toggle("selected", r)
                    }
            });
            var zg = Object.defineProperty,
                rn = (e, t) => zg(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Ys = ["notification_referrer_id", "notifications_before", "notifications_after", "notifications_query"],
                ar = "notification_shelf";

            function Ad(e, t = null) {
                return e.has("notification_referrer_id") ? (qd(e, t), Md(e)) : null
            }
            rn(Ad, "storeAndStripShelfParams");

            function Pd(e = null) {
                const t = Zs(e);
                if (!t) return Wr(ar), null;
                try {
                    const n = oa(ar);
                    if (!n) return null;
                    const r = JSON.parse(n);
                    if (!r || !r.pathname) throw new Error("Must have a pathname");
                    if (r.pathname !== t) throw new Error("Stored pathname does not match current pathname.");
                    const o = {};
                    for (const s of Ys) o[s] = r[s];
                    return o
                } catch {
                    return Wr(ar), null
                }
            }
            rn(Pd, "getStoredShelfParamsForCurrentPage");

            function qd(e, t) {
                const n = Zs(t);
                if (!n) return;
                const r = {
                    pathname: n
                };
                for (const o of Ys) {
                    const s = e.get(o);
                    s && (r[o] = s)
                }
                sa(ar, JSON.stringify(r))
            }
            rn(qd, "storeShelfParams");

            function Md(e) {
                for (const t of Ys) e.delete(t);
                return e
            }
            rn(Md, "deleteShelfParams");

            function Zs(e) {
                e = e || window.location.pathname;
                const t = /^(\/[^/]+\/[^/]+\/pull\/[^/]+)/,
                    n = e.match(t);
                return n ? n[0] : null
            }
            rn(Zs, "getCurrentPullRequestPathname");
            var Vg = Object.defineProperty,
                cr = (e, t) => Vg(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function $d() {
                return C(".js-notification-shelf .js-notification-action form", async function(e, t) {
                    if (e.hasAttribute("data-redirect-to-inbox-on-submit")) {
                        await ei(t);
                        const r = document.querySelector(".js-notifications-back-to-inbox");
                        r && r.click();
                        return
                    }
                    ia(e, e), await ei(t)
                })
            }
            cr($d, "remoteShelfActionForm");

            function Id() {
                const e = new URLSearchParams(window.location.search),
                    t = Ad(e);
                if (t) {
                    const n = new URL(window.location.href, window.location.origin);
                    return n.search = t.toString(), n.toString()
                }
            }
            cr(Id, "urlWithoutNotificationParameters");

            function Rd(e) {
                if (!(e instanceof eo)) return;
                const t = Pd();
                if (!t) return;
                const n = e.getAttribute("data-base-src");
                if (!n) return;
                const r = new URL(n, window.location.origin),
                    o = new URLSearchParams(r.search);
                for (const [s, i] of Object.entries(t)) typeof i == "string" && o.set(s, i);
                r.search = o.toString(), e.setAttribute("src", r.toString())
            }
            cr(Rd, "loadShelfFromStoredParams");
            async function ei(e) {
                try {
                    await e.text()
                } catch {}
            }
            cr(ei, "performRequest");
            var Kg = Object.defineProperty,
                Fd = (e, t) => Kg(e, "name", {
                    value: t,
                    configurable: !0
                });
            $d();

            function Hd() {
                const e = Id();
                e && Oe(null, "", e)
            }
            Fd(Hd, "removeNotificationParams"), Hd(), p(".js-notification-shelf-include-fragment", Rd), f("submit", ".js-mark-notification-form", async function(e) {
                const t = e.currentTarget;
                e.preventDefault();
                try {
                    await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch {}
            });
            async function Od() {
                await Mt;
                const e = document.querySelector(".js-mark-notification-form");
                e instanceof HTMLFormElement && U(e)
            }
            Fd(Od, "markNotificationAsRead"), Od();
            var Xg = Object.defineProperty,
                ti = (e, t) => Xg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Dd(e) {
                return !!e.closest(".js-jump-to-field")
            }
            ti(Dd, "isJumpToAvailable");

            function lr(e, t) {
                if (Dd(e)) return;
                const n = document.querySelector(".js-site-search-form");
                document.querySelector(".js-site-search").classList.toggle("scoped-search", t);
                let r, o;
                t ? (r = n.getAttribute("data-scoped-search-url"), o = e.getAttribute("data-scoped-placeholder")) : (r = n.getAttribute("data-unscoped-search-url"), o = e.getAttribute("data-unscoped-placeholder")), n.setAttribute("action", r), e.setAttribute("placeholder", o)
            }
            ti(lr, "toggleSearchScope"), W("keyup", ".js-site-search-field", function(e) {
                const t = e.target,
                    n = t.value.length === 0;
                n && e.key === "Backspace" && t.classList.contains("is-clearable") && lr(t, !1), n && e.key === "Escape" && lr(t, !0), t.classList.toggle("is-clearable", n)
            }), xt(".js-site-search-focus", function(e) {
                const t = e.closest(".js-chromeless-input-container");
                t.classList.add("focus");

                function n() {
                    t.classList.remove("focus"), e.value.length === 0 && e.classList.contains("js-site-search-field") && lr(e, !0), e.removeEventListener("blur", n)
                }
                ti(n, "blurHandler"), e.addEventListener("blur", n)
            }), f("submit", ".js-site-search-form", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.querySelector(".js-site-search-type-field");
                t.value = new URLSearchParams(window.location.search).get("type") || ""
            }), p("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: Ra
            }), f("click", ".js-smoothscroll-anchor", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) return;
                const n = aa(document, t.hash);
                !n || (n.scrollIntoView({
                    behavior: "smooth"
                }), e.preventDefault())
            });
            var Gg = Object.defineProperty,
                Jg = (e, t) => Gg(e, "name", {
                    value: t,
                    configurable: !0
                });
            const Qg = 1e3,
                Bd = new WeakMap,
                Nd = document.querySelector("#snippet-clipboard-copy-button");
            async function Ud(e, t) {
                const n = e.getAttribute("data-snippet-clipboard-copy-content");
                if (n === null || (e.removeAttribute("data-snippet-clipboard-copy-content"), !(Nd instanceof HTMLTemplateElement))) return;
                const o = Nd.content.cloneNode(!0).children[0];
                if (!(o instanceof HTMLElement)) return;
                const s = o.children[0];
                if (!(s instanceof HTMLElement)) return;
                s.setAttribute("value", n), document.addEventListener("selectionchange", () => {
                    const a = document.getSelection();
                    if (a && e.contains(a.anchorNode)) {
                        const c = a == null ? void 0 : a.toString();
                        s.style.display = c.trim() === "" ? "inherit" : "none"
                    }
                }, {
                    signal: t
                });
                const i = e.querySelector("pre");
                if (i !== null) {
                    let a;
                    i.addEventListener("scroll", () => {
                        a && clearTimeout(a), s.style.display = "none", a = setTimeout(() => {
                            s.style.display = "inherit"
                        }, Qg)
                    }, {
                        signal: t
                    })
                }
                e.appendChild(o)
            }
            Jg(Ud, "insertSnippetClipboardCopyButton"), p("[data-snippet-clipboard-copy-content]", {
                constructor: HTMLElement,
                add(e) {
                    const t = new AbortController;
                    Bd.set(e, t), Ud(e, t.signal)
                }
            }), p(".snippet-clipboard-content clipboard-copy", {
                constructor: HTMLElement,
                remove(e) {
                    const t = Bd.get(e);
                    t && t.abort()
                }
            });
            var Yg = Object.defineProperty,
                Wd = (e, t) => Yg(e, "name", {
                    value: t,
                    configurable: !0
                });

            function ni(e, t, n) {
                ri(e, t), n && e.classList.toggle("on");
                const r = Array.from(e.querySelectorAll(".js-social-updatable"), jn);
                return Promise.all(r)
            }
            Wd(ni, "handleSocialResponse"), C(".js-social-form", async function(e, t) {
                var n, r;
                let o;
                const s = e.closest(".js-social-container"),
                    i = e.classList.contains("js-deferred-toggler-target");
                try {
                    o = await t.json(), s && await ni(s, o.json.count, i)
                } catch (a) {
                    if (((n = a.response) == null ? void 0 : n.status) === 409 && a.response.json.confirmationDialog) {
                        const c = a.response.json.confirmationDialog,
                            l = document.querySelector(c.templateSelector),
                            d = (r = e.querySelector(".js-confirm-csrf-token")) == null ? void 0 : r.value;
                        if (l instanceof HTMLTemplateElement && d) {
                            const m = new fe(l, {
                                    confirmUrl: e.action,
                                    confirmCsrfToken: d,
                                    ...c.inputs || {}
                                }),
                                h = await he({
                                    content: m
                                });
                            h.addEventListener("social-confirmation-form:success", async g => {
                                g instanceof CustomEvent && s && await ni(s, g.detail.count, i)
                            }), h.addEventListener("social-confirmation-form:error", () => {
                                Ue()
                            })
                        }
                    } else s && !i && s.classList.toggle("on"), Ue()
                }
            }), C(".js-social-confirmation-form", async function(e, t) {
                try {
                    const n = await t.json();
                    v(e, "social-confirmation-form:success", n.json)
                } catch {
                    v(e, "social-confirmation-form:error")
                }
            });

            function ri(e, t) {
                for (const n of e.querySelectorAll(".js-social-count")) {
                    n.textContent = t;
                    const r = n.getAttribute("data-singular-suffix"),
                        o = n.getAttribute("data-plural-suffix"),
                        s = t === "1" ? r : o;
                    s && n.setAttribute("aria-label", `${t} ${s}`)
                }
            }
            Wd(ri, "updateSocialCounts");
            var Zg = Object.defineProperty,
                ur = (e, t) => Zg(e, "name", {
                    value: t,
                    configurable: !0
                });
            class zd extends Fa {
                constructor(t, n, r, o) {
                    super(t, () => this.getUrlFromRefreshUrl(), r, o);
                    this.refreshUrl = n
                }
                getUrlFromRefreshUrl() {
                    return Vd(this.refreshUrl)
                }
            }
            ur(zd, "AliveSession");
            async function Vd(e) {
                const t = await Kd(e);
                return t && t.url && t.token ? Xd(t.url, t.token) : null
            }
            ur(Vd, "fetchRefreshUrl");
            async function Kd(e) {
                const t = await fetch(e, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (t.ok) return t.json();
                if (t.status === 404) return null;
                throw new Error("fetch error")
            }
            ur(Kd, "fetchJSON");
            async function Xd(e, t) {
                const n = await fetch(e, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": t
                    }
                });
                if (n.ok) return n.text();
                throw new Error("fetch error")
            }
            ur(Xd, "post");
            var eb = Object.defineProperty,
                tb = (e, t) => eb(e, "name", {
                    value: t,
                    configurable: !0
                });
            const dr = [],
                nb = 3e4,
                rb = 0;
            let fr = document.hidden,
                mr;

            function Gd(e) {
                return e(fr), dr.push(e), new ca(() => {
                    const t = dr.indexOf(e);
                    t !== -1 && dr.splice(t, 1)
                })
            }
            tb(Gd, "addIdleStateListener"), document.addEventListener("visibilitychange", () => {
                const e = document.hidden;
                mr !== void 0 && clearTimeout(mr), mr = setTimeout(() => {
                    if (e !== fr) {
                        fr = e, mr = void 0;
                        for (const n of dr) n(fr)
                    }
                }, e ? nb : rb)
            });
            var ob = Object.defineProperty,
                Q = (e, t) => ob(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Jd() {
                return "SharedWorker" in window && la("localStorage").getItem("bypassSharedWorker") !== "true"
            }
            Q(Jd, "isSharedWorkerSupported");

            function Qd() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket-src]")) == null ? void 0 : e.href) != null ? t : null
            }
            Q(Qd, "workerSrc");

            function Yd() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.href) != null ? t : null
            }
            Q(Yd, "socketUrl");

            function Zd() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.getAttribute("data-refresh-url")) != null ? t : null
            }
            Q(Zd, "socketRefreshUrl");

            function ef() {
                var e, t;
                return (t = (e = document.head.querySelector("link[rel=shared-web-socket]")) == null ? void 0 : e.getAttribute("data-session-id")) != null ? t : null
            }
            Q(ef, "sessionIdentifier");

            function tf(e) {
                return oi(e).map(t => ({
                    subscriber: e,
                    topic: t
                }))
            }
            Q(tf, "subscriptions");

            function oi(e) {
                return (e.getAttribute("data-channel") || "").trim().split(/\s+/).map(Ha.parse).filter(nf)
            }
            Q(oi, "channels");

            function nf(e) {
                return e != null
            }
            Q(nf, "isPresent");

            function si(e, {
                channel: t,
                type: n,
                data: r
            }) {
                for (const o of e) o.dispatchEvent(new CustomEvent(`socket:${n}`, {
                    bubbles: !1,
                    cancelable: !1,
                    detail: {
                        name: t,
                        data: r
                    }
                }))
            }
            Q(si, "notify");
            class rf {
                constructor(t, n, r, o, s) {
                    this.subscriptions = new Oa, this.presenceMetadata = new Da, this.notifyPresenceDebouncedByChannel = new Map, this.notify = s, this.worker = new SharedWorker(t, `github-socket-worker-v2-${o}`), this.worker.port.onmessage = ({
                        data: i
                    }) => this.receive(i), this.worker.port.postMessage({
                        connect: {
                            url: n,
                            refreshUrl: r
                        }
                    })
                }
                subscribe(t) {
                    const n = this.subscriptions.add(...t);
                    n.length && this.worker.port.postMessage({
                        subscribe: n
                    });
                    const r = new Set(n.map(s => s.name)),
                        o = t.reduce((s, i) => {
                            const a = i.topic.name;
                            return Yr(a) && !r.has(a) && s.add(a), s
                        }, new Set);
                    o.size && this.worker.port.postMessage({
                        requestPresence: Array.from(o)
                    })
                }
                unsubscribeAll(...t) {
                    const n = this.subscriptions.drain(...t);
                    n.length && this.worker.port.postMessage({
                        unsubscribe: n
                    });
                    const r = this.presenceMetadata.removeSubscribers(t);
                    this.sendPresenceMetadataUpdate(r)
                }
                updatePresenceMetadata(t) {
                    const n = new Set;
                    for (const r of t) this.presenceMetadata.setMetadata(r), n.add(r.channelName);
                    this.sendPresenceMetadataUpdate(n)
                }
                sendPresenceMetadataUpdate(t) {
                    if (!t.size) return;
                    const n = [];
                    for (const r of t) n.push({
                        channelName: r,
                        metadata: this.presenceMetadata.getChannelMetadata(r)
                    });
                    this.worker.port.postMessage({
                        updatePresenceMetadata: n
                    })
                }
                online() {
                    this.worker.port.postMessage({
                        online: !0
                    })
                }
                offline() {
                    this.worker.port.postMessage({
                        online: !1
                    })
                }
                hangup() {
                    this.worker.port.postMessage({
                        hangup: !0
                    })
                }
                receive(t) {
                    const {
                        channel: n
                    } = t;
                    if (t.type === "presence") {
                        let r = this.notifyPresenceDebouncedByChannel.get(n);
                        r || (r = We((o, s) => {
                            this.notify(o, s), this.notifyPresenceDebouncedByChannel.delete(n)
                        }, 100), this.notifyPresenceDebouncedByChannel.set(n, r)), r(this.subscriptions.subscribers(n), t);
                        return
                    }
                    this.notify(this.subscriptions.subscribers(n), t)
                }
            }
            Q(rf, "AliveSessionProxy");

            function of () {
                const e = Qd();
                if (!e) return;
                const t = Yd();
                if (!t) return;
                const n = Zd();
                if (!n) return;
                const r = ef();
                if (!r) return;
                const s = Q(() => {
                        if (Jd()) try {
                            return new rf(e, t, n, r, si)
                        } catch {}
                        return new zd(t, n, !1, si)
                    }, "createSession")(),
                    i = Ln(l => s.subscribe(l.flat())),
                    a = Ln(l => s.unsubscribeAll(...l)),
                    c = Ln(l => s.updatePresenceMetadata(l));
                p(".js-socket-channel[data-channel]", {
                    subscribe: l => {
                        const d = tf(l),
                            m = d.map(g => g.topic.name).filter(g => Yr(g));
                        let h = {
                            unsubscribe() {}
                        };
                        if (m.length) {
                            let g, j;
                            const L = Q(() => {
                                const x = [];
                                g && x.push(g), j !== void 0 && x.push({
                                    [Ba]: j ? 1 : 0
                                });
                                for (const S of m) c({
                                    subscriber: l,
                                    channelName: S,
                                    metadata: x
                                })
                            }, "queueMetadataOrIdleChange");
                            h = ee(E(l, "socket:set-presence-metadata", x => {
                                const {
                                    detail: S
                                } = x;
                                g = S, L()
                            }), Gd(x => {
                                !ge("PRESENCE_IDLE") || (j = x, L())
                            }))
                        }
                        return i(d), h
                    },
                    remove: l => a(l)
                }), window.addEventListener("online", () => s.online()), window.addEventListener("offline", () => s.offline()), window.addEventListener("unload", () => {
                    "hangup" in s && s.hangup()
                })
            }
            Q( of , "connect"), (async () => (await It, of ()))();
            var sb = Object.defineProperty,
                ii = (e, t) => sb(e, "name", {
                    value: t,
                    configurable: !0
                });
            const sf = new Map;

            function af(e, t) {
                const n = [];
                for (const r of e) {
                    const o = sf.get(r.name);
                    o && o.arrived > t && n.push(o)
                }
                return n
            }
            ii(af, "stale");

            function cf(e, t) {
                for (const n of e.querySelectorAll(".js-socket-channel[data-channel]"))
                    for (const r of af(oi(n), t)) n.dispatchEvent(new CustomEvent("socket:message", {
                        bubbles: !1,
                        cancelable: !1,
                        detail: {
                            name: r.name,
                            data: r.data,
                            cached: !0
                        }
                    }))
            }
            ii(cf, "dispatch");

            function lf(e) {
                const {
                    name: t,
                    data: n,
                    cached: r
                } = e.detail;
                if (r) return;
                const o = {
                    name: t,
                    data: { ...n
                    },
                    arrived: Date.now()
                };
                o.data.wait = 0, sf.set(t, o)
            }
            ii(lf, "store"), document.addEventListener("socket:message", lf, {
                capture: !0
            }), document.addEventListener("pjax:popstate", function(e) {
                const t = e.target,
                    n = e.detail.cachedAt;
                n && setTimeout(() => cf(t, n))
            }), p("form.js-auto-replay-enforced-sso-request", {
                constructor: HTMLFormElement,
                initialize(e) {
                    U(e)
                }
            });
            var ib = Object.defineProperty,
                ab = (e, t) => ib(e, "name", {
                    value: t,
                    configurable: !0
                });

            function ai(e) {
                const t = document.querySelector(".js-stale-session-flash"),
                    n = t.querySelector(".js-stale-session-flash-signed-in"),
                    r = t.querySelector(".js-stale-session-flash-signed-out");
                t.hidden = !1, n.hidden = e === "false", r.hidden = e === "true", window.addEventListener("popstate", function(o) {
                    o.state && o.state.container != null && location.reload()
                }), document.addEventListener("submit", function(o) {
                    o.preventDefault()
                })
            }
            ab(ai, "sessionChanged");
            let on;
            if (typeof BroadcastChannel == "function") try {
                on = new BroadcastChannel("stale-session"), on.onmessage = e => {
                    typeof e.data == "string" && ai(e.data)
                }
            } catch {}
            if (!on) {
                let e = !1;
                on = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    }
                }, window.addEventListener("storage", function(t) {
                    if (!e && t.storageArea === window.localStorage && t.key === "logged-in") try {
                        (t.newValue === "true" || t.newValue === "false") && ai(t.newValue)
                    } finally {
                        window.localStorage.removeItem(t.key)
                    }
                })
            }
            const uf = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (uf) {
                const e = uf.getAttribute("data-signedin") || "";
                on.postMessage(e)
            }
            var cb = Object.defineProperty,
                bt = (e, t) => cb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function ci(e, t, n) {
                const r = e.getBoundingClientRect().height,
                    o = t.getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                let i = s.top;
                i + o.height + 10 >= r && (i = Math.max(r - o.height - 10, 0));
                let a = s.right;
                n.closest(".js-build-status-to-the-left") != null && (a = Math.max(s.left - o.width - 10, 0)), t.style.top = `${i}px`, t.style.left = `${a}px`, t.style.right = "auto"
            }
            bt(ci, "updateStatusPosition"), f("toggle", ".js-build-status .js-dropdown-details", function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-status-dropdown-menu");
                if (!n) return;

                function r() {
                    t.hasAttribute("open") || s()
                }
                bt(r, "closeOnToggle");

                function o(i) {
                    n.contains(i.target) || s()
                }
                bt(o, "closeOnScroll");

                function s() {
                    t.removeAttribute("open"), n.classList.add("d-none"), t.appendChild(n), t.removeEventListener("toggle", r), window.removeEventListener("scroll", o)
                }
                bt(s, "closeStatusPopover"), t.addEventListener("toggle", r), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", o, {
                    capture: !0
                }), n.classList.remove("d-none"), n.querySelector(".js-details-container").classList.add("open"), n.classList.contains("js-append-menu-to-body") && (document.body.appendChild(n), ci(document.body, n, t))
            }, {
                capture: !0
            });
            async function li(e) {
                const t = e.querySelector(".js-dropdown-details"),
                    n = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(n instanceof HTMLElement)) return;
                const r = n.querySelector(".js-status-loader");
                if (!r) return;
                const o = n.querySelector(".js-status-loading"),
                    s = n.querySelector(".js-status-error"),
                    i = r.getAttribute("data-contents-url");
                o.classList.remove("d-none"), s.classList.add("d-none");
                let a;
                try {
                    await wn(), a = await K(document, i)
                } catch {
                    o.classList.add("d-none"), s.classList.remove("d-none")
                }
                a && (r.replaceWith(a), n.querySelector(".js-details-container").classList.add("open"), t && n.classList.contains("js-append-menu-to-body") && ci(document.body, n, t))
            }
            bt(li, "loadStatus"), f("click", ".js-status-retry", ({
                currentTarget: e
            }) => {
                li(e)
            });

            function ui(e) {
                const t = e.currentTarget;
                li(t)
            }
            bt(ui, "onMouseEnter"), p(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", ui, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", ui)
                }
            });
            var lb = Object.defineProperty,
                ub = (e, t) => lb(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("click", "button[data-sudo-required], summary[data-sudo-required]", di), p("form[data-sudo-required]", {
                constructor: HTMLFormElement,
                subscribe: e => E(e, "submit", di)
            });
            async function di(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                e.stopPropagation(), e.preventDefault(), await ua() && (t.removeAttribute("data-sudo-required"), t instanceof HTMLFormElement ? U(t) : t.click())
            }
            ub(di, "checkSudo");
            var db = Object.defineProperty,
                $e = (e, t) => db(e, "name", {
                    value: t,
                    configurable: !0
                });
            const df = {
                "actor:": "ul.js-user-suggestions",
                "user:": "ul.js-user-suggestions",
                "operation:": "ul.js-operation-suggestions",
                "org:": "ul.js-org-suggestions",
                "action:": "ul.js-action-suggestions",
                "repo:": "ul.js-repo-suggestions",
                "country:": "ul.js-country-suggestions"
            };
            p("text-expander[data-audit-url]", {
                subscribe: e => ee(E(e, "text-expander-change", mf), E(e, "text-expander-value", ff))
            });

            function ff(e) {
                const t = e.detail;
                if (!fi(t.key)) return;
                const n = t.item.getAttribute("data-value");
                t.value = `${t.key}${n}`
            }
            $e(ff, "onvalue");

            function mf(e) {
                const {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (!fi(t)) return;
                const s = e.target.getAttribute("data-audit-url");
                n(hf(s, t, r))
            }
            $e(mf, "onchange");

            function pf(e, t) {
                const n = t.toLowerCase();
                return n ? Be(e, $e(o => {
                    const s = o.textContent.toLowerCase().trim(),
                        i = $t(s, n);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }, "key"), Ne) : e
            }
            $e(pf, "search");
            const fb = ue(e => [...e.children], {
                hash: e => e.className
            });
            async function hf(e, t, n) {
                const o = (await mb(e)).querySelector(gf(t));
                if (!o) return {
                    matched: !1
                };
                const s = pf(fb(o), n).slice(0, 5),
                    i = o.cloneNode(!1);
                i.innerHTML = "";
                for (const a of s) i.append(a);
                return {
                    fragment: i,
                    matched: s.length > 0
                }
            }
            $e(hf, "auditMenu");

            function fi(e) {
                return Object.getOwnPropertyNames(df).includes(e)
            }
            $e(fi, "isActivationKey");

            function gf(e) {
                const t = df[e];
                if (!t) throw new Error(`Unknown audit log expander key: ${e}`);
                return t
            }
            $e(gf, "selector");
            async function bf(e) {
                const t = await K(document, e),
                    n = document.createElement("div");
                return n.append(t), n
            }
            $e(bf, "fetchMenu");
            const mb = ue(bf);
            var pb = Object.defineProperty,
                Se = (e, t) => pb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function yf(e) {
                if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                const t = e.firstElementChild;
                return t && t.tagName === "G-EMOJI" && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
            }
            Se(yf, "getValue");

            function vf(e, t) {
                const n = ` ${t.toLowerCase().replace(/_/g," ")}`;
                return Be(e, Se(o => {
                    const s = o.getAttribute("data-emoji-name"),
                        i = jf(wf(o), n);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }, "key"), Ne)
            }
            Se(vf, "search");

            function wf(e) {
                return ` ${e.getAttribute("data-text").trim().toLowerCase().replace(/_/g," ")}`
            }
            Se(wf, "emojiText");

            function jf(e, t) {
                const n = e.indexOf(t);
                return n > -1 ? 1e3 - n : 0
            }
            Se(jf, "emojiScore"), p("text-expander[data-emoji-url]", {
                subscribe: e => ee(E(e, "text-expander-change", Sf), E(e, "text-expander-value", Lf))
            });

            function Lf(e) {
                const t = e.detail;
                t.key === ":" && (t.value = yf(t.item))
            }
            Se(Lf, "onvalue");

            function Sf(e) {
                const {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (t !== ":") return;
                const s = e.target.getAttribute("data-emoji-url");
                n(Ef(s, r))
            }
            Se(Sf, "onchange");
            async function Ef(e, t) {
                const [n, r] = await hb(e), o = vf(r, t).slice(0, 5);
                n.innerHTML = "";
                for (const s of o) n.append(s);
                return {
                    fragment: n,
                    matched: o.length > 0
                }
            }
            Se(Ef, "emojiMenu");
            async function kf(e) {
                const n = (await K(document, e)).firstElementChild;
                return [n, [...n.children]]
            }
            Se(kf, "fetchEmoji");
            const hb = ue(kf);
            var gb = Object.defineProperty,
                G = (e, t) => gb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function _f(e) {
                return `${e.number} ${e.title.trim().toLowerCase()}`
            }
            G(_f, "asText");

            function Tf(e, t) {
                if (!t) return e;
                const n = new RegExp(`\\b${Cf(t)}`),
                    r = /^\d+$/.test(t) ? s => xf(s, n) : s => $t(s, t);
                return Be(e, G(s => {
                    const i = _f(s),
                        a = r(i);
                    return a > 0 ? {
                        score: a,
                        text: i
                    } : null
                }, "key"), Ne)
            }
            G(Tf, "search");

            function Cf(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            G(Cf, "escapeRegExp");

            function xf(e, t) {
                const n = e.search(t);
                return n > -1 ? 1e3 - n : 0
            }
            G(xf, "issueNumberScore");

            function Af(e, t, n) {
                const r = G(s => Ot `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${s.map(o)}
    </ul>
  `, "itemsTemplate"),
                    o = G(s => {
                        const i = s.type in n ? ae(document, n[s.type]) : "";
                        return Ot `
      <li class="markdown-title" role="option" id="suggester-issue-${s.id}" data-value="${s.number}">
        <span class="d-inline-block mr-1">${i}</span>
        <small>#${s.number}</small> ${Na(s.title)}
      </li>
    `
                    }, "itemTemplate");
                Zr(r(e), t)
            }
            G(Af, "renderResults"), p("text-expander[data-issue-url]", {
                subscribe: e => {
                    const t = [E(e, "text-expander-change", qf), E(e, "text-expander-value", Pf), E(e, "keydown", $f), E(e, "click", Mf)];
                    return ee(...t)
                }
            });

            function Pf(e) {
                const t = e.detail;
                if (t.key !== "#") return;
                const n = t.item.getAttribute("data-value");
                t.value = `#${n}`
            }
            G(Pf, "onvalue");

            function qf(e) {
                const {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (t !== "#") return;
                if (r === "#") {
                    pr(e.target);
                    return
                }
                const s = e.target.getAttribute("data-issue-url");
                n(If(s, r))
            }
            G(qf, "onchange");

            function pr(e) {
                if (!e) return;
                const t = e.closest("text-expander");
                t && t.dismiss()
            }
            G(pr, "hideSuggestions");

            function Mf(e) {
                pr(e.target)
            }
            G(Mf, "onclick");

            function $f(e) {
                const t = ["ArrowRight", "ArrowLeft"],
                    {
                        key: n
                    } = e;
                t.indexOf(n) < 0 || pr(e.target)
            }
            G($f, "onkeydown");
            async function If(e, t) {
                const n = await bb(e),
                    r = document.createElement("div"),
                    o = Tf(n.suggestions, t).slice(0, 5);
                return Af(o, r, n.icons), {
                    fragment: r.firstElementChild,
                    matched: o.length > 0
                }
            }
            G(If, "issueMenu");
            const bb = ue(async function(e) {
                const t = await self.fetch(e, {
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
            });
            var yb = Object.defineProperty,
                Y = (e, t) => yb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Rf(e) {
                return e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase()
            }
            Y(Rf, "asText");

            function Ff(e, t) {
                if (!t) return e;
                const n = Of(t);
                return Be(e, Y(o => {
                    const s = Rf(o),
                        i = n(s, o.participant);
                    return i > 0 ? {
                        score: i,
                        text: s
                    } : null
                }, "key"), Ne)
            }
            Y(Ff, "search");

            function Hf(e, t) {
                const n = Y(o => Ot `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${o.map(r)}
    </ul>
  `, "itemsTemplate"),
                    r = Y(o => {
                        const s = o.type === "user" ? o.login : o.name,
                            i = o.type === "user" ? o.name : o.description;
                        return Ot `
      <li role="option" id="suggester-${o.id}-${o.type}-${s}" data-value="${s}">
        <span>${s}</span>
        <small>${i}</small>
      </li>
    `
                    }, "itemTemplate");
                Zr(n(e), t)
            }
            Y(Hf, "renderResults");

            function Of(e) {
                if (!e) return () => 2;
                const t = e.toLowerCase().split("");
                return (n, r) => {
                    if (!n) return 0;
                    const o = Df(n, t);
                    if (!o) return 0;
                    const i = e.length / o[1] / (o[0] / 2 + 1);
                    return r ? i + 1 : i
                }
            }
            Y(Of, "fuzzyScorer");

            function Df(e, t) {
                let n, r, o, s;
                const i = Bf(e, t[0]);
                if (i.length === 0) return null;
                if (t.length === 1) return [i[0], 1, []];
                for (s = null, r = 0, o = i.length; r < o; r++) {
                    const a = i[r];
                    if (!(n = Nf(e, t, a + 1))) continue;
                    const c = n[n.length - 1] - a;
                    (!s || c < s[1]) && (s = [a, c, n])
                }
                return s
            }
            Y(Df, "shortestMatch");

            function Bf(e, t) {
                let n = 0;
                const r = [];
                for (;
                    (n = e.indexOf(t, n)) > -1;) r.push(n++);
                return r
            }
            Y(Bf, "allIndexesOf");

            function Nf(e, t, n) {
                let r = n;
                const o = [];
                for (let s = 1; s < t.length; s += 1) {
                    if (r = e.indexOf(t[s], r), r === -1) return;
                    o.push(r++)
                }
                return o
            }
            Y(Nf, "indexesOfChars"), p("text-expander[data-mention-url]", {
                subscribe: e => ee(E(e, "text-expander-change", Wf), E(e, "text-expander-value", Uf))
            });

            function Uf(e) {
                const t = e.detail;
                if (t.key !== "@") return;
                const n = t.item.getAttribute("data-value");
                t.value = `@${n}`
            }
            Y(Uf, "onvalue");

            function Wf(e) {
                const {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (t !== "@" || (r == null ? void 0 : r.split(" ").length) > 1) return;
                const s = e.target.getAttribute("data-mention-url");
                n(zf(s, r))
            }
            Y(Wf, "onchange");
            async function zf(e, t) {
                const n = await vb(e),
                    r = document.createElement("div"),
                    o = Ff(n, t).slice(0, 5);
                return Hf(o, r), {
                    fragment: r.firstElementChild,
                    matched: o.length > 0
                }
            }
            Y(zf, "mentionMenu");
            const vb = ue(async function(e) {
                const t = await self.fetch(e, {
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
            });
            var wb = Object.defineProperty,
                $ = (e, t) => wb(e, "name", {
                    value: t,
                    configurable: !0
                });
            const mi = "/";

            function Vf(e, t) {
                const n = t.toLowerCase().trim(),
                    r = $(o => {
                        const s = (o.getAttribute("data-text") || "").trim().toLowerCase(),
                            i = $t(s, n);
                        return i > 0 ? {
                            score: i,
                            text: s
                        } : null
                    }, "key");
                return n ? Be(e, r, Ne) : e
            }
            $(Vf, "search"), p("slash-command-expander[data-slash-command-url]", {
                subscribe: e => ee(E(e, "text-expander-change", em), E(e, "text-expander-value", Kf))
            }), f("click", ".js-slash-command-toolbar-button", async e => {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".js-previewable-comment-form");
                if (!t) return;
                const n = t.querySelector("textarea.js-comment-field");
                if (!n) return;
                const r = mi,
                    o = n.selectionEnd || 0,
                    s = n.value.substring(0, o),
                    i = n.value.substring(o),
                    a = n.value === "" || s.match(/\s$/) ? "" : " ",
                    c = o + r.length + 1;
                n.value = s + a + r + i, n.selectionStart = c, n.selectionEnd = c, n.focus(), v(n, "input")
            });
            async function Kf(e) {
                const t = e.detail,
                    {
                        key: n,
                        item: r
                    } = t;
                if (n !== mi) return;
                const o = r.getAttribute("data-url");
                if (!o) return;
                const s = e.currentTarget,
                    i = r.querySelector(".js-slash-command-suggestion-form");
                if (!i) return;
                const a = i.querySelector(".js-data-url-csrf");
                if (!a) return;
                const c = new FormData(i);
                s.isLoading();
                try {
                    const l = await K(document, o, {
                        method: "PATCH",
                        body: c,
                        headers: {
                            Accept: "text/html",
                            "Scoped-CSRF-Token": a.value
                        }
                    });
                    if (!l) return;
                    pi(s, l)
                } catch {
                    s.showError()
                }
            }
            $(Kf, "onValue");

            function pi(e, t) {
                var n;
                const r = t.firstElementChild;
                if (!r) return;
                t.children.length > 1 && Zf(t.lastElementChild, e), r.hasAttribute("data-reload-suggestions") && (nm = ue(gi));
                const o = r.getAttribute("data-component-type");
                o === "fill" ? /<\/?[a-z][\s\S]*>/i.test(r.innerHTML) ? e.setValue(r.innerHTML.trim()) : e.setValue(((n = r.textContent) == null ? void 0 : n.trim()) || "") : o === "menu" || o === "error" ? e.setMenu(r.querySelector(".js-slash-command-menu")) : o === "action" ? e.closeMenu() : o === "embedded_form" ? Yf(e, r) : o === "dialog_form" ? Jf(e, r) : o === "modal_form" && Qf(e, r), Ft(Le())
            }
            $(pi, "handleResponse");

            function Xf(e) {
                if (!(e.metaKey && e.key === "Enter")) return;
                e.preventDefault(), e.stopPropagation();
                const t = e.target,
                    n = t == null ? void 0 : t.form;
                if (!!n)
                    if (n.requestSubmit) n.requestSubmit();
                    else {
                        const r = n.querySelector("[type='submit']");
                        r == null || r.click()
                    }
            }
            $(Xf, "submitOnCommandEnter");

            function hi(e) {
                const t = new FormData(e);
                let n = "";
                for (const r of t) n = n + r[0], n = n + r[1].toString();
                return n
            }
            $(hi, "getFormContents");

            function hr(e) {
                let t = !1;
                for (const n of e.querySelectorAll("select,input,textarea")) {
                    const r = n;
                    r.type !== "hidden" && (t || (r.focus(), t = !0), r.addEventListener("keydown", Xf))
                }
            }
            $(hr, "focusFirstFormInput");

            function gr(e, t) {
                const n = e.querySelectorAll("[data-close-dialog]");
                for (const r of n) r.addEventListener("click", o => {
                    o.preventDefault(), Ht(Le(), {
                        selector: ".js-session-resumable"
                    }), t()
                })
            }
            $(gr, "hookUpCancelActionListeners");

            function br(e, t, n, r) {
                const o = hi(e);
                t.addEventListener("keydown", s => {
                    if (s.key === "Escape") {
                        const i = "Are you sure you want to dismiss the form?",
                            a = hi(e);
                        (o === a || confirm(i)) && (Ht(Le(), {
                            selector: ".js-session-resumable"
                        }), r(), n && n.focus())
                    }
                })
            }
            $(br, "addDismissAlertListener");

            function yr(e, t, n) {
                e.addEventListener("submit", async r => {
                    r.preventDefault();
                    const o = r.target,
                        s = o.querySelector(".js-data-url-csrf");
                    if (!s) return;
                    const i = o.getAttribute("action");
                    if (!i) return;
                    Gf(t);
                    const a = new FormData(o),
                        c = await K(document, i, {
                            method: "PATCH",
                            body: a,
                            headers: {
                                Accept: "text/html",
                                "Scoped-CSRF-Token": s.value
                            }
                        });
                    n(), !!c && pi(t, c)
                })
            }
            $(yr, "addSubmitButtonListener");

            function Gf(e) {
                const t = e.closest(".js-slash-command-surface"),
                    n = e.closest("form"),
                    r = t || n;
                if (r)
                    for (const o of r.querySelectorAll("[data-disable-with][disabled]")) o.disabled = !1
            }
            $(Gf, "reenableParentFormButtons");

            function Jf(e, t) {
                const n = t.querySelector(".js-slash-command-menu");
                e.setMenu(n, !0);
                const r = n.querySelector("form"),
                    o = document.activeElement;
                hr(r);
                const s = $(() => {
                    e.closeMenu()
                }, "closeForm");
                br(r, r, o, s), gr(r, s), yr(r, e, s)
            }
            $(Jf, "handleDialogForm");

            function Qf(e, t) {
                const n = e.closest("form");
                if (!n) return;
                const r = t.querySelector('[data-component="form"]');
                n.insertAdjacentElement("afterend", r);
                const o = document.activeElement;
                hr(r);
                const s = $(() => {
                    n.hidden = !1, r.remove()
                }, "closeForm");
                gr(r, s);
                const i = r.getElementsByTagName("form")[0];
                br(i, r, o, s), yr(r, e, s)
            }
            $(Qf, "handleModalForm");

            function Yf(e, t) {
                const n = e.closest(".js-slash-command-surface"),
                    r = e.closest("form"),
                    o = n || r;
                if (!o) return;
                o.hidden = !0;
                const s = t.querySelector('[data-component="form"]');
                o.insertAdjacentElement("afterend", s);
                const i = document.activeElement;
                hr(s);
                const a = $(() => {
                    o.hidden = !1, s.remove()
                }, "closeForm");
                gr(s, a);
                const c = s.getElementsByTagName("form")[0];
                br(c, s, i, a), yr(s, e, a)
            }
            $(Yf, "handleEmbeddedForm");
            const jb = 5e3;

            function Zf(e, t) {
                var n, r;
                const o = (n = t.parentElement) == null ? void 0 : n.parentElement;
                if (!o) return;
                const s = o.querySelector(".drag-and-drop .default");
                let i = !1;
                s && (i = s.hidden, s.hidden = !0), (r = s == null ? void 0 : s.parentElement) == null || r.prepend(e), setTimeout(() => {
                    s && (s.hidden = i), e.remove()
                }, jb)
            }
            $(Zf, "showFooter");

            function em(e) {
                const {
                    key: t,
                    provide: n,
                    text: r
                } = e.detail;
                if (t !== mi) return;
                const o = e.target;
                o.isLoading();
                const s = o.getAttribute("data-slash-command-url");
                n(tm(s, r, o))
            }
            $(em, "onChange");
            async function tm(e, t, n) {
                try {
                    const [r, o] = await nm(e), s = r.querySelector(".js-slash-command-menu-items"), i = Vf(o, t);
                    if (s) {
                        s.innerHTML = "";
                        for (const a of o)
                            if (a.classList.contains("js-group-divider")) {
                                const c = a.getAttribute("data-group-id");
                                i.filter(d => d.getAttribute("data-group-id") === c).length > 0 && s.append(a)
                            } else i.includes(a) && s.append(a)
                    }
                    return {
                        fragment: r,
                        matched: i.length > 0
                    }
                } catch (r) {
                    throw n.showError(), new Error(r)
                }
            }
            $(tm, "slashCommandMenu");
            async function gi(e) {
                const n = (await K(document, e)).firstElementChild,
                    r = n.querySelectorAll(".js-slash-command-menu-items li");
                return [n, [...r]]
            }
            $(gi, "fetchSlashCommands");
            let nm = ue(gi);
            var Lb = Object.defineProperty,
                Sb = (e, t) => Lb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function rm(e, t) {
                const n = e.closest(".js-survey-question-form"),
                    r = n.querySelector("input.js-survey-other-text"),
                    o = t && !n.classList.contains("is-other-selected");
                n.classList.toggle("is-other-selected", o), r.hidden = !t, o ? (r.required = !0, r.focus()) : r.required = !1, v(r, "change")
            }
            Sb(rm, "handleOther"), f("change", "input.js-survey-radio", function({
                currentTarget: e
            }) {
                rm(e, e.classList.contains("js-survey-radio-other"))
            }), f("change", "input.js-survey-checkbox-enable-submit", function({
                currentTarget: e
            }) {
                var t;
                const n = e.checked,
                    r = (t = e.closest("form")) == null ? void 0 : t.querySelector("button[type=submit]");
                r.disabled = !n
            }), f("change", "input.js-survey-contact-checkbox", function(e) {
                const t = e.currentTarget,
                    r = t.closest(".js-survey-question-form").querySelector(".js-survey-contact-checkbox-hidden");
                t.checked ? r.setAttribute("disabled", "true") : r.removeAttribute("disabled")
            }), f("details-menu-selected", ".js-sync-select-menu-icon", function(e) {
                const t = document.querySelector(".js-sync-select-menu-icon-completed"),
                    n = document.querySelector(".js-sync-select-menu-icon-canceled"),
                    r = e.detail.relatedTarget.querySelector('input[name="state_reason"]').value;
                r === "completed" ? (t.style.display = "inline-block", n.style.display = "none") : r === "canceled" && (t.style.display = "none", n.style.display = "inline-block")
            }, {
                capture: !0
            }), f("details-menu-selected", ".js-sync-select-menu-text", function(e) {
                const t = document.querySelector(".js-sync-select-menu-button"),
                    n = e.detail.relatedTarget.querySelector("span[data-menu-button-text]").textContent;
                t.textContent = n, t.focus()
            }, {
                capture: !0
            }), f("click", 'tab-container [role="tab"]', function(e) {
                const {
                    currentTarget: t
                } = e, r = t.closest("tab-container").querySelector(".js-filterable-field, [data-filter-placeholder-input]");
                if (r instanceof HTMLInputElement) {
                    const o = t.getAttribute("data-filter-placeholder");
                    o && r.setAttribute("placeholder", o), r.focus()
                }
            }), f("tab-container-changed", "tab-container", function(e) {
                const t = e.detail.relatedTarget,
                    n = t.getAttribute("data-fragment-url"),
                    r = t.querySelector("include-fragment");
                n && r && !r.hasAttribute("src") && (r.src = n)
            }), document.addEventListener("keydown", e => {
                if (e.key !== "Escape" || e.target !== document.body) return;
                const t = document.querySelector(".js-targetable-element:target");
                !t || zr(t, () => {
                    window.location.hash = "", window.history.replaceState(null, "", window.location.pathname + window.location.search)
                })
            }), document.addEventListener("click", e => {
                const t = document.querySelector(".js-targetable-element:target");
                !t || e.target instanceof HTMLAnchorElement || e.target instanceof HTMLElement && (t.contains(e.target) || zr(t, () => {
                    window.location.hash = "", window.history.replaceState(null, "", window.location.pathname + window.location.search)
                }))
            });
            var Eb = Object.defineProperty,
                vr = (e, t) => Eb(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function om(e) {
                const t = e.currentTarget;
                if (im(t)) {
                    t.classList.remove("tooltipped");
                    return
                }
                const n = t.getAttribute("data-url");
                if (!n) return;
                const r = await fetch(n, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!r.ok) return;
                const o = await r.json(),
                    s = t.getAttribute("data-id"),
                    i = document.querySelectorAll(`.js-team-mention[data-id='${s}']`);
                for (const a of i) a.removeAttribute("data-url");
                try {
                    o.total === 0 ? o.members.push("This team has no members") : o.total > o.members.length && o.members.push(`${o.total-o.members.length} more`), bi(i, sm(o.members))
                } catch (a) {
                    const c = a.response ? a.response.status : 500,
                        l = t.getAttribute(c === 404 ? "data-permission-text" : "data-error-text");
                    bi(i, l)
                }
            }
            vr(om, "members");

            function bi(e, t) {
                for (const n of e) n instanceof HTMLElement && (n.setAttribute("aria-label", t), n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline"))
            }
            vr(bi, "tip");

            function sm(e) {
                if ("ListFormat" in Intl) return new Intl.ListFormat().format(e);
                if (e.length === 0) return "";
                if (e.length === 1) return e[0];
                if (e.length === 2) return e.join(" and "); {
                    const t = e[e.length - 1];
                    return e.slice(0, -1).concat(`and ${t}`).join(", ")
                }
            }
            vr(sm, "sentence");

            function im(e) {
                return !!e.getAttribute("data-hovercard-url") && !!e.closest("[data-team-hovercards-enabled]")
            }
            vr(im, "teamHovercardEnabled"), p(".js-team-mention", function(e) {
                e.addEventListener("mouseenter", om)
            });
            var am = Object.defineProperty,
                kb = Object.getOwnPropertyDescriptor,
                _b = (e, t) => am(e, "name", {
                    value: t,
                    configurable: !0
                }),
                wr = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? kb(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && am(t, n, o), o
                };
            let yt = class extends HTMLElement {
                acceptSuggestion() {
                    var e;
                    ((e = this.suggestion) == null ? void 0 : e.textContent) && (this.input.value = this.suggestion.textContent, this.input.dispatchEvent(new Event("input")), this.suggestionContainer && (this.suggestionContainer.hidden = !0), this.input.focus())
                }
            };
            _b(yt, "TextSuggesterElement"), wr([P], yt.prototype, "input", 2), wr([P], yt.prototype, "suggestionContainer", 2), wr([P], yt.prototype, "suggestion", 2), yt = wr([te], yt);
            var Tb = Object.defineProperty,
                jr = (e, t) => Tb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function cm() {
                const e = document.querySelector(".js-timeline-marker");
                return e != null ? e.getAttribute("data-last-modified") : null
            }
            jr(cm, "getTimelineLastModified");

            function yi(e) {
                if (um(e) || lm(e)) return;
                const t = cm();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }
            jr(yi, "addTimelineLastModifiedHeader");

            function lm(e) {
                return e.headers.get("X-PJAX") === "true"
            }
            jr(lm, "isPjax");

            function um(e) {
                let t;
                try {
                    t = new URL(e.url)
                } catch {
                    return !0
                }
                return t.host !== window.location.host
            }
            jr(um, "isCrossDomain"), C(".js-needs-timeline-marker-header", function(e, t, n) {
                yi(n)
            }), f("deprecatedAjaxSend", "[data-remote]", function(e) {
                const {
                    request: t
                } = e.detail;
                yi(t)
            });
            var Cb = Object.defineProperty,
                Ee = (e, t) => Cb(e, "name", {
                    value: t,
                    configurable: !0
                });
            const dm = 5e3,
                xb = ".js-comment-body img",
                Ab = ".js-comment-body video";
            qt(function({
                target: e
            }) {
                const t = an();
                if (t && !e) {
                    const n = document.querySelector("#js-timeline-progressive-loader");
                    n && vi(t, n)
                }
            }), p(".js-timeline-progressive-focus-container", function(e) {
                var t;
                const n = an();
                if (!n) return;
                const r = document.getElementById(n);
                if (r && e.contains(r)) sn(r);
                else {
                    const o = e.querySelectorAll(".js-comment-container");
                    for (const s of o) {
                        const i = s.getAttribute("data-thread-comments-ids");
                        if (i) {
                            const a = i.split(","),
                                c = (t = n.match(/\d+/g)) == null ? void 0 : t[0];
                            if (c && a.includes(c)) {
                                Ko(s);
                                break
                            }
                        }
                    }
                }
            }), p(".js-inline-comments-container", function(e) {
                const t = an();
                if (!t) return;
                const n = document.getElementById(t);
                n && e.contains(n) && sn(n)
            }), p("#js-discussions-timeline-anchor-loader", {
                constructor: HTMLElement,
                add: e => {
                    if (document.querySelector("#js-timeline-progressive-loader")) return;
                    const n = an();
                    if (!n) return;
                    document.getElementById(n) || vi(n, e)
                }
            });
            async function fm() {
                const e = document.querySelectorAll(Ab),
                    t = Array.from(e).map(n => new Promise(r => {
                        if (n.readyState >= n.HAVE_METADATA) r(n);
                        else {
                            const o = setTimeout(() => r(n), dm),
                                s = Ee(() => {
                                    clearTimeout(o), r(n)
                                }, "done");
                            n.addEventListener("loadeddata", () => {
                                n.readyState >= n.HAVE_METADATA && s()
                            }), n.addEventListener("error", () => s())
                        }
                    }));
                return Promise.all(t)
            }
            Ee(fm, "videosReady");
            async function mm() {
                const e = document.querySelectorAll(xb),
                    t = Array.from(e).map(n => {
                        new Promise(r => {
                            if (n.complete) r(n);
                            else {
                                const o = setTimeout(() => r(n), dm),
                                    s = Ee(() => {
                                        clearTimeout(o), r(n)
                                    }, "done");
                                n.addEventListener("load", () => s()), n.addEventListener("error", () => s())
                            }
                        })
                    });
                return Promise.all(t)
            }
            Ee(mm, "imagesReady");
            async function pm() {
                return Promise.all([fm(), mm()])
            }
            Ee(pm, "mediaLoaded");
            async function sn(e) {
                await pm(), hm(e);
                const t = e.querySelector(`[href='#${e.id}']`);
                t && t.click()
            }
            Ee(sn, "focusElement");
            async function vi(e, t) {
                if (!t) return;
                const n = t.getAttribute("data-timeline-item-src");
                if (!n) return;
                const r = new URL(n, window.location.origin),
                    o = new URLSearchParams(r.search.slice(1));
                o.append("anchor", e), r.search = o.toString();
                let s;
                try {
                    s = await K(document, r.toString())
                } catch {
                    return
                }
                const i = s.querySelector(".js-timeline-item");
                if (!i) return;
                const a = i.getAttribute("data-gid");
                if (!a) return;
                const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                if (c) {
                    c.replaceWith(i);
                    const l = document.getElementById(e);
                    l && await sn(l)
                } else {
                    const l = document.getElementById("js-progressive-timeline-item-container");
                    l && l.replaceWith(s);
                    const d = document.getElementById(e);
                    d && await sn(d)
                }
            }
            Ee(vi, "loadElement");

            function hm(e) {
                const t = e.closest("details, .js-details-container");
                !t || (t.nodeName === "DETAILS" ? t.setAttribute("open", "open") : da(t) || Vr(t))
            }
            Ee(hm, "expandDetailsIfPresent");

            function an() {
                return window.location.hash.slice(1)
            }
            Ee(an, "urlAnchor");
            var Pb = Object.defineProperty,
                gm = (e, t) => Pb(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-discussion", bm);

            function bm() {
                let e = new WeakSet;
                t(), document.addEventListener("pjax:end", t), p(".js-timeline-item", n => {
                    n instanceof HTMLElement && (e.has(n) || He(n))
                });

                function t() {
                    e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                }
                gm(t, "setExistingTimelineItems")
            }
            gm(bm, "announceTimelineEvents");
            var qb = Object.defineProperty,
                Lr = (e, t) => qb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function vt(e) {
                const {
                    name: t,
                    value: n
                } = e, r = {
                    name: window.location.href
                };
                switch (t) {
                    case "CLS":
                        r.cls = n;
                        break;
                    case "FCP":
                        r.fcp = n;
                        break;
                    case "FID":
                        r.fid = n;
                        break;
                    case "LCP":
                        r.lcp = n;
                        break;
                    case "TTFB":
                        r.ttfb = n;
                        break
                }
                le({
                    webVitalTimings: [r]
                }), ym(t, n)
            }
            Lr(vt, "sendVitals");

            function ym(e, t) {
                const n = document.querySelector("#staff-bar-web-vitals"),
                    r = n == null ? void 0 : n.querySelector(`[data-metric=${e.toLowerCase()}]`);
                !r || (r.textContent = t.toPrecision(6))
            }
            Lr(ym, "updateStaffBar");

            function vm() {
                return !!(window.performance && window.performance.timing && window.performance.getEntriesByType)
            }
            Lr(vm, "isTimingSuppported");
            async function wm() {
                if (!vm()) return;
                await Mt, await new Promise(n => setTimeout(n));
                const e = window.performance.getEntriesByType("resource");
                e.length && le({
                    resourceTimings: e
                });
                const t = window.performance.getEntriesByType("navigation");
                t.length && le({
                    navigationTimings: t
                })
            }
            Lr(wm, "sendTimingResults"), wm(), Ua(vt), Wa(vt), za(vt), Va(vt), Ka(vt), f("click", ".js-toggler-container .js-toggler-target", function(e) {
                if (e.button !== 0) return;
                const t = e.currentTarget.closest(".js-toggler-container");
                t && t.classList.toggle("on")
            }), C(".js-toggler-container", async (e, t) => {
                e.classList.remove("success", "error"), e.classList.add("loading");
                try {
                    await t.text(), e.classList.add("success")
                } catch {
                    e.classList.add("error")
                } finally {
                    e.classList.remove("loading")
                }
            });
            const Mb = {
                "outside-top": ["outside-bottom", "outside-right", "outside-left", "outside-bottom"],
                "outside-bottom": ["outside-top", "outside-right", "outside-left", "outside-bottom"],
                "outside-left": ["outside-right", "outside-bottom", "outside-top", "outside-bottom"],
                "outside-right": ["outside-left", "outside-bottom", "outside-top", "outside-bottom"]
            };

            function $b(e, t, n = {}) {
                const r = Ib(e),
                    o = Rb(r),
                    s = getComputedStyle(r),
                    i = r.getBoundingClientRect(),
                    [a, c] = [s.borderTopWidth, s.borderLeftWidth].map(d => parseInt(d, 10) || 0),
                    l = {
                        top: i.top + a,
                        left: i.left + c
                    };
                return Hb(o, l, e.getBoundingClientRect(), t instanceof Element ? t.getBoundingClientRect() : t, Fb(n))
            }

            function Ib(e) {
                let t = e.parentNode;
                for (; t !== null;) {
                    if (t instanceof HTMLElement && getComputedStyle(t).position !== "static") return t;
                    t = t.parentNode
                }
                return document.body
            }

            function Rb(e) {
                let t = e;
                for (; t !== null && !(t === document.body || getComputedStyle(t).overflow !== "visible");) t = t.parentNode;
                const n = t === document.body || !(t instanceof HTMLElement) ? document.body : t,
                    r = n.getBoundingClientRect(),
                    o = getComputedStyle(n),
                    [s, i, a, c] = [o.borderTopWidth, o.borderLeftWidth, o.borderRightWidth, o.borderBottomWidth].map(l => parseInt(l, 10) || 0);
                return {
                    top: r.top + s,
                    left: r.left + i,
                    width: r.width - a - i,
                    height: Math.max(r.height - s - c, n === document.body ? window.innerHeight : -1 / 0)
                }
            }
            const cn = {
                side: "outside-bottom",
                align: "start",
                anchorOffset: 4,
                alignmentOffset: 4,
                allowOutOfBounds: !1
            };

            function Fb(e = {}) {
                var t, n, r, o, s;
                const i = (t = e.side) !== null && t !== void 0 ? t : cn.side,
                    a = (n = e.align) !== null && n !== void 0 ? n : cn.align;
                return {
                    side: i,
                    align: a,
                    anchorOffset: (r = e.anchorOffset) !== null && r !== void 0 ? r : i === "inside-center" ? 0 : cn.anchorOffset,
                    alignmentOffset: (o = e.alignmentOffset) !== null && o !== void 0 ? o : a !== "center" && i.startsWith("inside") ? cn.alignmentOffset : 0,
                    allowOutOfBounds: (s = e.allowOutOfBounds) !== null && s !== void 0 ? s : cn.allowOutOfBounds
                }
            }

            function Hb(e, t, n, r, {
                side: o,
                align: s,
                allowOutOfBounds: i,
                anchorOffset: a,
                alignmentOffset: c
            }) {
                const l = {
                    top: e.top - t.top,
                    left: e.left - t.left,
                    width: e.width,
                    height: e.height
                };
                let d = jm(n, r, o, s, a, c),
                    m = o;
                if (d.top -= t.top, d.left -= t.left, !i) {
                    const h = Mb[o];
                    let g = 0;
                    if (h) {
                        let j = o;
                        for (; g < h.length && Ob(j, d, l, n);) {
                            const L = h[g++];
                            j = L, d = jm(n, r, L, s, a, c), d.top -= t.top, d.left -= t.left, m = L
                        }
                    }
                    d.top < l.top && (d.top = l.top), d.left < l.left && (d.left = l.left), d.left + n.width > e.width + l.left && (d.left = e.width + l.left - n.width), h && g < h.length && d.top + n.height > e.height + l.top && (d.top = e.height + l.top - n.height)
                }
                return Object.assign(Object.assign({}, d), {
                    anchorSide: m
                })
            }

            function jm(e, t, n, r, o, s) {
                const i = t.left + t.width,
                    a = t.top + t.height;
                let c = -1,
                    l = -1;
                return n === "outside-top" ? c = t.top - o - e.height : n === "outside-bottom" ? c = a + o : n === "outside-left" ? l = t.left - o - e.width : n === "outside-right" && (l = i + o), (n === "outside-top" || n === "outside-bottom") && (r === "start" ? l = t.left + s : r === "center" ? l = t.left - (e.width - t.width) / 2 + s : l = i - e.width - s), (n === "outside-left" || n === "outside-right") && (r === "start" ? c = t.top + s : r === "center" ? c = t.top - (e.height - t.height) / 2 + s : c = a - e.height - s), n === "inside-top" ? c = t.top + o : n === "inside-bottom" ? c = a - o - e.height : n === "inside-left" ? l = t.left + o : n === "inside-right" ? l = i - o - e.width : n === "inside-center" && (l = (i + t.left) / 2 - e.width / 2 + o), n === "inside-top" || n === "inside-bottom" ? r === "start" ? l = t.left + s : r === "center" ? l = t.left - (e.width - t.width) / 2 + s : l = i - e.width - s : (n === "inside-left" || n === "inside-right" || n === "inside-center") && (r === "start" ? c = t.top + s : r === "center" ? c = t.top - (e.height - t.height) / 2 + s : c = a - e.height - s), {
                    top: c,
                    left: l
                }
            }

            function Ob(e, t, n, r) {
                return e === "outside-top" || e === "outside-bottom" ? t.top < n.top || t.top + r.height > n.height + n.top : t.left < n.left || t.left + r.width > n.width + n.left
            }
            var Db = Object.defineProperty,
                Bb = (e, t) => Db(e, "name", {
                    value: t,
                    configurable: !0
                }),
                Lm = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                wt = (e, t, n) => (Lm(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                ln = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                k = (e, t, n, r) => (Lm(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                un, N, J, re, Sr;
            const Sm = "hx_tooltip-open",
                Em = "hx_tooltip",
                Z = 6,
                km = ["hx_tooltip-n", "hx_tooltip-s", "hx_tooltip-e", "hx_tooltip-w", "hx_tooltip-ne", "hx_tooltip-se", "hx_tooltip-nw", "hx_tooltip-sw"],
                Nb = {
                    n: "hx_tooltip-n",
                    s: "hx_tooltip-s",
                    e: "hx_tooltip-e",
                    w: "hx_tooltip-w",
                    ne: "hx_tooltip-ne",
                    se: "hx_tooltip-se",
                    nw: "hx_tooltip-nw",
                    sw: "hx_tooltip-sw"
                };
            class Er extends HTMLElement {
                constructor() {
                    super(...arguments);
                    ln(this, un, void 0), ln(this, N, "s"), ln(this, J, "center"), ln(this, re, "outside-bottom"), ln(this, Sr, !1)
                }
                get htmlFor() {
                    return this.getAttribute("for") || ""
                }
                set htmlFor(t) {
                    this.setAttribute("for", t)
                }
                get control() {
                    return this.ownerDocument.getElementById(this.htmlFor)
                }
                get type() {
                    return this.getAttribute("data-type") === "label" ? "label" : "description"
                }
                set type(t) {
                    this.setAttribute("data-type", t)
                }
                get direction() {
                    return wt(this, N)
                }
                set direction(t) {
                    this.setAttribute("data-direction", t)
                }
                get align() {
                    return wt(this, J)
                }
                get side() {
                    return wt(this, re)
                }
                connectedCallback() {
                    this.hidden = !0, k(this, Sr, !0), this.id || (this.id = `tooltip-${Date.now()}-${(Math.random()*1e4).toFixed(0)}`), !!this.control && (this.classList.add(Em), this.setAttribute("role", "tooltip"), this.addEvents())
                }
                attributeChangedCallback(t, n, r) {
                    if (t === "id" || t === "data-type") {
                        if (!this.id || !this.control) return;
                        if (this.type === "label") this.control.setAttribute("aria-labelledby", this.id);
                        else {
                            let o = this.control.getAttribute("aria-describedby");
                            o ? o = `${o} ${this.id}` : o = this.id, this.control.setAttribute("aria-describedby", o)
                        }
                    } else if (t === "hidden")
                        if (r === "") this.classList.remove(Sm, ...km);
                        else {
                            this.classList.add(Sm, Em);
                            for (const s of this.ownerDocument.querySelectorAll(this.tagName)) s !== this && (s.hidden = !0);
                            this.updatePosition()
                        }
                    else if (t === "data-direction") {
                        this.classList.remove(...km);
                        const o = k(this, N, r || "s");
                        o === "n" ? (k(this, J, "center"), k(this, re, "outside-top")) : o === "ne" ? (k(this, J, "start"), k(this, re, "outside-top")) : o === "e" ? (k(this, J, "center"), k(this, re, "outside-right")) : o === "se" ? (k(this, J, "start"), k(this, re, "outside-bottom")) : o === "s" ? (k(this, J, "center"), k(this, re, "outside-bottom")) : o === "sw" ? (k(this, J, "end"), k(this, re, "outside-bottom")) : o === "w" ? (k(this, J, "center"), k(this, re, "outside-left")) : o === "nw" && (k(this, J, "end"), k(this, re, "outside-top")), this.updatePosition()
                    }
                }
                disconnectedCallback() {
                    wt(this, un).abort()
                }
                addEvents() {
                    if (!this.control) return;
                    k(this, un, new AbortController);
                    const {
                        signal: t
                    } = wt(this, un);
                    this.addEventListener("mouseleave", this, {
                        signal: t
                    }), this.control.addEventListener("mouseenter", this, {
                        signal: t
                    }), this.control.addEventListener("mouseleave", this, {
                        signal: t
                    }), this.control.addEventListener("focus", this, {
                        signal: t
                    }), this.control.addEventListener("blur", this, {
                        signal: t
                    }), this.ownerDocument.addEventListener("keydown", this, {
                        signal: t
                    })
                }
                handleEvent(t) {
                    !this.control || ((t.type === "mouseenter" || t.type === "focus") && this.hidden ? this.hidden = !1 : t.type === "blur" ? this.hidden = !0 : t.type === "mouseleave" && t.relatedTarget !== this.control && t.relatedTarget !== this ? this.hidden = !0 : t.type === "keydown" && t.key === "Escape" && !this.hidden && (this.hidden = !0))
                }
                updatePosition() {
                    if (!this.control || !wt(this, Sr) || this.hidden) return;
                    const t = $b(this, this.control, this),
                        {
                            anchorSide: n
                        } = t;
                    let {
                        top: r,
                        left: o
                    } = t;
                    this.style.top = `${r}px`, this.style.left = `${o}px`;
                    const s = this.getBoundingClientRect(),
                        i = this.control.getBoundingClientRect(),
                        a = s.width,
                        c = s.left + a / 2,
                        l = i.x + i.width / 2,
                        d = Math.abs(c - l),
                        m = Math.abs(s.left - i.x),
                        h = Math.abs(s.left + a - i.right),
                        g = Math.min(d, m, h);
                    g === d ? (k(this, J, "center"), n === "outside-top" ? (k(this, N, "n"), r -= Z) : n === "outside-bottom" ? (k(this, N, "s"), r += Z) : n === "outside-left" ? (k(this, N, "w"), o -= Z) : (k(this, N, "e"), o += Z)) : g === h ? (k(this, J, "end"), n === "outside-top" ? (k(this, N, "nw"), r -= Z) : n === "outside-bottom" ? (k(this, N, "sw"), r += Z) : n === "outside-left" ? (k(this, N, "w"), o -= Z) : (k(this, N, "e"), o += Z)) : (k(this, J, "start"), n === "outside-top" ? (k(this, N, "ne"), r -= Z) : n === "outside-bottom" ? (k(this, N, "se"), r += Z) : n === "outside-left" ? (k(this, N, "w"), o -= Z) : (k(this, N, "e"), o += Z)), this.style.top = `${r}px`, this.style.left = `${o}px`, this.classList.add(Nb[this.direction])
                }
            }
            Bb(Er, "PrimerTooltipElement"), un = new WeakMap, N = new WeakMap, J = new WeakMap, re = new WeakMap, Sr = new WeakMap, Er.observedAttributes = ["data-type", "data-direction", "id", "hidden"], window.customElements.get("primer-tooltip") || (window.PrimerTooltipElement = Er, window.customElements.define("primer-tooltip", Er)), ge("TURBO") && y.import("./chunk-turbo.es2017-esm.js"), window.requestIdleCallback(() => {
                const e = fa();
                e && Qa("tz", encodeURIComponent(e))
            });
            var _m = Object.defineProperty,
                Ub = Object.getOwnPropertyDescriptor,
                wi = (e, t) => _m(e, "name", {
                    value: t,
                    configurable: !0
                }),
                D = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? Ub(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && _m(t, n, o), o
                };
            let oe = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.state = "initializing", this.json = "", this.autofocusWhenReady = !1, this.autoPrompt = !1, this.hasErrored = !1
                }
                connectedCallback() {
                    this.originalButtonText = this.button.textContent, this.setState(ma() ? "ready" : "unsupported"), this.autoPrompt && this.prompt(void 0, !0)
                }
                setState(e) {
                    this.button.textContent = this.hasErrored ? this.button.getAttribute("data-retry-message") : this.originalButtonText, this.button.disabled = !1, this.button.hidden = !1;
                    for (const t of this.messages) t.hidden = !0;
                    switch (e) {
                        case "initializing":
                            this.button.disabled = !0;
                            break;
                        case "unsupported":
                            this.button.disabled = !0, this.unsupportedMessage.hidden = !1;
                            break;
                        case "ready":
                            this.autofocusWhenReady && this.button.focus();
                            break;
                        case "waiting":
                            this.waitingMessage.hidden = !1, this.button.hidden = !0;
                            break;
                        case "error":
                            this.errorMessage.hidden = !1;
                            break;
                        case "submitting":
                            this.button.textContent = "Verifying\u2026", this.button.disabled = !0;
                            break;
                        default:
                            throw new Error("invalid state")
                    }
                    this.state = e
                }
                async prompt(e, t) {
                    e == null || e.preventDefault(), this.dispatchEvent(new CustomEvent("webauthn-get-prompt"));
                    try {
                        t || this.setState("waiting");
                        const n = JSON.parse(this.json),
                            r = await pa(n);
                        this.setState("submitting");
                        const o = this.closest(".js-webauthn-form"),
                            s = o.querySelector(".js-webauthn-response");
                        s.value = JSON.stringify(r), U(o)
                    } catch (n) {
                        if (!t) throw this.hasErrored = !0, this.setState("error"), n
                    }
                }
            };
            wi(oe, "WebauthnGetElement"), D([P], oe.prototype, "button", 2), D([Ce], oe.prototype, "messages", 2), D([P], oe.prototype, "unsupportedMessage", 2), D([P], oe.prototype, "waitingMessage", 2), D([P], oe.prototype, "errorMessage", 2), D([de], oe.prototype, "json", 2), D([de], oe.prototype, "autofocusWhenReady", 2), D([de], oe.prototype, "autoPrompt", 2), oe = D([te], oe);
            let et = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.state = "showing-form"
                }
                connectedCallback() {
                    this.setState(this.state)
                }
                setState(e) {
                    switch (this.revealer.hidden = !0, this.form.hidden = !1, e) {
                        case "initializing":
                            break;
                        case "showing-form":
                            this.passwordField.focus(), this.dispatchEvent(new CustomEvent("sudo-password-showing-form"));
                            break;
                        case "showing-revealer":
                            this.revealer.hidden = !1, this.form.hidden = !0;
                            break;
                        default:
                            throw new Error("invalid state")
                    }
                    this.state = e
                }
                reveal() {
                    this.setState("showing-form")
                }
            };
            wi(et, "SudoPasswordElement"), D([de], et.prototype, "state", 2), D([P], et.prototype, "revealer", 2), D([P], et.prototype, "form", 2), D([P], et.prototype, "passwordField", 2), et = D([te], et);
            let dn = class extends HTMLElement {
                connectedCallback() {
                    var e;
                    (e = this.webauthnGet) == null || e.addEventListener("webauthn-get-prompt", () => {
                        this.sudoPassword.setState("showing-revealer")
                    }), this.sudoPassword.addEventListener("sudo-password-showing-form", () => {
                        var t;
                        (t = this.webauthnGet) == null || t.setState("ready")
                    })
                }
            };
            wi(dn, "SudoAuthElement"), D([P], dn.prototype, "webauthnGet", 2), D([P], dn.prototype, "sudoPassword", 2), dn = D([te], dn);
            var Wb = Object.defineProperty,
                Tm = (e, t) => Wb(e, "name", {
                    value: t,
                    configurable: !0
                });
            let ji = 0;

            function Cm() {
                if (!document.hasFocus()) return;
                const e = document.querySelector(".js-timeline-marker-form");
                e && e instanceof HTMLFormElement && U(e)
            }
            Tm(Cm, "markThreadAsRead");
            const kr = "IntersectionObserver" in window ? new IntersectionObserver(function(e) {
                for (const t of e) t.isIntersecting && Li(t.target)
            }, {
                root: null,
                rootMargin: "0px",
                threshold: 1
            }) : null;
            p(".js-unread-item", {
                constructor: HTMLElement,
                add(e) {
                    ji++, kr && kr.observe(e)
                },
                remove(e) {
                    ji--, kr && kr.unobserve(e), ji === 0 && Cm()
                }
            });

            function Li(e) {
                e.classList.remove("js-unread-item", "unread-item")
            }
            Tm(Li, "clearUnread"), p(".js-discussion[data-channel-target]", {
                subscribe: e => E(e, "socket:message", function(t) {
                    const n = t.target,
                        r = t.detail.data;
                    if (n.getAttribute("data-channel-target") === r.gid)
                        for (const o of document.querySelectorAll(".js-unread-item")) Li(o)
                })
            });
            var zb = Object.defineProperty,
                Vb = (e, t) => zb(e, "name", {
                    value: t,
                    configurable: !0
                });
            let _r = 0;
            const xm = /^\(\d+\)\s+/;

            function Si() {
                const e = _r ? `(${_r}) ` : "";
                document.title.match(xm) ? document.title = document.title.replace(xm, e) : document.title = `${e}${document.title}`
            }
            Vb(Si, "updateTitle"), p(".js-unread-item", {
                add() {
                    _r++, Si()
                },
                remove() {
                    _r--, Si()
                }
            });
            var Kb = Object.defineProperty,
                Xb = (e, t) => Kb(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".js-socket-channel.js-updatable-content", {
                subscribe: e => E(e, "socket:message", function(t) {
                    const {
                        gid: n,
                        wait: r
                    } = t.detail.data, o = t.target, s = n ? Am(o, n) : o;
                    s && setTimeout(jn, r || 0, s)
                })
            });

            function Am(e, t) {
                if (e.getAttribute("data-gid") === t) return e;
                for (const n of e.querySelectorAll("[data-url][data-gid]"))
                    if (n.getAttribute("data-gid") === t) return n;
                return null
            }
            Xb(Am, "findByGid");
            var Gb = Object.defineProperty,
                Jb = (e, t) => Gb(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function Pm() {
                if (!(!history.state || !history.state.staleRecords)) {
                    await It;
                    for (const e in history.state.staleRecords)
                        for (const t of document.querySelectorAll(`.js-updatable-content [data-url='${e}'], .js-updatable-content[data-url='${e}']`)) {
                            const n = history.state.staleRecords[e];
                            t instanceof HTMLElement && yn(t, n, !0)
                        }
                    Oe(null, "", location.href)
                }
            }
            Jb(Pm, "reapplyPreviouslyUpdatedContent"), window.addEventListener("beforeunload", function() {
                if (Object.keys(Kr).length > 0) {
                    const e = history.state || {};
                    e.staleRecords = Kr, Oe(e, "", location.href)
                }
            });
            try {
                Pm()
            } catch {}
            f("upload:setup", ".js-upload-avatar-image", function(e) {
                const {
                    form: t
                } = e.detail, n = e.currentTarget.getAttribute("data-alambic-organization"), r = e.currentTarget.getAttribute("data-alambic-owner-type"), o = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.append("organization_id", n), r && t.append("owner_type", r), o && t.append("owner_id", o)
            }), f("upload:complete", ".js-upload-avatar-image", function(e) {
                const {
                    attachment: t
                } = e.detail, n = `/settings/avatars/${t.id}`;
                he({
                    content: K(document, n)
                })
            });
            var Qb = Object.defineProperty,
                Yb = (e, t) => Qb(e, "name", {
                    value: t,
                    configurable: !0
                });

            function fn() {
                if (document.querySelector(":target")) return;
                const e = ha(location.hash).toLowerCase(),
                    t = ga(document, `user-content-${e}`);
                t && ba(t)
            }
            Yb(fn, "hashchange"), window.addEventListener("hashchange", fn), document.addEventListener("pjax:success", fn), async function() {
                await It, fn()
            }(), f("click", "a[href]", function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
                    e.defaultPrevented || fn()
                })
            });
            var Zb = Object.defineProperty,
                ey = (e, t) => Zb(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function qm(e) {
                const t = e.currentTarget,
                    {
                        init: n
                    } = await y.import("./chunk-user-status-submit.js");
                n(t)
            }
            ey(qm, "load"), p(".js-user-status-container", {
                subscribe: e => E(e, "click", qm, {
                    once: !0
                })
            });
            var ty = Object.defineProperty,
                ke = (e, t) => ty(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Mm(e, t) {
                const n = e.querySelector(".js-user-list-base");
                n && (n.textContent = t || n.getAttribute("data-generic-message"), n.hidden = !1)
            }
            ke(Mm, "setFlashError");

            function Ei(e, t) {
                const r = (t || e).querySelectorAll(".js-user-list-error");
                for (const i of r) i.hidden = !0;
                const o = t ? [t] : e.querySelectorAll(".errored.js-user-list-input-container");
                for (const i of o) i.classList.remove("errored");
                const s = e.querySelector(".js-user-list-base");
                s && (s.hidden = !0)
            }
            ke(Ei, "resetValidation"), C(".js-user-list-form", async function(e, t) {
                var n;
                Ei(e);
                const r = e.querySelector("[data-submitting-message]"),
                    o = r == null ? void 0 : r.textContent;
                r && (r.textContent = r.getAttribute("data-submitting-message"), r.disabled = !0);
                for (const s of e.querySelectorAll(".js-user-list-input")) s.disabled = !0;
                try {
                    const s = await t.html();
                    v(e, "user-list-form:success", s.html)
                } catch (s) {
                    if (((n = s.response) == null ? void 0 : n.status) === 422) e.replaceWith(s.response.html);
                    else {
                        Mm(e), r && (o && (r.textContent = o), r.disabled = !1);
                        for (const i of e.querySelectorAll(".js-user-list-input")) i.disabled = !1
                    }
                }
            }), f("user-list-form:success", ".js-follow-list", e => {
                const t = e.detail,
                    n = t instanceof DocumentFragment ? t.querySelector(".js-target-url") : null;
                (n == null ? void 0 : n.textContent) ? location.href = n.textContent: location.reload()
            });

            function ki(e) {
                if (!(e.currentTarget instanceof HTMLElement)) return;
                const t = e.currentTarget.closest(".js-user-list-form"),
                    n = e.currentTarget.closest(".js-user-list-input-container");
                t && n && Ei(t, n)
            }
            ke(ki, "clearErrorsFromInput"), ce(".js-user-list-form input", ki), ce(".js-user-list-form textarea", ki), f("auto-check-error", ".js-user-list-form input", function(e) {
                const t = e.currentTarget.closest(".js-user-list-input-container"),
                    n = t == null ? void 0 : t.querySelector(".js-user-list-error");
                n && (n.hidden = !1)
            });

            function $m(e) {
                var t;
                const n = new Map;
                for (const r of e) {
                    const o = (t = r.querySelector(".js-user-lists-create-trigger")) == null ? void 0 : t.getAttribute("data-repository-id");
                    if (o) {
                        const s = n.get(o);
                        s ? s.push(r) : n.set(o, [r])
                    }
                }
                return n
            }
            ke($m, "groupRootsByRepositoryId");
            async function Im(e, t, n) {
                const r = new FormData;
                r.set("authenticity_token", t);
                for (const i of n) r.append("repository_ids[]", i);
                const o = await fetch(e, {
                        method: "POST",
                        body: r,
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    }),
                    s = new Map;
                if (o.ok) {
                    const i = await o.json();
                    for (const a in i) s.set(a, ae(document, i[a]))
                }
                return s
            }
            ke(Im, "requestMenuBatchRender");

            function Rm(e, t) {
                for (const [n, r] of e.entries()) {
                    const o = t.get(n) || [];
                    for (const s of o) s.replaceWith(o.length === 1 ? r : r.cloneNode(!0))
                }
            }
            ke(Rm, "replaceUserListMenuRoots");
            async function _i() {
                var e;
                const t = document.querySelectorAll(".js-user-list-menu-content-root");
                if (t.length === 0) return;
                const n = t[0].getAttribute("data-batch-update-url");
                if (!n) return;
                const r = (e = t[0].querySelector(".js-user-list-batch-update-csrf")) == null ? void 0 : e.value;
                if (!r) return;
                const o = $m(t),
                    s = o.keys(),
                    i = await Im(n, r, s);
                i.size > 0 && Rm(i, o)
            }
            ke(_i, "updateAllUserListMenus");

            function Ti(e) {
                const t = new Promise((n, r) => {
                    e.addEventListener("user-list-menu-form:success", () => n()), e.addEventListener("user-list-menu-form:error", o => r(o))
                });
                return U(e), t
            }
            ke(Ti, "requestUserListMenuFormSubmit");

            function Fm(e) {
                const t = e.target;
                if (!(t instanceof HTMLDetailsElement) || t.hasAttribute("open")) return;
                const n = t.querySelector(".js-user-list-menu-form");
                n && Rt(n) && U(n)
            }
            ke(Fm, "submitUserListFormOnToggle"), f("toggle", ".js-user-list-menu", Fm, {
                capture: !0
            }), f("click", ".js-user-list-menu .js-submit-before-navigate", async e => {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = t.closest(".js-user-list-menu-content-root");
                if (!n) return;
                n.removeAttribute("data-update-after-submit");
                const r = n.querySelector(".js-user-list-menu-form");
                if (r) try {
                    await Ti(r)
                } catch {
                    Ue(), e.preventDefault()
                }
            }), C(".js-user-list-menu-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (o) {
                    Ue(), v(e, "user-list-menu-form:error", o);
                    return
                }
                if (n.json.didStar) {
                    const o = e.closest(".js-toggler-container");
                    o && o.classList.add("on");
                    const s = n.json.starCount;
                    if (s) {
                        const i = e.closest(".js-social-container");
                        i && ri(i, s)
                    }
                }
                const r = e.closest(".js-user-list-menu-content-root[data-update-after-submit]");
                if (r)
                    for (const o of e.querySelectorAll(".js-user-list-menu-item")) o.checked = o.defaultChecked;
                n.json.didCreate ? await _i() : r && await jn(r), v(e, "user-list-menu-form:success")
            }), f("click", ".js-user-list-delete-confirmation-trigger", e => {
                const {
                    currentTarget: t
                } = e, n = t.getAttribute("data-template-id");
                if (!n) return;
                const r = document.getElementById(n);
                if (!r || !(r instanceof HTMLTemplateElement)) return;
                const o = t.closest(".js-edit-user-list-dialog");
                o && (o.open = !1);
                const s = r.content.cloneNode(!0),
                    i = r.getAttribute("data-labelledby");
                he({
                    content: s,
                    labelledBy: i
                })
            }), f("click", ".js-user-lists-create-trigger", async function(e) {
                const {
                    currentTarget: t
                } = e, n = document.querySelector(".js-user-list-create-dialog-template"), r = e.currentTarget.getAttribute("data-repository-id"), o = t.closest(".js-user-list-menu-content-root");
                if (!n || !(n instanceof HTMLTemplateElement) || !r) {
                    t instanceof HTMLButtonElement && (t.disabled = !0);
                    return
                }
                const s = n.getAttribute("data-label");
                if (o && Rt(o)) {
                    const c = o.querySelector(".js-user-list-menu-form");
                    c && await Ti(c)
                }
                const i = new fe(n, {
                        repositoryId: r
                    }),
                    a = await he({
                        content: i,
                        label: s
                    });
                a.addEventListener("user-list-form:success", async () => {
                    await _i();
                    const c = a.closest("details");
                    c && (c.open = !1)
                })
            });
            var Hm = Object.defineProperty,
                ny = Object.getOwnPropertyDescriptor,
                ry = (e, t) => Hm(e, "name", {
                    value: t,
                    configurable: !0
                }),
                Tr = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? ny(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && Hm(t, n, o), o
                };
            let jt = class extends HTMLElement {
                show() {
                    this.input.type = "text", this.input.focus(), this.showButton.hidden = !0, this.hideButton.hidden = !1
                }
                hide() {
                    this.input.type = "password", this.input.focus(), this.hideButton.hidden = !0, this.showButton.hidden = !1
                }
            };
            ry(jt, "VisiblePasswordElement"), Tr([P], jt.prototype, "input", 2), Tr([P], jt.prototype, "showButton", 2), Tr([P], jt.prototype, "hideButton", 2), jt = Tr([te], jt);
            var oy = Object.defineProperty,
                mn = (e, t) => oy(e, "name", {
                    value: t,
                    configurable: !0
                });
            p("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", pn), e.addEventListener("change", pn), e.addEventListener("submit", Lt);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").addEventListener("toggle", Ci), t.addEventListener("details-dialog-close", xi))
                },
                remove(e) {
                    e.removeEventListener("input", pn), e.removeEventListener("change", pn), e.removeEventListener("submit", Lt);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").removeEventListener("toggle", Ci), t.removeEventListener("details-dialog-close", xi), Lt())
                }
            });

            function pn(e) {
                const t = e.currentTarget;
                Rt(t) ? Om(t) : Lt()
            }
            mn(pn, "prepareUnsavedChangesWarning");

            function Om(e) {
                const t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                window.onbeforeunload = function(n) {
                    return n.returnValue = t, t
                }
            }
            mn(Om, "enableSaveChangesReminder");

            function Lt() {
                window.onbeforeunload = null
            }
            mn(Lt, "disableSaveChangesReminder");

            function Ci({
                currentTarget: e
            }) {
                e.hasAttribute("open") || Lt()
            }
            mn(Ci, "disableSaveChangesReminderOnClosedDialogs");

            function xi(e) {
                const t = e.currentTarget;
                if (!t.closest("details[open]")) return;
                let r = !0;
                const o = t.querySelectorAll("form[data-warn-unsaved-changes]");
                for (const s of o)
                    if (Rt(s)) {
                        const i = s.getAttribute("data-warn-unsaved-changes");
                        r = confirm(i);
                        break
                    }
                r || e.preventDefault()
            }
            mn(xi, "promptOnDialogClosing");
            var sy = Object.defineProperty,
                iy = (e, t) => sy(e, "name", {
                    value: t,
                    configurable: !0
                });
            p(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e => E(e, "transitionend", Dm)
            });

            function Dm(e) {
                e.target.classList.remove("will-transition-once")
            }
            iy(Dm, "onTransitionEnd");
            var ay = Object.defineProperty,
                cy = (e, t) => ay(e, "name", {
                    value: t,
                    configurable: !0
                });

            function Bm(e, t = 0) {
                const n = e.getBoundingClientRect(),
                    r = n.top - t,
                    o = n.bottom - window.innerHeight + t;
                r < 0 ? window.scrollBy(0, r) : o > 0 && window.scrollBy(0, o)
            }
            cy(Bm, "adjustViewport"), f("click", ".js-video-play, .js-video-close", function(e) {
                const n = e.currentTarget.closest(".js-video-container"),
                    r = n.querySelector(".js-video-iframe");
                n.tagName.toLowerCase() === "details" && n.addEventListener("details-dialog-close", function() {
                    r.removeAttribute("src"), window.setTimeout(function() {
                        n.classList.remove("is-expanded")
                    }, 10)
                }), n.classList.contains("is-expanded") ? (r.removeAttribute("src"), n.classList.remove("is-expanded")) : (r.src = r.getAttribute("data-src") || "", n.classList.add("is-expanded")), Bm(r, 20)
            });
            var ly = Object.defineProperty,
                Ai = (e, t) => ly(e, "name", {
                    value: t,
                    configurable: !0
                });
            async function Nm(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-url");
                if (!n || Um(t)) return;
                const r = t.getAttribute("data-id") || "",
                    o = t.textContent,
                    s = document.querySelectorAll(`.js-issue-link[data-id='${r}']`);
                for (const i of s) i.removeAttribute("data-url");
                try {
                    const i = `${n}/title`,
                        a = await fetch(i, {
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            }
                        });
                    if (!a.ok) {
                        const l = new Error,
                            d = a.statusText ? ` ${a.statusText}` : "";
                        throw l.message = `HTTP ${a.status}${d}`, l
                    }
                    const c = await a.json();
                    Pi(s, `${o}, ${c.title}`)
                } catch (i) {
                    const a = (i.response != null ? i.response.status : void 0) || 500,
                        c = (() => {
                            switch (a) {
                                case 404:
                                    return t.getAttribute("data-permission-text");
                                default:
                                    return t.getAttribute("data-error-text")
                            }
                        })();
                    Pi(s, c || "")
                }
            }
            Ai(Nm, "issueLabel");

            function Pi(e, t) {
                for (const n of e) n instanceof HTMLElement && (n.classList.add("tooltipped", "tooltipped-ne"), n.setAttribute("aria-label", t))
            }
            Ai(Pi, "setLabel");

            function Um(e) {
                switch (e.getAttribute("data-hovercard-type")) {
                    case "issue":
                    case "pull_request":
                        return !!e.closest("[data-issue-and-pr-hovercards-enabled]");
                    case "discussion":
                        return !!e.closest("[data-discussion-hovercards-enabled]");
                    default:
                        return !1
                }
            }
            Ai(Um, "isHovercardEnabled"), p(".js-issue-link", {
                subscribe: e => E(e, "mouseenter", Nm)
            }), y.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            };
            var uy = Object.freeze({
                    __proto__: null
                }),
                dy = Xa(uy);
            const hn = dy,
                Wm = {};
            for (const e of Object.keys(hn)) Wm[hn[e]] = e;
            const b = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            var zm = b;
            for (const e of Object.keys(b)) {
                if (!("channels" in b[e])) throw new Error("missing channels property: " + e);
                if (!("labels" in b[e])) throw new Error("missing channel labels property: " + e);
                if (b[e].labels.length !== b[e].channels) throw new Error("channel and label counts mismatch: " + e);
                const {
                    channels: t,
                    labels: n
                } = b[e];
                delete b[e].channels, delete b[e].labels, Object.defineProperty(b[e], "channels", {
                    value: t
                }), Object.defineProperty(b[e], "labels", {
                    value: n
                })
            }
            b.rgb.hsl = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    r = e[2] / 255,
                    o = Math.min(t, n, r),
                    s = Math.max(t, n, r),
                    i = s - o;
                let a, c;
                s === o ? a = 0 : t === s ? a = (n - r) / i : n === s ? a = 2 + (r - t) / i : r === s && (a = 4 + (t - n) / i), a = Math.min(a * 60, 360), a < 0 && (a += 360);
                const l = (o + s) / 2;
                return s === o ? c = 0 : l <= .5 ? c = i / (s + o) : c = i / (2 - s - o), [a, c * 100, l * 100]
            }, b.rgb.hsv = function(e) {
                let t, n, r, o, s;
                const i = e[0] / 255,
                    a = e[1] / 255,
                    c = e[2] / 255,
                    l = Math.max(i, a, c),
                    d = l - Math.min(i, a, c),
                    m = function(h) {
                        return (l - h) / 6 / d + 1 / 2
                    };
                return d === 0 ? (o = 0, s = 0) : (s = d / l, t = m(i), n = m(a), r = m(c), i === l ? o = r - n : a === l ? o = 1 / 3 + t - r : c === l && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [o * 360, s * 100, l * 100]
            }, b.rgb.hwb = function(e) {
                const t = e[0],
                    n = e[1];
                let r = e[2];
                const o = b.rgb.hsl(e)[0],
                    s = 1 / 255 * Math.min(t, Math.min(n, r));
                return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [o, s * 100, r * 100]
            }, b.rgb.cmyk = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    r = e[2] / 255,
                    o = Math.min(1 - t, 1 - n, 1 - r),
                    s = (1 - t - o) / (1 - o) || 0,
                    i = (1 - n - o) / (1 - o) || 0,
                    a = (1 - r - o) / (1 - o) || 0;
                return [s * 100, i * 100, a * 100, o * 100]
            };

            function fy(e, t) {
                return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
            }
            b.rgb.keyword = function(e) {
                const t = Wm[e];
                if (t) return t;
                let n = 1 / 0,
                    r;
                for (const o of Object.keys(hn)) {
                    const s = hn[o],
                        i = fy(e, s);
                    i < n && (n = i, r = o)
                }
                return r
            }, b.keyword.rgb = function(e) {
                return hn[e]
            }, b.rgb.xyz = function(e) {
                let t = e[0] / 255,
                    n = e[1] / 255,
                    r = e[2] / 255;
                t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
                const o = t * .4124 + n * .3576 + r * .1805,
                    s = t * .2126 + n * .7152 + r * .0722,
                    i = t * .0193 + n * .1192 + r * .9505;
                return [o * 100, s * 100, i * 100]
            }, b.rgb.lab = function(e) {
                const t = b.rgb.xyz(e);
                let n = t[0],
                    r = t[1],
                    o = t[2];
                n /= 95.047, r /= 100, o /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
                const s = 116 * r - 16,
                    i = 500 * (n - r),
                    a = 200 * (r - o);
                return [s, i, a]
            }, b.hsl.rgb = function(e) {
                const t = e[0] / 360,
                    n = e[1] / 100,
                    r = e[2] / 100;
                let o, s, i;
                if (n === 0) return i = r * 255, [i, i, i];
                r < .5 ? o = r * (1 + n) : o = r + n - r * n;
                const a = 2 * r - o,
                    c = [0, 0, 0];
                for (let l = 0; l < 3; l++) s = t + 1 / 3 * -(l - 1), s < 0 && s++, s > 1 && s--, 6 * s < 1 ? i = a + (o - a) * 6 * s : 2 * s < 1 ? i = o : 3 * s < 2 ? i = a + (o - a) * (2 / 3 - s) * 6 : i = a, c[l] = i * 255;
                return c
            }, b.hsl.hsv = function(e) {
                const t = e[0];
                let n = e[1] / 100,
                    r = e[2] / 100,
                    o = n;
                const s = Math.max(r, .01);
                r *= 2, n *= r <= 1 ? r : 2 - r, o *= s <= 1 ? s : 2 - s;
                const i = (r + n) / 2,
                    a = r === 0 ? 2 * o / (s + o) : 2 * n / (r + n);
                return [t, a * 100, i * 100]
            }, b.hsv.rgb = function(e) {
                const t = e[0] / 60,
                    n = e[1] / 100;
                let r = e[2] / 100;
                const o = Math.floor(t) % 6,
                    s = t - Math.floor(t),
                    i = 255 * r * (1 - n),
                    a = 255 * r * (1 - n * s),
                    c = 255 * r * (1 - n * (1 - s));
                switch (r *= 255, o) {
                    case 0:
                        return [r, c, i];
                    case 1:
                        return [a, r, i];
                    case 2:
                        return [i, r, c];
                    case 3:
                        return [i, a, r];
                    case 4:
                        return [c, i, r];
                    case 5:
                        return [r, i, a]
                }
            }, b.hsv.hsl = function(e) {
                const t = e[0],
                    n = e[1] / 100,
                    r = e[2] / 100,
                    o = Math.max(r, .01);
                let s, i;
                i = (2 - n) * r;
                const a = (2 - n) * o;
                return s = n * o, s /= a <= 1 ? a : 2 - a, s = s || 0, i /= 2, [t, s * 100, i * 100]
            }, b.hwb.rgb = function(e) {
                const t = e[0] / 360;
                let n = e[1] / 100,
                    r = e[2] / 100;
                const o = n + r;
                let s;
                o > 1 && (n /= o, r /= o);
                const i = Math.floor(6 * t),
                    a = 1 - r;
                s = 6 * t - i, (i & 1) !== 0 && (s = 1 - s);
                const c = n + s * (a - n);
                let l, d, m;
                switch (i) {
                    default:
                        case 6:
                        case 0:
                        l = a,
                    d = c,
                    m = n;
                    break;
                    case 1:
                            l = c,
                        d = a,
                        m = n;
                        break;
                    case 2:
                            l = n,
                        d = a,
                        m = c;
                        break;
                    case 3:
                            l = n,
                        d = c,
                        m = a;
                        break;
                    case 4:
                            l = c,
                        d = n,
                        m = a;
                        break;
                    case 5:
                            l = a,
                        d = n,
                        m = c;
                        break
                }
                return [l * 255, d * 255, m * 255]
            }, b.cmyk.rgb = function(e) {
                const t = e[0] / 100,
                    n = e[1] / 100,
                    r = e[2] / 100,
                    o = e[3] / 100,
                    s = 1 - Math.min(1, t * (1 - o) + o),
                    i = 1 - Math.min(1, n * (1 - o) + o),
                    a = 1 - Math.min(1, r * (1 - o) + o);
                return [s * 255, i * 255, a * 255]
            }, b.xyz.rgb = function(e) {
                const t = e[0] / 100,
                    n = e[1] / 100,
                    r = e[2] / 100;
                let o, s, i;
                return o = t * 3.2406 + n * -1.5372 + r * -.4986, s = t * -.9689 + n * 1.8758 + r * .0415, i = t * .0557 + n * -.204 + r * 1.057, o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92, s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92, o = Math.min(Math.max(0, o), 1), s = Math.min(Math.max(0, s), 1), i = Math.min(Math.max(0, i), 1), [o * 255, s * 255, i * 255]
            }, b.xyz.lab = function(e) {
                let t = e[0],
                    n = e[1],
                    r = e[2];
                t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
                const o = 116 * n - 16,
                    s = 500 * (t - n),
                    i = 200 * (n - r);
                return [o, s, i]
            }, b.lab.xyz = function(e) {
                const t = e[0],
                    n = e[1],
                    r = e[2];
                let o, s, i;
                s = (t + 16) / 116, o = n / 500 + s, i = s - r / 200;
                const a = s ** 3,
                    c = o ** 3,
                    l = i ** 3;
                return s = a > .008856 ? a : (s - 16 / 116) / 7.787, o = c > .008856 ? c : (o - 16 / 116) / 7.787, i = l > .008856 ? l : (i - 16 / 116) / 7.787, o *= 95.047, s *= 100, i *= 108.883, [o, s, i]
            }, b.lab.lch = function(e) {
                const t = e[0],
                    n = e[1],
                    r = e[2];
                let o;
                o = Math.atan2(r, n) * 360 / 2 / Math.PI, o < 0 && (o += 360);
                const i = Math.sqrt(n * n + r * r);
                return [t, i, o]
            }, b.lch.lab = function(e) {
                const t = e[0],
                    n = e[1],
                    o = e[2] / 360 * 2 * Math.PI,
                    s = n * Math.cos(o),
                    i = n * Math.sin(o);
                return [t, s, i]
            }, b.rgb.ansi16 = function(e, t = null) {
                const [n, r, o] = e;
                let s = t === null ? b.rgb.hsv(e)[2] : t;
                if (s = Math.round(s / 50), s === 0) return 30;
                let i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
                return s === 2 && (i += 60), i
            }, b.hsv.ansi16 = function(e) {
                return b.rgb.ansi16(b.hsv.rgb(e), e[2])
            }, b.rgb.ansi256 = function(e) {
                const t = e[0],
                    n = e[1],
                    r = e[2];
                return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
            }, b.ansi16.rgb = function(e) {
                let t = e % 10;
                if (t === 0 || t === 7) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
                const n = (~~(e > 50) + 1) * .5,
                    r = (t & 1) * n * 255,
                    o = (t >> 1 & 1) * n * 255,
                    s = (t >> 2 & 1) * n * 255;
                return [r, o, s]
            }, b.ansi256.rgb = function(e) {
                if (e >= 232) {
                    const s = (e - 232) * 10 + 8;
                    return [s, s, s]
                }
                e -= 16;
                let t;
                const n = Math.floor(e / 36) / 5 * 255,
                    r = Math.floor((t = e % 36) / 6) / 5 * 255,
                    o = t % 6 / 5 * 255;
                return [n, r, o]
            }, b.rgb.hex = function(e) {
                const n = (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) + (Math.round(e[2]) & 255)).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }, b.hex.rgb = function(e) {
                const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t) return [0, 0, 0];
                let n = t[0];
                t[0].length === 3 && (n = n.split("").map(a => a + a).join(""));
                const r = parseInt(n, 16),
                    o = r >> 16 & 255,
                    s = r >> 8 & 255,
                    i = r & 255;
                return [o, s, i]
            }, b.rgb.hcg = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    r = e[2] / 255,
                    o = Math.max(Math.max(t, n), r),
                    s = Math.min(Math.min(t, n), r),
                    i = o - s;
                let a, c;
                return i < 1 ? a = s / (1 - i) : a = 0, i <= 0 ? c = 0 : o === t ? c = (n - r) / i % 6 : o === n ? c = 2 + (r - t) / i : c = 4 + (t - n) / i, c /= 6, c %= 1, [c * 360, i * 100, a * 100]
            }, b.hsl.hcg = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
                let o = 0;
                return r < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], r * 100, o * 100]
            }, b.hsv.hcg = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    r = t * n;
                let o = 0;
                return r < 1 && (o = (n - r) / (1 - r)), [e[0], r * 100, o * 100]
            }, b.hcg.rgb = function(e) {
                const t = e[0] / 360,
                    n = e[1] / 100,
                    r = e[2] / 100;
                if (n === 0) return [r * 255, r * 255, r * 255];
                const o = [0, 0, 0],
                    s = t % 1 * 6,
                    i = s % 1,
                    a = 1 - i;
                let c = 0;
                switch (Math.floor(s)) {
                    case 0:
                        o[0] = 1, o[1] = i, o[2] = 0;
                        break;
                    case 1:
                        o[0] = a, o[1] = 1, o[2] = 0;
                        break;
                    case 2:
                        o[0] = 0, o[1] = 1, o[2] = i;
                        break;
                    case 3:
                        o[0] = 0, o[1] = a, o[2] = 1;
                        break;
                    case 4:
                        o[0] = i, o[1] = 0, o[2] = 1;
                        break;
                    default:
                        o[0] = 1, o[1] = 0, o[2] = a
                }
                return c = (1 - n) * r, [(n * o[0] + c) * 255, (n * o[1] + c) * 255, (n * o[2] + c) * 255]
            }, b.hcg.hsv = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    r = t + n * (1 - t);
                let o = 0;
                return r > 0 && (o = t / r), [e[0], o * 100, r * 100]
            }, b.hcg.hsl = function(e) {
                const t = e[1] / 100,
                    r = e[2] / 100 * (1 - t) + .5 * t;
                let o = 0;
                return r > 0 && r < .5 ? o = t / (2 * r) : r >= .5 && r < 1 && (o = t / (2 * (1 - r))), [e[0], o * 100, r * 100]
            }, b.hcg.hwb = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    r = t + n * (1 - t);
                return [e[0], (r - t) * 100, (1 - r) * 100]
            }, b.hwb.hcg = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    r = 1 - n,
                    o = r - t;
                let s = 0;
                return o < 1 && (s = (r - o) / (1 - o)), [e[0], o * 100, s * 100]
            }, b.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }, b.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }, b.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }, b.gray.hsl = function(e) {
                return [0, 0, e[0]]
            }, b.gray.hsv = b.gray.hsl, b.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }, b.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }, b.gray.lab = function(e) {
                return [e[0], 0, 0]
            }, b.gray.hex = function(e) {
                const t = Math.round(e[0] / 100 * 255) & 255,
                    r = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(r.length) + r
            }, b.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            };
            const Cr = zm;

            function my() {
                const e = {},
                    t = Object.keys(Cr);
                for (let n = t.length, r = 0; r < n; r++) e[t[r]] = {
                    distance: -1,
                    parent: null
                };
                return e
            }

            function py(e) {
                const t = my(),
                    n = [e];
                for (t[e].distance = 0; n.length;) {
                    const r = n.pop(),
                        o = Object.keys(Cr[r]);
                    for (let s = o.length, i = 0; i < s; i++) {
                        const a = o[i],
                            c = t[a];
                        c.distance === -1 && (c.distance = t[r].distance + 1, c.parent = r, n.unshift(a))
                    }
                }
                return t
            }

            function hy(e, t) {
                return function(n) {
                    return t(e(n))
                }
            }

            function gy(e, t) {
                const n = [t[e].parent, e];
                let r = Cr[t[e].parent][e],
                    o = t[e].parent;
                for (; t[o].parent;) n.unshift(t[o].parent), r = hy(Cr[t[o].parent][o], r), o = t[o].parent;
                return r.conversion = n, r
            }
            var by = function(e) {
                const t = py(e),
                    n = {},
                    r = Object.keys(t);
                for (let o = r.length, s = 0; s < o; s++) {
                    const i = r[s];
                    t[i].parent !== null && (n[i] = gy(i, t))
                }
                return n
            };
            const qi = zm,
                yy = by,
                St = {},
                vy = Object.keys(qi);

            function wy(e) {
                const t = function(...n) {
                    const r = n[0];
                    return r == null ? r : (r.length > 1 && (n = r), e(n))
                };
                return "conversion" in e && (t.conversion = e.conversion), t
            }

            function jy(e) {
                const t = function(...n) {
                    const r = n[0];
                    if (r == null) return r;
                    r.length > 1 && (n = r);
                    const o = e(n);
                    if (typeof o == "object")
                        for (let s = o.length, i = 0; i < s; i++) o[i] = Math.round(o[i]);
                    return o
                };
                return "conversion" in e && (t.conversion = e.conversion), t
            }
            vy.forEach(e => {
                St[e] = {}, Object.defineProperty(St[e], "channels", {
                    value: qi[e].channels
                }), Object.defineProperty(St[e], "labels", {
                    value: qi[e].labels
                });
                const t = yy(e);
                Object.keys(t).forEach(r => {
                    const o = t[r];
                    St[e][r] = jy(o), St[e][r].raw = wy(o)
                })
            });
            var tt = St,
                Ly = Object.defineProperty,
                B = (e, t) => Ly(e, "name", {
                    value: t,
                    configurable: !0
                });

            function xr() {
                return [Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0), Math.floor(Math.random() * (255 - 0) + 0)]
            }
            B(xr, "randomRGBColor");

            function Et(e, t) {
                const n = tt.rgb.hsl(t);
                e.style.setProperty("--label-r", t[0].toString()), e.style.setProperty("--label-g", t[1].toString()), e.style.setProperty("--label-b", t[2].toString()), e.style.setProperty("--label-h", n[0].toString()), e.style.setProperty("--label-s", n[1].toString()), e.style.setProperty("--label-l", n[2].toString())
            }
            B(Et, "setColorSwatch");

            function Ar(e, t) {
                e.blur();
                const n = e.closest("form"),
                    r = n.querySelector(".js-new-label-color-input");
                De(r, `#${tt.rgb.hex(t)}`);
                const o = n.querySelector(".js-new-label-color");
                Et(o, t)
            }
            B(Ar, "setInputColorFromButton");

            function Vm(e, t) {
                e.closest(".js-label-error-container").classList.add("errored"), e.textContent = t, e.hidden = !1
            }
            B(Vm, "addErrorToField");

            function Km(e) {
                e.closest(".js-label-error-container").classList.remove("errored"), e.hidden = !0
            }
            B(Km, "removeErrorFromField");

            function nt(e, t, n) {
                const r = t.querySelector(e);
                !r || (n ? Vm(r, n[0]) : Km(r))
            }
            B(nt, "showOrHideLabelError");

            function Pr(e, t) {
                nt(".js-label-name-error", e, t.name), nt(".js-label-description-error", e, t.description), nt(".js-label-color-error", e, t.color)
            }
            B(Pr, "showLabelErrors");

            function Ie(e) {
                nt(".js-label-name-error", e, null), nt(".js-label-description-error", e, null), nt(".js-label-color-error", e, null)
            }
            B(Ie, "hideLabelErrors");

            function Xm(e, t, n, r, o) {
                const s = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                    i = new URLSearchParams(s.search.slice(1));
                return i.append("color", n), r && i.append("description", r), o && i.append("id", o), s.search = i.toString(), s.toString()
            }
            B(Xm, "labelPreviewUrl");

            function Gm(e) {
                let t = null;
                const n = e.querySelector(".js-new-label-description-input");
                return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t
            }
            B(Gm, "labelDescriptionFrom");

            function Jm(e) {
                const t = e.querySelector(".js-new-label-color-input");
                return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
            }
            B(Jm, "labelColorFrom");

            function Qm(e, t) {
                let r = e.querySelector(".js-new-label-name-input").value.trim();
                return r.length < 1 && (r = t.getAttribute("data-default-name")), r
            }
            B(Qm, "labelNameFrom");
            async function rt(e) {
                const t = e.closest(".js-label-preview-container");
                if (!t) return;
                const n = e.closest(".js-label-form"),
                    r = n.querySelector(".js-new-label-error"),
                    o = n.getAttribute("data-label-id"),
                    s = t.querySelector(".js-label-preview"),
                    i = Qm(n, s);
                if (!n.checkValidity() && i !== "Label preview") return;
                const a = Jm(n),
                    c = Gm(n),
                    l = s.getAttribute("data-url-template"),
                    d = Xm(l, i, a, c, o);
                if (t.hasAttribute("data-last-preview-url")) {
                    const h = t.getAttribute("data-last-preview-url");
                    if (d === h) return
                }
                let m;
                try {
                    m = await K(document, d)
                } catch (h) {
                    const g = await h.response.json();
                    Pr(n, g), r && (r.textContent = g.message, r.hidden = !1);
                    return
                }
                r && (r.textContent = "", r.hidden = !0), Ie(n), s.innerHTML = "", s.appendChild(m), t.setAttribute("data-last-preview-url", d)
            }
            B(rt, "updateLabelPreview");

            function Ym(e) {
                rt(e.target)
            }
            B(Ym, "onLabelFormInputChange");

            function Mi(e, t) {
                e.closest(".js-details-container").classList.toggle("is-empty", t)
            }
            B(Mi, "toggleBlankSlate");

            function $i(e) {
                const t = document.querySelector(".js-labels-count"),
                    r = Number(t.textContent) + e;
                t.textContent = r.toString();
                const o = document.querySelector(".js-labels-label");
                return o.textContent = o.getAttribute(r === 1 ? "data-singular-string" : "data-plural-string"), r
            }
            B($i, "updateCount"), ce(".js-label-filter-field", function(e) {
                const t = e.target,
                    r = t.closest("details-menu").querySelector(".js-new-label-name");
                if (!r) return;
                const o = t.value.trim();
                r.textContent = o
            }), f("filterable:change", ".js-filterable-issue-labels", function(e) {
                const t = e.currentTarget.closest("details-menu"),
                    n = t.querySelector(".js-add-label-button");
                if (!n) return;
                const o = e.detail.inputField.value.trim().toLowerCase();
                let s = !1;
                for (const i of t.querySelectorAll("input[data-label-name]"))
                    if ((i.getAttribute("data-label-name") || "").toLowerCase() === o) {
                        s = !0;
                        break
                    }
                n.hidden = o.length === 0 || s
            }), xt(".js-new-label-color-input", function(e) {
                const n = e.closest("form").querySelector(".js-new-label-swatches");
                n.hidden = !1, e.addEventListener("blur", function() {
                    n.hidden = !0
                }, {
                    once: !0
                })
            }), ce(".js-new-label-color-input", function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (!(n.length < 1))
                    if (n.indexOf("#") !== 0 && (n = `#${n}`, t.value = n), t.checkValidity()) {
                        t.classList.remove("color-fg-danger");
                        const o = t.closest("form").querySelector(".js-new-label-color");
                        Et(o, tt.hex.rgb(n))
                    } else t.classList.add("color-fg-danger")
            }), W("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (n.indexOf("#") !== 0 && (n = `#${n}`, t.value = n), t.checkValidity()) {
                    const s = t.closest("form").querySelector(".js-new-label-color");
                    Et(s, tt.hex.rgb(n))
                }
                v(t, "change", !1);
                const r = t.closest("form");
                Ie(r)
            }), W("keyup", ".js-new-label-description-input", function(e) {
                const n = e.target.form;
                Ie(n)
            }), W("keyup", ".js-new-label-color-input", function(e) {
                const n = e.target.form;
                Ie(n)
            }), f("click", ".js-new-label-color", async function(e) {
                const t = e.currentTarget,
                    n = xr();
                Ar(t, n), rt(t)
            }), f("mousedown", ".js-new-label-color-swatch", function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-color");
                Ar(t, tt.hex.rgb(n)), rt(t);
                const r = t.closest(".js-new-label-swatches");
                r.hidden = !0
            }), f("toggle", ".js-new-label-modal", function(e) {
                e.target.hasAttribute("open") && Ii(e.target)
            }, {
                capture: !0
            });
            async function Ii(e) {
                const t = e.querySelector(".js-new-label-name-input");
                if (!t) return;
                const n = e.querySelector(".js-new-label-color-input"),
                    r = xr(),
                    o = `#${tt.rgb.hex(r)}`;
                n.value = o;
                const s = e.querySelector(".js-new-label-color");
                Et(s, r);
                const a = document.querySelector(".js-new-label-name").textContent;
                De(t, a), ya(t), rt(s)
            }
            B(Ii, "initLabelModal"), C(".js-new-label-modal-form", async function(e, t) {
                const n = e.querySelector(".js-new-label-error");
                let r;
                try {
                    r = await t.html()
                } catch (a) {
                    const c = a.response.json;
                    n.textContent = c.message, n.hidden = !1
                }
                if (!r) return;
                n.hidden = !0, document.querySelector(".js-new-label-modal").removeAttribute("open");
                const o = document.querySelector(".js-filterable-issue-labels"),
                    s = r.html.querySelector("input");
                o.prepend(r.html), s && s.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const i = document.querySelector(".js-label-filter-field");
                i.value = i.defaultValue, i.focus()
            }), f("click", ".js-edit-label-cancel", function(e) {
                const t = e.target.closest("form");
                Ie(t), t.reset();
                const n = t.querySelector(".js-new-label-color-input"),
                    r = n.value,
                    o = t.querySelector(".js-new-label-color");
                Et(o, tt.hex.rgb(r)), Xr(t), rt(n);
                const s = e.currentTarget.closest(".js-labels-list-item");
                if (s) {
                    s.querySelector(".js-update-label").classList.add("d-none");
                    const a = s.querySelector(".js-label-preview");
                    a && (a.classList.add("d-none"), s.querySelector(".js-label-link").classList.remove("d-none"));
                    const c = s.querySelectorAll(".js-hide-on-label-edit");
                    for (const l of c) l.hidden = !l.hidden
                }
            }), C(".js-update-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    const s = o.response.json;
                    Pr(e, s);
                    return
                }
                Ie(e), e.closest(".js-labels-list-item").replaceWith(n.html)
            }), C(".js-create-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (i) {
                    const a = i.response.json;
                    Pr(e, a);
                    return
                }
                e.reset(), Ie(e), document.querySelector(".js-label-list").prepend(n.html), $i(1), Mi(e, !1);
                const r = e.querySelector(".js-new-label-color"),
                    o = xr();
                Ar(r, o), rt(e.querySelector(".js-new-label-name-input")), Xr(e);
                const s = e.closest(".js-details-container");
                s instanceof HTMLElement && Vr(s)
            }), f("click", ".js-details-target-new-label", function() {
                document.querySelector(".js-create-label").querySelector(".js-new-label-name-input").focus()
            }), f("click", ".js-edit-label", function(e) {
                const t = e.currentTarget.closest(".js-labels-list-item"),
                    n = t.querySelector(".js-update-label");
                n.classList.remove("d-none"), n.querySelector(".js-new-label-name-input").focus();
                const o = t.querySelector(".js-label-preview");
                o && (o.classList.remove("d-none"), t.querySelector(".js-label-link").classList.add("d-none"));
                const s = t.querySelectorAll(".js-hide-on-label-edit");
                for (const i of s) i.hidden = !i.hidden
            }), C(".js-delete-label", async function(e, t) {
                const n = e.closest(".js-labels-list-item");
                n.querySelector(".js-label-delete-spinner").hidden = !1, await t.text();
                const r = $i(-1);
                Mi(e, r === 0), n.remove()
            });
            const qr = We(Ym, 500);
            f("suggester:complete", ".js-new-label-name-input", qr), ce(".js-new-label-name-input", qr), ce(".js-new-label-description-input", qr), ce(".js-new-label-color-input", qr), W("keypress", ".js-new-label-name-input", function(e) {
                const t = e.target,
                    n = parseInt(t.getAttribute("data-maxlength"));
                va(t.value) >= n && e.preventDefault()
            }), f("click", ".js-issues-label-select-menu-item", function(e) {
                !e.altKey && !e.shiftKey || (e.preventDefault(), e.stopPropagation(), e.altKey && (window.location.href = e.currentTarget.getAttribute("data-excluded-url")), e.shiftKey && (window.location.href = e.currentTarget.getAttribute("data-included-url")))
            }), W("keydown", ".js-issues-label-select-menu-item", function(e) {
                if (e.key !== "Enter" || !e.altKey && !e.shiftKey) return;
                const t = e.currentTarget;
                e.preventDefault(), e.stopPropagation(), t instanceof HTMLAnchorElement && (e.altKey && (window.location.href = t.getAttribute("data-excluded-url")), e.shiftKey && (window.location.href = t.getAttribute("data-included-url")))
            }), f("click", ".js-open-label-creation-modal", async function(e) {
                e.stopImmediatePropagation();
                const t = await he({
                    content: document.querySelector(".js-label-creation-template").content.cloneNode(!0),
                    detailsClass: "js-new-label-modal"
                });
                Ii(t)
            }, {
                capture: !0
            });
            var Sy = Object.defineProperty,
                Ey = (e, t) => Sy(e, "name", {
                    value: t,
                    configurable: !0
                });
            f("change", ".js-thread-notification-setting", Mr), f("change", ".js-custom-thread-notification-option", Mr), f("reset", ".js-custom-thread-settings-form", Mr);

            function Mr() {
                const e = document.querySelector(".js-reveal-custom-thread-settings").checked,
                    t = !document.querySelector(".js-custom-thread-notification-option:checked"),
                    n = document.querySelector(".js-custom-thread-settings"),
                    r = document.querySelector("[data-custom-option-required-text]"),
                    o = e && t ? r.getAttribute("data-custom-option-required-text") : "";
                r.setCustomValidity(o), n.hidden = !e
            }
            Ey(Mr, "toggleEventSettings");
            var Zm = Object.defineProperty,
                ky = Object.getOwnPropertyDescriptor,
                _y = (e, t) => Zm(e, "name", {
                    value: t,
                    configurable: !0
                }),
                ep = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? ky(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && Zm(t, n, o), o
                };
            let $r = class extends HTMLElement {
                get activeClass() {
                    return this.getAttribute("active-class") || "collapsible-sidebar-widget-active"
                }
                get loadingClass() {
                    return this.getAttribute("loading-class") || "collapsible-sidebar-widget-loading"
                }
                get url() {
                    return this.getAttribute("url") || ""
                }
                get isOpen() {
                    return this.hasAttribute("open")
                }
                set isOpen(e) {
                    e ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                onKeyDown(e) {
                    if (e.code === "Enter" || e.code === "Space") return e.preventDefault(), this.load()
                }
                onMouseDown(e) {
                    return e.preventDefault(), this.load()
                }
                load() {
                    return this.pendingRequest ? this.pendingRequest.abort() : this.collapsible.hasAttribute("loaded") ? this.isOpen ? this.setClose() : this.setOpen() : (this.setLoading(), this.updateCollapsible())
                }
                setLoading() {
                    this.classList.add(this.loadingClass), this.classList.remove(this.activeClass)
                }
                setOpen() {
                    this.classList.add(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !0
                }
                setClose() {
                    this.classList.remove(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !1
                }
                handleAbort() {
                    this.pendingRequest = null, this.setClose()
                }
                async updateCollapsible() {
                    var e;
                    try {
                        this.pendingRequest = new AbortController, this.pendingRequest.signal.addEventListener("abort", () => this.handleAbort());
                        const t = await fetch(this.url, {
                            signal: (e = this.pendingRequest) == null ? void 0 : e.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (this.pendingRequest = null, !t.ok) return this.setClose();
                        const n = await t.text();
                        this.collapsible.innerHTML = n, this.collapsible.setAttribute("loaded", ""), this.setOpen()
                    } catch {
                        return this.pendingRequest = null, this.setClose()
                    }
                }
            };
            _y($r, "CollapsibleSidebarWidgetElement"), ep([P], $r.prototype, "collapsible", 2), $r = ep([te], $r);
            var tp = Object.defineProperty,
                Ty = Object.getOwnPropertyDescriptor,
                Cy = (e, t) => tp(e, "name", {
                    value: t,
                    configurable: !0
                }),
                _e = (e, t, n, r) => {
                    for (var o = r > 1 ? void 0 : r ? Ty(t, n) : t, s = e.length - 1, i; s >= 0; s--)(i = e[s]) && (o = (r ? i(t, n, o) : i(o)) || o);
                    return r && o && tp(t, n, o), o
                };
            let se = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.url = "", this.csrf = "", this.instrument = "", this.column = 1
                }
                get isDisabled() {
                    var e;
                    return (e = this.read) == null ? void 0 : e.hasAttribute("disabled")
                }
                set hasErrored(e) {
                    e ? this.setAttribute("errored", "") : this.removeAttribute("errored")
                }
                set disabled(e) {
                    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get hasExpanded() {
                    return this.read.getAttribute("aria-expanded") === "true"
                }
                connectedCallback() {
                    var e, t;
                    this.disabled = (t = (e = this.read) == null ? void 0 : e.disabled) != null ? t : !0, this.querySelector("details") !== null && this.classList.toggle("no-pointer")
                }
                handleDetailsSelect(e) {
                    var t;
                    const n = e,
                        r = e.target,
                        o = (t = n.detail) == null ? void 0 : t.relatedTarget,
                        s = r.closest("details"),
                        i = s == null ? void 0 : s.querySelector("[data-menu-button]");
                    if (o.getAttribute("aria-checked") === "true") {
                        o.setAttribute("aria-checked", "false"), e.preventDefault();
                        for (const a of this.inputs)
                            if (o.contains(a)) {
                                this.updateCell(a.name, ""), (i == null ? void 0 : i.innerHTML) && (i.innerHTML = a.placeholder);
                                break
                            }
                        s == null || s.removeAttribute("open")
                    }
                }
                handleDetailsSelected(e) {
                    var t;
                    const r = (t = e.detail) == null ? void 0 : t.relatedTarget;
                    for (const o of this.inputs)
                        if (r.contains(o)) {
                            this.updateCell(o.name, o.value);
                            break
                        }
                }
                mouseDownFocus(e) {
                    !this.isDisabled || this.onFocus(e)
                }
                keyDownFocus(e) {
                    (e.code === "Enter" || e.code === "Space") && this.read !== document.activeElement && this.onFocus(e)
                }
                onChange(e) {
                    var t, n;
                    e.target.getAttribute("type") !== "date" && this.updateCell((t = this.read) == null ? void 0 : t.name, (n = this.read) == null ? void 0 : n.value)
                }
                onFocus(e) {
                    e.preventDefault(), this.disabled = !1, this.read.disabled = !1, this.read.focus()
                }
                onBlur(e) {
                    var t, n;
                    if (this.hasExpanded) {
                        e.preventDefault();
                        return
                    }
                    e.target.getAttribute("type") === "date" && this.updateCell((t = this.read) == null ? void 0 : t.name, (n = this.read) == null ? void 0 : n.value), this.read.disabled = !0, this.disabled = !0
                }
                onKeyDown(e) {
                    if (e.code === "Enter" || e.code === "Tab") {
                        if (e.preventDefault(), e.stopPropagation(), this.hasExpanded) return;
                        this.read.blur()
                    }
                }
                async updateCell(e = "", t = "") {
                    const n = new FormData;
                    n.set(e, t), n.set("ui", this.instrument);
                    for (const o of this.parameters) n.set(o.name, o.value);
                    const r = Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC"
                    });
                    try {
                        if (this.write) {
                            const d = this.read.value,
                                m = this.read.type === "date" && d ? r.format(Date.parse(d)) : d;
                            this.write.textContent = d ? m : this.read.placeholder
                        }
                        const o = await fetch(this.url, {
                            method: "PUT",
                            body: n,
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest",
                                "Scoped-CSRF-Token": `${this.csrf}`
                            }
                        });
                        if (!o.ok) throw new Error("connection error");
                        if (!this.write) return;
                        const a = (await o.json()).memexProjectItem.memexProjectColumnValues.find(d => d.memexProjectColumnId === Number(this.column)).value,
                            c = this.read.type === "date" ? Date.parse(a.value) : a.html,
                            l = this.read.type === "date" && c ? r.format(c) : c;
                        this.write.innerHTML = t ? l : this.read.placeholder
                    } catch {
                        this.hasErrored = !0
                    }
                }
            };
            Cy(se, "SidebarMemexInputElement"), _e([de], se.prototype, "url", 2), _e([de], se.prototype, "csrf", 2), _e([de], se.prototype, "instrument", 2), _e([de], se.prototype, "column", 2), _e([Ce], se.prototype, "inputs", 2), _e([P], se.prototype, "read", 2), _e([P], se.prototype, "write", 2), _e([Ce], se.prototype, "parameters", 2), se = _e([te], se);
            var xy = Object.defineProperty,
                ie = (e, t) => xy(e, "name", {
                    value: t,
                    configurable: !0
                });

            function kt(e, t = !1) {
                (t || !rp(e)) && (e instanceof HTMLFormElement ? U(e) : gn(e))
            }
            ie(kt, "submitForm");

            function Ri(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form");
                kt(n)
            }
            ie(Ri, "submitOnMenuClose"), f("details-menu-selected", ".js-discussion-sidebar-menu", function(e) {
                const t = e.detail.relatedTarget,
                    n = e.currentTarget,
                    r = t.closest(".js-issue-sidebar-form"),
                    o = n.hasAttribute("data-multiple");
                if (t.hasAttribute("data-clear-assignees")) {
                    const s = n.querySelectorAll('input[name="issue[user_assignee_ids][]"]:checked');
                    for (const i of s) i.disabled = !1, i.checked = !1;
                    kt(r)
                } else o ? n.closest("details").addEventListener("toggle", Ri, {
                    once: !0
                }) : kt(r)
            }, {
                capture: !0
            });

            function np(e, t) {
                e.replaceWith(ae(document, t))
            }
            ie(np, "updateSidebar"), C(".js-issue-sidebar-form", async function(e, t) {
                const n = await t.html();
                e.closest(".js-discussion-sidebar-item").replaceWith(n.html)
            }), f("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-issue-sidebar-form");
                gn(n, "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), f("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
                var t;
                const n = e.currentTarget,
                    r = n.closest(".js-issue-sidebar-form");
                gn(r, "post", {
                    name: n.name,
                    value: n.value
                }), n.remove(), (t = document.querySelector("form#new_issue .is-submit-button-value")) == null || t.remove(), e.preventDefault()
            }), f("click", ".js-issue-unassign-self", function(e) {
                const t = e.currentTarget.closest(".js-issue-sidebar-form");
                gn(t, "delete"), e.preventDefault()
            }), C(".js-pages-preview-toggle-form", async function(e, t) {
                const n = await t.json();
                e.querySelector("button.btn").textContent = n.json.new_button_value
            });
            async function gn(e, t = "post", n) {
                const r = Fi(e);
                n && r.append(n.name, n.value);
                const o = e.getAttribute("data-url");
                if (!o) return;
                const s = e.querySelector(".js-data-url-csrf"),
                    i = await fetch(o, {
                        method: t,
                        body: t === "delete" ? "" : r,
                        mode: "same-origin",
                        headers: {
                            "Scoped-CSRF-Token": s.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                if (!i.ok) return;
                const a = await i.text();
                np(e.closest(".js-discussion-sidebar-item"), a)
            }
            ie(gn, "previewSubmit");

            function rp(e) {
                const t = e.getAttribute("data-reviewers-team-size-check-url");
                if (!t) return !1;
                const n = [...document.querySelectorAll(".js-reviewer-team")].map(a => a.getAttribute("data-id")),
                    r = e instanceof HTMLFormElement ? new FormData(e) : Fi(e),
                    s = new URLSearchParams(r).getAll("reviewer_team_ids[]").filter(a => !n.includes(a));
                if (s.length === 0) return !1;
                const i = new URLSearchParams(s.map(a => ["reviewer_team_ids[]", a]));
                return op(e, `${t}?${i}`), !0
            }
            ie(rp, "reviewerTeamsCheckRequired");
            async function op(e, t) {
                const n = await fetch(t);
                if (!n.ok) return;
                const r = await n.text();
                if (r.match(/[^\w-]js-large-team[^\w-]/)) sp(e, r);
                else {
                    kt(e, !0);
                    return
                }
            }
            ie(op, "triggerTeamReviewerCheck");

            function sp(e, t) {
                const n = e.querySelector(".js-large-teams-check-warning-container");
                for (; n.firstChild;) n.removeChild(n.firstChild);
                n.appendChild(ae(document, t));
                const r = n.querySelector("details");

                function o(s) {
                    if (s.target instanceof Element) {
                        if (r.open = !1, !s.target.classList.contains("js-large-teams-request-button")) {
                            const i = e.querySelectorAll("input[name='reviewer_team_ids[]']");
                            for (const a of i) n.querySelector(`.js-large-team[data-id='${a.value}']`) && (a.checked = !1)
                        }
                        kt(e, !0), s.preventDefault()
                    }
                }
                ie(o, "dialogAction"), n.querySelector(".js-large-teams-request-button").addEventListener("click", o, {
                    once: !0
                }), n.querySelector(".js-large-teams-do-not-request-button").addEventListener("click", o, {
                    once: !0
                }), r.addEventListener("details-dialog-close", o, {
                    once: !0
                }), r.open = !0
            }
            ie(sp, "showTeamReviewerConfirmationDialog"), f("click", "div.js-project-column-menu-container .js-project-column-menu-item button", async function(e) {
                const t = e.currentTarget;
                ip(t);
                const n = t.getAttribute("data-url"),
                    r = t.parentElement.querySelector(".js-data-url-csrf"),
                    o = t.getAttribute("data-card-id"),
                    s = new FormData;
                if (s.append("card_id", o), s.append("use_automation_prioritization", "true"), e.preventDefault(), !(await fetch(n, {
                        method: "PUT",
                        mode: "same-origin",
                        body: s,
                        headers: {
                            "Scoped-CSRF-Token": r.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok) return;
                const a = document.activeElement,
                    c = t.closest(".js-project-column-menu-dropdown");
                if (a && c.contains(a)) try {
                    a.blur()
                } catch {}
            });

            function ip(e) {
                const n = e.closest(".js-project-column-menu-dropdown").querySelector(".js-project-column-menu-summary"),
                    r = e.getAttribute("data-column-name");
                n.textContent = r
            }
            ie(ip, "updateProjectColumnMenuSummary"), f("click", ".js-prompt-dismiss", function(e) {
                e.currentTarget.closest(".js-prompt").remove()
            });

            function Fi(e) {
                const t = e.closest("form"),
                    r = new FormData(t).entries(),
                    o = new FormData;
                for (const [s, i] of r) t.contains(ap(t, s, i.toString())) && o.append(s, i);
                return o
            }
            ie(Fi, "scopedFormData");

            function ap(e, t, n) {
                for (const r of e.elements)
                    if ((r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r instanceof HTMLButtonElement) && r.name === t && r.value === n) return r;
                return null
            }
            ie(ap, "findParam"), f("click", ".js-convert-to-draft", function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf");
                fetch(t, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": n.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }), f("click", "div.js-restore-item", async function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.getAttribute("data-column"),
                    r = e.currentTarget.querySelector(".js-data-url-csrf"),
                    o = new FormData;
                if (o.set("memexProjectItemIds[]", n), !(await fetch(t, {
                        method: "PUT",
                        mode: "same-origin",
                        body: o,
                        headers: {
                            "Scoped-CSRF-Token": r.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok) throw new Error("connection error");
                Ri(e)
            }), w("launch-code", () => y.import("./chunk-launch-code-element.js")), w("metric-selection", () => y.import("./chunk-metric-selection-element.js")), w("severity-calculator", () => y.import("./chunk-severity-calculator-element.js")), w("command-palette-page", () => y.import("./chunk-command-palette-page-element.js")), w("command-palette-page-stack", () => y.import("./chunk-command-palette-page-stack-element.js")), w("readme-toc", () => y.import("./chunk-readme-toc-element.js")), w("delayed-loading", () => y.import("./chunk-delayed-loading-element.js")), w("feature-callout", () => y.import("./chunk-feature-callout-element.js")), w("codespaces-policy-form", () => y.import("./chunk-codespaces-policy-form-element.js")), w("action-list", () => y.import("./chunk-action-list-element.js")), w("navigation-list", () => y.import("./chunk-navigation-list-element.js")), w("file-filter", () => y.import("./chunk-file-filter-element.js")), w("file-tree", () => y.import("./chunk-file-tree-element.js")), w("file-tree-toggle", () => y.import("./chunk-file-tree-toggle-element.js")), w("memex-project-picker", () => y.import("./chunk-memex-project-picker-element.js")), w("project-picker", () => y.import("./chunk-project-picker-element.js")), w("profile-pins", () => y.import("./chunk-profile-pins-element.js")), w("emoji-picker", () => y.import("./chunk-emoji-picker-element.js")), w("edit-hook-secret", () => y.import("./chunk-edit-hook-secret-element.js")), w("insights-query", () => y.import("./chunk-insights-query.js")), w("remote-clipboard-copy", () => y.import("./chunk-remote-clipboard-copy.js")), w("series-table", () => y.import("./chunk-series-table.js")), w("line-chart", () => y.import("./chunk-line-chart.js")), w("bar-chart", () => y.import("./chunk-bar-chart.js")), w("column-chart", () => y.import("./chunk-column-chart.js")), w("stacked-area-chart", () => y.import("./chunk-stacked-area-chart.js")), w("presence-avatars", () => y.import("./chunk-presence-avatars.js")), w("pulse-authors-graph", () => y.import("./chunk-pulse-authors-graph-element.js")), w("stacks-input-config-view", () => y.import("./chunk-stacks-input-config-view.js")), w("community-contributions-graph", () => y.import("./chunk-community-contributions.js")), w("discussion-page-views-graph", () => y.import("./chunk-discussion-page-views.js")), w("discussions-daily-contributors", () => y.import("./chunk-discussions-daily-contributors.js")), w("discussions-new-contributors", () => y.import("./chunk-discussions-new-contributors.js")), w("code-frequency-graph", () => y.import("./chunk-code-frequency-graph-element.js")), w("contributors-graph", () => y.import("./chunk-contributors-graph-element.js")), w("org-insights-graph", () => y.import("./chunk-org-insights-graph-element.js")), w("traffic-clones-graph", () => y.import("./chunk-traffic-clones-graph-element.js")), w("traffic-visitors-graph", () => y.import("./chunk-traffic-visitors-graph-element.js")), w("commit-activity-graph", () => y.import("./chunk-commit-activity-graph-element.js")), w("marketplace-insights-graph", () => y.import("./chunk-marketplace-insights-graph-element.js")), w("reload-after-polling", () => y.import("./chunk-reload-after-polling-element.js")), w("package-dependencies-security-graph", () => y.import("./chunk-package-dependencies-security-graph-element.js")), w("premium-sponsors-graph", () => y.import("./chunk-premium-sponsors-graph-element.js")), w(".js-sub-dependencies", () => y.import("./chunk-dependencies.js")), w("network-graph", () => y.import("./chunk-network-graph-element.js")), w("business-audit-log-map", () => y.import("./chunk-business-audit-log-map-element.js"))
        }
    }
});
//# sourceMappingURL=behaviors-b556811f.js.map