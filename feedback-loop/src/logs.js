'use strict'

module.exports.respond = function (event, context, callback) {

  event.Records.forEach((record) => {
        // Kinesis data is base64 encoded so decode here
        const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log('Decoded payload:', payload);
    });
    callback(null, `Successfully processed ${event.Records.length} records.`);


  // const redis = require('./redis')()

  // let error, response
  // let key = 'counter'
  // redis.on('end', () => {
  //   callback(error, response)
  // })

  // redis.on('ready', function () {
  //     // set counter = 0
  //   redis.set(key, 0, (err) => {
  //       if (err) {
  //         redis.quit(() => {
  //           error = err
  //         })
  //       } else {
  //         redis.incr(key, res, (err) => {
  //           redis.quit(() => {
  //               response = res
  //             })
  //         })
  //       }
  //     })

  // })
}

