let add = require("./calculator");
test("add numbers in string", function () {
  let numbers1 = "1";
  let expected1 = 1;

  let numbers2 = "2,9";
  let expected2 = 11;

  let numbers3 = "1,5,9,6,9";
  let expected3 = 30;

  let numbers4 = "11,1000";
  let expected4 = 1011;

  let numbers5 = "";
  let expected5 = 0;

  let output1 = add(numbers1);
  let output2 = add(numbers2);
  let output3 = add(numbers3);
  let output4 = add(numbers4);
  let output5 = add(numbers5);

  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
  expect(output3).toEqual(expected3);
  expect(output4).toEqual(expected4);
  expect(output5).toEqual(expected5);
});

test("throw an error for negative numbers", function () {
  function negativeNum() {
    add("1,4,-1");
  }
  expect(negativeNum).toThrow(Error);
});
