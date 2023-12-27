function generateFibonacciSeries(n){
    let current = 1
    let sum = 0
    let prev = 0
    let result = [prev]

    while(n > 1){
        sum = prev + current
        result.push(sum)
        current = prev
        prev = sum
        n--
    }
    return result
}
console.log(generateFibonacciSeries(5))

//0 1 1 2 3