'use strict';

function splitAndMerge(str, sp) {
    return str.split(" ").map(function (elem) {
        return elem.split("").join(sp);
    })
        .join(" ");
}

function convert(hash) {
    var arr = [];
    for (var key in hash) {
        arr.push([key, hash[key]]);
    }

    return arr;
}

function toCamelCase(str) {
    return str.replace(/(-|_)(.)/g, function (all, separator, char) {
        return char.toUpperCase();
    })
}

function reverseWords(str) {
    return str.split(" ")
        .map(function (word) {
            return word.split("").reverse().join("");
        })
        .join(" ");
}

function stringExpansion(str) {
    var count = 1;

    function charExpansion(count, char) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(char);
        }
        return arr.join("");
    }

    if (str == "") {
        return str;
    } else {
        return str.split("")
            .map(function (char) {
                if (!+char && +char !== 0) {
                    return charExpansion(count, char);
                } else {
                    count = +char;
                    return "";
                }
            })
            .join("");
    }
}

function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

function transform(baseArray) {
    var newArray = baseArray.map(function (item) {
        return function () {
            return item;
        }
    });
    return newArray;
}

function sum() {
    var arg = [].slice.call(arguments);

    function recursiveSum(arg) {
        if (arg.length === 1) {
            return arg[0];
        } else {
            return arg[0] + recursiveSum(arg.slice(1, arg.length));
        }
    }

    return arguments.length === 0 ? 0 : recursiveSum(arg);
}

function countDown(num) {
    setTimeout(function count(num) {
        if (num >= 0) {
            console.log(num);
            setTimeout(count, 1000, num - 1);
        }
    }, 1000, num);
}

Function.prototype.myBind = function (context) {
    var func = this;
    return function () {
        return func.apply(context, arguments);
    };
}