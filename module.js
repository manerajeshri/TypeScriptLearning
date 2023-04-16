"use strict";
// true if the input string is palindrome
// export so we can use it in another file==> 
Object.defineProperty(exports, "__esModule", { value: true });
exports.ispalindrome = void 0;
function ispalindrome(string) {
    return string === string.split('').reverse().join('');
}
exports.ispalindrome = ispalindrome;
