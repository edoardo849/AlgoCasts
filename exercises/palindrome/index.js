// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// bad method, but hey
function palindrome(str) {
    sLength = str.length;
    return str
        .split('')
        .every((char,i)=>char === str[sLength-i-1]);
}

module.exports = palindrome;

function palindrome_1(str) {
    let pal = ""
    for(let char of str){
        pal = char + pal;
    }
    return pal === str;
}

function palindrome_2(str) {
    return str.split('')
        .reverse()
        .join('') === str;
}