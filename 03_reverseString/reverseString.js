const reverseString = function(str) {
    const strArray = str.split("");
    let reversed = '';
    for (let i =str.length-1; i > -1;i--){
        reversed += strArray[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
