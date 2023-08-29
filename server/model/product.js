const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  Availability: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);
