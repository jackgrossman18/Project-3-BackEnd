const mongoose = require("../db/connection");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  Username: String,
  Email: String,
  Password: String,
  "My-Cities": Number
});

mongoose.model("User", UserSchema);

module.exports = mongoose;
