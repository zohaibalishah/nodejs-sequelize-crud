const express = require("express");
const router = express.Router();
const products = require("../controlers/products");

router.get("/", products.productsList);
router.get("/:id", products.productsById);
router.post("/", products.productsAdd);
router.put("/:id", products.productsUpdate);
router.delete("/:id", products.ProductsDelete);

module.exports = router;
