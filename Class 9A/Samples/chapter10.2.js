// create array of DOM nodes
const nodes = paintings.map( p => {
    let item = document.createElement("li");
    item.textContent = `${p.title} (${p.artist})`;
    return item;
});
// now add them to document
nodes.forEach( (n) => {
    document.querySelector("#parent").appendChild(n);
});
