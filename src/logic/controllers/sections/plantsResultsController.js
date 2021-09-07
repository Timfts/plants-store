import { elementController } from "../../core";
import { scrollToBottom } from "../../helpers/scroll";
import {
  hideEmptyResultsSection,
  showEmptyResultsSection,
} from "../../helpers/display-empty-results";
import getPlantsList from "../../services/plans-api";

export default elementController("section-plants-results", ({ root }) => {
  const visibleResultsSectionClass = "section-plants-results--visible";

  (function listenForSelection() {
    window.addEventListener("user-selected-values", _handleOnSelectFilters);
  })();

  async function _handleOnSelectFilters(e) {
    const {
      "sunlight-select": sunlight,
      "water-select": water,
      "chew-select": chew,
    } = e?.detail;

    const plants = await getPlantsList({ sunlight, water, chew });
    const hasPlants = !!plants.length;

    if (hasPlants) {
      hideEmptyResultsSection();
      _makeResultsVisible();
    } else {
      showEmptyResultsSection();
      _makeResultsHide();
    }
    scrollToBottom();
  }

  function _makeResultsVisible() {
    root.classList.add(visibleResultsSectionClass);
  }

  function _makeResultsHide() {
    root.classList.remove(visibleResultsSectionClass);
  }
});
