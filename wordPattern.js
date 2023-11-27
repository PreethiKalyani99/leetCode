function wordPattern(pattern, str){
    const strArr = str.split(' ')

    if((pattern.length !== strArr.length) || (pattern === '') || (str === '')){
        return false
    }
    let hash = {}

    for(let i = 0; i < strArr.length; i++){
        if(!hash.hasOwnProperty(pattern[i])){
            hash[pattern[i]] = strArr[i]
        }
        else{
            if(hash[pattern[i]] !== strArr[i]){
                return false
            }
        }
    }
    return true
}
console.log(wordPattern('abba', 'dog cat cat dog'))