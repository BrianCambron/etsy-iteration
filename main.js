// my thought process is to start off with the reduce method because we want to reduce it to a single value. Which in this problem is price

const sumOfPrices = items.reduce((sum, item) => sum + item.price, 0) / items.length;
console.log(sumOfPrices);
const avgPrice = `The average price is ${sumOfPrices}`
console.log(avgPrice);
  console.log('\n');

//my thought process is to start off with the filter method because I only want the items that match the criteria I am looking for
const itemsBetween = `Items that cost between $14.00 USD and $18.00 USD:`
console.log(itemsBetween);

const result = items.filter(item => item.price >= 14 && item.price <= 18 && item.currency_code === 'USD');
result.forEach(function(item) {
  console.log(item.title);
})
  console.log('\n');

//my thought process is to start off with the filter method because I only want the items that match the criteria I am looking for
const britItems = items.filter(item => item.currency_code === 'GBP')
britItems.forEach(function(item) {
  console.log(item.title);
});
  console.log('\n');

const woodFind = items.filter(item => item.materials.includes('wood'))
woodFind.forEach(function(item){
  console.log(`${item.title} is made of wood.`);
});
  console.log('\n');

const moreThanEight = items.filter(item => item.materials.length >= 8);

moreThanEight.forEach(function(item) {

  console.log(`${item.title} has ${item.materials.length} materials.`);
  item.materials.forEach(function(item){
    console.log(item);
  });
  console.log('\n');
});


const sellerMade = items.filter(item => item.who_made === 'i_did');
console.log(`${sellerMade.length} were made by their sellers`);
