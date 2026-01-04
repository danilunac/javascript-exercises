const getTheTitles = function(arr) {
    // Inmutable version (creates a new array at each step)
    // return arr.reduce((acc, current) => ([
    //   ...acc,
    //   current.title,
    // ]), []);

    // Mutable version (modifies the same array using indexes)
    return arr.reduce((acc, current, index) => {
    acc[index] = current.title;
    return acc;
    }, [])

    // Solution with map()
    // return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
