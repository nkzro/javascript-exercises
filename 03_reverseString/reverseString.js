const reverseString = function(string) {
    let splitString = [];
    let reverseString = '';

    for (let i = 0; i < string.length; i++) {
        splitString.unshift(string.charAt(i));
    }

    for (let i = 0; i < splitString.length; i++) {
        reverseString += splitString[i];
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
