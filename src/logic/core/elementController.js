/**
 * Create a logic controller for a html fragment
 * @param {string} fragmentName
 * @param {import('./types').BuilderFuncion} builderFunction
 */
function elementController(fragmentName, builderFunction) {
  if (!fragmentName && typeof fragmentName !== "string") {
    throw new TypeError("fragment name is required");
  }

  const elementInstancesNodes = document.querySelectorAll(
    `[data-fragment=${fragmentName}]`
  ) || [];

  const elementInstances = Array.from(elementInstancesNodes)

  return () => {
    elementInstances.forEach(element => {
      builderFunction({root: element})
    })
  }
}

export default elementController;
