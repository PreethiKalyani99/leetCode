function isObjectEmpty(obj){
    if(Array.isArray(obj)){
        if(obj.length){
            return false
        }
    }
    const keys = Object.keys(obj)
    if(keys.length){
        return false
    }
    return true
}
let input = [1,3,2,8,4,100]
console.log(isObjectEmpty(input))