function repeatedStringSequence(str){
    let result = new Set()
    let repeatedString = new Set()

    for(let i = 0; i < str.length; i++){
        let array = str.slice(i, i+10)
        if(!result.has(array)){
            result.add(array)
        }
        else{
            repeatedString.add(array)
        }
    }
    return [...repeatedString]
    // let result = {}, repeatedString = []

    // for(let i = 0; i < str.length - 9; i++){
    //     let array = str.slice(i, i+10)
    //     result[array] = (result[array] || 0) + 1
    // }
    // for(const [key, val] of Object.entries(result)){
    //     if(val > 1){
    //         repeatedString.push(key)
    //     }
    // }
    // return repeatedString
}
console.log(repeatedStringSequence("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))