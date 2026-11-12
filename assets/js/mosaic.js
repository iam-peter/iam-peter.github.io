// Lay out the home page tiles with Masonry. The images carry their width
// and height, so every tile has its final size before the images load and
// the layout does not need to wait for them. Without JavaScript the tiles
// simply flow in rows.
(() => {
  const mosaic = document.querySelector(".mosaic");
  if (!mosaic) return;
  mosaic.classList.add("is-masonry");
  new Masonry(mosaic, {
    itemSelector: ".tile",
    columnWidth: ".mosaic-sizer",
    gutter: ".mosaic-gutter",
    percentPosition: true,
    transitionDuration: 0,
  });
})();
