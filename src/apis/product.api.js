const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

module.exports = function () {
    router.post('/create', controller.createProduct);
    router.get('/', controller.getProduct);
    return router;
}