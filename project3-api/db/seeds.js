const mongoose = require("../models/User");
const User = mongoose.model("User");
const City = mongoose.model("City");
const weatherData = require("./weather-data.json");

UserSchema.remove({})
  .then(() => {
    UserSchema.collection.insert(userData).then(user => {
      console.log(user);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });

CitySchema.remove({})
  .then(() => {
    fetch(weatherData, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res.json())
      .then(res => {
        console.log(res);
        return { uvNum: res };
      })
      .then(res => {
        CitySchema.collection.insert(res).then(weather => {
          console.log(weather);
          process.exit();
        });
      });
  })
  .catch(err => {
    console.log(err);
  });
