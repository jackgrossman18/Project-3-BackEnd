const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("../config/passport");
const config = require("../config/config");
const mongoose = require("../models/User");
const User = mongoose.model("User");

router.post("/SignUp", (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    };
    UserSchema.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        UserSchema.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token
            });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatue(401);
      }
    });
  } else {
    res.sendStatue(401);
  }
});

router.post("/LogIn", (req, res) => {
  if (req.body.email && req.body.password) {
    if (user) {
      if (user.password === req.body.password) {
        var payload = {
          id: username.id
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token: token
        });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
