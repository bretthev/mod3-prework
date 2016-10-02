const _ = require('lodash')

let template = function (input) {
  return _.template('Hello <%= name %> (logins: <%=login.length %>)')({ name: input.name, login: input.login })
};

module.exports = template
