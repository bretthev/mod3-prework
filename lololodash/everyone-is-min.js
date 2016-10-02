const _ = require ('lodash')

let checkCityTemps = function (cities) {
    var answer = {
        hot: [],
        warm: []
    };

    function checkForHot (cities) {
        return cities > 19;
    }

    _.forEach(cities, function (city, name) {

        if (_.every(city, checkForHot)) {
            answer.hot.push(name);
        } else if (_.some(city, checkForHot)) {
            answer.warm.push(name);
        }

    });

    return answer;
};

module.exports = checkCityTemps
