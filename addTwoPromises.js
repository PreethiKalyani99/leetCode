async function addTwoPromises(promise1, promise2){
    // const [a,b] = await Promise.all([promise1, promise2])

    const a = await promise1
    const b = await promise2
    return a + b
}

let promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 20);
})
let promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(5)
    }, 50);
})

console.log(addTwoPromises(promise1, promise2))