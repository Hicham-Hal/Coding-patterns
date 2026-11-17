/**
 * 
 * @param {numbers[]} nums 
 * @param {number} target 
 * @return {number[]}
*/



var sums = function(nums, target){
    const number = []
    for (let i = 0; i< nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(i !== j && nums[i] + nums[j] === target){
                number.push(i, j)
                console.log(number)
                return number
            }
        }
    }
}

nums = [3,2,4, 10, 88, 92, 1]
target = 89

sums(nums, target)