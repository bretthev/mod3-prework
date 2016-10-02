const _ = require('lodash')

let analyzeFunction = function (array) {
    let average, underperform, overperform;
    array = _.sortBy(array, "income");
    average = _.reduce(array, function(totalIncome, freelancer) {
        return totalIncome + freelancer.income;
    }, 0);
    average = average / array.length;
    underperform = _.filter(array, function (freelancer) {
        return freelancer.income <= average;
    });
    overperform = _.filter(array, function (freelancer) {
        return freelancer.income > average;
    });
    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };
};

module.exports = analyzeFunction
