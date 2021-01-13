//We use this to tell passport we want to use the strategy for handling JSON web tokens
var JwtStrategy = require("passport-jwt").Strategy;

//we then grab the ExtractJwt method
var ExtractJwt = require("passport-jwt").ExtractJwt;

//We grab our user model
const User = require("../models/users.js");

//We grab our keys
var keys = require("./keys");

//empty options hash
var options = {};

//where to extract the request from - built into passport-jwt look at passport-jwt docs
//this will extract the bearer token/JWT from the header
options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("Bearer");

//we want our secret or key so we know what to check against when checking to see if things are signed
options.secretOrKey = keys.secretOrKey;

//we pass in passport to our anonymous function for module exports, we want to tell our passport
//to use a certain strategy - specifically jwt
//the jwt strategt takes in the options hash and a callback (our call back takes the jwt_payload which)
//we have specified
module.exports = (passport) => {
  console.log("hi");
  console.log(options, "options");
  passport.use(
    new JwtStrategy(options, function (jwt_payload, done) {
      console.log(jwt_payload, "jwt");
      User.findByEmail(jwt_payload.email)
        .then((userData) => {
          const user = userData.rows[0];
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.warn(err));
    })
  );
};
