const mongoose = require("../db/connection");
var Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/heir-pollution");

const CitySchema = new Schema({
  "City-Name": String,
  Country: String,
  Lat: Number,
  Long: Number,
  "UV-Index": Number
  //   "AQ-Index": Number
});

// var City = mongoose.model("City", CitySchema);
module.exports = {
  City: mongoose.model("City", City)
};
