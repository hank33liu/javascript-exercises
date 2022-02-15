const palindromes = function (input) {
    const inputSimplifiedAsArray = Array.from(input.replace(/[^a-zA-Z]/g, '').toLowerCase());
    const inputSimplifiedAsArrayReversed = inputSimplifiedAsArray.slice().reverse();
    return inputSimplifiedAsArray.join() === inputSimplifiedAsArrayReversed.join();
};

// Do not edit below this line
module.exports = palindromes;
