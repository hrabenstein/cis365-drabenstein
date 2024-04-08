const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];

 // your solutions here

 // #1 Add a new function property named total() to each stock object

/*  for (let i=0; i<stocks.length; i++) {
   stocks[i].total = function () { 
     return this.price * this.units ;
    };
 } */


 // #2 - Find the first element whose symbol name is "CAT" (using loop then find)
for (let s of stocks) {
   const element = stocks.find(s => s.symbol == 'CAT');
   console.log(element.name);
}
 

 // #3 - Create a new array that contains stocks whose price is between $0 and $20 (using loop then filter)

const newArray = stocks.filter(s => s.price > 0 && s.price < 20);
console.log(newArray);

 // #4 - Create a new array of strings with <li> elements containing the stock name property (using loop then map)




 // #5 - Sort the array of stocks on symbol
