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
    function charsExpansion(count, chars) {
        return chars.split("").map(function (char) {
            var arr = [];
            for (var i = 0; i < count; i++) {
                arr.push(char);
            }
            return arr.join("");
        })
            .join("");
    }

    return str.replace(/(\d*)(\d)([A-Za-z]*)/g, function (all, dumpNumbers, count, chars) {
        return charsExpansion(count, chars);
    });
}

function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

function transform(baseArray) {
    return baseArray.map(function (item) {
        return function () {
            return item;
        }
    });
}

function sum() {
    var arg = [].slice.call(arguments);

    if (!arg.length) {
        return 0;
    }
    return arg[0] + sum.apply(null, arg.slice(1));
}

function countDown(num) {
    setInterval(function () {
        if (num >= 0) {
            console.log(num);
            num--;
        }
    }, 1000, num);
}

Function.prototype.myBind = function (context) {
    var func = this;
    return function () {
        return func.apply(context, arguments);
    };
}