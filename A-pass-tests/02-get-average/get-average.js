// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numArr = [];
  let average = 0;
  let result = 0;
  numArr = numbers.filter((n) => typeof n === `number`);
  for (let num of numArr) {
    average += num;
  }
  result = average / numArr.length;
  return result;
}
console.log(average([2, "ok", 25]));
module.exports = average;
