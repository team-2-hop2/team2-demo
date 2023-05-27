const express = require("express");
const router = express.Router();

const {
    createCartInfo,
    getCartInfo,

} = require("../controller/cartController");
router
    .post('/',  createCartInfo)
    .get('/', getCartInfo)

module.exports = router;