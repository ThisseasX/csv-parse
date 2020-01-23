const setRecursively = (path, value, obj) => {
  if (path.length === 1) {
    obj[path[0]] = value;
    return obj;
  }

  const key = path[0];
  const newObj = (obj[key] = obj[key] || {});
  const newPath = path.slice(1);

  return {
    ...obj,
    [key]: { ...obj[key], ...setRecursively(newPath, value, newObj) },
  };
};

const set = (path, value, obj) => {
  path.reduce((acc, cur, i, arr) => {
    return i === arr.length - 1 ? (acc[cur] = value) : (acc[cur] = acc[cur] || {});
  }, obj);

  return obj;
};

const camelCaseToPath = camelCaseString =>
  camelCaseString &&
  camelCaseString.split(/\B(?=[A-Z])/).map(segment => segment.toLowerCase());

const dotNotationToPath = dotNotationString =>
  dotNotationString && dotNotationString.split('.');

const mapToComplex = (obj, customMappings) => {
  return Object.entries(obj).reduce((result, [key, val]) => {
    const path =
      dotNotationToPath(customMappings && customMappings[key]) ||
      camelCaseToPath(key);

    return {
      ...result,
      ...set(path, val, result),
    };
  }, {});
};

module.exports = { mapToComplex };
