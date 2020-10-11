'use strict';

function splitAndMerge(str, sp) {
    var array = str.split(" ").map(function (elem) {
        return elem.split("").join(sp);
    })
    return array.join(" ");
}

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