/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) return s;

    let start = 0, index, diagonal;
    let diff = 2 * numRows -2;
    let result = [];
    let size = s.length;

    for(let i = 0; i < numRows; i++){
        index = i;
        diagonal = diff - i;
        while(index < size || diagonal < size){
            if(index < size){
                result[start++] = s[index];
            }
            if( diagonal % diff != 0 && diagonal < size && diagonal != index){
                result[start++] = s[diagonal];
            }
            diagonal += diff;
            index += diff;
        }
    }
    return result.join("");
};