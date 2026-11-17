/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    nums1.splice(m)
    console.log(nums1)
    for(let i = 0; i < n; i++){
        nums1.push(nums2[i])
    }

    nums1.sort((a, b) => a - b)
    
};

nums1 = [1, 3, 3, 5, 5]
m = 2

nums2 = [1]
n = 1

merge(nums1, m, nums2, n)