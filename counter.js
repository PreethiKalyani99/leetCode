var createCounter = function(n) {
    let count = n
    return function() {
        console.log(count)
        return count++
    };
};

const counter = createCounter(10)
counter()
counter()
counter()