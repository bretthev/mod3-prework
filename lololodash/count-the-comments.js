const _ = require('lodash')

let countComments = function (comments) {
    let countedComments = [];
    comments = _.groupBy(comments, "username");
    _.forEach(comments, function (item, name) {
        countedComments.push({
            username: name,
            comment_count: _.size(item)
        });
    });
    return _.sortBy(countedComments, "comment_count").reverse();
};

module.exports = countComments
