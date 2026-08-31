/** Move the document to the page origin with the same motion as the About tab. */
export function jumpToPageTop() {
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  if (behavior === "smooth") {
    window.scrollTo({ top: 0, left: 0, behavior });
    return;
  }

  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  // Force the style change to commit before scrollTo. Chromium can otherwise
  // keep using a previously computed smooth-scroll style for this call.
  root.getClientRects();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Keep the override through the browser's current scroll commit. Restoring
  // synchronously can let a previously queued smooth scroll continue running.
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });
  });
}
