// continues from Listing 18.6: outputs 1855 and then 1420
console.log(years[0]);
console.log(years[2]);
// outputs Canada and then United States
console.log(countries[0]);
console.log(countries[5]);
// outputs Thu
console.log(month[0][3]);
// arrays are built-in objects and have a length property defined
// index will be set to 6
let index = countries.length;
// outputs United States again (remember array indexes start at 0)
console.log(countries[index-1]);
// iterating through an array
for (let i = 0; i < years.length; i++) {
    console.log(years[i]);
}
