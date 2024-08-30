/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    const mid = Math.floor(s.length / 2);
    while(left < mid){
        [s[left], s[(s.length -1) - left]] = [s[(s.length -1) - left], s[left]];
        left++;
    }
    return s;
};