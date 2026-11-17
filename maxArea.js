/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length-1

    while(left < right){
        const water = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(water, max)

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    console.log(max)
    return max
    

};

const height = [1,8,6,2,5,4,8,3,7]

maxArea(height)