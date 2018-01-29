const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../models/product');

router.get('/', (req, res, next) => {
  Product.find()
    .select('name price _id')
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => (
          {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            request: {
              type: 'GET',
              url: `${process.env.HOME_URL}/products/${doc._id}`
            },
          }
        )),
      };
      res.status(200);
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({
        error: err
      })
    });
});

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Created successfully',
        createdProduct: {
          _id: product._id,
          name: product.name,
          price: product.price,
          request: {
            type: 'GET',
            url: `${process.env.HOME_URL}/products/${product._id}`
          },
        },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({
        error: err,
      });
    });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;

  Product.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        const response = {
          _id: doc._id,
          name: doc.name,
          price: doc.price,
        };

        res.status(200).json(response);
      } else {
        res.status(404);
        res.json({
          message: 'No entry found for provided ID',
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({
        error: err,
      })
    });
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;
  const updateOperations = {};

  for (let ops of req.body) {
    updateOperations[ops.propName] = ops.value;
  }

  Product.update({_id: id}, {
    $set: updateOperations,
  })
  .exec()
  .then(result => {
    res.status(200);
    res.json({
      message: 'Updated successfully',
      request: {
        type: 'GET',
        url: `${process.env.HOME_URL}/products/${id}`
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500);
    res.json({
      error: err,
    });
  });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;

  Product.remove({
    _id: id,
  })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Deleted successfully',
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500);
      res.json({
        error: err,
      });
    });
});

module.exports = router;