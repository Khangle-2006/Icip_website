const filterButtons = document.querySelectorAll(".filter");
const gradcamItems = document.querySelectorAll(".gradcam-grid figure");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedView = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    gradcamItems.forEach((item) => {
      const shouldShow = selectedView === "all" || item.dataset.view === selectedView;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});

const copyButton = document.querySelector("#copyCitation");
const bibtex = document.querySelector("#bibtex");

if (copyButton && bibtex) {
  copyButton.addEventListener("click", async () => {
    const originalLabel = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(bibtex.textContent.trim());
      copyButton.textContent = "Copied";
    } catch {
      copyButton.textContent = "Select BibTeX";
    }

    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 1800);
  });
}
