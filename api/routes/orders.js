const express = require('express');
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

const router = express.Router();

router.get('/', (req, res, next) => {
  Order.find()
    .select('product quantity _id')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => ({
          _id: doc._id,
          product: doc.product,
          request: {
            type: 'GET',
            url: `${process.env.HOME_URL}/orders/${doc._id}`,
          },
        })),
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post('/', (req, res, next) => {
  Product.findById(req.body.productId)
    .then(product => {
      if (!product) {
        return res.status(404).json({
          message: 'Prodduct not found',
        });
      }

      const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId,
      });

      return order.save();
    })
    .then(result => {
      res.status(200).json({
        message: 'Order stored',
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
          request: {
            type: 'GET',
            url: `${process.env.HOME_URL}/orders/${result._id}`,
          },
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });  
});

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
    .exec()
    .then(result => {
      if (!result) {
        res.status(404).json({
          message: 'Not found',
        });
      }

      res.status(200).json({
        _id: result._id,
        product: result.product,
        quantity: result.quantity,
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    });
});

router.delete('/:orderId', (req, res, next) => {
  Order
    .remove({
      _id: req.params.orderId,
    })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Order deleted',
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err,
      });
    })
});

module.exports = router;