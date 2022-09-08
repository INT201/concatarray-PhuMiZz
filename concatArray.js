const { template } = require("@babel/core");

function concatArray(array1, array2) {
  if (
    (array1 === undefined || array1 === null) &&
    (array2 === undefined || array2 === null)
  )
    return undefined;
  else if (array1?.length === 0 && array2?.length === 0) return [];
  else if (array1 === null || array1 === undefined || array1.length === 0)
    return array2;
  else if (array2 === null || array2 === undefined || array2.length === 0)
    return array1;
  else return array1.concat(array2);
}
console.log(concatArray([2], [3]));
module.exports = concatArray;
