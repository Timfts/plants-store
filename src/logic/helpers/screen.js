export const isMobile = window.matchMedia("(max-width: 768px)").matches;

export function getDocumentHeight() {
  const body = document.body;
  return Math.max(body.scrollHeight, body.offsetHeight);
}
