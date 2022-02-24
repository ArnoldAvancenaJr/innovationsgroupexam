System.register([], function(b) {
    "use strict";
    return {
        execute: function() {
            b({
                $: oo,
                A: cr,
                B: Fs,
                D: Hs,
                E: lr,
                F: yi,
                G: bi,
                H: vi,
                I: wi,
                N: be,
                R: no,
                S: y,
                U: to,
                a: Ss,
                a0: Wn,
                a1: Xr,
                a3: ao,
                a4: Ut,
                a5: je,
                a9: er,
                b: Bs,
                c: Zs,
                d: tr,
                f: ks,
                h: Re,
                i: Gs,
                j: zt,
                k: qr,
                l: Ir,
                m: Rr,
                n: Gr,
                o: ms,
                q: Tr,
                r: ur,
                s: kr,
                t: js,
                v: Ur,
                w: $r,
                x: Fr,
                y: zr,
                z: Ar
            });

            function y() {
                if (!(this instanceof y)) return new y;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            var V = window.document.documentElement,
                Bn = V.matches || V.webkitMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector || V.msMatchesSelector;
            y.prototype.matchesSelector = function(t, e) {
                return Bn.call(t, e)
            }, y.prototype.querySelectorAll = function(t, e) {
                return e.querySelectorAll(t)
            }, y.prototype.indexes = [];
            var Kn = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            y.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var n;
                    if (n = e.match(Kn)) return n[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var Gn = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            y.prototype.indexes.push({
                name: "CLASS",
                selector: function(e) {
                    var n;
                    if (n = e.match(Gn)) return n[0].slice(1)
                },
                element: function(e) {
                    var n = e.className;
                    if (n) {
                        if (typeof n == "string") return n.split(/\s/);
                        if (typeof n == "object" && "baseVal" in n) return n.baseVal.split(/\s/)
                    }
                }
            });
            var zn = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            y.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var n;
                    if (n = e.match(zn)) return n[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), y.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            };
            var ke;
            typeof window.Map == "function" ? ke = window.Map : ke = function() {
                function t() {
                    this.map = {}
                }
                return t.prototype.get = function(e) {
                    return this.map[e + " "]
                }, t.prototype.set = function(e, n) {
                    this.map[e + " "] = n
                }, t
            }();
            var ut = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function dt(t, e) {
                t = t.slice(0).concat(t.default);
                var n = t.length,
                    s, r, i, o, a = e,
                    c, l, d = [];
                do
                    if (ut.exec(""), (i = ut.exec(a)) && (a = i[3], i[2] || !a)) {
                        for (s = 0; s < n; s++)
                            if (l = t[s], c = l.selector(i[1])) {
                                for (r = d.length, o = !1; r--;)
                                    if (d[r].index === l && d[r].key === c) {
                                        o = !0;
                                        break
                                    }
                                o || d.push({
                                    index: l,
                                    key: c
                                });
                                break
                            }
                    }
                while (i);
                return d
            }

            function Jn(t, e) {
                var n, s, r;
                for (n = 0, s = t.length; n < s; n++)
                    if (r = t[n], e.isPrototypeOf(r)) return r
            }
            y.prototype.logDefaultIndexUsed = function() {}, y.prototype.add = function(t, e) {
                var n, s, r, i, o, a, c, l, d = this.activeIndexes,
                    u = this.selectors;
                if (typeof t == "string") {
                    for (n = {
                            id: this.uid++,
                            selector: t,
                            data: e
                        }, c = dt(this.indexes, t), s = 0; s < c.length; s++) l = c[s], i = l.key, r = l.index, o = Jn(d, r), o || (o = Object.create(r), o.map = new ke, d.push(o)), r === this.indexes.default && this.logDefaultIndexUsed(n), a = o.map.get(i), a || (a = [], o.map.set(i, a)), a.push(n);
                    this.size++, u.push(t)
                }
            }, y.prototype.remove = function(t, e) {
                if (typeof t == "string") {
                    var n, s, r, i, o, a, c, l, d = this.activeIndexes,
                        u = {},
                        m = arguments.length === 1;
                    for (n = dt(this.indexes, t), r = 0; r < n.length; r++)
                        for (s = n[r], i = d.length; i--;)
                            if (a = d[i], s.index.isPrototypeOf(a)) {
                                if (c = a.map.get(s.key), c)
                                    for (o = c.length; o--;) l = c[o], l.selector === t && (m || l.data === e) && (c.splice(o, 1), u[l.id] = !0);
                                break
                            }
                    this.size -= Object.keys(u).length
                }
            };

            function ft(t, e) {
                return t.id - e.id
            }
            y.prototype.queryAll = function(t) {
                if (!this.selectors.length) return [];
                var e = {},
                    n = [],
                    s = this.querySelectorAll(this.selectors.join(", "), t),
                    r, i, o, a, c, l, d, u;
                for (r = 0, o = s.length; r < o; r++)
                    for (c = s[r], l = this.matches(c), i = 0, a = l.length; i < a; i++) u = l[i], e[u.id] ? d = e[u.id] : (d = {
                        id: u.id,
                        selector: u.selector,
                        data: u.data,
                        elements: []
                    }, e[u.id] = d, n.push(d)), d.elements.push(c);
                return n.sort(ft)
            }, y.prototype.matches = function(t) {
                if (!t) return [];
                var e, n, s, r, i, o, a, c, l, d, u, m = this.activeIndexes,
                    f = {},
                    h = [];
                for (e = 0, r = m.length; e < r; e++)
                    if (a = m[e], c = a.element(t), c) {
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = a.map.get(c[n]))
                                for (s = 0, o = l.length; s < o; s++) d = l[s], u = d.id, !f[u] && this.matchesSelector(t, d.selector) && (f[u] = !0, h.push(d))
                    }
                return h.sort(ft)
            };
            var se = null,
                Te = null,
                Ae = [];

            function ht(t, e) {
                var n = [];

                function s() {
                    var i = n;
                    n = [], e(i)
                }

                function r() {
                    for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    n.push(o), n.length === 1 && xe(t, s)
                }
                return r
            }

            function xe(t, e) {
                Te || (Te = new MutationObserver(Xn)), se || (se = t.createElement("div"), Te.observe(se, {
                    attributes: !0
                })), Ae.push(e), se.setAttribute("data-twiddle", "" + Date.now())
            }

            function Xn() {
                var t = Ae;
                Ae = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout(function() {
                        throw n
                    }, 0)
                }
            }
            var pt = new WeakMap,
                q = new WeakMap,
                re = new WeakMap,
                _ = new WeakMap;

            function ie(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var s = e[n],
                        r = s[0],
                        i = s[1],
                        o = s[2];
                    r === oe ? (Qn(o, i), Yn(o, i)) : r === vt ? mt(o, i) : r === ae && Zn(t.observers, i)
                }
            }

            function Qn(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = pt.get(e);
                    if (n || (n = [], pt.set(e, n)), n.indexOf(t.id) === -1) {
                        var s = void 0;
                        if (t.initialize && (s = t.initialize.call(void 0, e)), s) {
                            var r = q.get(e);
                            r || (r = {}, q.set(e, r)), r["" + t.id] = s
                        }
                        n.push(t.id)
                    }
                }
            }

            function Yn(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = _.get(e);
                    if (n || (n = [], _.set(e, n)), n.indexOf(t.id) === -1) {
                        t.elements.push(e);
                        var s = q.get(e),
                            r = s ? s["" + t.id] : null;
                        if (r && r.add && r.add.call(void 0, e), t.subscribe) {
                            var i = t.subscribe.call(void 0, e);
                            if (i) {
                                var o = re.get(e);
                                o || (o = {}, re.set(e, o)), o["" + t.id] = i
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function mt(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = _.get(e);
                    if (!!n) {
                        var s = t.elements.indexOf(e);
                        if (s !== -1 && t.elements.splice(s, 1), s = n.indexOf(t.id), s !== -1) {
                            var r = q.get(e),
                                i = r ? r["" + t.id] : null;
                            if (i && i.remove && i.remove.call(void 0, e), t.subscribe) {
                                var o = re.get(e),
                                    a = o ? o["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(s, 1)
                        }
                        n.length === 0 && _.delete(e)
                    }
                }
            }

            function Zn(t, e) {
                var n = _.get(e);
                if (!!n) {
                    for (var s = n.slice(0), r = 0; r < s.length; r++) {
                        var i = t[s[r]];
                        if (!!i) {
                            var o = i.elements.indexOf(e);
                            o !== -1 && i.elements.splice(o, 1);
                            var a = q.get(e),
                                c = a ? a["" + i.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = re.get(e),
                                d = l ? l["" + i.id] : null;
                            d && d.unsubscribe && d.unsubscribe(), i.remove && i.remove.call(void 0, e)
                        }
                    }
                    _.delete(e)
                }
            }
            var Ce = null;

            function es(t) {
                if (Ce === null) {
                    var e = t.createElement("div"),
                        n = t.createElement("div"),
                        s = t.createElement("div");
                    e.appendChild(n), n.appendChild(s), e.innerHTML = "", Ce = s.parentNode !== n
                }
                return Ce
            }

            function gt(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }
            var oe = 1,
                vt = 2,
                ae = 3;

            function ts(t, e, n) {
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    r.type === "childList" ? (bt(t, e, r.addedNodes), ns(t, e, r.removedNodes)) : r.type === "attributes" && ce(t, e, r.target)
                }
                es(t.ownerDocument) && is(t, e)
            }

            function bt(t, e, n) {
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    if (gt(r))
                        for (var i = t.selectorSet.matches(r), o = 0; o < i.length; o++) {
                            var a = i[o].data;
                            e.push([oe, r, a])
                        }
                    if ("querySelectorAll" in r)
                        for (var c = t.selectorSet.queryAll(r), l = 0; l < c.length; l++)
                            for (var d = c[l], u = d.data, m = d.elements, f = 0; f < m.length; f++) e.push([oe, m[f], u])
                }
            }

            function ns(t, e, n) {
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    if ("querySelectorAll" in r) {
                        e.push([ae, r]);
                        for (var i = r.querySelectorAll("*"), o = 0; o < i.length; o++) e.push([ae, i[o]])
                    }
                }
            }

            function ce(t, e, n) {
                if (gt(n))
                    for (var s = t.selectorSet.matches(n), r = 0; r < s.length; r++) {
                        var i = s[r].data;
                        e.push([oe, n, i])
                    }
                if ("querySelectorAll" in n) {
                    var o = _.get(n);
                    if (o)
                        for (var a = 0; a < o.length; a++) {
                            var c = t.observers[o[a]];
                            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([vt, n, c]))
                        }
                }
            }

            function ss(t, e, n) {
                if ("querySelectorAll" in n) {
                    ce(t, e, n);
                    for (var s = n.querySelectorAll("*"), r = 0; r < s.length; r++) ce(t, e, s[r])
                }
            }

            function rs(t, e, n) {
                for (var s = 0; s < n.length; s++)
                    for (var r = n[s], i = r.form ? r.form.elements : t.rootNode.querySelectorAll("input"), o = 0; o < i.length; o++) ce(t, e, i[o])
            }

            function is(t, e) {
                for (var n = 0; n < t.observers.length; n++) {
                    var s = t.observers[n];
                    if (s)
                        for (var r = s.elements, i = 0; i < r.length; i++) {
                            var o = r[i];
                            o.parentNode || e.push([ae, o])
                        }
                }
            }

            function os(t, e) {
                var n = t.readyState;
                n === "interactive" || n === "complete" ? xe(t, e) : t.addEventListener("DOMContentLoaded", xe(t, e))
            }
            var as = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                cs = 0;

            function U(t) {
                this.rootNode = t.nodeType === 9 ? t.documentElement : t, this.ownerDocument = t.nodeType === 9 ? t : t.ownerDocument, this.observers = [], this.selectorSet = new y, this.mutationObserver = new MutationObserver(ds.bind(this, this)), this._scheduleAddRootNodes = ht(this.ownerDocument, us.bind(this, this)), this._handleThrottledChangedTargets = ht(this.ownerDocument, hs.bind(this, this)), this.rootNode.addEventListener("change", fs.bind(this, this), !1), os(this.ownerDocument, ls.bind(this, this))
            }
            U.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, U.prototype.observe = function(t, e) {
                var n = void 0;
                typeof e == "function" ? n = {
                    selector: t,
                    initialize: e
                } : (typeof e == "undefined" ? "undefined" : as(e)) === "object" ? (n = e, n.selector = t) : n = t;
                var s = this,
                    r = {
                        id: cs++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            s._abortObserving(r)
                        }
                    };
                return this.selectorSet.add(r.selector, r), this.observers[r.id] = r, this._scheduleAddRootNodes(), r
            }, U.prototype._abortObserving = function(t) {
                for (var e = t.elements, n = 0; n < e.length; n++) mt(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, U.prototype.triggerObservers = function(t) {
                var e = [];
                ss(this, e, t), ie(this, e)
            };

            function ls(t) {
                t.mutationObserver.observe(t.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), t._scheduleAddRootNodes()
            }

            function us(t) {
                var e = [];
                bt(t, e, [t.rootNode]), ie(t, e)
            }

            function ds(t, e) {
                var n = [];
                ts(t, n, e), ie(t, n)
            }

            function fs(t, e) {
                t._handleThrottledChangedTargets(e.target)
            }

            function hs(t, e) {
                var n = [];
                rs(t, n, e), ie(t, n)
            }
            var Ne = void 0;

            function ps() {
                return Ne || (Ne = new U(window.document)), Ne
            }

            function ms() {
                var t;
                return (t = ps()).observe.apply(t, arguments)
            }
            var yt = {},
                wt = {},
                Me = new WeakMap,
                Et = new WeakMap,
                Le = new WeakMap,
                St = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function kt(t, e, n) {
                var s = t[e];
                return t[e] = function() {
                    return n.apply(t, arguments), s.apply(t, arguments)
                }, t
            }

            function gs(t, e, n) {
                var s = [],
                    r = e;
                do {
                    if (r.nodeType !== 1) break;
                    var i = t.matches(r);
                    if (i.length) {
                        var o = {
                            node: r,
                            observers: i
                        };
                        n ? s.unshift(o) : s.push(o)
                    }
                } while (r = r.parentElement);
                return s
            }

            function vs() {
                Me.set(this, !0)
            }

            function bs() {
                Me.set(this, !0), Et.set(this, !0)
            }

            function ys() {
                return Le.get(this) || null
            }

            function Tt(t, e) {
                !St || Object.defineProperty(t, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: e || St.get
                })
            }

            function ws(t) {
                try {
                    return t.eventPhase, !0
                } catch {
                    return !1
                }
            }

            function Es(t) {
                if (!!ws(t)) {
                    var e = t.eventPhase === 1 ? wt : yt,
                        n = e[t.type];
                    if (!!n) {
                        var s = gs(n, t.target, t.eventPhase === 1);
                        if (!!s.length) {
                            kt(t, "stopPropagation", vs), kt(t, "stopImmediatePropagation", bs), Tt(t, ys);
                            for (var r = 0, i = s.length; r < i && !Me.get(t); r++) {
                                var o = s[r];
                                Le.set(t, o.node);
                                for (var a = 0, c = o.observers.length; a < c && !Et.get(t); a++) o.observers[a].data.call(o.node, t)
                            }
                            Le.delete(t), Tt(t)
                        }
                    }
                }
            }

            function Ss(t, e, n) {
                var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                    r = !!s.capture,
                    i = r ? wt : yt,
                    o = i[t];
                o || (o = new y, i[t] = o, document.addEventListener(t, Es, r)), o.add(e, n)
            }

            function ks(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const At = new WeakMap,
                _e = t => (...e) => {
                    const n = t(...e);
                    return At.set(n, !0), n
                },
                j = t => typeof t == "function" && At.has(t);
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const xt = window.customElements !== void 0 && window.customElements.polyfillWrapFlushCallback !== void 0,
                Ts = (t, e, n = null, s = null) => {
                    for (; e !== n;) {
                        const r = e.nextSibling;
                        t.insertBefore(e, s), e = r
                    }
                },
                Pe = (t, e, n = null) => {
                    for (; e !== n;) {
                        const s = e.nextSibling;
                        t.removeChild(e), e = s
                    }
                };
            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const S = {},
                Ct = {};
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const C = `{{lit-${String(Math.random()).slice(2)}}}`,
                Nt = `<!--${C}-->`,
                Mt = new RegExp(`${C}|${Nt}`),
                B = "$lit$";
            class As {
                constructor(e, n) {
                    this.parts = [], this.element = n;
                    const s = [],
                        r = [],
                        i = document.createTreeWalker(n.content, 133, null, !1);
                    let o = 0,
                        a = -1,
                        c = 0;
                    const {
                        strings: l,
                        values: {
                            length: d
                        }
                    } = e;
                    for (; c < d;) {
                        const u = i.nextNode();
                        if (u === null) {
                            i.currentNode = r.pop();
                            continue
                        }
                        if (a++, u.nodeType === 1) {
                            if (u.hasAttributes()) {
                                const m = u.attributes,
                                    {
                                        length: f
                                    } = m;
                                let h = 0;
                                for (let p = 0; p < f; p++) Lt(m[p].name, B) && h++;
                                for (; h-- > 0;) {
                                    const p = l[c],
                                        v = Ie.exec(p)[2],
                                        g = v.toLowerCase() + B,
                                        w = u.getAttribute(g);
                                    u.removeAttribute(g);
                                    const E = w.split(Mt);
                                    this.parts.push({
                                        type: "attribute",
                                        index: a,
                                        name: v,
                                        strings: E
                                    }), c += E.length - 1
                                }
                            }
                            u.tagName === "TEMPLATE" && (r.push(u), i.currentNode = u.content)
                        } else if (u.nodeType === 3) {
                            const m = u.data;
                            if (m.indexOf(C) >= 0) {
                                const f = u.parentNode,
                                    h = m.split(Mt),
                                    p = h.length - 1;
                                for (let v = 0; v < p; v++) {
                                    let g, w = h[v];
                                    if (w === "") g = k();
                                    else {
                                        const E = Ie.exec(w);
                                        E !== null && Lt(E[2], B) && (w = w.slice(0, E.index) + E[1] + E[2].slice(0, -B.length) + E[3]), g = document.createTextNode(w)
                                    }
                                    f.insertBefore(g, u), this.parts.push({
                                        type: "node",
                                        index: ++a
                                    })
                                }
                                h[p] === "" ? (f.insertBefore(k(), u), s.push(u)) : u.data = h[p], c += p
                            }
                        } else if (u.nodeType === 8)
                            if (u.data === C) {
                                const m = u.parentNode;
                                (u.previousSibling === null || a === o) && (a++, m.insertBefore(k(), u)), o = a, this.parts.push({
                                    type: "node",
                                    index: a
                                }), u.nextSibling === null ? u.data = "" : (s.push(u), a--), c++
                            } else {
                                let m = -1;
                                for (;
                                    (m = u.data.indexOf(C, m + 1)) !== -1;) this.parts.push({
                                    type: "node",
                                    index: -1
                                }), c++
                            }
                    }
                    for (const u of s) u.parentNode.removeChild(u)
                }
            }
            const Lt = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                },
                xs = t => t.index !== -1,
                k = () => document.createComment(""),
                Ie = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class _t {
                constructor(e, n, s) {
                    this.__parts = [], this.template = e, this.processor = n, this.options = s
                }
                update(e) {
                    let n = 0;
                    for (const s of this.__parts) s !== void 0 && s.setValue(e[n]), n++;
                    for (const s of this.__parts) s !== void 0 && s.commit()
                }
                _clone() {
                    const e = xt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        n = [],
                        s = this.template.parts,
                        r = document.createTreeWalker(e, 133, null, !1);
                    let i = 0,
                        o = 0,
                        a, c = r.nextNode();
                    for (; i < s.length;) {
                        if (a = s[i], !xs(a)) {
                            this.__parts.push(void 0), i++;
                            continue
                        }
                        for (; o < a.index;) o++, c.nodeName === "TEMPLATE" && (n.push(c), r.currentNode = c.content), (c = r.nextNode()) === null && (r.currentNode = n.pop(), c = r.nextNode());
                        if (a.type === "node") {
                            const l = this.processor.handleTextExpression(this.options);
                            l.insertAfterNode(c.previousSibling), this.__parts.push(l)
                        } else this.__parts.push(...this.processor.handleAttributeExpressions(c, a.name, a.strings, this.options));
                        i++
                    }
                    return xt && (document.adoptNode(e), customElements.upgrade(e)), e
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const Cs = ` ${C} `;
            class Pt {
                constructor(e, n, s, r) {
                    this.strings = e, this.values = n, this.type = s, this.processor = r
                }
                getHTML() {
                    const e = this.strings.length - 1;
                    let n = "",
                        s = !1;
                    for (let r = 0; r < e; r++) {
                        const i = this.strings[r],
                            o = i.lastIndexOf("<!--");
                        s = (o > -1 || s) && i.indexOf("-->", o + 1) === -1;
                        const a = Ie.exec(i);
                        a === null ? n += i + (s ? Cs : Nt) : n += i.substr(0, a.index) + a[1] + a[2] + B + a[3] + C
                    }
                    return n += this.strings[e], n
                }
                getTemplateElement() {
                    const e = document.createElement("template");
                    return e.innerHTML = this.getHTML(), e
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const le = t => t === null || !(typeof t == "object" || typeof t == "function"),
                It = t => Array.isArray(t) || !!(t && t[Symbol.iterator]);
            class $t {
                constructor(e, n, s) {
                    this.dirty = !0, this.element = e, this.name = n, this.strings = s, this.parts = [];
                    for (let r = 0; r < s.length - 1; r++) this.parts[r] = this._createPart()
                }
                _createPart() {
                    return new $e(this)
                }
                _getValue() {
                    const e = this.strings,
                        n = e.length - 1;
                    let s = "";
                    for (let r = 0; r < n; r++) {
                        s += e[r];
                        const i = this.parts[r];
                        if (i !== void 0) {
                            const o = i.value;
                            if (le(o) || !It(o)) s += typeof o == "string" ? o : String(o);
                            else
                                for (const a of o) s += typeof a == "string" ? a : String(a)
                        }
                    }
                    return s += e[n], s
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }
            class $e {
                constructor(e) {
                    this.value = void 0, this.committer = e
                }
                setValue(e) {
                    e !== S && (!le(e) || e !== this.value) && (this.value = e, j(e) || (this.committer.dirty = !0))
                }
                commit() {
                    for (; j(this.value);) {
                        const e = this.value;
                        this.value = S, e(this)
                    }
                    this.value !== S && this.committer.commit()
                }
            }
            class D {
                constructor(e) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = e
                }
                appendInto(e) {
                    this.startNode = e.appendChild(k()), this.endNode = e.appendChild(k())
                }
                insertAfterNode(e) {
                    this.startNode = e, this.endNode = e.nextSibling
                }
                appendIntoPart(e) {
                    e.__insert(this.startNode = k()), e.__insert(this.endNode = k())
                }
                insertAfterPart(e) {
                    e.__insert(this.startNode = k()), this.endNode = e.endNode, e.endNode = this.startNode
                }
                setValue(e) {
                    this.__pendingValue = e
                }
                commit() {
                    for (; j(this.__pendingValue);) {
                        const n = this.__pendingValue;
                        this.__pendingValue = S, n(this)
                    }
                    const e = this.__pendingValue;
                    e !== S && (le(e) ? e !== this.value && this.__commitText(e) : e instanceof Pt ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : It(e) ? this.__commitIterable(e) : e === Ct ? (this.value = Ct, this.clear()) : this.__commitText(e))
                }
                __insert(e) {
                    this.endNode.parentNode.insertBefore(e, this.endNode)
                }
                __commitNode(e) {
                    this.value !== e && (this.clear(), this.__insert(e), this.value = e)
                }
                __commitText(e) {
                    const n = this.startNode.nextSibling;
                    e = e == null ? "" : e;
                    const s = typeof e == "string" ? e : String(e);
                    n === this.endNode.previousSibling && n.nodeType === 3 ? n.data = s : this.__commitNode(document.createTextNode(s)), this.value = e
                }
                __commitTemplateResult(e) {
                    const n = this.options.templateFactory(e);
                    if (this.value instanceof _t && this.value.template === n) this.value.update(e.values);
                    else {
                        const s = new _t(n, e.processor, this.options),
                            r = s._clone();
                        s.update(e.values), this.__commitNode(r), this.value = s
                    }
                }
                __commitIterable(e) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const n = this.value;
                    let s = 0,
                        r;
                    for (const i of e) r = n[s], r === void 0 && (r = new D(this.options), n.push(r), s === 0 ? r.appendIntoPart(this) : r.insertAfterPart(n[s - 1])), r.setValue(i), r.commit(), s++;
                    s < n.length && (n.length = s, this.clear(r && r.endNode))
                }
                clear(e = this.startNode) {
                    Pe(this.startNode.parentNode, e.nextSibling, this.endNode)
                }
            }
            class Ns {
                constructor(e, n, s) {
                    if (this.value = void 0, this.__pendingValue = void 0, s.length !== 2 || s[0] !== "" || s[1] !== "") throw new Error("Boolean attributes can only contain a single expression");
                    this.element = e, this.name = n, this.strings = s
                }
                setValue(e) {
                    this.__pendingValue = e
                }
                commit() {
                    for (; j(this.__pendingValue);) {
                        const n = this.__pendingValue;
                        this.__pendingValue = S, n(this)
                    }
                    if (this.__pendingValue === S) return;
                    const e = !!this.__pendingValue;
                    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = S
                }
            }
            class Ms extends $t {
                constructor(e, n, s) {
                    super(e, n, s);
                    this.single = s.length === 2 && s[0] === "" && s[1] === ""
                }
                _createPart() {
                    return new Ls(this)
                }
                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }
            class Ls extends $e {}
            let Ot = !1;
            try {
                const t = {
                    get capture() {
                        return Ot = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch {}
            class _s {
                constructor(e, n, s) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = n, this.eventContext = s, this.__boundHandleEvent = r => this.handleEvent(r)
                }
                setValue(e) {
                    this.__pendingValue = e
                }
                commit() {
                    for (; j(this.__pendingValue);) {
                        const i = this.__pendingValue;
                        this.__pendingValue = S, i(this)
                    }
                    if (this.__pendingValue === S) return;
                    const e = this.__pendingValue,
                        n = this.value,
                        s = e == null || n != null && (e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive),
                        r = e != null && (n == null || s);
                    s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = Ps(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = S
                }
                handleEvent(e) {
                    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
                }
            }
            const Ps = t => t && (Ot ? {
                capture: t.capture,
                passive: t.passive,
                once: t.once
            } : t.capture);
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class Is {
                handleAttributeExpressions(e, n, s, r) {
                    const i = n[0];
                    return i === "." ? new Ms(e, n.slice(1), s).parts : i === "@" ? [new _s(e, n.slice(1), r.eventContext)] : i === "?" ? [new Ns(e, n.slice(1), s)] : new $t(e, n, s).parts
                }
                handleTextExpression(e) {
                    return new D(e)
                }
            }
            const $s = new Is;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            function Os(t) {
                let e = Dt.get(t.type);
                e === void 0 && (e = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, Dt.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (n !== void 0) return n;
                const s = t.strings.join(C);
                return n = e.keyString.get(s), n === void 0 && (n = new As(t, t.getTemplateElement()), e.keyString.set(s, n)), e.stringsArray.set(t.strings, n), n
            }
            const Dt = new Map;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const Rt = new WeakMap,
                lo = b("e", (t, e, n) => {
                    let s = Rt.get(e);
                    s === void 0 && (Pe(e, e.firstChild), Rt.set(e, s = new D(Object.assign({
                        templateFactory: Os
                    }, n))), s.appendInto(e)), s.setValue(t), s.commit()
                });
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            const uo = b("g", (t, ...e) => new Pt(t, e, "html", $s));
            class Oe {
                constructor(e) {
                    this.children = [], this.parent = e
                }
                delete(e) {
                    const n = this.children.indexOf(e);
                    return n === -1 ? !1 : (this.children = this.children.slice(0, n).concat(this.children.slice(n + 1)), this.children.length === 0 && this.parent.delete(this), !0)
                }
                add(e) {
                    return this.children.push(e), this
                }
            }
            class ue {
                constructor(e) {
                    this.parent = null, this.children = {}, this.parent = e || null
                }
                get(e) {
                    return this.children[e]
                }
                insert(e) {
                    let n = this;
                    for (let s = 0; s < e.length; s += 1) {
                        const r = e[s];
                        let i = n.get(r);
                        if (s === e.length - 1) return i instanceof ue && (n.delete(i), i = null), i || (i = new Oe(n), n.children[r] = i), i;
                        i instanceof Oe && (i = null), i || (i = new ue(n), n.children[r] = i), n = i
                    }
                    return n
                }
                delete(e) {
                    for (const n in this.children)
                        if (this.children[n] === e) {
                            const r = delete this.children[n];
                            return Object.keys(this.children).length === 0 && this.parent && this.parent.delete(this), r
                        }
                    return !1
                }
            }

            function De(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return e === "select" || e === "textarea" || e === "input" && n !== "submit" && n !== "reset" && n !== "checkbox" && n !== "radio" || t.isContentEditable
            }

            function Ds(t, e) {
                const n = new CustomEvent("hotkey-fire", {
                    cancelable: !0,
                    detail: {
                        path: e
                    }
                });
                !t.dispatchEvent(n) || (De(t) ? t.focus() : t.click())
            }

            function Rs(t) {
                return t.split(",").map(e => e.split(" "))
            }

            function Re(t) {
                const e = t.code.startsWith("Key") && t.shiftKey && t.key.toUpperCase() === t.key;
                return `${t.ctrlKey?"Control+":""}${t.altKey?"Alt+":""}${t.metaKey?"Meta+":""}${t.shiftKey&&!e?"Shift+":""}${t.key}`
            }
            const K = new ue,
                Ft = new WeakMap;
            let Fe = K,
                de = null,
                He = [];

            function We() {
                He = [], de = null, Fe = K
            }

            function Ht(t) {
                if (t.defaultPrevented || !(t.target instanceof Node)) return;
                if (De(t.target)) {
                    const n = t.target;
                    if (!n.id || !n.ownerDocument.querySelector(`[data-hotkey-scope="${n.id}"]`)) return
                }
                de != null && window.clearTimeout(de), de = window.setTimeout(We, 1500);
                const e = Fe.get(Re(t));
                if (!e) {
                    We();
                    return
                }
                if (He.push(Re(t)), Fe = e, e instanceof Oe) {
                    const n = t.target;
                    let s = !1,
                        r;
                    const i = De(n);
                    for (let o = e.children.length - 1; o >= 0; o -= 1) {
                        r = e.children[o];
                        const a = r.getAttribute("data-hotkey-scope");
                        if (!i && !a || i && n.id === a) {
                            s = !0;
                            break
                        }
                    }
                    r && s && (Ds(r, He), t.preventDefault()), We()
                }
            }

            function Fs(t, e) {
                Object.keys(K.children).length === 0 && document.addEventListener("keydown", Ht);
                const s = Rs(e || t.getAttribute("data-hotkey") || "").map(r => K.insert(r).add(t));
                Ft.set(t, s)
            }

            function Hs(t) {
                const e = Ft.get(t);
                if (e && e.length)
                    for (const n of e) n && n.delete(t);
                Object.keys(K.children).length === 0 && document.removeEventListener("keydown", Ht)
            }
            const Ve = new WeakSet;

            function Ws(t) {
                Ve.add(t), t.shadowRoot && Wt(t.shadowRoot), qe(t), Vt(t.ownerDocument)
            }

            function Wt(t) {
                qe(t), Vt(t)
            }
            const fe = new WeakMap;

            function Vt(t = document) {
                if (fe.has(t)) return fe.get(t);
                let e = !1;
                const n = new MutationObserver(r => {
                    for (const i of r)
                        if (i.type === "attributes" && i.target instanceof Element) Ue(i.target);
                        else if (i.type === "childList" && i.addedNodes.length)
                        for (const o of i.addedNodes) o instanceof Element && qe(o)
                });
                n.observe(t, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-action"]
                });
                const s = {
                    get closed() {
                        return e
                    },
                    unsubscribe() {
                        e = !0, fe.delete(t), n.disconnect()
                    }
                };
                return fe.set(t, s), s
            }

            function qe(t) {
                for (const e of t.querySelectorAll("[data-action]")) Ue(e);
                t instanceof Element && t.hasAttribute("data-action") && Ue(t)
            }

            function Vs(t) {
                const e = t.currentTarget;
                for (const n of qt(e))
                    if (t.type === n.type) {
                        const s = e.closest(n.tag);
                        Ve.has(s) && typeof s[n.method] == "function" && s[n.method](t);
                        const r = e.getRootNode();
                        if (r instanceof ShadowRoot && Ve.has(r.host) && r.host.matches(n.tag)) {
                            const i = r.host;
                            typeof i[n.method] == "function" && i[n.method](t)
                        }
                    }
            }

            function* qt(t) {
                for (const e of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    const n = e.lastIndexOf(":"),
                        s = Math.max(0, e.lastIndexOf("#")) || e.length;
                    yield {
                        type: e.slice(0, n),
                        tag: e.slice(n + 1, s),
                        method: e.slice(s + 1) || "handleEvent"
                    }
                }
            }

            function Ue(t) {
                for (const e of qt(t)) t.addEventListener(e.type, Vs)
            }

            function qs(t) {
                const e = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
                window.customElements.get(e) || (window[t.name] = t, window.customElements.define(e, t))
            }

            function Ut(t, e) {
                const n = t.tagName.toLowerCase();
                if (t.shadowRoot) {
                    for (const s of t.shadowRoot.querySelectorAll(`[data-target~="${n}.${e}"]`))
                        if (!s.closest(n)) return s
                }
                for (const s of t.querySelectorAll(`[data-target~="${n}.${e}"]`))
                    if (s.closest(n) === t) return s
            }

            function Us(t, e) {
                const n = t.tagName.toLowerCase(),
                    s = [];
                if (t.shadowRoot)
                    for (const r of t.shadowRoot.querySelectorAll(`[data-targets~="${n}.${e}"]`)) r.closest(n) || s.push(r);
                for (const r of t.querySelectorAll(`[data-targets~="${n}.${e}"]`)) r.closest(n) === t && s.push(r);
                return s
            }

            function js(t, e) {
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get() {
                        return Ut(this, e)
                    }
                })
            }

            function Bs(t, e) {
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get() {
                        return Us(this, e)
                    }
                })
            }

            function Ks(t) {
                for (const e of t.querySelectorAll("template[data-shadowroot]")) e.parentElement === t && t.attachShadow({
                    mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open"
                }).append(e.content.cloneNode(!0))
            }
            const he = new WeakMap;

            function Gs(t, e) {
                he.has(t) || he.set(t, []), he.get(t).push(e)
            }

            function zs(t, e) {
                e || (e = jt(Object.getPrototypeOf(t)));
                for (const n of e) {
                    const s = t[n],
                        r = Bt(n);
                    let i = {
                        configurable: !0,
                        get() {
                            return this.getAttribute(r) || ""
                        },
                        set(o) {
                            this.setAttribute(r, o || "")
                        }
                    };
                    typeof s == "number" ? i = {
                        configurable: !0,
                        get() {
                            return Number(this.getAttribute(r) || 0)
                        },
                        set(o) {
                            this.setAttribute(r, o)
                        }
                    } : typeof s == "boolean" && (i = {
                        configurable: !0,
                        get() {
                            return this.hasAttribute(r)
                        },
                        set(o) {
                            this.toggleAttribute(r, o)
                        }
                    }), Object.defineProperty(t, n, i), n in t && !t.hasAttribute(r) && i.set.call(t, s)
                }
            }

            function jt(t) {
                const e = new Set;
                let n = t;
                for (; n && n !== HTMLElement;) {
                    const s = he.get(n) || [];
                    for (const r of s) e.add(r);
                    n = Object.getPrototypeOf(n)
                }
                return e
            }

            function Bt(t) {
                return `data-${t.replace(/([A-Z]($|[a-z]))/g,"-$1")}`.replace(/--/g, "-").toLowerCase()
            }

            function Js(t) {
                let e = t.observedAttributes || [];
                Object.defineProperty(t, "observedAttributes", {
                    configurable: !0,
                    get() {
                        return [...jt(t.prototype)].map(Bt).concat(e)
                    },
                    set(n) {
                        e = n
                    }
                })
            }
            const Xs = new WeakSet;

            function Qs(t, e) {
                t.toggleAttribute("data-catalyst", !0), Xs.add(t), Ks(t), zs(t), Ws(t), e && e.call(t), t.shadowRoot && Wt(t.shadowRoot)
            }

            function Ys(t) {
                Js(t), qs(t)
            }

            function Zs(t) {
                const e = t.prototype.connectedCallback;
                t.prototype.connectedCallback = function() {
                    Qs(this, e)
                }, Ys(t)
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const Kt = new WeakMap,
                Gt = 2147483647,
                fo = b("u", _e((...t) => e => {
                    let n = Kt.get(e);
                    n === void 0 && (n = {
                        lastRenderedIndex: Gt,
                        values: []
                    }, Kt.set(e, n));
                    const s = n.values;
                    let r = s.length;
                    n.values = t;
                    for (let i = 0; i < t.length && !(i > n.lastRenderedIndex); i++) {
                        const o = t[i];
                        if (le(o) || typeof o.then != "function") {
                            e.setValue(o), n.lastRenderedIndex = i;
                            break
                        }
                        i < r && o === s[i] || (n.lastRenderedIndex = Gt, r = 0, Promise.resolve(o).then(a => {
                            const c = n.values.indexOf(o);
                            c > -1 && c < n.lastRenderedIndex && (n.lastRenderedIndex = c, e.setValue(a), e.commit())
                        }))
                    }
                }));

            function je(t, e = 0, {
                start: n = !0,
                middle: s = !0,
                once: r = !1
            } = {}) {
                let i = 0,
                    o, a = !1;

                function c(...l) {
                    if (a) return;
                    const d = Date.now() - i;
                    i = Date.now(), n ? (n = !1, t.apply(this, l), r && c.cancel()) : (s && d < e || !s) && (clearTimeout(o), o = setTimeout(() => {
                        i = Date.now(), t.apply(this, l), r && c.cancel()
                    }, s ? e - d : e))
                }
                return c.cancel = () => {
                    clearTimeout(o), a = !0
                }, c
            }

            function zt(t, e = 0, {
                start: n = !1,
                middle: s = !1,
                once: r = !1
            } = {}) {
                return je(t, e, {
                    start: n,
                    middle: s,
                    once: r
                })
            }

            function er(t = 0, e = {}) {
                return (n, s, r) => {
                    if (!r || typeof r.value != "function") throw new Error("debounce can only decorate functions");
                    const i = r.value;
                    r.value = je(i, t, e), Object.defineProperty(n, s, r)
                }
            }

            function tr(t = 0, e = {}) {
                return (n, s, r) => {
                    if (!r || typeof r.value != "function") throw new Error("debounce can only decorate functions");
                    const i = r.value;
                    r.value = zt(i, t, e), Object.defineProperty(n, s, r)
                }
            }

            function* Jt(t) {
                let e = "",
                    n = 0,
                    s = !1;
                for (let r = 0; r < t.length; r += 1) t[r] === "{" && t[r + 1] === "{" && t[r - 1] !== "\\" && !s ? (s = !0, e && (yield {
                    type: "string",
                    start: n,
                    end: r,
                    value: e
                }), e = "{{", n = r, r += 2) : t[r] === "}" && t[r + 1] === "}" && t[r - 1] !== "\\" && s && (s = !1, yield {
                    type: "part",
                    start: n,
                    end: r + 2,
                    value: e.slice(2).trim()
                }, e = "", r += 2, n = r), e += t[r] || "";
                e && (yield {
                    type: "string",
                    start: n,
                    end: t.length,
                    value: e
                })
            }
            var Xt = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                N = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                },
                T, pe;
            class Be {
                constructor(e, n) {
                    this.expression = n, T.set(this, void 0), pe.set(this, ""), Xt(this, T, e), N(this, T).updateParent("")
                }
                get attributeName() {
                    return N(this, T).attr.name
                }
                get attributeNamespace() {
                    return N(this, T).attr.namespaceURI
                }
                get value() {
                    return N(this, pe)
                }
                set value(e) {
                    Xt(this, pe, e || ""), N(this, T).updateParent(e)
                }
                get element() {
                    return N(this, T).element
                }
                get booleanValue() {
                    return N(this, T).booleanValue
                }
                set booleanValue(e) {
                    N(this, T).booleanValue = e
                }
            }
            T = new WeakMap, pe = new WeakMap;
            class nr {
                constructor(e, n) {
                    this.element = e, this.attr = n, this.partList = []
                }
                get booleanValue() {
                    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name)
                }
                set booleanValue(e) {
                    if (this.partList.length !== 1) throw new DOMException("Operation not supported", "NotSupportedError");
                    this.partList[0].value = e ? "" : null
                }
                append(e) {
                    this.partList.push(e)
                }
                updateParent(e) {
                    if (this.partList.length === 1 && e === null) this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
                    else {
                        const n = this.partList.map(s => typeof s == "string" ? s : s.value).join("");
                        this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, n)
                    }
                }
            }
            var Qt = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                R = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                },
                A;
            class F {
                constructor(e, n) {
                    this.expression = n, A.set(this, void 0), Qt(this, A, [e]), e.textContent = ""
                }
                get value() {
                    return R(this, A).map(e => e.textContent).join("")
                }
                set value(e) {
                    this.replace(e)
                }
                get previousSibling() {
                    return R(this, A)[0].previousSibling
                }
                get nextSibling() {
                    return R(this, A)[R(this, A).length - 1].nextSibling
                }
                replace(...e) {
                    const n = e.map(s => typeof s == "string" ? new Text(s) : s);
                    n.length || n.push(new Text("")), R(this, A)[0].before(...n);
                    for (const s of R(this, A)) s.remove();
                    Qt(this, A, n)
                }
            }
            A = new WeakMap;

            function Ke(t) {
                return {
                    createCallback(e, n, s) {
                        this.processCallback(e, n, s)
                    },
                    processCallback(e, n, s) {
                        var r;
                        if (!(typeof s != "object" || !s)) {
                            for (const i of n)
                                if (i.expression in s) {
                                    const o = (r = s[i.expression]) !== null && r !== void 0 ? r : "";
                                    t(i, o)
                                }
                        }
                    }
                }
            }

            function Ge(t, e) {
                t.value = String(e)
            }

            function Yt(t, e) {
                return typeof e == "boolean" && t instanceof Be && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = e, !0) : !1
            }
            const sr = Ke(Ge),
                ho = b("p", Ke((t, e) => {
                    Yt(t, e) || Ge(t, e)
                }));
            var Zt = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                me = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                },
                G, z;

            function* rr(t) {
                const e = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, !1);
                let n;
                for (; n = e.nextNode();)
                    if (n instanceof Element && n.hasAttributes())
                        for (let s = 0; s < n.attributes.length; s += 1) {
                            const r = n.attributes.item(s);
                            if (r && r.value.includes("{{")) {
                                const i = new nr(n, r);
                                for (const o of Jt(r.value))
                                    if (o.type === "string") i.append(o.value);
                                    else {
                                        const a = new Be(i, o.value);
                                        i.append(a), yield a
                                    }
                            }
                        } else if (n instanceof Text && n.textContent && n.textContent.includes("{{"))
                            for (const s of Jt(n.textContent)) {
                                s.end < n.textContent.length && n.splitText(s.end), s.type === "part" && (yield new F(n, s.value));
                                break
                            }
            }
            class J extends DocumentFragment {
                constructor(e, n, s = sr) {
                    var r, i;
                    super();
                    G.set(this, void 0), z.set(this, void 0), Object.getPrototypeOf(this !== J.prototype) && Object.setPrototypeOf(this, J.prototype), this.appendChild(e.content.cloneNode(!0)), Zt(this, z, Array.from(rr(this))), Zt(this, G, s), (i = (r = me(this, G)).createCallback) === null || i === void 0 || i.call(r, this, me(this, z), n)
                }
                update(e) {
                    me(this, G).processCallback(this, me(this, z), e)
                }
            }
            b("T", J), G = new WeakMap, z = new WeakMap;

            function ir(t, e) {
                const n = t.createElement("template");
                return n.innerHTML = e, t.importNode(n.content, !0)
            }

            function or(t) {
                const e = new URLSearchParams,
                    n = new FormData(t).entries();
                for (const [s, r] of [...n]) e.append(s, r.toString());
                return e.toString()
            }
            class ar extends Error {
                constructor(e, n) {
                    super(e);
                    this.response = n
                }
            }

            function en() {
                let t, e;
                return [new Promise(function(s, r) {
                    t = s, e = r
                }), t, e]
            }
            let H;
            const tn = [],
                nn = [];

            function cr(t) {
                tn.push(t)
            }

            function lr(t) {
                nn.push(t)
            }

            function ur(t, e) {
                H || (H = new Map, document.addEventListener("submit", fr));
                const n = H.get(t) || [];
                H.set(t, [...n, e])
            }

            function dr(t) {
                const e = [];
                for (const n of H.keys())
                    if (t.matches(n)) {
                        const s = H.get(n) || [];
                        e.push(...s)
                    }
                return e
            }

            function fr(t) {
                if (!(t.target instanceof HTMLFormElement)) return;
                const e = t.target,
                    n = dr(e);
                if (n.length === 0) return;
                const s = pr(e),
                    [r, i, o] = en();
                t.preventDefault(), hr(n, e, s, r).then(async a => {
                    if (a) {
                        for (const c of nn) await c(e);
                        mr(s).then(i, o).catch(() => {}).then(() => {
                            for (const c of tn) c(e)
                        })
                    } else e.submit()
                }, a => {
                    e.submit(), setTimeout(() => {
                        throw a
                    })
                })
            }
            async function hr(t, e, n, s) {
                let r = !1;
                for (const i of t) {
                    const [o, a] = en(), c = () => (r = !0, a(), s), l = {
                        text: c,
                        json: () => (n.headers.set("Accept", "application/json"), c()),
                        html: () => (n.headers.set("Accept", "text/html"), c())
                    };
                    await Promise.race([o, i(e, l, n)])
                }
                return r
            }

            function pr(t) {
                const e = {
                    method: t.method || "GET",
                    url: t.action,
                    headers: new Headers({
                        "X-Requested-With": "XMLHttpRequest"
                    }),
                    body: null
                };
                if (e.method.toUpperCase() === "GET") {
                    const n = or(t);
                    n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                } else e.body = new FormData(t);
                return e
            }
            async function mr(t) {
                const e = await window.fetch(t.url, {
                        method: t.method,
                        body: t.body !== null ? t.body : void 0,
                        headers: t.headers,
                        credentials: "same-origin"
                    }),
                    n = {
                        url: e.url,
                        status: e.status,
                        statusText: e.statusText,
                        headers: e.headers,
                        text: "",
                        get json() {
                            const r = this,
                                i = JSON.parse(r.text);
                            return delete r.json, r.json = i, r.json
                        },
                        get html() {
                            const r = this;
                            return delete r.html, r.html = ir(document, r.text), r.html
                        }
                    },
                    s = await e.text();
                if (n.text = s, e.ok) return n;
                throw new ar("request failed", n)
            }
            const ze = !!navigator.userAgent.match(/Macintosh/);
            class gr {
                constructor(e, n) {
                    this.input = e, this.list = n, this.isComposing = !1, n.id || (n.id = `combobox-${Math.random().toString().slice(2,6)}`), this.keyboardEventHandler = s => vr(s, this), this.compositionEventHandler = s => wr(s, this), this.inputHandler = this.clearSelection.bind(this), e.setAttribute("role", "combobox"), e.setAttribute("aria-controls", n.id), e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-autocomplete", "list"), e.setAttribute("aria-haspopup", "listbox")
                }
                destroy() {
                    this.clearSelection(), this.stop(), this.input.removeAttribute("role"), this.input.removeAttribute("aria-controls"), this.input.removeAttribute("aria-expanded"), this.input.removeAttribute("aria-autocomplete"), this.input.removeAttribute("aria-haspopup")
                }
                start() {
                    this.input.setAttribute("aria-expanded", "true"), this.input.addEventListener("compositionstart", this.compositionEventHandler), this.input.addEventListener("compositionend", this.compositionEventHandler), this.input.addEventListener("input", this.inputHandler), this.input.addEventListener("keydown", this.keyboardEventHandler), this.list.addEventListener("click", sn)
                }
                stop() {
                    this.clearSelection(), this.input.setAttribute("aria-expanded", "false"), this.input.removeEventListener("compositionstart", this.compositionEventHandler), this.input.removeEventListener("compositionend", this.compositionEventHandler), this.input.removeEventListener("input", this.inputHandler), this.input.removeEventListener("keydown", this.keyboardEventHandler), this.list.removeEventListener("click", sn)
                }
                navigate(e = 1) {
                    const n = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(rn)[0],
                        s = Array.from(this.list.querySelectorAll('[role="option"]')).filter(rn),
                        r = s.indexOf(n);
                    if (r === s.length - 1 && e === 1 || r === 0 && e === -1) {
                        this.clearSelection(), this.input.focus();
                        return
                    }
                    let i = e === 1 ? 0 : s.length - 1;
                    if (n && r >= 0) {
                        const a = r + e;
                        a >= 0 && a < s.length && (i = a)
                    }
                    const o = s[i];
                    if (!!o)
                        for (const a of s) o === a ? (this.input.setAttribute("aria-activedescendant", o.id), o.setAttribute("aria-selected", "true"), Er(this.list, o)) : a.setAttribute("aria-selected", "false")
                }
                clearSelection() {
                    this.input.removeAttribute("aria-activedescendant");
                    for (const e of this.list.querySelectorAll('[aria-selected="true"]')) e.setAttribute("aria-selected", "false")
                }
            }
            b("C", gr);

            function vr(t, e) {
                if (!(t.shiftKey || t.metaKey || t.altKey) && !(!ze && t.ctrlKey) && !e.isComposing) switch (t.key) {
                    case "Enter":
                    case "Tab":
                        br(e.input, e.list) && t.preventDefault();
                        break;
                    case "Escape":
                        e.clearSelection();
                        break;
                    case "ArrowDown":
                        e.navigate(1), t.preventDefault();
                        break;
                    case "ArrowUp":
                        e.navigate(-1), t.preventDefault();
                        break;
                    case "n":
                        ze && t.ctrlKey && (e.navigate(1), t.preventDefault());
                        break;
                    case "p":
                        ze && t.ctrlKey && (e.navigate(-1), t.preventDefault());
                        break;
                    default:
                        if (t.ctrlKey) break;
                        e.clearSelection()
                }
            }

            function sn(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                !e || e.getAttribute("aria-disabled") !== "true" && yr(e)
            }

            function br(t, e) {
                const n = e.querySelector('[aria-selected="true"]');
                return n ? (n.getAttribute("aria-disabled") === "true" || n.click(), !0) : !1
            }

            function yr(t) {
                t.dispatchEvent(new CustomEvent("combobox-commit", {
                    bubbles: !0
                }))
            }

            function rn(t) {
                return !t.hidden && !(t instanceof HTMLInputElement && t.type === "hidden") && (t.offsetWidth > 0 || t.offsetHeight > 0)
            }

            function wr(t, e) {
                e.isComposing = t.type === "compositionstart", !!document.getElementById(e.input.getAttribute("aria-controls") || "") && e.clearSelection()
            }

            function Er(t, e) {
                Sr(t, e) || (t.scrollTop = e.offsetTop)
            }

            function Sr(t, e) {
                const n = t.scrollTop,
                    s = n + t.clientHeight,
                    r = e.offsetTop,
                    i = r + e.clientHeight;
                return r >= n && i <= s
            }

            function kr(t) {
                let e = !1,
                    n = null;
                t.addEventListener("mousedown", o), t.addEventListener("change", r);

                function s(l, d, u, m = !1) {
                    d instanceof HTMLInputElement && (d.indeterminate = m, d.checked !== u && (d.checked = u, setTimeout(() => {
                        const f = new CustomEvent("change", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                relatedTarget: l
                            }
                        });
                        d.dispatchEvent(f)
                    })))
                }

                function r(l) {
                    const d = l.target;
                    d instanceof Element && (d.hasAttribute("data-check-all") ? i(l) : d.hasAttribute("data-check-all-item") && a(l))
                }

                function i(l) {
                    if (l instanceof CustomEvent && l.detail) {
                        const {
                            relatedTarget: u
                        } = l.detail;
                        if (u && u.hasAttribute("data-check-all-item")) return
                    }
                    const d = l.target;
                    if (d instanceof HTMLInputElement) {
                        n = null;
                        for (const u of t.querySelectorAll("[data-check-all-item]")) s(d, u, d.checked);
                        d.indeterminate = !1, c()
                    }
                }

                function o(l) {
                    if (!(l.target instanceof Element)) return;
                    (l.target instanceof HTMLLabelElement && l.target.control || l.target).hasAttribute("data-check-all-item") && (e = l.shiftKey)
                }

                function a(l) {
                    if (l instanceof CustomEvent && l.detail) {
                        const {
                            relatedTarget: f
                        } = l.detail;
                        if (f && (f.hasAttribute("data-check-all") || f.hasAttribute("data-check-all-item"))) return
                    }
                    const d = l.target;
                    if (!(d instanceof HTMLInputElement)) return;
                    const u = Array.from(t.querySelectorAll("[data-check-all-item]"));
                    if (e && n) {
                        const [f, h] = [u.indexOf(n), u.indexOf(d)].sort();
                        for (const p of u.slice(f, +h + 1 || 9e9)) s(d, p, d.checked)
                    }
                    e = !1, n = d;
                    const m = t.querySelector("[data-check-all]");
                    if (m) {
                        const f = u.length,
                            h = u.filter(g => g instanceof HTMLInputElement && g.checked).length,
                            p = h === f,
                            v = f > h && h > 0;
                        s(d, m, p, v)
                    }
                    c()
                }

                function c() {
                    const l = t.querySelector("[data-check-all-count]");
                    if (l) {
                        const d = t.querySelectorAll("[data-check-all-item]:checked").length;
                        l.textContent = d.toString()
                    }
                }
                return {
                    unsubscribe: () => {
                        t.removeEventListener("mousedown", o), t.removeEventListener("change", r)
                    }
                }
            }

            function P(t, e) {
                var n, s, r;
                const i = t.value.slice(0, (n = t.selectionStart) !== null && n !== void 0 ? n : void 0),
                    o = t.value.slice((s = t.selectionEnd) !== null && s !== void 0 ? s : void 0);
                let a = !0;
                t.contentEditable = "true";
                try {
                    a = document.execCommand("insertText", !1, e)
                } catch {
                    a = !1
                }
                if (t.contentEditable = "false", a && !t.value.slice(0, (r = t.selectionStart) !== null && r !== void 0 ? r : void 0).endsWith(e) && (a = !1), !a) {
                    try {
                        document.execCommand("ms-beginUndoUnit")
                    } catch {}
                    t.value = i + e + o;
                    try {
                        document.execCommand("ms-endUndoUnit")
                    } catch {}
                    t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
            }

            function Tr(t) {
                t.addEventListener("paste", on)
            }

            function Ar(t) {
                t.removeEventListener("paste", on)
            }

            function on(t) {
                const e = t.clipboardData;
                if (!e || !Nr(e)) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                let s = e.getData("text/plain");
                const r = e.getData("text/html"),
                    i = r.replace(/\u00A0/g, " ");
                if (!r || (s = s.trim(), !s)) return;
                const c = new DOMParser().parseFromString(i, "text/html").getElementsByTagName("a"),
                    l = xr(c, s, Mr);
                l !== s && (t.stopPropagation(), t.preventDefault(), P(n, l))
            }

            function xr(t, e, n, ...s) {
                const r = [];
                for (const i of t) {
                    const o = i.textContent || "",
                        {
                            part: a,
                            index: c
                        } = Cr(e, o);
                    c >= 0 && (r.push(a.replace(o, n(i, s))), e = e.slice(c))
                }
                return r.push(e), r.join("")
            }

            function Cr(t, e = "") {
                let n = t.indexOf(e);
                return n === -1 ? {
                    part: "",
                    index: n
                } : (n += e.length, {
                    part: t.substring(0, n),
                    index: n
                })
            }

            function Nr(t) {
                return t.types.includes("text/html")
            }

            function Mr(t) {
                const e = t.textContent || "",
                    n = t.href || "";
                let s = "";
                return Pr(t) ? s = e : Lr(t) || _r(n, e) ? s = n : s = `[${e}](${n})`, s
            }

            function Lr(t) {
                return t.className.indexOf("commit-link") >= 0 || !!t.getAttribute("data-hovercard-type") && t.getAttribute("data-hovercard-type") !== "user"
            }

            function _r(t, e) {
                return t = t.slice(-1) === "/" ? t.slice(0, -1) : t, e = e.slice(-1) === "/" ? e.slice(0, -1) : e, t.toLowerCase() === e.toLowerCase()
            }

            function Pr(t) {
                var e;
                return ((e = t.textContent) === null || e === void 0 ? void 0 : e.slice(0, 1)) === "@" && t.getAttribute("data-hovercard-type") === "user"
            }

            function Ir(t) {
                t.addEventListener("dragover", cn), t.addEventListener("drop", an), t.addEventListener("paste", ln)
            }

            function $r(t) {
                t.removeEventListener("dragover", cn), t.removeEventListener("drop", an), t.removeEventListener("paste", ln)
            }

            function an(t) {
                const e = t.dataTransfer;
                if (!e || Or(e) || !dn(e)) return;
                const n = fn(e);
                if (!n.some(Je)) return;
                t.stopPropagation(), t.preventDefault();
                const s = t.currentTarget;
                s instanceof HTMLTextAreaElement && P(s, n.map(un).join(""))
            }

            function cn(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "link")
            }

            function ln(t) {
                const e = t.clipboardData;
                if (!e || !dn(e)) return;
                const n = fn(e);
                if (!n.some(Je)) return;
                t.stopPropagation(), t.preventDefault();
                const s = t.currentTarget;
                s instanceof HTMLTextAreaElement && P(s, n.map(un).join(""))
            }

            function un(t) {
                return Je(t) ? `
![](${t})
` : t
            }

            function Or(t) {
                return Array.from(t.types).indexOf("Files") >= 0
            }

            function dn(t) {
                return Array.from(t.types).indexOf("text/uri-list") >= 0
            }

            function fn(t) {
                return (t.getData("text/uri-list") || "").split(`\r
`)
            }
            const Dr = /\.(gif|png|jpe?g)$/i;

            function Je(t) {
                return Dr.test(t)
            }

            function Rr(t) {
                t.addEventListener("paste", hn)
            }

            function Fr(t) {
                t.removeEventListener("paste", hn)
            }

            function hn(t) {
                const e = t.clipboardData;
                if (!e || !Hr(e)) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const s = e.getData("text/plain");
                if (!s || !pn(s) || Wr(n)) return;
                const r = n.value.substring(n.selectionStart, n.selectionEnd);
                !r.length || pn(r.trim()) || (t.stopPropagation(), t.preventDefault(), P(n, Vr(r, s)))
            }

            function Hr(t) {
                return Array.from(t.types).includes("text/plain")
            }

            function Wr(t) {
                const e = t.selectionStart || 0;
                return e > 1 ? t.value.substring(e - 2, e) === "](" : !1
            }

            function Vr(t, e) {
                return `[${t}](${e})`
            }

            function pn(t) {
                return /^https?:\/\//i.test(t)
            }

            function qr(t) {
                t.addEventListener("dragover", gn), t.addEventListener("drop", mn), t.addEventListener("paste", vn)
            }

            function Ur(t) {
                t.removeEventListener("dragover", gn), t.removeEventListener("drop", mn), t.removeEventListener("paste", vn)
            }

            function mn(t) {
                const e = t.dataTransfer;
                if (!e || jr(e)) return;
                const n = yn(e);
                if (!n) return;
                t.stopPropagation(), t.preventDefault();
                const s = t.currentTarget;
                s instanceof HTMLTextAreaElement && P(s, n)
            }

            function gn(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "copy")
            }

            function vn(t) {
                if (!t.clipboardData) return;
                const e = yn(t.clipboardData);
                if (!e) return;
                t.stopPropagation(), t.preventDefault();
                const n = t.currentTarget;
                n instanceof HTMLTextAreaElement && P(n, e)
            }

            function jr(t) {
                return Array.from(t.types).indexOf("Files") >= 0
            }

            function bn(t) {
                const e = "\xA0";
                return (t.textContent || "").trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || e
            }

            function Br(t) {
                return Array.from(t.querySelectorAll("td, th")).map(bn)
            }

            function Kr(t) {
                const e = Array.from(t.querySelectorAll("tr")),
                    n = e.shift();
                if (!n) return "";
                const s = Br(n),
                    r = s.map(() => "--"),
                    i = `${s.join(" | ")}
${r.join(" | ")}
`,
                    o = e.map(a => Array.from(a.querySelectorAll("td")).map(bn).join(" | ")).join(`
`);
                return `
${i}${o}

`
            }

            function yn(t) {
                if (Array.from(t.types).indexOf("text/html") === -1) return;
                const e = t.getData("text/html");
                if (!/<table/i.test(e)) return;
                let r = new DOMParser().parseFromString(e, "text/html").querySelector("table");
                if (r = !r || r.closest("[data-paste-markdown-skip]") ? null : r, !r) return;
                const i = Kr(r);
                return e.replace(/<meta.*?>/, "").replace(/<table[.\S\s]*<\/table>/, `
${i}`)
            }

            function Gr(t) {
                t.addEventListener("paste", wn)
            }

            function zr(t) {
                t.removeEventListener("paste", wn)
            }

            function wn(t) {
                const e = t.clipboardData;
                if (!e || !Jr(e)) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const s = e.getData("text/x-gfm");
                !s || (t.stopPropagation(), t.preventDefault(), P(n, s))
            }

            function Jr(t) {
                return Array.from(t.types).indexOf("text/x-gfm") >= 0
            }
            var X = "<unknown>";

            function Xr(t) {
                var e = t.split(`
`);
                return e.reduce(function(n, s) {
                    var r = Zr(s) || ti(s) || ri(s) || ci(s) || oi(s);
                    return r && n.push(r), n
                }, [])
            }
            var Qr = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Yr = /\((\S*)(?::(\d+))(?::(\d+))\)/;

            function Zr(t) {
                var e = Qr.exec(t);
                if (!e) return null;
                var n = e[2] && e[2].indexOf("native") === 0,
                    s = e[2] && e[2].indexOf("eval") === 0,
                    r = Yr.exec(e[2]);
                return s && r != null && (e[2] = r[1], e[3] = r[2], e[4] = r[3]), {
                    file: n ? null : e[2],
                    methodName: e[1] || X,
                    arguments: n ? [e[2]] : [],
                    lineNumber: e[3] ? +e[3] : null,
                    column: e[4] ? +e[4] : null
                }
            }
            var ei = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

            function ti(t) {
                var e = ei.exec(t);
                return e ? {
                    file: e[2],
                    methodName: e[1] || X,
                    arguments: [],
                    lineNumber: +e[3],
                    column: e[4] ? +e[4] : null
                } : null
            }
            var ni = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                si = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function ri(t) {
                var e = ni.exec(t);
                if (!e) return null;
                var n = e[3] && e[3].indexOf(" > eval") > -1,
                    s = si.exec(e[3]);
                return n && s != null && (e[3] = s[1], e[4] = s[2], e[5] = null), {
                    file: e[3],
                    methodName: e[1] || X,
                    arguments: e[2] ? e[2].split(",") : [],
                    lineNumber: e[4] ? +e[4] : null,
                    column: e[5] ? +e[5] : null
                }
            }
            var ii = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

            function oi(t) {
                var e = ii.exec(t);
                return e ? {
                    file: e[3],
                    methodName: e[1] || X,
                    arguments: [],
                    lineNumber: +e[4],
                    column: e[5] ? +e[5] : null
                } : null
            }
            var ai = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

            function ci(t) {
                var e = ai.exec(t);
                return e ? {
                    file: e[2],
                    methodName: e[1] || X,
                    arguments: [],
                    lineNumber: +e[3],
                    column: e[4] ? +e[4] : null
                } : null
            }

            function Xe(t) {
                const e = t.parentNode;
                if (e === null || !(e instanceof HTMLElement)) throw new Error;
                let n = 0;
                e instanceof HTMLOListElement && e.start !== 1 && (n = e.start - 1);
                const s = e.children;
                for (let r = 0; r < s.length; ++r)
                    if (s[r] === t) return n + r;
                return n
            }

            function li(t) {
                if (t instanceof HTMLAnchorElement && t.childNodes.length === 1) {
                    const e = t.childNodes[0];
                    if (e instanceof HTMLImageElement) return e.src === t.href
                }
                return !1
            }

            function ui(t) {
                return t.nodeName === "IMG" || t.firstChild != null
            }

            function di(t) {
                return t.nodeName === "INPUT" && t instanceof HTMLInputElement && t.type === "checkbox"
            }
            let ge = 0;

            function fi(t) {
                const e = t.childNodes[0],
                    n = t.childNodes[1];
                return e && t.childNodes.length < 3 ? (e.nodeName === "OL" || e.nodeName === "UL") && (!n || n.nodeType === Node.TEXT_NODE && !(n.textContent || "").trim()) : !1
            }

            function ve(t) {
                return t.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            const W = {
                INPUT(t) {
                    return t instanceof HTMLInputElement && t.checked ? "[x] " : "[ ] "
                },
                CODE(t) {
                    const e = t.textContent || "";
                    return t.parentNode && t.parentNode.nodeName === "PRE" ? (t.textContent = `\`\`\`
${e.replace(/\n+$/,"")}
\`\`\`

`, t) : e.indexOf("`") >= 0 ? `\`\` ${e} \`\`` : `\`${e}\``
                },
                P(t) {
                    const e = document.createElement("p"),
                        n = t.textContent || "";
                    return e.textContent = n.replace(/<(\/?)(pre|strong|weak|em)>/g, "\\<$1$2\\>"), e
                },
                STRONG(t) {
                    return `**${t.textContent||""}**`
                },
                EM(t) {
                    return `_${t.textContent||""}_`
                },
                DEL(t) {
                    return `~${t.textContent||""}~`
                },
                BLOCKQUOTE(t) {
                    const e = (t.textContent || "").trim().replace(/^/gm, "> "),
                        n = document.createElement("pre");
                    return n.textContent = `${e}

`, n
                },
                A(t) {
                    const e = t.textContent || "",
                        n = t.getAttribute("href");
                    return /^https?:/.test(e) && e === n ? e : n ? `[${e}](${n})` : e
                },
                IMG(t) {
                    const e = t.getAttribute("alt") || "",
                        n = t.getAttribute("src");
                    if (!n) throw new Error;
                    const s = t.hasAttribute("width") ? ` width="${ve(t.getAttribute("width")||"")}"` : "",
                        r = t.hasAttribute("height") ? ` height="${ve(t.getAttribute("height")||"")}"` : "";
                    return s || r ? `<img alt="${ve(e)}"${s}${r} src="${ve(n)}">` : `![${e}](${n})`
                },
                LI(t) {
                    const e = t.parentNode;
                    if (!e) throw new Error;
                    let n = "";
                    fi(t) || (e.nodeName === "OL" ? ge > 0 && !e.previousSibling ? n = `${Xe(t)+ge+1}\\. ` : n = `${Xe(t)+1}. ` : n = "* ");
                    const s = n.replace(/\S/g, " "),
                        r = (t.textContent || "").trim().replace(/^/gm, s),
                        i = document.createElement("pre");
                    return i.textContent = r.replace(s, n), i
                },
                OL(t) {
                    const e = document.createElement("li");
                    return e.appendChild(document.createElement("br")), t.append(e), t
                },
                H1(t) {
                    const e = parseInt(t.nodeName.slice(1));
                    return t.prepend(`${Array(e+1).join("#")} `), t
                },
                UL(t) {
                    return t
                }
            };
            W.UL = W.OL;
            for (let t = 2; t <= 6; ++t) W[`H${t}`] = W.H1;

            function hi(t) {
                const e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(r) {
                            return r.nodeName in W && !li(r) && (ui(r) || di(r)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    }),
                    n = [];
                let s = e.nextNode();
                for (; s;) s instanceof HTMLElement && n.push(s), s = e.nextNode();
                n.reverse();
                for (const r of n) r.replaceWith(W[r.nodeName](r))
            }

            function pi(t, e) {
                const n = t.startContainer;
                if (!n || !n.parentNode || !(n.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                const s = n.parentNode;
                let r = t.cloneContents();
                if (e) {
                    const a = r.querySelector(e);
                    a && (r = document.createDocumentFragment(), r.appendChild(a))
                }
                ge = 0;
                const i = s.closest("li");
                if (s.closest("pre")) {
                    const a = document.createElement("pre");
                    a.appendChild(r), r = document.createDocumentFragment(), r.appendChild(a)
                } else if (i && i.parentNode && (i.parentNode.nodeName === "OL" && (ge = Xe(i)), !r.querySelector("li"))) {
                    const a = document.createElement("li");
                    if (!i.parentNode) throw new Error;
                    const c = document.createElement(i.parentNode.nodeName);
                    a.appendChild(r), c.appendChild(a), r = document.createDocumentFragment(), r.appendChild(c)
                }
                return r
            }
            class En {
                constructor() {
                    this.selection = window.getSelection()
                }
                closest(e) {
                    const n = this.range.startContainer,
                        s = n instanceof Element ? n : n.parentElement;
                    return s ? s.closest(e) : null
                }
                get active() {
                    var e;
                    return (((e = this.selection) === null || e === void 0 ? void 0 : e.rangeCount) || 0) > 0
                }
                get range() {
                    var e;
                    return ((e = this.selection) === null || e === void 0 ? void 0 : e.rangeCount) ? this.selection.getRangeAt(0) : new Range
                }
                set range(e) {
                    var n, s;
                    (n = this.selection) === null || n === void 0 || n.removeAllRanges(), (s = this.selection) === null || s === void 0 || s.addRange(e)
                }
                get selectionText() {
                    var e;
                    return ((e = this.selection) === null || e === void 0 ? void 0 : e.toString().trim()) || ""
                }
                get quotedText() {
                    return `> ${this.selectionText.replace(/\n/g,`
> `)}

`
                }
                select(e) {
                    this.selection && (this.selection.removeAllRanges(), this.selection.selectAllChildren(e))
                }
                insert(e) {
                    e.value ? e.value = `${e.value}

${this.quotedText}` : e.value = this.quotedText, e.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), e.focus(), e.selectionStart = e.value.length, e.scrollTop = e.scrollHeight
                }
            }
            b("Q", En);
            class mi extends En {
                constructor(e = "", n) {
                    super();
                    this.scopeSelector = e, this.callback = n
                }
                get selectionText() {
                    var e, n;
                    if (!this.selection) return "";
                    const s = pi(this.range, (e = this.scopeSelector) !== null && e !== void 0 ? e : "");
                    (n = this.callback) === null || n === void 0 || n.call(this, s), hi(s);
                    const r = document.body;
                    if (!r) return "";
                    const i = document.createElement("div");
                    i.appendChild(s), i.style.cssText = "position:absolute;left:-9999px;", r.appendChild(i);
                    let o = "";
                    try {
                        const a = document.createRange();
                        a.selectNodeContents(i), this.selection.removeAllRanges(), this.selection.addRange(a), o = this.selection.toString(), this.selection.removeAllRanges(), a.detach()
                    } finally {
                        r.removeChild(i)
                    }
                    return o.trim()
                }
            }
            b("M", mi);
            let Qe = null;

            function gi(t) {
                return !!t.id && t.value !== t.defaultValue && t.form !== Qe
            }

            function vi(t, e) {
                var n, s;
                const r = (n = e == null ? void 0 : e.selector) !== null && n !== void 0 ? n : ".js-session-resumable",
                    o = `${(s=e==null?void 0:e.keyPrefix)!==null&&s!==void 0?s:"session-resume:"}${t}`,
                    a = [];
                for (const l of document.querySelectorAll(r))(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && a.push(l);
                let c = a.filter(l => gi(l)).map(l => [l.id, l.value]);
                if (c.length) try {
                    const l = sessionStorage.getItem(o);
                    if (l !== null) {
                        const u = JSON.parse(l).filter(function(m) {
                            return !c.some(f => f[0] === m[0])
                        });
                        c = c.concat(u)
                    }
                    sessionStorage.setItem(o, JSON.stringify(c))
                } catch {}
            }

            function bi(t, e) {
                var n;
                const r = `${(n=e==null?void 0:e.keyPrefix)!==null&&n!==void 0?n:"session-resume:"}${t}`;
                let i;
                try {
                    i = sessionStorage.getItem(r)
                } catch {}
                if (!i) return;
                const o = [],
                    a = [];
                for (const [c, l] of JSON.parse(i)) {
                    const d = new CustomEvent("session:resume", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            targetId: c,
                            targetValue: l
                        }
                    });
                    if (document.dispatchEvent(d)) {
                        const u = document.getElementById(c);
                        u && (u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement) ? u.value === u.defaultValue && (u.value = l, o.push(u)) : a.push([c, l])
                    }
                }
                if (a.length === 0) try {
                    sessionStorage.removeItem(r)
                } catch {} else sessionStorage.setItem(r, JSON.stringify(a));
                setTimeout(function() {
                    for (const c of o) c.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }, 0)
            }

            function yi(t) {
                Qe = t.target, setTimeout(function() {
                    t.defaultPrevented && (Qe = null)
                }, 0)
            }

            function wi(t) {
                var e = null,
                    n = !1,
                    s = void 0,
                    r = void 0,
                    i = void 0;

                function o(f) {
                    if (s !== f.clientX || r !== f.clientY) {
                        var h = t.style.height;
                        i && i !== h && (n = !0, t.style.maxHeight = "", t.removeEventListener("mousemove", o)), i = h
                    }
                    s = f.clientX, r = f.clientY
                }
                var a = t.ownerDocument,
                    c = a.documentElement;

                function l() {
                    for (var f = 0, h = t; h !== a.body && h !== null;) f += h.offsetTop || 0, h = h.offsetParent;
                    var p = f - a.defaultView.pageYOffset,
                        v = c.clientHeight - (p + t.offsetHeight);
                    return {
                        top: p,
                        bottom: v
                    }
                }

                function d() {
                    if (!n && t.value !== e && !(t.offsetWidth <= 0 && t.offsetHeight <= 0)) {
                        var f = l(),
                            h = f.top,
                            p = f.bottom;
                        if (!(h < 0 || p < 0)) {
                            var v = Number(getComputedStyle(t).height.replace(/px/, "")) + p;
                            t.style.maxHeight = v - 100 + "px";
                            var g = t.parentElement;
                            if (g instanceof HTMLElement) {
                                var w = g.style.height;
                                g.style.height = getComputedStyle(g).height, t.style.height = "auto", t.style.height = t.scrollHeight + "px", g.style.height = w, i = t.style.height
                            }
                            e = t.value
                        }
                    }
                }

                function u() {
                    n = !1, t.style.height = "", t.style.maxHeight = ""
                }
                t.addEventListener("mousemove", o), t.addEventListener("input", d), t.addEventListener("change", d);
                var m = t.form;
                return m && m.addEventListener("reset", u), t.value && d(), {
                    unsubscribe: function() {
                        t.removeEventListener("mousemove", o), t.removeEventListener("input", d), t.removeEventListener("change", d), m && m.removeEventListener("reset", u)
                    }
                }
            }

            function Sn(t, e) {
                return `${t}:${e}`
            }

            function Ye(t) {
                const [e, n] = t.p.split(".");
                return {
                    userId: t.u,
                    presenceKey: Sn(t.u, e),
                    connectionCount: Number(n),
                    metadata: t.m || []
                }
            }
            const Ei = "presence-";

            function be(t) {
                return t.startsWith(Ei)
            }
            class Si {
                constructor() {
                    this.presenceItems = new Map
                }
                shouldUsePresenceItem(e) {
                    const n = this.presenceItems.get(e.presenceKey);
                    return !n || n.connectionCount <= e.connectionCount
                }
                addPresenceItem(e) {
                    !this.shouldUsePresenceItem(e) || this.presenceItems.set(e.presenceKey, e)
                }
                removePresenceItem(e) {
                    !this.shouldUsePresenceItem(e) || this.presenceItems.delete(e.presenceKey)
                }
                replacePresenceItems(e) {
                    this.presenceItems.clear();
                    for (const n of e) this.addPresenceItem(n)
                }
                getPresenceItems() {
                    return Array.from(this.presenceItems.values())
                }
            }
            class ki {
                constructor() {
                    this.presenceChannels = new Map
                }
                getPresenceChannel(e) {
                    const n = this.presenceChannels.get(e) || new Si;
                    return this.presenceChannels.set(e, n), n
                }
                handleMessage(e, n) {
                    const s = this.getPresenceChannel(e);
                    switch (n.e) {
                        case "pf":
                            s.replacePresenceItems(n.d.map(Ye));
                            break;
                        case "pa":
                            s.addPresenceItem(Ye(n.d));
                            break;
                        case "pr":
                            s.removePresenceItem(Ye(n.d));
                            break
                    }
                    return this.getChannelItems(e)
                }
                getChannelItems(e) {
                    return this.getPresenceChannel(e).getPresenceItems()
                }
                clearChannel(e) {
                    this.presenceChannels.delete(e)
                }
            }
            const Q = b("O", "_i");

            function Ti(t) {
                return Object.assign(Object.assign({}, t), {
                    isLocal: !0
                })
            }
            class Ai {
                constructor() {
                    this.subscriberMetadata = new Map
                }
                setMetadata(e, n) {
                    this.subscriberMetadata.set(e, n)
                }
                removeSubscribers(e) {
                    let n = !1;
                    for (const s of e) n = this.subscriberMetadata.delete(s) || n;
                    return n
                }
                getMetadata(e) {
                    if (!e) {
                        const i = [];
                        let o;
                        for (const a of this.subscriberMetadata.values())
                            for (const c of a)
                                if (Q in c) {
                                    const l = Boolean(c[Q]);
                                    o = o === void 0 ? l : l && o
                                } else i.push(c);
                        return o !== void 0 && i.push({
                            [Q]: o ? 1 : 0
                        }), i
                    }
                    const n = [],
                        {
                            subscriber: s,
                            markAllAsLocal: r
                        } = e;
                    for (const [i, o] of this.subscriberMetadata) {
                        const c = r || i === s ? o.map(Ti) : o;
                        n.push(...c)
                    }
                    return n
                }
                hasSubscribers() {
                    return this.subscriberMetadata.size > 0
                }
            }
            class kn {
                constructor() {
                    this.metadataByChannel = new Map
                }
                setMetadata({
                    subscriber: e,
                    channelName: n,
                    metadata: s
                }) {
                    let r = this.metadataByChannel.get(n);
                    r || (r = new Ai, this.metadataByChannel.set(n, r)), r.setMetadata(e, s)
                }
                removeSubscribers(e) {
                    const n = new Set;
                    for (const [s, r] of this.metadataByChannel) r.removeSubscribers(e) && n.add(s), r.hasSubscribers() || this.metadataByChannel.delete(s);
                    return n
                }
                getChannelMetadata(e, n) {
                    const s = this.metadataByChannel.get(e);
                    return (s == null ? void 0 : s.getMetadata(n)) || []
                }
            }
            b("P", kn);
            async function xi(t, e) {
                let n;
                const s = new Promise((r, i) => {
                    n = self.setTimeout(() => i(new Error("timeout")), t)
                });
                if (!e) return s;
                try {
                    await Promise.race([s, Ze(e)])
                } catch (r) {
                    throw self.clearTimeout(n), r
                }
            }
            async function Ci(t, e) {
                let n;
                const s = new Promise(r => {
                    n = self.setTimeout(r, t)
                });
                if (!e) return s;
                try {
                    await Promise.race([s, Ze(e)])
                } catch (r) {
                    throw self.clearTimeout(n), r
                }
            }
            async function Ni(t, e, n = 1 / 0, s) {
                const r = s ? Ze(s) : null;
                for (let i = 0; i < e; i++) try {
                    return await (r ? Promise.race([t(), r]) : t())
                } catch (o) {
                    if (o.name === "AbortError" || i === e - 1) throw o;
                    const a = Math.pow(2, i) * 1e3,
                        c = Mi(a * .1);
                    await Ci(Math.min(n, a + c), s)
                }
                throw new Error("retry failed")
            }

            function Ze(t) {
                return new Promise((e, n) => {
                    const s = new Error("aborted");
                    s.name = "AbortError", t.aborted ? n(s) : t.addEventListener("abort", () => n(s))
                })
            }

            function Mi(t) {
                return Math.floor(Math.random() * Math.floor(t))
            }
            async function Li(t, e, n) {
                const s = new WebSocket(t),
                    r = Ii(s);
                try {
                    return await Promise.race([r, xi(e, n)]), s
                } catch (i) {
                    throw _i(r), i
                }
            }
            async function _i(t) {
                try {
                    (await t).close()
                } catch {}
            }

            function Pi(t, e) {
                return Ni(() => Li(t, e.timeout, e.signal), e.attempts, e.maxDelay, e.signal)
            }

            function Ii(t) {
                return new Promise((e, n) => {
                    t.readyState === WebSocket.OPEN ? e(t) : (t.onerror = () => {
                        t.onerror = null, t.onopen = null, n(new Error("connect failed"))
                    }, t.onopen = () => {
                        t.onerror = null, t.onopen = null, e(t)
                    })
                })
            }
            class Tn {
                constructor(e, n, s) {
                    this.socket = null, this.opening = null, this.url = e, this.delegate = n, this.policy = s
                }
                async open() {
                    if (this.opening || this.socket) return;
                    this.opening = new AbortController;
                    const e = Object.assign(Object.assign({}, this.policy), {
                        signal: this.opening.signal
                    });
                    try {
                        this.socket = await Pi(this.url, e)
                    } catch {
                        this.delegate.socketDidFinish(this);
                        return
                    } finally {
                        this.opening = null
                    }
                    this.socket.onclose = n => {
                        this.socket = null, this.delegate.socketDidClose(this, n.code, n.reason), (this.delegate.socketShouldRetry ? !this.delegate.socketShouldRetry(this, n.code) : Oi(n.code)) ? this.delegate.socketDidFinish(this) : setTimeout(() => this.open(), $i(100, 100 + (this.delegate.reconnectWindow || 50)))
                    }, this.socket.onmessage = n => {
                        this.delegate.socketDidReceiveMessage(this, n.data)
                    }, this.delegate.socketDidOpen(this)
                }
                close(e, n) {
                    this.opening ? (this.opening.abort(), this.opening = null) : this.socket && (this.socket.onclose = null, this.socket.close(e, n), this.socket = null, this.delegate.socketDidClose(this, e, n), this.delegate.socketDidFinish(this))
                }
                send(e) {
                    this.socket && this.socket.send(e)
                }
                isOpen() {
                    return !!this.socket
                }
            }
            b("a8", Tn);

            function $i(t, e) {
                return Math.random() * (e - t) + t
            }

            function Oi(t) {
                return t === Di || t === Ri
            }
            const Di = 1008,
                Ri = 1011;
            class Fi {
                constructor(e) {
                    if (this.map = new Map, e)
                        for (const [n, s] of e) this.set(n, s)
                }
                get(e) {
                    const n = this.map.get(e);
                    return n || new Set
                }
                set(e, n) {
                    let s = this.map.get(e);
                    return s || (s = new Set, this.map.set(e, s)), s.add(n), this
                }
                has(e) {
                    return this.map.has(e)
                }
                delete(e, n) {
                    const s = this.map.get(e);
                    if (!s) return !1;
                    if (!n) return this.map.delete(e);
                    const r = s.delete(n);
                    return s.size || this.map.delete(e), r
                }
                drain(e) {
                    const n = [];
                    for (const s of this.keys()) this.delete(s, e) && !this.has(s) && n.push(s);
                    return n
                }
                keys() {
                    return this.map.keys()
                }
                values() {
                    return this.map.values()
                }
                entries() {
                    return this.map.entries()
                }[Symbol.iterator]() {
                    return this.entries()
                }
                clear() {
                    this.map.clear()
                }
                get size() {
                    return this.map.size
                }
            }
            class An {
                constructor() {
                    this.subscriptions = new Fi, this.signatures = new Map
                }
                add(...e) {
                    const n = [];
                    for (const {
                            subscriber: s,
                            topic: r
                        } of e) this.subscriptions.has(r.name) || (n.push(r), this.signatures.set(r.name, r)), this.subscriptions.set(r.name, s);
                    return n
                }
                delete(...e) {
                    const n = [];
                    for (const {
                            subscriber: s,
                            topic: r
                        } of e) this.subscriptions.delete(r.name, s) && !this.subscriptions.has(r.name) && (n.push(r), this.signatures.delete(r.name));
                    return n
                }
                drain(...e) {
                    const n = [];
                    for (const s of e)
                        for (const r of this.subscriptions.drain(s)) {
                            const i = this.signatures.get(r);
                            this.signatures.delete(r), n.push(i)
                        }
                    return n
                }
                topics() {
                    return this.signatures.values()
                }
                topic(e) {
                    return this.signatures.get(e) || null
                }
                subscribers(e) {
                    return this.subscriptions.get(e).values()
                }
            }
            b("L", An);

            function* xn(t, e) {
                for (let n = 0; n < t.length; n += e) yield t.slice(n, n + e)
            }

            function Cn(t) {
                return new Promise((e, n) => {
                    const s = new Error("aborted");
                    s.name = "AbortError", t.aborted ? n(s) : t.addEventListener("abort", () => n(s))
                })
            }
            async function Hi(t, e) {
                let n;
                const s = new Promise(r => {
                    n = self.setTimeout(r, t)
                });
                if (!e) return s;
                try {
                    await Promise.race([s, Cn(e)])
                } catch (r) {
                    throw self.clearTimeout(n), r
                }
            }

            function Wi(t) {
                return Math.floor(Math.random() * Math.floor(t))
            }
            async function Vi(t, e, n = 1 / 0, s) {
                const r = s ? Cn(s) : null;
                for (let i = 0; i < e; i++) try {
                    return await (r ? Promise.race([t(), r]) : t())
                } catch (o) {
                    if (o.name === "AbortError" || i === e - 1) throw o;
                    const a = Math.pow(2, i) * 1e3,
                        c = Wi(a * .1);
                    await Hi(Math.min(n, a + c), s)
                }
                throw new Error("retry failed")
            }
            var Nn;
            (function(t) {
                t.Deploy = "Alive Redeploy", t.Reconnect = "Alive Reconnect"
            })(Nn || (Nn = {}));

            function qi() {
                return `${Math.round(Math.random()*(Math.pow(2,31)-1))}_${Math.round(Date.now()/1e3)}`
            }

            function Ui(t) {
                const e = t.match(/\/u\/(\d+)\/ws/);
                return e ? +e[1] : 0
            }
            class ji {
                constructor(e, n, s, r) {
                    this.url = e, this.getUrl = n, this.inSharedWorker = s, this.notify = r, this.subscriptions = new An, this.state = "online", this.retrying = null, this.connectionCount = 0, this.presence = new ki, this.presenceMetadata = new kn, this.intentionallyDisconnected = !1, this.lastCameOnline = 0, this.userId = Ui(e), this.presenceId = qi(), this.presenceKey = Sn(this.userId, this.presenceId), this.socket = this.connect()
                }
                subscribe(e) {
                    const n = this.subscriptions.add(...e);
                    this.sendSubscribe(n);
                    for (const s of e) {
                        const r = s.topic.name;
                        !be(r) || this.notifyCachedPresence(s.subscriber, r)
                    }
                }
                unsubscribe(e) {
                    const n = this.subscriptions.delete(...e);
                    this.sendUnsubscribe(n)
                }
                unsubscribeAll(...e) {
                    const n = this.subscriptions.drain(...e);
                    this.sendUnsubscribe(n);
                    const s = this.presenceMetadata.removeSubscribers(e);
                    this.sendPresenceMetadataUpdate(s)
                }
                requestPresence(e, n) {
                    for (const s of n) this.notifyCachedPresence(e, s)
                }
                notifyCachedPresence(e, n) {
                    const s = this.presence.getChannelItems(n);
                    s.length !== 0 && this.notifyPresenceChannel(n, s)
                }
                updatePresenceMetadata(e) {
                    const n = new Set;
                    for (const s of e) this.presenceMetadata.setMetadata(s), n.add(s.channelName);
                    this.sendPresenceMetadataUpdate(n)
                }
                sendPresenceMetadataUpdate(e) {
                    if (!e.size) return;
                    const n = [];
                    for (const s of e) {
                        const r = this.subscriptions.topic(s);
                        r && n.push(r)
                    }
                    this.sendSubscribe(n)
                }
                online() {
                    var e;
                    this.lastCameOnline = Date.now(), this.state = "online", (e = this.retrying) === null || e === void 0 || e.abort(), this.socket.open()
                }
                offline() {
                    var e;
                    this.state = "offline", (e = this.retrying) === null || e === void 0 || e.abort(), this.socket.close()
                }
                shutdown() {
                    this.inSharedWorker && self.close()
                }
                get reconnectWindow() {
                    const e = Date.now() - this.lastCameOnline < 6e4;
                    return this.connectionCount === 0 || this.intentionallyDisconnected || e ? 0 : 10 * 1e3
                }
                socketDidOpen() {
                    this.intentionallyDisconnected = !1, this.connectionCount++, this.socket.url = this.getUrlWithPresenceId(), this.sendSubscribe(this.subscriptions.topics())
                }
                socketDidClose(e, n, s) {
                    if (this.redeployEarlyReconnectTimeout !== void 0 && clearTimeout(this.redeployEarlyReconnectTimeout), s === "Alive Reconnect") this.intentionallyDisconnected = !0;
                    else if (s === "Alive Redeploy") {
                        this.intentionallyDisconnected = !0;
                        const i = (3 + Math.random() * 22) * 60 * 1e3;
                        this.redeployEarlyReconnectTimeout = setTimeout(() => {
                            this.intentionallyDisconnected = !0, this.socket.close(1e3, "Alive Redeploy Early Client Reconnect")
                        }, i)
                    }
                }
                socketDidFinish() {
                    this.state !== "offline" && this.reconnect()
                }
                socketDidReceiveMessage(e, n) {
                    const s = JSON.parse(n);
                    switch (s.e) {
                        case "ack":
                            {
                                this.handleAck(s);
                                break
                            }
                        case "msg":
                            {
                                this.handleMessage(s);
                                break
                            }
                    }
                }
                handleAck(e) {
                    for (const n of this.subscriptions.topics()) n.offset = e.off
                }
                handleMessage(e) {
                    const n = e.ch,
                        s = this.subscriptions.topic(n);
                    if (!!s) {
                        if (s.offset = e.off, "e" in e.data) {
                            const r = this.presence.handleMessage(n, e.data);
                            this.notifyPresenceChannel(n, r);
                            return
                        }
                        e.data.wait || (e.data.wait = 0), this.notify(this.subscriptions.subscribers(n), {
                            channel: n,
                            type: "message",
                            data: e.data
                        })
                    }
                }
                notifyPresenceChannel(e, n) {
                    var s, r;
                    const i = new Map;
                    for (const o of n) {
                        const {
                            userId: a,
                            metadata: c,
                            presenceKey: l
                        } = o, d = i.get(a) || {
                            userId: a,
                            isOwnUser: a === this.userId,
                            metadata: []
                        };
                        if (l !== this.presenceKey) {
                            for (const u of c) {
                                if (Q in u) {
                                    d.isIdle !== !1 && (d.isIdle = Boolean(u[Q]));
                                    continue
                                }
                                d.metadata.push(u)
                            }
                            i.set(a, d)
                        }
                    }
                    for (const o of this.subscriptions.subscribers(e)) {
                        const a = this.userId,
                            c = Array.from(i.values()).filter(u => u.userId !== a),
                            l = (r = (s = i.get(this.userId)) === null || s === void 0 ? void 0 : s.metadata) !== null && r !== void 0 ? r : [],
                            d = this.presenceMetadata.getChannelMetadata(e, {
                                subscriber: o,
                                markAllAsLocal: !this.inSharedWorker
                            });
                        this.notify([o], {
                            channel: e,
                            type: "presence",
                            data: [{
                                userId: a,
                                isOwnUser: !0,
                                metadata: [...l, ...d]
                            }, ...c]
                        })
                    }
                }
                async reconnect() {
                    if (!this.retrying) try {
                        this.retrying = new AbortController;
                        const e = await Vi(this.getUrl, 1 / 0, 6e4, this.retrying.signal);
                        e ? (this.url = e, this.socket = this.connect()) : this.shutdown()
                    } catch (e) {
                        if (e.name !== "AbortError") throw e
                    } finally {
                        this.retrying = null
                    }
                }
                getUrlWithPresenceId() {
                    const e = new URL(this.url, self.location.origin);
                    return e.searchParams.set("shared", this.inSharedWorker.toString()), e.searchParams.set("p", `${this.presenceId}.${this.connectionCount}`), e.toString()
                }
                connect() {
                    const e = new Tn(this.getUrlWithPresenceId(), this, {
                        timeout: 4e3,
                        attempts: 7
                    });
                    return e.open(), e
                }
                sendSubscribe(e) {
                    const n = Array.from(e);
                    for (const s of xn(n, 25)) {
                        const r = {};
                        for (const i of s) be(i.name) ? r[i.signed] = JSON.stringify(this.presenceMetadata.getChannelMetadata(i.name)) : r[i.signed] = i.offset;
                        this.socket.send(JSON.stringify({
                            subscribe: r
                        }))
                    }
                }
                sendUnsubscribe(e) {
                    const n = Array.from(e, s => s.signed);
                    for (const s of xn(n, 25)) this.socket.send(JSON.stringify({
                        unsubscribe: s
                    }));
                    for (const s of e) be(s.name) && this.presence.clearChannel(s.name)
                }
            }
            b("J", ji);
            class et {
                constructor(e, n) {
                    this.name = e, this.signed = n, this.offset = ""
                }
                static parse(e) {
                    const [n, s] = e.split("--");
                    if (!n || !s) return null;
                    const r = JSON.parse(atob(n));
                    return !r.c || !r.t ? null : new et(r.c, e)
                }
            }
            b("K", et);
            const Mn = new WeakSet;

            function Bi(t) {
                return Mn.has(t)
            }

            function Ki(t, e) {
                return Bi(e) ? (e(t), !0) : !1
            }

            function Gi(t) {
                return (...e) => {
                    const n = t(...e);
                    return Mn.add(n), n
                }
            }
            const Y = new WeakMap;
            class tt {
                constructor(e, n) {
                    this.element = e, this.type = n, this.element.addEventListener(this.type, this), Y.get(this.element).set(this.type, this)
                }
                set(e) {
                    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), Y.get(this.element).delete(this.type))
                }
                static
                for (e) {
                    Y.has(e.element) || Y.set(e.element, new Map);
                    const n = e.attributeName.slice(2),
                        s = Y.get(e.element);
                    return s.has(n) ? s.get(n) : new tt(e.element, n)
                }
            }

            function zi(t, e) {
                return t instanceof Be && t.attributeName.startsWith("on") ? (tt.for(t).set(e), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), !0) : !1
            }

            function Ji(t, e) {
                return e instanceof st && t instanceof F ? (e.renderInto(t), !0) : !1
            }

            function Xi(t, e) {
                return e instanceof DocumentFragment && t instanceof F ? (e.childNodes.length && t.replace(...e.childNodes), !0) : !1
            }

            function Qi(t) {
                return typeof t == "object" && Symbol.iterator in t
            }

            function Yi(t, e) {
                if (!Qi(e)) return !1;
                if (t instanceof F) {
                    const n = [];
                    for (const s of e)
                        if (s instanceof st) {
                            const r = document.createDocumentFragment();
                            s.renderInto(r), n.push(...r.childNodes)
                        } else s instanceof DocumentFragment ? n.push(...s.childNodes) : n.push(String(s));
                    return n.length && t.replace(...n), !0
                } else return t.value = Array.from(e).join(" "), !0
            }

            function Zi(t, e) {
                Ki(t, e) || Yt(t, e) || zi(t, e) || Ji(t, e) || Xi(t, e) || Yi(t, e) || Ge(t, e)
            }
            const nt = new WeakMap,
                Ln = new WeakMap,
                _n = new WeakMap;
            class st {
                constructor(e, n, s) {
                    this.strings = e, this.values = n, this.processor = s
                }
                get template() {
                    if (nt.has(this.strings)) return nt.get(this.strings); {
                        const e = document.createElement("template"),
                            n = this.strings.length - 1;
                        return e.innerHTML = this.strings.reduce((s, r, i) => s + r + (i < n ? `{{ ${i} }}` : ""), ""), nt.set(this.strings, e), e
                    }
                }
                renderInto(e) {
                    const n = this.template;
                    if (Ln.get(e) !== n) {
                        Ln.set(e, n);
                        const s = new J(n, this.values, this.processor);
                        _n.set(e, s), e instanceof F ? e.replace(...s.children) : e.appendChild(s);
                        return
                    }
                    _n.get(e).update(this.values)
                }
            }
            const eo = Ke(Zi);

            function to(t, ...e) {
                return new st(t, e, eo)
            }

            function no(t, e) {
                t.renderInto(e)
            }
            const po = b("V", Gi(t => e => {
                if (!(e instanceof F)) return;
                const n = document.createElement("template");
                n.innerHTML = t;
                const s = document.importNode(n.content, !0);
                e.replace(...s.childNodes)
            }));
            var M, Z, Pn, ye, x = function(t, e) {
                    return {
                        name: t,
                        value: e === void 0 ? -1 : e,
                        delta: 0,
                        entries: [],
                        id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                    }
                },
                we = function(t, e) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            if (t === "first-input" && !("PerformanceEventTiming" in self)) return;
                            var n = new PerformanceObserver(function(s) {
                                return s.getEntries().map(e)
                            });
                            return n.observe({
                                type: t,
                                buffered: !0
                            }), n
                        }
                    } catch {}
                },
                Ee = function(t, e) {
                    var n = function s(r) {
                        r.type !== "pagehide" && document.visibilityState !== "hidden" || (t(r), e && (removeEventListener("visibilitychange", s, !0), removeEventListener("pagehide", s, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                ee = function(t) {
                    addEventListener("pageshow", function(e) {
                        e.persisted && t(e)
                    }, !0)
                },
                I = typeof WeakSet == "function" ? new WeakSet : new Set,
                L = function(t, e, n) {
                    var s;
                    return function() {
                        e.value >= 0 && (n || I.has(e) || document.visibilityState === "hidden") && (e.delta = e.value - (s || 0), (e.delta || s === void 0) && (s = e.value, t(e)))
                    }
                },
                te = -1,
                In = function() {
                    return document.visibilityState === "hidden" ? 0 : 1 / 0
                },
                $n = function() {
                    Ee(function(t) {
                        var e = t.timeStamp;
                        te = e
                    }, !0)
                },
                rt = function() {
                    return te < 0 && (te = In(), $n(), ee(function() {
                        setTimeout(function() {
                            te = In(), $n()
                        }, 0)
                    })), {
                        get firstHiddenTime() {
                            return te
                        }
                    }
                },
                so = b("X", function(t, e) {
                    var n, s = rt(),
                        r = x("FCP"),
                        i = function(c) {
                            c.name === "first-contentful-paint" && (a && a.disconnect(), c.startTime < s.firstHiddenTime && (r.value = c.startTime, r.entries.push(c), I.add(r), n()))
                        },
                        o = performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                        a = o ? null : we("paint", i);
                    (o || a) && (n = L(t, r, e), o && i(o), ee(function(c) {
                        r = x("FCP"), n = L(t, r, e), requestAnimationFrame(function() {
                            requestAnimationFrame(function() {
                                r.value = performance.now() - c.timeStamp, I.add(r), n()
                            })
                        })
                    }))
                }),
                On = !1,
                it = -1,
                mo = b("W", function(t, e) {
                    On || (so(function(l) {
                        it = l.value
                    }), On = !0);
                    var n, s = function(l) {
                            it > -1 && t(l)
                        },
                        r = x("CLS", 0),
                        i = 0,
                        o = [],
                        a = function(l) {
                            if (!l.hadRecentInput) {
                                var d = o[0],
                                    u = o[o.length - 1];
                                i && l.startTime - u.startTime < 1e3 && l.startTime - d.startTime < 5e3 ? (i += l.value, o.push(l)) : (i = l.value, o = [l]), i > r.value && (r.value = i, r.entries = o, n())
                            }
                        },
                        c = we("layout-shift", a);
                    c && (n = L(s, r, e), Ee(function() {
                        c.takeRecords().map(a), n()
                    }), ee(function() {
                        i = 0, it = -1, r = x("CLS", 0), n = L(s, r, e)
                    }))
                }),
                ne = {
                    passive: !0,
                    capture: !0
                },
                ro = new Date,
                Dn = function(t, e) {
                    M || (M = e, Z = t, Pn = new Date, Fn(removeEventListener), Rn())
                },
                Rn = function() {
                    if (Z >= 0 && Z < Pn - ro) {
                        var t = {
                            entryType: "first-input",
                            name: M.type,
                            target: M.target,
                            cancelable: M.cancelable,
                            startTime: M.timeStamp,
                            processingStart: M.timeStamp + Z
                        };
                        ye.forEach(function(e) {
                            e(t)
                        }), ye = []
                    }
                },
                io = function(t) {
                    if (t.cancelable) {
                        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        t.type == "pointerdown" ? function(n, s) {
                            var r = function() {
                                    Dn(n, s), o()
                                },
                                i = function() {
                                    o()
                                },
                                o = function() {
                                    removeEventListener("pointerup", r, ne), removeEventListener("pointercancel", i, ne)
                                };
                            addEventListener("pointerup", r, ne), addEventListener("pointercancel", i, ne)
                        }(e, t) : Dn(e, t)
                    }
                },
                Fn = function(t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
                        return t(e, io, ne)
                    })
                },
                go = b("Y", function(t, e) {
                    var n, s = rt(),
                        r = x("FID"),
                        i = function(a) {
                            a.startTime < s.firstHiddenTime && (r.value = a.processingStart - a.startTime, r.entries.push(a), I.add(r), n())
                        },
                        o = we("first-input", i);
                    n = L(t, r, e), o && Ee(function() {
                        o.takeRecords().map(i), o.disconnect()
                    }, !0), o && ee(function() {
                        var a;
                        r = x("FID"), n = L(t, r, e), ye = [], Z = -1, M = null, Fn(addEventListener), a = i, ye.push(a), Rn()
                    })
                }),
                vo = b("Z", function(t, e) {
                    var n, s = rt(),
                        r = x("LCP"),
                        i = function(c) {
                            var l = c.startTime;
                            l < s.firstHiddenTime && (r.value = l, r.entries.push(c)), n()
                        },
                        o = we("largest-contentful-paint", i);
                    if (o) {
                        n = L(t, r, e);
                        var a = function() {
                            I.has(r) || (o.takeRecords().map(i), o.disconnect(), I.add(r), n())
                        };
                        ["keydown", "click"].forEach(function(c) {
                            addEventListener(c, a, {
                                once: !0,
                                capture: !0
                            })
                        }), Ee(a, !0), ee(function(c) {
                            r = x("LCP"), n = L(t, r, e), requestAnimationFrame(function() {
                                requestAnimationFrame(function() {
                                    r.value = performance.now() - c.timeStamp, I.add(r), n()
                                })
                            })
                        })
                    }
                }),
                bo = b("_", function(t) {
                    var e, n = x("TTFB");
                    e = function() {
                        try {
                            var s = performance.getEntriesByType("navigation")[0] || function() {
                                var r = performance.timing,
                                    i = {
                                        entryType: "navigation",
                                        startTime: 0
                                    };
                                for (var o in r) o !== "navigationStart" && o !== "toJSON" && (i[o] = Math.max(r[o] - r.navigationStart, 0));
                                return i
                            }();
                            if (n.value = n.delta = s.responseStart, n.value < 0) return;
                            n.entries = [s], t(n)
                        } catch {}
                    }, document.readyState === "complete" ? setTimeout(e, 0) : addEventListener("pageshow", e)
                }),
                yo = b("a2", typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {});

            function oo(t) {
                if (t.__esModule) return t;
                var e = Object.defineProperty({}, "__esModule", {
                    value: !0
                });
                return Object.keys(t).forEach(function(n) {
                    var s = Object.getOwnPropertyDescriptor(t, n);
                    Object.defineProperty(e, n, s.get ? s : {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    })
                }), e
            }

            function ao(t) {
                throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
            }
            var co = Object.defineProperty,
                ot = (t, e) => co(t, "name", {
                    value: e,
                    configurable: !0
                });
            const $ = new Map;

            function Se(t) {
                for (const e of $.keys())
                    if (customElements.get(e) || t.querySelector(e) || t.matches(e)) {
                        for (const n of $.get(e) || []) n();
                        $.delete(e)
                    }
            }
            ot(Se, "scan");
            let Hn = !1;

            function at() {
                Hn = !0, Se(document.body), new MutationObserver(e => {
                    if (!!$.size)
                        for (const n of e)
                            for (const s of n.addedNodes) s instanceof Element && Se(s)
                }).observe(document, {
                    subtree: !0,
                    childList: !0
                })
            }
            ot(at, "prepare");

            function Wn(t, e) {
                $.has(t) || $.set(t, []), $.get(t).push(e), document.readyState === "interactive" || document.readyState === "complete" ? Hn ? Se(document.body) : at() : document.addEventListener("DOMContentLoaded", at, {
                    once: !0
                })
            }
            ot(Wn, "whenSeen");
            /**
             * @license
             * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const wo = b("a6", _e(t => e => {
                if (t === void 0 && e instanceof $e) {
                    if (t !== e.value) {
                        const n = e.committer.name;
                        e.committer.element.removeAttribute(n)
                    }
                } else e.setValue(t)
            }));
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const Vn = (t, e) => {
                    const n = t.startNode.parentNode,
                        s = e === void 0 ? t.endNode : e.startNode,
                        r = n.insertBefore(k(), s);
                    n.insertBefore(k(), s);
                    const i = new D(t.options);
                    return i.insertAfterNode(r), i
                },
                O = (t, e) => (t.setValue(e), t.commit(), t),
                ct = (t, e, n) => {
                    const s = t.startNode.parentNode,
                        r = n ? n.startNode : t.endNode,
                        i = e.endNode.nextSibling;
                    i !== r && Ts(s, e.startNode, i, r)
                },
                lt = t => {
                    Pe(t.startNode.parentNode, t.startNode, t.endNode.nextSibling)
                },
                qn = (t, e, n) => {
                    const s = new Map;
                    for (let r = e; r <= n; r++) s.set(t[r], r);
                    return s
                },
                Un = new WeakMap,
                jn = new WeakMap,
                Eo = b("a7", _e((t, e, n) => {
                    let s;
                    return n === void 0 ? n = e : e !== void 0 && (s = e), r => {
                        if (!(r instanceof D)) throw new Error("repeat can only be used in text bindings");
                        const i = Un.get(r) || [],
                            o = jn.get(r) || [],
                            a = [],
                            c = [],
                            l = [];
                        let d = 0;
                        for (const g of t) l[d] = s ? s(g, d) : d, c[d] = n(g, d), d++;
                        let u, m, f = 0,
                            h = i.length - 1,
                            p = 0,
                            v = c.length - 1;
                        for (; f <= h && p <= v;)
                            if (i[f] === null) f++;
                            else if (i[h] === null) h--;
                        else if (o[f] === l[p]) a[p] = O(i[f], c[p]), f++, p++;
                        else if (o[h] === l[v]) a[v] = O(i[h], c[v]), h--, v--;
                        else if (o[f] === l[v]) a[v] = O(i[f], c[v]), ct(r, i[f], a[v + 1]), f++, v--;
                        else if (o[h] === l[p]) a[p] = O(i[h], c[p]), ct(r, i[h], i[f]), h--, p++;
                        else if (u === void 0 && (u = qn(l, p, v), m = qn(o, f, h)), !u.has(o[f])) lt(i[f]), f++;
                        else if (!u.has(o[h])) lt(i[h]), h--;
                        else {
                            const g = m.get(l[p]),
                                w = g !== void 0 ? i[g] : null;
                            if (w === null) {
                                const E = Vn(r, i[f]);
                                O(E, c[p]), a[p] = E
                            } else a[p] = O(w, c[p]), ct(r, w, i[f]), i[g] = null;
                            p++
                        }
                        for (; p <= v;) {
                            const g = Vn(r, a[v + 1]);
                            O(g, c[p]), a[p++] = g
                        }
                        for (; f <= h;) {
                            const g = i[f++];
                            g !== null && lt(g)
                        }
                        Un.set(r, a), jn.set(r, l)
                    }
                }))
        }
    }
});
//# sourceMappingURL=chunk-vendor-3b6a6d50.js.map