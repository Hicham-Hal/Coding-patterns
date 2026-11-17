/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const r = s.split('')
    let sum = 0
    for(let i = 0; i<r.length; i++){
        console.log(r[i])
        switch(r[i]) {
            case 'I':
                if(r[i + 1] === 'V' || r[i + 1] === 'X'){
                    sum -= 1
                }else{
                    sum += 1;
                }
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if(r[i+1] === 'L' || r[i+1] === 'C'){
                    sum -= 10
                }else{
                    sum += 10;
                }
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if(r[i+1] === 'D' || r[i+1] === 'M'){
                    sum -= 100
                }else{
                    sum += 100;
                }
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
            default:
                return "..."
        }
    }
    console.log(sum)
    return sum
};

const s = "MCMXCIV"

romanToInt(s)