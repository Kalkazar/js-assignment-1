"use strict";

var _lib = require("./lib.js");

// Example test cases (copied from codewars)
let testOne = (0, _lib.reverse)("Reverse this string, please!"); // Imported solution function from lib.js

let testTwo = (0, _lib.reverse)("I really don't like reversing strings!");

// Test results logged console:
console.log(testOne === "Reverse siht string, !esaelp");
console.log(testTwo === "I yllaer don't ekil reversing !sgnirts");

// Note that these were the only test cases I was able to copy
// down. Rest assured this solution still passes the 44 other 
// test cases on codewars.