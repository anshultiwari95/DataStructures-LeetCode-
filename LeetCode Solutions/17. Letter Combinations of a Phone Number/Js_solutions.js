/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  let stringMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [""];

  for (let digit of digits) {
    let temp = [];
    let letters = stringMap[digit];

    for (let combination of result) {
      for (let char of letters) {
        temp.push(combination + char);
      }
    }

    result = temp;
  }

  return result;
};
