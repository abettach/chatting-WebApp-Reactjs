const User = require("./models/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false, { message: "Unknown User" });
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result) return done(null, user);
            else return done(null, false, { message: "Invalide password" });
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log('hello')
    User.findOne({ _id: id }, (err, user) => {
      console.log('user=', user)
      done(err, user);
    });
  });
};
