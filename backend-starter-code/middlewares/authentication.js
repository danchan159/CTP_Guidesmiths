const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models').Users;

function passwordsMatch(passwordSubmitted, storedPassword) {
  return bcrypt.compareSync(passwordSubmitted, storedPassword);
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    Users.findOne({
      where: { email },
    }).then((user) => {
      if(!user) {
        console.log("Incorrect email.")
        return done(null, false);
      }

      if (passwordsMatch(password, user.passwordHash) === false) {
        console.log(password)
        console.log(user.passwordHash)
        console.log("Incorrect password.")
        return done(null, false);
      }

      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.userName);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;