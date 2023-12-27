function chunkArray(arr, size){
    let subArr = []
    for(let i = 0; i < arr.length; i+=size){
        subArr.push(arr.slice(i, i+size))
    }
    return subArr
}
console.log(chunkArray([1,2,3,4,5],2))