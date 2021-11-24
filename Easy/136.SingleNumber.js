/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let converted = nums.reduce((accu, next) => {
    if(accu[next]) {
      delete accu[next];
    } else {
      accu[next] = 1;
    }

    return accu;
  }, {});

  return Object.keys(converted)[0];
};