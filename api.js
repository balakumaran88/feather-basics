const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const Services = require('./services/index')

const app = express(feathers())
                    .configure(express.rest())
                    .use(express.urlencoded({ extended: true }))
                    .use(express.errorHandler());

app
    .configure(Services)


module.exports = app;