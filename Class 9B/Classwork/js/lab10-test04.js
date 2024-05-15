document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   
   
   const loader1 = document.querySelector("#loader1"); // targeting our loaders from our html
   const loader2 = document.querySelector("#loader2");
   const button = document.querySelector("#fetchButton");
   const main = document.querySelector("main");
   const filters = document.querySelector("#filters");
   const selectCountry = document.querySelector("#countries");
   const selectCity = document.querySelector("#cities");
   const selectContinent = document.querySelector("#continents");
   const selectUser = document.querySelector("#users");

   filters.style.display = "none";
   main.style.display = "none";
   loader1.style.display = "none";
   loader2.style.display = "none";

   button.addEventListener('click',displayFilters);


   async function displayFilters() {
      button.style.display = "none"; // button should now disappear
      loader1.style.display = "block";

      // this will receive a continent promise
      const continentPromise = fetch(continentAPI).then((resp) => resp.json());
      // this returns a promise of the continent API
      // .json puts it in the right format
      // left side of the arrow is the parameter
      // the resp(onse) will be whatever the 'fetch' sent back
      //you can teq do it all in one .then

      const cityPromise = fetch(countrytAPI).then((resp) => resp.json());
      const countryPromise = fetch(cityAPI).then((resp) => resp.json());
      const userPromise = fetch(userAPI).then((resp) => resp.json());

      //await saves you from having to nest your methods one within the next 
      //we don't need another .then now to work with the data we're getting

      const[continents, countries, cities, users] = await Promise.all([
         continentPromise, countryPromise, cityPromise, userPromise
      ]) //the await gave me access to these different lists to be data sets

      loader1.style.display = "none";
      main.style.display = "block";
      filters.style.display = "block"; //these dont hv to be inside the .then bec we have 'await'

      populateSelect(continents, selectContinent, 'name', 'code', 'name');
      populateSelect(countries, selectCountry, 'name', 'iso','name');
      populateSelect(cities, selectCity, 'name','id','name');
      populateSelect(users, selectUser, 'lastName', 'id','lastName');

   }

   function populateSelect(data, select, sortField, valueField, textField){
      //we want to pop the select in a generic way
      const sorted = data.sort((a,b) => a[sortField] < b[sortField] ? -1 : 1 );
      //must use [] and not dot notation so you can pass in a string

      sorted.forEach(d => {
         const opt = document.createElement('option');
         opt.setAttribute('value', d[valueField]); //need to tell it which field to use to set the value
         // (in the hw we will be setting the id of the button)
         opt.textContent = d[textField];
         select.appendChild(opt);  //appending the element to the parent element after it is created
      });

      select.addEventListener('input', loadPhotos);
   }

   async function loadPhotos(e) {
      //stub
      console.log('you have reached loadPhotos',e.target);
   }
});
