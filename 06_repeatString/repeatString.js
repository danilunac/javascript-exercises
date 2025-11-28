const repeatString = function(string, num) {
    // return string.repeat(num);

    if (num < 0) {
        return 'ERROR';
    }

    let newString = [];
    for (let i = 0; i < num; i++) {
        newString.push(string);
    }

    return newString.join('');
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
