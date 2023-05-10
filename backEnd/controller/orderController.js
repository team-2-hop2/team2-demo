const OrderModel = require("../model/orderModel");

exports.createOrder = async (request, response) => {
  try {
    const { name, phoneNumber, address,  } = request.body;
    const createOrder = await OrderModel.create({
      name: name,
      phoneNumber: phoneNumber,
      address: address,
    });
    response.status(201).json({ message: `created`, data: createOrder });
  } catch (err) {
    console.log(err.message);
    return response.status(400).json({ message: err });
  }
};

exports.getOrders = async (request, response) => {
  try {
    const { post } = request.body
    const orders = await comModel.find()
    return response.status(200).json({
      message: true,
      data: orders                            
    });
  } catch (error) {
    return response.status(200).json({ message: error, data: null });
  }
};

