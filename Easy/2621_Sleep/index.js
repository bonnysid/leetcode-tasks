/**
 * @param {number} millis
 * @return {Promise}
 */
const sleep = async (millis) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
