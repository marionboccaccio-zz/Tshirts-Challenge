const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tshirtSchema = new Schema({
  name: String,
  description: String,
  brand: String,
  price: Number,
  color: String,
  tshirtImage: {
    type: String,
    default: "./../../client/src/images/AmiParis-black.png"
  }
});

const tshirtModel = mongoose.model("Tshirt", tshirtSchema);

module.exports = tshirtModel;
