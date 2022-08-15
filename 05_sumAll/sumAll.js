const sumAll = function(startNum, finishNum) {
    if (typeof startNum !== 'number' || typeof finishNum !== 'number') {
        return 'ERROR';
    }

    if (startNum < 0 || finishNum < 0) return "ERROR";

    if (startNum > finishNum) {
        const temp = startNum;

        startNum = finishNum;
        finishNum = temp;
    }
    
    let sum = 0;
    for (let i = startNum; i <= finishNum; i++ ) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
