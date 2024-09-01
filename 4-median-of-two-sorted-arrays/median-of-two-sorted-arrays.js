/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => a - b);
    if(arr.length % 2 === 0){
        return (arr[(arr.length/2)]+arr[(arr.length/2)-1])/2;
    } else {
        return arr[Math.floor(arr.length/2)]
    }
};