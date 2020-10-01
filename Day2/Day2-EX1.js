//# 1 # Using existing functions that takes a callback as an argument
//EX A
var names = ["Odin", "Tor", "Balder", "Loke", "Freja", "Høker", "Idun"];

function makesNamesWithA(arr) {
    let list = arr.filter(function (name) {
        let list = name.toLowerCase();
        return list.includes("a");
    })
    return list;
}
let namesWithA = makesNamesWithA(names);
console.log(namesWithA);

// EX B
function reverseName(name) {
    return name.split("").reverse().join("");
}
let namesWithAReversed = namesWithA.map(reverseName);
console.log(namesWithAReversed);
