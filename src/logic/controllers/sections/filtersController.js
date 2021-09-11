import { elementController } from "../../core";
import { isMobile } from "../../helpers/screen";

const searchValues = {
  "sunlight-select": "",
  "water-select": "",
  "chew-select": "",
};

export default elementController("section-filters", ({ on, root, emit }) => {
  const animateClassModifier = "section-filters--animate";

  on("selectChange", _changeSelectionHandler);

  (function setupAnimation() {
    if (!isMobile) {
      on("global:load", _onLoadingWindowHandler);
    }
  })();

  function _onLoadingWindowHandler() {
    const timeoutToAnimate = setTimeout(() => {
      root.classList.add(animateClassModifier);
      clearTimeout(timeoutToAnimate);
    }, 1950);
    window.removeEventListener("load", _onLoadingWindowHandler);
  }

  function _changeSelectionHandler(e) {
    searchValues[e?.detail?.slug] = e?.detail?.value;
    const selectedAllFields = _selectedAllValues();

    if (selectedAllFields) {
      emit("user-selected-values", searchValues);
    }
  }

  /** @returns {boolean} */
  function _selectedAllValues() {
    const searchKeys = Object.keys(searchValues);
    const hasThreeValues = searchKeys.length === 3;
    const allKeysHasValues = searchKeys.every((key) => !!searchValues[key]);
    return hasThreeValues && allKeysHasValues;
  }
});
