# Feedback Loop Service 

## Endpoints

These AWS Lambda functions read data coming off the Kinesis Data Streams and feed it back to the main application as quickly as possible.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/docker-for-mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/docker-for-windows/install/) for Windows
* [Install instructions](https://docs.docker.com/engine/installation/linux/ubuntu/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/engine/installation/) for other platforms

Install [Docker Compose](https://docs.docker.com/compose/install/) on your system.

## Usage

### Development

To start AWS SAM, DynamoDB and Redis:

* Run `docker-compose up` to create and start the AWS SAM instance and all DB containers.

# Tests

a. Test cases are written using **TestCafe, mocha.js, should.js, supertest.js** to perform GET, PUT, POST and DELETE requests on the fake apis. With every modification request, the local DynamoDB gets updated. 

To run the tests:

* Run `npm test` in a new terminal of your development machine