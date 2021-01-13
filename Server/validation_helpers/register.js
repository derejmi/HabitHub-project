const Validator = require("validator");
const validText = require("./validText");

//only exporting one function (as a named function)

module.exports = function validateRegistation(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.username, { min: 2, max: 50 })) {
    errors.username = "Username must be between 2 and 50 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email must be valid";
  }

  if (!Validator.isLength(data.password, { min: 4, max: 50 })) {
    errors.password = "Password must be between 4 and 50 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match , please try again";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
