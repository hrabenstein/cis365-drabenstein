
const photos = JSON.parse(content);

const parent = document.querySelector('#parent');

for (let ph of photos) {
   let figure = document.createElement('figure');

   figure.appendChild( createImage(ph) );
   figure.appendChild( createCaption(ph) );

   parent.appendChild(figure);
   
   parent.appendChild(createButton());
   console.log("created button");
}

//create image and set its attributes.
function createImage(photo)
{
   let image =  document.createElement('img');
   image.setAttribute('src','image/'+ photo.filename);
   image.setAttribute('alt', photo.title);
   return image;
}

function createCaption(photo) {
   let caption = document.createElement('figcaption');

   caption.appendChild( createHeader(photo) );
   caption.appendChild( createParagraph(photo) );

   createColorScheme(caption, photo);
   return caption;
}

function createColorScheme(caption, photo) {
   for (let c of photo.colors) {
      let span = document.createElement('span');
      span.style.backgroundColor = c.hex;
      caption.appendChild(span);
   } 
}

function createHeader(photo) {
   let h2 = document.createElement('h2');
   let h2Text = document.createTextNode(photo.title);
   h2.appendChild(h2Text);
   return h2;
}

function createParagraph(photo) {
   let p = document.createElement('p');
   let pText = document.createTextNode(photo.description);
   p.appendChild(pText);
   p.insertAdjacentText('beforeend','HERE IS SOME EXTRA CODE');
   return p;
}

function createButton()
   {
      let b = document.createElement('button');
      b.textContent = 'Click Me';
      b.id = "btn";
      return b;
   }

document.addEventListener('DOMContentLoaded', function() {
      //version 1
   const btn = document.getElementsByTagName("button");
   console.log(btn);
   btn[0].addEventListener("click", function()
   {
      console.log("used an anonymous function");
   });

      //version 2
   document.querySelector("button").addEventListener("click",function(e)
   {
      console.log(e.target.textContent);
      console.log(e.target);
      console.log("a different approach, but same result");
   });
})



// //version 2
// document.querySelector("button").addEventListener("click",function(e)
// {
//    console.log(e.target.textContent);
//    console.log("a different approach, but same result");
// });

//add event logic