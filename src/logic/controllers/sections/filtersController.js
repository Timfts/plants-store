import { elementController } from "../../core";
import { isMobile } from "../../helpers/screen";

const test = {};

export default elementController("section-filters", ({ on, root }) => {
  const animateClassModifier = "section-filters--animate";

  on("selectChange", (e) => {
    test[e?.detail?.slug] = e?.detail?.value;
    makeRequest();
  });

  (function setupAnimation() {
    if (!isMobile) {
      window.addEventListener("load", _onLoadingWindowHandler);
    }
  })();

  function _onLoadingWindowHandler() {
    const timeoutToAnimate = setTimeout(() => {
      root.classList.add(animateClassModifier);
      clearTimeout(timeoutToAnimate);
    }, 1950);
    window.removeEventListener("load", _onLoadingWindowHandler);
  }

  function makeRequest() {
    console.log(test);
  }
});
