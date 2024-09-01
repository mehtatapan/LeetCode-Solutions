/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    let start = 0, max = 1;
    function expandOutward(left, right){
        while(s[left] === s[right] && left >= 0 && right < s.length){
            if((right - left + 1) > max){
                start = left;
                max = (right - left + 1);
            }
            left--;
            right++;
        }
    }
    for(let i=0; i<s.length;i++){
        expandOutward(i-1,i+1);
        expandOutward(i,i+1);
    }
    return s.substring(start,start+max);
};