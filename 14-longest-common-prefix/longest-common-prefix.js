/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    let prefix = strs[0];
    
    for(let word of strs ) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};