/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Create a map and search if the traget compliment is there or not,If not then set it in the map.If available the return

var twoSum = function (nums, target) {
  let pairMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (pairMap.has(complement)) {
      return [pairMap.get(complement), i];
    }

    pairMap.set(nums[i], i);
  }
};
