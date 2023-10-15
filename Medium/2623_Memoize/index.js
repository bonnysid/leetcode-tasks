/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => {
  const results = {};

  return (...args) => {
    if (!args?.length) {
      return;
    }
    const key = JSON.stringify(args);
    const memoRes = results[key];
    if (memoRes !== undefined) {
      return memoRes;
    }
    results[key] = fn(...args);

    return results[key];
  }
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
