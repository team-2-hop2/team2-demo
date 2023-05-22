const { model, Schema } = require("mongoose");


const cartScheme = new Schema({   
    name: String,
    size: String,
    count: String,
    price: String,
    id: String,
    // owner: {
    //     type: Schema.ObjectId, 
    //     ref:"User", 
    //     required:true
    // },
    registerDate: { type: Date, default: Date.now, required: false},
});


const CartModel = model("Cart", cartScheme);
module.exports = CartModel;