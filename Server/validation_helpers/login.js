const Validator = require("validator");

const validText = require("./validText");
//function which takes in user data ,containing the email and password given to us when a user is
//trying to login and makes sure all of the fields are valid

module.exports = function validateLogin(data) {
  let errors = {};
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  //using the validator library to check if something is an email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //checking if email is empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  //checking if password is empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  //return an error object
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
