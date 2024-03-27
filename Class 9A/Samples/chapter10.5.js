function Card(title, src, content) {
    this.title = title;
    this.src = src;
    this.content = content;
}
Card.prototype.makeMarkup = function() {
    return
    `<div class="card">
<img src="${this.src}" alt="${this.title}" >
<div>
<h4>${this.title}</h4>
<p>${this.content}</p>
</div>
</div>`;
};
Card.prototype.makeElement = function() {
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
};
// You use prototype functions as if they were declared in the object
const container = document.querySelector("#container");
const c1 = new Card("Van Gogh", "019170.jpg", "Self Portrait");
container.appendChild( c1.makeElement() );
