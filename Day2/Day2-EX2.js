
var names = ["Odin", "Tor", "Balder", "Loke", "Freja", "Høker", "Idun"];

function makesNamesWithA(arr) {
    let list = arr.filter(function (name) {
        let list = name.toLowerCase();
        return list.includes("a");
    })
    return list;
}
let namesWithA = makesNamesWithA(names);

function reverseName(name) {
    return name.split("").reverse().join("");
}

//# 2 # Implement user defined functions that take callbacks as argument
//EX A
function myFilter(array, callback) {
    return callback(array);
}
console.log(myFilter(names, makesNamesWithA));

//EX B
function myMap(array, callback) {
    return callback(array)
}
console.log(myMap(namesWithA + "", reverseName)); // namesWithA + '' because namesWithA is not recognized as a string without them...

