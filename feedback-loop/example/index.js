'use strict';

// A simple hello world Lambda function
// exports.handler = (event, context, callback) => {

//     console.log('LOG: Received an event' );

//     callback(null, {
//         statusCode: 200,
//         body: "Hello, World!"
//     })

// }



//redis code

// var redis = require("redis"),
//     client = redis.createClient();

// client.set("string key", "string val", redis.print);
// client.hset("hash key", "hashtest 1", "some value", redis.print);

exports.handler = (event, context, callback) => {

    let id =  (event.pathParameters || {}).product || false;
    switch(event.httpMethod){

        case "GET":

            if(id) {
                callback(null, {body: "This is a READ operation on ID " + id});
                return;  
            } 

            callback(null, {body: "This is a LIST operation, return all items"});
            break;

        case "POST":            
            callback(null, {body: "This is a CREATE operation"}); 
            break;

        default:
            // Send HTTP 501: Not Implemented
            console.log("Error: unsupported HTTP method (" + event.httpMethod + ")");
            callback(null, { statusCode: 501 })

    }

}
