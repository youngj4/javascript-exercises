const convertToCelsius = function (fahrenheit) {
  let converted = (fahrenheit - 32) * (5 / 9);
  let result = Math.round(converted * 10) / 10;
  return result;
};

const convertToFahrenheit = function (celcius) {
  let converted = (celcius * (9 / 5) + 32);
  let result = Math.round(converted * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
