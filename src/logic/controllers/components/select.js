import { elementController } from "../../core";

export default elementController("select", ({ on, root, query, emit }) => {
  const virtualOptionClass = "app-select__virtual-option";
  const openClassModifier = "app-select--open";
  const nativeSelect = query(".app-select__select-input");
  const virtualOptionsHolder = query(".app-select__custom-options");
  const label = query(".app-select__label");

  on("click", _handleSelectClick);
  on("blur", _closeOptions);
  on("change", _handleNativeSelectChange);

  (function hydrateVirtualOptions() {
    if (nativeSelect instanceof HTMLElement) {
      const options = nativeSelect.children;
      const itensArray = Array.from(options);
      const htmlExcerpt = itensArray
        .map((option) =>
          option instanceof HTMLOptionElement
            ? `<li class="${virtualOptionClass}" data-value="${option.value}">${option.innerHTML}</li>`
            : ""
        )
        .filter((string) => !!string)
        .join("\n");

      if (virtualOptionsHolder instanceof HTMLElement) {
        virtualOptionsHolder.innerHTML = htmlExcerpt;
      }
    }
  })();

  function _openOptions() {
    root.classList.add(openClassModifier);
  }

  function _closeOptions() {
    root.classList.remove(openClassModifier);
  }

  /** @param {MouseEvent} e */
  function _handleSelectClick(e) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const elementClasses = Array.from(target.classList);
    const isOption = elementClasses.includes(virtualOptionClass);

    if (isOption) {
      _handleChooseOption(target);
    } else {
      _openOptions();
    }
  }

  /** @param {HTMLElement} option */
  function _handleChooseOption(option) {
    const optionValue = option.dataset.value;
    const labelValue = option.innerHTML;
    if (!!label) {
      label.innerHTML = labelValue;
    }
    const newValue = String(optionValue);
    if (nativeSelect instanceof HTMLSelectElement) {
      nativeSelect.value = newValue;
    }
    _emitSelectChange(newValue);
    _closeOptions();
  }

  /** @param {{target: HTMLSelectElement}} target */
  function _handleNativeSelectChange({ target }) {
    const value = target?.value;
    _emitSelectChange(value);
  }

  /** @param {string} newValue */
  function _emitSelectChange(newValue) {
    const fieldSlug = root?.dataset?.fieldSlug;
    emit("selectChange", { slug: fieldSlug, value: newValue });
  }
});
