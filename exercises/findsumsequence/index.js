// Problem: Given a sequence of non-negative integers A and an integer T, return whether there is a *continuous sequence* of A that sums up to exactly T.
// Example:
// [23, 5, 4, 7, 2, 11], 20. Return True because 7 + 2 + 11 = 20
// [1, 3, 5, 23, 2], 8. Return True because 3 + 5 = 8
// [1, 3, 5, 23, 2], 7 Return False because no sequence in this array adds up to 7
// Note: We are looking for an O(N) solution. There is an obvious O(N^2) solution which is a good starting point but is not the final solution we are looking for. It’s important for the code to be as efficient as possible.

// function findSumSequence(list, target) {

//     for (let i = 0; i < list.length; i++){
//         let val = list[i];
//         if ( val > target ) continue;
//         if (val === target) return true;

//         let storage = target - val;        

//         for (let j = i+1; j < list.length; j++) {
//             storage -= list[j];
//             if  ( storage === 0 ) return true;    
//         }
//     }

//     return false;
// }

// sliding window
function findSumSequence(nums, t) {
    let 
        i = 0,
        start = 0,
        sum = 0;

    while (i < nums.length) {

        if ( sum + nums[i] < t ) {
            sum += nums[i];
        } else if (sum + nums[i] === t) {
            return true;
        } else {
            sum += nums[i];

            while (sum > t ) {
                sum -= nums[start];
                start++
            }
            if (sum == t) {
                return true;
            }
        }
        i++;
    }
    return false;
}

// TO TEST:
// Store cumulative sums in an array say 'C' (can be done in O(n) ) and then find two numbers in 'C' whose difference is T using hashmap ( in O(n) ).
// Total time Complexity: O(n)
// Space Complexity:O(n)

module.exports = findSumSequence;