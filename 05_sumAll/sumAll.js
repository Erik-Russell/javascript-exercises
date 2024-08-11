const sumAll = function (a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || arguments.length > 2) {
        return 'ERROR';
    };

    let sum = 0;
    for (i = Math.min(a, b); i < (Math.max(a, b) + 1); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
