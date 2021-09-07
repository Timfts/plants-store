import { elementController } from "../../core";
import { scrollToBottom } from "../../helpers/scroll";
import {
  hideEmptyResultsSection,
  showEmptyResultsSection,
} from "../../helpers/display-empty-results";
import getPlantsList from "../../services/plans-api";

/** @typedef {import('../../entities/Plant').default} Plant */

export default elementController(
  "section-plants-results",
  ({ root, query }) => {
    const visibleResultsSectionClass = "section-plants-results--visible";
    const cardsHolder = query(".section-plants-results__cards-holder");

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
        _renderCards(plants);
        _makeResultsVisible();
        root.scrollIntoView()
      } else {
        showEmptyResultsSection();
        _makeResultsHide();
      }
      
    }

    function _makeResultsVisible() {
      root.classList.add(visibleResultsSectionClass);
    }

    function _makeResultsHide() {
      root.classList.remove(visibleResultsSectionClass);
    }

    /** @param {Plant[]} plants  */
    function _renderCards(plants) {
      if (!!cardsHolder) {
        cardsHolder.innerHTML = plants
          .sort((plant) => (plant.staffFavorite ? -1 : 1)) //put staff favorite first
          .map((plant) => _plantCardMarkup(plant))
          .join("\n");
      }
    }

    /** @param {Plant} plant */
    function _plantCardMarkup(plant) {
      const isStaffFavorite = !!plant.staffFavorite;
      const mainClass = "plant-card";
      const favoriteClass = isStaffFavorite ? `${mainClass}--favorite` : "";
      const elementClass = `${mainClass} ${favoriteClass}`;
      const title = `<h2 class="plant-card__title">${plant.name}</h2>`;

      return `
        <div class=${elementClass}>
          ${
            isStaffFavorite
              ? '<div class="plant-card__staff-favorite-flag"><h3>✨ Staff favorite</h3></div>'
              : ""
          }
          <div class="plant-card__image-holder">
            <img src="${plant.url}" alt="plant image" />
          </div>
          ${!isStaffFavorite ? title : ""}
          <div class="plant-card__desc">
            <div class="plant-card__left">
              ${isStaffFavorite ? title : ""}
            </div>
            <div class="plant-card__right">
              <p>${plant.formattedPrice}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
);
