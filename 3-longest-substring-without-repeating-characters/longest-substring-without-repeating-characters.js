/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){
        return s.length;
    }
    let mySet = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    while(right < s.length){
        if(mySet.has(s[right])){
            mySet.delete(s[left]);
            left++;
        } else{
            mySet.add(s[right]);
            max = Math.max(max, mySet.size);
            right++;
        }
    }
    return max;
};