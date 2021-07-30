const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = mongoose.model("Product", new Schema({
    image: String,
    title: String,
    quantity: String,
    price: Number
}));


module.exports = Product
