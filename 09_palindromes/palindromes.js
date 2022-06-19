const palindromes = function (string) {
    let letters = /^[a-zA-Z]+$/;
    let stringArray = [];
    let reverseStringArray = [];

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).match(letters)) {
            stringArray.push(string.charAt(i).toLowerCase());
            reverseStringArray.unshift(string.charAt(i).toLowerCase());
        }
    }
    
    let isPalindrome = stringArray.every(function(element, index) {
        return element === reverseStringArray[index];
    });

    if (isPalindrome) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
