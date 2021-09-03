import { elementController } from "../../core";

export default elementController("select", ({ on, root, query, emit }) => {
  const virtualOptionClass = "app-select__virtual-option";
  const nativeSelect = query(".app-select__select-input");
  const virtualOptionsHolder = query(".app-select__custom-options");

  on("click", (e) => {
    handleSelectOption(e);
  });

  hydrateVirtualOptions();

  function hydrateVirtualOptions() {
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
  }

  /** @param {MouseEvent} e */
  function handleSelectOption(e) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const elementClasses = Array.from(target.classList);
    const isOption = elementClasses.includes(virtualOptionClass);
    if (!isOption) return;
    const optionValue = target.dataset.value;
    if (nativeSelect instanceof HTMLSelectElement) {
      const newValue = String(optionValue);
      const fieldSlug = root?.dataset?.fieldSlug;
      nativeSelect.value = newValue;
      emit("selectChange", { slug: fieldSlug, value: newValue });
    }
  }
});
