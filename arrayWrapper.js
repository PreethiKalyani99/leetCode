function arrayWrapper(arr){
    if(Array.isArray(arr)){
        return arr.reduce((acc, cur) => acc + arrayWrapper(cur), 0);
    }
    else if(typeof arr === 'number'){
        return arr
    }
    else if(typeof arr === 'string'){
        return `"${arr}"`
    }
}
let input1 = [[1,2,3], [4,5,6]]
let input2 = JSON.stringify([21,4,3])
console.log(arrayWrapper(input1));
console.log(arrayWrapper(input2));

