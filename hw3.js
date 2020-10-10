'use strict';

// Task 1
function splitAndMerge(str, sp) {
    var array = str.split(" ").map(function (elem) {
        return elem.split("").join(sp);
    })
    return array.join(" ");
}

// console.log(splitAndMerge("My name is John"," "));

// Task 2
function convert(hash) {
    var arr = [];
    for (var key in hash) {
        var propArr = [];
        propArr.push(key);
        propArr.push(hash[key]);
        arr.push(propArr);
    }
    return arr;
}

// console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

//Task 3
function toCamelCase(str) {
    var separator;

    if (str.indexOf("-") !== -1) {
        separator = "-";
    } else if (str.indexOf("_") !== -1) {
        separator = "_";
    }

    var arr = str.split(separator).map(function (word, index) {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });

    return arr.join("");
}

// console.log(toCamelCase("The_stealth_warrior"));

// Task 4
function reverseWords(str) {
    return str.split(" ")
        .map(function (word) {
            return word.split("").reverse().join("");
        })
        .join(" ");
}

// console.log(reverseWords(" A fun little challenge! "));


























































