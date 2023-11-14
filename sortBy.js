function sortBy(arr, fn){
    return arr.slice().sort((a,b) => fn(a) - fn(b))
}
const arr = [3,2,6,1,5,7,3,0]
const fn = (x) => x

console.log(sortBy(arr,fn))