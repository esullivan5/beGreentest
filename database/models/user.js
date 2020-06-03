var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs");

var userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  favorites: [],
});

userSchema.plugin(passportLocalMongoose);

userSchema.methods = {
  // This will check if an unhashed password
  // entered by the user can be compared to the hashed password stored in our database
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  // Hash password turns user's password into randomly generated
  // characters so their password isn't exposed inside the database
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define hooks for pre-saving
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
// userSchema.pre("save", function (next) {
//   con
//   if (!this.password) {
//     console.log("models/user.js =======NO PASSWORD PROVIDED=======");
//     next();
//   } else {
//     console.log("models/user.js hashPassword in pre save");

//     this.password = this.hashPassword(this.password);
//     next();
//   }
// });

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
