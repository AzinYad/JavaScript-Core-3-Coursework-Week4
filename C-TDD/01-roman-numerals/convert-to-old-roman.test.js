let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  let num1 = 886;
  let expected1 = "DCCCLXXXVI";

  let num2 = 2501;
  let expected2 = "MMLI";

  let output1 = convertToOldRoman(num1);
  let output2 = convertToOldRoman(num2);

  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
});
