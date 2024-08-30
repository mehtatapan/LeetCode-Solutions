/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while(left <= right){
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];

        if(leftSq > rightSq){
            result[index] = leftSq;
            left++;
        } else{
            result[index] = rightSq;
            right--;
        }
        index--;
    }
    return result;
};