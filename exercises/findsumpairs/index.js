// Given an integer and an array of integers, 
// return the position of the pairs that, when summed,
// returns the integer
// example: [1,5,8,23,12,2], 10 => [2,5] (8+2)
function searchSumPairs(arr, target) {
    let storage = {};

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] in storage ) {
            return [storage[ arr[i] ], i ];
        }

        storage[target - arr[i]] = i; // 10 - 8 = 2
    }
    return [];
}

module.exports = searchSumPairs;
