function cancellable(fn, args, t){
    const id = setTimeout(() => {
        fn(...args)
    }, t);
    return ()=> clearTimeout(id)
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
const cancel = cancellable(log, args, t)

const maxTime = Math.max(t, cancelTime)

setTimeout(() => {
    cancel()
}, cancelTime);

setTimeout(() => {
    console.log(result)
}, maxTime);