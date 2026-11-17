//approach A: brute force

function maxSum(arr, k) {
    let max = -Infinity;

    for(let i =0; i <= arr.length - k; i++){
        let sum = 0


        for(let j = i; j <= i + k; j++){
            sum += arr[j]
        }
        console.log(sum)


        max = Math.max(max, sum)
        console.log('this is max:', max)
    }
    if(max == -Infinity){
        console.log(typeof(max),'infinity')
    }else{
        console.log(typeof(max),max)
    }
    return max
}


const arr = [1,3,4,5,2,5,3,56]

const k = 3


maxSum(arr, k)



//Approach B: with sliding windows

