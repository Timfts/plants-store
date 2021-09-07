import { getDocumentHeight } from "./screen";

export function scrollToBottom() {
  const documentSize = getDocumentHeight();
  window.scrollTo(0, documentSize);
}
