const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://node-rest-shop:' + process.env.MONGO_ATLAS_PW+'@node-rest-shop-shard-00-00-r6e2v.mongodb.net:27017,node-rest-shop-shard-00-01-r6e2v.mongodb.net:27017,node-rest-shop-shard-00-02-r6e2v.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin',
  {
    useMongoClient: true,
  }
);

const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// CORS handling
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


// routes
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

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