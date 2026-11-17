/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs){
    let result = ""
    const fString = strs[0]
    for(let j = 0; j<  fString.length ; j++){
        for(c = 1; c< strs.length; c++){
            if(fString[j] !== strs[c][j]){
                console.log('not match')
                return result
            }
        }
        result += fString[j]
    }
    return result
}

strs = ['flower', 'flow', 'floight', 'fot']

console.log(longestCommonPrefix(strs))