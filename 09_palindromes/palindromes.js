const palindromes = function (str) {
    const fwd = Array.from(str).filter(char => {
        const charCode = char.charCodeAt(0);
        return !(charCode >= 32 && charCode <= 47) &&
            !(charCode >= 58 && charCode <= 64) &&
            !(charCode >= 91 && charCode <= 96) &&
            !(charCode >= 123 && charCode <= 126);
    }).join('').toLowerCase();

    const rev = Array.from(str).filter(char => {
        const charCode = char.charCodeAt(0);
        return !(charCode >= 32 && charCode <= 47) &&
            !(charCode >= 58 && charCode <= 64) &&
            !(charCode >= 91 && charCode <= 96) &&
            !(charCode >= 123 && charCode <= 126);
    }).reverse().join('').toLowerCase();
    if (fwd === rev) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
