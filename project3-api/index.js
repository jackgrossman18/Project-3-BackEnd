const express = require("express");
const parser = require("body-parser");
// const mongoose = require("./models/User");
// const User = mongoose.model("User");
const cors = require("cors");
const passport = require("./config/passport")();
const userController = require("./controllers/users");
const jwt = require("jwt-simple");
const passportJWT = require("passport-jwt");
const config = require("./config/config");
const mongoose = require("./models/User");
const User = mongoose.model("User");
const app = express();

app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(parser.json());
app.use(passport.initialize());

// app.use(express.static("client/build"));
app.use("/users", userController);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index/html");
});
//  Create new user
app.post("/SignUp", (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };
    console.log(newUser);
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token
            });
          } else {
            console.log("Its here");
            res.sendStatus(401);
          }
        });
      } else {
        console.log("No here");
        res.sendStatus(401);
      }
    });
  } else {
    console.log("try here1");
    res.sendStatus(401);
  }
});
// Allow user to Login
app.post("/LogIn", (req, res) => {
  if (req.body.email && req.body.password) {
    let user = {
      email: req.body.email,
      password: req.body.password
    };
  } else {
    console.log("login problem");
    res.sendStatus(401);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      if (user.password === req.body.password) {
        var payload = {
          id: user.id
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token: token
        });
      } else {
        console.log("token problem");
        res.sendStatus(401);
      }
    } else {
      console.log("user problem");
      res.sendStatus(401);
    }
  });
});

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
