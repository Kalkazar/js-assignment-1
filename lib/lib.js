'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reverse = reverse;
// PROBLEM DESCRIPTION (instructions copied from codwars):
// "Reverse every other word in a given string, then return
// it. Don't forget to include the spaces!"

// (exported) SOLUTION FUNCTION:
function reverse(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 != 0) {
            let reversed = '';
            for (let j = strArr[i].length - 1; j >= 0; j--) {
                reversed += strArr[i][j];
            }
            strArr[i] = reversed;
        }
    }
    return strArr.join(' ');
}