// level {1/2/3}
//Answwer level 2

let n = 6
let arr = []
function generateFib(n){
    for(let i = 0; i < n+1; i++){
        if(i === 0){
            arr.push(0)
        }else if(i === 1){
            arr.push(1)
        }else{
            arr.push(arr[i - 1] + arr[i - 2])
        }
    }
    return arr
}
generateFib(n)
console.log(arr)
console.log(arr.reduce((a,b)=>a+b));


