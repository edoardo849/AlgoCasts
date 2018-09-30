// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const revStr = n
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(revStr) * Math.sign(n);
}

function reverseInt_1(n) {
    const revStr = n.toString().split('').reverse().join('');
    let revInt = parseInt(revStr);

    if(n < 0 ){
        return revInt * -1;
    }

    return revInt;
}

module.exports = reverseInt;
