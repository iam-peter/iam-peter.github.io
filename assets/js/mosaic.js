// Lay out every .mosaic on the page with Masonry. The images carry their
// width and height, so every tile has its final size before the images
// load and the layout does not need to wait for them. Without JavaScript
// the tiles simply flow in rows.
document.querySelectorAll(".mosaic").forEach(mosaic => {
  mosaic.classList.add("is-masonry");
  const masonry = new Masonry(mosaic, {
    itemSelector: ".tile",
    columnWidth: ".mosaic-sizer",
    gutter: ".mosaic-gutter",
    percentPosition: true,
    transitionDuration: 0,
  });
  // Card text can change height once everything has loaded
  addEventListener("load", () => masonry.layout());
});
