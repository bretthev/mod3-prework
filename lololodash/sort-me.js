const _ = require('lodash')

let sortFunction = function(object) {
  return _.sortBy(object, 'quantity').reverse()
}

module.exports = sortFunction
