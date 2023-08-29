const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("customer", customerSchema);
