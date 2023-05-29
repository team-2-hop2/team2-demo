const { model, Schema } = require("mongoose");


const productScheme = new Schema({   
    name: String,
    price: String,
    size: Array,
    image: Array,
    highlight: Boolean,
    discount: Boolean,
    id:String,
    registerDate: { type: Date, default: Date.now, required: false},
});


const ProductModel = model("Products", productScheme);
module.exports = ProductModel;