// Lay out every .mosaic on the page with Masonry. The images carry their
// width and height, so every tile has its final size before the images
// load and the layout does not need to wait for them. Without JavaScript
// the tiles simply flow in rows.
document.querySelectorAll(".mosaic").forEach(mosaic => {
  mosaic.classList.add("is-masonry");
  const masonry = new Masonry(mosaic, {
    itemSelector: ".tile:not([hidden])",
    columnWidth: ".mosaic-sizer",
    gutter: ".mosaic-gutter",
    percentPosition: true,
    transitionDuration: 0,
  });
  const relayout = () => { masonry.reloadItems(); masonry.layout(); };
  // Card text changes height once the heading font has loaded
  document.fonts.ready.then(relayout);
  addEventListener("load", relayout);
  mosaic.relayout = relayout;
});

// Filter buttons on the projects page. The selected filter is kept in the
// URL hash, so /projects/#web links straight to the web projects.
const filters = document.querySelector(".filters");
if (filters) {
  const buttons = [...filters.querySelectorAll("button")];
  const mosaic = document.querySelector(".mosaic");
  const select = key => {
    buttons.forEach(b => b.setAttribute("aria-pressed", b.dataset.filter === key));
    document.querySelectorAll("[data-note]").forEach(p => p.hidden = p.dataset.note !== key);
    mosaic.querySelectorAll(".tile").forEach(t =>
      t.hidden = key !== "all" && t.dataset.category !== key);
    mosaic.relayout();
  };
  buttons.forEach(b => b.addEventListener("click", () => {
    select(b.dataset.filter);
    history.replaceState(null, "", b.dataset.hash ? "#" + b.dataset.hash : location.pathname);
  }));
  const fromHash = buttons.find(b => b.dataset.hash && "#" + b.dataset.hash === location.hash);
  if (fromHash) select(fromHash.dataset.filter);
  filters.hidden = false;
}
