const mongoose = require('mongoose');

// create a schema for product
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId:String,
    company:String
});

// create a model
module.exports = mongoose.model("products", productSchema);   