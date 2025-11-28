const reverseString = function(word) {
    // return word.split('').reverse().join('');
    
    let reverseWord = [];

    for (let i = 0; i < word.length; i++) {
        reverseWord.push(word[i]);
    }

    return reverseWord.reverse().join('');
};

console.log(reverseString('hola'));

// Do not edit below this line
module.exports = reverseString;
