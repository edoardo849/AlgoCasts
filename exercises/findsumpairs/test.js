const searchSumPairs = require('./index');

test('searchSumPairs is a function', () => {
    expect(typeof searchSumPairs ).toEqual('function');
});

test('finds the target', () => {
    let arr = [1, 5, 8, 23, 12, 2];
    let target = 9;
    let sol = searchSumPairs(arr, target);
    expect(isCorrect(arr, target, sol)).toEqual(
        true
    );
});

function isCorrect(arr, target, sol) {
    return (arr[sol[0]] + arr[sol[1]]) === target;
}