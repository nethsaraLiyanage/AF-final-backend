const Product = require('../models/product.model');

const createProduct = async (req, res) => {
    if (req.body) {
      const product = new Product(req.body);
      product.save()
      .then(data => {
        res.status(200).send({ data: data });
      })
      .catch(error => {
        res.status(500).send({ error: error.message });
      });
    }
}

const getProduct = async (req, res) => {
  await Product.find({})
  .then(data => {
    res.status(200).send({ data: data });
  })
  .catch(error => {
    res.status(500).send({ error: error.message });
  });
}

  
module.exports = {
    createProduct,
    getProduct
};