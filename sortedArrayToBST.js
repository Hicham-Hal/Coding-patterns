/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

class TreeNode {
    constructor(value, left, right){
        this.value = value
        this.left = left
        this.right = right
    }
}

function createNode(value, left, right){
    return new TreeNode(value, left, right)
}


var sortedArrayToBST = function(nums) {
    const arr = []
    const middle = Math.floor(nums.length/2)
    arr.push(nums[middle])

    for(let i = 1; i <= middle; i++){
        arr.push(nums[middle - i])
        arr.push(nums[middle + i])
    }
    console.log(arr)
};

const nums = [-2, -1, 0, 1, 2]

sortedArrayToBST(nums)