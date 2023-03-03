//prices[0]는 주식의 가격배열 전체를 의미
function maxProfit(prices) {
    let maxProfit = 0;
    let minBuyPrice = prices[0];

    for(let price of prices){
        if(minBuyPrice < price){
            maxProfit = Math.max(maxProfit, price-minBuyPrice)
        }
        else{
            minBuyPrice = price
        }
    }
    return maxProfit;
}
const test1 = [10,20,50,100,80,250] //240
const test2 = [150,80,60,50,30] //0
console.log(maxProfit(test1))
console.log(maxProfit(test2))