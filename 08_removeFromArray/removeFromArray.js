const removeFromArray = function(arr, ...itemToRemove) {
    return arr.filter(item => !itemToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

let test = removeFromArray([1, 2, 3, 4], 2, 3, 'nope');
console.log(test);
