/**
 * Create a logic controller for a html fragment
 * @param {string} fragmentName
 * @param {import('./types').BuilderFuncion} builderFunction
 */
function elementController(fragmentName, builderFunction) {
  if (!fragmentName && typeof fragmentName !== "string") {
    throw new TypeError("fragment name is required");
  }

  /** @type {NodeListOf.<HTMLElement>} */
  const elementInstancesNodes =
    document.querySelectorAll(`[data-fragment=${fragmentName}]`) || [];

  const elementInstances = Array.from(elementInstancesNodes);

  return () => {
    elementInstances.forEach((element) => {
      /** @type {import("./types").ControllerEventHandler}  */
      function on(eventName, handler) {
        element.addEventListener(eventName, handler);
      }

      /** @type {import("./types").Queryfunction} */
      function query(queryString) {
        return element.querySelector(queryString);
      }

      /** @returns {NodeListOf.<HTMLElement>} */
      function queryAll(queryString) {
        return element.querySelectorAll(queryString);
      }

      function emit(eventName, payload = {}) {
        const event = new CustomEvent(eventName, {
          bubbles: true,
          detail: { ...payload },
        });
        element.dispatchEvent(event);
      }

      builderFunction({ root: element, on, query, queryAll, emit });
    });
  };
}

export default elementController;
