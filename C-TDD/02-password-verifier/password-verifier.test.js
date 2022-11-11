let verifyPassword = require("./password-verifier");

test("verify given password is valid", function () {
  let password1 = "ind6spe0";
  let expected1 = "Password accepted";

  let password2 = null;
  let expected2 = "Password rejected";

  let password3 = "Kldhuyguac";
  let expected3 = "Password rejected";

  let password4 = "962097";
  let expected4 = "Password rejected";

  let password5 = "I6hi";
  let expected5 = "Password rejected";

  let output1 = verifyPassword(password1);
  let output2 = verifyPassword(password2);
  let output3 = verifyPassword(password3);
  let output4 = verifyPassword(password4);
  let output5 = verifyPassword(password5);

  expect(output1).toEqual(expected1);
  expect(output2).toEqual(expected2);
  expect(output3).toEqual(expected3);
  expect(output4).toEqual(expected4);
  expect(output5).toEqual(expected5);
});
