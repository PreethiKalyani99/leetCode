function cancellable(fn,args, t){
    fn(...args)
    const id = setInterval(() => {
        fn(...args)
    }, t)
    return () => clearInterval(id)
}

const fn = (x) => x * 5
const args = [2]
const t = 20
const cancelTime = 50
const start = performance.now()

let result = []

const log = (...args) => {
    const diff = Math.floor(performance.now() - start)
    result.push({"time": diff, "returned": fn(...args)})
}
const cancel = cancellable(log,args, t)

setTimeout(() => {
    cancel()
}, cancelTime);

setTimeout(() => {
    console.log(result)
}, cancelTime + t + 15);