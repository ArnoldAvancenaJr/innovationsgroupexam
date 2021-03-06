System.register(["./chunk-vendor.js", "./chunk-frameworks.js"], function(x) {
    "use strict";
    var h, j, l, T, C, F, b, q, _;
    return {
        setters: [function(m) {
            h = m.o, j = m.a, l = m.r, T = m.f
        }, function(m) {
            C = m.c, F = m.h, b = m.e, q = m.u, _ = m.g
        }],
        execute: function() {
            x("h", z);
            var m = Object.defineProperty,
                y = (e, t) => m(e, "name", {
                    value: t,
                    configurable: !0
                });
            let g = [];
            h(".js-comment-header-actions-deferred-include-fragment", {
                subscribe: e => C(e, "loadstart", () => {
                    const t = e.closest(".js-comment");
                    S(t)
                }, {
                    capture: !1,
                    once: !0
                })
            }), h(".js-comment .contains-task-list", {
                add: e => {
                    const t = e.closest(".js-comment");
                    S(t)
                }
            }), j("click", ".js-comment-edit-button", function(e) {
                const t = e.currentTarget.closest(".js-comment");
                t.classList.add("is-comment-editing");
                const s = L(t);
                s ? s.addEventListener("include-fragment-replaced", () => v(t), {
                    once: !0
                }) : v(t);
                const n = e.currentTarget.closest(".js-dropdown-details");
                n && n.removeAttribute("open")
            });

            function v(e) {
                e.querySelector(".js-write-tab").click();
                const t = e.querySelector(".js-comment-field");
                t.focus(), T(t, "change")
            }
            y(v, "focusEditForm");

            function L(e) {
                return e.querySelector(".js-comment-edit-form-deferred-include-fragment")
            }
            y(L, "findEditFormDeferredIncludeFragment");

            function S(e) {
                var t;
                (t = L(e)) == null || t.setAttribute("loading", "eager")
            }
            y(S, "loadEditFormDeferredIncludeFragment"), j("click", ".js-comment-hide-button", function(e) {
                const t = e.currentTarget.closest(".js-comment");
                E(t, !1);
                const s = t.querySelector(".js-minimize-comment");
                s && s.classList.remove("d-none");
                const n = e.currentTarget.closest(".js-dropdown-details");
                n && n.removeAttribute("open")
            }), j("click", ".js-comment-hide-minimize-form", function(e) {
                e.currentTarget.closest(".js-minimize-comment").classList.add("d-none")
            });

            function z(e) {
                const t = e.currentTarget.closest("form"),
                    s = e.currentTarget.getAttribute("data-confirm-text");
                if (F(t) && !confirm(s)) return !1;
                for (const o of t.querySelectorAll("input, textarea")) {
                    const i = o;
                    i.value = i.defaultValue, i.classList.contains("session-resumable-canceled") && (i.classList.add("js-session-resumable"), i.classList.remove("session-resumable-canceled"))
                }
                const n = e.currentTarget.closest(".js-comment");
                return n && n.classList.remove("is-comment-editing"), !0
            }
            y(z, "handleCommentCancelButtonClick"), j("click", ".js-comment-cancel-button", z), j("click", ".js-cancel-issue-edit", function(e) {
                const t = e.currentTarget.closest(".js-details-container");
                t.querySelector(".js-comment-form-error").hidden = !0
            }), l(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", function(e, t, s) {
                const n = e.closest(".js-comment");
                n.classList.add("is-comment-loading");
                const o = n.getAttribute("data-body-version");
                o && s.headers.set("X-Body-Version", o)
            }), l(".js-comment .js-comment-update", async function(e, t) {
                let s;
                const n = e.closest(".js-comment"),
                    o = n.querySelector(".js-comment-update-error"),
                    i = n.querySelector(".js-comment-body-error");
                o instanceof HTMLElement && (o.hidden = !0), i instanceof HTMLElement && (i.hidden = !0), g = [];
                try {
                    s = await t.json()
                } catch (d) {
                    if (d.response.status === 422) {
                        const f = JSON.parse(d.response.text);
                        if (f.errors) {
                            o instanceof HTMLElement && (o.textContent = `There was an error posting your comment: ${f.errors.join(", ")}`, o.hidden = !1);
                            return
                        }
                    } else throw d
                }
                if (!s) return;
                const r = s.json;
                r.errors && r.errors.length > 0 && (g = r.errors, w(i));
                const p = n.querySelector(".js-comment-body");
                p && r.body && (p.innerHTML = r.body), n.setAttribute("data-body-version", r.newBodyVersion);
                const u = n.querySelector(".js-body-version");
                u instanceof HTMLInputElement && (u.value = r.newBodyVersion);
                for (const d of n.querySelectorAll("input, textarea")) {
                    const f = d;
                    f.defaultValue = f.value
                }
                n.classList.remove("is-comment-stale", "is-comment-editing");
                const c = n.querySelector(".js-comment-edit-history");
                if (c) {
                    const d = await b(document, r.editUrl);
                    c.innerHTML = "", c.append(d)
                }
            }), h(".js-comment-body-error", {
                add: e => {
                    g && g.length > 0 && w(e)
                }
            });

            function w(e) {
                const t = e.querySelector("ol");
                if (t) {
                    t.innerHTML = "";
                    const s = g.map(n => {
                        const o = document.createElement("li");
                        return o.textContent = n, o
                    });
                    for (const n of s) t.appendChild(n)
                }
                e.hidden = !1
            }
            y(w, "showBodyErrors"), l(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", async function(e, t) {
                const s = e.closest(".js-comment");
                try {
                    await t.text()
                } catch (n) {
                    if (n.response.status === 422) {
                        let o;
                        try {
                            o = JSON.parse(n.response.text)
                        } catch {}
                        o && o.stale && s.classList.add("is-comment-stale")
                    } else throw n
                }
                s.classList.remove("is-comment-loading")
            });

            function E(e, t) {
                const s = e.querySelector(".js-comment-show-on-error");
                s && (s.hidden = !t);
                const n = e.querySelector(".js-comment-hide-on-error");
                n && (n.hidden = t)
            }
            y(E, "toggleMinimizeError"), l(".js-timeline-comment-unminimize, .js-timeline-comment-minimize", async function(e, t) {
                const s = e.closest(".js-minimize-container");
                try {
                    const n = await t.html();
                    s.replaceWith(n.html)
                } catch {
                    E(s, !0)
                }
            }), l(".js-discussion-comment-unminimize, .js-discussion-comment-minimize", async function(e, t) {
                const s = e.closest(".js-discussion-comment"),
                    n = s.querySelector(".js-discussion-comment-error");
                n && (n.hidden = !0);
                try {
                    const o = await t.html();
                    s.replaceWith(o.html)
                } catch (o) {
                    if (o.response.status >= 400 && o.response.status < 500) {
                        if (o.response.html) {
                            const i = o.response.html.querySelector(".js-discussion-comment").getAttribute("data-error");
                            n instanceof HTMLElement && (n.textContent = i, n.hidden = !1)
                        }
                    } else throw o
                }
            }), l(".js-comment-delete", async function(e, t) {
                await t.json();
                let s = e.closest(".js-comment-delete-container");
                s || (s = e.closest(".js-comment-container") || e.closest(".js-line-comments"), s && s.querySelectorAll(".js-comment").length !== 1 && (s = e.closest(".js-comment"))), s.remove()
            }), l(".js-issue-update", async function(e, t) {
                var s, n, o;
                const i = e.closest(".js-details-container"),
                    r = i.querySelector(".js-comment-form-error");
                let p;
                try {
                    p = await t.json()
                } catch (c) {
                    r.textContent = ((o = (n = (s = c.response) == null ? void 0 : s.json) == null ? void 0 : n.errors) == null ? void 0 : o[0]) || "Something went wrong. Please try again.", r.hidden = !1
                }
                if (!p) return;
                i.classList.remove("open"), r.hidden = !0;
                const u = p.json;
                if (u.issue_title != null) {
                    i.querySelector(".js-issue-title").textContent = u.issue_title;
                    const c = i.closest(".js-issues-results");
                    if (c) {
                        if (c.querySelector(".js-merge-pr.is-merging")) {
                            const a = c.querySelector(".js-merge-pull-request textarea");
                            a instanceof HTMLTextAreaElement && a.value === a.defaultValue && (a.value = a.defaultValue = u.issue_title)
                        } else if (c.querySelector(".js-merge-pr.is-squashing")) {
                            const a = c.querySelector(".js-merge-pull-request .js-merge-title");
                            a instanceof HTMLInputElement && a.value === a.defaultValue && (a.value = a.defaultValue = u.default_squash_commit_title)
                        }
                        const d = c.querySelector("button[value=merge]");
                        d && d.setAttribute("data-input-message-value", u.issue_title);
                        const f = c.querySelector("button[value=squash]");
                        f && f.setAttribute("data-input-title-value", u.default_squash_commit_title)
                    }
                }
                document.title = u.page_title;
                for (const c of e.elements)(c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) && (c.defaultValue = c.value)
            }), l(".js-comment-minimize", async function(e, t) {
                await t.json();
                const s = e.closest(".js-comment"),
                    n = s.querySelector(".js-minimize-comment");
                if (n && n.classList.contains("js-update-minimized-content")) {
                    const o = e.querySelector("input[type=submit], button[type=submit]");
                    o && o.classList.add("disabled");
                    const i = s.closest(".js-comment-container");
                    i && await q(i)
                } else {
                    n && n.classList.add("d-none");
                    const o = e.closest(".unminimized-comment");
                    o.classList.add("d-none"), o.classList.remove("js-comment");
                    const r = e.closest(".js-minimizable-comment-group").querySelector(".minimized-comment");
                    r && r.classList.remove("d-none"), r && r.classList.add("js-comment")
                }
            }), l(".js-comment-unminimize", async function(e, t) {
                await t.json();
                const s = e.closest(".js-minimizable-comment-group"),
                    n = s.querySelector(".unminimized-comment"),
                    o = s.querySelector(".minimized-comment");
                if (n) n.classList.remove("d-none"), n.classList.add("js-comment"), o && o.classList.add("d-none"), o && o.classList.remove("js-comment");
                else {
                    if (o) {
                        const r = o.querySelector(".timeline-comment-actions");
                        r && r.classList.add("d-none"), o.classList.remove("js-comment")
                    }
                    const i = s.closest(".js-comment-container");
                    await q(i)
                }
            }), j("details-menu-select", ".js-comment-edit-history-menu", e => {
                const t = e.detail.relatedTarget.getAttribute("data-edit-history-url");
                if (!t) return;
                e.preventDefault();
                const s = b(document, t);
                _({
                    content: s,
                    dialogClass: "Box-overlay--wide"
                })
            }, {
                capture: !0
            })
        }
    }
});
//# sourceMappingURL=chunk-edit-a46f0361.js.map