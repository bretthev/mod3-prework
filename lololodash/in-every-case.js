const _ = require('lodash')

const addCitySize = function (cityCollection) {
  return _.forEach(cityCollection, function(city) {
    if (city.population > 1) {return city.size = 'big'}
    else if (city.population > .5) { return city.size = 'med' }
    else { return city.size = 'small'}
  })
}

module.exports = addCitySize
