const reverseString = function (string) {
    let reverseArray = string.split('');
    reverseArray.reverse();
    let output = reverseArray.join('');
    return output;
};

// Do not edit below this line
module.exports = reverseString;
