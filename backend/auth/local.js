
//passport
const passport = require("passport");

//passport local
const LocalStrategy = require("passport-local").Strategy;

//init
const init = require("./passport");

//helper_functions
const helpers = require("./helper.js")

//calling on database
const { db } = require("../db/index.js");




//calling db to check if user exists and password is good then login user to localStrategy.
passport.use(
  new LocalStrategy((username, password, done) => {
    console.log(username)
    db.one("SELECT * FROM users WHERE username = ${username}", {
        username: username
      })
      .then(user => {
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
