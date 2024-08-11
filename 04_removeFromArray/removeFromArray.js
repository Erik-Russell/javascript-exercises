const removeFromArray = function () {
    let result = arguments[0];
    for (i = 1; i < arguments.length + 2; i++) {
        result = result.filter((word) => word !== arguments[i]);
    };
    return result;

}

// Do not edit below this line
module.exports = removeFromArray;
