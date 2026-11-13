const fibonacci = function(num) {
    if (typeof num !== 'number' || num <= 0 || Number.isNaN(num)) {
        return "OOPS";
    }
    let fib1 = 1;
    let fib2 = 1;
    for(let i = 2; i < num; i++) {
        let temp = fib2;
        fib2 += fib1;
        fib1 = temp;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
