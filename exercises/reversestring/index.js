// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strLength = str.length;
    let newString = "";
    for (var i = 0; i < strLength; i++){
        newString += str.charAt(strLength-i-1);
    }
    return newString;
}


module.exports = reverse_v4;


function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    let reversed = "";
    for (let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

function reverse(str) {
    return str.split('').reduce((acc,char)=>char+acc);
}