const findTheOldest = function(people) {
    return people.reduce(function(oldestCandidate, person) {
        !person['yearOfDeath'] ? person['yearOfDeath']=(new Date()).getFullYear() :null;
        if ((person.yearOfDeath-person.yearOfBirth)>(oldestCandidate.yearOfDeath-oldestCandidate.yearOfBirth)) {
            oldestCandidate = person;
        }
        return oldestCandidate;
    },{
        name: "Test",
        yearOfBirth: 0,
        yearOfDeath: 0,
      });
};

// Do not edit below this line
module.exports = findTheOldest;
