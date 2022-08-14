const repeatString = function(str, num) {
    let res = '';
    let j = 0;

    if (num < 0) return 'ERROR';
    
    while (j < num) {
        for (let i = 0; i < str.length; i++) {
                res += str[i];
            }
        j = j + 1;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
