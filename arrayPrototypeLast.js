function arrayPrototypeLast(arr){
    if(arr.length === 0){
        return -1
    }
    return arr[arr.length - 1]
}
console.log(arrayPrototypeLast([1,2,3,4,6]))