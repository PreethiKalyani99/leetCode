function filter(arr, fn){
    let filteredArray = []
    arr.forEach((value,i) => {
        if(fn(value,i)){
            filteredArray.push(value)
        }
    });
    return filteredArray
}
let fn = (a) => {return a > 1}
console.log(filter([1,2,3,4], fn))