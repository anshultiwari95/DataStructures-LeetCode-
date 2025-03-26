/**
 * @param {number[]} stones
 * @return {number}
 */
//sorting the array at each iteration and then finding the the two largest weight and comapring them
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let y = stones.shift();
    let x = stones.shift();
    if (x != y) {
      stones.push(y - x);
    }
  }
  return stones.length ? stones[0] : 0;
};
