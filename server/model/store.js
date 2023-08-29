const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("store", storeSchema);
