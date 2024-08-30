/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var mySet = new Set();
    var ans = [0,0];
    nums.forEach((ele,i)=>{
        mySet.has(target - ele) ? ans = [nums.indexOf(target - ele), i] : mySet.add(ele);
    });
    return ans;
};