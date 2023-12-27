// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @param {number} p
//  * @return {number}
//  */
// var kDivisibleSubarrays = function(nums, k, p) {
//     const root = {};
//     let left = 0, right = 0, res = 0, count = 0;
    
//     while (right < nums.length) {
//         console.log(right,'right=============1')
//         while (right < nums.length && count <= k) {
//             console.log(right,'============2')
//             let pp = root;
//             for (let i = right - 1; i >= left; i--) {

//                 console.log(i,'----------')
//                 if (!pp.hasOwnProperty(nums[i])) {
//                     console.log('-=-=-=-=-=-=-=-=-=-==-=-=-=')
//                     pp[nums[i]] = {};
//                     res++;
//                 }
//                 pp = pp[nums[i]];
//             }
//             if (nums[right] % p === 0)
//                 count++;
//             right++;
//         }
        
//         while (left < right && count > k) {
//             if (nums[left] % p === 0)
//                 count--;
//             left++;
//         }
//     }
    
//     let pp = root;
//     for (let i = right - 1; i >= left; i--) {
//         if (!pp.hasOwnProperty(nums[i])) {
//             pp[nums[i]] = {};
//             res++;
//         }
//         pp = pp[nums[i]];
//     }

//     return res;
    
// };

// function kDivisibleSubarrays(n, k, p){
//     let distinctSubarrays = []
//     let subArrayLength = 0, str
//     for(let i = 0 ; i < n.length; i++){
//         let c = 0
//         for(let j = i; j < n.length; j++){
//             let count = k
//             let temp = n.slice(i,j+1)
//             if(count <= 0){
//                 temp = []
//                 break;
//             }
//             else{
//                 if(temp[temp.length - 1] % p === 0){
//                     c++
//                 }
//                 count = count - c
//                 console.log(count)
//             }
//             str = `/${distinctSubarrays.join('/')}/`
            
//             let tempstr = temp.slice(0).join(',')
//             let regex = new RegExp(`(^${tempstr}/*)|(/${tempstr}$)|(/${tempstr}/)`, 'gm');
//             if((!(str.match(regex))) && (temp.length > 0 && count >= 0)){
//                 distinctSubarrays.push(temp)
//                 subArrayLength++
//             }
//         }
//     }
//     return subArrayLength
// }
function kDivisibleSubarrays(n, k, p) {
    let distinctSubarrays = new Set();

    for (let i = 0; i < n.length; i++) {
        let c = 0

        for (let j = i; j < n.length; j++) {
            let count = k
            let subarray = n.slice(i, j + 1);
            if (n[j] % p === 0) {
                c++
            }
            count = count - c
            let subarrayStr = subarray.join(',');
            if(!distinctSubarrays.has(subarrayStr) && (subarrayStr.length > 0 )&& (count >= 0)){
                distinctSubarrays.add(subarrayStr);
            }
        }
    }

    return distinctSubarrays.size;
}


function kDivisibleSubarraysMod(n, k, p) {
    let distinctSubarrays = new Set();

    for (let i = 0; i < n.length; i++) {
        let c = 0;
        let count = k;

        for (let j = i; j < n.length; j++) {
            if(count >= 0){
                let subarray = n.slice(i, j + 1);
                if (n[j] % p === 0) {
                    count--;
                }
                let subarrayStr = subarray.join(',');
                if(!distinctSubarrays.has(subarrayStr) && (subarrayStr.length > 0 )&& (count >= 0)){
                    distinctSubarrays.add(subarrayStr);
                }
            }
            else{
                break;
            }
        }
    }

    return distinctSubarrays.size;
}



function kDivisibleSubarraysMod2(n, k, p) {
    let distinctSubarrays = {}

    for (let i = 0; i < n.length; i++) {
        let count = k;
        for (let j = i; j < n.length; j++) {
            if (n[j] % p === 0) {
                count--;
            }
            if(count < 0) {
                break;
            }
            const subarray = n.slice(i, j + 1);
            const subarrayStr = subarray.join(',');
            distinctSubarrays[subarrayStr] = subarrayStr
        }
    }

    return Object.keys(distinctSubarrays).length;
}

// console.log(kDivisibleSubarrays([0,0,0,0], 1, 1))
// console.log(kDivisibleSubarrays([2,4,6,8,10], 3,2))
console.log(kDivisibleSubarrays([2,3,3,3,2,3,3,2], 2,2))
console.log(kDivisibleSubarraysMod2([2,3,3,3,2,3,3,2], 2,2))

// console.log(kDivisibleSubarrays([1,2,3,4],4,1))
// console.log(kDivisibleSubarrays([16,1,19,11,3,6],5,20))
// console.log(kDivisibleSubarrays([77,37,81,38,90,60,182,100,12,116,7,10,165,1,81,48,56,134,129,62,16,100,47,138,164,114,34,126,57,97,146,174,163,61,68,32,178,171,200,90,122,141,78,183,9,2,113,75], 14,114))