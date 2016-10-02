const _ = require('lodash')


var reduceFunction = function (array) {
    var reducedArray = [],
        total = 0;
    array = _.groupBy(array, 'article');
    _.forEach(array, function (article, key) {
        key = parseInt(key);
        total = 0;

        if (article.length === 1) {
            total = article[0].quantity;
        } else {
            total = _.reduce(article, function(sum, article) {
                return sum + article.quantity;
            }, 0);
        }
        reducedArray.push({
            article: key,
            total_orders: total
        });
    });
    reducedArray = _.sortBy(reducedArray, "total_orders").reverse();
    return reducedArray;
};

module.exports = reduceFunction
