/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c = 0
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                nums.splice(j, 1)
                j--;
                c += 1;
            }
        }
    }

    const len = nums.length

    const k = nums.length;

    for(let p = len; p < len+c; p++){
        nums.push(`_`)
    }
    return k;
};

const nums = [1,1]

removeDuplicates(nums)