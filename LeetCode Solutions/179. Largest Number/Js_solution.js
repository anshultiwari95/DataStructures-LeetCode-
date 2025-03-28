/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums = nums.map(String);
  nums.sort((a, b) => b + a - (a + b));
  if (nums[0] === "0") return "0";

  return nums.join("");
};
