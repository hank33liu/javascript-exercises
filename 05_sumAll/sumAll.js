const sumAll = function(num1,num2) {
  
    if (num1<0||num2<0) {
        return 'ERROR';
    } else if (typeof num1!='number'||typeof num2!='number') {
        return 'ERROR';
    } else if (num1 === num2) {
        return num1;
    }

    let lesserNum, greaterNum;
    if (num1<num2) {
        lesserNum = num1;
        greaterNum = num2;
    } else {
        lesserNum = num2;
        greaterNum = num1;
    }

    let finalSum = 0
    for (i=lesserNum;i<greaterNum+1;i++) {
        finalSum+=i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
