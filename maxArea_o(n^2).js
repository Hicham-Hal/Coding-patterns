/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    for(let i = 0; i < height.length; i++){
        for(j = 1; j<= height.length-(1+i); j++){

            let area = height[i] > height[i+j]? height[i+j]* j: height[i]*j;
            if(maxArea < area) maxArea = area
        }
    }
    return maxArea

};

const height = [1,8,6,2,5,4,8,3,7]

maxArea(height)