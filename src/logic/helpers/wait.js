/**
 * @param {number} time
 * @returns {Promise}
 */
export default function wait(time) {
  return new Promise((res) => {
    const timeoutToWait = setTimeout(() => {
      clearTimeout(timeoutToWait);
      res(undefined);
    }, time);
  });
}
