async function sleep(millis){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis)
        }, millis);
    })
}
let t = Date.now()
console.log(sleep(100).then(() => Date.now() - t))