/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    for(let i = 0; i < nums.length; i++){
        if(nums.includes(target) && nums[i] === target){
            return i
        }else if(!nums.includes(target) && nums[i] > target){
            return i
        }
    }
    return nums.length
};

const nums = [1,3,5,6]
const target =2

searchInsert(nums, target)