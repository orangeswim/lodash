import baseEach from './_baseEach.js';

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  const result = [];
  baseEach(collection, (value, index, collection) => {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

export default baseFilter;