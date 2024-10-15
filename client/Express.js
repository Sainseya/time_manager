const express = require('express');
const logger = require('morgan');
const cors = require('cors'); //<--install this lib

const app = express();

cors({ credentials: true, origin: true });//enable some headers for handling authentication tokens
app.use(cors());//use in your server
app.use(express.json());

if (process.env.NODE_ENV !== 'test') { app.use(logger('dev')); }

app.use(require('./server/index'));

module.exports = app;