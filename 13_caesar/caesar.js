const caesar = function(string, shift) {

    function toUnicode(string) {
        return string.split('').map(function (element) {
            let unicodeArray = element.charCodeAt(0);
            return unicodeArray;
        });
    };

    let newUnicodeArray = [];
    shift = shift % 26;

    toUnicode(string).forEach(element => {
        if (element >= 'A'.charCodeAt(0) && element <= 'Z'.charCodeAt(0)) {
            let shifted = element + shift;

            if (shifted > 'Z'.charCodeAt(0)) {
                let remainder = shifted - 'Z'.charCodeAt(0);
                shifted = 'A'.charCodeAt(0) + remainder - 1;
            }
            else if (shifted < 'A'.charCodeAt(0)) {
                let remainder = 'A'.charCodeAt(0) - shifted;
                shifted = 'Z'.charCodeAt(0) - remainder + 1;
            }
            newUnicodeArray.push(shifted);
        }
        else if (element >= 'a'.charCodeAt(0) && element <= 'z'.charCodeAt(0)) {
            let shifted = element + shift;
            if (shifted > 'z'.charCodeAt(0)) {
                let remainder = shifted - 'z'.charCodeAt(0);
                shifted = 'a'.charCodeAt(0) + remainder - 1;
            }
            else if (shifted < 'a'.charCodeAt(0)) {
                let remainder = 'a'.charCodeAt(0) - shifted;
                shifted = 'z'.charCodeAt(0) - remainder + 1;
            }
            newUnicodeArray.push(shifted);
        }
        else {
            newUnicodeArray.push(element);
        }
    });

    let newStringArray = [];
    newStringArray = newUnicodeArray.map(element => {
        return String.fromCharCode(element);
    });
    return newStringArray.join('');
}    
// Do not edit below this line
module.exports = caesar;
