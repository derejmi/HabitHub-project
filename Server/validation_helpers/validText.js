const validText = (str) => {
  //making sure what we pass in is a string and the string isnt completely empty
  //trim takes the whitespace off either side of the string
  //making sure string has vaid text

  return typeof str === "string" && str.trim().length > 0;
};
module.exports = validText;
