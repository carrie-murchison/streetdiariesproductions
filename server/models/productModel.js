const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
  },
  description: {
    type: String,
    required: [true, 'A product must have a description'],
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
  image: {
    type: String,
    required: [true, 'A product must have an image'],
  },
  category: {
    type: String,
    enum: {
      values: ['t-shirt', 'hat'],
      message: 'Category should be either "t-shirt" or "hat"',
    },
    required: [true, 'A product must have a category'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
