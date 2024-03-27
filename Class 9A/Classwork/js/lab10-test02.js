// import the module here
import { getSampleGalleries } from "./gallery";

document.addEventListener("DOMContentLoaded", function() {

   const galleries = getSampleGalleries();

   // you'll be adding code to this <ul> list
   const list = document.querySelector("#galleryList");
    
   // now loop through the sample gallery data calling render and list.appendChild
   galleries.forEach((item) =>{
      console.dir(item);
      let a = item.render(); //really this line and the next can be merged together
      list.appendChild(a);
   });
    

});