import { isMobile } from "../../helpers/screen";
import { scrollToBottom } from "../../helpers/scroll";
import { elementController } from "../../core";

export default elementController("section-hero", ({ root, on, query }) => {
  const iconHolder = query(".section-hero__icon-holder");

  on("mousemove", _parallaxHandler);
  on("click", _clickHandler);

  (function setAnimation() {
    window.addEventListener("load", () => {
      root.classList.add("section-hero--animate");
    });
  })();

  /** @param {MouseEvent} e */
  function _parallaxHandler(e) {
    if (!isMobile) {
      const speed = 2;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerWidth - e.pageY) / 100;
      const toPx = (value) => `${value}px`;

      root.style.setProperty("--mouse-x", toPx(x));
      root.style.setProperty("--mouse-y", toPx(y));
    }
  }

  /** @param {{target: HTMLElement}} param0 */
  function _clickHandler({ target }) {
    const clickedOnArrow = iconHolder?.contains(target);
    if (clickedOnArrow) scrollToBottom();
  }
});
