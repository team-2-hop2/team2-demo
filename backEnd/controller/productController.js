const ProductModel = require("../model/productModel");
const fs = require('fs');
const path = require('path');

exports.createProduct = async (request, response) => {

  try {
    const { name, price, size, color, image, highlight, discount  } = request.body;
    
    const images = image;

    if (!Array.isArray(images)) {
      return res.status(400).json({ error: 'Images field should be an array.' });
    }

    const uploadDir = path.join(__dirname, 'uploads');
    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const fileName = Date.now() + '-' + file.originalname;
      const filePath = path.join(uploadDir, fileName);
  
      // Move the file to the desired upload directory
      file.mv(filePath, (err) => {
        if (err) {
          console.error('Failed to upload image:', err);
          return res.status(500).json({ error: 'Failed to upload image.' });
        }
      });
    }
  
    // Return a response indicating successful upload
    res.status(200).json({ message: 'Product uploaded successfully.' });
  
    const createProduct = await ProductModel.create({
      name: name,
      price: price,
      size: size,
      color: color,
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
    console.log('getProducts');
    const products = await ProductModel.find();
    console.log(products);
    return response.status(200).json({
      message: true,
      data: products                            
    })
  } catch (error) {
    return response.status(200).json({ message: error.message, data: null });
  }
};
