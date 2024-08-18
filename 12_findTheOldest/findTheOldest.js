const findTheOldest = function (array) {
    let arrayCopy = Array.from(array)
    arrayCopy.forEach((element) => {
        if (!(typeof element.yearOfDeath === 'number')) {
            const d = new Date();
            element.yearOfDeath = d.getFullYear();
        }
    })

    let isOldest = arrayCopy.sort(function (a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    }).reverse().pop();

    return isOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
