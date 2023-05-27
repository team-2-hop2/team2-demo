const express = require("express");
const router = express.Router();

const {
    createProduct,
    getProduct,

} = require("../controller/productController");
router
    .post('/', createProduct)
    .get('/', getProduct)

module.exports = router;