const { model, Schema } = require("mongoose");


const orderScheme = new Schema({
    name: String,
    phoneNumber: String,
    address: String,
    registerDate: { type: Date, default: Date.now, required: false},
});


const OrderModel = model("Order", orderScheme);
module.exports = OrderModel;