const fibonacci = function(number) {
    if (number < 1) {return 'OOPS'};
    if (number===1 || number===2) {return 1;}
    twoBefore = 1;
    oneBefore = 1;
    total = 1;
    for (i=3; i<=number; i++) {
        twoBefore = oneBefore;
        oneBefore = total;
        total = twoBefore + oneBefore;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
