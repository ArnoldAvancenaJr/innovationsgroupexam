System.register(["./chunk-vendor.js"], function() {
    "use strict";
    var a, l, n;
    return {
        setters: [function(s) {
            a = s.o, l = s.h, n = s.f
        }],
        execute: function() {
            var s = Object.defineProperty,
                h = (i, t) => s(i, "name", {
                    value: t,
                    configurable: !0
                });
            class u {
                constructor(t) {
                    this.container = t.container, this.selections = t.selections, this.inputWrap = t.inputWrap, this.input = t.input, this.tagTemplate = t.tagTemplate, this.form = this.input.form, this.autoComplete = t.autoComplete, this.multiTagInput = t.multiTagInput
                }
                setup() {
                    this.container.addEventListener("click", t => {
                        t.target.closest(".js-remove") ? this.removeTag(t) : this.onFocus()
                    }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete.addEventListener("auto-complete-change", () => {
                        this.selectTag(this.autoComplete.value)
                    })
                }
                onFocus() {
                    this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
                }
                onBlur() {
                    this.inputWrap.classList.remove("focus"), this.autoComplete.open || this.onSubmit()
                }
                onSubmit() {
                    this.input.value && (this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                onKeyDown(t) {
                    switch (l(t)) {
                        case "Backspace":
                            this.onBackspace();
                            break;
                        case "Enter":
                        case "Tab":
                            this.taggifyValueWhenSuggesterHidden(t);
                            break;
                        case ",":
                        case " ":
                            this.taggifyValue(t);
                            break
                    }
                }
                taggifyValueWhenSuggesterHidden(t) {
                    !this.autoComplete.open && this.input.value && (t.preventDefault(), this.selectTag(this.input.value))
                }
                taggifyValue(t) {
                    this.input.value && (t.preventDefault(), this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                selectTag(t) {
                    const e = this.normalizeTag(t),
                        r = this.selectedTags();
                    let c = !1;
                    for (let o = 0; o < e.length; o++) {
                        const p = e[o];
                        r.indexOf(p) < 0 && (this.selections.appendChild(this.templateTag(p)), c = !0)
                    }
                    c && (this.input.value = "", n(this.form, "tags:changed"))
                }
                removeTag(t) {
                    const e = t.target;
                    t.preventDefault(), e.closest(".js-tag-input-tag").remove(), n(this.form, "tags:changed")
                }
                templateTag(t) {
                    const e = this.tagTemplate.cloneNode(!0);
                    return e.querySelector("input").value = t, e.querySelector(".js-placeholder-tag-name").replaceWith(t), e.classList.remove("d-none", "js-template"), e
                }
                normalizeTag(t) {
                    const e = t.toLowerCase().trim();
                    return e ? this.multiTagInput ? e.split(/[\s,']+/) : [e.replace(/[\s,']+/g, "-")] : []
                }
                onBackspace() {
                    if (!this.input.value) {
                        const t = this.selections.querySelector("li:last-child .js-remove");
                        t instanceof HTMLElement && t.click()
                    }
                }
                selectedTags() {
                    const t = this.selections.querySelectorAll("input");
                    return Array.from(t).map(e => e.value).filter(e => e.length > 0)
                }
            }
            h(u, "TagInput"), a(".js-tag-input-container", {
                constructor: HTMLElement,
                initialize(i) {
                    new u({
                        container: i,
                        inputWrap: i.querySelector(".js-tag-input-wrapper"),
                        input: i.querySelector('input[type="text"], input:not([type])'),
                        selections: i.querySelector(".js-tag-input-selected-tags"),
                        tagTemplate: i.querySelector(".js-template"),
                        autoComplete: i.querySelector("auto-complete"),
                        multiTagInput: !1
                    }).setup()
                }
            }), a(".js-multi-tag-input-container", {
                constructor: HTMLElement,
                initialize(i) {
                    new u({
                        container: i,
                        inputWrap: i.querySelector(".js-tag-input-wrapper"),
                        input: i.querySelector('input[type="text"], input:not([type])'),
                        selections: i.querySelector(".js-tag-input-selected-tags"),
                        tagTemplate: i.querySelector(".js-template"),
                        autoComplete: i.querySelector("auto-complete"),
                        multiTagInput: !0
                    }).setup()
                }
            })
        }
    }
});
//# sourceMappingURL=chunk-tag-input-50df751e.js.map