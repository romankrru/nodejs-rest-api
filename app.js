const express = require('express');
const morgan = require('morgan');

const app = express();

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use(morgan('dev'));

app.use('/products', productsRoute);
app.use('/order', ordersRoute);

// error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;