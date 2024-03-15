const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
    const fieldValue = document.querySelector("#username").value;
    if (fieldValue == null || fieldValue == "") {
	// the field was empty. Stop form submission
	e.preventDefault();
	// Now tell the user something went wrong
	console.log("you must enter a username");
    }
});
