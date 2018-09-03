'use strict';

const lib = require('./logs')

module.exports.handler = function (event, context) {
    lib.respond(event, (err, res) => {
      if (err) {
        return context.fail(err)
      } else {
        return context.succeed(res)
      }
    })
}
