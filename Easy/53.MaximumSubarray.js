/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxCrossingSum = (arr, l, m, h) => {
    let sum = 0;
    let left_sum = 0;
    let right_sum = 0;

    for (var index1 = m; index1 >= l; index1--) {
      sum = sum + arr[index1];

      if(sum > left_sum) {
        left_sum = sum;
      }
    }

    sum = 0;
    for (var index2 = m + 1; index2 <= h; index2++) {
      temp_sum = temp_sum + arr[index2];
      sum = sum + arr[index2];

      if (sum > right_sum) {
        right_sum = sum;
      }
    }

    return left_sum + right_sum; 
  }

  let maxSubArraySum = (arr, l, h) => {
    if(l == h){
      return arr[l];
    }

    let m = Math.floor((l+h)/2);
    let result = Math.max(Math.max(maxSubArraySum(arr, l, m), maxSubArraySum(arr, (m+1), h)), maxCrossingSum(arr, l, m, h));

    return result;
  }

  let n = nums.length;
  let max_num = maxSubArraySum(nums, 0, n-1);

  return max_num;
};