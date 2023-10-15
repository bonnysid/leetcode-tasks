/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = undefined;
    }, t);
  }
};


const log = debounce(console.log, 10000);
log('Hello 1'); // cancelled
log('Hello 2'); // cancelled
log('Hello 3'); // Logged at t=100ms

