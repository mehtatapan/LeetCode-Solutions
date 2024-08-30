/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = nums.sort((a,b) => a - b);
    nums = Array.from(new Set(nums));
    let currLength = 1;
    let maxLength = 0;

    for(let i = 0; i < nums.length; i++){
        if(i !== 0 && nums[i] - 1 === nums[ i - 1 ]){
             currLength++;
        } else {
            currLength = 1;
        }
        maxLength = Math.max(currLength, maxLength);
    }

    return maxLength;
};