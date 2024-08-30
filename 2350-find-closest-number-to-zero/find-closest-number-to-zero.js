/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closestNum = nums[0];
    nums.forEach((number) =>{
        if(Math.abs(number) < Math.abs(closestNum) || number === Math.abs(closestNum)){
            closestNum = number;
        }
    });
    return closestNum;
};