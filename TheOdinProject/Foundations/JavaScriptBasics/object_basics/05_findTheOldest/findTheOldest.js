
const findTheOldest = function(arr) {
    const getAge = function(person) {
        const endYear = person.yearOfDeath || new Date().getFullYear();
        return endYear - person.yearOfBirth;
    };

    return arr.reduce((oldest, current) => {
        return getAge(current) > getAge(oldest) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
