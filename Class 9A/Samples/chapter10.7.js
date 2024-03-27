class Card {
    // constructor replaces the function constructor
    constructor(title, src, content) {
	this.title = title;
	this.src = src;
	this.content = content;
    }
    // class methods replace prototypes
    makeMarkup() {
	return
	`<div class="card">
<img src="${this.src}" alt="${this.title}" >
<div>
<h4>${this.title}<h4>
<P>${this.content}</P>
</div>
</div>`;
    }
    // notice that they use new function property shorthand syntax
    makeElement() {
	let cardDiv = document.createElement('div');
	cardDiv.setAttribute('class','card');
	let img = document.createElement('img');
	img.src = this.src;
	let div = document.createElement('div');
	let h4 = document.createElement('h4');
	h4.innerHTML = this.title;
	let p = document.createElement('p');
	p.innerHTML = this.content;
	div.appendChild(h4);
	div.appendChild(p);
	cardDiv.append(img);
	cardDiv.appendChild(div);
	return cardDiv;
    }
}
// Use the class
const container = document.querySelector("#container");
const c1 = new Card("Van Gogh", "images/019170.jpg", "Self Portrait");
container.append( c1.makeElement() );
