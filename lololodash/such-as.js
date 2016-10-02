const _ = require('lodash')

let chainMethods = function (wordArray) {
    return _.chain(wordArray)
      .sortBy()
      .map(function (word) {
        return word + 'CHAINED';
      })
      .map(function (word) {
        return word.toUpperCase();
      })
};

module.exports = chainMethods
