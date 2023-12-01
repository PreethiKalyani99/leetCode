// function longestPrefix(s){
//     let str = '', prefix, suffix
//     if(s.length === 0){
//         return str
//     }
   
//     for(let i = 0; i < s.length - 1; i++){
//         prefix = s.slice(0, s.length-1-i)
//         suffix = s.slice(i+1, s.length)

//         if(prefix === suffix){
//             return prefix
//         }
//     }
// }

function longestPrefix(s){
    const lp = Array(s.length).fill(0)
    let maximumPrefix = 0

    for(let i = 1; i < s.length; i++){
        while(maximumPrefix > 0 && s[i] !== s[maximumPrefix]){
            maximumPrefix = lp[maximumPrefix-1]
        }
        if(s[i] === s[maximumPrefix]){
            maximumPrefix++
        }
        lp[i] = maximumPrefix
    }
    return s.substring(0, lp[lp.length - 1])
}
console.log(longestPrefix('aaaaa'))