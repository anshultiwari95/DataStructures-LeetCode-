func lastStoneWeight(stones []int) int {
	for len(stones) > 1 {
			
			sort.Slice(stones, func(i, j int) bool {
				return stones[i] > stones[j]
			})
			y := stones[0]
			x := stones[1]
		   stones = stones[2:]
	
			if x != y {
				stones = append(stones, y-x)
			}
		}
	
		if len(stones) == 0 {
			return 0
		}
		return stones[0]
		
	}