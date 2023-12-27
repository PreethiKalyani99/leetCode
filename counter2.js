function counter2(n){
    let current = n
    return {
        increment: function(){
            return ++current
        },
        decrement: function(){
            return --current
        },
        reset: function(){
            current = n
            return current
        }
    }
}
const counter = counter2(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())

