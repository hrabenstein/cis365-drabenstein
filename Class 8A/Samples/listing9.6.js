for (let d of imageData) {
    const img = generateImgElement(d);
    // add the key data to the <img> element
    img.dataset.key = d.key;
    parent.appendChild(img);
}
parent.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == "IMG") {
	let key = e.target.dataset.key;
	alert('You clicked image with key=' + key);
    }
});
