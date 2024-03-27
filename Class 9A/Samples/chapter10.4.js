function Card(title, src, content) {
    this.title = title;
    this.src = src;
    this.content = content;
    // returns the markup for the card as a string
    this.makeMarkup = function() {
	return
	`<div class="card">
  <img src="${this.src}" alt="${this.title}" >
  <div>
    <h4>${this.title}</h4>
    <p>${this.content}</p>
  </div>
</div>`;
    }
    // returns the DOM elements for the entire card
    this.makeElement = function() {
	// create and populate the elements
	let cardDiv = document.createElement('div');
	cardDiv.setAttribute('class','card');
	let img = document.createElement('img');
	img.src = this.src;
	let div = document.createElement('div');
	let h4 = document.createElement('h4');
	h4.innerHTML = this.title;
	let p = document.createElement('p');
	p.innerHTML = this.content;
	// add the child elements to their parents
	div.appendChild(h4);
	div.appendChild(p);
	cardDiv.append(img);
	cardDiv.appendChild(div);
	return cardDiv;
    }
}
// now create a whole bunch of Card objects and display them
const container = document.querySelector("#container");
const c1 = new Card("Van Gogh", "019170.jpg", "Self Portrait");
container.appendChild( c1.makeElement() );
const c2 = new Card("Monet", "017080.jpg", "The Bridge at
Argenteuil");
container.appendChild( c2.makeElement() );
// ...
const c100 = new Card("Monet", "017040.jpg", "Woman with a Parasol");
container.appendChild( c100.makeElement() );
