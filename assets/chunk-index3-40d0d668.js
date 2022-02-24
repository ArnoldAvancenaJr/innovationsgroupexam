System.register([], function(I) {
    "use strict";
    return {
        execute: function() {
            const A = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                D = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function u(n) {
                return `0${n}`.slice(-2)
            }

            function h(n, e) {
                const t = n.getDay(),
                    r = n.getDate(),
                    s = n.getMonth(),
                    i = n.getFullYear(),
                    o = n.getHours(),
                    c = n.getMinutes(),
                    l = n.getSeconds();
                return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, function(E) {
                    let d;
                    switch (E[1]) {
                        case "%":
                            return "%";
                        case "a":
                            return A[t].slice(0, 3);
                        case "A":
                            return A[t];
                        case "b":
                            return D[s].slice(0, 3);
                        case "B":
                            return D[s];
                        case "c":
                            return n.toString();
                        case "d":
                            return u(r);
                        case "e":
                            return String(r);
                        case "H":
                            return u(o);
                        case "I":
                            return u(h(n, "%l"));
                        case "l":
                            return String(o === 0 || o === 12 ? 12 : (o + 12) % 12);
                        case "m":
                            return u(s + 1);
                        case "M":
                            return u(c);
                        case "p":
                            return o > 11 ? "PM" : "AM";
                        case "P":
                            return o > 11 ? "pm" : "am";
                        case "S":
                            return u(l);
                        case "w":
                            return String(t);
                        case "y":
                            return u(i % 100);
                        case "Y":
                            return String(i);
                        case "Z":
                            return d = n.toString().match(/\((\w+)\)$/), d ? d[1] : "";
                        case "z":
                            return d = n.toString().match(/\w([+-]\d\d\d\d) /), d ? d[1] : ""
                    }
                    return ""
                })
            }

            function f(n) {
                let e;
                return function() {
                    if (e) return e;
                    if ("Intl" in window) try {
                        return e = new Intl.DateTimeFormat(void 0, n), e
                    } catch (t) {
                        if (!(t instanceof RangeError)) throw t
                    }
                }
            }
            let T = null;
            const U = f({
                day: "numeric",
                month: "short"
            });

            function $() {
                if (T !== null) return T;
                const n = U();
                return n ? (T = !!n.format(new Date(0)).match(/^\d/), T) : !1
            }
            let F = null;
            const Y = f({
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            function v() {
                if (F !== null) return F;
                const n = Y();
                return n ? (F = !!n.format(new Date(0)).match(/\d,/), F) : !0
            }

            function H(n) {
                return new Date().getUTCFullYear() === n.getUTCFullYear()
            }

            function z(n, e) {
                if ("Intl" in window && "RelativeTimeFormat" in window.Intl) try {
                    return new Intl.RelativeTimeFormat(n, e)
                } catch (t) {
                    if (!(t instanceof RangeError)) throw t
                }
            }

            function g(n) {
                const e = n.closest("[lang]");
                return e instanceof HTMLElement && e.lang ? e.lang : "default"
            }
            const b = new WeakMap;
            class k extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year", "time-zone-name"]
                }
                connectedCallback() {
                    const e = this.getFormattedTitle();
                    e && !this.hasAttribute("title") && this.setAttribute("title", e);
                    const t = this.getFormattedDate();
                    t && (this.textContent = t)
                }
                attributeChangedCallback(e, t, r) {
                    const s = this.getFormattedTitle();
                    if (e === "datetime") {
                        const l = Date.parse(r);
                        isNaN(l) ? b.delete(this) : b.set(this, new Date(l))
                    }
                    const i = this.getFormattedTitle(),
                        o = this.getAttribute("title");
                    e !== "title" && i && (!o || o === s) && this.setAttribute("title", i);
                    const c = this.getFormattedDate();
                    c && (this.textContent = c)
                }
                get date() {
                    return b.get(this)
                }
                getFormattedTitle() {
                    const e = this.date;
                    if (!e) return;
                    const t = q();
                    if (t) return t.format(e);
                    try {
                        return e.toLocaleString()
                    } catch (r) {
                        if (r instanceof RangeError) return e.toString();
                        throw r
                    }
                }
                getFormattedDate() {}
            }
            const q = f({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }),
                p = new WeakMap;
            class S extends k {
                attributeChangedCallback(e, t, r) {
                    (e === "hour" || e === "minute" || e === "second" || e === "time-zone-name") && p.delete(this), super.attributeChangedCallback(e, t, r)
                }
                getFormattedDate() {
                    const e = this.date;
                    if (!e) return;
                    const t = L(this, e) || "",
                        r = P(this, e) || "";
                    return `${t} ${r}`.trim()
                }
            }

            function L(n, e) {
                const t = {
                    weekday: {
                        short: "%a",
                        long: "%A"
                    },
                    day: {
                        numeric: "%e",
                        "2-digit": "%d"
                    },
                    month: {
                        short: "%b",
                        long: "%B"
                    },
                    year: {
                        numeric: "%Y",
                        "2-digit": "%y"
                    }
                };
                let r = $() ? "weekday day month year" : "weekday month day, year";
                for (const s in t) {
                    const i = t[s][n.getAttribute(s) || ""];
                    r = r.replace(s, i || "")
                }
                return r = r.replace(/(\s,)|(,\s$)/, ""), h(e, r).replace(/\s+/, " ").trim()
            }

            function P(n, e) {
                const t = {},
                    r = n.getAttribute("hour");
                (r === "numeric" || r === "2-digit") && (t.hour = r);
                const s = n.getAttribute("minute");
                (s === "numeric" || s === "2-digit") && (t.minute = s);
                const i = n.getAttribute("second");
                (i === "numeric" || i === "2-digit") && (t.second = i);
                const o = n.getAttribute("time-zone-name");
                if ((o === "short" || o === "long") && (t.timeZoneName = o), Object.keys(t).length === 0) return;
                let c = p.get(n);
                c || (c = f(t), p.set(n, c));
                const l = c();
                if (l) return l.format(e); {
                    const E = t.second ? "%H:%M:%S" : "%H:%M";
                    return h(e, E)
                }
            }
            window.customElements.get("local-time") || (window.LocalTimeElement = S, window.customElements.define("local-time", S));
            class w {
                constructor(e, t) {
                    this.date = e, this.locale = t
                }
                toString() {
                    const e = this.timeElapsed();
                    if (e) return e; {
                        const t = this.timeAhead();
                        return t || `on ${this.formatDate()}`
                    }
                }
                timeElapsed() {
                    const e = new Date().getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24);
                    return e >= 0 && i < 30 ? this.timeAgoFromMs(e) : null
                }
                timeAhead() {
                    const e = this.date.getTime() - new Date().getTime(),
                        t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24);
                    return e >= 0 && i < 30 ? this.timeUntil() : null
                }
                timeAgo() {
                    const e = new Date().getTime() - this.date.getTime();
                    return this.timeAgoFromMs(e)
                }
                timeAgoFromMs(e) {
                    const t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24),
                        o = Math.round(i / 30),
                        c = Math.round(o / 12);
                    return e < 0 ? a(this.locale, 0, "second") : t < 10 ? a(this.locale, 0, "second") : t < 45 ? a(this.locale, -t, "second") : t < 90 ? a(this.locale, -r, "minute") : r < 45 ? a(this.locale, -r, "minute") : r < 90 ? a(this.locale, -s, "hour") : s < 24 ? a(this.locale, -s, "hour") : s < 36 ? a(this.locale, -i, "day") : i < 30 ? a(this.locale, -i, "day") : o < 18 ? a(this.locale, -o, "month") : a(this.locale, -c, "year")
                }
                microTimeAgo() {
                    const e = new Date().getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24),
                        o = Math.round(i / 30),
                        c = Math.round(o / 12);
                    return r < 1 ? "1m" : r < 60 ? `${r}m` : s < 24 ? `${s}h` : i < 365 ? `${i}d` : `${c}y`
                }
                timeUntil() {
                    const e = this.date.getTime() - new Date().getTime();
                    return this.timeUntilFromMs(e)
                }
                timeUntilFromMs(e) {
                    const t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24),
                        o = Math.round(i / 30),
                        c = Math.round(o / 12);
                    return o >= 18 ? a(this.locale, c, "year") : o >= 12 ? a(this.locale, c, "year") : i >= 45 ? a(this.locale, o, "month") : i >= 30 ? a(this.locale, o, "month") : s >= 36 ? a(this.locale, i, "day") : s >= 24 ? a(this.locale, i, "day") : r >= 90 ? a(this.locale, s, "hour") : r >= 45 ? a(this.locale, s, "hour") : t >= 90 ? a(this.locale, r, "minute") : t >= 45 ? a(this.locale, r, "minute") : t >= 10 ? a(this.locale, t, "second") : a(this.locale, 0, "second")
                }
                microTimeUntil() {
                    const e = this.date.getTime() - new Date().getTime(),
                        t = Math.round(e / 1e3),
                        r = Math.round(t / 60),
                        s = Math.round(r / 60),
                        i = Math.round(s / 24),
                        o = Math.round(i / 30),
                        c = Math.round(o / 12);
                    return i >= 365 ? `${c}y` : s >= 24 ? `${i}d` : r >= 60 ? `${s}h` : r > 1 ? `${r}m` : "1m"
                }
                formatDate() {
                    let e = $() ? "%e %b" : "%b %e";
                    return H(this.date) || (e += v() ? ", %Y" : " %Y"), h(this.date, e)
                }
                formatTime() {
                    const e = B();
                    return e ? e.format(this.date) : h(this.date, "%l:%M%P")
                }
            }

            function a(n, e, t) {
                const r = z(n, {
                    numeric: "auto"
                });
                return r ? r.format(e, t) : Z(e, t)
            }

            function Z(n, e) {
                if (n === 0) switch (e) {
                    case "year":
                    case "quarter":
                    case "month":
                    case "week":
                        return `this ${e}`;
                    case "day":
                        return "today";
                    case "hour":
                    case "minute":
                        return `in 0 ${e}s`;
                    case "second":
                        return "now"
                } else if (n === 1) switch (e) {
                    case "year":
                    case "quarter":
                    case "month":
                    case "week":
                        return `next ${e}`;
                    case "day":
                        return "tomorrow";
                    case "hour":
                    case "minute":
                    case "second":
                        return `in 1 ${e}`
                } else if (n === -1) switch (e) {
                    case "year":
                    case "quarter":
                    case "month":
                    case "week":
                        return `last ${e}`;
                    case "day":
                        return "yesterday";
                    case "hour":
                    case "minute":
                    case "second":
                        return `1 ${e} ago`
                } else if (n > 1) switch (e) {
                    case "year":
                    case "quarter":
                    case "month":
                    case "week":
                    case "day":
                    case "hour":
                    case "minute":
                    case "second":
                        return `in ${n} ${e}s`
                } else if (n < -1) switch (e) {
                    case "year":
                    case "quarter":
                    case "month":
                    case "week":
                    case "day":
                    case "hour":
                    case "minute":
                    case "second":
                        return `${-n} ${e}s ago`
                }
                throw new RangeError(`Invalid unit argument for format() '${e}'`)
            }
            const B = f({
                hour: "numeric",
                minute: "2-digit"
            });
            class y extends k {
                getFormattedDate() {
                    const e = this.date;
                    if (!!e) return new w(e, g(this)).toString()
                }
                connectedCallback() {
                    m.push(this), M || (x(), M = window.setInterval(x, 60 * 1e3)), super.connectedCallback()
                }
                disconnectedCallback() {
                    const e = m.indexOf(this);
                    e !== -1 && m.splice(e, 1), m.length || M && (clearInterval(M), M = null)
                }
            }
            I("R", y);
            const m = [];
            let M;

            function x() {
                let n, e, t;
                for (e = 0, t = m.length; e < t; e++) n = m[e], n.textContent = n.getFormattedDate() || ""
            }
            window.customElements.get("relative-time") || (window.RelativeTimeElement = y, window.customElements.define("relative-time", y));
            class C extends y {
                getFormattedDate() {
                    const e = this.getAttribute("format"),
                        t = this.date;
                    if (!!t) return e === "micro" ? new w(t, g(this)).microTimeAgo() : new w(t, g(this)).timeAgo()
                }
            }
            window.customElements.get("time-ago") || (window.TimeAgoElement = C, window.customElements.define("time-ago", C));
            class R extends y {
                getFormattedDate() {
                    const e = this.getAttribute("format"),
                        t = this.date;
                    if (!!t) return e === "micro" ? new w(t, g(this)).microTimeUntil() : new w(t, g(this)).timeUntil()
                }
            }
            window.customElements.get("time-until") || (window.TimeUntilElement = R, window.customElements.define("time-until", R))
        }
    }
});
//# sourceMappingURL=chunk-index3-20572668.js.map