/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length == 0) return 0;

  let set = new Set(nums);
  let maxlen = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentnum = num;
      let currentstreak = 1;

      while (set.has(currentnum + 1)) {
        currentnum = currentnum + 1;
        currentstreak = currentstreak + 1;
      }
      maxlen = Math.max(maxlen, currentstreak);
    }
  }
  return maxlen;
};
