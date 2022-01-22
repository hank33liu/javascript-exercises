const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    for (element of array) {
        if (theArgs.includes(element) === false) {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
