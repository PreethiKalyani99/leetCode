function maximumStringDeletion(s){
    // USING KEY VALUE PAIR (not working) 

    // let stringMatch = {}, count = 0, stringCount = {}
    // let strcpy = s.slice()
    // for(let i = 0; i < s.length; i++){
    //     stringCount[s[i]] = (stringCount[s[i]] || 0) + 1
    // }
    // if(Object.keys(stringCount).length === 1){
    //     return s.length
    // }
    // else{
    //     for(let i = 0; i < Math.floor(strcpy.length/2); i++){
    //         const str1 = strcpy.slice(0, i+1)
    //         const str2 = strcpy.slice(i+1, (2*(i+1)))
    //         if(str1 === str2){
    //             stringMatch[str1] = str1
    //             // strcpy = strcpy.slice(i+1)
    //         }
    //     }
    //     let key = Object.keys(stringMatch)
    //     console.log(key)
    //     for(let k = 0; k < Math.floor(s.length/2); k++){
    //         for(let j = key.length-1; j >= 0; j--){
    //             const keyLength = key[j].length
    //             const str1 = s.slice(0, keyLength)
    //             const str2 = s.slice(keyLength, (2*(keyLength)))
        
    //             if(key[j] === str1 && str1 === str2){
    //                 s = s.slice(keyLength)
    //                 count++
    //             }
    //         }
    //     }
    //     return count + 1
    // }

    // USING DYNAMIC PROGRAMMING (working)
    
    const lcs = new Array(s.length + 1).fill(0).map(() => new Array(s.length + 1).fill(0));
    const dp = new Array(s.length + 1).fill(1);

    for (let i = s.length - 1; i >= 0; --i) {
        for (let j = i + 1; j < s.length; ++j) {
            if (s[i] === s[j]) {
                lcs[i][j] = lcs[i + 1][j + 1] + 1;
            }

            if (lcs[i][j] >= j - i) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        } 
    }
    return dp[0];

}
 
// console.log(maximumStringDeletion('aaaaaaaaa'))
// console.log(maximumStringDeletion('aaabaadeee'))
// console.log(maximumStringDeletion('abcdefgh'))
// console.log(maximumStringDeletion('aaabaaba'))
// console.log(maximumStringDeletion('abababab'))
// console.log(maximumStringDeletion('abcabcdabc'))
console.log(maximumStringDeletion('aabaab'))