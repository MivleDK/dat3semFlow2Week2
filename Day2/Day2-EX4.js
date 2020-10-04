//# 4 # Reduce
//EX A
var all = ["Hassan", "Peter", "Carla", "Boline"];

let allString = all.join("#");
console.log(allString);

//EX B
const numbers = [2, 3, 67, 33];

function reduceFunc(accumolator, currentIndex) { //parametre som "tæller" og "nuværende indeksværdi"
    return accumolator + currentIndex;
};

var sumOfNumberArr = numbers.reduce(reduceFunc);

console.log(sumOfNumberArr);

//EX C
const members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
]

// ### SOLUTION 1 ### 
let initialValue = 0;

let total = members.reduce(function (accumulator, member) {
    return accumulator + member.age;
}, initialValue)

let average = total / members.length;

console.log(average);

// ### SOLUTION 2 ### 
function avgAge2(accu, member, index, members) {
    if (index === members.length - 1) {
        accu += member.age;
        return accu / members.length;
    }
    return accu + member.age;
}
console.log(members.reduce(avgAge2, 0));

// ### SOLUTION 3 ### 
function getAverageAge(members) {
    return members.reduce((accu, member) => accu + member.age, 0) / members.length;
}

console.log(getAverageAge(members));

// ### SOLUTION 4 ###
const avgAge = members.reduce(function (a, b) {
    return a + b.age;
}, 0) / members.length;

console.log(avgAge);


//EX D
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

let initialValue2 = {};

let totalVoteTally = function (tally, vote) {
    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    return tally;
}

let votesResult = votes.reduce(totalVoteTally, initialValue2);
console.log(votesResult);

//ED D ## SOLUTION 2 ##
result = votes.reduce((accu, candidate) => {
    accu[candidate] = accu[candidate] ? accu[candidate] + 1 : 1;
    return accu;
}, {});

console.log(result);