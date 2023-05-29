const CartModel = require("../model/cartModel");

exports.createCartInfo = async (request, response) => {
  try {
    const { name, size, count, price, image } = request.body;
    const createCartInfo = await CartModel.create({
      name: name, 
      size: size,
      count: count,
      price: price,
      image:image,
      id:1,
    });
    response.status(201).json({ message: `created`, data: createCartInfo });
  } catch (err) {
    console.log(err.message);
    return response.status(400).json({ message: err });
  }
};

exports.getCartInfo = async (request, response) => {
  try {
    const cartInfo = await CartModel.find()
    return response.status(200).json({
      message: true,
      data: cartInfo                          
    });
  } catch (error) {
    return response.status(200).json({ message: error, data: null });
  }
};
