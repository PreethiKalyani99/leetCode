const hashmap = {a: 1, b:2, c: 3, d: 4, e:5, f:6, g: 7, h:8, i: 9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z: 26}

function subStrHash(s, p, m, k, hashValue){
    p = BigInt(p)
    m = BigInt(m)
    hashValue = BigInt(hashValue);
    let tmp = 0n, res = 0, pk = 1n, n = s.length

    for (let i = n-1; i >= 0; i--) {
        tmp = (tmp * p + BigInt(hashmap[s[i]])) % m
        if (i + k >= n){
            pk = pk * p % m
        } 
        else {
            tmp = (tmp - (BigInt(hashmap[s[i+k]]) * pk % m) + m) % m
        }
        if(tmp === hashValue){ 
            res = i
        }
    }
    return s.slice(res, res + k)
}
// console.log(subStrHash('xqgfatvtlwnnkxipmipcpqwbxihxblaplpfckvxtihonijhtezdnkjmmk', 22, 51, 41, 9))
console.log(subStrHash('leetcode',7,20,2,0))