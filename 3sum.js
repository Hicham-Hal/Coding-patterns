/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let left = 0
    const arr = []
    let right = nums.length - 1
    nums.sort((a, b) => a - b)
    console.log(nums)
    for(let i = 0; i<nums.length; i++){
        left = 1+i
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum > 0){
                right--
            }else if(sum < 0){
                left++
            }else{
                arr.push([nums[i], nums[left], nums[right]])
            }
        }
    }

    console.log(arr)
    return arr
};

const nums = [-1,0,1,2,-1,-4]

threeSum(nums)