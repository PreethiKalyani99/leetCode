function reduce(arr, fn, init){
    let value = init
    for(let i = 0; i < arr.length; i++){
        value = fn(value, arr[i])
    }
    return value
}
let fn = (a,b) => {
    return a+b
}
console.log(reduce([1,2,3,4,10], fn, 0))