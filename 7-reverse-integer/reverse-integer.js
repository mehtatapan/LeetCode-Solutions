/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    if(x<0) return (-1)* reverse(-x);
    const result = parseInt(x.toString().split('').reverse().join(''));
    return result < Math.pow(2, 31) - 1 ? result : 0;
};