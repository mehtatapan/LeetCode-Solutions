/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let result = ['0'];
    let final = 0;
    let isNeg = false;
    let skip = false;
    if(s[0] === '+'){
        s = s.substring(1,s.length);
        skip = true;
    }
    if(s[0] === '-' && !skip){
        s = s.substring(1,s.length);
        isNeg = true
    }
    for(let i=0;i<s.length;i++){
        if(s[i] >= '0' && s[i] <= '9'){
            result.push(s[i]);
        } else{
            break;
        }
    }
    final = parseInt(result.join(''));
    if(final > Math.pow(2,31)-1) final = isNeg ? Math.pow(2,31) : Math.pow(2,31)-1;
    return isNeg ? -1 * final : final;
};