// my thought process is to start off with the reduce method because we want to reduce it to a single value. Which in this problem is price
const sumOfPrices = items.reduce((sum, item) => sum + item.price, 0) / items.length;
console.log(sumOfPrices);
