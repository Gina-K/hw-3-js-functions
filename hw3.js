'use strict';

// Task 1
function splitAndMerge(str, sp) {
  var array = str.split(" ").map(function (elem) {
    return elem.split("").join(sp);
  })
  return array.join(" ");
}

// console.log(splitAndMerge("My name is John"," "));