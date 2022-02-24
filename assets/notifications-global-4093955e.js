System.register(["./chunk-vendor.js", "./chunk-notification-list-focus.js", "./chunk-frameworks.js"], function() {
    "use strict";
    var a, p, m, O, S, E, x, T, j, k, w, $, N, M, B;
    return {
        setters: [function(l) {
            a = l.t, p = l.c, m = l.b, O = l.o, S = l.a, E = l.i
        }, function(l) {
            x = l.g, T = l.r
        }, function(l) {
            j = l.aV, k = l.aW, w = l.e, $ = l.Q, N = l.b1, M = l.j, B = l.J
        }],
        execute: function() {
            var l = Object.defineProperty,
                X = Object.getOwnPropertyDescriptor,
                J = (t, e) => l(t, "name", {
                    value: e,
                    configurable: !0
                }),
                A = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? X(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && l(e, o, i), i
                };
            let y = class extends HTMLElement {
                constructor() {
                    super();
                    this.addEventListener("socket:message", this.update.bind(this))
                }
                update(t) {
                    const e = t.detail.data;
                    this.link.setAttribute("aria-label", e.aria_label), this.link.setAttribute("data-ga-click", e.ga_click), this.modifier.setAttribute("class", e.span_class)
                }
            };
            J(y, "NotificationIndicatorElement"), A([a], y.prototype, "link", 2), A([a], y.prototype, "modifier", 2), y = A([p], y);
            var H = Object.defineProperty,
                Q = Object.getOwnPropertyDescriptor,
                Y = (t, e) => H(t, "name", {
                    value: e,
                    configurable: !0
                }),
                D = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? Q(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && H(e, o, i), i
                };
            let L = class extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("socket:message", t => {
                        const e = t.detail.data;
                        this.link.setAttribute("aria-label", e.aria_label), this.link.setAttribute("data-ga-click", e.ga_click), this.modifier.setAttribute("class", e.span_class)
                    })
                }
                toggleSidebar() {
                    const t = new CustomEvent("notification-focus:toggle-sidebar", {
                        bubbles: !0
                    });
                    this.dispatchEvent(t)
                }
            };
            Y(L, "NotificationFocusIndicatorElement"), D([a], L.prototype, "link", 2), D([a], L.prototype, "modifier", 2), L = D([p], L);
            var U = Object.defineProperty,
                Z = Object.getOwnPropertyDescriptor,
                tt = (t, e) => U(t, "name", {
                    value: e,
                    configurable: !0
                }),
                F = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? Z(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && U(e, o, i), i
                };
            let C = class extends HTMLElement {
                changeFilter(t) {
                    t.preventDefault(), this.detailsContainer.removeAttribute("open");
                    const e = t.currentTarget;
                    this.setFilterTitle(e.innerHTML), this.dispatchEvent(new CustomEvent("focus-mode-filter-change", {
                        detail: {
                            url: e.href
                        }
                    }))
                }
                setFilterTitle(t) {
                    this.filterTitle.innerHTML = t
                }
            };
            tt(C, "NotificationFocusFiltersElement"), F([a], C.prototype, "detailsContainer", 2), F([a], C.prototype, "filterTitle", 2), C = F([p], C);
            var q = Object.defineProperty,
                et = Object.getOwnPropertyDescriptor,
                it = (t, e) => q(t, "name", {
                    value: e,
                    configurable: !0
                }),
                b = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? et(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && q(e, o, i), i
                };
            let h = class extends HTMLElement {
                connectedCallback() {
                    O(".js-notification-focus-list", () => {
                        this.setupPaginationObserver()
                    }), S("pjax:end", "#js-repo-pjax-container", () => {
                        this.toggleCurrentFocusedNotification()
                    })
                }
                disconnectedCallback() {
                    this.disconnectCurrentObserver()
                }
                deactivateNavigation() {
                    j(this.container)
                }
                activateNavigation() {
                    k(this.container)
                }
                replaceContent(t) {
                    this.container.innerHTML = "", this.container.appendChild(t), this.setupPaginationObserver()
                }
                onRemoveItem(t) {
                    var e, o, s;
                    const i = t.detail.notificationId,
                        n = x(this.container, ".js-navigation-item.navigation-focus");
                    (s = (o = (e = this.listElements) == null ? void 0 : e.find(r => r.notificationId === i)) == null ? void 0 : o.closest("li")) == null || s.remove(), this.listElements.length === 0 ? (this.blankSlate.hidden = !1, this.list.hidden = !0) : T(n, this.container)
                }
                toggleCurrentFocusedNotification() {
                    for (const t of this.listElements) {
                        const e = window.location.href.includes(t.url());
                        t.setFocusedState(e)
                    }
                }
                setupPaginationObserver() {
                    !!window.IntersectionObserver && this.nextPageItem && (this.currentObserver = new IntersectionObserver(t => {
                        !t[0].isIntersecting || (this.disconnectCurrentObserver(), this.loadNextPage())
                    }, {
                        root: this.container,
                        threshold: 0
                    }), this.currentObserver.observe(this.nextPageItem))
                }
                async loadNextPage() {
                    if (!this.nextPageItem) return;
                    const t = this.nextPageItem.getAttribute("data-next-page-url");
                    if (t) {
                        this.nextPageItemSpinner.hidden = !1;
                        const e = await w(document, t);
                        this.nextPageItem.remove();
                        const o = e.querySelectorAll("ul > li.focus-notification-item");
                        for (const i of o) this.list.appendChild(i);
                        const s = e.querySelector("ul > li.focus-pagination-next-item");
                        s && this.list.appendChild(s), this.setupPaginationObserver()
                    }
                }
                disconnectCurrentObserver() {
                    this.currentObserver && this.currentObserver.disconnect()
                }
            };
            it(h, "NotificationFocusListElement"), b([a], h.prototype, "container", 2), b([a], h.prototype, "includeFragment", 2), b([a], h.prototype, "list", 2), b([a], h.prototype, "blankSlate", 2), b([m], h.prototype, "listElements", 2), b([a], h.prototype, "nextPageItem", 2), b([a], h.prototype, "nextPageItemSpinner", 2), h = b([p], h);
            var R = Object.defineProperty,
                st = Object.getOwnPropertyDescriptor,
                ot = (t, e) => R(t, "name", {
                    value: e,
                    configurable: !0
                }),
                f = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? st(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && R(e, o, i), i
                };
            let d = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.notificationId = "", this.isUnread = !1
                }
                connectedCallback() {
                    var t, e;
                    (t = this.closest(".js-navigation-item")) == null || t.addEventListener("navigation:keydown", this.handleCustomKeybindings.bind(this)), (e = this.closest(".js-navigation-item")) == null || e.addEventListener("navigation:keyopen", this.handleKeyOpen.bind(this))
                }
                url() {
                    var t;
                    return (t = this.notificationLink) == null ? void 0 : t.href
                }
                handleCustomKeybindings(t) {
                    const e = t.detail;
                    !$(e.originalEvent) || (e.hotkey === "e" ? this.doneForm.dispatchEvent(new Event("submit")) : e.hotkey === "M" && this.unsubscribeForm.dispatchEvent(new Event("submit")))
                }
                handleKeyOpen() {
                    this.notificationLink.dispatchEvent(new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                setFocusedState(t) {
                    var e, o, s;
                    t && this.isUnread && (this.isUnread = !1, (e = this.closest(".js-navigation-item")) == null || e.classList.remove("color-bg-default"), (o = this.closest(".js-navigation-item")) == null || o.classList.add("color-bg-subtle")), (s = this.closest(".js-navigation-item")) == null || s.classList.toggle("current-focused-item", t), this.notificationTitle.classList.toggle("text-bold", t || this.isUnread)
                }
                async runRemoveAction(t) {
                    t.preventDefault();
                    const e = t.currentTarget,
                        o = new FormData(e),
                        s = e.method,
                        i = e.action,
                        {
                            ok: n
                        } = await fetch(i, {
                            body: o,
                            method: s
                        });
                    n && this.dispatchEvent(new CustomEvent("focus-mode-remove-item", {
                        bubbles: !0,
                        detail: {
                            notificationId: this.notificationId
                        }
                    }))
                }
            };
            ot(d, "NotificationFocusListItemElement"), f([E], d.prototype, "notificationId", 2), f([E], d.prototype, "isUnread", 2), f([a], d.prototype, "doneForm", 2), f([a], d.prototype, "unsubscribeForm", 2), f([a], d.prototype, "notificationLink", 2), f([a], d.prototype, "notificationTitle", 2), d = f([p], d);
            var K = Object.defineProperty,
                nt = Object.getOwnPropertyDescriptor,
                at = (t, e) => K(t, "name", {
                    value: e,
                    configurable: !0
                }),
                P = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? nt(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && K(e, o, i), i
                };
            let v = class extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("notification-focus:toggle-sidebar", this.toggleSidebar.bind(this), !0), window.localStorage.getItem("focus-sidebar-active") === "true" && this.toggleSidebar()
                }
                toggleSidebar() {
                    this.adjustSidebarPosition(), this.sidebar.classList.contains("active") ? (this.listElement.deactivateNavigation(), this.sidebar.classList.remove("active"), window.localStorage.removeItem("focus-sidebar-active")) : (this.listElement.activateNavigation(), this.sidebar.classList.add("active"), window.localStorage.setItem("focus-sidebar-active", "true"))
                }
                async onFocusFilterChange(t) {
                    const e = t.detail;
                    if (e.url) {
                        this.listElement.deactivateNavigation();
                        const o = await w(document, e.url);
                        this.listElement.replaceContent(o), this.listElement.activateNavigation()
                    }
                }
                adjustSidebarPosition() {
                    const t = document.querySelector("header[role=banner]");
                    if (t) {
                        const e = t.offsetTop + t.offsetHeight;
                        this.sidebar.style.top = `${e-10}px`
                    }
                }
            };
            at(v, "NotificationFocusSidebarElement"), P([a], v.prototype, "sidebar", 2), P([a], v.prototype, "listElement", 2), P([a], v.prototype, "filtersElement", 2), v = P([p], v);
            var z = Object.defineProperty,
                rt = Object.getOwnPropertyDescriptor,
                lt = (t, e) => z(t, "name", {
                    value: e,
                    configurable: !0
                }),
                u = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? rt(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && z(e, o, i), i
                };
            let c = class extends HTMLElement {
                constructor() {
                    super(...arguments);
                    this.lastAppliedLabels = {}
                }
                connectedCallback() {
                    const t = this.querySelector(".js-label-subscriptions-load");
                    t == null || t.addEventListener("loadend", () => {
                        this.subscriptionsLabels.length > 0 && (this.updateCheckedState("custom"), this.updateMenuButtonCopy("custom"))
                    })
                }
                async submitCustomForm(t) {
                    await this.submitForm(t), this.closeMenu()
                }
                async submitForm(t) {
                    t.preventDefault(), N();
                    const e = t.currentTarget,
                        o = new FormData(e),
                        s = await self.fetch(e.action, {
                            method: e.method,
                            body: o,
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            }
                        });
                    if (!s.ok) {
                        M();
                        return
                    }
                    const i = await s.json(),
                        n = o.get("do");
                    typeof n == "string" && this.updateCheckedState(n), typeof n == "string" && this.updateMenuButtonCopy(n), this.updateSocialCount(i.count), this.applyInputsCheckedPropertiesToAttributesForNextFormReset()
                }
                updateMenuButtonCopy(t) {
                    this.unwatchButtonCopy.hidden = !(t === "subscribed" || t === "custom"), this.stopIgnoringButtonCopy.hidden = t !== "ignore", this.watchButtonCopy.hidden = !(t !== "subscribed" && t !== "custom" && t !== "ignore")
                }
                applyInputsCheckedPropertiesToAttributesForNextFormReset() {
                    for (const t of [...this.threadTypeCheckboxes]) t.toggleAttribute("checked", t.checked)
                }
                updateCheckedState(t) {
                    for (const e of this.subscriptionButtons) e.setAttribute("aria-checked", e.value === t ? "true" : "false");
                    if (t === "custom") this.customButton.setAttribute("aria-checked", "true");
                    else {
                        this.customButton.setAttribute("aria-checked", "false");
                        for (const e of [...this.threadTypeCheckboxes]) B(e, !1);
                        if (this.subscriptionsContainer !== void 0) {
                            for (let e = 0; e < this.subscriptionsLabels.length; e++) this.subscriptionsLabels[e].remove();
                            this.subscriptionsSubtitle !== void 0 && this.subscriptionsSubtitle.toggleAttribute("hidden", !1), this.subscriptionsContainer.innerHTML = ""
                        }
                    }
                }
                updateSocialCount(t) {
                    this.socialCount && (this.socialCount.textContent = t, this.socialCount.setAttribute("aria-label", `${this.pluralizeUsers(t)} watching this repository`))
                }
                pluralizeUsers(t) {
                    return parseInt(t) === 1 ? "1 user is" : `${t} users are`
                }
                handleDialogLabelToggle(t) {
                    const e = t.detail.wasChecked,
                        o = t.detail.toggledLabelId,
                        s = t.detail.templateLabelElementClone;
                    if (e) {
                        for (let i = 0; i < this.subscriptionsLabels.length; i++)
                            if (this.subscriptionsLabels[i].getAttribute("data-label-id") === o) {
                                this.subscriptionsLabels[i].remove();
                                break
                            }
                    } else s.removeAttribute("hidden"), s.setAttribute("data-targets", "notifications-list-subscription-form.subscriptionsLabels"), this.subscriptionsContainer.appendChild(s)
                }
                openCustomDialog(t) {
                    t.preventDefault(), t.stopPropagation(), this.menu.toggleAttribute("hidden", !0), this.enableApplyButtonAndCheckbox(), this.saveCurrentLabelsState(), this.customDialog.toggleAttribute("hidden", !1), setTimeout(() => {
                        var e;
                        (e = this.customDialog.querySelector("input[type=checkbox][autofocus]")) == null || e.focus()
                    }, 0)
                }
                enableApplyButtonAndCheckbox() {
                    this.customDialog.querySelectorAll('[data-type="label"]:not([hidden])').length > 0 && (this.customSubmit.removeAttribute("disabled"), this.threadTypeCheckboxes[0].checked = !0)
                }
                closeCustomDialog(t) {
                    t.preventDefault(), t.stopPropagation(), this.menu.toggleAttribute("hidden", !1), this.customDialog.toggleAttribute("hidden", !0), setTimeout(() => {
                        this.customButton.focus()
                    }, 0)
                }
                resetFilterLabelsDialog(t) {
                    t.preventDefault(), t.stopPropagation();
                    for (let e = 0; e < this.subscriptionsLabels.length; e++) {
                        const o = this.subscriptionsLabels[e].getAttribute("data-label-id");
                        for (let s = 0; s < this.dialogLabelItems.length; s++)
                            if (this.dialogLabelItems[s].labelId === o) {
                                this.dialogLabelItems[s].setCheckedForDropdownLabel(!1);
                                break
                            }
                    }
                    for (let e = 0; e < Object.keys(this.lastAppliedLabels).length; e++) {
                        const o = Object.keys(this.lastAppliedLabels)[e];
                        for (let s = 0; s < this.dialogLabelItems.length; s++)
                            if (this.dialogLabelItems[s].labelId === o) {
                                this.dialogLabelItems[s].setCheckedForDropdownLabel(!0);
                                break
                            }
                    }
                    this.subscriptionsContainer.replaceChildren(...Object.values(this.lastAppliedLabels)), this.closeFilterLabelsDialog(t)
                }
                openFilterLabelsDialog(t) {
                    t.preventDefault(), t.stopPropagation(), this.saveCurrentLabelsState(), this.customDialog.toggleAttribute("hidden", !0), this.filterLabelsDialog.toggleAttribute("hidden", !1), setTimeout(() => {
                        var e;
                        (e = this.filterLabelsDialog.querySelector("input[type=checkbox][autofocus]")) == null || e.focus()
                    }, 0)
                }
                closeFilterLabelsDialog(t) {
                    t.preventDefault(), t.stopPropagation(), this.menu.toggleAttribute("hidden", !0), this.customDialog.toggleAttribute("hidden", !1), this.filterLabelsDialog.toggleAttribute("hidden", !0)
                }
                applyFilterLabelsDialog(t) {
                    t.preventDefault(), t.stopPropagation(), this.saveCurrentLabelsState(), this.hideFilterSubtitle(), this.enableIssuesCheckbox(), this.closeFilterLabelsDialog(t)
                }
                enableIssuesCheckbox() {
                    const t = Object.keys(this.lastAppliedLabels).length > 0;
                    t && this.threadTypeCheckboxes.length > 0 && (this.threadTypeCheckboxes[0].checked = t), this.threadTypeCheckboxesUpdated()
                }
                hideFilterSubtitle() {
                    const t = Object.keys(this.lastAppliedLabels).length > 0;
                    this.subscriptionsSubtitle.toggleAttribute("hidden", t)
                }
                saveCurrentLabelsState() {
                    this.lastAppliedLabels = {}, this.labelInputs.innerHTML = "";
                    for (let t = 0; t < this.subscriptionsLabels.length; t++) {
                        const e = this.subscriptionsLabels[t].getAttribute("data-label-id");
                        e && (this.lastAppliedLabels[e] = this.subscriptionsLabels[t].cloneNode(!0), this.appendLabelToFormInput(e))
                    }
                }
                appendLabelToFormInput(t) {
                    const e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "labels[]"), e.setAttribute("value", t), this.labelInputs.appendChild(e)
                }
                detailsToggled() {
                    this.menu.toggleAttribute("hidden", !1), this.customDialog.toggleAttribute("hidden", !0)
                }
                submitCustom(t) {
                    t.preventDefault(), this.details.toggleAttribute("open", !1)
                }
                threadTypeCheckboxesUpdated() {
                    const t = !this.threadTypeCheckboxes.some(e => e.checked);
                    this.customSubmit.disabled = t
                }
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            };
            lt(c, "NotificationsListSubscriptionFormElement"), u([a], c.prototype, "details", 2), u([a], c.prototype, "menu", 2), u([a], c.prototype, "customButton", 2), u([a], c.prototype, "customDialog", 2), u([a], c.prototype, "filterLabelsDialog", 2), u([m], c.prototype, "subscriptionButtons", 2), u([m], c.prototype, "subscriptionsLabels", 2), u([a], c.prototype, "labelInputs", 2), u([a], c.prototype, "subscriptionsSubtitle", 2), u([a], c.prototype, "socialCount", 2), u([a], c.prototype, "unwatchButtonCopy", 2), u([a], c.prototype, "stopIgnoringButtonCopy", 2), u([a], c.prototype, "watchButtonCopy", 2), u([m], c.prototype, "threadTypeCheckboxes", 2), u([a], c.prototype, "customSubmit", 2), u([a], c.prototype, "subscriptionsContainer", 2), u([m], c.prototype, "dialogLabelItems", 2), c = u([p], c);
            var G = Object.defineProperty,
                ct = Object.getOwnPropertyDescriptor,
                ut = (t, e) => G(t, "name", {
                    value: e,
                    configurable: !0
                }),
                V = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? ct(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && G(e, o, i), i
                };
            let I = class extends HTMLElement {
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            };
            ut(I, "NotificationsTeamSubscriptionFormElement"), V([a], I.prototype, "details", 2), I = V([p], I);
            var W = Object.defineProperty,
                pt = Object.getOwnPropertyDescriptor,
                ht = (t, e) => W(t, "name", {
                    value: e,
                    configurable: !0
                }),
                _ = (t, e, o, s) => {
                    for (var i = s > 1 ? void 0 : s ? pt(e, o) : e, n = t.length - 1, r; n >= 0; n--)(r = t[n]) && (i = (s ? r(e, o, i) : r(i)) || i);
                    return s && i && W(e, o, i), i
                };
            let g = class extends HTMLElement {
                toggleDropdownLabel(t) {
                    if (t.preventDefault(), t.stopPropagation(), this.label) {
                        const e = this.label.getAttribute("aria-checked") === "true";
                        this.setCheckedForDropdownLabel(!e), this.dispatchEvent(new CustomEvent("notifications-dialog-label-toggled", {
                            detail: {
                                wasChecked: e,
                                toggledLabelId: this.labelId,
                                templateLabelElementClone: this.hiddenLabelTemplate.cloneNode(!0)
                            },
                            bubbles: !0
                        }))
                    }
                }
                setCheckedForDropdownLabel(t) {
                    this.label.setAttribute("aria-checked", t.toString())
                }
            };
            ht(g, "NotificationsDialogLabelItemElement"), _([a], g.prototype, "label", 2), _([a], g.prototype, "hiddenLabelTemplate", 2), _([a], g.prototype, "hiddenCheckboxInput", 2), _([E], g.prototype, "labelId", 2), g = _([p], g)
        }
    }
});
//# sourceMappingURL=notifications-global-a9614285.js.map