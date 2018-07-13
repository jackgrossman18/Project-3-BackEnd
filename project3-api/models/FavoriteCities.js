const mongoose = require("../db/connection");
var Schema = mongoose.Schema;

const FavoriteCitiesSchema = new Schema({
  Email: String,
  Cities: [
    {
      type: Schema.Types.Mixed,
      ref: City
    }
  ]
});

mongoose.model("FavoriteCities", FavoriteCitiesSchema);

module.exports = mongoose;
