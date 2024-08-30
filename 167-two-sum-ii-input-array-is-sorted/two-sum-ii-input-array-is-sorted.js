/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 1;
    let right = numbers.length;
    while(left < right){
        const sum = numbers[left - 1] + numbers[right - 1];
        if(sum === target) return [left, right];
        if(sum < target) left++;
        if(sum > target) right--;
    }
};