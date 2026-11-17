/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const string = digits.join('')
   const com = Number(string)
   if(digits.length >= 16){
        const bigCom = BigInt(string)
        const bigCombined = bigCom + 1n;
        console.log(bigCombined)
        const arrBig = String(bigCombined).split('').map(Number)
        digits = arrBig
        return digits
        console.log(arrBig)
    }
   console.log(com)
   combined = com + 1
   console.log(combined)
   combined = String(combined).split('').map(Number)
   digits = combined
   console.log(digits)
   return digits
};


digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,4,8]

plusOne(digits)