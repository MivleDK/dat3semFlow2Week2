//# 6 # EXTRA Reusable modules with closures
//EX A

var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter }
})();

console.log(add());
console.log(add());
console.log(add());

//EX B

function MyObject(name, age) {
    let setName = name,
        setAge = age

    const getInfo = () => {
        return [setName, setAge].join(", ")
    }

    const setFullName = n => {
        setName = n
    }
    const setFullAge = a => {
        setAge = a
    }

    return {
        getInfo,
        setFullName,
        setFullAge
    }
}

console.log(MyObject("Peter", "45").getInfo());