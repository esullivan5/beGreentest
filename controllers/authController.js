var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../database/models/user");

var userController = {};

// Post login
userController.doFav = function (req, res) {
  console.log(req);
  User.findOneAndUpdate(
    { _id: req.user.id },
    { $push: { favorites: req.body.favorite } }
  );

  return res.json({ status: "ok" });
};

// Restrict access to root page
userController.home = function (req, res) {
  res.render("index", { user: req.user });
};

// Go to registration page
userController.register = function (req, res) {
  res.render("register");
};

// Post registration
userController.doRegister = function (req, res) {
  console.log({ body: req.body });
  console.log("Do register");
  User.register(
    new User({ username: req.body.email, name: req.body.email }),
    req.body.password,
    function (error, user) {
      if (error) {
        error.status = "fail";
        return res.json(error);
      }

      passport.authenticate("local")(req, res, function () {
        return res.json({ status: "ok", message: "Welcome" });
      });
    }
  );
};

// Go to login page
userController.login = function (req, res) {
  res.render("login");
};

// Post login
userController.doLogin = function (req, res) {
  passport.authenticate("local")(req, res, function () {
    return res.json({ status: "ok", message: "Welcome back" });
  });
};

// logout
userController.logout = function (req, res) {
  req.logout();
  res.redirect("/");
};

module.exports = userController;
