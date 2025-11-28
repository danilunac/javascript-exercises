const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }

    // Array destructuring syntax
    // if (start > end) [start, end] = [end, start];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let count = 0;
    for (let i = start; i <= end; i++) {
        count += i
    }

    return count;
};

let test = sumAll(1, 10);

console.log(test);



// Do not edit below this line
module.exports = sumAll;
