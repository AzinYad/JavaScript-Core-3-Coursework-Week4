function convertToOldRoman(n) {
  let result = "";
  let arabicNum = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  for (let key in arabicNum) {
    const integer = Math.floor(n / arabicNum[key]);
    result += key.repeat(integer);
    n -= integer * arabicNum[key];
    console.log(arabicNum[key]);
  }
  return result;
}

console.log(convertToOldRoman(2051));
module.exports = convertToOldRoman;
