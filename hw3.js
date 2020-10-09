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
function convert (hash) {
  var arr = [];
  for (var key in hash) {
    var propArr = [];
    propArr.push(key);
    propArr.push(hash[key]);
    arr.push(propArr);
  }
  return arr;
}

console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));