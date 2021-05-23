const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/api', apiRouter); 

module.exports = app;
