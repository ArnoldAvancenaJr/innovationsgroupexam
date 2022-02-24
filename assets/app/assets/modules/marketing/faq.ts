// Expand an FAQ item if it matches the current URL hash.
if (window.location.hash) {
  const faq_item = document.querySelector<HTMLDetailsElement>(`.faq-mktg-item${window.location.hash} details`)

  if (faq_item) {
    faq_item.open = true
  }
}
