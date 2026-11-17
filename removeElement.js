/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let c = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
            i--
            c += 1
        }
    }

    const len = nums.length
    
    const k = nums.length;

    for(let p = len; p< len+c; p++){
        nums.push('_')
    }

    return k
};

nums = [2,3,3,2]
val = 3
removeElement(nums, 3)