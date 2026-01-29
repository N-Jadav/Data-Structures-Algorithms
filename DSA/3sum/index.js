//The 3-Sum problem is a classic algorithmic problem where the objective is to find all unique triplets in an array that sum up to a zero.
// Can be solved by O(n^3). 3 for loops.
// Can be solved by O(n^2). 2 for loops and 1 while loop.
// 2 pointer approach on a sorted array


function threeSum(nums) {
    let res = [];

    // Sort the array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values
                while (left < right && nums[left] === nums[left + 1]) left++;

                // Skip duplicate values
                while (right > left && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;


}

module.exports = threeSum;
