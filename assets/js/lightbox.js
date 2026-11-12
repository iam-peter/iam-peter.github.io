// Full-size image viewer for project pages. Every [data-lightbox] link
// opens its image in a dialog; arrow keys and the side buttons step
// through the page's images, Escape or a click beside the image closes.
const links = [...document.querySelectorAll("[data-lightbox]")];
if (links.length) {
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Image viewer");
  dialog.innerHTML = `
    <figure><img alt=""><figcaption></figcaption></figure>
    <button class="close" type="button" aria-label="Close">×</button>
    <button class="prev" type="button" aria-label="Previous image">‹</button>
    <button class="next" type="button" aria-label="Next image">›</button>`;
  document.body.append(dialog);
  const img = dialog.querySelector("img");
  const caption = dialog.querySelector("figcaption");
  const single = links.length === 1;
  dialog.querySelectorAll(".prev, .next").forEach(b => b.hidden = single);

  let current = 0;
  const show = i => {
    current = (i + links.length) % links.length;
    const link = links[current];
    img.src = link.href;
    img.alt = link.querySelector("img")?.alt ?? "";
    caption.textContent = link.dataset.caption ?? "";
  };

  links.forEach((link, i) => link.addEventListener("click", e => {
    e.preventDefault();
    show(i);
    dialog.showModal();
  }));
  dialog.querySelector(".close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".prev").addEventListener("click", () => show(current - 1));
  dialog.querySelector(".next").addEventListener("click", () => show(current + 1));
  // A click on the dark area around the image closes the viewer
  dialog.addEventListener("click", e => {
    if (e.target === dialog || e.target.tagName === "FIGURE") dialog.close();
  });
  dialog.addEventListener("keydown", e => {
    if (single) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
  // Drop the large image when closing so it does not linger in memory
  dialog.addEventListener("close", () => img.removeAttribute("src"));
}
