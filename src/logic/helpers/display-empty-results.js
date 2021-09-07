const emptyResultsSection = document.querySelector(".section-no-results");
const hideClass = "section-no-results--hide";

export function showEmptyResultsSection() {
  emptyResultsSection?.classList?.remove(hideClass);
}

export function hideEmptyResultsSection() {
  emptyResultsSection?.classList?.add(hideClass);
}
