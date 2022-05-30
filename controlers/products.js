const Product = require("../models/products");

const productsList = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json({ msg: "list", products });
  } catch (err) {
    return res.status(500).send({ err });
  }
};
const productsAdd = async (req, res, next) => {
  try {
    const data = req.body;
    const product = new Product(data);
    await product.save();
    return res.status(200).json({ msg: "add", product });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const productsById = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const product = await Product.findByPk(productId);
    res.status(200).json({ msg: "get product by id", product });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const productsUpdate = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    const result = await Product.update(data, {
      where: {
        id: productId,
      },
    });
    return res.status(200).json({ msg: "update", productId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const ProductsDelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const result = await Product.destroy({
      where: {
        id: productId,
      },
    });
    return res.status(200).json({ msg: "delete product", productId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};

module.exports = {
  productsList,
  productsAdd,
  productsById,
  productsUpdate,
  ProductsDelete,
};
