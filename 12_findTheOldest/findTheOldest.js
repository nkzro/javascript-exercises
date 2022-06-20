const findTheOldest = function(people) {
    let age = people.map(element => {

        if (element.yearOfDeath !== undefined) {
            return element.yearOfDeath - element.yearOfBirth;
        }
        else {
            let currentDate = new Date();
            console.log(currentDate.getFullYear())
            return currentDate.getFullYear() - element.yearOfBirth;
        }
    });

    let oldest = age.indexOf(Math.max(...age));

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
