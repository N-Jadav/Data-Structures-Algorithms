function buySellStock1(prices) {
    let res = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            if (prices[j] > prices[i]) {
                res = Math.max(res, (prices[j] - prices[i]))
            }
        }
    }

    return res;

}

function buySellStock(prices) {
    let min = prices[0];
    let res = 0;

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(res, prices[i] - min)

    }
    return res;
}

module.exports = buySellStock;
