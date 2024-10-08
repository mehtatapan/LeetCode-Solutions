/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sym ={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = 0;
    for(let i = 0; i < s.length; i++){
        if(sym[s[i]] < sym[s[i+1]]){
            result += sym[s[i+1]] - sym[s[i]];
            i++;
        } else {
            result += sym[s[i]];
        }
    }
    return result;
};