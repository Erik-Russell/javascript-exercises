const fibonacci = function (num) {
    let n = Number(num);

    let fNMinus2 = 1;

    let fNMinus1 = 1;

    let fN;

    if (n < 0) { return "OOPS" };

    if (n === 0) { return 0 };

    if (n == 1) { return fNMinus2 };

    if (n === 2) { return fNMinus1 };

    if (n > 2) {
        for (let index = 3; index <= n; index++) {
            fN = fNMinus2 + fNMinus1;
            fNMinus2 = fNMinus1;
            fNMinus1 = fN;
        }
        return fN;
    };
};

// Do not edit below this line
module.exports = fibonacci;
