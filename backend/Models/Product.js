const mongoose = require ('mongoose')
const productSchema = new mongoose.Schema({
 name: {
        type: String,
        required: true,
        unique:true
    },
    category: {
          type: String,
        required: true
    },
    price: {
          type: Number,
        required: true
    },
    description:{
          type: String,
        required: true
    },
    countInStock: {
            type: Number,
        required: true,
        min:0
    },
    image: {
          type: String,
        required: true
    },
    images: {
        type: [String],
        required: false
    }
});

const Product = mongoose.model('Product', productSchema); // save it in db
module.exports = Product;