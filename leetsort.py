class Solution:
    def sortColors(self, nums: List[int]) -> None:
        
        n = len(nums)
        f1 = 0
        fu = 0
        lu = n-1
        
        while fu <= lu:
            if nums[fu] == 0:
                nums[f1], nums[fu] = nums[fu], nums[f1]
                f1 += 1
                fu += 1
            elif nums[fu] == 1:
                fu += 1
            else:
                nums[fu], nums[lu] = nums[lu], nums[fu]
                lu -= 1
        