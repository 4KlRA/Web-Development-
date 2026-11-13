const palindromes = function (str) {
    let rev = str.split("").reverse().join("");
    return rev === str;
};

// Do not edit below this line
module.exports = palindromes;
