// my thought process is to start off with the reduce method because we want to reduce it to a single value. Which in this problem is price
const sumOfPrices = items.reduce((sum, item) => sum + item.price, 0) / items.length;
console.log(sumOfPrices);

//my thought process is to start off with the filter method because I only want the items that match the criteria I am looking for
const result = items.filter(item => item.price >= 14 && item.price <= 18);
console.log(result);
//my thought process is to start off with the filter method because I only want the items that match the criteria I am looking for
const result2 = items.filter(item => item.currency_code === 'GBP');
console.log(result2);
