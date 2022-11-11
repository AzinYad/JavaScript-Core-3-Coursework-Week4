let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  let num1 = 14;
  let expected1 = "XIV";

  let num2 = 2014;
  let expected2 = "MMXIV";

  let output1 = convertToNewRoman(num1);
  let output2 = convertToNewRoman(num2);

  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
});
