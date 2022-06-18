const removeFromArray = function(array, ...args) {

    args.map(remove => {
        if (array.includes(remove)) {
            array.splice(array.indexOf(remove), 1);
        }
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
