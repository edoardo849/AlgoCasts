const findSumSequence = require('./index');

test('findSumSequence function is defined', () => {
    expect(typeof findSumSequence ).toEqual('function');
});

test('finds the target', () => {
    
    expect(findSumSequence([23, 5, 4, 7, 2, 11], 20)).toEqual(
        true
    );
    expect(findSumSequence([1, 3, 5, 23, 2], 8)).toEqual(
        true
    );
    expect(findSumSequence([1, 3, 5, 23, 2], 7)).toEqual(
        false
    );
});