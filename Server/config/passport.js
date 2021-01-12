//We use this to tell passport we want to use the strategy for handling JSON web tokens
const JwtStrategy = require("passport-jwt").Strategy;

//we then grab the ExtractJwt method
const ExtractJwt = require("passport-jwt").ExtractJwt;

//We grab our user model
const User = "../models/users.js";

//We grab our keys
const keys = require("./keys");

//empty options hash
const options = {};

//where to extract the request from - built into passport-jwt look at passport-jwt docs
//this will extract the bearer token/JWT from the header
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

//we want our secret or key so we know what to check against when checking to see if things are signed
options.secretOrKey = keys.secretOrKey;

//we pass in passport to our anonymous function for module exports, we want to tell our passport
//to use a certain strategy - specifically jwt
//the jwt strategt takes in the options hash and a callback (our call back takes the jwt_payload which)
//we have specified
module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      console.log(jwt_payload);
    })
  );
};
