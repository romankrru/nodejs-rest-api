const express = require('express');
const morgan = require('morgan');

const app = express();

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productsRoute);
app.use('/order', ordersRoute);

module.exports = app;