'use strict';
let isPalindrome = function isStringPalindrome(string) {
  return string === string.split('').reverse().join('');
};

let isPalindromicNumber = function isPalindromicNumber(number) {
  return isPalindrome(String(number));
};

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
