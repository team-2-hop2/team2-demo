const ProductModel = require("../model/productModel");
const fs = require('fs');
const path = require('path');


exports.createProduct = async (request, response) => {

  try {
    const { name, price, size, color, image, highlight, discount  } = request.body;
    // const images = image;
    return response.status(200).json(request.body.image)
    if (!Array.isArray(image)) {
      return res.status(400).json({ error: 'Images field should be an array.' });
    }
    const uploadDir = "C:" + String.fromCharCode(92) + "Users" + String.fromCharCode(92) + "User" + String.fromCharCode(92) + "Desktop" + String.fromCharCode(92) + "Coding"+ String.fromCharCode(92) + "team2-demo" + String.fromCharCode(92) + "backEnd" + String.fromCharCode(92) + "image";
    console.log(uploadDir)
    for (let i = 0; i < image.length; i++) {
      const file = image[i];
      console.log(file);
      const fileName = "qwertyuio.jpg";
      const filePath = path.join(uploadDir, fileName);
      console.log('===> path:  ',filePath), 

      file.mv(filePath, (err) => {
        if (err) {
          console.error('Failed to upload image:', err);
          return res.status(500).json({ error: 'Failed to upload image.' });
        }
      });
    }

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
