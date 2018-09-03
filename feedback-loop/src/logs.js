'use strict'

module.exports.respond = function (event, callback) {
  const redis = require('./redis')()

  let error, response
  let key = 'counter'
  redis.on('end', () => {
    callback(error, response)
  })

  redis.on('ready', function () {
      // set counter = 0
    redis.set(key, 0, (err) => {
        if (err) {
          redis.quit(() => {
            error = err
          })
        } else {
          redis.incr(key, res, (err) => {
            redis.quit(() => {
                response = res
              })
          })
        }
      })

  })
}