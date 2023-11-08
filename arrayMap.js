function map(arr, fn){
    let result = []
    for(let i = 0; i < arr.length; i++){
       result.push(fn(arr[i],i))
    }
    return result
}
let fn = (a) => {return a*a}
console.log(map([1,2,3,4], fn))