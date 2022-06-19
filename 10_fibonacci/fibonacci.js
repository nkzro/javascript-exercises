//The argument n refers to the nth position of the fibonacci sequence.
const fibonacci = function(n) {
    Number(n);
    let start = 1;
    let end = 1;
    let next = 0;
    
    if (n < 0) {
        return 'OOPS';
    }
    else if (n <= 2) {
        return 1;
    }
    else if (n > 2) {
        for (let i = 2; i < n; i++) {
            fib(start, end)
            start = end;
            end = next;
            //console.log(next)
        }
        
        return next;
    }

    function fib(start, end) {
        next = start + end;
        return next;
    }
};

// Do not edit below this line
module.exports = fibonacci;
