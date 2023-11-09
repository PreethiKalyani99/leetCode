function oneFunctionCall(fn){
    let isCalled = false
    let result

    return function(...args){
        if(!isCalled){
            isCalled = true
            result = fn(...args)
            return result
        }
        else{
            result = undefined
            return result
        }
    }
}
let fn = (a,b,c) => a + b + c
let output = oneFunctionCall(fn)
console.log(output(1,2,3))
console.log(output(4,5,6))