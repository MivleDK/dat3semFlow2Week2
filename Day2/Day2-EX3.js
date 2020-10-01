let persons = [
    { name: "Hassan", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Boline", phone: "79345" }];

//# 3 # Getting really comfortable with filter and map
//EX A
var numbers = [1, 3, 5, 10, 11];

var numbersNewNoArrow = numbers.map(noArrowsForLearning);

function noArrowsForLearning(x, idx, arr) {
    if (idx < arr.length - 1) {
        return x + arr[idx + 1];
    } else {
        return x;
    }
}
console.log(numbersNewNoArrow); // This is exactly the same as "numbersNew" right below!

var numbersNew = numbers.map((x, idx, arr) =>
    idx < arr.length - 1 ? x + arr[idx + 1] : x //The question mark is a "ternary if-operation"
);
console.log(numbersNew);

/*
load(url == "" ? "1" : url); // This is exactly the same as below:

if (url == "")
    load("1");
else
    load(url);
*/


//EX B
let navString = "<nav>\n" + persons.map(function (person){
    return "\t<a href=\"\">" + person.name + "</a>\n"
}).join("") + "\n</nav>";

console.log(navString);

//EX C
//opgave 3c
let tableString = "<tbody>\n" + persons.map(function (person){
    return "\t<tr>\n\t\t<td>" + person.name + "</td>\n\t\t<td>" + person.phone + "</td>\n\t</tr>\n";
}).join(" ") + "</tbody>\n";
console.log(tableString);
