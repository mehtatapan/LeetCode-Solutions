/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let curr = nums[0];
    let count = 1;
    for(i = 1; i < nums.length; i++){
        nums[i] === curr ? count ++ : count--;
        if(count < 0){
            curr = nums[i];
            count = 1;
        }
    }
    return curr;
};