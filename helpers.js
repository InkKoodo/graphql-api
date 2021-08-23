const filterEmptyArguments = (argsObj) => {
  const argsToArray = Object.entries(argsObj);
  const existFields = argsToArray.filter(([key, value]) => value !== null);
  const arrayToObject = Object.fromEntries(existFields);

  return arrayToObject;
};

module.exports = {
  filterEmptyArguments,
};