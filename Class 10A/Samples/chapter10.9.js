// set up button handlers here using event delegation
document.querySelector('main').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName.toLowerCase() == 'button') {
	// retrieve data from button
	let id = e.target.getAttribute('data-id');
	// get painting object for this button
	let p = paintings.find( p => p.id == id);
	// We will be posting the painting id and title to favorites
	let formBody = new FormData();
	formBody.set("id",p.id);
	formBody.set("title",p.title);
	const opt = {
	    method: 'POST',
	    body: formBody
	};
	const url = "http://www.randyconnolly.com/funwebdev/3rd/async-post.php";
	// now let's post via fetch
	fetch(url, opt)
	    .then( resp => resp.json() )
	    .then( data => {
		showSnackBar(`${data. received.title} was added to favorites`);
	    })
	    .catch( error => {
		showSnackBar('Error, favorites not modified');
	    });
    }
    function showSnackBar(message) {
	const snack = document.querySelector("#snackbar");
	snack.textContent = message;
	snack.classList.add("show");
	setTimeout( () => {
	    snack.classList.remove("show");
	}, 3000);
    }
});
