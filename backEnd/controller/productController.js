const ProductModel = require("../model/productModel");
const fs = require('fs');
const path = require('path');


exports.createProduct = async (request, response) => {

  try {
    const { name, price, size, image, highlight, discount  } = request.body;
    const createProduct = await ProductModel.create({
      name: name,
      price: price,
      size: size,
      image: image,
      highlight: highlight,
      discount: discount
    });
    response.status(201).json({ message: `created`, data: createProduct});
  } catch (err) {
    console.log(err.message);
    return response.status(400).json({ message: err });
  }
};

exports.getProduct = async (request, response) => {
  try {
    const products = await ProductModel.find();
    return response.status(200).json({
      message: true,
      data: products                            
    })
  } catch (error) {
    return response.status(200).json({ message: error.message, data: null });
  }
};
