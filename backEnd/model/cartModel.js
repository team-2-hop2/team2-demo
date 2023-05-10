const { model, Schema } = require("mongoose");


const cartScheme = new Schema({    
    owner: {
        type: Schema.ObjectId, 
        ref:"User", 
        required:true
    },
    registerDate: { type: Date, default: Date.now, required: false},
});


const CartModel = model("Cart", cartScheme);
module.exports = CartModel;