module.exports = function parseStringAsArray(arraysAsString) {
  return arraysAsString.split(",").map(string => string.trim());
};
