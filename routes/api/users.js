var express = require("express");
var router = express.Router();
var auth = require("../../controllers/authController");

// here we arrived with /api/users
// restrict index for logged in user only
//router.get("/", auth.home);
router.post("/fav", (req, res) => {
  console.log(req.body);
  Users.findOneAndUpdate(
    { _id: req.user.id },
    { $push: { favorites: req.body } }
  );
});

router.get("/", function (req, res) {
  console.log("GET API USERS");
  res.json();
});
// route to register page
router.get("/users/register", auth.register);

// route for register action   //     /api/users/register
router.post("/users/register", auth.doRegister);
// route for register action   //     /api/users/register
router.post("register", auth.doRegister); // route for register action   //     /api/users/register
// router.post("*", auth.doRegister);
router.post("users/register", auth.doRegister);
// route to login page
router.get("/login", auth.login);

// route for login action
router.post("/login", auth.doLogin);

// route for logout action
router.get("/logout", auth.logout);

module.exports = router;

// var mongoose = require("mongoose");
// var passport = require("passport");
// var User = require("../database/models/user");
// const router = require("express").Router();
// var userController = {};

// // Post registration
// userController.doRegister = function (req, res) {
//   console.log("-------");
//   console.log(req.body);

//   User.register(
//     new User({ email: req.body.email, password: req.body.password }),
//     req.body.password,
//     function (err, user) {
//       if (err) {
//         return res.render("register", { user: user });
//       }

//       passport.authenticate("local")(req, res, function () {
//         res.redirect("/");
//       });
//     }
//   );
// };

// // route for register action
// router.post("/register", userController.doRegister);

//POST OAUTH
// import passport from 'passport';
// import User from '../sequelize';

// module.exports = app => {
//   app.post('/registerUser', (req, res, next) => {
//     passport.authenticate('register', (err, user, info) => {
//       if (err) {
//         console.error(err);
//       }
//       if (info !== undefined) {
//         console.error(info.message);
//         res.status(403).send(info.message);
//       } else {
//         // eslint-disable-next-line no-unused-vars
//         req.logIn(user, error => {
//           console.log(user);
//           const data = {
//             first_name: req.body.first_name,
//             last_name: req.body.last_name,
//             email: req.body.email,
//             username: user.username,
//           };
//           console.log(data);
//           User.findOne({
//             where: {
//               username: data.username,
//             },
//           }).then(user => {
//             console.log(user);
//             user
//               .update({
//                 first_name: data.first_name,
//                 last_name: data.last_name,
//                 email: data.email,
//               })
//               .then(() => {
//                 console.log('user created in db');
//                 res.status(200).send({ message: 'user created' });
//               });
//           });
//         });
//       }
//     })(req, res, next);
//   });
// };
