/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 모든 순서 비교하여 최대 이익 찾기
  let profit = 0;

  prices.forEach((target, day) => {
    for (let nextDay = day+1; nextDay < prices.length; nextDay++) {
      if (target > prices[nextDay]) return;

      let nextDayPrice = prices[nextDay] - target;

      if (nextDayPrice > profit) profit = nextDayPrice;
    }
  })

  return profit;
};