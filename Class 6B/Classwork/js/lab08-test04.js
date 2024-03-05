
// convert comma-separated values into an array
let countries = csv.split(",");
console.log(countries);

// convert array into delimited string
countriesString = countries.join();
console.log(countriesString); //need clarification on how this method works

// check if these are arrays
console.log(Array.isArray(csv));
console.log(Array.isArray(countries));

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Egypt","Eretz Yisroel");
console.log(countries);

// search for element
console.log(countries.includes("Germany"));

// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
newArray = countries.splice(0, 6);
console.log(countries);
console.log(newArray);


console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let city of cities)
{
   if (city.continent == "NA")
   {
      console.log(city);
   }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let gallery of galleries)
{
   if (gallery.location.country == "USA")
   {
      console.log(gallery);
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);
console.log(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colors)
{
   if (color.luminance < 75)
   {
       console.log(color);
   }
}
console.log('---------------------');

// use two nested loops - outer: loop thru colors


console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */





