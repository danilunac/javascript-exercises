const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    // Build a new array with each person's name and how many years they lived
    const oldestToYoungest = people.map((person) => ({
        'name' : person.name,
        'yearsOfLife' : (person.yearOfDeath || currentYear) - person.yearOfBirth,
    })).sort((a, b) => b.yearsOfLife - a.yearsOfLife); // Sort from oldest to youngest

    const oldestPerson = oldestToYoungest[0]; // Pick the one with the highest age
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
