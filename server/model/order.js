const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
  customerid: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductQuantity: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("order", orderSchema);
