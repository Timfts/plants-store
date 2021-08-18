import { isMobile } from "../../helpers/screen";
import { elementController } from "../../core";

export default elementController("hero-section", ({ root, on }) => {
  on("mousemove", parallaxHandler);

  /** @param {MouseEvent} e */
  function parallaxHandler(e) {
    if (!isMobile) {
      const speed = 2;
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerWidth - e.pageY) / 100;
      const toPx = (value) => `${value}px`;

      root.style.setProperty("--mouse-x", toPx(x));
      root.style.setProperty("--mouse-y", toPx(y));
    }
  }
});
